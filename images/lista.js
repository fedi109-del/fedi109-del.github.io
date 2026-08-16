/* images/lista.js — che cosa cercare, parola per parola.

   Questo file è il motivo per cui le immagini dell'app sono coerenti invece che
   casuali. La strada facile sarebbe passare a un motore di ricerca la glossa
   inglese e prendere il primo risultato: darebbe per `2ahwe` una tazza di caffè
   americano, per `souu2` un supermercato, per `khebz` un pane in cassetta. Tutte
   immagini di qualcosa; nessuna immagine di quello che l'app insegna.

   Qui ogni voce ha una ricerca scritta a mano, e dove la parola è libanese prima
   che generica la ricerca lo dice: `2ahwe` cerca il caffè arabo nella sua tazzina,
   `khebz` il pane piatto, `service` la vecchia Mercedes che a Beirut fa da taxi
   collettivo. Alcune parole hanno anche un elenco `no`: parole che, se compaiono
   nel titolo della foto, la scartano — è così che si tiene fuori la torta dalla
   ricerca del pane.

   Le parole astratte non ci sono, e non è una dimenticanza. `kheer` (il bene),
   `meshkle` (il problema), `ra2y` (l'opinione), `khedme` (il favore) non hanno una
   faccia: qualunque foto ci si metta accanto sarebbe decorazione, e insegnerebbe
   al lettore ad ignorare le immagini. Dove non c'è una foto onesta resta il glifo
   disegnato di `js/art.js`, che non finge di raffigurare niente.

   Le chiavi sono le stesse di `js/audio.js`: derivate dalla traslitterazione. La
   stessa parola incontrata in tre unità è una immagine sola.

   Si usa con `node immagini.js`. */

/* --------------------------------------------------------------------------
   1. LE COPERTINE DELLE UNITÀ — quaranta luoghi del Libano

   Il primo tentativo cercava una scena che illustrasse l'argomento della
   lezione: per "Chi sei" due persone che parlano a un tavolino, per "Fare
   progetti" degli amici a cena. Ha prodotto un manoscritto miniato, una sala di
   politici, un cartello tedesco e una foto in lingerie, e la ragione non era la
   ricerca scritta male: era la fonte. Commons è un archivio da enciclopedia.
   Contiene il mondo in quanto oggetto e in quanto luogo — non contiene la vita
   quotidiana messa in posa, che è merce da archivio commerciale.

   Allora le copertine smettono di illustrare la grammatica, che non è
   illustrabile, e diventano quaranta posti veri del Libano. Il vantaggio non è
   solo che le foto esistono e sono belle: è che diventano coerenti per
   costruzione — quaranta fotografie dello stesso paese si somigliano perché
   ritraggono la stessa luce — e che chi impara la lingua vede intanto dove la
   si parla. Una copertina non deve spiegare la lezione: deve far venire voglia
   di aprirla.

   L'ordine segue il percorso: si comincia da Beirut, si sale in montagna, si
   torna al mare, si finisce nella valle. `no` tiene fuori quel che un archivio
   di enciclopedia mette sempre in mezzo — mappe, stemmi, francobolli, stampe
   antiche — cioè immagini di un luogo che non sono fotografie del luogo.

   Ogni voce dichiara il proprio `s`: la parola che deve comparire nel titolo
   della fotografia perché quella fotografia sia di questo posto e non di un
   posto vicino. Per i luoghi è il nome proprio — `raouche`, `baalbek`, `jeita` —
   che è il modo più severo e più semplice di dire "questo, non un altro".
   -------------------------------------------------------------------------- */
const fuoriLuogo = ['map', 'coat of arms', 'flag', 'stamp', 'coin', 'seal of',
  'banknote', 'aerial', 'satellite'];

function luogo(s, q) { return { s: s, q: q, no: fuoriLuogo }; }

const unita = {
  /* Tappa 1 — Beirut, dove si arriva */
  u01: luogo('corniche', 'corniche beirut sea promenade'),
  u02: luogo('raouche', 'raouche pigeon rocks beirut'),
  u03: luogo('gemmayze', 'gemmayze beirut street'),
  u04: luogo('souks', 'beirut souks market'),
  u05: luogo('sannine', 'sannine mount snow lebanon', ['sea', 'beach', 'coast']),
  u06: luogo('beiteddine', 'beiteddine palace lebanon'),

  /* Tappa 2 — la costa antica */
  u07: luogo('jbeil', 'jbeil byblos lebanon'),
  u08: luogo('byblos', 'byblos castle citadel lebanon'),
  u09: luogo('sidon', 'sidon sea castle lebanon'),
  u10: luogo('tyre', 'tyre roman columns site lebanon'),
  u11: luogo('tripoli', 'tripoli lebanon citadel', ['panorama', 'general view']),
  u12: luogo('tripoli', 'tripoli souk market lebanon', ['citadel', 'panorama']),
  u13: luogo('nejmeh', 'nejmeh square beirut clock'),
  u14: luogo('batroun', 'batroun lebanon'),

  /* Tappa 3 — la montagna */
  u15: luogo('cedars', 'cedars lebanon forest trees'),
  u16: luogo('qadisha', 'qadisha valley lebanon'),
  u17: luogo('bcharre', 'bcharre lebanon village mountain'),
  u18: luogo('ehden', 'ehden lebanon'),
  u19: luogo('qamar', 'deir el qamar lebanon'),
  u20: luogo('chouf', 'chouf cedar reserve lebanon'),
  u21: luogo('faraya', 'faraya mzaar lebanon mountain'),
  u22: luogo('harissa', 'harissa lady lebanon jounieh'),
  u23: luogo('jounieh', 'jounieh bay lebanon'),

  /* Tappa 4 — l'acqua e la pietra */
  u24: luogo('jeita', 'jeita grotto cave', ['souvenir', 'bottle', 'shop', 'gift']),
  u25: luogo('baatara', 'baatara gorge waterfall lebanon'),
  u26: luogo('afqa', 'afqa cave river lebanon'),
  u27: luogo('kalb', 'nahr el kalb lebanon river'),
  u28: luogo('ibrahim', 'nahr ibrahim valley lebanon'),
  u29: luogo('tannourine', 'tannourine cedar forest lebanon'),
  u30: luogo('laqlouq', 'laqlouq lebanon mountain'),
  u31: luogo('anjar', 'anjar umayyad ruins lebanon'),
  u32: luogo('baalbek', 'baalbek bacchus temple lebanon'),

  /* Tappa 5 — la valle e il ritorno */
  u33: luogo('baalbek', 'baalbek jupiter columns lebanon'),
  u34: luogo('zahle', 'zahle lebanon'),
  u35: luogo('bekaa', 'bekaa valley lebanon'),
  u36: luogo('ksara', 'ksara winery cellar lebanon'),
  u37: luogo('aley', 'aley lebanon town'),
  u38: luogo('brummana', 'brummana lebanon'),
  u39: luogo('douma', 'douma lebanon village houses'),
  u40: luogo('jezzine', 'jezzine lebanon')
};

/* --------------------------------------------------------------------------
   2. LE PAROLE
   Raggruppate per tema, che è anche il modo in cui l'occhio le ritrova.
   -------------------------------------------------------------------------- */
function p(s, q, no) { return { s: s, q: q, no: no }; }

const parole = {

  /* --- da bere: la tazzina è libanese, non americana --- */
  '2ahwe': p('coffee', 'arabic coffee cup cardamom', ['machine', 'plantation', 'bean field']),
  'shaay': p('tea', 'tea glass mint leaves'),
  'maay': p('water', 'water glass drinking', ['waterfall', 'sea', 'lake', 'river', 'tower', 'bee', 'colour', 'color']),
  '3asiir': p('juice', 'orange juice glass fresh'),
  'nbiid': p('wine', 'red wine glass poured'),
  '7aliib': p('milk', 'milk glass white', ['coffee', 'thistle']),
  'fenjeen': p('cup', 'coffee cup saucer small', ['paper cup', 'world cup']),
  'kees': p('glass', 'drinking glass tumbler empty', ['wine', 'magnifying', 'stained']),
  '2anniine': p('bottle', 'glass bottle water', ['message', 'ship']),
  'mortbeen': p('jar', 'glass jar preserves lid'),

  /* --- da mangiare: il pane è piatto, la colazione è libanese --- */
  'khebz': p('bread', 'flatbread pita bread arabic', ['cake', 'toast', 'sandwich']),
  'jebne': p('cheese', 'white cheese slices plate', ['cheeseburger']),
  'zaytouun': p('olives', 'green olives bowl', ['tree', 'branch', 'grove']),
  'banadouura': p('tomatoes', 'fresh tomatoes red'),
  'teffee7': p('apples', 'red apples fruit basket', ['computer', 'logo', 'tree', 'orchard']),
  'laymouun': p('oranges', 'oranges fruit market', ['tree', 'grove', 'blossom', 'juice', 'apple']),
  'khodra': p('vegetables', 'fresh vegetables market display'),
  'fweeke': p('fruit', 'fruit market stall display'),
  'la7me': p('meat', 'raw meat butcher counter'),
  'bayd': p('eggs', 'eggs carton fresh chicken', ['easter', 'nest', 'fossil']),
  't7iin': p('flour', 'flour bowl baking white'),
  'meeza': p('mezze', 'lebanese mezze table plates'),
  'terwii2a': p('breakfast', 'breakfast table lebanese spread'),
  '3asha': p('dinner', 'dinner table lebanese meal', ['burger', 'fries', 'fast food']),
  '7elo': p('baklava', 'baklava pastry dessert'),
  'sa7n': p('plate', 'white plate empty ceramic dish', ['tectonic', 'licence', 'license', 'armour']),
  'leey7a': p('menu', 'restaurant menu card'),

  /* --- la casa e le cose che ci stanno dentro --- */
  'beet': p('house', 'traditional house lebanon stone', ['plan', 'parliament', 'opera', 'ruin']),
  'ouuda': p('bedroom', 'bedroom interior bed window'),
  'beeb': p('door', 'wooden door old blue'),
  'taawle': p('table', 'wooden table empty', ['periodic', 'water table', 'round table']),
  'kiis': p('bag', 'shopping bag paper handles', ['sleeping', 'punch', 'air', 'hand bag']),
  'see3a': p('clock', 'wall clock face hands', ['tower', 'alarm', 'sundial']),
  'telephon': p('phone', 'mobile phone hand', ['booth', 'box']),

  /* --- la città, la strada, i mezzi --- */
  'beerout': p('beirut', 'beirut skyline city sea'),
  'souu2': p('souk', 'souk market alley stalls'),
  'tarii2': p('road', 'mountain road winding lebanon'),
  'm7atta': p('station', 'bus station platform'),
  'ma7al': p('shop', 'shop front street small'),
  'maktab': p('office', 'office desk chair room'),
  'madrase': p('school', 'school children building', ['abandoned', 'ruin', 'former', 'closed']),
  'masna3': p('factory', 'factory chimney industrial', ['field', 'abandoned', 'ruin', 'former']),
  'foundo2': p('hotel', 'hotel building facade entrance'),
  'taxi': p('taxi', 'taxi cab yellow street', ['toy', 'model', 'police', 'rank', 'boat']),
  'service': p('taxi', 'taxi mercedes beirut old'),
  'sayyaara': p('car', 'car road driving', ['racing', 'toy', 'cable car', 'rail']),
  'jouura': p('pothole', 'pothole road surface', ['repair', 'crew', 'worker']),
  'tiyyaara': p('airplane', 'airplane flight sky', ['crash', 'wreck', 'museum']),
  'tezkara': p('ticket', 'ticket paper printed', ['lottery']),
  'saydaliyye': p('pharmacy', 'pharmacy shop sign front'),
  'neede-riyaade': p('gym', 'gym interior weights'),

  /* --- le persone --- */
  'bayy': p('father', 'father child together'),
  'okht': p('sisters', 'sisters two together'),
  'wleed': p('children', 'children playing school outdoors', ['painting', 'oil', 'canvas', 'art', 'genre', 'gallery']),
  'baneet': p('girls', 'girls together friends'),
  'shakhs': p('person', 'person standing portrait street'),
  'dayf': p('guests', 'guests welcome door arriving'),
  '7akiim': p('doctor', 'doctor stethoscope patient'),
  'mwazzaf': p('worker', 'office worker desk computer'),
  'mhandes': p('engineer', 'engineer hard hat site'),
  'moudarreb': p('trainer', 'trainer athlete training gym', ['bus', 'coach', 'shoe', 'sneaker']),
  '7ellee2': p('barber', 'barber hair cutting shop'),

  /* --- il corpo, quando fa male --- */
  'iid': p('hand', 'human hand open palm'),
  '3ayn': p('eye', 'human eye close', ['storm', 'needle', 'hurricane']),
  'senn': p('tooth', 'tooth human molar', ['chart', 'stain', 'decay', 'xray', 'x-ray', 'fossil', 'animal']),
  'rashe7': p('tissues', 'tissues box paper'),

  /* --- i soldi --- */
  'lira': p('lira', 'lira lebanese pound note', ['exchange', 'rate', 'chart', 'graph', 'inflation']),
  'dollaar': p('dollar', 'dollar bill us currency'),
  'se3r': p('price', 'price tag label shop'),
  'khasm': p('discount', 'discount sale sign shop'),
  '7seeb': p('receipt', 'receipt restaurant bill paper'),

  /* --- i vestiti --- */
  'amiis': p('shirt', 'shirt folded clothing', ['bronze', 'chain mail', 'sculpture']),
  'fostaan': p('dress', 'dress hanger clothing', ['wedding', 'historical', 'costume', 'fire', 'uniform']),
  'kemm': p('sleeve', 'sleeve shirt cuff'),

  /* --- il tempo che passa --- */
  'sabaa7': p('sunrise', 'sunrise morning sky light'),
  'masa': p('dusk', 'dusk evening sky'),
  'layle': p('night', 'night sky city lights'),
  'shahr': p('calendar', 'calendar wall month', ['manuscript', 'medieval', 'roman', 'aztec', 'maya', 'advent']),
  'jem3a': p('calendar', 'calendar week planner'),

  /* --- lavoro, studio, svago --- */
  'sheghl': p('workers', 'workers working workplace'),
  'emti7aan': p('exam', 'exam students writing'),
  'mou2eebale': p('interview', 'job interview two people'),
  'mousalsal': p('television', 'television screen watching'),
  'berneemej': p('television', 'television programme screen'),
  '7afle': p('party', 'party celebration people'),

  /* --- dal barbiere --- */
  'assa': p('haircut', 'haircut hairdresser salon'),
  'le7ye': p('beard', 'beard man portrait'),
  'da2n': p('beard', 'beard trimming close'),
  'm2ass': p('scissors', 'scissors pair steel', ['shop', 'salon', 'sign', 'magic', 'rock']),
  'makana': p('clippers', 'hair clippers barber')
};

/* Sono uscite dalla lista, e vale la pena dire perché: `bakhshiish` (la mancia)
   e `nhaar` (la luce del giorno) non hanno una fotografia onesta. Alla prima
   Commons rispondeva con una vecchia via col tram, perché nel titolo c'era
   `tip`; alla seconda con qualunque cielo. `3elbe` (la scatoletta) dava un
   barattolo di cera per automobili, e `sahra` (la serata fuori) dava sere
   qualsiasi in posti qualsiasi. Meglio il glifo disegnato. */

module.exports = { unita: unita, parole: parole };
