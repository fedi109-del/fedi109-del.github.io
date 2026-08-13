/* app.js — the screens and the navigation between them.
   Routes live in the address bar so the back button works: #/path, #/unit/u03,
   #/practice/u03, #/quiz/u03, #/review, #/reference, #/settings */

(function () {
  var root, headerSlot;

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

  /* ---------- header ---------- */

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

    var nav = el('nav', 'nav');
    [['#/path', 'Path'], ['#/reference', 'Reference'], ['#/settings', 'Settings']].forEach(function (p) {
      var a = el('a', 'nav-link', p[1]);
      a.href = p[0];
      nav.appendChild(a);
    });

    headerSlot.appendChild(stats);
    headerSlot.appendChild(nav);
  }

  /* ---------- the path ---------- */

  function screenPath() {
    var wrap = el('div', 'screen wide');
    var done = Store.completedCount();
    var totalUnits = LEB.all().length;
    var next = nextUnitToDo();

    /* The opening: the same evening the stage covers walk through, seen from the
       start of it. Everything the learner needs in order to begin is in this one
       panel — the promise, where they are, and the one button that continues. */
    var hero = el('section', 'hero-panel');
    var art = el('div', 'hero-art');
    /* Both drawings are laid down and CSS shows one: the upright composition
       beside the headline on a wide screen, the wide strip above it on a phone.
       Two SVGs cost about a kilobyte between them, which is cheaper than asking
       either one to survive a shape it was not drawn for. */
    var tall = el('div', 'art-tall');
    tall.innerHTML = Art.portrait();
    var wide = el('div', 'art-wide');
    wide.innerHTML = Art.scene('rooftops');
    art.appendChild(tall);
    art.appendChild(wide);
    hero.appendChild(art);

    var copy = el('div', 'hero-copy');
    copy.appendChild(el('h1', null, 'Learn Lebanese, not textbook Arabic'));
    copy.appendChild(el('p', 'lede',
      'This is the spoken language of Lebanon: the one people use in a taxi, at the ' +
      'bakery, on the phone. Forty units, five stages, from your first hello to holding ' +
      'an argument about traffic.'));

    var meters = el('div', 'meters');
    meters.appendChild(meter(done + '/' + totalUnits, 'units cleared'));
    meters.appendChild(meter(String(Store.xp()), 'experience'));
    meters.appendChild(meter(String(Store.streak()), 'day streak'));
    copy.appendChild(meters);

    if (next) {
      var row = el('div', 'row');
      var cont = el('a', 'primary-btn lg', done ? 'Continue — unit ' + next.order : 'Begin with unit 1');
      cont.href = '#/unit/' + next.id;
      row.appendChild(cont);
      var due = Store.dueCount();
      if (due) {
        var rev = el('a', 'ghost-btn lg', 'Review ' + due);
        rev.href = '#/review';
        row.appendChild(rev);
      }
      copy.appendChild(row);
    }
    hero.appendChild(copy);
    wrap.appendChild(hero);

    LEB.stages.forEach(function (stage) {
      var units = LEB.byStage(stage.id);
      if (!units.length) return;
      wrap.appendChild(stageBlock(stage, units, next));
    });

    if (!LEB.all().length) {
      wrap.appendChild(el('p', 'warn', 'No units are loaded. Check the script tags in index.html.'));
    }
    return wrap;
  }

  function meter(value, label) {
    var m = el('div', 'meter');
    m.appendChild(el('div', 'meter-num', value));
    m.appendChild(el('div', 'meter-lab', label));
    return m;
  }

  /* One stage: an illustrated band, then its units strung along a single thread.
     The thread is the point — five separate grids of cards read as a catalogue,
     one continuous line reads as a road you are somewhere along. */
  function stageBlock(stage, units, current) {
    var sec = el('section', 'stage');
    var cleared = units.filter(function (u) { return Store.unit(u.id).done; }).length;

    var band = el('div', 'stage-band');
    var cover = el('div', 'stage-cover');
    cover.innerHTML = Art.scene(Art.sceneForStage(stage.id));
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

    var trail = el('ol', 'trail');
    units.forEach(function (u) {
      trail.appendChild(unitNode(u, current && current.id === u.id));
    });
    sec.appendChild(trail);
    return sec;
  }

  /* A stop on the road. The circle carries the subject of the unit as a drawing,
     so the path can be read at a glance without any title being parsed: a cup, a
     taxi, a pair of scissors. */
  function unitNode(u, isCurrent) {
    var p = Store.unit(u.id);
    var open = Store.isOpen(u.id);
    var li = el('li', 'stop' + (p.done ? ' done' : '') + (open ? '' : ' locked') + (isCurrent ? ' current' : ''));

    var link = el(open ? 'a' : 'div', 'stop-inner');
    if (open) link.href = '#/unit/' + u.id;

    var dot = el('span', 'stop-dot');
    dot.innerHTML = p.done ? Art.glyph('check') : (open ? Art.glyph(Art.iconFor(u)) : Art.glyph('lock'));
    link.appendChild(dot);

    var body = el('span', 'stop-body');
    var top = el('span', 'stop-top');
    top.appendChild(el('span', 'stop-num', 'Unit ' + u.order));
    if (isCurrent && !p.done) top.appendChild(el('span', 'stop-flag', 'you are here'));
    if (p.quizBest) top.appendChild(el('span', 'stop-score', 'best ' + p.quizBest + '%'));
    body.appendChild(top);
    body.appendChild(el('span', 'stop-title', u.title));
    body.appendChild(el('span', 'stop-goal', u.goal || ''));
    link.appendChild(body);

    li.appendChild(link);
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

  /* ---------- one unit ---------- */

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

    wrap.appendChild(unitActions(u));
    return wrap;
  }

  /* The head of a lesson: the stage's own illustration, dimmed back so the words
     sit on top of it, with the unit's drawing pressed into the corner like a seal. */
  function unitCover(u) {
    var head = el('header', 'unit-cover');
    var back = el('div', 'unit-cover-art');
    back.innerHTML = Art.scene(Art.sceneForStage(u.stage));
    head.appendChild(back);

    var inner = el('div', 'unit-cover-copy');
    var seal = el('div', 'unit-seal');
    seal.innerHTML = Art.glyph(Art.iconFor(u));
    inner.appendChild(seal);

    var text = el('div');
    text.appendChild(el('div', 'crumb', 'Stage ' + u.stage + ' · Unit ' + u.order));
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

  function unitActions(u) {
    var actions = el('div', 'actions card');
    var p = Store.unit(u.id);
    actions.appendChild(el('h2', null, 'Now use it'));
    actions.appendChild(el('p', 'muted',
      'Practise as often as you like — nothing is scored there. The quiz is the one ' +
      'that counts, and eighty per cent marks the unit cleared.'));
    var row = el('div', 'row');
    var practice = el('a', 'primary-btn', 'Practise · ' + u.drills.length);
    practice.href = '#/practice/' + u.id;
    row.appendChild(practice);
    var quiz = el('a', 'ghost-btn', 'Quiz · ' + u.quiz.length);
    quiz.href = '#/quiz/' + u.id;
    row.appendChild(quiz);
    actions.appendChild(row);
    if (p.quizBest) actions.appendChild(el('p', 'muted', 'Best so far: ' + p.quizBest + '%'));

    var nx = LEB.next(u.id);
    if (nx) {
      var on = el('a', 'next-unit');
      on.href = '#/unit/' + nx.id;
      var g = el('span', 'next-glyph');
      g.innerHTML = Art.glyph(Art.iconFor(nx));
      on.appendChild(g);
      var t = el('span');
      t.appendChild(el('span', 'next-lab', 'Next · unit ' + nx.order));
      t.appendChild(el('span', 'next-title', nx.title));
      on.appendChild(t);
      actions.appendChild(on);
    }
    return actions;
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

  function screenSession(mode, id) {
    var host = el('div', 'screen run');
    var u = id ? LEB.byId(id) : null;

    if (mode === 'review') {
      var dueItems = Store.due(20);
      var pool = [];
      LEB.all().forEach(function (x) {
        if (Store.unit(x.id).seen) pool = pool.concat(LEB.reviewItems(x));
      });
      if (!dueItems.length) {
        var card = el('div', 'card empty-card');
        var pic = el('div', 'empty-pic');
        pic.innerHTML = Art.restful();
        card.appendChild(pic);
        card.appendChild(el('h2', null, 'Nothing is due'));
        card.appendChild(el('p', 'muted',
          'Come back later, or open a new unit — every word you meet joins the review queue by itself.'));
        var b = el('a', 'primary-btn', 'Back to the path');
        b.href = '#/path';
        card.appendChild(b);
        host.appendChild(card);
        return host;
      }
      Runner.start({
        host: host,
        mode: 'review',
        queue: Runner.reviewQueue(dueItems, pool),
        onQuit: function () { go('#/path'); },
        onFinish: function () { go('#/path'); }
      });
      return host;
    }

    if (!u) return el('p', 'warn', 'Unknown unit: ' + id);
    var queue = (mode === 'quiz' ? u.quiz : u.drills);
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

  /* ---------- reference ---------- */

  function screenReference() {
    var wrap = el('div', 'screen');
    wrap.appendChild(el('h1', null, 'Reference'));
    wrap.appendChild(el('p', 'lede', 'The tables worth coming back to, plus every word in the app.'));

    var ref = LEB.getReference();
    if (ref) {
      ref.sections.forEach(function (s) { wrap.appendChild(grammarBlock(s)); });
    }

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
    return wrap;
  }

  /* ---------- settings ---------- */

  function screenSettings() {
    var wrap = el('div', 'screen');
    wrap.appendChild(el('h1', null, 'Settings'));
    var card = el('section', 'card');

    card.appendChild(toggle('Show Arabic script', 'arabic',
      'Lebanese is mostly written in Latin letters by Lebanese people themselves. ' +
      'Keep the Arabic on if you also want to train your eye for signs and menus.'));
    card.appendChild(toggle('Play the audio', 'audio',
      'A speaker sits next to every word and every line. Turn it off if you would ' +
      'rather read in silence.'));
    card.appendChild(toggle('Guided path', 'guided',
      'Off by default: the whole course is open, wander wherever you like. ' +
      'Turn it on and each unit waits until you have cleared the one before it with 80%.'));
    wrap.appendChild(card);

    var sound = el('section', 'card');
    sound.appendChild(el('h2', null, 'About the recordings'));
    var have = Say.count();
    var total = 930;
    sound.appendChild(el('p', 'muted',
      have
        ? have + ' of roughly ' + total + ' clips are installed. A speaker appears next to ' +
          'everything that has one; the rest stay silent until their recording arrives.'
        : 'No recordings are installed yet, so no speakers are shown. Drop mp3 files into ' +
          'the audio folder, run the voci script, and they appear on their own.'));
    sound.appendChild(el('p', 'muted',
      'The app will never read Lebanese with the voice built into your phone or browser. ' +
      'Every one of those voices speaks Modern Standard Arabic — it would say qahwa for ' +
      'coffee, and you would learn a pronunciation nobody in Lebanon uses.'));
    wrap.appendChild(sound);

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

    var about = el('section', 'card');
    about.appendChild(el('h2', null, 'About the language here'));
    about.appendChild(el('p', 'muted',
      'Everything in this app is Lebanese (Levantine) as it is spoken — not Modern Standard Arabic. ' +
      'That is why qaaf is a glottal stop, why there is no verb "to have", and why some of these ' +
      'sentences would be wrong in a fuS7a exam. That is the point.'));
    wrap.appendChild(about);
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

  function render() {
    paintHeader();
    var hash = location.hash || '#/path';
    var parts = hash.replace('#/', '').split('/');
    var view;
    switch (parts[0]) {
      case 'unit': view = screenUnit(parts[1]); break;
      case 'practice': view = screenSession('practice', parts[1]); break;
      case 'quiz': view = screenSession('quiz', parts[1]); break;
      case 'review': view = screenSession('review'); break;
      case 'reference': view = screenReference(); break;
      case 'settings': view = screenSettings(); break;
      case 'check': view = screenCheck(); break;
      default: view = screenPath();
    }
    root.innerHTML = '';
    root.appendChild(view);
    window.scrollTo(0, 0);
    document.querySelectorAll('.nav-link').forEach(function (a) {
      a.classList.toggle('on', a.getAttribute('href') === '#/' + parts[0]);
    });
  }

  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', function () {
    root = document.getElementById('app');
    headerSlot = document.getElementById('header');
    render();
  });
})();
