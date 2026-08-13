LEB.addUnit({
  id: 'u08',
  stage: 2,
  order: 8,
  title: 'Having and Carrying',
  goal: 'Say what you own, what is on you right now, and whose things these are.',
  canDo: [
    'Choose between 3end-, ma3- and la-el- without guessing',
    'Ask a shop whether they have something, and answer a cashier',
    'Say you do not have it, with the right negation'
  ],

  grammar: [
    {
      heading: 'Three ways of having',
      body:
        'English has one verb for having and lets context sort out the rest. Lebanese refuses to. It keeps ' +
        'three separate expressions apart, and each of them is a suffix verb: a stem that takes the same ' +
        'endings you have already put on `esm` and on `badd-`.\n\n' +
        '`3end-` is ownership and availability — what you have in the world, whether or not it is anywhere ' +
        'near you. `ma3-` is what is physically on you this second: in your hand, your pocket, your bag. ' +
        '`la-el-` is the odd one out: it does not say you have something, it says a thing belongs to ' +
        'somebody, and it usually answers "whose is this?" rather than "do you have one?".\n\n' +
        'The table below is nothing but the endings you know already, printed three times over. Two rows ' +
        'deserve a pen mark. First, `ne7na` breaks the pattern in the first column: it is `3enna`, not ' +
        '`3endna` — the d gives way and the n doubles. Second, `la-el-` is regularly shortened in speech ' +
        'to `elé`, `elak`, `elik`, and both versions are correct.',
      table: {
        headers: ['person', 'own it', 'have it on you', 'it belongs to'],
        rows: [
          ['ana', '`3endé`', '`ma3é`', '`la-elé`'],
          ['enta', '`3endak`', '`ma3ak`', '`la-elak`'],
          ['enté', '`3endik`', '`ma3ik`', '`la-elik`'],
          ['houwwé', '`3endo`', '`ma3o`', '`la-elo`'],
          ['hiyyé', '`3enda`', '`ma3a`', '`la-ela`'],
          ['ne7na', '`3enna`', '`ma3na`', '`la-elna`'],
          ['ento', '`3endkon`', '`ma3kon`', '`la-elkon`'],
          ['henné', '`3endon`', '`ma3on`', '`la-elon`']
        ]
      },
      warning:
        '`3enna` is the one form nobody can derive. Every other slot is stem plus ending; this one loses ' +
        'the d altogether. Learn it as its own word and you will never build `3endna` by accident.'
    },
    {
      heading: 'The difference that costs money at a till',
      body:
        'This distinction is not academic. It is what people say to each other at a counter twenty times a ' +
        'day, and choosing wrong makes the conversation stop.\n\n' +
        'When a cashier asks `ma3ak …?` the question is about right now, in your hand: have you got the ' +
        'change, have you got a dollar, have you got a smaller note. Answering with `3endé` — I own one — ' +
        'is perfectly true and completely useless, because the thing is at home.\n\n' +
        'It works the same way in reverse. Walk into a shop wanting to know whether they stock something ' +
        'and the question is `3endkon …?`, answered with `na3am, 3enna` or `maa 3enna`. Ask `ma3kon …?` ' +
        'and you have asked whether the staff are personally carrying it on their bodies, which is a ' +
        'different and slightly strange question.\n\n' +
        '`la-el-` settles ownership after the fact — a bag left on a chair, a phone face-down on a table. ' +
        '`hayda la-elé`, this one is mine. And `ma3-` sneaks into places you would not predict: `ma3ak 7a2` ' +
        'means "you are right", literally *the right is with you*.',
      examples: [
        { lb: '3endé sayyaara bass maa ma3é wa2t', ar: 'عندي سيارة بس ما معي وقت', en: 'I have a car, but I have no time.' },
        { lb: 'ma3ik el-7sééb?', ar: 'معك الحساب؟', en: 'Have you got the bill on you?', note: 'to a woman' },
        { lb: 'es-séé3a la-elo', ar: 'الساعة لإلو', en: 'The watch is his.' }
      ]
    },
    {
      heading: 'Saying you do not have it',
      body:
        'All three take the same negation, and it is not the one an English speaker expects. You put `maa` ' +
        'in front and change nothing else: `maa 3endé wa2t`, `maa ma3é dollar`, `maa elé shii hoon`.\n\n' +
        '`maa` is the negation used for verbs and for suffix verbs. Lebanese has a second one, `mesh`, ' +
        'reserved for nouns and adjectives, and putting `mesh` in front of `3endé` is the most recognisable ' +
        'beginner mistake there is. A whole unit is coming on that split. For now hold on to one rule: if ' +
        'the word has a possessive ending stuck on it, it is negated with `maa`.\n\n' +
        'One more piece of machinery comes with the negative. The ending slot on `ma3-` is already taken by ' +
        'the person, so an object like "it" has nowhere to attach and has to stand apart instead. That is ' +
        'why "I have not got it" comes out as `maa ma3é yééh` — the detached `yééh` doing the job a suffix ' +
        'would normally do.',
      examples: [
        { lb: 'maa 3enna ouwaD lyoom', ar: 'ما عنا أوض ليوم', en: 'We have no rooms today.' },
        { lb: 'maa ma3é yééh', ar: 'ما معي ياه', en: 'I have not got it on me.' },
        { lb: 'maa 3endé mééne3', ar: 'ما عندي مانع', en: 'I do not mind.', note: 'literally: I have no objection' }
      ]
    }
  ],

  vocab: [
    { lb: '3end-', ar: 'عند', en: 'to have, to own', pos: 'v', note: 'general possession; ne7na is the irregular 3enna' },
    { lb: 'ma3-', ar: 'مع', en: 'to have on you right now', pos: 'v', note: 'the same little word that means "with"' },
    { lb: 'la-el-', ar: 'لإل', en: 'to belong to', pos: 'v', note: 'often shortened to elé, elak, elik' },
    { lb: 'sayyaara', ar: 'سيارة', en: 'car', pos: 'n', gender: 'f' },
    { lb: 'béét', ar: 'بيت', en: 'house, home', pos: 'n', gender: 'm' },
    { lb: 'ouuDa', ar: 'أوضة', en: 'room', pos: 'n', gender: 'f', note: 'plural ouwaD' },
    { lb: 'kiis', ar: 'كيس', en: 'bag', pos: 'n', gender: 'm' },
    { lb: 'séé3a', ar: 'ساعة', en: 'watch, clock, hour', pos: 'n', gender: 'f' },
    { lb: 'téléphon', ar: 'تليفون', en: 'telephone', pos: 'n', gender: 'm', note: 'a French loanword, and the normal everyday word' },
    { lb: 'ra2m', ar: 'رقم', en: 'number', pos: 'n', gender: 'm' },
    { lb: 'wa2t', ar: 'وقت', en: 'time', pos: 'n', gender: 'm' },
    { lb: 'sheghl', ar: 'شغل', en: 'work, job', pos: 'n', gender: 'm' },
    { lb: 'emti7aan', ar: 'امتحان', en: 'exam', pos: 'n', gender: 'm' },
    { lb: '7sééb', ar: 'حساب', en: 'bill', pos: 'n', gender: 'm' },
    { lb: 'dollaar', ar: 'دولار', en: 'dollar', pos: 'n', gender: 'm' },
    { lb: 'lira', ar: 'ليرة', en: 'lira, the Lebanese currency', pos: 'n', gender: 'f' }
  ],

  phrases: [
    {
      lb: '3endkon …?', ar: 'عندكن…؟', en: 'do you have …?',
      when: 'asking a shop or a hotel whether they stock or offer something',
      reply: 'na3am, 3enna', replyEn: 'yes, we have — or maa 3enna, we have not'
    },
    {
      lb: 'ma3ak …?', ar: 'معك…؟', en: 'have you got … on you?',
      when: 'a cashier, a friend, anyone asking about this exact moment',
      reply: 'la2, maa ma3é', replyEn: 'no, not on me'
    },
    {
      lb: 'ma3ak 7a2', ar: 'معك حق', en: 'you are right',
      when: 'conceding a point — literally, the right is with you'
    },
    {
      lb: 'maa 3endé mééne3', ar: 'ما عندي مانع', en: 'I do not mind',
      when: 'agreeing to a plan you have no objection to'
    },
    {
      lb: 'hayda la-elé', ar: 'هيدا لإلي', en: 'this one is mine',
      when: 'claiming something left on a table or a seat'
    },
    {
      lb: 'maa ma3é yééh', ar: 'ما معي ياه', en: 'I have not got it on me',
      when: 'the standard answer when someone asks for something you own but left at home'
    }
  ],

  dialogue: {
    title: 'At the door, patting your pockets',
    setting: 'You are about to leave. Maya is holding the door. Two different kinds of having are about to collide.',
    lines: [
      { who: 'Maya', lb: 'ma3ak et-téléphon?', ar: 'معك التيليفون؟', en: 'have you got the phone on you?',
        note: 'ma3ak, not 3endak. She is asking what is in your pocket right now.' },
      { who: 'You', you: true, lb: 'éé, ma3é. bass maa ma3é l-kiis.', ar: 'إي، معي. بس ما معي الكيس', en: 'yes, I have. But I have not got the bag on me.' },
      { who: 'Maya', lb: '3endak sayyaara, mesh héék?', ar: 'عندك سيارة، مش هيك؟', en: 'you have a car, don\'t you?',
        note: '3endak this time: she is asking what you own, not what you are carrying.' },
      { who: 'You', you: true, lb: '3endé, bass mesh hoon.', ar: 'عندي، بس مش هون', en: 'I do, but not here.' },
      { who: 'Maya', lb: 'ma3ak wa2t?', ar: 'معك وقت؟', en: 'have you got time?' },
      { who: 'You', you: true, lb: 'ma3ak 7a2. yalla.', ar: 'معك حق. يلا', en: 'you are right. Come on.',
        note: 'ma3ak 7a2 — literally "you have right with you" — is the ordinary way to say someone is right.' }
    ]
  },

  culture: {
    heading: 'Owning it, carrying it, and being owed it',
    icon: 'bag',
    body:
      'English uses one verb for all of this and lets context sort it out. Lebanese splits it, and ' +
      'the split is not a subtlety — using the wrong one produces a sentence that is simply about ' +
      'something else.\n\n' +
      '`3end-` is what you own or have available: a car, a sister, an exam on Tuesday. `ma3-` is what ' +
      'is physically on you at this moment: your phone, your keys, cash. So `3endé sayyaara` means ' +
      'you own a car and `ma3é sayyaara` would mean you are carrying one.\n\n' +
      'Then `ma3-` goes further and does jobs that have nothing to do with pockets. `ma3ak 7a2` is ' +
      'you are right. `ma3ak wa2t?` is have you got a minute. `ma3é maSaaré` is I can pay. The idea ' +
      'underneath is that things you have with you are things available to be used — which is also ' +
      'why being told `maa ma3é` about money is a complete and final answer.',
  },

  drills: [
    { type: 'choice', q: 'You walk into a shop and want to know whether they sell juice. What do you ask?',
      options: ['3endkon 3aSiir?', 'ma3kon 3aSiir?', 'la-elkon 3aSiir?'], answer: 0,
      explain: 'ma3kon would be asking whether the staff are carrying juice on them.' },

    { type: 'conjugate', en: 'we have (we own)', root: '3end-', person: 'ne7na',
      options: ['3enna', '3endna', '3endon', 'ma3na'], answer: 0,
      explain: 'The one irregular slot: the d disappears and the n doubles.' },

    { type: 'match',
      pairs: [['sayyaara', 'car'], ['kiis', 'bag'], ['séé3a', 'watch'], ['7sééb', 'bill']] },

    { type: 'build', en: 'I have a car.',
      tiles: ['3endé', 'sayyaara'], extra: ['ma3é'], answer: '3endé sayyaara' },

    { type: 'gap', en: 'A friend wants to call someone and turns to you.',
      lines: [
        { who: 'Nabil', lb: 'ma3ak ra2m téléphon Karim?', en: 'have you got Karim\'s number on you?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['la2, maa ma3é yééh', 'la2, maa 3endé mééne3', 'na3am, la-elé'], answer: 0,
      explain: 'The question was about right now, so the answer stays with ma3-. yééh is the detached "it".' },

    { type: 'choice', q: 'Your money is at home and a cashier asks "ma3ak dollar?". Which answer is true and useful?',
      options: ['la2, maa ma3é', 'na3am, 3endé', 'na3am, la-elé'], answer: 0,
      explain: '3endé says you own dollars in general, which does not help anybody at a till.' },

    { type: 'type', en: 'We have a room.', answer: '3enna ouuDa' },

    { type: 'conjugate', en: 'she has it on her', root: 'ma3-', person: 'hiyyé', answer: 'ma3a',
      explain: 'The ending for hiyyé is -a, as in esma and badda.' },

    { type: 'build', en: 'The watch is his.',
      tiles: ['es-séé3a', 'la-elo'], extra: ['la-ela'], answer: 'es-séé3a la-elo' },

    { type: 'match',
      pairs: [['3endé', 'I own'], ['ma3é', 'I have on me'], ['la-elé', 'it is mine'], ['maa 3endé', 'I do not have']] },

    { type: 'gap', en: 'You stop at a kiosk on your way to work.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Seller', lb: 'na3am, 3enna', en: 'yes, we have' }
      ],
      options: ['3endkon maay?', 'ma3kon maay?', 'la-elkon maay?'], answer: 0,
      explain: 'Stock and availability is always 3end-, and the seller answers in the same word.' },

    { type: 'choice', q: 'What does "hayda la-elo" say?',
      options: ['This one is his', 'He is carrying this one', 'He wants this one'], answer: 0,
      explain: 'la-el- is about ownership, not about who is holding the thing.' },

    { type: 'type', en: 'I do not have time.', answer: 'maa 3endé wa2t' }
  ],

  quiz: [
    { type: 'choice', q: 'A cashier asks "ma3ik el-7sééb?". What is being asked?',
      options: [
        'Have you got the bill there with you',
        'Do you own the bill',
        'Is the bill yours'
      ], answer: 0 },

    { type: 'conjugate', en: 'he has (he owns)', root: '3end-', person: 'houwwé',
      options: ['3endo', '3enda', '3endon', 'ma3o'], answer: 0 },

    { type: 'type', en: 'She has a car.', answer: '3enda sayyaara' },

    { type: 'match',
      pairs: [['wa2t', 'time'], ['sheghl', 'work'], ['emti7aan', 'exam'], ['ouuDa', 'room']] },

    { type: 'build', en: 'I have not got the bill on me.',
      tiles: ['maa', 'ma3é', 'el-7sééb'], extra: ['3endé'], answer: 'maa ma3é el-7sééb' },

    { type: 'gap', en: 'You are deciding with a colleague where to eat.',
      lines: [
        { who: 'Rima', lb: 'shou ra2yik, telyééné?', en: 'what do you think, Italian?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['maa 3endé mééne3', 'maa ma3é yééh', 'maa 3enna sayyaara'], answer: 0 },

    { type: 'choice', q: 'Why is "we have" 3enna and not 3endna?',
      options: [
        'The d drops out and the n doubles — an irregular form to learn whole',
        'Because ne7na is plural',
        'Because 3end- only exists in the singular'
      ], answer: 0 },

    { type: 'type', en: 'Have you got a dollar on you? (to a woman)', answer: 'ma3ik dollar' },

    { type: 'choice', q: 'Which word negates a suffix verb like 3endé or ma3é?',
      options: ['maa, placed in front', 'mesh, placed in front', 'la2, placed after'], answer: 0,
      explain: 'mesh belongs to nouns and adjectives; la2 is a whole answer on its own.' }
  ]
});
