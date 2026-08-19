# Tracce da rifare

Generato da `node voci-controllo.js`. Non si scrive a mano.

Controllate **1115** tracce: **0** rotte, **71** sospette.

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
| `aloo-mar7aba.mp3` | aloo, mar7aba. | hello. | 33 | 1.488s | 2.412s | 0.62 | -25.3 dB |
| `seme3.mp3` | seme3 | he heard | 27 | 0.504s | 0.816s | 0.62 | -33.5 dB |
| `3am-beshteghel.mp3` | 3am beshteghel | I am working. | 24 | 1.104s | 1.752s | 0.63 | -32.8 dB |
| `men.mp3` | men | from | 2 | 0.456s | 0.72s | 0.63 | -30.8 dB |
| `bet7ebbo-7elo.mp3` | bet7ebbo 7elo? | Would you like dessert? | 31 | 1.536s | 2.412s | 0.64 | -25.2 dB |
| `maa-te3tal-hamm.mp3` | maa te3tal hamm | do not carry worry | 23 | 1.128s | 1.752s | 0.64 | -25.2 dB |
| `maa-kenna-mabsouutiin.mp3` | maa kenna mabsouuTiin | We were not happy. | 29 | 1.968s | 3.048s | 0.65 | -32.1 dB |
| `nezel.mp3` | nezel | he went down | 27 | 0.528s | 0.816s | 0.65 | -26.8 dB |
| `w-ne7na-3am-mneshrab-2ahwe-shefna-tania-w-jawza-henne-kameen-tol.mp3` | w-ne7na 3am mneshrab 2ahwe, shefna Tania w-jawza: henné kaméén Tole3o 3al-jabal. | While we were drinking coffee we saw Tania and her husband: they had come up to the mountain too. | 28 | 6.36s | 9.828s | 0.65 | -30.9 dB |
| `abadan.mp3` | abadan | at all, never | 10 | 0.792s | 1.2s | 0.66 | -28.7 dB |
| `shou-ra2yak-bel-beet.mp3` | shou ra2yak bel-béét? | what do you think of the place? | 11 | 1.152s | 1.752s | 0.66 | -25.2 dB |
| `ba3deen-akhadna-es-sayyaara-w-tlo3na-3al-jabal.mp3` | ba3déén akhadna es-sayyaara w-Tlo3na 3al-jabal. | Then we took the car and went up to the mountain. | 28 | 4.128s | 6.084s | 0.68 | -24.6 dB |
| `kammal.mp3` | kammal | he carried on | 26 | 0.552s | 0.816s | 0.68 | -31.7 dB |
| `maa-fii-7ada-hoon.mp3` | maa fii 7ada hoon | there is nobody here | 14 | 1.632s | 2.412s | 0.68 | -25.3 dB |
| `abel-maa.mp3` | abel maa | before (in front of a verb) | 28 | 0.84s | 1.2s | 0.7 | -33.8 dB |
| `et2akkhar.mp3` | et2akkhar | to be late | 37 | 0.84s | 1.2s | 0.7 | -28.9 dB |
| `kemm.mp3` | kemm | sleeve | 20 | 0.504s | 0.72s | 0.7 | -27.6 dB |
| `w-akhiiran-rje3na-3al-beet-es-see3a-tes3a-kenna-te3beeniin-bass-.mp3` | w-akhiiran rje3na 3al-béét es-séé3a tes3a. kenna te3bééniin, bass el-yoom kéén 7elo. | And finally we got home at nine. We were tired, but it had been a lovely day. | 28 | 6.192s | 8.892s | 0.7 | -32 dB |
| `7ada.mp3` | 7ada | someone, anybody | 9 | 0.576s | 0.816s | 0.71 | -31.9 dB |
| `allah-y3aafiik.mp3` | Allah y3aafiik | may God keep you strong | 5 | 1.248s | 1.752s | 0.71 | -30.3 dB |
| `ta3a.mp3` | ta3a | come on, let us (to a man) | 17 | 0.576s | 0.816s | 0.71 | -31.2 dB |
| `we3e.mp3` | we3e | he woke up | 27 | 0.576s | 0.816s | 0.71 | -22.6 dB |
| `b-addee-men-hoon-lal-m7atta.mp3` | b-addéé men hoon lal-m7aTTa? | how much from here to the station? | 21 | 2.208s | 3.048s | 0.72 | -31.4 dB |
| `shou-betjiib-ma3ak.mp3` | shou betjiib ma3ak? | what do you bring with you? (to a man) | 16 | 1.728s | 2.412s | 0.72 | -27.6 dB |
| `3am-bteshteghel-lyoom.mp3` | 3am bteshteghel lyoom? | are you working today? | 24 | 1.752s | 2.412s | 0.73 | -23.1 dB |
| `3end.mp3` | 3end- | to have, to own | 8 | 0.528s | 0.72s | 0.73 | -32.1 dB |
| `batn.mp3` | baTn | stomach, belly | 32 | 0.528s | 0.72s | 0.73 | -24.3 dB |
| `hayde-siyyaara.mp3` | haydé siyyaara | This is a car. | 3 | 1.272s | 1.752s | 0.73 | -29.3 dB |
| `ka.mp3` | ka- | as a | 35 | 0.528s | 0.72s | 0.73 | -29.5 dB |
| `keen.mp3` | kéén | he was | 27 | 0.528s | 0.72s | 0.73 | -27.2 dB |
| `seema7.mp3` | sééma7 | he forgave | 26 | 0.528s | 0.72s | 0.73 | -28 dB |
| `ana-mnii7.mp3` | ana mnii7 | I am fine. | 2 | 0.888s | 1.2s | 0.74 | -27.5 dB |
| `barra.mp3` | barra | outside | 14 | 0.6s | 0.816s | 0.74 | -28.7 dB |
| `berja3-etla3-3al-jabal.mp3` | berja3 eTla3 3al-jabal | I go back up to the mountain. | 21 | 2.232s | 3.036s | 0.74 | -33.5 dB |
| `es-siyyaara-m2ammane.mp3` | es-siyyaara m2ammané? | is the car insured? | 21 | 2.256s | 3.048s | 0.74 | -32.6 dB |
| `eshtiraak.mp3` | eshtiraak | membership, subscription | 40 | 0.888s | 1.2s | 0.74 | -31.7 dB |
| `fattesh-3a.mp3` | fattesh 3a | to look for | 35 | 0.888s | 1.2s | 0.74 | -23.4 dB |
| `ma32ouul.mp3` | ma32ouul | reasonable, believable | 10 | 0.6s | 0.816s | 0.74 | -28.6 dB |
| `siyyaara.mp3` | siyyaara | car | 3 | 0.888s | 1.2s | 0.74 | -31.7 dB |
| `noss-kiilo-w-2anniinet-7aliib.mp3` | noSS kiilo. w 2anniinet 7aliib. | half a kilo. And a bottle of milk. | 12 | 2.352s | 3.144s | 0.75 | -25.1 dB |
| `service-3a-mar-mikhayel.mp3` | service. 3a Mar Mikhayel. | service. To Mar Mikhael. | 21 | 2.352s | 3.144s | 0.75 | -29.2 dB |
| `3am-bfattesh-3a-sheghl.mp3` | 3am bfattesh 3a sheghl | I am looking for work | 35 | 1.824s | 2.412s | 0.76 | -27.8 dB |
| `beshteghel-bi-bank.mp3` | beshteghel bi-bank | I work in a bank. | 24 | 1.824s | 2.412s | 0.76 | -31.4 dB |
| `halla2.mp3` | halla2 | now | 5 | 0.624s | 0.816s | 0.76 | -22.8 dB |
| `khalliina-ne23od.mp3` | khalliina ne23od | let us sit down | 17 | 1.824s | 2.412s | 0.76 | -33.3 dB |
| `m3a22am.mp3` | m3a22am | sanitised | 33 | 0.624s | 0.816s | 0.76 | -23.7 dB |
| `shou-ra2yik.mp3` | shou ra2yik? | what do you think? (to a woman) | 11 | 0.912s | 1.2s | 0.76 | -32.6 dB |
| `tayyeb-kiilo-banadouura-kameen.mp3` | Tayyeb, kiilo banadouura kaméén. | all right, a kilo of tomatoes as well. | 12 | 2.712s | 3.552s | 0.76 | -25.7 dB |
| `2eddeem.mp3` | 2eddéém | in front of | 14 | 0.552s | 0.72s | 0.77 | -26.8 dB |
| `aloo-shou-3am-ta3mol.mp3` | aloo? shou 3am ta3mol? | hello? What are you doing? | 24 | 2.352s | 3.048s | 0.77 | -28.5 dB |
| `basiita-wala-yhemmak.mp3` | basiiTa. wala yhemmak. | it is nothing. Do not let it worry you. | 29 | 2.328s | 3.036s | 0.77 | -22.9 dB |
| `bass-ana-te3been.mp3` | bass ana te3béén. | but I am tired. | 10 | 1.344s | 1.752s | 0.77 | -31.1 dB |
| `e7ke.mp3` | e7ké | to talk, to speak (root) | 24 | 0.552s | 0.72s | 0.77 | -31.4 dB |
| `houwwe.mp3` | houwwé | he | 2 | 0.552s | 0.72s | 0.77 | -23.5 dB |
| `la2-shukran-ya3tiik-el-3aafye.mp3` | la2, shukran. ya3Tiik el-3aafyé. | no, thank you. May he give you strength. | 9 | 2.328s | 3.036s | 0.77 | -28.7 dB |
| `mannon-te3beeniin-abadan.mp3` | mannon te3bééniin abadan | They are not tired in the least. | 10 | 2.328s | 3.036s | 0.77 | -27.4 dB |
| `na3am-3enna.mp3` | na3am, 3enna | yes, we have — or maa 3enna, we have not | 8 | 1.344s | 1.752s | 0.77 | -31.9 dB |
| `sa7n.mp3` | Sa7n | plate | 31 | 0.552s | 0.72s | 0.77 | -28.9 dB |
| `la2enno.mp3` | la2enno | because | 34 | 0.936s | 1.2s | 0.78 | -30.7 dB |
| `7abiibe.mp3` | 7abiibé | my dear | 6 | 0.648s | 0.816s | 0.79 | -22 dB |
| `ba3d-maa.mp3` | ba3d maa | after | 34 | 0.648s | 0.816s | 0.79 | -32.3 dB |
| `et-taneen.mp3` | et-tanéén | Monday | 5 | 0.648s | 0.816s | 0.79 | -26.6 dB |
| `khalliina-nenzal-w-enta-bteji-ba3deen.mp3` | khalliina nenzal, w enta bteji ba3déén. | let us go down, and you come after. | 17 | 2.952s | 3.744s | 0.79 | -29.4 dB |
| `m7atta.mp3` | m7aTTa | station | 14 | 0.648s | 0.816s | 0.79 | -25.3 dB |
| `mbala.mp3` | mbala | yes it is (answering a negative question) | 3 | 0.648s | 0.816s | 0.79 | -24.8 dB |
| `sarlak.mp3` | Sarlak | it has been … for you (m) | 30 | 0.648s | 0.816s | 0.79 | -31.1 dB |
| `sarlo-shahreen-3am-byeshteghel-hoon.mp3` | Sarlo shahréén 3am byeshteghel hoon | He has been working here for two months. | 30 | 2.496s | 3.144s | 0.79 | -28.8 dB |
| `shou-bak.mp3` | shou bak? | what is wrong with you? | 32 | 0.648s | 0.816s | 0.79 | -28.7 dB |
| `w-es-se3r.mp3` | w es-se3r? | and the price? | 11 | 0.648s | 0.816s | 0.79 | -32.4 dB |
| `w-khallast-esh-sheghl.mp3` | w khallaSt esh-sheghl? | and did you finish the work? | 26 | 1.392s | 1.752s | 0.79 | -27.5 dB |
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
| `ayya-see3a.mp3` | ayya séé3a? | at what time? | 13 | 0.336s | 1.2s | 0.28 | -90.3 dB |
| `add-maa.mp3` | add maa | as much as | 40 | 0.264s | 0.816s | 0.32 | -91 dB |
| `kiifak.mp3` | kiifak | how are you (to a man) | 1 | 0.264s | 0.816s | 0.32 | -91 dB |
| `zawje.mp3` | zawjé | wife (the formal word) | 6 | 0.264s | 0.72s | 0.37 | -90.3 dB |
| `maa-3enna-ouwad-lyoom.mp3` | maa 3enna ouwaD lyoom | We have no rooms today. | 8 | 1.44s | 3.048s | 0.47 | -36.5 dB |
| `saff.mp3` | Saff | class | 40 | 0.36s | 0.72s | 0.5 | -35.2 dB |
| `badde-enzal-3a-beirut.mp3` | baddé enzal 3a Beirut | I want to go down to Beirut | 21 | 1.56s | 3.048s | 0.51 | -42.7 dB |
| `banadouura.mp3` | banadouura | tomatoes | 12 | 0.936s | 1.752s | 0.53 | -54.5 dB |
| `khebz.mp3` | khebz | bread | 12 | 0.384s | 0.72s | 0.53 | -37.8 dB |
| `men-aymata.mp3` | men aymata? | since when? | 30 | 0.936s | 1.752s | 0.53 | -44.6 dB |
| `sayyaara.mp3` | sayyaara | car | 8 | 0.648s | 1.2s | 0.54 | -34.7 dB |
| `w-enta-men-ahlo.mp3` | w-enta men ahlo | and may you be of its people | 1 | 1.296s | 2.412s | 0.54 | -39.8 dB |
| `beshteghel-ka-mwazzaf-bi-maktab.mp3` | beshteghel ka-mwaZZaf bi-maktab | I work as an employee in an office | 35 | 1.944s | 3.552s | 0.55 | -48 dB |
| `beshteghel-kell-en-nhaar.mp3` | beshteghel kell en-nhaar | I work all day. | 18 | 1.68s | 3.048s | 0.55 | -34.5 dB |
| `tekram-3aynak.mp3` | tekram 3aynak | may your eye be honoured | 6 | 0.96s | 1.752s | 0.55 | -45.9 dB |
| `a7la.mp3` | a7la | lovelier, nicer | 20 | 0.456s | 0.816s | 0.56 | -44.7 dB |
| `maa-be2dar-estanna-kameen.mp3` | maa be2dar estanna kaméén. | I cannot wait any longer. | 17 | 1.704s | 3.036s | 0.56 | -40.5 dB |
| `3am-be7dar-mousalsal.mp3` | 3am be7Dar mousalsal | I am watching a series | 24 | 1.728s | 3.048s | 0.57 | -36.4 dB |
| `ana-seeken-bi-beirut.mp3` | ana sééken bi-Beirut | I live in Beirut | 33 | 1.728s | 3.048s | 0.57 | -49.3 dB |
| `honiik-wara-l-m7atta.mp3` | honiik, wara l-m7aTTa | over there, behind the station | 14 | 1.752s | 3.048s | 0.57 | -49.1 dB |
| `la.mp3` | la- | in order to (the short version of kerméél) | 17 | 0.408s | 0.72s | 0.57 | -35 dB |
| `maa-bkhabbrak-shou-saar-mbeere7.mp3` | maa bkhabbrak shou Saar mbéére7. | you have no idea what happened yesterday. | 28 | 1.752s | 3.048s | 0.57 | -52.6 dB |
| `maa-ra7-enzal-lyoom.mp3` | maa ra7 enzal lyoom | I am not going down today | 25 | 1.368s | 2.412s | 0.57 | -44.2 dB |
| `moumken-teje-ma3na.mp3` | moumken tejé ma3na? | could you come with us? (to a man) | 17 | 1.368s | 2.412s | 0.57 | -41.9 dB |
| `basiita.mp3` | basiiTa! | it is nothing, never mind | 11 | 0.696s | 1.2s | 0.58 | -35.8 dB |
| `fii-7ada-hoon.mp3` | fii 7ada hoon? | Is there anybody here? | 9 | 1.008s | 1.752s | 0.58 | -34.1 dB |
| `kent-3am-beshteghel-lamma-talfan-sami.mp3` | kent 3am beshteghel lamma talfan Sami | I was working when Sami phoned. | 29 | 2.64s | 4.536s | 0.58 | -34.1 dB |
| `3afwan.mp3` | 3afwan | you are welcome, excuse me | 1 | 0.48s | 0.816s | 0.59 | -40.4 dB |
| `7asab.mp3` | 7asab | depending on, it depends | 36 | 0.48s | 0.816s | 0.59 | -43.2 dB |
| `ana.mp3` | ana | I | 2 | 0.48s | 0.816s | 0.59 | -50.3 dB |
| `ayya-see3a-bt-ouu3a.mp3` | ayya séé3a bt-ouu3a? | what time do you wake up? | 18 | 1.416s | 2.412s | 0.59 | -66 dB |
| `basiita-maa-fii-lzouum.mp3` | basiiTa! maa fii lzouum | it is nothing, there is no need | 31 | 1.8s | 3.048s | 0.59 | -51.1 dB |
| `khallas.mp3` | khallaS | he finished | 26 | 0.48s | 0.816s | 0.59 | -44.6 dB |
| `w-shou-3amelt-honiik.mp3` | w shou 3amelt honiik? | and what did you do there? | 27 | 1.416s | 2.412s | 0.59 | -38.2 dB |
| `wala-shii-shukran.mp3` | wala shii, shukran | nothing at all, thank you | 7 | 1.416s | 2.412s | 0.59 | -45.9 dB |
| `walaw.mp3` | walaw | please, do not even mention it | 19 | 0.48s | 0.816s | 0.59 | -45.1 dB |
| `iid.mp3` | iid | hand | 32 | 0.432s | 0.72s | 0.6 | -43.4 dB |
| `khalliina.mp3` | khalliina | let us | 17 | 0.72s | 1.2s | 0.6 | -34.8 dB |
| `kiif.mp3` | kiif | how | 3 | 0.432s | 0.72s | 0.6 | -40.5 dB |
| `la2-bala-7aliib.mp3` | la2, bala 7aliib. | no, without milk. | 7 | 1.44s | 2.412s | 0.6 | -56.2 dB |
| `wala-shii-shereb-2ahwe-w-reje3-3al-maktab.mp3` | wala shii. shereb 2ahwe w reje3 3al-maktab. | nothing. He drank a coffee and went back to the office. | 27 | 3.384s | 5.616s | 0.6 | -44.6 dB |
| `wala-yhemmak.mp3` | wala yhemmak | do not let it worry you | 29 | 1.056s | 1.752s | 0.6 | -34.6 dB |
