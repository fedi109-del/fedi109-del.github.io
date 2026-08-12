/* icone.js — draws the app icons from scratch and writes them as real PNG files.
 *
 * Why this exists: an installed app needs raster icons (iOS refuses SVG for the
 * home screen, and the APK builder demands a 512x512 PNG), but this project is
 * not allowed to depend on anything downloaded. So the icons are drawn here with
 * arithmetic and encoded with `zlib`, which Node already ships.
 *
 *   node icone.js
 *
 * Re-run it whenever the brand colours change. Everything it writes lands in
 * icons/ and nowhere else.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var zlib = require('zlib');

var OUT = path.join(__dirname, 'icons');

/* ------------------------------------------------------------------ *
 * PNG encoding
 * ------------------------------------------------------------------ */

var CRC_TABLE = (function () {
  var t = new Int32Array(256);
  for (var n = 0; n < 256; n++) {
    var c = n;
    for (var k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  var c = -1;
  for (var i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  var len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  var body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  var crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

function encodePNG(size, rgba) {
  var ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;    // 8 bits per channel
  ihdr[9] = 6;    // truecolour with alpha
  ihdr[10] = 0;   // deflate
  ihdr[11] = 0;   // adaptive filtering
  ihdr[12] = 0;   // no interlace

  var stride = size * 4;
  var raw = Buffer.alloc((stride + 1) * size);
  for (var y = 0; y < size; y++) {
    raw[y * (stride + 1)] = 0;                       // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* ------------------------------------------------------------------ *
 * The picture
 * ------------------------------------------------------------------ */

var GREEN_LIGHT = [23, 144, 113];   // --cedar-500
var GREEN_DARK  = [6, 40, 31];      // deeper than --cedar-900, so the corner sinks
var AMBER       = [237, 158, 72];
var CREAM       = [248, 243, 234];

function mix(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t
  ];
}

function clamp01(x) { return x < 0 ? 0 : (x > 1 ? 1 : x); }

/* Rounded square: `radius` is a fraction of the side. */
function inRounded(u, v, radius) {
  var dx = Math.abs(u - 0.5) - (0.5 - radius);
  var dy = Math.abs(v - 0.5) - (0.5 - radius);
  if (dx <= 0 || dy <= 0) return true;
  return dx * dx + dy * dy <= radius * radius;
}

/* A cedar of Lebanon, not a fir. The difference is the whole point: a fir is a
   narrow cone, a cedar spreads into wide flat shelves that are broader than they
   are tall. So each tier flares out almost immediately (the low exponent) and is
   much wider than it is deep, and the tiers overlap instead of sitting apart.
   Drawn in its own 0..1 box so the tree can be scaled and slid without being
   redrawn, which is what the maskable icon needs since Android crops the edges.

   Each shelf is a wide, thin band tapering to a point at both tips, with its
   tips swept upward (`rise`) — that upward sweep is the single feature that
   separates a cedar from every other conifer. The shelves do not touch: they
   hang off a trunk that runs the full height, and the gaps between them are
   what makes the silhouette read as layered. At 32px the gaps close up under
   antialiasing and it degrades into a solid tree, which is the right failure. */
var SHELVES = [
  { y: 0.305, hw: 0.155, th: 0.060, rise: 0.030 },
  { y: 0.470, hw: 0.265, th: 0.072, rise: 0.048 },
  { y: 0.645, hw: 0.360, th: 0.080, rise: 0.062 },
  { y: 0.835, hw: 0.445, th: 0.082, rise: 0.075 }
];
var LEADER = { apex: 0.055, base: 0.300, hw: 0.062 };   // the shoot at the very top
var TRUNK = { hw: 0.045, top: 0.24, bottom: 0.945 };
var FOOT = { hw: 0.115, top: 0.905, bottom: 0.955 };    // it stands on something

function inCedar(u, v, scale, centreY) {
  var x = (u - 0.5) / scale + 0.5;
  var y = (v - centreY) / scale + 0.5;
  if (x < 0 || x > 1 || y < 0 || y > 1) return false;
  var dx = Math.abs(x - 0.5);

  if (dx <= TRUNK.hw && y >= TRUNK.top && y <= TRUNK.bottom) return true;
  if (dx <= FOOT.hw && y >= FOOT.top && y <= FOOT.bottom) return true;

  if (y >= LEADER.apex && y <= LEADER.base) {
    var k = (y - LEADER.apex) / (LEADER.base - LEADER.apex);
    if (dx <= LEADER.hw * k) return true;
  }

  for (var i = 0; i < SHELVES.length; i++) {
    var s = SHELVES[i];
    if (dx > s.hw) continue;
    var p = dx / s.hw;
    var mid = s.y - s.rise * Math.pow(p, 1.7);          // tips sweep up
    var half = s.th * Math.pow(1 - p, 0.55);            // tapers to a point
    if (Math.abs(y - mid) <= half) return true;
  }
  return false;
}

/* How much of the soft shadow the tree casts falls on this point. Five taps in
   a small ring, offset downward: enough to read as light coming from above
   without a blur pass we would have to write ourselves. */
var SHADOW_TAPS = [[0, 0], [-0.012, 0.006], [0.012, 0.006], [-0.007, 0.015], [0.007, 0.015]];

function cedarShadow(u, v, scale, centreY) {
  var hit = 0;
  for (var i = 0; i < SHADOW_TAPS.length; i++) {
    if (inCedar(u - SHADOW_TAPS[i][0], v - 0.022 - SHADOW_TAPS[i][1], scale, centreY)) hit++;
  }
  return hit / SHADOW_TAPS.length;
}

/* One sample of the finished image at (u, v), both in 0..1. */
function sample(u, v, opt) {
  if (opt.radius > 0 && !inRounded(u, v, opt.radius)) return null;

  /* Base: light green at the top-left corner falling to near-black bottom-right. */
  var d = clamp01((u * 0.62 + v * 0.78) / 1.4);
  var c = mix(GREEN_LIGHT, GREEN_DARK, Math.pow(d, 0.85));

  /* A warm sun low on the right, the same one the app's background has. */
  var gx = u - 0.95, gy = v - 0.04;
  var glow = Math.exp(-(gx * gx + gy * gy) / 0.14) * 0.62;
  c = mix(c, AMBER, clamp01(glow));

  /* Light from above — the top edge catches it, matching the 3D buttons. */
  var top = Math.pow(clamp01(1 - v / 0.42), 2.2) * 0.16;
  c = mix(c, [255, 255, 255], top);

  /* The tree sits above the gradient, so it throws something onto it. */
  var sh = cedarShadow(u, v, opt.treeScale, opt.treeCentreY);
  if (sh > 0) c = mix(c, [0, 0, 0], sh * 0.30);

  if (inCedar(u, v, opt.treeScale, opt.treeCentreY)) {
    /* The tree itself is not flat cream: it dims very slightly downward, which
       keeps it from looking like a sticker pasted on the gradient. */
    var shade = 1 - clamp01((v - 0.2) / 1.5) * 0.12;
    c = [CREAM[0] * shade, CREAM[1] * shade, CREAM[2] * shade];
  }

  return c;
}

function render(size, opt) {
  var SUB = 4;                       // 4x4 samples per pixel, for clean edges
  var buf = Buffer.alloc(size * size * 4);
  var n = SUB * SUB;

  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      var r = 0, g = 0, b = 0, a = 0;
      for (var sy = 0; sy < SUB; sy++) {
        for (var sx = 0; sx < SUB; sx++) {
          var c = sample((x + (sx + 0.5) / SUB) / size, (y + (sy + 0.5) / SUB) / size, opt);
          if (c) { r += c[0]; g += c[1]; b += c[2]; a += 255; }
        }
      }
      var i = (y * size + x) * 4;
      /* Divide colour by the covered samples only, alpha by all of them:
         otherwise the rounded corners fade towards black instead of fading out. */
      var cov = a / 255;
      if (cov > 0) {
        buf[i] = Math.round(r / cov);
        buf[i + 1] = Math.round(g / cov);
        buf[i + 2] = Math.round(b / cov);
      }
      buf[i + 3] = Math.round(a / n);
    }
  }
  return buf;
}

/* ------------------------------------------------------------------ *
 * What gets written
 * ------------------------------------------------------------------ */

var JOBS = [
  /* Normal icons: rounded, tree filling most of the tile. */
  { file: 'icon-192.png', size: 192, radius: 0.225, treeScale: 0.74, treeCentreY: 0.50 },
  { file: 'icon-512.png', size: 512, radius: 0.225, treeScale: 0.74, treeCentreY: 0.50 },

  /* Maskable: Android crops this to whatever shape the launcher likes, so it
     must bleed to the edges and keep the tree inside the middle 60%. */
  { file: 'icon-maskable-512.png', size: 512, radius: 0, treeScale: 0.58, treeCentreY: 0.50 },

  /* iOS applies its own rounded mask and paints anything transparent black,
     so this one is a full square too. */
  { file: 'apple-touch-icon.png', size: 180, radius: 0, treeScale: 0.72, treeCentreY: 0.50 },

  { file: 'favicon-32.png', size: 32, radius: 0.22, treeScale: 0.86, treeCentreY: 0.50 }
];

fs.mkdirSync(OUT, { recursive: true });

JOBS.forEach(function (j) {
  var png = encodePNG(j.size, render(j.size, j));
  fs.writeFileSync(path.join(OUT, j.file), png);
  console.log('  ' + j.file + '  ' + j.size + 'x' + j.size + '  ' + (png.length / 1024).toFixed(1) + ' kB');
});

console.log('\n' + JOBS.length + ' icone scritte in ' + OUT);
