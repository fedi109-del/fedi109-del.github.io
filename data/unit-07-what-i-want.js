LEB.addUnit({
  id: 'u07',
  stage: 2,
  order: 7,
  title: 'What I Want',
  goal: 'Ask for what you want, and shape the request, without knowing a single verb.',
  canDo: [
    'Say what you or anyone else wants, in all eight persons',
    'Order a drink and say how you want it made',
    'Ask politely, and answer the question every waiter asks next'
  ],

  grammar: [
    {
      heading: 'Wanting is an ending, not a verb',
      body:
        'Lebanese has no verb for *want*. Nothing was lost along the way — the language simply never ' +
        'built one. What it uses instead is a short stem, `badd-`, which cannot stand alone and has to ' +
        'be finished off with the very endings you already put on `esm` to get `esmé`, `esmak`, `esmik`.\n\n' +
        'So a wish is handled grammatically like a possession. You do not *do* wanting, you *hold* it: ' +
        '`baddé` is closer to "my want" than to "I want". Once that lands, the table below costs you ' +
        'nothing. You learned these endings for names and for family, and here they are again, doing a ' +
        'completely different job.\n\n' +
        'This is also why `badd-` never takes a verb prefix. There is no `bbaddé`, no `3am baddé`. A stem ' +
        'that takes possessive endings is not a verb, and the moment you try to conjugate it like one you ' +
        'produce something nobody says. Words that behave this way are called **suffix verbs** in this ' +
        'course: they do a verb\'s work with a noun\'s machinery, and Lebanese leans on them constantly.',
      table: {
        headers: ['person', 'form', 'what it says'],
        rows: [
          ['ana', '`baddé`', 'I want'],
          ['enta', '`baddak`', 'you want — one man'],
          ['enté', '`baddik`', 'you want — one woman'],
          ['houwwé', '`baddo`', 'he wants'],
          ['hiyyé', '`badda`', 'she wants'],
          ['ne7na', '`baddna`', 'we want'],
          ['ento', '`baddkon`', 'you want — several'],
          ['henné', '`baddon`', 'they want']
        ]
      },
      examples: [
        { lb: 'baddé fenjéén 2ahwe', ar: 'بدي فنجان قهوة', en: 'I want a cup of coffee.' },
        { lb: 'shou baddik?', ar: 'شو بدك؟', en: 'What do you want?', note: 'to a woman' },
        { lb: 'baddna kéés maay', ar: 'بدنا كاس ماي', en: 'We want a glass of water.' }
      ],
      warning:
        '`badd-` carries a second meaning that tables rarely show: something **about to happen**. Hold on ' +
        'to the "want" reading for now and let the other one reach you through context, which is how ' +
        'people actually pick it up.'
    },
    {
      heading: 'Say the thing, then shape it',
      body:
        'A Lebanese order comes out in the order you assemble it in your head. Whose wish it is, then the ' +
        'thing, then how you want it. Nothing is inverted and no small word goes missing.\n\n' +
        'The two words that shape a drink are `ma3` (with) and `bala` (without): `2ahwe ma3 7aliib`, ' +
        '`2ahwe bala 7aliib`. Keep an eye on `ma3` — in the next unit it turns up doing something ' +
        'completely different, meaning "have on you". Sitting between two nouns like this, it is plain ' +
        '*with*, and position is the only thing that tells the two apart.\n\n' +
        'Politeness goes at the end, not the front. `3mool ma3rouuf` is the everyday please. It literally ' +
        'means *do a favour*, and since it is an instruction aimed at a person, it changes with who that ' +
        'person is: `3mool` to a man, `3melé` to a woman, `3melo` to a group. `eza betriid` is the softer ' +
        'one, literally *if you would like*, and it is what you reach for with a stranger, or when what ' +
        'you are asking for is slightly awkward.',
      table: {
        headers: ['said to', 'the everyday please', 'the softer please'],
        rows: [
          ['one man', '`3mool ma3rouuf`', '`eza betriid`'],
          ['one woman', '`3melé ma3rouuf`', '`eza betriidé`'],
          ['several people', '`3melo ma3rouuf`', '`eza betriido`']
        ]
      },
      examples: [
        { lb: 'shaay bala 7aliib, 3mool ma3rouuf', ar: 'شاي بلا حليب، عمول معروف', en: 'Tea without milk, please.' },
        { lb: 'baddé 3aSiir kaméén', ar: 'بدي عصير كمان', en: 'I want a juice too.' },
        { lb: 'baddo kéés nbiid', ar: 'بدو كاس نبيد', en: 'He wants a glass of wine.' }
      ]
    },
    {
      heading: 'One thing to expect, not to build yet',
      body:
        'Sooner or later you will hear `badd-` followed by something that looks like a verb — and that ' +
        'verb will be missing a letter. Lebanese says `baddé rou7` for "I want to go", never ' +
        '`baddé brou7`.\n\n' +
        'The reason is that Lebanese has no infinitive. There is no neutral dictionary form to park after ' +
        '"want", so the second verb is conjugated for the same person as the first, and it marks itself as ' +
        'the subordinate one by dropping the `b-` it would carry when standing alone. Two conjugations in ' +
        'one short sentence, one of them stripped.\n\n' +
        'You are not expected to build any of that yet. Real verbs come later in this course, and the ' +
        'dropped `b-` gets a unit to itself. For now, recognise the pattern when it goes past and keep ' +
        'using `badd-` with things: a coffee, a room, a bit of milk, a phone number. That alone gets you ' +
        'served, understood, and answered.',
      warning:
        'Do not try to reverse-engineer those verb forms from what you hear. Guessing produces confident ' +
        'nonsense, and `badd-` plus a plain noun is already a complete, correct sentence.'
    }
  ],

  vocab: [
    { lb: 'badd-', ar: 'بدّ', en: 'to want', pos: 'v', note: 'never bare: it needs an ending — baddé, baddak, baddik' },
    { lb: '2ahwe', ar: 'قهوة', en: 'coffee', pos: 'n', gender: 'f', note: 'the small bitter cup, not a mug of filter coffee' },
    { lb: 'shaay', ar: 'شاي', en: 'tea', pos: 'n', gender: 'm' },
    { lb: 'maay', ar: 'ماي', en: 'water', pos: 'n', gender: 'f' },
    { lb: '3aSiir', ar: 'عصير', en: 'juice', pos: 'n', gender: 'm' },
    { lb: 'nbiid', ar: 'نبيد', en: 'wine', pos: 'n', gender: 'm', note: 'nbiid a7mar is red wine' },
    { lb: '7aliib', ar: 'حليب', en: 'milk', pos: 'n', gender: 'm' },
    { lb: 'fenjéén', ar: 'فنجان', en: 'cup', pos: 'n', gender: 'm' },
    { lb: 'kéés', ar: 'كاس', en: 'glass', pos: 'n', gender: 'm' },
    { lb: 'bala', ar: 'بلا', en: 'without', pos: 'prep' },
    { lb: 'ma3', ar: 'مع', en: 'with', pos: 'prep' },
    { lb: 'shwayyet', ar: 'شوية', en: 'a little, a bit of', pos: 'adv', note: 'goes straight in front of the thing: shwayyet 7aliib' },
    { lb: 'kaméén', ar: 'كمان', en: 'also, as well', pos: 'adv' },
    { lb: '3mool ma3rouuf', ar: 'عمول معروف', en: 'please', pos: 'phr', note: 'literally "do a favour"' },
    { lb: 'eza betriid', ar: 'إذا بتريد', en: 'please, if you would like', pos: 'phr' },
    { lb: 'jou3aan', ar: 'جوعان', en: 'hungry (a man)', pos: 'adj', gender: 'm' }
  ],

  phrases: [
    {
      lb: 'shou baddak?', ar: 'شو بدك؟', en: 'What do you want?',
      when: 'a waiter, a shopkeeper or a friend turning to you — to a woman, shou baddik',
      reply: 'baddé…', replyEn: 'I want… — then the thing, with nothing in between'
    },
    {
      lb: '3mool ma3rouuf', ar: 'عمول معروف', en: 'please',
      when: 'hung on the end of any request, to a man'
    },
    {
      lb: 'eza betriid', ar: 'إذا بتريد', en: 'if you would like',
      when: 'the softer please, for a stranger or an awkward request'
    },
    {
      lb: 'shii tééné?', ar: 'شي تاني؟', en: 'anything else?',
      when: 'asked the moment your order is written down',
      reply: 'wala shii, shukran', replyEn: 'nothing at all, thank you'
    },
    {
      lb: 'baddé yééh', ar: 'بدي ياه', en: 'I want that one',
      when: 'pointing at something on a shelf or a tray; for a feminine thing, baddé yééha'
    },
    {
      lb: 'ana bel-khedmé', ar: 'أنا بالخدمة', en: 'I am at your service',
      when: 'said to you by whoever is serving you, as they leave the table'
    }
  ],

  dialogue: {
    title: 'Ordering without a single verb',
    setting: 'A café on a side street. Plastic chairs, one waiter, no menu. Everything you are about to say is a stem with an ending on it.',
    lines: [
      { who: 'Waiter', lb: 'ahla w sahla. shou baddak?', ar: 'أهلا وسهلا. شو بدك؟', say: 'أهلا وسهلا. شو بدك؟', en: 'welcome. What do you want?' },
      { who: 'You', you: true, lb: 'baddé 2ahwe, 3mool ma3rouuf.', ar: 'بدي قهوة، عمول معروف', say: 'بدي أهوة، عمول معروف', en: 'I want a coffee, please.',
        note: 'baddé, not "I want": there is no verb in that sentence at all.' },
      { who: 'Waiter', lb: 'ma3 7aliib?', ar: 'مع حليب؟', en: 'with milk?' },
      { who: 'You', you: true, lb: 'la2, bala 7aliib.', ar: 'لأ، بلا حليب', en: 'no, without milk.' },
      { who: 'Waiter', lb: 'shii tééné?', ar: 'شي تاني؟', en: 'anything else?' },
      { who: 'You', you: true, lb: 'maay kaméén, eza betriid.', ar: 'مي كمان، إذا بتريد', en: 'water as well, if you would.',
        note: 'Water arrives beside the coffee whether you ask or not, but asking is polite.' },
      { who: 'Waiter', lb: 'ana bel-khedmé.', ar: 'أنا بالخدمة', en: 'I am at your service.' }
    ]
  },

  culture: {
    heading: 'How much sugar is a real question',
    icon: 'cup',
    body:
      'Order a coffee in Lebanon and you will be asked how you take it. There are three usual ' +
      'answers and they are not about milk, which mostly does not come into it. `sada` is bitter, ' +
      'no sugar at all, and it is what gets served at funerals and in serious conversations. ' +
      '`wasaT` is a little sugar, and it is what most people drink. `7elwé` is properly sweet.\n\n' +
      'Answer with the wrong one and you will get a cup you do not enjoy, because Lebanese coffee is ' +
      'small, thick, and not something you dilute afterwards. Say `wasaT` if you have no idea.\n\n' +
      'The other thing nobody warns you about: refusing a coffee is difficult. Offering it is how a ' +
      'shop, an office or a home says you are welcome, and "no thank you" is heard as an answer to ' +
      'the welcome rather than to the drink. If you genuinely cannot, take it, hold it, and leave ' +
      'most of it. Everyone does.',
  },

  drills: [
    { type: 'choice', q: 'A friend asks what you would like. How do you say "I want a coffee"?',
      options: ['baddé 2ahwe', 'baddak 2ahwe', 'ma3é 2ahwe'], answer: 0,
      explain: 'baddak is a man\'s own wish, and ma3é would mean you are carrying a coffee around.' },

    { type: 'conjugate', en: 'she wants', root: 'badd-', person: 'hiyyé',
      options: ['badda', 'baddo', 'baddna', 'baddik'], answer: 0,
      explain: 'hiyyé takes -a, exactly as esm becomes esma.' },

    { type: 'match',
      pairs: [['2ahwe', 'coffee'], ['shaay', 'tea'], ['maay', 'water'], ['3aSiir', 'juice']] },

    { type: 'build', en: 'I want a coffee without milk.',
      tiles: ['baddé', '2ahwe', 'bala', '7aliib'], extra: ['ma3'], answer: 'baddé 2ahwe bala 7aliib' },

    { type: 'gap', en: 'You sit down outside a café and the waiter comes over.',
      lines: [
        { who: 'Waiter', lb: 'ahla w sahla, shou baddak?', en: 'welcome, what would you like?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['baddé fenjéén 2ahwe, 3mool ma3rouuf', 'ma3é fenjéén 2ahwe', 'baddak fenjéén 2ahwe'], answer: 0,
      explain: 'The wish is yours, so the ending is -é. The other two hand the wish to someone else.' },

    { type: 'choice', q: 'You cannot drink milk. How do you order your coffee?',
      options: ['2ahwe bala 7aliib', '2ahwe ma3 7aliib', '2ahwe kaméén'], answer: 0,
      explain: 'bala is without, ma3 is with. One letter of difference in English, a whole cup in Beirut.' },

    { type: 'type', en: 'We want water.', answer: 'baddna maay' },

    { type: 'choice', q: 'Which set of endings does badd- take?',
      options: [
        'The possessive endings — the ones on esmé and esmak',
        'The present-tense verb prefixes b-, bt-, by-',
        'No endings at all; badd is a whole word'
      ], answer: 0,
      explain: 'That is what makes it a suffix verb rather than a verb.' },

    { type: 'conjugate', en: 'they want', root: 'badd-', person: 'henné', answer: 'baddon',
      explain: 'henné takes -on, the same ending that turns esm into esmon.' },

    { type: 'build', en: 'What do you want? (to a woman)',
      tiles: ['shou', 'baddik'], extra: ['baddak'], answer: 'shou baddik' },

    { type: 'match',
      pairs: [['3mool ma3rouuf', 'please — to a man'], ['3melé ma3rouuf', 'please — to a woman'], ['eza betriid', 'if you would like'], ['kaméén', 'also, as well']] },

    { type: 'gap', en: 'Your order is written down and the waiter is still standing there.',
      lines: [
        { who: 'Waiter', lb: 'shii tééné?', en: 'anything else?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['wala shii, shukran', 'shou baddak?', 'baddo shaay'], answer: 0,
      explain: 'wala shii closes the order politely. The other two hand the question back or order for him.' },

    { type: 'choice', q: 'At a bakery someone points at a tray and says "baddo yééh". What is going on?',
      options: ['He wants that one', 'He is carrying it', 'He is offering it to you'], answer: 0,
      explain: 'baddo is his wish; yééh is the detached "it" a suffixed stem needs, since the ending slot is taken.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which one means "you want", said to several people?',
      options: ['baddkon', 'baddon', 'baddna'], answer: 0 },

    { type: 'gap', en: 'You are ordering breakfast for yourself and a friend.',
      lines: [
        { who: 'Waiter', lb: 'shou baddkon?', en: 'what would you like?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['baddna shaay ma3 7aliib', 'baddo shaay ma3 7aliib', 'ma3na shaay ma3 7aliib'], answer: 0 },

    { type: 'type', en: 'I want a glass of water.', answer: 'baddé kéés maay' },

    { type: 'match',
      pairs: [['fenjéén', 'cup'], ['kéés', 'glass'], ['7aliib', 'milk'], ['nbiid', 'wine']] },

    { type: 'conjugate', en: 'he wants', root: 'badd-', person: 'houwwé',
      options: ['baddo', 'badda', 'baddak', 'baddé'], answer: 0 },

    { type: 'build', en: 'She wants tea without milk.',
      tiles: ['badda', 'shaay', 'bala', '7aliib'], extra: ['ma3'], answer: 'badda shaay bala 7aliib' },

    { type: 'choice', q: 'Lebanese says "baddé rou7" for "I want to go". What happened to the second word?',
      options: [
        'It dropped the b- it would carry on its own',
        'It turned into an infinitive',
        'It took a possessive ending too'
      ], answer: 0,
      explain: 'Lebanese has no infinitive: the subordinate verb stays conjugated and loses its b-.' },

    { type: 'type', en: 'Please — the everyday one, said to a man.', answer: '3mool ma3rouuf' },

    { type: 'choice', q: 'Why can you never say "3am baddé"?',
      options: [
        'badd- is not a verb: it takes possessive endings, not verb markers',
        'badd- is already in the past',
        '3am only goes with questions'
      ], answer: 0 }
  ]
});
