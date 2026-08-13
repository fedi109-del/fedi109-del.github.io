/* runner.js — one exercise session, whatever it is made of.
   Practice, quiz and review all end up here; only the queue differs. */

window.Runner = (function () {

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  /* Review questions are built on the fly from whatever is due, so a fact met in
     unit 3 can come back inside a unit-20 session without being stored twice. */
  function reviewQueue(dueItems, pool) {
    return dueItems.map(function (it) {
      var others = pool.filter(function (p) { return p.lb !== it.lb; });
      var picks = Drills.shuffle(others).slice(0, 3).map(function (p) { return p.lb; });
      if (Math.random() < 0.45 || picks.length < 3) {
        return {
          reviewKey: it.key,
          type: 'type',
          label: 'Review — write it in Lebanese',
          en: it.en,
          answer: it.lb,
          explain: it.note || ''
        };
      }
      var options = Drills.shuffle([it.lb].concat(picks));
      return {
        reviewKey: it.key,
        type: 'choice',
        label: 'Review',
        q: it.en,
        options: options,
        answer: options.indexOf(it.lb),
        explain: it.note || ''
      };
    });
  }

  /* mode: 'practice' | 'quiz' | 'review' | 'listening' | 'mix' */
  function start(opts) {
    var host = opts.host;
    var queue = opts.queue.slice();
    var mode = opts.mode;
    var total = queue.length;
    /* Teaching cards ride the same queue but are not questions: they fill the
       progress bar, never the score. A session of cards alone scores 100. */
    var scoreable = queue.filter(function (q) { return q.type !== 'teach'; }).length;
    var pos = 0;
    var correct = 0;
    var current = null;
    var checked = false;

    host.innerHTML = '';
    var head = el('div', 'run-head');
    var back = el('button', 'ghost-btn', '✕');
    back.type = 'button';
    back.title = 'Leave the session';
    back.addEventListener('click', opts.onQuit);
    var barOuter = el('div', 'bar');
    var barInner = el('div', 'bar-fill');
    barOuter.appendChild(barInner);
    var counter = el('div', 'run-counter', '');
    head.appendChild(back);
    head.appendChild(barOuter);
    head.appendChild(counter);
    host.appendChild(head);

    var stage = el('div', 'run-stage');
    host.appendChild(stage);

    var foot = el('div', 'run-foot');
    var feedback = el('div', 'feedback');
    var action = el('button', 'primary-btn', 'Check');
    action.type = 'button';
    foot.appendChild(feedback);
    foot.appendChild(action);
    host.appendChild(foot);

    action.addEventListener('click', function () {
      if (!checked) doCheck();
      else advance();
    });

    document.addEventListener('keydown', onKey);
    function onKey(e) {
      if (e.key !== 'Enter') return;
      if (!host.isConnected) { document.removeEventListener('keydown', onKey); return; }
      e.preventDefault();
      action.click();
    }

    function paint() {
      checked = false;
      feedback.className = 'feedback';
      feedback.innerHTML = '';
      action.textContent = 'Check';
      action.className = 'primary-btn';
      counter.textContent = (pos + 1) + '/' + total;
      barInner.style.width = Math.round((pos / total) * 100) + '%';
      current = Drills.create(queue[pos], stage);
      /* A teaching card has nothing to get wrong: the button goes straight to
         Continue and the first press moves on. */
      if (queue[pos].type === 'teach') {
        checked = true;
        action.textContent = (pos + 1 >= total) ? 'Finish' : 'Continue';
      }
      stage.scrollTop = 0;
    }

    function doCheck() {
      if (!current.ready()) {
        feedback.className = 'feedback nudge';
        feedback.textContent = 'Give it a go first.';
        return;
      }
      var r = current.check();
      current.lock();
      checked = true;
      if (r.correct) correct++;
      if (queue[pos].reviewKey) Store.grade(queue[pos].reviewKey, r.correct);

      feedback.className = 'feedback ' + (r.correct ? 'good' : 'bad');
      var title = el('div', 'fb-title', r.correct ? 'Right.' : 'Not quite.');
      feedback.appendChild(title);
      if (!r.correct && r.right) {
        var ans = el('div', 'fb-answer');
        ans.appendChild(el('span', null, r.right));
        /* The one moment the ear is most likely to pay attention: you have just
           got it wrong and the correct form is on screen. */
        Say.attach(ans, r.right, { size: 'lg' });
        feedback.appendChild(ans);
      } else if (r.correct && typeof r.right === 'string' && Say.has(r.right)) {
        /* Right as well, but hearing it once more costs a second and is the
           difference between recognising a word and being able to say it. */
        var heard = el('div', 'fb-answer quiet');
        heard.appendChild(el('span', null, r.right));
        Say.attach(heard, r.right);
        feedback.appendChild(heard);
      }
      if (r.note) feedback.appendChild(el('div', 'fb-note', r.note));
      action.textContent = (pos + 1 >= total) ? 'Finish' : 'Continue';
      action.className = 'primary-btn ' + (r.correct ? 'good' : 'bad');
    }

    function advance() {
      pos++;
      if (pos >= total) return finish();
      paint();
    }

    function finish() {
      document.removeEventListener('keydown', onKey);
      barInner.style.width = '100%';
      var score = scoreable ? Math.round((correct / scoreable) * 100) : 100;
      Store.addXp(correct * 4 + (mode === 'quiz' ? 10 : 0));
      host.innerHTML = '';
      var card = el('div', 'card done-card');
      card.appendChild(el('div', 'done-score', score + '%'));
      card.appendChild(el('div', 'done-line', correct + ' of ' + scoreable + ' right'));

      var verdict = '';
      if (mode === 'quiz') {
        verdict = score >= 80
          ? 'Unit cleared. Everything you met here is now in the review queue.'
          : 'Eighty per cent marks a unit as cleared. Practise once more and come back — nothing is lost, and the next unit is open either way.';
      } else if (mode === 'review') {
        verdict = 'Everything you got right moves further away; everything you missed comes back tomorrow.';
      } else if (mode === 'listening') {
        verdict = 'Ear trained. The same clips hide inside lessons and reviews too.';
      } else if (mode === 'mix') {
        verdict = 'Mix done. Nothing here changes a unit score — it is pure training.';
      } else {
        verdict = 'Practice done. The quiz is unlocked.';
      }
      card.appendChild(el('p', 'done-note', verdict));

      var row = el('div', 'row');
      var again = el('button', 'ghost-btn', mode === 'practice' || mode === 'quiz' ? 'Back to the unit' : 'Back');
      again.type = 'button';
      again.addEventListener('click', opts.onQuit);
      row.appendChild(again);
      if (opts.onFinish) {
        var nextBtn = el('button', 'primary-btn', mode === 'practice' ? 'Take the quiz' : 'Continue');
        nextBtn.type = 'button';
        nextBtn.addEventListener('click', function () { opts.onFinish(score); });
        row.appendChild(nextBtn);
      }
      card.appendChild(row);
      host.appendChild(card);
      if (opts.onScore) opts.onScore(score);
    }

    if (!total) {
      host.innerHTML = '';
      var empty = el('div', 'card');
      empty.appendChild(el('h2', null, 'Nothing to do here yet'));
      empty.appendChild(el('p', 'muted', 'This session has no exercises.'));
      var b = el('button', 'primary-btn', 'Back');
      b.type = 'button';
      b.addEventListener('click', opts.onQuit);
      empty.appendChild(b);
      host.appendChild(empty);
      return;
    }
    paint();
  }

  return { start: start, reviewQueue: reviewQueue };
})();
