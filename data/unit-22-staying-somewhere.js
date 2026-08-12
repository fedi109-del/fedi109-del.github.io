LEB.addUnit({
  id: 'u22',
  stage: 3,
  order: 22,
  title: 'A Room for Two Nights',
  goal: 'Book a room over the phone, say who is coming and for how long, and get an ordinary problem fixed without switching to English.',
  canDo: [
    'Ask for a room by type and by number of nights',
    'Count nights and people the way Lebanese counts to two',
    'Ask what a night costs and what comes with it',
    'Report the small things that go wrong in a room'
  ],

  grammar: [
    {
      heading: 'Lebanese counts to two, then stops',
      body:
        'There is a whole number missing from the way you have been counting. Lebanese has one, ' +
        'it has two, and only from three onwards does it count the way you expect.\n\n' +
        '"Two" is not a word you put in front of a noun. It is an ending you weld onto the end of ' +
        'it: `-één`. A night is `laylé`; two nights is `layltéén`. A person is `shakhS`; two people ' +
        'is `shakhSéén`. An hour is `séé3a`, two hours `séé3téén`. You have already used one of ' +
        'these without being told: `mar7abtéén`, the answer everyone gives to `mar7aba`, is ' +
        'literally two hellos handed back.\n\n' +
        'Feminine nouns ending in `-é` drop it and take `-téén` instead. That is why `laylé` comes ' +
        'out as `layltéén` and not as anything gentler.\n\n' +
        'From three upwards the noun turns plural and the number stands in front of it — but the ' +
        'number itself shrinks. On their own the numbers are `tléété`, `khamsé`, `setté`. In front ' +
        'of something counted they lose their tail: `tléét layéélé`, `khams layéélé`, ' +
        '`sett ashkhaaS`. Two shapes for the same number, decided purely by whether a noun follows.',
      table: {
        headers: ['one', 'two', 'three and up'],
        rows: [
          ['`laylé` — a night', '`layltéén`', '`tléét layéélé`'],
          ['`shakhS` — a person', '`shakhSéén`', '`sett ashkhaaS`'],
          ['`séé3a` — an hour', '`séé3téén`', '`khams séé3aat`'],
          ['`jem3a` — a week', '`jeme3téén`', '`tléét jméé3`']
        ]
      },
      examples: [
        { lb: 'baddé ouuDa la-layltéén', ar: 'بَدّي أوضة لَلَيْلْتين', en: 'I want a room for two nights.' },
        { lb: 'ne7na shakhSéén', en: 'There are two of us.' },
        { lb: 'l-7ajz la-tléét layéélé', en: 'The booking is for three nights.' }
      ],
      warning:
        'Never put the word for two in front of a plural. `tnéén ashkhaaS` is the mistake every ' +
        'learner makes, and it lands as clearly wrong. The number two lives **inside** the word: ' +
        '`shakhSéén`.'
    },
    {
      heading: 'Asking for things without sounding like a boss',
      body:
        'A hotel is where your politeness formulas earn their keep. Lebanese has several, and they ' +
        'are not interchangeable — they differ in how hard they push.\n\n' +
        '`3mool ma3rouuf` is the everyday please, literally "do a favour". It changes for who you ' +
        'are speaking to: `3mool` to a man, `3melé` to a woman, `3melo` to a group.\n\n' +
        '`eza betriid` — "if you would like" — is softer, because it hands the other person a way ' +
        'out. `eza betriidé` to a woman.\n\n' +
        '`fii majéél` is softer still and covers whole requests: "is there room for you to…?", ' +
        'followed by a bare verb. And when you already know you are being a nuisance, you say so ' +
        'before you ask: `baddé 3azzbak` to a man, `baddé 3azzbik` to a woman — "I want to trouble ' +
        'you".\n\n' +
        'Learn the answers too, because you will hear them more often than you say them. ' +
        '`tekram 3aynak` and `ta7t amrak` both mean roughly "consider it done"; `walaw` refuses to ' +
        'let your thank-you count as a debt at all.',
      table: {
        headers: ['you say', 'literally', 'how hard it pushes'],
        rows: [
          ['`3mool ma3rouuf`', 'do a favour', 'the everyday please'],
          ['`eza betriid`', 'if you would like', 'softer — it leaves them an exit'],
          ['`fii majéél t…?`', 'is there room for you to…?', 'the softest full request'],
          ['`baddé 3azzbak`', 'I want to trouble you', 'said first, when you know it is a nuisance'],
          ['`bisharafak`', 'on your honour', 'desperate — keep it for when it really is']
        ]
      },
      examples: [
        { lb: 'fii majéél tejé 3al-ouuDa?', en: 'Could you come up to the room?' },
        { lb: 'baddé 3azzbik, fii Dajjé bel-ouuDa', en: 'Sorry to bother you, there is noise in the room.' }
      ],
      warning:
        'Everything behind `fii majéél` and behind `baddé 3azzbak` is a bare verb: `fii majéél ' +
        'tejé?`, not `fii majéél btejé?`. The politeness word is the one carrying the sentence, so ' +
        'the verb stands down.'
    },
    {
      heading: 'Saying what is wrong',
      body:
        'Nothing here is a complaint yet. These are the flat statements that get a problem looked ' +
        'at, and they turn on choosing the right negative word.\n\n' +
        '`maa` negates a **verb**. `l-moukayyef maa byeshteghel` — the air conditioner does not ' +
        'work. `mesh` negates a **noun or an adjective**. `l-maay mesh sokhné` — the water is not ' +
        'hot. Swap them and the meaning still gets through, but you have made one of the loudest ' +
        'learner mistakes there is.\n\n' +
        'For existence, use `fii` and `maa fii`: `fii moukayyef bel-ouuDa?` asks whether there is ' +
        'an air conditioner; `maa fii maay sokhné` says there is no hot water. `fii` is not a verb ' +
        'and never conjugates.\n\n' +
        'And for something that has not happened yet, put `ba3do` in front: `ba3do mesh jééhez` — ' +
        'it is still not ready. `ba3d-` carries the same endings as everything else, so a person ' +
        'can be still-something too.\n\n' +
        'Say these evenly. The register for actually being angry is a different one, and using it ' +
        'at a reception desk gets you less, not more.',
      table: {
        headers: ['what you negate', 'word', 'example'],
        rows: [
          ['a verb', '`maa`', '`l-moukayyef maa byeshteghel` — the A/C does not work'],
          ['an adjective', '`mesh`', '`l-maay mesh sokhné` — the water is not hot'],
          ['existence', '`maa fii`', '`maa fii Dajjé` — there is no noise'],
          ['not yet', '`ba3do mesh`', '`ba3do mesh jééhez` — it is still not ready']
        ]
      },
      examples: [
        { lb: 'fii moukayyef bel-ouuDa?', ar: 'في مُكَيِّف بالأوضة؟', en: 'Is there an air conditioner in the room?' },
        { lb: 'l-moukayyef maa byeshteghel', en: 'The air conditioner does not work.' },
        { lb: 'maa fii maay sokhné', en: 'There is no hot water.' }
      ],
      warning:
        '`mesh byeshteghel` and `maa sokhné` are both wrong, and both are understandable — which is ' +
        'exactly why they stick. Fix the habit now: verbs take `maa`, adjectives take `mesh`.'
    }
  ],

  vocab: [
    { lb: 'foundo2', ar: 'فُنْدُق', en: 'hotel', pos: 'n', gender: 'm', note: 'plural `fanééde2`' },
    { lb: 'ouuDa', ar: 'أوضة', en: 'room', pos: 'n', gender: 'f', note: 'plural `ouwaD`' },
    { lb: 'laylé', ar: 'لَيْلة', en: 'night', pos: 'n', gender: 'f', note: 'plural `layéélé`; two nights is `layltéén`' },
    { lb: 'layltéén', ar: 'لَيْلْتين', en: 'two nights', pos: 'n', note: 'one word — there is no other way to say it' },
    { lb: '7ajz', ar: 'حَجز', en: 'booking', pos: 'n', gender: 'm', note: 'the verb root is `e7joz`' },
    { lb: 'mfawwal', ar: 'مْفَوَّل', en: 'fully booked', pos: 'adj', note: '`mfawwlé` of a woman, `mfawwliin` of a place or a group' },
    { lb: 'mawjouud', ar: 'مَوْجود', en: 'there, available', pos: 'adj', note: '`mawjouudé` for a feminine noun such as `ouuDa`' },
    { lb: 'moukayyef', ar: 'مُكَيِّف', en: 'air conditioner', pos: 'n', gender: 'm' },
    { lb: 'Dajjé', ar: 'ضَجّة', en: 'noise', pos: 'n', gender: 'f' },
    { lb: 'terwii2a', ar: 'تِرْويقة', en: 'breakfast', pos: 'n', gender: 'f' },
    { lb: 'maay sokhné', ar: 'مَي سِخنة', en: 'hot water', pos: 'phr' },
    { lb: 'sokhn', ar: 'سِخن', en: 'hot', pos: 'adj', note: '`sokhné` feminine, `sokhniin` plural — of things, not of weather' },
    { lb: 'se3r', ar: 'سِعْر', en: 'price', pos: 'n', gender: 'm', note: 'plural `as3aar`' },
    { lb: 'shakhS', ar: 'شَخْص', en: 'person', pos: 'n', gender: 'm', note: '`shakhSéén` two people, `ashkhaaS` people' },
    { lb: '7aDertak', ar: 'حَضِرْتَك', en: 'you (polite)', pos: 'pron', note: '`7aDertik` to a woman — used at a desk, not with friends' },
    { lb: 'lawa7dé', ar: 'لَوَحْدي', en: 'on my own', pos: 'phr', note: '`lawa7dak` to a man, `lawa7dik` to a woman' }
  ],

  phrases: [
    {
      lb: 'fii ouuDa mawjouudé la-layltéén?', en: 'is there a room free for two nights?',
      when: 'the whole of a phone booking, in one sentence'
    },
    {
      lb: 'b-addéé bel-laylé?', en: 'how much per night?',
      when: 'straight after they say yes, and before you say yes'
    },
    {
      lb: 'fii terwii2a ma3 l-ouuDa?', en: 'does breakfast come with the room?',
      when: 'it very often does, and nobody will mention it unless you ask'
    },
    {
      lb: 'ne7na shakhSéén', en: 'there are two of us',
      when: 'the desk needs this before it needs anything else'
    },
    {
      lb: '3mool ma3rouuf, l-7ajz b-esmé', en: 'the booking is in my name, please',
      when: 'arriving — hand over the name and let them find it',
      reply: 'tekram 3aynak', replyEn: 'consider it done'
    },
    {
      lb: 'baddé 3azzbik, l-moukayyef maa byeshteghel', en: 'sorry to bother you, the air conditioner does not work',
      when: 'said flat, to a woman at the desk — the apology in front does all the softening',
      reply: 'wala yhemmik', replyEn: 'do not give it a thought'
    },
    {
      lb: 'maa fii maay sokhné', en: 'there is no hot water',
      when: 'a statement, not an accusation'
    },
    {
      lb: 'ma3 es-saléémé', ar: 'مع السلامة', en: 'go with safety',
      when: 'checking out, said to you as you leave',
      reply: 'Allah ysallmak', replyEn: 'may God keep you safe'
    }
  ],

  drills: [
    { type: 'choice', q: 'How do you say "two nights"?',
      options: ['layltéén', 'tnéén layéélé', 'tnéén laylé'], answer: 0,
      explain: 'Two is an ending, not a word standing in front. The noun swallows it.' },

    { type: 'conjugate', en: 'we book', root: 'e7joz', person: 'ne7na', tense: 'present',
      options: ['mne7joz', 'be7joz', 'bye7joz', 'bte7joz'], answer: 0 },

    { type: 'build', en: 'I want a room for two nights.',
      tiles: ['baddé', 'ouuDa', 'la-layltéén'], extra: ['tnéén', 'laylé'], answer: 'baddé ouuDa la-layltéén',
      explain: 'A stretch of time takes `la-`, and two nights is one word.' },

    { type: 'match',
      pairs: [['ouuDa', 'room'], ['laylé', 'night'], ['terwii2a', 'breakfast'], ['Dajjé', 'noise']] },

    { type: 'gap', en: 'You are phoning a small hotel. There are two of you and you need three nights.',
      lines: [
        { who: 'Rita', lb: 'foundo2 el-jabal, masa l-khéér', en: 'Hotel al-Jabal, good evening' },
        { who: 'You', you: true, blank: true },
        { who: 'Rita', lb: 'akiid, mawjouudé', en: 'of course, we have one' }
      ],
      options: ['fii ouuDa mawjouudé la-tléét layéélé?', 'fii ouuDa mfawwlé la-tléét layéélé?', 'fii ouuDa mawjouudé la-tnéén layéélé?'], answer: 0,
      explain: '`mfawwal` is what the hotel is when it has nothing left — the opposite of what you want to hear.' },

    { type: 'choice', q: 'The air conditioner does not work. Which negative word?',
      options: ['l-moukayyef maa byeshteghel', 'l-moukayyef mesh byeshteghel', 'l-moukayyef maa fii'], answer: 0,
      explain: 'A verb is negated with `maa`. `mesh` is for nouns and adjectives.' },

    { type: 'choice', q: 'The water is not hot. Which negative word?',
      options: ['l-maay mesh sokhné', 'l-maay maa sokhné', 'l-maay maa fii sokhné'], answer: 0,
      explain: '`sokhné` is an adjective, so it takes `mesh`.' },

    { type: 'type', en: 'How much per night?', answer: 'b-addéé bel-laylé', accept: ['baddéé bel-laylé', 'b addéé bel laylé'] },

    { type: 'conjugate', en: 'she stays', root: 'eb2a', person: 'hiyyé', tense: 'present',
      options: ['bteb2a', 'beb2a', 'byeb2a', 'mneb2a'], answer: 0,
      explain: '`enta` and `hiyyé` are always the same form. Context sorts it out.' },

    { type: 'build', en: 'Could you come up to the room?',
      tiles: ['fii', 'majéél', 'tejé', '3al-ouuDa'], extra: ['btejé'], answer: 'fii majéél tejé 3al-ouuDa',
      explain: 'The verb behind `fii majéél` keeps its person and drops its `b-`.' },

    { type: 'gap', en: 'You have been in the room ten minutes and the shower is cold.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Rita', lb: 'wala yhemmak, baddé shouuf', en: 'do not worry about it, let me look' }
      ],
      options: ['baddé 3azzbik, maa fii maay sokhné', 'mesh ma32ouul, wéén el-maay?', 'l-maay maa 3lééh'], answer: 0,
      explain: 'The second one is the register of an argument. At a desk it costs you help.' },

    { type: 'match',
      pairs: [['shakhSéén', 'two people'], ['sett ashkhaaS', 'six people'], ['mfawwal', 'fully booked'], ['mawjouud', 'available']] },

    { type: 'choice', q: 'Which one asks whether breakfast comes with the room?',
      options: ['fii terwii2a ma3 l-ouuDa?', 'fii ouuDa ma3 t-terwii2a?', 'b-addéé t-terwii2a?'], answer: 0 },

    { type: 'type', en: 'there are two of us', answer: 'ne7na shakhSéén', accept: ['ne7na shakhSeen'] }
  ],

  quiz: [
    { type: 'choice', q: 'Six people. Which is right?',
      options: ['sett ashkhaaS', 'setté ashkhaaS', 'sett shakhSéén'], answer: 0,
      explain: 'In front of a counted noun the number loses its tail: `setté` becomes `sett`.' },

    { type: 'gap', en: 'You are checking in on your own and the desk wants to know who else is coming.',
      lines: [
        { who: 'Fadi', lb: 'lawa7dak? aw ma3 7ada?', en: 'on your own? or with someone?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['lawa7dé', 'lawa7dak', 'ma3 ba3D'], answer: 0,
      explain: 'The ending points at whoever is alone. `lawa7dak` would be asking him about himself.' },

    { type: 'build', en: 'There is no hot water.',
      tiles: ['maa', 'fii', 'maay', 'sokhné'], extra: ['mesh'], answer: 'maa fii maay sokhné' },

    { type: 'conjugate', en: 'they book', root: 'e7joz', person: 'henné', tense: 'present',
      options: ['bye7jozo', 'mne7joz', 'bte7jozo', 'be7joz'], answer: 0 },

    { type: 'choice', q: 'The hotel says `boukra mfawwliin`. What have you just been told?',
      options: ['they are full tomorrow', 'they fill the car tomorrow', 'breakfast is tomorrow'], answer: 0 },

    { type: 'type', en: 'two nights', answer: 'layltéén', accept: ['laylteen'] },

    { type: 'match',
      pairs: [['foundo2', 'hotel'], ['7ajz', 'booking'], ['se3r', 'price'], ['moukayyef', 'air conditioner']] },

    { type: 'choice', q: 'Which sentence is built wrongly?',
      options: [
        'l-moukayyef mesh byeshteghel',
        'l-moukayyef maa byeshteghel',
        'l-maay mesh sokhné'
      ], answer: 0,
      explain: 'A verb never takes `mesh`. Everything else here is fine.' },

    { type: 'gap', en: 'You want to ask a woman at the desk for something, and you know it is a nuisance.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Rita', lb: 'walaw, ta7t amrak', en: 'please, whatever you need' }
      ],
      options: ['baddé 3azzbik', 'baddé 3azzbak', 'bisharafik'], answer: 0,
      explain: 'The ending `-ik` is for a woman, and `bisharafik` is far too desperate for a small request.' }
  ]
});
