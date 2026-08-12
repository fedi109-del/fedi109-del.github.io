LEB.addUnit({
  id: 'u05',
  stage: 1,
  order: 5,
  title: 'Morning, Noon and Night',
  goal: 'Say when something happens, and use the two formulas that belong to a particular moment.',
  canDo: [
    'Name the parts of the day and place an event inside one of them',
    'Say today, tomorrow, yesterday and the day after tomorrow',
    'Greet someone who has just woken up, and someone who is working',
    'Give the fixed answer that the working greeting demands'
  ],

  grammar: [
    {
      heading: 'The day comes in named blocks',
      body:
        'Lebanese does not organise the day around clock times so much as around named stretches of it. ' +
        'Arrangements are made in blocks: come in the morning, come after noon, come in the evening. ' +
        'The clock arrives afterwards, if at all.\n\n' +
        '`eS-Sob7` is the morning, from waking until the sun is properly up. `eD-Dohr` is noon, the ' +
        'hinge of the day, and `ba3d eD-Dohr` — literally after noon — is the whole afternoon. ' +
        '`3ashiyyé` is the evening, the part of the day people actually arrange things for. Once it is ' +
        'dark you are into `bel-léél`, at night.\n\n' +
        'Two more words sit alongside these. `nhaar` is the daytime as opposed to the night, which is ' +
        'why `kell en-nhaar` means all day long. `laylé` is a night you can count: `layéélé` is nights, ' +
        'the word a hotel uses.\n\n' +
        'Notice what the article is doing again. `S`, `D` and `n` are all sun letters, so `el-` melts ' +
        'into them: `eS-Sob7`, `eD-Dohr`, `en-nhaar`. You are not learning a new rule here, you are ' +
        'watching the one from the last unit do its job on a new set of words.',
      table: {
        headers: ['Lebanese', 'meaning', 'roughly when'],
        rows: [
          ['`eS-Sob7`', 'the morning', 'from waking up until the sun is high'],
          ['`eD-Dohr`', 'noon', 'the middle of the day'],
          ['`ba3d eD-Dohr`', 'the afternoon', 'literally: after noon'],
          ['`3ashiyyé`', 'the evening', 'when the day loosens up'],
          ['`bel-léél`', 'at night', 'once it is properly dark'],
          ['`en-nhaar`', 'the daytime', 'the light half, as against the night'],
          ['`laylé`', 'a night', 'countable — `layéélé` is nights']
        ]
      },
      examples: [
        { lb: 'kell en-nhaar', ar: 'كِل النّهار', en: 'all day' },
        { lb: 'tléét layéélé', ar: 'تْلات لَيالي', en: 'three nights', note: 'the number drops its ending before the noun' }
      ]
    },
    {
      heading: 'Today, tomorrow, yesterday',
      body:
        'Three short words carry most of the weight here, and none of them needs a preposition. ' +
        '`lyoom` is today, and the article is already baked into it — it is *the* day. `boukra` is ' +
        'tomorrow, `ba3d boukra` is the day after tomorrow, and `mbéére7` is yesterday. Two more are ' +
        'worth taking now because they turn up in every sentence about time: `halla2`, now, and ' +
        '`bakkiir`, early.\n\n' +
        'The useful trick is that these combine with the blocks from the last section by simply ' +
        'standing next to them. No preposition, no linking word, no change to either half: ' +
        '`boukra 3ashiyyé` is tomorrow evening, `mbéére7 3ashiyyé` is yesterday evening, ' +
        '`boukra eS-Sob7` is tomorrow morning. Day word first, then the block of the day. That pattern ' +
        'will cover almost every appointment you ever make.\n\n' +
        'English speakers reach for on and in here and put them in by reflex. Resist it. Two words ' +
        'side by side is the whole construction, and adding anything between them is what makes a ' +
        'sentence sound translated.',
      table: {
        headers: ['Lebanese', 'meaning', 'note'],
        rows: [
          ['`lyoom`', 'today', 'the article is inside the word'],
          ['`boukra`', 'tomorrow', ''],
          ['`ba3d boukra`', 'the day after tomorrow', 'literally: after tomorrow'],
          ['`mbéére7`', 'yesterday', ''],
          ['`halla2`', 'now', ''],
          ['`bakkiir`', 'early', '']
        ]
      },
      examples: [
        { lb: 'boukra 3ashiyyé', ar: 'بُكْرة عَشِيّة', en: 'tomorrow evening' },
        { lb: 'mbéére7 bel-léél', ar: 'مْبارِح بِاللّيل', en: 'last night', note: 'literally yesterday at night' },
        { lb: 'halla2 mesh bakkiir', ar: 'هَلَّق مِش بَكّير', en: 'It is not early now.' }
      ]
    },
    {
      heading: 'The week bends around four days',
      body:
        'The Lebanese week has a shape, and four days carry it. `et-tanéén` is Monday, the day ' +
        'everything restarts and every good intention gets postponed to. `el-jem3a` is Friday. ' +
        '`es-sabet` and `el-a7ad` are Saturday and Sunday, and together they are the weekend: ' +
        '`iyyéém es-sabet wel-a7ad`, the days of Saturday and Sunday.\n\n' +
        'The odd one is `jem3a`, because the same word means both Friday and a week. `marra ' +
        'bel-jem3a` is once a week. `bi-noSS el-jem3a` is midweek, the phrase people use for the ' +
        'working days as against the weekend. Context sorts the two meanings out instantly and nobody ' +
        'finds it confusing except learners.\n\n' +
        'Day names take the article, and you will hear two longer frames around them. `yoom el-jem3a` ' +
        'is the day of Friday, `nhaar es-sabet` is Saturday daytime. Both are more common in speech ' +
        'than the bare name on its own, in the same way English prefers on Saturday to plain ' +
        'Saturday.',
      table: {
        headers: ['Lebanese', 'day', 'what it carries'],
        rows: [
          ['`et-tanéén`', 'Monday', 'the restart; every diet begins here'],
          ['`el-jem3a`', 'Friday', 'also the word for a week'],
          ['`es-sabet`', 'Saturday', 'half of the weekend'],
          ['`el-a7ad`', 'Sunday', 'the other half']
        ]
      },
      examples: [
        { lb: 'yoom el-jem3a', ar: 'يوم الجِمْعَة', en: 'on Friday' },
        { lb: 'nhaar es-sabet', ar: 'نهار السَّبت', en: 'on Saturday, during the day' },
        { lb: 'marra bel-jem3a', ar: 'مَرّة بالجِمْعَة', en: 'once a week' }
      ]
    },
    {
      heading: 'Two things you say to a moment, not to a person',
      body:
        'Some Lebanese greetings are not aimed at a person at all, they are aimed at a situation. Two ' +
        'of them are worth more than any amount of vocabulary.\n\n' +
        '`Sa7 en-noom` is said to someone who has just woken up, at any hour of the day. It is not ' +
        'good morning; it is a comment on the fact that they were asleep and now are not. Say it to a ' +
        'flatmate stumbling into the kitchen at eleven and you will have said exactly the right thing.\n\n' +
        '`ya3Tiik el-3aafyé` goes to anyone who is working: the man behind the counter, the woman ' +
        'sweeping the stairs, the driver who has just carried you across town. It means may he give ' +
        'you strength, and it acknowledges the effort rather than the service. The answer is fixed and ' +
        'everybody uses it: `Allah y3aafiik`. This is a pair, not an option.\n\n' +
        'The ending shifts for a woman, and it shifts in an unusual way: `ya3Tiiké l-3aafyé`, answered ' +
        '`Allah y3aafiiké`. The you ending here is `-ké` rather than the `-ik` you saw on `kiifik`, ' +
        'because the word in front ends in a long vowel and the long vowel reshapes what comes after ' +
        'it. Take it as a whole phrase for now; the pattern behind it arrives in the next unit.',
      table: {
        headers: ['you say', 'to whom', 'the answer'],
        rows: [
          ['`Sa7 en-noom`', 'someone who has just woken up', '—'],
          ['`ya3Tiik el-3aafyé`', 'a man who is working', '`Allah y3aafiik`'],
          ['`ya3Tiiké l-3aafyé`', 'a woman who is working', '`Allah y3aafiiké`'],
          ['`ya3Tiik alf 3aafyé`', 'the same, with more warmth', '`Allah y3aafiik`']
        ]
      },
      warning:
        'Do not answer `ya3Tiik el-3aafyé` with `shukran`. Thanks is not wrong as a human being, but ' +
        'it is not the answer, and it lands like a beat missed in a song. The answer is ' +
        '`Allah y3aafiik`, and to a woman `Allah y3aafiiké`.'
    }
  ],

  vocab: [
    { lb: 'eS-Sob7', ar: 'الصُّبْح', en: 'the morning, in the morning', pos: 'n', gender: 'm' },
    { lb: 'ba3d eD-Dohr', ar: 'بَعْد الضُّهْر', en: 'the afternoon', pos: 'phr', note: 'eD-Dohr on its own is noon' },
    { lb: '3ashiyyé', ar: 'عَشِيّة', en: 'evening', pos: 'n', gender: 'f' },
    { lb: 'bel-léél', ar: 'بِاللّيل', en: 'at night', pos: 'phr' },
    { lb: 'nhaar', ar: 'نْهار', en: 'daytime', pos: 'n', gender: 'm' },
    { lb: 'yoom', ar: 'يوم', en: 'day', pos: 'n', gender: 'm', note: 'iyyéém is days' },
    { lb: 'lyoom', ar: 'اليوم', en: 'today', pos: 'adv' },
    { lb: 'boukra', ar: 'بُكْرة', en: 'tomorrow', pos: 'adv' },
    { lb: 'ba3d boukra', ar: 'بَعْد بُكرة', en: 'the day after tomorrow', pos: 'adv' },
    { lb: 'mbéére7', ar: 'مْبارِح', en: 'yesterday', pos: 'adv' },
    { lb: 'halla2', ar: 'هَلَّق', en: 'now', pos: 'adv' },
    { lb: 'bakkiir', ar: 'بَكّير', en: 'early', pos: 'adv' },
    { lb: 'jem3a', ar: 'جِمْعَة', en: 'week, and also Friday', pos: 'n', gender: 'f' },
    { lb: 'et-tanéén', ar: 'التَّنين', en: 'Monday', pos: 'n', gender: 'm' },
    { lb: 'es-sabet', ar: 'السَّبت', en: 'Saturday', pos: 'n', gender: 'm' },
    { lb: 'el-a7ad', ar: 'الأَحَد', en: 'Sunday', pos: 'n', gender: 'm' }
  ],

  phrases: [
    {
      lb: 'Sa7 en-noom', ar: 'صَح النّوم', en: 'may your sleep be sound',
      when: 'to someone who has just woken up, whatever the hour'
    },
    {
      lb: 'ya3Tiik el-3aafyé', ar: 'يعطيك العافْية', en: 'may he give you strength',
      when: 'to a man who is working — a waiter, a driver, a builder',
      reply: 'Allah y3aafiik', replyEn: 'may God keep you strong'
    },
    {
      lb: 'ya3Tiiké l-3aafyé', ar: 'يعطيكِ العافْية', en: 'may he give you strength',
      when: 'the same, said to a woman',
      reply: 'Allah y3aafiiké', replyEn: 'may God keep you strong'
    },
    {
      lb: 'ya3Tiik alf 3aafyé', ar: 'يعطيك أَلْف عافْية', en: 'may he give you a thousand strengths',
      when: 'when the effort deserves more than the standard version',
      reply: 'Allah y3aafiik', replyEn: 'may God keep you strong'
    },
    {
      lb: 'marra bel-jem3a', ar: 'مَرّة بالجِمْعَة', en: 'once a week',
      when: 'saying how often something happens'
    },
    {
      lb: 'kell yoom', ar: 'كِل يوم', en: 'every day',
      when: 'the other end of the same scale'
    }
  ],

  drills: [
    { type: 'match',
      pairs: [['eS-Sob7', 'the morning'], ['ba3d eD-Dohr', 'the afternoon'], ['3ashiyyé', 'the evening'], ['bel-léél', 'at night']] },

    { type: 'choice', q: 'A builder is working on your street. What do you say as you pass him?',
      options: ['ya3Tiik el-3aafyé', 'Sa7 en-noom', 'ma3 es-saléémé'], answer: 0,
      explain: 'The working greeting acknowledges effort. It costs nothing and it changes how you are seen.' },

    { type: 'choice', q: 'Someone says "ya3Tiik el-3aafyé" to you. What comes back?',
      options: ['Allah y3aafiik', 'shukran', 'mar7abtéén'], answer: 0,
      explain: 'The pair is locked. shukran is polite but it is not the answer.' },

    { type: 'gap', en: 'Your flatmate comes into the kitchen at eleven, still half asleep.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Karim', lb: 'ba3dné ne3séén', en: 'I am still sleepy' }
      ],
      options: ['Sa7 en-noom', 'ya3Tiik el-3aafyé', 'ma3 es-saléémé'], answer: 0,
      explain: 'Sa7 en-noom is for the freshly awake, at any hour. Nothing else fits this moment.' },

    { type: 'build', en: 'Tomorrow evening.',
      tiles: ['boukra', '3ashiyyé'], extra: ['mbéére7'], answer: 'boukra 3ashiyyé' },

    { type: 'type', en: 'yesterday', answer: 'mbéére7' },

    { type: 'match',
      pairs: [['lyoom', 'today'], ['boukra', 'tomorrow'], ['mbéére7', 'yesterday'], ['halla2', 'now']] },

    { type: 'choice', q: 'Which word means both Friday and a week?',
      options: ['jem3a', 'sabet', 'tanéén'], answer: 0 },

    { type: 'choice', q: 'Someone says "boukra eS-Sob7". When are they talking about?',
      options: ['Tomorrow morning', 'This morning', 'Yesterday morning'], answer: 0,
      explain: 'Day word first, then the block of the day, with nothing in between.' },

    { type: 'build', en: 'The day after tomorrow.',
      tiles: ['ba3d', 'boukra'], extra: ['eD-Dohr'], answer: 'ba3d boukra' },

    { type: 'gap', en: 'A woman is cleaning the stairs of your building as you come in.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Her', lb: 'Allah y3aafiik', en: 'may God keep you strong' }
      ],
      options: ['ya3Tiiké l-3aafyé', 'ya3Tiik el-3aafyé', 'Sa7 en-noom'], answer: 0,
      explain: 'She is a woman, so the ending moves: ya3Tiiké, not ya3Tiik.' },

    { type: 'type', en: 'in the morning', answer: 'eS-Sob7', accept: ['es-Sob7', 'eS-Sobe7'] },

    { type: 'choice', q: 'Why is it written eS-Sob7 and not el-Sob7?',
      options: [
        'S is a sun letter, so the article melts into it',
        'Because Sob7 is a feminine noun',
        'Because it is a fixed phrase with no rule behind it'
      ], answer: 0 },

    { type: 'match',
      pairs: [['et-tanéén', 'Monday'], ['el-jem3a', 'Friday'], ['es-sabet', 'Saturday'], ['el-a7ad', 'Sunday']] }
  ],

  quiz: [
    { type: 'choice', q: 'You pass a shopkeeper unloading boxes from a van. Which fits?',
      options: ['ya3Tiik el-3aafyé', 'Sa7 en-noom', 'ahla fiik'], answer: 0 },

    { type: 'gap', en: 'A colleague has just finished a long shift and you want to mark it.',
      lines: [
        { who: 'You', you: true, lb: 'ya3Tiik alf 3aafyé', en: 'may he give you a thousand strengths' },
        { who: 'Sami', blank: true }
      ],
      options: ['Allah y3aafiik', 'shukran ktiir', 'Sa7 en-noom'], answer: 0,
      explain: 'The stronger version takes the same fixed answer.' },

    { type: 'type', en: 'the day after tomorrow', answer: 'ba3d boukra' },

    { type: 'match',
      pairs: [['nhaar', 'daytime'], ['laylé', 'a night'], ['bakkiir', 'early'], ['yoom', 'day']] },

    { type: 'choice', q: 'Three of these name a part of the day. Which one does not?',
      options: ['es-sabet', 'eS-Sob7', '3ashiyyé'], answer: 0,
      explain: 'es-sabet is Saturday. The other two are stretches of any day.' },

    { type: 'build', en: 'Yesterday evening.',
      tiles: ['mbéére7', '3ashiyyé'], extra: ['boukra'], answer: 'mbéére7 3ashiyyé' },

    { type: 'choice', q: 'How do you say "once a week"?',
      options: ['marra bel-jem3a', 'yoom el-jem3a', 'kell yoom'], answer: 0,
      explain: 'yoom el-jem3a is on Friday, and kell yoom is every day.' },

    { type: 'type', en: 'now', answer: 'halla2' },

    { type: 'choice', q: 'Why does the ending change in "ya3Tiiké l-3aafyé"?',
      options: [
        'It is being said to a woman',
        'It is a more polite version',
        'It is being said to more than one person'
      ], answer: 0 }
  ]
});
