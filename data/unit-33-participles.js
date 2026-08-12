LEB.addUnit({
  id: 'u33',
  stage: 5,
  order: 33,
  title: 'The Third Way',
  goal: 'Use the participle where Lebanese actually prefers it, instead of translating every English tense with a conjugated verb.',
  canDo: [
    'Recognise a participle and produce its three forms',
    'Say where you live, what you have booked, and how long you have been waiting',
    'Tell when a participle is doing the work of a present and when it is doing the work of a perfect',
    'Negate a participle with mesh instead of maa'
  ],

  grammar: [
    {
      heading: 'Eight persons, three forms',
      body:
        'Every verb you have built in this course has eight forms, one per person. A participle has ' +
        'three. One masculine, one feminine, one plural — and that is the whole paradigm.\n\n' +
        '`ana sééken`, `enta sééken`, `houwwé sééken`: one word, three different subjects. The ' +
        'feminine `séékné` covers `ana`, `enté` and `hiyyé` together, and the plural `séékniin` ' +
        'covers `ne7na`, `ento` and `henné` together. Nothing in the word points at a person.\n\n' +
        'That makes participles the cheapest thing in the language to learn and the easiest thing ' +
        'to misread. A conjugated verb announces its subject before you have heard the pronoun; a ' +
        'participle announces only gender and number, so the pronoun and the situation have to do ' +
        'the rest of the work.\n\n' +
        'There is one more structural fact to take on board before anything else. A participle is ' +
        'not a verb, and Lebanese negates it the way it negates an adjective. `maa` goes in front ' +
        'of verbs and suffix verbs. In front of a participle you need `mesh`.',
      table: {
        headers: ['person', 'form of "living"', 'what you would say'],
        rows: [
          ['ana (m)', '`sééken`', '`ana sééken bi-Beirut`'],
          ['ana (f)', '`séékné`', '`ana séékné bi-Beirut`'],
          ['enta', '`sééken`', '`enta sééken bi-Beirut`'],
          ['enté', '`séékné`', '`enté séékné bi-Beirut`'],
          ['houwwé', '`sééken`', '`houwwé sééken bi-Beirut`'],
          ['hiyyé', '`séékné`', '`hiyyé séékné bi-Beirut`'],
          ['ne7na / ento / henné', '`séékniin`', '`ne7na séékniin bi-Beirut`']
        ]
      },
      warning:
        '`mesh séékné hoon` — I do not live here. `maa séékné` is the mistake that marks a ' +
        'foreigner out in one word: `maa` is for verbs, and this is **not a verb**.'
    },

    {
      heading: 'Sometimes now, sometimes already done',
      body:
        'Here is the part that unsettles people. The same participle can land in English as a ' +
        'present or as a perfect, and nothing in the Lebanese form tells you which one is coming.\n\n' +
        '`séékné bi-Beirut` comes out as "I live in Beirut" — a flat present. `7ééjez Tiyyaara` ' +
        'comes out as "I have booked a flight" — an English present perfect. Same grammar, two ' +
        'different English tenses, and no signal anywhere.\n\n' +
        'The logic underneath is not tense at all. A participle names a **state the subject is in ' +
        'right now**. Living somewhere is such a state. So is having booked: the booking is over ' +
        'and done, and what remains is you, standing there as the holder of a reservation. English ' +
        'splits those two situations with different tenses because English is describing when ' +
        'things happened. Lebanese is describing what you currently are.\n\n' +
        'This is also why `naaTer` covers "I am waiting" and "I have been waiting" at the same ' +
        'time. Waiting is one continuous state; the language sees no reason to cut it in half.\n\n' +
        'So when you meet a participle, stop asking which tense it is. Ask what state it names, ' +
        'then reach for whichever English tense fits that state.',
      examples: [
        { lb: 'ana séékné 2béél el-madrasé', ar: 'أنا ساكْنة قْبال المَدْرَسة', en: 'I live opposite the school.', note: 'a woman speaking — a plain present' },
        { lb: '7ééjez Tiyyaara la-boukra', ar: 'حاجِز طِيّارة لَبُكْرة', en: 'I have booked a flight for tomorrow.', note: 'the booking is done; the state is current' },
        { lb: 'elé noSS séé3a naaTer bel-maktab', ar: 'إلي نُصّ ساعة ناطِر بالمَكْتَب', en: 'I have been waiting half an hour at the office.' },
        { lb: 'kell shii jééhez', ar: 'كِل شي جاهِز', en: 'Everything is ready.' }
      ]
    },

    {
      heading: 'The rule that does not exist',
      body:
        'You are owed an honest answer here, because the usual answer is dishonest.\n\n' +
        'There is **no rule** that predicts when Lebanese prefers a participle to a conjugated ' +
        'verb. Both `be7joz Taawlé` and `ana 7ééjez Taawlé` are correct Lebanese. They are not ' +
        'interchangeable — the first is "I book, I am booking", the second is "I have booked" — ' +
        'but nothing in the shape of a verb tells you in advance that it behaves this way, and no ' +
        'ending marks the ones that do. It is habit, verb by verb, word by word.\n\n' +
        'Some verbs are met almost only as participles: nobody conjugates "wait" in ordinary ' +
        'speech, they say `naaTer`. Others are met almost only as verbs. Most sit in between and ' +
        'shift according to the situation.\n\n' +
        'So handle this as vocabulary, not as grammar. Every time you hear a participle standing ' +
        'where you were expecting a verb, write down the **whole sentence**, not the word alone: ' +
        'the sentence is what records the situation it belongs to. Forty of those and you sound ' +
        'like someone who grew up with the language.\n\n' +
        'A learner waiting for the rule will wait a long time. A learner keeping the list gets ' +
        'there first.',
      table: {
        headers: ['the verb', 'the participle', 'the difference in English'],
        rows: [
          ['`be7joz`', '`7ééjez`', 'I book / I am booking — versus — I have booked'],
          ['`be23od`', '`aa3ed`', 'I sit down — versus — I am sitting, I am staying put'],
          ['`benzal 3a`', '`néézel 3a`', 'I go down to — versus — I am on my way down to'],
          ['`bSiir`', '`Saayer`', 'I become — versus — it has become, it has turned into']
        ]
      }
    },

    {
      heading: 'Twelve to start the list with',
      body:
        'These twelve carry an unreasonable share of everyday speech. Learn the masculine, and ' +
        'the other two forms follow the same shape every time: the feminine loses a vowel and ' +
        'takes `-é` or `-a`, the plural takes `-iin`.\n\n' +
        'Notice how many of them describe a position rather than an action — sitting, waiting, ' +
        'ready, present, on the way down. That is the participle doing what it does best, and it ' +
        'is why so much ordinary Lebanese gets through a whole exchange without a conjugated verb ' +
        'anywhere in it. Somebody asks where you are, you answer `néézel`. Somebody asks whether ' +
        'the table is booked, you answer `7ééjez`. Nothing has been left out; the language simply ' +
        'was not going to spend a verb on that.\n\n' +
        'A second family works the other way round. `me2lé` (fried), `meshwé` (grilled) and ' +
        '`m3a22am` (sanitised) name a state that somebody else put the thing into. Same three ' +
        'forms, same behaviour, but the subject is the receiver of the action rather than its ' +
        'doer. You will meet most of them on menus and in shops, where what matters about a thing ' +
        'is what has been done to it.',
      table: {
        headers: ['m', 'f', 'pl', 'the state it names'],
        rows: [
          ['`sééken`', '`séékné`', '`séékniin`', 'living somewhere'],
          ['`7ééjez`', '`7ééjzé`', '`7ééjziin`', 'holding a booking'],
          ['`naaTer`', '`naaTra`', '`naaTriin`', 'waiting'],
          ['`aa3ed`', '`aa3dé`', '`aa3diin`', 'sitting, staying put'],
          ['`7aases`', '`7aassé`', '`7aassiin`', 'feeling something'],
          ['`néézel`', '`néézlé`', '`néézliin`', 'on the way down'],
          ['`Saayer`', '`Saara`', '`Saayriin`', 'having become'],
          ['`7aabeb`', '`7aabbé`', '`7aabbiin`', 'fond of, taken with'],
          ['`jééhez`', '`jééhzé`', '`jééhziin`', 'ready'],
          ['`mawjouud`', '`mawjouudé`', '`mawjouudiin`', 'present, available'],
          ['`met2aa3ed`', '`met2aa3dé`', '`met2aa3diin`', 'retired'],
          ['`mesta3jel`', '`mesta3jlé`', '`mesta3jliin`', 'in a hurry']
        ]
      },
      warning:
        'The feminine is not always the masculine plus a letter. `naaTer` gives `naaTra`, not ' +
        '*naaTeré*; `Saayer` gives `Saara`. The vowel inside moves. Store all three forms and do ' +
        'not try to build them.'
    }
  ],

  vocab: [
    { lb: 'sééken', ar: 'ساكِن', en: 'living, resident', pos: 'adj', gender: 'm', note: 'f séékné, pl séékniin' },
    { lb: '7ééjez', ar: 'حاجِز', en: 'having booked', pos: 'adj', gender: 'm', note: 'f 7ééjzé, pl 7ééjziin' },
    { lb: 'naaTer', ar: 'ناطِر', en: 'waiting', pos: 'adj', gender: 'm', note: 'f naaTra, pl naaTriin' },
    { lb: 'aa3ed', ar: 'قاعِد', en: 'sitting, staying put', pos: 'adj', gender: 'm', note: 'f aa3dé, pl aa3diin' },
    { lb: '7aases', ar: 'حاسِس', en: 'feeling', pos: 'adj', gender: 'm', note: 'f 7aassé, pl 7aassiin' },
    { lb: 'néézel', ar: 'نازِل', en: 'on the way down', pos: 'adj', gender: 'm', note: 'f néézlé, pl néézliin' },
    { lb: 'Saayer', ar: 'صايِر', en: 'having become', pos: 'adj', gender: 'm', note: 'f Saara, pl Saayriin' },
    { lb: '7aabeb', ar: 'حابِب', en: 'fond of, taken with', pos: 'adj', gender: 'm', note: 'f 7aabbé, pl 7aabbiin' },
    { lb: 'jééhez', ar: 'جاهِز', en: 'ready', pos: 'adj', gender: 'm', note: 'f jééhzé, pl jééhziin' },
    { lb: 'mawjouud', ar: 'مَوْجود', en: 'present, available, in', pos: 'adj', gender: 'm', note: 'f mawjouudé, pl mawjouudiin' },
    { lb: 'met2aa3ed', ar: 'مِتْقاعِد', en: 'retired', pos: 'adj', gender: 'm', note: 'f met2aa3dé, pl met2aa3diin' },
    { lb: 'mesta3jel', ar: 'مِسْتَعْجِل', en: 'in a hurry', pos: 'adj', gender: 'm', note: 'f mesta3jlé, pl mesta3jliin' },
    { lb: 'mfawwal', ar: 'مْفَوَّل', en: 'full, fully booked', pos: 'adj', gender: 'm', note: 'f mfawwlé, pl mfawwliin' },
    { lb: 'm3a22am', ar: 'مْعَقَّم', en: 'sanitised', pos: 'adj', gender: 'm', note: 'a receiver participle: somebody else did it' },
    { lb: 'mesh', ar: 'مِش', en: 'not', pos: 'adv', note: 'the negation for participles, adjectives and nouns' },
    { lb: 'Tiyyaara', ar: 'طِيّارة', en: 'plane, flight', pos: 'n', gender: 'f', note: 'pl Tiyyaaraat' }
  ],

  phrases: [
    {
      lb: 'wéén sééken?', ar: 'وين ساكِن؟', en: 'where do you live?',
      when: 'to a man; to a woman it is wéén séékné',
      reply: 'ana sééken bi-Beirut', replyEn: 'I live in Beirut'
    },
    {
      lb: '7ééjez Tiyyaara la-boukra', ar: 'حاجِز طِيّارة لَبُكْرة', en: 'I have booked a flight for tomorrow',
      when: 'the booking is behind you and still standing'
    },
    {
      lb: 'elé noSS séé3a naaTer', ar: 'إلي نُصّ ساعة ناطِر', en: 'I have been waiting half an hour',
      when: 'el- carries the duration; the participle carries the waiting'
    },
    {
      lb: 'kell shii jééhez', ar: 'كِل شي جاهِز', en: 'everything is ready',
      when: 'food, a room, a bag by the door'
    },
    {
      lb: 'mesh mawjouud halla2', ar: 'مِش مَوْجود هَلَّق', en: 'he is not in right now',
      when: 'on the phone, at an office — the standard way of saying somebody is out'
    },
    {
      lb: 'néézel 3a Beirut', ar: 'نازِل عَ بيروت', en: 'I am on my way down to Beirut',
      when: 'said once you are already moving, not before you set off'
    },
    {
      lb: 'l-maT3am mfawwal lyoom', ar: 'المَطعَم مْفَوَّل اليوم', en: 'the restaurant is fully booked today',
      when: 'the answer you get when you phone too late'
    }
  ],

  drills: [
    { type: 'choice', q: 'How many forms does a Lebanese participle have?',
      options: ['Three: masculine, feminine, plural', 'Eight, one per person', 'Two: singular and plural'], answer: 0,
      explain: 'Eight persons collapse into three forms. The pronoun and the situation say who.' },

    { type: 'conjugate', en: 'we have booked (a table)', root: 'e7joz', person: 'ne7na', tense: 'participle',
      options: ['7ééjziin', '7ééjez', '7ééjzé', 'mne7joz'], answer: 0,
      explain: 'mne7joz is the verb — we book. The participle 7ééjziin is what carries the perfect.' },

    { type: 'match',
      pairs: [['sééken', 'living somewhere'], ['naaTer', 'waiting'], ['jééhez', 'ready'], ['mawjouud', 'present, available']] },

    { type: 'gap', en: 'Hala asks you where you live. You are a man.',
      lines: [
        { who: 'Hala', lb: 'wéén sééken?', en: 'where do you live?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['ana sééken bi-Beirut', 'ana séékné bi-Beirut', 'ana séékniin bi-Beirut'], answer: 0,
      explain: 'Jad is one man, so the masculine form. The participle does not change for person, only for gender and number.' },

    { type: 'build', en: 'They have booked a flight for tomorrow.',
      tiles: ['henné', '7ééjziin', 'Tiyyaara', 'la-boukra'], extra: ['bye7jozo'], answer: 'henné 7ééjziin Tiyyaara la-boukra' },

    { type: 'choice', q: 'How do you say "I do not live here"?',
      options: ['mesh sééken hoon', 'maa sééken hoon', 'maa bseken hoon'], answer: 0,
      explain: 'A participle is negated like an adjective. maa is reserved for verbs and suffix verbs.' },

    { type: 'type', en: 'Everything is ready.', answer: 'kell shii jééhez' },

    { type: 'choice', q: 'Which one means "we book a table" and not "we have booked a table"?',
      options: ['mne7joz Taawlé', '7ééjziin Taawlé', 'ne7na 7ééjziin Taawlé'], answer: 0,
      explain: 'The conjugated verb is the plain present. The participle is the one that reads as a perfect.' },

    { type: 'conjugate', en: 'we are sitting (we have been sitting)', root: 'e23od', person: 'ne7na', tense: 'participle',
      options: ['aa3diin', 'aa3ed', 'aa3dé', 'mne23od'], answer: 0,
      explain: 'mne23od means we sit down. aa3diin is the state of being seated.' },

    { type: 'match',
      pairs: [['aa3ed', 'sitting, staying put'], ['néézel', 'on the way down'], ['met2aa3ed', 'retired'], ['mesta3jel', 'in a hurry']] },

    { type: 'gap', en: 'You phone an office and ask for the manager.',
      lines: [
        { who: 'Rita', lb: 'l-moudiir mesh mawjouud halla2', en: 'the manager is not in right now' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Tayyeb, ra7 e7ké ma3o ba3déén', 'Tayyeb, mesh mawjouud', 'Tayyeb, mbala'], answer: 0,
      explain: 'mbala only contradicts a negative question, and repeating mesh mawjouud says nothing. ra7 takes the bare verb: e7ké.' },

    { type: 'build', en: 'I have been waiting half an hour at the office.',
      tiles: ['elé', 'noSS', 'séé3a', 'naaTer', 'bel-maktab'], extra: ['kent'], answer: 'elé noSS séé3a naaTer bel-maktab' },

    { type: 'choice', q: 'Why does this course refuse to give you a rule for participle versus verb?',
      options: [
        'Because the choice is lexical — it is learned verb by verb, not derived',
        'Because participles are always past and verbs are always present',
        'Because participles belong to formal speech only'
      ], answer: 0,
      explain: 'Both forms are correct Lebanese. Which one a given verb prefers is habit, and habit is memorised.' },

    { type: 'type', en: 'He is not in right now.', answer: 'mesh mawjouud halla2', accept: ['mesh mawjouud halla2'] }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence says that the booking already exists?',
      options: ['ana 7ééjez Taawlé', 'be7joz Taawlé', 'baddé e7joz Taawlé'], answer: 0,
      explain: 'be7joz is I book, baddé e7joz is I want to book. Only the participle reports a booking already made.' },

    { type: 'gap', en: 'Ghassan phones to find out whether you are close.',
      lines: [
        { who: 'Ghassan', lb: 'wéén Sort?', en: 'how far have you got?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['néézel 3a Beirut halla2', 'sééken bi-Beirut', 'naaTer bel-béét'], answer: 0,
      explain: 'He is asking about movement, not about your address or your patience.' },

    { type: 'type', en: 'I have been waiting half an hour.', answer: 'elé noSS séé3a naaTer', accept: ['ile noss se3a nater'] },

    { type: 'match',
      pairs: [['7ééjzé', 'she has booked'], ['séékniin', 'they live'], ['naaTra', 'she is waiting'], ['jééhziin', 'they are ready']] },

    { type: 'conjugate', en: 'they have booked', root: 'e7joz', person: 'henné', tense: 'participle',
      options: ['7ééjziin', '7ééjez', 'bye7jozo', '7ééjzé'], answer: 0 },

    { type: 'choice', q: 'A friend says her sister does not live in the mountain. Which is right?',
      options: ['mesh séékné bel-jabal', 'maa séékné bel-jabal', 'maa bteskon bel-jabal'], answer: 0,
      explain: 'mesh for participles and adjectives; maa for verbs and suffix verbs.' },

    { type: 'build', en: 'She is not living in Beirut.',
      tiles: ['hiyyé', 'mesh', 'séékné', 'bi-Beirut'], extra: ['maa'], answer: 'hiyyé mesh séékné bi-Beirut' },

    { type: 'choice', q: 'What does naaTer cover in English?',
      options: [
        'Both "I am waiting" and "I have been waiting"',
        'Only "I waited", never the present',
        'Only "I will wait"'
      ], answer: 0,
      explain: 'Waiting is one continuous state, and Lebanese does not cut it into tenses.' },

    { type: 'choice', q: 'What is the feminine of aa3ed?',
      options: ['aa3dé', 'aa3diin', 'aa3edé'], answer: 0,
      explain: 'The vowel inside moves when the ending is added. Store the forms, do not build them.' },

    { type: 'gap', en: 'You call a restaurant on a Saturday evening.',
      lines: [
        { who: 'Elie', lb: 'l-maT3am mfawwal lyoom', en: 'the restaurant is fully booked today' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Tayyeb, fii majéél e7joz la-boukra?', 'Tayyeb, ana mawjouud', 'Tayyeb, mesh naaTer'], answer: 0,
      explain: 'fii majéél is the polite request frame, and the verb after it loses its b-: e7joz, not be7joz.' }
  ]
});
