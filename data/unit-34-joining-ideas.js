LEB.addUnit({
  id: 'u34',
  stage: 5,
  order: 34,
  title: 'Joining Ideas',
  goal: 'Stop speaking in short separate sentences and start building one long one, with the reason, the time and the condition all inside it.',
  canDo: [
    'Attach a reason, a condition or a time frame to a sentence you already know',
    'Say which conjunctions take the b- off the verb that follows and which leave it alone',
    'Use abl maa, ba3d maa and awwal maa to order two events',
    'Tell eza from lamma, where English gives you no clue'
  ],

  grammar: [
    {
      heading: 'Conjunctions that carry the person',
      body:
        'Lebanese has a habit English does not: it puts the pronoun **on the conjunction itself**. ' +
        'Where English says "because you are here", Lebanese says `la2ennak hoon` — one word ' +
        'carrying both the "because" and the "you".\n\n' +
        'The endings are the same eight you already know from `esmé`, `ma3é` and `baddé`. Nothing ' +
        'new has to be learned; an old set is simply reused on a new host. `enn-` ("that") and ' +
        '`ma3 enn-` ("although") take exactly the same endings, so one table gives you three ' +
        'conjunctions.\n\n' +
        'There is a catch worth knowing early. Those suffixed forms are for when the subject of ' +
        'the second clause is a **pronoun**. When the second clause has its own subject, or a verb ' +
        'of its own, Lebanese parks the conjunction in its `-o` form and leaves it there: ' +
        '`la2enno l-maT3am mfawwal` — because the restaurant is fully booked. That `la2enno` is not ' +
        'agreeing with anything. It has become the flat, all-purpose "because", and you will hear ' +
        'it far more often than the eight-form table.',
      table: {
        headers: ['person', 'because…', 'that…', 'although…'],
        rows: [
          ['ana', '`la2enné`', '`enné`', '`ma3 enné`'],
          ['enta', '`la2ennak`', '`ennak`', '`ma3 ennak`'],
          ['enté', '`la2ennik`', '`ennik`', '`ma3 ennik`'],
          ['houwwé', '`la2enno`', '`enno`', '`ma3 enno`'],
          ['hiyyé', '`la2enna`', '`enna`', '`ma3 enna`'],
          ['ne7na', '`la2enna`', '`enna`', '`ma3 enna`'],
          ['ento', '`la2ennkon`', '`ennkon`', '`ma3 ennkon`'],
          ['henné', '`la2ennon`', '`ennon`', '`ma3 ennon`']
        ]
      },
      warning:
        '"She" and "we" come out identical: `la2enna` is both. In writing there is no way to tell ' +
        'them apart, and in speech there is none either. The sentence around them decides.'
    },

    {
      heading: 'Which ones take the b- off',
      body:
        'You met the b-drop early, as a rule about `léézem` and about two verbs in a row. At this ' +
        'level it becomes a property of the conjunction, and the list is worth learning as a list.\n\n' +
        'There is a test that works. Ask whether the second clause could stand alone as a whole ' +
        'statement. `eza betriid` — "you want" is a statement, so the `b-` stays. `abl maa ne23od` ' +
        '— "we sit" is not a statement here, it is only naming an action that has not happened ' +
        'yet, so the `b-` goes.\n\n' +
        'That is why reasons and concessions keep the `b-`: a reason is asserted, it is a fact you ' +
        'are putting on the table. And it is why purposes, time frames and reported instructions ' +
        'lose it: none of them assert anything.\n\n' +
        'Two triggers can also stack. `la2enno léézem eshteghel boukra` keeps the `b-` off one ' +
        'verb and never puts one on the other: `la2enno` had no `b-` to take, and `léézem` took ' +
        'the one that was there. When a sentence looks wrong, count the triggers before you ' +
        'suspect the rule.\n\n' +
        'Learn the two columns below and most of the long sentences in this course will assemble ' +
        'themselves.',
      table: {
        headers: ['takes the b- off', 'leaves the b- alone'],
        rows: [
          ['`kerméél` — so that', '`la2enn-` — because'],
          ['`la-` — in order to', '`eza` — if'],
          ['`lamma` — when', '`bass` — but'],
          ['`abl maa` — before', '`ma3 enn-` — although'],
          ['`ba3d maa` — after', '`3am` — the right-now marker'],
          ['`awwal maa` — as soon as', ''],
          ['`enno` — that, reporting an order or a wish', ''],
          ['`léézem`, `Darouuré`, `ra7`, any second verb', '']
        ]
      },
      examples: [
        { lb: 'mnéékol bel-béét la2enno l-maT3am mfawwal', ar: 'مْناكُل بالبيت لَإنّو المَطعَم مْفَوَّل', en: 'We are eating at home because the restaurant is fully booked.', note: 'b- kept: the reason is a full statement' },
        { lb: 'abl maa noDhar, léézem nelbos', ar: 'قَبْل ما نِضْهَر، لازِم نِلْبُس', en: 'Before we go out, we have to get dressed.', note: 'b- gone twice over' },
        { lb: 'eza betriid, be7joz Taawlé la-boukra', ar: 'إذا بِتْريد، بِحْجُز طاوْلة لَبُكْرة', en: 'If you like, I will book a table for tomorrow.' }
      ]
    },

    {
      heading: 'The maa family: putting two events in order',
      body:
        'Three conjunctions are built the same way: a word for a position in time, plus `maa`. The ' +
        '`maa` here means nothing at all — it is not the negative `maa`, it is a piece of glue that ' +
        'turns an adverb into a conjunction. `abl maa` (before), `ba3d maa` (after), `awwal maa` ' +
        '(as soon as).\n\n' +
        'Everything built with that glue drops the `b-`, and the verb still agrees fully with its ' +
        'subject. Lebanese has no infinitive, so "before eating" has to become "before I eat", ' +
        '"before you eat", "before we eat", and each of those is a different word.\n\n' +
        '`lamma` (when) has no visible `maa` but behaves exactly like the family: `lamma erja3` — ' +
        'when I get back.\n\n' +
        'One habit worth copying from native speakers: the time clause usually comes **first**, ' +
        'before the main clause, far more often than in English. `ba3d maa terja3, mnéékol` sounds ' +
        'more natural than the reverse order, and putting it first also saves you from having to ' +
        'decide the tense of the main verb before you have finished thinking.',
      table: {
        headers: ['person', 'before I / you / he… sit down'],
        rows: [
          ['ana', '`abl maa e23od`'],
          ['enta', '`abl maa te23od`'],
          ['enté', '`abl maa te23dé`'],
          ['houwwé', '`abl maa ye23od`'],
          ['hiyyé', '`abl maa te23od`'],
          ['ne7na', '`abl maa ne23od`'],
          ['ento', '`abl maa te23do`'],
          ['henné', '`abl maa ye23do`']
        ]
      },
      warning:
        'Swap `abl` for `ba3d` or `awwal` and the whole column stays as it is. Three conjunctions, ' +
        'one paradigm — this is the cheapest grammar in the unit.'
    },

    {
      heading: 'eza, lamma and the two jobs of bass',
      body:
        'English hides a distinction here that Lebanese refuses to hide. "When I get paid I will ' +
        'buy it" and "if I get paid I will buy it" are two different claims, and English lets you ' +
        'slide between them. Lebanese does not: `lamma` means the thing will happen and you are ' +
        'placing yourself in time; `eza` means it might not happen at all. Pick the wrong one and ' +
        'you have accidentally promised something, or accidentally doubted it.\n\n' +
        'They also behave differently with the verb. `lamma` strips the `b-`; `eza` leaves it. ' +
        'There is no logic connecting the two facts, so keep them together in memory as a pair.\n\n' +
        '`bass` does two unrelated jobs. Between two clauses it is "but": `mnii7 bass met3eb` — ' +
        'good, but tiring. In front of a word it is "only, just": `bass shwayy` — just a little. ' +
        'Position tells you which, and neither one touches the `b-` of a following verb.\n\n' +
        'Two more connectors are worth having now. `ba3déén` opens an extra argument — "besides". ' +
        'And `mesh bass héék` announces that you are about to add a second reason, which is what ' +
        'people say when they are settling in to make a case.',
      examples: [
        { lb: 'lamma erja3 men el-maktab, mnéékol', ar: 'لمّا إِرْجَع مِن المَكْتَب، مْناكُل', en: 'When I get back from the office, we will eat.', note: 'a certainty, and the b- is gone' },
        { lb: 'eza bterja3 bakkiir, mnoDhar', ar: 'إذا بْتِرْجَع بَكّير، مْنِضْهَر', en: 'If you get back early, we will go out.', note: 'a condition, and the b- stays' },
        { lb: 'l-baldé rééy2a, bass mesh ariibé', ar: 'البَلْدة رايْقة، بَس مِش قَريبة', en: 'The town is quiet, but it is not close.' }
      ]
    }
  ],

  vocab: [
    { lb: 'enno', ar: 'إنّو', en: 'that', pos: 'phr', note: 'the flat form, used before a clause of its own' },
    { lb: 'la2enno', ar: 'لَإنّو', en: 'because', pos: 'phr', note: 'the everyday form; the verb after it keeps its b-' },
    { lb: 'la2ennak', ar: 'لَإنَّك', en: 'because you are (m)', pos: 'phr', note: 'la2ennik to a woman' },
    { lb: 'ma3 enno', ar: 'مَعْ إنّو', en: 'although', pos: 'phr' },
    { lb: 'kerméél', ar: 'كِرْمال', en: 'so that, in order to', pos: 'phr', note: 'takes the b- off the verb' },
    { lb: 'abl maa', ar: 'قَبْل ما', en: 'before', pos: 'phr', note: 'also written abel maa' },
    { lb: 'ba3d maa', ar: 'بَعْد ما', en: 'after', pos: 'phr' },
    { lb: 'awwal maa', ar: 'أَوَّل ما', en: 'as soon as', pos: 'phr' },
    { lb: 'lamma', ar: 'لمّا', en: 'when', pos: 'phr', note: 'the thing will happen; takes the b- off' },
    { lb: 'eza', ar: 'إذا', en: 'if', pos: 'phr', note: 'the thing might not happen; leaves the b- alone' },
    { lb: 'bass', ar: 'بَس', en: 'but; only, just', pos: 'phr', note: 'between clauses it is but, in front of a word it is only' },
    { lb: 'ba3déén', ar: 'بَعْدين', en: 'besides; later', pos: 'adv' },
    { lb: 'mesh bass héék', ar: 'مِش بَس هيك', en: 'not only that', pos: 'phr' },
    { lb: 'Darouuré', ar: 'ضَروري', en: 'it is essential that', pos: 'phr', note: 'invariable, and takes the b- off' },
    { lb: 'wa2t', ar: 'وَقْت', en: 'time', pos: 'n', gender: 'm' },
    { lb: 'l-mhemm', ar: 'المْهِم', en: 'what matters is', pos: 'phr', note: 'usually followed by enno' }
  ],

  phrases: [
    {
      lb: 'l-mhemm enno maa tet2akkhar', ar: 'المْهِم إنّو ما تِتْأَخَّر', en: 'what matters is that you are not late',
      when: 'closing a discussion by naming the one thing that counts'
    },
    {
      lb: 'shou awlak noDhar?', ar: 'شو قَوْلَك نِضْهَر؟', en: 'how about we go out?',
      when: 'the standard way of floating a plan; the verb after it loses its b-',
      reply: 'léésh la2!', replyEn: 'why not!'
    },
    {
      lb: 'eza betriid', ar: 'إذا بِتْريد', en: 'if you would like',
      when: 'tacked onto the end of a request to soften it'
    },
    {
      lb: 'mesh bass héék', ar: 'مِش بَس هيك', en: 'not only that',
      when: 'announcing a second reason before you give it'
    },
    {
      lb: 'ma3ak 7a2, bass…', ar: 'مَعَك حَق، بَس…', en: 'you are right, but…',
      when: 'the safest way into a disagreement: concede first, object second'
    },
    {
      lb: 'ba3déén, maa 3endé wa2t', ar: 'بَعْدين، ما عِنْدي وَقْت', en: 'besides, I do not have time',
      when: 'adding the argument you were keeping in reserve'
    }
  ],

  drills: [
    { type: 'choice', q: 'Which conjunction takes the b- off the verb that follows it?',
      options: ['abl maa', 'la2enno', 'eza'], answer: 0,
      explain: 'Time frames and purposes strip the b-. Reasons and conditions leave it alone.' },

    { type: 'conjugate', en: 'before we sit down', root: 'e23od', person: 'ne7na', tense: 'after abl maa',
      options: ['abl maa ne23od', 'abl maa mne23od', 'abl maa be23od', 'abl maa te23od'], answer: 0,
      explain: 'The 1pl b-form is mne23od; strip the m- and you get ne23od.' },

    { type: 'build', en: 'We are eating at home because the restaurant is fully booked.',
      tiles: ['mnéékol', 'bel-béét', 'la2enno', 'l-maT3am', 'mfawwal'], extra: ['abl maa'],
      answer: 'mnéékol bel-béét la2enno l-maT3am mfawwal' },

    { type: 'match',
      pairs: [['la2enno', 'because'], ['ma3 enno', 'although'], ['awwal maa', 'as soon as'], ['kerméél', 'so that']] },

    { type: 'choice', q: 'Someone says "eza bterja3 bakkiir, mnoDhar". Why does bterja3 keep its b-?',
      options: [
        'Because "you get back" is a full statement in its own right',
        'Because eza is always followed by the past',
        'Because bterja3 has no bare form'
      ], answer: 0,
      explain: 'That is the working test: if the clause could stand alone as a statement, the b- stays.' },

    { type: 'gap', en: 'Maya suggests going for a coffee. You want to, but not yet.',
      lines: [
        { who: 'Maya', lb: 'shou awlik noDhar neshrab 2ahwe?', en: 'how about we go out for a coffee?' },
        { who: 'You', you: true, blank: true }
      ],
      options: [
        'ééh, bass ba3d maa erja3 men el-maktab',
        'ééh, bass ba3d maa berja3 men el-maktab',
        'ééh, bass ba3d maa la2enno erja3'
      ], answer: 0,
      explain: 'ba3d maa belongs to the maa family, so the b- of berja3 comes off.' },

    { type: 'conjugate', en: 'because she works in Beirut', root: 'eshteghel', person: 'hiyyé', tense: 'after la2enno',
      options: ['la2enno bteshteghel bi-Beirut', 'la2enno teshteghel bi-Beirut', 'la2enno eshteghel bi-Beirut', 'la2enno mneshteghel bi-Beirut'], answer: 0,
      explain: 'A reason is asserted as a fact, so the verb keeps its full present form.' },

    { type: 'build', en: 'We will eat after you get back from the office.',
      tiles: ['mnéékol', 'ba3d', 'maa', 'terja3', 'men', 'el-maktab'], extra: ['bterja3'],
      answer: 'mnéékol ba3d maa terja3 men el-maktab' },

    { type: 'type', en: 'What matters is that you are not late.', answer: 'l-mhemm enno maa tet2akkhar' },

    { type: 'choice', q: 'You are certain you will be paid on Friday and you are planning around it. Which one?',
      options: ['lamma', 'eza', 'ma3 enno'], answer: 0,
      explain: 'lamma places you in a time that will arrive. eza would mean you doubt it.' },

    { type: 'match',
      pairs: [['eza', 'if'], ['lamma', 'when'], ['bass', 'but'], ['ba3déén', 'besides']] },

    { type: 'gap', en: 'Tarek wants to know why you will not come tomorrow.',
      lines: [
        { who: 'Tarek', lb: 'léésh maa ra7 tejé boukra?', en: 'why will you not come tomorrow?' },
        { who: 'You', you: true, blank: true }
      ],
      options: [
        'la2enno léézem eshteghel boukra',
        'la2enno léézem beshteghel boukra',
        'la2enno abl maa beshteghel boukra'
      ], answer: 0,
      explain: 'The b- stays after la2enno, but léézem strips it off the verb it governs. Both rules apply at once.' },

    { type: 'build', en: 'Before we go out, we have to get dressed.',
      tiles: ['abl', 'maa', 'noDhar', 'léézem', 'nelbos'], extra: ['mnelbos'],
      answer: 'abl maa noDhar léézem nelbos' },

    { type: 'choice', q: 'What does bass mean in "bass shwayy"?',
      options: ['just a little', 'but a little', 'not a little'], answer: 0,
      explain: 'In front of a word bass is "only, just". Between two clauses it is "but".' }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence is right?',
      options: [
        'ra7 e7ké ma3o ba3d maa yerja3',
        'ra7 e7ké ma3o ba3d maa byerja3',
        'ra7 be7ké ma3o ba3d maa yerja3'
      ], answer: 0,
      explain: 'ra7 and ba3d maa both strip the b-. Two triggers, two bare verbs.' },

    { type: 'build', en: 'If you get back early, we will go out.',
      tiles: ['eza', 'bterja3', 'bakkiir', 'mnoDhar'], extra: ['terja3'],
      answer: 'eza bterja3 bakkiir mnoDhar' },

    { type: 'conjugate', en: 'as soon as he arrives', root: 'ouuSal', person: 'houwwé', tense: 'after awwal maa',
      options: ['awwal maa youuSal', 'awwal maa byouuSal', 'awwal maa touuSal', 'awwal maa ouuSal'], answer: 0 },

    { type: 'match',
      pairs: [['abl maa', 'before'], ['ba3d maa', 'after'], ['la2ennak', 'because you are'], ['mesh bass héék', 'not only that']] },

    { type: 'gap', en: 'Rawan is trying to talk you out of driving down to Beirut this evening.',
      lines: [
        { who: 'Rawan', lb: 'T-Tarii2 kella 3aj2a halla2', en: 'the road is nothing but traffic right now' },
        { who: 'You', you: true, blank: true }
      ],
      options: [
        'ma3ak 7a2, bass léézem nenzal lyoom',
        'ma3ak 7a2, la2enno léézem nnezal lyoom',
        'ma3ak 7a2, abl maa léézem nenzal lyoom'
      ], answer: 0,
      explain: 'bass joins two full statements and changes nothing; léézem is what takes the b- off nenzal.' },

    { type: 'choice', q: 'Why is la2enna ambiguous?',
      options: [
        'It is both "because she is" and "because we are"',
        'It can also mean although',
        'It is only used in questions'
      ], answer: 0 },

    { type: 'type', en: 'You are right, but…', answer: 'ma3ak 7a2 bass' },

    { type: 'choice', q: 'Your friend might get the job, or might not, and you are planning around that. Which one?',
      options: ['eza', 'lamma', 'awwal maa'], answer: 0,
      explain: 'lamma and awwal maa both assume the thing will happen. Only eza leaves it open.' },

    { type: 'build', en: 'Although the town is not close, we prefer it.',
      tiles: ['ma3', 'enno', 'l-baldé', 'mesh', 'ariibé', 'menfaDDela'], extra: ['la2enno'],
      answer: 'ma3 enno l-baldé mesh ariibé menfaDDela' },

    { type: 'choice', q: 'Which conjunction leaves the b- of the following verb untouched?',
      options: ['eza', 'lamma', 'kerméél'], answer: 0 }
  ]
});
