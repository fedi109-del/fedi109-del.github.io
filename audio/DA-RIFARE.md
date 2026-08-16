# Tracce da rifare

Generato da `node voci-controllo.js`. Non si scrive a mano.

Controllate **758** tracce: **0** rotte, **47** sospette.

Una traccia è dichiarata rotta solo quando cadono **tutt'e due** le prove:
dura meno del 62% di quanto durano le tracce di pari sillabe,
**e** negli ultimi 120 ms ha ancora voce (sopra -34 dB) invece del silenzio
con cui finisce una registrazione arrivata in fondo. Da sola nessuna delle due
basta: parecchie tracce sane di questa voce finiscono di netto perché sono state
rifilate strette, e una parola davvero corta è corta e basta.

## Rotte — da rigenerare

Il taglio è netto e misurabile. Come metro: `Sabaa7 el-khéér`, cinque sillabe,
dura 2.26s; `ana bel-khedmé`, cinque sillabe pure lei, ne dura 0.84. La seconda
non è una lettura veloce, è una frase che finisce prima di essere finita.

_Nessuna._

## Sospette — da riascoltare prima di decidere

Stanno fra il 62% e il 80% della durata attesa e finiscono con la voce ancora
aperta. È la forma che prende una frase lunga tagliata sull'ultima parola: perde
poco della durata totale, quindi non cade nella prima prova. Qui il numero non
decide da solo — ci vuole un orecchio.

| file | libanese | inglese | unità | dura | attesa | rapporto | coda |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `sarelna.mp3` | Sarelna | it has been … for us | 30 | 0.696s | 1.128s | 0.62 | -31.7 dB |
| `seme3.mp3` | seme3 | he heard | 27 | 0.504s | 0.816s | 0.62 | -33.5 dB |
| `men.mp3` | men | from | 2 | 0.456s | 0.72s | 0.63 | -30.8 dB |
| `maa-te3tal-hamm.mp3` | maa te3tal hamm | do not carry worry | 23 | 1.128s | 1.752s | 0.64 | -25.2 dB |
| `makana.mp3` | makana | clippers, machine | 39 | 0.72s | 1.128s | 0.64 | -25.3 dB |
| `nezel.mp3` | nezel | he went down | 27 | 0.528s | 0.816s | 0.65 | -26.8 dB |
| `kammal.mp3` | kammal | he carried on | 26 | 0.552s | 0.816s | 0.68 | -31.7 dB |
| `maa-ra7-enzal-lyoom.mp3` | maa ra7 enzal lyoom | I am not going down today | 25 | 1.44s | 2.112s | 0.68 | -32.5 dB |
| `abadan.mp3` | abadan | at all, never | 10 | 0.792s | 1.128s | 0.7 | -28.7 dB |
| `kemm.mp3` | kemm | sleeve | 20 | 0.504s | 0.72s | 0.7 | -27.6 dB |
| `la2-ana-men-trablos.mp3` | la2, ana men Trablos. | no, I am from Tripoli | 2 | 1.752s | 2.496s | 0.7 | -28.9 dB |
| `7ada.mp3` | 7ada | someone, anybody | 9 | 0.576s | 0.816s | 0.71 | -31.9 dB |
| `allah-y3aafiik.mp3` | Allah y3aafiik | may God keep you strong | 5 | 1.248s | 1.752s | 0.71 | -30.3 dB |
| `ta3a.mp3` | ta3a | come on, let us (to a man) | 17 | 0.576s | 0.816s | 0.71 | -31.2 dB |
| `we3e.mp3` | we3e | he woke up | 27 | 0.576s | 0.816s | 0.71 | -22.6 dB |
| `maa-beshar-abadan.mp3` | maa beshar abadan | I never stay up late. | 18 | 1.8s | 2.496s | 0.72 | -24.1 dB |
| `3end.mp3` | 3end- | to have, to own | 8 | 0.528s | 0.72s | 0.73 | -32.1 dB |
| `batn.mp3` | baTn | stomach, belly | 32 | 0.528s | 0.72s | 0.73 | -24.3 dB |
| `hayde-siyyaara.mp3` | haydé siyyaara | This is a car. | 3 | 1.272s | 1.752s | 0.73 | -29.3 dB |
| `jebelna-3asiir-eza-betriid.mp3` | jebelna 3aSiir, eza betriid | Bring us a juice, please. | 19 | 3.144s | 4.32s | 0.73 | -26.5 dB |
| `ka.mp3` | ka- | as a | 35 | 0.528s | 0.72s | 0.73 | -29.5 dB |
| `keen.mp3` | kéén | he was | 27 | 0.528s | 0.72s | 0.73 | -27.2 dB |
| `seema7.mp3` | sééma7 | he forgave | 26 | 0.528s | 0.72s | 0.73 | -28 dB |
| `abel-maa.mp3` | abel maa | before (in front of a verb) | 28 | 0.84s | 1.128s | 0.74 | -33.8 dB |
| `barra.mp3` | barra | outside | 14 | 0.6s | 0.816s | 0.74 | -28.7 dB |
| `basiita-maa-fii-lzouum.mp3` | basiiTa! maa fii lzouum | it is nothing, there is no need | 31 | 1.848s | 2.496s | 0.74 | -30.5 dB |
| `et2akkhar.mp3` | et2akkhar | to be late | 37 | 0.84s | 1.128s | 0.74 | -28.9 dB |
| `ma32ouul.mp3` | ma32ouul | reasonable, believable | 10 | 0.6s | 0.816s | 0.74 | -28.6 dB |
| `halla2.mp3` | halla2 | now | 5 | 0.624s | 0.816s | 0.76 | -22.8 dB |
| `m3a22am.mp3` | m3a22am | sanitised | 33 | 0.624s | 0.816s | 0.76 | -23.7 dB |
| `2eddeem.mp3` | 2eddéém | in front of | 14 | 0.552s | 0.72s | 0.77 | -26.8 dB |
| `e7ke.mp3` | e7ké | to talk, to speak (root) | 24 | 0.552s | 0.72s | 0.77 | -31.4 dB |
| `houwwe.mp3` | houwwé | he | 2 | 0.552s | 0.72s | 0.77 | -23.5 dB |
| `na3am-3enna.mp3` | na3am, 3enna | yes, we have — or maa 3enna, we have not | 8 | 1.344s | 1.752s | 0.77 | -31.9 dB |
| `sa7n.mp3` | Sa7n | plate | 31 | 0.552s | 0.72s | 0.77 | -28.9 dB |
| `7abiibe.mp3` | 7abiibé | my dear | 6 | 0.648s | 0.816s | 0.79 | -22 dB |
| `ana-mnii7.mp3` | ana mnii7 | I am fine. | 2 | 0.888s | 1.128s | 0.79 | -27.5 dB |
| `ba3d-maa.mp3` | ba3d maa | after | 34 | 0.648s | 0.816s | 0.79 | -32.3 dB |
| `eshtiraak.mp3` | eshtiraak | membership, subscription | 40 | 0.888s | 1.128s | 0.79 | -31.7 dB |
| `et-taneen.mp3` | et-tanéén | Monday | 5 | 0.648s | 0.816s | 0.79 | -26.6 dB |
| `fattesh-3a.mp3` | fattesh 3a | to look for | 35 | 0.888s | 1.128s | 0.79 | -23.4 dB |
| `m7atta.mp3` | m7aTTa | station | 14 | 0.648s | 0.816s | 0.79 | -25.3 dB |
| `mbala.mp3` | mbala | yes it is (answering a negative question) | 3 | 0.648s | 0.816s | 0.79 | -24.8 dB |
| `sarlak.mp3` | Sarlak | it has been … for you (m) | 30 | 0.648s | 0.816s | 0.79 | -31.1 dB |
| `shou-bak.mp3` | shou bak? | what is wrong with you? | 32 | 0.648s | 0.816s | 0.79 | -28.7 dB |
| `siyyaara.mp3` | siyyaara | car | 3 | 0.888s | 1.128s | 0.79 | -31.7 dB |
| `yaa-3ayb-esh-shouum.mp3` | yaa 3ayb esh-shouum! | how embarrassing | 37 | 1.392s | 1.752s | 0.79 | -27.4 dB |

## Corte ma chiuse bene — sane

Durano poco, ma finiscono in silenzio: parole davvero brevi, non tagli.
Elencate per trasparenza, non da rifare.

| file | libanese | inglese | unità | dura | attesa | rapporto | coda |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `bisharafak.mp3` | bisharafak! | please! | 38 | 0.336s | 1.752s | 0.19 | -90.3 dB |
| `khedme.mp3` | khedmé | favour, service | 9 | 0.144s | 0.72s | 0.2 | -80.8 dB |
| `reb3.mp3` | reb3 | a quarter, fifteen minutes | 13 | 0.144s | 0.72s | 0.2 | -58.9 dB |
| `shaay.mp3` | shaay | tea | 7 | 0.144s | 0.72s | 0.2 | -84.3 dB |
| `wa2t.mp3` | wa2t | time | 8 | 0.144s | 0.72s | 0.2 | -87.3 dB |
| `ayya-see3a.mp3` | ayya séé3a? | at what time? | 13 | 0.336s | 1.128s | 0.3 | -90.3 dB |
| `add-maa.mp3` | add maa | as much as | 40 | 0.264s | 0.816s | 0.32 | -91 dB |
| `kiifak.mp3` | kiifak | how are you (to a man) | 1 | 0.264s | 0.816s | 0.32 | -91 dB |
| `zawje.mp3` | zawjé | wife (the formal word) | 6 | 0.264s | 0.72s | 0.37 | -90.3 dB |
| `beshteghel-ka-mwazzaf-bi-maktab.mp3` | beshteghel ka-mwaZZaf bi-maktab | I work as an employee in an office | 35 | 1.944s | 4.32s | 0.45 | -48 dB |
| `saff.mp3` | Saff | class | 40 | 0.36s | 0.72s | 0.5 | -35.2 dB |
| `men-aymata-la-aymata.mp3` | men aymata la-aymata? | from when until when? | 13 | 1.968s | 3.84s | 0.51 | -91 dB |
| `banadouura.mp3` | banadouura | tomatoes | 12 | 0.936s | 1.752s | 0.53 | -54.5 dB |
| `khebz.mp3` | khebz | bread | 12 | 0.384s | 0.72s | 0.53 | -37.8 dB |
| `men-aymata.mp3` | men aymata? | since when? | 30 | 0.936s | 1.752s | 0.53 | -44.6 dB |
| `tekram-3aynak.mp3` | tekram 3aynak | may your eye be honoured | 6 | 0.96s | 1.752s | 0.55 | -45.9 dB |
| `a7la.mp3` | a7la | lovelier, nicer | 20 | 0.456s | 0.816s | 0.56 | -44.7 dB |
| `la.mp3` | la- | in order to (the short version of kerméél) | 17 | 0.408s | 0.72s | 0.57 | -35 dB |
| `sayyaara.mp3` | sayyaara | car | 8 | 0.648s | 1.128s | 0.57 | -34.7 dB |
| `3afwan.mp3` | 3afwan | you are welcome, excuse me | 1 | 0.48s | 0.816s | 0.59 | -40.4 dB |
| `7asab.mp3` | 7asab | depending on, it depends | 36 | 0.48s | 0.816s | 0.59 | -43.2 dB |
| `ana.mp3` | ana | I | 2 | 0.48s | 0.816s | 0.59 | -50.3 dB |
| `khallas.mp3` | khallaS | he finished | 26 | 0.48s | 0.816s | 0.59 | -44.6 dB |
| `walaw.mp3` | walaw | please, do not even mention it | 19 | 0.48s | 0.816s | 0.59 | -45.1 dB |
| `beshteghel-men-es-sobe7-la-l-masa.mp3` | beshteghel men eS-Sobe7 la-l-masa | I work from morning to evening | 35 | 2.88s | 4.8s | 0.6 | -49.5 dB |
| `iid.mp3` | iid | hand | 32 | 0.432s | 0.72s | 0.6 | -43.4 dB |
| `kiif.mp3` | kiif | how | 3 | 0.432s | 0.72s | 0.6 | -40.5 dB |
| `wala-yhemmak.mp3` | wala yhemmak | do not let it worry you | 29 | 1.056s | 1.752s | 0.6 | -34.6 dB |
| `w-enta-men-ahlo.mp3` | w-enta men ahlo | and may you be of its people | 1 | 1.296s | 2.112s | 0.61 | -39.8 dB |
