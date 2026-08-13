LEB.addUnit({
  id: 'u21',
  stage: 3,
  order: 21,
  title: 'Getting Around',
  goal: 'Get into a car with a stranger, say where you are going, and get out where you meant to.',
  canDo: [
    'Tell a driver where you are heading and agree the fare before the car moves',
    'Stop a car exactly where you want without giving anyone an order',
    'Rent a car for a set number of days, with insurance',
    'Go down, up, back and past the way Lebanese does it'
  ],

  grammar: [
    {
      heading: 'Two little words for "to"',
      body:
        'English gets by with one word. Lebanese uses two, and they are not interchangeable.\n\n' +
        '`3a` points at a place you are moving into. It sits in front of the destination and ' +
        'nothing else: `3a Beirut`, `3a l-jabal`, `3a l-béét`. When the place carries the article, ' +
        'the two fuse and you write what you actually hear: `3a` + `el-béét` becomes `3al-béét`, ' +
        '`3a` + `el-m7aTTa` becomes `3al-m7aTTa`.\n\n' +
        '`la-` measures. It marks the far end of something you are counting out — a stretch of ' +
        'time, a stretch of road, a person the thing is meant for. `la-jem3a` is "for a week". ' +
        '`la-boukra` is "until tomorrow". `men hoon lal-m7aTTa` is "from here to the station", and ' +
        'what you are really doing with that sentence is measuring a fare.\n\n' +
        'One journey can take both. `baddé enzal 3a Beirut` says where the car is pointed; ' +
        '`men Beirut lal-jabal` prices the trip. Nothing has changed about the geography — only ' +
        'about whether you are entering a place or measuring a distance.\n\n' +
        'The test is short. If a verb of movement is carrying you into somewhere, use `3a`. If you ' +
        'are measuring — from where to where, from when to when, for how long, for whom — use `la-`.',
      table: {
        headers: ['you say', 'meaning', 'why that one'],
        rows: [
          ['`3a Beirut`', 'to Beirut', 'a place you are heading into'],
          ['`3al-béét`', 'home, to the house', '`3a` and `el-` have fused'],
          ['`la-jem3a`', 'for a week', 'a span of time'],
          ['`men hoon lal-m7aTTa`', 'from here to the station', 'the two ends of a stretch'],
          ['`la-boukra`', 'until tomorrow', 'the far end of a wait']
        ]
      },
      examples: [
        { lb: 'baddé enzal 3a Beirut', ar: 'بَدّي إِنْزَل عَ بيروت', en: 'I want to go down to Beirut.' },
        { lb: 'b-addéé men hoon lal-m7aTTa?', en: 'How much from here to the station?' },
        { lb: 'baddé s-siyyaara la-tléét iyyéém', en: 'I want the car for three days.' }
      ],
      warning:
        '`la-` also stands in front of a verb, where it means "so that": `la-esta2jer siyyaara` — ' +
        '"in order to rent a car". Same word doing a different job, and the verb behind it drops ' +
        'its `b-` like every other subordinate verb.'
    },
    {
      heading: 'You always go down to Beirut',
      body:
        'Lebanon is half an hour wide and a kilometre and a half tall, and the language took the ' +
        'hint. You do not simply "go to" the city: you **go down** to it, `benzal 3a Beirut`, ' +
        'because the coast is below. You do not "go to" the village: you **go up**, ' +
        '`boTla3 3al-jabal`. This holds whichever way the road actually bends. Someone driving ' +
        'flat along the coast still says `benzal`, and a neutral verb in place of these two is one ' +
        'of the fastest ways to sound like you are translating from English.\n\n' +
        'Both are ordinary verbs on the grid you already have: the root, then the prefix.\n\n' +
        'The other habit worth copying is stacking two verbs with nothing between them. ' +
        '`berja3 eTla3 3al-jabal` is "I go back up to the mountain" — literally "I return, I go ' +
        'up". There is no "and" in it, both verbs agree with you, and the second one has lost its ' +
        '`b-` because a verb behind a verb always does.',
      table: {
        headers: ['person', '`enzal` — go down', '`oTla3` — go up'],
        rows: [
          ['ana', '`benzal`', '`boTla3`'],
          ['enta / hiyyé', '`btenzal`', '`btoTla3`'],
          ['enté', '`btenzalé`', '`btoTla3é`'],
          ['houwwé', '`byenzal`', '`byoTla3`'],
          ['ne7na', '`mnenzal`', '`mnoTla3`'],
          ['ento', '`btenzalo`', '`btoTla3o`'],
          ['henné', '`byenzalo`', '`byoTla3o`']
        ]
      },
      examples: [
        { lb: 'mnenzal 3a Beirut kell yoom', en: 'We go down to Beirut every day.' },
        { lb: 'berja3 eTla3 3al-jabal', en: 'I go back up to the mountain.', note: 'two verbs, no and' },
        { lb: 'bemro2 3al-forn 3a Tarii2é', en: 'I pass by the bakery on my way.' }
      ]
    },
    {
      heading: 'What is this going to cost',
      body:
        'The whole price system hangs off one short word: `addéé`. On its own it is the blunt ' +
        '"how much?", and it is not rude — it is what everyone says.\n\n' +
        'Put a `b-` in front of it and you are asking for a price rather than a quantity: ' +
        '`b-addéé?`, "for how much?". That same `b-` then does a second job, marking the unit the ' +
        'price is per: `ben-nhaar` (per day), `bel-laylé` (per night), `bel-jem3a` (per week). ' +
        'So `b-addéé ben-nhaar?` is "how much per day?", and it is the only question that matters ' +
        'at a rental desk.\n\n' +
        'For a journey rather than a rate, price the two ends: `b-addéé men hoon lal-m7aTTa?` ' +
        'Ask it before the car moves. Afterwards you are negotiating from a much worse position, ' +
        'and everyone knows it.\n\n' +
        'When you are settling up with a person rather than reading a price off a sign, the ' +
        'polite form is `addéé betriid?` to a man, `addéé betriidé?` to a woman — literally "how ' +
        'much would you like?". It leaves the number to them, which is exactly the point.',
      table: {
        headers: ['question', 'what you are asking'],
        rows: [
          ['`addéé?`', 'how much? — the bare question'],
          ['`b-addéé ben-nhaar?`', 'how much per day?'],
          ['`b-addéé bel-laylé?`', 'how much per night?'],
          ['`b-addéé men hoon lal-béét?`', 'how much from here to the house?'],
          ['`addéé betriid?`', 'what do I owe you? — said to the person, not the sign']
        ]
      },
      warning:
        'Agreeing a fare is not haggling and it is not distrust. A `service` has a fixed fare and ' +
        'a fixed route; a `taxi` has neither, and the number is settled by talking.'
    },
    {
      heading: 'Making a car stop without ordering anyone',
      body:
        'You can give an imperative, and sometimes you should. But the phrase that gets you out of ' +
        'a moving car politely is `fii majéél` — literally "is there room?" — followed by a bare ' +
        'verb: `fii majéél twa22ef hoon?`, "could you stop here?". It is a request with an exit ' +
        'built into it, and it works on drivers, waiters, receptionists and neighbours alike.\n\n' +
        'The verb behind `fii majéél` keeps its person and loses its `b-`, exactly like a verb ' +
        'behind `baddé`: `fii majéél wa22ef` (could I), `twa22ef` (could you), `ywa22ef` (could ' +
        'he), `nwa22ef` (could we).\n\n' +
        'The other half of getting around is being told what not to do, and Lebanese has a ' +
        'separate shape for that. A negative instruction is **not** the imperative with a `maa` ' +
        'in front of it. It is `ma` plus the bare second person: `ma tensa` to a man, `ma tensé` ' +
        'to a woman, `ma tenso` to a group. The rental office will say some version of this to you ' +
        'on the way out of the door, so it is worth recognising cold.',
      table: {
        headers: ['spoken to', '"could you stop?"', '"do not forget"'],
        rows: [
          ['a man', '`fii majéél twa22ef?`', '`ma tensa`'],
          ['a woman', '`fii majéél twa22fé?`', '`ma tensé`'],
          ['a group', '`fii majéél twa22fo?`', '`ma tenso`']
        ]
      },
      examples: [
        { lb: 'fii majéél twa22ef hoon 3mool ma3rouuf?', en: 'Could you stop here please?' },
        { lb: 'ma tensé tredda 3ashiyyé', en: 'Do not forget to bring it back in the evening.', note: 'said to a woman' }
      ],
      warning:
        'Both verbs in `ma tensé tredda` are bare. The first lost its `b-` to `ma`, the second lost ' +
        'its `b-` to the verb in front of it. Lebanese only ever inflates the first verb in a chain.'
    }
  ],

  vocab: [
    { lb: 'siyyaara', ar: 'سيّارة', en: 'car', pos: 'n', gender: 'f' },
    { lb: 'service', ar: 'سِرْفيس', en: 'shared cab on a fixed route', pos: 'n', gender: 'm', note: 'you share it with strangers for a set fare; there is no English word for it' },
    { lb: 'taxi', ar: 'تاكْسي', en: 'taxi', pos: 'n', gender: 'm', note: 'a car you keep to yourself, and the fare is agreed by talking' },
    { lb: 'Tarii2', ar: 'طَريق', en: 'road, way', pos: 'n', note: 'plural `Tor2aat`' },
    { lb: '3aj2et séér', ar: 'عَجْقِة سير', en: 'traffic jam', pos: 'phr' },
    { lb: 'jouura', ar: 'جورة', en: 'pothole', pos: 'n', gender: 'f', note: 'plural `jouwar`' },
    { lb: '7aajez darak', ar: 'حاجِز دَرَك', en: 'checkpoint', pos: 'n', gender: 'm', note: 'ordinary road furniture here, not an emergency' },
    { lb: 'mashé', ar: 'مَشي', en: 'on foot, walking', pos: 'adv' },
    { lb: 'wa22ef', ar: 'وَقِّف', en: 'to stop', pos: 'v', note: 'root — `menwa22ef` we stop, `biwa22ef` he stops' },
    { lb: 'ouuSal', ar: 'أوصَل', en: 'to arrive', pos: 'v', note: 'root — `bouuSal` I arrive, `mnouuSal` we arrive' },
    { lb: 'enzal', ar: 'إِنْزَل', en: 'to go down', pos: 'v', note: 'root — used for the coast and the city' },
    { lb: 'oTla3', ar: 'إِطْلَع', en: 'to go up', pos: 'v', note: 'root — used for the mountain' },
    { lb: 'emro2', ar: 'إِمْرُق', en: 'to pass by', pos: 'v', note: 'root — takes `3a`: `bemro2 3al-forn`' },
    { lb: 'esta2jer', ar: 'إِسْتَأْجِر', en: 'to rent', pos: 'v', note: 'root — `besta2jer` I rent' },
    { lb: 'te2miin', ar: 'تِأْمين', en: 'insurance', pos: 'n', gender: 'm', note: 'insured is `m2amman` / `m2ammané`' },
    { lb: 'jem3a', ar: 'جِمْعَة', en: 'week', pos: 'n', gender: 'f', note: 'plural `jméé3`' }
  ],

  phrases: [
    {
      lb: 'baddé enzal 3a Beirut', ar: 'بَدّي إِنْزَل عَ بيروت', en: 'I want to go down to Beirut',
      when: 'the first thing you say once the car door is shut'
    },
    {
      lb: 'b-addéé men hoon lal-m7aTTa?', en: 'how much from here to the station?',
      when: 'before the car moves, never after'
    },
    {
      lb: 'wéén betwa22ef?', en: 'where do you stop?',
      when: 'to a service driver before you get in — his route is fixed and yours may not be on it'
    },
    {
      lb: 'fii majéél twa22ef hoon?', en: 'could you stop here?',
      when: 'the polite way to get out of a moving car',
      reply: 'akiid', replyEn: 'of course'
    },
    {
      lb: 'es-siyyaara m2ammané?', en: 'is the car insured?',
      when: 'at the rental desk, before anything gets signed'
    },
    {
      lb: 'baddé yééha la-tléét iyyéém', en: 'I want it for three days',
      when: 'the whole answer to "how long for" — the car is `yééha` because it is feminine'
    },
    {
      lb: 'fii jouwar 3a haT-Tarii2', en: 'there are potholes on this road',
      when: 'a statement of fact, said the way you would report weather'
    },
    {
      lb: 'ya3Tiik el-3aafyé', ar: 'يعطيك العافية', en: 'may he give you strength',
      when: 'to the driver as you get out — it thanks the work, not the ride',
      reply: 'Allah y3aafiik', replyEn: 'and may God keep you strong'
    }
  ],

  dialogue: {
    title: 'Service or taxi, decided in four seconds',
    setting: 'A car slows down beside you and the window comes down. This whole exchange happens at walking pace, through a window, before you have agreed to anything.',
    lines: [
      { who: 'Driver', lb: 'service?', ar: 'سرفيس؟', en: 'service?',
        note: 'One word, and it is the question. He is asking whether you want the shared fixed-price ride.' },
      { who: 'You', you: true, lb: 'service. 3a Mar Mikhayel.', ar: 'سرفيس. ع مار مخايل', en: 'service. To Mar Mikhael.' },
      { who: 'Driver', lb: 'servicéén.', ar: 'سرفيسين', en: 'two services',
        note: 'Double fare, because it is off his route or far. You can accept or wait for the next car.' },
      { who: 'You', you: true, lb: 'la2, service wéé7ed. mesh b3iid.', ar: 'لأ، سرفيس واحد. مش بعيد', en: 'no, one service. It is not far.' },
      { who: 'Driver', lb: 'Tayyeb, ta3a.', ar: 'طيب، تعا', en: 'all right, come on.' },
      { who: 'You', you: true, lb: 'fii 3aj2et séér lyoom?', ar: 'في عجقة سير اليوم؟', en: 'is there traffic today?' },
      { who: 'Driver', lb: 'daayman fii. w eT-Tarii2 melyéén jouwar.', ar: 'دايما في. والطريق مليان جور', en: 'there always is. And the road is full of potholes.' },
      { who: 'You', you: true, lb: 'fii majéél twa22ef hoon? ya3Tiik el-3aafyé.', ar: 'في مجال توقف هون؟ يعطيك العافية', en: 'could you stop here? May he give you strength.' }
    ]
  },

  culture: {
    heading: 'How the service works',
    icon: 'taxi',
    body:
      'The `service` is the backbone of getting around Lebanon and it confuses every visitor for ' +
      'about a week. It is a shared car on no fixed route, with a fixed low fare, that picks up ' +
      'whoever is going roughly the same way. You will end up with strangers on the back seat. That ' +
      'is the arrangement, not a mistake.\n\n' +
      'The rules, learned the hard way:\n\n' +
      'Say `service` before you say where you are going. Say it after and the driver may quote you a ' +
      'taxi fare, which is several times more. If he says `servicéén` he wants double, which is fair ' +
      'for a long or awkward trip and worth refusing for a short one — another car is thirty seconds ' +
      'away.\n\n' +
      'A driver who wants the whole car to himself says `taxi`. Agree the price before getting in, ' +
      'every time, no exceptions.\n\n' +
      'And you get out by announcing it, not by asking. `wa22ef hoon` said about fifty metres before ' +
      'you actually want to stop is the right timing. `fii majéél twa22ef hoon?` is the polite ' +
      'version and it also works.',
  },

  drills: [
    { type: 'choice', q: 'You are getting into a car. Which word goes in front of the place you are going?',
      options: ['3a', 'la-', 'men'], answer: 0,
      explain: '`3a` puts you into a place. `la-` measures a span: how long, how far, for whom.' },

    { type: 'conjugate', en: 'we arrive', root: 'ouuSal', person: 'ne7na', tense: 'present',
      options: ['mnouuSal', 'bouuSal', 'byouuSal', 'btouuSal'], answer: 0,
      explain: 'The `ne7na` prefix is `mn-` on every verb whose root begins with an alef.' },

    { type: 'build', en: 'I want to go down to Beirut.',
      tiles: ['baddé', 'enzal', '3a', 'Beirut'], extra: ['la-', 'benzal'], answer: 'baddé enzal 3a Beirut',
      explain: 'Behind `baddé` the verb loses its `b-` but keeps its person: `enzal`, never `benzal`.' },

    { type: 'match',
      pairs: [['service', 'shared cab on a fixed route'], ['taxi', 'a car you keep to yourself'], ['jouura', 'pothole'], ['7aajez darak', 'checkpoint']] },

    { type: 'gap', en: 'You are in a service and your stop is coming up.',
      lines: [
        { who: 'Elie', lb: 'mnouuSal 3al-m7aTTa', en: 'we are getting to the station' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['fii majéél twa22ef hoon?', 'b-addéé ben-nhaar?', 'ma tensa tredda'], answer: 0,
      explain: '`fii majéél` plus a bare verb is a request with an exit built in. The other two belong at a rental desk.' },

    { type: 'choice', q: 'You are in Beirut and heading for a village in the mountains. Which verb?',
      options: ['boTla3', 'benzal', 'bemro2'], answer: 0,
      explain: 'Up to the mountain, down to the coast, whichever way the road actually goes.' },

    { type: 'type', en: 'How much? (the bare question)', answer: 'addéé' },

    { type: 'conjugate', en: 'he stops', root: 'wa22ef', person: 'houwwé', tense: 'present',
      options: ['biwa22ef', 'menwa22ef', 'btwa22ef', 'bwa22ef'], answer: 0,
      explain: 'A root that starts with a consonant takes `bi-` for `houwwé` and `men-` for `ne7na`.' },

    { type: 'choice', q: 'Which one prices a journey rather than naming a destination?',
      options: ['men hoon lal-m7aTTa', '3al-m7aTTa', 'bel-m7aTTa'], answer: 0,
      explain: 'Two ends measured out: `men` at one end, `la-` at the other.' },

    { type: 'build', en: 'Could you stop here?',
      tiles: ['fii', 'majéél', 'twa22ef', 'hoon'], extra: ['betwa22ef'], answer: 'fii majéél twa22ef hoon' },

    { type: 'match',
      pairs: [['esta2jer', 'to rent'], ['ouuSal', 'to arrive'], ['emro2', 'to pass by'], ['erja3', 'to go back']] },

    { type: 'choice', q: 'The rental man says `ma tensé tredda 3ashiyyé`. What is he telling you?',
      options: ['bring it back in the evening', 'fill it up in the evening', 'the evening rate is higher'], answer: 0,
      explain: '`ma` plus the bare second person is how a negative instruction is built. `tensé` is said to a woman.' },

    { type: 'gap', en: 'At the rental desk. You need the car until the weekend.',
      lines: [
        { who: 'Jad', lb: 'men aymata la-aymata?', en: 'from when until when?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['la-tléét iyyéém', '3a tléét iyyéém', 'men tléét iyyéém'], answer: 0,
      explain: 'A span of time takes `la-`. `3a` would put the car inside three days, which means nothing.' },

    { type: 'type', en: 'the road', answer: 'eT-Tarii2', accept: ['et-Tarii2', 'eT Tarii2'] }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence puts you in a car pointed at the coast?',
      options: ['benzal 3a Beirut', 'benzal la-Beirut', 'boTla3 3a Beirut'], answer: 0,
      explain: 'A destination takes `3a`, and the coast is always down.' },

    { type: 'gap', en: 'You are at the rental desk and the price sounds fine, but nobody has mentioned insurance.',
      lines: [
        { who: 'Jad', lb: 'ben-nhaar tméniin dollar', en: 'eighty dollars a day' },
        { who: 'You', you: true, blank: true },
        { who: 'Jad', lb: 'akiid, m2ammané', en: 'of course, it is insured' }
      ],
      options: ['es-siyyaara m2ammané?', 'b-addéé bel-laylé?', 'wéén betwa22ef?'], answer: 0 },

    { type: 'build', en: 'I go back up to the mountain.',
      tiles: ['berja3', 'eTla3', '3al-jabal'], extra: ['w-'], answer: 'berja3 eTla3 3al-jabal',
      explain: 'Two verbs, no "and" between them, and only the first keeps its `b-`.' },

    { type: 'conjugate', en: 'they arrive', root: 'ouuSal', person: 'henné', tense: 'present',
      options: ['byouuSalo', 'mnouuSal', 'btouuSalo', 'bouuSal'], answer: 0 },

    { type: 'type', en: 'traffic jam', answer: '3aj2et séér', accept: ['3aj2it seer', '3aj2et seer'] },

    { type: 'choice', q: 'What makes a `service` different from a `taxi`?',
      options: [
        'it runs a fixed route for a fixed fare and you share it',
        'it is a newer car',
        'it only works outside the city'
      ], answer: 0 },

    { type: 'match',
      pairs: [['te2miin', 'insurance'], ['jem3a', 'week'], ['mashé', 'on foot'], ['Tarii2', 'road']] },

    { type: 'choice', q: 'Which question asks the price of one day?',
      options: ['b-addéé ben-nhaar?', 'addéé n-nhaar?', 'b-addéé la-nhaar?'], answer: 0,
      explain: 'The `b-` on `nhaar` is what makes it "per day".' },

    { type: 'gap', en: 'You are getting out of the taxi and you want to thank the driver for the work, not for the ride.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Joe', lb: 'Allah y3aafiik', en: 'and may God keep you strong' }
      ],
      options: ['ya3Tiik el-3aafyé', 'ma3 es-saléémé', 'ahla w sahla'], answer: 0,
      explain: 'That reply only ever follows one phrase.' }
  ]
});
