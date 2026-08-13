LEB.addUnit({
  id: 'u14',
  stage: 2,
  order: 14,
  title: 'Where Things Are',
  goal: 'Ask where something is, follow the answer, and see the eight endings from unit six doing the work of half the language.',
  canDo: [
    'Put the eight endings on six different prepositions',
    'Place one thing in relation to another',
    'Ask where something is, and say there is or there is not'
  ],

  grammar: [
    {
      heading: 'Four prepositions, one set of endings',
      body:
        'This is the unit where the work you did on the eight endings pays for itself, so let it ' +
        'be said plainly: **that one small table runs about half of Lebanese**. You learned it as ' +
        'a way of saying *my name*, *your name*. It also turns prepositions into complete ' +
        'statements, and it is the reason a language with no verb for *have* manages perfectly ' +
        'well without one.\n\n' +
        'Look at what is happening. `ma3` on its own means *with*. Put an ending on it and ' +
        '`ma3é` means *with me* — which in practice means *I have it on me right now*. `3end` ' +
        'means *at*, and `3endé` means *I own it*. `menn` means *from*, so `menno` is *from him*. ' +
        '`la-el-` marks belonging: `la-elo` is *his*.\n\n' +
        'Four different words, one identical set of endings, and no new grammar at all. Read the ' +
        'four columns downwards and you will see that after the first column you are not really ' +
        'learning anything — you are recognising something.',
      table: {
        headers: ['person', '`ma3-` with', '`3end-` at / own', '`menn-` from', '`la-el-` belonging to'],
        rows: [
          ['ana', '`ma3é`', '`3endé`', '`menné`', '`la-elé`'],
          ['enta', '`ma3ak`', '`3endak`', '`mennak`', '`la-elak`'],
          ['enté', '`ma3ik`', '`3endik`', '`mennik`', '`la-elik`'],
          ['houwwé', '`ma3o`', '`3endo`', '`menno`', '`la-elo`'],
          ['hiyyé', '`ma3a`', '`3enda`', '`menna`', '`la-ela`'],
          ['ne7na', '`ma3na`', '`3enna`', '`menna`', '`la-elna`'],
          ['ento', '`ma3kon`', '`3endkon`', '`mennkon`', '`la-elkon`'],
          ['henné', '`ma3on`', '`3endon`', '`mennon`', '`la-elon`']
        ]
      },
      warning:
        'Two traps in that table. `3enna` for *we have* loses the `d` — it is not `3endna`. And ' +
        '`menna` is both *from her* and *from us*; only the situation tells them apart.'
    },
    {
      heading: 'What happens after a long vowel',
      body:
        'Two of the most useful prepositions end in a long vowel, and endings behave differently ' +
        'when they land on one. `3ala` means *on*, `fii` means *in*. Neither can simply take ' +
        '`-ak` or `-o`, because you would end up with two vowels colliding, so the endings shift ' +
        'shape: `-k`, `-ké`, `-h`, `-ya`, `-yon`.\n\n' +
        'The result looks unfamiliar for about a day and then stops being a problem. `3ala` plus ' +
        'the *you* ending gives `3léék`, on you. `fii` plus the same ending gives `fiik`, in you. ' +
        'The shift is regular: once you have seen it on one word you have seen it on all of them, ' +
        'and it also explains forms you have already met, like `ahla fiik`.\n\n' +
        'One warning about `fii-`. With endings it does two separate jobs. `fiiya` can mean ' +
        '*inside it*, and it can mean *she can* — this second use, the one that carries a verb ' +
        'behind it, is the one you met as a suffix verb. The shape is identical; the job is ' +
        'decided by what follows.',
      table: {
        headers: ['person', '`3ala` on', '`fii` in / can'],
        rows: [
          ['ana', '`3layyé`', '`fiini`'],
          ['enta', '`3léék`', '`fiik`'],
          ['enté', '`3lééké`', '`fiiké`'],
          ['houwwé', '`3léé`', '`fiih`'],
          ['hiyyé', '`3lééha`', '`fiiya`'],
          ['ne7na', '`3lééna`', '`fiina`'],
          ['ento', '`3léékon`', '`fiikon`'],
          ['henné', '`3lééhon`', '`fiiyon`']
        ]
      }
    },
    {
      heading: 'Putting one thing beside another',
      body:
        'The place words are the easy half of this unit. Each of them goes straight in front of ' +
        'the noun with nothing in between — no *of*, no linking word, no ending. `7add ' +
        'el-m7aTTa` is next to the station, and that is the whole construction.\n\n' +
        'Watch the article rather than the preposition. `el-` shrinks to `l-` when the word in ' +
        'front of it ends in a vowel, so it is `jouwwa l-béét` but `2eddéém el-madrasé`. And it ' +
        'still melts into a sun letter: `ta7t eT-Taawlé`.\n\n' +
        'Two of these overlap. `2eddéém` is *in front of* — the side of the building you enter ' +
        'from. `2béél` is *facing* — across the road, looking at it. English uses *opposite* for ' +
        'the second and often *in front of* for both, so it is worth separating them now.\n\n' +
        'And one honest gap: this course has no single word for *far*. `mesh 2ariib` — not near — ' +
        'is what you say, and it is what you will hear.',
      table: {
        headers: ['word', 'meaning', 'example', 'meaning'],
        rows: [
          ['`jouwwa`', 'inside', '`jouwwa l-béét`', 'inside the house'],
          ['`barra`', 'outside', '`barra l-béét`', 'outside the house'],
          ['`fo2`', 'above, on top of', '`fo2 eT-Taawlé`', 'on top of the table'],
          ['`ta7t`', 'under, downstairs', '`ta7t eT-Taawlé`', 'under the table'],
          ['`2eddéém`', 'in front of', '`2eddéém el-madrasé`', 'in front of the school'],
          ['`wara`', 'behind', '`wara l-maktab`', 'behind the office'],
          ['`7add`', 'next to', '`7add el-m7aTTa`', 'next to the station'],
          ['`2béél`', 'facing, opposite', '`2béél el-ma7al`', 'across from the shop'],
          ['`2ariib men`', 'near', '`2ariib men hoon`', 'near here']
        ]
      }
    },
    {
      heading: 'Here, there, and there is',
      body:
        '`hoon` is here, `honiik` is there, and `wéén` is the question. All three are bare words ' +
        'with nothing attached: `wéén el-maktab?` — where is the office? Once again there is no ' +
        'verb, because the present tense of *to be* does not exist.\n\n' +
        'To say that something exists somewhere, Lebanese uses `fii` on its own at the front of ' +
        'the sentence: `fii ma7al 7add el-m7aTTa` — there is a shop next to the station. Negate ' +
        'it with `maa`: `maa fii ma7al hoon` — there is no shop here. `maa fii` on its own is a ' +
        'complete answer meaning *there is not any*.\n\n' +
        'So `fii` is now doing two things and it is worth being clear about which is which. At ' +
        'the **front** of a sentence, alone and bare, it means *there is*. With an **ending** on ' +
        'it, it belongs to the table in the second block of this unit. Position decides.\n\n' +
        'A last useful question: `wéén bet-te7diid?` — where exactly? It is what you ask when the ' +
        'answer you got was `honiik` and a wave of the hand, which it usually is.',
      examples: [
        { lb: 'wéén el-maktab?', ar: 'وين المكتب؟', en: 'where is the office?' },
        { lb: 'honiik, wara l-m7aTTa', ar: 'هونيك، ورا المحطة', en: 'over there, behind the station' },
        { lb: 'fii ma7al 2ariib men hoon', ar: 'في محل قريب من هون', en: 'there is a shop near here' },
        { lb: 'maa fii 7ada hoon', ar: 'ما في حدا هون', en: 'there is nobody here' },
        { lb: 'el-ghraaD ma3é', ar: 'الغراض معي', en: 'I have the shopping with me' }
      ]
    }
  ],

  vocab: [
    { lb: 'jouwwa', ar: 'جوا', en: 'inside', pos: 'prep' },
    { lb: 'barra', ar: 'برا', en: 'outside', pos: 'prep' },
    { lb: 'fo2', ar: 'فوق', en: 'above, on top of, upstairs', pos: 'prep' },
    { lb: 'ta7t', ar: 'تحت', en: 'under, downstairs', pos: 'prep' },
    { lb: '2eddéém', ar: 'قدام', en: 'in front of', pos: 'prep' },
    { lb: 'wara', ar: 'ورا', en: 'behind', pos: 'prep' },
    { lb: '7add', ar: 'حد', en: 'next to', pos: 'prep' },
    { lb: '2béél', ar: 'قبال', en: 'facing, opposite', pos: 'prep' },
    { lb: '2ariib', ar: 'قريب', en: 'near, close', pos: 'adj', note: 'feminine 2ariibé; mesh 2ariib is how you say far' },
    { lb: 'hoon', ar: 'هون', en: 'here', pos: 'adv' },
    { lb: 'honiik', ar: 'هونيك', en: 'there', pos: 'adv' },
    { lb: 'wéén', ar: 'وين', en: 'where', pos: 'adv' },
    { lb: 'm7aTTa', ar: 'محطة', en: 'station', pos: 'n', gender: 'f' },
    { lb: 'ma7al', ar: 'محل', en: 'shop, place', pos: 'n', gender: 'm' },
    { lb: 'maktab', ar: 'مكتب', en: 'office, desk', pos: 'n', gender: 'm' },
    { lb: 'Tarii2', ar: 'طريق', en: 'road, way', pos: 'n', gender: 'f' }
  ],

  phrases: [
    {
      lb: 'wéén el-m7aTTa?', ar: 'وين المحطة؟', en: 'where is the station?',
      when: 'stopping anyone in the street; swap in whatever you are looking for',
      reply: 'honiik', replyEn: 'over there — usually with a wave rather than an address'
    },
    {
      lb: 'wéén bet-te7diid?', ar: 'وين بالتحديد؟', en: 'where exactly?',
      when: 'the follow-up question, after the wave'
    },
    {
      lb: 'fii ma7al hoon?', ar: 'في محل هون؟', en: 'is there a shop here?',
      when: 'asking whether something exists nearby at all',
      reply: 'éh, fii', replyEn: 'yes, there is'
    },
    {
      lb: 'maa fii', ar: 'ما في', en: 'there is not any',
      when: 'a complete answer on its own — no shop, no bread, no room'
    },
    {
      lb: '2ariib ktiir', ar: 'قريب كتير', en: 'very close',
      when: 'reassuring someone about a distance, whether or not it is true'
    },
    {
      lb: 'ma3ak?', ar: 'معك؟', en: 'have you got it on you?',
      when: 'about something carried right now, not something owned; ma3ik to a woman'
    }
  ],

  dialogue: {
    title: 'Directions given entirely by landmark',
    setting: 'You want a pharmacy. Nobody is going to give you a street name, because nobody uses them.',
    lines: [
      { who: 'You', you: true, lb: '3afwan, fii Saydaliyyé 2ariibé?', ar: 'عفوا، في صيدلية قريبة؟', say: 'عفوا، في صيدلية أريبة؟', en: 'excuse me, is there a pharmacy nearby?' },
      { who: 'Woman', lb: 'fii, fii. 2ariib ktiir.', ar: 'في، في. قريب كتير', say: 'في، في. أريب كتير', en: 'there is, there is. Very close.' },
      { who: 'You', you: true, lb: 'wéén bet-te7diid?', ar: 'وين بالتحديد؟', en: 'where exactly?',
        note: 'The question that saves you twenty minutes. Ask it every time.' },
      { who: 'Woman', lb: '2eddéém el-forn. 7add el-ma7al el-a7mar.', ar: 'قدام الفرن. حد المحل الأحمر', say: 'أدام الفرن. حد المحل الأحمر', en: 'in front of the bakery. Next to the red shop.' },
      { who: 'You', you: true, lb: 'w el-forn wéén?', ar: 'والفرن وين؟', en: 'and where is the bakery?' },
      { who: 'Woman', lb: 'ta7t. ta7t el-jesr.', ar: 'تحت. تحت الجسر', en: 'below. Under the bridge.' },
      { who: 'You', you: true, lb: 'Tayyeb. jouwwa walla barra?', ar: 'طيب. جوا ولا برا؟', en: 'all right. Inside or outside?' },
      { who: 'Woman', lb: 'barra, 3ala Tuul. 2ariib ktiir!', ar: 'برا، على طول. قريب كتير', say: 'برا، على طول. أريب كتير', en: 'outside, straight ahead. Very close!',
        note: 'Everything is 2ariib ktiir. Ask the next person as well.' }
    ]
  },

  culture: {
    heading: 'A city with no addresses',
    icon: 'pin',
    body:
      'Beirut has street names. They are on signs, they are on maps, and almost nobody navigates by ' +
      'them. Directions are given by what you can see: the bakery, the pharmacy, the church, the ' +
      'building with the blue balconies, the spot where the petrol station used to be twenty years ' +
      'ago and is not any more.\n\n' +
      'So the prepositions in this unit are not a grammar exercise, they are the address system. ' +
      '`2eddéém`, `wara`, `7add`, `ta7t`, `fo2` — in front of, behind, next to, under, above — do ' +
      'the work that a street number does elsewhere. Deliveries are arranged this way. So are ' +
      'taxis.\n\n' +
      '`fo2` and `ta7t` also mean up the hill and down the hill, which in a city built on slopes is ' +
      'most of the information. Going `ta7t` from Achrafieh means towards the sea. People say it ' +
      'about whole neighbourhoods, not just staircases.\n\n' +
      'The practical rule: get two landmarks, not one. A single landmark you have never seen is ' +
      'worth nothing, and the second one tells you which direction the first is in.',
  },

  drills: [
    { type: 'match',
      pairs: [['jouwwa', 'inside'], ['barra', 'outside'], ['fo2', 'above'], ['ta7t', 'under']] },

    { type: 'choice', q: 'How do you say "next to the station"?',
      options: ['7add el-m7aTTa', '7add men el-m7aTTa', 'el-m7aTTa 7add'], answer: 0,
      explain: 'The place word goes straight in front of the noun, with nothing in between.' },

    { type: 'conjugate', en: 'from him', root: 'menn', person: 'houwwé',
      options: ['menno', 'menna', 'mennon', 'menné'], answer: 0,
      explain: 'The same endings as on a noun. menna would be from her, or from us.' },

    { type: 'choice', q: 'Why is it `jouwwa l-béét` and not `jouwwa el-béét`?',
      options: [
        'The article shrinks after a word ending in a vowel',
        'béét is masculine',
        'jouwwa never takes an article after it'
      ], answer: 0 },

    { type: 'build', en: 'There is a shop next to the office.',
      tiles: ['fii', 'ma7al', '7add', 'el-maktab'], extra: ['maa'], answer: 'fii ma7al 7add el-maktab' },

    { type: 'gap', en: 'You are lost and stop someone on the pavement.',
      lines: [
        { who: 'You', you: true, lb: 'wéén el-m7aTTa?', en: 'where is the station?' },
        { who: 'Nabil', lb: 'honiik, 2béél el-ma7al el-kbiir', en: 'over there, opposite the big shop' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['2ariib?', 'wéén el-ma7al el-kbiir', 'maa fii'], answer: 0,
      explain: 'He has told you where. The natural next question is whether it is close.' },

    { type: 'conjugate', en: 'on me', root: '3ala', person: 'ana',
      options: ['3layyé', '3léék', '3lééha', '3léé'], answer: 0,
      explain: 'After a long vowel the endings change shape. 3ala plus the me ending gives 3layyé.' },

    { type: 'type', en: 'Where?', answer: 'wéén' },

    { type: 'choice', q: 'Someone asks whether there is bread left. There is none. What do you say?',
      options: ['maa fii', 'mesh fii', 'la2 fiini'], answer: 0,
      explain: 'fii is negated with maa, like every suffix verb.' },

    { type: 'match',
      pairs: [['7add', 'next to'], ['2eddéém', 'in front of'], ['wara', 'behind'], ['2béél', 'opposite']] },

    { type: 'build', en: 'Behind the school.',
      tiles: ['wara', 'l-madrasé'], extra: ['el-madrasé'], answer: 'wara l-madrasé' },

    { type: 'choice', q: 'Which one means "we have it, we own it"?',
      options: ['3enna', '3endna', 'ma3na'], answer: 0,
      explain: 'The d falls out in this one slot. ma3na would mean we have it on us right now.' },

    { type: 'type', en: 'Over there.', answer: 'honiik' },

    { type: 'choice', q: 'What is `fii` doing in `fii ma7al hoon`?',
      options: [
        'It is saying that something exists — there is',
        'It means inside',
        'It means I can'
      ], answer: 0,
      explain: 'Bare, at the front of the sentence, fii means there is. With an ending it does other jobs.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which form means "for him, his"?',
      options: ['la-elo', 'la-ela', 'la-elon'], answer: 0 },

    { type: 'build', en: 'There is no shop here.',
      tiles: ['maa', 'fii', 'ma7al', 'hoon'], extra: ['mesh'], answer: 'maa fii ma7al hoon' },

    { type: 'conjugate', en: 'in it (feminine), or she can', root: 'fii', person: 'hiyyé',
      options: ['fiiya', 'fiih', 'fiina', 'fiiyon'], answer: 0,
      explain: 'One shape, two jobs. What follows decides which.' },

    { type: 'match',
      pairs: [['m7aTTa', 'station'], ['ma7al', 'shop'], ['maktab', 'office'], ['Tarii2', 'road']] },

    { type: 'choice', q: 'What is the difference between `2eddéém` and `2béél`?',
      options: [
        '2eddéém is in front of it, 2béél is across from it',
        '2eddéém is for buildings, 2béél is for people',
        'There is none'
      ], answer: 0 },

    { type: 'gap', en: 'A friend is in your kitchen and cannot find what she is after.',
      lines: [
        { who: 'Rima', lb: 'wéén el-khebz?', en: 'where is the bread?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['fo2 eT-Taawlé', 'fo2 Taawlé', 'eT-Taawlé fo2'], answer: 0,
      explain: 'The place word first, then the noun with its article melted into the T.' },

    { type: 'type', en: 'Near here.', answer: '2ariib men hoon', accept: ['ariib men hoon'] },

    { type: 'choice', q: 'You are asked whether you are carrying your papers right now. Which word is right?',
      options: ['ma3é', '3endé', 'la-elé'], answer: 0,
      explain: 'ma3é is what is on you at this moment. 3endé is what you own; la-elé is what belongs to you.' },

    { type: 'conjugate', en: 'from us', root: 'menn', person: 'ne7na',
      options: ['menna', 'mennon', 'mennkon', 'menné'], answer: 0,
      explain: 'The same form serves for from her. Lebanese lets the situation do the work.' },

    { type: 'choice', q: 'How do you say a place is far?',
      options: ['mesh 2ariib', 'maa 2ariib', '2ariib ktiir'], answer: 0,
      explain: 'mesh negates anything that is not a verb. 2ariib ktiir means the opposite: very close.' }
  ]
});
