LEB.addUnit({
  id: 'u04',
  stage: 1,
  order: 4,
  title: 'Numbers and Prices',
  goal: 'Count, ask what something costs, and understand the number that comes back at you.',
  canDo: [
    'Count from one to twenty and recognise the round numbers inside a price',
    'Ask a price with addéé and a quantity with kam, without mixing them up',
    'Ask for something politely using baddé, with no orders given',
    'Follow a price said in lira or in dollaar and react to it'
  ],

  grammar: [
    {
      heading: 'One to ten, in two shapes',
      body:
        'Lebanese numbers come in two shapes, and the difference is not decoration. There is the full ' +
        'form you use when you are counting out loud or answering how many — `wa7ad`, `tnéén`, ' +
        '`tléété`, `arb3a` — and a short form that appears the moment a noun follows. `tléété` becomes ' +
        '`tléét` in `tléét séé3aat`, three hours. `khamsé` becomes `khams` in `khams talééf`, five ' +
        'thousand. `setté` becomes `sett` in `sett ashkhaas`, six people. The number leans forward onto ' +
        'the noun and drops its own ending on the way.\n\n' +
        'Two is worth a second look, because Lebanese still keeps a special ending for exactly two of ' +
        'something. Glue `-één` onto the noun and you have a pair without saying two at all: `alféén` ' +
        'is two thousand, `kiiséén` is two bags, and `mar7abtéén` — the doubled hello from the first ' +
        'unit — is literally two hellos. Once you notice that ending you will hear it everywhere.\n\n' +
        'The clock has its own set again, and it does not match this one: one o clock is `we7dé`, not ' +
        '`wa7ad`. Those forms belong to a later unit. Learn the counting numbers here and do not be ' +
        'thrown when the hours look different.',
      table: {
        headers: ['number', 'Lebanese', 'Arabic'],
        rows: [
          ['1', '`wa7ad`', 'واحَد'],
          ['2', '`tnéén`', 'تْنين'],
          ['3', '`tléété`', 'تْلاتة'],
          ['4', '`arb3a`', 'أَرْبْعة'],
          ['5', '`khamsé`', 'خَمْسة'],
          ['6', '`setté`', 'سِتّة'],
          ['7', '`sab3a`', 'سَبْعة'],
          ['8', '`tmééné`', 'تْمانة'],
          ['9', '`tes3a`', 'تِسْعة'],
          ['10', '`3ashra`', 'عَشْرة']
        ]
      },
      examples: [
        { lb: 'tléét séé3aat', ar: 'تْلات ساعات', en: 'three hours', note: 'tléété loses its ending before the noun' },
        { lb: 'khams talééf', ar: 'خَمْس تَلاف', en: 'five thousand' },
        { lb: 'kiiséén', ar: 'كيسين', en: 'two bags', note: 'the two is inside the word' }
      ]
    },
    {
      heading: 'Eleven to twenty, and the round numbers',
      body:
        'From eleven to nineteen every number carries the same tail, `-ta3ash`. Once your ear catches ' +
        'that ending you know you are in the teens even if you miss the front of the word, and the ' +
        'front of the word is simply the unit you already know: `khamsé` five, `khamsta3ash` fifteen.\n\n' +
        'Above twenty, Lebanese says the unit first and hooks it on with `w-`, which is the word for ' +
        'and. Twenty-five is `khamsa w-3eshriin`, five and twenty. English used to build numbers the ' +
        'same way several centuries ago and then stopped; Lebanese never did.\n\n' +
        'Every round ten ends in `-iin`. That single fact is more useful than a memorised list, ' +
        'because it lets you hear a round number as a round number before you can produce it: ' +
        '`3eshriin` twenty, `tléétiin` thirty, `tméniin` eighty. Above them sit `miyyé` a hundred and ' +
        '`alf` a thousand, and after a number the word for thousands takes a `t`: `khams talééf`.\n\n' +
        'Prices in Lebanon live in the thousands, so `alf` will be the number word you hear most often ' +
        'in a day of shopping.',
      table: {
        headers: ['number', 'Lebanese', 'Arabic'],
        rows: [
          ['11', '`7da3ash`', 'حْدَعَش'],
          ['12', '`tna3ash`', 'تْنَعَش'],
          ['13', '`tlétta3ash`', 'تْلاتَّعَش'],
          ['14', '`arba3ta3ash`', 'أَرْبَعْتَعَش'],
          ['15', '`khamsta3ash`', 'خَمْسْتَعَش'],
          ['16', '`setta3ash`', 'سِتَّعَش'],
          ['17', '`saba3ta3ash`', 'سَبَعْتَعَش'],
          ['18', '`tméénta3ash`', 'تْمانْتَعَش'],
          ['19', '`tese3ta3ash`', 'تِسِعْتَعَش'],
          ['20', '`3eshriin`', 'عِشْرين'],
          ['30', '`tléétiin`', 'تْلاتين'],
          ['80', '`tméniin`', 'تْمانين'],
          ['100', '`miyyé`', 'مِيّة'],
          ['1000', '`alf`', 'أَلْف']
        ]
      },
      examples: [
        { lb: 'khamsa w-3eshriin', ar: 'خَمْسة وْعِشْرين', en: 'twenty-five', note: 'five and twenty, in that order' },
        { lb: 'tléétiin alf lira', ar: 'تْلاتين أَلْف ليرة', en: 'thirty thousand lira' },
        { lb: 'alféén', ar: 'أَلْفين', en: 'two thousand' }
      ]
    },
    {
      heading: 'addéé and kam are not the same question',
      body:
        'Both come out in English as how much or how many, and swapping them is the mistake that ' +
        'marks a learner out from the first sentence.\n\n' +
        '`addéé` asks about an amount you cannot count on your fingers: a price, a total, a stretch of ' +
        'time. It is the word at every till in the country. `addéé l-7sééb?` — how much is the bill. ' +
        '`addéé betriid?` — how much would you like, which is how you ask a seller what you owe him, ' +
        'because the whole transaction is framed as what he wants from you rather than what the thing ' +
        'costs. `addéé baddak menné?` says the same thing even more plainly. You will also see it ' +
        'written `addé`, with the vowel short.\n\n' +
        '`kam` asks how many, and it arrives with a rule English speakers break constantly: the noun ' +
        'after `kam` stays singular. `kam séé3a?` — how many hours, with `séé3a` in the singular, ' +
        'never the plural. `kam yoom?` — how many days. The counting is already inside the question, ' +
        'so the noun is not asked to carry it as well.\n\n' +
        'Get this wrong and you will still be understood. Get it right and you sound like someone who ' +
        'has been listening.',
      table: {
        headers: ['word', 'asks about', 'the noun after it', 'example'],
        rows: [
          ['`addéé`', 'a price, a total, an amount', 'usually no noun at all', '`addéé l-7sééb?`'],
          ['`kam`', 'how many of something countable', 'stays **singular**', '`kam yoom?`']
        ]
      },
      warning:
        'The noun after `kam` is singular. `kam séé3a?` is right. `kam séé3aat?` is the sentence that ' +
        'gives you away, and it is the first thing a Lebanese ear notices.'
    },
    {
      heading: 'Asking for it without ordering anyone about',
      body:
        'You can buy anything in Lebanon without ever using a command form. `baddé` means I want, and ' +
        'it takes a noun straight after it: `baddé kiis` — I want a bag. It is not rude; it is the ' +
        'normal way to say what you are after. If you want it softer, add `eza betriid` on the end, ' +
        'which means if you would like, and does the work of please.\n\n' +
        'To ask whether a shop even has the thing, use `3endkon` — do you have, said to a group, which ' +
        'is how a shop is addressed. `3endkon 3aSiir?` — do you have juice?\n\n' +
        'Then the money. Lebanon runs on two currencies at once, `lira` and `dollaar`, and a price ' +
        'said out loud will usually be in thousands of lira. `se3r` is the price, `7sééb` is the bill. ' +
        'If the number shocks you, `mesh ma32ouul` is what everyone says, and it is closer to that is ' +
        'ridiculous than to a complaint. When the seller hands your change back he may say ' +
        '`m3awwaDiin`, a small blessing over the money that has no English equivalent at all — you are ' +
        'not expected to answer it, only to recognise it.',
      table: {
        headers: ['what you say', 'what it does', 'example'],
        rows: [
          ['`baddé …`', 'I want …', '`baddé kiis`'],
          ['`eza betriid`', 'please, if you would like', '`baddé kiis eza betriid`'],
          ['`3endkon …?`', 'do you have …?', '`3endkon 3aSiir?`'],
          ['`ghaalé` / `ghaalyé`', 'expensive, said of a masculine / feminine thing', '`ghaalyé ktiir`'],
          ['`rkhiiS` / `rkhiiSa`', 'cheap, masculine / feminine', '`fii shii arkhaS?`']
        ]
      },
      warning:
        '`baddé` is not a verb, whatever the English makes you think. It is a stem with an ending ' +
        'glued on, from the same family of endings as `esmé`. The full set is coming in unit six, and ' +
        'once you have it you get `baddak`, `baddik` and the rest for free.'
    }
  ],

  vocab: [
    { lb: 'wa7ad', ar: 'واحَد', en: 'one', pos: 'num' },
    { lb: 'tnéén', ar: 'تْنين', en: 'two', pos: 'num' },
    { lb: 'tléété', ar: 'تْلاتة', en: 'three', pos: 'num', note: 'becomes tléét when a noun follows' },
    { lb: 'khamsé', ar: 'خَمْسة', en: 'five', pos: 'num' },
    { lb: '3ashra', ar: 'عَشْرة', en: 'ten', pos: 'num' },
    { lb: '3eshriin', ar: 'عِشْرين', en: 'twenty', pos: 'num' },
    { lb: 'miyyé', ar: 'مِيّة', en: 'a hundred', pos: 'num' },
    { lb: 'alf', ar: 'أَلْف', en: 'a thousand', pos: 'num', note: 'alféén is two thousand, talééf is thousands after a number' },
    { lb: 'addéé', ar: 'قَدّيه', en: 'how much', pos: 'adv', note: 'also written addé' },
    { lb: 'kam', ar: 'كَم', en: 'how many', pos: 'adv', note: 'the noun after it stays singular' },
    { lb: 'lira', ar: 'ليرة', en: 'lira, the Lebanese currency', pos: 'n', gender: 'f' },
    { lb: 'dollaar', ar: 'دولار', en: 'dollar', pos: 'n', gender: 'm' },
    { lb: 'se3r', ar: 'سِعْر', en: 'price', pos: 'n', gender: 'm' },
    { lb: '7sééb', ar: 'حْساب', en: 'bill, account', pos: 'n', gender: 'm' },
    { lb: 'ghaalé', ar: 'غالي', en: 'expensive (a masculine thing)', pos: 'adj', gender: 'm' },
    { lb: 'rkhiiS', ar: 'رْخيص', en: 'cheap (a masculine thing)', pos: 'adj', gender: 'm' }
  ],

  phrases: [
    {
      lb: 'addéé l-7sééb?', ar: 'قَدّيه الحْساب؟', en: 'how much is the bill?',
      when: 'closing a transaction in a restaurant or a shop'
    },
    {
      lb: 'addéé betriid?', ar: 'قَدّيه بِتْريد؟', en: 'how much would you like?',
      when: 'asking a man what you owe him — the polite everyday form'
    },
    {
      lb: 'addéé baddak menné?', ar: 'قَدّيه بَدَّك مِنّي؟', en: 'how much do you want from me?',
      when: 'the same question, more direct, to a man'
    },
    {
      lb: 'b-addéé ben-nhaar?', ar: 'بْقَدّيه بِالنّهار؟', en: 'how much per day?',
      when: 'asking a daily rate for anything rented'
    },
    {
      lb: 'baddé … eza betriid', ar: 'بَدّي… إذا بِتْريد', en: 'I would like …, please',
      when: 'asking for something across a counter without giving an order'
    },
    {
      lb: '3endkon …?', ar: 'عِنْدْكُن…؟', en: 'do you have …?',
      when: 'asking a shop whether they stock something at all'
    },
    {
      lb: 'fii shii arkhaS?', ar: 'في شي أَرْخَص؟', en: 'is there anything cheaper?',
      when: 'after a price you would rather not pay'
    },
    {
      lb: 'mesh ma32ouul!', ar: 'مِش مَعْقول!', en: 'that is unbelievable!',
      when: 'reacting to a price that has gone up again — said constantly, and expected'
    },
    {
      lb: 'm3awwaDiin', ar: 'مْعَوَّضين', en: 'may it come back to you',
      when: 'said by the seller as he hands your change over; you only need to recognise it'
    }
  ],

  dialogue: {
    title: 'A price you were not expecting',
    setting: 'A small shop with no price tags on anything. You have picked up a bag.',
    lines: [
      { who: 'You', you: true, lb: 'addéé hayda, 3mool ma3rouuf?', ar: 'قديه هيدا، عمول معروف؟', en: 'how much is this, please?' },
      { who: 'Shopkeeper', lb: 'hayda? khamsiin dollaar.', ar: 'هيدا؟ خمسين دولار', en: 'this one? Fifty dollars.' },
      { who: 'You', you: true, lb: 'khamsiin? mesh ma32ouul!', ar: 'خمسين؟ مش معقول!', en: 'fifty? That is unbelievable!',
        note: 'Not rude. Said with a smile it is the opening of a conversation, not the end of one.' },
      { who: 'Shopkeeper', lb: 'ghaalé? hayda jdiid, ya 7abiibé.', ar: 'غالي؟ هيدا جديد، يا حبيبي', en: 'expensive? This one is new, my dear.' },
      { who: 'You', you: true, lb: 'fii shii arkhaS?', ar: 'في شي أرخص؟', en: 'is there anything cheaper?' },
      { who: 'Shopkeeper', lb: 'fii. tléétiin. w hayda l-aakhir.', ar: 'في. تلاتين. وهيدا الآخر', en: 'there is. Thirty. And that is the last of it.',
        note: 'w hayda l-aakhir — "and this is the end" — is how a seller signals the haggling is over.' }
    ]
  },

  culture: {
    heading: 'Two currencies, one shop',
    icon: 'price',
    body:
      'Lebanon runs on the dollar and the lira at the same time, and which one a price is quoted in ' +
      'depends on the shop, the item and sometimes the hour. A number said with no currency attached ' +
      'is worth asking about: `dollaar walla lira?` costs you nothing and saves the ' +
      'misunderstanding.\n\n' +
      'Prices in lira come with a lot of zeros, so people shorten them in speech and drop the ' +
      'thousands entirely. Someone who says `3eshriin` about a coffee does not mean twenty lira. ' +
      'Listen for what is plausible rather than for what was literally said.\n\n' +
      'Haggling has a shape. You are expected to react to the first number — `mesh ma32ouul!` is ' +
      'part of the script, not an insult — and the seller is expected to come down once, not five ' +
      'times. This works in a market, in a taxi, and with a man selling you a rug. It does not work ' +
      'in a supermarket or a pharmacy, where the price on the shelf is the price.',
  },

  drills: [
    { type: 'match',
      pairs: [['tléété', 'three'], ['khamsé', 'five'], ['3ashra', 'ten'], ['3eshriin', 'twenty']] },

    { type: 'choice', q: 'Which question asks for a price?',
      options: ['addéé l-7sééb?', 'kam l-7sééb?', 'miin l-7sééb?'], answer: 0,
      explain: 'addéé is for amounts. kam counts things one by one.' },

    { type: 'choice', q: 'How do you ask "how many days"?',
      options: ['kam yoom?', 'kam iyyéém?', 'addéé yoom?'], answer: 0,
      explain: 'kam is followed by a singular noun. The plural iyyéém is exactly what a learner reaches for and exactly what nobody says.' },

    { type: 'build', en: 'How much is the bill?',
      tiles: ['addéé', 'l-7sééb'], extra: ['kam'], answer: 'addéé l-7sééb' },

    { type: 'type', en: 'twenty', answer: '3eshriin' },

    { type: 'gap', en: 'You have finished ordering at a bakery counter and you need the total.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Baker', lb: 'tléétiin alf lira', en: 'thirty thousand lira' }
      ],
      options: ['addéé betriid?', 'shou betriid?', 'wéén betriid?'], answer: 0,
      explain: 'The Lebanese way of asking a total is to ask the seller how much he would like.' },

    { type: 'choice', q: 'Which one is twenty-five?',
      options: ['khamsa w-3eshriin', '3eshriin w-khamsé', 'khamsé 3eshriin'], answer: 0,
      explain: 'The unit comes first and w- joins it to the ten: five and twenty.' },

    { type: 'match',
      pairs: [['lira', 'the Lebanese currency'], ['se3r', 'price'], ['7sééb', 'bill'], ['ghaalé', 'expensive']] },

    { type: 'build', en: 'I want a bag, please.',
      tiles: ['baddé', 'kiis', 'eza', 'betriid'], extra: ['addéé'], answer: 'baddé kiis eza betriid' },

    { type: 'choice', q: 'A shopkeeper hands you your change and says "m3awwaDiin". What is happening?',
      options: [
        'He is saying a small blessing over the money he is giving back',
        'He is telling you the price has gone up',
        'He is asking you for more money'
      ], answer: 0 },

    { type: 'type', en: 'How many hours?', answer: 'kam séé3a' },

    { type: 'choice', q: 'Which one means eighteen?',
      options: ['tméénta3ash', 'tmééné', 'tméniin'], answer: 0,
      explain: 'The -ta3ash tail marks the teens. tmééné is eight and tméniin is eighty.' },

    { type: 'gap', en: 'You are in a shop and the first price you hear is more than you wanted to pay.',
      lines: [
        { who: 'Seller', lb: 'tléétiin alf lira', en: 'thirty thousand lira' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['fii shii arkhaS?', 'fii shii ghaalé?', 'addéé betriid?'], answer: 0 },

    { type: 'choice', q: 'Why does khamsé become khams in "khams talééf"?',
      options: [
        'A number drops its ending when a noun follows it',
        'Because thousands are an irregular word',
        'Because it is a price rather than a count'
      ], answer: 0 }
  ],

  quiz: [
    { type: 'choice', q: 'Which is the right way to ask how many bags?',
      options: ['kam kiis?', 'kam kyéés?', 'addéé kiis?'], answer: 0,
      explain: 'Singular after kam, always. kyéés is the plural and it does not belong here.' },

    { type: 'type', en: 'How much is the bill?', answer: 'addéé l-7sééb', accept: ['addé l-7sééb', 'addéé el-7sééb'] },

    { type: 'match',
      pairs: [['7da3ash', 'eleven'], ['tna3ash', 'twelve'], ['tléétiin', 'thirty'], ['miyyé', 'a hundred']] },

    { type: 'build', en: 'Twenty-five thousand lira.',
      tiles: ['khamsa', 'w-3eshriin', 'alf', 'lira'], extra: ['miyyé'], answer: 'khamsa w-3eshriin alf lira' },

    { type: 'choice', q: 'A siyyaara is feminine. How do you say the car is expensive?',
      options: ['ghaalyé', 'ghaalé', 'arkhaS'], answer: 0,
      explain: 'The adjective agrees with the noun: ghaalé for a masculine thing, ghaalyé for a feminine one.' },

    { type: 'gap', en: 'A man is renting you something and you did not catch the daily rate.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Him', lb: 'tméniin dollaar', en: 'eighty dollars' }
      ],
      options: ['b-addéé ben-nhaar?', 'kam nhaar?', 'addéé l-7sééb?'], answer: 0 },

    { type: 'choice', q: 'What does the ending -één do in "alféén"?',
      options: [
        'It means exactly two of them',
        'It makes the word plural',
        'It makes the word feminine'
      ], answer: 0 },

    { type: 'type', en: 'thirty', answer: 'tléétiin', accept: ['tlétiin'] },

    { type: 'choice', q: 'You say "addéé baddak menné" to a shopkeeper. What have you asked?',
      options: [
        'How much do I owe you?',
        'What would you like to sell me?',
        'How many should I take?'
      ], answer: 0,
      explain: 'Literally: how much do you want from me. The transaction is framed from his side, not from the price tag.' }
  ]
});
