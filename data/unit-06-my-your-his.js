LEB.addUnit({
  id: 'u06',
  stage: 1,
  order: 6,
  title: 'Mine and Yours',
  goal: 'Attach the eight endings that mean my, your, his and hers to any noun, and talk about a family with them.',
  canDo: [
    'Put all eight possessive endings on a noun, in the order every table uses',
    'Handle what happens to a feminine noun when an ending lands on it',
    'Name the people in a family and say whose they are',
    'Recognise the same endings on the words that stand in for have and want'
  ],

  grammar: [
    {
      heading: 'One set of endings, and half the language opens',
      body:
        'This is the unit the rest of the course leans on. Lebanese has no separate word for my, your ' +
        'or his. The noun grows a tail, and the tail tells you whose it is. `bayy` is father; `bayyé` ' +
        'is my father; `bayyak` is your father if I am talking to a man, `bayyik` if I am talking to a ' +
        'woman.\n\n' +
        'There are eight of these endings, one for each of the eight people, and they always run in ' +
        'the same order. Every table in this app keeps that order so that after a few units your eye ' +
        'finds the row before you have finished reading it.\n\n' +
        'What makes this worth real effort is where the endings go next. They do not stay on nouns. ' +
        'The same eight turn up on prepositions, on the little words that do the work of have and ' +
        'want, and later on verbs to mark who the action was done to. Learn them once here, properly, ' +
        'and you will not have to learn them again — you will simply keep recognising them.\n\n' +
        'Say the whole column out loud a few times rather than reading it. The eight endings are ' +
        'short and they differ in one vowel each; the mouth learns them faster than the eye does.',
      table: {
        headers: ['person', 'ending', '`bayy` — father', '`emm` — mother'],
        rows: [
          ['ana', '`-é`', '`bayyé` — my father', '`emmé` — my mother'],
          ['enta', '`-ak`', '`bayyak`', '`emmak`'],
          ['enté', '`-ik`', '`bayyik`', '`emmik`'],
          ['houwwé', '`-o`', '`bayyo`', '`emmo`'],
          ['hiyyé', '`-a`', '`bayya`', '`emma`'],
          ['ne7na', '`-na`', '`bayyna`', '`emmna`'],
          ['ento', '`-kon`', '`bayykon`', '`emmkon`'],
          ['henné', '`-on`', '`bayyon`', '`emmon`']
        ]
      },
      warning:
        '`emmé` is my mother and `emma` is her mother. One vowel at the very end of the word carries ' +
        'the whole difference. Lebanese puts a lot of weight on final vowels, and this is the point in ' +
        'the course where you start listening for them.'
    },
    {
      heading: 'Feminine nouns grow a t',
      body:
        'Nouns that end in `-é` behave differently, and it catches everyone once. They are written in ' +
        'Arabic with a letter that is half a t and half nothing, and the t is silent — until an ending ' +
        'arrives. Then it wakes up.\n\n' +
        '`nawmé` is sleep. My sleep is not nawmé plus é; it is `nawmté`. The hidden t has come back ' +
        'and the final vowel has gone. Your sleep is `nawmtak`, his sleep is `nawmto`.\n\n' +
        'Then something else happens halfway down the table. From her onwards the endings begin with a ' +
        'consonant, and `nawmt-` plus `-a` would stack three consonants in a row, which Lebanese will ' +
        'not do. A vowel opens the cluster and the stem becomes `nawmet-`: `nawmeta`, `nawmetna`, ' +
        '`nawmetkon`, `nawmeton`.\n\n' +
        'This is not an exception, it is what every noun ending in `-é` does — `zawjé`, `3aylé`, ' +
        '`Taawlé`, all of them. Learn the shape on one word and you have it for the whole class. And ' +
        'note that the endings themselves never changed: it is the noun that moved, not the ending.',
      table: {
        headers: ['person', '`nawmé` — sleep'],
        rows: [
          ['ana', '`nawmté` — my sleep'],
          ['enta', '`nawmtak`'],
          ['enté', '`nawmtik`'],
          ['houwwé', '`nawmto`'],
          ['hiyyé', '`nawmeta`'],
          ['ne7na', '`nawmetna`'],
          ['ento', '`nawmetkon`'],
          ['henné', '`nawmeton`']
        ]
      },
      examples: [
        { lb: 'man2ouushé', ar: 'مَنْقوشة', en: 'a man2ouushé, the flatbread eaten for breakfast' },
        { lb: 'man2ouushté', ar: 'مَنْقوشْتي', en: 'my man2ouushé', note: 'the same hidden t, on a different word' },
        { lb: 'man2ouusheta', ar: 'مَنْقوشِتها', en: 'her man2ouushé', note: 'and the same vowel opening the cluster' }
      ]
    },
    {
      heading: 'A family, with no verbs at all',
      body:
        'Because Lebanese has no present tense of to be, a family word with an ending on it is already ' +
        'most of a sentence. `bayyé men el-jnouub` — my father is from the south. Two nouns and a ' +
        'preposition, and nothing is missing.\n\n' +
        'A few of the words are worth a note. `mara` is the everyday word for wife and it is literally ' +
        'woman; `zawjé` is the formal one, the word on a form. Both are used, and choosing between ' +
        'them is a choice of register, not of meaning. `bent` is a daughter and also simply a girl. ' +
        '`ebn` is a son, and its plural `wlééd` is the ordinary word for children.\n\n' +
        'There is one shape-shifter here. `jooz` is husband, but my husband is `jawzé` — the stem ' +
        'itself changes when the ending lands. A handful of nouns do this, and there is no rule to ' +
        'derive it from; you meet them one at a time and remember them.\n\n' +
        'Finally `mart`, which means the wife of, and goes straight in front of a name: `mart Sami`. ' +
        'Lebanese small talk maps families constantly, and this little word does a lot of that work.',
      table: {
        headers: ['one', 'more than one', 'meaning'],
        rows: [
          ['`emm`', '`emméét`', 'mother'],
          ['`bayy`', '`bayyéét`', 'father'],
          ['`khay`', '`ekhwé`', 'brother'],
          ['`okht`', '`ekhwéét`', 'sister'],
          ['`ebn`', '`wlééd`', 'son — the plural is the word for children'],
          ['`bent`', '`banéét`', 'daughter, and also girl'],
          ['`jooz`', '`jwééz`', 'husband'],
          ['`mara`', '`neswéén`', 'wife — literally woman, and completely normal'],
          ['`zawjé`', '`zawjéét`', 'wife, the formal word'],
          ['`3aylé`', '`3iyal`', 'family']
        ]
      },
      examples: [
        { lb: 'bayyé men el-jnouub', ar: 'بَيّي مِن الجْنوب', en: 'My father is from the south.' },
        { lb: 'emma lebnééniyyé', ar: 'إِمّها لِبنانِيّة', en: 'Her mother is Lebanese.' },
        { lb: '3endé khay w-okht', ar: 'عِنْدي خَي وْأُخْت', en: 'I have a brother and a sister.' }
      ]
    },
    {
      heading: 'Why this is the hinge of the whole stage',
      body:
        'Everything so far has been words. This is the first piece of machinery, and it runs far ' +
        'beyond the nouns you just practised.\n\n' +
        'Lebanese has no verb for have and no verb for want. Instead a small set of stems takes ' +
        'exactly these eight endings and does the job: `badd-` becomes `baddé`, I want. `3end-` ' +
        'becomes `3endé`, I have. `ma3-` becomes `ma3é`, I have it on me right now. You already met ' +
        '`baddé` while buying things and you were using this unit without knowing it.\n\n' +
        'They inflect in the same eight slots in the same order, which means the table you have just ' +
        'learned is the table for all of them. `baddak`, `baddik`, `baddo`. `3endak`, `3endik`, ' +
        '`3endo`. The one early irregular is we have, which comes out as `3enna` rather than the ' +
        '3endna you would predict — the d simply drops.\n\n' +
        'This is why the unit sits where it does. Everything after it, all the way through the verbs, ' +
        'assumes you can hear these eight endings and know instantly whose something is.',
      table: {
        headers: ['stem', 'with the my ending', 'what it does'],
        rows: [
          ['`badd-`', '`baddé`', 'I want'],
          ['`3end-`', '`3endé`', 'I have, I own'],
          ['`ma3-`', '`ma3é`', 'I have it on me right now'],
          ['`la-el-`', '`la-elé`', 'it is mine, it belongs to me'],
          ['`ba3d-`', '`ba3dné`', 'I am still …']
        ]
      },
      warning:
        'There is a twin set of endings used when the word is a verb and the ending is its object. ' +
        'Seven of the eight are identical; only the first person differs, `-né` instead of `-é`. That ' +
        'is why still is `ba3dné` and not ba3dé. When the verbs start you will already know this set ' +
        'without having studied it.'
    }
  ],

  vocab: [
    { lb: 'emm', ar: 'إِم', en: 'mother', pos: 'n', gender: 'f' },
    { lb: 'bayy', ar: 'بَي', en: 'father', pos: 'n', gender: 'm' },
    { lb: 'khay', ar: 'خَي', en: 'brother', pos: 'n', gender: 'm' },
    { lb: 'okht', ar: 'أُخْت', en: 'sister', pos: 'n', gender: 'f' },
    { lb: 'ebn', ar: 'إِبْن', en: 'son', pos: 'n', gender: 'm' },
    { lb: 'bent', ar: 'بِنْت', en: 'daughter, girl', pos: 'n', gender: 'f' },
    { lb: 'jooz', ar: 'جوز', en: 'husband', pos: 'n', gender: 'm' },
    { lb: 'jawzé', ar: 'جَوْزي', en: 'my husband', pos: 'n', gender: 'm', note: 'the stem shifts: jooz becomes jawz- under an ending' },
    { lb: 'mara', ar: 'مَرة', en: 'wife, woman', pos: 'n', gender: 'f' },
    { lb: 'zawjé', ar: 'زَوْجة', en: 'wife (the formal word)', pos: 'n', gender: 'f' },
    { lb: '3aylé', ar: 'عَيْلة', en: 'family', pos: 'n', gender: 'f' },
    { lb: 'ekhwé', ar: 'إِخوة', en: 'brothers, siblings', pos: 'n', gender: 'pl' },
    { lb: 'wlééd', ar: 'وْلاد', en: 'children, sons', pos: 'n', gender: 'pl' },
    { lb: 'banéét', ar: 'بَنات', en: 'girls, daughters', pos: 'n', gender: 'pl' },
    { lb: 'nawmé', ar: 'نَوْمة', en: 'sleep', pos: 'n', gender: 'f' },
    { lb: '7abiib', ar: 'حَبيب', en: 'dear one, love', pos: 'n', gender: 'm' }
  ],

  phrases: [
    {
      lb: 'bayyé men …', ar: 'بَيّي مِن…', en: 'my father is from …',
      when: 'saying where your family comes from; the same frame works with emmé'
    },
    {
      lb: 'shou esm bayyak?', ar: 'شو إِسْم بَيَّك؟', en: 'what is the name of your father?',
      when: 'asked of a man early in a conversation — Lebanese places people by family'
    },
    {
      lb: '3endé …', ar: 'عِنْدي…', en: 'I have …',
      when: 'saying who is in your family: 3endé khay w-okht'
    },
    {
      lb: '7abiibé', ar: 'حَبيبي', en: 'my dear',
      when: 'to a partner, a child or a close friend — far less romantic than it looks in English'
    },
    {
      lb: 'tekram 3aynak', ar: 'تِكْرَم عَيْنَك', en: 'may your eye be honoured',
      when: 'a warm you are welcome after someone thanks you; to a woman, tekram 3aynik'
    },
    {
      lb: 'mart …', ar: 'مَرْت…', en: 'the wife of …',
      when: 'straight in front of a name, as in mart Sami'
    }
  ],

  drills: [
    { type: 'match',
      pairs: [['emmé', 'my mother'], ['emmak', 'your mother — to a man'], ['emmo', 'his mother'], ['emma', 'her mother']] },

    { type: 'choice', q: 'Which ending means "her"?',
      options: ['-a', '-o', '-ak'], answer: 0,
      explain: '-o is his and -ak is your, to a man. The three sit next to each other in the table for a reason: they are the ones learners swap.' },

    { type: 'build', en: 'My father is from Beirut.',
      tiles: ['bayyé', 'men', 'Béérout'], extra: ['bayyo'], answer: 'bayyé men Béérout' },

    { type: 'type', en: 'my mother', answer: 'emmé' },

    { type: 'choice', q: 'You are speaking to a woman about her father. Which form?',
      options: ['bayyik', 'bayyak', 'bayyo'], answer: 0,
      explain: '-ik is the ending for one woman. -ak would be a man and -o would be his father, spoken about.' },

    { type: 'gap', en: 'Someone points at a woman across the room and you want to know who she is.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Rima', lb: 'haydé emm Sami', en: 'that is the mother of Sami' }
      ],
      options: ['miin haydé?', 'shou haydé?', 'wéén haydé?'], answer: 0 },

    { type: 'match',
      pairs: [['khay', 'brother'], ['okht', 'sister'], ['ebn', 'son'], ['bent', 'daughter']] },

    { type: 'choice', q: 'Why is "my husband" jawzé and not joozé?',
      options: [
        'The stem itself shifts when an ending lands on it',
        'Because the speaker is a woman',
        'Because jooz is a borrowed word'
      ], answer: 0 },

    { type: 'build', en: 'I have a brother and a sister.',
      tiles: ['3endé', 'khay', 'w-okht'], extra: ['ma3é'], answer: '3endé khay w-okht' },

    { type: 'choice', q: 'nawmé means sleep. How do you say "my sleep"?',
      options: ['nawmté', 'nawmé', 'nawma'], answer: 0,
      explain: 'A noun ending in -é has a silent t that wakes up as soon as an ending arrives.' },

    { type: 'type', en: 'his father', answer: 'bayyo' },

    { type: 'choice', q: 'Which of these is NOT one of the possessive endings?',
      options: ['-né', '-kon', '-on'], answer: 0,
      explain: '-né belongs to the twin set used after verbs. On a noun the first person ending is -é.' },

    { type: 'gap', en: 'A friend is showing you photographs of his family.',
      lines: [
        { who: 'Nadim', lb: 'hayda bayyé', en: 'this is my father' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['w-haydé emmak?', 'w-haydé emmé?', 'w-hayda emmak?'], answer: 0,
      explain: 'You are asking him about his mother, so -ak. And emm is feminine, so haydé.' },

    { type: 'match',
      pairs: [['baddé', 'I want'], ['3endé', 'I have'], ['ma3é', 'I have it on me'], ['la-elé', 'it is mine']] }
  ],

  quiz: [
    { type: 'choice', q: 'What is "their mother"?',
      options: ['emmon', 'emmkon', 'emmna'], answer: 0,
      explain: '-kon is yours, to a group; -na is ours. The last three endings are the ones worth drilling hardest.' },

    { type: 'type', en: 'your father (to a woman)', answer: 'bayyik' },

    { type: 'match',
      pairs: [['-é', 'my'], ['-ak', 'your, to a man'], ['-a', 'her'], ['-kon', 'your, to several people']] },

    { type: 'build', en: 'This is my mother.',
      tiles: ['haydé', 'emmé'], extra: ['hayda'], answer: 'haydé emmé' },

    { type: 'choice', q: 'Her sleep is nawmeta. Why not nawmta?',
      options: [
        'Three consonants in a row do not sit together, so a vowel opens the cluster',
        'Because the person spoken about is a woman',
        'Because sleep is a feminine noun'
      ], answer: 0 },

    { type: 'gap', en: 'You are asked about your family the first time you meet someone.',
      lines: [
        { who: 'Yara', lb: '3endak ekhwé?', en: 'do you have brothers?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['na3am, 3endé khay w-okht', 'na3am, ma3é khay w-okht', 'la2, baddé khay'], answer: 0,
      explain: '3end is having in general. ma3 would mean you were carrying them about with you.' },

    { type: 'choice', q: 'Which pair means wife, one everyday and one formal?',
      options: ['mara and zawjé', 'bent and banéét', 'emm and okht'], answer: 0 },

    { type: 'type', en: 'our father', answer: 'bayyna' },

    { type: 'choice', q: 'Why does this unit matter more than the ones before it?',
      options: [
        'The same eight endings run on nouns, on prepositions, and on the words that replace have and want',
        'It is the last unit of the first stage',
        'It introduces the first verbs'
      ], answer: 0 }
  ]
});
