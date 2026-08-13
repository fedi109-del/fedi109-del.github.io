LEB.addUnit({
  id: 'u03',
  stage: 1,
  order: 3,
  title: 'This and That',
  goal: 'Point at something, name it, and ask the questions that get you through a day in the street.',
  canDo: [
    'Point at a thing and say what it is, with the right word for its gender',
    'Ask where something is, and hear the article the way it is actually said',
    'Ask what, who, where, how and why without using a verb',
    'Say yes and no in a way that leaves no doubt'
  ],

  grammar: [
    {
      heading: 'Pointing costs one word',
      body:
        'Lebanese points with two words, and the one you reach for depends on the thing you are ' +
        'pointing at, not on how far away it is. `hayda` goes with a masculine noun, `haydé` with a ' +
        'feminine one. English splits this from that by distance; Lebanese does not bother. The same ' +
        'word covers both, and your hand, your eyes or your tone carry the rest.\n\n' +
        'Where it gets interesting is the article. Put `hayda` in front of a bare noun and you have ' +
        'made a whole sentence: `hayda béét` — this is a house. Put the article on the noun and you ' +
        'have made a label instead: `hayda l-béét` — this house, with the rest of the sentence still ' +
        'to come. One small `l-` is the difference between saying something and naming something.\n\n' +
        '`haay` is worth taking on board straight away too. It is the everyday feminine one, the word ' +
        'a shopkeeper uses while handing something across the counter, and it behaves exactly like ' +
        '`haydé`.\n\n' +
        'For more than one thing there is a separate plural word, and it arrives later in the course. ' +
        'Until then, point and name one thing at a time. Nobody will hold it against you.',
      table: {
        headers: ['word', 'used with', 'example'],
        rows: [
          ['`hayda`', 'a masculine noun', '`hayda béét` — this is a house'],
          ['`haydé`', 'a feminine noun', '`haydé siyyaara` — this is a car'],
          ['`haay`', 'a feminine noun, very common', '`haay eT-Taawlé` — this table']
        ]
      },
      examples: [
        { lb: 'hayda l-bééb', ar: 'هَيْدا الباب', en: 'this door', note: 'a label, not yet a sentence' },
        { lb: 'haydé siyyaara', ar: 'هَيْدي سيّارة', en: 'This is a car.' },
        { lb: 'shou hayda?', ar: 'شو هَيْدا؟', en: 'What is this?' }
      ],
      warning:
        'The gender belongs to the thing, not to you. `Taawlé` is feminine whoever is speaking, so it ' +
        'is always `haydé eT-Taawlé`, never `hayda`. Getting this wrong is harmless, but getting it ' +
        'right from the first week saves you re-learning it later.'
    },
    {
      heading: 'Where is the …?',
      body:
        '`wéén` is the most useful word a newcomer owns. It needs no verb: `wéén` plus a noun with ' +
        'the article on it is already a complete question, and the answer usually comes back as a ' +
        'pointed finger.\n\n' +
        'The catch is the article itself. It is written `el-`, but it does not keep that shape. In ' +
        'front of roughly half the alphabet — the sun letters — the `l` disappears into the next ' +
        'consonant and doubles it. `el-` plus `siyyaara` comes out as `es-siyyaara`. `el-` plus ' +
        '`Taawlé` is `eT-Taawlé`. `el-` plus `téléphon` is `et-téléphon`. In front of the other half, ' +
        'the moon letters, nothing happens at all: `el-béét`, `el-bééb`, `el-kiis`.\n\n' +
        'Do not memorise two lists on day one. Say the word slowly and let your mouth take the lazy ' +
        'road, because the assimilation is exactly what your mouth wants to do anyway. What matters ' +
        'is that you write it as it is said, since that is how you will hear it.\n\n' +
        'After a preposition the article usually loses its first vowel and fuses onto the word in ' +
        'front: `bel-béét` — at home, `besh-sheghl` — at work. Same article, less of it.',
      table: {
        headers: ['on its own', 'with the article', 'what happened'],
        rows: [
          ['`béét`', '`el-béét`', 'b is a moon letter — nothing changes'],
          ['`bééb`', '`el-bééb`', 'b again, no change'],
          ['`kiis`', '`el-kiis`', 'k is a moon letter'],
          ['`ouuDa`', '`el-ouuDa`', 'starts with a vowel, nothing to melt into'],
          ['`siyyaara`', '`es-siyyaara`', 's is a sun letter — the l is swallowed'],
          ['`téléphon`', '`et-téléphon`', 't is a sun letter'],
          ['`Taawlé`', '`eT-Taawlé`', 'T is a sun letter, and it stays heavy'],
          ['`Tarii2`', '`eT-Tarii2`', 'the same heavy T'],
          ['`souu2`', '`es-souu2`', 's again']
        ]
      },
      examples: [
        { lb: 'wéén el-bééb?', ar: 'وين الباب؟', en: 'Where is the door?' },
        { lb: 'wéén es-souu2?', ar: 'وين السوق؟', en: 'Where is the market?' },
        { lb: 'wéén et-téléphon?', ar: 'وين التيليفون؟', en: 'Where is the phone?' }
      ]
    },
    {
      heading: 'Six questions, no machinery',
      body:
        'Asking a question in Lebanese is almost insultingly easy. The question word goes at the ' +
        'front and nothing else moves. There is no do to insert, no verb to flip around, no auxiliary ' +
        'to hunt for. `el-bééb` is the door; `wéén el-bééb` is a question. That is the whole ' +
        'mechanism.\n\n' +
        'Three of these you already met when you learned to give your name — `shou`, `miin`, `wéén`. ' +
        'The three new ones are `kiif` for how, `léésh` for why, and `ayya` for which, the one you ' +
        'use when there are two things in front of you and you have to choose.\n\n' +
        '`léésh` deserves a note. The answer to it usually starts with `la2enno`, because, and from ' +
        'there the sentence carries on normally. You are not expected to produce that yet; you are ' +
        'expected to recognise it, so that when someone answers your why you know the answer has ' +
        'started.\n\n' +
        'Questions can also be built with no question word at all. Say a statement and lift your ' +
        'voice at the end and it becomes a question, exactly as in English. `hayda l-bééb` said flat ' +
        'means this door; said with a rise it asks whether this is the door.',
      table: {
        headers: ['word', 'meaning', 'example'],
        rows: [
          ['`shou`', 'what', '`shou hayda?` — what is this?'],
          ['`miin`', 'who', '`miin haydé?` — who is she?'],
          ['`wéén`', 'where', '`wéén et-téléphon?` — where is the phone?'],
          ['`kiif`', 'how', '`kiif el-béét?` — how is the house?'],
          ['`léésh`', 'why', '`léésh hayda?` — why this one?'],
          ['`ayya`', 'which', '`ayya siyyaara?` — which car?']
        ]
      },
      examples: [
        { lb: 'shou hayda?', ar: 'شو هَيْدا؟', en: 'What is this?', note: 'the single most useful sentence for a beginner' },
        { lb: 'ayya Tarii2?', ar: 'أي طَريق؟', en: 'Which road?' },
        { lb: 'léésh la2!', ar: 'ليش لأ!', en: 'Why not!', note: 'said as agreement, not as a question' }
      ]
    },
    {
      heading: 'Yes, no, and the third one',
      body:
        'Lebanese gives you two straightforward answers and one that English has no equivalent for at ' +
        'all.\n\n' +
        '`na3am` is a clear, polite yes. It is what a shopkeeper says when you ask whether they have ' +
        'something. `la2` is no, short and flat; you will also see it written `laa2`, which is the ' +
        'same word with the vowel drawn out, and it turns up inside `léésh la2!` — why not — where it ' +
        'means the opposite of a refusal.\n\n' +
        'Then there is `mbala`. It exists for one job only: contradicting a negative question. If ' +
        'someone asks you a question shaped as a no — is this not the door, do you not have one — and ' +
        'the truth is yes, `na3am` leaves everyone unsure which half of the question you agreed with. ' +
        '`mbala` settles it. Yes, it is. Yes, I do.\n\n' +
        'English speakers usually reach for a whole sentence here to escape the ambiguity. Lebanese ' +
        'has a word for it, and using that word is one of the small things that makes people stop ' +
        'slowing down for you.',
      table: {
        headers: ['word', 'meaning', 'when'],
        rows: [
          ['`na3am`', 'yes', 'plain agreement, polite and clear'],
          ['`la2`', 'no', 'plain refusal; also written `laa2`'],
          ['`mbala`', 'yes it is, yes I do', 'only to contradict a negative question']
        ]
      },
      warning:
        'Someone says `mesh hayda l-bééb?` — is this not the door? It is. The answer is `mbala`, not ' +
        '`na3am`. Answering a negative question with `na3am` leaves your listener working out which ' +
        'half you meant, and they will usually just ask again.'
    }
  ],

  vocab: [
    { lb: 'hayda', ar: 'هَيْدا', en: 'this, that (a masculine thing)', pos: 'pron' },
    { lb: 'haydé', ar: 'هَيْدي', en: 'this, that (a feminine thing)', pos: 'pron' },
    { lb: 'kiif', ar: 'كيف', en: 'how', pos: 'adv' },
    { lb: 'léésh', ar: 'ليش', en: 'why', pos: 'adv' },
    { lb: 'ayya', ar: 'أي', en: 'which', pos: 'pron' },
    { lb: 'na3am', ar: 'نَعَم', en: 'yes', pos: 'phr' },
    { lb: 'la2', ar: 'لأ', en: 'no', pos: 'phr', note: 'often written laa2 as well' },
    { lb: 'mbala', ar: 'مْبَلا', en: 'yes it is (answering a negative question)', pos: 'phr' },
    { lb: 'béét', ar: 'بيت', en: 'house, home', pos: 'n', gender: 'm' },
    { lb: 'siyyaara', ar: 'سيّارة', en: 'car', pos: 'n', gender: 'f' },
    { lb: 'téléphon', ar: 'تيليفون', en: 'telephone', pos: 'n', gender: 'm', note: 'a French loanword, and completely normal Lebanese' },
    { lb: 'Taawlé', ar: 'طاوْلة', en: 'table', pos: 'n', gender: 'f' },
    { lb: 'bééb', ar: 'باب', en: 'door', pos: 'n', gender: 'm' },
    { lb: 'Tarii2', ar: 'طَريق', en: 'road, way', pos: 'n', note: 'the plural is Tor2aat' },
    { lb: 'souu2', ar: 'سوق', en: 'market', pos: 'n', gender: 'm' },
    { lb: 'ouuDa', ar: 'أوضة', en: 'room', pos: 'n', gender: 'f' }
  ],

  phrases: [
    {
      lb: 'shou hayda?', ar: 'شو هَيْدا؟', en: 'what is this?',
      when: 'pointing at something whose name you do not know yet',
      reply: 'hayda …', replyEn: 'this is a …, followed by the word you were after'
    },
    {
      lb: 'wéén es-souu2?', ar: 'وين السوق؟', en: 'where is the market?',
      when: 'the shape of every question about a place: wéén plus the noun with its article'
    },
    {
      lb: 'miin haydé?', ar: 'مين هَيْدي؟', en: 'who is she?',
      when: 'about a woman, when someone else can answer for you'
    },
    {
      lb: 'léésh la2!', ar: 'ليش لأ!', en: 'why not!',
      when: 'accepting a suggestion with some warmth, not asking a question'
    },
    {
      lb: 'akiid', ar: 'أَكيد', en: 'of course, sure',
      when: 'agreeing without hesitating; also the answer to a favour you are happy to do'
    },
    {
      lb: 'Tayyeb', ar: 'طَيِّب', en: 'all right, fine',
      when: 'accepting what was just said and moving the conversation on'
    },
    {
      lb: 'mbala!', ar: 'مْبَلا!', en: 'yes it is!',
      when: 'someone has asked you a question shaped as a no, and the truth is yes'
    }
  ],

  dialogue: {
    title: 'Lost one street from the market',
    setting: 'You know the market is close. You cannot see it. A man is unloading crates outside a shop.',
    lines: [
      { who: 'You', you: true, lb: '3afwan, wéén es-souu2?', ar: 'عفوا، وين السوق؟', en: 'excuse me, where is the market?' },
      { who: 'Man', lb: 'es-souu2? 3ala Tuul.', ar: 'السوق؟ على طول', en: 'the market? Straight ahead',
        note: '3ala Tuul is the answer you will get most often. It means straight on, and it is said with the hand.' },
      { who: 'You', you: true, lb: 'shou hayda?', ar: 'شو هيدا؟', en: 'what is that?',
        note: 'You are pointing at the big door at the end of the road.' },
      { who: 'Man', lb: 'hayda l-bééb. es-souu2 wara l-bééb.', ar: 'هيدا الباب. السوق ورا الباب', en: 'that is the door. The market is behind the door.' },
      { who: 'You', you: true, lb: 'akiid? mesh haydé eT-Tarii2?', ar: 'أكيد؟ مش هيدي الطريق؟', en: 'are you sure? Is this not the road?' },
      { who: 'Man', lb: 'mbala! bass el-bééb a2rab.', ar: 'مبلى! بس الباب أقرب', en: 'yes it is! But the door is nearer.',
        note: 'mbala is the yes that contradicts a no. Answering na3am here would agree with your doubt.' }
    ]
  },

  culture: {
    heading: 'Nobody says they do not know',
    icon: 'compass',
    body:
      'Ask for directions in Beirut and you will get them. You will get them whether or not the ' +
      'person knows the way. Sending someone off empty-handed feels unkind, so a guess is offered ' +
      'with the same confidence as a fact, and `3ala Tuul` — straight ahead — does a lot of work it ' +
      'was never meant to do.\n\n' +
      'This is not being lied to. It is generosity with the wrong tool. The practical answer is to ' +
      'ask two people, walk in the direction both of them agreed on, and use landmarks rather than ' +
      'street names: the door, the bakery, the church. Almost nobody navigates Beirut by street ' +
      'name, including the people who live there and the drivers who work there.\n\n' +
      'Note what `mbala` does in that last line. Lebanese keeps a separate word for the yes that ' +
      'overturns a negative — the one English has to fake with a stressed "yes it **is**". Use ' +
      '`na3am` there and you have accidentally agreed that it is not the road.',
  },

  drills: [
    { type: 'choice', q: 'You are pointing at a siyyaara, and siyyaara is feminine. Which word?',
      options: ['haydé', 'hayda', 'wéén'], answer: 0,
      explain: 'hayda goes with masculine nouns. The gender belongs to the thing, not to the speaker.' },

    { type: 'match',
      pairs: [['shou', 'what'], ['miin', 'who'], ['wéén', 'where'], ['léésh', 'why']] },

    { type: 'build', en: 'Where is the door?',
      tiles: ['wéén', 'el-bééb'], extra: ['haydé'], answer: 'wéén el-bééb' },

    { type: 'choice', q: 'Which is written the way it is actually said?',
      options: ['es-siyyaara', 'el-siyyaara', 'esh-siyyaara'], answer: 0,
      explain: 's is a sun letter: the l of el- is swallowed and the s doubles.' },

    { type: 'gap', en: 'A friend points at a covered building full of stalls and asks what it is.',
      lines: [
        { who: 'Samir', lb: 'shou hayda?', en: 'what is this?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['hayda souu2', 'haydé souu2', 'wéén es-souu2'], answer: 0,
      explain: 'souu2 is masculine, so hayda. And no word for is is needed anywhere in the sentence.' },

    { type: 'type', en: 'What is this?', answer: 'shou hayda' },

    { type: 'choice', q: 'Someone asks "mesh hayda l-bééb?" — is this not the door? It is. What do you say?',
      options: ['mbala', 'na3am', 'la2'], answer: 0,
      explain: 'mbala is the yes that contradicts a negative question. na3am here leaves your listener guessing.' },

    { type: 'match',
      pairs: [['béét', 'house'], ['siyyaara', 'car'], ['bééb', 'door'], ['souu2', 'market']] },

    { type: 'build', en: 'This is a table.',
      tiles: ['haydé', 'Taawlé'], extra: ['hayda'], answer: 'haydé Taawlé' },

    { type: 'choice', q: 'How do you ask "which car"?',
      options: ['ayya siyyaara', 'shou siyyaara', 'miin siyyaara'], answer: 0,
      explain: 'ayya is the word for choosing between things that are both in front of you.' },

    { type: 'gap', en: 'You are in a flat you do not know, and a phone is ringing somewhere.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Rita', lb: 'bel-ouuDa', en: 'in the room' }
      ],
      options: ['wéén et-téléphon?', 'shou et-téléphon?', 'miin et-téléphon?'], answer: 0,
      explain: 'wéén asks for a place. Note the article: t is a sun letter, so el- becomes et-.' },

    { type: 'type', en: 'Where is the market?', answer: 'wéén es-souu2' },

    { type: 'choice', q: 'What is the difference between "hayda béét" and "hayda l-béét"?',
      options: [
        'The first is a sentence — this is a house; the second is a label — this house',
        'The first is masculine and the second is feminine',
        'They mean the same, the article is optional'
      ], answer: 0 },

    { type: 'match',
      pairs: [['na3am', 'yes'], ['la2', 'no'], ['mbala', 'yes, contradicting a no'], ['ayya', 'which']] }
  ],

  quiz: [
    { type: 'choice', q: 'You want to say "this is a car". Which is right?',
      options: ['haydé siyyaara', 'hayda siyyaara', 'haydé es-siyyaara'], answer: 0,
      explain: 'siyyaara is feminine, and with no article the sentence says this IS a car.' },

    { type: 'gap', en: 'You are in a small shop and you need directions to the market.',
      lines: [
        { who: 'You', you: true, blank: true },
        { who: 'Shopkeeper', lb: 'es-souu2 3a Tarii2 el-madiiné', en: 'the market is on the city road' }
      ],
      options: ['wéén es-souu2?', 'shou es-souu2?', 'ayya souu2?'], answer: 0 },

    { type: 'type', en: 'Where is the phone?', answer: 'wéén et-téléphon', accept: ['wéén el-téléphon'] },

    { type: 'match',
      pairs: [['kiif', 'how'], ['léésh', 'why'], ['ayya', 'which'], ['shou', 'what']] },

    { type: 'choice', q: 'Why is it written eT-Taawlé and not el-Taawlé?',
      options: [
        'T is a sun letter, so the l is swallowed and the T doubles',
        'Because Taawlé is feminine',
        'Because Taawlé came into Lebanese from another language'
      ], answer: 0 },

    { type: 'build', en: 'Which road?',
      tiles: ['ayya', 'Tarii2'], extra: ['wéén'], answer: 'ayya Tarii2' },

    { type: 'choice', q: 'Someone asks "mesh haydé s-siyyaara?" and it is. Which answer removes all doubt?',
      options: ['mbala', 'na3am', 'la2'], answer: 0 },

    { type: 'type', en: 'Who is she? (pointing at a woman)', answer: 'miin haydé' },

    { type: 'choice', q: 'A man points and says "hayda s-souu2". What has he done?',
      options: [
        'Named a particular market — this market',
        'Said that this is a market',
        'Asked where the market is'
      ], answer: 0,
      explain: 'The article turns the sentence back into a label. Without it, hayda souu2 would be this is a market.' }
  ]
});
