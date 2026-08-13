/* sw.js — the service worker.
 *
 * It exists for one reason: once the app has been opened online it must keep
 * working with the phone in flight mode, on a plane, in a village with no
 * signal. Everything the app is made of is copied into the browser's cache the
 * first time, and from then on the network is never needed again.
 *
 * The strategy is cache-first, deliberately. This is a fixed, finished course,
 * not a feed: there is nothing to be fresh about. New content arrives only when
 * VERSION below changes, which swaps the whole cache in one go.
 *
 * Two things to remember when adding a unit:
 *   1. add its file to ASSETS, and
 *   2. bump VERSION.
 * `node verifica.js` fails loudly if you forget the first one.
 */

var VERSION = 'lebanese-path-v4';

var ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',

  'css/style.css',

  'js/data.js',
  'js/store.js',
  'js/art.js',
  'js/audio.js',
  'js/drills.js',
  'js/runner.js',
  'js/install.js',
  'js/app.js',

  'data/audio-manifest.js',
  'data/00-reference.js',
  'data/unit-01-sounds-and-hello.js',
  'data/unit-02-who-are-you.js',
  'data/unit-03-this-that-where.js',
  'data/unit-04-numbers-and-how-much.js',
  'data/unit-05-times-of-day.js',
  'data/unit-06-my-your-his.js',
  'data/unit-07-what-i-want.js',
  'data/unit-08-having-and-carrying.js',
  'data/unit-09-can-and-please.js',
  'data/unit-10-saying-no.js',
  'data/unit-11-describing-things.js',
  'data/unit-12-food-and-quantities.js',
  'data/unit-13-telling-the-time.js',
  'data/unit-14-places-and-directions.js',
  'data/unit-15-the-present-engine.js',
  'data/unit-16-everyday-verbs.js',
  'data/unit-17-the-b-drop.js',
  'data/unit-18-daily-routine.js',
  'data/unit-19-give-me-come-here.js',
  'data/unit-20-shopping-and-sizes.js',
  'data/unit-21-getting-around.js',
  'data/unit-22-staying-somewhere.js',
  'data/unit-23-small-talk.js',
  'data/unit-24-right-now.js',
  'data/unit-25-tomorrow.js',
  'data/unit-26-the-past-begins.js',
  'data/unit-27-the-second-root.js',
  'data/unit-28-telling-what-happened.js',
  'data/unit-29-was-and-used-to.js',
  'data/unit-30-how-long-since-when.js',
  'data/unit-31-a-night-out.js',
  'data/unit-32-when-it-hurts.js',
  'data/unit-33-participles.js',
  'data/unit-34-joining-ideas.js',
  'data/unit-35-work-and-study.js',
  'data/unit-36-opinions-and-preferences.js',
  'data/unit-37-complaining-well.js',
  'data/unit-38-invitations-and-plans.js',
  'data/unit-39-getting-a-haircut.js',
  'data/unit-40-sport-and-encouragement.js',

  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(VERSION).then(function (cache) {
      /* One file failing must not abandon the whole install, or a single typo
         leaves the app with no offline copy at all and no explanation. */
      return Promise.all(ASSETS.map(function (url) {
        return cache.add(new Request(url, { cache: 'reload' }))['catch'](function (err) {
          console.warn('[sw] could not cache ' + url, err);
        });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === VERSION ? null : caches['delete'](k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        /* Anything we did fetch gets kept, so a file missing from ASSETS still
           ends up offline after it has been used once. */
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
        }
        return res;
      })['catch'](function () {
        /* Offline and never seen: for a page request, the shell is the right
           answer — the app routes on the hash, so it can rebuild any screen. */
        if (req.mode === 'navigate') return caches.match('index.html');
        return new Response('', { status: 504, statusText: 'offline' });
      });
    })
  );
});
