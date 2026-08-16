/* voci-controllo.js — il collaudo delle tracce, da fare girare con `node voci-controllo.js`.

   `voci.js` sa quali tracce esistono. Questo sa quali sono venute male.

   Un generatore vocale sbaglia in un modo preciso e ricorrente: taglia. La frase
   parte, e il file finisce prima della fine della parola. All'orecchio è quello
   che fedi ha sentito — "si blocca e non pronuncia la frase intera" — ma a
   occhio, nella cartella, è invisibile: il file c'è, pesa qualcosa, l'app gli
   mette l'altoparlante accanto e il difetto si scopre solo ascoltando 731 volte.

   Qui il difetto si misura, con due prove indipendenti che non si appoggiano
   l'una all'altra:

   1. LA DURATA. Quanto dovrebbe durare una traccia non lo si sa in assoluto, ma
      lo si sa in relativo: le tracce da tre sillabe di questa stessa voce durano
      tutte più o meno uguale. Si prende la mediana dei clip di pari sillabe e si
      guarda chi sta molto sotto. Il metro esce dal corpus stesso, quindi vale
      anche se un giorno la voce cambia o parla più lenta.

   2. LA CODA. Una registrazione finita finisce in silenzio: la voce cala, il
      respiro si chiude, restano alcuni centesimi di nulla. Una registrazione
      tagliata finisce a volume pieno, di netto, in mezzo a una vocale. Si misura
      l'energia degli ultimi 120 millesimi: se è alta, il file è stato reciso.

   Una prova sola sbaglia — una parola davvero brevissima cade nella prima, una
   consonante finale secca può ingannare la seconda. Le due insieme quasi mai:
   quando cadono tutt'e due sullo stesso file, quel file è rotto.

   Non cancella e non tocca nessun mp3. Scrive soltanto `audio/DA-RIFARE.md`
   (l'elenco leggibile) e `audio/da-rifare.json` (per chi rigenera). */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const DIR = __dirname;
const DATA = path.join(DIR, 'data');
const AUDIO = path.join(DIR, 'audio');

/* Sotto questa frazione della mediana di pari sillabe, la traccia è tagliata.
   0.62 è scelto largo di proposito: meglio guardare qualche file sano in più
   che lasciarne uno rotto dentro il corso. */
const SOGLIA_DURATA = 0.62;
/* Fra 0.62 e 0.80 c'è la zona grigia, e serve. Una frase lunga tagliata
   sull'ultima parola perde poco della sua durata totale — resta sopra la prima
   soglia e passerebbe liscia. Chi sta qui dentro con la coda ancora viva non è
   condannato, è da riascoltare. */
const SOGLIA_SOSPETTO = 0.80;
/* Sopra questo volume medio (dBFS) negli ultimi 120 ms, la coda non è silenzio. */
const SOGLIA_CODA_DB = -34;
const CODA_MS = 120;

/* ---------- la stessa chiave di js/audio.js e voci.js ---------- */
function key(lb) {
  return String(lb || '')
    .toLowerCase()
    .replace(/[éèêë]/g, 'e')
    .replace(/[àâä]/g, 'a')
    .replace(/[ìîï]/g, 'i')
    .replace(/[òôö]/g, 'o')
    .replace(/[ùûü]/g, 'u')
    .replace(/['’`]/g, '2')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

/* ---------- leggere le unità, per sapere che cosa dovrebbe dire ogni file ---------- */
const units = [];
const LEB = { addUnit: u => units.push(u), setReference: () => {} };
for (const f of fs.readdirSync(DATA).filter(f => /^unit-.*\.js$/.test(f)).sort()) {
  new Function('LEB', fs.readFileSync(path.join(DATA, f), 'utf8'))(LEB);
}

const testo = new Map();
function add(lb, en, unit, kind) {
  if (!lb || typeof lb !== 'string') return;
  const k = key(lb);
  if (!k || testo.has(k)) return;
  testo.set(k, { key: k, lb: lb, en: en || '', unit: unit, kind: kind });
}
for (const u of units) {
  (u.vocab || []).forEach(v => add(v.lb, v.en, u.order, 'word'));
  (u.phrases || []).forEach(p => {
    add(p.lb, p.en, u.order, 'phrase');
    if (p.reply) add(p.reply, p.replyEn, u.order, 'reply');
  });
  (u.grammar || []).forEach(g => (g.examples || []).forEach(e => add(e.lb, e.en, u.order, 'example')));
  (u.dialogue ? [u.dialogue] : []).forEach(d => (d.lines || []).forEach(l => add(l.lb, l.en, u.order, 'dialogue')));
}

/* ---------- quante sillabe ----------
   In questa traslitterazione le vocali sono a e i o u e nient'altro: 7, 3 e 2
   sono consonanti (7ilo, 3arabe, 2ahwe), e contarle come vocali gonfierebbe di
   una sillaba proprio le parole più libanesi. Un gruppo di vocali di fila è una
   sillaba sola — "beet", "shaay", "ouu" restano una. */
function sillabe(lb) {
  const gruppi = String(lb).toLowerCase().match(/[aeiou]+/g);
  return gruppi ? gruppi.length : 1;
}

/* ---------- le misure ---------- */
function durata(file) {
  const out = execFileSync('ffprobe', [
    '-v', 'error', '-show_entries', 'format=duration',
    '-of', 'default=noprint_wrappers=1:nokey=1', file
  ], { encoding: 'utf8' });
  const d = parseFloat(out.trim());
  return isFinite(d) ? d : 0;
}

/* Volume medio degli ultimi CODA_MS millesimi, in dBFS. Silenzio pieno dà
   -91; una vocale a piena voce sta intorno a -20. ffmpeg scrive volumedetect
   su stderr, non su stdout: si leggono tutt'e due. */
function volumeCoda(file, d) {
  try {
    const r = require('child_process').spawnSync('ffmpeg', [
      '-v', 'info', '-ss', String(Math.max(0, d - CODA_MS / 1000)), '-i', file,
      '-af', 'volumedetect', '-f', 'null', '-'
    ], { encoding: 'utf8' });
    const testo = (r.stderr || '') + (r.stdout || '');
    const m = /mean_volume:\s*(-?[\d.]+) dB/.exec(testo);
    return m ? parseFloat(m[1]) : null;
  } catch (e) {
    return null;
  }
}

/* ---------- passata su tutti i file ----------
   Misurare 731 file costa due lanci di ffmpeg ciascuno, cioè qualche minuto. Le
   misure sono un fatto fisico del file e non cambiano finché il file non cambia,
   quindi si tengono in `audio/misure.json` con peso e data di modifica come
   scontrino: chi non è cambiato non si rimisura. Così cambiare una soglia costa
   un secondo invece di una pausa caffè, ed è quel che permette di tarare le
   soglie guardando i numeri invece che tirando a indovinare. */
const files = fs.readdirSync(AUDIO).filter(f => /\.mp3$/i.test(f)).sort();
if (!files.length) {
  console.log('Nessun mp3 in audio/. Niente da controllare.');
  process.exit(0);
}

const CACHE = path.join(AUDIO, 'misure.json');
let cache = {};
try { cache = JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch (e) { /* prima corsa */ }

const clip = [];
let fatti = 0, misurati = 0;
for (const f of files) {
  const k = f.replace(/\.mp3$/i, '');
  const pieno = path.join(AUDIO, f);
  const t = testo.get(k) || { key: k, lb: k, en: '', unit: 0, kind: 'orfano' };
  const st = fs.statSync(pieno);
  const vecchia = cache[k];
  let m;
  if (vecchia && vecchia.peso === st.size && vecchia.mtime === st.mtimeMs) {
    m = { durata: vecchia.durata, coda: vecchia.coda };
  } else {
    const d = durata(pieno);
    m = { durata: +d.toFixed(3), coda: volumeCoda(pieno, d) };
    misurati++;
  }
  cache[k] = { durata: m.durata, coda: m.coda, peso: st.size, mtime: st.mtimeMs };
  clip.push({
    key: k,
    lb: t.lb,
    en: t.en,
    unit: t.unit,
    kind: t.kind,
    durata: m.durata,
    sillabe: sillabe(t.lb),
    coda: m.coda,
    peso: st.size
  });
  if (++fatti % 100 === 0) process.stderr.write(`  ${fatti}/${files.length}\n`);
}
fs.writeFileSync(CACHE, JSON.stringify(cache), 'utf8');

/* ---------- il metro, preso dal corpus stesso ---------- */
function mediana(v) {
  if (!v.length) return 0;
  const o = [...v].sort((a, b) => a - b);
  const m = o.length >> 1;
  return o.length % 2 ? o[m] : (o[m - 1] + o[m]) / 2;
}

const perSillabe = new Map();
for (const c of clip) {
  if (!perSillabe.has(c.sillabe)) perSillabe.set(c.sillabe, []);
  perSillabe.get(c.sillabe).push(c.durata);
}
/* Con pochi esemplari la mediana di quel gruppo non è un metro affidabile: si
   ripiega sulla retta durata-per-sillaba stimata su tutto il corpus. */
const perSil = mediana(clip.map(c => c.durata / c.sillabe));
const attesa = new Map();
for (const [s, v] of perSillabe) {
  attesa.set(s, v.length >= 8 ? mediana(v) : perSil * s);
}

for (const c of clip) {
  const att = attesa.get(c.sillabe) || perSil * c.sillabe;
  c.attesa = +att.toFixed(3);
  c.rapporto = +(c.durata / att).toFixed(2);
  c.corta = c.rapporto < SOGLIA_DURATA;
  c.scarsa = c.rapporto >= SOGLIA_DURATA && c.rapporto < SOGLIA_SOSPETTO;
  c.codaViva = c.coda !== null && c.coda > SOGLIA_CODA_DB;
  c.rotta = c.corta && c.codaViva;
  c.sospetta = c.scarsa && c.codaViva;
}

const rotte = clip.filter(c => c.rotta).sort((a, b) => a.rapporto - b.rapporto);
const sospette = clip.filter(c => c.sospetta).sort((a, b) => a.rapporto - b.rapporto);
const soloCorte = clip.filter(c => c.corta && !c.codaViva).sort((a, b) => a.rapporto - b.rapporto);

/* ---------- gli elenchi ----------
   Nel json finiscono rotte e sospette insieme, ciascuna col suo grado: chi un
   giorno rigenererà parte dalle rotte, e decide lui se arrivare alle altre. */
fs.writeFileSync(
  path.join(AUDIO, 'da-rifare.json'),
  JSON.stringify(
    rotte.map(r => ({ grado: 'rotta', key: r.key, lb: r.lb, en: r.en, unit: r.unit, kind: r.kind }))
      .concat(sospette.map(r => ({ grado: 'sospetta', key: r.key, lb: r.lb, en: r.en, unit: r.unit, kind: r.kind }))),
    null, 1
  ),
  'utf8'
);

function tabella(righe) {
  return righe.map(r =>
    `| \`${r.key}.mp3\` | ${r.lb} | ${r.en} | ${r.unit} | ${r.durata}s | ${r.attesa}s | ${r.rapporto} | ${r.coda === null ? '?' : r.coda + ' dB'} |`
  ).join('\n');
}
const intestazione =
  '| file | libanese | inglese | unità | dura | attesa | rapporto | coda |\n' +
  '| --- | --- | --- | --- | --- | --- | --- | --- |';

const md = [
  '# Tracce da rifare',
  '',
  'Generato da `node voci-controllo.js`. Non si scrive a mano.',
  '',
  `Controllate **${clip.length}** tracce: **${rotte.length}** rotte, **${sospette.length}** sospette.`,
  '',
  'Una traccia è dichiarata rotta solo quando cadono **tutt\'e due** le prove:',
  `dura meno del ${Math.round(SOGLIA_DURATA * 100)}% di quanto durano le tracce di pari sillabe,`,
  `**e** negli ultimi ${CODA_MS} ms ha ancora voce (sopra ${SOGLIA_CODA_DB} dB) invece del silenzio`,
  'con cui finisce una registrazione arrivata in fondo. Da sola nessuna delle due',
  'basta: parecchie tracce sane di questa voce finiscono di netto perché sono state',
  'rifilate strette, e una parola davvero corta è corta e basta.',
  '',
  '## Rotte — da rigenerare',
  '',
  'Il taglio è netto e misurabile. Come metro: `Sabaa7 el-khéér`, cinque sillabe,',
  'dura 2.26s; `ana bel-khedmé`, cinque sillabe pure lei, ne dura 0.84. La seconda',
  'non è una lettura veloce, è una frase che finisce prima di essere finita.',
  '',
  rotte.length ? intestazione + '\n' + tabella(rotte) : '_Nessuna._',
  '',
  '## Sospette — da riascoltare prima di decidere',
  '',
  `Stanno fra il ${Math.round(SOGLIA_DURATA * 100)}% e il ${Math.round(SOGLIA_SOSPETTO * 100)}% della durata attesa e finiscono con la voce ancora`,
  'aperta. È la forma che prende una frase lunga tagliata sull\'ultima parola: perde',
  'poco della durata totale, quindi non cade nella prima prova. Qui il numero non',
  'decide da solo — ci vuole un orecchio.',
  '',
  sospette.length ? intestazione + '\n' + tabella(sospette) : '_Nessuna._',
  '',
  '## Corte ma chiuse bene — sane',
  '',
  'Durano poco, ma finiscono in silenzio: parole davvero brevi, non tagli.',
  'Elencate per trasparenza, non da rifare.',
  '',
  soloCorte.length ? intestazione + '\n' + tabella(soloCorte) : '_Nessuna._',
  ''
].join('\n');
fs.writeFileSync(path.join(AUDIO, 'DA-RIFARE.md'), md, 'utf8');

console.log(JSON.stringify({
  controllate: clip.length,
  misurateOra: misurati,
  rotte: rotte.length,
  sospette: sospette.length,
  corteMaSane: soloCorte.length,
  durataPerSillaba: +perSil.toFixed(3),
  scritti: ['audio/DA-RIFARE.md', 'audio/da-rifare.json']
}, null, 1));
