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
   (i moduli ES sono bloccati da `file://`). Solo `<script src>` classici.

## Struttura

```
index.html          il guscio; elenca tutti gli script
css/style.css       tema unico, responsive, adatto anche al telefono
js/data.js          il registro: window.LEB (va caricato per primo)
js/store.js         progressi, XP, serie di giorni, ripasso dilazionato (localStorage)
js/drills.js        i sei tipi di esercizio: come si disegnano e come si correggono
js/app.js           schermate e navigazione
data/00-reference.js  tabelle di riferimento (suoni, suffissi, griglia verbale, tempi)
data/unit-NN-*.js     una unità = un file
SCHEMA.md           il contratto dei dati: da leggere prima di scrivere un'unità
```

## Come si aggiunge un'unità

1. Scrivere `data/unit-NN-nome.js` seguendo `SCHEMA.md`.
2. Aggiungere la riga `<script src="data/unit-NN-nome.js"></script>` in `index.html`,
   **prima** di `js/app.js`.
3. Ricaricare la pagina: l'unità compare da sola nel percorso.

## Cosa non fare

- Non aggiungere librerie esterne o CDN: l'app deve restare offline.
- Non usare la sintesi vocale del browser per il libanese: le voci disponibili sono in arabo
  standard e insegnerebbero la pronuncia sbagliata. L'audio, se arriverà, saranno file veri.
- Non toccare la skill `arabo-libanese`: è la fonte, si legge e basta.
