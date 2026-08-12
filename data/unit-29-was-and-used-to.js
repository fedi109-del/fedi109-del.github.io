LEB.addUnit({
  id: 'u29',
  stage: 4,
  order: 29,
  title: 'I Was Going To',
  goal: 'Use kéén to move any sentence you can already build one step back in time.',
  canDo: [
    'Say what you were, where you were and what there was',
    'Say what you were doing, what you used to do, and what you wanted to do',
    'Say what you were about to do before something got in the way'
  ],

  grammar: [
    {
      heading: 'The verb that fills the hole',
      body:
        'Lebanese has no present tense of "to be". `ana te3béén` is a complete sentence — I ' +
        'tired — and putting a verb in it would be wrong, not merely unnecessary. The past is a ' +
        'different matter. There the hole has to be filled, and `kéén` is what fills it: ' +
        '`kent te3béén`, I was tired.\n\n' +
        'It is the most irregular verb in the language and the most useful, so it is worth ' +
        'learning as a shape rather than as a rule. The stem is `ken-` whenever the ending starts ' +
        'with a consonant, and `kéén-` whenever the ending is a vowel or there is no ending at ' +
        'all. That single observation generates the whole table.\n\n' +
        'And once more the past collapses `ana` and `enta` into one form. `kent` is "I was" and ' +
        '"you were"; only the pronoun, or the rest of the sentence, tells them apart.\n\n' +
        'The same verb also does duty for "there was". `fii` means "there is"; put `kéén` in ' +
        'front and you have `kéén fii` — there was, there were. It never inflects in that use, ' +
        'however many things there were.',
      table: {
        headers: ['person', 'form', 'meaning'],
        rows: [
          ['ana', '`kent`', 'I was'],
          ['enta', '`kent`', 'you were'],
          ['enté', '`kenté`', 'you were'],
          ['houwwé', '`kéén`', 'he was'],
          ['hiyyé', '`kéénet`', 'she was'],
          ['ne7na', '`kenna`', 'we were'],
          ['ento', '`kento`', 'you were'],
          ['henné', '`kééno`', 'they were']
        ]
      },
      examples: [
        { lb: 'kent moudiira bi-maT3am', ar: 'كِنْت مُديرة بْمَطْعَم', en: 'I was a manager in a restaurant.' },
        { lb: 'l-akl kéén ktiir Tayyeb', ar: 'الأَكْل كان كْتير طَيِّب', en: 'The food was very good.' },
        { lb: 'kéén fii Taawléét faaDyé', ar: 'كان في طاوْلات فاضْية', en: 'There were free tables.' },
        { lb: 'maa kenna mabsouuTiin', ar: 'ما كِنّا مَبْسوطين', en: 'We were not happy.', note: 'maa goes in front of kéén, as in front of any past verb' }
      ]
    },

    {
      heading: 'Stack it on anything non-past',
      body:
        'Here is where `kéén` stops being a small irregular verb and becomes a machine. Put it in ' +
        'front of almost anything you already know how to say in the non-past, and the whole ' +
        'sentence steps back in time. The second half keeps its own meaning; `kéén` only supplies ' +
        'the pastness.\n\n' +
        'This is why English needs half a dozen different structures — was doing, used to do, ' +
        'wanted to, was going to, could have — where Lebanese needs one word and the form you ' +
        'already have. The contrast between `3am` and the plain `b-` form does the rest of the ' +
        'work: `kent 3am beshteghel` is a particular afternoon, `kent beshteghel` is a period of ' +
        'your life.\n\n' +
        'Both halves normally agree with the subject: `kenna baddna nrouu7`. You will also hear ' +
        '`kéén` left frozen in the he-form in front of a suffix verb — `kéén baddna nrouu7` — ' +
        'because the suffix verb is already carrying the person. Both are said. Agreeing is ' +
        'never wrong, so agree.',
      table: {
        headers: ['what you stack on it', 'example', 'English'],
        rows: [
          ['`kéén` + adjective or noun', '`kent te3béén`', 'I was tired'],
          ['`kéén` + `3am` + b-form', '`kent 3am beshteghel`', 'I was working'],
          ['`kéén` + b-form', '`kent beshteghel bi-maT3am`', 'I used to work in a restaurant'],
          ['`kéén` + `badd-` + bare verb', '`kent baddé rou7`', 'I wanted to go / I was going to go'],
          ['`kéén` + `ra7` + bare verb', '`kent ra7 rou7`', 'I was about to go'],
          ['`kéén` + `fii-` + bare verb', '`kent fiini rou7`', 'I was able to go'],
          ['`kéén` + `3end-`', '`kent 3endé sayyaara`', 'I used to have a car'],
          ['`kéén` + participle', '`kenna naaTriinon`', 'we were waiting for them'],
          ['`maa kéén` + any of these', '`maa kent ba3ref`', 'I did not know']
        ]
      },
      warning:
        '`kéén` never sits in front of another **past** verb. `kent Talabt` is not a sentence. ' +
        'The thing it stacks on is always non-past: a `b-` form, a bare form after `badd-` or ' +
        '`ra7`, a participle, or nothing at all.'
    },

    {
      heading: 'What it does to a story',
      body:
        'In the last unit the whole story ran on plain past verbs, one event after another. That ' +
        'gets a day told, but everything in it has the same weight. `kéén` is what gives a story ' +
        'a foreground and a background.\n\n' +
        'The rule of thumb: an event that moves the story forward takes the plain past. Anything ' +
        'that was merely going on, or was true for a while, or was planned and did not happen, ' +
        'takes `kéén`. English speakers already have this instinct — it is the difference between ' +
        '"the phone rang" and "I was cooking" — and Lebanese draws the same line with one word ' +
        'instead of two tenses.\n\n' +
        'The most useful of the lot is `kent baddé`. It is how you explain yourself: the thing ' +
        'you intended, set against the thing that actually happened. Half of adult conversation ' +
        'is that sentence.',
      examples: [
        { lb: 'kent 3am beshteghel lamma talfan Sami', en: 'I was working when Sami phoned.', note: 'background in kéén + 3am, event in the plain past' },
        { lb: 'lamma kent zghiir, kent bel3ab tennis marra bel-jem3a', en: 'When I was small I used to play tennis once a week.' },
        { lb: 'kent ra7 e7joz Taawlé, bass el-maT3am kéén mfawwal', en: 'I was about to book a table, but the restaurant was full.' },
        { lb: 'kenna baddna nrouu7 3al-ba7r, w-akhiiran a3adna bel-béét', en: 'We wanted to go to the sea, and in the end we stayed at home.' },
        { lb: 'kenna naaTriinon noSS séé3a', en: 'We had been waiting for them for half an hour.', note: 'a participle after kéén: a state, not an event' }
      ]
    }
  ],

  vocab: [
    { lb: 'kéén', ar: 'كان', en: 'he was, it was', pos: 'v', note: 'past roots ken / kéén' },
    { lb: 'kent', ar: 'كِنْت', en: 'I was, you (m) were', pos: 'v' },
    { lb: 'kenté', ar: 'كِنْتِ', en: 'you (f) were', pos: 'v' },
    { lb: 'kéénet', ar: 'كانِت', en: 'she was', pos: 'v' },
    { lb: 'kenna', ar: 'كِنّا', en: 'we were', pos: 'v' },
    { lb: 'kento', ar: 'كِنْتوا', en: 'you (pl) were', pos: 'v' },
    { lb: 'kééno', ar: 'كانوا', en: 'they were', pos: 'v' },
    { lb: 'kéén fii', ar: 'كان في', en: 'there was, there were', pos: 'phr', note: 'never inflects' },
    { lb: '3aadatan', ar: 'عادَةً', en: 'usually', pos: 'adv' },
    { lb: 'aw2aat', ar: 'أَوْقات', en: 'sometimes', pos: 'adv' },
    { lb: 'met2aa3ed', ar: 'مِتْقاعِد', en: 'retired', pos: 'adj', note: 'met2aa3ed / met2aa3dé / met2aa3diin' },
    { lb: 'moudiir', ar: 'مُدير', en: 'manager', pos: 'n', gender: 'm', note: 'f. moudiira, pl. moudara' },
    { lb: 'maSna3', ar: 'مَصْنَع', en: 'factory', pos: 'n', gender: 'm' },
    { lb: 'naaTer', ar: 'ناطِر', en: 'waiting', pos: 'adj', note: 'naaTer / naaTra / naaTriin — takes an object ending straight on: naaTrak' },
    { lb: 'ze3léén', ar: 'زِعْلان', en: 'upset, put out', pos: 'adj', note: 'ze3léén / ze3lééné / ze3lééniin' },
    { lb: 'Tabii3é', ar: 'طَبيعي', en: 'normal, natural', pos: 'adj' }
  ],

  phrases: [
    {
      lb: 'elé zaméén', ar: 'إلي زَمان', en: 'it has been ages since I',
      when: 'in front of something you have not done in a long time'
    },
    {
      lb: 'yaa réét!', ar: 'يا ريت!', en: 'I wish',
      when: 'turning down something you would genuinely have liked'
    },
    {
      lb: 'basiiTa!', ar: 'بَسيطة!', en: 'it is nothing',
      when: 'letting someone off an apology, or waving away a problem'
    },
    {
      lb: 'wala yhemmak', ar: 'وَلا يْهِمَّك', en: 'do not let it worry you',
      when: 'reassuring someone who is still apologising'
    },
    {
      lb: 'maa 3léé', ar: 'ما عْليه', en: 'never mind, it does not matter',
      when: 'shrugging off something small that went wrong'
    },
    {
      lb: 'l-7amdella 3as-saléémé', ar: 'الحَمْدِالله ع السَّلامة', en: 'thank God you are safe',
      when: 'to someone just back from a journey, a hospital or an illness',
      reply: 'Allah ysallmak', replyEn: 'may God keep you safe'
    },
    {
      lb: 'shou kéén ra2yak?', ar: 'شو كان رَأْيَك؟', en: 'what did you make of it?',
      when: 'asking for a verdict on something already over'
    }
  ],

  drills: [
    { type: 'conjugate', en: 'they were', root: 'ken / kéén', person: 'henné', tense: 'past',
      options: ['kééno', 'kenna', 'kéénet', 'kento'], answer: 0 },

    { type: 'choice', q: 'How do you say "I am tired"?',
      options: ['ana te3béén', 'ana kent te3béén', 'ana bkouun te3béén'], answer: 0,
      explain: 'There is no present "to be" at all. kéén is only needed once the sentence moves into the past.' },

    { type: 'match',
      pairs: [['kent', 'I was'], ['kéénet', 'she was'], ['kenna', 'we were'], ['kééno', 'they were']] },

    { type: 'choice', q: 'Which one means "I used to work in a restaurant"?',
      options: ['kent beshteghel bi-maT3am', 'kent 3am beshteghel bi-maT3am', 'ra7 eshteghel bi-maT3am'], answer: 0,
      explain: 'The plain b- form after kéén is the habit. Add 3am and it becomes one particular afternoon.' },

    { type: 'build', en: 'I was about to book a table.',
      tiles: ['kent', 'ra7', 'e7joz', 'Taawlé'], extra: ['baddé'],
      answer: 'kent ra7 e7joz Taawlé' },

    { type: 'conjugate', en: 'she was', root: 'ken / kéén', person: 'hiyyé', tense: 'past',
      options: ['kéénet', 'kéén', 'kenté', 'kento'], answer: 0 },

    { type: 'gap', en: 'A friend noticed you were missing from dinner.',
      lines: [
        { who: 'Georges', lb: 'léésh maa kento ma3na mbéére7?', en: 'why were you not with us yesterday?' },
        { who: 'You', you: true, lb: 'kent 3am beshteghel las-séé3a tes3a', en: 'I was working until nine' },
        { who: 'Georges', lb: 'yii… kenna 7éébbiin nshoufak', en: 'oh no… we wanted to see you' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['yaa réét! kent baddé kouun ma3kon', 'yaa réét! baddé kouun ma3kon', 'yaa réét! ra7 kouun ma3kon'], answer: 0,
      explain: 'The wish is about last night, so kéén has to be in it. Without kéén the sentence is about now, and with ra7 it is about tomorrow.' },

    { type: 'type', en: 'there was, there were', answer: 'kéén fii', accept: ['keen fii', 'kéén fi'] },

    { type: 'choice', q: 'Which sentence is impossible?',
      options: ['kent Talabt samak', 'kent baddé oTlob samak', 'kent 3am boTlob samak'], answer: 0,
      explain: 'kéén never sits in front of a past verb. What follows it is always a non-past form.' },

    { type: 'build', en: 'We used to have a small house in the village.',
      tiles: ['kéén', '3enna', 'béét', 'zghiir', 'bed-Day3a'], extra: ['kenna'],
      answer: 'kéén 3enna béét zghiir bed-Day3a' },

    { type: 'choice', q: 'Where does maa go in "we were not waiting"?',
      options: ['maa kenna naaTriin', 'kenna maa naaTriin', 'kenna naaTriin maa'], answer: 0,
      explain: 'maa goes in front of the whole thing, exactly as it does with any other past verb.' },

    { type: 'match',
      pairs: [['3aadatan', 'usually'], ['aw2aat', 'sometimes'], ['met2aa3ed', 'retired'], ['naaTer', 'waiting']] },

    { type: 'type', en: 'I was working (right at that moment).', answer: 'kent 3am beshteghel' },

    { type: 'choice', q: 'You want to say "I could have gone". Which piece goes between kent and rou7?',
      options: ['fiini', 'baddé', 'ra7'], answer: 0,
      explain: 'fii- is the suffix verb for can. baddé gives wanted to, ra7 gives was about to.' }
  ],

  quiz: [
    { type: 'conjugate', en: 'you (f) were', root: 'ken / kéén', person: 'enté', tense: 'past',
      options: ['kenté', 'kent', 'kéénet', 'kento'], answer: 0 },

    { type: 'gap', en: 'You are talking to a neighbour about the years before you moved.',
      lines: [
        { who: 'Rita', lb: 'kenté bteshteghlé wéén?', en: 'where did you use to work?' },
        { who: 'You', you: true, lb: 'kent moudiira bi-maT3am 3al-ba7r', en: 'I was a manager in a restaurant by the sea' },
        { who: 'Rita', lb: 'w-halla2? met2aa3dé?', en: 'and now? retired?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['laa2, halla2 3am beshteghel men el-béét', 'laa2, halla2 kent beshteghel men el-béét', 'laa2, halla2 kenna beshteghel men el-béét'], answer: 0,
      explain: 'halla2 means now, so kéén has no business in the sentence. kéén is the word that moves things back.' },

    { type: 'choice', q: 'Someone says "kéén baddna nshoufak". What does it mean?',
      options: [
        'We wanted to see you',
        'We will see you',
        'We are seeing you right now'
      ], answer: 0,
      explain: 'kéén plus a suffix verb gives the past intention. Here kéén is left in the he-form because baddna already carries the person.' },

    { type: 'build', en: 'When I was small I used to play tennis once a week.',
      tiles: ['lamma', 'kent', 'zghiir', 'kent', 'bel3ab', 'tennis', 'marra', 'bel-jem3a'], extra: ['3am'],
      answer: 'lamma kent zghiir kent bel3ab tennis marra bel-jem3a' },

    { type: 'choice', q: 'Which pair is the right way round?',
      options: [
        'kent 3am beshteghel = I was working; kent beshteghel = I used to work',
        'kent 3am beshteghel = I used to work; kent beshteghel = I was working',
        'Both mean exactly the same thing'
      ], answer: 0 },

    { type: 'type', en: 'we were waiting for them.', answer: 'kenna naaTriinon' },

    { type: 'match',
      pairs: [['yaa réét!', 'I wish'], ['basiiTa!', 'it is nothing'], ['maa 3léé', 'never mind'], ['elé zaméén', 'it has been ages']] },

    { type: 'choice', q: 'A friend is back from three weeks in hospital. What do you say first?',
      options: ['l-7amdella 3as-saléémé', 'shou kéén ra2yak?', 'wala yhemmak'], answer: 0,
      explain: 'And the answer is fixed: Allah ysallmak.' },

    { type: 'choice', q: 'Which one says "there was nobody in the restaurant"?',
      options: ['maa kéén fii 7ada bel-maT3am', 'maa fii 7ada bel-maT3am', 'maa ra7 ykouun fii 7ada bel-maT3am'], answer: 0,
      explain: 'fii is there is; kéén fii is there was; maa in front negates the lot.' },

    { type: 'build', en: 'We wanted to go to the sea, and in the end we stayed at home.',
      tiles: ['kenna', 'baddna', 'nrouu7', '3al-ba7r', 'w-akhiiran', 'a3adna', 'bel-béét'], extra: ['ra7'],
      answer: 'kenna baddna nrouu7 3al-ba7r w-akhiiran a3adna bel-béét' }
  ]
});
