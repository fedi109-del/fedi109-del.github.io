LEB.addUnit({
  id: 'u28',
  stage: 4,
  order: 28,
  title: 'Telling What Happened',
  goal: 'Tell a story about something that already happened, several sentences long, without losing the thread.',
  canDo: [
    'Chain past events with the small words that hold a Lebanese story together',
    'Keep the past straight when more than one person is in the story',
    'Recount a day out from the moment you woke up to the moment you got home'
  ],

  grammar: [
    {
      heading: 'The joints of a story',
      body:
        'One past-tense sentence is a fact. Six of them in a row is a story, and a story needs ' +
        'joints. Without them you produce a list — we woke up, we drove, we ate — and the person ' +
        'listening has to do the work of arranging it. The joints below are the ones Lebanese ' +
        'actually uses, and they are cheap: none of them changes shape, and none of them touches ' +
        'the verb.\n\n' +
        'Three of them do touch the verb, but only in the non-past. `lamma`, `abel maa` and ' +
        '`awwal maa` strip the `b-` off a present-tense verb — `lamma nouSal` means "when we ' +
        'arrive". The past has no `b-` to strip, so in a story nothing happens at all: ' +
        '`lamma wSolna` — when we arrived. Of the five tenses, the past is the only one that ' +
        'subordination leaves completely alone. That is one less thing to think about at exactly ' +
        'the moment you have the most to think about.\n\n' +
        'A last habit worth copying: Lebanese glues clauses together with `w-` far more freely ' +
        'than English glues them with "and". Whole stories run on it, and it never sounds childish.',
      table: {
        headers: ['word', 'what it does', 'where it sits'],
        rows: [
          ['`awwal shii`', 'first of all', 'opens the sequence'],
          ['`bel-awwal`', 'at the start, to begin with', 'opens the sequence'],
          ['`men ba3da`', 'after that', 'between two events'],
          ['`ba3déén`', 'then, later on', 'between two events'],
          ['`lamma`', 'when', 'in front of the event you are dating'],
          ['`abel maa`', 'before', 'in front of a verb'],
          ['`awwal maa`', 'the moment that, as soon as', 'in front of a verb'],
          ['`bi-nafs el-wa2t`', 'at the same time', 'anywhere in the sentence'],
          ['`w-akhiiran`', 'and finally', 'closes the sequence']
        ]
      },
      warning:
        'Do not translate "then" as `ba3déén` every single time. `ba3déén` also means "besides" ' +
        'and "anyway" in an argument, so a story built entirely out of it starts to sound like a ' +
        'defence. Alternate it with `men ba3da`.'
    },

    {
      heading: 'Who did what, when there are three of you',
      body:
        'In a story you stop talking about yourself. The moment a second person walks into it, ' +
        'the two-root system starts to matter, because the split falls exactly on the third ' +
        'persons — he, she and they. `shefna` and `shééfo` are the same verb; the vowels move ' +
        'because of who is doing the seeing, not because of when.\n\n' +
        'The other thing to watch is the collision at the top of the table. `sheft` is "I saw" ' +
        '**and** "you saw" — the past makes no distinction there, exactly as the present makes ' +
        'none between "you (m)" and "she". In a two-line exchange, context sorts it out. In a ' +
        'four-minute story about you, your sister and a man at a petrol station, it does not. So ' +
        'name people. Lebanese speakers drop pronouns constantly in short talk and put them back ' +
        'in when a story gets crowded, and that is not clumsiness — it is the repair the language ' +
        'expects you to make.',
      table: {
        headers: ['person', 'form', 'meaning'],
        rows: [
          ['ana / enta', '`sheft`', 'I saw / you saw'],
          ['enté', '`shefté`', 'you saw'],
          ['houwwé', '`shééf`', 'he saw'],
          ['hiyyé', '`shééfet`', 'she saw'],
          ['ne7na', '`shefna`', 'we saw'],
          ['ento', '`shefto`', 'you saw'],
          ['henné', '`shééfo`', 'they saw']
        ]
      },
      examples: [
        { lb: 'ana w-Hala Tlo3na 3al-jabal', en: 'Hala and I went up to the mountain.', note: 'root one, because we is in the first group' },
        { lb: 'Tania w-jawza Tole3o kaméén', en: 'Tania and her husband went up too.', note: 'root two, because they is in the second group' },
        { lb: 'maa Talabt samak, Talabt kafta', en: 'I did not order fish, I ordered kofta.', note: 'the past is negated with maa in front, nothing else changes' }
      ]
    },

    {
      heading: 'Dropping the listener into the middle',
      body:
        'There is one more move, and it is what separates a report from a story. Halfway through ' +
        'a run of past verbs, a Lebanese speaker will suddenly switch to `3am` and the present: ' +
        '`w-ne7na 3am mneshrab 2ahwe, shefna…`. Literally that says "and we are drinking coffee, ' +
        'we saw…", which looks like a mistake and is not one. The past verbs around it have ' +
        'already fixed the timeline; `3am` is not re-dating anything, it is freezing one moment ' +
        'and putting the listener inside it.\n\n' +
        'Use it for the scene, never for the events. Events move the story and stay in the past; ' +
        'the thing that was merely going on around them takes `3am`. If you want to say ' +
        '"I was working" flatly, with no theatre, the next unit gives you the piece that says it ' +
        'outright.\n\n' +
        'The story below is the shape to imitate. Read it twice: once for what happens, once for ' +
        'where the joints are.',
      examples: [
        { lb: 'nhaar es-sabet w3iina bakkiir w-trawwa2na 3as-sarii3.', en: 'On Saturday we woke up early and had a quick breakfast.', note: 'the opening: a day, a time, two events' },
        { lb: 'ba3déén akhadna es-sayyaara w-Tlo3na 3al-jabal.', en: 'Then we took the car and went up to the mountain.' },
        { lb: 'lamma wSolna, kéén eT-Ta2s dééfé ktiir.', en: 'When we arrived, the weather was very warm.', note: 'lamma leaves a past verb exactly as it is' },
        { lb: 'awwal shii tmasshayna shwayy bel-baldé l-adiimé.', en: 'First of all we strolled a while around the old town.' },
        { lb: 'men ba3da a3adna b-maT3am zghiir 2béél eT-Tarii2 w-Talabna samak meshwé.', en: 'After that we sat in a small restaurant opposite the road and ordered grilled fish.' },
        { lb: 'w-ne7na 3am mneshrab 2ahwe, shefna Tania w-jawza: henné kaméén Tole3o 3al-jabal.', en: 'While we were drinking coffee we saw Tania and her husband: they had come up to the mountain too.', note: 'the frozen moment, then straight back to the past' },
        { lb: 'aDDayna honiik shii arb3a séé3aat, w-ba3déén nzelna 3a Beirut.', en: 'We spent about four hours there, and then we went down to Beirut.' },
        { lb: 'w-akhiiran rje3na 3al-béét es-séé3a tes3a. kenna te3bééniin, bass el-yoom kéén 7elo.', en: 'And finally we got home at nine. We were tired, but it had been a lovely day.' }
      ],
      warning:
        'Notice what the story does **not** do: it does not repeat `ne7na` in front of every ' +
        'verb. The ending on the verb already says who. Pronouns come back only when the subject ' +
        'changes — `henné kaméén Tole3o`.'
    }
  ],

  vocab: [
    { lb: 'awwal shii', ar: 'أَوَّل شي', en: 'first of all', pos: 'phr' },
    { lb: 'bel-awwal', ar: 'بالأَوَّل', en: 'at the start, to begin with', pos: 'adv' },
    { lb: 'men ba3da', ar: 'مِن بَعدها', en: 'after that', pos: 'phr' },
    { lb: 'ba3déén', ar: 'بَعْدين', en: 'then, later on', pos: 'adv', note: 'also means besides, anyway' },
    { lb: 'w-akhiiran', ar: 'وأخيراً', en: 'and finally', pos: 'adv' },
    { lb: 'lamma', ar: 'لمّا', en: 'when, whenever', pos: 'adv' },
    { lb: 'abel maa', ar: 'قَبْل ما', en: 'before (in front of a verb)', pos: 'phr' },
    { lb: 'awwal maa', ar: 'أَوَّل ما', en: 'as soon as, the moment that', pos: 'phr' },
    { lb: 'bi-nafs el-wa2t', ar: 'بِنَفس الوَقت', en: 'at the same time', pos: 'phr' },
    { lb: 'ta2riiban', ar: 'تَقْريباً', en: 'approximately, about', pos: 'adv' },
    { lb: 'mbéére7', ar: 'مْبارِح', en: 'yesterday', pos: 'adv' },
    { lb: 'honiik', ar: 'هونيك', en: 'there, over there', pos: 'adv' },
    { lb: 'wSolna', ar: 'وْصِلْنا', en: 'we arrived', pos: 'v', note: 'past roots wSol / woSel' },
    { lb: 'shefna', ar: 'شِفْنا', en: 'we saw', pos: 'v', note: 'past roots shef / shééf' },
    { lb: 'rje3na', ar: 'رْجِعْنا', en: 'we went back, we returned', pos: 'v', note: 'past roots rje3 / reje3' },
    { lb: 'aDDayna', ar: 'قَضَّيْنا', en: 'we spent (time)', pos: 'v', note: 'past roots aDDay / aDDa' }
  ],

  phrases: [
    {
      lb: 'maa bkhabbrak!', ar: 'ما بْخَبّْرَك!', en: 'you have no idea',
      when: 'the way to open a story, before you have told any of it',
      reply: 'khabberné!', replyEn: 'go on then, tell me'
    },
    {
      lb: '3an jad?', ar: 'عَنْ جَد؟', en: 'really? seriously?',
      when: 'what the listener owes you every few sentences',
      reply: 'ééh wallah', replyEn: 'yes, honestly'
    },
    {
      lb: 'w-ba3déén?', ar: 'وْبَعْدين؟', en: 'and then?',
      when: 'to push a story forward when the teller pauses'
    },
    {
      lb: 'shou Saar?', ar: 'شو صار؟', en: 'what happened?',
      when: 'asking for the story in the first place, or for the end of one'
    },
    {
      lb: 'raw3a!', ar: 'رَوْعَة!', en: 'wonderful',
      when: 'reacting to a place, a meal or a piece of news'
    },
    {
      lb: 'byéékhod el-3a2l', ar: 'بْياخُد العَقْل', en: 'it takes the mind away',
      when: 'about a view, a building, a dish that was genuinely striking'
    },
    {
      lb: 'maa t2ellé!', ar: 'ما تْقِلّي!', en: 'you do not say',
      when: 'disbelief, friendly — not an accusation of lying'
    }
  ],

  dialogue: {
    title: 'A story with the listener doing half the work',
    setting: 'Two friends, a coffee, and an account of a bad Saturday. Watch what the person listening keeps saying.',
    lines: [
      { who: 'You', you: true, lb: 'maa bkhabbrak shou Saar mbéére7.', ar: 'ما بخبرك شو صار مبارح', en: 'you have no idea what happened yesterday.',
        note: 'Literally "I will not tell you". It is how a story opens, not a refusal to tell it.' },
      { who: 'Karim', lb: 'shou Saar?', ar: 'شو صار؟', en: 'what happened?' },
      { who: 'You', you: true, lb: 'bel-awwal, nzelna 3a Jbeil. wSolna ta2riiban es-séé3a tentéén.', ar: 'بالأول، نزلنا ع جبيل. وصلنا تقريبا الساعة تنتين', en: 'to begin with, we went down to Byblos. We arrived around two.' },
      { who: 'Karim', lb: 'w-ba3déén?', ar: 'وبعدين؟', en: 'and then?' },
      { who: 'You', you: true, lb: 'awwal maa wSolna, shefna l-ba7r. raw3a. aDDayna honiik saa3téén.', ar: 'أول ما وصلنا، شفنا البحر. روعة. قضينا هنيك ساعتين', en: 'the moment we arrived, we saw the sea. Wonderful. We spent two hours there.' },
      { who: 'Karim', lb: '3an jad? byéékhod el-3a2l.', ar: 'عن جد؟ بياخد العقل', en: 'really? It takes your mind away.' },
      { who: 'You', you: true, lb: 'w-akhiiran, lamma rje3na, kéén fii 3aj2et séér. tléét séé3aat.', ar: 'وأخيرا، لما رجعنا، كان في عجقة سير. تلت ساعات', en: 'and finally, when we came back, there was a traffic jam. Three hours.' },
      { who: 'Karim', lb: 'maa t2ellé!', ar: 'ما تقلي', say: 'ما تألي', en: 'you do not say!',
        note: 'Not disbelief. It means keep going, I am with you.' }
    ]
  },

  culture: {
    heading: 'The listener has lines too',
    icon: 'book',
    body:
      'A Lebanese story is not told at somebody, it is built with them. Every few sentences the ' +
      'listener puts something in — `w-ba3déén?`, `3an jad?`, `maa t2ellé!`, `shou Saar?` — and those ' +
      'noises are not interruptions. Leaving them out is what feels wrong.\n\n' +
      'If you are the one listening, silence reads as boredom. If you are the one talking, silence ' +
      'from the other person means you have lost them. This is worth practising deliberately, ' +
      'because it is the single thing that makes a conversation feel Lebanese rather than correct.\n\n' +
      '`maa bkhabbrak` is the strangest of them. Word for word it says "I am not going to tell you", ' +
      'and it means the exact opposite: what follows is worth hearing. English has nothing quite ' +
      'like it — "you have no idea" is close.\n\n' +
      'The skeleton to hang a story on is in the vocabulary of this unit: `bel-awwal`, `men ba3da`, ' +
      '`ba3déén`, `w-akhiiran`. Four words, and a pile of events becomes something with a shape.',
  },

  drills: [
    { type: 'choice', q: 'You are starting the account of your Saturday. Which word opens it?',
      options: ['awwal shii', 'w-akhiiran', 'ba3déén'], answer: 0,
      explain: 'awwal shii and bel-awwal open a sequence. w-akhiiran closes it.' },

    { type: 'conjugate', en: 'they went up', root: 'Tlo3 / Tole3', person: 'henné', tense: 'past',
      options: ['Tole3o', 'Tlo3na', 'Tole3et', 'Tlo3to'], answer: 0 },

    { type: 'build', en: 'First of all we woke up early and had breakfast.',
      tiles: ['awwal shii', 'w3iina', 'bakkiir', 'w-trawwa2na'], extra: ['ba3déén'],
      answer: 'awwal shii w3iina bakkiir w-trawwa2na' },

    { type: 'match',
      pairs: [['men ba3da', 'after that'], ['ba3déén', 'then, later on'], ['w-akhiiran', 'and finally'], ['bi-nafs el-wa2t', 'at the same time']] },

    { type: 'gap', en: 'A friend wants to know where you disappeared to on Saturday.',
      lines: [
        { who: 'Wassim', lb: 'wéén kento nhaar es-sabet?', en: 'where were you on Saturday?' },
        { who: 'You', you: true, lb: 'Tlo3na 3al-jabal ana w-Hala', en: 'Hala and I went up to the mountain' },
        { who: 'Wassim', lb: '3an jad? w-ba3déén?', en: 'really? and then?' },
        { who: 'You', you: true, blank: true }
      ],
      options: [
        'ba3déén nzelna 3a Beirut w-rje3na 3al-béét',
        'ba3déén ra7 nenzal 3a Beirut',
        'ba3déén 3am mnenzal 3a Beirut'
      ], answer: 0,
      explain: 'The whole day is finished, so it stays in the past. ra7 pushes it into the future and 3am drags it into right now.' },

    { type: 'choice', q: 'Which of these means "when we arrived"?',
      options: ['lamma wSolna', 'lamma nouSal', 'lamma ra7 nouSal'], answer: 0,
      explain: 'lamma strips the b- off a present verb, but a past verb has none, so it is untouched.' },

    { type: 'type', en: 'after that', answer: 'men ba3da' },

    { type: 'conjugate', en: 'she saw', root: 'shef / shééf', person: 'hiyyé', tense: 'past',
      options: ['shééfet', 'shefna', 'shééfo', 'shefté'], answer: 0 },

    { type: 'choice', q: 'Why is it "Tlo3na" but "Tole3o"?',
      options: [
        'The past has two roots, and the second one is used for he, she and they',
        'The first is a question and the second is a statement',
        'The vowels change because the sentence is longer'
      ], answer: 0,
      explain: 'The split falls exactly on the third persons. Nothing else in the paradigm varies.' },

    { type: 'build', en: 'Then we took the car and went up to the mountain.',
      tiles: ['ba3déén', 'akhadna', 'es-sayyaara', 'w-Tlo3na', '3al-jabal'], extra: ['lamma'],
      answer: 'ba3déén akhadna es-sayyaara w-Tlo3na 3al-jabal' },

    { type: 'match',
      pairs: [['wSolna', 'we arrived'], ['rje3na', 'we went back'], ['aDDayna', 'we spent (time)'], ['shefna', 'we saw']] },

    { type: 'choice', q: 'In the middle of a past-tense story you hear "w-ne7na 3am mneshrab 2ahwe". What is 3am doing?',
      options: [
        'Freezing one moment so the listener stands inside it',
        'Moving the story into the present day',
        'Turning the sentence into a question'
      ], answer: 0,
      explain: 'The past verbs around it hold the timeline. 3am adds scenery, not a new date.' },

    { type: 'gap', en: 'Someone asks how the morning of the trip went.',
      lines: [
        { who: 'Maya', lb: 'w3iito bakkiir?', en: 'did you wake up early?' },
        { who: 'You', you: true, lb: 'ééh, bass mesh ktiir bakkiir', en: 'yes, but not very early' },
        { who: 'Maya', lb: 'w-shou akalto 3at-terwii2a?', en: 'and what did you eat for breakfast?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['maa akalna shii, shrebna 2ahwe bass', 'maa mnéékol shii, mneshrab 2ahwe bass', 'maa ra7 néékol shii, ra7 neshrab 2ahwe bass'], answer: 0,
      explain: 'That breakfast is over: maa plus a past verb. The second option makes it a daily habit, the third puts it in the future.' },

    { type: 'type', en: 'yesterday', answer: 'mbéére7' }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence puts the whole day in the right tense?',
      options: [
        'w-akhiiran rje3na 3al-béét es-séé3a tes3a',
        'w-akhiiran mnerja3 3al-béét es-séé3a tes3a',
        'w-akhiiran ra7 nerja3 3al-béét es-séé3a tes3a'
      ], answer: 0 },

    { type: 'conjugate', en: 'you (f) went back', root: 'rje3 / reje3', person: 'enté', tense: 'past',
      options: ['rje3té', 'reje3et', 'rje3na', 'reje3o'], answer: 0 },

    { type: 'gap', en: 'A colleague catches you on Monday morning.',
      lines: [
        { who: 'Nour', lb: 'kiifak? shou l-akhbaar?', en: 'how are you? what is new?' },
        { who: 'You', you: true, lb: 'l-7amdella. rje3na mbéére7 men safra 3ash-shméél', en: 'fine. we got back yesterday from a trip up north' },
        { who: 'Nour', lb: 'raw3a! khabberné, shou shefto honiik?', en: 'wonderful! tell me, what did you see there?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['shefna souu2 adiim ktiir 7elo', 'bshouuf souu2 adiim ktiir 7elo', 'ra7 shouuf souu2 adiim ktiir 7elo'], answer: 0 },

    { type: 'build', en: 'When we arrived, the weather was very warm.',
      tiles: ['lamma', 'wSolna', 'kéén', 'eT-Ta2s', 'dééfé', 'ktiir'], extra: ['bi-nafs el-wa2t'],
      answer: 'lamma wSolna kéén eT-Ta2s dééfé ktiir' },

    { type: 'match',
      pairs: [['awwal maa', 'as soon as'], ['abel maa', 'before'], ['honiik', 'there'], ['ta2riiban', 'approximately']] },

    { type: 'choice', q: 'Your friend has stopped talking halfway through the story. What do you say?',
      options: ['w-ba3déén?', 'maa t2ellé!', 'awwal shii'], answer: 0,
      explain: 'w-ba3déén? asks for the next event. maa t2ellé! is disbelief, and awwal shii belongs at the start.' },

    { type: 'type', en: 'we spent about four hours there.', answer: 'aDDayna honiik shii arb3a séé3aat',
      accept: ['aDDayna hunik shii arb3a séé3aat', 'aDDayna honiik shii arb3a saa3aat'] },

    { type: 'choice', q: 'Someone says "sheft el-maT3am el-jdiid". Who saw the restaurant?',
      options: [
        'Either I or you — the past does not separate those two',
        'Only he',
        'Only they'
      ], answer: 0,
      explain: 'ana and enta share one form in the past. Add the pronoun when it actually matters.' },

    { type: 'choice', q: 'Which one is not a way of saying "then"?',
      options: ['bi-nafs el-wa2t', 'men ba3da', 'ba3déén'], answer: 0,
      explain: 'bi-nafs el-wa2t means at the same time — it stacks two events instead of ordering them.' },

    { type: 'build', en: 'And then we went down to Beirut.',
      tiles: ['w-ba3déén', 'nzelna', '3a', 'Beirut'], extra: ['Tlo3na'],
      answer: 'w-ba3déén nzelna 3a Beirut' }
  ]
});
