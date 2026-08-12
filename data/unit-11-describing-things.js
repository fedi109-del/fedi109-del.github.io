LEB.addUnit({
  id: 'u11',
  stage: 2,
  order: 11,
  title: 'Describing Things',
  goal: 'Describe anything you can point at — its size, its age, its colour — and know when you are naming it and when you are saying something about it.',
  canDo: [
    'Put the adjective where Lebanese puts it, with the right ending',
    'Handle the article that gets said twice',
    'Name four colours and change them for a feminine noun',
    'Give the opposite of eight everyday adjectives'
  ],

  grammar: [
    {
      heading: 'The adjective comes second, and it agrees',
      body:
        'English piles adjectives in front of the noun. Lebanese does the opposite: the noun ' +
        'comes first and the adjective follows it, like a label stuck on afterwards. ' +
        '`béét kbiir` is a big house, word for word "house big". Nothing about this is optional ' +
        'or poetic — put the adjective first and the sentence stops working.\n\n' +
        'The second half of the deal is agreement. The adjective copies the noun it is attached ' +
        'to. A masculine noun leaves the adjective bare. A feminine noun adds `-é` or `-a` to it. ' +
        'A group of people adds `-iin`. Three forms, and that is the whole system — there is no ' +
        'case, no number beyond singular and plural, nothing else to track.\n\n' +
        'Which of `-é` and `-a` a given adjective takes is not predictable, and the vowels inside ' +
        'the word often shift when the ending arrives: `ghaalé` becomes `ghaalyé`, `Dayye2` ' +
        'becomes `Dayy2a`. So the honest advice is to learn the feminine as a second word rather ' +
        'than as a rule you apply.',
      table: {
        headers: ['masculine', 'feminine', 'plural (people)', 'meaning'],
        rows: [
          ['`7elo`', '`7elwé`', '`7elwiin`', 'lovely, good-looking'],
          ['`Tawiil`', '`Tawiilé`', '`Twaal`', 'long, tall'],
          ['`ghaalé`', '`ghaalyé`', '`ghaalyiin`', 'expensive'],
          ['`melyéén`', '`melyééné`', '`melyééniin`', 'full'],
          ['`faaDé`', '`faaDyé`', '`faaDyiin`', 'empty, free'],
          ['`wéése3`', '`wéés3a`', '`wéés3iin`', 'roomy, wide'],
          ['`Dayye2`', '`Dayy2a`', '`Dayy2iin`', 'narrow, tight'],
          ['`2adiim`', '`2adiimé`', '`2déém`', 'old']
        ]
      },
      warning:
        'The `-iin` plural is for **people**. A pile of objects is normally treated as one ' +
        'feminine thing: `l-as3aar ghaalyé` — the prices are expensive, with the singular ' +
        'feminine, not a plural. This surprises everyone once and then never again.'
    },
    {
      heading: 'The article gets said twice',
      body:
        'Here is the point of the unit, and the one that costs English speakers the most time. ' +
        'In Lebanese, definiteness is marked on **every word in the phrase**, not once at the ' +
        'front. "The big house" is `el-béét el-kbiir` — the-house the-big. Both words carry ' +
        '`el-`, and if you drop the second one you have not made a small mistake, you have ' +
        'changed what the phrase does.\n\n' +
        'Why? Because Lebanese has no present-tense verb "to be". `el-béét kbiir` — with the ' +
        'article on the noun only — is already a complete sentence: **the house is big**. The ' +
        'gap where English puts *is* is exactly the gap where Lebanese puts nothing.\n\n' +
        'So the two articles are not decoration. They are the difference between naming a thing ' +
        'and making a claim about it. Say `el-béét el-kbiir` and you have pointed at a house. ' +
        'Say `el-béét kbiir` and you have given an opinion.\n\n' +
        'One spelling note: the second `el-` shrinks to `l-` after a vowel, because nobody ' +
        'pronounces two vowels in a row — `es-siyyaara l-7amra`, not `es-siyyaara el-7amra`.',
      table: {
        headers: ['Lebanese', 'articles', 'what it means'],
        rows: [
          ['`béét kbiir`', 'none', 'a big house'],
          ['`el-béét el-kbiir`', 'two', 'the big house'],
          ['`el-béét kbiir`', 'one', 'the house is big'],
          ['`siyyaara 7amra`', 'none', 'a red car'],
          ['`es-siyyaara l-7amra`', 'two', 'the red car'],
          ['`es-siyyaara 7amra`', 'one', 'the car is red']
        ]
      },
      warning:
        'Read the middle row and the bottom row of each pair against each other until the ' +
        'difference is automatic. One article means **is**.'
    },
    {
      heading: 'Colours are built on one shape',
      body:
        'The basic colours share a single template in the masculine: a short `a`, then the three ' +
        'consonants of the word, with another `a` in the middle. `abyaD`, `a7mar`, `aswad`, ' +
        '`akhDar`. Once you have seen four of them the shape is unmistakable.\n\n' +
        'The feminine, though, does not simply add an ending — it rebuilds the word. The opening ' +
        '`a` disappears and the ending arrives: `abyaD` gives `bayDa`, `a7mar` gives `7amra`, ' +
        '`aswad` gives `sawda`, `akhDar` gives `khaDra`. The plural rebuilds it again, and each ' +
        'one is its own word. There is no shortcut here; there are twelve forms and you learn ' +
        'them as twelve forms.\n\n' +
        'Colours obey the rules from the two blocks above like any other adjective. They stand ' +
        'behind the noun, they agree with it, and in a definite phrase they take the article ' +
        'too: `el-khebz el-abyaD`, `es-siyyaara l-khaDra`.',
      table: {
        headers: ['masculine', 'feminine', 'plural', 'colour'],
        rows: [
          ['`abyaD`', '`bayDa`', '`biiD`', 'white'],
          ['`a7mar`', '`7amra`', '`7omer`', 'red'],
          ['`aswad`', '`sawda`', '`souud`', 'black'],
          ['`akhDar`', '`khaDra`', '`khoDer`', 'green']
        ]
      },
      examples: [
        { lb: 'béét abyaD', ar: 'بيت أبيض', en: 'a white house' },
        { lb: 'siyyaara sawda', ar: 'سيارة سوداء', en: 'a black car' },
        { lb: 'es-siyyaara s-sawda', ar: 'السيارة السوداء', en: 'the black car', note: 'both words definite' },
        { lb: 'el-banadouura 7amra', ar: 'البندورة حمراء', en: 'the tomatoes are red', note: 'one article, so it is a statement' }
      ]
    },
    {
      heading: 'Learn them in pairs',
      body:
        'Adjectives are cheaper to learn two at a time. An opposite gives you a second word for ' +
        'free and, more usefully, it gives you a situation: you almost never need *big* on its ' +
        'own, you need *big, not small*.\n\n' +
        'Eight pairs cover most of what an ordinary day asks of you. They are listed below in ' +
        'the masculine; the feminine of each is in the first table of this unit or in the ' +
        'word list.\n\n' +
        'One honest gap: this course does not yet hand you a single word for *far*. The everyday ' +
        'way out is `mesh 2ariib` — not near. `mesh` is the word that negates anything which is ' +
        'not a verb, so it sits in front of an adjective without changing anything else, and ' +
        '`mesh 7elo`, `mesh melyéén`, `mesh ghaalé` all work the same way. That one small word ' +
        'doubles the list below at no cost.',
      table: {
        headers: ['adjective', 'meaning', 'its opposite', 'meaning'],
        rows: [
          ['`kbiir`', 'big', '`zghiir`', 'small'],
          ['`jdiid`', 'new', '`2adiim`', 'old'],
          ['`ghaalé`', 'expensive', '`rkhiiS`', 'cheap'],
          ['`Tawiil`', 'long, tall', '`2aSiir`', 'short'],
          ['`wéése3`', 'roomy, wide', '`Dayye2`', 'narrow, tight'],
          ['`melyéén`', 'full', '`faaDé`', 'empty'],
          ['`2awé`', 'strong', '`D3iif`', 'weak'],
          ['`2ariib`', 'near', '`mesh 2ariib`', 'far']
        ]
      }
    }
  ],

  vocab: [
    { lb: 'kbiir', ar: 'كبير', en: 'big', pos: 'adj', note: 'feminine kbiiré' },
    { lb: 'zghiir', ar: 'صغير', en: 'small', pos: 'adj', note: 'feminine zghiiré' },
    { lb: 'jdiid', ar: 'جديد', en: 'new', pos: 'adj', note: 'feminine jdiidé' },
    { lb: '2adiim', ar: 'قديم', en: 'old', pos: 'adj', note: 'of things, never of people' },
    { lb: '7elo', ar: 'حلو', en: 'lovely, good-looking, sweet', pos: 'adj', note: 'the all-purpose compliment' },
    { lb: 'ghaalé', ar: 'غالي', en: 'expensive', pos: 'adj' },
    { lb: 'rkhiiS', ar: 'رخيص', en: 'cheap', pos: 'adj' },
    { lb: 'Tawiil', ar: 'طويل', en: 'long, tall', pos: 'adj' },
    { lb: '2aSiir', ar: 'قصير', en: 'short', pos: 'adj' },
    { lb: 'melyéén', ar: 'مليان', en: 'full', pos: 'adj' },
    { lb: 'faaDé', ar: 'فاضي', en: 'empty, free, clear', pos: 'adj', note: 'a free evening and an empty road use the same word' },
    { lb: 'Taaza', ar: 'طازة', en: 'fresh', pos: 'adj', note: 'never changes shape' },
    { lb: 'béét', ar: 'بيت', en: 'house, home', pos: 'n', gender: 'm' },
    { lb: 'abyaD', ar: 'أبيض', en: 'white', pos: 'adj' },
    { lb: 'a7mar', ar: 'أحمر', en: 'red', pos: 'adj' },
    { lb: 'akhDar', ar: 'أخضر', en: 'green', pos: 'adj' }
  ],

  phrases: [
    {
      lb: 'shou ra2yak?', ar: 'شو رأيك؟', en: 'what do you think? (to a man)',
      when: 'handing someone something to judge — a flat, a jacket, a plan',
      reply: '7elo ktiir', replyEn: 'very nice — the safe, warm answer'
    },
    {
      lb: 'shou ra2yik?', ar: 'شو رأيك؟', en: 'what do you think? (to a woman)',
      when: 'the same question, with the ending that matches who you are asking'
    },
    {
      lb: '7elo ktiir', ar: 'حلو كتير', en: 'really lovely',
      when: 'the default verdict on anything you approve of; say 7elwé for a feminine noun'
    },
    {
      lb: '3youunak el-7elwiin', ar: 'عيونك الحلوين', en: 'your eyes are the beautiful ones',
      when: 'someone has just complimented you — you push it back instead of thanking them'
    },
    {
      lb: 'ghaalé ktiir', ar: 'غالي كتير', en: 'far too expensive',
      when: 'the standard first reaction to any price, whatever you end up paying'
    },
    {
      lb: 'raw3a!', ar: 'روعة!', en: 'wonderful!',
      when: 'a step above 7elo — a view, a meal, a piece of news'
    },
    {
      lb: 'basiiTa!', ar: 'بسيطة!', en: 'it is nothing, never mind',
      when: 'waving away a problem, an apology or a delay'
    }
  ],

  drills: [
    { type: 'choice', q: 'Where does an adjective stand in Lebanese?',
      options: ['after the noun', 'before the noun', 'either side, as you like'], answer: 0,
      explain: 'béét kbiir — house big. The English order is the one that breaks.' },

    { type: 'match',
      pairs: [['kbiir', 'big'], ['zghiir', 'small'], ['jdiid', 'new'], ['2adiim', 'old']] },

    { type: 'choice', q: 'The car is `es-siyyaara`. How do you say "the red car"?',
      options: ['es-siyyaara l-7amra', 'es-siyyaara 7amra', 'el-7amra es-siyyaara'], answer: 0,
      explain: 'Both words are definite, so both carry the article. The second one shrinks to l- after a vowel.' },

    { type: 'choice', q: 'What does `el-béét kbiir` mean?',
      options: ['the house is big', 'the big house', 'a big house'], answer: 0,
      explain: 'One article only. With no verb "to be" in the present, that single missing article is the sentence.' },

    { type: 'build', en: 'The big house.',
      tiles: ['el-béét', 'el-kbiir'], extra: ['kbiir'], answer: 'el-béét el-kbiir' },

    { type: 'type', en: 'A new house.', answer: 'béét jdiid' },

    { type: 'choice', q: 'What is the feminine of `abyaD`?',
      options: ['bayDa', 'abyaDa', 'biiD'], answer: 0,
      explain: 'The colours rebuild rather than add an ending. biiD is the plural.' },

    { type: 'gap', en: 'A friend is showing you round a flat she is thinking of taking.',
      lines: [
        { who: 'Rana', lb: 'shou ra2yak bel-béét?', en: 'what do you think of the place?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['el-béét kbiir w-7elo', 'el-béét el-kbiir', 'kbiir el-béét'], answer: 0,
      explain: 'She wants an opinion, so you need one article, not two.' },

    { type: 'conjugate', en: 'she has', root: '3end', person: 'hiyyé',
      options: ['3enda', '3endo', '3endé', '3enna'], answer: 0,
      explain: 'The same eight endings as always. Watch 3enna for "we" — the d falls out.' },

    { type: 'match',
      pairs: [['abyaD', 'white'], ['a7mar', 'red'], ['aswad', 'black'], ['akhDar', 'green']] },

    { type: 'choice', q: 'Which one describes a group of people as good-looking?',
      options: ['7elwiin', '7elwé', '7elo'], answer: 0,
      explain: 'The -iin ending is the plural for people. A pile of objects stays feminine singular.' },

    { type: 'build', en: 'The tomatoes are red.',
      tiles: ['el-banadouura', '7amra'], extra: ['l-7amra'], answer: 'el-banadouura 7amra' },

    { type: 'type', en: 'Expensive.', answer: 'ghaalé', accept: ['ghali', 'ghaalii'] },

    { type: 'choice', q: 'You want to say a road is not near. What do you say?',
      options: ['mesh 2ariib', 'maa 2ariib', 'la2 2ariib'], answer: 0,
      explain: 'mesh is the negator for anything that is not a verb — adjectives included.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which of these is a complete sentence, not just a label?',
      options: ['es-siyyaara jdiidé', 'es-siyyaara l-jdiidé', 'siyyaara jdiidé'], answer: 0,
      explain: 'One article on the noun, none on the adjective: the car is new.' },

    { type: 'build', en: 'The white house.',
      tiles: ['el-béét', 'el-abyaD'], extra: ['abyaD', 'bayDa'], answer: 'el-béét el-abyaD' },

    { type: 'choice', q: 'Why does Lebanese not need a word for "is" in `el-khebz Taaza`?',
      options: [
        'The present tense of "to be" simply does not exist',
        'It is dropped only after the article',
        'Taaza is a special adjective'
      ], answer: 0 },

    { type: 'match',
      pairs: [['ghaalé', 'expensive'], ['rkhiiS', 'cheap'], ['melyéén', 'full'], ['faaDé', 'empty']] },

    { type: 'type', en: 'The old house.', answer: 'el-béét el-2adiim', accept: ['el beet el 2adiim'] },

    { type: 'gap', en: 'You are in a shop and the shopkeeper points at two bags.',
      lines: [
        { who: 'Sami', lb: 'ayya kiis baddak?', en: 'which bag do you want?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['baddé l-kiis el-aswad', 'baddé l-kiis aswad', 'baddé aswad el-kiis'], answer: 0,
      explain: 'You are pointing at a specific bag, so both words take the article.' },

    { type: 'choice', q: 'Prices are things, not people. Which agreement do they take?',
      options: ['feminine singular — l-as3aar ghaalyé', 'plural -iin — l-as3aar ghaalyiin', 'masculine — l-as3aar ghaalé'], answer: 0,
      explain: 'A plural of objects behaves like one feminine thing. Reserve -iin for people.' },

    { type: 'conjugate', en: 'they have', root: '3end', person: 'henné',
      options: ['3endon', '3endkon', '3enda', '3endo'], answer: 0 },

    { type: 'choice', q: 'Someone tells you your jacket looks great. What do you say back?',
      options: ['3youunak el-7elwiin', 'raw3a', 'basiiTa'], answer: 0,
      explain: 'You return the compliment rather than accept it: the beauty is in their eyes.' },

    { type: 'type', en: 'Fresh.', answer: 'Taaza' }
  ]
});
