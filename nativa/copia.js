/* copia.js — assembles www/ from the real app one directory up.
   The web app IS the source of truth: nothing is edited here, only copied.
   Excluded on purpose: sw.js (the native shell needs no service worker — the
   files are already on the device), the build/check scripts, and every .md.
   Usage: node copia.js   (from inside nativa/) */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(__dirname, 'www');

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const FILES = ['index.html', 'manifest.webmanifest'];
const DIRS = ['css', 'js', 'data', 'icons', 'images'];

FILES.forEach(function (f) {
  const src = path.join(ROOT, f);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(OUT, f));
});

DIRS.forEach(function (d) {
  const src = path.join(ROOT, d);
  if (fs.existsSync(src)) fs.cpSync(src, path.join(OUT, d), { recursive: true });
});

/* Audio: only the mp3 clips — the DA-DIRE checklist stays out of the package. */
const AUDIO = path.join(ROOT, 'audio');
if (fs.existsSync(AUDIO)) {
  const dst = path.join(OUT, 'audio');
  fs.mkdirSync(dst, { recursive: true });
  fs.readdirSync(AUDIO).forEach(function (f) {
    if (f.endsWith('.mp3')) fs.copyFileSync(path.join(AUDIO, f), path.join(dst, f));
  });
}

let n = 0;
(function count(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (e) {
    if (e.isDirectory()) count(path.join(dir, e.name));
    else n++;
  });
})(OUT);
console.log('www/ pronta: ' + n + ' file.');
