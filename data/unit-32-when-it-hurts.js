LEB.addUnit({
  id: 'u32',
  stage: 4,
  order: 32,
  title: 'When It Hurts',
  goal: 'Describe what is wrong with you, answer a doctor, and get what you need from a pharmacy.',
  canDo: [
    'Name the part of you that hurts and say what kind of hurt it is',
    'Answer the two questions every doctor asks: what is wrong, and since when',
    'Say the one thing you owe a sick person, and give the one answer it takes'
  ],

  grammar: [
    {
      heading: 'Nothing hurts in Lebanese — you have a pain',
      body:
        'There is no verb for "to hurt", and you will look for one for a while before believing ' +
        'that. What Lebanese has instead is the suffix verb `3end-`, the one you already use for ' +
        'owning things, plus the noun `waja3`. So you do not say that your head hurts; you say ' +
        'that you have a pain of head: `3endé waja3 raas`. Change the body part and you have the ' +
        'whole system.\n\n' +
        'Two consequences worth noticing. First, the person is carried by `3end-`, not by any ' +
        'verb — `3endo waja3 baTn`, he has a stomach ache. Second, to say how bad it is you hang ' +
        'an adjective on the pain, not on yourself: `waja3 raas awé`, a strong headache.\n\n' +
        'For a condition rather than a pain, you drop the noun and use a plain adjective with no ' +
        'verb at all, because there is no present "to be" to get in the way. `ana saakhen` — I am ' +
        'running a fever. `hiyyé D3iifé` — she is weak. They agree with the person: `saakhen`, ' +
        '`saakhné`, `saakhniin`.',
      table: {
        headers: ['you say', 'word for word', 'meaning'],
        rows: [
          ['`3endé waja3 raas`', 'I have a pain of head', 'I have a headache'],
          ['`3endé waja3 baTn`', 'I have a pain of belly', 'my stomach hurts'],
          ['`3endo waja3 Dahr`', 'he has a pain of back', 'his back hurts'],
          ['`3enda 7araara`', 'she has fever', 'she is running a temperature'],
          ['`3endé eltihééb bez-zlé3iim`', 'I have an infection in the throat', 'I have a throat infection'],
          ['`3endé rashe7`', 'I have a cold', 'I have a cold'],
          ['`maa 3endé éébliyyé`', 'I do not have appetite', 'I have no appetite']
        ]
      },
      warning:
        'Keep `waja3` for pain and `7araara` for fever, and do not mix them up with the ' +
        'adjectives. `3endé 7araara` reports a temperature; `ana saakhen` says the same thing ' +
        'about you rather than about the fever.'
    },

    {
      heading: 'The two questions a doctor will ask',
      body:
        'Every consultation in any language is the same two questions: what is wrong, and how ' +
        'long has it been going on. The first is `shou bak?` — `shou b-` plus the ending for the ' +
        'person, so `shou bik?` to a woman and `shou beha?` about a girl. The second is the ' +
        'construction from the last unit, put straight to work: `addéé Sarlak héék?`, how long ' +
        'have you been like this.\n\n' +
        'Answer the second one with `Sar-l-` and a span — `Sarlé tléét iyyéém` — or with a ' +
        'starting point: `men mbéére7 3ashiyyé`, since yesterday evening. The state itself can be ' +
        'described with `3a hal-7aalé`, in this condition, which is what the doctor will use if ' +
        'he is talking about someone else in the room.\n\n' +
        'What comes back is `léézem` and a bare verb: `léézem téékhod dawa`, `léézem teshtré ' +
        '7bouub men eS-Saydaliyyé`. `léézem` never changes shape; the verb after it carries the ' +
        'person and has lost its `b-`. And for instructions about a third person there is ' +
        '`khallii-`: `khalliya téékhod 7abbé 3as-Sob7`, let her take one pill in the morning.',
      table: {
        headers: ['what is said', 'by whom', 'meaning'],
        rows: [
          ['`shou bak?`', 'the doctor', 'what is wrong with you'],
          ['`3am b3azzbak, 7akiim`', 'you', 'sorry to be a nuisance, doctor'],
          ['`addéé Sarlak héék?`', 'the doctor', 'how long have you been like this'],
          ['`Sarlé tléét iyyéém`', 'you', 'three days now'],
          ['`ka2enno n-7araara nezlet shwayy`', 'you', 'it seems the fever has come down a bit'],
          ['`léézem téékhod dawa`', 'the doctor', 'you have to take medicine'],
          ['`ra7 ektoblak rashetta`', 'the doctor', 'I will write you a prescription'],
          ['`fii Saydaliyyé féét7a bhal-wa2t?`', 'you', 'is there a pharmacy open at this hour']
        ]
      },
      examples: [
        { lb: 'jesmé mlashlash w-maa 3endé éébliyyé', en: 'I feel washed out and I have no appetite.' },
        { lb: 'Sarla jem3a maa 3am btéékol mnii7', en: 'She has not been eating properly for a week.' },
        { lb: 'fii wa7dé btefta7 arb3a w-3eshriin séé3a', en: 'There is one that is open twenty-four hours.' }
      ]
    },

    {
      heading: 'The word you owe a sick person',
      body:
        'If someone tells you they are ill, or that a member of their family is ill, silence is ' +
        'not neutral in Lebanese — it reads as coldness. There is a word for the moment, and it ' +
        'is not optional: `saléémtak`, built on `saléémé`, safety, plus the ending for whoever ' +
        'you are wishing well.\n\n' +
        'It works two ways. Said to the ill person, it takes their ending: `saléémtak` to a man, ' +
        '`saléémtik` to a woman. Said about someone else — a colleague reporting that his mother ' +
        'is in hospital — it takes hers: `saléémeta`. Either way the answer is the same four ' +
        'syllables, and there is no other answer: `Allah ysallmak`.\n\n' +
        'That reply will already be familiar. It is what answers `l-7amdella 3as-saléémé` when ' +
        'someone comes back from a journey, and what answers `ma3 es-saléémé` at a door. One ' +
        'reply, three triggers — all of them built on the same idea of being kept safe.',
      table: {
        headers: ['you say', 'to or about', 'the answer'],
        rows: [
          ['`saléémtak`', 'a man who is ill', '`Allah ysallmak`'],
          ['`saléémtik`', 'a woman who is ill', '`Allah ysallmik`'],
          ['`saléémto`', 'about a man who is ill', '`Allah ysallmak`'],
          ['`saléémeta`', 'about a woman who is ill', '`Allah ysallmak`']
        ]
      },
      warning:
        'Do not answer `saléémtak` with `shukran`. Thanks are not wrong in themselves, but ' +
        'skipping `Allah ysallmak` leaves the pair unfinished, and people hear the gap.'
    }
  ],

  vocab: [
    { lb: 'jesm', ar: 'جِسْم', en: 'body', pos: 'n', gender: 'm', note: 'plural ajséém' },
    { lb: 'raas', ar: 'راس', en: 'head', pos: 'n', gender: 'm', note: 'plural rouus' },
    { lb: 'zlé3iim', ar: 'زْلاعيم', en: 'throat', pos: 'n' },
    { lb: 'baTn', ar: 'بَطن', en: 'stomach, belly', pos: 'n', gender: 'm' },
    { lb: 'Dahr', ar: 'ضَهْر', en: 'back', pos: 'n', gender: 'm' },
    { lb: 'iid', ar: 'إيد', en: 'hand', pos: 'n', gender: 'f', note: 'two hands iidéén' },
    { lb: 'senn', ar: 'سِن', en: 'tooth', pos: 'n', gender: 'm', note: 'teeth snéén' },
    { lb: '3ayn', ar: 'عَين', en: 'eye', pos: 'n', gender: 'f' },
    { lb: 'waja3', ar: 'وَجَع', en: 'pain, ache', pos: 'n', gender: 'm', note: 'plural awjéé3' },
    { lb: '7araara', ar: 'حَرارة', en: 'fever, temperature', pos: 'n', gender: 'f' },
    { lb: 'rashe7', ar: 'رَشح', en: 'a cold, the flu', pos: 'n', gender: 'm' },
    { lb: 'eltihééb', ar: 'إِلْتِهاب', en: 'infection', pos: 'n', gender: 'm', note: 'plural eltihéébéét' },
    { lb: 'saakhen', ar: 'ساخِن', en: 'running a fever, hot', pos: 'adj', note: 'saakhen / saakhné / saakhniin' },
    { lb: 'D3iif', ar: 'ضْعيف', en: 'weak', pos: 'adj', note: 'D3iif / D3iifé / D3aaf' },
    { lb: '7akiim', ar: 'حَكيم', en: 'doctor', pos: 'n', gender: 'm', note: 'the everyday word — warmer than doktoor; plural 7ekama' },
    { lb: 'Saydaliyyé', ar: 'صَيْدَلِيّة', en: 'pharmacy', pos: 'n', gender: 'f' }
  ],

  phrases: [
    {
      lb: 'saléémtak', ar: 'سَلامْتَك', en: 'may you be safe and well',
      when: 'to a man who has just told you he is unwell — and it is not optional',
      reply: 'Allah ysallmak', replyEn: 'may God keep you safe'
    },
    {
      lb: 'saléémeta', ar: 'سَلامِتها', en: 'may she be well',
      when: 'about a third person: someone tells you his wife or his daughter is ill',
      reply: 'Allah ysallmak', replyEn: 'may God keep you safe'
    },
    {
      lb: 'shou bak?', ar: 'شو بَك؟', en: 'what is wrong with you?',
      when: 'the doctor opening, or a friend who can see something is off'
    },
    {
      lb: '3am b3azzbak', ar: 'عَم بْعَذّْبَك', en: 'I am putting you to trouble',
      when: 'apologising for phoning a doctor late, or for any imposition',
      reply: 'mesh baynéétna!', replyEn: 'do not stand on ceremony with me'
    },
    {
      lb: 'maa biSiir héék!', ar: 'ما بيصير هيك!', en: 'that will not do',
      when: 'a doctor, or a mother, reacting to someone who has not been eating or sleeping'
    },
    {
      lb: 'nshallah tkouun a7san', ar: 'إنشالله تْكون أَحْسَن', en: 'hopefully you will be better',
      when: 'closing a conversation with someone who is ill'
    }
  ],

  drills: [
    { type: 'choice', q: 'How do you say "I have a headache"?',
      options: ['3endé waja3 raas', 'raasé byouuja3', 'ana waja3 raas'], answer: 0,
      explain: 'There is no verb for hurting. The suffix verb 3end- plus waja3 plus the body part does all of it.' },

    { type: 'match',
      pairs: [['raas', 'head'], ['baTn', 'stomach'], ['zlé3iim', 'throat'], ['Dahr', 'back']] },

    { type: 'build', en: 'I have a bad headache and a fever.',
      tiles: ['3endé', 'waja3', 'raas', 'awé', 'w-7araara'], extra: ['saakhen'],
      answer: '3endé waja3 raas awé w-7araara' },

    { type: 'gap', en: 'You have phoned a doctor at nine in the evening.',
      lines: [
        { who: 'Doctor Sami', lb: 'masa l-khéér. shou bak?', en: 'good evening. what is wrong with you?' },
        { who: 'You', you: true, lb: '3am b3azzbak 7akiim. 3endé waja3 raas awé w-7araara.', en: 'sorry to trouble you, doctor. I have a bad headache and a fever.' },
        { who: 'Doctor Sami', lb: 'maa fii 3azééb. addéé Sarlak héék?', en: 'no trouble at all. how long have you been like this?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Sarlé tléét iyyéém ta2riiban', 'ba3d tléét iyyéém', 'men aymata tléét iyyéém'], answer: 0,
      explain: 'addéé Sarlak asks for a length, so the answer is Sar-l- plus a span.' },

    { type: 'conjugate', en: 'she has to take (a pill)', root: 'éékhod', person: 'hiyyé', tense: 'bare form after léézem',
      options: ['léézem téékhod', 'léézem yéékhod', 'léézem néékhod', 'léézem btéékhod'], answer: 0,
      explain: 'léézem never changes. The verb after it drops its b- and carries the person.' },

    { type: 'choice', q: 'A colleague tells you his daughter is ill. What do you say?',
      options: ['saléémeta', 'saléémtak', 'Allah ysallmak'], answer: 0,
      explain: 'The ending points at the person who is ill, not the person you are talking to. Allah ysallmak is the answer, not the opening.' },

    { type: 'type', en: 'pharmacy', answer: 'Saydaliyyé', accept: ['saydaliyyé', 'Saydaliyye'] },

    { type: 'choice', q: 'Which one describes the person rather than the fever?',
      options: ['hiyyé saakhné', '3enda 7araara', '3enda waja3 raas'], answer: 0,
      explain: 'saakhen is an adjective and agrees with the person. 7araara is the fever itself, and you have it.' },

    { type: 'conjugate', en: 'it (the pharmacy) opens', root: 'efta7', person: 'hiyyé', tense: 'present',
      options: ['btefta7', 'byefta7', 'befta7', 'mnefta7'], answer: 0 },

    { type: 'build', en: 'You have to buy medicine from the pharmacy.',
      tiles: ['léézem', 'teshtré', 'dawa', 'men', 'eS-Saydaliyyé'], extra: ['bteshtré'],
      answer: 'léézem teshtré dawa men eS-Saydaliyyé' },

    { type: 'match',
      pairs: [['7araara', 'fever'], ['rashe7', 'a cold'], ['eltihééb', 'infection'], ['waja3', 'pain']] },

    { type: 'choice', q: 'Someone says "saléémtak". What comes back?',
      options: ['Allah ysallmak', 'shukran ktiir', 'mesh baynéétna'], answer: 0,
      explain: 'One fixed answer, and it is the same one that follows l-7amdella 3as-saléémé.' },

    { type: 'type', en: 'I have no appetite.', answer: 'maa 3endé éébliyyé' },

    { type: 'choice', q: 'Is there a pharmacy open at this hour? Which is the question?',
      options: ['fii Saydaliyyé féét7a bhal-wa2t?', 'kéén fii Saydaliyyé féét7a bhal-wa2t?', 'ra7 ykouun fii Saydaliyyé féét7a bhal-wa2t?'], answer: 0,
      explain: 'You need one now, so plain fii. kéén fii asks about last night and ra7 ykouun about tomorrow.' }
  ],

  quiz: [
    { type: 'gap', en: 'You are at the pharmacy counter.',
      lines: [
        { who: 'Rita', lb: 'masa n-nouur. shou bak?', en: 'good evening. what is wrong?' },
        { who: 'You', you: true, lb: '3endé rashe7 w-waja3 zlé3iim men tléét iyyéém', en: 'I have had a cold and a sore throat for three days' },
        { who: 'Rita', lb: 'hal-7bouub mnii7a la-hal-7aalé. saléémtak!', en: 'these pills are good for this. get well!' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Allah ysallmik', 'saléémtik', 'mesh baynéétna'], answer: 0 },

    { type: 'choice', q: 'Which sentence says "his back hurts"?',
      options: ['3endo waja3 Dahr', '3endé waja3 Dahr', '3enda waja3 Dahr'], answer: 0,
      explain: 'The ending on 3end- is the whole grammar of the sentence: -o for him, -é for me, -a for her.' },

    { type: 'conjugate', en: 'he will write (a prescription)', root: 'ektob', person: 'houwwé', tense: 'future with ra7',
      options: ['ra7 yektob', 'ra7 ektob', 'ra7 tektob', 'ra7 nektob'], answer: 0 },

    { type: 'build', en: 'She has been in this state since yesterday evening.',
      tiles: ['Sarla', '3a', 'hal-7aalé', 'men', 'mbéére7', '3ashiyyé'], extra: ['addéé'],
      answer: 'Sarla 3a hal-7aalé men mbéére7 3ashiyyé' },

    { type: 'match',
      pairs: [['saakhen', 'running a fever'], ['D3iif', 'weak'], ['7akiim', 'doctor'], ['jesm', 'body']] },

    { type: 'choice', q: 'Why is "léézem téékol" right for both "you have to eat" and "she has to eat"?',
      options: [
        'The bare form for enta and hiyyé is the same, as it is in the present tense',
        'léézem changes shape and the verb does not',
        'It is a mistake — one of them needs a different verb'
      ], answer: 0,
      explain: 'enta and hiyyé collapse together everywhere in the non-past. Only context or a pronoun separates them.' },

    { type: 'type', en: 'how long have you been like this?', answer: 'addéé Sarlak héék',
      accept: ['addéé Sarlak héék?', 'addéé Sarlik héék'] },

    { type: 'choice', q: 'You phone a doctor late at night and apologise. What does he say back?',
      options: ['maa fii 3azééb. mesh baynéétna!', 'maa biSiir héék!', 'saléémtak!'], answer: 0,
      explain: 'The apology and the waving away are a fixed pair. maa biSiir héék is for the symptom, not for the phone call.' },

    { type: 'choice', q: 'Which of these is not something you can have with 3end-?',
      options: ['3endé saakhen', '3endé 7araara', '3endé eltihééb bez-zlé3iim'], answer: 0,
      explain: 'saakhen is an adjective describing you: ana saakhen. What you have are nouns — 7araara, waja3, rashe7, eltihééb.' }
  ]
});
