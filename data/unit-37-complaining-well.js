LEB.addUnit({
  id: 'u37',
  stage: 5,
  order: 37,
  title: 'Complaining Well',
  goal: 'Raise a problem in Lebanese and get it fixed, without either disappearing or starting a fight.',
  canDo: [
    'Open a complaint with the two softeners that make people listen',
    'Say how long you have been waiting, the way Lebanese actually says it',
    'Tell the story of a delay with the right joints between its parts',
    'Recognise which phrases are safe with a stranger and which are only for friends'
  ],

  grammar: [
    {
      heading: 'A complaint has a shape',
      body:
        'Complaining in Lebanese is not improvised. There is a sequence, and people who follow it get ' +
        'their problem solved; people who go straight to the grievance get handled as a grievance ' +
        'themselves.\n\n' +
        'It opens with an attention word, not with the problem: `dakhlak` to a man, `dakhlik` to a ' +
        'woman. It means something like "excuse me, tell me", and its whole job is to buy one second ' +
        'of another person\'s attention before you spend it.\n\n' +
        'Then comes the apology for existing: `baddé 3azzbak, bass…` — literally "I want to trouble ' +
        'you, but". Every serious complaint here begins by conceding that it is an imposition. That is ' +
        'not weakness. It is the entry fee.\n\n' +
        'Then the facts, flat, in the past tense. What you ordered, what arrived, what time you got ' +
        'there. No adjectives. The force of a Lebanese complaint comes from how little it is decorated.\n\n' +
        'Then you stop and let the other side work. Staff usually apologise loudly — `be3tezer`, ' +
        '`yaa 3ayb esh-shouum` — and offer you something free. Here is the move foreigners miss: you ' +
        'refuse. `basiiTa`, it is nothing. `maa fii lzouum`, there is no need. The refusal is expected, ' +
        'it is often overruled anyway, and it costs you nothing. Taking the free thing on the first ' +
        'offer reads as greed, and that is hard to undo.',
      table: {
        headers: ['move', 'what you say', 'what it does'],
        rows: [
          ['open', '`dakhlak?` / `dakhlik?`', 'buys you one second of attention'],
          ['soften', '`baddé 3azzbak, bass…`', 'admits that you are an imposition'],
          ['state', 'plain past tense, no adjectives', 'lets the facts do the arguing'],
          ['wait', '—', 'the apology is theirs to make, not yours to demand'],
          ['refuse', '`basiiTa` · `maa fii lzouum`', 'declines the compensation you are offered']
        ]
      },
      examples: [
        { lb: 'dakhlak, baddé 3azzbak shwayy', ar: 'دَخْلَك، بَدّي عَذّْبَك شْوَي', en: 'Excuse me — sorry to trouble you for a moment.' },
        { lb: 'ne7na Talabna tnéén, mesh tléété', ar: 'نِحْنا طَلَبْنا تْنين، مِش تْلاتة', en: 'We ordered two, not three.' },
        { lb: 'basiiTa, maa fii lzouum, shukran', ar: 'بَسيطة، ما في لْزوم، شُكْراً', en: 'It is nothing, there is no need, thank you.', note: 'said when the manager offers to take the item off the bill' }
      ],
      warning:
        'Dropping `dakhlak` and `baddé 3azzbak` does not make you direct, it makes you rude. The ' +
        'softeners are not padding: they are how a Lebanese speaker signals that the problem is with ' +
        'the **situation** and not with the person standing in front of them.'
    },

    {
      heading: 'How long it has been going on',
      body:
        'English says "I have been waiting for an hour" and needs a tense to do it. Lebanese builds the ' +
        'same idea out of three pieces you already own, and not one of them is a verb.\n\n' +
        'First `elé` — "for me", from the `el-` series: `elé`, `elak`, `elik`, `elo`, `ela`, `elna`, ' +
        '`elkon`, `elon`. Then a stretch of time: `telt séé3a` (twenty minutes), `noSS séé3a`, ' +
        '`séé3a`, `séé3téén`. Then a participle that agrees with you and carries, glued to its end, the ' +
        'person you are doing it to.\n\n' +
        '`elé noSS séé3a naaTrak` — "for-me half-an-hour waiting-for-you". There is no tense marker ' +
        'anywhere in that sentence, and it is the ordinary way to say it. The participle is `naaTer` ' +
        'for a man, `naaTra` for a woman, `naaTriin` for more than one, and the object goes straight ' +
        'on: `naaTrak`, `naaTrik`, `naaTro`, `naaTra`.\n\n' +
        'The frame is not only for waiting. Any participle drops into it, and it is how you say "I have ' +
        'been doing X for Y" about anything at all.\n\n' +
        'Next to it sits `ba3d-`, the word for "still". `ba3do mesh jééhez` — it is still not ready. In ' +
        'a complaint the two work as a pair: how long it has taken, and what has still not happened.',
      table: {
        headers: ['piece', 'forms', 'job'],
        rows: [
          ['`el-`', '`elé · elak · elik · elo · ela · elna`', 'whose stretch of time this is'],
          ['the stretch', '`telt séé3a · noSS séé3a · séé3a · séé3téén`', 'twenty minutes, half an hour, an hour, two'],
          ['the participle', '`naaTer · naaTra · naaTriin`', 'what you have been doing all that time'],
          ['the object', '`-ak · -ik · -o · -a · -kon · -on`', 'who you have been doing it to'],
          ['`ba3d-`', '`ba3do · ba3da · ba3don`', 'and what has **still** not happened']
        ]
      },
      examples: [
        { lb: 'elé telt séé3a naaTra hoon', ar: 'إلي تِلت ساعة ناطْرة هون', en: 'I have been waiting here for twenty minutes.', note: 'a woman speaking' },
        { lb: 'elna séé3téén naaTriin w-maa 7ada talfan', ar: 'إلنا ساعتين ناطْرين وما حَدا تَلْفَن', en: 'We have been waiting two hours and nobody has phoned.' },
        { lb: 'ba3do l-moudiir mesh mawjouud', ar: 'بَعْدُه المُدير مِش مَوْجود', en: 'The manager is still not here.' }
      ],
      warning:
        'Do not reach for a verb. There is no Lebanese sentence shaped like "I am waiting since one ' +
        'hour" — the time span belongs to **you** (`elé`), not to the waiting.'
    },

    {
      heading: 'The joints of a bad-news story',
      body:
        'A complaint is almost always a small story, and Lebanese joins the parts of a story with words ' +
        'that all do the same thing to the verb behind them: they strip off its `b-`.\n\n' +
        '`awwal maa` is the sharpest of them — "the moment that", "as soon as". It points forward: ' +
        '`awwal maa yerja3 el-moudiir` is a promise about what happens the second he walks in. `lamma` ' +
        'is the softer "when", and `2abl maa` is "before". All three take the bare verb, fully ' +
        'conjugated, with no `b-`.\n\n' +
        'One joint breaks the pattern and it is the one worth memorising. `ba3d maa` does not mean ' +
        '"after". It takes the **past** tense and means "still has not": `ba3d maa khallaSo` is not a ' +
        'timeline, it is an accusation.\n\n' +
        'And one joint leaves the verb alone entirely. `la2enno` ("because") introduces a whole ' +
        'ordinary clause, `b-` and all, because nothing is subordinate about it — you are simply saying ' +
        'a second sentence. Learners who have just met the b-drop tend to over-apply it here and strip ' +
        'a verb that should have kept its prefix.',
      table: {
        headers: ['joint', 'meaning', 'what follows it'],
        rows: [
          ['`awwal maa`', 'the moment that, as soon as', 'bare verb, no `b-`'],
          ['`lamma`', 'when', 'bare verb, no `b-`'],
          ['`2abl maa`', 'before', 'bare verb, no `b-`'],
          ['`ba3d maa`', '**still has not**', 'the **past** tense'],
          ['`la2enno`', 'because', 'an ordinary verb, `b-` kept']
        ]
      },
      examples: [
        { lb: 'awwal maa yerja3 el-moudiir, ra7 e7ké ma3o', ar: 'أَوَّل ما يِرْجَع المُدير، رَح إِحْكي مَعُه', en: 'The moment the manager is back I am going to speak to him.' },
        { lb: 'ba3d maa khallaSo, w-elna hoon men es-séé3a tmééné', ar: 'بَعْد ما خَلَّصوا، وإلنا هون مِن السّاعة تْمانة', en: 'They still have not finished, and we have been here since eight.' },
        { lb: 'ana m3aSSab la2enno kell marra fii 7ejjé jdiidé', ar: 'أنا مْعَصَّب لأَنُّه كِل مَرّة في حِجّة جْديدة', en: 'I am fed up, because every time there is a new excuse.' }
      ]
    },

    {
      heading: 'The temperature scale',
      body:
        'Everything so far is the cold end. Lebanese also has a hot end, and the two ends are not ' +
        'interchangeable. Each phrase sits at a fixed temperature, and a learner who borrows a hot one ' +
        'for a lukewarm situation lands far harder than intended.\n\n' +
        'At the very bottom are the two phrases that close a complaint down instead of opening one: ' +
        '`maa 3lééh` and `basiiTa`. Both mean roughly "leave it".\n\n' +
        'Higher up sits `mesh ma32ouul`, "this is not acceptable". It is the strongest thing you can ' +
        'safely say to a stranger who is paid to serve you. It is forceful, but it is aimed at the ' +
        'situation.\n\n' +
        'Above that the register turns personal, and that is where the danger is. `3anjad?` — ' +
        '"seriously?" — puts the other person on the spot. `3a asséés…` opens a sarcastic "as if", and ' +
        'everything after it mocks what they have just claimed. `daayman` and `kell marra` accuse ' +
        'somebody of a **pattern** rather than an event, which is exactly why they sting. And ' +
        '`ya 3ammé`, literally "oh my uncle", announces that you have dropped all distance: it is what ' +
        'a friend says to a friend, and what one driver shouts at another. There is nothing in between.\n\n' +
        'Coming back down takes one word. `Tayyeb` — "all right", in the sense of "fine, enough". ' +
        'Lebanese arguments rarely end in agreement; they end with `Tayyeb` and a change of subject.',
      table: {
        headers: ['temperature', 'phrase', 'safe with'],
        rows: [
          ['cold', '`maa 3lééh` · `basiiTa`', 'anyone, always'],
          ['cool', '`dakhlak?` · `baddé 3azzbak`', 'anyone, always'],
          ['warm', '`mesh ma32ouul`', 'a stranger who is doing their job badly'],
          ['hot', '`3anjad?` · `daayman…` · `kell marra…`', 'friends, family, people you argue with'],
          ['boiling', '`3a asséés…` · `ya 3ammé`', 'friends only'],
          ['back down', '`Tayyeb`', 'anyone, at any point']
        ]
      },
      warning:
        'The two to be careful with are `3anjad?` and `3a asséés`, because on paper they look mild. ' +
        'Aimed at a receptionist or a shop assistant, they are an accusation of lying. Keep them for ' +
        'people who will still be your friends afterwards.'
    }
  ],

  vocab: [
    { lb: '7sééb', ar: 'حْساب', en: 'bill', pos: 'n', gender: 'm' },
    { lb: 'ghalTa', ar: 'غَلْطة', en: 'mistake', pos: 'n', gender: 'f' },
    { lb: 'khedmé', ar: 'خِدْمة', en: 'service', pos: 'n', gender: 'f' },
    { lb: 'moudiir', ar: 'مُدير', en: 'manager', pos: 'n', gender: 'm' },
    { lb: '7ejjé', ar: 'حِجّة', en: 'excuse', pos: 'n', gender: 'f', note: 'plural `7ejaj` — and the plural is usually the insult' },
    { lb: '3aj2et séér', ar: 'عَجْقِة سير', en: 'traffic jam', pos: 'n', gender: 'f' },
    { lb: 'Tarii2', ar: 'طَريق', en: 'road', pos: 'n', gender: 'f' },
    { lb: 'naaTer', ar: 'ناطِر', en: 'waiting', pos: 'adj', note: 'a participle: `naaTer` / `naaTra` / `naaTriin`' },
    { lb: 'm3aSSab', ar: 'مْعَصَّب', en: 'angry, fed up', pos: 'adj', gender: 'm' },
    { lb: 'daayman', ar: 'دايْماً', en: 'always', pos: 'adv', note: 'in a complaint it is an accusation, not a frequency' },
    { lb: '3anjad', ar: 'عَنْجَد', en: 'really, for real', pos: 'adv' },
    { lb: 'Tayyeb', ar: 'طَيِّب', en: 'all right, fine', pos: 'phr', note: 'the word arguments end with' },
    { lb: 'badal', ar: 'بَدَل', en: 'instead of', pos: 'prep' },
    { lb: 'ba3do', ar: 'بَعْدُه', en: 'he is still, it is still', pos: 'phr' },
    { lb: 'et2akkhar', ar: 'إِتْأَخَّر', en: 'to be late', pos: 'v', note: 'root: `bet2akkhar`, `byet2akkhar`' },
    { lb: 'e3tezer', ar: 'إِعْتِذِر', en: 'to apologise', pos: 'v', note: 'root: `be3tezer`, `bye3tezer`' }
  ],

  phrases: [
    {
      lb: 'dakhlak?', ar: 'دَخْلَك؟', en: 'excuse me, tell me',
      when: 'the first thing out of your mouth before any complaint — `dakhlik` to a woman',
      reply: 'tfaDDal', replyEn: 'go ahead'
    },
    {
      lb: 'baddé 3azzbak, bass…', ar: 'بَدّي عَذّْبَك، بَس…', en: 'sorry to trouble you, but…',
      when: 'straight after `dakhlak`, right before the facts'
    },
    {
      lb: 'farjiiné', ar: 'فَرْجيني', en: 'show me',
      when: 'asking to see the bill, the receipt, the order — flat and normal, not aggressive'
    },
    {
      lb: 'mesh ma32ouul!', ar: 'مِش مَعْقول!', en: 'this is not acceptable',
      when: 'the ceiling of what you can safely say to someone serving you'
    },
    {
      lb: 'yaa 3ayb esh-shouum!', ar: 'يا عَيْب الشّوم!', en: 'how embarrassing',
      when: 'said by the staff, about themselves, when they realise the mistake is theirs',
      reply: 'basiiTa', replyEn: 'it is nothing'
    },
    {
      lb: 'maa fii lzouum', ar: 'ما في لْزوم', en: 'there is no need',
      when: 'refusing the free coffee, the discount, the comped dish — the expected move, not a real refusal'
    },
    {
      lb: 'ya 3ammé!', ar: 'يا عَمّي!', en: 'oh come on',
      when: 'friends and traffic only; to a stranger behind a counter it is an insult'
    },
    {
      lb: 'Tayyeb…', ar: 'طَيِّب…', en: 'all right then',
      when: 'the one word that brings the temperature back down and ends the exchange'
    }
  ],

  drills: [
    { type: 'choice', q: 'What is `dakhlak` for?',
      options: [
        'Getting one second of attention before you say anything else',
        'Apologising after you have complained',
        'Asking how much something costs'
      ], answer: 0,
      explain: 'It has almost no meaning of its own. It opens the door; the complaint walks through it.' },

    { type: 'choice', q: 'The manager offers to take the wrong dish off your bill. What is the expected first response?',
      options: ['basiiTa, maa fii lzouum', 'shukran, akiid', 'mesh ma32ouul'], answer: 0,
      explain: 'You refuse first. He will usually insist, and then you accept. Taking it immediately reads as greed.' },

    { type: 'match',
      pairs: [['7sééb', 'bill'], ['ghalTa', 'mistake'], ['7ejjé', 'excuse'], ['moudiir', 'manager']] },

    { type: 'gap', en: 'You booked a table for eight. It is half past eight and Marwan is not there.',
      lines: [
        { who: 'You', you: true, lb: 'ya 3ammé, waynak? elé noSS séé3a naaTrak', en: 'come on, where are you? I have been waiting half an hour for you' },
        { who: 'Marwan', lb: '3am bouuSal! fii 3aj2et séér 3a Tarii2 el-maT3am', en: 'I am on my way! There is a jam on the road to the restaurant' },
        { who: 'You', you: true, blank: true },
        { who: 'Marwan', lb: 'Tayyeb Tayyeb, kaméén reb3 séé3a w-bouuSal', en: 'all right, all right — another fifteen minutes and I am there' }
      ],
      options: ['kell marra fii 7ejjé jdiidé!', 'basiiTa, maa fii lzouum', 'ya3Tiik el-3aafyé'], answer: 0,
      explain: 'The other two shut a complaint down. `basiiTa` says the problem does not matter, and `ya3Tiik el-3aafyé` thanks him for his hard work — which, right now, is not what you mean.' },

    { type: 'build', en: 'Sorry to trouble you, but we did not order this.',
      tiles: ['baddé', '3azzbak', 'bass', 'maa', 'Talabna', 'hayda'], extra: ['badal'],
      answer: 'baddé 3azzbak bass maa Talabna hayda' },

    { type: 'conjugate', en: 'they are always late', root: 'et2akkhar', person: 'henné', tense: 'present',
      options: ['byet2akkharo', 'bet2akkharo', 'mnet2akkhar', 'bet2akkharé'], answer: 0,
      explain: 'The root starts with an alef, so `henné` takes `by-` plus the `-o` ending.' },

    { type: 'choice', q: 'How does Lebanese say "I have been waiting for you for half an hour"?',
      options: ['elé noSS séé3a naaTrak', '3am bonTor noSS séé3a', 'kent naaTer noSS séé3a'], answer: 0,
      explain: 'The time span belongs to you — `elé` — and the participle does the rest. No tense marker is needed.' },

    { type: 'type', en: 'This is not acceptable.', answer: 'mesh ma32ouul', accept: ['mesh ma32oul', 'mesh ma3ouul'] },

    { type: 'choice', q: 'You are at a hotel desk and your room is still not ready. Which of these is safe to say?',
      options: ['mesh ma32ouul, elna séé3a naaTriin', '3anjad 3am te7ké?', '3a asséés fii ghorfé jééhzé'], answer: 0,
      explain: 'The first attacks the situation. The other two accuse the person in front of you of lying, and are for friends only.' },

    { type: 'build', en: 'They still have not finished.',
      tiles: ['ba3d', 'maa', 'khallaSo'], extra: ['ra7'],
      answer: 'ba3d maa khallaSo' },

    { type: 'conjugate', en: 'as soon as he comes back', root: 'erja3', person: 'houwwé', tense: 'subordinate',
      options: ['awwal maa yerja3', 'awwal maa byerja3', 'awwal maa terja3', 'awwal maa nerja3'], answer: 0,
      explain: '`awwal maa` is a b-drop trigger: the verb stays conjugated for `houwwé` but loses its `b-`.' },

    { type: 'match',
      pairs: [
        ['basiiTa', 'it is nothing — closes it down'],
        ['mesh ma32ouul', 'unacceptable — the safe ceiling'],
        ['ya 3ammé', 'oh come on — friends only'],
        ['Tayyeb', 'all right — brings it back down']
      ] },

    { type: 'choice', q: 'Which joint takes the past tense instead of a bare verb?',
      options: ['ba3d maa', 'awwal maa', '2abl maa'], answer: 0,
      explain: '`ba3d maa khallaSo` = "they still have not finished". It is the odd one out, and it is a complaint.' },

    { type: 'type', en: 'All right then. (the word that ends the argument)', answer: 'Tayyeb' }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence gets a Lebanese complaint off to the worst possible start?',
      options: [
        'l-khedmé hoon mesh mnii7a abadan',
        'dakhlak, baddé 3azzbak shwayy',
        'baddé 3azzbik, bass fii shii ghalaT'
      ], answer: 0,
      explain: 'It opens with a verdict on the people rather than a softener and a fact. Nothing after it will be heard.' },

    { type: 'gap', en: 'You are on the phone with a shop that promised delivery two days ago.',
      lines: [
        { who: 'You', you: true, lb: 'dakhlak, elna youméén naaTriin', en: 'excuse me — we have been waiting two days' },
        { who: 'Hadi', lb: 'yaa 3ayb esh-shouum! be3tezer, ra7 e7ké ma3 el-moudiir', en: 'how embarrassing! I apologise, I will speak to the manager' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['Tayyeb, shukran', '3a asséés fii moudiir!', 'na3iiman'], answer: 0,
      explain: 'He has apologised and offered to act. `Tayyeb` accepts and lowers the temperature; sarcasm now would restart the argument from nothing.' },

    { type: 'type', en: 'There is no need. (refusing the free dish)', answer: 'maa fii lzouum', accept: ['ma fii lzoum', 'maa fi lzouum'] },

    { type: 'match',
      pairs: [
        ['naaTer', 'waiting'],
        ['m3aSSab', 'fed up'],
        ['ba3do', 'he is still'],
        ['badal', 'instead of']
      ] },

    { type: 'conjugate', en: 'she apologises', root: 'e3tezer', person: 'hiyyé', tense: 'present',
      options: ['bte3tezer', 'bye3tezer', 'be3tezer', 'mne3tezer'], answer: 0,
      explain: '`enta` and `hiyyé` are identical in the present. Both are `bte3tezer`.' },

    { type: 'build', en: 'I have been waiting for you for twenty minutes.',
      tiles: ['elé', 'telt', 'séé3a', 'naaTrak'], extra: ['ba3do'],
      answer: 'elé telt séé3a naaTrak' },

    { type: 'choice', q: 'Why does `la2enno` not strip the `b-` off the verb that follows it?',
      options: [
        'Because what follows is a full sentence of its own, not a subordinate verb',
        'Because it ends in a vowel',
        'Because it is always used in the past'
      ], answer: 0,
      explain: 'The b-drop marks a verb hanging off another verb. After `la2enno` you simply start saying a second thing.' },

    { type: 'choice', q: 'A friend has cancelled on you for the third week running. Which line fits?',
      options: ['daayman btet2akkhar w-kell marra fii 7ejjé', 'mesh ma32ouul, farjiiné', 'basiiTa, maa fii lzouum'], answer: 0,
      explain: '`daayman` and `kell marra` accuse someone of a pattern. That is exactly what you mean, and with a friend it is allowed.' },

    { type: 'type', en: 'Show me. (asking to see the bill)', answer: 'farjiiné', accept: ['farjiine'] },

    { type: 'choice', q: 'What does `ba3do l-akl mesh jééhez` mean?',
      options: [
        'The food is still not ready',
        'The food came after the drinks',
        'There is no food left'
      ], answer: 0,
      explain: '`ba3d-` plus a suffix is "still". Paired with `elna séé3a naaTriin` it is a complete complaint.' }
  ]
});
