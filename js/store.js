/* store.js — everything the learner accumulates: progress, XP, streak,
   and the spaced-review schedule. All of it lives in localStorage, so the app
   keeps working with no server and no account. */

window.Store = (function () {
  var KEY = 'lebanese-path/v1';
  var DAY = 86400000;

  /* Leitner boxes. Box 0 is "just missed, show me again today". */
  var INTERVALS = [0, 1, 2, 4, 9, 21, 45];

  var defaults = {
    units: {},          /* unitId -> {seen, practiced, quizBest, done} */
    sched: {},          /* review key -> {box, due, lb, en, ar, note, unitId, kind} */
    xp: 0,
    streak: 0,
    lastDay: '',
    settings: { arabic: true, guided: false, audio: true }
  };

  var state = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return clone(defaults);
      var saved = JSON.parse(raw);
      var s = clone(defaults);
      if (saved.units) s.units = saved.units;
      if (saved.sched) s.sched = saved.sched;
      if (typeof saved.xp === 'number') s.xp = saved.xp;
      if (typeof saved.streak === 'number') s.streak = saved.streak;
      if (saved.lastDay) s.lastDay = saved.lastDay;
      if (saved.settings) {
        s.settings.arabic = saved.settings.arabic !== false;
        s.settings.audio = saved.settings.audio !== false;
        /* `guided` replaced the old `freeRoam` and flipped its meaning: the course
           used to be locked unless you opted out, now it is open unless you opt in.
           An old save is deliberately not migrated — whoever was locked out by the
           previous default should find the whole path open the next time they look. */
        s.settings.guided = saved.settings.guided === true;
      }
      return s;
    } catch (e) {
      console.warn('Progress could not be read, starting fresh.', e);
      return clone(defaults);
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Progress could not be saved.', e);
    }
  }

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  function unit(id) {
    if (!state.units[id]) {
      state.units[id] = { seen: false, practiced: false, quizBest: 0, done: false };
    }
    return state.units[id];
  }

  function markSeen(id) { unit(id).seen = true; save(); }
  function markPracticed(id) { unit(id).practiced = true; save(); }

  function recordQuiz(id, score) {
    var u = unit(id);
    if (score > u.quizBest) u.quizBest = score;
    if (score >= 80) u.done = true;
    save();
    return u;
  }

  /* Every unit is open. Guided mode is the exception, not the rule: switch it on
     and a unit waits until you have cleared the one before it. */
  function isOpen(unitId) {
    if (!state.settings.guided) return true;
    var i = LEB.indexOf(unitId);
    if (i <= 0) return true;
    var prev = LEB.all()[i - 1];
    return unit(prev.id).done;
  }

  function completedCount() {
    return LEB.all().filter(function (u) { return unit(u.id).done; }).length;
  }

  function stageProgress(stageId) {
    var list = LEB.byStage(stageId);
    if (!list.length) return 0;
    var done = list.filter(function (u) { return unit(u.id).done; }).length;
    return Math.round((done / list.length) * 100);
  }

  /* ---- spaced review ---- */

  function enroll(items) {
    var now = Date.now();
    items.forEach(function (it) {
      if (state.sched[it.key]) return;
      state.sched[it.key] = {
        box: 0,
        due: now,
        lb: it.lb,
        en: it.en,
        ar: it.ar || '',
        note: it.note || '',
        unitId: it.unitId,
        kind: it.kind
      };
    });
    save();
  }

  function due(limit) {
    var now = Date.now();
    var out = [];
    for (var k in state.sched) {
      if (!state.sched.hasOwnProperty(k)) continue;
      if (state.sched[k].due <= now) {
        var e = state.sched[k];
        out.push({ key: k, box: e.box, lb: e.lb, en: e.en, ar: e.ar, note: e.note, unitId: e.unitId, kind: e.kind });
      }
    }
    out.sort(function (a, b) { return a.box - b.box; });
    return limit ? out.slice(0, limit) : out;
  }

  function dueCount() { return due().length; }

  function grade(key, correct) {
    var e = state.sched[key];
    if (!e) return;
    e.box = correct ? Math.min(e.box + 1, INTERVALS.length - 1) : 0;
    e.due = Date.now() + INTERVALS[e.box] * DAY;
    save();
  }

  /* ---- xp and streak ---- */

  function addXp(n) {
    state.xp += n;
    touchStreak();
    save();
  }

  function touchStreak() {
    var t = today();
    if (state.lastDay === t) return;
    var y = new Date(Date.now() - DAY);
    var yStr = y.getFullYear() + '-' + (y.getMonth() + 1) + '-' + y.getDate();
    state.streak = (state.lastDay === yStr) ? state.streak + 1 : 1;
    state.lastDay = t;
  }

  function setSetting(name, value) {
    state.settings[name] = value;
    save();
  }

  function reset() {
    state = clone(defaults);
    save();
  }

  return {
    unit: unit,
    markSeen: markSeen,
    markPracticed: markPracticed,
    recordQuiz: recordQuiz,
    isOpen: isOpen,
    completedCount: completedCount,
    stageProgress: stageProgress,
    enroll: enroll,
    due: due,
    dueCount: dueCount,
    grade: grade,
    addXp: addXp,
    setSetting: setSetting,
    reset: reset,
    settings: function () { return state.settings; },
    xp: function () { return state.xp; },
    streak: function () { return state.streak; }
  };
})();
