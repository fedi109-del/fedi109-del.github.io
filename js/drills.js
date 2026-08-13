/* drills.js — the six kinds of exercise.
   Every kind exposes the same little contract, so the runner in app.js does not
   need to know which one it is showing:

     var d = Drills.create(item, hostElement);
     d.ready()  -> has the learner answered yet?
     d.check()  -> {correct: bool, right: string, note: string}
     d.lock()   -> stop accepting input (called after checking)

   Item shapes are documented in SCHEMA.md. */

window.Drills = (function () {

  /* ---------- helpers ---------- */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function shuffle(a) {
    var arr = a.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  /* Typing must forgive what a keyboard cannot easily produce: accents, capitals and
     vowel length carry information, but nobody types them at speed, and the exact form
     is always shown afterwards. Doubled CONSONANTS are a different matter — gemination
     changes the word (`Tawwlo` is an order, `tTawwlo` forbids it), so only doubled
     vowels are collapsed. */
  function loose(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/[éèêë]/g, 'e')
      .replace(/[àâä]/g, 'a')
      .replace(/[ìîï]/g, 'i')
      .replace(/[òôö]/g, 'o')
      .replace(/[ùûü]/g, 'u')
      .replace(/['’`]/g, '2')
      .replace(/[^a-z0-9؀-ۿ ]/g, ' ')
      .replace(/([aeiou])\1+/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function sameText(a, b) { return loose(a) === loose(b); }

  function arabicOn() { return window.Store && Store.settings().arabic; }

  /* Returns nothing and appends nothing when there is nothing to say — which is
     what lets `conjugate` and `listen` reuse `choice` for its options without
     inheriting a second "Choose the right one" under the heading they already
     drew themselves. */
  function promptBlock(host, label, text, sub) {
    if (!label && !text) return null;
    var wrap = el('div', 'drill-prompt');
    if (label) wrap.appendChild(el('div', 'drill-label', label));
    if (text) wrap.appendChild(el('div', 'drill-question', text));
    if (sub && arabicOn()) wrap.appendChild(el('div', 'ar', sub));
    host.appendChild(wrap);
    return wrap;
  }

  /* ---------- 1. multiple choice ---------- */

  function choice(item, host) {
    promptBlock(host, item.label || 'Choose the right one', item.q, item.qAr);
    var picked = -1;
    var list = el('div', 'options');
    var order = shuffle(item.options.map(function (o, i) { return i; }));
    var buttons = [];

    order.forEach(function (originalIndex) {
      var b = el('button', 'option', item.options[originalIndex]);
      b.type = 'button';
      b.dataset.i = originalIndex;
      b.addEventListener('click', function () {
        if (b.disabled) return;
        buttons.forEach(function (x) { x.classList.remove('picked'); });
        b.classList.add('picked');
        picked = originalIndex;
      });
      buttons.push(b);
      list.appendChild(b);
    });
    host.appendChild(list);

    return {
      ready: function () { return picked > -1; },
      check: function () {
        var ok = picked === item.answer;
        buttons.forEach(function (b) {
          if (Number(b.dataset.i) === item.answer) b.classList.add('right');
          else if (b.classList.contains('picked')) b.classList.add('wrong');
        });
        return { correct: ok, right: item.options[item.answer], note: item.explain || '' };
      },
      lock: function () { buttons.forEach(function (b) { b.disabled = true; }); }
    };
  }

  /* ---------- 2. build the sentence from tiles ---------- */

  function build(item, host) {
    promptBlock(host, 'Build the sentence', item.en);
    var line = el('div', 'tile-line');
    var bank = el('div', 'tile-bank');
    host.appendChild(line);
    host.appendChild(bank);

    /* chosen holds positions in the shuffled bank, not words: that way tapping a
       word in the line puts that exact tile back where it came from. */
    var chosen = [];
    var pool = item.tiles ? item.tiles.slice() : item.answer.split(' ');
    if (item.extra) pool = pool.concat(item.extra);

    function words() {
      return chosen.map(function (i) { return shuffled[i]; });
    }

    function redraw() {
      line.innerHTML = '';
      bank.innerHTML = '';
      if (!chosen.length) line.appendChild(el('span', 'tile-hint', 'tap the words in order'));
      chosen.forEach(function (bankIndex, position) {
        var t = el('button', 'tile', shuffled[bankIndex]);
        t.type = 'button';
        t.addEventListener('click', function () {
          if (locked) return;
          chosen.splice(position, 1);
          redraw();
        });
        line.appendChild(t);
      });
      shuffled.forEach(function (word, i) {
        if (chosen.indexOf(i) > -1) return;
        var t = el('button', 'tile ghost', word);
        t.type = 'button';
        t.addEventListener('click', function () {
          if (locked) return;
          chosen.push(i);
          redraw();
        });
        bank.appendChild(t);
      });
    }

    var shuffled = shuffle(pool);
    var locked = false;
    redraw();

    return {
      ready: function () { return chosen.length > 0; },
      check: function () {
        var ok = sameText(words().join(' '), item.answer);
        line.classList.add(ok ? 'right' : 'wrong');
        return { correct: ok, right: item.answer, note: item.explain || '' };
      },
      lock: function () { locked = true; }
    };
  }

  /* ---------- 3. type it ---------- */

  function typeIt(item, host) {
    promptBlock(host, item.label || 'Write it in Lebanese', item.en);
    var input = el('input', 'type-input');
    input.type = 'text';
    input.autocomplete = 'off';
    input.autocapitalize = 'off';
    input.spellcheck = false;
    input.placeholder = 'type here…';
    host.appendChild(input);

    var keys = el('div', 'key-row');
    ['7', '3', '2', 'é'].forEach(function (k) {
      var b = el('button', 'key', k);
      b.type = 'button';
      b.title = k === '7' ? 'ح' : k === '3' ? 'ع' : k === '2' ? 'ء / ق' : 'long e';
      b.addEventListener('click', function () {
        input.value += k;
        input.focus();
      });
      keys.appendChild(b);
    });
    host.appendChild(keys);
    setTimeout(function () { input.focus(); }, 30);

    return {
      ready: function () { return input.value.trim().length > 0; },
      check: function () {
        var answers = [item.answer].concat(item.accept || []);
        var ok = answers.some(function (a) { return sameText(input.value, a); });
        input.classList.add(ok ? 'right' : 'wrong');
        return { correct: ok, right: item.answer, note: item.explain || '' };
      },
      lock: function () { input.disabled = true; }
    };
  }

  /* ---------- 4. match the pairs ---------- */

  function match(item, host) {
    promptBlock(host, 'Match them up', item.q || 'Tap a Lebanese word, then its meaning.');
    var board = el('div', 'match-board');
    var left = el('div', 'match-col');
    var right = el('div', 'match-col');
    board.appendChild(left);
    board.appendChild(right);
    host.appendChild(board);

    var pairs = item.pairs;
    var misses = 0;
    var solved = 0;
    var selected = null;
    var locked = false;

    shuffle(pairs.map(function (p, i) { return i; })).forEach(function (i) {
      var b = el('button', 'match-item', pairs[i][0]);
      b.type = 'button';
      b.dataset.pair = i;
      b.dataset.side = 'lb';
      b.addEventListener('click', function () { pick(b); });
      left.appendChild(b);
    });
    shuffle(pairs.map(function (p, i) { return i; })).forEach(function (i) {
      var b = el('button', 'match-item', pairs[i][1]);
      b.type = 'button';
      b.dataset.pair = i;
      b.dataset.side = 'en';
      b.addEventListener('click', function () { pick(b); });
      right.appendChild(b);
    });

    function pick(b) {
      if (locked || b.classList.contains('solved')) return;
      if (!selected) {
        selected = b;
        b.classList.add('picked');
        return;
      }
      if (selected === b) {
        b.classList.remove('picked');
        selected = null;
        return;
      }
      if (selected.dataset.side === b.dataset.side) {
        selected.classList.remove('picked');
        selected = b;
        b.classList.add('picked');
        return;
      }
      if (selected.dataset.pair === b.dataset.pair) {
        selected.classList.remove('picked');
        selected.classList.add('solved');
        b.classList.add('solved');
        solved++;
      } else {
        misses++;
        var a = selected;
        a.classList.add('miss');
        b.classList.add('miss');
        setTimeout(function () {
          a.classList.remove('miss', 'picked');
          b.classList.remove('miss');
        }, 500);
        a.classList.remove('picked');
      }
      selected = null;
    }

    return {
      ready: function () { return solved === pairs.length; },
      check: function () {
        return {
          correct: misses === 0,
          right: misses === 0 ? 'All matched, no misses.' : 'Matched, with ' + misses + ' wrong tap' + (misses > 1 ? 's' : '') + '.',
          note: item.explain || ''
        };
      },
      lock: function () { locked = true; }
    };
  }

  /* ---------- 5. conjugation drill ---------- */

  function conjugate(item, host) {
    var wrap = el('div', 'drill-prompt');
    wrap.appendChild(el('div', 'drill-label', 'Conjugate'));
    wrap.appendChild(el('div', 'drill-question', item.en));
    var meta = el('div', 'conj-meta');
    if (item.root) {
      var r = el('span', 'chip');
      r.innerHTML = 'root <b>' + item.root + '</b>';
      meta.appendChild(r);
    }
    if (item.person) {
      var p = el('span', 'chip');
      p.innerHTML = 'person <b>' + item.person + '</b>';
      meta.appendChild(p);
    }
    if (item.tense) {
      var t = el('span', 'chip');
      t.innerHTML = 'tense <b>' + item.tense + '</b>';
      meta.appendChild(t);
    }
    wrap.appendChild(meta);
    host.appendChild(wrap);

    if (item.options) {
      var inner = choice({
        q: '',
        label: '',
        options: item.options,
        answer: item.answer,
        explain: item.explain
      }, host);
      return inner;
    }
    return typeIt({ en: '', label: '', answer: item.answer, accept: item.accept, explain: item.explain }, host);
  }

  /* ---------- 6. fill the gap in a conversation ---------- */

  function gap(item, host) {
    promptBlock(host, 'Complete the conversation', item.en || 'What is missing?');
    var thread = el('div', 'thread');
    var slot = null;
    item.lines.forEach(function (line) {
      var row = el('div', 'bubble-row ' + (line.you ? 'you' : 'them'));
      var b = el('div', 'bubble');
      if (line.blank) {
        slot = el('span', 'slot', '____');
        b.appendChild(slot);
      } else {
        var head = el('span', 'bubble-head');
        head.appendChild(el('span', 'bubble-lb', line.lb));
        Say.attach(head, line.lb);
        b.appendChild(head);
        if (line.ar && arabicOn()) b.appendChild(el('span', 'ar small', line.ar));
        if (line.en) b.appendChild(el('span', 'bubble-en', line.en));
      }
      var who = el('div', 'who', line.who || (line.you ? 'You' : ''));
      row.appendChild(who);
      row.appendChild(b);
      thread.appendChild(row);
    });
    host.appendChild(thread);

    var picked = -1;
    var buttons = [];
    var list = el('div', 'options');
    shuffle(item.options.map(function (o, i) { return i; })).forEach(function (i) {
      var b = el('button', 'option', item.options[i]);
      b.type = 'button';
      b.dataset.i = i;
      b.addEventListener('click', function () {
        if (b.disabled) return;
        buttons.forEach(function (x) { x.classList.remove('picked'); });
        b.classList.add('picked');
        picked = i;
        if (slot) slot.textContent = item.options[i];
      });
      buttons.push(b);
      list.appendChild(b);
    });
    host.appendChild(list);

    return {
      ready: function () { return picked > -1; },
      check: function () {
        var ok = picked === item.answer;
        if (slot) {
          slot.textContent = item.options[item.answer];
          slot.classList.add(ok ? 'right' : 'wrong');
        }
        buttons.forEach(function (b) {
          if (Number(b.dataset.i) === item.answer) b.classList.add('right');
          else if (b.classList.contains('picked')) b.classList.add('wrong');
        });
        return { correct: ok, right: item.options[item.answer], note: item.explain || '' };
      },
      lock: function () { buttons.forEach(function (b) { b.disabled = true; }); }
    };
  }

  /* ---------- 7. hear it and choose ----------
     The only exercise where the Lebanese is not on the screen: the learner has
     to get it from the ear alone. When the recording for that word has not been
     made yet the word is shown instead of played, so the exercise degrades into
     a plain reading question rather than becoming an unanswerable silence. */

  function listen(item, host) {
    var heard = window.Say && Say.has(item.lb);
    var wrap = el('div', 'drill-prompt listen-prompt');
    wrap.appendChild(el('div', 'drill-label', heard ? 'Listen, then choose' : 'What does it mean?'));

    if (heard) {
      var big = el('button', 'listen-btn');
      big.type = 'button';
      big.setAttribute('aria-label', 'Play it again');
      big.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true">' +
        '<path d="M3 8h3l4-3.2v10.4L6 12H3z"/>' +
        '<path class="wave" d="M12.6 7.6a3.4 3.4 0 0 1 0 4.8"/>' +
        '<path class="wave" d="M15 5.4a6.6 6.6 0 0 1 0 9.2"/></svg>' +
        '<span>Play it again</span>';
      big.addEventListener('click', function () { Say.play(item.lb, { btn: big }); });
      wrap.appendChild(big);
      /* Play once by itself: nobody should have to press a button to be asked
         the question. A short delay lets the screen settle first. */
      setTimeout(function () { Say.play(item.lb, { btn: big }); }, 260);
    } else {
      wrap.appendChild(el('div', 'drill-question', item.lb));
    }
    host.appendChild(wrap);

    return choice({
      q: '',
      label: '',
      options: item.options,
      answer: item.answer,
      explain: item.explain
    }, host);
  }

  /* ---------- 8. a teaching card ----------
     Not an exercise: the moment a new word is handed over. It exists so that a
     lesson never asks for a word it has not first put in the learner's hand.
     The runner shows Continue instead of Check and keeps it out of the score. */

  function teach(item, host) {
    var card = el('div', 'teach-card');
    card.appendChild(el('div', 'teach-tag', item.pos === 'phr' ? 'New phrase' : 'New word'));

    var head = el('div', 'teach-head');
    head.appendChild(el('div', 'teach-lb', item.lb));
    var spoken = window.Say && Say.attach(head, item.lb, { size: 'lg' });
    card.appendChild(head);

    if (item.ar && arabicOn()) card.appendChild(el('div', 'ar teach-ar', item.ar));
    card.appendChild(el('div', 'teach-en', item.en));

    if (item.pos || item.gender) {
      var tags = el('div', 'v-tags');
      if (item.pos) tags.appendChild(el('span', 'tag', item.pos));
      if (item.gender) tags.appendChild(el('span', 'tag', item.gender));
      card.appendChild(tags);
    }
    if (item.note) card.appendChild(el('div', 'teach-note', item.note));
    host.appendChild(card);

    /* Heard before read about: the clip plays once on its own when it exists. */
    if (spoken) {
      setTimeout(function () { Say.play(item.lb, { btn: spoken }); }, 300);
    }

    return {
      ready: function () { return true; },
      check: function () { return { correct: true, right: '', note: '' }; },
      lock: function () {}
    };
  }

  /* ---------- dispatch ---------- */

  var kinds = {
    choice: choice,
    build: build,
    type: typeIt,
    match: match,
    conjugate: conjugate,
    gap: gap,
    listen: listen,
    teach: teach
  };

  function create(item, host) {
    host.innerHTML = '';
    var make = kinds[item.type];
    if (!make) {
      host.appendChild(el('p', 'warn', 'Unknown exercise type: ' + item.type));
      return { ready: function () { return true; }, check: function () { return { correct: true, right: '', note: '' }; }, lock: function () {} };
    }
    return make(item, host);
  }

  return { create: create, loose: loose, sameText: sameText, shuffle: shuffle };
})();
