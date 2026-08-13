LEB.addUnit({
  id: 'u36',
  stage: 5,
  order: 36,
  title: 'What I Think',
  goal: 'Say what you prefer and why, put a comparison at full strength, and disagree with someone without the conversation going cold.',
  canDo: [
    'State a preference and back it with a reason in one sentence',
    'Use bi-ktiir, aktar shii and abadan at the right end of the scale',
    'Build the superlative out of the comparative you already know',
    'Recognise when yemken and 7asab are polite refusals rather than open answers'
  ],

  grammar: [
    {
      heading: 'Preferring, and saying why',
      body:
        'Two verbs carry most opinions. `b7ebb` is liking in general, and `bfaDDel` is preferring ' +
        'one thing over another. Both are consonant-root verbs, so they take the heavier prefixes ' +
        '`bet-`, `bi-`, `men-`, and both hand the b-drop to whatever verb follows them: ' +
        '`bfaDDel eshrab shaay` — I would rather drink tea.\n\n' +
        'Lebanese has no neat "X rather than Y" frame to lean on. What people actually do is state ' +
        'the preference and then justify it, and `la2enno` is what does the joining: ' +
        '`bfaDDel el-jabal la2enno arya7`. If you want the two things side by side instead, reach ' +
        'for the comparative and let it do the comparing: `l-jabal arya7 men el-madiiné`.\n\n' +
        'There is one trap here that catches every English speaker. About a thing that is in front ' +
        'of you right now — a dress on a hanger, a flat you have just walked into — Lebanese uses ' +
        'the **past**: `7abbayt hayda l-fostaan` means "I like this dress", not "I liked it". ' +
        '`b7ebb el-fsatiin el-7amra` would be a statement about red dresses in general, which is ' +
        'not what the shop assistant asked you.',
      table: {
        headers: ['person', 'I prefer', 'I like'],
        rows: [
          ['ana', '`bfaDDel`', '`b7ebb`'],
          ['enta', '`betfaDDel`', '`bet7ebb`'],
          ['enté', '`betfaDDelé`', '`bet7ebbé`'],
          ['houwwé', '`bifaDDel`', '`bi7ebb`'],
          ['hiyyé', '`betfaDDel`', '`bet7ebb`'],
          ['ne7na', '`menfaDDel`', '`men7ebb`'],
          ['ento', '`betfaDDelo`', '`bet7ebbo`'],
          ['henné', '`bifaDDelo`', '`bi7ebbo`']
        ]
      },
      warning:
        '`b7ebb` about a specific thing in front of you sounds oddly theoretical. `7abbayt` is ' +
        'the reaction; `b7ebb` is the policy.'
    },

    {
      heading: 'Turning it up and turning it down',
      body:
        'An opinion is only as useful as the dial attached to it, and Lebanese gives you a full ' +
        'set of settings.\n\n' +
        '`ktiir` is the general intensifier and goes in front of an ordinary adjective: ' +
        '`ktiir mnii7`. `bi-ktiir` is a different creature — it means "by a lot" and it attaches ' +
        'only to a **comparative**. `arya7 bi-ktiir` is much more comfortable; putting `bi-ktiir` ' +
        'on a plain adjective produces nothing.\n\n' +
        '`aktar shii` is "most of all" and lands at the end of the sentence: ' +
        '`b7ebb esh-shaay aktar shii`. `khSouuSatan` narrows a broad statement down to the part ' +
        'you really meant. `shwayy` takes the temperature down, and `aw2aat` admits that the thing ' +
        'is not always true.\n\n' +
        'At the bottom of the scale sits `abadan`, and it never travels alone. It needs a negative ' +
        'in front of it and it reinforces that negative: `maa b7ebb eT-Tor2aat eD-Dayy2a abadan` — ' +
        'I do not like narrow roads at all. Using `abadan` in a positive sentence is not a shade ' +
        'of meaning, it is a broken sentence.',
      table: {
        headers: ['word', 'where it goes', 'example'],
        rows: [
          ['`ktiir`', 'before a plain adjective', '`ktiir mnii7`'],
          ['`bi-ktiir`', 'after a comparative only', '`arya7 bi-ktiir`'],
          ['`aktar shii`', 'at the end of the sentence', '`b7ebb esh-shaay aktar shii`'],
          ['`khSouuSatan`', 'introducing the narrowed case', '`b7ebb el-jabal, khSouuSatan bes-Sééf`'],
          ['`shwayy`', 'after the adjective or the verb', '`met3eb shwayy`'],
          ['`aw2aat`', 'usually first', '`aw2aat bet3ab`'],
          ['`abadan`', 'last, and only with maa', '`maa b7ebbo abadan`']
        ]
      }
    },

    {
      heading: 'The most, out of the comparative you already have',
      body:
        'Lebanese does not build a separate superlative. It reuses the comparative, and the ' +
        'article does the rest.\n\n' +
        'On its own, the `aC-CaC` shape means "more": `arya7`, `aTyab`, `akram`, `azghar`, ' +
        '`akbar`. Add `men` and you get the full comparison — `esh-shaay a7la men el-2ahwe`. That ' +
        'form never changes for gender or number; one word covers everything.\n\n' +
        'Now put `el-` in front of it and attach it to a definite noun, and the same word becomes ' +
        '"the most": `l-2yéés el-azghar` is the smaller size, and in the right context the ' +
        'smallest. This is the one place where the comparative bends — it takes the article to ' +
        'match its noun, having refused to agree with anything else.\n\n' +
        'For a superlative attached to a verb rather than a noun, use `aktar shii`: ' +
        '`b7ebb esh-shaay aktar shii` — what I like most is tea. Two different tools, two ' +
        'different jobs, and no overlap: `el-` + comparative modifies a noun, `aktar shii` ' +
        'modifies a verb.\n\n' +
        'Whether `l-azghar` comes out as "the smaller" or "the smallest" is decided entirely by ' +
        'the situation. In a shop with two sizes on the counter it is "the smaller"; in a ' +
        'catalogue it is "the smallest". Lebanese sees no reason to mark the difference, and once ' +
        'you stop looking for the mark it stops being confusing.',
      table: {
        headers: ['plain', 'more', 'the most'],
        rows: [
          ['`mourii7` — comfortable', '`arya7 men`', '`l-arya7`'],
          ['`Tayyeb` — kind, tasty', '`aTyab men`', '`l-aTyab`'],
          ['`kariim` — generous', '`akram men`', '`l-akram`'],
          ['`zghiir` — small', '`azghar men`', '`l-azghar`'],
          ['`kbiir` — big', '`akbar men`', '`l-akbar`']
        ]
      },
      warning:
        '`a7la` (nicer, nicest) and `a7san` (better) are used constantly and are worth learning ' +
        'as they stand, without hunting for the plain adjective behind them.'
    },

    {
      heading: 'Disagreeing without a collision',
      body:
        'This is a fact about how the language is used, and it costs learners more than any point ' +
        'of grammar in this unit.\n\n' +
        'A flat contradiction is rare in Lebanese conversation. The normal move is to concede ' +
        'first and then add: `ma3ak 7a2, bass…`. You are not being insincere — you are signalling ' +
        'that the disagreement is about the matter and not about the person, and the sentence ' +
        'after `bass` can be as hard as you like once that signal has been sent.\n\n' +
        'The consequence that matters is on the receiving end. `yemken` and `7asab` are frequently ' +
        'not open answers at all. When you propose something and get `yemken`, or you ask which ' +
        'restaurant and get `7asab`, you have in many cases been told no in the politest available ' +
        'form. A learner who hears "maybe" and books the table has misread the conversation, not ' +
        'been misled.\n\n' +
        'The other end of the scale is worth calibrating too. `mesh 3aaTel` looks like faint ' +
        'praise and is not: it means the thing is genuinely good, said by someone who does not ' +
        'gush. `ééh wallah` is full-hearted agreement. And `Saraa7a` in front of a harsh opinion ' +
        'is what licenses it — it announces that you are about to be blunt and asks for the ' +
        'permission in advance.',
      table: {
        headers: ['what you say', 'what it is worth'],
        rows: [
          ['`ééh wallah`', 'wholehearted agreement'],
          ['`akiid`', 'of course, no argument at all'],
          ['`Sa7`', 'that is correct — about a fact'],
          ['`ma3ak 7a2`', 'you have a point, and I am about to add mine'],
          ['`mesh 3aaTel`', 'genuinely good, said without fuss'],
          ['`yemken`', 'maybe — very often a soft no'],
          ['`7asab`', 'it depends — usually a softer no'],
          ['`Saraa7a…`', 'a warning that a blunt opinion is coming']
        ]
      },
      warning:
        '`mesh bass héék` is how you announce a second argument before delivering it. It buys you ' +
        'the floor for one more sentence, which in an argument is worth having.'
    }
  ],

  vocab: [
    { lb: 'bfaDDel', ar: 'بْفَضِّل', en: 'I prefer', pos: 'v', note: 'root faDDel; he prefers bifaDDel' },
    { lb: '7abbayt', ar: 'حَبِّيت', en: 'I like this (a thing in front of me)', pos: 'v', note: 'past in form, present in meaning' },
    { lb: 'ra2y', ar: 'رَأْي', en: 'opinion', pos: 'n', gender: 'm', note: 'pl aaraa2; my opinion is ra2yé' },
    { lb: 'be3te2ed', ar: 'بِعْتِقِد', en: 'I reckon, I think', pos: 'v', note: 'root e3te2ed' },
    { lb: 'bi-ktiir', ar: 'بِكْتير', en: 'much more, by a lot', pos: 'adv', note: 'only ever after a comparative' },
    { lb: 'aktar shii', ar: 'أَكْتَر شي', en: 'most of all', pos: 'adv', note: 'goes at the end of the sentence' },
    { lb: 'khSouuSatan', ar: 'خْصوصاً', en: 'especially', pos: 'adv' },
    { lb: 'abadan', ar: 'أَبَداً', en: 'at all, never', pos: 'adv', note: 'needs maa in the same sentence' },
    { lb: 'Saraa7a', ar: 'صَراحة', en: 'honestly', pos: 'adv', note: 'warns that a blunt opinion is coming' },
    { lb: 'yemken', ar: 'مِمْكِن', en: 'maybe', pos: 'adv', note: 'often a polite refusal' },
    { lb: '7asab', ar: 'حَسَب', en: 'depending on, it depends', pos: 'prep' },
    { lb: 'akiid', ar: 'أَكيد', en: 'of course, sure', pos: 'adv' },
    { lb: 'mesh 3aaTel', ar: 'مِش عاطِل', en: 'not bad — meaning genuinely good', pos: 'phr', note: 'f mesh 3aaTlé, pl mesh 3aaTliin' },
    { lb: 'a7san', ar: 'أَحْسَن', en: 'better', pos: 'adj' },
    { lb: 'a7la', ar: 'أَحْلى', en: 'nicer, nicest', pos: 'adj' },
    { lb: 'arya7', ar: 'أَرْيَح', en: 'more comfortable', pos: 'adj', note: 'from mourii7' }
  ],

  phrases: [
    {
      lb: 'shou ra2yak?', ar: 'شو رَأْيَك؟', en: 'what do you think of it?',
      when: 'asking for a verdict on something you can both see',
      reply: 'mesh 3aaTel', replyEn: 'not bad — which in Lebanese means good'
    },
    {
      lb: 'ma3ak 7a2, bass…', ar: 'مَعَك حَق، بَس…', en: 'you are right, but…',
      when: 'the standard opening of any disagreement worth having'
    },
    {
      lb: 'Saraa7a, maa b7ebbo', ar: 'صَراحة، ما بْحِبُّه', en: 'honestly, I do not like it',
      when: 'Saraa7a first, so the bluntness arrives announced'
    },
    {
      lb: '7asab', ar: 'حَسَب', en: 'it depends',
      when: 'a complete answer on its own, and frequently a refusal'
    },
    {
      lb: 'ééh wallah', ar: 'إيه والله', en: 'that is true',
      when: 'agreeing with feeling, not just conceding'
    },
    {
      lb: 'mesh bass héék', ar: 'مِش بَس هيك', en: 'not only that',
      when: 'claiming the floor for one more argument'
    }
  ],

  dialogue: {
    title: 'Disagreeing at full volume and staying friends',
    setting: 'Two people who have had this argument before and will have it again. Nobody is upset.',
    lines: [
      { who: 'Elie', lb: 'shou ra2yak bel-maT3am el-jdiid?', ar: 'شو رأيك بالمطعم الجديد؟', en: 'what do you think of the new restaurant?' },
      { who: 'You', you: true, lb: 'Saraa7a, maa 7abbayto. bfaDDel el-2adiim bi-ktiir.', ar: 'صراحة، ما حبيتو. بفضل القديم بكتير', say: 'صراحة، ما حبيتو. بفضل الأديم بكتير', en: 'honestly, I did not like it. I prefer the old one by a long way.' },
      { who: 'Elie', lb: 'abadan! el-jdiid a7la w a7san.', ar: 'أبدا! الجديد أحلى وأحسن', en: 'not at all! The new one is nicer and better.' },
      { who: 'You', you: true, lb: 'ma3ak 7a2 enno arya7. bass el-akl? Saraa7a, la2.', ar: 'معك حق إنو أريح. بس الأكل؟ صراحة، لأ', en: 'you are right that it is more comfortable. But the food? Honestly, no.' },
      { who: 'Elie', lb: 'ééh wallah, l-akl mesh 3aaTel bass mesh a7san shii.', ar: 'إيه والله، الأكل مش عاطل بس مش أحسن شي', en: 'that is true, the food is not bad but it is not the best.' },
      { who: 'You', you: true, lb: 'shefet? be3te2ed enno l-2adiim a7san, khSouuSatan bel-masa.', ar: 'شفت؟ بعتقد إنو القديم أحسن، خصوصا بالمسا', say: 'شفت؟ بعتأد إنو الأديم أحسن، خصوصا بالمسا', en: 'you see? I reckon the old one is better, especially in the evening.' },
      { who: 'Elie', lb: '7asab. eza 3endak wa2t, ktiir mnii7. eza mesta3jel, la2.', ar: 'حسب. إذا عندك وقت، كتير منيح. إذا مستعجل، لأ', en: 'it depends. If you have time, very good. If you are in a hurry, no.' },
      { who: 'You', you: true, lb: 'yalla, khalliina nrouu7 3al-etnéén w menshouuf.', ar: 'يلا، خلينا نروح عالتنين ومنشوف', en: 'right, let us go to both and we will see.' }
    ]
  },

  culture: {
    heading: 'Loud is not angry',
    icon: 'scales',
    body:
      'A Lebanese disagreement is louder, faster and more physical than most northern European ones, ' +
      'and it means much less. Voices go up, hands move, two people talk at once, and then everyone ' +
      'orders coffee. Reading the volume as hostility is the single most common misunderstanding a ' +
      'visitor has.\n\n' +
      'What actually carries weight is the structure. `ma3ak 7a2 enno…, bass…` concedes something ' +
      'real before disagreeing, and `ééh wallah` admits the other person landed a point. Those two ' +
      'moves are what keep the argument from becoming a fight, and they matter far more than tone ' +
      'of voice.\n\n' +
      '`Saraa7a` — honestly — is a signal, not a filler. It marks the sentence after it as your ' +
      'actual opinion rather than the polite one, and it gives you licence to say something ' +
      'unflattering. Use it before criticism and it lands as candour.\n\n' +
      'One trap worth remembering from unit ten: `mesh 3aaTel` is genuine praise here, not the ' +
      'lukewarm English "not bad". If you actually mean it was mediocre, you need `mesh a7san shii` ' +
      'or `3aadé`.',
  },

  drills: [
    { type: 'choice', q: 'Where can bi-ktiir go?',
      options: ['after a comparative — arya7 bi-ktiir', 'before any adjective — bi-ktiir mnii7', 'at the start of the sentence'], answer: 0,
      explain: 'ktiir intensifies a plain adjective; bi-ktiir only ever intensifies a comparison.' },

    { type: 'conjugate', en: 'we prefer', root: 'faDDel', person: 'ne7na', tense: 'present',
      options: ['menfaDDel', 'mnefaDDel', 'bfaDDel', 'betfaDDel'], answer: 0,
      explain: 'Consonant roots take the heavier men- for we, not the lighter mn-.' },

    { type: 'match',
      pairs: [['aktar shii', 'most of all'], ['khSouuSatan', 'especially'], ['abadan', 'at all'], ['7asab', 'it depends']] },

    { type: 'gap', en: 'You are in a shop and Rawan holds up a shirt she is thinking of buying.',
      lines: [
        { who: 'Rawan', lb: 'shou ra2yak b-hayda l-amiiS?', en: 'what do you think of this shirt?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['7abbayto, mesh 3aaTel', 'b7ebb el-omSaan', 'bfaDDel abadan'], answer: 0,
      explain: 'About the thing in her hand you need the past form. The second option is a statement about shirts in general.' },

    { type: 'build', en: 'I prefer the mountain because it is much more comfortable.',
      tiles: ['bfaDDel', 'el-jabal', 'la2enno', 'arya7', 'bi-ktiir'], extra: ['ktiir'],
      answer: 'bfaDDel el-jabal la2enno arya7 bi-ktiir' },

    { type: 'choice', q: 'How do you say "I do not like narrow roads at all"?',
      options: [
        'maa b7ebb eT-Tor2aat eD-Dayy2a abadan',
        'b7ebb eT-Tor2aat eD-Dayy2a abadan',
        'maa b7ebb eT-Tor2aat eD-Dayy2a bi-ktiir'
      ], answer: 0,
      explain: 'abadan reinforces a negative and cannot stand without one.' },

    { type: 'type', en: 'What I like most is tea.', answer: 'b7ebb esh-shaay aktar shii' },

    { type: 'gap', en: 'Tarek suggests driving down to Beirut in the evening. You would rather not, and you do not want to say so flatly.',
      lines: [
        { who: 'Tarek', lb: 'shou awlak nenzal 3a Beirut el-masa?', en: 'how about we go down to Beirut this evening?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['7asab el-3aj2a', 'la2, maa baddé', 'ééh wallah'], answer: 0,
      explain: 'Naming a condition is the ordinary polite brake. The flat la2 is heard as a rebuff, and ééh wallah has just agreed.' },

    { type: 'choice', q: 'Someone praises a restaurant and you say mesh 3aaTel. What have you said?',
      options: ['That it is genuinely good', 'That it is disappointing', 'That you have never been'], answer: 0,
      explain: 'It looks like faint praise in English and is not. It is approval delivered without fuss.' },

    { type: 'match',
      pairs: [['ééh wallah', 'wholehearted agreement'], ['akiid', 'of course'], ['yemken', 'maybe, often a soft no'], ['Saraa7a', 'honestly']] },

    { type: 'build', en: 'The village is more comfortable than the city.',
      tiles: ['eD-Day3a', 'arya7', 'men', 'el-madiiné'], extra: ['bi-ktiir'],
      answer: 'eD-Day3a arya7 men el-madiiné' },

    { type: 'choice', q: 'Which one means "the smaller size"?',
      options: ['l-2yéés el-azghar', '2yéés azghar', 'l-2yéés azghar men'], answer: 0,
      explain: 'The article on both words is what turns the comparative into a superlative.' },

    { type: 'conjugate', en: 'she prefers', root: 'faDDel', person: 'hiyyé', tense: 'present',
      options: ['betfaDDel', 'bifaDDel', 'bfaDDel', 'menfaDDel'], answer: 0 },

    { type: 'type', en: 'You are right, but…', answer: 'ma3ak 7a2 bass' }
  ],

  quiz: [
    { type: 'choice', q: 'You have just walked into a flat you are thinking of renting and you like it. What do you say?',
      options: ['7abbayto', 'b7ebbo', 'bfaDDelo'], answer: 0,
      explain: 'The past form is the reaction to the thing in front of you. b7ebbo would be a policy about flats.' },

    { type: 'gap', en: 'Maya says the mountain is better than the coast in summer. You disagree, and you want the conversation to survive it.',
      lines: [
        { who: 'Maya', lb: 'l-jabal a7san men el-ba7r bes-Sééf', en: 'the mountain is better than the sea in summer' },
        { who: 'You', you: true, blank: true }
      ],
      options: [
        'ma3ik 7a2, bass ana bfaDDel el-ba7r',
        'la2, ghalaT',
        'ééh wallah, bfaDDel el-jabal'
      ], answer: 0,
      explain: 'Concede, then differ. The third option agrees and then contradicts itself.' },

    { type: 'build', en: 'Honestly, I do not like it at all.',
      tiles: ['Saraa7a', 'maa', 'b7ebbo', 'abadan'], extra: ['bi-ktiir'],
      answer: 'Saraa7a maa b7ebbo abadan' },

    { type: 'match',
      pairs: [['arya7', 'more comfortable'], ['aTyab', 'kinder, tastier'], ['a7la', 'nicer'], ['akbar', 'bigger']] },

    { type: 'choice', q: 'Which sentence is built correctly?',
      options: [
        'l-baldé arya7 men Beirut bi-ktiir',
        'l-baldé mourii7a bi-ktiir men Beirut',
        'l-baldé bi-ktiir arya7 men Beirut'
      ], answer: 0,
      explain: 'bi-ktiir follows the comparison; it cannot attach to a plain adjective or open the phrase.' },

    { type: 'gap', en: 'You have asked Elie to dinner on Saturday. Read what he actually told you.',
      lines: [
        { who: 'Elie', lb: 'yemken… 7asab esh-sheghl', en: 'maybe… depends on work' },
        { who: 'You', you: true, blank: true }
      ],
      options: [
        'maa 3léé, marra tééné',
        'akiid! ra7 e7joz la-khamsé',
        'mesh 3aaTel'
      ], answer: 0,
      explain: 'yemken plus a condition is a refusal in polite clothing. Booking a table for five has misread it.' },

    { type: 'type', en: 'It depends.', answer: '7asab' },

    { type: 'conjugate', en: 'they like', root: '7ebb', person: 'henné', tense: 'present',
      options: ['bi7ebbo', 'bet7ebbo', 'men7ebb', 'bi7ebb'], answer: 0 },

    { type: 'choice', q: 'What does Saraa7a do at the front of a sentence?',
      options: [
        'It warns that a blunt opinion is coming and asks for room to give it',
        'It softens the opinion into a compliment',
        'It marks the sentence as a question'
      ], answer: 0 },

    { type: 'build', en: 'Not only that, the road is much more comfortable.',
      tiles: ['mesh', 'bass', 'héék', 'eT-Tarii2', 'arya7', 'bi-ktiir'], extra: ['ktiir'],
      answer: 'mesh bass héék eT-Tarii2 arya7 bi-ktiir' }
  ]
});
