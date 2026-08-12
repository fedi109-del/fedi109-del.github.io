LEB.addUnit({
  id: 'u01',
  stage: 1,
  order: 1,
  title: 'Sounds and Hello',
  goal: 'Read Lebanese written in Latin letters, and answer a greeting the way it must be answered.',
  canDo: [
    'Recognise the three digits that stand for real Lebanese sounds',
    'Greet someone in the morning, the evening, or at any hour',
    'Give the fixed reply every greeting expects'
  ],

  grammar: [
    {
      heading: 'Three digits you will see everywhere',
      body:
        'Lebanese has consonants English never developed a letter for. Rather than invent new ' +
        'symbols, people writing Lebanese on a phone borrowed digits that look like the Arabic ' +
        'letters. You are about to see them in almost every word, so meet them now.\n\n' +
        '`7` is a hard breath pushed from the throat with the mouth wide open. It is not an h; ' +
        'an h is soft and lazy, this one has effort in it.\n\n' +
        '`3` is made further down still, by tightening the throat and letting the voice through. ' +
        'It sounds strangled the first fifty times. That is normal, and it is the sound that makes ' +
        'people say "you actually speak it".\n\n' +
        '`2` is the easiest: a clean stop, the little catch in the middle of "uh-oh". Keep this one ' +
        'in mind, because in Lebanese it does a job it does not do anywhere else.',
      table: {
        headers: ['sign', 'Arabic letter', 'what your throat does'],
        rows: [
          ['`7`', 'ح', 'open breath, forced, no voice'],
          ['`3`', 'ع', 'squeeze low in the throat, with voice'],
          ['`2`', 'ء and ق', 'stop the air completely, then release']
        ]
      },
      warning:
        'The famous Arabic `q` sound does **not exist** in everyday Lebanese. Where a textbook ' +
        'writes *qahwa*, Beirut says `2ahwe`. If you pronounce the q, you are speaking Modern ' +
        'Standard Arabic — a language people here read and watch the news in, but do not chat in.'
    },
    {
      heading: 'Capital letters change the word',
      body:
        'In this course a capital `S`, `D`, `T` or `Z` is not the start of a sentence. It is a ' +
        'different sound: the same consonant said heavy, with the tongue flat and the back of the ' +
        'mouth full. Compare `sabaa7` and `Sabaa7` — only the second one means "morning".\n\n' +
        'The other thing to respect is vowel length. `aa`, `ii`, `uu` and `éé` are held longer than ' +
        'the single letter, and `é` is a closed e, close to the vowel in French *été*. None of this ' +
        'is decoration: shortening a long vowel can hand someone a different word.',
      examples: [
        { lb: 'Sabaa7', ar: 'صباح', en: 'morning', note: 'heavy S, long aa' },
        { lb: 'khéér', ar: 'خير', en: 'goodness, wellbeing', note: 'the é is long here' },
        { lb: 'nouur', ar: 'نور', en: 'light' }
      ]
    },
    {
      heading: 'Greetings come in locked pairs',
      body:
        'This is the single most useful thing to know on day one. A Lebanese greeting is not an ' +
        'open question you may answer however you like — it is half of a pair, and the other half ' +
        'is fixed. Say the wrong half and you sound like a tourist reading from an app.\n\n' +
        'The logic is often a small poetic trade. Someone wishes you a morning of goodness, ' +
        '`Sabaa7 el-khéér`; you answer with something brighter, a morning of light, ' +
        '`Sabaa7 en-nouur`. Wishes go up, never sideways.\n\n' +
        'And notice `el-` becoming `en-` in front of `nouur`. The article melts into certain ' +
        'letters instead of standing next to them. You do not have to memorise which ones yet — ' +
        'just write what you hear.',
      table: {
        headers: ['they say', 'you answer', 'when'],
        rows: [
          ['`mar7aba`', '`mar7abtéén`', 'any hour, anyone'],
          ['`Sabaa7 el-khéér`', '`Sabaa7 en-nouur`', 'until roughly midday'],
          ['`masa l-khéér`', '`masa n-nouur`', 'afternoon and evening'],
          ['`ahla w sahla`', '`ahla fiik`', 'when you are being welcomed'],
          ['`ma3 es-saléémé`', '`Allah ysallmak`', 'as one of you leaves']
        ]
      },
      warning:
        '`mar7abtéén` literally doubles the greeting you were given — the ending `-téén` is a ' +
        '"two of them" ending. You are not repeating the word; you are handing back twice as much.'
    }
  ],

  vocab: [
    { lb: 'mar7aba', ar: 'مرحبا', en: 'hello', pos: 'phr' },
    { lb: 'mar7abtéén', ar: 'مرحبتين', en: 'hello back (two hellos)', pos: 'phr', note: 'only ever used as an answer' },
    { lb: 'Sabaa7', ar: 'صباح', en: 'morning', pos: 'n', gender: 'm' },
    { lb: 'masa', ar: 'مسا', en: 'evening', pos: 'n', gender: 'm' },
    { lb: 'khéér', ar: 'خير', en: 'goodness, wellbeing', pos: 'n', gender: 'm' },
    { lb: 'nouur', ar: 'نور', en: 'light', pos: 'n', gender: 'm' },
    { lb: 'kiifak', ar: 'كيفك', en: 'how are you (to a man)', pos: 'phr' },
    { lb: 'kiifik', ar: 'كيفك', en: 'how are you (to a woman)', pos: 'phr' },
    { lb: 'mnii7', ar: 'منيح', en: 'good, fine (a man)', pos: 'adj', gender: 'm' },
    { lb: 'mnii7a', ar: 'منيحة', en: 'good, fine (a woman)', pos: 'adj', gender: 'f' },
    { lb: 'shukran', ar: 'شكرا', en: 'thank you', pos: 'phr' },
    { lb: '3afwan', ar: 'عفوا', en: 'you are welcome, excuse me', pos: 'phr' },
    { lb: 'saléémé', ar: 'سلامة', en: 'safety, wellbeing', pos: 'n', gender: 'f' },
    { lb: 'ahla', ar: 'أهلا', en: 'welcome', pos: 'phr' }
  ],

  phrases: [
    {
      lb: 'mar7aba', ar: 'مرحبا', en: 'hello',
      when: 'the all-purpose greeting, at any time of day',
      reply: 'mar7abtéén', replyEn: 'two hellos back'
    },
    {
      lb: 'Sabaa7 el-khéér', ar: 'صباح الخير', en: 'a morning of goodness',
      when: 'from waking up until about midday',
      reply: 'Sabaa7 en-nouur', replyEn: 'a morning of light'
    },
    {
      lb: 'masa l-khéér', ar: 'مسا الخير', en: 'an evening of goodness',
      when: 'from the afternoon onwards',
      reply: 'masa n-nouur', replyEn: 'an evening of light'
    },
    {
      lb: 'kiifak?', ar: 'كيفك؟', en: 'how are you? (to a man)',
      when: 'straight after the greeting, almost part of it',
      reply: 'l-7amdella', replyEn: 'thank God — the standard answer, whatever the truth is'
    },
    {
      lb: 'ahla w sahla', ar: 'أهلا وسهلا', en: 'welcome',
      when: 'said to you at a door, a shop, a table',
      reply: 'ahla fiik', replyEn: 'welcome to you too'
    },
    {
      lb: 'ma3 es-saléémé', ar: 'مع السلامة', en: 'go with safety',
      when: 'said to the person who is leaving',
      reply: 'Allah ysallmak', replyEn: 'may God keep you safe'
    },
    {
      lb: 'tesba7 3ala khéér', ar: 'تصبح على خير', en: 'may you wake to goodness',
      when: 'goodnight, to a man',
      reply: 'w-enta men ahlo', replyEn: 'and may you be of its people'
    }
  ],

  drills: [
    { type: 'choice', q: 'Which sign stands for the sound made by squeezing low in the throat, with voice?',
      options: ['3', '7', '2'], answer: 0,
      explain: '3 is ع. 7 is the open breath ح, and 2 is the clean stop.' },

    { type: 'choice', q: 'A textbook writes "qahwa" for coffee. What does Beirut actually say?',
      options: ['2ahwe', 'qahwe', 'kahwa'], answer: 0,
      explain: 'In Lebanese the qaaf is a glottal stop, written 2. The q belongs to Modern Standard Arabic.' },

    { type: 'match',
      pairs: [['Sabaa7', 'morning'], ['masa', 'evening'], ['khéér', 'goodness'], ['nouur', 'light']] },

    { type: 'gap', en: 'Your neighbour opens her door at eight in the morning.',
      lines: [
        { who: 'Rima', lb: 'Sabaa7 el-khéér', en: 'a morning of goodness' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Sabaa7 en-nouur', 'masa n-nouur', 'ma3 es-saléémé'], answer: 0,
      explain: 'Goodness is answered with light — and in the morning, never with masa.' },

    { type: 'choice', q: 'Someone says "mar7aba". What do you say back?',
      options: ['mar7abtéén', 'mar7aba', 'shukran'], answer: 0,
      explain: 'You hand the greeting back doubled. Repeating mar7aba is not wrong, but it is flat.' },

    { type: 'build', en: 'A morning of light.',
      tiles: ['Sabaa7', 'en-nouur'], extra: ['masa'], answer: 'Sabaa7 en-nouur' },

    { type: 'type', en: 'Thank you.', answer: 'shukran' },

    { type: 'choice', q: 'You are talking to a woman. How do you ask how she is?',
      options: ['kiifik', 'kiifak', 'kiif'], answer: 0,
      explain: 'The ending changes with who you are speaking to: -ik for a woman, -ak for a man.' },

    { type: 'gap', en: 'You are being shown into a friend\'s flat for the first time.',
      lines: [
        { who: 'Ziad', lb: 'ahla w sahla', en: 'welcome' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['ahla fiik', 'ahla w sahla', 'l-7amdella'], answer: 0,
      explain: 'Welcome is returned, not repeated: ahla fiik.' },

    { type: 'build', en: 'Go with safety.',
      tiles: ['ma3', 'es-saléémé'], extra: ['khéér'], answer: 'ma3 es-saléémé' },

    { type: 'choice', q: 'Why is the S in Sabaa7 written as a capital?',
      options: [
        'It is a heavier consonant, a different sound from plain s',
        'It is the first word of the phrase',
        'It marks a long vowel'
      ], answer: 0,
      explain: 'S, D, T and Z in capitals are the emphatic consonants. The capital is information, not style.' },

    { type: 'type', en: 'Hello (the greeting you start with).', answer: 'mar7aba' },

    { type: 'match',
      pairs: [['mnii7', 'good — said of a man'], ['mnii7a', 'good — said of a woman'], ['shukran', 'thank you'], ['3afwan', 'you are welcome']] },

    { type: 'choice', q: 'It is nine in the evening and you are leaving a dinner. What fits?',
      options: ['ma3 es-saléémé', 'Sabaa7 el-khéér', 'ahla w sahla'], answer: 0,
      explain: 'ma3 es-saléémé is for the one going out of the door.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which of these is written the way Lebanese is actually spoken?',
      options: ['2ahwe', 'qahwa', 'kahwah'], answer: 0 },

    { type: 'gap', en: 'A colleague greets you at four in the afternoon.',
      lines: [
        { who: 'Karim', lb: 'masa l-khéér', en: 'an evening of goodness' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['masa n-nouur', 'Sabaa7 en-nouur', 'mar7abtéén'], answer: 0 },

    { type: 'type', en: 'A morning of goodness.', answer: 'Sabaa7 el-khéér', accept: ['Sabaa7 el khéér'],
      explain: 'Accents and capitals are forgiven here, but the 7 is not: it is a different sound from h.' },

    { type: 'match',
      pairs: [['mar7abtéén', 'hello back'], ['nouur', 'light'], ['saléémé', 'safety'], ['ahla', 'welcome']] },

    { type: 'choice', q: 'What does the digit 7 stand for?',
      options: ['ح, a hard open breath', 'ع, a squeezed throat sound', 'ء, a clean stop'], answer: 0 },

    { type: 'build', en: 'May you wake to goodness.',
      tiles: ['tesba7', '3ala', 'khéér'], extra: ['nouur'], answer: 'tesba7 3ala khéér' },

    { type: 'choice', q: 'Someone asks "kiifak?". What is the expected answer, whatever your day was like?',
      options: ['l-7amdella', 'shukran', 'mar7abtéén'], answer: 0,
      explain: 'l-7amdella is the default. Complaining is possible, but it comes after this, not instead of it.' },

    { type: 'type', en: 'Welcome to you too (the answer to ahla w sahla).', answer: 'ahla fiik' },

    { type: 'choice', q: 'Why does el- become en- in "Sabaa7 en-nouur"?',
      options: [
        'The article melts into certain letters instead of standing beside them',
        'Because the word is feminine',
        'Because it is a greeting'
      ], answer: 0 }
  ]
});
