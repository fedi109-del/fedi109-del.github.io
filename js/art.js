/* art.js — everything the app draws.

   No image files, no icon font, no network. Every mark below is an SVG written
   by hand, inserted straight into the page so it inherits the theme: a shape
   painted with `currentColor` or with `var(--accent)` turns with the light and
   dark palettes on its own, which a .png in an <img> could never do.

   Two families live here.

   `glyph(name)` — a 24×24 line drawing, one per subject: the coffee cup, the
   taxi, the scissors. Strokes only, round caps, one weight throughout, so forty
   of them sitting in a column look like one set and not like forty clip-arts.

   `scene(name)` — a wide illustration for the head of a stage. These are drawn
   in flat layers the way a stage set is built: sky, far hills, city, foreground.
   Each layer is a single path, which keeps the whole file readable and lets the
   colours come from the palette instead of being baked in. */

window.Art = (function () {

  /* ---------- line glyphs ----------
     Deliberately spare. Anything drawn in more than about eight strokes stops
     reading at 22 pixels, which is the size these are actually used at. */
  var G = {
    /* greeting: a raised hand */
    hello: 'M8 21v-5.5M8 15.5 6.2 12a1.4 1.4 0 0 1 2.4-1.4l1 1.6V4.6a1.4 1.4 0 0 1 2.8 0v5.2m0 0V3.6a1.4 1.4 0 0 1 2.8 0v6.2m0 0V5.6a1.4 1.4 0 0 1 2.8 0V15a6 6 0 0 1-6 6H8',
    person: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 21a7.5 7.5 0 0 1 15 0',
    two: 'M9 10a3.4 3.4 0 1 1 6.4 1.6L9 20h6.8M4 4v16',
    point: 'M12 3v9m0 0 3.5-3.5M12 12 8.5 8.5M5 15a7 7 0 0 0 14 0',
    price: 'M3.5 11.5 11 4h8v8l-7.5 7.5a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8ZM15.5 8.5h.01',
    sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 2v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
    moon: 'M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z',
    key: 'M15.5 9.5a4.5 4.5 0 1 0-3.6 4.4L10 16l-2 .3.3 2L6 20.5 3.5 20l.4-2.6L11 10.4a4.5 4.5 0 0 0 4.5-.9ZM16 8h.01',
    cup: 'M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8ZM17 9.5h1.5a2.5 2.5 0 0 1 0 5H17M7 5V3m3.5 2V3m3.5 2V3',
    bag: 'M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8ZM8.5 8V6a3.5 3.5 0 0 1 7 0v2',
    hand: 'M9 21h6.6a3 3 0 0 0 2.9-2.2l1.3-4.6a2 2 0 0 0-1.9-2.6H14l.8-3.8A2.4 2.4 0 0 0 12.5 5L9 12.5ZM9 12.5H5.5A1.5 1.5 0 0 0 4 14v5.5A1.5 1.5 0 0 0 5.5 21H9Z',
    no: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM5.6 5.6l12.8 12.8',
    colour: 'M12 21a9 9 0 1 1 0-18c4.5 0 8 3 8 6.5 0 2.5-2 3.5-3.5 3.5H15a2 2 0 0 0-1.4 3.4c.5.5.7 1 .4 1.8-.3.6-1 .8-2 .8ZM7.5 9h.01M11 6.5h.01M15.5 7.5h.01M6.5 13.5h.01',
    plate: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z',
    clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5.2l3.2 2.1',
    pin: 'M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
    gear: 'M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM12 2.5l1.3 2.4 2.7-.4.5 2.7 2.4 1.3-1.3 2.4 1.3 2.4-2.4 1.3-.5 2.7-2.7-.4L12 21.5l-1.3-2.6-2.7.4-.5-2.7-2.4-1.3L6.4 12 5.1 9.6l2.4-1.3.5-2.7 2.7.4Z',
    doing: 'M4 17.5 9 12l3.5 3L20 7M20 7h-4.5M20 7v4.5M4 20.5h16',
    drop: 'M12 21a6 6 0 0 0 6-6c0-4-6-12-6-12S6 11 6 15a6 6 0 0 0 6 6ZM12 17a2 2 0 0 1-2-2',
    routine: 'M12 21a9 9 0 1 0-9-9M3 12l-1.5 2M3 12l2 1.5M12 7v5.2l3.2 2.1M8 3.6a9 9 0 0 1 4-.6',
    give: 'M3 13h4.5l3 3.5h3a2 2 0 0 0 0-4H10L8 10.5a3.5 3.5 0 0 0-2.5-1H3M14 12.5l5.5-2M20 3.5l-2 4M15.5 4l1 3',
    shop: 'M3 6h2l2.4 10.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.6L20.5 9H6M9.5 21h.01M17 21h.01',
    taxi: 'M4 16.5h16M5.5 16.5v2m13-2v2M6 16.5l1.4-5.2A2 2 0 0 1 9.3 10h5.4a2 2 0 0 1 1.9 1.3l1.4 5.2M9.5 10V7.5h5V10M7 13.5h.01M17 13.5h.01',
    house: 'M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1ZM9.5 21v-6h5v6',
    talk: 'M4 6.5A2.5 2.5 0 0 1 6.5 4h7A2.5 2.5 0 0 1 16 6.5v3A2.5 2.5 0 0 1 13.5 12H9l-5 3.5ZM19 9.5a2.5 2.5 0 0 1 1 2v3a2.5 2.5 0 0 1-2.5 2.5H13l-2 1.5',
    now: 'M13 2 4 14h6l-1 8 9-12h-6Z',
    calendar: 'M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v11A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5ZM4 10.5h16M8 3.5V6m8-2.5V6M8.5 14h.01M12 14h.01M15.5 14h.01',
    hourglass: 'M6.5 3h11M6.5 21h11M7.5 3v3.2c0 2 4.5 3.9 4.5 5.8s-4.5 3.8-4.5 5.8V21M16.5 3v3.2c0 2-4.5 3.9-4.5 5.8s4.5 3.8 4.5 5.8V21',
    root: 'M12 3v9m0 9v-9m0 0-4.5 3.5M12 12l4.5 3.5M12 21c-3.5 0-5.5-1.5-6.5-3M12 21c3.5 0 5.5-1.5 6.5-3M9 3.5h6',
    book: 'M4 4.5h5.5A3.5 3.5 0 0 1 13 8v11a2.5 2.5 0 0 0-2.5-2.5H4ZM20 4.5h-5.5A3.5 3.5 0 0 0 11 8v11a2.5 2.5 0 0 1 2.5-2.5H20Z',
    photo: 'M3.5 7.5A1.5 1.5 0 0 1 5 6h3l1.5-2h5L16 6h3a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5ZM12 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z',
    stopwatch: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM12 9v4h3M9.5 2.5h5M18.5 5.5l1.5-1.5',
    glass: 'M6 3h12l-5 8v7h3.5M13 18H9.5M6 3l5 8M7.5 6.5h9',
    heart: 'M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.2a4.4 4.4 0 0 1 7.5 3.2c0 5-7.5 9.6-7.5 9.6Z',
    bridge: 'M3 16.5h18M3 16.5V9m18 7.5V9M3 12c4.5 0 6-3 9-3s4.5 3 9 3M8 16.5v-3.2m8 3.2v-3.2M12 16.5v-4.3',
    link: 'M10 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5M14 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1.5-1.5',
    work: 'M3.5 8.5A1.5 1.5 0 0 1 5 7h14a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5ZM9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12.5h17',
    scales: 'M12 4v16M8 20h8M5 8h14M5 8 2.5 14a2.5 2.5 0 0 0 5 0ZM19 8l2.5 6a2.5 2.5 0 0 1-5 0ZM12 5.5 8 8m4-2.5L16 8',
    rain: 'M7 15.5a4.5 4.5 0 0 1-.4-9A6 6 0 0 1 18 8.2a3.7 3.7 0 0 1-.5 7.3H7ZM8.5 18.5l-1 2.5m5-2.5-1 2.5m5-2.5-1 2.5',
    invite: 'M3.5 7.5A1.5 1.5 0 0 1 5 6h14a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 18H5a1.5 1.5 0 0 1-1.5-1.5ZM4 7l8 6 8-6',
    scissors: 'M6.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6.5 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM8.6 7.3 19 19M8.6 16.7 19 5',
    ball: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7.5 8.2 10.2l1.4 4.4h4.8l1.4-4.4ZM12 3v4.5M4 9.5l4.2.7M20 9.5l-4.2.7M7 19l2.6-4.4M17 19l-2.6-4.4',
    /* used by the shell rather than by a unit */
    cedar: 'M12 2.5 8.5 8h2L7 13.5h2.5L5.5 19h13L14.5 13.5H17L13.5 8h2ZM12 19v3',
    star: 'M12 3.5l2.5 5.4 5.5.7-4 4 1 5.9L12 16.6 7 19.5l1-5.9-4-4 5.5-.7Z',
    ear: 'M8 21c0-3-1.5-3.5-2.5-5.5A7.5 7.5 0 1 1 19.5 12c0 3-2.5 3.5-4 4.5s-1 2.5-2.5 2.5-1.5-1.5-1.5-2.5.5-2 2-2.5M9.5 9.5a2.8 2.8 0 0 1 5.3 1.2',
    check: 'M4.5 12.5 9.5 17.5 19.5 6.5',
    lock: 'M6 11h12v9H6zM8.5 11V7.8a3.5 3.5 0 0 1 7 0V11',
    compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15.5 8.5l-2 5-5 2 2-5Z'
  };

  /* Which drawing goes with which unit. A unit may name its own with `icon:`;
     these are the fallbacks, keyed by the unit number, so no data file had to be
     touched to give all forty a face. */
  var BY_ORDER = {
    1: 'hello', 2: 'person', 3: 'point', 4: 'price', 5: 'sun', 6: 'key',
    7: 'cup', 8: 'bag', 9: 'hand', 10: 'no', 11: 'colour', 12: 'plate',
    13: 'clock', 14: 'pin', 15: 'gear', 16: 'doing', 17: 'drop', 18: 'routine',
    19: 'give', 20: 'shop', 21: 'taxi', 22: 'house', 23: 'talk', 24: 'now',
    25: 'calendar', 26: 'hourglass', 27: 'root', 28: 'book', 29: 'photo',
    30: 'stopwatch', 31: 'glass', 32: 'heart', 33: 'bridge', 34: 'link',
    35: 'work', 36: 'scales', 37: 'rain', 38: 'invite', 39: 'scissors', 40: 'ball'
  };

  function glyph(name, cls) {
    var d = G[name] || G.star;
    return '<svg class="glyph' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="' + d + '"/></svg>';
  }

  function iconFor(unit) {
    return (unit && unit.icon && G[unit.icon]) ? unit.icon : (BY_ORDER[unit && unit.order] || 'star');
  }

  /* ---------- stage scenes ----------
     Five wide illustrations, one per stage, drawn as flat layers. They are the
     same city seen five times, and they walk through one evening: the first is
     the sea at first light, the last is a lit balcony after dark. The learner
     climbing the path should feel the hour move.

     Colours are given as palette variables, so each scene is repainted by the
     dark theme rather than dimmed by it. */

  function sky(id, from, to) {
    return '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + from + '"/>' +
      '<stop offset="1" stop-color="' + to + '"/></linearGradient>';
  }

  var SCENES = {

    /* 1 — dawn on the water. Nothing built yet: a horizon and one young cedar. */
    dawn:
      '<defs>' + sky('sk1', 'var(--amber-400)', 'var(--warm-soft)') + '</defs>' +
      '<rect width="400" height="130" fill="url(#sk1)"/>' +
      '<circle cx="312" cy="66" r="21" fill="var(--amber-500)" opacity=".85"/>' +
      '<path d="M0 96h400v34H0z" fill="var(--cedar-700)" opacity=".16"/>' +
      '<path d="M0 104q40 6 78 0t78 0 78 0 78 0 88 0v26H0z" fill="var(--cedar-600)" opacity=".3"/>' +
      '<path d="M0 114q52 7 104 0t104 0 104 0 88 0v16H0z" fill="var(--cedar-700)" opacity=".55"/>' +
      '<g transform="translate(64 60)" fill="var(--cedar-800)">' +
      '<path d="M14 0 6 15h5L0 34h11L6 48h30l-5-14h11L30 15h5z"/>' +
      '<rect x="19" y="46" width="4" height="14" rx="1.5"/></g>' +
      '<g opacity=".5" fill="var(--amber-600)">' +
      '<circle cx="196" cy="42" r="2"/><circle cx="240" cy="28" r="1.5"/>' +
      '<circle cx="150" cy="30" r="1.5"/></g>',

    /* 2 — a pavement café. Awning, two chairs, a lamp: the first place you
       actually have to say something out loud. */
    corner:
      '<defs>' + sky('sk2', 'var(--amber-500)', 'var(--amber-400)') + '</defs>' +
      '<rect width="400" height="130" fill="url(#sk2)"/>' +
      '<path d="M0 0h150v130H0z" fill="var(--cedar-800)" opacity=".22"/>' +
      '<path d="M28 26h96v78H28z" fill="var(--surface-3)" opacity=".9"/>' +
      '<path d="M20 26h112l-10 20H30z" fill="var(--clay-500)"/>' +
      '<path d="M30 46h92l-4 8H34z" fill="var(--clay-600)" opacity=".55"/>' +
      '<rect x="46" y="58" width="26" height="46" fill="var(--cedar-800)" opacity=".5"/>' +
      '<rect x="88" y="58" width="22" height="24" fill="var(--amber-400)" opacity=".7"/>' +
      '<g stroke="var(--cedar-900)" stroke-width="2.4" fill="none" opacity=".75">' +
      '<path d="M168 104v-16m-8 16v-16m16 0h-16m8 0v-12m-6 0h12"/>' +
      '<path d="M214 104v-16m-8 16v-16m16 0h-16m8 0v-12m-6 0h12"/>' +
      '<path d="M191 104V78m-8-0h16"/></g>' +
      '<g stroke="var(--cedar-900)" stroke-width="2.6" fill="none">' +
      '<path d="M330 104V44"/></g>' +
      '<path d="M318 44a12 9 0 0 1 24 0z" fill="var(--amber-600)"/>' +
      '<circle cx="330" cy="47" r="16" fill="var(--amber-400)" opacity=".35"/>' +
      '<path d="M0 104h400v26H0z" fill="var(--cedar-900)" opacity=".35"/>',

    /* 3 — rooftops: water tanks, satellite dishes, a laundry line. The most
       Lebanese view there is, and the stage where the everyday verbs live. */
    rooftops:
      '<defs>' + sky('sk3', 'var(--amber-400)', 'var(--clay-500)') + '</defs>' +
      '<rect width="400" height="130" fill="url(#sk3)"/>' +
      '<circle cx="60" cy="40" r="15" fill="var(--amber-500)" opacity=".7"/>' +
      '<path d="M0 78h58v52H0zM70 62h64v68H70zM146 86h48v44h-48zM206 54h58v76h-58zM276 74h52v56h-52zM340 66h60v64h-60z" ' +
      'fill="var(--cedar-900)" opacity=".78"/>' +
      '<g fill="var(--amber-400)" opacity=".8">' +
      '<rect x="12" y="90" width="9" height="11"/><rect x="30" y="90" width="9" height="11"/>' +
      '<rect x="84" y="76" width="10" height="12"/><rect x="106" y="76" width="10" height="12"/>' +
      '<rect x="84" y="98" width="10" height="12"/><rect x="220" y="70" width="11" height="13"/>' +
      '<rect x="242" y="70" width="11" height="13"/><rect x="220" y="94" width="11" height="13"/>' +
      '<rect x="290" y="90" width="10" height="12"/><rect x="356" y="82" width="11" height="12"/>' +
      '<rect x="378" y="82" width="11" height="12"/></g>' +
      '<g fill="var(--surface-3)" opacity=".95">' +
      '<rect x="80" y="46" width="20" height="14" rx="4"/><rect x="86" y="60" width="8" height="4"/>' +
      '<rect x="214" y="38" width="22" height="15" rx="4"/><rect x="221" y="53" width="8" height="4"/>' +
      '<rect x="350" y="50" width="20" height="14" rx="4"/><rect x="356" y="64" width="8" height="4"/></g>' +
      '<g stroke="var(--surface-3)" stroke-width="1.4" fill="none" opacity=".8">' +
      '<path d="M140 70q30 12 62 0"/></g>' +
      '<g fill="var(--surface)" opacity=".9">' +
      '<path d="M152 72h11v15h-11z"/><path d="M170 74h9v13h-9z"/><path d="M186 72h10v14h-10z"/></g>' +
      '<circle cx="300" cy="52" r="9" fill="none" stroke="var(--surface-3)" stroke-width="2" opacity=".8"/>',

    /* 4 — the mountain behind the city at dusk. Stage of the past tense: what
       was already there before you arrived. */
    mountain:
      '<defs>' + sky('sk4', 'var(--clay-500)', 'var(--cedar-800)') + '</defs>' +
      '<rect width="400" height="130" fill="url(#sk4)"/>' +
      '<circle cx="336" cy="34" r="13" fill="var(--amber-400)" opacity=".75"/>' +
      '<path d="M0 88 74 32l52 40 44-30 76 54 62-38 92 62v20H0z" fill="var(--cedar-900)" opacity=".55"/>' +
      '<path d="M74 32 96 49H52zM214 42l20 15h-40z" fill="var(--surface-2)" opacity=".65"/>' +
      '<path d="M0 100 60 74l58 30 60-20 74 30 66-22 82 32v6H0z" fill="var(--cedar-900)" opacity=".85"/>' +
      '<path d="M0 108h400v22H0z" fill="var(--cedar-900)"/>' +
      '<g fill="var(--amber-400)" opacity=".9">' +
      '<rect x="24" y="112" width="5" height="6"/><rect x="42" y="114" width="5" height="6"/>' +
      '<rect x="96" y="112" width="5" height="6"/><rect x="140" y="115" width="5" height="6"/>' +
      '<rect x="196" y="112" width="5" height="6"/><rect x="236" y="114" width="5" height="6"/>' +
      '<rect x="290" y="112" width="5" height="6"/><rect x="332" y="115" width="5" height="6"/>' +
      '<rect x="366" y="112" width="5" height="6"/></g>',

    /* 5 — night on a balcony. Arches, a rail, a lit window behind: where the
       long conversations happen. */
    balcony:
      '<defs>' + sky('sk5', 'var(--cedar-800)', 'var(--cedar-900)') + '</defs>' +
      '<rect width="400" height="130" fill="url(#sk5)"/>' +
      '<circle cx="66" cy="34" r="12" fill="var(--surface-2)" opacity=".85"/>' +
      '<circle cx="60" cy="30" r="12" fill="var(--cedar-900)"/>' +
      '<g fill="var(--surface)" opacity=".55">' +
      '<circle cx="130" cy="24" r="1.6"/><circle cx="176" cy="42" r="1.2"/>' +
      '<circle cx="212" cy="18" r="1.5"/><circle cx="262" cy="36" r="1.2"/>' +
      '<circle cx="308" cy="22" r="1.6"/><circle cx="352" cy="44" r="1.2"/></g>' +
      '<path d="M0 96h400v34H0z" fill="var(--cedar-900)"/>' +
      '<g fill="var(--amber-500)" opacity=".28">' +
      '<path d="M244 34h96v62h-96z"/></g>' +
      '<g fill="var(--cedar-900)">' +
      '<path d="M236 30h112v70H236z" opacity=".25"/>' +
      '<path d="M252 96V56a16 16 0 0 1 32 0v40zM300 96V56a16 16 0 0 1 32 0v40z" fill="var(--amber-400)" opacity=".55"/></g>' +
      '<g stroke="var(--cedar-700)" stroke-width="3" opacity=".9">' +
      '<path d="M0 96h400M0 78h400"/>' +
      '<path d="M20 96V70m28 26V70m28 26V70m28 26V70m28 26V70m28 26V70m28 26V70m28 26V70m28 26V70m28 26V70m28 26V70m28 26V70m28 26V70m28 26V70"/></g>' +
      '<path d="M0 92h400v6H0z" fill="var(--cedar-600)" opacity=".7"/>'
  };

  var SCENE_BY_STAGE = { 1: 'dawn', 2: 'corner', 3: 'rooftops', 4: 'mountain', 5: 'balcony' };

  function scene(name, cls) {
    var body = SCENES[name] || SCENES.dawn;
    return '<svg class="scene' + (cls ? ' ' + cls : '') + '" viewBox="0 0 400 130" ' +
      'preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + body + '</svg>';
  }

  /* ---------- the tall one ----------
     The scenes above are all 400×130 strips, which is right for a band across
     the head of a stage and wrong for the column beside the opening headline:
     cropping a strip into a portrait slot magnifies it until only a doorway is
     left. So the front of the app gets its own drawing, composed upright.

     It is the whole country in one frame, read from the top down: sky, the sun
     going into the sea, the ridge behind Beirut, the water, a lit tower, and a
     cedar in the near dark. */
  function portrait(cls) {
    return '<svg class="scene' + (cls ? ' ' + cls : '') + '" viewBox="0 0 300 420" ' +
      'preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<defs><linearGradient id="pt" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="var(--cedar-800)"/>' +
      '<stop offset=".38" stop-color="var(--clay-500)"/>' +
      '<stop offset=".66" stop-color="var(--amber-500)"/>' +
      '<stop offset="1" stop-color="var(--amber-400)"/></linearGradient></defs>' +
      '<rect width="300" height="420" fill="url(#pt)"/>' +

      /* the sun, low, half taken by the haze over the water */
      '<circle cx="196" cy="236" r="34" fill="var(--amber-400)" opacity=".9"/>' +
      '<circle cx="196" cy="236" r="58" fill="var(--amber-400)" opacity=".18"/>' +

      /* birds, high and small: they set the scale of everything under them */
      '<g stroke="var(--cedar-900)" stroke-width="1.6" fill="none" opacity=".45" stroke-linecap="round">' +
      '<path d="M64 78q6-5 12 0M82 66q5-4 10 0M52 60q4-3 8 0"/></g>' +

      /* the ridge that stands behind the city on every clear day */
      '<path d="M0 214 46 168l38 30 34-22 52 38 44-26 86 44v22H0z" fill="var(--cedar-900)" opacity=".42"/>' +
      '<path d="M46 168 62 181H30zM170 194l14 11h-28z" fill="var(--surface-2)" opacity=".5"/>' +

      /* the sea: three flat bands, lightest where the sun lands on it */
      '<path d="M0 258h300v162H0z" fill="var(--cedar-800)" opacity=".55"/>' +
      '<g stroke="var(--amber-400)" stroke-linecap="round" opacity=".55">' +
      '<path d="M150 276h92" stroke-width="3"/><path d="M162 292h68" stroke-width="2.5"/>' +
      '<path d="M148 308h96" stroke-width="2"/><path d="M166 324h60" stroke-width="1.8"/>' +
      '<path d="M140 342h108" stroke-width="1.5"/></g>' +
      '<path d="M0 356h300v64H0z" fill="var(--cedar-900)" opacity=".5"/>' +

      /* the tower: the one built thing, close enough to count its windows */
      '<path d="M214 132h64v288h-64z" fill="var(--cedar-900)" opacity=".9"/>' +
      '<g fill="var(--amber-400)" opacity=".85">' +
      '<rect x="226" y="150" width="13" height="16"/><rect x="252" y="150" width="13" height="16"/>' +
      '<rect x="226" y="180" width="13" height="16"/><rect x="252" y="212" width="13" height="16"/>' +
      '<rect x="226" y="244" width="13" height="16"/><rect x="252" y="244" width="13" height="16"/>' +
      '<rect x="226" y="276" width="13" height="16"/><rect x="252" y="308" width="13" height="16"/>' +
      '<rect x="226" y="340" width="13" height="16"/></g>' +
      '<g stroke="var(--cedar-700)" stroke-width="2.5" opacity=".8">' +
      '<path d="M214 172h64M214 236h64M214 300h64M214 364h64"/></g>' +
      '<rect x="238" y="112" width="6" height="22" fill="var(--cedar-900)"/>' +
      '<circle cx="241" cy="110" r="4" fill="var(--clay-500)"/>' +

      /* the cedar, nearest of all and therefore the darkest thing in the frame */
      '<g transform="translate(18 250)" fill="var(--cedar-900)" opacity=".95">' +
      '<path d="M46 0 26 38h13L12 84h16L8 122h76l-20-38h16L69 38h13z"/>' +
      '<rect x="38" y="118" width="16" height="52" rx="5"/></g>' +
      '<path d="M0 392h300v28H0z" fill="var(--cedar-900)" opacity=".75"/>' +
      '</svg>';
  }

  function sceneForStage(stageId) { return SCENE_BY_STAGE[stageId] || 'dawn'; }

  /* ---------- small compositions ---------- */

  /* The mark in the header: a cedar cut out of a warm medallion. */
  function mark() {
    return '<svg class="mark" viewBox="0 0 32 32" aria-hidden="true">' +
      '<defs><linearGradient id="mk" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="var(--cedar-500)"/>' +
      '<stop offset="1" stop-color="var(--cedar-700)"/></linearGradient></defs>' +
      '<rect width="32" height="32" rx="10" fill="url(#mk)"/>' +
      '<path d="M16 7.5 12 13.5h2.2L10.5 19h2.6L9.5 24h13L19 19h2.6l-3.8-5.5H20zM16 24v2.6" ' +
      'fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ' +
      'opacity=".95"/></svg>';
  }

  /* The thread that runs down the path behind the unit nodes. Drawn once as a
     tall sliver and repeated by CSS, so a path of any length costs the same. */
  function thread() {
    return '<svg class="thread" viewBox="0 0 8 120" preserveAspectRatio="none" aria-hidden="true">' +
      '<path d="M4 0v120" stroke="var(--line-strong)" stroke-width="2.5" ' +
      'stroke-dasharray="7 7" stroke-linecap="round" fill="none"/></svg>';
  }

  /* Shown when the review queue is empty: an empty cup, drained. */
  function restful() {
    return '<svg class="empty-art" viewBox="0 0 120 90" aria-hidden="true" fill="none" ' +
      'stroke="var(--line-strong)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M30 38h44v18a16 16 0 0 1-16 16H46a16 16 0 0 1-16-16z"/>' +
      '<path d="M74 42h6a9 9 0 0 1 0 18h-6"/>' +
      '<path d="M24 78h56"/>' +
      '<path d="M44 28c0-5 4-5 4-10s-4-5-4-9M58 28c0-5 4-5 4-10s-4-5-4-9" opacity=".6"/></svg>';
  }

  return {
    glyph: glyph,
    iconFor: iconFor,
    scene: scene,
    portrait: portrait,
    sceneForStage: sceneForStage,
    mark: mark,
    thread: thread,
    restful: restful,
    names: Object.keys(G)
  };
})();
