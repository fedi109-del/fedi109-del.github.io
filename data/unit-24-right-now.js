LEB.addUnit({
  id: 'u24',
  stage: 4,
  order: 24,
  title: 'Happening Right Now',
  goal: 'Say what is going on at this exact minute, and deny it when it is not.',
  canDo: [
    'Turn any present verb into an action in progress with a single word',
    'Keep apart what you do and what you are doing',
    'Say what you are not doing right now'
  ],

  grammar: [
    {
      heading: 'One word, and the verb goes live',
      body:
        'Every present-tense verb you have built so far has been ambiguous in a way English is ' +
        'not. `beshteghel` is both "I work" and "I am working". `béékol` is both "I eat" and "I ' +
        'am eating". Which one it means has been left to the situation.\n\n' +
        'Lebanese settles it with one small word placed in front of the verb: `3am`. It never ' +
        'changes shape. It has no person, no gender, no plural, and it takes nothing from the ' +
        'verb behind it. The verb keeps its prefix, its ending, its whole body; `3am` stands in ' +
        'front and says *at this moment*.\n\n' +
        'That is the entire mechanism. There is no new set of endings to learn here, which is ' +
        'why this unit is short and the next three are not. If you can already say `beshteghel`, ' +
        'you can already say `3am beshteghel`.\n\n' +
        'The difference between the two is not emphasis and not politeness. One is a fact about ' +
        'your life, the other is a report on this minute — and Lebanese speakers hear the ' +
        'difference immediately.',
      table: {
        headers: ['plain form', 'with `3am`', 'what changed'],
        rows: [
          ['`beshteghel`', '`3am beshteghel`', 'my job, in general → I am at work this minute'],
          ['`bedros`', '`3am bedros`', 'I am a student → do not call me, I am studying'],
          ['`béékol`', '`3am béékol`', 'I eat it, I am not against it → I am eating right now'],
          ['`be7ké`', '`3am be7ké`', 'I speak, I can speak → I am on the phone']
        ]
      },
      examples: [
        { lb: 'beshteghel bi-bank', ar: 'بِشْتِغِل بِبَنك', en: 'I work in a bank.', note: 'my job' },
        { lb: '3am beshteghel', ar: 'عَم بِشْتِغِل', en: 'I am working.', note: 'right now, at this hour' },
        { lb: '3am byedros bel-bayt', ar: 'عَم بْيِدْرُس بالبَيت', en: 'He is studying at home.' }
      ]
    },
    {
      heading: 'The one word that leaves the b- alone',
      body:
        'In Unit 17 you learned the rule that catches every beginner: a verb that follows ' +
        'something else loses its `b-`. After `léézem`, after `baddé`, after `fii-`, after ' +
        '`moumken`, after `lamma`, after any other verb, the `b-` goes and the bare form takes ' +
        'over. `baddé edros`, never `baddé bedros`.\n\n' +
        '`3am` is the exception, and it is the only one worth memorising as an exception. It is ' +
        'not a verb and it is not a conjunction; it is a marker that sits on top of a finished ' +
        'present-tense form. Nothing under it moves.\n\n' +
        'So the two rules live side by side without contradiction. Words that govern a verb ' +
        'strip it. `3am` does not govern anything — it labels. Say `3am bedros` out loud a few ' +
        'times, because the wrong version, `3am edros`, will feel tempting the first week and it ' +
        'is not Lebanese at all.\n\n' +
        'Keep this in your ear: it is the exact opposite of what the future marker does, and the ' +
        'two of them are the reason the next unit exists.',
      table: {
        headers: ['what comes first', 'effect on the verb', 'example'],
        rows: [
          ['`léézem`', 'takes the `b-` away', '`léézem edros` — I have to study'],
          ['`baddé`', 'takes the `b-` away', '`baddé edros` — I want to study'],
          ['`fiiné`', 'takes the `b-` away', '`fiiné edros` — I can study'],
          ['`3am`', '**leaves it alone**', '`3am bedros` — I am studying']
        ]
      },
      warning:
        'There is no such thing as `3am edros`. If the `b-` has gone, something else took it, ' +
        'and that something else is not `3am`.'
    },
    {
      heading: 'Eight people, two verbs',
      body:
        'Because `3am` is invariable, the grid below is simply the ordinary present tense with a ' +
        'word in front of it. Read down the columns and notice that nothing new has appeared: ' +
        '`bt-` still marks the person you are speaking to, `by-` still marks he and they, `mn-` ' +
        'is still we.\n\n' +
        'The syncretism you already know still holds. `enta` and `hiyyé` are identical here too ' +
        '— `3am btedros` is both "you are studying" and "she is studying" — so the pronoun is ' +
        'often supplied when the situation does not make it obvious.\n\n' +
        'One detail worth watching in the second column: `éékol` keeps its `o` in front of an ' +
        'ending (`btéékolé`), while `edros` loses its own (`btedrsé`). That is not a rule you ' +
        'have to derive; it belongs to each verb and it is learned with the verb.\n\n' +
        'A word about the ear rather than the eye. `3am` is a separate word and it stays ' +
        'separate, but at speed it leans on the verb behind it and can sound like one long ' +
        'word. When you are listening for it, listen for a short vowel in front of a `b-`: that ' +
        'is nearly always this marker, and it is the fastest way to work out whether someone is ' +
        'describing their life or their afternoon.',
      table: {
        headers: ['person', 'study (`edros`)', 'eat (`éékol`)'],
        rows: [
          ['ana', '`3am bedros`', '`3am béékol`'],
          ['enta', '`3am btedros`', '`3am btéékol`'],
          ['enté', '`3am btedrsé`', '`3am btéékolé`'],
          ['houwwé', '`3am byedros`', '`3am byéékol`'],
          ['hiyyé', '`3am btedros`', '`3am btéékol`'],
          ['ne7na', '`3am mnedros`', '`3am mnéékol`'],
          ['ento', '`3am btedrso`', '`3am btéékolo`'],
          ['henné', '`3am byedrso`', '`3am byéékolo`']
        ]
      }
    },
    {
      heading: 'Saying that it is not happening',
      body:
        'To deny an action in progress, put `maa` in front — in front of `3am`, not in front of ' +
        'the verb. The negation covers the whole block, and the block starts with the marker.\n\n' +
        '`maa 3am bedros` — I am not studying. `maa 3am byeshteghel` — he is not working. ' +
        'Anything else, such as putting `maa` between the marker and the verb, is not an accent ' +
        'or a regional variant; it is simply wrong.\n\n' +
        'This is also a good place to keep `maa` and `mesh` apart, because the two often turn up ' +
        'in the same breath. `maa` is for verbs, and an action in progress is a verb: `maa 3am ' +
        'be2dar edros`. `mesh` is for everything that is not a verb — nouns, adjectives, ' +
        'participles: `ana mesh te3béén`, `mesh mnii7`.\n\n' +
        'So a sentence like "I am not studying, I am tired" needs both tools, one after the ' +
        'other, and choosing between them is one of the fastest ways to sound like you know what ' +
        'you are doing.',
      examples: [
        { lb: 'maa 3am bedros', ar: 'ما عَم بِدْرُس', en: 'I am not studying (right now).' },
        { lb: 'maa 3am be2dar néém', ar: 'ما عَم بِقْدَر نام', en: 'I cannot sleep right now.', note: 'e2dar takes the b- off the verb after it' },
        { lb: 'ana mesh te3béén', ar: 'أنا مِش تِعْبان', en: 'I am not tired.', note: 'an adjective, so mesh and not maa' }
      ],
      warning:
        'Order is fixed: `maa` · `3am` · verb. Never `3am maa bedros`.'
    }
  ],

  vocab: [
    { lb: '3am', ar: 'عَم', en: 'right now (marker put before the verb)', pos: 'adv', note: 'never changes shape' },
    { lb: 'edros', ar: 'إِدْرُس', en: 'to study (root)', pos: 'v' },
    { lb: 'e7Dar', ar: 'إِحضَر', en: 'to watch, to attend (root)', pos: 'v' },
    { lb: 'eshteghel', ar: 'إِشْتِغِل', en: 'to work (root)', pos: 'v' },
    { lb: 'e7ké', ar: 'إِحكي', en: 'to talk, to speak (root)', pos: 'v' },
    { lb: 'es2al', ar: 'إِسْأَل', en: 'to ask (root)', pos: 'v' },
    { lb: 'e2dar', ar: 'إِقْدَر', en: 'to be able to, can (root)', pos: 'v', note: 'a full verb, so it strips the b- off the verb after it' },
    { lb: 'rakkez', ar: 'رَكِّز', en: 'to concentrate (root)', pos: 'v' },
    { lb: 'etsalla', ar: 'إِتْسَلّى', en: 'to enjoy oneself (root)', pos: 'v' },
    { lb: 'emti7aan', ar: 'إِمْتِحان', en: 'exam', pos: 'n', gender: 'm' },
    { lb: 'bernéémej', ar: 'بِرْنامِج', en: 'programme, show', pos: 'n', gender: 'm' },
    { lb: 'mousalsal', ar: 'مُسَلْسَل', en: 'series', pos: 'n', gender: 'm' },
    { lb: 'mou2éébalé', ar: 'مُقابَلة', en: 'interview', pos: 'n', gender: 'f' },
    { lb: 'te3béén', ar: 'تِعْبان', en: 'tired (a man)', pos: 'adj', gender: 'm' },
    { lb: 'te3bééné', ar: 'تِعْبانة', en: 'tired (a woman)', pos: 'adj', gender: 'f' },
    { lb: 'Saraa7a', ar: 'صَراحة', en: 'honestly', pos: 'adv' }
  ],

  phrases: [
    {
      lb: '3am be7Dar mousalsal', ar: 'عَم بِحضَر مُسَلْسَل', en: 'I am watching a series',
      when: 'answering someone who wants to know what you are up to this evening'
    },
    {
      lb: '3am bteshteghel lyoom?', ar: 'عَم بْتِشْتِغِل اليوم؟', en: 'are you working today?',
      when: 'checking whether a man is free before you suggest anything'
    },
    {
      lb: 'maa 3am besma3ak mnii7', ar: 'ما عَم بِسْمَعَك مْنيح', en: 'I cannot hear you well',
      when: 'on the phone, to a man, when the line is bad'
    },
    {
      lb: 'shou 3am biSiir?', ar: 'شو عَم بيصير؟', en: 'what is going on?',
      when: 'you walk in on noise, a crowd, an argument'
    },
    {
      lb: 'ya3Tiik el-3aafyé', ar: 'يعطيك العافية', en: 'may he give you strength',
      when: 'to a man caught in the middle of work — the standard thing to say to anyone working',
      reply: 'Allah y3aafiik', replyEn: 'and may God keep you strong'
    },
    {
      lb: 'maa 3am be2dar néém', ar: 'ما عَم بِقْدَر نام', en: 'I cannot sleep right now',
      when: 'explaining why you are awake at two in the morning'
    }
  ],

  dialogue: {
    title: 'A phone call at the wrong moment',
    setting: 'You are in a room with bad signal and worse timing. Every verb here is marked 3am, because everything is happening right now.',
    lines: [
      { who: 'Rita', lb: 'aloo? shou 3am ta3mol?', ar: 'ألو؟ شو عم تعمل؟', en: 'hello? What are you doing?' },
      { who: 'You', you: true, lb: '3am bedros. 3endé emti7aan boukra.', ar: 'عم بدرس. عندي امتحان بكرا', en: 'I am studying. I have an exam tomorrow.',
        note: '3am plus the verb. Without 3am, bedros would mean I study in general.' },
      { who: 'Rita', lb: 'maa 3am besma3ak mnii7.', ar: 'ما عم بسمعك منيح', en: 'I cannot hear you well.' },
      { who: 'You', you: true, lb: 'halla2 a7san? 3am be7ké men jouwwa.', ar: 'هلق أحسن؟ عم بحكي من جوا', en: 'better now? I am talking from inside.' },
      { who: 'Rita', lb: 'shou 3am biSiir 3andkon? fii Dajjé.', ar: 'شو عم بيصير عندكن؟ في ضجة', en: 'what is going on at your place? There is noise.' },
      { who: 'You', you: true, lb: 'jaaré 3am yeshteghel bel-béét. men es-Sob7.', ar: 'جاري عم يشتغل بالبيت. من الصبح', en: 'my neighbour is working on the house. Since this morning.' },
      { who: 'Rita', lb: 'Saraa7a, maa 3am tetsalla.', ar: 'صراحة، ما عم تتسلى', en: 'honestly, you are not having a good time.' },
      { who: 'You', you: true, lb: 'abadan. maa 3am be2dar rakkez abadan.', ar: 'أبدا. ما عم بقدر ركز أبدا', say: 'أبدا. ما عم بأدر ركز أبدا', en: 'not at all. I cannot concentrate at all.',
        note: 'maa 3am be2dar, then rakkez with no b: two verbs, and the second one drops it. Unit 17 is still running.' }
    ]
  },

  culture: {
    heading: 'Two presents, and why English only has one that works',
    icon: 'now',
    body:
      'English marks this with a whole extra verb: I study, I **am** studying. Lebanese does it with ' +
      'one small word placed in front, and the word never changes for person. `3am bedros`, `3am ' +
      'tedros`, `3am yedros`. Learn `3am` and you have the entire progressive.\n\n' +
      'The distinction is real and gets tested constantly in conversation. `beshteghel` means I work ' +
      '— I have a job, this is my situation. `3am beshteghel` means I am working right now, do not ' +
      'call me. Answer the phone with the wrong one and you have said something true about your life ' +
      'instead of something useful about your afternoon.\n\n' +
      '`shou 3am biSiir?` is worth memorising whole. It means what is going on, and it works for a ' +
      'noise in the street, a crowd, a rumour, or a country. You will hear it more than almost any ' +
      'other question.\n\n' +
      'One thing to expect on the phone: Lebanese calls open with `aloo` and then a round of the ' +
      'greetings from unit one before anybody says why they rang. Getting to the point first is ' +
      'efficient and slightly cold.',
  },

  drills: [
    { type: 'choice', q: 'Which word turns `bedros` into "I am studying at this moment"?',
      options: ['3am', 'ra7', 'maa'], answer: 0,
      explain: '3am is the marker of an action in progress. It goes in front and changes nothing else.' },

    { type: 'conjugate', en: 'she is eating', root: 'éékol', person: 'hiyyé', tense: 'continuous',
      options: ['3am btéékol', '3am byéékol', '3am mnéékol'], answer: 0,
      explain: 'hiyyé takes the same form as enta: btéékol. Add 3am and nothing else moves.' },

    { type: 'conjugate', en: 'we are studying', root: 'edros', person: 'ne7na', tense: 'continuous',
      options: ['3am mnedros', '3am btedros', '3am byedros'], answer: 0,
      explain: 'The we-prefix is mn-, and 3am leaves it exactly where it was.' },

    { type: 'choice', q: 'What is the difference between `beshteghel` and `3am beshteghel`?',
      options: [
        'The first is what I do in general, the second is what I am doing this minute',
        'The first is polite, the second is casual',
        'The first is singular, the second is plural'
      ], answer: 0 },

    { type: 'gap', en: 'A friend calls you on a weekday evening.',
      lines: [
        { who: 'Rami', lb: '3am bte7Dar el-bernéémej?', en: 'are you watching the programme?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['laa2, 3am bedros', 'laa2, ra7 bedros', 'laa2, 3am edros'], answer: 0,
      explain: 'The b- stays after 3am. It would only disappear after ra7 or after a verb.' },

    { type: 'build', en: 'She is working today.',
      tiles: ['3am', 'bteshteghel', 'lyoom'], extra: ['ra7'], answer: '3am bteshteghel lyoom' },

    { type: 'type', en: 'I am eating.', answer: '3am béékol', accept: ['3am beekol'] },

    { type: 'match',
      pairs: [['bedros', 'I study'], ['3am bedros', 'I am studying'], ['byedros', 'he studies'], ['3am mnedros', 'we are studying']] },

    { type: 'choice', q: 'How do you say "I am not watching"?',
      options: ['maa 3am be7Dar', '3am maa be7Dar', 'mesh 3am be7Dar'], answer: 0,
      explain: 'maa comes first, in front of the marker. And a verb is negated with maa, never with mesh.' },

    { type: 'conjugate', en: 'they are talking', root: 'e7ké', person: 'henné', tense: 'continuous',
      options: ['3am bye7ko', '3am bte7ko', '3am mne7ké'], answer: 0,
      explain: 'he and they share the by- prefix; they add -o.' },

    { type: 'choice', q: 'Why does the `b-` survive after `3am` when it dies after `léézem`?',
      options: [
        '3am does not govern the verb, it only labels it as happening now',
        'Because 3am is itself a verb',
        'Because the b- only drops in questions'
      ], answer: 0 },

    { type: 'gap', en: 'You phone home at eight in the evening.',
      lines: [
        { who: 'Mum', lb: 'mar7aba! ne7na 3am mnéékol', en: 'hello! we are eating' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Tayyeb, be7kiik ba3déén', 'Tayyeb, 3am be7kiik ba3déén', 'Tayyeb, ra7 mnéékol'], answer: 0,
      explain: 'be7kiik is a plain promise for later. With 3am it would mean you are speaking to them at this very instant, which they already know.' },

    { type: 'type', en: 'We are not studying.', answer: 'maa 3am mnedros' },

    { type: 'choice', q: 'Which sentence says that Karim works in a bank as his job?',
      options: ['Karim byeshteghel bi-bank', 'Karim 3am byeshteghel bi-bank', 'Karim maa 3am byeshteghel'], answer: 0,
      explain: 'A job is a fact about a life, so the plain form. With 3am it would only mean he is at his desk right now.' }
  ],

  quiz: [
    { type: 'conjugate', en: 'you (a woman) are watching', root: 'e7Dar', person: 'enté', tense: 'continuous',
      options: ['3am bte7Daré', '3am bte7Daro', '3am bye7Daré'], answer: 0 },

    { type: 'choice', q: 'Your friend is not tired. Which sentence is right?',
      options: ['houwwé mesh te3béén', 'houwwé maa te3béén', 'houwwé maa 3am te3béén'], answer: 0,
      explain: 'te3béén is an adjective, and adjectives are denied with mesh.' },

    { type: 'build', en: 'They are not eating now.',
      tiles: ['maa', '3am', 'byéékolo'], extra: ['ra7'], answer: 'maa 3am byéékolo' },

    { type: 'gap', en: 'A colleague finds you at your desk at nine at night.',
      lines: [
        { who: 'Ziad', lb: 'ba3dak hoon?', en: 'you are still here?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Saraa7a 3am beshteghel', 'Saraa7a beshteghel', 'Saraa7a ra7 beshteghel'], answer: 0,
      explain: 'He can see you are there; what he is asking about is this minute. The plain form would answer a different question — what you do for a living. And ra7 would need the bare form after it.' },

    { type: 'type', en: 'He is studying at home.', answer: '3am byedros bel-bayt' },

    { type: 'match',
      pairs: [['3am btedros', 'you (m) are studying'], ['3am btedrsé', 'you (f) are studying'], ['3am byedrso', 'they are studying'], ['3am béékol', 'I am eating']] },

    { type: 'choice', q: 'Which of these is impossible Lebanese?',
      options: ['3am edros', '3am bedros', 'maa 3am bedros'], answer: 0,
      explain: 'The bare form belongs after something that governs the verb. 3am governs nothing.' },

    { type: 'conjugate', en: 'we are working', root: 'eshteghel', person: 'ne7na', tense: 'continuous',
      options: ['3am mneshteghel', '3am byeshteghel', '3am bteshteghel'], answer: 0 },

    { type: 'type', en: 'I am not watching.', answer: 'maa 3am be7Dar' },

    { type: 'choice', q: 'Where does `maa` go in an action in progress?',
      options: ['in front of 3am', 'between 3am and the verb', 'at the end of the sentence'], answer: 0 }
  ]
});
