# Lebanese Path — libretto d'istruzioni

## Come si apre

Doppio clic su **`index.html`**. Si apre nel browser e funziona: niente installazione, niente
internet, nessun account. I progressi restano su questo computer, dentro il browser che hai
usato per aprirla (se la apri con Chrome e poi con Edge, sono due percorsi separati).

## Come si mette sul telefono

C'è un modo che funziona e uno che non funziona.

**Non funziona** copiare la cartella dentro il telefono e aprire `index.html` da lì: né
iPhone né Android permettono di aggiungere alla schermata iniziale una pagina aperta come
file, e la copia offline non parte.

**Funziona** mettere l'app online una volta sola e poi aprire quell'indirizzo dal telefono.
La procedura completa, passo per passo, è in **`PUBBLICA.md`**: alla fine hai un link da
mandare a chiunque, l'icona sulla schermata iniziale, e — se ti serve — un file `.apk` per
Android.

Una volta aggiunta alla schermata, l'app si apre a schermo intero, senza barra del browser,
**e continua a funzionare senza rete**: al primo avvio si copia tutta dentro il telefono.

Attenzione a una cosa: i progressi vivono nel browser che stai usando, non in un account.
Il percorso sul computer e quello sul telefono sono due percorsi separati, e non si parlano.

## Com'è fatto il percorso

Cinque stadi, quaranta unità, dal primo saluto alla lite sul traffico.

| Stadio | Livello | Unità | Cosa ti dà |
|---|---|---|---|
| **First Words** | A0 | 1-6 | suoni e scrittura, saluti a coppie, pronomi, dimostrativi, numeri e prezzi, momenti del giorno, i suffissi possessivi e la famiglia |
| **Getting By** | A1 | 7-14 | volere, avere, potere, negare, descrivere, il cibo, l'ora, i luoghi — **tutto senza un solo verbo coniugato** |
| **Everyday Actions** | A2 | 15-23 | il presente (radice + prefisso), i verbi quotidiani, la caduta della `b-`, la giornata, gli imperativi, i comparativi, taxi, albergo, parolette di reazione |
| **Time and Stories** | B1 | 24-32 | `3am` per l'adesso, `ra7` per il domani, il passato e il sistema a due radici, raccontare, `kéén`, `Sar-l-`, la serata al ristorante, la salute |
| **Real Talk** | B2 | 33-40 | participi, congiunzioni, lavoro, opinioni, lamentele, inviti, il barbiere, la palestra e la presa in giro fra amici |

L'ordine **non è quello del libro da cui viene la grammatica**: è riorganizzato per funzione
comunicativa. Il libro insegna il presente alla lezione 7 e il passato alla 21; qui i tempi
verbali stanno tutti insieme nello stadio 4, e i primi due stadi ti fanno parlare davvero
prima ancora di incontrare un verbo — perché in libanese si può.

## Come si studia un'unità

1. **Leggi** — spiegazioni, tabelle, esempi, poi le parole e le formule.
2. **Practice** — 10-14 esercizi. Ripetibile all'infinito, non conta per il punteggio.
3. **Quiz** — 8-10 esercizi più difficili. **Da 80% in su l'unità è superata** e si apre la
   successiva. Sotto, non si perde niente: si rifà.

I sei tipi di esercizio: scelta multipla, costruzione della frase a tessere, scrittura,
abbinamento, coniugazione, e il buco dentro una conversazione.

## Il ripasso

Ogni parola e ogni formula che incontri entra da sola in una coda di ripasso. Il pulsante
**to review** in alto dice quante ne sono scadute. Quello che indovini si allontana nel tempo
(1, 2, 4, 9, 21, 45 giorni); quello che sbagli torna domani. È il meccanismo che fa la
differenza fra ricordare per una settimana e ricordare per anni: usalo tutti i giorni, anche
solo cinque minuti, invece di fare tre unità nuove di fila.

## Impostazioni

- **Show Arabic script** — la scrittura araba accanto a quella latina. Attiva di partenza:
  toglila se ti distrae, rimettila quando vuoi allenare l'occhio per insegne e menu.
- **Open every unit** — spenta di partenza. Accendila se vuoi girare libero invece di
  seguire il percorso.
- **Erase my progress** — azzera tutto su questo dispositivo.

## Due cose sulla lingua

**È libanese, non arabo standard.** La qaaf si pronuncia come un colpo di glottide (`2ahwe`,
non *qahwa*), non esiste il verbo "avere", non esiste "volere", e non c'è il verbo "essere" al
presente. Alcune frasi di quest'app sarebbero sbagliate in un esame di arabo classico: è
esattamente il punto.

**Dall'inglese, non dall'italiano.** Dentro l'app è tutto inglese, di proposito: è la lingua
ponte con cui il libanese viene insegnato e scritto in rete, e ti evita di passare per una
terza lingua ogni volta.

## Sul diritto d'autore

La grammatica viene dalla skill `arabo-libanese`, estratta a sua volta da un manuale
protetto. Dal manuale sono stati presi i **fatti** — regole, coniugazioni, significati delle
parole: la lingua non è di nessuno e non è coperta da copyright. Non sono state prese le
**espressioni**: nessun dialogo, esempio o frase del libro compare qui, l'ordine delle lezioni
è diverso, e i termini coniati dall'autrice sono stati sostituiti con quelli linguistici
standard (i suoi *"fake verbs"* qui si chiamano **suffix verbs**). Ogni frase dell'app è
scritta da zero.

Se un giorno vorrai le registrazioni audio o i video, quelli restano dell'autrice e si
prendono comprando il suo libro.

## Aggiungere o correggere contenuto

Ogni unità è un file dentro `data\`. Il contratto è in `SCHEMA.md`: rispettalo e l'unità
compare da sola. Per aggiungerne una nuova serve anche una riga `<script src="...">` in
`index.html`. Non servono strumenti, si modifica col Blocco note.
