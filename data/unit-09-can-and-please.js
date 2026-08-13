LEB.addUnit({
  id: 'u09',
  stage: 2,
  order: 9,
  title: 'Can and Please',
  goal: 'Ask whether something is possible, ask for help, and do it in the right register.',
  canDo: [
    'Use fii- for "can" in all eight persons, with the endings it really takes',
    'Tell fii- (can) apart from fii (there is)',
    'Get a stranger\'s attention and make a polite request'
  ],

  grammar: [
    {
      heading: 'Can is an ending too, but a different-shaped one',
      body:
        '`fii-` is the language\'s word for *can*, and it is built like everything else in this stage: a ' +
        'stem plus the person. What earns it a unit of its own is that the endings turn up wearing ' +
        'different clothes.\n\n' +
        'The reason is pure sound. `fii` finishes on a long `ii`, and a long vowel will not tolerate ' +
        'another vowel landing directly after it, so the endings give way. The `-ak` of `ma3ak` loses its ' +
        'vowel and leaves `fiik`. The `-ik` of `ma3ik` comes out as `-ké`. The `-o` of `ma3o` hardens into ' +
        '`-h`. The `-a` and the `-on` need something to lean on and take a `y`: `fiiya`, `fiiyon`. Only ' +
        '`ne7na` and `ento` walk through untouched.\n\n' +
        'Learn the two columns below side by side rather than the right-hand one alone. This shift is not a ' +
        'quirk of `fii-`; it happens to every Lebanese word that ends in a long vowel, and it will come ' +
        'back on verbs later. Recognising the family — `-ni`, `-k`, `-ké`, `-h`, `-ya`, `-na`, `-kon`, ' +
        '`-yon` — is worth more than eight separately memorised words.',
      table: {
        headers: ['person', 'after a consonant', 'after a long vowel'],
        rows: [
          ['ana', '`ma3é`', '`fiini`'],
          ['enta', '`ma3ak`', '`fiik`'],
          ['enté', '`ma3ik`', '`fiiké`'],
          ['houwwé', '`ma3o`', '`fiih`'],
          ['hiyyé', '`ma3a`', '`fiiya`'],
          ['ne7na', '`ma3na`', '`fiina`'],
          ['ento', '`ma3kon`', '`fiikon`'],
          ['henné', '`ma3on`', '`fiiyon`']
        ]
      },
      warning:
        'You will also hear `fiiné` where this table prints `fiini`. Both are said by people who grew up ' +
        'with the language, and nothing at all hangs on the choice.'
    },
    {
      heading: 'fii- and fii are not the same word',
      body:
        '`fii` with no ending on it is a different word altogether: it means *there is* or *there are*. ' +
        '`fii 7ada bel-béét` — there is someone in the house. Negate it with `maa` in front and you get ' +
        '`maa fii 7ada`, there is nobody. It never changes shape, for any number and any gender, which ' +
        'makes it one of the cheapest useful words in Lebanese.\n\n' +
        'The trap is `fiih`. With an ending it is "he can"; without one, `fii` is "there is". Context does ' +
        'almost all the sorting, and it helps to know the two are genuinely related — what *can be done* ' +
        'and what *is there* are one idea seen from two sides.\n\n' +
        'Then there is `moumken`, which asks the same favour from another direction. `moumken` takes no ' +
        'endings whatsoever: one word, every person, every situation. `fiini` says the ability sits inside ' +
        'me; `moumken` says the thing is possible, permitted, no trouble. On its own, with the voice going ' +
        'up at the end, `moumken?` is already a complete request — may I, is it all right.',
      examples: [
        { lb: 'fii 7ada hoon?', ar: 'في حدا هون؟', en: 'Is there anybody here?' },
        { lb: 'maa fii 7ada', ar: 'ما في حدا', en: 'There is nobody.' },
        { lb: 'moumken?', ar: 'ممكن؟', en: 'May I?', note: 'reaching past someone, taking a free chair' }
      ]
    },
    {
      heading: 'Asking nicely, in the right order',
      body:
        'A request in Lebanese has three moves, and the middle one is the only part a learner usually ' +
        'prepares.\n\n' +
        'First you take attention. With a stranger that is `3afwan` — the same word that means "you are ' +
        'welcome" after a thank you, working both ends of the exchange. Among friends it is `léék` to a ' +
        'man and `layké` to a woman: literally *look*, and it lands somewhere between "listen" and "hey".\n\n' +
        'Then you ask, with `moumken` or with `fii-`. Then you soften, at the end, with `3mool ma3rouuf` ' +
        'or the gentler `eza betriid`.\n\n' +
        'There is a fourth please, `min faDlak`, and it comes with a warning label. It is correct and ' +
        'everyone understands it, but it belongs to the formal register borrowed from standard Arabic: a ' +
        'bank, an announcement, somebody being deliberately careful with you. Between friends on a street ' +
        'it sounds starched. `3mool ma3rouuf` is the one that sounds like Beirut.\n\n' +
        'The answers come back short. `akiid` — of course. `Tayyeb` — all right then. `2moor` from ' +
        'somebody serving you, literally *give an order*. And `ana bel-khedmé` as they turn away.',
      warning:
        '`3afwan` really does hold two opposite positions. Said after someone thanks you, it is "you are ' +
        'welcome". Said first, before anything else, it is "excuse me". The position in the exchange is ' +
        'the whole difference.'
    }
  ],

  vocab: [
    { lb: 'fii-', ar: 'في', en: 'can, to be able to', pos: 'v', note: 'a suffix verb: fiini, fiik, fiiké, fiih…' },
    { lb: 'fii', ar: 'في', en: 'there is, there are', pos: 'phr', note: 'no ending, no plural, no gender' },
    { lb: 'moumken', ar: 'ممكن', en: 'may, possibly, could I', pos: 'adv', note: 'never changes for person' },
    { lb: '3afwan', ar: 'عفوا', en: 'excuse me; you are welcome', pos: 'phr' },
    { lb: 'léék', ar: 'ليك', en: 'look, listen', pos: 'phr', note: 'to a woman layké, to a group layko' },
    { lb: 'séé3ed', ar: 'ساعد', en: 'to help', pos: 'v', note: 'a real verb; here you meet it as a block after fii-' },
    { lb: 'khedmé', ar: 'خدمة', en: 'favour, service', pos: 'n', gender: 'f' },
    { lb: '2moor', ar: 'أمور', en: 'how can I help', pos: 'phr', note: 'literally "give an order"; to a woman 2moré' },
    { lb: 'min faDlak', ar: 'من فضلك', en: 'please', pos: 'phr', note: 'the formal one — recognise it, but say 3mool ma3rouuf' },
    { lb: 'akiid', ar: 'أكيد', en: 'of course, sure', pos: 'adv' },
    { lb: 'Tayyeb', ar: 'طيب', en: 'all right, fine', pos: 'adv', note: 'the same word also describes tasty food and kind people' },
    { lb: 'bass', ar: 'بس', en: 'only, but', pos: 'adv' },
    { lb: '7ada', ar: 'حدا', en: 'someone, anybody', pos: 'pron' },
    { lb: 'hoon', ar: 'هون', en: 'here', pos: 'adv' },
    { lb: 'maa 3lééh', ar: 'ما عليه', en: 'never mind, it is fine', pos: 'phr' }
  ],

  phrases: [
    {
      lb: 'fiik tséé3edné?', ar: 'فيك تساعدني؟', en: 'can you help me?',
      when: 'to a man; to a woman it starts fiiké',
      reply: 'akiid', replyEn: 'of course'
    },
    {
      lb: 'moumken?', ar: 'ممكن؟', en: 'may I?',
      when: 'taking a chair, reaching past someone, stepping into a queue'
    },
    {
      lb: '3afwan', ar: 'عفوا', en: 'excuse me',
      when: 'opening a request to a stranger — and answering a thank you, where it means "you are welcome"'
    },
    {
      lb: 'léék', ar: 'ليك', en: 'look, listen',
      when: 'getting a friend\'s attention before a question; never to a stranger'
    },
    {
      lb: 'fiini séé3dak?', ar: 'فيني ساعدك؟', en: 'can I help you?',
      when: 'what a shop assistant says to you as you walk in',
      reply: 'shukran', replyEn: 'thank you — or say what you want with baddé'
    },
    {
      lb: '2moor', ar: 'أمور', en: 'how can I help?',
      when: 'a grocer or a waiter turning to you, hands already busy'
    },
    {
      lb: 'maa 3lééh', ar: 'ما عليه', en: 'never mind, no harm done',
      when: 'closing off somebody else\'s apology or small mistake'
    }
  ],

  dialogue: {
    title: 'Looking for someone in a building with no names on the bells',
    setting: 'Six floors, eighteen buzzers, not a label on any of them. A man is coming out as you go in.',
    lines: [
      { who: 'You', you: true, lb: '3afwan, fiik tséé3edné?', ar: 'عفوا، فيك تساعدني؟', en: 'excuse me, can you help me?' },
      { who: 'Karim', lb: 'akiid. 2moor.', ar: 'أكيد. أمور', en: 'of course. How can I help?',
        note: '2moor is what someone says when they are ready to help you. It is not a question about your health.' },
      { who: 'You', you: true, lb: 'fii 7ada hoon esmo Elie?', ar: 'في حدا هون اسمو ايلي؟', en: 'is there someone here called Elie?' },
      { who: 'Karim', lb: 'fii, bass mesh hoon halla2.', ar: 'في، بس مش هون هلق', en: 'there is, but he is not here right now.' },
      { who: 'You', you: true, lb: 'Tayyeb. maa 3lééh.', ar: 'طيب. ما عليه', en: 'all right. Never mind.' },
      { who: 'Karim', lb: 'fiini séé3dak b-shii tééné?', ar: 'فيني ساعدك بشي تاني؟', en: 'can I help you with anything else?' },
      { who: 'You', you: true, lb: 'la2, shukran. ya3Tiik el-3aafyé.', ar: 'لأ، شكرا. يعطيك العافية', en: 'no, thank you. May he give you strength.' }
    ]
  },

  culture: {
    heading: 'Four ways to ask, and when each one fits',
    icon: 'hand',
    body:
      'Lebanese has a ladder of politeness and every rung is in ordinary use. Picking the wrong one ' +
      'is not offensive, it is just slightly odd, in the way that "would you be so kind" is odd when ' +
      'you want the salt.\n\n' +
      '`fiik…?` is the everyday ask: can you, are you able to. `moumken?` is lighter and softer, good ' +
      'for asking permission. `min faDlak` is the formal one — an official, a stranger much older ' +
      'than you, a complaint you want taken seriously. `3mool ma3rouuf` literally asks someone to do ' +
      'you a favour, and it is warmer than all of them; it works in a café and with a neighbour, and ' +
      'it is the one to reach for by default.\n\n' +
      '`léék` looks alarming in a phrasebook — it is an imperative, "look" — and it is not rude at ' +
      'all. It is closer to "listen," the noise people make to open a sentence. You will hear it ' +
      'twenty times a day, often with nothing to look at.\n\n' +
      'Expect to be helped more than you asked for. Someone who does not know the answer will ask ' +
      'the man in the shop next door, and you will end up with three people on the pavement ' +
      'discussing your problem.',
  },

  drills: [
    { type: 'choice', q: 'You are asking one woman whether she can. Which form?',
      options: ['fiiké', 'fiik', 'fiiya'], answer: 0,
      explain: 'fiik is a man, fiiya is she. The -ké ending is what -ik becomes after a long vowel.' },

    { type: 'conjugate', en: 'he can', root: 'fii-', person: 'houwwé',
      options: ['fiih', 'fii', 'fiiya', 'fiiyon'], answer: 0,
      explain: 'The -o ending hardens into -h. Bare fii, with no ending, would mean "there is".' },

    { type: 'match',
      pairs: [['akiid', 'of course'], ['Tayyeb', 'all right'], ['3afwan', 'excuse me'], ['maa 3lééh', 'never mind']] },

    { type: 'build', en: 'Can you help me? (to a man)',
      tiles: ['fiik', 'tséé3edné'], extra: ['fiiké'], answer: 'fiik tséé3edné' },

    { type: 'gap', en: 'You are lost and you stop a man on the pavement.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Passer-by', lb: 'akiid, shou baddak?', en: 'of course, what do you need?' }
      ],
      options: ['3afwan, fiik tséé3edné?', 'léék, fiik tséé3edné?', '2moor, fiik tséé3edné?'], answer: 0,
      explain: 'léék is for friends and 2moor is what the person serving you says. To a stranger, 3afwan.' },

    { type: 'choice', q: 'What does "maa fii 7ada" mean?',
      options: ['There is nobody', 'He cannot', 'Nobody can'], answer: 0,
      explain: 'Bare fii is "there is"; maa in front makes it "there is not".' },

    { type: 'type', en: 'We can.', answer: 'fiina' },

    { type: 'conjugate', en: 'they can', root: 'fii-', person: 'henné', answer: 'fiiyon',
      explain: 'The -on ending needs something to lean on after the long vowel, so a y appears.' },

    { type: 'build', en: 'There is nobody here.',
      tiles: ['maa', 'fii', '7ada', 'hoon'], extra: ['mesh'], answer: 'maa fii 7ada hoon' },

    { type: 'match',
      pairs: [['fiini', 'I can'], ['fiik', 'you can — a man'], ['fiiya', 'she can'], ['fiina', 'we can']] },

    { type: 'gap', en: 'A colleague forgot to bring back the bill and apologises.',
      lines: [
        { who: 'Samir', lb: 'maa ma3é el-7sééb, 3afwan', en: 'I have not got the bill on me, sorry' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['maa 3lééh', 'moumken?', 'léék'], answer: 0,
      explain: 'maa 3lééh closes an apology without making more of it.' },

    { type: 'choice', q: 'Where would you actually hear "min faDlak"?',
      options: [
        'In a bank or an announcement — the careful, formal register',
        'Between close friends, as the normal please',
        'Only in questions'
      ], answer: 0,
      explain: 'It is understood everywhere, but 3mool ma3rouuf is what the street says.' },

    { type: 'type', en: 'May I? (one word)', answer: 'moumken' }
  ],

  quiz: [
    { type: 'choice', q: 'Which one is "she can"?',
      options: ['fiiya', 'fiih', 'fiiké'], answer: 0 },

    { type: 'conjugate', en: 'you can, said to one woman', root: 'fii-', person: 'enté',
      options: ['fiiké', 'fiik', 'fiini', 'fiikon'], answer: 0 },

    { type: 'type', en: 'Can you help me? (to a man)', answer: 'fiik tséé3edné' },

    { type: 'match',
      pairs: [['moumken', 'may, possibly'], ['7ada', 'someone'], ['khedmé', 'favour'], ['bass', 'only']] },

    { type: 'build', en: 'Excuse me, can you help me? (to a man)',
      tiles: ['3afwan', 'fiik', 'tséé3edné'], extra: ['léék'], answer: '3afwan fiik tséé3edné' },

    { type: 'gap', en: 'You walk into a small shop and the assistant comes over.',
      lines: [
        { who: 'Assistant', lb: 'fiini séé3dak?', en: 'can I help you?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['akiid, baddé shwayyet maay', 'akiid, fiini séé3dak', 'moumken, maa 3lééh'], answer: 0,
      explain: 'The second answer hands his own offer back to him; the third strings together two words that do not answer anything.' },

    { type: 'choice', q: 'Why is it fiik and not fiiak?',
      options: [
        'A long vowel will not take another vowel after it, so the ending loses its own',
        'Because enta is masculine',
        'Because fii- is a question word'
      ], answer: 0 },

    { type: 'type', en: 'There is nobody.', answer: 'maa fii 7ada' },

    { type: 'choice', q: 'What is the difference between "fiini" and "moumken"?',
      options: [
        'fiini puts the ability in me; moumken says the thing itself is possible',
        'fiini is polite and moumken is rude',
        'They are the same word said two ways'
      ], answer: 0 }
  ]
});
