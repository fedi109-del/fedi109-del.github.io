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
    brand.appendChild(el('span', 'brand-mark', '🌲'));
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
    var wrap = el('div', 'screen');
    var hero = el('section', 'hero');
    hero.appendChild(el('h1', null, 'Learn Lebanese, not textbook Arabic'));
    hero.appendChild(el('p', 'lede',
      'This is the spoken language of Lebanon: the one people actually use in a taxi, ' +
      'at the bakery, on the phone. Forty units, five stages, from your first hello to ' +
      'holding an argument about traffic.'));
    var done = Store.completedCount();
    var totalUnits = LEB.all().length;
    hero.appendChild(el('p', 'muted', done + ' of ' + totalUnits + ' units cleared'));

    var next = nextUnitToDo();
    if (next) {
      var row = el('div', 'row');
      var cont = el('a', 'primary-btn', done ? 'Continue — unit ' + next.order : 'Start unit 1');
      cont.href = '#/unit/' + next.id;
      row.appendChild(cont);
      var due = Store.dueCount();
      if (due) {
        var rev = el('a', 'ghost-btn', 'Review ' + due + ' now');
        rev.href = '#/review';
        row.appendChild(rev);
      }
      hero.appendChild(row);
    }
    wrap.appendChild(hero);

    LEB.stages.forEach(function (stage) {
      var units = LEB.byStage(stage.id);
      if (!units.length) return;
      var sec = el('section', 'stage');
      var head = el('div', 'stage-head');
      var titles = el('div');
      titles.appendChild(el('h2', null, stage.name));
      titles.appendChild(el('p', 'muted', stage.blurb));
      head.appendChild(titles);
      var badge = el('div', 'level-badge', stage.level);
      head.appendChild(badge);
      sec.appendChild(head);

      var pct = Store.stageProgress(stage.id);
      var bar = el('div', 'bar slim');
      var fill = el('div', 'bar-fill');
      fill.style.width = pct + '%';
      bar.appendChild(fill);
      sec.appendChild(bar);

      var grid = el('div', 'unit-grid');
      units.forEach(function (u) { grid.appendChild(unitCard(u)); });
      sec.appendChild(grid);
      wrap.appendChild(sec);
    });

    if (!LEB.all().length) {
      wrap.appendChild(el('p', 'warn', 'No units are loaded. Check the <script> tags in index.html.'));
    }
    return wrap;
  }

  /* The first unit that is open and not yet cleared — where "continue" lands. */
  function nextUnitToDo() {
    var list = LEB.all();
    for (var i = 0; i < list.length; i++) {
      if (Store.isOpen(list[i].id) && !Store.unit(list[i].id).done) return list[i];
    }
    return list[list.length - 1] || null;
  }

  function unitCard(u) {
    var p = Store.unit(u.id);
    var open = Store.isOpen(u.id);
    var card = el(open ? 'a' : 'div', 'unit-card' + (p.done ? ' done' : '') + (open ? '' : ' locked'));
    if (open) card.href = '#/unit/' + u.id;

    var top = el('div', 'unit-top');
    top.appendChild(el('span', 'unit-num', String(u.order)));
    if (p.done) top.appendChild(el('span', 'tick', '✓'));
    else if (!open) top.appendChild(el('span', 'tick', '🔒'));
    card.appendChild(top);

    card.appendChild(el('h3', null, u.title));
    card.appendChild(el('p', 'muted', u.goal || ''));

    if (p.quizBest) card.appendChild(el('div', 'unit-score', 'best quiz ' + p.quizBest + '%'));
    return card;
  }

  /* ---------- one unit ---------- */

  function screenUnit(id) {
    var u = LEB.byId(id);
    if (!u) return el('p', 'warn', 'Unknown unit: ' + id);
    Store.markSeen(u.id);
    Store.enroll(LEB.reviewItems(u));

    var wrap = el('div', 'screen');
    var head = el('header', 'unit-head');
    head.appendChild(el('div', 'crumb', 'Stage ' + u.stage + ' · Unit ' + u.order));
    head.appendChild(el('h1', null, u.title));
    if (u.goal) head.appendChild(el('p', 'lede', u.goal));
    if (u.canDo.length) {
      var list = el('ul', 'can-do');
      u.canDo.forEach(function (c) { list.appendChild(el('li', null, c)); });
      head.appendChild(list);
    }
    wrap.appendChild(head);

    u.grammar.forEach(function (g) { wrap.appendChild(grammarBlock(g)); });
    if (u.vocab.length) wrap.appendChild(vocabBlock(u.vocab));
    if (u.phrases.length) wrap.appendChild(phraseBlock(u.phrases));

    var actions = el('div', 'actions card');
    var p = Store.unit(u.id);
    actions.appendChild(el('h2', null, 'Ready?'));
    actions.appendChild(el('p', 'muted',
      'Practice as many times as you like. The quiz needs 80% to open the next unit.'));
    var row = el('div', 'row');
    var practice = el('a', 'primary-btn', 'Practice (' + u.drills.length + ')');
    practice.href = '#/practice/' + u.id;
    row.appendChild(practice);
    var quiz = el('a', 'ghost-btn', 'Quiz (' + u.quiz.length + ')');
    quiz.href = '#/quiz/' + u.id;
    row.appendChild(quiz);
    actions.appendChild(row);
    if (p.quizBest) actions.appendChild(el('p', 'muted', 'Best so far: ' + p.quizBest + '%'));
    wrap.appendChild(actions);
    return wrap;
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
        row.appendChild(el('div', 'ex-lb', e.lb));
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
      var lb = el('div', 'v-lb', v.lb);
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
      row.appendChild(el('div', 'p-lb', p.lb));
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
        var card = el('div', 'card');
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
        row.appendChild(el('div', 'v-lb', v.lb));
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
    card.appendChild(toggle('Open every unit', 'freeRoam',
      'Off by default: a unit opens when you clear the one before it with 80%. ' +
      'Turn it on to wander wherever you like.'));
    wrap.appendChild(card);

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
      if (['choice', 'gap', 'build', 'type', 'match', 'conjugate'].indexOf(d.type) === -1) {
        return fail(where + ': unknown type "' + d.type + '"');
      }
      if (d.type === 'choice' || d.type === 'gap' || (d.type === 'conjugate' && d.options)) {
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
