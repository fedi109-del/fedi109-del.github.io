LEB.addUnit({
  id: 'u23',
  stage: 3,
  order: 23,
  title: 'The Little Words',
  goal: 'Use the small words that carry a Lebanese conversation, and know what each one costs you at the wrong moment.',
  canDo: [
    'Drop `yalla` into a sentence and mean the right one of its jobs',
    'Wave a problem away with the word that fits that particular problem',
    'Guard a compliment with `smallah`, and hear it when it is sarcasm',
    'Answer a thank-you with `walaw` instead of a textbook phrase'
  ],

  grammar: [
    {
      heading: 'yalla does five different jobs',
      body:
        'No word will make you sound more Lebanese, and none is harder to pin down. `yalla` has no ' +
        'meaning of its own. What it does is announce that the talking part is over and something ' +
        'is about to happen.\n\n' +
        'From that one idea come all its uses. Said to someone who is late, it is "come on". Said ' +
        'by a waiter who has just taken your order, it is "right away" — a promise that the thing ' +
        'is already in motion. Said in front of an agreement, it stops you weighing the offer: ' +
        '`yalla, léésh la2` is "fine, why not". Paired with `basiiTa` it closes an apology before ' +
        'it gets going. And at the end of a phone call it simply means you are hanging up.\n\n' +
        'Notice that none of these are translations. `yalla` is not "come on" any more than it is ' +
        '"right away". It is a push, and the situation supplies the direction. The practical ' +
        'consequence is that you cannot get it wrong by choosing the wrong sense — you can only ' +
        'get it wrong by using it where nothing is about to move.',
      table: {
        headers: ['when you say it', 'what it does'],
        rows: [
          ['someone is late', 'come on, get moving'],
          ['you have just been asked for something', 'right away — it is already happening'],
          ['in front of an agreement', 'fine then, why not'],
          ['with `basiiTa`', 'never mind, forget it'],
          ['at the end of a call', 'right, I am off']
        ]
      },
      examples: [
        { lb: 'yalla, l-film biballesh', en: 'Come on, the film is starting.' },
        { lb: 'yalla, léésh la2', en: 'Fine, why not.' },
        { lb: 'yalla basiiTa', en: 'Never mind, it is nothing.' }
      ],
      warning:
        'Do not use `yalla` to soften a refusal. It pushes forward, always. A `yalla` in front of ' +
        '"no" sounds like you are telling the other person to hurry up and accept it.'
    },
    {
      heading: 'Six ways to make a problem smaller',
      body:
        'English shrugs with one phrase and a face. Lebanese has half a dozen, and they are aimed ' +
        'at different targets — which is why swapping them produces small, memorable disasters.\n\n' +
        '`maa 3lééh` and `basiiTa` are aimed at **the thing that happened**. `maa 3lééh` says it ' +
        'does not matter; `basiiTa` says you are inflating it, deflate. Both are what you say when ' +
        'someone has spilled, broken, forgotten or arrived late.\n\n' +
        '`mesh meshklé` is aimed at **you**: it reports that you personally have not been ' +
        'inconvenienced. It answers a request, not an accident.\n\n' +
        '`wala yhemmak` and `maa te3tal hamm` are aimed at **the other person**. They do not say ' +
        'the problem is small; they tell someone to stop carrying it. The endings move with who ' +
        'you are talking to: `wala yhemmik` to a woman, `maa te3talé hamm` to a woman.\n\n' +
        '`balééha` is the odd one out. It is aimed at **a plan**. It means "leave it, we will not ' +
        'do it" — and that is all it means.',
      table: {
        headers: ['phrase', 'literally', 'what it is aimed at'],
        rows: [
          ['`maa 3lééh`', 'nothing on it', 'the thing that happened'],
          ['`basiiTa`', 'it is simple', 'the size you are making it'],
          ['`mesh meshklé`', 'not a problem', 'whether you were put out'],
          ['`wala yhemmak`', 'let it not concern you', 'the person worrying'],
          ['`maa te3tal hamm`', 'do not carry worry', 'the person worrying, warmer'],
          ['`balééha`', 'leave it be', 'the plan itself']
        ]
      },
      examples: [
        { lb: 'maa 3lééh, mesh meshklé', en: 'Never mind, it is not a problem.' },
        { lb: 'te3béén? balééha lyoom', en: 'Tired? Then let us drop it for today.' }
      ],
      warning:
        'If someone spills coffee on you and you answer `balééha`, you have told them to abandon ' +
        'the coffee, not that you forgive them. The word you wanted was `maa 3lééh`.'
    },
    {
      heading: 'smallah and walaw, the two that will not translate',
      body:
        '`smallah` is said immediately after praise — a child, a car, a plate of food, a piece of ' +
        'good news. It comes from a longer religious phrase, and its job is to guard the thing you ' +
        'just admired. This is not decoration you can skip. Praising something and saying nothing ' +
        'afterwards reads as careless at best, and there are households where it reads as worse.\n\n' +
        'The trap is `ktiir smallah`. The same word with `ktiir` in front, said flat, means the ' +
        'exact opposite: "yeah, right". It is one of the sharper pieces of sarcasm in ordinary ' +
        'speech, and nothing in the spelling tells you which one you are hearing. Only the voice ' +
        'does.\n\n' +
        '`walaw` is the other one with no English shape. It is what you say when someone thanks ' +
        'you, or apologises for putting you out, and it refuses the whole transaction: the favour ' +
        'was never a debt, so there is nothing to settle. It can also be pure emphatic agreement. ' +
        'What it never is, is the neutral "you are welcome" — that word exists, `3afwan`, and it ' +
        'is much cooler.',
      table: {
        headers: ['you hear', 'what it means'],
        rows: [
          ['`smallah`', 'praise, and a guard placed on it'],
          ['`ktiir smallah`', 'said flat — yeah, right'],
          ['`walaw`', 'do not even mention it — there is no debt'],
          ['`3afwan`', 'you are welcome — correct, and much cooler']
        ]
      },
      warning:
        'Both `smallah` and `ktiir smallah` live in the tone, not in the letters. Until you have ' +
        'heard them said, use `smallah` in its plain sense only, and never write `ktiir smallah` ' +
        'to someone who cannot hear your voice.'
    },
    {
      heading: 'The joints that hold a sentence together',
      body:
        'The last group is not reactions but joinery: the words that let one clause lean on the ' +
        'next. A learner who has all the grammar and none of these still sounds like a document ' +
        'being read aloud.\n\n' +
        '`ya3né` is the workhorse — "that is", "I mean". It introduces a rephrasing, and it also ' +
        'buys you a second of thinking time, which is exactly what a learner needs most.\n\n' +
        '`Tayyeb` accepts and moves on: "all right". `lakéén` follows a conclusion — "so, in that ' +
        'case". `masalan` introduces an example. `ba3déén` adds a further argument, roughly ' +
        '"besides", and separately means "later". `Saraa7a` announces honesty and is a mild ' +
        'warning that what follows may not flatter anybody. `3anjad` asks for or gives ' +
        'confirmation, `akiid` supplies certainty, and `nafs esh-shii` says "same here" without a ' +
        'verb in sight.',
      table: {
        headers: ['word', 'job'],
        rows: [
          ['`ya3né`', 'that is, I mean — and a second of thinking time'],
          ['`Tayyeb`', 'all right — accept and move on'],
          ['`lakéén`', 'so, in that case'],
          ['`masalan`', 'for example'],
          ['`ba3déén`', 'besides — and, separately, later'],
          ['`Saraa7a`', 'honestly — brace them'],
          ['`3anjad`', 'for real, seriously'],
          ['`nafs esh-shii`', 'same here']
        ]
      },
      examples: [
        { lb: 'ya3né mesh lyoom, boukra', en: 'I mean not today, tomorrow.' },
        { lb: 'Tayyeb lakéén, bshouufak 3al-khamsé', en: 'All right then, I will see you at five.' }
      ],
      warning:
        '`Tayyeb` on its own can accept, or it can end a conversation the other person had not ' +
        'finished. Said short and flat it is the sound of someone deciding they have heard enough. ' +
        'It is also the ordinary adjective for kind-hearted or tasty — the same word, told apart ' +
        'only by whether it is standing alone.'
    }
  ],

  vocab: [
    { lb: 'yalla', ar: 'يَلّا', en: 'come on; right away; fine then', pos: 'phr', note: 'it has no fixed meaning — it means something is about to move' },
    { lb: 'Tayyeb', ar: 'طَيِّب', en: 'all right, OK', pos: 'phr', note: 'as an adjective the same word means kind-hearted, or tasty' },
    { lb: 'tfaDDal', ar: 'تْفَضَّل', en: 'here you are; after you; go ahead', pos: 'phr', note: '`tfaDDalé` to a woman, `tfaDDalo` to a group' },
    { lb: 'smallah', ar: 'سْمَالله', en: 'said right after praising something', pos: 'phr', note: 'it guards what you just admired' },
    { lb: 'ktiir smallah', ar: 'كْتير سْمَالله', en: 'yeah, right', pos: 'phr', note: 'the same words, flat tone, opposite meaning' },
    { lb: 'walaw', ar: 'وَلَو', en: 'do not even mention it', pos: 'phr', note: 'refuses a thank-you rather than accepting it' },
    { lb: 'ya3né', ar: 'يَعْني', en: 'that is, I mean', pos: 'phr' },
    { lb: 'maa 3lééh', ar: 'ما عْليه', en: 'never mind, it is fine', pos: 'phr' },
    { lb: 'basiiTa', ar: 'بَسيطة', en: 'it is nothing, take it easy', pos: 'phr', note: 'literally: it is simple' },
    { lb: 'balééha', ar: 'بَلاها', en: 'let us drop it', pos: 'phr', note: 'aimed at a plan, never at an accident' },
    { lb: 'mesh meshklé', ar: 'مِش مِشْكْلة', en: 'not a problem', pos: 'phr' },
    { lb: 'akiid', ar: 'أَكيد', en: 'of course, sure', pos: 'adv', note: '`akiid?` with a rise is "are you sure?"' },
    { lb: '3anjad', ar: 'عَنْجَد', en: 'really, for real', pos: 'adv' },
    { lb: 'Saraa7a', ar: 'صَراحة', en: 'honestly', pos: 'adv', note: 'warns that what follows may not flatter' },
    { lb: 'lakéén', ar: 'لَكان', en: 'so, in that case', pos: 'adv' },
    { lb: 'nafs esh-shii', ar: 'نَفْس الشي', en: 'same here, the same thing', pos: 'phr' }
  ],

  phrases: [
    {
      lb: 'shou awlak?', ar: 'شو قَوْلَك؟', en: 'what do you say?',
      when: 'floating a plan — `shou awlik?` to a woman',
      reply: 'yalla, léésh la2', replyEn: 'fine, why not'
    },
    {
      lb: 'walaw!', ar: 'وَلَو؟', en: 'do not even mention it',
      when: 'someone thanks you for something small, and you refuse to let it count'
    },
    {
      lb: 'smallah', ar: 'سْمَالله', en: 'God keep it',
      when: 'the half-second after you praise a child, a car, a meal'
    },
    {
      lb: 'maa te3tal hamm', ar: 'ما تِعْتَل هَم', en: 'do not carry worry',
      when: 'to someone apologising for a mess you do not mind — `maa te3talé hamm` to a woman'
    },
    {
      lb: 'ma3ak 7a2', ar: 'مَعَك حَق', en: 'you are right',
      when: 'conceding a point without losing anything — `ma3ik 7a2` to a woman'
    },
    {
      lb: 'Tayyeb lakéén', ar: 'طَيِّب لَكان', en: 'all right then',
      when: 'the arrangement is agreed and you are closing it'
    },
    {
      lb: 'nafs esh-shii', ar: 'نَفْس الشي', en: 'same here',
      when: 'agreeing with what somebody just said about themselves'
    },
    {
      lb: 'kellak zoo2', ar: 'كِلَّك ذوق', en: 'you are all good taste',
      when: 'someone has been kind — `kellik zoo2` to a woman',
      reply: 'walaw', replyEn: 'please, do not even'
    }
  ],

  drills: [
    { type: 'choice', q: 'A friend thanks you for driving him home. What do you say back?',
      options: ['walaw', 'yalla', 'akiid'], answer: 0,
      explain: '`walaw` refuses the debt. `3afwan` would be correct too, and much cooler.' },

    { type: 'gap', en: 'You are twenty minutes late and your friend is standing outside the cinema.',
      lines: [
        { who: 'Maya', lb: 'waynak? l-film biballesh', en: 'where are you? the film is starting' },
        { who: 'You', you: true, blank: true },
        { who: 'Maya', lb: 'Tayyeb, bonTrak', en: 'all right, I will wait for you' }
      ],
      options: ['yalla, ana ariib', 'balééha, ana ariib', 'smallah, ana ariib'], answer: 0,
      explain: '`balééha` would cancel the cinema. `smallah` guards praise and has no business here.' },

    { type: 'match',
      pairs: [['maa 3lééh', 'never mind'], ['balééha', 'let us drop the plan'], ['walaw', 'do not even mention it'], ['ya3né', 'I mean']] },

    { type: 'choice', q: 'Someone knocks your bag over on the bus and apologises. What is the right shrug?',
      options: ['maa 3lééh', 'balééha', 'nafs esh-shii'], answer: 0,
      explain: '`maa 3lééh` is aimed at what happened. `balééha` is aimed at a plan, and there is no plan here.' },

    { type: 'build', en: 'Fine, why not.',
      tiles: ['yalla', 'léésh', 'la2'], extra: ['akiid'], answer: 'yalla léésh la2' },

    { type: 'choice', q: 'You have just told someone their daughter is beautiful. What comes immediately after?',
      options: ['smallah', 'ktiir smallah', 'basiiTa'], answer: 0,
      explain: 'Praise without the guard reads as careless. And `ktiir smallah` said flat is sarcasm.' },

    { type: 'type', en: 'I mean, that is to say', answer: 'ya3né', accept: ['ya3ne'] },

    { type: 'gap', en: 'A neighbour offers to carry your shopping up the stairs and keeps apologising for it.',
      lines: [
        { who: 'Tarek', lb: 'baddé 3azzbak ktiir', en: 'I am troubling you a lot' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['walaw, mesh meshklé', 'balééha, mesh meshklé', 'ktiir smallah'], answer: 0,
      explain: '`walaw` refuses the apology; `mesh meshklé` confirms you were not put out.' },

    { type: 'choice', q: 'Which word warns the other person that what you are about to say may not flatter them?',
      options: ['Saraa7a', 'masalan', 'lakéén'], answer: 0 },

    { type: 'build', en: 'All right then, I will see you at five.',
      tiles: ['Tayyeb', 'lakéén', 'bshouufak', '3al-khamsé'], extra: ['yalla'], answer: 'Tayyeb lakéén bshouufak 3al-khamsé' },

    { type: 'match',
      pairs: [['Tayyeb', 'all right'], ['lakéén', 'in that case'], ['masalan', 'for example'], ['ba3déén', 'besides']] },

    { type: 'choice', q: 'Someone says `ktiir smallah` in a flat voice. What has just happened?',
      options: ['they do not believe you', 'they are impressed', 'they are apologising'], answer: 0,
      explain: 'Same words as the blessing, opposite meaning. Only the voice tells you which one you got.' },

    { type: 'type', en: 'you are right (said to a man)', answer: 'ma3ak 7a2', accept: ['ma3ak 7a22'] }
  ],

  quiz: [
    { type: 'choice', q: 'Which of these is aimed at a plan rather than at an accident?',
      options: ['balééha', 'maa 3lééh', 'basiiTa'], answer: 0 },

    { type: 'gap', en: 'You have offered to cook and your friend is worried it is too much work.',
      lines: [
        { who: 'Nour', lb: 'akiid? ktiir sheghl', en: 'are you sure? it is a lot of work' },
        { who: 'You', you: true, blank: true },
        { who: 'Nour', lb: 'kellik zoo2', en: 'you are all good taste' }
      ],
      options: ['walaw, basiiTa', 'balééha, basiiTa', 'Saraa7a, basiiTa'], answer: 0,
      explain: '`balééha` would cancel the dinner you just offered to cook.' },

    { type: 'choice', q: 'A waiter takes your order and says `yalla`. What has he told you?',
      options: ['it is already happening', 'hurry up', 'never mind'], answer: 0,
      explain: 'Same word, and the situation supplies the direction.' },

    { type: 'match',
      pairs: [['smallah', 'a guard placed on praise'], ['walaw', 'there is no debt'], ['3anjad', 'for real'], ['nafs esh-shii', 'same here']] },

    { type: 'type', en: 'never mind, it is fine', answer: 'maa 3lééh', accept: ['ma 3lééh', 'maa 3leeh'] },

    { type: 'gap', en: 'Two of you are deciding whether to walk back. Your friend is exhausted and you would rather not push it.',
      lines: [
        { who: 'Hala', lb: 'Saraa7a ana helkééné', en: 'honestly, I am worn out' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Tayyeb, balééha', 'Tayyeb, smallah', 'Tayyeb, walaw'], answer: 0,
      explain: 'Here there really is a plan to drop, so `balééha` is the right one at last.' },

    { type: 'build', en: 'I mean not today, tomorrow.',
      tiles: ['ya3né', 'mesh', 'lyoom', 'boukra'], extra: ['maa'], answer: 'ya3né mesh lyoom boukra',
      explain: '`mesh` negates a word, not a verb — and `lyoom` is a word.' },

    { type: 'choice', q: 'Which pair is a fixed exchange?',
      options: [
        'kellak zoo2 answered with walaw',
        'balééha answered with smallah',
        'ya3né answered with masalan'
      ], answer: 0 },

    { type: 'choice', q: 'Why can a written `ktiir smallah` be dangerous?',
      options: [
        'its meaning lives in the tone, and writing carries no tone',
        'it is an old-fashioned phrase',
        'it can only be said to a woman'
      ], answer: 0 }
  ]
});
