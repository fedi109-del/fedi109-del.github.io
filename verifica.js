/* Verifica finale di Lebanese Path, letta da disco. */
const fs = require('fs');
const path = require('path');

/* The folder this script sits in — never a hard-coded path. Written the other way
   round, a check run inside a worktree would quietly grade the main folder instead
   and report that everything is fine while the work in front of you is broken. */
const DIR = __dirname;
const DATA = path.join(DIR, 'data');

const units = [];
const LEB = { addUnit: u => units.push(u), setReference: () => {} };

const files = fs.readdirSync(DATA).filter(f => /^unit-.*\.js$/.test(f)).sort();
const syntax = [];
for (const f of files) {
  try {
    new Function('LEB', fs.readFileSync(path.join(DATA, f), 'utf8'))(LEB);
  } catch (e) {
    syntax.push(f + ': ' + e.message);
  }
}

function loose(s) {
  return String(s || '').toLowerCase()
    .replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[ìîï]/g, 'i')
    .replace(/[òôö]/g, 'o').replace(/[ùûü]/g, 'u').replace(/['’`]/g, '2')
    .replace(/[^a-z0-9\u0600-\u06ff ]/g, ' ').replace(/([aeiou])\1+/g, '$1')
    .replace(/\s+/g, ' ').trim();
}

const problems = [];
const KINDS = ['choice', 'gap', 'build', 'type', 'match', 'conjugate', 'listen'];

for (const u of units) {
  const fail = m => problems.push(u.id + ' — ' + m);
  if (!(u.stage >= 1 && u.stage <= 5)) fail('stage out of range');
  if (typeof u.order !== 'number') fail('order missing');
  if (!u.title || !u.goal) fail('title or goal missing');
  if ((u.grammar || []).length < 2) fail('grammar blocks: ' + (u.grammar || []).length);
  if ((u.vocab || []).length < 10) fail('vocab: ' + (u.vocab || []).length);
  if ((u.phrases || []).length < 4) fail('phrases: ' + (u.phrases || []).length);
  if ((u.drills || []).length < 10) fail('drills: ' + (u.drills || []).length);
  if ((u.quiz || []).length < 8) fail('quiz: ' + (u.quiz || []).length);
  (u.vocab || []).forEach((v, i) => { if (!v.lb || !v.en) fail('vocab ' + i + ' incomplete'); });

  const kinds = new Set();
  const items = (u.drills || []).concat(u.quiz || []);
  items.forEach((d, i) => {
    const where = (i < (u.drills || []).length ? 'drill ' : 'quiz ') + i;
    kinds.add(d.type);
    if (!KINDS.includes(d.type)) return fail(where + ': unknown type ' + d.type);
    if (d.type === 'listen' && !d.lb) fail(where + ': listen needs the Lebanese in lb');
    if (d.type === 'choice' || d.type === 'gap' || d.type === 'listen' ||
        (d.type === 'conjugate' && d.options)) {
      if (!Array.isArray(d.options) || d.options.length < 2) return fail(where + ': needs options');
      if (!Number.isInteger(d.answer) || d.answer < 0 || d.answer >= d.options.length) {
        fail(where + ': answer is not a valid index');
      }
      if (new Set(d.options.map(loose)).size !== d.options.length) fail(where + ': duplicate options');
    } else if (d.type !== 'match' && (typeof d.answer !== 'string' || !d.answer.trim())) {
      fail(where + ': answer must be a non-empty string');
    }
    if (d.type === 'build' && d.tiles && d.tiles.length) {
      const bag = s => loose(s).split(' ').filter(Boolean).sort().join(' ');
      if (bag(d.tiles.join(' ')) !== bag(d.answer)) fail(where + ': tiles do not match the answer');
      /* A distractor is only wrong if it IS one of the answer tiles. `kbiir` next to
         `el-kbiir` is a different tile and a very good trap. */
      const tileSet = d.tiles.map(loose);
      if (d.extra) d.extra.forEach(x => {
        if (tileSet.includes(loose(x))) fail(where + ': distractor "' + x + '" is already a tile');
      });
    }
    if (d.type === 'match' && (!Array.isArray(d.pairs) || d.pairs.length < 3)) fail(where + ': match needs 3+ pairs');
    if (d.type === 'gap') {
      if (!Array.isArray(d.lines)) fail(where + ': gap needs lines');
      else if (d.lines.filter(l => l.blank).length !== 1) fail(where + ': gap needs exactly one blank');
    }
  });
  if (kinds.size < 4) fail('only ' + kinds.size + ' exercise types');
}

/* orders and ids */
const orders = units.map(u => u.order).sort((a, b) => a - b);
const missing = [];
for (let i = 1; i <= 40; i++) if (!orders.includes(i)) missing.push(i);
const dupOrders = orders.filter((o, i) => orders[i + 1] === o);
const ids = new Set(units.map(u => u.id));
if (ids.size !== units.length) problems.push('duplicate unit ids');

/* One word, two spellings across units.
   `loose` is the right tolerance for marking an answer and the wrong one here:
   it throws away vowel length and hyphens, which in this transliteration are not
   decoration but the difference between separate words — `ra7` is the future
   particle and `raa7` is "he went", `ma3` is "with" and `ma3-` is the stem of
   having something on you. Judged by `loose` those pairs look like the same word
   spelled two ways, and four such false alarms in a row is how a check stops
   being read at all.

   So: vowel length is kept, and a trailing dash is kept because it marks a stem.
   Everything a keyboard genuinely varies — case, accents, internal hyphens and
   spaces — is still flattened, so `Sabaa7 el-khéér` next to `sabaa7 el-kheer`
   is still caught. */
const spellingKey = s => String(s || '').toLowerCase()
  .replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[ìîï]/g, 'i')
  .replace(/[òôö]/g, 'o').replace(/[ùûü]/g, 'u').replace(/['’`]/g, '2')
  .replace(/[^a-z0-9-]/g, '')
  .replace(/-(?=.)/g, '')
  .replace(/^2/, '');

const map = {};
for (const u of units) for (const v of u.vocab || []) {
  const k = spellingKey(v.lb);
  (map[k] = map[k] || {});
  (map[k][v.lb] = map[k][v.lb] || []).push(u.order);
}
const clashes = Object.values(map)
  .filter(f => Object.keys(f).length > 1)
  .map(f => Object.entries(f).map(([s, us]) => s + ' (u' + us.join(',u') + ')').join('  vs  '));

/* the qaaf law and the no-Italian law */
/* The qaaf law applies to Lebanese text only, so scan the Lebanese fields and
   nothing else — otherwise every English "question" is a false alarm. */
const latinQ = [];
const italian = [];
for (const u of units) {
  const leb = [];
  (u.vocab || []).forEach(v => leb.push(v.lb));
  (u.phrases || []).forEach(p => { leb.push(p.lb); if (p.reply) leb.push(p.reply); });
  (u.grammar || []).forEach(g => (g.examples || []).forEach(e => leb.push(e.lb)));
  /* The dialogue is Lebanese too, and it is the longest stretch of it in a unit.
     Left out of this list it was the one place a Latin q could survive. */
  if (u.dialogue) (u.dialogue.lines || []).forEach(l => leb.push(l.lb));
  (u.drills || []).concat(u.quiz || []).forEach(d => {
    if (typeof d.answer === 'string') leb.push(d.answer);
    (d.tiles || []).concat(d.extra || [], d.accept || []).forEach(t => leb.push(t));
    (d.pairs || []).forEach(p => leb.push(p[0]));
    (d.lines || []).forEach(l => { if (l.lb) leb.push(l.lb); });
    if (d.type === 'conjugate') (d.options || []).forEach(o => leb.push(o));
    if (d.root) leb.push(d.root);
  });
  leb.filter(Boolean).forEach(s => { if (/q/i.test(s)) latinQ.push(u.id + ': ' + s); });

  const blob = JSON.stringify(u);
  if (/\b(perché|però|quindi|questo|questa|della|nello|essere|verbo|parola|oppure|invece)\b/i.test(blob)) italian.push(u.id);
}

/* The installed app serves itself from the list inside sw.js. If a file exists
   on disk and is loaded by index.html but is missing from that list, everything
   looks fine on the desk and the phone quietly shows a stale or broken app the
   moment it goes offline. So the three lists have to agree. */
const shellProblems = [];
const html = fs.readFileSync(path.join(DIR, 'index.html'), 'utf8');
const swSrc = fs.readFileSync(path.join(DIR, 'sw.js'), 'utf8');

const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
const styles = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map(m => m[1]);
const cached = [...swSrc.matchAll(/^\s*'([^']+)',?\s*$/gm)].map(m => m[1]);

for (const ref of scripts.concat(styles)) {
  if (!fs.existsSync(path.join(DIR, ref))) shellProblems.push('index.html loads a missing file: ' + ref);
  if (!cached.includes(ref)) shellProblems.push('sw.js does not cache: ' + ref);
}
for (const ref of cached) {
  if (ref === './') continue;
  if (!fs.existsSync(path.join(DIR, ref))) shellProblems.push('sw.js caches a file that is not there: ' + ref);
}
for (const must of ['manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png',
                    'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png']) {
  if (!fs.existsSync(path.join(DIR, must))) shellProblems.push('missing: ' + must);
  if (!cached.includes(must)) shellProblems.push('sw.js does not cache: ' + must);
}
/* Every unit file on disk must actually be loaded by the page. */
for (const f of files) {
  if (!scripts.includes('data/' + f)) shellProblems.push('index.html never loads data/' + f);
}

const words = units.reduce((n, u) => n + (u.vocab || []).length, 0);
const phrases = units.reduce((n, u) => n + (u.phrases || []).length, 0);
const exercises = units.reduce((n, u) => n + (u.drills || []).length + (u.quiz || []).length, 0);

console.log(JSON.stringify({
  files: files.length,
  unitsLoaded: units.length,
  missingOrders: missing,
  duplicateOrders: dupOrders,
  words, phrases, exercises,
  syntaxErrors: syntax,
  schemaProblems: problems,
  shellProblems,
  spellingClashes: clashes,
  latinQaaf: latinQ,
  italianFound: italian
}, null, 1));
