LEB.addUnit({
  id: 'u17',
  stage: 3,
  order: 17,
  title: 'When the B Disappears',
  goal: 'Put two verbs in one sentence the way Lebanese does it, with no infinitive anywhere.',
  canDo: [
    'Strip the b- from a verb that sits behind a trigger word',
    'Recognise the closed list of words that force the bare form',
    'Keep both verbs agreeing with the same person',
    'Choose between the b- form and the bare form inside the same sentence'
  ],

  grammar: [
    {
      heading: 'There is no infinitive',
      body:
        'English keeps a parking place for verbs: *to eat*, *to go*, *to buy*. Whenever a second ' +
        'verb turns up in a sentence, English puts it in that neutral shape and stops worrying about ' +
        'who is doing it. "I want to eat", "she wants to eat" — the second verb never moves.\n\n' +
        'Lebanese has no such shape. There is no infinitive, no neutral form, nothing to park a verb ' +
        'in. The second verb agrees with the subject exactly like the first one — and it hands over ' +
        'its `b-`. So "I want to eat" is `baddé éékol`: two verbs, both first person, the second one ' +
        'bare. "You want to eat" is `baddak téékol`. "She wants to eat" is `badda téékol`. "We want ' +
        'to eat" is `baddna néékol`. Nothing is ever neutral, and nothing is ever left to guess.\n\n' +
        'This costs you almost nothing to learn, because the bare forms are the forms you already ' +
        'know with one letter taken off the front. It costs a great deal to ignore, because ' +
        '`baddé béékol` is not clumsy Lebanese, it is not Lebanese at all — a listener stops and ' +
        'rewinds. Read the two columns below side by side. Everything you need for this unit is the ' +
        'difference between them.',
      table: {
        headers: ['person', 'on its own', 'behind a trigger'],
        rows: [
          ['ana', '`béékol`', '`éékol`'],
          ['enta', '`btéékol`', '`téékol`'],
          ['enté', '`btéékolé`', '`téékolé`'],
          ['houwwé', '`byéékol`', '`yéékol`'],
          ['hiyyé', '`btéékol`', '`téékol`'],
          ['ne7na', '`mnéékol`', '`néékol`'],
          ['ento', '`btéékolo`', '`téékolo`'],
          ['henné', '`byéékolo`', '`yéékolo`']
        ]
      },
      warning:
        'Only the **second** verb goes bare. The first one keeps its `b-`: `b7ebb éékol` — I like ' +
        'to eat. Strip both and the sentence has nothing holding it up.'
    },
    {
      heading: 'The words that take the b away',
      body:
        'The `b-` does not fall off at random. It falls off behind a fixed set of words, and behind ' +
        'any verb at all. The list is closed and it is short enough to learn as a list, which is by ' +
        'far the fastest way to get this right.\n\n' +
        'Notice that the triggers split into two kinds. Some never change shape whoever is speaking ' +
        '— `léézem`, `moumken`, `ra7`, `lamma`, `abl maa`, `enno`, `kerméél`. All the person ' +
        'information lives in the verb behind them, which is precisely why that verb has to stay ' +
        'conjugated. The others are the suffix verbs you already own, `badd-` and `fii-` and their ' +
        'family. Those do carry the person on themselves, and the verb behind them is conjugated **again**, ' +
        'in agreement. Lebanese would rather mark the person twice than leave a verb undecided.\n\n' +
        'The last row of the table is the one that catches people out, because it has no keyword to ' +
        'watch for. Any verb followed by another verb triggers the drop. `b7ebb`, `be2dar`, ' +
        '`bfaDDel`, `bensa` — put a second verb behind any of them and off comes the `b-`.',
      table: {
        headers: ['trigger', 'meaning', 'example'],
        rows: [
          ['`léézem`', 'must, have to', '`léézem trouu7` — you have to go'],
          ['`badd-`', 'want to', '`baddé rouu7` — I want to go'],
          ['`fii-`', 'can, be able to', '`fiik trouu7` — you can go'],
          ['`moumken`', 'could, might', '`moumken nrouu7` — we could go'],
          ['`ra7`', 'will', '`ra7 yrouu7` — he will go'],
          ['`la-`', 'in order to', '`la-rouu7` — so that I go'],
          ['`kerméél`', 'so that', '`kerméél nrouu7` — so that we go'],
          ['`lamma`', 'when', '`lamma trouu7é` — when you go'],
          ['`abl maa`', 'before', '`abl maa yrouu7` — before he goes'],
          ['`ta3a`', 'come on, let us', '`ta3a nrouu7` — let us go'],
          ['`khallii-`', 'let somebody', '`khalliina nrouu7` — let us go'],
          ['`enno`', 'that (reported)', '`enno erja3` — that I come back'],
          ['any verb in front', '—', '`b7ebb rouu7` — I like to go']
        ]
      },
      warning:
        'Two more join the list later: `fii majéél` ("would there be a chance to…") and `3a-béél-` ' +
        '("feel like"). The pattern never varies, so you can add new triggers to the list for the ' +
        'rest of your life without learning anything new.'
    },
    {
      heading: 'The letter that comes back',
      body:
        'Taking the `b-` off is simple for seven of the eight people: you are left with `t-`, `y-` ' +
        'or `n-`, and the endings do not move. `betrouu7` becomes `trouu7`, `birouu7` becomes ' +
        '`yrouu7`, `menrouu7` becomes `nrouu7`.\n\n' +
        'The first person is where something interesting happens, and it depends on the root. If the ' +
        'root began with a vowel, that vowel **comes back**. It had been there all along, hidden ' +
        'under the `b-`: `béékol` becomes `éékol`, `be23od` becomes `e23od`, `berja3` becomes ' +
        '`erja3`, `bouu3a` becomes `ouu3a`. If the root began with a consonant there is nothing to ' +
        'restore, and the verb simply stands there stripped: `brouu7` becomes `rouu7`, `b2ouul` ' +
        'becomes `2ouul`, `bshouuf` becomes `shouuf`.\n\n' +
        'This is the clearest evidence that the root really is the unit of the language. The bare ' +
        'first person and the root you memorised are the same word. `baddé rouu7`, `baddé e23od`, ' +
        '`baddé éékhod` — in every one of them, what follows `baddé` is the dictionary form itself.',
      table: {
        headers: ['person', 'bare prefix', '`rouu7` — go', '`e23od` — sit'],
        rows: [
          ['ana', '—', '`rouu7`', '`e23od`'],
          ['enta', '`t-`', '`trouu7`', '`te23od`'],
          ['enté', '`t-` … `-é`', '`trouu7é`', '`te23dé`'],
          ['houwwé', '`y-`', '`yrouu7`', '`ye23od`'],
          ['hiyyé', '`t-`', '`trouu7`', '`te23od`'],
          ['ne7na', '`n-`', '`nrouu7`', '`ne23od`'],
          ['ento', '`t-` … `-o`', '`trouu7o`', '`te23do`'],
          ['henné', '`y-` … `-o`', '`yrouu7o`', '`ye23do`']
        ]
      },
      examples: [
        { lb: 'léézem nerja3 3al-béét', ar: 'لازِم نِرْجَع عَ البيت', en: 'We have to go back home.' },
        { lb: 'fiik tejé ma3na?', ar: 'فيك تِجي مَعْنا؟', en: 'Can you come with us?', note: 'to a man' },
        { lb: 'moumken te23do hoon', ar: 'مُمْكِن تِقْعُدوا هون', en: 'You could sit here.', note: 'to a group' },
        { lb: 'lamma youu3a, byeshrab 2ahwe', ar: 'لمّا يوعى، بْيِشْرب قَهْوة', en: 'When he wakes up, he drinks coffee.', note: 'the first verb is bare, the second one stands alone and keeps its b-' }
      ]
    },
    {
      heading: 'ra7 takes it away, 3am leaves it alone',
      body:
        'Two small words are worth meeting now, ahead of their own units, because between them they ' +
        'prove that the `b-` is a real piece of grammar and not an ornament.\n\n' +
        '`ra7` throws the sentence into the future, and it behaves like every other trigger on the ' +
        'list: `ra7 rouu7`, "I will go", bare. `3am` puts the sentence in the here and now, and it ' +
        'does the exact opposite: it leaves the `b-` untouched, precisely where it was — `3am ' +
        'brouu7`, "I am going". One letter of difference, the same verb, the same person, two ' +
        'different times.\n\n' +
        'Swap them round and you produce something nobody says. `ra7 brouu7` and `3am rouu7` are ' +
        'both broken, and they are broken in a way that is immediately audible, so this is a good ' +
        'contrast to get right early rather than late. The honest summary is that the `b-` is the ' +
        'mark of a verb doing its own work in its own sentence: `3am` lets it keep working, ' +
        'everything else on the trigger list takes the sentence over.',
      table: {
        headers: ['sentence', 'what it says'],
        rows: [
          ['`brouu7`', 'I go, I go as a rule'],
          ['`3am brouu7`', 'I am going, at this moment'],
          ['`ra7 rouu7`', 'I will go'],
          ['`baddé rouu7`', 'I want to go'],
          ['`léézem rouu7`', 'I have to go'],
          ['`fiini rouu7`', 'I can go']
        ]
      },
      warning:
        'Both `ra7` and `3am` have a full unit of their own further on. What matters today is only ' +
        'the shape: behind `ra7` the verb is bare, behind `3am` it keeps the `b-` exactly as it does ' +
        'when it stands alone.'
    }
  ],

  vocab: [
    { lb: 'léézem', ar: 'لازِم', en: 'must, have to', pos: 'v', note: 'never changes shape; the verb behind it carries the person' },
    { lb: 'moumken', ar: 'مُمْكِن', en: 'could, may, possibly', pos: 'adv' },
    { lb: 'ra7', ar: 'رَح', en: 'will — the future marker', pos: 'adv', note: 'takes the b- off the verb behind it' },
    { lb: '3am', ar: 'عَم', en: 'right now — the continuous marker', pos: 'adv', note: 'the one word that leaves the b- alone' },
    { lb: 'lamma', ar: 'لمّا', en: 'when, whenever', pos: 'adv' },
    { lb: 'abl maa', ar: 'قَبْل ما', en: 'before (in front of a verb)', pos: 'prep' },
    { lb: 'kerméél', ar: 'كِرْمال', en: 'so that, in order to', pos: 'prep' },
    { lb: 'la-', ar: 'لَ', en: 'in order to (the short version of kerméél)', pos: 'prep' },
    { lb: 'ta3a', ar: 'تَعا', en: 'come on, let us (to a man)', pos: 'v', note: 'ta3é to a woman, ta3o to several' },
    { lb: 'khalliina', ar: 'خَلّينا', en: 'let us', pos: 'v', note: 'khalliini is let me, khalliih is let him' },
    { lb: 'enno', ar: 'إنّو', en: 'that — introducing a verb', pos: 'prep' },
    { lb: 'fiini', ar: 'فيني', en: 'I can', pos: 'v', note: 'fiik to a man, fiiké to a woman, fiina for us' },
    { lb: 'fiik', ar: 'فيك', en: 'you can (to a man)', pos: 'v' },
    { lb: 'fii majéél', ar: 'في مَجال', en: 'would there be a chance to…', pos: 'phr', note: 'the polite way to ask for something' }
  ],

  phrases: [
    {
      lb: 'léézem rouu7', ar: 'لازِم روح', en: 'I have to go',
      when: 'the standard way to end a visit, said while already standing up'
    },
    {
      lb: 'fiik terja3 boukra?', ar: 'فيك تِرْجَع بُكْرة؟', en: 'can you come back tomorrow? (to a man)',
      when: 'when today is not going to work out',
      reply: 'akiid', replyEn: 'of course'
    },
    {
      lb: 'ta3a nrouu7', ar: 'تَعا نْروح', en: 'come on, let us go',
      when: 'getting somebody out of a chair; ta3é to a woman, ta3o to a group'
    },
    {
      lb: 'khalliina ne23od', ar: 'خَلّينا نِقْعُد', en: 'let us sit down',
      when: 'proposing a pause, in a café or in somebody\'s living room'
    },
    {
      lb: 'maa be2dar ejé', ar: 'ما بِقْدَر إِجي', en: 'I cannot come',
      when: 'turning down an invitation — and a clean example of the second verb going bare'
    },
    {
      lb: 'moumken tejé ma3na?', ar: 'مُمْكِن تِجي مَعْنا؟', en: 'could you come with us? (to a man)',
      when: 'a soft invitation that leaves the door open for a no'
    }
  ],

  dialogue: {
    title: 'Getting someone out of the house',
    setting: 'Elie has been saying he is coming for twenty minutes. Every sentence here has two verbs in it, and only the first one keeps its b.',
    lines: [
      { who: 'You', you: true, lb: 'ta3a nrouu7! léézem nrouu7 halla2.', ar: 'تعا نروح! لازم نروح هلق', en: 'come on, let us go! We have to go now.',
        note: 'nrouu7, not mnerouu7. After léézem and after ta3a the b falls off.' },
      { who: 'Elie', lb: 'fiini khallaS shii? khams d2ééye2.', ar: 'فيني خلص شي؟ خمس دقايق', en: 'can I just finish something? Five minutes.' },
      { who: 'You', you: true, lb: 'maa be2dar estanna kaméén.', ar: 'ما بقدر استنى كمان', say: 'ما بأدر استنى كمان', en: 'I cannot wait any longer.',
        note: 'be2dar keeps its b because it is the first verb. estanna loses its own.' },
      { who: 'Elie', lb: 'Tayyeb, Tayyeb. bass léézem ekhod el-mfeté7.', ar: 'طيب، طيب. بس لازم اخد المفاتيح', en: 'all right, all right. But I have to take the keys.' },
      { who: 'You', you: true, lb: 'khalliina nenzal, w enta bteji ba3déén.', ar: 'خلينا ننزل، وانت بتجي بعدين', en: 'let us go down, and you come after.' },
      { who: 'Elie', lb: 'la2, ra7 ejé ma3ak. lamma erja3 bekhod-on.', ar: 'لأ، رح إجي معك. لما ارجع باخدهن', en: 'no, I will come with you. When I come back I will take them.',
        note: 'After ra7 and after lamma, the b goes again. Three markers, one rule.' },
      { who: 'You', you: true, lb: 'yalla. moumken tenzal halla2?', ar: 'يلا. ممكن تنزل هلق؟', en: 'come on. Could you come down now?' }
    ]
  },

  culture: {
    heading: 'Why the b keeps falling off',
    icon: 'drop',
    body:
      'This is one rule wearing five costumes, and it is worth seeing it as one thing rather than ' +
      'five.\n\n' +
      'The `b` marks a statement about the real world: this happens, this is the case. The moment a ' +
      'verb stops being a statement and becomes something else — something wanted, ordered, planned, ' +
      'required, or merely possible — the b has nothing left to do and drops. So it goes after ' +
      '`léézem` (required), after `ra7` (planned), after `fiini` and `moumken` (possible), after ' +
      '`baddé` (wanted), and after a first verb that already carried it.\n\n' +
      'English does the same job with the word "to". Two verbs in a row need something between them, ' +
      'and where English inserts a word, Lebanese removes one. Once you hear it that way the rule ' +
      'stops needing to be memorised in five separate places.\n\n' +
      'The practical test: if you can put "to" in front of the English verb, the Lebanese verb has ' +
      'no b. I have to **to go**. I can **to come**. It is clumsy English and it is a reliable ' +
      'switch.',
  },

  drills: [
    { type: 'choice', q: 'Which one is Lebanese for "I want to go"?',
      options: ['baddé rouu7', 'baddé brouu7', 'baddé la-rouu7'], answer: 0,
      explain: 'baddé is a trigger, so the verb behind it loses its b- and keeps its person.' },

    { type: 'choice', q: 'Complete: léézem ___ 3al-béét — we have to go home.',
      options: ['nrouu7', 'menrouu7', 'brouu7'], answer: 0,
      explain: 'menrouu7 is the form for a verb standing alone. Behind léézem the m goes and n- is left.' },

    { type: 'choice', q: 'Complete: 3am ___ — I am eating.',
      options: ['béékol', 'éékol', 'téékol'], answer: 0,
      explain: '3am is the single marker that leaves the b- alone. éékol is what you would say after a trigger.' },

    { type: 'choice', q: 'Complete: ra7 ___ — he will eat.',
      options: ['yéékol', 'byéékol', 'téékol'], answer: 0,
      explain: 'ra7 drops the b-, so byéékol becomes yéékol. The person stays on the verb.' },

    { type: 'conjugate', en: 'she has to sit — behind léézem', root: 'e23od', person: 'hiyyé', tense: 'present',
      options: ['te23od', 'bte23od', 'ye23od', 'te23dé'], answer: 0,
      explain: 'Bare form: strip the b-, keep the t-. She shares it with "you (m)", as always.' },

    { type: 'conjugate', en: 'they want to come — behind baddon', root: 'ejé', person: 'henné', tense: 'present',
      options: ['yejo', 'byejo', 'tejo', 'yejé'], answer: 0,
      explain: 'byejo minus the b- is yejo. Both the suffix verb and the verb agree with them.' },

    { type: 'build', en: 'We have to go back home.',
      tiles: ['léézem', 'nerja3', '3al-béét'], extra: ['mnerja3'], answer: 'léézem nerja3 3al-béét' },

    { type: 'gap', en: 'You have been at a friend\'s house for four hours and it is late.',
      lines: [
        { who: 'Sami', lb: 'léésh? ba3do bakkiir', en: 'why? it is still early' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['léézem rouu7', 'léézem brouu7', 'léézem birouu7'], answer: 0,
      explain: 'One trigger, one bare verb. The first person of rouu7 with no b- is simply the root.' },

    { type: 'type', en: 'I have to go.', answer: 'léézem rouu7' },

    { type: 'match',
      pairs: [['léézem', 'must'], ['moumken', 'could'], ['ra7', 'will'], ['lamma', 'when']] },

    { type: 'choice', q: 'Why is baddé béékol wrong?',
      options: [
        'A verb behind a trigger loses its b-: baddé éékol',
        'baddé can only be followed by a noun',
        'The two verbs must agree with different people'
      ], answer: 0 },

    { type: 'conjugate', en: 'you can talk — behind fiiké, to one woman', root: 'e7ké', person: 'enté', tense: 'present',
      options: ['te7ké', 'bte7ké', 'ye7ké', 'te7ko'], answer: 0,
      explain: 'The root ends in -é, so the woman ending is absorbed here as it is in the b- form.' },

    { type: 'gap', en: 'Two of you are standing outside a cinema with ten minutes to spare.',
      lines: [
        { who: 'Nadim', lb: 'fii wa2t. shou baddak ta3mol?', en: 'there is time. what do you want to do?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['baddé eshrab 2ahwe', 'baddé beshrab 2ahwe', 'baddé byeshrab 2ahwe'], answer: 0,
      explain: 'Behind baddé the vowel of the root comes back and the b- goes: eshrab.' },

    { type: 'choice', q: 'Which of the two markers leaves the b- on the verb?',
      options: ['3am', 'ra7', 'both of them'], answer: 0,
      explain: '3am brouu7 keeps it, ra7 rouu7 takes it off. That single contrast separates now from later.' }
  ],

  quiz: [
    { type: 'choice', q: 'Complete: bi7ebb ___ es-samak — he likes to eat fish.',
      options: ['yéékol', 'byéékol', 'téékol'], answer: 0,
      explain: 'Two verbs, both third person masculine, and only the second one goes bare.' },

    { type: 'conjugate', en: 'we could sit — behind moumken', root: 'e23od', person: 'ne7na', tense: 'present',
      answer: 'ne23od' },

    { type: 'choice', q: 'One of these is broken. Which one?',
      options: ['3am rouu7', '3am brouu7', 'ra7 rouu7'], answer: 0,
      explain: '3am is the one word that leaves the b- alone, so 3am brouu7 is the correct pair.' },

    { type: 'build', en: 'They have to come back tomorrow.',
      tiles: ['léézem', 'yerja3o', 'boukra'], extra: ['byerja3o'],
      answer: 'léézem yerja3o boukra' },

    { type: 'gap', en: 'A colleague is asking you to take on something you have no room for.',
      lines: [
        { who: 'Rana', lb: 'fiik tejé ma3é 3al-maktab boukra?', en: 'can you come with me to the office tomorrow?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['maa be2dar ejé boukra', 'maa be2dar bejé boukra', 'maa bejé e2dar boukra'], answer: 0 },

    { type: 'match',
      pairs: [['ta3a nrouu7', 'come on, let us go'], ['khalliina ne23od', 'let us sit down'], ['abl maa nrouu7', 'before we go'], ['la-rouu7', 'so that I go']] },

    { type: 'type', en: 'I want to go back home.', answer: 'baddé erja3 3al-béét' },

    { type: 'conjugate', en: 'you will buy — behind ra7, to one man', root: 'eshtré', person: 'enta', tense: 'present',
      options: ['teshtré', 'bteshtré', 'yeshtré', 'teshtro'], answer: 0 },

    { type: 'choice', q: 'What comes back in the first person when the b- is taken off berja3?',
      options: [
        'The vowel the root began with: erja3',
        'Nothing; the form is rja3',
        'An m, as in nerja3'
      ], answer: 0,
      explain: 'Vowel roots restore their vowel; consonant roots do not, which is why brouu7 gives plain rouu7.' },

    { type: 'choice', q: 'Which sentence has the b- in the right place?',
      options: [
        'b7ebb emshé 3al-béét',
        '7ebb bemshé 3al-béét',
        'b7ebb bemshé 3al-béét'
      ], answer: 0,
      explain: 'First verb keeps the b-, second verb goes bare. Never the other way round, never both.' }
  ]
});
