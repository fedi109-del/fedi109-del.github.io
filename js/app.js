/* app.js — the screens and the navigation between them.
   Routes live in the address bar so the back button works:
     #/path      the Learn tab: the course as a road of round stops
     #/train     the Practice tab: review, listening, weak spots
     #/words     the Words tab: reference tables and every word in the app
     #/more      the More tab: the guide, the settings, the resets
     #/guide     the start-from-zero guide
     #/unit/uNN  the tips-and-notes page of one unit
     #/practice/uNN · #/quiz/uNN · #/review · #/listening · #/shuffle — sessions

   The shape of the whole thing is an app, not a site: a tab bar at the bottom,
   one screen at a time above it, and sessions that take the full screen with
   both bars hidden, because an exercise deserves the learner's whole thumb. */

(function () {
  var root, headerSlot, tabbar;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function go(hash) { location.hash = hash; }

  function arabicOn() { return Store.settings().arabic; }

  /* A very small markup dialect for lesson text: **bold**, `code`, and line breaks.
     Nothing is injected as raw HTML — the source text is escaped first. */
  function rich(text) {
    var safe = String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return safe
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  /* ---------- top bar ----------
     Identity on the left, the three numbers that matter on the right. No menu:
     navigation lives in the tab bar, where an app keeps it. */

  function paintHeader() {
    headerSlot.innerHTML = '';
    var brand = el('a', 'brand');
    brand.href = '#/path';
    var mk = el('span', 'brand-mark');
    mk.innerHTML = Art.mark();
    brand.appendChild(mk);
    brand.appendChild(el('span', 'brand-name', 'Lebanese Path'));
    headerSlot.appendChild(brand);

    var stats = el('div', 'stats');
    var due = Store.dueCount();
    var review = el('a', 'stat review' + (due ? ' hot' : ''));
    review.href = '#/review';
    review.innerHTML = '<span class="stat-num">' + due + '</span><span class="stat-lab">to review</span>';
    var xp = el('div', 'stat');
    xp.innerHTML = '<span class="stat-num">' + Store.xp() + '</span><span class="stat-lab">xp</span>';
    var streak = el('div', 'stat');
    streak.innerHTML = '<span class="stat-num">' + Store.streak() + '</span><span class="stat-lab">day streak</span>';
    stats.appendChild(review);
    stats.appendChild(xp);
    stats.appendChild(streak);
    headerSlot.appendChild(stats);
  }

  /* ---------- tab bar ----------
     Built once, kept forever; render() only moves the light. */

  var TABS = [
    ['#/path', 'Learn', 'cedar'],
    ['#/train', 'Practice', 'stopwatch'],
    ['#/words', 'Words', 'book'],
    ['#/more', 'More', 'gear']
  ];

  function buildTabs() {
    tabbar = el('nav', null);
    tabbar.id = 'tabbar';
    tabbar.setAttribute('aria-label', 'Main');
    TABS.forEach(function (t) {
      var a = el('a', 'tab');
      a.href = t[0];
      var g = el('span', 'tab-glyph');
      g.innerHTML = Art.glyph(t[2]);
      a.appendChild(g);
      a.appendChild(el('span', 'tab-lab', t[1]));
      tabbar.appendChild(a);
    });
    document.body.appendChild(tabbar);
  }

  /* Which tab a route belongs to, so Unit 7's tips still light up Learn. */
  var TAB_OF = {
    path: '#/path', unit: '#/path', guide: '#/path',
    train: '#/train',
    words: '#/words', reference: '#/words',
    more: '#/more', settings: '#/more'
  };

  function setActiveTab(routeKey) {
    var want = TAB_OF[routeKey] || '';
    tabbar.querySelectorAll('.tab').forEach(function (a) {
      a.classList.toggle('on', a.getAttribute('href') === want);
    });
  }

  /* ---------- the unit sheet ----------
     Tap a stop on the road and this slides up from the bottom edge: what the
     unit promises, and the three doors into it. It is the app's handshake —
     nothing starts by accident, nothing needs a page load to be looked at. */

  function closeSheet() {
    var s = document.querySelector('.sheet-wrap');
    if (s) s.remove();
    document.removeEventListener('keydown', sheetKey);
  }

  function sheetKey(e) { if (e.key === 'Escape') closeSheet(); }

  function openSheet(u) {
    closeSheet();
    var p = Store.unit(u.id);
    var open = Store.isOpen(u.id);

    var wrap = el('div', 'sheet-wrap');
    var back = el('div', 'sheet-back');
    back.addEventListener('click', closeSheet);
    wrap.appendChild(back);

    var sheet = el('div', 'sheet');
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-label', 'Unit ' + u.order + ' — ' + u.title);
    sheet.appendChild(el('div', 'sheet-handle'));

    var head = el('div', 'sheet-head');
    var seal = el('div', 'unit-seal');
    seal.innerHTML = Art.glyph(p.done ? 'check' : Art.iconFor(u));
    head.appendChild(seal);
    var ht = el('div');
    var stage = null;
    LEB.stages.forEach(function (s) { if (s.id === u.stage) stage = s; });
    ht.appendChild(el('div', 'crumb', 'Unit ' + u.order + (stage ? ' · ' + stage.level : '')));
    ht.appendChild(el('h2', null, u.title));
    head.appendChild(ht);
    sheet.appendChild(head);

    if (u.goal) sheet.appendChild(el('p', 'sheet-goal', u.goal));

    if (u.canDo.length) {
      var list = el('ul', 'can-do');
      u.canDo.forEach(function (c) { list.appendChild(el('li', null, c)); });
      sheet.appendChild(list);
    }

    if (p.quizBest) sheet.appendChild(el('p', 'sheet-score', 'Best quiz so far: ' + p.quizBest + '%'));

    if (!open) {
      sheet.appendChild(el('p', 'muted',
        'Guided path is on: clear the unit before this one with 80% and it opens. ' +
        'Or switch Guided path off under More, and wander freely.'));
    } else {
      var row = el('div', 'row sheet-row');
      var start = el('a', 'primary-btn lg', p.seen ? 'Start lesson' : 'Start lesson');
      start.href = '#/practice/' + u.id;
      start.addEventListener('click', closeSheet);
      row.appendChild(start);
      var quiz = el('a', 'ghost-btn lg', 'Quiz');
      quiz.href = '#/quiz/' + u.id;
      quiz.addEventListener('click', closeSheet);
      row.appendChild(quiz);
      sheet.appendChild(row);

      var tips = el('a', 'sheet-tips');
      tips.href = '#/unit/' + u.id;
      tips.addEventListener('click', closeSheet);
      var tg = el('span', 'next-glyph');
      tg.innerHTML = Art.glyph('book');
      tips.appendChild(tg);
      var tt = el('span');
      tt.appendChild(el('span', 'next-lab', 'Before you start'));
      tt.appendChild(el('span', 'next-title', 'Tips & notes — the grammar, the words, the dialogue'));
      tips.appendChild(tt);
      sheet.appendChild(tips);
    }

    wrap.appendChild(sheet);
    document.body.appendChild(wrap);
    document.addEventListener('keydown', sheetKey);
  }

  /* ---------- the Learn tab ---------- */

  function screenPath() {
    var wrap = el('div', 'screen wide');
    var done = Store.completedCount();
    var next = nextUnitToDo();
    var fresh = !done && !Store.xp();

    /* The first thing on screen is the next thing to do — an app opens on the
       action, not on a poster of itself. */
    if (fresh) {
      var hello = el('section', 'card welcome-card');
      var art = el('div', 'welcome-art');
      art.innerHTML = Art.scene('dawn');
      hello.appendChild(art);
      var wc = el('div', 'welcome-copy');
      wc.appendChild(el('h1', null, 'From zero to real Lebanese'));
      wc.appendChild(el('p', 'lede',
        'No Arabic needed to begin — not a letter, not a sound. The course starts ' +
        'with how Lebanese is written and works up to holding your own in a fast ' +
        'conversation. Ten minutes a day is enough.'));
      var row = el('div', 'row');
      var g = el('a', 'ghost-btn lg', 'Read this first');
      g.href = '#/guide';
      row.appendChild(g);
      var b = el('a', 'primary-btn lg', 'Start Unit 1');
      if (next) b.href = '#/unit/' + next.id;
      row.appendChild(b);
      wc.appendChild(row);
      hello.appendChild(wc);
      wrap.appendChild(hello);
    } else if (next) {
      var now = el('section', 'now-strip');
      var nt = el('div', 'now-text');
      nt.appendChild(el('div', 'crumb', 'Up next'));
      nt.appendChild(el('div', 'now-title', 'Unit ' + next.order + ' — ' + next.title));
      now.appendChild(nt);
      var cont = el('a', 'primary-btn', Store.unit(next.id).seen ? 'Continue' : 'Start');
      cont.href = Store.unit(next.id).seen ? '#/practice/' + next.id : '#/unit/' + next.id;
      now.appendChild(cont);
      var due = Store.dueCount();
      if (due) {
        var rev = el('a', 'ghost-btn', 'Review ' + due);
        rev.href = '#/review';
        now.appendChild(rev);
      }
      wrap.appendChild(now);
    }

    /* Which stages arrive open: the one you are standing in, and any you have
       already put work into. The rest stay folded until you get there. */
    LEB.stages.forEach(function (stage) {
      var units = LEB.byStage(stage.id);
      if (!units.length) return;
      var qui = next && units.some(function (u) { return u.id === next.id; });
      var iniziata = units.some(function (u) { return Store.unit(u.id).seen; });
      wrap.appendChild(stageBlock(stage, units, next, qui || iniziata));
    });

    if (!LEB.all().length) {
      wrap.appendChild(el('p', 'warn', 'No units are loaded. Check the script tags in index.html.'));
    }
    return wrap;
  }

  /* One stage: an illustrated band that says where you are, then its units as
     round stops staggered down the middle of the screen — a road, not a list. */
  function stageBlock(stage, units, current, aperta) {
    var sec = el('section', 'stage' + (aperta ? '' : ' folded'));
    var cleared = units.filter(function (u) { return Store.unit(u.id).done; }).length;

    var band = el('div', 'stage-band');
    var cover = el('div', 'stage-cover');
    cover.innerHTML = Art.scene(Art.sceneForStage(stage.id));
    /* If a real photograph exists for this stage it sits over the drawing; while
       it loads — or if it never arrives — the drawing is what you see. No file,
       no photo: the same pact the audio buttons keep. */
    var photo = new Image();
    photo.className = 'stage-photo';
    photo.alt = '';
    photo.loading = 'lazy';
    photo.src = 'images/stage-' + stage.id + '.jpg';
    photo.addEventListener('load', function () { band.classList.add('has-photo'); });
    photo.addEventListener('error', function () { photo.remove(); });
    cover.appendChild(photo);
    band.appendChild(cover);

    var bandText = el('div', 'stage-text');
    var line = el('div', 'stage-line');
    line.appendChild(el('span', 'stage-ord', 'Stage ' + stage.id));
    line.appendChild(el('span', 'level-badge', stage.level));
    bandText.appendChild(line);
    bandText.appendChild(el('h2', null, stage.name));
    bandText.appendChild(el('p', 'muted', stage.blurb));

    var pct = Store.stageProgress(stage.id);
    var bar = el('div', 'bar slim');
    var fill = el('div', 'bar-fill');
    fill.style.width = pct + '%';
    bar.appendChild(fill);
    bandText.appendChild(bar);
    bandText.appendChild(el('p', 'stage-count', cleared + ' of ' + units.length + ' cleared'));
    band.appendChild(bandText);
    sec.appendChild(band);

    var trail = el('ol', 'path-trail');
    units.forEach(function (u, i) {
      trail.appendChild(node(u, current && current.id === u.id, i));
    });

    /* A stage you have not reached yet arrives folded. Opened, this screen
       showed all forty units at once, every one of them drawn at the same
       weight — and a wall of forty identical things answers no question. The
       one question someone has when they open a course is "where was I", and
       thirty-four units they will not touch for months were shouting over the
       answer.

       Folded with <details> rather than with a click handler on purpose: it
       opens with the keyboard, it announces itself to a screen reader as a
       disclosure, and it still works if the script never runs. */
    if (aperta) {
      sec.appendChild(trail);
    } else {
      var fold = el('details', 'stage-fold');
      var head = el('summary', 'stage-open');
      head.appendChild(el('span', null, 'Show the ' + units.length + ' units'));
      fold.appendChild(head);
      fold.appendChild(trail);
      sec.appendChild(fold);
    }
    return sec;
  }

  /* A stop on the road: a pressable coin with the unit's drawing in it, the
     name underneath, and the whole row shifted left or right so the eye walks
     a winding path instead of falling down a column. */
  function node(u, isCurrent, i) {
    var p = Store.unit(u.id);
    var open = Store.isOpen(u.id);
    var li = el('li', 'node shift-' + (i % 4) +
      (p.done ? ' done' : '') + (open ? '' : ' locked') + (isCurrent ? ' current' : ''));

    if (isCurrent && !p.done) li.appendChild(el('span', 'node-flag', 'start'));

    var btn = el('button', 'node-btn');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Unit ' + u.order + ' — ' + u.title);
    btn.innerHTML = Art.glyph(open ? Art.iconFor(u) : 'lock');
    if (p.done) {
      var badge = el('span', 'node-check');
      badge.innerHTML = Art.glyph('check');
      btn.appendChild(badge);
    }
    btn.addEventListener('click', function () { openSheet(u); });
    li.appendChild(btn);

    var lab = el('span', 'node-lab');
    lab.appendChild(el('span', 'node-num', 'Unit ' + u.order));
    lab.appendChild(el('span', 'node-title', u.title));
    li.appendChild(lab);
    return li;
  }

  /* The first unit that is open and not yet cleared — where "continue" lands. */
  function nextUnitToDo() {
    var list = LEB.all();
    for (var i = 0; i < list.length; i++) {
      if (Store.isOpen(list[i].id) && !Store.unit(list[i].id).done) return list[i];
    }
    return list[list.length - 1] || null;
  }

  /* ---------- one unit: the tips-and-notes page ---------- */

  function screenUnit(id) {
    var u = LEB.byId(id);
    if (!u) return el('p', 'warn', 'Unknown unit: ' + id);
    Store.markSeen(u.id);
    Store.enroll(LEB.reviewItems(u));

    var wrap = el('div', 'screen');
    wrap.appendChild(unitCover(u));

    u.grammar.forEach(function (g) { wrap.appendChild(grammarBlock(g)); });
    if (u.vocab.length) wrap.appendChild(vocabBlock(u.vocab));
    if (u.phrases.length) wrap.appendChild(phraseBlock(u.phrases));
    if (u.dialogue) wrap.appendChild(dialogueBlock(u.dialogue));
    if (u.culture) wrap.appendChild(cultureBlock(u.culture));

    var p = Store.unit(u.id);
    if (p.quizBest) wrap.appendChild(el('p', 'muted center', 'Best quiz so far: ' + p.quizBest + '%'));

    /* The way onward rides the bottom of the screen the whole way down: read as
       much or as little as you like, the lesson is always one thumb away. */
    var cta = el('div', 'unit-cta');
    var start = el('a', 'primary-btn', 'Start lesson');
    start.href = '#/practice/' + u.id;
    cta.appendChild(start);
    var quiz = el('a', 'ghost-btn', 'Quiz');
    quiz.href = '#/quiz/' + u.id;
    cta.appendChild(quiz);
    wrap.appendChild(cta);
    return wrap;
  }

  /* The head of a lesson: the stage's own illustration, dimmed back so the words
     sit on top of it, with the unit's drawing pressed into the corner like a seal. */
  function unitCover(u) {
    var head = el('header', 'unit-cover');
    var back = el('div', 'unit-cover-art');
    back.innerHTML = Art.scene(Art.sceneForStage(u.stage));
    /* A photograph of a real place in Lebanon, if one was found for this unit.
       It lies over the drawing rather than replacing it, so the lesson has
       something behind it during the moment the file is decoding and forever
       after, if the file never arrives. The class goes on once it has actually
       loaded — that is what lets the copy switch to its light-on-dark treatment
       only when there is something dark to sit on. */
    if (Pic.attachUnit(back, u.id, 'unit-cover-photo')) {
      var ph = back.lastChild;
      ph.addEventListener('load', function () { head.classList.add('has-photo'); });
    }
    head.appendChild(back);

    var inner = el('div', 'unit-cover-copy');
    var seal = el('div', 'unit-seal');
    seal.innerHTML = Art.glyph(Art.iconFor(u));
    inner.appendChild(seal);

    var text = el('div');
    text.appendChild(el('div', 'crumb', 'Stage ' + u.stage + ' · Unit ' + u.order + ' · Tips & notes'));
    text.appendChild(el('h1', null, u.title));
    if (u.goal) text.appendChild(el('p', 'lede', u.goal));
    inner.appendChild(text);
    head.appendChild(inner);

    if (u.canDo.length) {
      var list = el('ul', 'can-do');
      u.canDo.forEach(function (c) { list.appendChild(el('li', null, c)); });
      head.appendChild(list);
    }
    return head;
  }

  /* A real conversation, read top to bottom, with a speaker on every line.
     Grammar explains the machine; this is the only place the learner hears the
     machine running at speed. */
  function dialogueBlock(d) {
    var sec = el('section', 'card dialogue-card');
    sec.appendChild(el('h2', null, d.title || 'Listen in'));
    if (d.setting) sec.appendChild(el('p', 'muted', d.setting));

    var thread = el('div', 'thread');
    (d.lines || []).forEach(function (line) {
      var row = el('div', 'bubble-row ' + (line.you ? 'you' : 'them'));
      row.appendChild(el('div', 'who', line.who || (line.you ? 'You' : '')));
      var b = el('div', 'bubble');
      var lbRow = el('div', 'bubble-head');
      lbRow.appendChild(el('span', 'bubble-lb', line.lb));
      Say.attach(lbRow, line.lb);
      b.appendChild(lbRow);
      if (line.ar && arabicOn()) b.appendChild(el('div', 'ar small', line.ar));
      if (line.en) b.appendChild(el('div', 'bubble-en', line.en));
      if (line.note) b.appendChild(el('div', 'bubble-note', line.note));
      row.appendChild(b);
      thread.appendChild(row);
    });
    sec.appendChild(thread);
    return sec;
  }

  /* Why the language does this, not just that it does. Kept visually apart from
     grammar so it never reads as something to be memorised. */
  function cultureBlock(c) {
    var sec = el('section', 'card culture');
    var head = el('div', 'culture-head');
    var g = el('span', 'culture-glyph');
    g.innerHTML = Art.glyph(c.icon || 'compass');
    head.appendChild(g);
    head.appendChild(el('h2', null, c.heading || 'How it works over there'));
    sec.appendChild(head);
    var body = el('div', 'body');
    body.innerHTML = rich(c.body || '');
    sec.appendChild(body);
    return sec;
  }

  function grammarBlock(g) {
    var sec = el('section', 'card lesson');
    if (g.heading) sec.appendChild(el('h2', null, g.heading));
    if (g.body) {
      var p = el('div', 'body');
      p.innerHTML = rich(g.body);
      sec.appendChild(p);
    }
    if (g.table) sec.appendChild(tableBlock(g.table));
    if (g.examples) {
      var ex = el('div', 'examples');
      g.examples.forEach(function (e) {
        var row = el('div', 'example');
        var lbRow = el('div', 'ex-head');
        lbRow.appendChild(el('span', 'ex-lb', e.lb));
        Say.attach(lbRow, e.lb);
        row.appendChild(lbRow);
        if (e.ar && arabicOn()) row.appendChild(el('div', 'ar', e.ar));
        row.appendChild(el('div', 'ex-en', e.en));
        if (e.note) row.appendChild(el('div', 'ex-note', e.note));
        ex.appendChild(row);
      });
      sec.appendChild(ex);
    }
    if (g.warning) {
      var w = el('div', 'callout');
      w.innerHTML = rich(g.warning);
      sec.appendChild(w);
    }
    return sec;
  }

  function tableBlock(t) {
    var box = el('div', 'table-wrap');
    var table = el('table');
    if (t.headers) {
      var thead = el('thead');
      var tr = el('tr');
      t.headers.forEach(function (h) { tr.appendChild(el('th', null, h)); });
      thead.appendChild(tr);
      table.appendChild(thead);
    }
    var tbody = el('tbody');
    (t.rows || []).forEach(function (r) {
      var tr = el('tr');
      r.forEach(function (c) {
        var td = el('td');
        td.innerHTML = rich(c);
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    box.appendChild(table);
    return box;
  }

  function vocabBlock(vocab) {
    var sec = el('section', 'card');
    sec.appendChild(el('h2', null, 'Words for this unit'));
    var list = el('div', 'vocab');
    vocab.forEach(function (v) {
      var row = el('div', 'vocab-row');
      /* The picture column only exists when there is a picture. Reserving it for
         every row would leave a ragged file of empty squares down the page —
         and roughly half these words (the favour, the excuse, the opinion) have
         no honest photograph at all. */
      if (Pic.attachWord(row, v.lb)) row.classList.add('has-pic');
      var lb = el('div', 'v-lb');
      lb.appendChild(el('span', null, v.lb));
      Say.attach(lb, v.lb);
      row.appendChild(lb);
      if (v.ar && arabicOn()) row.appendChild(el('div', 'ar', v.ar));
      row.appendChild(el('div', 'v-en', v.en));
      var tags = el('div', 'v-tags');
      if (v.pos) tags.appendChild(el('span', 'tag', v.pos));
      if (v.gender) tags.appendChild(el('span', 'tag', v.gender));
      row.appendChild(tags);
      if (v.note) row.appendChild(el('div', 'v-note', v.note));
      list.appendChild(row);
    });
    sec.appendChild(list);
    return sec;
  }

  function phraseBlock(phrases) {
    var sec = el('section', 'card');
    sec.appendChild(el('h2', null, 'Say it like this'));
    var list = el('div', 'phrases');
    phrases.forEach(function (p) {
      var row = el('div', 'phrase');
      var lb = el('div', 'p-lb');
      lb.appendChild(el('span', null, p.lb));
      Say.attach(lb, p.lb, { size: 'lg' });
      row.appendChild(lb);
      if (p.ar && arabicOn()) row.appendChild(el('div', 'ar', p.ar));
      row.appendChild(el('div', 'p-en', p.en));
      if (p.when) row.appendChild(el('div', 'p-when', p.when));
      if (p.reply) {
        var r = el('div', 'p-reply');
        r.innerHTML = '↳ the expected answer: <b>' + rich(p.reply) + '</b>' +
          (p.replyEn ? ' <span class="muted">(' + rich(p.replyEn) + ')</span>' : '');
        row.appendChild(r);
      }
      list.appendChild(row);
    });
    sec.appendChild(list);
    return sec;
  }

  /* ---------- sessions ---------- */

  /* The first time through a unit, its words are taught before they are asked:
     a card per word, dealt in small hands between the exercises. On a return
     visit the cards stay in the deck box — you have met them, so you drill. */
  function teachCards(u) {
    return u.vocab.map(function (v) {
      return {
        type: 'teach',
        lb: v.lb,
        ar: v.ar || '',
        en: v.en,
        note: v.note || '',
        pos: v.pos || '',
        gender: v.gender || ''
      };
    });
  }

  /* Three new words, then a few exercises that can now be answered, then three
     more. Teaching everything first would be a lecture; asking everything first
     would be an ambush. */
  function interleave(cards, drills) {
    var queue = [];
    var ci = 0, di = 0;
    var perHand = 3;
    var perPlay = Math.max(2, Math.ceil(drills.length / Math.ceil(cards.length / perHand || 1)));
    while (ci < cards.length || di < drills.length) {
      for (var a = 0; a < perHand && ci < cards.length; a++) queue.push(cards[ci++]);
      for (var b = 0; b < perPlay && di < drills.length; b++) queue.push(drills[di++]);
    }
    return queue;
  }

  /* Practice opens with the ear when it can. If some of the unit's words have a
     recorded track, one or two of them come back as listening questions inside
     the session. They are built here, not in the data files, because they only
     make sense on a device that actually has the mp3s. */
  function listenExtras(u) {
    if (!window.Say || !u.vocab || u.vocab.length < 4) return [];
    var voiced = u.vocab.filter(function (v) { return v.en && Say.has(v.lb); });
    if (!voiced.length) return [];
    return Drills.shuffle(voiced).slice(0, 2).map(function (v) {
      var wrong = Drills.shuffle(u.vocab.filter(function (o) {
        return o.en && o.en !== v.en;
      })).slice(0, 2).map(function (o) { return o.en; });
      if (wrong.length < 2) return null;
      var options = Drills.shuffle([v.en].concat(wrong));
      return {
        type: 'listen',
        lb: v.lb,
        options: options,
        answer: options.indexOf(v.en),
        explain: v.note || ''
      };
    }).filter(Boolean);
  }

  function emptyCard(host, title, note, btnLabel, href) {
    var card = el('div', 'card empty-card');
    var pic = el('div', 'empty-pic');
    pic.innerHTML = Art.restful();
    card.appendChild(pic);
    card.appendChild(el('h2', null, title));
    card.appendChild(el('p', 'muted', note));
    var b = el('a', 'primary-btn', btnLabel);
    b.href = href;
    card.appendChild(b);
    host.appendChild(card);
  }

  function screenSession(mode, id) {
    var host = el('div', 'screen run');

    if (mode === 'review') {
      var dueItems = Store.due(20);
      var pool = [];
      LEB.all().forEach(function (x) {
        if (Store.unit(x.id).seen) pool = pool.concat(LEB.reviewItems(x));
      });
      if (!dueItems.length) {
        emptyCard(host, 'Nothing is due',
          'Come back later, or open a new unit — every word you meet joins the review queue by itself.',
          'Back to the path', '#/path');
        return host;
      }
      Runner.start({
        host: host,
        mode: 'review',
        queue: Runner.reviewQueue(dueItems, pool),
        onQuit: function () { go('#/train'); },
        onFinish: function () { go('#/train'); }
      });
      return host;
    }

    if (mode === 'listening') {
      var voiced = [];
      LEB.all().forEach(function (x) {
        if (!Store.unit(x.id).seen) return;
        x.vocab.forEach(function (v) {
          if (v.en && Say.has(v.lb)) voiced.push({ v: v, u: x });
        });
      });
      if (voiced.length < 4) {
        emptyCard(host, 'The ear needs recordings',
          'Listening practice appears once recorded clips are installed for words you have met.',
          'Back to practice', '#/train');
        return host;
      }
      var qs = Drills.shuffle(voiced).slice(0, 10).map(function (it) {
        var wrong = Drills.shuffle(voiced.filter(function (o) { return o.v.en !== it.v.en; }))
          .slice(0, 2).map(function (o) { return o.v.en; });
        var options = Drills.shuffle([it.v.en].concat(wrong));
        return { type: 'listen', lb: it.v.lb, options: options, answer: options.indexOf(it.v.en), explain: it.v.note || '' };
      });
      Runner.start({
        host: host, mode: 'listening', queue: qs,
        onQuit: function () { go('#/train'); },
        onFinish: function () { go('#/train'); }
      });
      return host;
    }

    if (mode === 'shuffle') {
      var poolD = [];
      LEB.all().forEach(function (x) {
        if (Store.unit(x.id).seen) poolD = poolD.concat(x.drills);
      });
      if (!poolD.length) {
        emptyCard(host, 'Nothing to mix yet',
          'Open a unit first — the mixer draws its questions from every unit you have met.',
          'Back to the path', '#/path');
        return host;
      }
      Runner.start({
        host: host, mode: 'mix', queue: Drills.shuffle(poolD).slice(0, 12),
        onQuit: function () { go('#/train'); },
        onFinish: function () { go('#/train'); }
      });
      return host;
    }

    var u = LEB.byId(id);
    if (!u) return el('p', 'warn', 'Unknown unit: ' + id);

    /* Starting a lesson counts as meeting the unit, wherever you came from. */
    Store.markSeen(u.id);
    Store.enroll(LEB.reviewItems(u));

    var queue;
    if (mode === 'quiz') {
      queue = u.quiz;
    } else {
      var p = Store.unit(u.id);
      var drills = listenExtras(u).concat(u.drills);
      /* First pass teaches; every later pass goes straight to the exercises. */
      queue = (p.practiced || p.done) ? drills : interleave(teachCards(u), drills);
    }

    Runner.start({
      host: host,
      mode: mode,
      queue: queue,
      onQuit: function () { go('#/unit/' + u.id); },
      onScore: function (score) {
        if (mode === 'quiz') Store.recordQuiz(u.id, score);
        else Store.markPracticed(u.id);
      },
      onFinish: function (score) {
        if (mode === 'practice') return go('#/quiz/' + u.id);
        var nx = LEB.next(u.id);
        if (score >= 80 && nx) return go('#/unit/' + nx.id);
        go('#/unit/' + u.id);
      }
    });
    return host;
  }

  /* ---------- the Practice tab ----------
     One place for everything that is not new ground: the review queue, the ear,
     the units that still wobble, and a mixed bag for a spare five minutes. */

  function screenTrain() {
    var wrap = el('div', 'screen');
    wrap.appendChild(el('h1', null, 'Practice'));
    wrap.appendChild(el('p', 'lede', 'New ground lives on the path. This is where what you met stops wobbling.'));

    /* Review — the one that matters most, so it comes first and biggest. */
    var due = Store.dueCount();
    var rev = el('section', 'card train-card');
    var rh = el('div', 'train-head');
    var rg = el('span', 'train-glyph');
    rg.innerHTML = Art.glyph('hourglass');
    rh.appendChild(rg);
    var rt = el('div');
    rt.appendChild(el('h2', null, 'Review'));
    rt.appendChild(el('p', 'muted', due
      ? due + ' item' + (due > 1 ? 's are' : ' is') + ' due. Right answers move further away; misses come back tomorrow.'
      : 'Nothing is due right now. Every word you meet joins this queue by itself.'));
    rh.appendChild(rt);
    rev.appendChild(rh);
    if (due) {
      var rb = el('a', 'primary-btn', 'Review ' + due);
      rb.href = '#/review';
      rev.appendChild(rb);
    }
    wrap.appendChild(rev);

    /* Listening — only shown as a door when there are clips to hear. */
    var lis = el('section', 'card train-card');
    var lh = el('div', 'train-head');
    var lg = el('span', 'train-glyph');
    lg.innerHTML = Art.glyph('ear');
    lh.appendChild(lg);
    var lt = el('div');
    lt.appendChild(el('h2', null, 'Listening'));
    lt.appendChild(el('p', 'muted', Say.count()
      ? 'Ten words from units you have met, by ear alone.'
      : 'Appears once recorded clips are installed. The app never uses the phone\'s own Arabic voice — it speaks the wrong Arabic.'));
    lh.appendChild(lt);
    lis.appendChild(lh);
    if (Say.count()) {
      var lb = el('a', 'primary-btn', 'Train the ear');
      lb.href = '#/listening';
      lis.appendChild(lb);
    }
    wrap.appendChild(lis);

    /* Weak spots — quizzes tried and not yet cleared. */
    var weak = LEB.all().filter(function (u) {
      var p = Store.unit(u.id);
      return p.quizBest > 0 && p.quizBest < 80;
    });
    if (weak.length) {
      var wk = el('section', 'card train-card');
      var wh = el('div', 'train-head');
      var wg = el('span', 'train-glyph');
      wg.innerHTML = Art.glyph('scales');
      wh.appendChild(wg);
      var wt = el('div');
      wt.appendChild(el('h2', null, 'Not cleared yet'));
      wt.appendChild(el('p', 'muted', 'Quizzes you have tried that still sit under 80%.'));
      wh.appendChild(wt);
      wk.appendChild(wh);
      var chips = el('div', 'row');
      weak.slice(0, 6).forEach(function (u) {
        var c = el('a', 'ghost-btn', 'Unit ' + u.order + ' · ' + Store.unit(u.id).quizBest + '%');
        c.href = '#/practice/' + u.id;
        chips.appendChild(c);
      });
      wk.appendChild(chips);
      wrap.appendChild(wk);
    }

    /* The mixer — a spare five minutes, twelve questions from anywhere. */
    var seen = LEB.all().some(function (u) { return Store.unit(u.id).seen; });
    var mix = el('section', 'card train-card');
    var mh = el('div', 'train-head');
    var mg = el('span', 'train-glyph');
    mg.innerHTML = Art.glyph('star');
    mh.appendChild(mg);
    var mt = el('div');
    mt.appendChild(el('h2', null, 'Quick mix'));
    mt.appendChild(el('p', 'muted', seen
      ? 'Twelve questions drawn from every unit you have met, in no order at all — the way the street asks them.'
      : 'Opens after your first unit.'));
    mh.appendChild(mt);
    mix.appendChild(mh);
    if (seen) {
      var mb = el('a', 'primary-btn', 'Deal twelve');
      mb.href = '#/shuffle';
      mix.appendChild(mb);
    }
    wrap.appendChild(mix);

    return wrap;
  }

  /* ---------- the Words tab ---------- */

  function screenWords() {
    var wrap = el('div', 'screen');
    wrap.appendChild(el('h1', null, 'Words'));
    wrap.appendChild(el('p', 'lede', 'Every word in the course, and the tables worth coming back to.'));

    var sec = el('section', 'card');
    sec.appendChild(el('h2', null, 'Word list'));
    var search = el('input', 'search');
    search.type = 'search';
    search.placeholder = 'search English or Lebanese…';
    sec.appendChild(search);
    var out = el('div', 'vocab');
    sec.appendChild(out);

    var all = [];
    LEB.all().forEach(function (u) {
      u.vocab.forEach(function (v) {
        all.push({ lb: v.lb, ar: v.ar || '', en: v.en, unit: u.order, title: u.title });
      });
    });
    all.sort(function (a, b) { return a.lb.toLowerCase() < b.lb.toLowerCase() ? -1 : 1; });

    var LIMIT = 400;

    function draw(filter) {
      out.innerHTML = '';
      var f = Drills.loose(filter);
      var matched = all.filter(function (v) {
        if (!f) return true;
        var lb = Drills.loose(v.lb);
        if (lb.indexOf(f) > -1 || Drills.loose(v.en).indexOf(f) > -1) return true;
        /* Stems are listed with a trailing dash — `badd-`, `3end-`, `fii-`. Someone who
           met `baddé` in a lesson should still find it here. */
        var stem = lb.replace(/[- ]+$/, '');
        return stem.length > 2 && f.indexOf(stem) === 0;
      });
      matched.slice(0, LIMIT).forEach(function (v) {
        var row = el('div', 'vocab-row');
        var lb = el('div', 'v-lb');
        lb.appendChild(el('span', null, v.lb));
        Say.attach(lb, v.lb);
        row.appendChild(lb);
        if (v.ar && arabicOn()) row.appendChild(el('div', 'ar', v.ar));
        row.appendChild(el('div', 'v-en', v.en));
        row.appendChild(el('div', 'v-note', 'unit ' + v.unit));
        out.appendChild(row);
      });
      if (!matched.length) {
        out.appendChild(el('p', 'muted', 'Nothing matches that.'));
      } else if (matched.length > LIMIT) {
        out.appendChild(el('p', 'muted',
          'Showing the first ' + LIMIT + ' of ' + matched.length + ' — type in the box to narrow it down.'));
      }
    }
    search.addEventListener('input', function () { draw(search.value); });
    draw('');
    wrap.appendChild(sec);

    var ref = LEB.getReference();
    if (ref) {
      wrap.appendChild(el('h2', 'ref-title', 'Reference tables'));
      ref.sections.forEach(function (s) { wrap.appendChild(grammarBlock(s)); });
    }
    return wrap;
  }

  /* ---------- the start-from-zero guide ----------
     The complete beginner's first five minutes, written down once and kept in
     reach forever. Nothing here is required reading twice. */

  function guideCard(heading, body, table) {
    var g = { heading: heading, body: body };
    if (table) g.table = table;
    return grammarBlock(g);
  }

  function screenGuide() {
    var wrap = el('div', 'screen');
    wrap.appendChild(el('h1', null, 'Start here'));
    wrap.appendChild(el('p', 'lede',
      'Five minutes of orientation, then the course does the rest. You need no ' +
      'Arabic at all to begin — this page is the whole entry ticket.'));

    wrap.appendChild(guideCard(
      'What you are learning',
      'This course teaches **Lebanese Arabic** — the spoken language of Lebanon, the one ' +
      'used in kitchens, taxis, shops and phone calls.\n\n' +
      'It is not Modern Standard Arabic, the formal language of news bulletins and ' +
      'official documents. Nobody chats in Standard Arabic, and courses that teach it ' +
      'leave you understanding the news but not your neighbour. The two differ in sound, ' +
      'in words, even in grammar: where a textbook says *qahwa* for coffee, Beirut says ' +
      '`2ahwe` — the famous Arabic q is not pronounced in everyday Lebanese at all.\n\n' +
      'Everything in this app is the Lebanese that Lebanese people actually say.'));

    wrap.appendChild(guideCard(
      'How Lebanese is written here',
      'Lebanese people mostly write their language in **Latin letters**, on phones and ' +
      'in chats. A few sounds have no Latin letter, so digits that *look* like the ' +
      'Arabic letters stand in for them. This is not an invention of this app — it is ' +
      'how the whole country types. You will learn each sound properly in Unit 1; ' +
      'this table is only so the writing never surprises you.',
      {
        headers: ['you will see', 'it stands for', 'the sound'],
        rows: [
          ['`7`', 'ح', 'a hard breath from the throat — not an ordinary h'],
          ['`3`', 'ع', 'a squeezed sound low in the throat, with voice'],
          ['`2`', 'ء and ق', 'a clean stop, like the catch in "uh-oh"'],
          ['`S D T Z`', 'ص ض ط ظ', 'capital = the heavy version; it changes the word'],
          ['`é` · `aa` `ii` `uu`', '—', 'a closed e; doubled vowels are held longer'],
          ['`kh` `gh` `sh`', 'خ غ ش', 'as in Scottish *loch*, a gargled g, and sh']
        ]
      }));

    wrap.appendChild(guideCard(
      'How the course works',
      'The path has **forty units in five stages**, from absolute zero to arguing about ' +
      'traffic. Every unit works the same way:\n\n' +
      '**1 · Tips & notes** — short explanations of how the language works, with the ' +
      'unit\'s words and a real conversation. Read it before the lesson, or dive in and ' +
      'come back when curious.\n\n' +
      '**2 · Lesson** — new words are taught to you card by card, a few at a time, with ' +
      'exercises in between that use exactly what you were just shown. Nothing is asked ' +
      'before it is taught.\n\n' +
      '**3 · Quiz** — the one that counts. Eighty per cent clears the unit.\n\n' +
      '**4 · Review** — every word you meet joins a review queue that resurfaces it at ' +
      'growing intervals: tomorrow, in two days, in four. Ten minutes of review a day is ' +
      'worth more than an hour on Sunday.'));

    wrap.appendChild(guideCard(
      'How to study',
      'Do the review first, every day — it is short, and it is the part that makes ' +
      'things stick. Then take new ground when you have the appetite for it.\n\n' +
      '**Say everything out loud.** Lebanese lives in the mouth and the ear, not on ' +
      'paper. Whisper on the bus if you must, but move your lips.\n\n' +
      'Do not chase perfect scores. Eighty per cent clears a unit because the missing ' +
      'twenty comes back on its own through review. Forward beats flawless.\n\n' +
      'The course is fully open: nothing is locked. If you want the discipline of one ' +
      'unit at a time, switch **Guided path** on under More.'));

    wrap.appendChild(guideCard(
      'About the audio',
      'Where you see a speaker button, a real recording exists — press and hold it for ' +
      'a slowed-down version. Where there is no button, the clip has not been recorded ' +
      'yet.\n\n' +
      'The app will never read Lebanese with your phone\'s built-in voice. Every Arabic ' +
      'voice a phone ships speaks Modern Standard Arabic and would teach you a ' +
      'pronunciation nobody in Lebanon uses. Wrong audio is worse than silence.'));

    var row = el('div', 'row center-row');
    var u1 = LEB.all()[0];
    if (u1) {
      var b = el('a', 'primary-btn lg', 'Begin with Unit 1');
      b.href = '#/unit/' + u1.id;
      row.appendChild(b);
    }
    wrap.appendChild(row);
    return wrap;
  }

  /* ---------- the More tab ---------- */

  function screenMore() {
    var wrap = el('div', 'screen');
    wrap.appendChild(el('h1', null, 'More'));

    var guide = el('a', 'card more-guide');
    guide.href = '#/guide';
    var gh = el('div', 'train-head');
    var gg = el('span', 'train-glyph');
    gg.innerHTML = Art.glyph('compass');
    gh.appendChild(gg);
    var gt = el('div');
    gt.appendChild(el('h2', null, 'Start here — the guide'));
    gt.appendChild(el('p', 'muted', 'What Lebanese is, how it is written, and how to study. Five minutes, worth them.'));
    gh.appendChild(gt);
    guide.appendChild(gh);
    wrap.appendChild(guide);

    var card = el('section', 'card');
    card.appendChild(el('h2', null, 'Settings'));
    card.appendChild(toggle('Show Arabic script', 'arabic',
      'Lebanese is mostly written in Latin letters by Lebanese people themselves. ' +
      'Keep the Arabic on if you also want to train your eye for signs and menus.'));
    card.appendChild(toggle('Play the audio', 'audio',
      'A speaker sits next to every word and line that has a recording. Turn it off ' +
      'if you would rather read in silence.'));
    card.appendChild(toggle('Guided path', 'guided',
      'Off by default: the whole course is open, wander wherever you like. ' +
      'Turn it on and each unit waits until you have cleared the one before it with 80%.'));
    wrap.appendChild(card);

    var sound = el('section', 'card');
    sound.appendChild(el('h2', null, 'About the recordings'));
    var have = Say.count();
    sound.appendChild(el('p', 'muted',
      have
        ? have + ' recorded clips are installed. A speaker appears next to everything ' +
          'that has one; the rest stay silent until their recording arrives.'
        : 'No recordings are installed yet, so no speakers are shown. They will appear ' +
          'on their own the moment the clips are added — no update needed.'));
    sound.appendChild(el('p', 'muted',
      'The app never reads Lebanese with the voice built into your phone. Every one of ' +
      'those voices speaks Modern Standard Arabic — it would say qahwa for coffee, and ' +
      'you would learn a pronunciation nobody in Lebanon uses.'));
    wrap.appendChild(sound);

    var about = el('section', 'card');
    about.appendChild(el('h2', null, 'About the language here'));
    about.appendChild(el('p', 'muted',
      'Everything in this app is Lebanese (Levantine) as it is spoken — not Modern ' +
      'Standard Arabic. That is why qaaf is a glottal stop, why there is no verb "to ' +
      'have", and why some of these sentences would be wrong in a fuS7a exam. That is ' +
      'the point.'));
    wrap.appendChild(about);

    /* The photographs are borrowed, and the licences want the lenders named. The
       link is only offered when there are photographs to credit: on a fresh
       checkout, before `node immagini.js` has run, it would lead to an empty
       room. */
    if (Pic.count()) {
      var thanks = el('a', 'card more-guide');
      thanks.href = '#/credits';
      var th = el('div', 'train-head');
      var tg = el('span', 'train-glyph');
      tg.innerHTML = Art.glyph('star');
      th.appendChild(tg);
      var tt = el('div');
      tt.appendChild(el('h2', null, 'The photographs'));
      tt.appendChild(el('p', 'muted',
        Pic.count() + ' pictures from Wikimedia Commons, lent under free licences. ' +
        'Here is who made them.'));
      th.appendChild(tt);
      thanks.appendChild(th);
      wrap.appendChild(thanks);
    }

    var danger = el('section', 'card');
    danger.appendChild(el('h2', null, 'Start over'));
    danger.appendChild(el('p', 'muted', 'This erases progress, xp, streak and the review schedule on this device.'));
    var b = el('button', 'ghost-btn danger', 'Erase my progress');
    b.type = 'button';
    b.addEventListener('click', function () {
      if (confirm('Erase all progress? This cannot be undone.')) {
        Store.reset();
        go('#/path');
        render();
      }
    });
    danger.appendChild(b);
    wrap.appendChild(danger);
    return wrap;
  }

  function toggle(label, name, note) {
    var row = el('div', 'setting');
    var lab = el('label', 'switch');
    var input = el('input');
    input.type = 'checkbox';
    input.checked = Store.settings()[name];
    input.addEventListener('change', function () {
      Store.setSetting(name, input.checked);
      render();
    });
    lab.appendChild(input);
    lab.appendChild(el('span', 'slider'));
    row.appendChild(lab);
    var txt = el('div');
    txt.appendChild(el('div', 'setting-name', label));
    txt.appendChild(el('div', 'muted', note));
    row.appendChild(txt);
    return row;
  }

  /* ---------- self check (hidden route #/check) ----------
     Not part of the course: it is here so that anyone adding a unit can see, in one
     click, whether the file obeys SCHEMA.md instead of finding out mid-quiz. */

  function checkUnit(u, problems) {
    function fail(msg) { problems.push(u.id + ' — ' + msg); }
    if (typeof u.stage !== 'number' || u.stage < 1 || u.stage > 5) fail('stage out of range');
    if (typeof u.order !== 'number') fail('order missing');
    if (!u.title) fail('no title');
    if (u.grammar.length < 2) fail('only ' + u.grammar.length + ' grammar block(s), 2 minimum');
    if (u.vocab.length < 10) fail('only ' + u.vocab.length + ' words, 10 minimum');
    if (u.phrases.length < 4) fail('only ' + u.phrases.length + ' phrases, 4 minimum');
    if (u.drills.length < 10) fail('only ' + u.drills.length + ' drills, 10 minimum');
    if (u.quiz.length < 8) fail('only ' + u.quiz.length + ' quiz items, 8 minimum');
    u.vocab.forEach(function (v, i) {
      if (!v.lb || !v.en) fail('vocab ' + i + ' missing lb or en');
    });
    var kinds = {};
    u.drills.concat(u.quiz).forEach(function (d, i) {
      var where = (i < u.drills.length ? 'drill ' : 'quiz ') + i;
      kinds[d.type] = true;
      if (['choice', 'gap', 'build', 'type', 'match', 'conjugate', 'listen'].indexOf(d.type) === -1) {
        return fail(where + ': unknown type "' + d.type + '"');
      }
      if (d.type === 'listen' && !d.lb) fail(where + ': listen needs the Lebanese in lb');
      if (d.type === 'choice' || d.type === 'gap' || d.type === 'listen' ||
          (d.type === 'conjugate' && d.options)) {
        if (!Array.isArray(d.options) || d.options.length < 2) return fail(where + ': needs at least 2 options');
        if (typeof d.answer !== 'number' || d.answer < 0 || d.answer >= d.options.length) {
          fail(where + ': answer must be an index into options (got ' + JSON.stringify(d.answer) + ')');
        }
      } else if (typeof d.answer !== 'string' || !d.answer) {
        if (d.type !== 'match') fail(where + ': answer must be a non-empty string');
      }
      /* A tile may hold a fixed expression of several words, so comparing tile by tile
         would be wrong. Compare the bag of words instead: the tiles, flattened, must
         hold exactly the words of the answer — no more, no fewer. */
      if (d.type === 'build' && d.tiles && d.tiles.length) {
        var bag = function (s) {
          return Drills.loose(s).split(' ').filter(Boolean).sort().join(' ');
        };
        if (bag(d.tiles.join(' ')) !== bag(d.answer)) {
          fail(where + ': the tiles do not add up to the answer');
        }
      }
      if (d.type === 'match' && (!Array.isArray(d.pairs) || d.pairs.length < 3)) {
        fail(where + ': match needs at least 3 pairs');
      }
      if (d.type === 'gap' && !Array.isArray(d.lines)) fail(where + ': gap needs lines');
    });
    if (Object.keys(kinds).length < 4) fail('only ' + Object.keys(kinds).length + ' exercise types, 4 minimum');
  }

  /* ---------- who took the photographs ----------
     Every photograph in this app is on loan under a Creative Commons licence,
     and every one of those licences asks for the same thing in return: say who
     made it. This screen is that payment. It is built from the manifest rather
     than from a written page so it can never drift out of date, and it works
     with the aeroplane mode on — an attribution you can only read online is not
     an attribution. */

  function screenCredits() {
    var wrap = el('div', 'screen');
    var list = Pic.credits();

    wrap.appendChild(el('h1', null, 'The photographs'));
    wrap.appendChild(el('p', 'lede',
      list.length + ' photographs, all from Wikimedia Commons, all under a free ' +
      'licence. Each one was resized and cropped to fit; a crop is an adaptation, ' +
      'so each keeps the licence it arrived with. Thank you to the people below, ' +
      'who will never know they taught anybody Lebanese.'));

    if (!list.length) {
      var none = el('section', 'card');
      none.appendChild(el('p', 'muted',
        'No photographs are installed. Run `node immagini.js` to fetch them.'));
      wrap.appendChild(none);
      return wrap;
    }

    var card = el('section', 'card');
    var rows = el('div', 'credits');
    list.forEach(function (c) {
      var row = el('div', 'credit-row');
      var thumb = new Image();
      thumb.className = 'credit-pic';
      thumb.alt = '';
      thumb.loading = 'lazy';
      thumb.src = (c.k.indexOf('unit-') === 0 ? 'images/unit/' : 'images/vocab/') + c.k + '.jpg';
      thumb.addEventListener('error', function () { thumb.remove(); });
      row.appendChild(thumb);

      var text = el('div');
      text.appendChild(el('div', 'credit-title', c.t || c.k));
      var by = el('div', 'credit-by');
      by.appendChild(el('span', null, c.a + ' · ' + c.l));
      /* The link back to the original page on Commons. It is the one part of
         this screen that needs a connection, and that is the right way round:
         the name and the licence — the parts the licence actually obliges us to
         show — are already on the page, and the link is the courtesy on top. */
      if (c.u) {
        var src = el('a', 'credit-src', 'source');
        src.href = c.u;
        src.target = '_blank';
        src.rel = 'noopener noreferrer';
        by.appendChild(src);
      }
      text.appendChild(by);
      row.appendChild(text);
      rows.appendChild(row);
    });
    card.appendChild(rows);
    wrap.appendChild(card);
    return wrap;
  }

  function screenCheck() {
    var wrap = el('div', 'screen');
    wrap.appendChild(el('h1', null, 'Self check'));
    var units = LEB.all();
    var problems = [];
    var seen = {};
    units.forEach(function (u) {
      if (seen[u.order]) problems.push('two units share order ' + u.order);
      seen[u.order] = true;
      checkUnit(u, problems);
    });
    var card = el('section', 'card');
    card.appendChild(el('h2', null, units.length + ' units loaded'));
    var words = units.reduce(function (n, u) { return n + u.vocab.length; }, 0);
    var ex = units.reduce(function (n, u) { return n + u.drills.length + u.quiz.length; }, 0);
    card.appendChild(el('p', 'muted', words + ' words · ' + ex + ' exercises'));
    if (!problems.length) {
      card.appendChild(el('p', null, 'Every unit obeys SCHEMA.md.'));
    } else {
      card.appendChild(el('p', 'warn', problems.length + ' problem(s):'));
      var list = el('ul');
      problems.forEach(function (p) { list.appendChild(el('li', 'warn', p)); });
      card.appendChild(list);
    }
    wrap.appendChild(card);
    return wrap;
  }

  /* ---------- routing ---------- */

  var RUN_ROUTES = { practice: 1, quiz: 1, review: 1, listening: 1, shuffle: 1 };

  function render() {
    closeSheet();
    paintHeader();
    var hash = location.hash || '#/path';
    var parts = hash.replace('#/', '').split('/');
    var key = parts[0] || 'path';
    var view;
    switch (key) {
      case 'unit': view = screenUnit(parts[1]); break;
      case 'practice': view = screenSession('practice', parts[1]); break;
      case 'quiz': view = screenSession('quiz', parts[1]); break;
      case 'review': view = screenSession('review'); break;
      case 'listening': view = screenSession('listening'); break;
      case 'shuffle': view = screenSession('shuffle'); break;
      case 'train': view = screenTrain(); break;
      case 'words': case 'reference': view = screenWords(); break;
      case 'more': case 'settings': view = screenMore(); break;
      case 'guide': view = screenGuide(); break;
      case 'credits': view = screenCredits(); break;
      case 'check': view = screenCheck(); break;
      default: view = screenPath();
    }
    document.body.classList.toggle('in-run', !!RUN_ROUTES[key]);
    root.innerHTML = '';
    root.appendChild(view);
    window.scrollTo(0, 0);
    setActiveTab(key);
  }

  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', function () {
    root = document.getElementById('app');
    headerSlot = document.getElementById('header');
    buildTabs();
    render();
  });
})();
