window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[12] = {
  week: 12,
  title: "Town and home: ci, directions, and the A1 checkpoint",
  textbook: "Nuovo Espresso 1 · Lezione 10 + ripasso",
  goals: [
    "Use ci to mean there (ci vado, ci sono stato)",
    "Ask for and understand directions",
    "Say where things are with prepositions of place (vicino a, davanti a…)",
    "Describe your home and neighbourhood",
    "Pass the A1 checkpoint: 150-word self-introduction + 15-minute all-Italian conversation"
  ],
  spanishNotes: [
    "**New pronoun:** *ci* = there (it replaces a / in + place). Spanish just says *voy (allí)*; Italian needs **ci vado**.",
    "**Preposition trap:** *cerca de* → **vicino a**; *lejos de* → **lontano da**; *delante de* → **davanti a**; *enfrente de* → **di fronte a**.",
    "**False friend:** *la camera* = room (bedroom = *camera da letto*). A camera is *la macchina fotografica*.",
    "**Easy mix-up:** *destra* = right, *dritto* = straight on. Spanish *derecha / derecho* look alike; in Italian the words are different."
  ],
  days: [
    {
      title: "Around town and the pronoun ci",
      notes: `**Ci** replaces a place introduced with *a, in, da, su* (and similar). It means **there**:

Vai spesso a Roma? Sì, ci vado ogni mese.
"Do you often go to Rome? Yes, I go there every month."

Like other pronouns, *ci* goes **before** the conjugated verb:

| Without ci | With ci |
|---|---|
| Vado al museo domani. | **Ci** vado domani. |
| Non vado in centro. | Non **ci** vado. |
| Sono stato a Venezia. | **Ci** sono stato. |
| Posso andare in farmacia. | Posso andar**ci**. / **Ci** posso andare. |

Sei mai stata a Firenze? Sì, ci sono stata due volte.
"Have you ever been to Florence? Yes, I've been there twice."

You already know *ci* from **c'è / ci sono** (there is / there are). It's the same little word.

In town:

Scusi, dov'è la farmacia? È in piazza, vicino alla chiesa.
"Excuse me, where's the pharmacy? It's in the square, near the church."

Note **in piazza**, *in centro*, *in banca*, *in farmacia*: many places take **in** with no article.`,
      vocab: [
        { it: "la piazza", en: "(town) square", pos: "noun (f)", ex: "Ci vediamo in piazza alle otto.", exEn: "See you in the square at eight.", note: "Spanish *plaza*" },
        { it: "la chiesa", en: "church", pos: "noun (f)", ex: "La chiesa è molto antica.", exEn: "The church is very old.", note: "Spanish *iglesia*" },
        { it: "la posta", en: "post office", pos: "noun (f)", ex: "La posta apre alle otto e mezza.", exEn: "The post office opens at half past eight.", note: "Also = mail. *Vado alla posta* = I'm going to the post office." },
        { it: "la farmacia", en: "pharmacy", pos: "noun (f)", ex: "Vado in farmacia.", exEn: "I'm going to the pharmacy.", note: "Stress on the *i*: far-ma-CI-a" },
        { it: "la fermata", en: "(bus / tram) stop", pos: "noun (f)", ex: "La fermata dell'autobus è qui davanti.", exEn: "The bus stop is right here in front.", note: "Spanish *parada*" },
        { it: "il semaforo", en: "traffic light", pos: "noun (m)", ex: "Al semaforo giri a destra.", exEn: "At the traffic light you turn right.", note: "Spanish *semáforo*" }
      ],
      drills: [
        { type: "translate", en: "I go there every day.", it: ["Ci vado ogni giorno.", "Io ci vado ogni giorno.", "Ci vado tutti i giorni.", "Io ci vado tutti i giorni."] },
        { type: "fill", prompt: "Sei mai stato a Venezia? Sì, ___ sono stato due volte.", en: "Have you ever been to Venice? Yes, I've been there twice.", it: ["ci"], hint: "there" },
        { type: "translate", en: "Where is the pharmacy?", it: ["Dov'è la farmacia?", "Dove è la farmacia?"] },
        { type: "fill", prompt: "Vai al museo oggi? No, ___ vado domani.", en: "Are you going to the museum today? No, I'm going tomorrow.", it: ["ci"], hint: "there" },
        { type: "translate", en: "The church is in the square.", it: ["La chiesa è in piazza.", "La chiesa è nella piazza."] }
      ]
    },
    {
      title: "Asking for and giving directions",
      notes: `Start politely with **Scusi** (formal) or **Scusa** (informal):

Scusi, per andare alla stazione?
"Excuse me, how do I get to the station?"

Scusi, c'è una banca qui vicino?
"Excuse me, is there a bank nearby?"

At A1 you can give directions with the **present tense** or **dovere + infinitive**:

| Italian | English |
|---|---|
| Va **dritto** (*diritto*) | You go straight on |
| Gira **a destra** / **a sinistra** | You turn right / left |
| **Attraversa** la piazza | You cross the square |
| Deve girare all'**incrocio** | You have to turn at the crossroads |
| È la seconda strada a destra | It's the second street on the right |

Use *va / gira* for **Lei** (formal) and *vai / giri* for **tu**:

Lei va dritto, poi al semaforo gira a sinistra.
"You go straight on, then at the traffic light you turn left."

Useful replies: *È lontano?* (Is it far?) *Sono cinque minuti a piedi.* (It's five minutes on foot.)`,
      vocab: [
        { it: "a destra", en: "on / to the right", pos: "expression", ex: "La banca è a destra.", exEn: "The bank is on the right.", note: "Spanish *a la derecha*" },
        { it: "a sinistra", en: "on / to the left", pos: "expression", ex: "Giri a sinistra dopo il ponte.", exEn: "You turn left after the bridge.", note: "Spanish *a la izquierda*" },
        { it: "dritto", en: "straight (on)", pos: "adverb", ex: "Lei va sempre dritto.", exEn: "You keep going straight on.", note: "Also *diritto*. Not *destra*!" },
        { it: "girare", en: "to turn", pos: "verb", ex: "Al semaforo giro a destra.", exEn: "At the light I turn right.", note: "Spanish *girar / doblar*" },
        { it: "attraversare", en: "to cross", pos: "verb", ex: "Attraversiamo la strada.", exEn: "We cross the street.", note: "Spanish *atravesar / cruzar*" },
        { it: "l'incrocio", en: "crossroads / intersection", pos: "noun (m)", ex: "All'incrocio giri a sinistra.", exEn: "At the intersection you turn left.", note: "Spanish *cruce*" }
      ],
      drills: [
        { type: "translate", en: "You go straight and then turn right. (tu)", it: ["Vai dritto e poi giri a destra.", "Vai diritto e poi giri a destra.", "Tu vai dritto e poi giri a destra.", "Vai dritto, poi giri a destra.", "Vai diritto, poi giri a destra."] },
        { type: "fill", prompt: "Al semaforo deve girare a ___.", en: "At the traffic light you have to turn left.", it: ["sinistra"], hint: "left" },
        { type: "translate", en: "Excuse me, how do I get to the station?", it: ["Scusi, per andare alla stazione?", "Scusa, per andare alla stazione?", "Scusi, come arrivo alla stazione?", "Scusa, come arrivo alla stazione?", "Scusi, come si arriva alla stazione?", "Scusa, come si arriva alla stazione?"] },
        { type: "fill", prompt: "Deve ___ la strada.", en: "You have to cross the street.", it: ["attraversare"], hint: "to cross" },
        { type: "translate", en: "The bank is on the right.", it: ["La banca è a destra.", "La banca è sulla destra."] }
      ]
    },
    {
      title: "Where is it? Prepositions of place",
      notes: `These location phrases combine with the article (articulated prepositions):

| Italian | English | Example |
|---|---|---|
| **vicino a** | near | vicino **alla** stazione |
| **lontano da** | far from | lontano **dal** centro |
| **davanti a** | in front of | davanti **al** museo |
| **dietro** (a) | behind | dietro la chiesa / dietro alla chiesa |
| **accanto a** | next to | accanto **alla** farmacia |
| **di fronte a** | opposite | di fronte **al** bar |

Abito vicino alla stazione, ma lontano dal centro.
"I live near the station, but far from the centre."

C'è un bar accanto al museo.
"There's a bar next to the museum."

Without a noun, they work alone as adverbs:

La farmacia è qui vicino.
"The pharmacy is nearby."

Il centro è lontano?
"Is the centre far?"

The main trap is that Spanish *cerca **de*** becomes Italian *vicino **a***, not *vicino di*.`,
      vocab: [
        { it: "vicino a", en: "near (to)", pos: "preposition", ex: "Abito vicino al parco.", exEn: "I live near the park.", note: "*cerca de* → *vicino a*. Also *il vicino* = neighbour" },
        { it: "lontano da", en: "far from", pos: "preposition", ex: "L'aeroporto è lontano dalla città.", exEn: "The airport is far from the city.", note: "Spanish *lejos de*" },
        { it: "davanti a", en: "in front of", pos: "preposition", ex: "Ti aspetto davanti al cinema.", exEn: "I'll wait for you in front of the cinema.", note: "Spanish *delante de*" },
        { it: "dietro", en: "behind", pos: "preposition", ex: "Il parcheggio è dietro la banca.", exEn: "The car park is behind the bank.", note: "Spanish *detrás de*. Also *dietro a*" },
        { it: "accanto a", en: "next to", pos: "preposition", ex: "Mi siedo accanto a te.", exEn: "I'll sit next to you.", note: "Spanish *al lado de*" },
        { it: "di fronte a", en: "opposite / across from", pos: "preposition", ex: "L'hotel è di fronte alla stazione.", exEn: "The hotel is opposite the station.", note: "Spanish *enfrente de*" }
      ],
      drills: [
        { type: "fill", prompt: "Abito vicino ___ stazione.", en: "I live near the station.", it: ["alla"], hint: "a + la" },
        { type: "translate", en: "The hotel is far from the center.", it: ["L'albergo è lontano dal centro.", "L'hotel è lontano dal centro."] },
        { type: "fill", prompt: "La farmacia è davanti ___ chiesa.", en: "The pharmacy is in front of the church.", it: ["alla"], hint: "a + la" },
        { type: "translate", en: "There is a bar next to the museum.", it: ["C'è un bar accanto al museo.", "Accanto al museo c'è un bar."] },
        { type: "fill", prompt: "Il parcheggio è dietro ___ banca.", en: "The car park is behind the bank.", it: ["la", "alla"], hint: "dietro (+ a)" }
      ]
    },
    {
      title: "At home: rooms and floors",
      notes: `Describe your home with **c'è / ci sono** and prepositions:

Nel mio appartamento ci sono due camere da letto, una cucina e un bagno.
"In my flat there are two bedrooms, a kitchen and a bathroom."

Il divano è nel soggiorno, davanti alla televisione.
"The sofa is in the living room, in front of the TV."

Floors use **ordinal numbers** with *a* + article: **al** piano terra (ground floor), **al primo** piano, **al secondo**, **al terzo**…

| Ordinal | |
|---|---|
| primo | 1st |
| secondo | 2nd |
| terzo | 3rd |
| quarto | 4th |
| quinto | 5th |

Abito al terzo piano, senza ascensore!
"I live on the third floor, with no lift!"

Rooms take **in** with no article in common phrases: *sono in cucina*, *vado in bagno*. With a possessive or description, use the article: *nella mia camera*.

Remember: **la camera** = room. You'll also hear *la stanza* (room) and *la sala* (living / dining room).`,
      vocab: [
        { it: "la cucina", en: "kitchen / cooking", pos: "noun (f)", ex: "La cucina è piccola ma luminosa.", exEn: "The kitchen is small but bright.", note: "Also *cuisine*: *la cucina italiana*" },
        { it: "il corridoio", en: "hallway, corridor", pos: "noun (m)", ex: "Il bagno è in fondo al corridoio.", exEn: "The bathroom is at the end of the hallway." },
        { it: "il soggiorno", en: "living room", pos: "noun (m)", ex: "Guardiamo la TV in soggiorno.", exEn: "We watch TV in the living room.", note: "Also = a stay: *un soggiorno a Roma*" },
        { it: "la camera da letto", en: "bedroom", pos: "noun (f)", ex: "La mia camera da letto è grande.", exEn: "My bedroom is big.", note: "Often just *la camera*. False friend: not a camera" },
        { it: "il divano", en: "sofa", pos: "noun (m)", ex: "Il gatto dorme sul divano.", exEn: "The cat sleeps on the sofa.", note: "Spanish *sofá* (also *il sofà*)" },
        { it: "le scale", en: "stairs", pos: "noun (f, pl)", ex: "Prendo le scale, non l'ascensore.", exEn: "I take the stairs, not the elevator.", note: "Usually plural. Floor = *il piano* (Week 4): *al secondo piano*." }
      ],
      drills: [
        { type: "translate", en: "The kitchen is small.", it: ["La cucina è piccola."] },
        { type: "translate", en: "There are two bedrooms.", it: ["Ci sono due camere da letto.", "Ci sono due camere."] },
        { type: "fill", prompt: "Abito ___ secondo piano.", en: "I live on the second floor.", it: ["al"], hint: "a + il" },
        { type: "fill", prompt: "Il divano è ___ soggiorno.", en: "The sofa is in the living room.", it: ["nel", "in"], hint: "in + il" },
        { type: "translate", en: "Is there a bathroom?", it: ["C'è un bagno?"] }
      ]
    },
    {
      title: "A1 review: putting it all together",
      notes: `This is the checkpoint day. Every A1 structure you need, in one table:

| Structure | Example | English |
|---|---|---|
| essere / avere | Sono americano e ho trent'anni. | I'm American and I'm thirty. |
| Present tense | Lavoro in un laboratorio. | I work in a lab. |
| Reflexives | Mi alzo alle sette. | I get up at seven. |
| Passato prossimo (avere) | Ho visto un bel film. | I saw a good film. |
| Passato prossimo (essere) | Sono andata al mare. | I (f) went to the seaside. |
| Modals | Devo studiare di più. | I have to study more. |
| piacere | Mi piacciono i libri gialli. | I like detective novels. |
| Object pronouns | Il caffè? Lo bevo amaro. | Coffee? I drink it black. |
| Possessives | Mia sorella e i miei nonni… | My sister and my grandparents… |
| ci | A Roma? Ci vado spesso. | Rome? I go there often. |

A model mini-introduction:

Mi chiamo Marco, abito in un quartiere tranquillo vicino al centro. Mi sono trasferito qui l'anno scorso. Il mio appartamento è piccolo ma mi piace molto.
"My name is Marco, I live in a quiet neighbourhood near the centre. I moved here last year. My flat is small but I really like it."

For the checkpoint, write your own 150-word version, then say it aloud to your tutor without notes.`,
      vocab: [
        { it: "il quartiere", en: "neighbourhood / district", pos: "noun (m)", ex: "Il mio quartiere è molto vivace.", exEn: "My neighbourhood is very lively.", note: "Spanish *barrio*" },
        { it: "il vicino di casa", en: "neighbour", pos: "noun (m)", ex: "Il mio vicino di casa è simpatico.", exEn: "My neighbour is nice.", note: "f: *la vicina*. Spanish *vecino*" },
        { it: "l'affitto", en: "rent", pos: "noun (m)", ex: "L'affitto è troppo caro.", exEn: "The rent is too expensive.", note: "*in affitto* = for rent / rented" },
        { it: "trasferirsi", en: "to move (house / city)", pos: "verb (reflexive, -isc-)", ex: "Ci siamo trasferiti a Milano.", exEn: "We moved to Milan.", note: "*mi trasferisco*. Spanish *mudarse*" },
        { it: "tranquillo", en: "quiet / calm", pos: "adjective", ex: "È una zona tranquilla.", exEn: "It's a quiet area.", note: "Also *Tranquillo!* = Don't worry!" },
        { it: "rumoroso", en: "noisy", pos: "adjective", ex: "La strada è molto rumorosa.", exEn: "The street is very noisy.", note: "Spanish *ruidoso*. *il rumore* = noise" }
      ],
      drills: [
        { type: "translate", en: "Last year I moved to Rome.", it: ["L'anno scorso mi sono trasferito a Roma.", "L'anno scorso mi sono trasferita a Roma.", "Mi sono trasferito a Roma l'anno scorso.", "Mi sono trasferita a Roma l'anno scorso.", "L'anno scorso io mi sono trasferito a Roma.", "L'anno scorso io mi sono trasferita a Roma."] },
        { type: "fill", prompt: "Il mio quartiere è molto ___.", en: "My neighbourhood is very quiet.", it: ["tranquillo"], hint: "quiet" },
        { type: "translate", en: "My neighbours are noisy.", it: ["I miei vicini sono rumorosi.", "I miei vicini di casa sono rumorosi.", "Le mie vicine sono rumorose.", "Le mie vicine di casa sono rumorose."] },
        { type: "fill", prompt: "L'affitto? ___ pago ogni mese.", en: "The rent? I pay it every month.", it: ["Lo"], hint: "it (m)" },
        { type: "translate", en: "Do you like your neighbourhood?", it: ["Ti piace il tuo quartiere?", "Le piace il Suo quartiere?", "Le piace il suo quartiere?", "Vi piace il vostro quartiere?"] }
      ]
    }
  ],
  speaking: [
    "A1 checkpoint: hold a 15-minute conversation entirely in Italian. Introduce yourself, your routine, your family and your home: *Mi chiamo…, abito…, di solito…*",
    "Give your tutor directions from your home to a nearby place: *Esci di casa, vai dritto, poi giri a destra…*",
    "Describe your neighbourhood: what's nearby, what you like and don't like: *Vicino a casa mia c'è…*",
    "Tell what you did last weekend, including where you went (use ci): *Sabato sono andato/a al mercato. Ci vado ogni settimana.*"
  ],
  writing: "A1 checkpoint: write a 150-word self-introduction covering your name, where you're from, where you live (home and neighbourhood), your job, your family, your daily routine and what you did last weekend."
};
