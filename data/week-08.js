window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[8] = {
  week: 8,
  title: "In viaggio — Passato prossimo with essere & irregular participles",
  textbook: "Nuovo Espresso 1 · Lezione 6–7",
  goals: [
    "Know which verbs take essere in the passato prossimo (movement, change of state, stare/restare)",
    "Make the participle agree with the subject when using essere (andato/andata/andati/andate)",
    "Use the most common irregular participles: fatto, preso, visto, messo, letto, scritto, detto, venuto, stato…",
    "Tell a travel story mixing avere and essere"
  ],
  spanishNotes: [
    "**Biggest A1 trap:** Spanish always uses *haber* (*he ido, he llegado*). Italian uses **essere** for movement and change-of-state verbs: *sono andato*, *sono arrivata*, *siamo partiti*. Saying *ho andato* is the classic Spanish-speaker mistake.",
    "**New concept:** with essere the participle **agrees** like an adjective: *Marco è partito / Anna è partita / Siamo partiti / Le ragazze sono partite*. Spanish participles never change in compound tenses.",
    "**Cognate win:** many irregular participles look like Spanish: *fatto/hecho, detto/dicho, scritto/escrito, aperto/abierto, messo/metido, visto/visto*.",
    "**Trap:** *sono stato/a* is the past of both **essere** and **stare**: *Sono stato a Roma* = 'I've been / I was in Rome' (*he estado / estuve*)."
  ],
  days: [
    {
      title: "Passato prossimo with essere — movement verbs",
      notes: `Some verbs form the passato prossimo with **essere** instead of avere. Mostly they are verbs of **movement from A to B** or **change of state**, and they don't take a direct object.

**Common essere verbs**

| Infinitive | Participle | Meaning |
|---|---|---|
| andare | andato | to go |
| venire | venuto | to come |
| partire | partito | to leave |
| arrivare | arrivato | to arrive |
| tornare | tornato | to return |
| uscire | uscito | to go out |
| entrare | entrato | to go in |
| restare / rimanere | restato / rimasto | to stay |
| nascere | nato | to be born |

**The participle agrees with the subject** (-o, -a, -i, -e):

| | essere | andare |
|---|---|---|
| io | sono | andato / andata |
| tu | sei | andato / andata |
| lui / lei | è | andato / andata |
| noi | siamo | andati / andate |
| voi | siete | andati / andate |
| loro | sono | andati / andate |

Examples:

- *Ieri sono andato al mare.* — "Yesterday I went to the beach." (male speaker)
- *Anna è partita lunedì.* — "Anna left on Monday."
- *Siamo arrivati alle dieci.* — "We arrived at ten."
- *Le ragazze sono tornate tardi.* — "The girls came back late."`,
      vocab: [
        { it: "salire", en: "to go up; to get on (a train/bus)", pos: "verb", ex: "Siamo saliti sul treno alle otto.", exEn: "We got on the train at eight.", note: "Takes essere. **False friend:** Spanish *salir* = *uscire*; *salire* = go up / get on." },
        { it: "arrivare", en: "to arrive", pos: "verb", ex: "Siamo arrivati a Firenze alle tre.", exEn: "We arrived in Florence at three.", note: "Takes essere." },
        { it: "tornare", en: "to return, come back", pos: "verb", ex: "Quando sei tornata dalle vacanze?", exEn: "When did you get back from holiday?", note: "≈ *volver / regresar*. Takes essere." },
        { it: "restare", en: "to stay, remain", pos: "verb", ex: "Siamo restati a casa tutto il weekend.", exEn: "We stayed home all weekend.", note: "Takes essere. Synonym: *rimanere* (participle *rimasto*)." },
        { it: "il viaggio", en: "trip, journey", pos: "noun", ex: "Il viaggio è stato lungo ma bello.", exEn: "The trip was long but nice.", note: "*Buon viaggio!* = Have a good trip!" },
        { it: "la stazione", en: "(train) station", pos: "noun", ex: "Sono arrivato alla stazione in ritardo.", exEn: "I got to the station late." }
      ],
      drills: [
        { type: "fill", prompt: "Anna è ___ lunedì.", en: "Anna left on Monday.", it: ["partita"], hint: "partire, agree with Anna" },
        { type: "fill", prompt: "Noi ___ arrivati alle dieci.", en: "We arrived at ten.", it: ["siamo"] },
        { type: "translate", en: "Yesterday I went to the beach.", it: ["Ieri sono andato al mare.", "Ieri sono andata al mare.", "Sono andato al mare ieri.", "Sono andata al mare ieri."] },
        { type: "fill", prompt: "Le ragazze sono ___ tardi.", en: "The girls came back late.", it: ["tornate"], hint: "tornare, fem. plural" },
        { type: "translate", en: "We stayed at home.", it: ["Siamo restati a casa.", "Siamo restate a casa.", "Siamo rimasti a casa.", "Siamo rimaste a casa.", "Noi siamo restati a casa.", "Noi siamo rimasti a casa."] }
      ]
    },
    {
      title: "Essere or avere? — and 'I've been' (sono stato)",
      notes: `**Quick test:** does the verb take a direct object (*what?* / *whom?*)? If yes → **avere**. If it describes movement or a change happening to the subject → usually **essere**.

| avere | essere |
|---|---|
| *Ho preso il treno.* — "I took the train." | *Sono andato in treno.* — "I went by train." |
| *Ho visitato Roma.* — "I visited Rome." | *Sono stato a Roma.* — "I've been to Rome." |
| *Ho comprato il biglietto.* — "I bought the ticket." | *Sono partita presto.* — "I left early." |

**essere and stare** both form the past with *essere* + **stato**:

- *Sei mai stato in Italia?* — "Have you ever been to Italy?"
- *Sono stata a Napoli due anni fa.* — "I was in Naples two years ago."
- *Com'è stato il viaggio?* — "How was the trip?"

**mai** = "ever" (in questions) or "never" (with *non*):

- *Non sono mai stato a Venezia.* — "I've never been to Venice."

**Exception to remember:** *viaggiare* (to travel) and *camminare* (to walk) take **avere**: *Ho viaggiato molto.* — "I've travelled a lot."`,
      vocab: [
        { it: "il treno", en: "train", pos: "noun", ex: "Abbiamo preso il treno per Milano.", exEn: "We took the train to Milan." },
        { it: "l'aereo", en: "plane", pos: "noun", ex: "Sono andata a Londra in aereo.", exEn: "I went to London by plane.", note: "Means of transport: *in* + noun, no article: *in treno, in aereo, in macchina*." },
        { it: "il biglietto", en: "ticket", pos: "noun", ex: "Hai comprato i biglietti?", exEn: "Did you buy the tickets?", note: "Validate train tickets: *convalidare il biglietto*." },
        { it: "il passaporto", en: "passport", pos: "noun", ex: "Ho dimenticato il passaporto a casa!", exEn: "I left my passport at home!" },
        { it: "l'aeroporto", en: "airport", pos: "noun", ex: "Siamo arrivati all'aeroporto in anticipo.", exEn: "We got to the airport early." },
        { it: "mai", en: "ever; (with non) never", pos: "adverb", ex: "Non sono mai stato in Sicilia.", exEn: "I've never been to Sicily.", note: "*non… mai* = *nunca*. *Sei mai stato…?* = *¿Has estado alguna vez…?*" }
      ],
      drills: [
        { type: "translate", en: "Have you ever been to Italy?", it: ["Sei mai stato in Italia?", "Sei mai stata in Italia?", "Tu sei mai stato in Italia?", "Tu sei mai stata in Italia?"] },
        { type: "fill", prompt: "Non sono ___ stata a Venezia.", en: "I've never been to Venice.", it: ["mai"] },
        { type: "fill", prompt: "___ viaggiato molto.", en: "I've travelled a lot.", it: ["Ho"], hint: "viaggiare takes avere" },
        { type: "translate", en: "We went by train.", it: ["Siamo andati in treno.", "Siamo andate in treno.", "Noi siamo andati in treno."] },
        { type: "fill", prompt: "Com'è ___ il viaggio?", en: "How was the trip?", it: ["stato"] }
      ]
    },
    {
      title: "Irregular participles (1): fatto, preso, visto, messo, letto, scritto",
      notes: `Many very common verbs (mostly **-ere**) have **irregular participles**. Most take **avere**.

| Infinitive | Participle | Example |
|---|---|---|
| fare | **fatto** | *Cosa hai fatto ieri?* — "What did you do yesterday?" |
| prendere | **preso** | *Ho preso un caffè.* — "I had a coffee." |
| vedere | **visto** | *Abbiamo visto il Colosseo.* — "We saw the Colosseum." |
| mettere | **messo** | *Dove hai messo le chiavi?* — "Where did you put the keys?" |
| leggere | **letto** | *Ho letto la guida.* — "I read the guidebook." |
| scrivere | **scritto** | *Ha scritto una cartolina.* — "She wrote a postcard." |

**Fixed expressions with fare** now become past:

- *Ho fatto colazione al bar.* — "I had breakfast at the bar."
- *Abbiamo fatto una passeggiata in centro.* — "We went for a walk in the centre."
- *Hai fatto molte foto?* — "Did you take a lot of photos?"

**Tip:** learn them as pairs (*fare–fatto*, *prendere–preso*) and say them out loud — they'll stick fast because Spanish has similar irregulars.`,
      vocab: [
        { it: "la foto", en: "photo", pos: "noun", ex: "Abbiamo fatto tante foto al mare.", exEn: "We took lots of photos at the beach.", note: "Invariable: *le foto*. 'Take a photo' = *fare una foto*." },
        { it: "il museo", en: "museum", pos: "noun", ex: "Abbiamo visto i musei Vaticani.", exEn: "We saw the Vatican Museums." },
        { it: "la spiaggia", en: "beach", pos: "noun", ex: "Ho letto un libro in spiaggia.", exEn: "I read a book on the beach.", note: "*Al mare* = at the seaside (more common in speech)." },
        { it: "il lago", en: "lake", pos: "noun", ex: "Domenica siamo andati al lago di Como.", exEn: "On Sunday we went to Lake Como.", note: "*al lago*, like *al mare*." },
        { it: "il ponte", en: "bridge", pos: "noun", ex: "Abbiamo visto il Ponte Vecchio a Firenze.", exEn: "We saw the Ponte Vecchio in Florence.", note: "Spanish *el puente*, also masculine." },
        { it: "la cartolina", en: "postcard", pos: "noun", ex: "Ho scritto una cartolina alla nonna.", exEn: "I wrote a postcard to my grandma." }
      ],
      drills: [
        { type: "fill", prompt: "Cosa hai ___ ieri?", en: "What did you do yesterday?", it: ["fatto"], hint: "fare" },
        { type: "fill", prompt: "Abbiamo ___ il Colosseo.", en: "We saw the Colosseum.", it: ["visto"], hint: "vedere" },
        { type: "translate", en: "Where did you put the keys?", it: ["Dove hai messo le chiavi?"] },
        { type: "translate", en: "I had a coffee at the bar.", it: ["Ho preso un caffè al bar."] },
        { type: "translate", en: "We took lots of photos.", it: ["Abbiamo fatto tante foto.", "Abbiamo fatto molte foto.", "Abbiamo scattato tante foto.", "Abbiamo scattato molte foto."] }
      ]
    },
    {
      title: "Irregular participles (2): detto, aperto, chiuso, bevuto, scelto, perso",
      notes: `More high-frequency irregular participles:

| Infinitive | Participle | Aux | Example |
|---|---|---|---|
| dire | **detto** | avere | *Cosa hai detto?* — "What did you say?" |
| aprire | **aperto** | avere | *Hanno aperto un nuovo bar.* — "They opened a new bar." |
| chiudere | **chiuso** | avere | *Ho chiuso la porta.* — "I closed the door." |
| bere | **bevuto** | avere | *Abbiamo bevuto un buon vino.* — "We drank a good wine." |
| scegliere | **scelto** | avere | *Hai scelto l'albergo?* — "Have you chosen the hotel?" |
| perdere | **perso** | avere | *Ho perso il treno!* — "I missed the train!" |
| venire | **venuto** | essere | *Sei venuta in macchina?* — "Did you come by car?" |
| rimanere | **rimasto** | essere | *Sono rimasti a Roma.* — "They stayed in Rome." |

**perdere** = to lose **and** to miss (a train, a flight):

- *Abbiamo perso l'aereo.* — "We missed the plane."

**in ritardo / in anticipo / in orario** — late / early / on time:

- *Il volo è partito in ritardo.* — "The flight left late."`,
      vocab: [
        { it: "rompere", en: "to break", pos: "verb", ex: "Ho rotto un bicchiere.", exEn: "I broke a glass.", note: "Irregular participle *rotto* (Spanish *roto*)." },
        { it: "chiudere", en: "to close", pos: "verb", ex: "Hanno chiuso il ristorante per ferie.", exEn: "They closed the restaurant for the holidays.", note: "Participle *chiuso*." },
        { it: "scegliere", en: "to choose", pos: "verb", ex: "Abbiamo scelto un albergo in centro.", exEn: "We chose a hotel in the centre.", note: "Present: *scelgo, scegli*. Participle *scelto*." },
        { it: "perdere", en: "to lose; to miss (a train etc.)", pos: "verb", ex: "Ho perso il treno delle otto.", exEn: "I missed the eight o'clock train.", note: "Participle *perso* (also *perduto*)." },
        { it: "bere", en: "to drink", pos: "verb", ex: "Cosa avete bevuto?", exEn: "What did you drink?", note: "Present uses *bev-*: *bevo, bevi*. Participle *bevuto*." },
        { it: "in ritardo", en: "late", pos: "phrase", ex: "Il treno è arrivato in ritardo.", exEn: "The train arrived late.", note: "Early = *in anticipo*; on time = *in orario*." }
      ],
      drills: [
        { type: "translate", en: "What did you say?", it: ["Cosa hai detto?", "Che cosa hai detto?", "Che hai detto?"] },
        { type: "translate", en: "I missed the train!", it: ["Ho perso il treno!"] },
        { type: "fill", prompt: "Abbiamo ___ un buon vino.", en: "We drank a good wine.", it: ["bevuto"], hint: "bere" },
        { type: "fill", prompt: "Sei ___ in macchina, Giulia?", en: "Did you come by car, Giulia?", it: ["venuta"], hint: "venire, agree with Giulia" },
        { type: "fill", prompt: "Il treno è arrivato in ___.", en: "The train arrived late.", it: ["ritardo"] }
      ]
    },
    {
      title: "Racconto di viaggio — telling a trip story",
      notes: `Now combine everything. Places: **a** + city, **in** + country/region:

- *Sono stato **a** Roma e **a** Firenze.* — "I've been to Rome and Florence."
- *Siamo andati **in** Italia e **in** Toscana.* — "We went to Italy and Tuscany."

**Model story**

*L'estate scorsa sono andata in vacanza in Italia con mia sorella. Siamo partite da New York e siamo arrivate a Roma la mattina dopo. Abbiamo visitato il centro storico e abbiamo visto il Pantheon. Poi abbiamo preso il treno per Firenze. Lì siamo rimaste tre giorni: abbiamo mangiato benissimo e abbiamo fatto tante foto. Purtroppo l'ultimo giorno abbiamo perso il treno, ma alla fine siamo tornate a casa felici!*

"Last summer I went on holiday to Italy with my sister. We left from New York and arrived in Rome the next morning. We visited the historic centre and saw the Pantheon. Then we took the train to Florence. We stayed there three days: we ate really well and took lots of photos. Unfortunately on the last day we missed the train, but in the end we came home happy!"

**Checklist for your own story:** essere verbs agree? irregular participles correct? *a* city / *in* country?`,
      vocab: [
        { it: "la vacanza", en: "holiday, vacation", pos: "noun", ex: "Siamo andati in vacanza in Puglia.", exEn: "We went on holiday to Puglia.", note: "Often plural: *le vacanze*. *Andare in vacanza* = to go on holiday." },
        { it: "visitare", en: "to visit (a place)", pos: "verb", ex: "Abbiamo visitato i musei di Firenze.", exEn: "We visited the museums in Florence.", note: "Takes avere. For visiting people: *andare a trovare*." },
        { it: "il centro storico", en: "historic centre, old town", pos: "noun", ex: "Il centro storico di Bologna è bellissimo.", exEn: "Bologna's old town is beautiful." },
        { it: "il paese", en: "country; village, small town", pos: "noun", ex: "Mio nonno è nato in un piccolo paese in Calabria.", exEn: "My grandfather was born in a small village in Calabria.", note: "Context decides: *un paese europeo* (a European country) vs *il mio paese* (my hometown)." },
        { it: "la guida", en: "guide; guidebook", pos: "noun", ex: "Abbiamo letto la guida prima di partire.", exEn: "We read the guidebook before leaving." },
        { it: "purtroppo", en: "unfortunately", pos: "adverb", ex: "Purtroppo abbiamo perso l'aereo.", exEn: "Unfortunately we missed the plane.", note: "Super common. Fortunately = *per fortuna*." }
      ],
      drills: [
        { type: "fill", prompt: "Sono stato ___ Firenze.", en: "I've been to Florence.", it: ["a"], hint: "a or in? (city)" },
        { type: "translate", en: "We went on holiday to Italy.", it: ["Siamo andati in vacanza in Italia.", "Siamo andate in vacanza in Italia.", "Noi siamo andati in vacanza in Italia."] },
        { type: "translate", en: "Unfortunately we missed the plane.", it: ["Purtroppo abbiamo perso l'aereo.", "Purtroppo abbiamo perso il volo."] },
        { type: "fill", prompt: "Abbiamo ___ il centro storico.", en: "We visited the historic centre.", it: ["visitato"] },
        { type: "translate", en: "She came back home happy.", it: ["È tornata a casa felice.", "Lei è tornata a casa felice."] }
      ]
    }
  ],
  speaking: [
    "Tell your tutor about your last trip (8–10 sentences): *L'anno scorso sono andato/a a… Sono partito/a… Ho visto…*",
    "Ask your tutor *Sei mai stato/a a…?* about five places, and answer the same questions yourself.",
    "Describe a travel disaster (a missed train, lost luggage): *Purtroppo ho perso… / Il treno è arrivato in ritardo…*",
    "Quick-fire drill: your tutor says an infinitive (*fare, venire, prendere…*), you answer with *ho/sono* + participle."
  ],
  writing: "Write 10–12 sentences about a real trip you've taken. Use at least five essere verbs (with correct agreement) and five irregular participles (fatto, visto, preso, messo, perso…)."
};
