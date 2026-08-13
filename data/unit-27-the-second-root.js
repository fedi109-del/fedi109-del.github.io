LEB.addUnit({
  id: 'u27',
  stage: 4,
  order: 27,
  title: 'The Second Root',
  goal: 'Handle the verbs whose past looks nothing like their present, and learn them the way they have to be learned: in pairs.',
  canDo: [
    'Learn a verb as a pair of stems, the way English learns go and went',
    'Recognise the three families that cover most of the irregular pasts',
    'Tell someone where you went, what you saw and what you said'
  ],

  grammar: [
    {
      heading: 'Two stems, and where the seam falls',
      body:
        'English learners of Lebanese hit this wall at exactly the same place English itself puts ' +
        'one. *Walk* becomes *walked* and you can guess it; *go* becomes *went* and you cannot. ' +
        'Lebanese behaves the same way, with one extra twist: the change can happen twice.\n\n' +
        'First, the past stem may look nothing like the present root. `rouu7` is the root you ' +
        'conjugate for "I go", but "I went" is `re7t`. No amount of staring at `rouu7` produces ' +
        '`re7t`. The pair has to be learned together, from the start, as one item.\n\n' +
        'Second, inside the past itself a verb may use two different stems. One serves `ana`, ' +
        '`enta`, `enté`, `ne7na` and `ento`; the other serves `houwwé`, `hiyyé` and `henné`. The ' +
        'seam always falls in the same place — between the persons you are talking to and the ' +
        'people you are talking about — and it never falls anywhere else.\n\n' +
        'The endings from the last unit do not change at all. `-t`, `-té`, `-et`, `-na`, `-to`, ' +
        '`-o`: they are the same seven endings, hung on whichever of the two stems the person ' +
        'calls for.',
      table: {
        headers: ['person', 'stem', 'go up (`oTla3`)', 'be (`kouun`)'],
        rows: [
          ['ana', 'first', '`Tlo3t`', '`kent`'],
          ['enta', 'first', '`Tlo3t`', '`kent`'],
          ['enté', 'first', '`Tlo3té`', '`kenté`'],
          ['houwwé', '**second**', '`Tole3`', '`kéén`'],
          ['hiyyé', '**second**', '`Tole3et`', '`kéénet`'],
          ['ne7na', 'first', '`Tlo3na`', '`kenna`'],
          ['ento', 'first', '`Tlo3to`', '`kento`'],
          ['henné', '**second**', '`Tole3o`', '`kééno`']
        ]
      },
      warning:
        'There is no rule that predicts the second stem from the first. It belongs to the verb, ' +
        'like a gender or a plural, and the only honest way to hold it is to store both.'
    },
    {
      heading: 'Sixteen pairs worth owning',
      body:
        'These are the verbs you will need first, in the shape you will need them: the present ' +
        'root you already conjugate, then the two past forms that carry everything else. Take ' +
        'the `ana` form and the `houwwé` form together and you can rebuild the other six persons ' +
        'from the endings you learned in the last unit.\n\n' +
        'Read the first two columns against each other for a minute before you read the third. ' +
        'The gap between `2ouul` and `elt`, or between `ouu3a` and `w3iit`, is the whole point ' +
        'of this unit: the present tells you nothing about the past, so a verb learned only in ' +
        'the present is a verb you can only use today.\n\n' +
        'Do not try to swallow all sixteen at once. Take the six you would actually say about ' +
        'yesterday — went, saw, said, drank, slept, arrived — and let the others come when you ' +
        'need them.\n\n' +
        'From here on, treat the pair as the unit of learning. When you meet a new verb, ask for ' +
        'his past form in the same breath as the root, the way a serious learner of German asks ' +
        'for the article along with the noun. It costs one extra second and saves the sentence.',
      table: {
        headers: ['meaning', 'present root', 'I (past)', 'he (past)'],
        rows: [
          ['go', '`rouu7`', '`re7t`', '`raa7`'],
          ['see', '`shouuf`', '`sheft`', '`shééf`'],
          ['say, tell', '`2ouul`', '`elt`', '`aal`'],
          ['sleep', '`néém`', '`nemt`', '`néém`'],
          ['be', '`kouun`', '`kent`', '`kéén`'],
          ['drink', '`eshrab`', '`shrebt`', '`shereb`'],
          ['wear, put on', '`elbos`', '`lbest`', '`lebes`'],
          ['hear', '`esma3`', '`sme3t`', '`seme3`'],
          ['play', '`el3ab`', '`l3ebt`', '`le3eb`'],
          ['go down', '`enzal`', '`nzelt`', '`nezel`'],
          ['go up, turn out', '`oTla3`', '`Tlo3t`', '`Tole3`'],
          ['arrive', '`ouuSal`', '`wSolt`', '`woSel`'],
          ['go back', '`erja3`', '`rje3t`', '`reje3`'],
          ['buy', '`eshtré`', '`shtarayt`', '`shtara`'],
          ['brush', '`farshé`', '`farshayt`', '`farsha`'],
          ['wake up', '`ouu3a`', '`w3iit`', '`we3e`']
        ]
      }
    },
    {
      heading: 'Three families you will keep meeting',
      body:
        'The pairs are not random. Three shapes account for most of the list above, and once you ' +
        'hear them as shapes the individual verbs stop feeling like sixteen separate problems.\n\n' +
        '**The swallowed vowel.** The stem you use for yourself has lost a vowel that his stem ' +
        'still has: `shrebt` beside `shereb`, `lbest` beside `lebes`, `nzelt` beside `nezel`. ' +
        'The consonants are identical; only the vowel between the first two has been squeezed ' +
        'out. This family is large and predictable enough to guess with.\n\n' +
        '**The long vowel that shortens.** Verbs whose present root has a long vowel in the ' +
        'middle keep it in his form and lose it in yours: `raa7` but `re7t`, `shééf` but ' +
        '`sheft`, `aal` but `elt`, `kéén` but `kent`. The vowel often changes quality as well as ' +
        'length, which is why `2ouul` gives `elt`.\n\n' +
        '**The `-ay` pair.** When his form ends in `-a`, every other person inserts `-ay` before ' +
        'the ending: `shtara` but `shtarayt`, `farsha` but `farshayt`. This one is regular enough ' +
        'to trust in both directions.\n\n' +
        'What the families do not do is remove the need to store both stems. `néém` and `nemt` ' +
        'sit in the second family but the second stem is identical to the present root, and ' +
        '`7aTT` takes the `-ay` shape without ending in `-a` at all.',
      table: {
        headers: ['family', 'I', 'he'],
        rows: [
          ['the swallowed vowel', '`shrebt` · `sme3t` · `l3ebt` · `wSolt`', '`shereb` · `seme3` · `le3eb` · `woSel`'],
          ['the long vowel that shortens', '`re7t` · `sheft` · `elt` · `kent`', '`raa7` · `shééf` · `aal` · `kéén`'],
          ['the `-ay` pair', '`shtarayt` · `farshayt` · `7aTTayt`', '`shtara` · `farsha` · `7aTT`']
        ]
      }
    },
    {
      heading: 'Using them, and the one you cannot avoid',
      body:
        'Nothing else about the sentence changes. The verb comes first, the negative is `maa` in ' +
        'front of it, and no marker may stand between them: `maa sme3t shii` — I did not hear ' +
        'anything. `3am` and `ra7` still keep away from the past entirely.\n\n' +
        '`kéén` deserves separate attention because it is the past of a verb that has no present. ' +
        'Lebanese does without "to be" when it talks about now — `ana te3béén`, I am tired — but ' +
        'the moment you move that sentence into yesterday you need a real verb, and `kéén` is ' +
        'it: `ana kent te3béén`. Its future counterpart is `kouun`, which you met in the future ' +
        'unit: same verb, three tenses, and only the present is missing.\n\n' +
        'The other high-frequency one is `aal` ("he said"), because most stories are made of ' +
        'reported speech. `shou aal?` — what did he say? — is the question you will ask most ' +
        'often once people start telling you things.\n\n' +
        'And note `sheft`. Lebanese uses the past where English often reaches for a perfect: ' +
        '`sheft hal-film` covers both "I saw that film" and "I have seen that film".',
      examples: [
        { lb: 'ana kent hoon mbéére7', ar: 'أنا كِنْت هون مْبارِح', en: 'I was here yesterday.' },
        { lb: 'maa sme3t shii', ar: 'ما سْمِعْت شي', en: 'I did not hear anything.' },
        { lb: 'shou aal?', ar: 'شو قال؟', en: 'What did he say?' }
      ]
    }
  ],

  vocab: [
    { lb: 'raa7', ar: 'راح', en: 'he went', pos: 'v', note: 'present root rouu7' },
    { lb: 'shééf', ar: 'شاف', en: 'he saw', pos: 'v', note: 'present root shouuf' },
    { lb: 'aal', ar: 'قال', en: 'he said', pos: 'v', note: 'present root 2ouul' },
    { lb: 'néém', ar: 'نام', en: 'he slept', pos: 'v', note: 'here the past stem and the present root look the same' },
    { lb: 'kéén', ar: 'كان', en: 'he was', pos: 'v', note: 'the past of a verb with no present' },
    { lb: 'shereb', ar: 'شِرِب', en: 'he drank', pos: 'v' },
    { lb: 'lebes', ar: 'لِبِس', en: 'he wore, he put on', pos: 'v' },
    { lb: 'seme3', ar: 'سِمِع', en: 'he heard', pos: 'v' },
    { lb: 'le3eb', ar: 'لِعِب', en: 'he played', pos: 'v' },
    { lb: 'nezel', ar: 'نِزِل', en: 'he went down', pos: 'v' },
    { lb: 'Tole3', ar: 'طِلِع', en: 'he went up, it turned out', pos: 'v' },
    { lb: 'woSel', ar: 'وِصِل', en: 'he arrived', pos: 'v' },
    { lb: 'reje3', ar: 'رِجِع', en: 'he went back', pos: 'v' },
    { lb: 'shtara', ar: 'اشْتَرى', en: 'he bought', pos: 'v' },
    { lb: 'farsha', ar: 'فَرْشى', en: 'he brushed', pos: 'v' },
    { lb: 'we3e', ar: 'وِعي', en: 'he woke up', pos: 'v' }
  ],

  phrases: [
    {
      lb: 'wéén re7t mbéére7?', ar: 'وين رِحْت مْبارِح؟', en: 'where did you go yesterday?',
      when: 'to a man, opening a conversation about somebody else\'s evening'
    },
    {
      lb: 'sheft hal-film?', ar: 'شِفْت هالفيلم؟', en: 'have you seen that film?',
      when: 'to a man — the past does the work of the English perfect'
    },
    {
      lb: 'maa sme3t shii', ar: 'ما سْمِعْت شي', en: 'I did not hear anything',
      when: 'denying all knowledge of the noise, the rumour or the argument'
    },
    {
      lb: 'wSolna', ar: 'وْصِلْنا', en: 'we are here',
      when: 'phoned or texted from outside the door — literally we arrived'
    },
    {
      lb: 'shou aal?', ar: 'شو قال؟', en: 'what did he say?',
      when: 'the engine of every second-hand story'
    },
    {
      lb: 'kent hoon mbéére7', ar: 'كِنْت هون مْبارِح', en: 'I was here yesterday',
      when: 'there is no present for this verb, only a past and a future'
    }
  ],

  dialogue: {
    title: 'Where were you and why did nobody hear from you',
    setting: 'Every verb in this exchange is one of the awkward ones. Notice how far the past is from the present in each pair.',
    lines: [
      { who: 'Hala', lb: 'wéén re7t mbéére7? maa sme3t menak shii.', ar: 'وين رحت مبارح؟ ما سمعت منك شي', en: 'where did you go yesterday? I did not hear anything from you.' },
      { who: 'You', you: true, lb: 'nzelt 3a Béérout. wSolt ta2riiban es-séé3a khamsé.', ar: 'نزلت ع بيروت. وصلت تقريبا الساعة خمسة', en: 'I went down to Beirut. I arrived around five.',
        note: 'nezel becomes nzelt, woSel becomes wSolt. The present birouu7 has nothing to do with raa7 either.' },
      { who: 'Hala', lb: 'w shou 3amelt honiik?', ar: 'وشو عملت هنيك؟', en: 'and what did you do there?' },
      { who: 'You', you: true, lb: 'shtaréét shwayy ghraaD, ba3déén sheft Ziad.', ar: 'اشتريت شوي غراض، بعدين شفت زياد', en: 'I bought a few things, then I saw Ziad.' },
      { who: 'Hala', lb: 'Ziad! shou aal?', ar: 'زياد! شو قال؟', say: 'زياد! شو أال؟', en: 'Ziad! What did he say?' },
      { who: 'You', you: true, lb: 'wala shii. shereb 2ahwe w reje3 3al-maktab.', ar: 'ولا شي. شرب قهوة ورجع عالمكتب', say: 'ولا شي. شرب أهوة ورجع عالمكتب', en: 'nothing. He drank a coffee and went back to the office.' },
      { who: 'Hala', lb: 'w enta? kent ta3béén?', ar: 'وانت؟ كنت تعبان؟', en: 'and you? Were you tired?' },
      { who: 'You', you: true, lb: 'ktiir. rje3t 3al-béét w nemt bakkiir.', ar: 'كتير. رجعت عالبيت ونمت بكير', en: 'very. I went home and slept early.',
        note: 'néém, he slept, becomes nemt for I. The long vowel shortens the moment an ending arrives.' }
    ]
  },

  culture: {
    heading: 'Why these have to be learned in pairs',
    icon: 'root',
    body:
      'Up to now every verb has behaved. You met one form and the rest followed from it. This unit ' +
      'is where that stops, and it is the point at which most self-taught learners quietly plateau.\n\n' +
      'The verbs here have a weak letter in the middle or at the end, and that letter behaves ' +
      'differently under stress. `raa7` and `birouu7` are the same verb. So are `néém` and `bnéém`, ' +
      '`shééf` and `bshouuf`, `aal` and `b2ouul`. Nothing about the present form lets you predict the ' +
      'past, and nothing about the past lets you predict the present.\n\n' +
      'So learn them as pairs, out loud, together, the way you would learn *go / went*. Do not learn ' +
      '`raa7` and hope. English speakers already accept that went has nothing to do with go, and ' +
      'this is the same bargain in a different language.\n\n' +
      'There is one mercy: the pairs are a closed set. There are perhaps thirty verbs like this and ' +
      'they are the thirty you use most, which means you will meet each of them constantly and they ' +
      'stick faster than the regular ones.',
  },

  drills: [
    { type: 'conjugate', en: 'I went', root: 'rouu7', person: 'ana', tense: 'past',
      options: ['re7t', 'raa7t', 'rou7t'], answer: 0,
      explain: 'The long vowel of rouu7 shortens for everyone except him: raa7.' },

    { type: 'conjugate', en: 'he saw', root: 'shouuf', person: 'houwwé', tense: 'past',
      options: ['shééf', 'sheft', 'shefna'], answer: 0,
      explain: 'His form takes no ending at all, and it is the one that keeps the long vowel.' },

    { type: 'conjugate', en: 'we drank', root: 'eshrab', person: 'ne7na', tense: 'past',
      options: ['shrebna', 'sherebna', 'shrebto'], answer: 0,
      explain: 'ne7na uses the first stem, the squeezed one: shreb + na.' },

    { type: 'conjugate', en: 'she was', root: 'kouun', person: 'hiyyé', tense: 'past',
      options: ['kéénet', 'kenté', 'kéén'], answer: 0,
      explain: 'hiyyé sits on the second stem and adds -et.' },

    { type: 'conjugate', en: 'they said', root: '2ouul', person: 'henné', tense: 'past',
      options: ['aalo', 'elto', 'aal'], answer: 0,
      explain: 'henné takes the second stem plus -o. elto would be you, plural.' },

    { type: 'conjugate', en: 'you (a man) arrived', root: 'ouuSal', person: 'enta', tense: 'past',
      options: ['wSolt', 'woSelt', 'wSolté'], answer: 0,
      explain: 'enta shares its form with ana, and both use the first stem.' },

    { type: 'conjugate', en: 'I bought', root: 'eshtré', person: 'ana', tense: 'past',
      options: ['shtarayt', 'shtara', 'shtaréét'], answer: 0,
      explain: 'His form ends in -a, so everyone else inserts -ay before the ending.' },

    { type: 'conjugate', en: 'he slept', root: 'néém', person: 'houwwé', tense: 'past',
      options: ['néém', 'nemt', 'nemo'], answer: 0,
      explain: 'Here the second stem happens to be identical to the present root — which is why both still have to be stored.' },

    { type: 'match',
      pairs: [['eshrab', 'shrebt'], ['elbos', 'lbest'], ['esma3', 'sme3t'], ['el3ab', 'l3ebt']] },

    { type: 'build', en: 'Yesterday I went down to the market.',
      tiles: ['mbéére7', 'nzelt', '3as-souu2'], extra: ['ra7'], answer: 'mbéére7 nzelt 3as-souu2' },

    { type: 'gap', en: 'A friend calls you the morning after.',
      lines: [
        { who: 'Nadim', lb: 'wéén re7to mbéére7?', en: 'where did you all go yesterday?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['re7na 3al-cinema', 'raa7na 3al-cinema', 'ra7 nrouu7 3al-cinema'], answer: 0,
      explain: 'ne7na belongs to the first stem, so re7na. The second option has borrowed his stem.' },

    { type: 'choice', q: 'Which pair belongs to the swallowed-vowel family?',
      options: ['`lbest` / `lebes`', '`sheft` / `shééf`', '`shtarayt` / `shtara`'], answer: 0,
      explain: 'Same consonants, one vowel squeezed out. The other two are the long-vowel and the -ay families.' },

    { type: 'type', en: 'She went up.', answer: 'Tole3et' },

    { type: 'choice', q: 'Why can you not build `re7t` out of `rouu7` with a rule?',
      options: [
        'Because the past stems are lexical: they belong to the verb and have to be learned with it',
        'Because rouu7 is a foreign word',
        'Because the past has no first person'
      ], answer: 0 }
  ],

  quiz: [
    { type: 'conjugate', en: 'they arrived', root: 'ouuSal', person: 'henné', tense: 'past',
      options: ['woSelo', 'wSolna', 'woSel'], answer: 0 },

    { type: 'conjugate', en: 'you (a woman) heard', root: 'esma3', person: 'enté', tense: 'past',
      options: ['sme3té', 'seme3té', 'sme3t'], answer: 0 },

    { type: 'conjugate', en: 'we went', root: 'rouu7', person: 'ne7na', tense: 'past',
      options: ['re7na', 'raa7na', 'rou7na'], answer: 0 },

    { type: 'conjugate', en: 'I woke up', root: 'ouu3a', person: 'ana', tense: 'past',
      options: ['w3iit', 'we3et', 'w3iina'], answer: 0 },

    { type: 'type', en: 'He wore. (he put it on)', answer: 'lebes' },

    { type: 'build', en: 'We did not sleep at home.',
      tiles: ['maa', 'nemna', 'bel-bayt'], extra: ['ra7'], answer: 'maa nemna bel-bayt' },

    { type: 'gap', en: 'You are outside a friend\'s building and she is expecting you.',
      lines: [
        { who: 'Rima', lb: 'wéén ento?', en: 'where are you?' },
        { who: 'You', you: true, blank: true }
      ],
      options: ['wSolna, ne7na ta7t', 'woSelna, ne7na ta7t', 'ra7 nouuSal, ne7na ta7t'], answer: 0,
      explain: 'ne7na takes the first stem. And you have already arrived, so not the future.' },

    { type: 'match',
      pairs: [['raa7', 'he went'], ['shééf', 'he saw'], ['aal', 'he said'], ['kéén', 'he was']] },

    { type: 'type', en: 'I said.', answer: 'elt' },

    { type: 'choice', q: 'How do you say "I was tired"?',
      options: ['ana kent te3béén', 'ana kéén te3béén', 'ana 3am kent te3béén'], answer: 0,
      explain: 'ana takes the first stem, kent. And no marker ever stands in front of a past verb.' }
  ]
});
