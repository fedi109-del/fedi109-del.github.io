LEB.addUnit({
  id: 'u15',
  stage: 3,
  order: 15,
  title: 'The Present Engine',
  goal: 'Build the present tense of any Lebanese verb out of its root, for all eight people.',
  canDo: [
    'Turn a verb root into the eight forms of the present',
    'Pick the right prefix for a root by listening to how it starts',
    'Say what you do, and how often you do it',
    'Read a conjugation table without losing your place in it'
  ],

  grammar: [
    {
      heading: 'A root, and something in front of it',
      body:
        'Everything so far has run on words that take endings: `baddé`, `3endak`, `ma3na`, ' +
        '`fiiné`. They behave like verbs and they carried you a long way, but they are a closed ' +
        'set — there are eight of them and there will never be a ninth. Real verbs work the other ' +
        'way round. They take something in **front**.\n\n' +
        'Every Lebanese verb has a **root**: the bare form, no prefix, no ending. `a3ref` is the ' +
        'root for knowing, `rouu7` for going, `eshrab` for drinking. On its own a root is not a ' +
        'sentence and nobody says one in isolation. Put `b-` in front of `a3ref` and you have ' +
        '`ba3ref`, "I know" — now you have said something.\n\n' +
        'This is why every verb in this course is given to you with its root next to it. Resist ' +
        'learning `ba3ref` as a word. Learn `a3ref` as a root, learn the eight prefixes once, and ' +
        'from then on every new verb you hear arrives already conjugated in your head. Sixty roots ' +
        'is nearly five hundred usable forms, and not one new rule after this unit.\n\n' +
        'The roots below are the ones this unit works with. Say each one aloud, then say it again ' +
        'with the `b-` in front, and notice how little actually changes.',
      table: {
        headers: ['root', 'meaning', 'I …'],
        rows: [
          ['`a3ref`', 'know', '`ba3ref`'],
          ['`rouu7`', 'go', '`brouu7`'],
          ['`eshrab`', 'drink', '`beshrab`'],
          ['`emshé`', 'walk', '`bemshé`'],
          ['`éékol`', 'eat', '`béékol`'],
          ['`7ebb`', 'like, love', '`b7ebb`']
        ]
      }
    },
    {
      heading: 'Four prefixes and two endings',
      body:
        'The grid has eight slots and it is the same grid for every verb in the language. Four ' +
        'prefixes do the work: `b-` for me, `bt-` for the person I am speaking to and also for her, ' +
        '`by-` for him and for them, `mn-` for us. Two endings finish the job: `-é` when you are ' +
        'talking to one woman, `-o` when more than one person is involved.\n\n' +
        'Each prefix comes in two shapes, and the root decides which one, not you. A root that ' +
        'begins with a vowel sound — `a3ref`, `eshrab`, `emshé` — takes the tight version and the ' +
        'prefix sticks straight onto it: `bta3ref`, `byeshrab`, `mnemshé`. A root that begins with ' +
        'a consonant leaves the prefix nothing to lean on, so a small vowel is added to help it out: ' +
        '`betrouu7`, `birouu7`, `menrouu7`. One system, two pronunciations. Within a week your mouth ' +
        'chooses correctly before your head has caught up.\n\n' +
        'Read the table down the person column rather than across. That order — me, you as a man, ' +
        'you as a woman, him, her, us, you as a group, them — is the order of every table in this ' +
        'course, and the whole point of never changing it is that one day you stop reading the labels.',
      table: {
        headers: ['person', 'prefix', 'ending', '`a3ref` — know', '`rouu7` — go'],
        rows: [
          ['ana', '`b-`', '—', '`ba3ref`', '`brouu7`'],
          ['enta', '`bt-` / `bet-`', '—', '`bta3ref`', '`betrouu7`'],
          ['enté', '`bt-` / `bet-`', '`-é`', '`bta3refé`', '`betrouu7é`'],
          ['houwwé', '`by-` / `bi-`', '—', '`bya3ref`', '`birouu7`'],
          ['hiyyé', '`bt-` / `bet-`', '—', '`bta3ref`', '`betrouu7`'],
          ['ne7na', '`mn-` / `men-`', '—', '`mna3ref`', '`menrouu7`'],
          ['ento', '`bt-` / `bet-`', '`-o`', '`bta3refo`', '`betrouu7o`'],
          ['henné', '`by-` / `bi-`', '`-o`', '`bya3refo`', '`birouu7o`']
        ]
      },
      warning:
        'The `ne7na` row is the odd one out: it has no b at all, it has an **m**. `mna3ref`, ' +
        '`menrouu7`, `mnéékol`. That single letter is what tells a listener the sentence is about us.'
    },
    {
      heading: 'The rows that are always twins',
      body:
        'Look at the `enta` row and the `hiyyé` row in the table above. They are identical, and ' +
        'they are identical in every verb Lebanese has. `bta3ref` is "you know" said to a man and ' +
        '"she knows", at the same time, with nothing to tell them apart. There is no second form ' +
        'hiding somewhere waiting to be learned. The language simply does not separate them here.\n\n' +
        'This worries learners far more than it should. Lebanese sentences almost never leave the ' +
        'person floating. Either the pronoun is sitting right there — `enta bta3ref`, `hiyyé ' +
        'bta3ref` — or the conversation has already settled who is being talked about, which is the ' +
        'normal case. The ambiguity is real on paper and nearly invisible in a room.\n\n' +
        'Expect a second collapse. When a root ends in `-é`, as `emshé`, `ejé` and `e7ké` do, the ' +
        '`-é` ending for a woman has nowhere to land, so `enté` joins the pair. Three rows, one ' +
        'form: `btemshé` is "you walk" to a man, "you walk" to a woman and "she walks". The plural ' +
        'ending still attaches normally, which is why `btemsho` stays unambiguous.',
      table: {
        headers: ['person', '`eshrab` — drink', '`emshé` — walk'],
        rows: [
          ['ana', '`beshrab`', '`bemshé`'],
          ['enta', '`bteshrab`', '`btemshé`'],
          ['enté', '`bteshrabé`', '`btemshé`'],
          ['houwwé', '`byeshrab`', '`byemshé`'],
          ['hiyyé', '`bteshrab`', '`btemshé`'],
          ['ne7na', '`mneshrab`', '`mnemshé`'],
          ['ento', '`bteshrabo`', '`btemsho`'],
          ['henné', '`byeshrabo`', '`byemsho`']
        ]
      },
      warning:
        'When you are asked for `bta3ref`, both "you (m)" and "she" are right answers. Train ' +
        'yourself to read the **sentence** for the person, not the verb.'
    },
    {
      heading: 'What the b- is actually saying',
      body:
        'The `b-` is not decoration, it carries meaning. It marks the plain present: what you do, ' +
        'what you do as a rule, what is true of you. `brouu7 3ash-sheghl kell yoom` covers both ' +
        'English versions at once, "I go to work every day" and "I do go to work every day", and it ' +
        'also covers the things English would never put in a continuous — what you like, what you ' +
        'think, what you are.\n\n' +
        'What the `b-` form does **not** cover is the action happening at this exact second. That ' +
        'has a marker of its own and a unit of its own further on. Say `beshrab 2ahwe` and a ' +
        'Lebanese ear hears "coffee is what I drink", not "I am drinking coffee right now".\n\n' +
        'One thing to file away for later. This `b-` is the first piece the language throws ' +
        'overboard. A short list of words, placed in front of a verb, strip the `b-` off it and ' +
        'leave everything else standing. It happens often enough to have earned its own unit, two ' +
        'units from here. Until then the rule holds without exceptions: a verb standing alone in a ' +
        'sentence keeps its `b-`.',
      examples: [
        { lb: 'brouu7 3ash-sheghl kell yoom', ar: 'بْروح عَ الشِّغل كِل يوم', en: 'I go to work every day.' },
        { lb: 'maa beshrab 2ahwe', ar: 'ما بِشرب قَهْوة', en: 'I do not drink coffee.', note: 'the whole negation is maa in front' },
        { lb: 'menrouu7 3al-béét bakkiir', ar: 'مِنْروح عَ البيت بَكّير', en: 'We go home early.' },
        { lb: 'hiyyé bta3ref eT-Tarii2', ar: 'هيي بْتَعْرِف الطَّريق', en: 'She knows the road.', note: 'the pronoun is there because the form alone would not say who' }
      ],
      warning:
        '`maa` goes in front of the verb and nothing else moves: `ba3ref` becomes `maa ba3ref`. ' +
        'It is probably the single most-said sentence in the country, so have it ready.'
    }
  ],

  vocab: [
    { lb: 'ba3ref', ar: 'بَعْرِف', en: 'I know', pos: 'v', note: 'root: a3ref' },
    { lb: 'bya3ref', ar: 'بْيَعْرِف', en: 'he knows', pos: 'v' },
    { lb: 'brouu7', ar: 'بْروح', en: 'I go', pos: 'v', note: 'root: rouu7' },
    { lb: 'birouu7', ar: 'بيروح', en: 'he goes', pos: 'v' },
    { lb: 'beshrab', ar: 'بِشرب', en: 'I drink', pos: 'v', note: 'root: eshrab' },
    { lb: 'byeshrab', ar: 'بْيِشْرب', en: 'he drinks', pos: 'v' },
    { lb: 'bemshé', ar: 'بِمْشي', en: 'I walk', pos: 'v', note: 'root: emshé' },
    { lb: 'byemshé', ar: 'بْيِمْشي', en: 'he walks', pos: 'v' },
    { lb: 'béékol', ar: 'باكُل', en: 'I eat', pos: 'v', note: 'root: éékol' },
    { lb: 'b7ebb', ar: 'بْحِب', en: 'I like, I love', pos: 'v', note: 'root: 7ebb' },
    { lb: 'kell yoom', ar: 'كِل يوم', en: 'every day', pos: 'adv' },
    { lb: '3aadatan', ar: 'عادَةً', en: 'usually', pos: 'adv' },
    { lb: 'dééyman', ar: 'دايْماً', en: 'always', pos: 'adv' },
    { lb: 'aw2aat', ar: 'أَوْقات', en: 'sometimes', pos: 'adv' },
    { lb: 'bakkiir', ar: 'بَكّير', en: 'early', pos: 'adv' },
    { lb: 'maa', ar: 'ما', en: 'not — goes in front of a verb', pos: 'adv' }
  ],

  phrases: [
    {
      lb: 'maa ba3ref', ar: 'ما بَعْرِف', en: 'I do not know',
      when: 'the honest answer, and the one you will reach for most often'
    },
    {
      lb: 'bta3ref?', ar: 'بْتَعْرِف؟', en: 'do you know? (to a man)',
      when: 'checking whether the person in front of you has the information',
      reply: 'akiid', replyEn: 'of course'
    },
    {
      lb: 'wéén betrouu7 kell yoom?', ar: 'وين بِتْروح كِل يوم؟', en: 'where do you go every day? (to a man)',
      when: 'asking about a routine, not about where somebody is heading right now'
    },
    {
      lb: 'shou bteshrab?', ar: 'شو بْتِشْرَب؟', en: 'what do you drink? (to a man)',
      when: 'said in a house before anything is poured; the answer decides the next ten minutes'
    },
    {
      lb: 'ne7na mnemshé', ar: 'نِحْنا مْنِمْشي', en: 'we walk',
      when: 'answering how you get somewhere — the mn- is the whole "we"'
    },
    {
      lb: 'b7ebb ktiir', ar: 'بْحِب كْتير', en: 'I like it a lot',
      when: 'reacting to food, to a song, to a place you have been taken to'
    }
  ],

  dialogue: {
    title: 'Two people discovering they take the same road',
    setting: 'A bus stop. Small talk, and every sentence in it is the present tense doing its ordinary job.',
    lines: [
      { who: 'Samir', lb: 'wéén betrouu7 kell yoom?', ar: 'وين بتروح كل يوم؟', en: 'where do you go every day?' },
      { who: 'You', you: true, lb: 'brouu7 3a Béérout. w enta?', ar: 'بروح ع بيروت. وانت؟', en: 'I go to Beirut. And you?',
        note: 'brouu7 for I, betrouu7 for you. One root, two shells.' },
      { who: 'Samir', lb: 'ana kaméén. bemshé shwayy, ba3déén béékhod service.', ar: 'أنا كمان. بمشي شوي، بعدين باخد سرفيس', en: 'me too. I walk a bit, then I take a service cab.' },
      { who: 'You', you: true, lb: 'bta3ref wéén el-m7aTTa?', ar: 'بتعرف وين المحطة؟', en: 'do you know where the station is?' },
      { who: 'Samir', lb: 'akiid. ana bemro2 menna kell yoom.', ar: 'أكيد. أنا بمرق منها كل يوم', en: 'of course. I pass it every day.' },
      { who: 'You', you: true, lb: '3aadatan shou bteshrab eS-Sob7?', ar: 'عادة شو بتشرب الصبح؟', en: 'what do you usually drink in the morning?' },
      { who: 'Samir', lb: '2ahwe. dééyman 2ahwe. maa b7ebb esh-shaay.', ar: 'قهوة. دايما قهوة. ما بحب الشاي', say: 'أهوة. دايما أهوة. ما بحب الشاي', en: 'coffee. Always coffee. I do not like tea.',
        note: 'maa goes in front of the verb and nowhere else.' }
    ]
  },

  culture: {
    heading: 'The b that is not in the textbook',
    icon: 'gear',
    body:
      'Every verb in that conversation starts with a `b` that Modern Standard Arabic does not have. ' +
      '`brouu7`, `bemshé`, `beshrab`. Open a grammar of written Arabic and you will not find it, ' +
      'because it is not written Arabic — it grew in the spoken language across the Levant and it is ' +
      'now the ordinary present tense from Beirut to Damascus to Amman.\n\n' +
      'This matters for how you learn. Someone who studied fuS7a at university and arrives in ' +
      'Lebanon will understand the news and struggle at a bus stop, because the everyday tense they ' +
      'were taught is the one nobody speaks. You are learning it the other way round, which is ' +
      'slower to read a newspaper with and much faster to have a conversation in.\n\n' +
      'The `b` carries habit and general truth: what you do, what is normally the case. What you are ' +
      'doing at this exact minute needs another marker, `3am`, which arrives in unit 24. Until then, ' +
      'everything you can say is about your life in general — which turns out to be most of small ' +
      'talk.',
  },

  drills: [
    { type: 'conjugate', en: 'I know', root: 'a3ref', person: 'ana', tense: 'present',
      options: ['ba3ref', 'bta3ref', 'bya3ref', 'mna3ref'], answer: 0,
      explain: 'b- and nothing else. The root keeps its own vowel: ba3ref, never b3ref.' },

    { type: 'conjugate', en: 'we go', root: 'rouu7', person: 'ne7na', tense: 'present',
      options: ['menrouu7', 'betrouu7', 'birouu7', 'brouu7'], answer: 0,
      explain: 'The "we" prefix is the only one built on m. rouu7 starts with a consonant, so it is men-.' },

    { type: 'conjugate', en: 'she drinks', root: 'eshrab', person: 'hiyyé', tense: 'present',
      options: ['bteshrab', 'beshrab', 'byeshrab', 'mneshrab'], answer: 0,
      explain: 'She shares her form with "you (m)". Both are bteshrab.' },

    { type: 'choice', q: 'Which prefix marks "we"?',
      options: ['mn- / men-', 'bt- / bet-', 'by- / bi-'], answer: 0,
      explain: 'It is the only one without a b in it, which is exactly what makes it easy to hear.' },

    { type: 'match',
      pairs: [['ba3ref', 'I know'], ['bta3ref', 'you know / she knows'], ['bya3ref', 'he knows'], ['mna3ref', 'we know']] },

    { type: 'build', en: 'We go home every day.',
      tiles: ['menrouu7', '3al-béét', 'kell', 'yoom'], extra: ['brouu7'], answer: 'menrouu7 3al-béét kell yoom' },

    { type: 'gap', en: 'A driver has stopped and is asking you for directions.',
      lines: [
        { who: 'Driver', lb: 'bta3ref eT-Tarii2 3a Béérout?', en: 'do you know the road to Beirut?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['maa ba3ref', 'maa bta3ref', 'maa mna3ref'], answer: 0,
      explain: 'You are talking about yourself, so the b- form: ba3ref, with maa in front to say no.' },

    { type: 'choice', q: 'You are speaking to one woman. Which form of a3ref do you use?',
      options: ['bta3refé', 'bta3ref', 'bta3refo'], answer: 0,
      explain: 'The -é ending is what marks a single woman. Without it you are talking to a man, or about her.' },

    { type: 'type', en: 'I do not know.', answer: 'maa ba3ref', accept: ['ma ba3ref'] },

    { type: 'conjugate', en: 'they eat', root: 'éékol', person: 'henné', tense: 'present',
      options: ['byéékolo', 'btéékolo', 'mnéékol', 'byéékol'], answer: 0,
      explain: 'by- for them, plus the plural -o. btéékolo would be a group you are speaking to.' },

    { type: 'choice', q: 'Why do "you (m)" and "she" share one verb form?',
      options: [
        'Lebanese never separates them; the pronoun or the situation says who',
        'Only in verbs whose root ends in a vowel',
        'It happens with a3ref and with nothing else'
      ], answer: 0 },

    { type: 'gap', en: 'A colleague is trying to work out your morning.',
      lines: [
        { who: 'Hala', lb: 'kiif betrouu7 3ash-sheghl?', en: 'how do you get to work?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['bemshé kell yoom', 'btemshé kell yoom', 'mnemshé kell yoom'], answer: 0,
      explain: 'She asked about you, so answer about yourself: bemshé.' },

    { type: 'type', en: 'he goes', answer: 'birouu7' },

    { type: 'choice', q: 'Which of these is a root, not a finished verb?',
      options: ['eshrab', 'beshrab', 'byeshrab'], answer: 0,
      explain: 'A root has no prefix. It is what you store; the rest is built on the spot.' }
  ],

  quiz: [
    { type: 'conjugate', en: 'you walk — to one woman', root: 'emshé', person: 'enté', tense: 'present',
      answer: 'btemshé', accept: ['btemshe'] },

    { type: 'choice', q: 'A root begins with a consonant. Which set of prefixes does it take?',
      options: ['bet- / bi- / men-', 'bt- / by- / mn-', 'b- / t- / n-'], answer: 0,
      explain: 'The extra vowel is there to give the prefix something to stand on: betrouu7, birouu7, menrouu7.' },

    { type: 'conjugate', en: 'we drink', root: 'eshrab', person: 'ne7na', tense: 'present',
      options: ['mneshrab', 'beshrab', 'bteshrab', 'byeshrabo'], answer: 0 },

    { type: 'build', en: 'She always eats early.',
      tiles: ['hiyyé', 'dééyman', 'btéékol', 'bakkiir'], extra: ['byéékol'], answer: 'hiyyé dééyman btéékol bakkiir' },

    { type: 'gap', en: 'You are in a friend\'s kitchen and she is holding an empty cup.',
      lines: [
        { who: 'Maya', lb: 'shou bteshrab eS-Sobe7?', en: 'what do you drink in the morning?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['beshrab 2ahwe', 'bteshrab 2ahwe', 'byeshrab 2ahwe'], answer: 0 },

    { type: 'match',
      pairs: [['betrouu7é', 'you go — one woman'], ['birouu7o', 'they go'], ['menrouu7', 'we go'], ['brouu7', 'I go']] },

    { type: 'type', en: 'We walk home every day.', answer: 'mnemshé 3al-béét kell yoom' },

    { type: 'choice', q: 'Which sentence says that going to work is what you do as a rule?',
      options: ['brouu7 3ash-sheghl kell yoom', 'maa brouu7 3ash-sheghl', 'birouu7 3ash-sheghl'], answer: 0 },

    { type: 'conjugate', en: 'he walks', root: 'emshé', person: 'houwwé', tense: 'present',
      options: ['byemshé', 'btemshé', 'bemshé', 'byemsho'], answer: 0 },

    { type: 'choice', q: 'What does the b- on brouu7 tell a listener?',
      options: [
        'That going is something you do, generally or as a habit',
        'That you are going at this very moment',
        'That you intend to go later on'
      ], answer: 0,
      explain: 'What is happening at this second is marked differently, and gets its own unit further on.' }
  ]
});
