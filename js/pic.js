/* pic.js — the eye of the app.

   The same pact the speaker buttons keep, kept for photographs: what is not on
   the manifest is never asked for. Opened from file:// a failed image request
   is unreadable to script — no status code, no useful error — so probing the
   disk is not an option, and a page that probes ends up dotted with broken
   frames. `data/image-manifest.js` is written from disk by `node immagini.js`,
   and it is the only thing consulted here.

   Where there is no photograph the drawn glyph in `art.js` stays. That is a
   deliberate outcome and not a failure: a course with 140 honest photographs
   and 60 drawings is worth more than one where every word has a picture and a
   third of them are of something else. Several Lebanese words — the good, the
   favour, the excuse — have no face at all, and the moment a page starts
   putting decoration where meaning should be, the learner stops looking at the
   pictures, which costs more than the pictures were worth.

   The photographs are on loan. They come from Wikimedia Commons under free
   licences, and every one of those licences asks for the author's name. That is
   why `credits()` exists and why the app carries the list offline: an
   attribution that needs a working connection is not an attribution. */

window.Pic = (function () {

  var manifest = window.LEB_IMG || null;
  var credits = window.LEB_IMG_CREDITS || [];

  /* Identical to the key in audio.js and in voci.js. The three consonant
     numbers 7, 3 and 2 survive: they are consonants here. */
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

  function known(name) {
    if (!manifest) return false;
    return Object.prototype.hasOwnProperty.call(manifest, name);
  }

  /* ---------- the two kinds ----------
     A word is square and lives inside a row; a unit is wide and sits at the top
     of a lesson. They are kept apart because they are cropped differently on
     disk, and asking for the wrong one would stretch it. */

  function wordName(lb) { return key(lb); }
  function unitName(id) { return 'unit-' + id; }

  function hasWord(lb) { return known(wordName(lb)); }
  function hasUnit(id) { return known(unitName(id)); }

  function wordSrc(lb) { return 'images/vocab/' + wordName(lb) + '.jpg'; }
  function unitSrc(id) { return 'images/unit/' + unitName(id) + '.jpg'; }

  /* ---------- putting one on the page ----------
     `alt` is empty on purpose. These photographs illustrate a word that is
     already written beside them in three scripts; a screen reader announcing
     "photograph of bread" after the row has already said bread would be reading
     the same thing twice. The image is decoration in the strict sense — the
     meaning is in the text — and decoration is what alt="" is for. */
  /* `pigra` decides whether the browser may defer this one. Thumbnails deep in a
     word list should be deferred — there can be twenty of them below the fold.
     The photograph at the head of a lesson must not be: it is the first thing on
     the screen and the thing the whole page is arranged around, so deferring it
     buys nothing and costs the one image the reader is actually waiting for. */
  function img(src, cls, pigra) {
    var im = new Image();
    im.className = cls;
    im.alt = '';
    im.loading = pigra ? 'lazy' : 'eager';
    im.decoding = 'async';
    /* Even from the manifest a file can go missing — a half-finished checkout,
       a sync that dropped it. If it does, it leaves quietly. */
    im.addEventListener('error', function () {
      if (im.parentNode) im.parentNode.removeChild(im);
    });
    im.src = src;
    return im;
  }

  /* Hangs a thumbnail on a vocabulary row, and says whether it did — the caller
     needs to know so it can lay the row out with a picture column or without. */
  function attachWord(host, lb) {
    if (!hasWord(lb)) return false;
    var im = img(wordSrc(lb), 'v-pic', true);
    /* If the file turns out not to be there after all, the row has to lose its
       picture column as well as its picture — otherwise it keeps a 46-pixel
       hole where the thumbnail was going to be, and a hole reads as something
       broken, which is worse than the plain row it should have been. */
    im.addEventListener('error', function () { host.classList.remove('has-pic'); });
    host.appendChild(im);
    return true;
  }

  function attachUnit(host, id, cls) {
    if (!hasUnit(id)) return false;
    host.appendChild(img(unitSrc(id), cls || 'cover-photo', false));
    return true;
  }

  return {
    key: key,
    hasWord: hasWord,
    hasUnit: hasUnit,
    wordSrc: wordSrc,
    unitSrc: unitSrc,
    attachWord: attachWord,
    attachUnit: attachUnit,
    count: function () { return manifest ? Object.keys(manifest).length : 0; },
    credits: function () { return credits.slice(); }
  };
})();
