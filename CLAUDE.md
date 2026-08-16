# Lebanese Path — scheda progetto

> Progetto nato il 2026-08-12. Perimetro: **questa cartella e basta** (Legge 1).

## Cos'è

Un'applicazione per imparare il **dialetto libanese** (levantino), da zero fino a livello
intermedio-avanzato. Si apre facendo doppio clic su `index.html`: nessuna installazione,
nessun server, nessuna connessione a internet.

## Le quattro leggi di questo progetto

1. **Solo libanese.** Mai arabo standard (fuS7a). Se una forma esiste solo in MSA, non entra
   nell'app. Il qaaf si pronuncia glottale (`2`), non `q`.
2. **Da inglese a libanese.** Interfaccia, spiegazioni, consegne, tutto in inglese.
   L'italiano vive solo in questi file di servizio (`CLAUDE.md`, `LEGGIMI.md`) e nelle
   conversazioni con fedi.
3. **Contenuto originale.** La skill `arabo-libanese` è la fonte dei *fatti* (grammatica,
   vocabolario, coniugazioni: non sono protetti da copyright). Non lo è delle *espressioni*:
   nessun dialogo, esempio o ordine di lezioni del libro di Chaghig Filian viene riprodotto.
   Vedi `SCHEMA.md` § "Regola anti-copia".
4. **Deve funzionare col doppio clic.** Niente build, niente npm, niente `import`/`export`
   (i moduli ES sono bloccati da `file://`). Solo `<script src>` classici. Da quando l'app
   vive anche online (vedi `PUBBLICA.md`) questa legge non è cambiata: il doppio clic resta
   il modo principale di aprirla, e tutto ciò che riguarda l'installazione sul telefono si
   spegne da solo quando l'indirizzo comincia per `file://`.

## Struttura

```
index.html            il guscio; elenca tutti gli script
css/style.css         tema unico ("Beirut al tramonto"), chiaro e scuro, adatto al telefono
js/data.js            il registro: window.LEB (va caricato per primo)
js/store.js           progressi, XP, serie di giorni, ripasso dilazionato (localStorage)
js/art.js             tutti i disegni: glifi delle unità, scene delle tappe, marchio
js/audio.js           il player e i pulsanti di ascolto; window.Say
js/pic.js             quali fotografie esistono e dove si appendono; window.Pic
js/drills.js          i sette tipi di esercizio: come si disegnano e come si correggono
js/runner.js          una sessione di esercizi: pratica, quiz, ripasso
js/app.js             schermate e navigazione
js/install.js         schermata iniziale del telefono e copia offline; muto sotto file://
data/00-reference.js  tabelle di riferimento (suoni, suffissi, griglia verbale, tempi)
data/unit-NN-*.js     una unità = un file
data/audio-manifest.js  quali tracce esistono davvero; generato, non si scrive a mano
data/image-manifest.js  quali fotografie esistono, coi crediti; generato
audio/                le tracce .mp3, più l'elenco di quelle che mancano
images/lista.js       che cosa cercare, parola per parola: si scrive a mano
images/unit/          una copertina per unità: quaranta luoghi del Libano
images/vocab/         una fotografia per parola raffigurabile
images/CREDITI.md     autore e licenza di ogni foto; generato

immagini.js           scarica le foto da Wikimedia Commons; `node immagini.js`
voci-controllo.js     misura le tracce e trova quelle tagliate; `node voci-controllo.js`
serve.js              un server statico no-store per guardare l'app; `node serve.js`

manifest.webmanifest  come si chiama e che faccia ha l'app una volta installata
sw.js                 la copia offline: elenco dei file + strategia "prima la cache"
icons/                le icone vere in PNG, generate da icone.js
icone.js              le disegna da zero e le scrive; si rilancia con `node icone.js`
verifica.js           il controllo completo da disco; si lancia con `node verifica.js`
voci.js               la catena dell'audio; si lancia con `node voci.js`

SCHEMA.md             il contratto dei dati: da leggere prima di scrivere un'unità
PUBBLICA.md           come metterla online e ricavarne l'APK Android

nativa/               l'involucro nativo (Capacitor): android/ e ios/ sono progetti veri
nativa/copia.js       assembla nativa/www dai file dell'app; niente si modifica lì dentro
.github/workflows/android.yml   compila l'APK a ogni push su main e aggiorna la
                      release "app-android" (link di scaricamento stabile)
.nojekyll             dice a GitHub Pages di servire i file grezzi, senza Jekyll
```

## L'involucro nativo

L'app resta una sola: quella che si apre col doppio clic. La cartella `nativa/` le mette
attorno un guscio Capacitor per gli store: `node copia.js` ricopia i file dell'app in
`nativa/www` (senza `sw.js`: nel guscio i file sono già sul telefono), e `npx cap sync`
li porta dentro i progetti Android e iOS. L'APK di prova lo compila GitHub Actions, non
il computer di casa. Dentro il guscio l'app si riconosce dal token `LebanesePathApp`
nello user agent (vedi `js/install.js`) e spegne da sola service worker e inviti
all'installazione. Il progetto iOS è pronto ma si compila solo su un Mac con l'account
Apple Developer.

## L'audio

Nessuna traccia è registrata: ci sono l'impianto e l'elenco. `node voci.js` legge tutte le
unità, scrive in `audio/DA-DIRE.md` le ~1200 tracce che servono, guarda quali `.mp3` ci sono
davvero e aggiorna `data/audio-manifest.js`. È quel manifesto a decidere dove compare un
altoparlante: **niente file, niente pulsante**, così un corso senza audio non si riempie di
tasti morti. Basta far cadere gli mp3 in `audio/` col nome giusto e rilanciare `voci.js`.

Il divieto della voce del browser resta: le voci arabe dei telefoni parlano arabo standard,
direbbero *qahwa* per il caffè e insegnerebbero una pronuncia che in Libano non usa nessuno.

`node voci-controllo.js` è il collaudo: misura ogni traccia e dichiara rotte quelle che si
interrompono a metà parola. Serve perché il difetto è invisibile a occhio — il file c'è, pesa
qualcosa, l'altoparlante compare — e si scopre solo ascoltando. Due prove indipendenti, e una
traccia è condannata solo se cadono tutt'e due: dura molto meno delle tracce di pari sillabe
**e** finisce a volume pieno invece che in silenzio. L'esito sta in `audio/DA-RIFARE.md`.

## Le immagini

Vengono da Wikimedia Commons, sotto licenze libere, e si scaricano una volta con
`node immagini.js`. Da lì in poi vivono su disco: **la quarta legge non è toccata**, perché la
rete la usa lo script che prepara il corso, non l'app che lo studia.

Comanda il manifesto, come per l'audio: niente file, niente immagine, e al posto della foto
resta il glifo disegnato. Non tutte le parole ne hanno una, ed è voluto: `khedme` (il favore),
`ra2y` (l'opinione), `kheer` (il bene) non hanno una faccia, e mettere una foto qualsiasi
accanto a una parola astratta insegna a chi studia che le immagini non vogliono dire niente.

Le copertine delle unità non illustrano la grammatica — non è illustrabile — ma sono quaranta
luoghi veri del Libano, in ordine di percorso: si comincia dalla Corniche di Beirut e si
finisce sulle montagne di Jezzine. Coerenti per costruzione, perché quaranta fotografie dello
stesso paese si somigliano.

Quel che non si è trovato è scritto in `images/MANCANTI.md`, e va letto: una voce lì dentro
può voler dire che la cosa non è fotografabile (e allora va bene così) oppure che la ricerca
in `images/lista.js` è scritta male (e allora si aggiusta). Senza quel file un giro finito con
«prese 108, mancanti 24» sembra un successo e i buchi scompaiono nel terminale.

Le licenze vogliono il nome dell'autore: sta in `images/CREDITI.md` e nella schermata
`#/credits` dentro l'app, che funziona offline. Un'attribuzione che ha bisogno della rete non
è un'attribuzione.

## Il percorso è tutto aperto

Nessuna unità è chiusa a chiave. Chi vuole la disciplina accende **Guided path** nelle
impostazioni e allora ogni unità aspetta l'80% della precedente; da spento — cioè sempre,
salvo richiesta — si va dove si vuole. Se un giorno l'app diventerà a pagamento, il blocco
sarà un'altra cosa e passerà da un'altra parte.

## Verificare la grafica

Il pannello browser misura e fotografa solo pagine servite via `http://`: da `file://` dà
finestra 0×0 e istantanee vecchie. Il server c'è già: `node serve.js` (porta 8137), e serve
tutto con `Cache-Control: no-store` — senza, il service worker continua a servire la sua copia
e si finisce per guardare a lungo modifiche che non sono mai arrivate a schermo.

Per guardare molte immagini insieme, montare un provino a contatto con ffmpeg **e non usare il
filtro `tile`**: tronca silenziosamente a quattro fotogrammi e fa credere che le altre non
esistano. Va usato `xstack` con gli ingressi elencati uno per uno.

## Come si aggiunge un'unità

1. Scrivere `data/unit-NN-nome.js` seguendo `SCHEMA.md`.
2. Aggiungere la riga `<script src="data/unit-NN-nome.js"></script>` in `index.html`,
   **prima** di `js/app.js`.
3. Aggiungere lo stesso percorso alla lista `ASSETS` dentro `sw.js`, e alzare di uno la
   riga `var VERSION`. Se lo dimentichi, sul telefono l'app resta alla versione vecchia
   perché continua a servirsi dalla propria copia offline.
4. Lanciare `node verifica.js`: controlla anche il punto 3 e si lamenta se manca.
5. Lanciare `node voci.js`: aggiunge le nuove frasi all'elenco delle tracce da registrare.
6. Ricaricare la pagina: l'unità compare da sola nel percorso.

## Cosa non fare

- Non aggiungere librerie esterne o CDN: l'app deve restare offline.
- Non usare la sintesi vocale del browser per il libanese: le voci disponibili sono in arabo
  standard e insegnerebbero la pronuncia sbagliata. L'audio, se arriverà, saranno file veri.
- Non toccare la skill `arabo-libanese`: è la fonte, si legge e basta.
