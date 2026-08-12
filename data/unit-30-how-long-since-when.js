LEB.addUnit({
  id: 'u30',
  stage: 4,
  order: 30,
  title: 'Since When',
  goal: 'Say how long something has been going on, and ask someone else the same.',
  canDo: [
    'Say how long you have been somewhere, or been waiting, or been ill',
    'Ask since when and how long, and understand both answers',
    'Tell apart something that happened once and something that has been true for a while'
  ],

  grammar: [
    {
      heading: 'There is no present perfect, so time is counted at you',
      body:
        'English has a tense for this: I have been waiting for an hour. Lebanese has no such ' +
        'tense and does not miss it. Instead it uses `Saar` — a verb you have already met ' +
        'meaning "to become" — with the dative ending `-l-` and a person: literally *it has ' +
        'become to me an hour*.\n\n' +
        'The shape never varies: `Sar-l-` + person + how long + what you have been doing or ' +
        'being. `Sarlé séé3a naaTer` — an hour has become to me, waiting. `Sarla tléét iyyéém ' +
        'saakhné` — three days have become to her, feverish. The last slot can be an adjective, ' +
        'a place, a participle, or nothing at all if it is obvious.\n\n' +
        'The endings are the same ones you have been using since the first week, with one ' +
        'wrinkle: the three plural persons push in an extra vowel. It is `Sarelna`, not ' +
        '`Sarlna`. Say it out loud a few times and your mouth will agree with the language.',
      table: {
        headers: ['person', 'form', 'meaning'],
        rows: [
          ['ana', '`Sarlé`', 'it has been … for me'],
          ['enta', '`Sarlak`', 'it has been … for you'],
          ['enté', '`Sarlik`', 'it has been … for you'],
          ['houwwé', '`Sarlo`', 'it has been … for him'],
          ['hiyyé', '`Sarla`', 'it has been … for her'],
          ['ne7na', '`Sarelna`', 'it has been … for us'],
          ['ento', '`Sarelkon`', 'it has been … for you'],
          ['henné', '`Sarelon`', 'it has been … for them']
        ]
      },
      examples: [
        { lb: 'Sarlé jem3a hoon', en: 'I have been here a week.' },
        { lb: 'Sarelna séé3téén naaTriin', en: 'We have been waiting two hours.' },
        { lb: 'Sarlo shahréén 3am byeshteghel hoon', en: 'He has been working here for two months.' }
      ]
    },

    {
      heading: 'Two questions, two kinds of answer',
      body:
        'There are two ways to ask, and they are not interchangeable. `men aymata?` wants the ' +
        '**point** where it started — since when. `addéé Sarlak?` wants the **length** — how long ' +
        'has it been. Ask one and you will be given the other kind of answer, which is a useful ' +
        'thing to be able to predict.\n\n' +
        'A point is answered with `men` and a moment: `men mbéére7`, `men eS-Sob7`, `men shway`. ' +
        'A length is answered with a bare span: `Sarlé séé3a`, `tléét iyyéém`, `shahréén`. Both ' +
        'answers describe exactly the same situation from opposite ends, and Lebanese speakers ' +
        'slide between them without comment.\n\n' +
        '`addéé` on its own is the general "how much" — it is also the word for asking a price ' +
        'and the word for asking the time. What tells you it means "how long" is the `Sar-l-` ' +
        'that follows it, so keep the two words together as one question.',
      table: {
        headers: ['question', 'word for word', 'what comes back'],
        rows: [
          ['`men aymata?`', 'since when?', '`men` + a moment — `men mbéére7`'],
          ['`addéé Sarlak?`', 'how much has become to you?', 'a span — `Sarlé séé3téén`'],
          ['`men aymata la-aymata?`', 'from when to when?', 'two points — `men es-sabet la-l-a7ad`'],
          ['`addéé s-séé3a?`', 'how much is the hour?', 'a clock time, not a duration']
        ]
      },
      warning:
        'Do not answer `men aymata?` with a bare span. `men aymata sééken hoon?` — `jem3a` on its ' +
        'own sounds like a fragment. Either give the point (`men jem3a`) or switch the whole ' +
        'sentence over to `Sarlé jem3a`.'
    },

    {
      heading: 'A moment and a stretch are different sentences',
      body:
        'This is the part worth slowing down on, because English hides the distinction and ' +
        'Lebanese does not. "I arrived yesterday" and "I have been here since yesterday" describe ' +
        'the same trip, but the first is a single point that is over and the second is a stretch ' +
        'that is still running. In Lebanese the first is a plain past verb and the second is ' +
        '`Sar-l-`, and swapping them produces a sentence that means something else.\n\n' +
        'There is a second duration marker as well, `el-` — the same little word that means ' +
        '"belonging to". `elna kell en-nhaar bel-béét` — we have been at home all day. The rough ' +
        'division of labour: `el-` leans towards an activity that has been going on, `Sar-l-` ' +
        'towards a state that started at a point. Nobody will misunderstand you if you pick the ' +
        'other one; both say "and it is still true now", which is what really matters.\n\n' +
        'The moment it stops being true, both of them are wrong. Then you are back in the plain ' +
        'past, or in `kéén` from the previous unit.',
      table: {
        headers: ['sentence', 'what it says', 'still true?'],
        rows: [
          ['`wSolt mbéére7`', 'I arrived yesterday', 'the arrival is over and done'],
          ['`Sarlé yoom hoon`', 'I have been here a day', 'yes — I am still here'],
          ['`elna noSS séé3a naaTriin`', 'we have been waiting half an hour', 'yes — still waiting'],
          ['`kenna naaTriin noSS séé3a`', 'we were waiting half an hour', 'no — that is finished']
        ]
      }
    }
  ],

  vocab: [
    { lb: 'Sarlé', ar: 'صْرلي', en: 'it has been … for me', pos: 'phr' },
    { lb: 'Sarlak', ar: 'صْرلَك', en: 'it has been … for you (m)', pos: 'phr' },
    { lb: 'Sarelna', en: 'it has been … for us', pos: 'phr', note: 'the three plural persons add a vowel: Sarelna, Sarelkon, Sarelon' },
    { lb: 'men aymata?', ar: 'مِن أَيْمَتى؟', en: 'since when?', pos: 'phr', note: 'said fast it comes out clipped, closer to éémta' },
    { lb: 'addéé', ar: 'قَدّيه؟', en: 'how much? how long?', pos: 'phr' },
    { lb: 'séé3a', ar: 'ساعَة', en: 'hour; also watch, clock, time', pos: 'n', gender: 'f' },
    { lb: 'séé3téén', ar: 'ساعْتين', en: 'two hours', pos: 'n' },
    { lb: 'noSS séé3a', ar: 'نُصّ ساعة', en: 'half an hour', pos: 'phr' },
    { lb: 'reb3 séé3a', ar: 'رِبع ساعة', en: 'a quarter of an hour', pos: 'phr' },
    { lb: 'd2ii2a', ar: 'دْقيقة', en: 'minute', pos: 'n', gender: 'f', note: 'two minutes d2ii2téén, minutes d2ééye2' },
    { lb: 'jem3a', ar: 'جِمْعَة', en: 'week', pos: 'n', gender: 'f' },
    { lb: 'jeme3téén', ar: 'جِمعْتين', en: 'two weeks', pos: 'n' },
    { lb: 'shahr', ar: 'شَهْر', en: 'month', pos: 'n', gender: 'm', note: 'two months shahréén, months shhouur' },
    { lb: 'iyyéém', ar: 'إيّام', en: 'days', pos: 'n', gender: 'pl', note: 'one day is yoom' },
    { lb: 'men shway', ar: 'مِنْ شْوَي', en: 'a while ago', pos: 'phr' },
    { lb: '7aaliyyan', ar: 'حالِياً', en: 'at the moment, currently', pos: 'adv' }
  ],

  phrases: [
    {
      lb: 'addéé Sarlak hoon?', ar: 'قَدّيه صْرلَك هون؟', en: 'how long have you been here?',
      when: 'to someone you have just found waiting somewhere',
      reply: 'Sarlé reb3 séé3a', replyEn: 'a quarter of an hour'
    },
    {
      lb: 'men aymata la-aymata?', ar: 'مِن أَيْمَتى لَأَيْمَتى؟', en: 'from when to when?',
      when: 'pinning down both ends of a booking, a trip or an opening time'
    },
    {
      lb: 'elna noSS séé3a naaTriin', ar: 'إلْنا نُصّ ساعة ناطْرين', en: 'we have been waiting half an hour',
      when: 'the other way of counting time, with el- instead of Sar-l-'
    },
    {
      lb: 'bass halla2 wSolt', ar: 'بَس هَلَّق وْصِلْت', en: 'I have only just arrived',
      when: 'defending yourself when someone assumes you have been standing there for ages'
    },
    {
      lb: 'kella noSS séé3a!', ar: 'كِلّها نُصّ ساعة!', en: 'it is only half an hour',
      when: 'talking a wait down — kell- plus a span means "it is no more than"'
    },
    {
      lb: 'mbala!', ar: 'مْبَلا!', en: 'yes it is, yes I have',
      when: 'contradicting a negative question — it can never answer a normal one'
    },
    {
      lb: 'dakhlak?', ar: 'دَخْلَك؟', en: 'excuse me, can I ask you something',
      when: 'opening a question to a stranger, softer than starting cold'
    }
  ],

  drills: [
    { type: 'choice', q: 'How does Lebanese say "I have been here for a week"?',
      options: ['Sarlé jem3a hoon', 'kent hoon jem3a', 'ra7 kouun hoon jem3a'], answer: 0,
      explain: 'Sar-l- counts the time at you. The second sentence says the week is over, the third that it has not started.' },

    { type: 'conjugate', en: 'it has been … for her', root: 'Sar-l-', person: 'hiyyé', tense: 'duration',
      options: ['Sarla', 'Sarlo', 'Sarelna', 'Sarlik'], answer: 0 },

    { type: 'build', en: 'How long have you been here?',
      tiles: ['addéé', 'Sarlak', 'hoon'], extra: ['men aymata'],
      answer: 'addéé Sarlak hoon' },

    { type: 'match',
      pairs: [['séé3téén', 'two hours'], ['noSS séé3a', 'half an hour'], ['reb3 séé3a', 'a quarter of an hour'], ['jeme3téén', 'two weeks']] },

    { type: 'gap', en: 'You are in a waiting room and the man beside you starts talking.',
      lines: [
        { who: 'Fadi', lb: 'dakhlik, addéé Sarlik naaTra hoon?', en: 'excuse me, how long have you been waiting here?' },
        { who: 'You', you: true, lb: 'Sarlé reb3 séé3a ta2riiban', en: 'about a quarter of an hour' },
        { who: 'Fadi', lb: 'w-el-7akiim? ba3do jouwwa?', en: 'and the doctor? is he still inside?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['ééh, ba3do jouwwa men eS-Sob7', 'ééh, ba3do jouwwa boukra', 'ééh, kéén jouwwa halla2'], answer: 0,
      explain: 'men plus a moment is how a starting point is given. boukra is tomorrow, and kéén cannot stand next to halla2.' },

    { type: 'choice', q: 'Someone asks "men aymata?". Which answer fits the question?',
      options: ['men mbéére7', 'Sarlé yoom', 'yoom'], answer: 0,
      explain: 'men aymata wants the point it started from. The span answer belongs to addéé Sarlak.' },

    { type: 'type', en: 'since when?', answer: 'men aymata', accept: ['men aymata?', 'min aymata'] },

    { type: 'conjugate', en: 'it has been … for them', root: 'Sar-l-', person: 'henné', tense: 'duration',
      options: ['Sarelon', 'Sarelkon', 'Sarla', 'Sarlé'], answer: 0 },

    { type: 'choice', q: 'Which is the correct plural form?',
      options: ['Sarelna séé3téén', 'Sarlna séé3téén', 'Sarna séé3téén'], answer: 0,
      explain: 'The three plural persons push in an extra vowel: Sarelna, Sarelkon, Sarelon.' },

    { type: 'build', en: 'We have been waiting half an hour.',
      tiles: ['elna', 'noSS', 'séé3a', 'naaTriin'], extra: ['Sarlé'],
      answer: 'elna noSS séé3a naaTriin' },

    { type: 'choice', q: 'You arrived thirty seconds ago and someone is already complaining. What do you say?',
      options: ['bass halla2 wSolt', 'Sarlé séé3téén hoon', 'elna kell en-nhaar hoon'], answer: 0 },

    { type: 'match',
      pairs: [['men shway', 'a while ago'], ['7aaliyyan', 'at the moment'], ['iyyéém', 'days'], ['shahr', 'month']] },

    { type: 'choice', q: '"maa Sarlak ktiir naaTer?" — you have in fact been waiting ages. What do you answer?',
      options: ['mbala!', 'ééh', 'laa2'], answer: 0,
      explain: 'The question was negative, so contradicting it takes mbala. Plain ééh will be heard as agreeing with the negative.' },

    { type: 'type', en: 'it has been two months for him.', answer: 'Sarlo shahréén' }
  ],

  quiz: [
    { type: 'choice', q: 'Which sentence says the stay is over?',
      options: ['kent hoon shahr', 'Sarlé shahr hoon', 'elé shahr hoon'], answer: 0,
      explain: 'kéén closes it. Both Sar-l- and el- insist it is still going on.' },

    { type: 'gap', en: 'A new colleague is asking about your move.',
      lines: [
        { who: 'Tania', lb: 'men aymata sééken bi-Beirut?', en: 'since when have you been living in Beirut?' },
        { who: 'You', you: true, lb: 'Sarlé shahréén hoon bass', en: 'only two months' },
        { who: 'Tania', lb: 'w-abel héék wéén kent sééken?', en: 'and before that, where were you living?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['kent sééken bed-Day3a', 'Sarlé sééken bed-Day3a', 'ba3dé sééken bed-Day3a'], answer: 0,
      explain: 'That period is finished, so it takes kéén. Sar-l- and ba3d- both claim it is still true.' },

    { type: 'build', en: 'She has been in this state for three days.',
      tiles: ['Sarla', 'tléét', 'iyyéém', '3a', 'hal-7aalé'], extra: ['men aymata'],
      answer: 'Sarla tléét iyyéém 3a hal-7aalé' },

    { type: 'conjugate', en: 'they sit', root: 'e23od', person: 'henné', tense: 'present',
      options: ['bye23do', 'bte23do', 'mne23od', 'be23od'], answer: 0 },

    { type: 'match',
      pairs: [['Sarlé', 'it has been … for me'], ['Sarlo', 'it has been … for him'], ['Sarelkon', 'it has been … for you (pl)'], ['Sarla', 'it has been … for her']] },

    { type: 'choice', q: '"addéé s-séé3a?" and "addéé Sarlak?" — what is the difference?',
      options: [
        'The first asks the clock time, the second asks how long something has lasted',
        'The first is polite and the second is blunt',
        'They are two spellings of the same question'
      ], answer: 0 },

    { type: 'type', en: 'we have been waiting two hours.', answer: 'Sarelna séé3téén naaTriin',
      accept: ['Sarelna saa3téén naaTriin'] },

    { type: 'choice', q: 'Which of these is not a length of time?',
      options: ['men shway', 'reb3 séé3a', 'jeme3téén'], answer: 0,
      explain: 'men shway is a point — a while ago — so it answers men aymata, not addéé Sarlak.' },

    { type: 'choice', q: 'You want to say "he has been working here for two months". Which is right?',
      options: ['Sarlo shahréén 3am byeshteghel hoon', 'Sarlo shahréén ra7 yeshteghel hoon', 'Sarlo shahréén kéén byeshteghel hoon'], answer: 0,
      explain: 'The work is still going on, so 3am plus the b- form. ra7 pushes it into the future and kéén drags it back into a past that is over.' }
  ]
});
