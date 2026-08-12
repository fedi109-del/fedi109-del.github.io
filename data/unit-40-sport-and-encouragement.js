LEB.addUnit({
  id: 'u40',
  stage: 5,
  order: 40,
  title: 'Yalla, One More',
  goal: 'Talk about training, say what you can and cannot manage, push somebody on, and take a joke the way it was meant.',
  canDo: [
    'Use `fii-` in all eight persons to say what you are and are not able to do',
    'Say why you are doing something, and how much of it, in two short frames',
    'Read affectionate mockery as the sign of closeness it is, and return it',
    'Know what to do with Lebanese now that the units have run out'
  ],

  grammar: [
    {
      heading: 'fii- in all eight persons',
      body:
        'You met `fii-` early on as a way of saying "can". Here it is at full size, because a gym is ' +
        'where the language of being able and not being able gets used every three minutes.\n\n' +
        '`fii-` is a suffix verb, not a real verb. It takes suffixes, not prefixes, and because `fii` ' +
        'ends in a long vowel it takes the **long-vowel series** — the same endings as `bya3Tiik` and ' +
        '`3léék`: `-ni`, `-k`, `-ké`, `-h`, `-ya`, `-na`, `-kon`, `-yon`. Behind it goes a bare verb, ' +
        'conjugated for the same person, with no `b-`. Negation is `maa` in front of the whole thing: ' +
        '`maa fiini enhazz`.\n\n' +
        'Beside it sits `e2dar`, the other "can", which is an ordinary verb and conjugates like one. ' +
        'The difference is not politeness, it is **tense**. `fii-` has nowhere to put a particle: there ' +
        'is no way to say "I was not managing" or "I will be able to" with it. `e2dar` can carry the ' +
        'whole system — `maa 3am be2dar`, "I am not managing right now"; `maa ra7 e2dar`, "I will not ' +
        'be able to".\n\n' +
        'So the division of labour is clean. For a flat statement about ability, `fii-` is lighter and ' +
        'more natural. The moment a tense is involved, switch to `e2dar`.',
      table: {
        headers: ['person', 'can', 'can walk'],
        rows: [
          ['ana', '`fiini`', '`fiini emshé`'],
          ['enta', '`fiik`', '`fiik temshé`'],
          ['enté', '`fiiké`', '`fiiké temshé`'],
          ['houwwé', '`fiih`', '`fiih yemshé`'],
          ['hiyyé', '`fiiya`', '`fiiya temshé`'],
          ['ne7na', '`fiina`', '`fiina nemshé`'],
          ['ento', '`fiikon`', '`fiikon temsho`'],
          ['henné', '`fiiyon`', '`fiiyon yemsho`']
        ]
      },
      examples: [
        { lb: 'fiina nesta3mel el-makanéét add maa baddna', ar: 'فينا نِسْتَعْمِل المَكَنات قَدّ ما بَدْنا', en: 'We can use the machines as much as we like.' },
        { lb: 'maa fiini enhazz lyoom, ana helkéén', ar: 'ما فيني إِنْهَزّ اليوم، أنا هِلْكان', en: 'I cannot get moving today, I am exhausted.' },
        { lb: 'maa 3am be2dar rouu7 kell yoom', ar: 'ما عَم بِقْدَر روح كِل يوم', en: 'I am not managing to go every day.', note: 'this one needs `e2dar`, because `3am` cannot sit on `fii-`' }
      ],
      warning:
        '`fii-` cannot carry a tense. Anything that needs one — "I was not able to", "I am not ' +
        'managing", "I will not be able to" — has to go through `e2dar`, because there is nowhere in ' +
        '`fiini` to put `3am`, `ra7` or a past root.'
    },

    {
      heading: 'Why you are doing it, and how much',
      body:
        'Two small frames carry most of what gets said about training, and both are worth having ' +
        'outside a gym as well.\n\n' +
        'The first is `la-` plus a bare verb: the short purpose clause. `bemshé kell yoom la-oD3af` — ' +
        '"I walk every day so that I lose weight". The `la-` glues straight onto the verb, and the ' +
        'verb keeps its person and loses its `b-`. Its longer, slightly heavier cousin is `kerméél`, ' +
        'which does exactly the same job with more ceremony. Notice that both verbs agree with you: ' +
        'there is no infinitive to fall back on, so "in order to lose weight" is conjugated for ' +
        'whoever is losing it.\n\n' +
        'The second is `add maa`, "as much as". `add` on its own is an amount — it is the `add` inside ' +
        '`addéé?` ("how much?") — and `add maa` plus a clause turns it into a comparison: ' +
        '`add maa baddna`, as much as we want; `add maa fiik`, as much as you can. It is a productive ' +
        'frame rather than a fixed phrase, so anything can go in the slot.\n\n' +
        'Frequency is built the ordinary way, with `bel-jem3a` for "a week": `marra bel-jem3a`, ' +
        '`arb3a marraat bel-jem3a`. No preposition changes, no special construction.',
      table: {
        headers: ['frame', 'meaning', 'example'],
        rows: [
          ['`la-` + bare verb', 'in order to', '`la-oD3af` — so that I lose weight'],
          ['`kerméél` + bare verb', 'in order to (heavier)', '`kerméél oD3af`'],
          ['`add maa` + clause', 'as much as', '`add maa fiik` — as much as you can'],
          ['`addéé?`', 'how much?', 'the same `add`, on its own'],
          ['number + `marraat bel-jem3a`', 'times a week', '`arb3a marraat bel-jem3a`']
        ]
      },
      examples: [
        { lb: 'bemshé kell yoom la-oD3af', ar: 'بِمْشي كِل يوم لَإِضْعَف', en: 'I walk every day so that I lose weight.' },
        { lb: 'menrouu7 arb3a marraat bel-jem3a', ar: 'مِنْروح أَرْبْعة مَرّات بالجِمْعة', en: 'We go four times a week.' },
        { lb: 'esta3mel el-makana add maa fiik', ar: 'إِسْتَعْمِل المَكَنة قَدّ ما فيك', en: 'Use the machine as much as you can.' }
      ]
    },

    {
      heading: 'Being made fun of is a compliment',
      body:
        'This is the part of Lebanese that foreigners misread most often, and it costs them friends.\n\n' +
        'Between people who are close, mockery is constant and it is affectionate. Somebody says ' +
        '`Saayer add ba2ra` about their own body and laughs. Somebody answers your suggestion with ' +
        '`ktiir kharjé!` — "oh, perfect for me" — meaning the exact opposite. Somebody hears your ' +
        'excuse and says `ktiir smallah`, flat, meaning they do not believe a word of it. Somebody ' +
        'watches you eat and says `biDall béélak bi-baTnak`, or throws up their hands with ' +
        '`Allah yséé3edné 3léék`.\n\n' +
        'None of this is hostile. In Lebanon teasing a person is a **claim of closeness**: it says ' +
        'that you are close enough for it not to wound. Which means the correct response is not to ' +
        'explain yourself and not to apologise. It is to give it back. Meeting a tease with a careful, ' +
        'polite sentence pushes the other person out to arm\'s length, which is precisely the distance ' +
        'they were trying to close.\n\n' +
        'The same goes for the self-deprecation. When a friend says they have got as big as a cow, ' +
        'they are not fishing and they are not in distress. Reassuring them earnestly is the wrong ' +
        'move; the right one is a joke back, and then the gym.',
      table: {
        headers: ['line', 'what it looks like', 'what it is'],
        rows: [
          ['`ktiir kharjé!`', 'oh, that suits me perfectly', 'sarcastic refusal'],
          ['`ktiir smallah!`', 'a blessing', 'flat disbelief'],
          ['`Allah yséé3edné 3léék`', 'God help me with you', 'fond exasperation'],
          ['`biDall béélak bi-baTnak`', 'your mind stays in your stomach', 'all you think about is food'],
          ['`Saayer add ba2ra`', 'I have got as big as a cow', 'ordinary self-mockery, not a cry for help']
        ]
      },
      warning:
        'Every phrase in this block lives in the tone, not in the words. `ktiir smallah` said flatly ' +
        'to somebody you barely know is an accusation of lying, and `ktiir kharjé` to a stranger is ' +
        'simply rude. Hear them used before you use them, and use them only on people who would ' +
        'tease you back.'
    },

    {
      heading: 'Where this leaves you',
      body:
        'This is the last unit, so it is worth saying plainly what you have and what you do not.\n\n' +
        'You have the whole verb system: the b-form, the bare form, `3am`, `ra7`, the two-root past, ' +
        'and `kéén` stacking on top of any of them. You have the suffix verbs, which is where this ' +
        'language keeps "have", "want", "can" and "feel like". You have the one suffix set that runs ' +
        'nouns, prepositions, verbs and conjunctions alike. You have participles, the three ways of ' +
        'saying no, the conjunctions that strip a `b-`, and several hundred words that people actually ' +
        'use in the street. That is not a foundation for Lebanese. That is Lebanese.\n\n' +
        'What you do not have is time on your ears. Almost every remaining difficulty is a listening ' +
        'problem rather than a grammar problem: speed, vowels that vanish in a rushed sentence, and ' +
        'the handful of phrases in this very unit whose entire meaning is carried by a tone of voice.\n\n' +
        'So the advice for what comes next is short and slightly annoying. **Do not add rules.** ' +
        'Another dozen constructions on top of what you already have will not get you understood any ' +
        'faster. Find people instead. Talk badly at them until you talk less badly. Ask what a word ' +
        'meant in the moment rather than writing it down for later. Get things wrong out loud, in ' +
        'front of people who like you enough to laugh at you — which, as the previous section ' +
        'explained, is a thing that will happen and is not an insult.\n\n' +
        'And when somebody teases you, tease them back. That, more than any table in this app, is ' +
        'what being at home in Lebanese sounds like.',
      table: {
        headers: ['what you can do now', 'built on'],
        rows: [
          ['say what you do, are doing, will do, and did', 'the five tenses'],
          ['say what you have, want, can and still have not', 'the suffix verbs'],
          ['attach any person to any noun, verb or preposition', 'one suffix set'],
          ['complain, invite, refuse, insist and joke', 'register, not grammar'],
          ['read a situation and produce the formula it calls for', 'the fixed pairs']
        ]
      },
      warning:
        'One honest caution. Everything in these forty units is **spoken** Lebanese. It is not what a ' +
        'newspaper prints and it is not what an exam will ask you for. That is not a gap in the ' +
        'course; it is the choice the course made, on the grounds that what you want is to be talked ' +
        'to.'
    }
  ],

  vocab: [
    { lb: 'néédé riyaaDé', ar: 'نادي رياضي', en: 'gym, sports club', pos: 'n', gender: 'm', note: '`néédé` alone is any club; plural `nawéédé`' },
    { lb: 'eshtiraak', ar: 'إِشْتِراك', en: 'membership, subscription', pos: 'n', gender: 'm' },
    { lb: 'moudarreb', ar: 'مُدَرِّب', en: 'trainer, coach', pos: 'n', gender: 'm', note: '`moudarrbé` for a woman' },
    { lb: 'bernéémej', ar: 'بِرْنامِج', en: 'programme', pos: 'n', gender: 'm' },
    { lb: 'Saff', ar: 'صَفّ', en: 'class', pos: 'n', gender: 'm', note: 'plural `Sfouuf`' },
    { lb: 'jesm', ar: 'جِسْم', en: 'body', pos: 'n', gender: 'm' },
    { lb: 'helkéén', ar: 'هِلْكان', en: 'exhausted, wiped out', pos: 'adj', gender: 'm', note: 'stronger than `te3béén`' },
    { lb: 'awé', ar: 'قَوي', en: 'strong', pos: 'adj', gender: 'm' },
    { lb: 'D3iif', ar: 'ضْعيف', en: 'weak', pos: 'adj', gender: 'm' },
    { lb: 'kééfé', ar: 'كافي', en: 'enough', pos: 'adj', gender: 'm' },
    { lb: 'add maa', ar: 'قَدّ ما', en: 'as much as', pos: 'phr', note: 'a frame: anything can follow it' },
    { lb: 'esta3mel', ar: 'إِسْتَعْمِل', en: 'to use', pos: 'v', note: 'root: `besta3mel`, `byesta3mel`' },
    { lb: 'enhazz', ar: 'إِنْهَزّ', en: 'to get moving, to shift oneself', pos: 'v', note: 'root: `benhazz`, `byenhazz`' },
    { lb: '7ammes', ar: 'حَمِّس', en: 'to motivate, to hype up', pos: 'v', note: 'root: `b7ammes`, `bi7ammes`' },
    { lb: 'oD3af', ar: 'إِضْعَف', en: 'to lose weight', pos: 'v', note: 'root: `boD3af`, `byoD3af`' },
    { lb: 'ktiir kharjé', ar: 'كْتير خَرْجي', en: 'oh, perfect for me', pos: 'phr', note: 'always ironic, and always means the opposite' }
  ],

  phrases: [
    {
      lb: 'yalla!', ar: 'يَلا!', en: 'come on',
      when: 'starting somebody moving, or closing a conversation that has run long'
    },
    {
      lb: 'maa te3tal hamm', ar: 'ما تِعْتَل هَم', en: 'do not carry the worry',
      when: 'to somebody fretting about something small — `te3talé` to a woman, `te3talo` to a group'
    },
    {
      lb: 'ma3ak 7a2', ar: 'مَعَك حَق', en: 'you have a point',
      when: 'conceding, mid-argument or mid-tease — `ma3ik 7a2` to a woman'
    },
    {
      lb: 'Allah yséé3edné 3léék', ar: 'الله يْساعِدْني عْليك', en: 'God help me with you',
      when: 'fond exasperation at a friend; never at a stranger'
    },
    {
      lb: 'ktiir smallah!', ar: 'كْتير سْمَالله!', en: 'yeah, right',
      when: 'flat disbelief at what a friend has just claimed — the whole meaning is in the tone'
    },
    {
      lb: 'fashka!', ar: 'فَشْخَة!', en: 'a stone throw away',
      when: 'insisting something is far closer than the other person is pretending'
    },
    {
      lb: 'maa elé jléédé', ar: 'ما إلي جْلادة', en: 'I have no appetite for it',
      when: 'admitting you cannot face doing something, without claiming you are unable to'
    },
    {
      lb: 'bi-zyéédé la-lyoom', ar: 'بِزْيادة لَليوم', en: 'that is plenty for today',
      when: 'calling a stop — to a set, a session, a working day'
    }
  ],

  drills: [
    { type: 'conjugate', en: 'we can walk', root: 'emshé', person: 'ne7na', tense: 'subordinate',
      options: ['fiina nemshé', 'fiina mnemshé', 'fiiyon yemsho', 'fiik temshé'], answer: 0,
      explain: 'Behind `fii-` the verb keeps its person and loses its `b-`/`m-`.' },

    { type: 'choice', q: 'Why can `fii-` not be used to say "I was not able to"?',
      options: [
        'Because it is a suffix verb with nowhere to put a tense particle',
        'Because it only exists in the first person',
        'Because it is too informal for the past'
      ], answer: 0,
      explain: 'For anything with a tense on it you switch to `e2dar`, which conjugates like an ordinary verb.' },

    { type: 'gap', en: 'You have skipped the gym three days running. Rami is not letting it go.',
      lines: [
        { who: 'Rami', lb: 'tléét iyyéém w-maa nzelt 3an-néédé. waynak?', en: 'three days and you have not come to the club. where are you?' },
        { who: 'You', you: true, blank: true },
        { who: 'Rami', lb: 'ktiir smallah! yalla, bshouufak bel-masa', en: 'yeah, right! come on, see you this evening' }
      ],
      options: ['wallah yaa… maa elé jléédé enhazz', 'Allah yen3am 3léék', 'ya3Tiik el-3aafyé'], answer: 0,
      explain: 'The other two are formulas for other situations. `Allah yen3am 3léék` answers `na3iiman`; `ya3Tiik el-3aafyé` is for somebody working hard, which this week is not you.' },

    { type: 'build', en: 'I cannot get moving today.',
      tiles: ['maa', 'fiini', 'enhazz', 'lyoom'], extra: ['fiik'],
      answer: 'maa fiini enhazz lyoom' },

    { type: 'match',
      pairs: [['eshtiraak', 'membership'], ['moudarreb', 'trainer'], ['bernéémej', 'programme'], ['Saff', 'class']] },

    { type: 'choice', q: 'A close friend says `ktiir smallah!` about your excuse. What is the best response?',
      options: [
        'Something equally cheeky back',
        'A careful explanation of why the excuse is true',
        'An apology'
      ], answer: 0,
      explain: 'Teasing is a claim of closeness. Answering it politely pushes the other person back out to the distance they were closing.' },

    { type: 'type', en: 'Come on!', answer: 'yalla' },

    { type: 'conjugate', en: 'she can use it', root: 'esta3mel', person: 'hiyyé', tense: 'subordinate',
      options: ['fiiya testa3mel', 'fiih yesta3mel', 'fiiya besta3mel', 'fiiké testa3mlé'], answer: 0,
      explain: '`fii-` takes the long-vowel suffix `-ya` for `hiyyé`, and the verb takes its own `t-`.' },

    { type: 'choice', q: 'What does `la-` do in `bemshé kell yoom la-oD3af`?',
      options: [
        'It introduces a purpose: so that I lose weight',
        'It marks the future',
        'It negates the second verb'
      ], answer: 0,
      explain: 'And the second verb is still conjugated for you — Lebanese has no infinitive to hide behind.' },

    { type: 'build', en: 'I walk every day so that I lose weight.',
      tiles: ['bemshé', 'kell', 'yoom', 'la-oD3af'], extra: ['ra7'],
      answer: 'bemshé kell yoom la-oD3af' },

    { type: 'match',
      pairs: [
        ['yalla', 'come on'],
        ['maa te3tal hamm', 'do not worry about it'],
        ['ma3ak 7a2', 'you have a point'],
        ['bi-zyéédé la-lyoom', 'that is plenty for today']
      ] },

    { type: 'choice', q: 'Which of these is safe to say to somebody you have just met?',
      options: ['ya3Tiik el-3aafyé', 'ktiir kharjé!', 'Allah yséé3edné 3léék'], answer: 0,
      explain: 'The other two are teasing, and teasing without a relationship behind it lands as rudeness.' },

    { type: 'type', en: 'Do not worry about it. (to a man)', answer: 'maa te3tal hamm', accept: ['ma te3tal hamm'] },

    { type: 'gap', en: 'Lara is on the last set and about to stop.',
      lines: [
        { who: 'Lara', lb: 'maa fiini kaméén, ana helkééné', en: 'I cannot do any more, I am wiped out' },
        { who: 'You', you: true, blank: true },
        { who: 'Lara', lb: 'Tayyeb… we7dé w-bass', en: 'all right… one, and that is it' }
      ],
      options: ['yalla, kaméén we7dé! maa te3talé hamm', 'bi-zyéédé la-lyoom', 'saléémtik'], answer: 0,
      explain: '`bi-zyéédé la-lyoom` agrees that she should stop, and `saléémtik` treats her as ill. Neither of them is encouragement.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence is built correctly?',
      options: [
        'fiiyon yesta3mlo el-makanéét add maa baddon',
        'fiiyon byesta3mlo el-makanéét add maa baddon',
        'fiihon yesta3mlo el-makanéét add maa baddon'
      ], answer: 0,
      explain: '`fii-` takes the long-vowel series, so `henné` is `fiiyon`, and the verb behind it drops its `b-`.' },

    { type: 'gap', en: 'Georges is trying to talk you into signing up with him.',
      lines: [
        { who: 'Georges', lb: 'shou ra2yak netsajjal? en-néédé fashka men el-béét', en: 'what do you think, shall we sign up? the club is two steps from the house' },
        { who: 'You', you: true, blank: true },
        { who: 'Georges', lb: 'men7ammes ba3D! menrouu7 arb3a marraat bel-jem3a', en: 'we will keep each other going! we will go four times a week' }
      ],
      options: ['ktiir kharjé! ana maa fiini enhazz men eS-Sobe7', 'na3iiman!', 'l-7amdella 3as-saléémé'], answer: 0,
      explain: 'Sarcastic agreement followed by a real objection is exactly the register two friends use here. The other two are formulas for situations that have not happened.' },

    { type: 'type', en: 'I cannot get moving. (using the suffix verb)', answer: 'maa fiini enhazz',
      accept: ['ma fiini enhazz'] },

    { type: 'match',
      pairs: [
        ['helkéén', 'wiped out'],
        ['awé', 'strong'],
        ['D3iif', 'weak'],
        ['kééfé', 'enough']
      ] },

    { type: 'conjugate', en: 'they can', root: 'a3mol', person: 'henné', tense: 'subordinate',
      options: ['fiiyon ya3mlo', 'fiiyon bya3mlo', 'fiiyon na3mol', 'fiikon ta3mlo'], answer: 0,
      explain: 'Two things at once: the right `fii-` form for `henné`, and a bare verb behind it.' },

    { type: 'build', en: 'Use the machine as much as you can.',
      tiles: ['esta3mel', 'el-makana', 'add', 'maa', 'fiik'], extra: ['baddak'],
      answer: 'esta3mel el-makana add maa fiik' },

    { type: 'choice', q: 'A friend says `Saayer add ba2ra` about himself and laughs. What is he doing?',
      options: [
        'Ordinary self-mockery, which does not need reassuring',
        'Telling you he is unwell',
        'Complaining that you have said something unkind'
      ], answer: 0,
      explain: 'Earnest reassurance is the wrong move. A joke back, and then the gym.' },

    { type: 'choice', q: 'You need to say "I am not managing to go every day". Which verb do you reach for?',
      options: ['e2dar, because `fii-` cannot carry `3am`', 'fii-, because it is lighter', 'Either — they behave identically'], answer: 0,
      explain: '`maa 3am be2dar rouu7 kell yoom`. The tense particle is what forces the choice.' },

    { type: 'type', en: 'That is plenty for today.', answer: 'bi-zyéédé la-lyoom', accept: ['bi zyeede la lyoom'] },

    { type: 'choice', q: 'After forty units, what does this course say is the most useful next step?',
      options: [
        'Talking to real people, badly, until it becomes less bad',
        'Learning a further set of grammatical constructions',
        'Switching to Modern Standard Arabic for accuracy'
      ], answer: 0,
      explain: 'What is missing now is time on your ears, not rules on the page.' }
  ]
});
