LEB.addUnit({
  id: 'u38',
  stage: 5,
  order: 38,
  title: 'Making Plans',
  goal: 'Propose something, settle an hour and a place, decline without damage, and behave once you are through the door.',
  canDo: [
    'Propose an outing two different ways, and know why the second verb loses its b',
    'Fix a time with the verb that takes you as its object rather than its subject',
    'Say no, postpone, or give in — each in the shape a Lebanese speaker expects',
    'Handle the door, the table and the goodbye when you are the guest'
  ],

  grammar: [
    {
      heading: 'Two ways to say let us',
      body:
        'Lebanese has no word for "let us". It has two workarounds, and they are not quite the same ' +
        'move.\n\n' +
        'The first is `ta3a`, which is simply the imperative "come", agreeing with the person you are ' +
        'talking to: `ta3a` to a man, `ta3é` to a woman, `ta3o` to a group. Put a bare verb behind it ' +
        'and it becomes a hortative. It is warm and slightly pushy, because it literally starts by ' +
        'telling somebody to come.\n\n' +
        'The second is `khalliina`, from `khallii-` ("let, leave, allow") with the object suffix ' +
        'already attached. The "us" is inside the word, which is why `khalliina` never changes shape ' +
        'no matter who you are talking to. It proposes a joint decision rather than pulling somebody ' +
        'along, and the rest of the series is worth having: `khalliini` (let me), `khalliik` (let you), ' +
        '`khalliih` (let him), `khalliihon` (let them).\n\n' +
        'Both are on the b-drop list. The verb behind them stays fully conjugated for whoever is doing ' +
        'it, but the `b-` disappears: `neshtré`, not `mneshtré`; `na3mol`, not `mna3mol`. This is the ' +
        'same rule you have met after `baddé` and `léézem`, and it never stops applying.',
      table: {
        headers: ['form', 'who it agrees with', 'example'],
        rows: [
          ['`ta3a`', 'a man', '`ta3a nrouu7`'],
          ['`ta3é`', 'a woman', '`ta3é nrouu7`'],
          ['`ta3o`', 'more than one', '`ta3o nrouu7`'],
          ['`khalliina`', 'nobody — it never changes', '`khalliina nrouu7`'],
          ['`khalliini`', '(let me)', '`khalliini shouuf`'],
          ['`khalliihon`', '(let them)', '`khalliihon yerja3o`']
        ]
      },
      examples: [
        { lb: 'ta3a nrouu7 3al-ba7r sabt el-jééyé', ar: 'تَعا نْروح عَ البَحر السَّبْت الجّايي', en: 'Come on, let us go to the sea next Saturday.' },
        { lb: 'ta3é neshtré t-tazééker lyoom', ar: 'تَعي نِشْتْري التَّذاكِر اليوم', en: 'Let us buy the tickets today.' },
        { lb: 'khalliina na3mol shii ba3d eD-Dohr', ar: 'خَلّينا نَعْمُل شي بَعْد الضُّهر', en: 'Let us do something this afternoon.' },
        { lb: 'khalliihon yerja3o ma3na', ar: 'خَلّيهُن يِرْجَعوا مَعْنا', en: 'Let them come back with us.' }
      ],
      warning:
        '`ta3a` agrees with your listener; `khalliina` does not agree with anything, because its ' +
        'person is already glued on. Getting these the wrong way round is the commonest slip: there is ' +
        'no `ta3ana` and no `khalliiné` for "let us".'
    },

    {
      heading: 'The verb where you are the object',
      body:
        'Settling a time runs through one small verb, `binééseb`, "it suits". Its argument structure is ' +
        'the opposite of the English one, and this is the single reliable way to spot a learner who is ' +
        'still translating.\n\n' +
        'In English, **you** suit a time, or a time suits you, and either sentence works. In Lebanese ' +
        'only one is possible: the **hour is the subject** and the **person is an object suffix**. ' +
        '`ayy wa2t binéésbak?` is literally "which time suits-you". There is no `ana binééseb`. There ' +
        'is no version where you are doing the suiting.\n\n' +
        'The same shape governs `3a béél-`, the phrase for feeling like something. The appetite belongs ' +
        'to your `béél`, your mind — `3a béélak?` is "is it on your mind?" — and again you are not the ' +
        'subject.\n\n' +
        'Answering is easier than asking, because you do not use `binééseb` back. You say `akiid`, or ' +
        '`mnii7`, or you counter with a different hour and the word `a7san`: `s-séé3a tes3a a7san`. ' +
        'That is the whole negotiation. Two questions, one counter-offer, and a confirmation.',
      table: {
        headers: ['what you mean', 'to a man', 'to a woman'],
        rows: [
          ['what time works for you?', '`ayy wa2t binéésbak?`', '`ayy wa2t binéésbik?`'],
          ['does five work?', '`s-séé3a khamsé binéésbak?`', '`s-séé3a khamsé binéésbik?`'],
          ['do you feel like it?', '`3a béélak?`', '`3a béélik?`'],
          ['nine is better', '`s-séé3a tes3a a7san`', '`s-séé3a tes3a a7san`']
        ]
      },
      examples: [
        { lb: 'ayy wa2t binéésbik boukra?', ar: 'أَيّ وَقْت بينسْبِك بُكْرة؟', en: 'What time works for you tomorrow?' },
        { lb: 's-séé3a setté binéésbak, aw tes3a a7san?', ar: 'السّاعة سِتّة بينسْبَك، أَو تِسْعة أَحْسَن؟', en: 'Does six work for you, or is nine better?' },
        { lb: '3a béélik nrouu7 3al-cinema?', ar: 'عَ بالِك نْروح عَ السينَما؟', en: 'Do you feel like going to the cinema?', note: 'a bare verb again, because `3a béél-` behaves like the other suffix verbs' }
      ],
      warning:
        'Never put yourself in the subject slot. `ana binééseb` is not a clumsy sentence, it is not a ' +
        'sentence at all. The hour suits you; the wish sits in your `béél`. Both leave you as the ' +
        'object, and that is the shape to get used to.'
    },

    {
      heading: 'Everything you promise is future',
      body:
        'A plan is made almost entirely of promises, so the whole of this unit runs on `ra7`.\n\n' +
        '`ra7` never changes. It does not agree with anyone, it carries no person and no number, and ' +
        'the verb behind it does all the work — conjugated for its subject, and stripped of its `b-`. ' +
        'That is the entire future tense.\n\n' +
        'Two details are worth guarding. The first is negation: `maa` goes **in front of `ra7`**, never ' +
        'between `ra7` and the verb. `maa ra7 e2dar` is "I will not be able to"; the other order does ' +
        'not exist. The second is the contrast with `3am`, which marks something happening right now ' +
        'and **keeps** the `b-`. `ra7 rouu7` is "I will go", `3am brouu7` is "I am going", and the only ' +
        'visible difference between them is that missing `b`.\n\n' +
        'You will also need a verb "to be", which Lebanese does not have in the present but does have ' +
        'in the future. `bkouun`, `betkouun`, `bikouun`, `menkouun` — or with `ra7`: `ra7 kouun`, ' +
        '`ra7 tkouun`. It is how you promise to be somewhere at an hour, which is most of what ' +
        'arranging to meet consists of.',
      table: {
        headers: ['person', 'will arrive', 'will be'],
        rows: [
          ['ana', '`ra7 ouuSal`', '`ra7 kouun`'],
          ['enta', '`ra7 touuSal`', '`ra7 tkouun`'],
          ['enté', '`ra7 touuSalé`', '`ra7 tkouuné`'],
          ['houwwé', '`ra7 youuSal`', '`ra7 ykouun`'],
          ['hiyyé', '`ra7 touuSal`', '`ra7 tkouun`'],
          ['ne7na', '`ra7 nouuSal`', '`ra7 nkouun`'],
          ['ento', '`ra7 touuSalo`', '`ra7 tkouuno`'],
          ['henné', '`ra7 youuSalo`', '`ra7 ykouuno`']
        ]
      },
      examples: [
        { lb: 'ra7 nouuSal 2abl es-séé3a tmééné', ar: 'رَح نوصَل قَبل السّاعة تْمانة', en: 'We will get there before eight.' },
        { lb: 'maa ra7 e2dar erja3 2abl es-séé3a 3ashra', ar: 'ما رَح إِقْدَر إِرْجَع قَبل السّاعة عَشْرة', en: 'I will not be able to get back before ten.' },
        { lb: 'bkouun bel-maktab la-s-séé3a setté', ar: 'بْكون بالمَكْتَب لَلسّاعة سِتّة', en: 'I will be at the office until six.' }
      ],
      warning:
        '`ra7` takes the `b-` away, `3am` leaves it alone. That one letter is the whole difference ' +
        'between a promise and a live report, and it is the first thing a Lebanese ear checks.'
    },

    {
      heading: 'Once you are through the door',
      body:
        'Being invited somewhere sets off a short chain of formulas, each with exactly one right ' +
        'answer. You are welcomed with `ahla w sahla` and you answer `ahla fiik`. You are told ' +
        '`tfaDDal` — one word doing three jobs at once: come in, sit down, help yourself. It will be ' +
        'said to you more times in one evening than you expect. Whoever cooked or carried gets ' +
        '`ya3Tiik el-3aafyé`, and answers `Allah y3aafiik`. On the way out it is `ma3 es-saléémé`, ' +
        'answered with `Allah ysallmak`.\n\n' +
        'The harder thing is not the formulas but the arithmetic underneath them. **One refusal is not ' +
        'a refusal.** If you decline a second helping, or an invitation, the other side is supposed to ' +
        'push: `la wloo`, `bisharafak`. That push is not pressure and it is not rudeness — it is the ' +
        'host doing their half of the job. A guest who accepts the very first offer looks like someone ' +
        'who came to eat. A host who accepts the very first no looks glad you are going.\n\n' +
        'So plan for two passes. If you mean yes, refuse once lightly and then yield with something ' +
        'warm — `3ala albé metl el-3asal`. If you genuinely mean no, the exit is `yaa réét` ("I wish") ' +
        'plus a concrete reason: a trip, a shift, a flight. Without the reason, `yaa réét` reads as ' +
        'the first move of the same dance, and the invitation will simply be repeated.',
      table: {
        headers: ['they say', 'you answer'],
        rows: [
          ['`ahla w sahla`', '`ahla fiik`'],
          ['`tfaDDal`', '`shukran` — and take it on the second offer'],
          ['`la wloo! bisharafak`', '`3ala albé metl el-3asal` (yes) or `yaa réét, bass…` (no)'],
          ['`ya3Tiik el-3aafyé`', '`Allah y3aafiik`'],
          ['`ma3 es-saléémé`', '`Allah ysallmak`']
        ]
      },
      warning:
        'Do not hear `la wloo` and `bisharafak` as somebody refusing to take your answer. In this ' +
        'script, insisting is what a host is for. Only `yaa réét` **with a reason attached** reads as ' +
        'a final no.'
    }
  ],

  vocab: [
    { lb: 'ta3a', ar: 'تَعا', en: 'come, let us', pos: 'v', note: '`ta3a` / `ta3é` / `ta3o`, and the verb behind it drops its b' },
    { lb: 'khalliina', ar: 'خَلّينا', en: 'let us', pos: 'phr', note: 'never changes — the "us" is already inside it' },
    { lb: 'binééseb', ar: 'بينسِب', en: 'it suits, it works for', pos: 'v', note: 'the hour is the subject, you are the object' },
    { lb: 'wa2t', ar: 'وَقْت', en: 'time', pos: 'n', gender: 'm' },
    { lb: 'a7san', ar: 'أَحْسَن', en: 'better', pos: 'adj' },
    { lb: 'boukra', ar: 'بُكْرة', en: 'tomorrow', pos: 'adv' },
    { lb: 'ba3d eD-Dohr', ar: 'بَعْد الضُّهر', en: 'afternoon', pos: 'n', gender: 'm' },
    { lb: 'tezkara', ar: 'تِذْكَرة', en: 'ticket', pos: 'n', gender: 'f', note: 'plural `tazééker`' },
    { lb: '7aflé', ar: 'حَفْلة', en: 'party', pos: 'n', gender: 'f' },
    { lb: 'sahra', ar: 'سَهْرة', en: 'an evening out, people over late', pos: 'n', gender: 'f' },
    { lb: 'Dayf', ar: 'ضَيْف', en: 'guest', pos: 'n', gender: 'm', note: 'plural `Dyouuf`' },
    { lb: 'maktab', ar: 'مَكْتَب', en: 'office', pos: 'n', gender: 'm' },
    { lb: 'm7ammas', ar: 'مْحَمَّس', en: 'excited, keen', pos: 'adj', gender: 'm' },
    { lb: 'mééne3', ar: 'مانِع', en: 'objection', pos: 'n', gender: 'm', note: 'lives almost only in `maa 3endé mééne3`' },
    { lb: '2ajjel', ar: 'أَجِّل', en: 'to postpone', pos: 'v', note: 'root: `b2ajjel`, `bi2ajjel`' },
    { lb: 'onTor', ar: 'إِنْطُر', en: 'to wait', pos: 'v', note: 'root: `bonTor`, `byonTor`' }
  ],

  phrases: [
    {
      lb: 'shou awlak?', ar: 'شو قَوْلَك؟', en: 'what do you say?',
      when: 'floating an idea before committing to it — `awlik` to a woman',
      reply: 'léésh la2?', replyEn: 'why not?'
    },
    {
      lb: '3a béélak?', ar: 'عَ بالَك؟', en: 'do you feel like it?',
      when: 'checking that they actually want to, not just that they are free',
      reply: 'ééh, ktiir', replyEn: 'yes, very much'
    },
    {
      lb: 'ayy wa2t binéésbak?', ar: 'أَيّ وَقْت بينسْبَك؟', en: 'what time works for you?',
      when: 'settling the hour, once the plan itself is agreed'
    },
    {
      lb: 'maa 3endé mééne3', ar: 'ما عِنْدي مانِع', en: 'I do not mind',
      when: 'agreeing without enthusiasm, which is a perfectly normal way to agree'
    },
    {
      lb: 'yaa réét!', ar: 'يا ريت!', en: 'I wish!',
      when: 'the polite no — final only if you attach a real reason to it'
    },
    {
      lb: 'bisharafak!', ar: 'بِشَرَفَك!', en: 'please!',
      when: 'refusing to accept somebody else\'s no; expected of a host, not pushy'
    },
    {
      lb: '3ala albé metl el-3asal', ar: 'عَلى قَلْبي مِتل العَسَل', en: 'on my heart like honey',
      when: 'the warm yes, given on the second pass after a light first refusal'
    },
    {
      lb: 'ya3Tiik el-3aafyé', ar: 'يعطيك العافْية', en: 'may he give you strength',
      when: 'to whoever cooked, carried, drove or worked while you sat',
      reply: 'Allah y3aafiik', replyEn: 'and may God keep you strong'
    },
    {
      lb: 'tfaDDal', ar: 'تْفَضَّل', en: 'come in, sit down, help yourself',
      when: 'said to you at a door, at a chair, over a dish — one word, three jobs'
    }
  ],

  drills: [
    { type: 'choice', q: 'Which of these is impossible in Lebanese?',
      options: ['khalliina mnrouu7', 'khalliina nrouu7', 'ta3é nrouu7'], answer: 0,
      explain: 'Everything behind a hortative loses its `b-`/`m-`. `mnrouu7` is the ordinary present and cannot follow `khalliina`.' },

    { type: 'conjugate', en: 'they will arrive', root: 'ouuSal', person: 'henné', tense: 'future',
      options: ['ra7 youuSalo', 'ra7 touuSalo', 'ra7 nouuSal', '3am byouuSalo'], answer: 0,
      explain: '`ra7` never changes. The verb takes the `henné` prefix and ending, with no `b-`.' },

    { type: 'gap', en: 'Nayla wants to fix a time to see a film with you.',
      lines: [
        { who: 'Nayla', lb: 'ayy wa2t binéésbak sabt el-jééyé?', en: 'what time works for you next Saturday?' },
        { who: 'You', you: true, blank: true },
        { who: 'Nayla', lb: 'Tayyeb, bshouufak 3end el-cinema', en: 'all right, see you at the cinema' }
      ],
      options: ['s-séé3a tes3a a7san', 'ana binééseb s-séé3a tes3a', 'binéésbak s-séé3a tes3a'], answer: 0,
      explain: 'You are never the subject of `binééseb`, so the second is impossible. The third asks about him, not about you.' },

    { type: 'build', en: 'Let us buy the tickets today.',
      tiles: ['khalliina', 'neshtré', 't-tazééker', 'lyoom'], extra: ['ra7'],
      answer: 'khalliina neshtré t-tazééker lyoom' },

    { type: 'match',
      pairs: [['tezkara', 'ticket'], ['maktab', 'office'], ['sahra', 'an evening out'], ['Dayf', 'guest']] },

    { type: 'choice', q: 'A host says `tfaDDal` and holds out the dish. You would in fact like some. What now?',
      options: [
        'Refuse lightly once, then accept when it is offered again',
        'Take it straight away and thank him',
        'Refuse and say nothing more'
      ], answer: 0,
      explain: 'One refusal is not a refusal. The second offer is the real one, and yielding on it is the polite move.' },

    { type: 'type', en: 'Why not?', answer: 'léésh la2', accept: ['leesh la2', 'lesh la2'] },

    { type: 'conjugate', en: 'you (a woman) will postpone', root: '2ajjel', person: 'enté', tense: 'future',
      options: ['ra7 t2ajjlé', 'ra7 t2ajjel', 'ra7 y2ajjel', 'bet2ajjlé'], answer: 0,
      explain: 'The `enté` bare form keeps its `-é` ending; only the `b-` goes.' },

    { type: 'build', en: 'I will not be able to get back before ten.',
      tiles: ['maa', 'ra7', 'e2dar', 'erja3', '2abl', 'es-séé3a', '3ashra'], extra: ['3am'],
      answer: 'maa ra7 e2dar erja3 2abl es-séé3a 3ashra' },

    { type: 'choice', q: 'What is the difference between `ra7 rouu7` and `3am brouu7`?',
      options: [
        '`ra7` strips the b and means "will"; `3am` keeps it and means "right now"',
        'They mean the same thing in different registers',
        '`3am` is for the past and `ra7` for the future'
      ], answer: 0,
      explain: 'One missing letter carries the whole tense contrast. It is the first thing a Lebanese ear notices.' },

    { type: 'match',
      pairs: [
        ['ahla w sahla', 'ahla fiik'],
        ['ya3Tiik el-3aafyé', 'Allah y3aafiik'],
        ['ma3 es-saléémé', 'Allah ysallmak'],
        ['shou awlak?', 'léésh la2?']
      ] },

    { type: 'gap', en: 'Zeina invites you for Saturday, but you will be away for work.',
      lines: [
        { who: 'Zeina', lb: 'ta3a 3enna sabt el-jééyé, 3am mna3mol sahra', en: 'come to ours next Saturday, we are having people over' },
        { who: 'You', you: true, blank: true },
        { who: 'Zeina', lb: 'la wloo! bisharafak, 2ajjel es-safra youméén', en: 'oh come on! please — push the trip back two days' }
      ],
      options: ['yaa réét! bass ra7 kouun barra 3ash-sheghl', 'basiiTa, maa fii lzouum', 'ahla fiik'], answer: 0,
      explain: '`yaa réét` plus a concrete reason is the only no that reads as final — and even then she pushes once, because that is her half of the exchange.' },

    { type: 'type', en: 'I wish! (the polite no)', answer: 'yaa réét', accept: ['ya reet', 'yaa reet'] },

    { type: 'choice', q: 'Where does `maa` go in the negative future?',
      options: ['In front of `ra7`', 'Between `ra7` and the verb', 'After the verb'], answer: 0,
      explain: '`maa ra7 nouuSal`. Negation attaches to the particle, not to the verb.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence is correctly built?',
      options: [
        'ta3o nrouu7 3al-ba7r boukra',
        'ta3o mnrouu7 3al-ba7r boukra',
        'ta3ana nrouu7 3al-ba7r boukra'
      ], answer: 0,
      explain: '`ta3o` agrees with the group you are addressing, and the verb behind it loses its `b-`.' },

    { type: 'gap', en: 'You are trying to shift a dinner to a later hour.',
      lines: [
        { who: 'Tarek', lb: 's-séé3a setté binéésbak?', en: 'does six work for you?' },
        { who: 'You', you: true, blank: true },
        { who: 'Tarek', lb: 'akiid, tmééné a7san elé kaméén', en: 'of course, eight is better for me too' }
      ],
      options: ['s-séé3a tmééné a7san, la2enné bkouun bel-maktab la-s-séé3a sab3a', 'ana maa binééseb setté', 'setté binéésbné mesh mnii7'], answer: 0,
      explain: 'You counter with an hour and `a7san`, and you keep the `b-` after `la2enno` because what follows is a whole sentence, not a subordinate verb.' },

    { type: 'type', en: 'Let us do something this afternoon.', answer: 'khalliina na3mol shii ba3d eD-Dohr',
      accept: ['khalliina na3mol shi ba3d ed-dohr'] },

    { type: 'match',
      pairs: [
        ['binééseb', 'it suits'],
        ['a7san', 'better'],
        ['mééne3', 'objection'],
        ['m7ammas', 'keen']
      ] },

    { type: 'conjugate', en: 'we will be', root: 'kouun', person: 'ne7na', tense: 'future',
      options: ['ra7 nkouun', 'ra7 ykouuno', 'menkouun', 'ra7 tkouuno'], answer: 0,
      explain: 'Lebanese has no present "to be", but the future needs one, and this is it.' },

    { type: 'build', en: 'Let them come back with us.',
      tiles: ['khalliihon', 'yerja3o', 'ma3na'], extra: ['byerja3o'],
      answer: 'khalliihon yerja3o ma3na' },

    { type: 'choice', q: 'Your host says `la wloo! bisharafak` after you have declined once. What is going on?',
      options: [
        'He is doing his half of a two-pass script; declining once was never going to be enough',
        'He is annoyed with you',
        'He has not understood what you said'
      ], answer: 0,
      explain: 'Insisting is what a host is for. Only `yaa réét` with a concrete reason ends it on the first pass.' },

    { type: 'choice', q: 'Why can you not build a Lebanese sentence meaning "I suit five"?',
      options: [
        'Because the hour is the subject of `binééseb` and the person can only be an object suffix',
        'Because `binééseb` is only used in questions',
        'Because five is said differently'
      ], answer: 0 },

    { type: 'type', en: 'What time works for you? (to a woman)', answer: 'ayy wa2t binéésbik',
      accept: ['ay wa2t binesbik', 'ayy wa2t bineesbik'] },

    { type: 'choice', q: 'Which one is **not** a b-drop trigger?',
      options: ['3am', 'ta3a', 'khalliina'], answer: 0,
      explain: '`3am` is the one particle that keeps the `b-`. Everything else here takes it away.' }
  ]
});
