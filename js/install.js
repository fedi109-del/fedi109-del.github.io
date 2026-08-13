/* install.js — turns the page into an app on the phone's home screen.
 *
 * There are two completely different worlds here and the code has to know which
 * one it is in:
 *
 *   Android / Chrome  fires `beforeinstallprompt`. We catch it, stop the browser
 *                     showing its own small banner, and offer a proper button
 *                     instead. One tap installs.
 *
 *   iPhone / Safari   fires nothing and offers no button, because Apple does not
 *                     allow it. The only route is Share → Add to Home Screen,
 *                     done by hand. So all we can do is say so, once, clearly.
 *
 * Opened by double-clicking the file, none of this applies: a page loaded from
 * `file://` cannot be installed and cannot have a service worker, so we stay
 * silent and the app works exactly as it always did.
 */

(function () {
  'use strict';

  /* Inside the native shell (Capacitor stamps this token into the user agent —
     see nativa/capacitor.config.json) the app IS installed: no service worker,
     no banners, nothing to do here at all. */
  if (/LebanesePathApp/.test(navigator.userAgent)) return;

  var ONLINE = location.protocol === 'http:' || location.protocol === 'https:';
  var DISMISSED = 'lebanese-path/install-dismissed';

  /* ---- the offline copy ------------------------------------------------ */

  if (ONLINE && 'serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js')['catch'](function (err) {
        console.warn('[install] service worker refused:', err);
      });
    });
  }

  /* ---- is it already installed? ---------------------------------------- */

  function installed() {
    if (navigator.standalone === true) return true;                 // iOS
    return window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
  }

  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
              /* iPadOS 13+ reports itself as a Mac; the touch points give it away. */
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isSafari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(navigator.userAgent);

  /* ---- the banner ------------------------------------------------------ */

  function banner(html, button, onClick) {
    var box = document.createElement('div');
    box.className = 'install-note';
    box.innerHTML = html;

    if (button) {
      var b = document.createElement('button');
      b.className = 'primary-btn';
      b.type = 'button';
      b.textContent = button;
      b.addEventListener('click', onClick);
      box.appendChild(b);
    }

    var x = document.createElement('button');
    x.className = 'close-x';
    x.type = 'button';
    x.setAttribute('aria-label', 'Dismiss');
    x.textContent = '×';
    x.addEventListener('click', function () {
      box.remove();
      try { localStorage.setItem(DISMISSED, '1'); } catch (e) { /* private mode */ }
    });
    box.appendChild(x);

    var app = document.getElementById('app');
    if (app && app.parentNode) app.parentNode.insertBefore(box, app);
    return box;
  }

  function silenced() {
    try { return localStorage.getItem(DISMISSED) === '1'; } catch (e) { return false; }
  }

  if (!ONLINE || installed() || silenced()) return;

  /* ---- Android: a real install button ---------------------------------- */

  var deferred = null;

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;

    var box = banner(
      '<span><b>Put Lebanese Path on your home screen.</b> ' +
      'It opens full screen and keeps working with no connection.</span>',
      'Install',
      function () {
        if (!deferred) return;
        deferred.prompt();
        deferred.userChoice.then(function () {
          deferred = null;
          box.remove();
        });
      }
    );
  });

  window.addEventListener('appinstalled', function () {
    var box = document.querySelector('.install-note');
    if (box) box.remove();
  });

  /* ---- iPhone: instructions, because there is no button ---------------- */

  if (isIOS && isSafari) {
    /* Wait for the first screen to be drawn, so the hint does not arrive before
       the app it is talking about. */
    window.addEventListener('load', function () {
      setTimeout(function () {
        if (installed() || silenced()) return;
        banner(
          '<span><b>Add this to your home screen.</b> ' +
          'Tap the Share button at the bottom of Safari, scroll down, ' +
          'then choose <b>Add to Home Screen</b>. It will open full screen ' +
          'and work with no connection.</span>'
        );
      }, 1200);
    });
  }
})();
