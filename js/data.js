/* data.js — the registry every other file talks to.
   Must be the first script on the page: data files call LEB.addUnit(),
   the reference file calls LEB.setReference(). */

window.LEB = (function () {
  var stages = [
    {
      id: 1,
      name: 'First Words',
      level: 'A0',
      blurb: 'Sounds, greetings, people and things. Say who you are and ask who someone else is.'
    },
    {
      id: 2,
      name: 'Getting By',
      level: 'A1',
      blurb: 'Want, have, can. Order, pay, describe, tell the time, find your way.'
    },
    {
      id: 3,
      name: 'Everyday Actions',
      level: 'A2',
      blurb: 'The present tense engine and the verbs you use every single day.'
    },
    {
      id: 4,
      name: 'Time and Stories',
      level: 'B1',
      blurb: 'Right now, tomorrow, yesterday. Tell what happened and what you were going to do.'
    },
    {
      id: 5,
      name: 'Real Talk',
      level: 'B2',
      blurb: 'Opinions, arguments, invitations, jokes. The register that makes you sound Lebanese.'
    }
  ];

  var units = [];
  var reference = null;

  function addUnit(u) {
    if (!u || !u.id) {
      console.error('LEB.addUnit: unit without an id', u);
      return;
    }
    if (units.some(function (x) { return x.id === u.id; })) {
      console.error('LEB.addUnit: duplicate unit id "' + u.id + '"');
      return;
    }
    u.grammar = u.grammar || [];
    u.vocab = u.vocab || [];
    u.phrases = u.phrases || [];
    u.drills = u.drills || [];
    u.quiz = u.quiz || [];
    u.canDo = u.canDo || [];
    units.push(u);
  }

  function setReference(r) { reference = r; }

  function all() {
    return units.slice().sort(function (a, b) {
      return (a.stage - b.stage) || (a.order - b.order);
    });
  }

  function byStage(stageId) {
    return all().filter(function (u) { return u.stage === stageId; });
  }

  function byId(id) {
    for (var i = 0; i < units.length; i++) {
      if (units[i].id === id) return units[i];
    }
    return null;
  }

  function indexOf(id) {
    var list = all();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return i;
    }
    return -1;
  }

  function next(id) {
    var list = all();
    var i = indexOf(id);
    return (i > -1 && i + 1 < list.length) ? list[i + 1] : null;
  }

  /* Every reviewable fact in a unit, as a flat list.
     A stable key matters: the spaced-review schedule is stored against it. */
  function reviewItems(u) {
    var items = [];
    u.vocab.forEach(function (v, i) {
      items.push({
        key: u.id + ':v' + i,
        unitId: u.id,
        kind: 'vocab',
        en: v.en,
        lb: v.lb,
        ar: v.ar || '',
        note: v.note || ''
      });
    });
    u.phrases.forEach(function (p, i) {
      items.push({
        key: u.id + ':p' + i,
        unitId: u.id,
        kind: 'phrase',
        en: p.en,
        lb: p.lb,
        ar: p.ar || '',
        note: p.when || p.note || ''
      });
    });
    return items;
  }

  return {
    stages: stages,
    addUnit: addUnit,
    setReference: setReference,
    getReference: function () { return reference; },
    all: all,
    byStage: byStage,
    byId: byId,
    next: next,
    indexOf: indexOf,
    reviewItems: reviewItems
  };
})();
