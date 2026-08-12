LEB.addUnit({
  id: 'u18',
  stage: 3,
  order: 18,
  title: 'A Day in Your Life',
  goal: 'Describe your whole day in the present tense, in order, and say how often each piece of it happens.',
  canDo: [
    'Name the ten verbs a Lebanese day is actually made of',
    'Hook two actions together with lamma, and drop the b where it has to go',
    'Say every day, always, usually, sometimes and never in the right slot',
    'Attach a clock time to a verb without sounding like a timetable'
  ],

  grammar: [
    {
      heading: 'The ten verbs a day is made of',
      body:
        'You already own the machine: take the root, put `b-` on the front, and you have the ' +
        'ordinary present. What is missing is the handful of roots that a day is built from. ' +
        'Learn them as roots, not as finished words, and every person of every one of them ' +
        'comes free.\n\n' +
        'Two families, as always. Roots that begin with an alef — `ouu3a`, `oDhar`, `erja3`, ' +
        '`eshteghel`, `etrawwa2`, `et7ammam`, `emshé`, `elbos` — take `bt-`, `by-`, `mn-` for ' +
        'the other persons. Roots that begin with a consonant — `néém`, `ghassel`, `farshé`, ' +
        '`Tawwel` — take `bet-`, `bi-`, `men-`. Nothing here is irregular; the two families ' +
        'simply need slightly different padding to be pronounceable.\n\n' +
        'One detail that surprises people: when the verb has a body part or a personal object, ' +
        'that object carries **your** ending, not a separate word for *my*. You do not brush ' +
        '"the" teeth, you brush `snééné` — and the moment the subject changes, the object ' +
        'changes with it.',
      table: {
        headers: ['root', 'I …', 'he …', 'meaning'],
        rows: [
          ['`ouu3a`', '`bouu3a`', '`byouu3a`', 'wake up'],
          ['`et7ammam`', '`bet7ammam`', '`byet7ammam`', 'take a shower'],
          ['`ghassel`', '`bghassel`', '`bighassel`', 'wash'],
          ['`farshé`', '`bfarshé`', '`bifarshé`', 'brush'],
          ['`etrawwa2`', '`betrawwa2`', '`byetrawwa2`', 'have breakfast'],
          ['`elbos`', '`belbos`', '`byelbos`', 'get dressed, put on'],
          ['`oDhar`', '`boDhar`', '`byoDhar`', 'go out, leave'],
          ['`emshé`', '`bemshé`', '`byemshé`', 'walk'],
          ['`eshteghel`', '`beshteghel`', '`byeshteghel`', 'work'],
          ['`erja3`', '`berja3`', '`byerja3`', 'go back, come back'],
          ['`eshar`', '`beshar`', '`byeshar`', 'stay up late'],
          ['`néém`', '`bnéém`', '`binéém`', 'sleep']
        ]
      },
      warning:
        'The object follows the subject: `bfarshé snééné`, `betfarshé snéénak`, ' +
        '`bifarshé snééno`. Same for `bghassel wejjé`. Say `bfarshé snéénak` and you have ' +
        'just offered to brush somebody else\'s teeth.'
    },

    {
      heading: 'lamma — and the b that walks away',
      body:
        'Lebanese has no infinitive, and you have already met the consequence: after certain ' +
        'words the second verb stays fully conjugated but loses its `b-`. `lamma` — *when* — ' +
        'belongs to that club, along with `léézem`, `badd-` and any verb that comes first.\n\n' +
        'So the verb after `lamma` agrees with its subject exactly as it would on its own; it ' +
        'is only the prefix that goes. `byerja3` on its own, `lamma yerja3` inside a sentence. ' +
        'For *we* the `mn-` disappears the same way and leaves a bare `n-`.\n\n' +
        'There is one repair to remember. Roots that start with an alef swallowed it under the ' +
        '`b-`: `erja3` became `berja3`, and the alef vanished. Take the `b-` away and the alef ' +
        'comes back — `lamma erja3`, not `lamma rja3`. Consonant roots have nothing to give ' +
        'back, so `bnéém` simply becomes `lamma néém`.\n\n' +
        'The order of the two halves is free. Put `lamma` first and you get *when I get home, ' +
        'I…*; put it second and you get *I… when I get home*. Both are ordinary speech.',
      table: {
        headers: ['person', 'on its own', 'after lamma'],
        rows: [
          ['ana', '`berja3`', '`lamma erja3`'],
          ['enta', '`bterja3`', '`lamma terja3`'],
          ['enté', '`bterja3é`', '`lamma terja3é`'],
          ['houwwé', '`byerja3`', '`lamma yerja3`'],
          ['hiyyé', '`bterja3`', '`lamma terja3`'],
          ['ne7na', '`mnerja3`', '`lamma nerja3`'],
          ['ento', '`bterja3o`', '`lamma terja3o`'],
          ['henné', '`byerja3o`', '`lamma yerja3o`']
        ]
      },
      examples: [
        { lb: 'lamma ouu3a, bghassel wejjé', ar: 'لمّا أوعى، بْغَسِّل وِجّي', en: 'When I wake up, I wash my face.' },
        { lb: 'bfarshé snééné lamma néém', ar: 'بْفَرْشي سْنيني لمّا نام', en: 'I brush my teeth when I go to sleep.', note: 'consonant root: nothing comes back' },
        { lb: 'lamma terja3é, khabbriiné', ar: 'لمّا تِرْجَعي، خَبّْريني', en: 'When you get back, tell me.', note: 'to a woman' }
      ]
    },

    {
      heading: 'How often, and at what time',
      body:
        'A routine is not a routine until you say how often. Lebanese puts most of these little ' +
        'words at the very front of the sentence, before the verb, where English would bury ' +
        'them in the middle. `3aadatan bnéém bakkiir` — usually I sleep early. Starting there ' +
        'is always safe.\n\n' +
        '*Never* is the one that works differently, because it is built from two pieces that sit ' +
        'apart: `maa` goes in front of the verb and `abadan` lands at the end. ' +
        '`maa beshar abadan` — I never stay up late. Neither half means *never* on its own; ' +
        '`abadan` by itself is closer to *at all*.\n\n' +
        'For the clock, the honest Lebanese habit is to approximate. `Soob` in front of the ' +
        'hour means *around*, and it is what people actually say; `ta2riiban` after it means ' +
        '*roughly*. When the time is the end point of something, use `la-`: `bnéém las-séé3a ' +
        '3ashra` is not *at ten*, it is *until ten*.',
      table: {
        headers: ['expression', 'meaning', 'where it goes'],
        rows: [
          ['`kell yoom`', 'every day', 'front or very end'],
          ['`daayman`', 'always', 'in front of the verb'],
          ['`3aadatan`', 'usually', 'in front of the verb'],
          ['`aw2aat`', 'sometimes', 'in front of the verb'],
          ['`maa` … `abadan`', 'never', '`maa` before the verb, `abadan` last'],
          ['`bakkiir`', 'early', 'after the verb'],
          ['`bel-léél`', 'at night', 'front or end'],
          ['`Soob es-séé3a tes3a`', 'around nine', 'after the verb'],
          ['`las-séé3a 3ashra`', 'until ten', 'after the verb']
        ]
      },
      warning:
        '`aw2aat` is *sometimes*, and it has nothing to do with the word for *time* you use to ' +
        'ask the hour. Do not reach for it when you mean `séé3a`.'
    },

    {
      heading: 'One day, told out loud',
      body:
        'Here is a full day in the first person, line by line. It is deliberately plain: no ' +
        'clever vocabulary, nothing you have not been given, and every sentence short enough to ' +
        'say without stopping to think.\n\n' +
        'Read it once for sense. Then read it again and notice the joinery — `awwal shii` opens ' +
        'the sequence, `men ba3da` moves it along, `lamma` welds two actions into one sentence, ' +
        'and a frequency word sits at the front whenever the day is not identical every time.\n\n' +
        'Then rebuild it. Change the hours to yours, swap the verbs you do not do for the ones ' +
        'you do, and say it about yourself. That rewriting is the exercise; reading somebody ' +
        'else\'s day is not. If you can produce ten sentences of your own on this frame, you can ' +
        'hold the most common conversation there is with a Lebanese stranger, which is being ' +
        'asked what your life looks like.',
      examples: [
        { lb: '3aadatan bouu3a Soob es-séé3a setté', ar: 'عادَةً بوعى صوب السّاعة سِتّة', en: 'Usually I wake up around six.' },
        { lb: 'awwal shii bghassel wejjé w-bfarshé snééné', ar: 'أَوَّل شي بْغَسِّل وِجّي وبْفَرْشي سْنيني', en: 'First of all I wash my face and brush my teeth.' },
        { lb: 'men ba3da bet7ammam w-belbos', ar: 'مِن بَعْدها بِتْحَمَّم وبِلْبُس', en: 'After that I shower and get dressed.' },
        { lb: 'betrawwa2 bel-béét ma3 emmé', ar: 'بِتْرَوَّق بِالبيت مَع إِمّي', en: 'I have breakfast at home with my mother.' },
        { lb: 'boDhar men el-béét Soob es-séé3a sab3a w-noSS', ar: 'بِضْهَر مِن البيت صوب السّاعة سَبْعة وْنُصّ', en: 'I leave the house around half past seven.' },
        { lb: 'kell yoom bemshé lal-m7aTTa', ar: 'كِل يوم بِمْشي لَلمْحَطّة', en: 'Every day I walk to the station.' },
        { lb: 'beshteghel kell en-nhaar', ar: 'بِشْتِغِل كِل النّهار', en: 'I work all day.' },
        { lb: 'lamma erja3 3al-béét, béékol 3asha ma3 3aylté', ar: 'لمّا إِرْجَع عَالبيت، باكُل عَشاء مَع عَيْلْتي', en: 'When I get home, I eat dinner with my family.' },
        { lb: 'bel-léél maa beshar ktiir', ar: 'بِاللّيل ما بِسْهَر كْتير', en: 'At night I do not stay up much.' },
        { lb: 'bnéém Soob es-séé3a 7da3ash', ar: 'بْنام صوب السّاعة حْدَعَش', en: 'I go to sleep around eleven.' }
      ]
    }
  ],

  vocab: [
    { lb: 'bouu3a', ar: 'بوعى', en: 'I wake up', pos: 'v', note: 'root `ouu3a`' },
    { lb: 'bet7ammam', ar: 'بِتْحَمَّم', en: 'I take a shower', pos: 'v', note: 'root `et7ammam`' },
    { lb: 'bfarshé snééné', ar: 'بْفَرْشي سْنيني', en: 'I brush my teeth', pos: 'phr', note: 'the teeth take your ending, not the word for my' },
    { lb: 'betrawwa2', ar: 'بِتْرَوَّق', en: 'I have breakfast', pos: 'v', note: 'root `etrawwa2`' },
    { lb: 'boDhar', ar: 'بِضْهَر', en: 'I go out, I leave', pos: 'v', note: 'root `oDhar`' },
    { lb: 'bemshé', ar: 'بِمْشي', en: 'I walk', pos: 'v', note: 'root `emshé`; the root ends in -é, so you (m), you (f) and she all give `btemshé`' },
    { lb: 'beshteghel', ar: 'بِشْتِغِل', en: 'I work', pos: 'v', note: 'root `eshteghel`' },
    { lb: 'berja3', ar: 'بِرْجَع', en: 'I go back, I come back', pos: 'v', note: 'root `erja3`' },
    { lb: 'beshar', ar: 'بِسْهَر', en: 'I stay up late', pos: 'v', note: 'root `eshar`' },
    { lb: 'bnéém', ar: 'بْنام', en: 'I sleep, I go to sleep', pos: 'v', note: 'root `néém`, a consonant root' },
    { lb: '3asha', ar: 'عَشاء', en: 'dinner', pos: 'n', gender: 'm' },
    { lb: 'lamma', ar: 'لمّا', en: 'when, whenever', pos: 'adv', note: 'the verb after it loses its b-' },
    { lb: 'kell yoom', ar: 'كِل يوم', en: 'every day', pos: 'phr' },
    { lb: 'daayman', ar: 'دايْماً', en: 'always', pos: 'adv' },
    { lb: '3aadatan', ar: 'عادَةً', en: 'usually', pos: 'adv' },
    { lb: 'aw2aat', ar: 'أَوْقات', en: 'sometimes', pos: 'adv' }
  ],

  phrases: [
    {
      lb: 'ayya séé3a btoDhar?', ar: 'أَيّا ساعة بِضْهَر؟', en: 'What time do you leave? (to a man)',
      when: 'asking about somebody\'s morning, or about tonight'
    },
    {
      lb: '3aadatan bnéém Soob es-séé3a 7da3ash', ar: 'عادَةً بْنام صوب السّاعة حْدَعَش', en: 'I usually go to sleep around eleven.',
      when: 'answering a question about your evenings'
    },
    {
      lb: 'maa beshar abadan', ar: 'ما بِسْهَر أَبَداً', en: 'I never stay up late.',
      when: 'the two halves of never, around the verb'
    },
    {
      lb: 'lamma erja3 3al-béét, bet7ammam', ar: 'لمّا إِرْجَع عَالبيت، بِتْحَمَّم', en: 'When I get home, I take a shower.',
      when: 'chaining two things you do, in one sentence'
    },
    {
      lb: 'awwal shii… men ba3da…', ar: 'أَوَّل شي… مِن بَعْدها…', en: 'First of all… after that…',
      when: 'the frame that turns a list of verbs into a story'
    },
    {
      lb: 'kell yoom bemshé 3ash-sheghl', ar: 'كِل يوم بِمْشي عَالشِّغل', en: 'Every day I walk to work.',
      when: 'saying how you commute'
    },
    {
      lb: 'shou bta3mol bel-léél?', ar: 'شو بْتَعْمُل بِاللّيل؟', en: 'What do you do at night? (to a man)',
      when: 'the easiest way to keep a conversation about routine going'
    },
    {
      lb: 'Sa7 en-noom', ar: 'صَح النّوم', en: 'may your sleep be sound',
      when: 'to somebody who has just got out of bed, at any hour of the day'
    }
  ],

  drills: [
    { type: 'match',
      pairs: [['bouu3a', 'I wake up'], ['boDhar', 'I go out'], ['berja3', 'I come back'], ['bnéém', 'I sleep']] },

    { type: 'conjugate', en: 'he wakes up', root: 'ouu3a', person: 'houwwé', tense: 'present',
      options: ['byouu3a', 'btouu3a', 'bouu3a', 'mnouu3a'], answer: 0,
      explain: 'An alef root takes by- for he. bouu3a is I, btouu3a is you (m) and she.' },

    { type: 'choice', q: 'Which one is correct after lamma?',
      options: ['lamma erja3 3al-béét', 'lamma berja3 3al-béét', 'lamma rja3 3al-béét'], answer: 0,
      explain: 'lamma strips the b-, and the alef of the root erja3 comes back to fill the gap.' },

    { type: 'build', en: 'Every day I walk to work.',
      tiles: ['kell', 'yoom', 'bemshé', '3ash-sheghl'], extra: ['lamma'], answer: 'kell yoom bemshé 3ash-sheghl' },

    { type: 'gap', en: 'A neighbour is curious about your mornings.',
      lines: [
        { who: 'Rima', lb: 'daayman btoDhar bakkiir?', en: 'do you always leave early?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['aw2aat bass, mesh kell yoom', 'lamma boDhar bakkiir', 'abadan bel-léél'], answer: 0,
      explain: 'aw2aat is sometimes, and it sits at the front. The other two are not answers to how often.' },

    { type: 'conjugate', en: 'we go back', root: 'erja3', person: 'ne7na', tense: 'present',
      options: ['mnerja3', 'berja3', 'bterja3o', 'byerja3o'], answer: 0,
      explain: 'We takes mn- on an alef root. After lamma it would lose the m and leave nerja3.' },

    { type: 'choice', q: 'How do you say "I never stay up late"?',
      options: ['maa beshar abadan', 'abadan beshar', 'maa abadan beshar'], answer: 0,
      explain: 'Never is split in two: maa in front of the verb, abadan at the end.' },

    { type: 'type', en: 'I usually have breakfast at home.', answer: '3aadatan betrawwa2 bel-béét' },

    { type: 'match',
      pairs: [['daayman', 'always'], ['3aadatan', 'usually'], ['aw2aat', 'sometimes'], ['kell yoom', 'every day']] },

    { type: 'build', en: 'When I wake up, I wash my face.',
      tiles: ['lamma', 'ouu3a', 'bghassel', 'wejjé'], extra: ['bouu3a'], answer: 'lamma ouu3a bghassel wejjé' },

    { type: 'choice', q: 'A woman is telling you about herself. Which is right for "I brush my teeth"?',
      options: ['bfarshé snééné', 'bfarshé snéénak', 'betfarshé snééné'], answer: 0,
      explain: 'The object copies the subject: my teeth is snééné whoever is speaking, but the verb must be the I form.' },

    { type: 'gap', en: 'Somebody at work asks you about your evenings.',
      lines: [
        { who: 'Ziad', lb: 'shou bta3mol bel-léél?', en: 'what do you do at night?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['béékol 3asha w-bnéém bakkiir', 'bouu3a Soob es-séé3a setté', 'kell yoom lamma'], answer: 0,
      explain: 'Dinner and sleep belong to the night. Waking up at six is a morning answer.' },

    { type: 'type', en: 'I go to sleep around eleven.', answer: 'bnéém Soob es-séé3a 7da3ash' },

    { type: 'choice', q: 'What does "bnéém las-séé3a 3ashra" mean?',
      options: ['I sleep until ten', 'I sleep at ten', 'I sleep for ten hours'], answer: 0,
      explain: 'la- marks the end point. For a starting time people say Soob es-séé3a instead.' }
  ],

  quiz: [
    { type: 'conjugate', en: 'you (f) have breakfast', root: 'etrawwa2', person: 'enté', tense: 'present',
      options: ['btetrawwa2é', 'betrawwa2', 'byetrawwa2', 'mnetrawwa2'], answer: 0 },

    { type: 'choice', q: 'Why does the verb lose its b- after lamma?',
      options: [
        'Lebanese has no infinitive, so a subordinate verb stays conjugated but drops the prefix',
        'Because lamma already contains a b sound',
        'Because the sentence is about a habit'
      ], answer: 0 },

    { type: 'build', en: 'When he gets home, he eats dinner.',
      tiles: ['lamma', 'yerja3', '3al-béét', 'byéékol', '3asha'], extra: ['berja3'],
      answer: 'lamma yerja3 3al-béét byéékol 3asha' },

    { type: 'type', en: 'I never stay up late.', answer: 'maa beshar abadan' },

    { type: 'match',
      pairs: [['betrawwa2', 'I have breakfast'], ['bet7ammam', 'I take a shower'], ['beshteghel', 'I work'], ['beshar', 'I stay up late']] },

    { type: 'gap', en: 'You are on a service and the driver makes conversation.',
      lines: [
        { who: 'Driver', lb: 'kell yoom bterja3 3a hal-séé3a?', en: 'do you come back at this hour every day?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['laa2, aw2aat berja3 bakkiir', 'laa2, lamma berja3', 'ééh, maa berja3 abadan'], answer: 0,
      explain: 'The third one says the opposite of yes: maa … abadan is never.' },

    { type: 'choice', q: 'Which sentence puts the frequency word where a Lebanese speaker would put it?',
      options: ['3aadatan bnéém bakkiir', 'bnéém 3aadatan bakkiir', 'bnéém bakkiir 3aadatan'], answer: 0,
      explain: 'Usually, always and sometimes go in front of the verb, most often at the very start.' },

    { type: 'conjugate', en: 'she works', root: 'eshteghel', person: 'hiyyé', tense: 'present',
      options: ['bteshteghel', 'beshteghel', 'byeshteghel', 'mneshteghel'], answer: 0,
      explain: 'You (m) and she are always the same form. That is not a mistake in the table.' },

    { type: 'choice', q: 'Somebody says "bghassel wejjé". Whose face is being washed?',
      options: ['His or her own', 'Yours', 'Nobody in particular — it is a general statement'], answer: 0,
      explain: 'The object carries the subject\'s ending. Change the subject and wejjé becomes wejjak, wejjo, wejja.' },

    { type: 'type', en: 'When I get home, I take a shower.', answer: 'lamma erja3 3al-béét bet7ammam' }
  ]
});
