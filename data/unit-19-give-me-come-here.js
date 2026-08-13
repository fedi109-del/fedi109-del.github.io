LEB.addUnit({
  id: 'u19',
  stage: 3,
  order: 19,
  title: 'Give Me, Come Here',
  goal: 'Ask for what you want out loud — in a bar, at the bakery, in a taxi — and sound like somebody asking, not somebody commanding.',
  canDo: [
    'Give the same instruction to a man, a woman, or a group',
    'Tell somebody not to do something, which is not the shape you would guess',
    'Stick for me and for us onto the order itself',
    'Soften a bare order so it lands as a request'
  ],

  grammar: [
    {
      heading: 'One order, three shapes',
      body:
        'The imperative is the one place in the verb system where you do not build anything from ' +
        'a prefix. You take the bare order, and then you choose who you are speaking to: nothing ' +
        'extra for a man, `-é` for a woman, `-o` or `-oo` for a group. Three shapes, and that is ' +
        'the whole system.\n\n' +
        'Do not confuse these endings with the possessive ones you have been using since the ' +
        'start. `-é` on a noun means *my*; `-é` on an order means *I am talking to a woman*. ' +
        'They look alike and do completely different jobs, and mixing them is the single most ' +
        'common thing that makes a request land wrong.\n\n' +
        'Two of these orders refuse to change for a woman. `3Tiiné` is the same whether you say ' +
        'it to a man or a woman, and so is `mDii`. That is not laziness on your part, it is the ' +
        'form. Only the plural moves.\n\n' +
        'And note that Lebanese does not hear a bare imperative as rude. `7oTT`, `jiib`, `ta3a` ' +
        'are ordinary shop and street language. Politeness is added separately, and you will do ' +
        'that at the end of this unit.',
      table: {
        headers: ['meaning', 'to a man', 'to a woman', 'to a group'],
        rows: [
          ['give me', '`3Tiiné`', '`3Tiiné`', '`3Touuné`'],
          ['put', '`7oTT`', '`7oTTé`', '`7oTToo`'],
          ['bring', '`jiib`', '`jiibé`', '`jiibo`'],
          ['come', '`ta3a`', '`ta3é`', '`ta3o`'],
          ['here you are, go ahead', '`tfaDDal`', '`tfaDDalé`', '`tfaDDalo`'],
          ['get up, come on', '`ouum`', '`ouumé`', '`ouumo`'],
          ['put on, wear', '`lboos`', '`lbesé`', '`lbeso`'],
          ['tell me', '`khabberné`', '`khabbriiné`', '`khabbrouuné`'],
          ['do (me a favour)', '`3mool`', '`3melé`', '`3melo`'],
          ['sign', '`mDii`', '`mDii`', '`mDouu`'],
          ['trim, thin out', '`khaffef`', '`khaffefé`', '`khaffefo`']
        ]
      },
      warning:
        '`tfaDDal` is not really an order at all. It is what somebody says while handing you a ' +
        'plate, opening a door, or offering you a chair — closest to *here you are* and *after ' +
        'you* at the same time. You will hear it forty times a day.'
    },

    {
      heading: 'The suffix that makes it a real request',
      body:
        'A bare order names an action. Real speech almost always names the person it is for, and ' +
        'Lebanese does that by hanging a second piece onto the verb itself: `-l-` plus an ending. ' +
        '`7oTT` is *put*; `7oTTellé` is *put for me*. That single syllable is most of the ' +
        'distance between textbook Lebanese and the way a request actually sounds at a counter.\n\n' +
        'The persons are the familiar ones: `-lé`, `-lak`, `-lik`, `-lo`, `-la`, `-lna`, ' +
        '`-lkon`, `-lon`. What changes is the verb in front of them. The masculine order grows a ' +
        'small helping vowel — `7oTT` becomes `7oTTel-`. The feminine `-é` stretches into `-ii-`, ' +
        'and the plural `-o` stretches into `-ouu-`. Sometimes the stem itself shifts: *bring* is ' +
        '`jiib`, but *bring us* is `jebelna`.\n\n' +
        'Which is why these are learned whole, not glued together letter by letter. Say the six ' +
        'forms in the table out loud until the shape is in your mouth.\n\n' +
        'One distinction worth keeping straight. `-l-` means *for* somebody. When the person is ' +
        'the thing being acted on rather than the beneficiary, a different ending appears: ' +
        '`3Tiiné` and `khabberné` end in `-né`, which is plain *me*.',
      table: {
        headers: ['', 'to a man', 'to a woman', 'to a group'],
        rows: [
          ['put', '`7oTT`', '`7oTTé`', '`7oTToo`'],
          ['put **for me**', '`7oTTellé`', '`7oTTiilé`', '`7oTTouulé`'],
          ['bring', '`jiib`', '`jiibé`', '`jiibo`'],
          ['bring **us**', '`jebelna`', '`jiibiilna`', '`jiibouulna`']
        ]
      },
      examples: [
        { lb: '7oTTellé na3na3 ma3 el-khoDra', ar: 'حَطِّلي نَعْنَع مَع الخِضْرة', en: 'Put mint in with the vegetables for me.', note: 'at the bakery, to a man' },
        { lb: 'jebelna kéés 3aSiir', ar: 'جِبلْنا كاس عَصير', en: 'Bring us a glass of juice.' },
        { lb: '3Tiiné anniiné, 3mool ma3rouuf', ar: 'عَطيني قَنّينة، عْمول معروف', en: 'Give me a bottle, please.' }
      ],
      warning:
        'Both spellings of *give me* are in circulation: `3Tiiné` and `3aTiiné`. Say either, ' +
        'accept either. The vowel that comes and goes there is not carrying meaning.'
    },

    {
      heading: 'Saying do not',
      body:
        'This is where the guess fails. A negative order is **not** `ma` plus the imperative you ' +
        'just learned. Lebanese throws the imperative away and reaches for something you already ' +
        'know: the bare present, second person — the same b-less form that shows up after ' +
        '`lamma` and `léézem`.\n\n' +
        'So *do not forget* is `ma tensa`. That `t-` is the you prefix, exactly what is left of ' +
        '`btensa` once the `b-` is removed — and the imperative you would have reached for plays ' +
        'no part in it. For a woman the `-é` goes back on, for a group the `-o`.\n\n' +
        'This is good news, not bad. It means you do not have to learn a second set of forms: ' +
        'if you can produce the bare verb after `lamma`, you can already produce every negative ' +
        'order in the language by putting `ma` in front of it.\n\n' +
        'Notice too that the dative does not disappear under the negative. *Do not tell me* is ' +
        '`maa t2ellé` — the `-lé` is still there, doing the same job it does in `7oTTellé`.',
      table: {
        headers: ['meaning', 'to a man', 'to a woman', 'to a group'],
        rows: [
          ['do not forget', '`ma tensa`', '`ma tensé`', '`ma tenso`'],
          ['do not be long', '`maa tTawwel`', '`maa tTawwlé`', '`maa tTawwlo`'],
          ['do not tell me', '`maa t2ellé`', '`maa t2eliilé`', '`maa t2elouulé`']
        ]
      },
      examples: [
        { lb: 'ma tensa l-khebz', ar: 'ما تِنْسى الخِبْز', en: 'Do not forget the bread.' },
        { lb: 'maa tTawwlé, ne7na naaTriin', ar: 'ما تطَوّْلي، نحنا ناطْرين', en: 'Do not be long, we are waiting.', note: 'to a woman' }
      ]
    },

    {
      heading: 'The same order, said two ways',
      body:
        'Since the bare imperative is neutral, politeness in Lebanese is a word you add rather ' +
        'than a form you change. Three of them cover almost everything, and they are not ' +
        'interchangeable.\n\n' +
        '`3mool ma3rouuf` is the everyday one — literally *do a favour* — and it inflects like ' +
        'any order: `3melé ma3rouuf` to a woman, `3melo ma3rouuf` to a group. `eza betriid` is ' +
        'gentler and slightly more formal, literally *if you would like*, and it is the one to ' +
        'use with somebody you do not know. `bisharafak` is a different animal altogether: it is ' +
        'pleading, almost impatient, the tone of somebody who has been waiting twenty minutes. ' +
        'Use it with a friend, never with a waiter.\n\n' +
        'These sit at either end of the order, and either position is fine.\n\n' +
        'Two answers come back at you. `tekram 3aynak` is the warm *with pleasure*, and `walaw` ' +
        'brushes your thanks away as unnecessary. Neither needs a reply from you beyond a nod.',
      table: {
        headers: ['bare', 'softened', 'what changed'],
        rows: [
          ['`3Tiiné shaay`', '`3Tiiné shaay, 3mool ma3rouuf`', 'ordinary politeness'],
          ['`jiib el-7sééb`', '`eza betriid, jiib el-7sééb`', 'gentler, for a stranger'],
          ['`wa22ef hoon`', '`wa22ef hoon, 3mool ma3rouuf`', 'the taxi version'],
          ['`ta3a hoon`', '`ta3a hoon, bisharafak`', 'pleading — only with people you know']
        ]
      },
      warning:
        'The reply to a request granted is `tekram 3aynak`, not `3afwan`. And if you thank ' +
        'somebody for something small, expect `walaw` back — it means *please, do not even ' +
        'mention it*, and it is a compliment.'
    }
  ],

  vocab: [
    { lb: '3Tiiné', ar: 'عَطيني', en: 'give me (to one person)', pos: 'v', note: 'same form for a man and a woman; also written `3aTiiné`' },
    { lb: '3Touuné', ar: 'عَطوني', en: 'give me (to a group)', pos: 'v' },
    { lb: '7oTT', ar: 'حَطّ', en: 'put (to a man)', pos: 'v' },
    { lb: '7oTTellé', ar: 'حَطِّلي', en: 'put for me', pos: 'phr', note: 'the order plus the for-me suffix' },
    { lb: 'jiib', ar: 'جيب', en: 'bring (to a man)', pos: 'v' },
    { lb: 'jebelna', ar: 'جِبلْنا', en: 'bring us', pos: 'phr', note: 'the stem shifts: jiib becomes jebel- before the suffix' },
    { lb: 'ta3a', ar: 'تَعا', en: 'come (to a man)', pos: 'v' },
    { lb: 'tfaDDal', ar: 'تْفَضَّل', en: 'here you are, go ahead, after you', pos: 'phr' },
    { lb: 'ouum', ar: 'قوم', en: 'get up, come on', pos: 'v' },
    { lb: 'khabberné', ar: 'خَبِّرْني', en: 'tell me', pos: 'v' },
    { lb: 'wa22ef', ar: 'وَقِّف', en: 'stop (to a man)', pos: 'v', note: 'what you say to a driver' },
    { lb: '3mool ma3rouuf', ar: 'عْمول معروف', en: 'please (literally: do a favour)', pos: 'phr' },
    { lb: 'eza betriid', ar: 'إذا بِتْريد', en: 'please (literally: if you would like)', pos: 'phr' },
    { lb: 'ma tensa', ar: 'ما تِنْسى', en: 'do not forget (to a man)', pos: 'phr' },
    { lb: 'bidouun', ar: 'بِدون', en: 'without', pos: 'prep' },
    { lb: 'hoon', ar: 'هون', en: 'here', pos: 'adv' }
  ],

  phrases: [
    {
      lb: '3mool ma3rouuf', ar: 'عْمول معروف', en: 'please — do me a favour',
      when: 'hung on either end of any request, to a man',
      reply: 'tekram 3aynak', replyEn: 'may your eye be honoured — the warm with pleasure'
    },
    {
      lb: '3Tiiné shaay, 3mool ma3rouuf', ar: 'عَطيني شاي، عْمول معروف', en: 'Give me a tea, please.',
      when: 'at a counter, ordering for yourself'
    },
    {
      lb: '7oTTellé shwayy khoDra', ar: 'حَطِّلي شْوَي خِضْرة', en: 'Put a bit of veg in for me.',
      when: 'at the bakery, while the man2ouushé is being made'
    },
    {
      lb: 'jebelna 3aSiir, eza betriid', ar: 'جِبلْنا عَصير، إذا بِتْريد', en: 'Bring us a juice, please.',
      when: 'ordering for a table rather than for yourself'
    },
    {
      lb: 'wa22ef hoon, 3mool ma3rouuf', ar: 'وَقِّف هون، عْمول معروف', en: 'Stop here, please.',
      when: 'the sentence that gets you out of a taxi where you want to be'
    },
    {
      lb: 'ta3a hoon', ar: 'تَعا هون', en: 'Come here.',
      when: 'to a man; to a woman ta3é hoon, to a group ta3o hoon'
    },
    {
      lb: 'khabberné wéén el-forn', ar: 'خَبِّرْني وين الفُرن', en: 'Tell me where the bakery is.',
      when: 'asking a stranger for directions without a long preamble'
    },
    {
      lb: 'ma tensa l-khebz', ar: 'ما تِنْسى الخِبْز', en: 'Do not forget the bread.',
      when: 'the negative order: ma plus the bare verb, never plus the imperative'
    },
    {
      lb: 'shukran', ar: 'شكرا', en: 'thank you',
      when: 'after any of the above',
      reply: 'walaw', replyEn: 'please, do not even mention it'
    }
  ],

  dialogue: {
    title: 'A man2ouushé and a stop that is not a stop',
    setting: 'The bakery first, then the back of a service cab. Nothing here is a request in the English sense, and none of it is rude.',
    lines: [
      { who: 'Baker', lb: 'tfaDDal, shou baddak?', ar: 'تفضل، شو بدك؟', en: 'go ahead, what would you like?' },
      { who: 'You', you: true, lb: '3Tiiné tnéén za3tar, 3mool ma3rouuf.', ar: 'عطيني تنين زعتر، عمول معروف', en: 'give me two thyme ones, please.',
        note: '3Tiiné is a bare order — give me. With 3mool ma3rouuf on the end it is exactly as polite as it needs to be.' },
      { who: 'Baker', lb: 'shii tééné? 7oTTellak jebné kaméén?', ar: 'شي تاني؟ حطلك جبنة كمان؟', en: 'anything else? Shall I put cheese in for you too?' },
      { who: 'You', you: true, lb: 'éé, 7oTTellé shwayy jebné. bidouun banadouura.', ar: 'إي، حطلي شوي جبنة. بدون بندورة', en: 'yes, put a bit of cheese in for me. Without tomato.' },
      { who: 'Baker', lb: 'tfaDDal.', ar: 'تفضل', en: 'here you are.',
        note: 'Same word as at the start. tfaDDal covers here-you-are, go-ahead, after-you and come-in.' },
      { who: 'You', you: true, lb: 'ya3Tiik el-3aafyé.', ar: 'يعطيك العافية', en: 'may he give you strength.' },
      { who: 'Driver', lb: 'wéén?', ar: 'وين؟', en: 'where?' },
      { who: 'You', you: true, lb: 'wa22ef hoon, 3mool ma3rouuf. hoon, hoon!', ar: 'وقف هون، عمول معروف. هون، هون', en: 'stop here, please. Here, here!',
        note: 'Said late, twice, and slightly too loud. That is the correct way to get out of a service.' }
    ]
  },

  culture: {
    heading: 'Orders are not rude here',
    icon: 'give',
    body:
      'Translate `3Tiiné shaay` word for word and you get "give me a tea", which in English is what ' +
      'you say when you have decided to be unpleasant. In Lebanese it is neutral. The imperative is ' +
      'the ordinary way to ask for something, and politeness is added on the end rather than built ' +
      'into the verb.\n\n' +
      'That is the whole trick. `3Tiiné` on its own is blunt. `3Tiiné…, 3mool ma3rouuf` is warm. ' +
      'English softens by twisting the sentence — could I possibly have — and Lebanese softens by ' +
      'appending three syllables. Trying to import the English construction produces something that ' +
      'sounds anxious.\n\n' +
      '`tfaDDal` deserves its own note, because it does more work than any other word in the ' +
      'language. It is here you are, go ahead, after you, please come in, help yourself, and take a ' +
      'seat. It changes with who you are talking to — `tfaDDalé` to a woman, `tfaDDalo` to a group — ' +
      'and if you learn one word from this unit, learn this one.\n\n' +
      'The `-ellé` and `-ellak` endings on `7oTT` are worth noticing too: put **for me**, put **for ' +
      'you**. Lebanese attaches the person you are doing it for straight onto the verb, and it turns ' +
      'an order into something closer to a favour.',
  },

  drills: [
    { type: 'match',
      pairs: [['3Tiiné', 'give me'], ['jiib', 'bring'], ['ta3a', 'come'], ['7oTT', 'put']] },

    { type: 'conjugate', en: 'put (speaking to a woman)', root: '7oTT', person: 'enté', tense: 'imperative',
      options: ['7oTTé', '7oTT', '7oTToo', '7oTTellé'], answer: 0,
      explain: 'A woman gets -é on the order. 7oTTellé is a different thing: put for me.' },

    { type: 'choice', q: 'You are at the bakery. How do you say "put olives in for me"?',
      options: ['7oTTellé zaytouun', '7oTT zaytouun elé', '7oTTé zaytouun'], answer: 0,
      explain: 'The for-me rides on the verb as -lé. The third one is aimed at a woman and says nothing about you.' },

    { type: 'build', en: 'Bring us a juice, please.',
      tiles: ['jebelna', '3aSiir', 'eza', 'betriid'], extra: ['jiib'], answer: 'jebelna 3aSiir eza betriid' },

    { type: 'gap', en: 'You are in a taxi and your street is coming up.',
      lines: [
        { who: 'Driver', lb: 'wéén baddak tenzal?', en: 'where do you want to get out?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['wa22ef hoon, 3mool ma3rouuf', 'ta3a hoon, 3mool ma3rouuf', 'ma tensa hoon'], answer: 0,
      explain: 'You are telling him to stop, not inviting him over.' },

    { type: 'choice', q: 'Which is the correct way to tell a woman not to forget something?',
      options: ['ma tensé', 'ma ensé', 'maa tensa'], answer: 0,
      explain: 'The negative order is ma plus the bare present, second person: t- for you, -é for a woman. maa tensa is aimed at a man.' },

    { type: 'type', en: 'Give me a tea, please.', answer: '3Tiiné shaay 3mool ma3rouuf', accept: ['3aTiiné shaay 3mool ma3rouuf'] },

    { type: 'conjugate', en: 'bring (speaking to a group)', root: 'jiib', person: 'ento', tense: 'imperative',
      options: ['jiibo', 'jiibé', 'jiib', 'jiibouulna'], answer: 0,
      explain: 'A group takes -o. jiibouulna already carries bring us on top of it.' },

    { type: 'match',
      pairs: [['3mool ma3rouuf', 'please'], ['tekram 3aynak', 'with pleasure'], ['walaw', 'do not even mention it'], ['tfaDDal', 'here you are']] },

    { type: 'build', en: 'Come here, please.',
      tiles: ['ta3a', 'hoon', '3mool', 'ma3rouuf'], extra: ['ouum'], answer: 'ta3a hoon 3mool ma3rouuf' },

    { type: 'choice', q: 'Somebody hands you your plate and says "tfaDDal". What is happening?',
      options: ['They are giving you something', 'They are asking you to wait', 'They are thanking you'], answer: 0,
      explain: 'tfaDDal covers here you are, after you and go ahead — always an offer, never a demand.' },

    { type: 'gap', en: 'You are ordering at the bakery. The woman behind the counter answers you.',
      lines: [
        { who: 'You', you: true, lb: '7oTTiilé shwayy za3tar, 3mool ma3rouuf', en: 'put a bit of za3tar in for me, please' },
        { who: 'Her', blank: true }
      ],
      options: ['tekram 3aynak', 'walaw', 'ma tensa'], answer: 0,
      explain: 'tekram 3aynak is the answer to a request granted. walaw answers thanks, not a request.' },

    { type: 'type', en: 'Do not forget the bread.', answer: 'ma tensa l-khebz' },

    { type: 'choice', q: 'Why is "give me" the same word for a man and a woman?',
      options: [
        'Some orders simply do not take the feminine -é; only the plural moves',
        'Because it ends in a vowel',
        'Because it is a polite form'
      ], answer: 0,
      explain: '3Tiiné and mDii are both like this. It is a fact about those verbs, not a rule you can predict.' }
  ],

  quiz: [
    { type: 'conjugate', en: 'do not be long (speaking to a group)', root: 'Tawwel', person: 'ento', tense: 'negative imperative',
      options: ['maa tTawwlo', 'maa tTawwel', 'maa tTawwlé', 'maa Tawwlo'], answer: 0 },

    { type: 'choice', q: 'What is wrong with "ma ensa l-khebz"?',
      options: [
        'A negative order is ma plus the bare present with t-, so it has to be ma tensa',
        'Nothing — it is correct',
        'The order of the words is wrong'
      ], answer: 0 },

    { type: 'build', en: 'Put a bit of veg in for me.',
      tiles: ['7oTTellé', 'shwayy', 'khoDra'], extra: ['7oTT', 'elé'], answer: '7oTTellé shwayy khoDra' },

    { type: 'type', en: 'Bring us a glass of juice.', answer: 'jebelna kéés 3aSiir' },

    { type: 'match',
      pairs: [['7oTTiilé', 'put for me — to a woman'], ['7oTTouulé', 'put for me — to a group'], ['jebelna', 'bring us — to a man'], ['jiibiilna', 'bring us — to a woman']] },

    { type: 'gap', en: 'A friend is about to leave the house and you need something from the shop.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Sami', lb: 'tekram 3aynak', en: 'with pleasure' }
      ],
      options: ['jebelna khebz, 3mool ma3rouuf', 'jiib khebz, walaw', 'ma tensa, tfaDDal'], answer: 0,
      explain: 'walaw and tfaDDal are answers, not requests. Only the first line asks for anything.' },

    { type: 'choice', q: 'You do not know the person and you want to sound gentle. Which softener?',
      options: ['eza betriid', 'bisharafak', 'walaw'], answer: 0,
      explain: 'bisharafak is pleading and belongs with friends; walaw is a reply, not a request.' },

    { type: 'choice', q: 'Which pair shows the same order aimed at a man and at a woman?',
      options: ['khabberné / khabbriiné', 'khabberné / khabbrouuné', '3Touuné / 3Tiiné'], answer: 0,
      explain: 'khabbrouuné is the group. 3Touuné is also the group — that pair is the wrong way round.' },

    { type: 'type', en: 'Stop here, please.', answer: 'wa22ef hoon 3mool ma3rouuf' },

    { type: 'choice', q: 'What does the -lé in 7oTTellé do that the -né in 3Tiiné does not?',
      options: [
        'It marks the person the action is for, not the person it lands on',
        'It marks a woman rather than a man',
        'It makes the order polite'
      ], answer: 0,
      explain: 'for me is -lé; plain me is -né. Two suffix families, both riding on the same verb.' }
  ]
});
