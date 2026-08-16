LEB.addUnit({
  id: 'u10',
  stage: 2,
  order: 10,
  title: 'Saying No',
  goal: 'Negate anything correctly, and refuse something without sounding blunt.',
  canDo: [
    'Choose between maa and mesh by looking at the next word',
    'Say "I am not" with the mann- family',
    'Answer no, not at all, nothing — and still be polite'
  ],

  grammar: [
    {
      heading: 'Three tools, and one mistake everybody makes',
      body:
        'Saying no in Lebanese gets easy the moment you stop translating the word *not* and start looking ' +
        'at what comes after it. The language does not care whether the sentence is a statement, a ' +
        'question or a flat denial. It cares what kind of word is being knocked down.\n\n' +
        'If the next word is a verb, or a suffix verb — anything wearing a possessive ending, `3endé`, ' +
        '`ma3ak`, `baddo`, `fiiya` — the negation is `maa`, standing in front and changing nothing else. ' +
        '`maa 3endé wa2t`. `maa ma3é dollar`. `maa baddo yééh`.\n\n' +
        'If the next word is a noun, an adjective or a participle — `te3béén`, `mnii7`, `meshklé`, ' +
        '`lebnééné` — the negation is `mesh`. `mesh te3béén`. `mesh meshklé`. `mesh ma32ouul`.\n\n' +
        'That is the whole rule, and it is the one learners break most often, in both directions at once. ' +
        '`mesh 3endé` and `maa mnii7` are equally wrong and equally recognisable as foreign. Read the ' +
        'table, then say those two broken versions out loud once, so your ear files them where they ' +
        'belong.',
      table: {
        headers: ['tool', 'goes in front of', 'example', 'meaning'],
        rows: [
          ['`maa`', 'verbs and suffix verbs', '`maa 3endé wa2t`', 'I have no time'],
          ['`mesh`', 'nouns, adjectives, participles', '`mesh te3béén`', 'not tired'],
          ['`mann-`', 'a whole "I am not" statement', '`mannak lebnééné`', 'you are not Lebanese'],
          ['`la2`', 'nothing — it stands alone', '`la2, shukran`', 'no, thank you']
        ]
      },
      warning:
        'The test is mechanical, so use it while it is still slow: look at the word straight after the ' +
        'gap. Does it have a possessive ending on it, or is it a verb? Then `maa`. Anything else, `mesh`.'
    },
    {
      heading: 'The mann- family, or how to negate nothing',
      body:
        'The third tool exists because of a hole in the language. Lebanese has no verb "to be" in the ' +
        'present: `ana te3béén` is already a complete sentence with nothing missing from it. But that ' +
        'leaves nothing to negate — there is no *am* to put a *not* in front of.\n\n' +
        'So the language grew a word out of nowhere. `mann-` means, all on its own, "am not, are not, is ' +
        'not", and it carries the same endings as everything else at this stage. `mannak lebnééné` — you ' +
        'are not Lebanese. `manno hoon` — he is not here. `mannon jou3aaniin` — they are not hungry.\n\n' +
        'With an adjective you have a real choice: `ana mesh te3béén` and `manné te3béén` both work, and ' +
        'both are said constantly. `mann-` is tighter and more spoken; `mesh` is the safer default while ' +
        'these endings are still new to your mouth.\n\n' +
        'One collision to accept rather than fight: `manna` is both "she is not" and "we are not". Only ' +
        'the Arabic script keeps the two apart. In speech the rest of the sentence does the work, and no ' +
        'one hesitates over it.',
      table: {
        headers: ['person', 'form', 'what it says'],
        rows: [
          ['ana', '`manné`', 'I am not'],
          ['enta', '`mannak`', 'you are not — one man'],
          ['enté', '`mannik`', 'you are not — one woman'],
          ['houwwé', '`manno`', 'he is not'],
          ['hiyyé', '`manna`', 'she is not'],
          ['ne7na', '`manna`', 'we are not'],
          ['ento', '`mannkon`', 'you are not — several'],
          ['henné', '`mannon`', 'they are not']
        ]
      }
    },
    {
      heading: 'No, not at all, nothing',
      body:
        '`la2` is the flat no, the one you hand over as a whole answer. Drawn out into `laa2` it grows ' +
        'heavier and more final — the length itself is the emphasis. On its own it can land hard, so it ' +
        'usually travels with company: `la2, shukran`.\n\n' +
        'To shut a door completely, add `abadan`: at all, never, in no way. It goes after the thing it is ' +
        'reinforcing. `maa 3endé wa2t abadan` — I have no time whatsoever.\n\n' +
        'For "nothing" there are two everyday choices, and they are not interchangeable in force. `ma shii` ' +
        'is the plain one, the shrug you give when someone asks what you are up to. `wala shii` is ' +
        'stronger — nothing at all, not one thing — and it is what you say when a waiter asks whether you ' +
        'want anything else and the answer is no.\n\n' +
        'For "there is nothing", nothing new is needed: `maa fii shii`. Same `maa` as always, same `fii` ' +
        'from the last unit, no extra machinery. Lebanese negation is small, and it stays small.',
      examples: [
        { lb: 'la2, wala shii, shukran', ar: 'لأ، ولا شي، شكرا', en: 'No, nothing at all, thank you.' },
        { lb: 'maa fii shii jdiid', ar: 'ما في شي جديد', en: 'There is nothing new.' },
        { lb: 'mannon te3bééniin abadan', ar: 'منهن تعبانين أبدا', en: 'They are not tired in the least.' }
      ]
    }
  ],

  vocab: [
    { lb: 'maa', ar: 'ما', en: 'not', pos: 'adv', note: 'in front of verbs and suffix verbs' },
    { lb: 'mesh', ar: 'مش', en: 'not', pos: 'adv', note: 'in front of nouns, adjectives and participles' },
    /* `say` differs from `ar` here on purpose. Written bare, mann- and men (from)
       are both من, and a voice reading the Arabic says "men" for both — which
       would teach the wrong word for a whole unit. The lengthened مان is how the
       stem is actually said, and `say` is the field that exists for exactly this:
       the spelling for a machine, when the correct spelling would mislead it. */
    { lb: 'mann-', ar: 'من', say: 'مان', en: 'to not be', pos: 'v', note: 'manné, mannak, mannik… it never appears bare' },
    { lb: 'la2', ar: 'لأ', en: 'no', pos: 'adv', note: 'stretched into laa2 for emphasis' },
    { lb: 'abadan', ar: 'أبدا', en: 'at all, never', pos: 'adv' },
    { lb: 'wala shii', ar: 'ولا شي', en: 'nothing at all', pos: 'phr' },
    { lb: 'ma shii', ar: 'ما شي', en: 'nothing', pos: 'phr' },
    { lb: 'yemken', ar: 'يمكن', en: 'maybe', pos: 'adv', note: 'the softest way to refuse without refusing' },
    { lb: 'te3béén', ar: 'تعبان', en: 'tired (a man)', pos: 'adj', gender: 'm' },
    { lb: 'te3bééné', ar: 'تعبانة', en: 'tired (a woman)', pos: 'adj', gender: 'f' },
    { lb: 'meshklé', ar: 'مشكلة', en: 'problem', pos: 'n', gender: 'f', note: 'plural mashéékel' },
    { lb: 'ma32ouul', ar: 'معقول', en: 'reasonable, believable', pos: 'adj', gender: 'm', note: 'mostly heard negated, as mesh ma32ouul' },
    { lb: '3aaTel', ar: 'عاطل', en: 'bad, no good', pos: 'adj', gender: 'm', note: 'mesh 3aaTel, "not bad", is real praise' },
    { lb: 'mfawwal', ar: 'مفول', en: 'fully booked', pos: 'adj', gender: 'm', note: 'plural mfawwliin, what a hotel says to you' }
  ],

  phrases: [
    {
      lb: 'mesh meshklé', ar: 'مش مشكلة', en: 'no problem',
      when: 'waving away something that could have been a problem and is not'
    },
    {
      lb: 'la2, shukran', ar: 'لأ، شكرا', en: 'no, thank you',
      when: 'refusing anything offered — a bare la2 on its own sounds cold'
    },
    {
      lb: 'maa fii shii jdiid', ar: 'ما في شي جديد', en: 'nothing new',
      when: 'the standard answer when someone asks how things have been'
    },
    {
      lb: 'maa fii lzouum', ar: 'ما في لزوم', en: 'there is no need',
      when: 'stopping someone who is about to go to trouble for you'
    },
    {
      lb: 'mesh ma32ouul!', ar: 'مش معقول!', en: 'that is unbelievable',
      when: 'outrage or disbelief, at a price, a queue, a piece of news'
    },
    {
      lb: 'mesh 3aaTel', ar: 'مش عاطل', en: 'not bad',
      when: 'mild approval — and in Lebanese it really is approval, not a complaint'
    }
  ],

  dialogue: {
    title: 'Trying to stop eating at someone\'s house',
    setting: 'Hala has already served you twice. Your plate is being looked at. This is a negotiation and you are losing it.',
    lines: [
      { who: 'Hala', lb: 'kaméén shwayy?', ar: 'كمان شوي؟', en: 'a little bit more?' },
      { who: 'You', you: true, lb: 'la2, shukran. maa fii lzouum.', ar: 'لأ، شكرا. ما في لزوم', en: 'no, thank you. There is no need.' },
      { who: 'Hala', lb: 'léésh? 3aaTel?', ar: 'ليش؟ عاطل؟', en: 'why? Is it no good?',
        note: 'The trap. Any refusal is heard first as a verdict on the food.' },
      { who: 'You', you: true, lb: 'abadan! mesh 3aaTel, mnii7 ktiir.', ar: 'أبدا! مش عاطل، منيح كتير', en: 'not at all! It is not bad, it is very good.',
        note: 'abadan is the flat denial — never, not in the slightest. It is what rescues the sentence.' },
      { who: 'You', you: true, lb: 'bass ana te3béén.', ar: 'بس أنا تعبان', en: 'but I am tired.' },
      { who: 'Hala', lb: 'Tayyeb. maa 3lééh.', ar: 'طيب. ما عليه', en: 'all right. Never mind.' },
      { who: 'You', you: true, lb: 'mesh meshklé?', ar: 'مش مشكلة؟', en: 'no problem?' },
      { who: 'Hala', lb: 'wala shii!', ar: 'ولا شي', en: 'nothing at all!' }
    ]
  },

  culture: {
    heading: 'No is a conversation, not a word',
    icon: 'no',
    body:
      'A bare `la2, shukran` is grammatically perfect and socially thin. In Lebanon a refusal is ' +
      'expected to come with something around it: a reason, a compliment to the thing you are ' +
      'refusing, or a flat denial of the insult the other person has already assumed. That is the ' +
      'work `abadan` is doing above.\n\n' +
      'The other half of the rule is that a first no is not believed, and is not meant to be. Food ' +
      'is offered three times. So is a lift home, so is the last piece of anything. Refusing once ' +
      'and being pressed again is not somebody ignoring you — it is the form. If you actually mean ' +
      'it, you refuse three times, warmly, and nobody is hurt.\n\n' +
      'This cuts both ways. When a Lebanese guest turns something down once, they may well want it. ' +
      'Offer again.\n\n' +
      'One useful asymmetry: `mesh 3aaTel` — not bad — is genuine praise here, not the faint kind. ' +
      'And `wala shii`, nothing at all, is the warmest possible answer to "was that a problem?"',
  },

  drills: [
    { type: 'choice', q: 'How do you say "not good", talking about a film?',
      options: ['mesh mnii7', 'maa mnii7', 'mann mnii7'], answer: 0,
      explain: 'mnii7 is an adjective, so it takes mesh. maa is waiting for a verb that never comes.' },

    { type: 'conjugate', en: 'you are not, said to one man', root: 'mann-', person: 'enta',
      options: ['mannak', 'mannik', 'manno', 'manné'], answer: 0,
      explain: 'The same -ak you have been putting on esm and badd-.' },

    { type: 'match',
      pairs: [['maa', 'not — in front of verbs'], ['mesh', 'not — in front of adjectives'], ['la2', 'no, on its own'], ['abadan', 'at all, never']] },

    { type: 'build', en: 'I have no time.',
      tiles: ['maa', '3endé', 'wa2t'], extra: ['mesh'], answer: 'maa 3endé wa2t' },

    { type: 'gap', en: 'A friend thinks you look worn out and checks.',
      lines: [
        { who: 'Rana', lb: 'te3béén?', en: 'tired?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['la2, manné te3béén', 'la2, maa te3béén', 'la2, mesh 3endé te3béén'], answer: 0,
      explain: 'te3béén is an adjective, so it needs mann- or mesh, never maa.' },

    { type: 'choice', q: 'Which negation goes in front of 3endé?',
      options: ['maa', 'mesh', 'la2'], answer: 0,
      explain: '3endé is a suffix verb — it wears a possessive ending — and those always take maa.' },

    { type: 'type', en: 'It is not a problem.', answer: 'mesh meshklé' },

    { type: 'conjugate', en: 'he is not', root: 'mann-', person: 'houwwé', answer: 'manno',
      explain: 'houwwé takes -o, exactly as in esmo and baddo.' },

    { type: 'build', en: 'There is no need.',
      tiles: ['maa', 'fii', 'lzouum'], extra: ['mesh'], answer: 'maa fii lzouum' },

    { type: 'match',
      pairs: [['te3béén', 'tired'], ['meshklé', 'problem'], ['mfawwal', 'fully booked'], ['ma32ouul', 'reasonable']] },

    { type: 'gap', en: 'You try a small hotel without booking first.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Reception', lb: 'la2, mfawwliin lyoom', en: 'no, we are full today' }
      ],
      options: ['3endkon ouwaD?', 'mesh 3endkon ouwaD?', 'mann 3endkon ouwaD?'], answer: 0,
      explain: 'A plain question needs no negation at all — and if it did, it would take maa.' },

    { type: 'choice', q: 'You hear "manna te3bééné". Who is not tired?',
      options: [
        'She is not — or we are not: manna covers both',
        'Only she is not',
        'Only they are not'
      ], answer: 0,
      explain: 'hiyyé and ne7na collide in this one form. The rest of the sentence sorts it out.' },

    { type: 'type', en: 'Nothing at all.', answer: 'wala shii' }
  ],

  quiz: [
    { type: 'choice', q: 'Which one means "you are not", said to one woman?',
      options: ['mannik', 'mannak', 'manné'], answer: 0 },

    { type: 'gap', en: 'A waiter has brought everything and is checking before he leaves.',
      lines: [
        { who: 'Waiter', lb: 'shii tééné?', en: 'anything else?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['la2, wala shii, shukran', 'la2, maa 3aaTel, shukran', 'mesh, wala shii, shukran'], answer: 0 },

    { type: 'type', en: 'I have no time.', answer: 'maa 3endé wa2t' },

    { type: 'match',
      pairs: [['wala shii', 'nothing at all'], ['ma shii', 'nothing'], ['yemken', 'maybe'], ['mesh 3aaTel', 'not bad']] },

    { type: 'build', en: 'She is not tired at all.',
      tiles: ['manna', 'te3bééné', 'abadan'], extra: ['mesh'], answer: 'manna te3bééné abadan' },

    { type: 'conjugate', en: 'we are not', root: 'mann-', person: 'ne7na',
      options: ['manna', 'mannak', 'mannon', 'manné'], answer: 0,
      explain: 'The same form as "she is not". Lebanese lets the two share, and context decides.' },

    { type: 'choice', q: 'Why is "mesh 3endé wa2t" wrong?',
      options: [
        '3endé is a suffix verb, and suffix verbs are negated with maa',
        'Because wa2t is masculine',
        'Because mesh cannot start a sentence'
      ], answer: 0 },

    { type: 'type', en: 'No, thank you.', answer: 'la2, shukran' },

    { type: 'choice', q: 'A friend tries your cooking and says "mesh 3aaTel". What have you been told?',
      options: ['That it is good', 'That it is not edible', 'That he is not hungry'], answer: 0,
      explain: 'The understated compliment is the normal one. Take it as praise.' }
  ]
});
