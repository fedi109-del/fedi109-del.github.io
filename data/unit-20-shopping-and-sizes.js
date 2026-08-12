LEB.addUnit({
  id: 'u20',
  stage: 3,
  order: 20,
  title: 'Bigger, Smaller, Cheaper',
  goal: 'Compare two things out loud and walk out of a shop with the one you actually wanted.',
  canDo: [
    'Turn almost any adjective into more X with a single template',
    'Say than, and say much more, and say the best of all',
    'Ask for another size, ask to try it on, ask for a discount',
    'Say what is wrong with the one in your hands'
  ],

  grammar: [
    {
      heading: 'One template turns any adjective into a comparison',
      body:
        'Lebanese does not have a word for *more*. It reshapes the adjective itself. Take the ' +
        'three consonants that carry the meaning, pour them into the mould `a_ _ a_`, and you ' +
        'have the comparative: `zghiir` becomes `azghar`, `kbiir` becomes `akbar`, `rkhiiS` ' +
        'becomes `arkhaS`. Once your ear catches that opening `a-`, you will spot comparatives ' +
        'in speech before you have understood the rest of the sentence.\n\n' +
        'The reward is a rule with almost no exceptions, and one enormous simplification: ' +
        '**the comparative does not agree with anything**. The plain adjective still changes for ' +
        'a man and a woman — `zghiir`, `zghiiré` — but the comparative has exactly one form for ' +
        'everything. A dress, a shirt, a price and a crowd are all just `azghar`.\n\n' +
        '*Than* is `men`, the same little word as *from*: `arkhaS men` — cheaper than. And you ' +
        'can drop the noun after it and let the adjective stand alone, the way English says ' +
        '*than the red one*: `aghla men el-a7mar`.\n\n' +
        'One word refuses the pattern. *Better* is `a7san`, and it does not come from `mnii7` ' +
        'at all. Learn it separately; you will need it constantly.',
      table: {
        headers: ['plain', 'comparative', 'meaning'],
        rows: [
          ['`zghiir`', '`azghar`', 'small → smaller'],
          ['`kbiir`', '`akbar`', 'big → bigger'],
          ['`ghaalé`', '`aghla`', 'expensive → more expensive'],
          ['`rkhiiS`', '`arkhaS`', 'cheap → cheaper'],
          ['`jdiid`', '`ajadd`', 'new → newer'],
          ['`2adiim`', '`a2dam`', 'old → older'],
          ['`sarii3`', '`asra3`', 'fast → faster'],
          ['`7elo`', '`a7la`', 'lovely → lovelier'],
          ['`Tayyeb`', '`aTyab`', 'tasty or kind → tastier, kinder'],
          ['`mourii7`', '`arya7`', 'comfortable → more comfortable'],
          ['`mrattab`', '`artab`', 'tidy → tidier'],
          ['`kariim`', '`akram`', 'generous → more generous']
        ]
      },
      warning:
        'Never make a comparative agree. `siyyaara azghar`, `fostaan azghar`, `2yééséét ' +
        'azghar` — one form throughout. Adding a feminine ending to it is the mistake that ' +
        'marks a foreigner instantly.'
    },

    {
      heading: 'Much more, and the best of all',
      body:
        'To push a comparison harder, put `bi-ktiir` after it — literally *by a lot*. ' +
        '`arkhaS bi-ktiir` is not just cheaper, it is far cheaper. It goes after the ' +
        'comparative, never before, and it works with every one of them.\n\n' +
        'The superlative is the surprise: there is no such thing. Lebanese reuses the ' +
        'comparative and lets definiteness do the work. Put the comparative in front of a ' +
        'definite noun and it becomes the best of them: `arkhaS se3r bel-ma7al` — the cheapest ' +
        'price in the shop. Nothing was added; the position changed.\n\n' +
        'The second way round is the one you will use in a shop. When the noun is already ' +
        'definite, the comparative takes the article too and follows: `el-fostaan el-arkhaS` — ' +
        'the cheaper, or cheapest, dress. Lebanese does not distinguish those two English ' +
        'meanings here, and context settles it. If two dresses are on the counter it means the ' +
        'cheaper one; if the whole rail is in play it means the cheapest.\n\n' +
        'That double duty is worth trusting. You are not missing a form — the form does not ' +
        'exist.',
      table: {
        headers: ['pattern', 'example', 'meaning'],
        rows: [
          ['comparative alone', '`el-abyaD arkhaS`', 'the white one is cheaper'],
          ['+ `men`', '`el-abyaD arkhaS men el-a7mar`', 'cheaper than the red one'],
          ['+ `bi-ktiir`', '`el-abyaD arkhaS bi-ktiir`', 'far cheaper'],
          ['comparative + definite noun', '`arkhaS se3r bel-ma7al`', 'the cheapest price in the shop'],
          ['definite noun + definite comparative', '`el-fostaan el-arkhaS`', 'the cheaper / cheapest dress']
        ]
      },
      examples: [
        { lb: 'hayda l-2yéés akbar bi-ktiir', ar: 'هَيْدا القْياس أَكْبَر بِكْتير', en: 'This size is much bigger.' },
        { lb: 'bfaDDel el-azghar', ar: 'بْفَضِّل الأَصْغَر', en: 'I prefer the smaller one.' }
      ]
    },

    {
      heading: 'Clothes, sizes, and the colour trap',
      body:
        'The shopping words are few and they repeat all day. `2yéés` is a size, and Lebanese ' +
        'borrows `medium` and `large` without apology, so you can name yours before you can ' +
        'count. A shirt is `amiiS`, a dress is `fostaan`, jeans are `jeans`. A sleeve is `kemm`: ' +
        '`noSS kemm` is short-sleeved, literally half a sleeve, and `kemm Tawiil` is long.\n\n' +
        'To say what is wrong with a garment, use the adjective plus `3layyé` — *on me*. ' +
        '`wéése3 3layyé` is too roomy on me; `Dayye2 3layyé` is too tight. Note that Lebanese ' +
        'does not need a word for *too*: the adjective plus a person already carries the ' +
        'complaint.\n\n' +
        'Now the trap. Colours are built on the very same `a_ _ a_` mould as the comparatives — ' +
        '`abyaD`, `a7mar`, `aswad`, `akhDar` — but they behave in the opposite way. Colours ' +
        '**do** agree, fully, with the noun. A white shirt is `amiiS abyaD`; a white dress is ' +
        '`fostaan abyaD`; but a white car is `siyyaara bayDa`. Same shape on the page, opposite ' +
        'rule. Two lists, kept apart in your head from today.',
      table: {
        headers: ['colour', 'with a man or masculine noun', 'feminine', 'plural'],
        rows: [
          ['white', '`abyaD`', '`bayDa`', '`biiD`'],
          ['red', '`a7mar`', '`7amra`', '`7omer`'],
          ['black', '`aswad`', '`sawda`', '`souud`'],
          ['green', '`akhDar`', '`khaDra`', '`khoDer`']
        ]
      },
      warning:
        'When the noun is definite, every adjective after it repeats the article: ' +
        '`el-fostaan el-a7mar el-kbiir` — the big red dress, literally the-dress the-red ' +
        'the-big. Leave the article off and the sentence turns into a statement: ' +
        '`el-fostaan a7mar` means the dress **is** red.'
    },

    {
      heading: 'Trying it, changing it, asking for another',
      body:
        'Four sentences carry an entire shopping trip, and three of them are questions.\n\n' +
        '`fiiné jarrbo?` asks permission to try something on. `fii-` is the can you already ' +
        'know, and the verb after it is bare, with the thing hooked onto the end: `jarrbo` for ' +
        'a masculine item, `jarrba` for a feminine one. `3endkon 2yéés akbar?` asks whether ' +
        'they have a bigger size, and works with any comparative you drop in — `arkhaS`, ' +
        '`azghar`, `a7la`. `fii khaSm?` asks about a discount, and is a normal question in ' +
        'Lebanon rather than a rude one.\n\n' +
        'To change something for a different one, the verb is `ghayyer`: `baddé ghayyro` — I ' +
        'want to change it. Remember the b drops after `badd-`, so it is `ghayyro`, never ' +
        '`bghayyro`.\n\n' +
        'And when you want an opinion instead of a fact, `shou ra2yak?` — what do you think? ' +
        'Answer it with a comparative and you have said everything a shop assistant needs: ' +
        '`el-a7mar a7la, bass el-abyaD arkhaS bi-ktiir`.',
      examples: [
        { lb: 'fiiné jarrbo?', ar: 'فيني جَرّْبُه؟', en: 'Can I try it on?', note: 'masculine item; a dress would be jarrba' },
        { lb: '3endkon 2yéés akbar?', ar: 'عِنْدْكُن قْياس أَكْبَر؟', en: 'Do you have a bigger size?' },
        { lb: 'hal-fostaan wéése3 3layyé', ar: 'هالفُسْتان واسِع عْلَيّي', en: 'This dress is too big on me.' },
        { lb: 'baddé ghayyro, fii majéél?', ar: 'بَدّي غَيّْرُه، في مَجال؟', en: 'I want to change it, is that possible?' },
        { lb: 'fii khaSm?', ar: 'في خَصْم؟', en: 'Is there a discount?' }
      ]
    }
  ],

  vocab: [
    { lb: 'azghar', ar: 'أَصْغَر', en: 'smaller', pos: 'adj', note: 'from `zghiir`; never agrees' },
    { lb: 'akbar', ar: 'أَكْبَر', en: 'bigger', pos: 'adj', note: 'from `kbiir`' },
    { lb: 'arkhaS', ar: 'أَرْخَص', en: 'cheaper', pos: 'adj', note: 'from `rkhiiS`' },
    { lb: 'aghla', ar: 'أَغْلى', en: 'more expensive', pos: 'adj', note: 'from `ghaalé`' },
    { lb: 'a7la', ar: 'أَحْلى', en: 'lovelier, nicer', pos: 'adj' },
    { lb: 'a7san', ar: 'أَحْسَن', en: 'better', pos: 'adj', note: 'does not come from `mnii7` — learn it on its own' },
    { lb: 'bi-ktiir', ar: 'بِكْتير', en: 'much more, by a lot', pos: 'adv', note: 'always after the comparative' },
    { lb: '2yéés', ar: 'قْياس', en: 'size', pos: 'n', gender: 'm' },
    { lb: 'amiiS', ar: 'قَميص', en: 'shirt', pos: 'n', gender: 'm' },
    { lb: 'fostaan', ar: 'فُسْتان', en: 'dress', pos: 'n', gender: 'm' },
    { lb: 'kemm', ar: 'كِمّ', en: 'sleeve', pos: 'n', gender: 'm', note: '`noSS kemm` short-sleeved, `kemm Tawiil` long-sleeved' },
    { lb: 'wéése3', ar: 'واسِع', en: 'roomy, too big', pos: 'adj', gender: 'm' },
    { lb: 'ghaalé', ar: 'غالي', en: 'expensive', pos: 'adj', gender: 'm' },
    { lb: 'se3r', ar: 'سِعْر', en: 'price', pos: 'n', gender: 'm' },
    { lb: 'khaSm', ar: 'خَصْم', en: 'discount', pos: 'n', gender: 'm' },
    { lb: 'bjarreb', ar: 'بْجَرِّب', en: 'I try, I try on', pos: 'v', note: 'root `jarreb`' }
  ],

  phrases: [
    {
      lb: 'fiiné jarrbo?', ar: 'فيني جَرّْبُه؟', en: 'Can I try it on?',
      when: 'holding something masculine — a shirt, a jumper; for a dress, jarrba'
    },
    {
      lb: '3endkon 2yéés akbar?', ar: 'عِنْدْكُن قْياس أَكْبَر؟', en: 'Do you have a bigger size?',
      when: 'swap in any comparative you need'
    },
    {
      lb: 'hal-fostaan wéése3 3layyé', ar: 'هالفُسْتان واسِع عْلَيّي', en: 'This dress is too big on me.',
      when: 'coming out of the changing room'
    },
    {
      lb: 'fii khaSm?', ar: 'في خَصْم؟', en: 'Is there a discount?',
      when: 'a perfectly ordinary question here, not a cheeky one'
    },
    {
      lb: 'baddé shii arkhaS', ar: 'بَدّي شي أَرْخَص', en: 'I want something cheaper.',
      when: 'said without embarrassment; the assistant expects it'
    },
    {
      lb: 'b-addéé haydé?', ar: 'بْقَدّيه هَيْدي؟', en: 'How much is this one?',
      when: 'pointing at something feminine; for a masculine one, hayda'
    },
    {
      lb: 'shou ra2yak?', ar: 'شو رَأْيَك؟', en: 'What do you think? (to a man)',
      when: 'to whoever came shopping with you; answer it with a comparative and you are done'
    },
    {
      lb: 'ghaalé ktiir', ar: 'غالي كْتير', en: 'It is very expensive.',
      when: 'the polite way to say no to a price'
    }
  ],

  drills: [
    { type: 'match',
      pairs: [['azghar', 'smaller'], ['akbar', 'bigger'], ['arkhaS', 'cheaper'], ['aghla', 'more expensive']] },

    { type: 'choice', q: 'How do you say "a smaller dress"?',
      options: ['fostaan azghar', 'fostaan azghara', 'fostaan zghiiré'], answer: 0,
      explain: 'The comparative never agrees. The third one just means a small dress.' },

    { type: 'build', en: 'The white one is cheaper than the red one.',
      tiles: ['el-abyaD', 'arkhaS', 'men', 'el-a7mar'], extra: ['bi-ktiir'],
      answer: 'el-abyaD arkhaS men el-a7mar' },

    { type: 'choice', q: 'Where does bi-ktiir go?',
      options: ['after the comparative', 'before the comparative', 'at the start of the sentence'], answer: 0,
      explain: 'arkhaS bi-ktiir — far cheaper. It never comes first.' },

    { type: 'gap', en: 'You have just come out of the changing room in a shirt that swims on you.',
      lines: [
        { who: 'Assistant', lb: 'shou ra2yak?', en: 'what do you think?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['wéése3 3layyé. 3endkon 2yéés azghar?', 'ghaalé ktiir. fii khaSm?', 'a7la bi-ktiir. bjarrbo'], answer: 0,
      explain: 'Say what is wrong, then ask for the fix. The price is a different conversation.' },

    { type: 'conjugate', en: 'we prefer', root: 'faDDel', person: 'ne7na', tense: 'present',
      options: ['menfaDDel', 'bfaDDel', 'bifaDDel', 'betfaDDel'], answer: 0,
      explain: 'faDDel starts with a consonant, so we takes men- rather than mn-.' },

    { type: 'type', en: 'Do you have a bigger size?', answer: '3endkon 2yéés akbar' },

    { type: 'match',
      pairs: [['abyaD', 'white'], ['a7mar', 'red'], ['aswad', 'black'], ['akhDar', 'green']] },

    { type: 'choice', q: 'A car is feminine. How do you say "a white car"?',
      options: ['siyyaara bayDa', 'siyyaara abyaD', 'siyyaara biiD'], answer: 0,
      explain: 'Colours agree, unlike comparatives — even though they are cut from the same shape.' },

    { type: 'build', en: 'Can I try it on?',
      tiles: ['fiiné', 'jarrbo'], extra: ['bjarreb'], answer: 'fiiné jarrbo' },

    { type: 'choice', q: 'Which one means "the cheapest price in the shop"?',
      options: ['arkhaS se3r bel-ma7al', 'es-se3r arkhaS bel-ma7al', 'se3r arkhaS bel-ma7al'], answer: 0,
      explain: 'Comparative in front of a definite noun is how the superlative is made. There is no separate form.' },

    { type: 'type', en: 'This dress is too big on me.', answer: 'hal-fostaan wéése3 3layyé' },

    { type: 'gap', en: 'A friend is choosing between two shirts and wants your view.',
      lines: [
        { who: 'Karim', lb: 'el-abyaD aw el-a7mar?', en: 'the white one or the red one?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['el-abyaD a7la bi-ktiir', 'el-abyaD a7la bi-ktiiré', 'a7la el-abyaD bi-ktiir'], answer: 0,
      explain: 'No feminine on a comparative, and the adjective follows what it describes.' },

    { type: 'choice', q: 'Which is the odd one out — the word that is not built from its plain adjective?',
      options: ['a7san', 'azghar', 'arkhaS'], answer: 0,
      explain: 'a7san means better but has no link to mnii7. The other two come straight from zghiir and rkhiiS.' }
  ],

  quiz: [
    { type: 'choice', q: 'Why is "siyyaara azghara" wrong?',
      options: [
        'The comparative has one form only and never agrees',
        'siyyaara is masculine',
        'The adjective should come before the noun'
      ], answer: 0 },

    { type: 'build', en: 'This size is much bigger.',
      tiles: ['hayda', 'l-2yéés', 'akbar', 'bi-ktiir'], extra: ['men'], answer: 'hayda l-2yéés akbar bi-ktiir' },

    { type: 'type', en: 'I want something cheaper.', answer: 'baddé shii arkhaS' },

    { type: 'match',
      pairs: [['ghaalé', 'expensive'], ['aghla', 'more expensive'], ['wéése3', 'too roomy'], ['khaSm', 'discount']] },

    { type: 'conjugate', en: 'he changes', root: 'ghayyer', person: 'houwwé', tense: 'present',
      options: ['bighayyer', 'bghayyer', 'betghayyer', 'menghayyer'], answer: 0,
      explain: 'A consonant root takes bi- for he. bghayyer is I, menghayyer is we.' },

    { type: 'choice', q: 'What does "el-fostaan el-arkhaS" mean?',
      options: [
        'The cheaper or cheapest dress — Lebanese does not separate the two',
        'The dress is cheap',
        'A cheaper dress'
      ], answer: 0 },

    { type: 'gap', en: 'You are at the till and the price is higher than you expected.',
      lines: [
        { who: 'Assistant', lb: 'tléétiin alf', en: 'thirty thousand' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['ghaalé ktiir. fii khaSm?', 'a7la bi-ktiir. fii khaSm?', 'fiiné jarrbo? fii khaSm?'], answer: 0,
      explain: 'You are objecting to the price, not praising the shirt or asking to try it on.' },

    { type: 'choice', q: 'Which sentence says "the dress is red" rather than "the red dress"?',
      options: ['el-fostaan a7mar', 'el-fostaan el-a7mar', 'fostaan a7mar'], answer: 0,
      explain: 'Repeat the article and it is a description; leave it off after a definite noun and it becomes a full sentence.' },

    { type: 'type', en: 'Is there a discount?', answer: 'fii khaSm' },

    { type: 'choice', q: 'You want to change something you bought. Which is right?',
      options: ['baddé ghayyro', 'baddé bghayyro', 'baddé menghayyro'], answer: 0,
      explain: 'badd- strips the b- from the verb that follows, and the verb still agrees with you.' }
  ]
});
