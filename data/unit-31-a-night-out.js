LEB.addUnit({
  id: 'u31',
  stage: 4,
  order: 31,
  title: 'A Night Out',
  goal: 'Run a whole evening in Lebanese: book a table, arrive, order, pay, and query the bill.',
  canDo: [
    'Book a table by phone and say you have a booking when you get there',
    'Count exactly two of anything the way the language insists on',
    'Order a meal, ask for the bill, and point out a mistake in it without causing offence'
  ],

  grammar: [
    {
      heading: 'Lebanese counts to two with an ending',
      body:
        'You have been using this since the first week without being told. `mar7abtéén` is not a ' +
        'word for hello; it is *two* hellos. `alféén` is two thousand. The ending `-één` means ' +
        '"exactly two of these", and it is a third number alongside singular and plural, not a ' +
        'decoration on either of them.\n\n' +
        'So a person is `shakhS`, people are `ashkhaaS`, and two people are `shakhSéén` — a form ' +
        'of its own that you cannot reach by putting the number two in front of the plural. ' +
        'Saying the equivalent of "two persons" is the single clearest way to mark yourself out ' +
        'as someone who learned this from a book.\n\n' +
        'One mechanical detail: feminine nouns ending in `-é` or `-a` bring back a hidden `t` ' +
        'before the ending. `2anniiné` becomes `2anniintéén`, `7abbé` becomes `7abbtéén`, `d2ii2a` ' +
        'becomes `d2ii2téén`. That `t` is not new — it was always there in the written Arabic, ' +
        'and the dual is one of the places it surfaces.',
      table: {
        headers: ['one', 'exactly two', 'more than two'],
        rows: [
          ['`shakhS` — person', '`shakhSéén`', '`ashkhaaS`'],
          ['`2anniiné` — bottle', '`2anniintéén`', '`2anééné`'],
          ['`d2ii2a` — minute', '`d2ii2téén`', '`d2ééye2`'],
          ['`jem3a` — week', '`jeme3téén`', '`jméé3`'],
          ['`shahr` — month', '`shahréén`', '`shhouur`'],
          ['`alf` — thousand', '`alféén`', '`alééf`']
        ]
      },
      warning:
        'For three and up, the number goes in front of the plural and the dual disappears — ' +
        '`tléét ashkhaaS`. The dual is compulsory for two and impossible for anything else.'
    },

    {
      heading: 'One evening, every tense you own',
      body:
        'A restaurant evening is the best possible test of the tense system, because a single ' +
        'meal touches all of it. The booking is a finished act, so it is past. The fact that you ' +
        'now hold a booking is a state, and Lebanese puts states in the participle: `7ééjziin` — ' +
        'we are in the condition of having booked. What you order next is present, what you are ' +
        'planning after dinner is `ra7`, and the moment the waiter walks off you are back in the ' +
        'past telling the story of it.\n\n' +
        'The participle deserves a second look, because it is the piece most learners skip. ' +
        '`7ajazna Taawlé` is not wrong, but it reports an event that happened yesterday. ' +
        '`7ééjziin Taawlé` reports the situation you are standing in at the door, which is what ' +
        'the person in front of you actually needs to know. Three forms only, agreeing with the ' +
        'subject: `7ééjez`, `7ééjzé`, `7ééjziin`.',
      table: {
        headers: ['moment of the evening', 'what you reach for', 'example'],
        rows: [
          ['booking it, yesterday', 'past', '`mbéére7 talfanna 3al-maT3am`'],
          ['arriving with a booking', 'participle', '`7ééjziin Taawlé jouwwa`'],
          ['ordering', 'present or `ra7`', '`ra7 néékhod samak meshwé`'],
          ['saying what you prefer', 'plain b- form', '`bfaDDel es-samak`'],
          ['what you will do after', '`ra7` + bare verb', '`ra7 nemshé shwayy ba3d el-3asha`'],
          ['telling someone the next day', 'past', '`Talabna mééza w-samak`']
        ]
      },
      examples: [
        { lb: 'Maitre! fiik t2ellna shou 3endkon lyoom?', en: 'Excuse me! Can you tell us what you have today?' },
        { lb: 'jebelna 2anniintéén nbiid a7mar, 3mool ma3rouuf', en: 'Bring us two bottles of red wine, please.', note: 'jiib plus the dative -lna gives jebelna' },
        { lb: 'bet7ebbo 7elo?', en: 'Would you like dessert?' }
      ]
    },

    {
      heading: 'When the bill is wrong',
      body:
        'Nothing tests a language like a disputed number, and Lebanese has a fixed shape for ' +
        'this. Do not open with the complaint. Open with a softener — `dakhlak?` to get ' +
        'attention, or `baddé 3azzbak`, literally "I want to torture you", which is how you say ' +
        '"sorry to be a nuisance". Then state facts in the past, not accusations: `ne7na Talabna ' +
        'kéés nbiid, mesh 2anniiné`. Then stop, and let the staff do the apologising.\n\n' +
        'They will, and loudly: `yaa 3ayb esh-shouum!` is the standard performance of ' +
        'embarrassment. Very often the offer comes back too large — the dessert, or the whole ' +
        'meal, `3a 7sééb el-maT3am`. Here is the part no textbook mentions: **you are expected to ' +
        'turn it down**. `basiiTa! maa fii lzouum` is not modesty, it is the second half of the ' +
        'ritual, and a diner who simply accepts reads as someone who complained in order to eat ' +
        'free. Refuse once, warmly. If they insist twice, then you may accept.',
      examples: [
        { lb: 'dakhlak, be3te2ed fii ghalTa bel-7sééb', en: 'Excuse me, I think there is a mistake in the bill.' },
        { lb: 'ne7na Talabna kéés nbiid, mesh 2anniiné', en: 'We ordered a glass of wine, not a bottle.' },
        { lb: 'Tole3 ghaalé shwayy', en: 'It has come out a bit expensive.', note: 'Tole3 here is turned out, not went up' },
        { lb: 'basiiTa! maa fii lzouum', en: 'It is nothing, there is no need.', note: 'the polite refusal of a comped bill' }
      ],
      warning:
        'Keep `dakhlak` for getting attention and `bisharafak` for begging. Using the second one ' +
        'over a bill makes a small correction sound like a crisis.'
    }
  ],

  vocab: [
    { lb: 'Taawlé', ar: 'طاوْلة', en: 'table', pos: 'n', gender: 'f', note: 'plural Taawléét' },
    { lb: 'shakhS', ar: 'شَخْص', en: 'person', pos: 'n', gender: 'm', note: 'two people shakhSéén, people ashkhaaS' },
    { lb: 'lééy7a', ar: 'لايْحَة', en: 'menu, list', pos: 'n', gender: 'f', note: 'menu and liistté are used just as often' },
    { lb: 'mééza', ar: 'المازة', en: 'mezze, the small plates that open a meal', pos: 'n' },
    { lb: 'Sa7n', ar: 'صَحْن', en: 'plate', pos: 'n', gender: 'm', note: 'plural S7ouun' },
    { lb: 'kéés', ar: 'كاس', en: 'glass', pos: 'n', gender: 'm' },
    { lb: '2anniiné', ar: 'قَنّينة', en: 'bottle', pos: 'n', gender: 'f', note: 'two bottles 2anniintéén, bottles 2anééné' },
    { lb: '7sééb', ar: 'حْساب', en: 'bill', pos: 'n', gender: 'm' },
    { lb: 'ghalTa', ar: 'غَلْطَة', en: 'mistake', pos: 'n', gender: 'f', note: 'plural aghlaaT' },
    { lb: 'bakhshiish', ar: 'بَخْشيش', en: 'tip', pos: 'n' },
    { lb: '7elo', ar: 'حِلو', en: 'dessert; also sweet, lovely', pos: 'n', gender: 'm' },
    { lb: '3asha', ar: 'عَشاء', en: 'dinner', pos: 'n', gender: 'm' },
    { lb: 'mounéésabé', ar: 'مُناسَبة', en: 'occasion', pos: 'n', gender: 'f' },
    { lb: 'jouwwa', ar: 'جُوّا', en: 'inside', pos: 'adv' },
    { lb: 'barra', ar: 'بَرّا', en: 'outside', pos: 'adv' },
    { lb: 'ghaalé', ar: 'غالي', en: 'expensive', pos: 'adj', note: 'ghaalé / ghaalyé / ghaalyiin' }
  ],

  phrases: [
    {
      lb: 'Maitre!', ar: 'مِتر!', en: 'the word you call a waiter with',
      when: 'from your table, at normal volume — it is not rude'
    },
    {
      lb: 'tekram 3aynak', ar: 'تِكْرَم عَيْنَك', en: 'may your eye be honoured',
      when: 'what the person serving you says when granting a request'
    },
    {
      lb: 'ta7t amrak', ar: 'تَحْت أَمْرَك', en: 'under your command',
      when: 'a warmer version of the same, from staff to customer'
    },
    {
      lb: 'tfaDDal', ar: 'تْفَضَّل', en: 'after you, here you are, do sit',
      when: 'handing something over, opening a door, showing a table',
      reply: 'shukran', replyEn: 'thank you'
    },
    {
      lb: 'baddé 3azzbak', ar: 'بَدّي عَذّْبَك', en: 'sorry to trouble you',
      when: 'in front of a request, before you say what it is',
      reply: 'maa fii 3azééb', replyEn: 'no trouble at all'
    },
    {
      lb: 'kell Talab metl haT-Talab!', ar: 'كِل طَلَب مِتْل هالطَّلَب!', en: 'consider it done, gladly',
      when: 'granting a request emphatically — the literal words do not translate, so do not try'
    },
    {
      lb: '3a 7sééb el-maT3am', ar: 'عَ حْساب المَطْعَم', en: 'on the house',
      when: 'offered after a mistake — and the refusal below is expected',
      reply: 'basiiTa! maa fii lzouum', replyEn: 'it is nothing, there is no need'
    },
    {
      lb: 'kellak zoo2', ar: 'كِلَّك ذوق', en: 'you are all good taste',
      when: 'thanking someone for a small kindness, at a table or anywhere else'
    }
  ],

  drills: [
    { type: 'choice', q: 'How do you say "a table for two people"?',
      options: ['Taawlé la-shakhSéén', 'Taawlé la-tnéén ashkhaaS', 'Taawlé la-shakhS tnéén'], answer: 0,
      explain: 'Exactly two takes the dual ending. The number two in front of a plural is not an option here.' },

    { type: 'conjugate', en: 'we book', root: 'e7joz', person: 'ne7na', tense: 'present',
      options: ['mne7joz', 'be7joz', 'bye7joz', 'bte7joz'], answer: 0 },

    { type: 'gap', en: 'You are phoning a restaurant on Thursday afternoon.',
      lines: [
        { who: 'Maryam', lb: 'maT3am el-jabal, Bonsoir!', en: 'Jabal restaurant, good evening!' },
        { who: 'You', you: true, lb: 'Bonsoir. baddé e7joz Taawlé la-shakhSéén nhaar es-sabet.', en: 'good evening. I would like to book a table for two on Saturday.' },
        { who: 'Maryam', lb: 'tekram 3aynak. w-la2ayya séé3a?', en: 'certainly. and for what time?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['es-séé3a tmééné w-noSS', 'yoom el-jem3a', 'la-shakhSéén'], answer: 0,
      explain: 'She asked for a time. The other two answer questions she has already had.' },

    { type: 'build', en: 'Bring us two bottles of red wine, please.',
      tiles: ['jebelna', '2anniintéén', 'nbiid a7mar', '3mool ma3rouuf'], extra: ['2anééné'],
      answer: 'jebelna 2anniintéén nbiid a7mar 3mool ma3rouuf' },

    { type: 'match',
      pairs: [['lééy7a', 'menu'], ['7sééb', 'bill'], ['kéés', 'glass'], ['Sa7n', 'plate']] },

    { type: 'gap', en: 'You arrive at the restaurant with a booking.',
      lines: [
        { who: 'Maryam', lb: 'Bonsoir! tfaDDalo.', en: 'good evening! come in.' },
        { who: 'You', you: true, blank: true },
        { who: 'Maryam', lb: 'akiid, tfaDDalo — Taawlé ra2m sab3a jouwwa.', en: 'of course, this way — table number seven, inside.' },
        { who: 'You', you: true, lb: 'kellik zoo2.', en: 'you are very kind.' }
      ],
      options: ['7ééjziin Taawlé jouwwa la-shakhSéén', 'be7joz Taawlé jouwwa la-shakhSéén', 'ra7 e7joz Taawlé jouwwa la-shakhSéén'], answer: 0,
      explain: 'The booking already exists. That is a state, and a state goes in the participle — not in the present, which would mean you are booking one now.' },

    { type: 'choice', q: 'Which is the correct dual of 2anniiné?',
      options: ['2anniintéén', '2anniinéén', '2anééné tnéén'], answer: 0,
      explain: 'A feminine noun in -é brings its hidden t back before the dual ending.' },

    { type: 'type', en: 'the bill', answer: '7sééb', accept: ['el-7sééb', 'hsééb'] },

    { type: 'choice', q: 'You want the waiter to come over. What do you say?',
      options: ['Maitre!', 'bisharafak!', 'tekram 3aynak'], answer: 0,
      explain: 'bisharafak is pleading, and tekram 3aynak is what the waiter says to you, not the reverse.' },

    { type: 'build', en: 'We ordered a glass of wine, not a bottle.',
      tiles: ['ne7na', 'Talabna', 'kéés', 'nbiid', 'mesh', '2anniiné'], extra: ['maa'],
      answer: 'ne7na Talabna kéés nbiid mesh 2anniiné' },

    { type: 'conjugate', en: 'they will take', root: 'éékhod', person: 'henné', tense: 'future with ra7',
      options: ['ra7 yéékhodo', 'ra7 téékhodo', 'ra7 néékhod', 'ra7 yéékhod'], answer: 0 },

    { type: 'match',
      pairs: [['jouwwa', 'inside'], ['barra', 'outside'], ['mééza', 'mezze'], ['bakhshiish', 'tip']] },

    { type: 'choice', q: 'The manager says the meal is 3a 7sééb el-maT3am. What is the expected move?',
      options: [
        'Turn it down once, warmly: basiiTa! maa fii lzouum',
        'Accept straight away and thank him',
        'Ask for the dessert to be taken off too'
      ], answer: 0,
      explain: 'The refusal is the second half of the ritual. Accepting immediately reads as if the complaint was about the money.' },

    { type: 'type', en: 'Sorry to trouble you.', answer: 'baddé 3azzbak', accept: ['baddé 3azzbik'] }
  ],

  quiz: [
    { type: 'gap', en: 'The bill has arrived and the numbers do not add up.',
      lines: [
        { who: 'You', you: true, lb: 'dakhlak, be3te2ed fii ghalTa bel-7sééb.', en: 'excuse me, I think there is a mistake in the bill.' },
        { who: 'Fadi', lb: 'farjiiné… ma3ak 7a2. yaa 3ayb esh-shouum!', en: 'show me… you are right. how embarrassing!' },
        { who: 'Fadi', lb: 'bghayyero halla2, w-el-7elo 3a 7sééb el-maT3am.', en: 'I will change it now, and dessert is on the house.' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['basiiTa! maa fii lzouum', 'akiid, shukran', 'w-l-3asha kaméén?'], answer: 0 },

    { type: 'choice', q: 'Which sentence puts the booking in the wrong shape for standing at the door?',
      options: ['be7joz Taawlé la-shakhSéén', '7ééjziin Taawlé la-shakhSéén', 'mbéére7 7ajazna Taawlé la-shakhSéén'], answer: 0,
      explain: 'be7joz means you are booking one right now. The participle says you already hold one, which is what the host needs.' },

    { type: 'build', en: 'I would like to book a table for two on Saturday.',
      tiles: ['baddé', 'e7joz', 'Taawlé', 'la-shakhSéén', 'nhaar es-sabet'], extra: ['be7joz'],
      answer: 'baddé e7joz Taawlé la-shakhSéén nhaar es-sabet' },

    { type: 'conjugate', en: 'you (pl) prefer', root: 'faDDel', person: 'ento', tense: 'present',
      options: ['betfaDDlo', 'bifaDDel', 'menfaDDel', 'bfaDDel'], answer: 0 },

    { type: 'match',
      pairs: [['shakhSéén', 'two people'], ['2anniintéén', 'two bottles'], ['jeme3téén', 'two weeks'], ['alféén', 'two thousand']] },

    { type: 'choice', q: 'Three people are coming. Which is right?',
      options: ['tléét ashkhaaS', 'tléét shakhSéén', 'tléét shakhS'], answer: 0,
      explain: 'From three upwards the number sits in front of the plural. The dual is only ever for two.' },

    { type: 'type', en: 'It has come out a bit expensive.', answer: 'Tole3 ghaalé shwayy' },

    { type: 'choice', q: 'A waiter grants your request with "kell Talab metl haT-Talab!". What has he said?',
      options: [
        'Consider it done, gladly',
        'That request is not possible tonight',
        'Every order costs the same'
      ], answer: 0,
      explain: 'The words mean roughly "every request is like this request", which is nonsense in English. Take the tone, not the gloss.' },

    { type: 'choice', q: 'Which of these does not belong at the start of a complaint?',
      options: ['bisharafak!', 'dakhlak?', 'baddé 3azzbak'], answer: 0,
      explain: 'bisharafak is desperate pleading. Over a bill it makes a small correction sound like an emergency.' },

    { type: 'build', en: 'We will walk a bit after dinner.',
      tiles: ['ra7', 'nemshé', 'shwayy', 'ba3d', 'el-3asha'], extra: ['3am'],
      answer: 'ra7 nemshé shwayy ba3d el-3asha' }
  ]
});
