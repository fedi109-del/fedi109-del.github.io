LEB.addUnit({
  id: 'u12',
  stage: 2,
  order: 12,
  title: 'At the Grocer',
  goal: 'Fill a bag at a neighbourhood grocer and find out what you owe, using the way Lebanese actually counts food.',
  canDo: [
    'Name the food a small Lebanese shop really sells',
    'Order by the container instead of by weight',
    'Say "exactly two" with the ending the language reserves for it',
    'Ask what you owe in all three of the ways you will hear it'
  ],

  grammar: [
    {
      heading: 'The container is the unit',
      body:
        'A small Lebanese grocer — a `dekkanjé`, the shop on the corner that knows your name and ' +
        'will send the order round — does not sell you abstractions. It sells you a tin, a jar, ' +
        'a bottle, a bag. So the shopping list is built as **container plus contents**, in that ' +
        'order and with nothing in between: `3elbet bazella`, a tin of peas.\n\n' +
        'Notice what happened to `3elbé` there. When a feminine noun ending in `-é` or `-a` is ' +
        'stacked in front of a second noun, that ending hardens into `-et`: `3elbé` becomes ' +
        '`3elbet`. The word has stopped standing on its own and is now leaning on the one after ' +
        'it. Containers that do not end in `-é` — `kiis`, `morTbéén` — change nothing at all.\n\n' +
        'This is the same construction English writes with *of*, but Lebanese does not write the ' +
        '*of*. Two nouns side by side, first the measure, then the thing measured. Learn the ' +
        'pairs as chunks and the shopping trip runs itself.',
      table: {
        headers: ['container', 'in a shopping list', 'meaning'],
        rows: [
          ['`3elbé`', '`3elbet bazella`', 'a tin of peas'],
          ['`morTbéén`', '`morTbéén kabiis`', 'a jar of pickles'],
          ['`2anniiné`', '`2anniinet 3aSiir`', 'a bottle of juice'],
          ['`kiis`', '`kiis T7iin`', 'a bag of flour'],
          ['`2ééleb`', '`2ééleb jebné`', 'a whole cheese'],
          ['`noSS`', '`noSS 2ééleb jebné`', 'half a cheese']
        ]
      },
      warning:
        '`3elbé` covers both a tin and a cardboard box. If you need to be sure what is inside, ' +
        'name the contents — that is what the second noun is for.'
    },
    {
      heading: 'Exactly two has its own ending',
      body:
        'Lebanese does not say "two bottles" the way it says "three bottles". For exactly two it ' +
        'leaves the number out altogether and puts `-één` on the noun instead: `2anniintéén` is ' +
        'two bottles, `kiiséén` is two bags. One ending, no counting word.\n\n' +
        'You have already met this without being told. `mar7abtéén`, the answer you give when ' +
        'somebody says `mar7aba`, is literally *two hellos* — the same `-één` doing the same job. ' +
        'And `d2ii2téén` is two minutes.\n\n' +
        'The ending behaves like the container rule above: a feminine `-é` hardens to `-t` before ' +
        'it, which is why `2anniiné` gives `2anniintéén` and not something simpler. For three and ' +
        'upwards the language goes back to normal — a number in front, the noun in the plural ' +
        'behind it.\n\n' +
        'This is one of those features that has no English counterpart and therefore gets ' +
        'forgotten. Using a number for two is not a grammatical crime, but it marks you out ' +
        'instantly. The ending is short and there are only ever two of them: worth the effort.',
      table: {
        headers: ['one', 'exactly two', 'meaning'],
        rows: [
          ['`2anniiné`', '`2anniintéén`', 'bottle / two bottles'],
          ['`kiis`', '`kiiséén`', 'bag / two bags'],
          ['`d2ii2a`', '`d2ii2téén`', 'minute / two minutes'],
          ['`mar7aba`', '`mar7abtéén`', 'hello / hello back, doubled']
        ]
      }
    },
    {
      heading: 'Three ways to ask what you owe',
      body:
        'None of the three standard questions asks what something costs. All three ask what the ' +
        'other person wants from you, which tells you something real about how a sale is framed ' +
        'here: it is a transaction between two people, not a label on a shelf.\n\n' +
        '`addé baddak menné?` — how much do you want from me? This is the workhorse. You say it ' +
        'at the end, once everything is on the counter, and you change the ending for who you ' +
        'are talking to: `baddak` to a man, `baddik` to a woman.\n\n' +
        '`addé betriid?` — how much would you like? Softer, more deferential, the version you ' +
        'use with someone older or when you want to be gracious. Take it as a fixed block for ' +
        'now; the verb inside it is unpacked much later in the course.\n\n' +
        '`addé l-7sééb?` — how much is the bill? This one is for a total that exists as a total: ' +
        'a restaurant table, a running tab at the shop, an invoice. Ask it of a grocer who has ' +
        'been adding things up in his head and it fits; ask it over a single loaf and it sounds ' +
        'like paperwork.',
      table: {
        headers: ['question', 'literally', 'use it when'],
        rows: [
          ['`addé baddak menné?`', 'how much do you want from me', 'the everyday one, at the counter'],
          ['`addé baddik menné?`', 'the same, to a woman', 'only the ending changes'],
          ['`addé betriid?`', 'how much would you like', 'polite, deferential, warm'],
          ['`addé l-7sééb?`', 'how much is the bill', 'there is a total to be told']
        ]
      },
      warning:
        'The answer will come at you as a bare number. Prices move fast enough here that people ' +
        'talk about `el-ghala` — the cost of living — as small talk, not as complaint.'
    },
    {
      heading: 'Roughly, without, and enough',
      body:
        'Three small words finish the job, and none of them needs a verb.\n\n' +
        '`shii` in front of a number means *about*: `shii tléét 3elab`, about three tins. It is ' +
        'the hedge you want when you are guessing, and it costs one syllable.\n\n' +
        '`bala` means *without*, and it goes straight in front of the thing you do not want: ' +
        '`bala 7aliib`. Its twin `bidouun` means exactly the same and you will hear both.\n\n' +
        '`bi-zyéédé` means more than enough. `bi-zyéédé la-lyoom` closes a shopping trip — that ' +
        'is plenty for today — and it is the natural answer when someone asks `shii tééné?`, ' +
        'anything else.\n\n' +
        'Add `ktiir` (a lot) and `shway` (a bit) from earlier units and you can size any request ' +
        'without touching a number: `shway jebné`, `ktiir zaytouun`.',
      examples: [
        { lb: 'shii tléét 3elab', ar: 'شي تلات علب', en: 'about three tins' },
        { lb: 'bala 7aliib', ar: 'بلا حليب', en: 'without milk' },
        { lb: 'shway jebné', ar: 'شوي جبنة', en: 'a bit of cheese' },
        { lb: 'bi-zyéédé la-lyoom', ar: 'بزيادة لليوم', en: 'that is plenty for today' }
      ]
    }
  ],

  vocab: [
    { lb: 'khebz', ar: 'خبز', en: 'bread', pos: 'n', gender: 'm' },
    { lb: 'jebné', ar: 'جبنة', en: 'cheese', pos: 'n', gender: 'f' },
    { lb: 'zaytouun', ar: 'زيتون', en: 'olives', pos: 'n' },
    { lb: 'banadouura', ar: 'بندورة', en: 'tomatoes', pos: 'n', gender: 'f' },
    { lb: 'tefféé7', ar: 'تفاح', en: 'apples', pos: 'n', note: 'one apple is tefféé7a' },
    { lb: 'laymouun', ar: 'ليمون', en: 'oranges', pos: 'n' },
    { lb: 'khoDra', ar: 'خضرة', en: 'vegetables', pos: 'n', gender: 'f' },
    { lb: 'fwééké', ar: 'فواكة', en: 'fruit', pos: 'n' },
    { lb: 'la7mé', ar: 'لحمة', en: 'meat', pos: 'n', gender: 'f' },
    { lb: 'bayD', ar: 'بيض', en: 'eggs', pos: 'n', note: 'one egg is bayDa' },
    { lb: '7aliib', ar: 'حليب', en: 'milk', pos: 'n', gender: 'm' },
    { lb: 'T7iin', ar: 'طحين', en: 'flour', pos: 'n', gender: 'm' },
    { lb: '3elbé', ar: 'علبة', en: 'tin, box', pos: 'n', gender: 'f', note: 'plural 3elab' },
    { lb: '2anniiné', ar: 'قنينة', en: 'bottle', pos: 'n', gender: 'f', note: 'plural 2anééné' },
    { lb: 'kiis', ar: 'كيس', en: 'bag', pos: 'n', gender: 'm', note: 'plural kyéés' },
    { lb: 'morTbéén', ar: 'مرطبان', en: 'jar', pos: 'n', gender: 'm' }
  ],

  phrases: [
    {
      lb: '2moor', ar: 'أمور', en: 'what can I get you? (to a man)',
      when: 'the shopkeeper opens with this — you only need to recognise it. To a woman it is 2moré'
    },
    {
      lb: 'shii tééné?', ar: 'شي تاني؟', en: 'anything else?',
      when: 'said to you after every item, until you stop him',
      reply: 'bi-zyéédé la-lyoom', replyEn: 'that is plenty for today'
    },
    {
      lb: '3a zaw2ak!', ar: 'ع ذوقك!', en: 'exactly how you like it',
      when: 'a seller vouching for what he is putting in your bag; zaw2ik to a woman'
    },
    {
      lb: 'addé baddak menné?', ar: 'قديه بدك مني؟', en: 'how much do I owe you?',
      when: 'the everyday question at a counter, once everything is weighed'
    },
    {
      lb: 'addé l-7sééb?', ar: 'قديه الحساب؟', en: 'how much is the bill?',
      when: 'when there is a real total: a table, a tab, an order that has been added up'
    },
    {
      lb: 'mesh ma32ouul!', ar: 'مش معقول!', en: 'that cannot be right!',
      when: 'hearing a price that has moved since last month'
    },
    {
      lb: 'el-ghala yoom 3an yoom', ar: 'الغلا يوم عن يوم', en: 'the cost of living, day after day',
      when: 'small talk with anyone selling you anything — it expects agreement, not sympathy'
    }
  ],

  drills: [
    { type: 'match',
      pairs: [['khebz', 'bread'], ['jebné', 'cheese'], ['bayD', 'eggs'], ['7aliib', 'milk']] },

    { type: 'choice', q: 'How do you ask for a tin of peas?',
      options: ['3elbet bazella', '3elbé bazella', 'bazella 3elbé'], answer: 0,
      explain: 'Container first, contents second, and the -é of 3elbé hardens to -et.' },

    { type: 'choice', q: 'You want exactly two bottles of juice. What do you say?',
      options: ['2anniintéén 3aSiir', 'tnéén 2anniiné 3aSiir', '2anniiné tnéén 3aSiir'], answer: 0,
      explain: 'For two, the number disappears into the -één ending on the noun.' },

    { type: 'build', en: 'A bag of flour.',
      tiles: ['kiis', 'T7iin'], extra: ['3elbet'], answer: 'kiis T7iin' },

    { type: 'type', en: 'Bread.', answer: 'khebz' },

    { type: 'gap', en: 'You are at the grocer and he has just put the olives on the counter.',
      lines: [
        { who: 'Fouad', lb: 'shii tééné?', en: 'anything else?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['bi-zyéédé la-lyoom', '3a zaw2ak', 'mesh ma32ouul'], answer: 0,
      explain: 'That is plenty for today — the standard way of closing the order.' },

    { type: 'match',
      pairs: [['3elbé', 'tin'], ['kiis', 'bag'], ['2anniiné', 'bottle'], ['morTbéén', 'jar']] },

    { type: 'conjugate', en: 'how much do you want (asking a woman)', root: 'badd', person: 'enté',
      options: ['baddik', 'baddak', 'baddo', 'baddna'], answer: 0,
      explain: 'Only the ending moves: addé baddik menné?' },

    { type: 'choice', q: 'Which question suits a bill that has already been added up?',
      options: ['addé l-7sééb?', 'addé baddak menné?', 'addé betriid?'], answer: 0,
      explain: '7sééb is the total itself. The other two ask the person, not the paper.' },

    { type: 'build', en: 'Without milk.',
      tiles: ['bala', '7aliib'], extra: ['bi-'], answer: 'bala 7aliib' },

    { type: 'choice', q: 'What does `shii tléét 3elab` mean?',
      options: ['about three tins', 'three tins exactly', 'a thing in three tins'], answer: 0,
      explain: 'shii in front of a number is the hedge: roughly, around.' },

    { type: 'type', en: 'Cheese.', answer: 'jebné' },

    { type: 'choice', q: 'A grocer says `2moré`. What is happening?',
      options: [
        'He is inviting a woman to place her order',
        'He is telling you the price',
        'He is saying he has run out'
      ], answer: 0,
      explain: 'It is his opener, roughly "at your command". You answer with the list.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which is the polite, deferential way of asking what you owe?',
      options: ['addé betriid?', 'addé baddak menné?', 'addé l-7sééb?'], answer: 0 },

    { type: 'build', en: 'Two bags of flour.',
      tiles: ['kiiséén', 'T7iin'], extra: ['tnéén', 'kiis'], answer: 'kiiséén T7iin' },

    { type: 'type', en: 'A jar of pickles.', answer: 'morTbéén kabiis' },

    { type: 'match',
      pairs: [['khoDra', 'vegetables'], ['fwééké', 'fruit'], ['la7mé', 'meat'], ['tefféé7', 'apples']] },

    { type: 'choice', q: 'Why does `3elbé` turn into `3elbet` in `3elbet bazella`?',
      options: [
        'A feminine -é hardens to -et when the noun leans on the one after it',
        'Because peas are plural',
        'Because the phrase is definite'
      ], answer: 0 },

    { type: 'gap', en: 'The grocer holds up a handful of tomatoes for you to look at.',
      lines: [
        { who: 'Fouad', lb: 'banadouura Taaza!', en: 'fresh tomatoes!' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Tayyeb, baddé kiis', 'Tayyeb, baddé kiiséén T7iin', 'mesh ma32ouul'], answer: 0,
      explain: 'You are agreeing and asking for a bag of them, not for flour and not complaining.' },

    { type: 'conjugate', en: 'how much do you want (asking a man)', root: 'badd', person: 'enta',
      options: ['baddak', 'baddik', 'baddon', 'baddé'], answer: 0 },

    { type: 'choice', q: 'You have already met the -één ending in unit one. Where?',
      options: ['mar7abtéén', 'mar7aba', 'shukran'], answer: 0,
      explain: 'Two hellos handed back. The same ending that gives you two bottles.' },

    { type: 'type', en: 'That is plenty for today.', answer: 'bi-zyéédé la-lyoom', accept: ['bi zyeede la lyoom'] },

    { type: 'choice', q: 'Someone quotes you a price and you think it is outrageous. What comes out first?',
      options: ['mesh ma32ouul!', 'bi-zyéédé!', '3a zaw2ak!'], answer: 0 }
  ]
});
