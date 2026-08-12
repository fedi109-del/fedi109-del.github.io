LEB.addUnit({
  id: 'u13',
  stage: 2,
  order: 13,
  title: 'What Time Is It',
  goal: 'Ask the time, understand the answer at speed, and say what time something happens.',
  canDo: [
    'Ask the time in the two ways everyone uses',
    'Read back any hour, quarter or half',
    'Handle the two times that are counted backwards from the half hour',
    'Say at what time, until what time, and roughly when'
  ],

  grammar: [
    {
      heading: 'Asking, and the answer that has no verb',
      body:
        'Two questions do the same job. `es-séé3a kam?` puts the noun first and asks *the hour, ' +
        'how many*. `addéé es-séé3a?` puts the question word first and asks *how much is the ' +
        'hour*. Neither is more correct; you will hear both in the same afternoon.\n\n' +
        'The answer is the flattest sentence in the language: `es-séé3a khamsé`. The hour, five. ' +
        'There is no *it*, no *is*, nothing to conjugate — which is why time is worth learning ' +
        'early, before the verb system arrives. You can talk about the whole day with nothing but ' +
        'nouns and numbers.\n\n' +
        'One thing to get right from the start: `séé3a` is feminine, and it drags the numbers ' +
        'into the feminine with it. The counting number for one is `wa7ad`, but one o clock is ' +
        '`we7dé`. Two is `tnéén` when you are counting, `tentéén` on a clock face. From three ' +
        'upwards the two sets happen to look the same, so those two are the whole difference — ' +
        'but they are the two you say most often.\n\n' +
        '`séé3a` also means a watch, a clock, and an hour of duration. Context sorts it out.',
      table: {
        headers: ['time', 'Lebanese', 'time', 'Lebanese'],
        rows: [
          ['1:00', '`es-séé3a we7dé`', '7:00', '`es-séé3a sab3a`'],
          ['2:00', '`es-séé3a tentéén`', '8:00', '`es-séé3a tmééné`'],
          ['3:00', '`es-séé3a tléété`', '9:00', '`es-séé3a tes3a`'],
          ['4:00', '`es-séé3a arb3a`', '10:00', '`es-séé3a 3ashra`'],
          ['5:00', '`es-séé3a khamsé`', '11:00', '`es-séé3a 7da3ash`'],
          ['6:00', '`es-séé3a setté`', '12:00', '`es-séé3a tna3ash`']
        ]
      },
      warning:
        'The article melts into the `s`, so it is `es-séé3a`, never `el-séé3a`. Write what is said.'
    },
    {
      heading: 'Adding with w-, subtracting with ella',
      body:
        'Everything past the hour is joined on with `w-`, which is simply *and*. Everything before ' +
        'the next hour is taken off with `ella`, which means *except*. Two words, and the clock ' +
        'is finished.\n\n' +
        'The pieces you add or subtract are `reb3` (a quarter), `telt` (a third, which on a clock ' +
        'means twenty minutes) and `noSS` (a half), plus the plain numbers `khamsé` and `3ashra` ' +
        'for five and ten minutes.\n\n' +
        'The direction is the same as English: after the half hour you stop counting up from the ' +
        'hour you are in and start counting down from the hour ahead. `es-séé3a arb3a ella reb3` ' +
        'is a quarter to four, and note that the hour named is the one you are heading towards, ' +
        'not the one you are in.\n\n' +
        'Read the table below out loud a few times rather than studying it. Time is a listening ' +
        'skill: the words are few, but they arrive fast and run together.',
      table: {
        headers: ['clock', 'Lebanese', 'what it says'],
        rows: [
          ['3:00', '`es-séé3a tléété`', 'the hour, three'],
          ['3:05', '`es-séé3a tléété w-khamsé`', 'three and five'],
          ['3:10', '`es-séé3a tléété w-3ashra`', 'three and ten'],
          ['3:15', '`es-séé3a tléété w-reb3`', 'three and a quarter'],
          ['3:20', '`es-séé3a tléété w-telt`', 'three and a third'],
          ['3:30', '`es-séé3a tléété w-noSS`', 'three and a half'],
          ['3:40', '`es-séé3a arb3a ella telt`', 'four except a third'],
          ['3:45', '`es-séé3a arb3a ella reb3`', 'four except a quarter'],
          ['3:50', '`es-séé3a arb3a ella 3ashra`', 'four except ten'],
          ['3:55', '`es-séé3a arb3a ella khamsé`', 'four except five']
        ]
      }
    },
    {
      heading: 'The two times counted from the half',
      body:
        'Here is the one genuinely strange thing about the Lebanese clock, and it is worth ' +
        'meeting on its own rather than buried in a table.\n\n' +
        'Twenty-five past and twenty-five to are not counted from the hour at all. They are ' +
        'counted from the **half hour**, which is treated as a landmark in its own right. So ' +
        '3:25 is `es-séé3a tléété w-noSS ella khamsé` — three, and a half, except five. And 3:35 ' +
        'is `es-séé3a tléété w-noSS w-khamsé` — three, and a half, and five.\n\n' +
        'Both phrases contain `noSS`, which is what throws an English speaker: you hear *half* ' +
        'and expect the clock to have stopped there. It has not. The `noSS` is the reference ' +
        'point, and the five that follows it is the correction.\n\n' +
        'The same three words also measure duration rather than position: `noSS séé3a` is half an ' +
        'hour, `reb3 séé3a` is a quarter of an hour, and `d2ii2a` is a minute. `kella reb3 séé3a` ' +
        '— it is only fifteen minutes — is the standard way of talking somebody into a journey ' +
        'they do not want to make.',
      table: {
        headers: ['clock', 'Lebanese', 'literally'],
        rows: [
          ['3:25', '`es-séé3a tléété w-noSS ella khamsé`', 'three and a half except five'],
          ['3:35', '`es-séé3a tléété w-noSS w-khamsé`', 'three and a half and five'],
          ['half an hour', '`noSS séé3a`', 'a half of an hour'],
          ['fifteen minutes', '`reb3 séé3a`', 'a quarter of an hour'],
          ['two minutes', '`d2ii2téén`', 'the -één ending, exactly two']
        ]
      },
      warning:
        'If you are stuck, nobody will mind `es-séé3a tléété w-khamsé w-3ashra`. But you will ' +
        'hear the `noSS` version, so you have to be able to decode it even if you never say it.'
    },
    {
      heading: 'At, until, and roughly',
      body:
        'Saying what time it is now is one thing; hanging an event on a time is another, and it ' +
        'takes one letter. `3a` means *at*, and in front of `es-séé3a` it fuses into ' +
        '`3as-séé3a`: `3as-séé3a tmééné` — at eight. `la-` means *until* and fuses the same way: ' +
        '`las-séé3a 3ashra` — until ten.\n\n' +
        'To ask, use `ayya séé3a?` — which hour, at what time. It goes in front of whatever you ' +
        'are asking about.\n\n' +
        'Lebanese conversation is not usually precise about time, and the hedges are used ' +
        'constantly. `Soob` means towards or around: `Soob es-séé3a setté`. `ta2riiban` means ' +
        'almost or approximately and goes at the end. `bakkiir` means early. Together they let ' +
        'you commit to nothing at all, which is often the point.\n\n' +
        'Finally, the parts of the day sit after the time, not before it: `eS-Sob7` in the ' +
        'morning, `ba3d eD-Dohr` in the afternoon, `l-laylé` tonight. So seven in the morning is ' +
        '`es-séé3a sab3a eS-Sob7`.',
      examples: [
        { lb: '3as-séé3a tmééné', ar: 'ع الساعة تمانة', en: 'at eight o clock' },
        { lb: 'las-séé3a 3ashra', ar: 'ل الساعة عشرة', en: 'until ten o clock' },
        { lb: 'Soob es-séé3a setté w-noSS', ar: 'صوب الساعة ستة ونص', en: 'around half past six' },
        { lb: 'es-séé3a sab3a eS-Sob7', ar: 'الساعة سبعة الصبح', en: 'seven in the morning' },
        { lb: 'es-séé3a khamsé ta2riiban', ar: 'الساعة خمسة تقريباً', en: 'almost five' }
      ]
    }
  ],

  vocab: [
    { lb: 'séé3a', ar: 'ساعة', en: 'hour, clock, watch, time', pos: 'n', gender: 'f' },
    { lb: 'd2ii2a', ar: 'دقيقة', en: 'minute', pos: 'n', gender: 'f', note: 'two minutes is d2ii2téén' },
    { lb: 'reb3', ar: 'ربع', en: 'a quarter, fifteen minutes', pos: 'n', gender: 'm' },
    { lb: 'noSS', ar: 'نص', en: 'a half, thirty minutes', pos: 'n', gender: 'm' },
    { lb: 'telt', ar: 'تلت', en: 'a third, twenty minutes', pos: 'n', gender: 'm' },
    { lb: 'ella', ar: 'إلا', en: 'except, minus, to (the hour)', pos: 'prep' },
    { lb: 'we7dé', ar: 'وحدة', en: 'one o clock', pos: 'num', note: 'the counting one is wa7ad' },
    { lb: 'tentéén', ar: 'تنتين', en: 'two o clock', pos: 'num', note: 'the counting two is tnéén' },
    { lb: '7da3ash', ar: 'حدعش', en: 'eleven', pos: 'num' },
    { lb: 'tna3ash', ar: 'تنعش', en: 'twelve', pos: 'num' },
    { lb: 'bakkiir', ar: 'بكير', en: 'early', pos: 'adv' },
    { lb: 'Soob', ar: 'صوب', en: 'towards, around', pos: 'prep', note: 'the hedge for an approximate time' },
    { lb: 'ta2riiban', ar: 'تقريباً', en: 'almost, approximately', pos: 'adv' },
    { lb: 'eS-Sob7', ar: 'الصبح', en: 'in the morning', pos: 'adv' },
    { lb: 'ba3d eD-Dohr', ar: 'بعد الضهر', en: 'afternoon, in the afternoon', pos: 'n' }
  ],

  phrases: [
    {
      lb: 'es-séé3a kam?', ar: 'الساعة كم؟', en: 'what time is it?',
      when: 'the everyday form, noun first',
      reply: 'es-séé3a khamsé', replyEn: 'it is five — the answer needs no verb'
    },
    {
      lb: 'addéé es-séé3a?', ar: 'قديه الساعة؟', en: 'what time is it?',
      when: 'the same question with the question word in front; equally common'
    },
    {
      lb: 'ayya séé3a?', ar: 'أيا ساعة؟', en: 'at what time?',
      when: 'pinning down when something happens, rather than what time it is now'
    },
    {
      lb: 'Soob es-séé3a setté', ar: 'صوب الساعة ستة', en: 'around six',
      when: 'committing to a time without committing to it'
    },
    {
      lb: 'kella reb3 séé3a', ar: 'كلها ربع ساعة', en: 'it is only fifteen minutes',
      when: 'talking somebody into a trip they are reluctant to make'
    },
    {
      lb: 'men aymata la-aymata?', ar: 'من أيمتى لأيمتى؟', en: 'from when until when?',
      when: 'booking anything with a start and an end — a room, a car, a table'
    }
  ],

  drills: [
    { type: 'choice', q: 'How do you ask what time it is?',
      options: ['es-séé3a kam?', 'kam es-séé3a fii?', 'séé3a shou?'], answer: 0,
      explain: 'The noun comes first. addéé es-séé3a? is the other standard version.' },

    { type: 'choice', q: 'It is one o clock. Which number does the clock use?',
      options: ['we7dé', 'wa7ad', 'awwal'], answer: 0,
      explain: 'séé3a is feminine, so the hour takes the feminine number. wa7ad is for counting things.' },

    { type: 'match',
      pairs: [['reb3', 'a quarter'], ['noSS', 'a half'], ['telt', 'twenty minutes'], ['d2ii2a', 'a minute']] },

    { type: 'choice', q: 'What time is `es-séé3a arb3a ella reb3`?',
      options: ['3:45', '4:15', '4:45'], answer: 0,
      explain: 'ella takes the quarter off the hour that is named, so the hour named is the one ahead.' },

    { type: 'build', en: 'It is half past six.',
      tiles: ['es-séé3a', 'setté', 'w-noSS'], extra: ['ella'], answer: 'es-séé3a setté w-noSS' },

    { type: 'type', en: 'It is nine o clock.', answer: 'es-séé3a tes3a', accept: ['es seea tes3a', 'e-séé3a tes3a'] },

    { type: 'choice', q: 'What time is `es-séé3a tléété w-noSS ella khamsé`?',
      options: ['3:25', '3:35', '2:55'], answer: 0,
      explain: 'The half hour is the landmark and five is taken off it. Half past three minus five.' },

    { type: 'gap', en: 'You are meeting a friend and she wants to fix the hour.',
      lines: [
        { who: 'Maya', lb: 'ayya séé3a?', en: 'at what time?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['3as-séé3a tmééné', 'es-séé3a tmééné kam', 'ella tmééné'], answer: 0,
      explain: 'She asked when, not what time it is. 3a means at, and it fuses with the article.' },

    { type: 'conjugate', en: 'do you have a watch on you (asking a woman)', root: 'ma3', person: 'enté',
      options: ['ma3ik', 'ma3ak', 'ma3a', 'ma3o'], answer: 0,
      explain: 'ma3ik séé3a? — the same eight endings, this time on the preposition.' },

    { type: 'build', en: 'At ten in the morning.',
      tiles: ['3as-séé3a', '3ashra', 'eS-Sob7'], extra: ['las-séé3a'], answer: '3as-séé3a 3ashra eS-Sob7' },

    { type: 'choice', q: 'Which word turns a time into an approximation?',
      options: ['Soob', 'bakkiir', 'ella'], answer: 0,
      explain: 'Soob es-séé3a setté — around six. bakkiir is early, ella subtracts.' },

    { type: 'type', en: 'Half an hour.', answer: 'noSS séé3a' },

    { type: 'match',
      pairs: [['bakkiir', 'early'], ['ta2riiban', 'almost'], ['eS-Sob7', 'in the morning'], ['ba3d eD-Dohr', 'in the afternoon']] }
  ],

  quiz: [
    { type: 'choice', q: 'Which of these is 3:35?',
      options: [
        'es-séé3a tléété w-noSS w-khamsé',
        'es-séé3a tléété w-noSS ella khamsé',
        'es-séé3a arb3a ella khamsé'
      ], answer: 0 },

    { type: 'build', en: 'It is a quarter past eleven.',
      tiles: ['es-séé3a', '7da3ash', 'w-reb3'], extra: ['ella', 'tna3ash'], answer: 'es-séé3a 7da3ash w-reb3' },

    { type: 'type', en: 'Until eight o clock.', answer: 'las-séé3a tmééné', accept: ['las seea tmeene'] },

    { type: 'choice', q: 'Why is it `es-séé3a` and never `el-séé3a`?',
      options: [
        'The article melts into an s and we write what is said',
        'Because séé3a is feminine',
        'Because a number follows it'
      ], answer: 0 },

    { type: 'match',
      pairs: [['we7dé', 'one o clock'], ['tentéén', 'two o clock'], ['7da3ash', 'eleven'], ['tna3ash', 'twelve']] },

    { type: 'gap', en: 'A colleague stops you in the corridor.',
      lines: [
        { who: 'Karim', lb: 'addéé es-séé3a?', en: 'what time is it?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['es-séé3a arb3a w-telt', 'ayya séé3a', '3as-séé3a arb3a'], answer: 0,
      explain: 'He asked for the time now, so you give the hour plainly — no 3a, no question back.' },

    { type: 'choice', q: 'What does `kella reb3 séé3a` mean?',
      options: ['it is only fifteen minutes', 'it is a quarter past', 'every quarter of an hour'], answer: 0 },

    { type: 'conjugate', en: 'he has it on him', root: 'ma3', person: 'houwwé',
      options: ['ma3o', 'ma3a', 'ma3on', 'ma3na'], answer: 0 },

    { type: 'choice', q: 'You want to book a car and need the dates. What do you ask?',
      options: ['men aymata la-aymata?', 'ayya séé3a?', 'es-séé3a kam?'], answer: 0 },

    { type: 'type', en: 'Around six thirty.', answer: 'Soob es-séé3a setté w-noSS', accept: ['soob es seea sette w noss'] }
  ]
});
