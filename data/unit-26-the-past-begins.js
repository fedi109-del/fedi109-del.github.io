LEB.addUnit({
  id: 'u26',
  stage: 4,
  order: 26,
  title: 'What I Did',
  goal: 'Report what happened yesterday with the verbs that keep one shape all the way through.',
  canDo: [
    'Recognise that the past is built at the end of the word, not the front',
    'Put twelve everyday verbs into all eight persons',
    'Say what you did not do'
  ],

  grammar: [
    {
      heading: 'The past is built from the other end',
      body:
        'Everything you have learned about verbs so far happens at the front. `b-`, `bt-`, `by-`, ' +
        '`mn-`; then the same prefixes stripped bare after `léézem` or `ra7`; then a marker ' +
        'standing in front of the whole thing. The past does none of that.\n\n' +
        'In the past there is no prefix at all. The verb starts with its own stem and the person ' +
        'is marked by an ending glued to the back: `-t`, `-té`, `-na`, `-to`, `-et`, `-o`. ' +
        'Nothing is added in front, and nothing may be added in front — this is the reason `3am` ' +
        'and `ra7` never appear with a past form. They are markers for the non-past only, and a ' +
        'sentence like `ra7 Talabt` is not a mistake you can half-make; it is simply not a ' +
        'sentence.\n\n' +
        'So the past is, mechanically, the easiest tense in the language: one stem, seven ' +
        'endings, no prefix family to choose. The difficulty is elsewhere, and it is the subject ' +
        'of the next unit — some verbs change their stem when they move into the past, the way ' +
        'English *go* becomes *went*. This unit deliberately keeps to the verbs that do not.',
      table: {
        headers: ['tense', 'where the person is marked'],
        rows: [
          ['present — `bedros`', 'at the front'],
          ['bare — `edros`', 'at the front'],
          ['now — `3am bedros`', 'at the front, with a marker on top'],
          ['future — `ra7 edros`', 'at the front, with a marker on top'],
          ['past — `darast`', '**at the end**']
        ]
      },
      warning:
        'A past verb never carries `3am` or `ra7`. If you catch yourself building `3am darast`, ' +
        'you have glued a present marker onto a past body.'
    },
    {
      heading: 'The endings, all eight of them',
      body:
        'Here is the whole system on two verbs. Read the endings column first: it is the part ' +
        'that will still be true in the next unit, when the stems start misbehaving.\n\n' +
        'Two rows repay attention. First, `ana` and `enta` are identical — `darast` is both "I ' +
        'studied" and "you studied". This is the mirror image of the present tense, where `enta` ' +
        'and `hiyyé` fall together. Lebanese tolerates the ambiguity and clears it up with a ' +
        'pronoun when the situation does not: `ana darast`, `enta darast`.\n\n' +
        'Second, `houwwé` takes no ending at all. His form is the bare stem, which is why ' +
        'dictionaries and word lists print it: `daras`, `Talab`, `khallaS`. When you learn a new ' +
        'past verb you are learning his form, and everyone else is that form plus a letter or ' +
        'two.\n\n' +
        'Say the column down once, out loud. Six of the eight forms end in a consonant cluster ' +
        'that English speakers tend to soften; the `-t` at the end of `darast` is a real, ' +
        'audible letter.',
      table: {
        headers: ['person', 'ending', 'study (`daras`)', 'wash (`ghassal`)'],
        rows: [
          ['ana', '`-t`', '`darast`', '`ghassalt`'],
          ['enta', '`-t`', '`darast`', '`ghassalt`'],
          ['enté', '`-té`', '`darasté`', '`ghassalté`'],
          ['houwwé', '—', '`daras`', '`ghassal`'],
          ['hiyyé', '`-et`', '`daraset`', '`ghassalet`'],
          ['ne7na', '`-na`', '`darasna`', '`ghassalna`'],
          ['ento', '`-to`', '`darasto`', '`ghassalto`'],
          ['henné', '`-o`', '`daraso`', '`ghassalo`']
        ]
      }
    },
    {
      heading: 'Twelve verbs that give no trouble',
      body:
        'These are the well-behaved ones: whatever ending you hang on them, the stem in front of ' +
        'it never moves. Learn the `houwwé` form — the bare stem in the middle column — and the ' +
        'other seven persons are free.\n\n' +
        'One warning before you start. A past stem is not always the present root wearing ' +
        'different clothes. "He ate" is `akal`, while the present root you already know is ' +
        '`éékol`; "he took" is `akhad`, next to `éékhod`. Inside the past, though, both are ' +
        'perfectly regular: `akalt`, `akalna`, `akalo`. The lesson of this unit is that the past ' +
        'stem holds still across the eight persons — not that it matches the present.\n\n' +
        'Several of these verbs come in pairs with things you can do to a house or a plate, ' +
        'which is not an accident: the past is the tense of accounts, and most of the accounts ' +
        'people give each other are domestic.',
      table: {
        headers: ['meaning', 'he did it', 'I did it'],
        rows: [
          ['study', '`daras`', '`darast`'],
          ['order, ask for', '`Talab`', '`Talabt`'],
          ['eat', '`akal`', '`akalt`'],
          ['take', '`akhad`', '`akhadt`'],
          ['finish', '`khallaS`', '`khallaSt`'],
          ['carry on', '`kammal`', '`kammalt`'],
          ['wash', '`ghassal`', '`ghassalt`'],
          ['take off (clothes)', '`shala7`', '`shala7t`'],
          ['hang up', '`3alla2`', '`3alla2t`'],
          ['leave behind', '`tarak`', '`tarakt`'],
          ['sit down, stay', '`a3ad`', '`a3adt`'],
          ['have breakfast', '`trawwa2`', '`trawwa2t`'],
          ['answer', '`jééwab`', '`jééwabt`'],
          ['believe', '`Sadda2`', '`Sadda2t`'],
          ['forgive', '`sééma7`', '`sééma7t`']
        ]
      }
    },
    {
      heading: 'Building the sentence, and taking it back',
      body:
        'Word order is the one you already use: verb first, then whatever it acts on. `Talabt ' +
        'el-7sééb` — I asked for the bill. A time word can open the sentence or close it, ' +
        'exactly as in the future: `mbéére7 a3adna bel-bayt` or `a3adna bel-bayt mbéére7`.\n\n' +
        'The negative is `maa` in front of the verb, and there is no marker in between because ' +
        'there is no marker at all: `maa darast`, `maa khallaSna`, `maa Sadda2ha`. This is the ' +
        'same `maa` that negates every verb in the language; `mesh` still belongs to nouns and ' +
        'adjectives and has no business here.\n\n' +
        'Because `ana` and `enta` share a form, a negative sentence is where people add the ' +
        'pronoun most often: `ana maa Talabt hayda` leaves no room for the listener to think you ' +
        'are accusing him.\n\n' +
        'One last thing to unlearn. Lebanese has no separate present perfect, so this one tense ' +
        'covers ground English splits in two: `maa khallaSt` is "I did not finish" and "I have ' +
        'not finished", and which one it is comes from the conversation, not from the verb.',
      examples: [
        { lb: 'mbéére7 ghassalt eS-S7ouun', ar: 'مْبارِح غَسَّلْت الصْحون', en: 'Yesterday I washed the dishes.' },
        { lb: 'maa darast lyoom', ar: 'ما دَرَسْت اليوم', en: 'I did not study today.' },
        { lb: 'ana Talabt, houwwé maa Talab', ar: 'أنا طَلَبْت، هوي ما طَلَب', en: 'I ordered, he did not.', note: 'the pronoun does the disambiguating' }
      ]
    }
  ],

  vocab: [
    { lb: 'mbéére7', ar: 'مْبارِح', en: 'yesterday', pos: 'adv' },
    { lb: 'daras', ar: 'دَرَس', en: 'he studied', pos: 'v' },
    { lb: 'Talab', ar: 'طَلَب', en: 'he ordered, he asked for', pos: 'v' },
    { lb: 'akal', ar: 'أَكَل', en: 'he ate', pos: 'v', note: 'the present root is éékol — they do not match, and that is normal' },
    { lb: 'akhad', ar: 'أَخَد', en: 'he took', pos: 'v' },
    { lb: 'khallaS', ar: 'خَلَّص', en: 'he finished', pos: 'v' },
    { lb: 'kammal', ar: 'كَمَّل', en: 'he carried on', pos: 'v' },
    { lb: 'ghassal', ar: 'غَسَّل', en: 'he washed', pos: 'v' },
    { lb: 'shala7', ar: 'شَلَح', en: 'he took off (clothes)', pos: 'v' },
    { lb: '3alla2', ar: 'عَلَّق', en: 'he hung up', pos: 'v' },
    { lb: 'tarak', ar: 'تَرَك', en: 'he left behind', pos: 'v' },
    { lb: 'a3ad', ar: 'قَعَد', en: 'he sat down, he stayed', pos: 'v' },
    { lb: 'trawwa2', ar: 'تْرَوَّق', en: 'he had breakfast', pos: 'v' },
    { lb: 'jééwab', ar: 'جاوَب', en: 'he answered', pos: 'v' },
    { lb: 'Sadda2', ar: 'صَدَّق', en: 'he believed', pos: 'v' },
    { lb: 'sééma7', ar: 'سامَح', en: 'he forgave', pos: 'v' }
  ],

  phrases: [
    {
      lb: 'shou akalt lyoom?', ar: 'شو أَكَلْت اليوم؟', en: 'what did you eat today?',
      when: 'to a man — small talk that carries no risk and always works'
    },
    {
      lb: 'maa khallaSt', ar: 'ما خَلَّصْت', en: 'I have not finished',
      when: 'someone is hurrying you — the same past covers "I did not finish"'
    },
    {
      lb: 'mbéére7 a3adna bel-bayt', ar: 'مْبارِح قَعَدنا بالبَيت', en: 'yesterday we stayed at home',
      when: 'answering the standard question about your weekend'
    },
    {
      lb: 'ana Talabt el-7sééb', ar: 'أنا طَلَبْت الحْساب', en: 'I asked for the bill',
      when: 'telling the person you are with that it is already done'
    },
    {
      lb: 'ghassalt eS-S7ouun', ar: 'غَسَّلْت الصْحون', en: 'I washed the dishes',
      when: 'claiming your share of the housework before anyone asks'
    },
    {
      lb: 'shou Talabto?', ar: 'شو طَلَبْتوا؟', en: 'what did you order?',
      when: 'arriving late at a table where the others have already ordered'
    }
  ],

  drills: [
    { type: 'choice', q: 'In the past tense, where is the person marked?',
      options: ['at the end of the verb', 'at the front of the verb', 'at both ends'], answer: 0,
      explain: 'The prefixes belong to the present and its relatives. The past works with endings only.' },

    { type: 'conjugate', en: 'she studied', root: 'daras', person: 'hiyyé', tense: 'past',
      options: ['daraset', 'darast', 'daraso'], answer: 0,
      explain: 'hiyyé takes -et. daraso is they, darast is I or you.' },

    { type: 'conjugate', en: 'we washed', root: 'ghassal', person: 'ne7na', tense: 'past',
      options: ['ghassalna', 'ghassalto', 'ghassalet'], answer: 0 },

    { type: 'conjugate', en: 'they ordered', root: 'Talab', person: 'henné', tense: 'past',
      options: ['Talabo', 'Talabna', 'Talabet'], answer: 0 },

    { type: 'choice', q: '`Talabt` can mean two different things. Which two?',
      options: [
        'I ordered, and you (a man) ordered',
        'I ordered, and she ordered',
        'you ordered, and they ordered'
      ], answer: 0,
      explain: 'ana and enta share one form in the past. Add the pronoun when it matters.' },

    { type: 'build', en: 'Yesterday we ate at home.',
      tiles: ['mbéére7', 'akalna', 'bel-bayt'], extra: ['3am'], answer: 'mbéére7 akalna bel-bayt' },

    { type: 'type', en: 'I finished.', answer: 'khallaSt' },

    { type: 'gap', en: 'Your flatmate comes home and finds the kitchen clean.',
      lines: [
        { who: 'Nadim', lb: 'miin ghassal eS-S7ouun?', en: 'who washed the dishes?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['ana ghassalton', 'ana 3am bghassel', 'ana ra7 ghassel'], answer: 0,
      explain: 'He is asking about something already done. The other two answers are correct Lebanese for the wrong moment in time.' },

    { type: 'match',
      pairs: [['darast', 'I studied'], ['daraset', 'she studied'], ['darasna', 'we studied'], ['daraso', 'they studied']] },

    { type: 'choice', q: 'How do you say "I did not order"?',
      options: ['maa Talabt', 'mesh Talabt', 'maa 3am Talabt'], answer: 0,
      explain: 'A verb is denied with maa, and a past verb takes no marker in front of it.' },

    { type: 'type', en: 'They finished.', answer: 'khallaSo' },

    { type: 'choice', q: 'Which of these is impossible Lebanese?',
      options: ['ra7 Talabt', 'Talabt', 'maa Talabt'], answer: 0,
      explain: 'ra7 and 3am mark the non-past. Neither can stand in front of a past form.' },

    { type: 'conjugate', en: 'you (a woman) took', root: 'akhad', person: 'enté', tense: 'past',
      options: ['akhadté', 'akhadt', 'akhadet'], answer: 0 },

    { type: 'gap', en: 'A friend is asking about your morning.',
      lines: [
        { who: 'Rana', lb: 'trawwa2té lyoom?', en: 'did you have breakfast today?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['laa2, maa trawwa2t', 'laa2, maa 3am trawwa2t', 'laa2, mesh trawwa2t'], answer: 0,
      explain: 'One word in front of the verb, and nothing else changes.' }
  ],

  quiz: [
    { type: 'conjugate', en: 'you (several people) studied', root: 'daras', person: 'ento', tense: 'past',
      options: ['darasto', 'darasté', 'daraso'], answer: 0 },

    { type: 'build', en: 'I did not wash the dishes.',
      tiles: ['maa', 'ghassalt', 'eS-S7ouun'], extra: ['mesh'], answer: 'maa ghassalt eS-S7ouun' },

    { type: 'type', en: 'She ordered.', answer: 'Talabet' },

    { type: 'choice', q: 'Which form is the bare stem, the one you learn a verb by?',
      options: ['the `houwwé` form, with no ending at all', 'the `ana` form, with -t', 'the `henné` form, with -o'], answer: 0 },

    { type: 'match',
      pairs: [['khallaSt', 'I finished'], ['khallaSna', 'we finished'], ['khallaSet', 'she finished'], ['khallaSo', 'they finished']] },

    { type: 'gap', en: 'A friend joins you at the restaurant and sees an empty table.',
      lines: [
        { who: 'Sami', lb: 'Talabt shii?', en: 'have you ordered anything?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['ana maa Talabt', 'ana maa 3am Talabt', 'ana mesh Talabt'], answer: 0,
      explain: 'The pronoun is there because ana and enta share the form; maa is the only word a past verb needs to be denied.' },

    { type: 'conjugate', en: 'I sat down', root: 'a3ad', person: 'ana', tense: 'past',
      options: ['a3adt', 'a3ad', 'a3adna'], answer: 0 },

    { type: 'choice', q: 'Why is `mesh darast` wrong?',
      options: [
        'mesh denies nouns and adjectives; a verb takes maa',
        'mesh can only be used in questions',
        'mesh has to follow the verb'
      ], answer: 0 },

    { type: 'type', en: 'We stayed at home.', answer: 'a3adna bel-bayt' },

    { type: 'choice', q: 'Both `akal` and `éékol` mean "eat". What is the relationship?',
      options: [
        '`éékol` is the present root and `akal` is the past stem — the same verb, two shapes',
        'They are two different verbs',
        '`akal` is the plural of `éékol`'
      ], answer: 0 }
  ]
});
