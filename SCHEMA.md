# SCHEMA.md — il contratto dei dati

> Chi scrive un'unità (io o un subagente) legge **prima** questo file. Un'unità che non
> rispetta lo schema non compare nell'app o la rompe.

---

## 1. Le tre leggi del contenuto

### Legge A — solo libanese
Niente arabo standard. Il qaaf è un colpo di glottide (`2`), mai `q`. Non usare forme
che esistono solo in fuS7a (`hunāka`, `laysa`, `sa-yaf3alu`, il duale sistematico, i casi).
Se una parola non è attestata nella skill `arabo-libanese`, **non si inventa**: si sceglie
un'altra parola che c'è.

### Legge B — inglese come lingua di partenza
Titoli, spiegazioni, consegne, traduzioni: tutto in inglese. Zero italiano nei file `data/`.

### Legge C — regola anti-copia (la più importante)
La skill `arabo-libanese` è estratta da un libro protetto. Da lì si prendono **i fatti**
(regole grammaticali, coniugazioni, significato delle parole: la lingua non è di nessuno),
mai **le espressioni**:

- **Vietato** riprodurre o parafrasare i dialoghi del libro, le sue frasi d'esempio, i suoi
  personaggi, le sue battute.
- **Vietato** ricalcare l'ordine delle sue 30 lezioni: il nostro percorso è riorganizzato per
  funzione comunicativa (vedi `data/00-reference.js` e la mappa in `LEGGIMI.md`).
- **Vietato** il termine coniato dall'autrice *"fake verbs"*. Nell'app si chiamano
  **suffix verbs** (o *pseudo-verbs*), che è la definizione linguistica standard.
- **Obbligatorio**: ogni frase d'esempio, ogni esercizio, ogni conversazione è scritta da zero,
  con situazioni e nomi nostri. Stesso fatto grammaticale, parole diverse, contesto diverso.

Prova del nove prima di consegnare: se una frase potesse essere cercata nel libro e trovata
uguale o quasi, va riscritta.

---

## 2. Il file di una unità

Un file, una unità: `data/unit-NN-slug.js`. Niente `import`, niente `export`, niente
`const`/`let` fuori dalla chiamata (l'app gira da `file://` con script classici).

```js
LEB.addUnit({
  id: 'u07',                    // unico in tutta l'app, 'u' + numero a due cifre
  stage: 2,                     // 1..5
  order: 7,                     // progressivo globale, coincide col numero dell'unità
  title: 'Coffee, Please',      // 2-4 parole, inglese, niente due punti
  goal: 'Order a drink and pay for it without switching to English.',
  canDo: [                      // 2-4 promesse concrete, in prima persona sottintesa
    'Ask for coffee the way it is actually asked for',
    'Say how much sugar you want',
    'Ask for the bill'
  ],
  grammar: [ /* vedi §3 */ ],
  vocab:   [ /* vedi §4 */ ],
  phrases: [ /* vedi §5 */ ],
  drills:  [ /* vedi §6 — 10-14 esercizi */ ],
  quiz:    [ /* vedi §6 —  8-10 esercizi, più difficili */ ]
});
```

---

## 3. `grammar` — le spiegazioni (2-4 blocchi)

```js
{
  heading: 'Two ways of having',
  body: 'Lebanese has no verb "to have"...\n\nSecond paragraph.',   // **bold**, `code`, \n
  table: { headers: ['person', 'form', 'meaning'], rows: [['ana', '3endé', 'I have']] },
  examples: [
    { lb: '3endé sayyaara', ar: 'عندي سيارة', en: 'I have a car.', note: 'optional aside' }
  ],
  warning: 'Careful: `ma3é` is what is **on you right now**, not what you own.'
}
```

Tutti i campi tranne `heading` sono facoltativi. Voce: diretta, adulta, concreta; frasi
piene; niente "Congratulations!", niente emoji, niente esclamativi a raffica. Si spiega
*perché* la lingua funziona così, non solo *cosa* memorizzare. 120-250 parole per blocco.

---

## 4. `vocab` — 10-16 parole

```js
{ lb: '2ahwe', ar: 'قهوة', en: 'coffee', pos: 'n', gender: 'f', note: 'always the small bitter cup' }
```

`lb` e `en` obbligatori. `ar` fortemente consigliato. `pos`: `n` `v` `adj` `adv` `prep` `phr`
`num` `pron`. `gender`: `m` `f` `pl` solo per i nomi. `note` solo se dice qualcosa di utile.

Ogni voce di `vocab` e ogni voce di `phrases` entra **da sola** nella coda di ripasso: non
serve dichiarare nient'altro.

---

## 5. `phrases` — 4-10 formule funzionali

```js
{
  lb: 'ya3Tiik el-3aafyé',
  ar: 'يعطيك العافية',
  en: 'may he give you strength',
  when: 'to anyone working — a waiter, a driver, a builder',
  reply: 'Allah y3aafiik',          // facoltativo: la risposta obbligata
  replyEn: 'and may God keep you strong'
}
```

Il libanese vive di coppie botta-e-risposta: quando esiste una risposta obbligata, va messa.

---

## 6. `drills` e `quiz` — i sei tipi di esercizio

Stessa forma per entrambi. `drills` allena (10-14), `quiz` verifica (8-10, più difficile,
almeno tre tipi diversi, e deve coprire sia il vocabolario sia la grammatica dell'unità).
`explain` è facoltativo ovunque e compare dopo la risposta.

```js
// 1. scelta multipla — 'answer' è l'INDICE nell'array 'options' (le opzioni vengono mescolate a video)
{ type: 'choice', q: 'How do you say "I want a coffee"?',
  options: ['baddé 2ahwe', 'béddé shay', 'ma3é 2ahwe'], answer: 0,
  explain: 'baddé is want; ma3é would be "I have a coffee on me".' }

// 2. costruire la frase — 'tiles' sono le parole giuste, 'extra' aggiunge distrattori
{ type: 'build', en: 'I want a coffee without sugar.',
  tiles: ['baddé', '2ahwe', 'bala', 'sekkar'], extra: ['ma3'], answer: 'baddé 2ahwe bala sekkar' }

// 3. scrivere — 'accept' elenca varianti accettabili oltre a 'answer'
{ type: 'type', en: 'Good morning.', answer: 'Sabaa7 el-khéér', accept: ['sabah el kheer'] }

// 4. abbinamento — 3-6 coppie [libanese, inglese]
{ type: 'match', pairs: [['2ahwe', 'coffee'], ['shay', 'tea'], ['mayy', 'water']] }

// 5. coniugazione — con 'options' diventa a scelta multipla, senza diventa da scrivere
{ type: 'conjugate', en: 'she knows', root: 'a3ref', person: 'hiyyé', tense: 'present',
  options: ['bta3ref', 'ba3ref', 'bya3ref', 'mna3ref'], answer: 0 }

// 6. buco nella conversazione — 'you: true' mette la battuta a destra
{ type: 'gap', en: 'A neighbour greets you in the morning.',
  lines: [
    { who: 'Nadim', lb: 'Sabaa7 el-khéér', en: 'good morning' },
    { who: 'You', you: true, blank: true }
  ],
  options: ['Sabaa7 en-nouur', 'masa l-khéér', 'ma3 es-saléémé'], answer: 0,
  explain: 'The morning greeting has one fixed answer: light for light.' }
```

Regole di equilibrio per `drills`: almeno **quattro tipi diversi**, almeno un `gap`, almeno un
`build`, e — dalle unità con verbi in poi — almeno un `conjugate`.

Il correttore del testo è tollerante (ignora accenti, maiuscole e doppie), quindi `answer`
va scritta nella forma **esatta e corretta**: è quella che il giocatore vede dopo.

---

## 7. Traslitterazione (obbligatoria, sempre uguale)

| Segno | Suono | Nota |
|---|---|---|
| `7` | ح | soffio forte in gola |
| `3` | ع | il suono "strizzato" |
| `2` | ء e ق | colpo di glottide: in libanese la qaaf **è** un `2` |
| `S D T Z` | ص ض ط ظ | **maiuscole enfatiche**: la maiuscola cambia la parola |
| `é` / `éé` | e chiusa / lunga | non ridurre mai a `e` semplice |
| vocali doppie | lunghe | `aa` `ii` `uu` |
| `kh` `gh` `sh` | خ غ ش | |

L'articolo si scrive `el-` e si assimila davanti alle lettere solari: `esh-shems`, `en-nouur`,
`et-tilifon`. Va scritto come si pronuncia.

---

## 8. Dopo aver scritto il file

1. Controllare che la parentesi finale sia `});` e che il file sia JavaScript valido.
2. Aggiungere lo `<script src="data/unit-NN-slug.js"></script>` in `index.html`, in ordine,
   prima di `js/app.js`.
3. Ricaricare la pagina e aprire la console: zero errori.
4. Andare su **`index.html#/check`**: è il controllore interno, elenca ogni violazione dello
   schema (blocchi mancanti, `answer` che non punta a nessuna opzione, tessere che non bastano
   a costruire la frase, troppo pochi tipi di esercizio). Deve dire *"Every unit obeys
   SCHEMA.md"*.
5. Meglio ancora, dalla cartella del progetto: **`node verifica.js`**. Legge i file da disco —
   quindi non può mostrare una versione vecchia, come invece succede alla pagina aperta da
   `file://`, che tiene in cache gli script — e controlla anche ciò che il controllore interno
   non vede: la stessa parola scritta in due modi in unità diverse, la qaaf scritta `q`,
   l'italiano rimasto per sbaglio.

> Nota sul correttore della scrittura: perdona accenti, maiuscole, trattini e doppie, ma **non**
> perdona `7`, `3` e `2` — sono suoni diversi da `h`, `a` e nulla, e confonderli è l'errore che
> l'app deve correggere. Non mettere in `accept` varianti come `sabah el kheer`: verrebbero
> comunque rifiutate.
