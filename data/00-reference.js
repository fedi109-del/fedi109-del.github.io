/* 00-reference.js — the tables worth keeping open in another tab.
   Facts about the language, in our own words. */

LEB.setReference({
  sections: [

    {
      heading: 'How this app writes Lebanese',
      body:
        'Lebanese is a spoken language first. Lebanese people themselves usually write it in ' +
        'Latin letters, using digits for the sounds English has no letter for. That is the system ' +
        'used here, and it is used the same way on every screen.\n\n' +
        'Two warnings worth taking seriously. First, **capital letters are not decoration**: ' +
        '`S`, `D`, `T`, `Z` are different sounds from `s`, `d`, `t`, `z`, and swapping them ' +
        'changes the word. Second, this spelling **cannot be turned back into Arabic script ' +
        'automatically**, because `2` stands for two different Arabic letters at once.',
      table: {
        headers: ['written', 'Arabic', 'how to make it'],
        rows: [
          ['`7`', 'ح', 'a hard breath from the throat, mouth open — not an English h'],
          ['`3`', 'ع', 'squeeze the throat and voice it; the sound Arabic is famous for'],
          ['`2`', 'ء and ق', 'a clean stop, like the catch in "uh-oh". In Lebanese, qaaf is this'],
          ['`S D T Z`', 'ص ض ط ظ', 'the same consonant said heavy, with the tongue flat and the mouth full'],
          ['`kh`', 'خ', 'like clearing your throat softly, the Scottish "loch"'],
          ['`gh`', 'غ', 'the same place, but voiced — a French r'],
          ['`sh`', 'ش', 'as in "shoe"'],
          ['`é` / `éé`', '—', 'a closed e, short and long. Never flatten it to a plain e'],
          ['`aa ii uu`', '—', 'long vowels: hold them, they carry meaning']
        ]
      },
      warning:
        'The article is `el-`, and it **melts into** the following letter when that letter is a ' +
        '"sun letter": `esh-shems` (the sun), `en-nouur` (the light), `et-tilifon` (the phone). ' +
        'We always write what is actually said.\n\n' +
        'One exception you will notice: `addéé` (how much) is written here without the opening ' +
        '`2`, because that is how it is written almost everywhere in Lebanese, including in the ' +
        'material this course was built from. The stop is still there when you say it.'
    },

    {
      heading: 'The eight people',
      body:
        'Every table in this app runs in the same order, so the shape becomes familiar before ' +
        'you have to think about it. There is no polite "you" in Lebanese: you speak to one ' +
        'person as a man or as a woman, and that is all.',
      table: {
        headers: ['pronoun', 'meaning'],
        rows: [
          ['`ana`', 'I'],
          ['`enta`', 'you — one man'],
          ['`enté`', 'you — one woman'],
          ['`houwwé`', 'he'],
          ['`hiyyé`', 'she'],
          ['`ne7na`', 'we'],
          ['`ento`', 'you — more than one'],
          ['`henné`', 'they']
        ]
      }
    },

    {
      heading: 'One set of endings runs the whole language',
      body:
        'This is the single highest-value table in Lebanese. The same little endings mean "my, ' +
        'your, his…" on a noun, "me, you, him…" after a verb, and they are also what turns a ' +
        'preposition into a full statement. Learn them once and a third of the grammar opens up.\n\n' +
        'After a long vowel the endings shift shape slightly — `fiik`, `bya3Tiik` — but they are ' +
        'recognisably the same family.',
      table: {
        headers: ['person', 'on a noun (my)', 'after a verb (me)', 'example'],
        rows: [
          ['ana', '`-é`', '`-né`', '`esmé` — my name'],
          ['enta', '`-ak`', '`-ak`', '`esmak` — your name'],
          ['enté', '`-ik`', '`-ik`', '`esmik` — your name'],
          ['houwwé', '`-o`', '`-o`', '`esmo` — his name'],
          ['hiyyé', '`-a`', '`-a`', '`esma` — her name'],
          ['ne7na', '`-na`', '`-na`', '`esemna` — our name'],
          ['ento', '`-kon`', '`-kon`', '`esemkon` — your name'],
          ['henné', '`-on`', '`-on`', '`esemon` — their name']
        ]
      }
    },

    {
      heading: 'Suffix verbs: no "to have", no "to want"',
      body:
        'Lebanese simply does not have a verb for *have* or for *want*. Instead a small set of ' +
        'words takes the endings from the table above and behaves like a verb. Linguists call ' +
        'these **pseudo-verbs**; in this app they are **suffix verbs**, because that is exactly ' +
        'what they do.\n\n' +
        'They are negated with `maa` in front, never with the verb negation you would expect.',
      table: {
        headers: ['stem', 'with "I"', 'what it does'],
        rows: [
          ['`badd-`', '`baddé`', 'want, be about to'],
          ['`3end-`', '`3endé`', 'have, own, possess'],
          ['`ma3-`', '`ma3é`', 'have on me right now, be carrying'],
          ['`fii-`', '`fiini`', 'can, be able to'],
          ['`la-`', '`ilé` / `la-elé`', 'belong to me, be mine'],
          ['`ba3d-`', '`ba3dé`', 'still, not yet finished'],
          ['`3a-béél-`', '`3a-bééli`', 'feel like, have a craving for'],
          ['`la-wa7d-`', '`la7dé`', 'on my own, by myself']
        ]
      },
      warning:
        'The difference between `3endé` and `ma3é` costs beginners real money at a till. ' +
        '`3endé sayyaara` = I own a car. `ma3é 3ashra dollaar` = I have ten dollars **on me**.'
    },

    {
      heading: 'The present tense in one grid',
      body:
        'Lebanese verbs are built, not memorised one by one. Take the bare root of the verb — ' +
        '`a3ref` (know), `éékol` (eat), `rou7` (go) — and put a prefix on the front. The `b-` is ' +
        'the mark of a plain present: something you do, or do habitually.\n\n' +
        'Two forms are always identical: **"you (m)" and "she"**. That is not an error in the ' +
        'table; it is how the language works, and context sorts it out.',
      table: {
        headers: ['person', 'prefix', 'ending', 'example (know)'],
        rows: [
          ['ana', '`b-`', '—', '`ba3ref`'],
          ['enta', '`bt-` / `bet-`', '—', '`bta3ref`'],
          ['enté', '`bt-` / `bet-`', '`-é`', '`bta3refé`'],
          ['houwwé', '`by-` / `bi-`', '—', '`bya3ref`'],
          ['hiyyé', '`bt-` / `bet-`', '—', '`bta3ref`'],
          ['ne7na', '`mn-` / `men-`', '—', '`mna3ref`'],
          ['ento', '`bt-` / `bet-`', '`-o`', '`bta3refo`'],
          ['henné', '`by-` / `bi-`', '`-o`', '`bya3refo`']
        ]
      }
    },

    {
      heading: 'The rule that surprises everyone: the b drops',
      body:
        'Lebanese has no infinitive. Where English says "I want **to eat**", Lebanese conjugates ' +
        'the second verb too — but strips its `b-`.\n\n' +
        '`baddé **éékol**`, never `baddé béékol`. `léézem **trou7**` — you have to go. ' +
        'The `b-` comes back the moment the verb stands on its own again.',
      table: {
        headers: ['what comes before', 'meaning', 'example'],
        rows: [
          ['`badd-`', 'want to', '`baddé rou7` — I want to go'],
          ['`léézem`', 'must, have to', '`léézem nrou7` — we have to go'],
          ['`fii-`', 'can', '`fiini rou7` — I can go'],
          ['`moumken`', 'may, possibly', '`moumken rou7` — I might go'],
          ['`ra7`', 'will (future)', '`ra7 rou7` — I will go'],
          ['`la-`', 'in order to', '`la-rou7` — so that I go'],
          ['`lamma`', 'when', '`lamma rou7` — when I go'],
          ['any other verb first', '—', '`b7ebb rou7` — I like to go']
        ]
      },
      warning:
        'The one that does **not** drop it is `3am`, the "right now" marker: `3am **b**rou7` — ' +
        'I am going. `3am` keeps the b, `ra7` takes it away. That single contrast separates ' +
        'present from future.'
    },

    {
      heading: 'All five tenses on one page',
      table: {
        headers: ['tense', 'recipe', 'example (go)'],
        rows: [
          ['present / habitual', 'b-form', '`brou7` — I go'],
          ['subordinate', 'bare form, no b', '`baddé rou7` — I want to go'],
          ['right now', '`3am` + b-form', '`3am brou7` — I am going'],
          ['future', '`ra7` + bare form', '`ra7 rou7` — I will go'],
          ['past', 'past root + ending', '`re7et` — I went']
        ]
      },
      body:
        'The past is the only tense that needs a second root learned alongside the first, ' +
        'the way English keeps *go / went*. And `kéén` ("was") stacks on top of any non-past ' +
        'form to give you "I was going to", "I used to", "I wanted to".'
    },

    {
      heading: 'Saying no',
      body:
        'Three tools, and picking the wrong one is the classic learner mistake.',
      table: {
        headers: ['tool', 'goes in front of', 'example'],
        rows: [
          ['`maa`', 'verbs and suffix verbs', '`maa ba3ref` — I do not know'],
          ['`mesh`', 'nouns, adjectives, participles', '`mesh mnii7` — not good'],
          ['`mann-` family', 'a whole "I am not" statement', '`mannak` — you are not'],
          ['`la2`', 'standing alone', '`la2` — no, and `laa2` when you stretch it for emphasis']
        ]
      }
    }
  ]
});
