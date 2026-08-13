/* audio.js — the ear of the app.

   The rule that shapes this whole file: the browser's own speech synthesis is
   never used for Lebanese. Every Arabic voice a browser ships is Modern Standard
   Arabic, which would teach the learner to say `qahwa` for coffee when the whole
   country says `2ahwe`. Wrong audio is worse than no audio, so this file plays
   recorded files and nothing else.

   A clip lives at `audio/<key>.mp3`, where the key is derived from the Lebanese
   transliteration itself — so the same word met in unit 3 and unit 27 plays the
   same file, and nobody has to keep a list of filenames by hand.

   Which clips actually exist is declared by `data/audio-manifest.js`, generated
   from disk by `node voci.js`. It matters that this is a declared list and not a
   probe: opened from file:// a failed fetch is unreadable, so asking the disk
   "is this there?" is not an option. What is not on the list is simply not shown —
   a page of dead speaker buttons is worse than a page with none. */

window.Say = (function () {

  /* One element for the whole app. Two would let a word talk over a sentence. */
  var player = null;
  var currentBtn = null;
  var manifest = window.LEB_AUDIO || null;

  /* ---------- keys ----------
     Latin letters, digits and single dashes. The three consonant numbers 7, 3
     and 2 survive on purpose: they are consonants here, and `7ilo` and `hilo`
     are different words that must not collapse into the same file. */
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

  function path(lb) { return 'audio/' + key(lb) + '.mp3'; }

  function on() { return !window.Store || Store.settings().audio !== false; }

  /* Known to exist on disk. With no manifest at all the answer is always no,
     which is what keeps a fresh checkout free of buttons that would only fail. */
  function has(lb) {
    if (!manifest) return false;
    return Object.prototype.hasOwnProperty.call(manifest, key(lb));
  }

  function count() { return manifest ? Object.keys(manifest).length : 0; }

  /* ---------- playing ---------- */

  function stop() {
    if (player) {
      player.pause();
      player.currentTime = 0;
    }
    if (currentBtn) {
      currentBtn.classList.remove('playing');
      currentBtn = null;
    }
  }

  /* rate 1 is how it is really said; .7 is the same recording pulled apart so the
     ear can find the consonants inside it. Nothing is re-synthesised. */
  function play(lb, opts) {
    if (!on() || !has(lb)) return false;
    opts = opts || {};
    stop();
    if (!player) {
      player = new window.Audio();
      player.preload = 'auto';
    }
    player.src = path(lb);
    player.playbackRate = opts.slow ? 0.7 : 1;
    player.onended = stop;
    player.onerror = stop;
    if (opts.btn) {
      currentBtn = opts.btn;
      opts.btn.classList.add('playing');
    }
    var p = player.play();
    if (p && p.catch) p.catch(function () { stop(); });
    return true;
  }

  /* ---------- the button ----------
     Returns null when there is nothing to play, and the caller appends null to
     nothing. That is deliberate: every call site stays a one-liner with no
     `if (audio exists)` scattered through the screens. */
  function button(lb, opts) {
    if (!on() || !has(lb)) return null;
    opts = opts || {};

    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'say' + (opts.size === 'lg' ? ' say-lg' : '');
    b.setAttribute('aria-label', 'Listen to ' + lb);
    b.title = 'Listen — hold for the slow version';
    b.innerHTML = ICON;

    b.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      play(lb, { btn: b, slow: slowNext });
      slowNext = false;
    });

    /* Press and hold, on a mouse or a thumb, gives the slowed-down take. */
    var timer = null;
    var slowNext = false;
    function down() {
      timer = setTimeout(function () { slowNext = true; }, 450);
    }
    function up() { clearTimeout(timer); }
    b.addEventListener('mousedown', down);
    b.addEventListener('touchstart', down, { passive: true });
    ['mouseup', 'mouseleave', 'touchend', 'touchcancel'].forEach(function (ev) {
      b.addEventListener(ev, up);
    });

    return b;
  }

  /* A speaker with two arcs, drawn rather than typed: an emoji would change
     shape on every platform and sit off the baseline on most of them. */
  var ICON =
    '<svg viewBox="0 0 20 20" aria-hidden="true">' +
    '<path d="M3 8h3l4-3.2v10.4L6 12H3z" />' +
    '<path class="wave w1" d="M12.6 7.6a3.4 3.4 0 0 1 0 4.8" />' +
    '<path class="wave w2" d="M15 5.4a6.6 6.6 0 0 1 0 9.2" />' +
    '</svg>';

  /* Attaches a button to a row without the caller thinking about layout. */
  function attach(host, lb, opts) {
    var b = button(lb, opts);
    if (b) host.appendChild(b);
    return b;
  }

  return {
    key: key,
    path: path,
    has: has,
    count: count,
    play: play,
    stop: stop,
    button: button,
    attach: attach
  };
})();
