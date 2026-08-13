/* voci.js — la catena dell'audio, da fare girare con `node voci.js`.

   Fa due lavori, sempre in quest'ordine:

   1. Legge tutte le unità e stila l'elenco di ogni cosa che va detta ad alta voce:
      parole, frasi, risposte obbligate, esempi di grammatica, battute di dialogo.
      Lo scrive in `audio/da-dire.json` (per chi genera) e in `audio/DA-DIRE.md`
      (per un essere umano davanti a un microfono).

   2. Guarda quali `.mp3` ci sono davvero nella cartella `audio/` e scrive
      `data/audio-manifest.js`. È quel file che decide dove compaiono gli altoparlanti
      nell'app: niente file, niente pulsante.

   Va rilanciato ogni volta che arrivano tracce nuove o che cambia il testo di
   un'unità. Non cancella e non sovrascrive nessun mp3.

   La chiave di un file è calcolata dalla traslitterazione, con la stessa regola
   che usa `js/audio.js`. Le due funzioni devono restare identiche: se una cambia
   e l'altra no, l'app cerca file che il generatore non ha mai prodotto. */

const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const DATA = path.join(DIR, 'data');
const AUDIO = path.join(DIR, 'audio');

/* ---------- la stessa chiave di js/audio.js ---------- */
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

/* ---------- leggere le unità ---------- */
const units = [];
const LEB = { addUnit: u => units.push(u), setReference: () => {} };
const files = fs.readdirSync(DATA).filter(f => /^unit-.*\.js$/.test(f)).sort();
for (const f of files) {
  new Function('LEB', fs.readFileSync(path.join(DATA, f), 'utf8'))(LEB);
}

/* ---------- raccogliere tutto il parlato ----------
   Una voce sola per chiave: la stessa parola in due unità è una traccia sola.
   `say` è la grafia araba scritta come si pronuncia in libanese, e vince sempre
   su `ar` quando c'è: serve a impedire che un generatore legga قهوة come `qahwa`.
   Chi registra legge comunque la colonna libanese, non l'arabo. */
const lines = new Map();

/* Tre lettere dell'arabo scritto non suonano mai come la loro forma, a Beirut:
   la qaaf è un colpo di glottide, ذ e ظ escono z. Le unità le scrivono giuste
   (è così che il libanese si scrive), ma una macchina le leggerebbe alla
   standard — qahwa, dhawq — cioè la pronuncia che quest'app esiste per evitare.
   Qui la grafia per la macchina viene riscritta come si pronuncia. */
function fonetica(s) {
  return String(s || '')
    /* ق dopo vocale lunga in mezzo alla parola: hamza nuda — سوق diventa سوء */
    .replace(/([^\s][اوي])ق/g, '$1ء')
    /* ogni altra ق: alef con hamza — قهوة diventa أهوة, وقت diventa وأت */
    .replace(/ق/g, 'أ')
    .replace(/[ذظ]/g, 'ز');
}

function add(lb, ar, en, unit, kind, say) {
  if (!lb || typeof lb !== 'string') return;
  const k = key(lb);
  if (!k || lines.has(k)) return;
  lines.set(k, {
    key: k,
    lb: lb,
    say: fonetica(say || ar || ''),
    ar: ar || '',
    en: en || '',
    unit: unit,
    kind: kind
  });
}

for (const u of units) {
  (u.vocab || []).forEach(v => add(v.lb, v.ar, v.en, u.order, 'word', v.say));
  (u.phrases || []).forEach(p => {
    add(p.lb, p.ar, p.en, u.order, 'phrase', p.say);
    if (p.reply) add(p.reply, p.replyAr, p.replyEn, u.order, 'reply', p.replySay);
  });
  (u.grammar || []).forEach(g => (g.examples || []).forEach(e => {
    add(e.lb, e.ar, e.en, u.order, 'example', e.say);
  }));
  (u.dialogue ? [u.dialogue] : []).forEach(d => (d.lines || []).forEach(l => {
    add(l.lb, l.ar, l.en, u.order, 'dialogue', l.say);
  }));
}

const wanted = [...lines.values()].sort((a, b) => a.unit - b.unit || a.key.localeCompare(b.key));

/* ---------- che cosa c'è già ---------- */
if (!fs.existsSync(AUDIO)) fs.mkdirSync(AUDIO);
const onDisk = fs.readdirSync(AUDIO)
  .filter(f => /\.mp3$/i.test(f))
  .map(f => f.replace(/\.mp3$/i, ''));
const have = new Set(onDisk);

const missing = wanted.filter(w => !have.has(w.key));
const orphans = onDisk.filter(k => !lines.has(k));

/* ---------- 1. l'elenco di ciò che manca ---------- */
fs.writeFileSync(
  path.join(AUDIO, 'da-dire.json'),
  JSON.stringify(missing, null, 1),
  'utf8'
);

const md = [
  '# Tracce da registrare',
  '',
  'Generato da `node voci.js`. Non si scrive a mano.',
  '',
  `Servono **${wanted.length}** tracce in tutto, ne mancano **${missing.length}**.`,
  '',
  'Chi registra legge la colonna **libanese**, non l\'arabo: l\'arabo è lì solo per',
  'chi genera con una macchina, e va letto con la pronuncia libanese (la qaaf è un',
  'colpo di glottide, mai `q`).',
  '',
  'Il file va salvato in `audio/` col nome esatto della prima colonna, estensione `.mp3`.',
  '',
  '| nome del file | libanese | inglese | unità |',
  '| --- | --- | --- | --- |'
].concat(
  missing.map(m => `| \`${m.key}.mp3\` | ${m.lb} | ${m.en} | ${m.unit} |`)
).join('\n');
fs.writeFileSync(path.join(AUDIO, 'DA-DIRE.md'), md + '\n', 'utf8');

/* ---------- 2. il manifesto di ciò che c'è ---------- */
const present = wanted.filter(w => have.has(w.key));
const manifest =
  '/* audio-manifest.js — generato da `node voci.js`, non si tocca a mano.\n' +
  '   Elenca le tracce presenti in audio/. Ogni chiave qui dentro fa comparire\n' +
  '   un altoparlante nell\'app; quello che manca resta invisibile. */\n\n' +
  'window.LEB_AUDIO = {\n' +
  present.map(p => '  ' + JSON.stringify(p.key) + ': 1').join(',\n') +
  (present.length ? '\n' : '') +
  '};\n';
fs.writeFileSync(path.join(DATA, 'audio-manifest.js'), manifest, 'utf8');

console.log(JSON.stringify({
  daDire: wanted.length,
  presenti: present.length,
  mancanti: missing.length,
  orfani: orphans,
  scritti: ['audio/da-dire.json', 'audio/DA-DIRE.md', 'data/audio-manifest.js']
}, null, 1));
