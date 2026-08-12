# Mettere l'app online e su telefono

> Guida in italiano, per fedi. L'app in sé è tutta in inglese: questo file è di servizio,
> come `CLAUDE.md` e `LEGGIMI.md`.

---

## FATTO — l'app è online dal 12 agosto 2026

**Indirizzo: <https://fedi109-del.github.io/>**

È questo il link da mandare a chiunque. Si apre su qualsiasi telefono, computer o tablet,
senza scaricare niente e senza account.

Repository: <https://github.com/fedi109-del/fedi109-del.github.io> (pubblico).

I passi 1-4 qui sotto sono quindi **già eseguiti**, e restano solo per memoria di come si
è fatto. Quello che ti riguarda ancora è il **passo 5** (l'iPhone di tuo fratello) e il
**passo 6** (l'APK), più la sezione «Aggiornare l'app in futuro» in fondo.

### Se qualcosa non funzionasse: la VPN

Il primo tentativo di pubblicare è fallito con un timeout verso `api.github.com`. Non era
GitHub: era la **VPN OpenVPN**, che ha una MTU di 1380 invece di 1500. I pacchetti piccoli
passano, quelli grandi — la stretta di mano TLS, il `git push` — vengono scartati in
silenzio. Se un comando verso GitHub va in timeout, **stacca la VPN e riprova**: è quella.

Sul repository sono già impostati quattro parametri che rendono il push più tollerante
(`http.version HTTP/1.1`, `postBuffer` grande, nessun timeout per lentezza).

Alla fine di questa pagina avrai tre cose:

1. **un indirizzo web** da mandare a chiunque, che funziona su qualsiasi telefono;
2. **l'app installata sulla schermata iniziale** dell'iPhone di tuo fratello, a schermo
   intero e funzionante anche senza rete;
3. **un file `.apk`** da scaricare e tenere, per Android.

Il lavoro è già fatto tutto: l'app è pronta, il repository è già creato e il primo commit
è già stato fatto. Restano solo i passaggi che richiedono **il tuo account**, e che quindi
devi fare tu.

---

## Prima cosa da sapere: l'iPhone

Non esiste alcun modo gratuito di installare un file su un iPhone. Apple lo permette solo
attraverso l'App Store o TestFlight, e per entrambi servono 99 € l'anno di iscrizione al
programma sviluppatori e un Mac con Xcode. Non c'è una scorciatoia: chi dice il contrario
sta parlando di Android.

Quello che invece si può fare su iPhone, **gratis e in tre tocchi**, è aggiungere l'app
alla schermata iniziale da Safari. Il risultato pratico è indistinguibile da un'app
scaricata: icona propria, nome proprio, si apre a schermo intero senza la barra del
browser, e continua a funzionare in aereo. L'app è stata costruita apposta perché questo
funzioni, e quando tuo fratello aprirà il link con Safari comparirà da sola una riga che
gli spiega cosa toccare.

Su Android invece l'APK si può fare davvero, ed è il punto 3.

---

## Passo 1 — Il conto GitHub

Se non ce l'hai già: <https://github.com/signup>. È gratuito, servono due minuti e una
mail. Segnati il **nome utente** che scegli, serve subito dopo.

## Passo 2 — Creare il repository

Vai su <https://github.com/new> e compila così:

| Campo | Cosa mettere |
|---|---|
| **Repository name** | `NOMEUTENTE.github.io` — con il *tuo* nome utente, esattamente, tutto minuscolo |
| **Public / Private** | **Public** |
| Add a README | **lascia disattivato** |
| Add .gitignore | **lascia su None** |
| Choose a license | **lascia su None** |

Poi **Create repository**.

> **Perché quel nome esatto.** Un repository chiamato `NOMEUTENTE.github.io` diventa un
> sito alla radice del dominio (`https://nomeutente.github.io/`) invece che in una
> sottocartella. Serve al punto 3: il generatore di APK deve poter mettere un file di
> verifica in `/.well-known/`, e quella cartella esiste solo alla radice. Se il sito
> stesse in una sottocartella, l'app Android si aprirebbe con la barra dell'indirizzo
> del browser sopra, e sembrerebbe una pagina web invece che un'app.

> **Sul "Public".** GitHub Pages gratuito richiede un repository pubblico: il codice
> dell'app sarà visibile a chiunque. Non è un problema di diritti — il contenuto è stato
> scritto da zero e la verifica anti-copia è stata approvata — ma è giusto che tu lo
> sappia prima di premere il bottone, non dopo.

## Passo 3 — Mandare su i file

GitHub, subito dopo la creazione, ti mostra una pagina con dei comandi. **Ignorala** e usa
questi due, dalla cartella del progetto, mettendo il tuo nome utente al posto di
`NOMEUTENTE`:

```
git remote add origin https://github.com/NOMEUTENTE/NOMEUTENTE.github.io.git
git push -u origin main
```

Al primo `push` si aprirà una finestra per entrare nel tuo conto GitHub: accedi da lì.

## Passo 4 — Accendere il sito

Vai su `https://github.com/NOMEUTENTE/NOMEUTENTE.github.io/settings/pages`.

Sotto **Source** scegli **Deploy from a branch**, come branch `main`, come cartella
`/ (root)`, e premi **Save**.

Aspetta un minuto o due. Poi apri:

```
https://NOMEUTENTE.github.io/
```

**Questo è il link da mandare a tuo fratello.** Funziona su qualsiasi telefono, computer
o tablet, senza installare niente.

---

## Passo 5 — L'app sull'iPhone di tuo fratello

Gli mandi il link e gli dici solo questo:

> Aprilo con **Safari** (non con Chrome: su iPhone solo Safari sa farlo).
> Tocca il bottone **Condividi** in basso — il quadrato con la freccia che esce.
> Scorri l'elenco fino a **Aggiungi a Home**, e conferma.

Comparirà l'icona del cedro sulla sua schermata. Da quel momento l'app si apre a schermo
intero, si ricorda i suoi progressi, e funziona anche senza rete.

Quando aprirà il link, l'app gli mostrerà da sola una riga con queste stesse istruzioni:
non deve ricordarsele.

Su Android il discorso è ancora più semplice: Chrome propone da solo **«Installa app»**,
e basta accettare.

---

## Passo 6 — L'APK per te

Serve che il sito del passo 4 sia già online e raggiungibile.

1. Vai su <https://www.pwabuilder.com/>.
2. Incolla `https://NOMEUTENTE.github.io/` nella casella e premi **Start**.
3. Il sito analizza l'app e dà un punteggio. Deve trovare manifest, service worker e
   icone: ci sono tutti e tre, li ho verificati.
4. Premi **Package for stores**, poi il riquadro **Android**.
5. Nelle opzioni lascia tutto com'è, ma controlla che ci sia:
   - *Package ID*: qualcosa tipo `io.github.nomeutente.lebanese`
   - *Signing key*: **Create new** (la prima volta)
6. Premi **Download package**. Scarichi un file `.zip`.

Dentro lo zip trovi:

- **`app-release-signed.apk`** — questo è il file da mandare o installare. Su Android:
  aprirlo, e alla richiesta «consenti installazione da questa origine» rispondere di sì.
- **`assetlinks.json`** — questo serve per il passo qui sotto.
- **`signing.keystore` e le password** — **conservali**. Senza quelli non potrai mai
  pubblicare un aggiornamento della stessa app: Android lo rifiuterebbe come app diversa.

### Togliere la barra dell'indirizzo dall'APK

Se apri l'APK e vedi la barra del browser in cima, è perché manca il file di verifica.
Si risolve una volta sola:

1. Nella cartella del progetto crea una cartella `.well-known` e metti dentro il file
   `assetlinks.json` che hai trovato nello zip.
2. Poi:

```
git add -A
git commit -m "assetlinks per l'app Android"
git push
```

3. Disinstalla e reinstalla l'APK. La barra sparisce.

---

## Aggiornare l'app in futuro

Ogni volta che cambi qualcosa — una unità nuova, una correzione:

```
node verifica.js
git add -A
git commit -m "cosa hai cambiato"
git push
```

Entro un minuto il sito online è aggiornato, e tutti quelli che hanno l'app sul telefono
la vedranno aggiornata alla riapertura successiva.

**Attenzione a una cosa sola:** se aggiungi un file nuovo, oltre a metterlo in
`index.html` devi aggiungerlo anche alla lista `ASSETS` dentro `sw.js`, e cambiare la
riga `var VERSION` (per esempio da `v1` a `v2`). Altrimenti chi ha già l'app installata
continuerà a vedere la versione vecchia, presa dalla sua copia offline.

Non devi ricordartelo: `node verifica.js` controlla proprio questo e te lo dice.

---

## Se qualcosa non va

| Sintomo | Causa quasi certa |
|---|---|
| La pagina è bianca | GitHub Pages non ha ancora finito. Aspetta due minuti e ricarica. |
| Vedo il codice invece dell'app | Nelle impostazioni Pages la cartella non è `/ (root)`. |
| Le modifiche non si vedono sul telefono | La copia offline è vecchia: cambia `VERSION` in `sw.js` e ripubblica. |
| PWABuilder dice che manca il manifest | Hai incollato il link sbagliato: deve finire con `/`. |
| L'APK mostra la barra dell'indirizzo | Manca `.well-known/assetlinks.json`: vedi sopra. |
