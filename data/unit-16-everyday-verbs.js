LEB.addUnit({
  id: 'u16',
  stage: 3,
  order: 16,
  title: 'Verbs You Use Daily',
  goal: 'Own sixteen everyday verbs in the two forms that matter first, and build sentences with them.',
  canDo: [
    'Give the "I" form and the "he" form of sixteen common verbs',
    'Tell a vowel root from a consonant root by the sound of its prefix',
    'Say what you do, buy, bring, give and want out of an ordinary day',
    'Recognise the short forms that appear when an ending is added'
  ],

  grammar: [
    {
      heading: 'Sixteen roots cover most of a day',
      body:
        'A very short list of verbs does most of the work in any language, and Lebanese is no ' +
        'exception. The sixteen below are the ones you will hear in your first hour in a Beirut ' +
        'kitchen, taxi or shop. Learning them is not a memory exercise so much as a habit: for each ' +
        'one, learn the **root**, then learn two forms with it — the "I" form and the "he" form.\n\n' +
        'Why those two in particular. They sit at the two ends of the grid, and between them they ' +
        'tell you everything the table would have told you. The "I" form shows what happens to the ' +
        'root when a bare `b-` lands on it. The "he" form gives away the prefix family for free: if ' +
        'it comes out `by-`, the root begins with a vowel; if it comes out `bi-`, the root begins ' +
        'with a consonant. Two forms, and the other six are arithmetic.\n\n' +
        'Read the table with your ears rather than your eyes. `béékol` and `byéékol`; `b2ouul` and ' +
        '`bi2ouul`. Once that alternation is in your mouth you will produce it on verbs nobody has ' +
        'taught you yet, which is exactly the point of learning a language by its machinery.',
      table: {
        headers: ['root', 'I …', 'he …', 'meaning'],
        rows: [
          ['`rouu7`', '`brouu7`', '`birouu7`', 'go'],
          ['`ejé`', '`bejé`', '`byejé`', 'come'],
          ['`éékol`', '`béékol`', '`byéékol`', 'eat'],
          ['`eshrab`', '`beshrab`', '`byeshrab`', 'drink'],
          ['`shouuf`', '`bshouuf`', '`bishouuf`', 'see, have a look'],
          ['`e7ké`', '`be7ké`', '`bye7ké`', 'talk, speak'],
          ['`a3mol`', '`ba3mol`', '`bya3mol`', 'do, make'],
          ['`éékhod`', '`béékhod`', '`byéékhod`', 'take'],
          ['`a3Té`', '`ba3Té`', '`bya3Té`', 'give'],
          ['`7ebb`', '`b7ebb`', '`bi7ebb`', 'like, love'],
          ['`2ouul`', '`b2ouul`', '`bi2ouul`', 'say'],
          ['`e23od`', '`be23od`', '`bye23od`', 'sit, sit down'],
          ['`eshtré`', '`beshtré`', '`byeshtré`', 'buy'],
          ['`erja3`', '`berja3`', '`byerja3`', 'go back, come back'],
          ['`e2dar`', '`be2dar`', '`bye2dar`', 'be able, can'],
          ['`jiib`', '`bjiib`', '`bijiib`', 'bring']
        ]
      }
    },
    {
      heading: 'Roots that start with a vowel',
      body:
        'Half the list begins with a vowel: `a3mol`, `eshrab`, `e23od`, `éékol`. In Arabic script ' +
        'that vowel is carried by a letter of its own, and the prefix has to negotiate with it. ' +
        'Three consequences you can hear.\n\n' +
        'First, the prefix stays **tight**. There is already a vowel waiting, so nothing needs to be ' +
        'added: `bteshrab`, not `beteshrab`. Second, the root vowel **survives into the "I" form**. ' +
        '`a3ref` gives `ba3ref` and `oTlob` gives `boTlob`; the `b-` sits on top of the vowel rather ' +
        'than replacing it. `éékol` and `éékhod` are the extreme case, where what survives is a long ' +
        '`éé` that you must never shorten — `békol` is a different mouth shape and not a word. ' +
        'Third, the "he" form comes out `by-`.\n\n' +
        'Consonant roots do the opposite on all three counts. The prefix needs a support vowel ' +
        '(`bet-`, `bi-`, `men-`), nothing survives into the "I" form because there was nothing there ' +
        '(`b2ouul`, `bshouuf`, `bjiib`), and the "he" form is `bi-`. This is the free test mentioned ' +
        'above, and it works in reverse too: hear a new verb, and its `by-` or `bi-` hands you the ' +
        'root type before you have understood the sentence.',
      table: {
        headers: ['root type', 'ana', 'enta', 'houwwé', 'ne7na'],
        rows: [
          ['vowel — `eshrab`', '`beshrab`', '`bteshrab`', '`byeshrab`', '`mneshrab`'],
          ['vowel — `a3mol`', '`ba3mol`', '`bta3mol`', '`bya3mol`', '`mna3mol`'],
          ['consonant — `shouuf`', '`bshouuf`', '`betshouuf`', '`bishouuf`', '`menshouuf`'],
          ['consonant — `2ouul`', '`b2ouul`', '`bet2ouul`', '`bi2ouul`', '`men2ouul`']
        ]
      },
      warning:
        '`éékol` (eat) and `éékhod` (take) are the two you will get wrong the longest. The `éé` is ' +
        'long and it is the whole root: `béékol`, `btéékol`, `byéékhod`. Say them slowly for a week.'
    },
    {
      heading: 'The vowel that gets squeezed out',
      body:
        'Add an ending to a verb and the middle of the word often collapses. `bya3mol` is "he does"; ' +
        '"they do" is `bya3mlo`, not `bya3molo` — the `o` in the root has been pushed out by the `-o` ' +
        'arriving at the end. The same thing happens to `bte23od`, which becomes `bte23do` for a ' +
        'group and `bte23dé` for a woman.\n\n' +
        'This is not a rule you have to apply deliberately. It is what a mouth does to a word it says ' +
        'twenty times a day, and if you speak at normal speed you will produce it without deciding to. ' +
        'What you do need is to **recognise** the squeezed forms, because on paper `bya3mlo` and ' +
        '`bya3mol` look like two different verbs, and a beginner who has only met the long form will ' +
        'not hear the short one.\n\n' +
        'Not every verb is affected. A root built around a long vowel has nothing to squeeze out and ' +
        'keeps its full shape: `betrouu7é`, `betshouufo`. And some short roots hold on to their vowel ' +
        'anyway — `bteshrabé`, `byerja3o`. So treat the collapsed forms as something to recognise ' +
        'rather than something to work out, and let your ear settle the rest over the next few weeks.',
      table: {
        headers: ['person', '`a3mol` — do', '`e23od` — sit'],
        rows: [
          ['ana', '`ba3mol`', '`be23od`'],
          ['enta', '`bta3mol`', '`bte23od`'],
          ['enté', '`bta3mlé`', '`bte23dé`'],
          ['houwwé', '`bya3mol`', '`bye23od`'],
          ['hiyyé', '`bta3mol`', '`bte23od`'],
          ['ne7na', '`mna3mol`', '`mne23od`'],
          ['ento', '`bta3mlo`', '`bte23do`'],
          ['henné', '`bya3mlo`', '`bye23do`']
        ]
      }
    },
    {
      heading: 'Where the verb points',
      body:
        'A verb on its own rarely finishes a thought. It needs a small word to aim it at a place, a ' +
        'person or a thing, and Lebanese verbs are firm about which small word they take. Learn the ' +
        'verb and its preposition together, as one item, the way you learned `3endé` and `ma3é` as ' +
        'one item each.\n\n' +
        '`3a` (and `3al-`, `3as-`, `3ash-` when the article follows) points at a destination: ' +
        '`brouu7 3al-béét`, `berja3 3ash-sheghl`. `men` marks a source: `beshtré men hoon`. `ma3` ' +
        'brings a companion along, and it takes the endings you already know: `be7ké ma3o`, `bejé ' +
        'ma3na`. `la-` hands something over to somebody: `ba3Té la-Rana`.\n\n' +
        'Two of the sixteen barely need a preposition at all, because what follows them is another ' +
        'verb: `b7ebb` and `be2dar` are almost always the first half of a longer sentence. Something ' +
        'happens to that second verb, and it is the whole subject of the next unit. For now, notice ' +
        'that these two never seem to stand alone.',
      examples: [
        { lb: 'berja3 3al-béét bakkiir', ar: 'بِرْجَع عَ البيت بَكّير', en: 'I come back home early.' },
        { lb: 'beshtré l-khebz men hoon', ar: 'بِشْتْري الخِبز من هون', en: 'I buy the bread from here.' },
        { lb: 'byejé ma3na kell jem3a', ar: 'بْيِجي مَعْنا كِل جِمْعَة', en: 'He comes with us every week.', note: 'ma3 takes the same endings as every other suffix word' },
        { lb: 'mna3Té la-Rana', ar: 'مْنَعْطي لَرَنا', en: 'We give it to Rana.' }
      ],
      warning:
        '`bejé` is me and `byejé` is him — one letter apart, and the preposition after them does ' +
        'nothing to help you tell them apart. Check the prefix against the person before you check ' +
        'anything else in the sentence.'
    }
  ],

  vocab: [
    { lb: 'brouu7', ar: 'بْروح', en: 'I go', pos: 'v', note: 'root rouu7 — he goes: birouu7' },
    { lb: 'bejé', ar: 'بِجي', en: 'I come', pos: 'v', note: 'root ejé — he comes: byejé' },
    { lb: 'béékol', ar: 'باكُل', en: 'I eat', pos: 'v', note: 'root éékol — he eats: byéékol' },
    { lb: 'beshrab', ar: 'بِشرب', en: 'I drink', pos: 'v', note: 'root eshrab — he drinks: byeshrab' },
    { lb: 'bshouuf', ar: 'بْشوف', en: 'I see, I have a look', pos: 'v', note: 'root shouuf — he sees: bishouuf' },
    { lb: 'be7ké', ar: 'بِحْكي', en: 'I talk, I speak', pos: 'v', note: 'root e7ké — he talks: bye7ké' },
    { lb: 'ba3mol', ar: 'بَعْمُل', en: 'I do, I make', pos: 'v', note: 'root a3mol — he does: bya3mol' },
    { lb: 'béékhod', ar: 'باخُد', en: 'I take', pos: 'v', note: 'root éékhod — he takes: byéékhod' },
    { lb: 'ba3Té', ar: 'بَعْطي', en: 'I give', pos: 'v', note: 'root a3Té — he gives: bya3Té' },
    { lb: 'b7ebb', ar: 'بْحِب', en: 'I like, I love', pos: 'v', note: 'root 7ebb — he likes: bi7ebb' },
    { lb: 'b2ouul', ar: 'بْقول', en: 'I say', pos: 'v', note: 'root 2ouul — he says: bi2ouul' },
    { lb: 'be23od', ar: 'بِقْعُد', en: 'I sit, I sit down', pos: 'v', note: 'root e23od — he sits: bye23od' },
    { lb: 'beshtré', ar: 'بِشْتْري', en: 'I buy', pos: 'v', note: 'root eshtré — he buys: byeshtré' },
    { lb: 'berja3', ar: 'بِرْجَع', en: 'I go back, I come back', pos: 'v', note: 'root erja3 — he goes back: byerja3' },
    { lb: 'be2dar', ar: 'بِقْدَر', en: 'I can, I am able to', pos: 'v', note: 'root e2dar — he can: bye2dar' },
    { lb: 'bjiib', ar: 'بْجيب', en: 'I bring', pos: 'v', note: 'root jiib — he brings: bijiib' }
  ],

  phrases: [
    {
      lb: 'shou bta3mol?', ar: 'شو بْتَعْمُل؟', en: 'what do you do? (to a man)',
      when: 'about a job, or about somebody\'s usual day — never about this second'
    },
    {
      lb: 'bshouufak boukra', ar: 'بْشوفَك بُكْرة', en: 'I will see you tomorrow (to a man)',
      when: 'closing a conversation when the next meeting is already agreed',
      reply: 'ma3 es-saléémé', replyEn: 'go with safety'
    },
    {
      lb: 'maa be2dar', ar: 'ما بِقْدَر', en: 'I cannot',
      when: 'turning something down without owing anybody an explanation'
    },
    {
      lb: 'shou betjiib ma3ak?', ar: 'شو بِتْجيب مَعَك؟', en: 'what do you bring with you? (to a man)',
      when: 'sorting out who is bringing what before people arrive'
    },
    {
      lb: 'be7ké ma3o', ar: 'بِحْكي مَعُه', en: 'I will talk to him',
      when: 'taking a problem off somebody else\'s hands'
    },
    {
      lb: 'be23od hoon', ar: 'بِقْعُد هون', en: 'I sit here',
      when: 'claiming a chair, or answering where you usually sit'
    }
  ],

  dialogue: {
    title: 'Deciding what to do with an afternoon',
    setting: 'Two friends on a balcony. Sixteen verbs, one plan, no conclusion.',
    lines: [
      { who: 'Maya', lb: 'shou bta3mol lyoom?', ar: 'شو بتعمل اليوم؟', en: 'what are you doing today?' },
      { who: 'You', you: true, lb: 'maa ba3ref. yemken beshtré shwayy khoDra.', ar: 'ما بعرف. يمكن بشتري شوي خضرة', en: 'I do not know. Maybe I will buy some vegetables.' },
      { who: 'Maya', lb: 'bshouuf. w ba3déén?', ar: 'بشوف. وبعدين؟', en: 'I see. And then?' },
      { who: 'You', you: true, lb: 'berja3 3al-béét w be23od.', ar: 'برجع عالبيت وبقعد', en: 'I go back home and I sit.',
        note: 'be23od is not only "I sit down". It is also "I stay in", which is what it means here.' },
      { who: 'Maya', lb: 'maa betjé ma3é 3and Rita?', ar: 'ما بتجي معي عند ريتا؟', en: 'are you not coming with me to Rita\'s?' },
      { who: 'You', you: true, lb: 'maa be2dar. bass be7ké ma3a boukra.', ar: 'ما بقدر. بس بحكي معها بكرا', say: 'ما بأدر. بس بحكي معها بكرا', en: 'I cannot. But I will talk to her tomorrow.' },
      { who: 'Maya', lb: 'Tayyeb. bjiib shii ma3é?', ar: 'طيب. بجيب شي معي؟', en: 'all right. Shall I bring something?' },
      { who: 'You', you: true, lb: 'jiib 2ahwe. bshouufak boukra.', ar: 'جيب قهوة. بشوفك بكرا', say: 'جيب أهوة. بشوفك بكرا', en: 'bring coffee. I will see you tomorrow.' }
    ]
  },

  culture: {
    heading: 'One tense doing three jobs',
    icon: 'doing',
    body:
      'Look at `bshouufak boukra` — I see you tomorrow. There is no future marker in it, and yet it ' +
      'clearly means tomorrow. The b-present in Lebanese covers habit, general truth, and any near ' +
      'future that feels settled. Adding `ra7` from unit 25 would not be wrong, it would just be ' +
      'more deliberate.\n\n' +
      'The same width shows up in `bjiib shii?` — shall I bring something? A question in the plain ' +
      'present is an offer. English needs a separate word for that and Lebanese does not.\n\n' +
      'This is why the sixteen verbs in this unit are worth more than sixteen words. Each one covers ' +
      'a wider range than its English translation, and the ranges overlap in ways that let you say ' +
      'far more than you have learned. `bshouuf` is I see, I will have a look, let me think about ' +
      'it, and — with a flat delivery — we shall see, which usually means no.',
  },

  drills: [
    { type: 'conjugate', en: 'he brings', root: 'jiib', person: 'houwwé', tense: 'present',
      options: ['bijiib', 'bjiib', 'betjiib', 'menjiib'], answer: 0,
      explain: 'jiib starts with a consonant, so the "he" prefix is bi-, not by-.' },

    { type: 'conjugate', en: 'we eat', root: 'éékol', person: 'ne7na', tense: 'present',
      options: ['mnéékol', 'béékol', 'btéékol', 'byéékol'], answer: 0,
      explain: 'The "we" prefix mn- lands straight on the long éé.' },

    { type: 'conjugate', en: 'they sit', root: 'e23od', person: 'henné', tense: 'present',
      options: ['bye23do', 'bte23do', 'bye23od', 'mne23od'], answer: 0,
      explain: 'by- for them, plus -o at the end, and the root vowel gets squeezed out on the way.' },

    { type: 'conjugate', en: 'you buy — to one woman', root: 'eshtré', person: 'enté', tense: 'present',
      options: ['bteshtré', 'beshtré', 'byeshtré', 'bteshtro'], answer: 0,
      explain: 'The root already ends in -é, so the woman ending has nowhere to go: same form as "you (m)" and "she".' },

    { type: 'match',
      pairs: [['beshtré', 'I buy'], ['bjiib', 'I bring'], ['ba3Té', 'I give'], ['béékhod', 'I take']] },

    { type: 'choice', q: 'A verb whose "he" form starts with bi- tells you what about its root?',
      options: ['It starts with a consonant', 'It starts with a vowel', 'It ends in -é'], answer: 0,
      explain: 'bishouuf, bi2ouul, bijiib. Vowel roots give by-: byeshrab, bya3mol.' },

    { type: 'build', en: 'We come back home every day.',
      tiles: ['mnerja3', '3al-béét', 'kell', 'yoom'], extra: ['berja3'], answer: 'mnerja3 3al-béét kell yoom' },

    { type: 'gap', en: 'A friend is trying to get you out of the house on a work night.',
      lines: [
        { who: 'Ziad', lb: 'btejé ma3na 3ac-cinema?', en: 'are you coming with us to the cinema?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['maa be2dar lyoom', 'maa bye2dar lyoom', 'maa bte2dar lyoom'], answer: 0,
      explain: 'You are talking about yourself, so be2dar, with maa in front.' },

    { type: 'type', en: 'I see, I have a look.', answer: 'bshouuf' },

    { type: 'choice', q: 'Which one is "they do"?',
      options: ['bya3mlo', 'bya3molo', 'bta3mlo'], answer: 0,
      explain: 'The root vowel drops when the -o arrives. bta3mlo would be a group you are speaking to.' },

    { type: 'conjugate', en: 'she gives', root: 'a3Té', person: 'hiyyé', tense: 'present',
      options: ['bta3Té', 'ba3Té', 'bya3Té', 'mna3Té'], answer: 0,
      explain: 'She takes the same form as "you (m)", and the root ending -é absorbs the woman ending too.' },

    { type: 'match',
      pairs: [['bshouuf', 'I see'], ['bishouuf', 'he sees'], ['b2ouul', 'I say'], ['bi2ouul', 'he says']] },

    { type: 'gap', en: 'You are at the door of a shop with somebody else\'s list.',
      lines: [
        { who: 'Nour', lb: 'shou betjiib ma3ak?', en: 'what are you bringing with you?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['bjiib el-khebz', 'bijiib el-khebz', 'betjiib el-khebz'], answer: 0,
      explain: 'bjiib is me. bijiib is him, and betjiib is the question you were just asked.' },

    { type: 'type', en: 'he comes', answer: 'byejé', accept: ['byeje'] }
  ],

  quiz: [
    { type: 'conjugate', en: 'we talk', root: 'e7ké', person: 'ne7na', tense: 'present',
      answer: 'mne7ké', accept: ['mne7ke'] },

    { type: 'choice', q: 'Which pair is right — "I take" and "he takes"?',
      options: ['béékhod, byéékhod', 'bekhod, bikhod', 'béékhod, biéékhod'], answer: 0,
      explain: 'The éé is the root and it never shortens; and a vowel root always gives by-.' },

    { type: 'conjugate', en: 'you drink — to one woman', root: 'eshrab', person: 'enté', tense: 'present',
      options: ['bteshrabé', 'bteshrab', 'byeshrabé', 'bteshrabo'], answer: 0 },

    { type: 'build', en: 'He buys the bread from here every day.',
      tiles: ['byeshtré', 'l-khebz', 'men', 'hoon', 'kell', 'yoom'], extra: ['beshtré'],
      answer: 'byeshtré l-khebz men hoon kell yoom' },

    { type: 'gap', en: 'Your neighbour has caught you on the stairs with two heavy bags.',
      lines: [
        { who: 'Rima', lb: 'wéén betrouu7?', en: 'where are you going?' },
        { who: 'You', you: true, blank: true },
        { who: 'Rima', lb: 'bséé3dak', en: 'I will help you' }
      ],
      options: ['berja3 3al-béét', 'byerja3 3al-béét', 'bterja3 3al-béét'], answer: 0 },

    { type: 'match',
      pairs: [['bye23od', 'he sits'], ['bta3mlé', 'you do — one woman'], ['menshouuf', 'we see'], ['bi7ebb', 'he likes']] },

    { type: 'type', en: 'I cannot.', answer: 'maa be2dar', accept: ['ma be2dar'] },

    { type: 'choice', q: 'Why is beteshrab not a Lebanese word?',
      options: [
        'eshrab already begins with a vowel, so the prefix stays tight: bteshrab',
        'The prefix bet- does not exist',
        'Only "we" takes a support vowel'
      ], answer: 0 },

    { type: 'conjugate', en: 'they say', root: '2ouul', person: 'henné', tense: 'present',
      options: ['bi2ouulo', 'bet2ouulo', 'by2ouulo', 'men2ouul'], answer: 0 },

    { type: 'choice', q: 'You hear a verb you have never met and it starts with by-. What do you already know?',
      options: [
        'It is "he" or "they", and the root begins with a vowel',
        'It is "we", and the root begins with a consonant',
        'It is a question'
      ], answer: 0 }
  ]
});
