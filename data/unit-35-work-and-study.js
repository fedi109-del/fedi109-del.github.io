LEB.addUnit({
  id: 'u35',
  stage: 5,
  order: 35,
  title: 'Work and Study',
  goal: 'Say what you do, describe a working day from the alarm to the way home, and talk about the people you work with.',
  canDo: [
    'Say what your job is without reaching for a verb "to be"',
    'Describe your hours, your commute and how tired the day leaves you',
    'Say you are studying, job-hunting, or waiting on an interview',
    'Describe a manager or a colleague in a full sentence'
  ],

  grammar: [
    {
      heading: 'Saying what you do, without saying you are',
      body:
        'English needs a verb to state a profession: "I **am** an engineer". Lebanese needs nothing ' +
        'at all in the present. `ana mhandes` is a complete, ordinary sentence with no verb in it, ' +
        'and adding one would be wrong rather than formal.\n\n' +
        'When you want to name the workplace as well, a verb does appear, but it is the verb for ' +
        'working, not the verb for being: `beshteghel ka-mwaZZaf bi-maktab zghiir` — I work as an ' +
        'employee in a small office. That little `ka-` is "as a", and it is what lets you attach a ' +
        'role to an activity.\n\n' +
        'Professions come in threes: a masculine, a feminine, and a plural — and the plural is ' +
        'frequently not the masculine plus an ending. `moudiir` gives `moudara`, which no rule ' +
        'predicts. Store all three the way you store the three forms of a participle.\n\n' +
        'The verb "to be" reappears the moment you move into the past. `kent beshteghel ' +
        'bel-madrasé` — I used to work at the school. `kéén` inflects for the person and the verb ' +
        'behind it keeps its ordinary present shape; together they give you the habit you have ' +
        'left behind.',
      table: {
        headers: ['m', 'f', 'pl', 'meaning'],
        rows: [
          ['`mwaZZaf`', '`mwaZZafé`', '`mwaZZafiin`', 'employee, office worker'],
          ['`moudiir`', '`moudiira`', '`moudara`', 'manager'],
          ['`mhandes`', '`mhandsé`', '`mhandsiin`', 'engineer, architect'],
          ['`7elléé2`', '`7elléé2a`', '`7elléé2iin`', 'barber, hairdresser'],
          ['`met2aa3ed`', '`met2aa3dé`', '`met2aa3diin`', 'retired']
        ]
      },
      warning:
        'Not every profession in this course has all three forms recorded. `7akiim` (doctor) is ' +
        'given with its plural `7ekama` and nothing else. When you are unsure of a form, name the ' +
        'workplace instead of guessing an ending.'
    },

    {
      heading: 'The shape of a working day',
      body:
        'A day is described with a very small kit: two prepositions, one adverb and a handful of ' +
        'verbs you already own.\n\n' +
        '`men… la-…` marks the stretch — `men eS-Sobe7 la-l-masa`, from morning to evening. ' +
        '`bakkiir` is early, and it does duty for both getting up and arriving. Duration attaches ' +
        'to a person with a fixed idiom: `btéékhod ma3é noSS séé3a` — literally "it takes with me ' +
        'half an hour", which is how you say a commute lasts thirty minutes. Do not try to take ' +
        'that phrase apart; learn it whole.\n\n' +
        'Two words for tiredness sit next to each other and are not interchangeable. `met3eb` is ' +
        'an adjective and belongs to the job: `sheghlé met3eb` — my work is tiring. `bet3ab` is a ' +
        'verb and belongs to you: `bet3ab ktiir` — I get very tired. Putting the adjective on ' +
        'yourself says something quite different from what you meant.\n\n' +
        'As for pay, notice that the natural question does not use a noun for salary at all. ' +
        'People ask what you **take**: `addéé btéékhod besh-shahr?` — how much do you take a ' +
        'month? It is a direct question and it is asked more freely than an English speaker ' +
        'expects, usually among people who already know each other.',
      table: {
        headers: ['in English', 'in Lebanese'],
        rows: [
          ['I sleep early', '`bnéém bakkiir`'],
          ['I work from morning to evening', '`beshteghel men eS-Sobe7 la-l-masa`'],
          ['I take a service taxi', '`béékhod service`'],
          ['it takes me half an hour', '`btéékhod ma3é noSS séé3a`'],
          ['I get back home', '`berja3 3al-béét`'],
          ['I get very tired', '`bet3ab ktiir`'],
          ['once a week', '`marra bel-jem3a`']
        ]
      }
    },

    {
      heading: 'Studying, and looking for work',
      body:
        'The verb for studying is `edros`, an ordinary أ-root that behaves exactly like `a3ref` and ' +
        '`erja3`. What makes it useful at this level is that studying almost always comes attached ' +
        'to a purpose, and purpose is where the `b-` disappears.\n\n' +
        '`bedros kerméél eshteghel bi-maktab` — I am studying so that I can work in an office. The ' +
        'first verb keeps its `b-`, the second loses it. Same again with `baddé` and `léézem`: ' +
        '`baddé eshteghel`, `léézem edros`. This is the single most common sentence shape in any ' +
        'conversation about someone who is not yet doing the job they want.\n\n' +
        'Job-hunting has its own verb: `fattesh 3a`, to look for, which keeps its preposition ' +
        'wherever it goes. `3am bfattesh 3a sheghl` — I am looking for work. And the thing you are ' +
        'waiting for is a `mou2éébalé`, an interview, which pairs naturally with the participle ' +
        'from the last unit: `naaTer el-mou2éébalé`.\n\n' +
        'One caution about the continuous. `3am` is the one marker that does **not** strip the ' +
        '`b-`: `3am bfattesh`, never `3am fattesh`. Every other trigger in this unit takes it off.',
      table: {
        headers: ['person', 'I study', 'so that I study'],
        rows: [
          ['ana', '`bedros`', '`kerméél edros`'],
          ['enta', '`btedros`', '`kerméél tedros`'],
          ['enté', '`btedrsé`', '`kerméél tedrsé`'],
          ['houwwé', '`byedros`', '`kerméél yedros`'],
          ['hiyyé', '`btedros`', '`kerméél tedros`'],
          ['ne7na', '`mnedros`', '`kerméél nedros`'],
          ['ento', '`btedroso`', '`kerméél tedroso`'],
          ['henné', '`byedroso`', '`kerméél yedroso`']
        ]
      }
    },

    {
      heading: 'The office runs on participles',
      body:
        'Almost everything you need to say about a workplace turns out to be a state rather than ' +
        'an action, which is why the participles from the last unit carry this whole topic.\n\n' +
        '`l-moudiir mesh mawjouud` is how an office says the manager is out. `naaTer el-mou2éébalé` ' +
        'is how you say you are waiting on an interview, with no verb anywhere. `mTawwal bel-maktab` ' +
        'says somebody is running late at work, and `mesta3jel` says the opposite about you.\n\n' +
        'Describing a colleague works the same way, with one difference worth knowing: this course ' +
        'gives you no single word for "colleague". Lebanese names the role instead — `l-moudiira`, ' +
        '`l-mwaZZafiin` — and then hangs the description on it. `l-moudiira Tayybé w-mrattabé` — ' +
        'the manager is kind and organised. When you do not know the role, `7ada` covers it: ' +
        '`fii 7ada mesh mawjouud lyoom` — somebody is off today.\n\n' +
        'Keep the negation straight. Participles and adjectives take `mesh`; the verbs around them ' +
        'take `maa`. `mesh mesta3jel` but `maa beshteghel yoom es-sabet`.',
      examples: [
        { lb: 'sheghlé met3eb bass b7ebbo', ar: 'شِغلي مِتْعِب بَس بْحِبُّه', en: 'My job is tiring, but I like it.' },
        { lb: 'naaTer el-mou2éébalé men eS-Sobe7', ar: 'ناطِر المُقابَلة مِن الصُّبح', en: 'I have been waiting for the interview since morning.' },
        { lb: 'l-moudiira mTawwlé bel-maktab lyoom', ar: 'المُديرة مْطَوّْلة بالمَكْتَب اليوم', en: 'The manager is running late at the office today.' },
        { lb: 'maa beshteghel yoom es-sabet', ar: 'ما بِشْتِغِل يوم السَّبت', en: 'I do not work on Saturdays.' }
      ]
    }
  ],

  vocab: [
    { lb: 'beshteghel', ar: 'بِشْتِغِل', en: 'I work', pos: 'v', note: 'root eshteghel; he works byeshteghel' },
    { lb: 'sheghl', ar: 'شِغل', en: 'work, job', pos: 'n', gender: 'm', note: 'pl ashghéél; my job is sheghlé' },
    { lb: 'mwaZZaf', ar: 'مْوَظَّف', en: 'employee, office worker', pos: 'n', gender: 'm', note: 'f mwaZZafé, pl mwaZZafiin' },
    { lb: 'moudiir', ar: 'مُدير', en: 'manager', pos: 'n', gender: 'm', note: 'f moudiira, pl moudara' },
    { lb: 'mhandes', ar: 'مْهَنْدِس', en: 'engineer, architect', pos: 'n', gender: 'm', note: 'f mhandsé, pl mhandsiin' },
    { lb: '7akiim', ar: 'حَكيم', en: 'doctor', pos: 'n', gender: 'm', note: 'pl 7ekama' },
    { lb: 'maSna3', ar: 'مَصْنَع', en: 'factory', pos: 'n', gender: 'm', note: 'pl maSaane3' },
    { lb: 'maktab', ar: 'مَكْتَب', en: 'office', pos: 'n', gender: 'm', note: 'pl makééteb' },
    { lb: 'ka-', ar: 'كَـ', en: 'as a', pos: 'prep', note: 'ka-mwaZZaf, ka-mhandsé' },
    { lb: 'bedros', ar: 'بِدْرُس', en: 'I study', pos: 'v', note: 'root edros; he studies byedros' },
    { lb: 'madrasé', ar: 'مَدْرَسة', en: 'school', pos: 'n', gender: 'f', note: 'pl madééres' },
    { lb: 'mou2éébalé', ar: 'مُقابَلة', en: 'interview', pos: 'n', gender: 'f', note: 'pl mou2éébaléét' },
    { lb: 'fattesh 3a', ar: 'فَتِّش عَ', en: 'to look for', pos: 'v', note: 'the 3a never comes off' },
    { lb: 'bakkiir', ar: 'بَكّير', en: 'early', pos: 'adv' },
    { lb: 'met3eb', ar: 'مِتْعِب', en: 'tiring', pos: 'adj', gender: 'm', note: 'said of the work, not of you; f mete3bé' },
    { lb: 'bet3ab', ar: 'بِتْعَب', en: 'I get tired', pos: 'v', note: 'root et3ab; said of you, not of the work' }
  ],

  phrases: [
    {
      lb: 'shou bteshteghel?', ar: 'شو بِتْشْتِغِل؟', en: 'what do you do for a living?',
      when: 'to a man; to a woman, shou bteshteghlé',
      reply: 'beshteghel ka-mwaZZaf bi-maktab', replyEn: 'I work as an employee in an office'
    },
    {
      lb: '3am bfattesh 3a sheghl', ar: 'عَم بْفَتِّش عَ شِغل', en: 'I am looking for work',
      when: 'the ordinary, unembarrassed way to say it'
    },
    {
      lb: '3endé mou2éébalé boukra', ar: 'عِنْدي مُقابَلة بُكْرة', en: 'I have an interview tomorrow',
      when: '3end- is what carries "having" an appointment, as it carries everything else'
    },
    {
      lb: 'beshteghel men eS-Sobe7 la-l-masa', ar: 'بِشْتِغِل مِن الصُّبح لَلمَسا', en: 'I work from morning to evening',
      when: 'men… la-… is the frame for any stretch, of hours or of months'
    },
    {
      lb: 'addéé btéékhod besh-shahr?', ar: 'قَدّيه بْتاخُد بالشَّهر؟', en: 'how much do you take a month?',
      when: 'the pay question, asked between people who know each other'
    },
    {
      lb: 'l-moudiir mesh mawjouud', ar: 'المُدير مِش مَوْجود', en: 'the manager is not in',
      when: 'what a receptionist tells you before you have finished the sentence'
    }
  ],

  dialogue: {
    title: 'The question everyone asks within ten minutes',
    setting: 'A wedding, a waiting room, a taxi — it does not matter. This conversation happens everywhere.',
    lines: [
      { who: 'Rita', lb: 'shou bteshteghel?', ar: 'شو بتشتغل؟', en: 'what do you do for a living?' },
      { who: 'You', you: true, lb: 'beshteghel ka-mhandes b-maktab zghiir.', ar: 'بشتغل كمهندس بمكتب زغير', en: 'I work as an engineer in a small office.',
        note: 'ka- glued to the front means "as a". No article after it.' },
      { who: 'Rita', lb: 'w kiif esh-sheghl? met3eb?', ar: 'وكيف الشغل؟ متعب؟', en: 'and how is the work? Tiring?' },
      { who: 'You', you: true, lb: 'met3eb shwayy. beshteghel men eS-Sobe7 la-l-masa, w bet3ab.', ar: 'متعب شوي. بشتغل من الصبح لالمسا، وبتعب', en: 'a bit tiring. I work from morning to evening, and I get tired.' },
      { who: 'Rita', lb: 'w l-moudiir mnii7 ma3ak?', ar: 'والمدير منيح معك؟', en: 'and is the manager good to you?' },
      { who: 'You', you: true, lb: 'l-7amdella. bass halla2 3am bfattesh 3a sheghl tééné.', ar: 'الحمدلله. بس هلق عم بفتش ع شغل تاني', en: 'thank God. But right now I am looking for another job.' },
      { who: 'Rita', lb: '3an jad? fii shii?', ar: 'عن جد؟ في شي؟', en: 'really? Is there anything?' },
      { who: 'You', you: true, lb: '3endé mou2éébalé boukra. nshalla.', ar: 'عندي مقابلة بكرا. إن شاء الله', say: 'عندي مأابلة بكرا. إن شاء الله', en: 'I have an interview tomorrow. God willing.' },
      { who: 'Rita', lb: 'yaa réét! khaalé 3endo maktab, bkhabbro.', ar: 'يا ريت! خالي عندو مكتب، بخبرو', en: 'I hope so! My uncle has an office, I will tell him.',
        note: 'This is not small talk. She means it, and something may well come of it.' }
    ]
  },

  culture: {
    heading: 'Who you know is not a cynical remark',
    icon: 'work',
    body:
      'Rita\'s last line is the most Lebanese thing in this unit. Jobs move through people — the ' +
      'cousin, the neighbour, the man your father used to work with — and a stranger offering to ' +
      'mention you to their uncle is offering something real. The word for it is `wasTa`, and it is ' +
      'complained about constantly and used by everybody, including the people complaining.\n\n' +
      'Which is why `shou bteshteghel?` arrives so early in a conversation. It is not the status ' +
      'question it can be elsewhere. It is somebody working out where you fit and whether they know ' +
      'anyone useful to you.\n\n' +
      'Two smaller things. Salary is discussed far more openly than in northern Europe — `addéé ' +
      'btéékhod besh-shahr?` is a question you will be asked — and after 2019 it is usually asked ' +
      'about which currency you are paid in, which matters more than the number.\n\n' +
      'And working hours are long, lunch is late, and leaving at five without saying anything is ' +
      'noticed. `ya3Tiik el-3aafyé` on your way out costs nothing and does a lot.',
  },

  drills: [
    { type: 'choice', q: 'How do you say "I am an engineer"?',
      options: ['ana mhandes', 'ana kéén mhandes', 'ana bkouun mhandes'], answer: 0,
      explain: 'There is no present tense of "to be". The two words are the whole sentence.' },

    { type: 'conjugate', en: 'she studies', root: 'edros', person: 'hiyyé', tense: 'present',
      options: ['btedros', 'bedros', 'byedros', 'mnedros'], answer: 0,
      explain: 'The form for "you (m)" and the form for "she" are identical, as always.' },

    { type: 'match',
      pairs: [['maktab', 'office'], ['maSna3', 'factory'], ['madrasé', 'school'], ['mou2éébalé', 'interview']] },

    { type: 'build', en: 'I work as an employee in a small office.',
      tiles: ['beshteghel', 'ka-mwaZZaf', 'bi-maktab', 'zghiir'], extra: ['ana kéén'],
      answer: 'beshteghel ka-mwaZZaf bi-maktab zghiir' },

    { type: 'choice', q: 'Your job wears you out. Which sentence says so?',
      options: ['sheghlé met3eb', 'ana met3eb', 'sheghlé bet3ab'], answer: 0,
      explain: 'met3eb is an adjective for the work. bet3ab is the verb, and it belongs to you.' },

    { type: 'gap', en: 'You meet Nour at a wedding and she asks about your work.',
      lines: [
        { who: 'Nour', lb: 'shou bteshteghel?', en: 'what do you do for a living?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['beshteghel ka-mhandes bi-maktab', 'ana beshteghel mhandes', 'bedros ka-mhandes'], answer: 0,
      explain: 'ka- is what attaches the role to the activity, and the workplace follows with bi-.' },

    { type: 'type', en: 'I am looking for work.', answer: '3am bfattesh 3a sheghl' },

    { type: 'choice', q: 'Which one keeps the b- on the second verb?',
      options: ['3am bfattesh 3a sheghl', 'baddé bfattesh 3a sheghl', 'léézem bfattesh 3a sheghl'], answer: 0,
      explain: '3am is the only marker in the language that leaves the b- alone.' },

    { type: 'conjugate', en: 'so that we work', root: 'eshteghel', person: 'ne7na', tense: 'after kerméél',
      options: ['kerméél neshteghel', 'kerméél mneshteghel', 'kerméél beshteghel', 'kerméél teshteghel'], answer: 0 },

    { type: 'match',
      pairs: [['moudiir', 'manager'], ['mwaZZaf', 'employee'], ['mhandes', 'engineer'], ['met2aa3ed', 'retired']] },

    { type: 'build', en: 'I have been waiting for the interview since morning.',
      tiles: ['naaTer', 'el-mou2éébalé', 'men', 'eS-Sobe7'], extra: ['bnaaTer'],
      answer: 'naaTer el-mou2éébalé men eS-Sobe7' },

    { type: 'gap', en: 'You phone the office and the manager is out.',
      lines: [
        { who: 'Layla', lb: 'l-moudiir mesh mawjouud lyoom', en: 'the manager is not in today' },
        { who: 'You', you: true, blank: true }
      ],
      options: [
        'Tayyeb, ra7 talfen boukra bakkiir',
        'Tayyeb, ra7 btalfen boukra bakkiir',
        'Tayyeb, maa mawjouud boukra'
      ], answer: 0,
      explain: 'ra7 strips the b-, and mesh is what negates a participle, not maa.' },

    { type: 'type', en: 'I do not work on Saturdays.', answer: 'maa beshteghel yoom es-sabet' },

    { type: 'choice', q: 'What is the plural of moudiir?',
      options: ['moudara', 'moudiiriin', 'moudiiraat'], answer: 0,
      explain: 'A plural no rule predicts. Professions are stored as triples for exactly this reason.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence says you used to work at the school?',
      options: ['kent beshteghel bel-madrasé', 'beshteghel bel-madrasé', 'ra7 eshteghel bel-madrasé'], answer: 0,
      explain: 'kéén plus an ordinary present gives the habit you have left behind.' },

    { type: 'build', en: 'I am studying so that I can work in an office.',
      tiles: ['bedros', 'kerméél', 'eshteghel', 'bi-maktab'], extra: ['beshteghel'],
      answer: 'bedros kerméél eshteghel bi-maktab' },

    { type: 'conjugate', en: 'they study', root: 'edros', person: 'henné', tense: 'present',
      options: ['byedroso', 'btedroso', 'mnedros', 'byedros'], answer: 0 },

    { type: 'match',
      pairs: [['bakkiir', 'early'], ['sheghl', 'work, job'], ['ka-', 'as a'], ['fattesh 3a', 'to look for']] },

    { type: 'gap', en: 'Ghassan is complaining about his hours and wants to know about yours.',
      lines: [
        { who: 'Ghassan', lb: 'beshteghel men eS-Sobe7 la-l-masa. w-enta?', en: 'I work from morning to evening. And you?' },
        { who: 'You', you: true, blank: true }
      ],
      options: [
        'ana kaméén, w-bet3ab ktiir',
        'ana kaméén, w-met3eb ktiir sheghlé bet3ab',
        'ana kaméén, w-maa met3eb'
      ], answer: 0,
      explain: 'The verb bet3ab is what you use about yourself. The second option piles both words on at once and says nothing.' },

    { type: 'choice', q: 'How do you say "the manager is running late at the office"?',
      options: ['l-moudiir mTawwal bel-maktab', 'l-moudiir betTawwel bel-maktab', 'l-moudiir maa mTawwal bel-maktab'], answer: 0,
      explain: 'A participle for the state, and mesh would be the negation if you needed one.' },

    { type: 'type', en: 'How much do you take a month?', answer: 'addéé btéékhod besh-shahr' },

    { type: 'choice', q: 'Which is correct?',
      options: ['baddé eshteghel bi-maSna3', 'baddé beshteghel bi-maSna3', 'baddé neshteghel bi-maSna3'], answer: 0,
      explain: 'baddé takes the b- off, and the verb still has to agree with me, not with us.' },

    { type: 'build', en: 'My job is tiring, but I like it.',
      tiles: ['sheghlé', 'met3eb', 'bass', 'b7ebbo'], extra: ['bet3ab'],
      answer: 'sheghlé met3eb bass b7ebbo' },

    { type: 'choice', q: 'This course gives you no word for "colleague". What do you say instead?',
      options: [
        'Name the role: l-moudiira, l-mwaZZafiin, and describe them',
        'Use the English word with a Lebanese ending',
        'Use sheghl with a possessive'
      ], answer: 0,
      explain: 'Lebanese is comfortable naming the role. Inventing a word is the one thing that will not work.' }
  ]
});
