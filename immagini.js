/* immagini.js — le fotografie del corso, da fare girare con `node immagini.js`.

   È l'unico file del progetto che tocca la rete, e la tocca una volta sola: qui
   dentro. Le foto vengono scaricate, ritagliate e scritte in `images/`, e da
   quel momento vivono su disco come l'audio. L'app non fa una richiesta di rete
   nemmeno quando le mostra — la quarta legge (doppio clic, niente internet)
   resta intatta perché il traffico avviene al momento di preparare il corso, non
   al momento di studiarlo.

   LA FONTE. Wikimedia Commons. La prima scelta era Openverse, che aggrega venti
   archivi: risponde 403 dopo tre richieste anonime, e l'unico modo di alzare il
   tetto è registrare una chiave, cioè aprire un account a nome di qualcuno —
   cosa che questo script non fa. Commons invece serve chiunque si presenti con
   uno user agent onesto, e per illustrare un vocabolario è perfino la fonte
   migliore: è un archivio nato per illustrare voci di enciclopedia, quindi è
   pieno di fotografie in cui il soggetto è al centro e si capisce che cos'è.
   In più consegna l'immagine già ridimensionata alla larghezza che si chiede,
   così non si scaricano dieci megabyte per farne quaranta chilobyte.

   LE LICENZE. Si prende quel che è libero: CC0, pubblico dominio, CC-BY e
   CC-BY-SA. La share-alike su Commons è la norma, ed escluderla lascerebbe fuori
   la maggior parte delle foto buone. Va detto con precisione che cosa comporta:
   ritagliare un'immagine è adattarla, quindi il ritaglio che finisce in
   `images/` eredita la licenza dell'originale e resta CC-BY-SA. Questo non
   contagia il resto dell'app — un'app che contiene immagini è una raccolta, non
   un'opera derivata da ciascuna — ma obbliga a dire per ogni foto chi l'ha
   fatta e sotto quale licenza. È esattamente quel che fanno `images/CREDITI.md`
   e la schermata dei crediti dentro l'app.

   COSA CERCARE sta in `images/lista.js`, scritto a mano parola per parola.

   Tre passaggi per ogni voce:
     1. si interroga Commons e si ordinano i candidati per quanto il titolo
        somiglia davvero alla parola cercata (con le esclusioni della lista);
     2. si scarica il migliore e lo si ritaglia al formato giusto — quadrato per
        le parole, panoramico per le copertine — riempiendo il riquadro invece di
        deformare l'immagine;
     3. si annota da dove viene.

   Chi c'è già non si riscarica. Per rifare una singola immagine basta cancellare
   il suo file e rilanciare. */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { spawnSync } = require('child_process');

const DIR = __dirname;
const IMG = path.join(DIR, 'images');
const DATA = path.join(DIR, 'data');
const lista = require('./images/lista.js');

/* Le due forme. Le parole stanno dentro una scheda, quindi quadrate; le
   copertine stanno in cima a una lezione, quindi panoramiche. `scarica` è la
   larghezza chiesta a Commons: un filo più del necessario, perché il ritaglio
   toglie da un lato o dall'altro e partire stretti si paga in sfocatura. */
const FORME = {
  parole: { dir: path.join(IMG, 'vocab'), w: 320, h: 320, q: 5, scarica: 640 },
  unita: { dir: path.join(IMG, 'unit'), w: 800, h: 450, q: 6, scarica: 1200 }
};

/* Commons chiede uno user agent che dica chi sei e come raggiungerti. È la sola
   cosa che chiede, ed è giusto dargliela. */
const UA = 'LebanesePath/1.0 (offline Lebanese course; fedi109@gmail.com)';
const API = 'https://commons.wikimedia.org/w/api.php';

/* Quel che non è libero abbastanza per stare dentro un'app che si scarica. */
const LICENZE_NO = /fair use|non-free|no license|copyright|all rights/i;

/* Il veto che vale per tutte le ricerche, senza doverlo ripetere voce per voce.
   Serve a due cose diverse che è comodo tenere insieme.

   La prima è la decenza. Cercando `two people talking` questo archivio ha
   restituito una fotografia in lingerie: nessuna parola della ricerca la
   evocava, ci è arrivata per somiglianza statistica. Dentro un corso di lingua
   una foto così non è un errore di gusto, è un difetto grave, e non può
   dipendere da come è scritta la singola ricerca.

   La seconda è il registro. Per `plate` Commons offre volentieri una ciotola
   Song del dodicesimo secolo: è un piatto, ma è un pezzo da museo, e insegna
   la parola sbagliata. Un archivio da enciclopedia è pieno di stampe, mappe,
   stemmi, francobolli e reperti — immagini *di* una cosa che non sono
   fotografie *della* cosa come la si incontra oggi. */
const VIETATE_SEMPRE = [
  /* decenza */
  'nude', 'nudity', 'naked', 'lingerie', 'underwear', 'bikini', 'topless',
  'breast', 'erotic', 'sexy', 'porn',
  /* non è una fotografia: è la raffigurazione di qualcuno.
     Da qui sono usciti un dipinto cubista per "bottiglia" e un paesaggio
     romantico per la baia di Jounieh — bellissimi, e completamente inutili a
     chi deve riconoscere una bottiglia. */
  'painting', 'oil on canvas', 'watercolour', 'watercolor', 'aquarelle',
  'engraving', 'lithograph', 'woodcut', 'etching', 'drawing', 'sketch',
  'illustration', 'cartoon', 'manuscript', 'illuminated', 'icon of', 'fresco',
  'mosaic of', 'poster', 'postcard',
  /* è un oggetto, ma di un altro mondo: il reperto, non la cosa d'oggi.
     Per "camicia" era arrivata una fibbia di bronzo, per il castello di Byblos
     una vetrina di cocci. */
  'coat of arms', 'heraldry', 'postage stamp', 'banknote of', 'medal',
  'museum', 'archaeological', 'ancient greek', 'ancient roman', 'bc)',
  'century bc', 'artefact', 'artifact', 'excavation', 'antiquities',
  /* non è una fotografia e basta */
  'diagram', 'chart', 'infographic', 'clip art', 'icon set', 'logo of',
  'symbol', 'pictogram', 'svg',
  /* la carta stampata di un altro secolo. Cercando "termometro" era arrivata
     una réclame ottocentesca di termometri clinici: tipograficamente
     bellissima, e come illustrazione della febbre inservibile. */
  'advertisement', 'advert', 'trade card', 'catalogue', 'catalog', 'almanac',
  'title page', 'broadside'
];

/* Prima di quest'anno una fotografia racconta com'era, non com'è. Le foto
   storiche di Commons sono splendide e numerose — la piazza di Deir el Qamar in
   seppia, Broummana in bianco e nero, una famiglia in posa nel 1910 — e in un
   corso di lingua sono tutte fuori posto: insegnano un paese che non si
   incontrerà. Fra il 1950 e il 1995 si penalizza soltanto — una fotografia degli
   anni Settanta mostra un paese ancora riconoscibile, e dove non c'è di meglio
   vale più del vuoto. Prima del 1950 si rifiuta e basta: là dentro non c'è più
   niente che assomigli al Libano di oggi, e il pescato è sempre lo stesso —
   piazze in seppia, famiglie in posa, réclame ottocentesche. È la regola che ha
   finalmente tolto dalla parola «febbre» un volantino del 1879 per termometri
   clinici, sopravvissuto a tre giri di filtri perché nel titolo non c'era
   nessuna delle parole vietate: la sua data, però, la dichiarava. */
const ANNO_MINIMO = 1995;
const ANNO_RIFIUTO = 1950;

/* ---------- rete ---------- */
function dormi(ms) { return new Promise(r => setTimeout(r, ms)); }

function chiedi(url, binario) {
  return new Promise((risolvi, rifiuta) => {
    const req = https.get(url, { headers: { 'User-Agent': UA }, timeout: 30000 }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return risolvi(chiedi(new URL(res.headers.location, url).href, binario));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return rifiuta(new Error('HTTP ' + res.statusCode));
      }
      const pezzi = [];
      res.on('data', d => pezzi.push(d));
      res.on('end', () => {
        const b = Buffer.concat(pezzi);
        risolvi(binario ? b : b.toString('utf8'));
      });
    });
    req.on('timeout', () => { req.destroy(new Error('tempo scaduto')); });
    req.on('error', rifiuta);
  });
}

async function chiediConPazienza(url, binario) {
  let attesa = 3000;
  for (let i = 0; i < 4; i++) {
    try {
      return await chiedi(url, binario);
    } catch (e) {
      if (i === 3) throw e;
      await dormi(attesa);
      attesa *= 2;
    }
  }
}

/* I campi di Commons arrivano in HTML: l'autore è un link, la licenza una
   sigla dentro uno span. Qui si vuole il testo e basta. */
function testoSemplice(s) {
  return String(s || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

/* ---------- cercare ---------- */
async function cerca(q, larghezza) {
  const url = API + '?' + new URLSearchParams({
    action: 'query',
    generator: 'search',
    /* `filetype:bitmap` tiene fuori i disegni vettoriali e i PDF: per insegnare
       una parola serve una fotografia, non un'icona. */
    gsrsearch: 'filetype:bitmap ' + q,
    gsrnamespace: '6',
    gsrlimit: '24',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size',
    /* La larghezza si chiede qui e non si tocca più: il servizio miniature di
       Wikimedia serve le misure che ha già preparato e risponde 400 a tutte le
       altre, quindi l'unico indirizzo che funziona è quello che restituisce
       l'API. Costruirselo a mano sembra funzionare e invece scarica 2 KB di
       pagina d'errore. */
    iiurlwidth: String(larghezza),
    format: 'json',
    formatversion: '2'
  });
  const j = JSON.parse(await chiediConPazienza(url, false));
  return (j.query && j.query.pages) ? j.query.pages : [];
}

/* ---------- scegliere ----------
   Commons ordina per rilevanza sua, che pesa il testo della pagina di
   descrizione. Qui si riordina su quel che conta per una scheda di vocabolario:
   il titolo nomina davvero la cosa, la forma regge il ritaglio, la licenza è
   pulita. Il titolo di Commons è quasi sempre descrittivo — "Arabic coffee
   cups.png" — e questo lo rende un criterio molto più affidabile di quanto
   sarebbe altrove. */
/* Cercare una parola dentro un titolo per sottostringa è il modo più rapido di
   sbagliare, e qui ha sbagliato in grande: `dress` (il vestito) ha pescato dei
   pompieri, perché il titolo diceva *dressed*; `tip` (la mancia) una vecchia via
   col tram; `plate` (il piatto) un altopiano, per via di *plateau*. La parola
   deve stare lì come parola, con qualcosa che non è una lettera prima e dopo. */
function contiene(testo, parola) {
  const i = testo.indexOf(parola);
  if (i < 0) return false;
  const prima = i === 0 ? ' ' : testo[i - 1];
  const dopo = i + parola.length >= testo.length ? ' ' : testo[i + parola.length];
  /* La `s` del plurale non fa di `olive` un'altra parola da `olives`. */
  const codaLecita = !/[a-z]/.test(dopo) || (dopo === 's' && !/[a-z]/.test(testo[i + parola.length + 1] || ' '));
  return !/[a-z]/.test(prima) && codaLecita;
}

function punteggio(p, termini, soggetto, vietate) {
  const info = p.imageinfo && p.imageinfo[0];
  if (!info) return -1;
  const meta = info.extmetadata || {};
  const lic = testoSemplice((meta.LicenseShortName || {}).value);
  if (!lic || LICENZE_NO.test(lic)) return -1;

  const titolo = String(p.title || '').replace(/^File:/, '').replace(/\.[a-z0-9]+$/i, '').toLowerCase();
  const cat = testoSemplice((meta.Categories || {}).value).toLowerCase();
  const testo = titolo + ' ' + cat;
  for (const v of vietate) if (testo.includes(v)) return -1;
  for (const v of VIETATE_SEMPRE) if (testo.includes(v)) return -1;

  /* IL SOGGETTO DEVE STARE NEL TITOLO. È la regola che tiene in piedi tutto il
     resto, e le due versioni precedenti l'avevano sbagliata in due modi opposti.

     La prima accettava una foto se una parola qualsiasi della ricerca compariva
     da qualche parte: per `bakhshiish` — mancia — la ricerca ridotta a "tip
     money" ha pescato una vecchia via col tram, perché nel titolo c'era `tip`.
     La seconda pretendeva la *prima* parola della ricerca, che però non è quasi
     mai il soggetto: in "arabic coffee cup" il soggetto è `coffee`, e `arabic`
     è solo il modo in cui lo si vuole.

     Quindi il soggetto si dichiara, una parola sola, nella lista: è quella che
     deve comparire nel titolo. Commons titola in modo descrittivo — "Arabic
     coffee cups", "Byblos harbour" — perciò il titolo è la dichiarazione di che
     cosa si vede. Le categorie no: accostano cose vicine d'argomento e
     lontanissime d'aspetto, e comparire lì dentro vuol dire essere imparentati
     col vocabolo, non raffigurarlo. Valgono qualche punto, mai il permesso. */
  if (!contiene(titolo, soggetto)) return -1;

  let punti = 20, nelTitolo = 0;
  for (const t of termini) {
    if (contiene(titolo, t)) { punti += 12; nelTitolo++; }
    else if (contiene(cat, t)) punti += 3;
  }
  if (nelTitolo >= 2) punti += 10;

  /* Quanto è vecchia. Commons scrive la data in campi diversi a seconda di come
     è stato caricato il file, e spesso in prosa ("circa 1900"); si cerca la
     prima annata plausibile che compare, e se non ce n'è nessuna non si
     penalizza — l'assenza di data non è una colpa. */
  const quando = testoSemplice((meta.DateTimeOriginal || {}).value) + ' ' +
                 testoSemplice((meta.DateTime || {}).value);
  const anno = (quando.match(/\b(1[89]\d\d|20\d\d)\b/) || [])[1];
  if (anno && Number(anno) < ANNO_RIFIUTO) return -1;
  if (anno && Number(anno) < ANNO_MINIMO) punti -= 30;

  /* Un'immagine molto più stretta o più lunga del riquadro perde metà di sé nel
     ritaglio, e quel che resta di solito non è il soggetto. */
  const forma = punteggio.forma;
  if (info.width && info.height) {
    const suo = info.width / info.height;
    const nostro = forma.w / forma.h;
    punti -= Math.abs(Math.log(suo / nostro)) * 7;
    if (info.width < forma.w || info.height < forma.h) punti -= 20;
  }
  /* A parità di tutto si preferisce la licenza che chiede meno. */
  if (/cc0|public domain/i.test(lic)) punti += 4;
  else if (/^cc by \d/i.test(lic)) punti += 2;
  return punti;
}

/* ---------- il bianco e nero ----------
   Commons è pieno di fotografie storiche del Libano, e sono le prime a uscire
   quando si cerca un paese per nome: Tripoli nel 1920, la strada dei cedri in
   bianco e nero, i terrazzamenti di Ehden visti da un aereo militare. Sono
   documenti magnifici e sono la copertina sbagliata per una lezione di lingua,
   perché insegnano un paese che chi studia non incontrerà.

   La penalità sull'anno non le prende quasi mai: caricate senza data, non
   dichiarano di essere vecchie. Ma lo dichiarano nei pixel. Si misura la
   saturazione media del file scaricato, e sotto la soglia il candidato viene
   scartato e si passa al successivo.

   La soglia è deliberatamente bassa. Il colore da solo non distingue una bella
   foto quasi monocroma — una marina controluce — da un seppia d'archivio, e
   provarci significherebbe buttare via foto buone. Sotto la soglia c'è solo il
   grigio vero, quello che ha esattamente zero colore: lì la condanna è sicura.
   Meglio pochi colpevoli con certezza che molti con qualche innocente in mezzo.

   La misura si fa sui pixel e non col filtro `signalstats`. Quello vorrebbe il
   percorso del file dentro la stringa di un filtro, e su Windows un percorso ha
   dentro `C:` e uno spazio in "libanese app": qualunque modo di proteggerli
   ffmpeg lo legge male e apre un file chiamato `C`. Falliva in silenzio
   restituendo "non misurabile", cioè assolvendo tutti — ed è così che due
   copertine in bianco e nero erano passate lo stesso. Qui ffmpeg riceve il
   percorso come argomento, dove i percorsi non hanno bisogno di protezione, e
   restituisce un francobollo grezzo di 32×32 che si conta in casa.

   La soglia è tarata su file di cui si conosceva già il verdetto, e i due gruppi
   si sono separati da soli: le due copertine in bianco e nero danno 0 e 0,2, e
   la foto a colori più smorta di tutte — una ciotola di farina bianca — dà 7,7.
   In mezzo non c'è niente. 4 sta nel vuoto fra i due, abbastanza sopra il grigio
   da prenderlo sempre e abbastanza sotto la farina da non sfiorare mai una foto
   che il colore ce l'ha, anche poco. */
const SATURAZIONE_MINIMA = 4;

function saturazione(file) {
  const r = spawnSync('ffmpeg', [
    '-v', 'error', '-i', file,
    '-vf', 'scale=32:32', '-pix_fmt', 'rgb24', '-frames:v', '1', '-f', 'rawvideo', '-'
  ], { encoding: 'buffer', maxBuffer: 1 << 20 });
  const px = r.stdout;
  /* Se la misura non riesce non si condanna: un dubbio non è una prova. */
  if (!px || px.length < 3072) return 99;
  let somma = 0;
  for (let i = 0; i < 3072; i += 3) {
    const massimo = Math.max(px[i], px[i + 1], px[i + 2]);
    const minimo = Math.min(px[i], px[i + 1], px[i + 2]);
    somma += massimo - minimo;
  }
  return somma / 1024;
}

/* ---------- ritagliare ----------
   `increase` + `crop` riempie il riquadro e taglia il di più: l'alternativa
   sarebbe deformare o lasciare bande, e una foto schiacciata in una scheda si
   nota subito. Il ritaglio è centrale, che per una foto di soggetto è quasi
   sempre il punto giusto. */
function ritaglia(dentro, fuori, forma) {
  const r = spawnSync('ffmpeg', [
    '-v', 'error', '-y', '-i', dentro,
    '-vf', `scale=${forma.w}:${forma.h}:force_original_aspect_ratio=increase,crop=${forma.w}:${forma.h}`,
    '-q:v', String(forma.q), fuori
  ], { encoding: 'utf8' });
  return r.status === 0 && fs.existsSync(fuori) && fs.statSync(fuori).size > 0;
}

/* ---------- una voce ---------- */
async function prendi(chiave, voce, forma, crediti) {
  const dest = path.join(forma.dir, chiave + '.jpg');
  if (fs.existsSync(dest) && crediti[chiave]) return 'c\'era';

  const termini = voce.q.toLowerCase().split(/\s+/).filter(Boolean);
  const vietate = (voce.no || []).map(s => s.toLowerCase());
  /* Senza `s` dichiarato il soggetto è la prima parola: vale per i luoghi, che
     si chiamano col loro nome ("byblos harbour"), non per gli oggetti. */
  const soggetto = String(voce.s || termini[0]).toLowerCase();
  punteggio.forma = forma;

  /* La ricerca piena, quando trova, dà il risultato più mirato; se non trova
     nulla si accorcia dalla coda, perché le prime parole sono il soggetto e le
     ultime il contorno. */
  /* Non si scende sotto le due parole (a meno che la ricerca ne abbia una sola).
     Accorciare "arabic coffee cup cardamom" fino a "arabic" trova moltissimo e
     non trova niente: qualunque cosa araba passerebbe l'esame. Meglio tornare a
     mani vuote e lasciare il glifo disegnato. */
  const minimo = Math.min(2, termini.length);
  let pagine = [];
  for (let n = termini.length; n >= minimo && !pagine.length; n--) {
    /* Il soggetto resta in ogni giro, anche quando sta in coda alla ricerca e
       l'accorciamento lo taglierebbe via: cercare senza il soggetto è cercare
       un'altra cosa. */
    const parte = termini.slice(0, n);
    if (!parte.includes(soggetto)) parte.unshift(soggetto);
    try {
      pagine = await cerca(parte.join(' '), forma.scarica);
    } catch (e) {
      return 'ricerca fallita: ' + e.message;
    }
  }
  if (!pagine.length) return 'nessun risultato';

  const ordinati = pagine
    .map(p => ({ p: p, punti: punteggio(p, termini, soggetto, vietate) }))
    .filter(x => x.punti > 0)
    .sort((a, b) => b.punti - a.punti);
  if (!ordinati.length) return 'nessun candidato all\'altezza';

  const tmp = path.join(forma.dir, '.tmp-' + chiave);
  for (const { p, punti } of ordinati.slice(0, 8)) {
    const info = p.imageinfo[0];
    const meta = info.extmetadata || {};
    /* La miniatura è già della larghezza chiesta: scaricare l'originale da otto
       megapixel per farne un quadrato di 320 sarebbe scortese verso un archivio
       che non chiede niente per il servizio. La coda `?utm_...` che l'API
       appiccica serve a lei per le statistiche, non a noi. */
    const url = String(info.thumburl || info.url).split('?')[0];
    try {
      const dati = await chiediConPazienza(url, true);
      if (dati.length < 3000) continue;
      fs.writeFileSync(tmp, dati);
      if (saturazione(tmp) < SATURAZIONE_MINIMA) continue;
      if (!ritaglia(tmp, dest, forma)) continue;
      fs.unlinkSync(tmp);
      crediti[chiave] = {
        titolo: String(p.title || '').replace(/^File:/, '').replace(/\.[a-z0-9]+$/i, ''),
        autore: testoSemplice((meta.Artist || {}).value) || 'sconosciuto',
        licenza: testoSemplice((meta.LicenseShortName || {}).value),
        licenzaUrl: testoSemplice((meta.LicenseUrl || {}).value),
        origine: info.descriptionurl || '',
        fonte: 'Wikimedia Commons',
        cercato: voce.q,
        punti: +punti.toFixed(1)
      };
      return 'presa (' + punti.toFixed(0) + ' punti)';
    } catch (e) { /* si passa al prossimo candidato */ }
  }
  try { fs.unlinkSync(tmp); } catch (e) { /* non c'era */ }
  return 'nessun candidato scaricabile';
}

/* ---------- la corsa ---------- */
(async function () {
  for (const f of Object.values(FORME)) fs.mkdirSync(f.dir, { recursive: true });

  const CREDITI = path.join(IMG, 'crediti.json');
  let crediti = {};
  try { crediti = JSON.parse(fs.readFileSync(CREDITI, 'utf8')); } catch (e) { /* prima corsa */ }

  const lavoro = []
    .concat(Object.entries(lista.unita).map(([k, v]) => ['unit-' + k, v, FORME.unita]))
    .concat(Object.entries(lista.parole).map(([k, v]) => [k, v, FORME.parole]));

  const esiti = {};
  let n = 0;
  for (const [chiave, voce, forma] of lavoro) {
    const esito = await prendi(chiave, voce, forma, crediti);
    const capo = esito.split(' (')[0];
    esiti[capo] = (esiti[capo] || 0) + 1;
    process.stdout.write(`[${++n}/${lavoro.length}] ${chiave}: ${esito}\n`);
    fs.writeFileSync(CREDITI, JSON.stringify(crediti, null, 1), 'utf8');
    await dormi(250);
  }

  scriviManifesto(crediti);
  scriviCrediti(crediti);
  scriviMancanti(lavoro, crediti);
  console.log('\n' + JSON.stringify({ esiti: esiti, immagini: Object.keys(crediti).length }, null, 1));
})();

/* ---------- che cosa non si è trovato ----------
   Un giro può finire con "presa 108, nessun candidato 24" e sembrare un
   successo: il numero delle prese è grande, quello dei buchi scorre via nel
   terminale e sparisce. È già successo che la scheda del progetto promettesse
   quaranta copertine mentre sul disco ce n'erano trentadue, e nessuno se ne
   accorgesse — perché il fallimento parziale non lasciava traccia da nessuna
   parte. Adesso la lascia, con lo stesso patto dell'audio: chi manca sta
   scritto, in un file che si può leggere. */
function scriviMancanti(lavoro, crediti) {
  const mancanti = lavoro
    .map(([chiave, voce]) => ({ chiave, voce }))
    .filter(x => !crediti[x.chiave]);
  const md = [
    '# Immagini che non si sono trovate',
    '',
    'Generato da `node immagini.js`. Non si scrive a mano.',
    '',
    `Chieste **${lavoro.length}**, trovate **${lavoro.length - mancanti.length}**, mancano **${mancanti.length}**.`,
    '',
    'Non è un guasto: dove non c\'è una fotografia onesta l\'app mostra il glifo',
    'disegnato, che non finge di raffigurare niente. Serve però saperlo, perché',
    'una voce qui dentro può voler dire due cose diverse — che quella cosa non si',
    'può fotografare, oppure che la ricerca in `images/lista.js` è scritta male.',
    'La seconda si aggiusta.',
    '',
    '| chiave | cercava | soggetto |',
    '| --- | --- | --- |'
  ].concat(mancanti.map(m => `| \`${m.chiave}\` | ${m.voce.q} | ${m.voce.s || m.voce.q.split(' ')[0]} |`)).join('\n');
  fs.writeFileSync(path.join(IMG, 'MANCANTI.md'), md + '\n', 'utf8');
}

/* ---------- il manifesto, con la stessa regola dell'audio ----------
   Niente file, niente immagine. L'app non prova a caricare una foto per vedere
   se c'è: da file:// un caricamento fallito non è leggibile, e resterebbe un
   riquadro rotto. Quel che non è in elenco semplicemente non si mostra, e al suo
   posto resta il glifo disegnato. */
function scriviManifesto(crediti) {
  const chiavi = Object.keys(crediti).sort();
  const testo =
    '/* image-manifest.js — generato da `node immagini.js`, non si tocca a mano.\n' +
    '   Elenca le fotografie presenti in images/. Quel che non è qui dentro non\n' +
    '   viene mostrato: al suo posto resta il glifo disegnato di js/art.js.\n' +
    '   Il secondo oggetto porta i crediti, perché le licenze di Commons vogliono\n' +
    '   il nome dell\'autore e la schermata che lo mostra deve funzionare offline. */\n\n' +
    'window.LEB_IMG = {\n' +
    chiavi.map(k => '  ' + JSON.stringify(k) + ': 1').join(',\n') +
    (chiavi.length ? '\n' : '') +
    '};\n\n' +
    'window.LEB_IMG_CREDITS = ' + JSON.stringify(
      chiavi.map(k => ({
        k: k,
        t: crediti[k].titolo,
        a: crediti[k].autore,
        l: crediti[k].licenza,
        u: crediti[k].origine
      }))) + ';\n';
  fs.writeFileSync(path.join(DATA, 'image-manifest.js'), testo, 'utf8');
}

function scriviCrediti(crediti) {
  const chiavi = Object.keys(crediti).sort();
  const md = [
    '# Da dove vengono le fotografie',
    '',
    'Generato da `node immagini.js`. Non si scrive a mano.',
    '',
    `**${chiavi.length}** immagini, tutte da [Wikimedia Commons](https://commons.wikimedia.org),`,
    'tutte sotto una licenza libera. Ognuna è stata ridimensionata e ritagliata:',
    'il ritaglio è un adattamento, quindi eredita la licenza dell\'originale — le',
    'CC-BY-SA restano CC-BY-SA. La stessa lista vive dentro l\'app, nella schermata',
    'dei crediti, dove la vede chi studia: è la condizione delle licenze, non una',
    'cortesia.',
    '',
    '| immagine | titolo | autore | licenza | originale |',
    '| --- | --- | --- | --- | --- |'
  ].concat(chiavi.map(k => {
    const c = crediti[k];
    const lic = c.licenzaUrl ? `[${c.licenza}](${c.licenzaUrl})` : c.licenza;
    return `| \`${k}\` | ${(c.titolo || '—').replace(/\|/g, '/')} | ${(c.autore || '').replace(/\|/g, '/')} | ${lic} | [fonte](${c.origine}) |`;
  })).join('\n');
  fs.writeFileSync(path.join(IMG, 'CREDITI.md'), md + '\n', 'utf8');
}
