LEB.addUnit({
  id: 'u39',
  stage: 5,
  order: 39,
  title: 'At the Barber',
  goal: 'Sit down in the chair, describe exactly the cut you want, and answer the greeting that comes afterwards.',
  canDo: [
    'Say what you want done to your hair without ordering anybody about',
    'Hear the little `-l-` that turns an action into a service offered to you',
    'Place a cut on a head using the same direction words a road uses',
    'Say `na3iiman` at the right moment, and give the one answer it takes'
  ],

  grammar: [
    {
      heading: 'Wanting is how you instruct',
      body:
        'In a barber shop you will hear a sentence that looks wrong the first time. `baddé oSS sha3ré` ' +
        'is literally "I want to cut my hair" — and yet you are the one in the chair, and the scissors ' +
        'are in somebody else\'s hand.\n\n' +
        'Nobody hears a contradiction, because `badd-` states the **outcome you want**, and who ' +
        'physically performs it is left to the situation. This is worth internalising, because it ' +
        'covers far more than haircuts: it is how you talk to a mechanic, a tailor, a dentist. You ' +
        'name the result in the first person and the work sorts itself out.\n\n' +
        'From the other side of the chair the barber uses the same suffix verb aimed back at you — ' +
        '`baddak tzayye7?`, "do you want it edged?" — and offers with `ra7`. Between the two of you the ' +
        'whole job gets arranged with `badd-` and one future particle.\n\n' +
        'The other thing to unlearn is the fear of the bare imperative. `khaffef` — "thin it out" — is ' +
        'a complete, courteous instruction here. There is no word to add that would make it politer. ' +
        'What softens an instruction in Lebanese is not a please but a quantity: `shwayy` ("a bit") and ' +
        '`bass` ("just, only") do the work that "would you mind" does in English.',
      table: {
        headers: ['what you want', 'how it is said', 'word for word'],
        rows: [
          ['a new cut', '`baddé aSSa jdiidé`', 'I want a new cut'],
          ['shorter at the sides', '`baddé aSSer men el-jwééneb`', 'I want to shorten from the sides'],
          ['the top left long', '`baddé khallé foo2 Tawiil shwayy`', 'I want to leave above long a bit'],
          ['a light trim on the beard', '`khaffef shwayy bass`', 'thin out a bit only'],
          ['the barber checking', '`baddak tzayye7?`', 'do you want you-edge?']
        ]
      },
      examples: [
        { lb: 'baddé aSSer men el-jwééneb bass', ar: 'بَدّي قَصِّر مِن الجْوانِب بَس', en: 'I want it shorter at the sides only.' },
        { lb: 'baddé khallé foo2 Tawiil shwayy', ar: 'بَدّي خَلّي فوق طَويل شْوَي', en: 'I want to keep the top a bit long.' },
        { lb: 'khaffef ed-da2n shwayy bass', ar: 'خَفِّف الدَّقن شْوَي بَس', en: 'Just thin the beard out a bit.' }
      ],
      warning:
        'A bare imperative is not curt in a barber shop, a bakery or a taxi. Adding `shwayy` or `bass` ' +
        'is how it is softened. Hunting for a word that means "please" and dropping it in will make ' +
        'the sentence stranger, not gentler.'
    },

    {
      heading: 'The little -l- that makes it a service',
      body:
        'Listen to a barber for two minutes and you will notice he almost never says "I cut". He says ' +
        '"I cut **for you**". A short `-l-` lands on the verb, carrying the person the action is being ' +
        'done for, and once you start hearing it his sentences stop sounding like statements about ' +
        'himself and start sounding like offers.\n\n' +
        '`b2oSS` is "I cut". `b2oSSollak` is "I cut for you". `bkhaffef` is "I thin out"; ' +
        '`bkhaffeflak` is "I thin out for you". The person set is the same one that runs the rest of ' +
        'the language, with an `l` in front of it.\n\n' +
        'Two mechanical details come with it. First, a long stem vowel gives way when the suffix ' +
        'arrives: `shiil` ("remove") becomes `shell-`, so "I will take it off for you" is ' +
        '`ra7 shellak`, not anything built on `shiil`. This shortening is regular across a whole family ' +
        'of long-vowel verbs, and it has to be learned as a stem in its own right.\n\n' +
        'Second, the object detaches and comes last: `b2oSSollik yééhon` — cut, for-you, them. The slot ' +
        'order never varies. Verb, then who it is for, then what.\n\n' +
        'This is the grammar of service in Lebanese, and it is everywhere: waiters, shopkeepers, ' +
        'drivers, anybody doing something on your behalf.',
      table: {
        headers: ['for', 'suffix', 'and so'],
        rows: [
          ['me', '`-lé`', '`bkhaffeflé`'],
          ['you (m)', '`-lak`', '`bkhaffeflak`'],
          ['you (f)', '`-lik`', '`bkhaffeflik`'],
          ['him', '`-lo`', '`bkhaffeflo`'],
          ['her', '`-la`', '`bkhaffefla`'],
          ['us', '`-lna`', '`bkhaffeflna`'],
          ['you (pl)', '`-lkon`', '`bkhaffeflkon`'],
          ['them', '`-lon`', '`bkhaffeflon`']
        ]
      },
      examples: [
        { lb: 'bkhaffeflak el-le7yé shwayy?', ar: 'بْخَفِّفْلَك اللِّحْية شْوَي؟', en: 'Shall I thin the beard out for you a bit?', note: 'the question lives in the tone; the words are a plain present' },
        { lb: 'ra7 shellak shwayy men foo2', ar: 'رَح شِلَّك شْوَي مِن فوق', en: 'I will take a bit off the top for you.', note: '`shiil` collapses to `shell-` the moment the dative lands' },
        { lb: 'b2oSSollik yééhon', ar: 'بْقُصِّلِّك ياهُن', en: 'I will cut them for you.', note: 'verb, then who it is for, then the detached object — three pieces, always in that order' }
      ],
      warning:
        'Do not glue the dative onto the full form of a long-vowel verb. `shiil` plus `-lak` is not ' +
        '`shiillak`; it is `shellak`. Store the shortened stem separately, the way you would store an ' +
        'irregular past.'
    },

    {
      heading: 'Directions, applied to a head',
      body:
        'A haircut is negotiated in sections, and the words for the sections are the ordinary direction ' +
        'words — the same ones you would use about a road or a room, aimed at a head instead.\n\n' +
        '`men foo2` is the top. `men el-jwééneb` is the sides. `3al-yamiin` and `3ash-shméél` are right ' +
        'and left. `ben-noSS` is down the middle, which is where a parting normally sits.\n\n' +
        'One of them repays a second look. `la-wara` means "towards the back", and the `la-` is doing ' +
        'real work: it is a **direction**, not a position. Hair swept `la-wara` is going backwards; ' +
        'something sitting behind you would need a different word. Learners tend to strip the `la-` ' +
        'and end up describing where something is rather than which way it is going.\n\n' +
        'To move from one section to the next there is `bi-khSouuS` — "as for", "with regard to". ' +
        '`bi-khSouuS ed-da2n…` opens a new topic cleanly, and it is a useful thing to own well beyond ' +
        'a barber shop.\n\n' +
        'Finally, the time. Lebanese divides the hour into thirds as well as halves and quarters, so ' +
        'twenty minutes is `telt séé3a`, "a third of an hour". If someone tells you `telt séé3a`, they ' +
        'have not said "a third of the time"; they have given you a number.',
      table: {
        headers: ['on a head', 'what it means'],
        rows: [
          ['`men foo2`', 'the top'],
          ['`men el-jwééneb`', 'the sides'],
          ['`3al-yamiin` / `3ash-shméél`', 'on the right / on the left'],
          ['`ben-noSS`', 'down the middle — where a `fer2` normally goes'],
          ['`la-wara`', 'swept **towards** the back'],
          ['`bi-khSouuS…`', 'as for… — moving on to the next section'],
          ['`telt séé3a`', 'twenty minutes']
        ]
      },
      examples: [
        { lb: 'baddé l-fer2 3ash-shméél', ar: 'بَدّي الفِرق عَ الشّْمال', en: 'I want the parting on the left.' },
        { lb: 'shwayy men foo2, bass ktiir men el-jwééneb', ar: 'شْوَي مِن فوق، بَس كْتير مِن الجْوانِب', en: 'A little off the top, but a lot at the sides.' },
        { lb: 'bi-khSouuS ed-da2n, zayye7 bass', ar: 'بِخْصوص الدَّقن، زَيِّح بَس', en: 'As for the beard — just edge it.' },
        { lb: 'telt séé3a w-bkhalleS', ar: 'تِلت ساعة وبْخَلِّص', en: 'Twenty minutes and I am done.' }
      ]
    },

    {
      heading: 'na3iiman, and the formulas that fire on sight',
      body:
        'There is a word you say to somebody who has just been cleaned up — a haircut, a shave, a ' +
        'shower, nails done — and English has nothing to put in its place. `na3iiman`. It is not a ' +
        'compliment on the result and it does not mean "you look nice". It marks the fact of being ' +
        'freshly groomed, and it is triggered by the sight of it, whether or not you like the cut. The ' +
        'answer is fixed: `Allah yen3am 3léék` to a man, `Allah yen3am 3layké` to a woman.\n\n' +
        'You will be on the receiving end of this within a week of arriving. Somebody in a lift says ' +
        '`na3iiman` and then waits, and the silence that follows if you say nothing is a real silence.\n\n' +
        'It is worth dwelling on because it is the shape of a whole family. The trigger is a ' +
        '**situation**, never a topic, and there is nothing to compose. Somebody has just woken up: ' +
        '`Sa7 en-noom`. Somebody is back from a journey, an illness, a hospital: ' +
        '`l-7amdella 3as-saléémé`. Somebody is unwell: `saléémtak`. Somebody is working while you are ' +
        'not: `ya3Tiik el-3aafyé`. A shopkeeper puts your change in your hand: `m3awwaDiin`. Somebody ' +
        'compliments you and you push it back: `3youunak el-7elwiin`.\n\n' +
        'No amount of grammar generates these. They are not sentences you build, they are moves you ' +
        'make when a situation shows up, and each has exactly one countermove. Ten of them buy more ' +
        'credibility than another tense would.',
      table: {
        headers: ['the situation', 'you say', 'they answer'],
        rows: [
          ['just cut, shaved or showered', '`na3iiman`', '`Allah yen3am 3léék`'],
          ['just woken up', '`Sa7 en-noom`', '—'],
          ['just back from a trip or hospital', '`l-7amdella 3as-saléémé`', '`Allah ysallmak`'],
          ['unwell', '`saléémtak`', '—'],
          ['working, carrying, driving', '`ya3Tiik el-3aafyé`', '`Allah y3aafiik`'],
          ['handing your change back', '`m3awwaDiin`', '—'],
          ['paying you a compliment', '`3youunak el-7elwiin`', '—']
        ]
      },
      warning:
        'Saying nothing is not neutral. These are noticed by their absence: a silence where `na3iiman` ' +
        'belongs reads as coldness, not as reserve.'
    }
  ],

  vocab: [
    { lb: '7elléé2', ar: 'حِلّاق', en: 'barber, hairdresser', pos: 'n', gender: 'm', note: '`7elléé2a` for a woman' },
    { lb: 'sha3r', ar: 'شَعْر', en: 'hair', pos: 'n', gender: 'm' },
    { lb: 'aSSa', ar: 'قَصّة', en: 'a haircut', pos: 'n', gender: 'f' },
    { lb: 'da2n', ar: 'دَقن', en: 'beard, chin', pos: 'n', gender: 'm', note: 'the chin and what grows on it, in one word' },
    { lb: 'le7yé', ar: 'لِحْية', en: 'beard', pos: 'n', gender: 'f', note: 'the beard itself, as an object of care' },
    { lb: 'm2aSS', ar: 'مْقَص', en: 'scissors', pos: 'n', gender: 'm' },
    { lb: 'makana', ar: 'مَكَنة', en: 'clippers, machine', pos: 'n', gender: 'f' },
    { lb: 'fer2', ar: 'فِرق', en: 'parting', pos: 'n', gender: 'm' },
    { lb: 'jééneb', ar: 'جانِب', en: 'side', pos: 'n', gender: 'm', note: 'plural `jwééneb` — a head has more than one' },
    { lb: 'ben-noSS', ar: 'بالنُّص', en: 'in the middle', pos: 'adv' },
    { lb: '3al-yamiin', ar: 'عَ اليَمين', en: 'on the right', pos: 'adv' },
    { lb: '3ash-shméél', ar: 'عَ الشّْمال', en: 'on the left', pos: 'adv' },
    { lb: 'la-wara', ar: 'لَوَرا', en: 'towards the back', pos: 'adv', note: 'a direction, not a position' },
    { lb: 'Tabii3é', ar: 'طَبيعي', en: 'natural', pos: 'adj', gender: 'm' },
    { lb: 'khaffef', ar: 'خَفِّف', en: 'to thin out, to reduce', pos: 'v', note: 'root: `bkhaffef`, `bikhaffef`' },
    { lb: 'aSSer', ar: 'قَصِّر', en: 'to shorten', pos: 'v', note: 'root: `b2aSSer`, `bi2aSSer`' }
  ],

  phrases: [
    {
      lb: 'na3iiman!', ar: 'نَعيماً!', en: 'may it be blessed',
      when: 'to anybody freshly cut, shaved or showered — on sight, not as an opinion',
      reply: 'Allah yen3am 3léék', replyEn: 'and may God give you bliss'
    },
    {
      lb: 'Sa7 en-noom', ar: 'صَح النّوم', en: 'may your sleep be sound',
      when: 'to somebody who has just got up, at whatever hour that happens to be'
    },
    {
      lb: 'l-7amdella 3as-saléémé', ar: 'الحَمْدِالله ع السَّلامة', en: 'thank God for your safety',
      when: 'to somebody just off a flight, out of hospital, or back from a long drive',
      reply: 'Allah ysallmak', replyEn: 'may God keep you safe'
    },
    {
      lb: 'saléémtak', ar: 'سَلامْتَك', en: 'your wellbeing',
      when: 'to somebody who is unwell — `saléémtik` to a woman'
    },
    {
      lb: 'm3awwaDiin', ar: 'مْعَوَّضين', en: 'may they be replaced',
      when: 'said by the shopkeeper as he puts your change into your hand'
    },
    {
      lb: '3youunak el-7elwiin', ar: 'عْيونَك الحِلْوين', en: 'it is your eyes that are beautiful',
      when: 'deflecting a compliment instead of accepting it'
    },
    {
      lb: 'la-3youunak!', ar: 'لَعْيونَك!', en: 'for your eyes',
      when: 'saying yes with warmth — a barber, a shopkeeper, a friend agreeing to something'
    },
    {
      lb: 'bi-khSouuS…', ar: 'بِخْصوص…', en: 'as for…',
      when: 'moving the conversation on to the next part of the job'
    },
    {
      lb: 'ghéér shekel', ar: 'غير شِكِل', en: 'a completely different shape',
      when: 'about somebody whose look has changed — usually said the moment they walk in'
    }
  ],

  drills: [
    { type: 'choice', q: 'The man in the chair says `baddé oSS sha3ré`. Who is holding the scissors?',
      options: [
        'The barber — `badd-` states the result wanted, not who performs it',
        'The customer, who is cutting his own hair',
        'Neither: the sentence is a question'
      ], answer: 0,
      explain: 'The same logic covers a mechanic, a tailor and a dentist. You name the outcome in the first person.' },

    { type: 'conjugate', en: 'he thins it out', root: 'khaffef', person: 'houwwé', tense: 'present',
      options: ['bikhaffef', 'bkhaffef', 'betkhaffef', 'menkhaffef'], answer: 0,
      explain: 'The root begins with a consonant, so `houwwé` takes `bi-` rather than `by-`.' },

    { type: 'gap', en: 'You sit down. Jad picks up the clippers and looks at you in the mirror.',
      lines: [
        { who: 'Jad', lb: 'ahla w sahla! shou baddak ta3mol?', en: 'welcome! what do you want done?' },
        { who: 'You', you: true, blank: true },
        { who: 'Jad', lb: 'la-3youunak. w-bi-khSouuS ed-da2n?', en: 'anything for you. and as for the beard?' }
      ],
      options: ['baddé aSSer sha3ré shwayy bass', 'na3iiman!', 'ya3Tiik el-3aafyé'], answer: 0,
      explain: '`na3iiman` is for a man who has just been groomed, not for one who is about to be. Save it for whoever sees you on the way out.' },

    { type: 'build', en: 'I want to keep the sides long.',
      tiles: ['baddé', 'khallé', 'l-jwééneb', 'Twaal'], extra: ['ben-noSS'],
      answer: 'baddé khallé l-jwééneb Twaal' },

    { type: 'match',
      pairs: [['m2aSS', 'scissors'], ['makana', 'clippers'], ['fer2', 'parting'], ['aSSa', 'a haircut']] },

    { type: 'choice', q: 'What does the `-lak` add in `bkhaffeflak`?',
      options: [
        'That the thinning out is being done for you',
        'That it will happen tomorrow',
        'That there is more than one of you'
      ], answer: 0,
      explain: 'It is the dative. Verb, then who it is for, then what — and this is how service is spoken here.' },

    { type: 'type', en: 'Said to a friend who has just had a haircut.', answer: 'na3iiman', accept: ['na3iman', 'na3eeman'] },

    { type: 'conjugate', en: 'she wants to shorten it', root: 'aSSer', person: 'hiyyé', tense: 'subordinate',
      options: ['badda t2aSSer', 'badda b2aSSer', 'badda y2aSSer', 'baddé aSSer'], answer: 0,
      explain: 'After a suffix verb the second verb keeps its person and drops its `b-`. `hiyyé` takes `t-`.' },

    { type: 'choice', q: 'Somebody says `na3iiman` to you. What comes back?',
      options: ['Allah yen3am 3léék', 'Allah ysallmak', 'ahla fiik'], answer: 0,
      explain: 'One trigger, one answer. The other two belong to different situations entirely.' },

    { type: 'build', en: 'As for the beard, just edge it.',
      tiles: ['bi-khSouuS', 'ed-da2n', 'zayye7', 'bass'], extra: ['khaffef'],
      answer: 'bi-khSouuS ed-da2n zayye7 bass' },

    { type: 'match',
      pairs: [
        ['just woken up', 'Sa7 en-noom'],
        ['just off a flight', 'l-7amdella 3as-saléémé'],
        ['unwell in bed', 'saléémtak'],
        ['handing back your change', 'm3awwaDiin']
      ] },

    { type: 'choice', q: 'What does `la-wara` describe?',
      options: [
        'A direction — hair swept towards the back',
        'A position — something located behind you',
        'The nape of the neck'
      ], answer: 0,
      explain: 'The `la-` is not decoration. Strip it and you are describing where something sits, not which way it goes.' },

    { type: 'type', en: 'Twenty minutes.', answer: 'telt séé3a', accept: ['telt see3a', 'telt saa3a'] },

    { type: 'gap', en: 'Fady walks into the office on Monday morning with a fresh haircut.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Fady', lb: 'Allah yen3am 3léék!', en: 'and God give you bliss!' },
        { who: 'You', you: true, lb: 'ghéér shekel! wéén re7t?', en: 'a completely different look! where did you go?' }
      ],
      options: ['na3iiman!', 'Sa7 en-noom!', 'l-7amdella 3as-saléémé'], answer: 0,
      explain: 'All three fire on sight, but on different sights: waking up, arriving, and being freshly groomed. Only the last one applies here.' }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence would a barber actually produce?',
      options: [
        'ra7 shellak shwayy men foo2',
        'ra7 shiillak shwayy men foo2',
        'ra7 bshiil shwayy men foo2'
      ], answer: 0,
      explain: 'The long `ii` collapses before the dative, and `ra7` strips the `b-`. Both rules are visible in one short sentence.' },

    { type: 'gap', en: 'You have asked for the sides tight. Jad wants to check before he starts.',
      lines: [
        { who: 'Jad', lb: 'bel-makana men el-jwééneb, w-bel-m2aSS men foo2?', en: 'clippers at the sides, scissors on top?' },
        { who: 'You', you: true, blank: true },
        { who: 'Jad', lb: 'telt séé3a w-bkhalleS', en: 'twenty minutes and I am done' }
      ],
      options: ['ééh, w-baddé l-fer2 3ash-shméél', 'ééh, na3iiman', 'ééh, m3awwaDiin'], answer: 0,
      explain: 'The other two are situation formulas fired at the wrong situation. Nothing has been groomed yet and nobody has given you change.' },

    { type: 'type', en: 'As for the beard…', answer: 'bi-khSouuS el-le7yé', accept: ['bi-khsous el-le7ye', 'bikhSouuS el-le7yé'] },

    { type: 'match',
      pairs: [
        ['men foo2', 'the top'],
        ['men el-jwééneb', 'the sides'],
        ['ben-noSS', 'down the middle'],
        ['la-wara', 'towards the back']
      ] },

    { type: 'conjugate', en: 'we shorten', root: 'aSSer', person: 'ne7na', tense: 'present',
      options: ['men2aSSer', 'bi2aSSer', 'bet2aSSer', 'b2aSSer'], answer: 0,
      explain: 'A consonant-initial root takes `men-` for `ne7na`, exactly as it takes `bi-` for `houwwé`.' },

    { type: 'build', en: 'Just thin the beard out a bit.',
      tiles: ['khaffef', 'ed-da2n', 'shwayy', 'bass'], extra: ['baddé'],
      answer: 'khaffef ed-da2n shwayy bass' },

    { type: 'choice', q: 'Why is a bare `khaffef` not rude?',
      options: [
        'Because Lebanese softens an instruction with a quantity, not with a courtesy word',
        'Because barbers are addressed informally',
        'Because it is a question, not an order'
      ], answer: 0,
      explain: '`shwayy` and `bass` are the softeners. There is no please to add, and adding one makes the sentence odder.' },

    { type: 'choice', q: 'Which of these is **not** triggered by a situation you can see?',
      options: ['bi-khSouuS', 'na3iiman', 'Sa7 en-noom'], answer: 0,
      explain: '`bi-khSouuS` is a topic-shifter you choose to use. The other two fire on sight and have fixed answers.' },

    { type: 'type', en: 'Anything for you! (agreeing warmly)', answer: 'la-3youunak', accept: ['la 3youunak', 'la-3youunik'] },

    { type: 'choice', q: 'A colleague says `na3iiman` and you say nothing. What has happened?',
      options: [
        'You have been read as cold — the formula is noticed by its absence',
        'Nothing: the phrase does not require an answer',
        'You have accepted the compliment'
      ], answer: 0,
      explain: 'Silence is not neutral in this family of phrases. Each one leaves a gap shaped like its answer.' }
  ]
});
