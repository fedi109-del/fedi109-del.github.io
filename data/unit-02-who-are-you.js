LEB.addUnit({
  id: 'u02',
  stage: 1,
  order: 2,
  title: 'Who Are You',
  goal: 'Give your name, ask for someone else\'s, and say where you are from.',
  canDo: [
    'Use the eight Lebanese pronouns in the right situation',
    'Ask and answer "what is your name?" and "where are you from?"',
    'Say the polite thing after being introduced'
  ],

  grammar: [
    {
      heading: 'Eight people, and no polite form',
      body:
        'Lebanese splits "you" by gender rather than by politeness. There is no separate respectful ' +
        'pronoun to reach for with a stranger or an elder: you address one man as `enta`, one woman ' +
        'as `enté`, and a group as `ento`, whoever they are. Respect lives in tone and in fixed ' +
        'formulas, not in a special pronoun.\n\n' +
        'That gender split runs through everything that follows — verbs, adjectives, endings — so ' +
        'it pays to lock these eight in now, in this order. Every table in this course keeps the ' +
        'same order, and after a few units your eye will find the row before you have read it.',
      table: {
        headers: ['pronoun', 'who it points at'],
        rows: [
          ['`ana`', 'I'],
          ['`enta`', 'you — one man'],
          ['`enté`', 'you — one woman'],
          ['`houwwé`', 'he'],
          ['`hiyyé`', 'she'],
          ['`ne7na`', 'we'],
          ['`ento`', 'you — several people'],
          ['`henné`', 'they']
        ]
      },
      warning:
        'Say `enta` and `enté` out loud one after the other. The whole difference is the last vowel, ' +
        'and getting it wrong is the fastest way to make a room laugh. It is also the fastest thing ' +
        'to fix.'
    },
    {
      heading: 'There is no verb "to be" in the present',
      body:
        'Lebanese does not say "I **am** Marco". It says `ana Marco` — I, Marco — and stops. The ' +
        'same goes for "he is Lebanese", "we are here", "she is fine". Nothing is missing; the ' +
        'language simply puts two things side by side and lets that be the sentence.\n\n' +
        'This is a gift for a beginner: you can make correct, complete sentences before learning a ' +
        'single verb. Take a pronoun, add a noun or an adjective, and you are speaking.',
      examples: [
        { lb: 'ana mnii7', ar: 'أنا منيح', en: 'I am fine.', note: 'a man speaking' },
        { lb: 'hiyyé lebnéniyyé', ar: 'هيي لبنانية', en: 'She is Lebanese.' },
        { lb: 'ne7na men Béérout', ar: 'نحنا من بيروت', en: 'We are from Beirut.' }
      ]
    },
    {
      heading: 'Your name is glued to you',
      body:
        'Where English uses a separate word — *my* name, *your* name — Lebanese welds a short ' +
        'ending onto the noun itself. The word for name is `esm`; add `-é` and it is mine, add ' +
        '`-ak` and it belongs to the man you are talking to, `-ik` to the woman.\n\n' +
        'You will meet the full set of these endings soon, and discover they run through half the ' +
        'language. For now treat these three as whole words and use them.',
      table: {
        headers: ['form', 'meaning', 'used with'],
        rows: [
          ['`esmé`', 'my name', 'yourself'],
          ['`esmak`', 'your name', 'one man'],
          ['`esmik`', 'your name', 'one woman'],
          ['`esmo`', 'his name', 'one man, spoken about'],
          ['`esma`', 'her name', 'one woman, spoken about']
        ]
      },
      examples: [
        { lb: 'shou esmak?', ar: 'شو اسمك؟', en: 'What is your name?', note: 'to a man' },
        { lb: 'esmé Marco', ar: 'اسمي ماركو', en: 'My name is Marco.' },
        { lb: 'min wéén enté?', ar: 'من وين إنتي؟', en: 'Where are you from?', note: 'to a woman' }
      ]
    }
  ],

  vocab: [
    { lb: 'ana', ar: 'أنا', en: 'I', pos: 'pron' },
    { lb: 'enta', ar: 'إنتا', en: 'you (one man)', pos: 'pron' },
    { lb: 'enté', ar: 'إنتي', en: 'you (one woman)', pos: 'pron' },
    { lb: 'houwwé', ar: 'هوي', en: 'he', pos: 'pron' },
    { lb: 'hiyyé', ar: 'هيي', en: 'she', pos: 'pron' },
    { lb: 'ne7na', ar: 'نحنا', en: 'we', pos: 'pron' },
    { lb: 'ento', ar: 'إنتو', en: 'you (several)', pos: 'pron' },
    { lb: 'henné', ar: 'هني', en: 'they', pos: 'pron' },
    { lb: 'esm', ar: 'اسم', en: 'name', pos: 'n', gender: 'm' },
    { lb: 'shou', ar: 'شو', en: 'what', pos: 'pron' },
    { lb: 'miin', ar: 'مين', en: 'who', pos: 'pron' },
    { lb: 'wéén', ar: 'وين', en: 'where', pos: 'adv' },
    { lb: 'men', ar: 'من', en: 'from', pos: 'prep' },
    { lb: 'lebnééné', ar: 'لبناني', en: 'Lebanese (a man)', pos: 'adj', gender: 'm' },
    { lb: 'lebnéniyyé', ar: 'لبنانية', en: 'Lebanese (a woman)', pos: 'adj', gender: 'f' },
    { lb: 'Béérout', ar: 'بيروت', en: 'Beirut', pos: 'n' }
  ],

  phrases: [
    { lb: 'shou esmak?', ar: 'شو اسمك؟', en: 'What is your name?', when: 'asking a man' },
    { lb: 'shou esmik?', ar: 'شو اسمك؟', en: 'What is your name?', when: 'asking a woman' },
    { lb: 'esmé…', ar: 'اسمي…', en: 'My name is…', when: 'answering, with your name straight after' },
    { lb: 'min wéén enta?', ar: 'من وين إنتا؟', en: 'Where are you from?', when: 'asking a man' },
    { lb: 'ana men…', ar: 'أنا من…', en: 'I am from…', when: 'answering, with a country or a city' },
    {
      lb: 'tsharrafna', ar: 'تشرفنا', en: 'we have been honoured',
      when: 'the moment after an introduction — the Lebanese "nice to meet you"',
      reply: 'l-sharaf ilé', replyEn: 'the honour is mine'
    },
    { lb: 'miin hayda?', ar: 'مين هيدا؟', en: 'Who is that?', when: 'about a man; hayda points at him' }
  ],

  dialogue: {
    title: 'Two people waiting for the same lift',
    setting: 'A building in Achrafieh. Ziad is holding the door. Neither of you has met before.',
    lines: [
      { who: 'Ziad', lb: 'mar7aba! ana Ziad.', ar: 'مرحبا! أنا زياد', en: 'hello! I am Ziad' },
      { who: 'You', you: true, lb: 'mar7abtéén. esmé Marco.', ar: 'مرحبتين. اسمي ماركو', en: 'two hellos back. My name is Marco',
        note: 'esmé is literally "my name" — there is no verb here at all.' },
      { who: 'Ziad', lb: 'ahla w sahla. min wéén enta?', ar: 'أهلا وسهلا. من وين انت؟', en: 'welcome. Where are you from?' },
      { who: 'You', you: true, lb: 'ana men Italia. w enta, men Béérout?', ar: 'أنا من ايطاليا. وانت، من بيروت؟', en: 'I am from Italy. And you, from Beirut?' },
      { who: 'Ziad', lb: 'la2, ana men Trablos.', ar: 'لأ، أنا من طرابلس', en: 'no, I am from Tripoli',
        note: 'A place name needs no article and no verb: ana men plus wherever it is.' },
      { who: 'You', you: true, lb: 'ahla w sahla! tsharrafna.', ar: 'أهلا وسهلا! تشرفنا', en: 'welcome! We have been honoured',
        note: 'tsharrafna closes an introduction. Said once, at the end, never twice.' }
    ]
  },

  culture: {
    heading: 'Where are you from is a real question',
    icon: 'pin',
    body:
      'Ask a Lebanese person where they are from and the answer is rarely "Lebanon", and often not ' +
      'Beirut either, even when they were born there and have never lived anywhere else. They will ' +
      'give you the village — the one their family comes from, where the grandparents are buried and ' +
      'where everyone goes in August.\n\n' +
      'So `min wéén enta?` is asking something more specific than it looks. Answering with a country ' +
      'is fine for a foreigner and slightly odd for a local. If you get a village name you have never ' +
      'heard of, that is the normal outcome, and asking where it is counts as interest rather than ' +
      'ignorance.\n\n' +
      'One warning about `tsharrafna`. It is warm, it is standard, and it belongs at the **end** of ' +
      'an introduction, once names have been exchanged. Opening with it is like shaking hands as you ' +
      'walk away.',
  },

  drills: [
    { type: 'match',
      pairs: [['ana', 'I'], ['enta', 'you — one man'], ['hiyyé', 'she'], ['ne7na', 'we']] },

    { type: 'choice', q: 'You are speaking to one woman. Which pronoun?',
      options: ['enté', 'enta', 'ento'], answer: 0,
      explain: 'enta is a single man, ento is a group. The final vowel carries the whole difference.' },

    { type: 'build', en: 'My name is Rana.',
      tiles: ['esmé', 'Rana'], extra: ['esmak'], answer: 'esmé Rana' },

    { type: 'choice', q: 'How do you say "She is Lebanese"?',
      options: ['hiyyé lebnéniyyé', 'hiyyé lebnééné', 'houwwé lebnéniyyé'], answer: 0,
      explain: 'The adjective agrees: a woman is lebnéniyyé, a man is lebnééné.' },

    { type: 'gap', en: 'You have just been introduced to someone at a friend\'s house.',
      lines: [
        { who: 'Nadia', lb: 'esmé Nadia', en: 'my name is Nadia' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['tsharrafna', 'ma3 es-saléémé', 'l-7amdella'], answer: 0,
      explain: 'tsharrafna is what you say the moment names are exchanged.' },

    { type: 'type', en: 'What is your name? (asking a man)', answer: 'shou esmak' },

    { type: 'choice', q: 'Which sentence is correct Lebanese for "I am from Beirut"?',
      options: ['ana men Béérout', 'ana bakoun men Béérout', 'ana houwwé men Béérout'], answer: 0,
      explain: 'There is no verb "to be" in the present. Pronoun plus the rest is the whole sentence.' },

    { type: 'build', en: 'Where are you from? (to a woman)',
      tiles: ['min', 'wéén', 'enté'], extra: ['enta'], answer: 'min wéén enté' },

    { type: 'match',
      pairs: [['shou', 'what'], ['miin', 'who'], ['wéén', 'where'], ['men', 'from']] },

    { type: 'choice', q: 'Someone points at a man and asks "miin hayda?". What have they asked?',
      options: ['Who is that?', 'Where is he from?', 'What is his name?'], answer: 0 },

    { type: 'type', en: 'We are from Beirut.', answer: 'ne7na men Béérout', accept: ['ne7na men Beirut'] },

    { type: 'choice', q: 'Which pair means "his name" and "her name", in that order?',
      options: ['esmo, esma', 'esma, esmo', 'esmak, esmik'], answer: 0 },

    { type: 'gap', en: 'A taxi driver is making conversation.',
      lines: [
        { who: 'Driver', lb: 'min wéén enta?', en: 'where are you from?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['ana men Italya', 'esmé Italya', 'wéén Italya'], answer: 0,
      explain: 'men plus the place. No verb needed.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which pronoun do you use for a group of people?',
      options: ['ento', 'enté', 'henné'], answer: 0 },

    { type: 'type', en: 'My name is Sami.', answer: 'esmé Sami' },

    { type: 'match',
      pairs: [['houwwé', 'he'], ['henné', 'they'], ['enté', 'you — one woman'], ['ne7na', 'we']] },

    { type: 'build', en: 'What is your name? (to a woman)',
      tiles: ['shou', 'esmik'], extra: ['esmak'], answer: 'shou esmik' },

    { type: 'choice', q: 'Why is there no word for "am" in "ana mnii7"?',
      options: [
        'Lebanese has no present tense of "to be" — two words side by side make the sentence',
        'It is dropped only in short sentences',
        'It is hidden inside the pronoun ana'
      ], answer: 0 },

    { type: 'gap', en: 'You meet your neighbour\'s brother for the first time.',
      lines: [
        { who: 'Him', lb: 'ahla w sahla, esmé Jad', en: 'welcome, my name is Jad' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['ahla fiik, tsharrafna', 'ma3 es-saléémé', 'min wéén enta'], answer: 0 },

    { type: 'choice', q: 'A man is Lebanese. How is it said?',
      options: ['houwwé lebnééné', 'houwwé lebnéniyyé', 'hiyyé lebnééné'], answer: 0 },

    { type: 'type', en: 'Where are you from? (to a man)', answer: 'min wéén enta' },

    { type: 'choice', q: 'Which is the polite answer to "tsharrafna"?',
      options: ['l-sharaf ilé', 'l-7amdella', 'mar7abtéén'], answer: 0,
      explain: 'The honour is passed back: l-sharaf ilé, "the honour is mine".' }
  ]
});
