/* serve.js — il server per guardare l'app, da fare girare con `node serve.js`.

   Non serve all'app: l'app si apre col doppio clic e continuerà a farlo. Serve
   a *verificarla*. Il pannello browser misura e fotografa solo pagine servite
   via http — da `file://` restituisce una finestra 0×0 e istantanee vecchie —
   quindi senza un server non si può controllare con gli occhi se una modifica
   alla grafica è davvero arrivata a schermo.

   Due dettagli che sembrano pignoleria e non lo sono:

   `Cache-Control: no-store` su tutto. Senza, il service worker dell'app fa il
   suo mestiere alla lettera e continua a servire la copia che si è messo da
   parte: si finisce per guardare a lungo una schermata vecchia convinti che le
   modifiche non funzionino, quando semplicemente non sono mai state caricate.

   Niente dipendenze. Il progetto non ha `node_modules` e non deve averne. */

const http = require('http');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const PORTA = Number(process.argv[2]) || 8137;

const TIPI = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.mp3': 'audio/mpeg',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.md': 'text/plain; charset=utf-8'
};

http.createServer((req, res) => {
  const chiesto = decodeURIComponent(req.url.split('?')[0]);
  let rel = chiesto === '/' ? 'index.html' : chiesto.replace(/^\/+/, '');
  const pieno = path.join(DIR, rel);

  /* Non si esce dalla cartella del progetto, nemmeno per sbaglio. */
  if (!pieno.startsWith(DIR)) {
    res.writeHead(403).end('fuori perimetro');
    return;
  }

  fs.readFile(pieno, (err, dati) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end('non trovato: ' + rel);
      return;
    }
    res.writeHead(200, {
      'Content-Type': TIPI[path.extname(pieno).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    res.end(dati);
  });
}).listen(PORTA, () => {
  console.log('Lebanese Path su http://localhost:' + PORTA + '  (no-store, Ctrl+C per fermare)');
});
