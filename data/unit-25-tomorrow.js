LEB.addUnit({
  id: 'u25',
  stage: 4,
  order: 25,
  title: 'Tomorrow',
  goal: 'Say what you are going to do tomorrow, next week or later on, and what you are not going to do.',
  canDo: [
    'Build the future with one word that never changes',
    'Keep `3am` and `ra7` apart on the same verb',
    'Place an appointment in time: tomorrow, the day after, later, next week'
  ],

  grammar: [
    {
      heading: 'The future is one word plus a naked verb',
      body:
        'The future marker is `ra7`. Like `3am` it is invariable — no person, no gender, no ' +
        'plural — and like `3am` it stands in front of the verb. There the resemblance ends, ' +
        'because `ra7` belongs to the family of words that strip the `b-` off whatever follows ' +
        'them.\n\n' +
        'So the verb after `ra7` is the bare form: the one you already use after `léézem`, after ' +
        '`baddé`, after `fii-`. `ba3mol` becomes `a3mol`; `btenzal` becomes `tenzal`; `mnéékhod` ' +
        'becomes `néékhod`. The person is still fully marked — the bare form keeps its ' +
        'prefixes, it only loses the `b-`.\n\n' +
        'Notice the first person in the table. The root of "do" starts with an alef, and when ' +
        'the `b-` goes the alef comes back: `ra7 a3mol`. Roots that begin with a consonant have ' +
        'nothing to bring back: `ra7 néém`, `ra7 kouun`.\n\n' +
        'That is the whole tense. Lebanese has no separate set of future endings to learn, which ' +
        'means the work in this unit is not memorising forms but keeping two markers apart.',
      table: {
        headers: ['person', 'do (`a3mol`)', 'go down (`enzal`)'],
        rows: [
          ['ana', '`ra7 a3mol`', '`ra7 enzal`'],
          ['enta', '`ra7 ta3mol`', '`ra7 tenzal`'],
          ['enté', '`ra7 ta3mlé`', '`ra7 tenzalé`'],
          ['houwwé', '`ra7 ya3mol`', '`ra7 yenzal`'],
          ['hiyyé', '`ra7 ta3mol`', '`ra7 tenzal`'],
          ['ne7na', '`ra7 na3mol`', '`ra7 nenzal`'],
          ['ento', '`ra7 ta3mlo`', '`ra7 tenzalo`'],
          ['henné', '`ra7 ya3mlo`', '`ra7 yenzalo`']
        ]
      }
    },
    {
      heading: 'The contrast the whole course turns on',
      body:
        'Here are the two markers on one verb, side by side. This table is worth more than any ' +
        'vocabulary list in this unit: it is the single distinction that separates what you are ' +
        'doing from what you are going to do, and it is decided by three letters.\n\n' +
        '`3am` keeps the `b-`. `ra7` takes it away. Nothing else in the sentence changes, so if ' +
        'the `b-` is wrong the tense is wrong, and a listener will hear you saying you are ' +
        'already doing something when you meant tomorrow.\n\n' +
        'Read the rows out loud in pairs — `3am ba3mol`, `ra7 a3mol` — until the shape of each ' +
        'one is familiar on its own. Two forms that differ by one syllable are hard to keep ' +
        'apart when you meet them separately weeks apart; they are easy when you learn them as a ' +
        'pair.\n\n' +
        'A useful memory hook: `ra7` is doing exactly what every other verb-governing word in ' +
        'the language does. `3am` is the one exception. You are not learning two rules, you are ' +
        'learning one rule and its single exception.',
      table: {
        headers: ['person', 'now — `3am` + `b-` form', 'tomorrow — `ra7` + bare form'],
        rows: [
          ['ana', '`3am ba3mol`', '`ra7 a3mol`'],
          ['enta', '`3am bta3mol`', '`ra7 ta3mol`'],
          ['enté', '`3am bta3mlé`', '`ra7 ta3mlé`'],
          ['houwwé', '`3am bya3mol`', '`ra7 ya3mol`'],
          ['hiyyé', '`3am bta3mol`', '`ra7 ta3mol`'],
          ['ne7na', '`3am mna3mol`', '`ra7 na3mol`'],
          ['ento', '`3am bta3mlo`', '`ra7 ta3mlo`'],
          ['henné', '`3am bya3mlo`', '`ra7 ya3mlo`']
        ]
      },
      warning:
        '`ra7 ba3mol` and `3am a3mol` are both impossible. Each one has borrowed the other ' +
        'marker\'s verb form.'
    },
    {
      heading: 'Saying you will not',
      body:
        'The negative future is `maa ra7`. As with the present continuous, `maa` lands in front ' +
        'of the marker, never between the marker and the verb. `maa ra7 eb2a` — I will not stay. ' +
        '`maa ra7 yenzal` — he will not come down.\n\n' +
        'The order of the slots is fixed and worth memorising as a shape: `maa` first, then ' +
        '`ra7`, then the bare verb. Once you have that, the negative costs you nothing: take any ' +
        'sentence you can already build and put one word in front.\n\n' +
        'One thing that surprises English speakers: there is no "will be" hiding anywhere in the ' +
        'present. Lebanese does without a verb "to be" when it talks about now — `ana hoon`, I ' +
        'am here — but the future needs a real verb, and that verb is `kouun`. `ra7 kouun hoon` ' +
        'is "I will be here", and `maa ra7 kouun hoon` is the refusal.\n\n' +
        'That makes `kouun` the one verb in this unit you should know in every person, because ' +
        'arrangements are made with it: where you will be, when, and whether you will be free.',
      table: {
        headers: ['person', 'will stay', 'will not stay'],
        rows: [
          ['ana', '`ra7 eb2a`', '`maa ra7 eb2a`'],
          ['enta', '`ra7 teb2a`', '`maa ra7 teb2a`'],
          ['enté', '`ra7 teb2é`', '`maa ra7 teb2é`'],
          ['houwwé', '`ra7 yeb2a`', '`maa ra7 yeb2a`'],
          ['hiyyé', '`ra7 teb2a`', '`maa ra7 teb2a`'],
          ['ne7na', '`ra7 neb2a`', '`maa ra7 neb2a`'],
          ['ento', '`ra7 teb2o`', '`maa ra7 teb2o`'],
          ['henné', '`ra7 yeb2o`', '`maa ra7 yeb2o`']
        ]
      }
    },
    {
      heading: 'Putting it in the diary',
      body:
        'A future sentence usually carries a time word, and the time word is free: it can open ' +
        'the sentence or close it. `boukra ra7 enzal` and `ra7 enzal boukra` are both ordinary ' +
        'Lebanese, the first putting a little more weight on the day.\n\n' +
        'The everyday set is small. `boukra` is tomorrow and `ba3d boukra`, literally "after ' +
        'tomorrow", is the day after. `ba3déén` is the loosest of them — later, afterwards, some ' +
        'time after this — and it is the polite way to postpone something without naming an ' +
        'hour.\n\n' +
        'For a named day or a week ahead, Lebanese adds `el-jééyé`, "the coming one", after the ' +
        'noun: `es-sabt el-jééyé`, next Saturday; `el-jem3a el-jééyé`, next week. And `ba3d ' +
        'eD-Dohr` divides the day where English divides it, at midday.\n\n' +
        'None of these words is a tense marker. They can sit in a sentence about now, about ' +
        'tomorrow or about last month without changing shape — the verb is what carries the ' +
        'time, and the adverb only points at a spot on the calendar.',
      table: {
        headers: ['word', 'when it points at'],
        rows: [
          ['`lyoom`', 'today'],
          ['`boukra`', 'tomorrow'],
          ['`ba3d boukra`', 'the day after tomorrow'],
          ['`ba3déén`', 'later, afterwards — deliberately vague'],
          ['`ba3d eD-Dohr`', 'the afternoon'],
          ['`es-sabt el-jééyé`', 'next Saturday'],
          ['`el-jem3a el-jééyé`', 'next week']
        ]
      }
    }
  ],

  vocab: [
    { lb: 'ra7', ar: 'رَح', en: 'will (marker put before the verb)', pos: 'adv', note: 'never changes, and always takes the b- off the verb' },
    { lb: 'boukra', ar: 'بُكْرة', en: 'tomorrow', pos: 'adv' },
    { lb: 'ba3d boukra', ar: 'بَعْد بُكرة', en: 'the day after tomorrow', pos: 'adv' },
    { lb: 'ba3déén', ar: 'بَعْدين', en: 'later, afterwards', pos: 'adv' },
    { lb: 'ba3d eD-Dohr', ar: 'بَعْد الضُّهر', en: 'the afternoon', pos: 'n', gender: 'm' },
    { lb: 'el-jem3a el-jééyé', ar: 'الجِمْعَة الجايي', en: 'next week', pos: 'phr' },
    { lb: 'enzal', ar: 'إِنْزَل', en: 'to go down (root)', pos: 'v', note: 'you always go down to Beirut and up to the mountain' },
    { lb: 'oTla3', ar: 'إِطْلَع', en: 'to go up (root)', pos: 'v' },
    { lb: 'eshtré', ar: 'إِشْتْري', en: 'to buy (root)', pos: 'v' },
    { lb: 'emro2', ar: 'إِمْرُق', en: 'to pass by, to drop in (root)', pos: 'v' },
    { lb: 'etrok', ar: 'إِتْرُك', en: 'to leave behind (root)', pos: 'v' },
    { lb: 'eb2a', ar: 'إِبْقى', en: 'to stay (root)', pos: 'v' },
    { lb: 'ouuSal', ar: 'أوصَل', en: 'to arrive, to get there (root)', pos: 'v' },
    { lb: 'kouun', ar: 'كون', en: 'to be (root) — only in the future and after other verbs', pos: 'v' },
    { lb: 'meshwaar', ar: 'مِشْوار', en: 'errand, short trip out', pos: 'n', gender: 'm' },
    { lb: 'ma7al', ar: 'مَحَل', en: 'shop, place', pos: 'n', gender: 'm' }
  ],

  phrases: [
    {
      lb: 'wéén ra7 tkouun boukra?', ar: 'وين رَح تْكون بُكْرة؟', en: 'where will you be tomorrow?',
      when: 'asking a man before you arrange anything'
    },
    {
      lb: 'ra7 kouun hoon', ar: 'رَح كون هون', en: 'I will be here',
      when: 'the standard answer once a time has been agreed'
    },
    {
      lb: 'ra7 ouuSal ba3d eD-Dohr', ar: 'رَح أوصَل بَعْد الضُّهر', en: 'I will get there in the afternoon',
      when: 'giving an arrival without committing to an hour'
    },
    {
      lb: 'maa ra7 Tawwel', ar: 'ما رَح طَوِّل', en: 'I will not be long',
      when: 'about to leave someone waiting'
    },
    {
      lb: 'ra7 emro2 3al-ma7al ba3déén', ar: 'رَح إِمْرُق عالمَحَل بَعْدين', en: 'I will drop by the shop later',
      when: 'promising to do an errand at some point today'
    },
    {
      lb: 'maa ra7 enzal lyoom', ar: 'ما رَح إِنْزَل اليوم', en: 'I am not going down today',
      when: 'turning down a trip into the city'
    },
    {
      lb: 'ra7 shouufak boukra', ar: 'رَح شوفَك بُكْرة', en: 'I will see you tomorrow',
      when: 'to a man, as you part'
    }
  ],

  drills: [
    { type: 'choice', q: 'What does `ra7` do to the verb behind it?',
      options: ['it takes the b- away', 'it keeps the b-', 'it doubles the b-'], answer: 0,
      explain: 'ra7 governs the verb, exactly like léézem or baddé, so the bare form appears.' },

    { type: 'conjugate', en: 'she will buy', root: 'eshtré', person: 'hiyyé', tense: 'future',
      options: ['ra7 teshtré', 'ra7 yeshtré', 'ra7 beshtré'], answer: 0,
      explain: 'hiyyé takes the t- prefix, and the b- has no place after ra7.' },

    { type: 'conjugate', en: 'we will go down', root: 'enzal', person: 'ne7na', tense: 'future',
      options: ['ra7 nenzal', 'ra7 mnenzal', 'ra7 tenzal'], answer: 0,
      explain: 'The we-form loses the m- of mn- along with the b-, and n- is what remains.' },

    { type: 'choice', q: 'Nadia is on the bus at this moment, on her way down to the city. Which is right?',
      options: ['3am btenzal 3a Beirut', 'ra7 tenzal 3a Beirut', 'ra7 btenzal 3a Beirut'], answer: 0,
      explain: 'It is happening now, so 3am and the b- form. The second sentence is correct Lebanese but means tomorrow, not now.' },

    { type: 'choice', q: 'Same verb, same person, but the plan is for tomorrow: "she will go down to the city".',
      options: ['ra7 tenzal 3a Beirut', '3am btenzal 3a Beirut', 'ra7 btenzal 3a Beirut'], answer: 0,
      explain: 'The third one is the classic mistake: ra7 with a b- form left in place.' },

    { type: 'build', en: 'I will not stay here.',
      tiles: ['maa', 'ra7', 'eb2a', 'hoon'], extra: ['3am'], answer: 'maa ra7 eb2a hoon' },

    { type: 'gap', en: 'A friend is checking what you are doing at the weekend.',
      lines: [
        { who: 'Karim', lb: 'ra7 teb2a hoon es-sabt?', en: 'will you stay here on Saturday?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['laa2, ra7 enzal 3as-souu2', 'laa2, ra7 benzal 3as-souu2', 'laa2, 3am enzal 3as-souu2'], answer: 0,
      explain: 'After ra7 the verb is bare, and the alef of the root comes back in the first person: enzal.' },

    { type: 'type', en: 'I will sleep early.', answer: 'ra7 néém bakkiir', accept: ['ra7 neem bakkiir'] },

    { type: 'match',
      pairs: [['boukra', 'tomorrow'], ['ba3d boukra', 'the day after tomorrow'], ['ba3déén', 'later'], ['el-jem3a el-jééyé', 'next week']] },

    { type: 'choice', q: 'How do you say "he will not arrive today"?',
      options: ['maa ra7 youuSal lyoom', 'ra7 maa youuSal lyoom', 'ra7 youuSal maa lyoom'], answer: 0,
      explain: 'maa goes in front of ra7. The slots never swap.' },

    { type: 'conjugate', en: 'they will arrive', root: 'ouuSal', person: 'henné', tense: 'future',
      options: ['ra7 youuSalo', 'ra7 byouuSalo', 'ra7 nouuSal'], answer: 0 },

    { type: 'choice', q: 'Rami is eating at this moment. Tomorrow he will eat at his sister\'s. Which pair is right?',
      options: [
        '3am byéékol — ra7 yéékol',
        '3am yéékol — ra7 byéékol',
        'ra7 byéékol — 3am yéékol'
      ], answer: 0,
      explain: 'The b- lives with 3am and dies with ra7. Every other option has them the wrong way round.' },

    { type: 'type', en: 'We will not go down today.', answer: 'maa ra7 nenzal lyoom' },

    { type: 'gap', en: 'A friend is putting together a group for the afternoon.',
      lines: [
        { who: 'Ziad', lb: 'ra7 tkouun ma3na ba3d eD-Dohr?', en: 'will you be with us this afternoon?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['maa ra7 e2dar', 'maa ra7 be2dar', 'maa 3am e2dar'], answer: 0,
      explain: 'ra7 takes the b- off e2dar, and maa always comes first, in front of the marker.' }
  ],

  quiz: [
    { type: 'build', en: 'She will pass by the shop tomorrow.',
      tiles: ['ra7', 'temro2', '3al-ma7al', 'boukra'], extra: ['3am'], answer: 'ra7 temro2 3al-ma7al boukra' },

    { type: 'conjugate', en: 'you (several people) will stay', root: 'eb2a', person: 'ento', tense: 'future',
      options: ['ra7 teb2o', 'ra7 yeb2o', 'ra7 bteb2o'], answer: 0 },

    { type: 'choice', q: 'Which sentence means "I am studying" and not "I will study"?',
      options: ['3am bedros', 'ra7 edros', 'maa ra7 edros'], answer: 0 },

    { type: 'type', en: 'I will not sleep here.', answer: 'maa ra7 néém hoon', accept: ['maa ra7 neem hoon'] },

    { type: 'conjugate', en: 'he will be', root: 'kouun', person: 'houwwé', tense: 'future',
      options: ['ra7 ykouun', 'ra7 bikouun', 'ra7 kouun'], answer: 0,
      explain: 'ra7 kouun is the first person: I will be. He takes the y- prefix.' },

    { type: 'gap', en: 'A colleague wants to know if you are free this afternoon.',
      lines: [
        { who: 'Sami', lb: 'ra7 tkouun bel-maktab ba3d eD-Dohr?', en: 'will you be at the office this afternoon?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['laa2, maa ra7 kouun hoon', 'laa2, maa ra7 bkouun hoon', 'laa2, ra7 maa kouun hoon'], answer: 0 },

    { type: 'match',
      pairs: [['3am ba3mol', 'I am doing'], ['ra7 a3mol', 'I will do'], ['3am mna3mol', 'we are doing'], ['ra7 na3mol', 'we will do']] },

    { type: 'choice', q: 'Why is `ra7 ba3mol` wrong?',
      options: [
        'ra7 strips the b-, so the verb should be a3mol',
        'ra7 cannot be used in the first person',
        'ra7 has to follow the verb, not precede it'
      ], answer: 0 },

    { type: 'type', en: 'They are eating. (at this moment)', answer: '3am byéékolo', accept: ['3am byeekolo'] },

    { type: 'choice', q: 'You want to postpone something without naming an hour. Which word?',
      options: ['ba3déén', 'boukra', 'lyoom'], answer: 0 }
  ]
});
