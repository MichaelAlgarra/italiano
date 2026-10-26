window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[5] = {
  week: 5,
  title: "Mangiare fuori — Food, Restaurants & Ordering",
  textbook: "Nuovo Espresso 1 · Lezione 5",
  goals: [
    "Order food and drinks politely at a bar and a restaurant",
    "Combine prepositions with articles (al, del, nel, sul, dal…)",
    "Conjugate and use volere, potere, dovere + infinitive",
    "Understand the structure of an Italian meal (primo, secondo, contorno, dolce)"
  ],
  spanishNotes: [
    "**Trap:** *il burro* is butter, not a donkey (donkey = *l'asino*). You'll meet it on bread-and-butter menus.",
    "**Trap:** Spanish *a + el = al* and *de + el = del* only; Italian fuses **five** prepositions (di, a, da, in, su) with **every** definite article: *nella, sugli, dalle…*",
    "**Cognate win:** *volere/potere/dovere* ≈ *querer/poder/deber*, and like Spanish they're followed directly by an infinitive: *Posso pagare?* = *¿Puedo pagar?*",
    "**Trap:** *il conto* is the bill (*la cuenta*). Don't say *la cuenta*. Ask for *il conto, per favore*."
  ],
  days: [
    {
      title: "Al bar — ordering coffee and breakfast",
      notes: `At an Italian bar you usually order at the counter (*al banco*) and often pay first at the till (*alla cassa*).

**Polite ordering phrases**

| Phrase | Meaning |
|---|---|
| Vorrei… | I would like… (fixed polite phrase for now) |
| Per me… | For me… |
| Prendo… | I'll have… (lit. I take) |
| Un caffè, per favore. | A coffee, please. |
| Quanto costa? / Quant'è? | How much is it? |

Examples:

- *Vorrei un cappuccino e un cornetto.* — "I'd like a cappuccino and a croissant."
- *Per me una spremuta d'arancia.* — "An orange juice for me."
- *Prendo un caffè al banco.* — "I'll have a coffee at the counter."

**Culture note:** *un caffè* means an espresso. Cappuccino is a breakfast drink; ordering one after lunch marks you as a tourist.`,
      vocab: [
        { it: "vorrei", en: "I would like", pos: "phrase", ex: "Vorrei un bicchiere d'acqua.", exEn: "I'd like a glass of water.", note: "The polite form of volere. Learn it as a fixed phrase now; the conditional comes in A2." },
        { it: "il cornetto", en: "croissant (Italian breakfast pastry)", pos: "noun", ex: "La mattina prendo un cornetto al bar.", exEn: "In the morning I have a croissant at the bar." },
        { it: "la spremuta", en: "freshly squeezed juice", pos: "noun", ex: "Una spremuta d'arancia, per favore.", exEn: "A fresh orange juice, please.", note: "From spremere, 'to squeeze'. Juice from a carton is *il succo*." },
        { it: "il bicchiere", en: "glass (for drinking)", pos: "noun", ex: "Il bicchiere è vuoto.", exEn: "The glass is empty.", note: "Not *il vetro*, which is glass as a material (like Spanish *vaso* vs *vidrio*)." },
        { it: "lo zucchero", en: "sugar", pos: "noun", ex: "Prendi il caffè con lo zucchero?", exEn: "Do you take your coffee with sugar?", note: "*lo* because it starts with z." },
        { it: "il banco", en: "counter (at a bar)", pos: "noun", ex: "Prendiamo il caffè al banco.", exEn: "We're having coffee at the counter.", note: "Standing at the counter is cheaper than sitting at a table." }
      ],
      drills: [
        { type: "translate", en: "I'd like a cappuccino, please.", it: ["Vorrei un cappuccino, per favore.", "Vorrei un cappuccino per favore"] },
        { type: "translate", en: "For me a croissant.", it: ["Per me un cornetto.", "Un cornetto per me."] },
        { type: "fill", prompt: "Prendi il caffè con lo ___?", en: "Do you take your coffee with sugar?", it: ["zucchero"] },
        { type: "translate", en: "How much is it?", it: ["Quanto costa?", "Quant'è?", "Quanto è?"] },
        { type: "fill", prompt: "Vorrei un ___ d'acqua.", en: "I'd like a glass of water.", it: ["bicchiere"] }
      ]
    },
    {
      title: "Preposizioni articolate (1): di and a",
      notes: `When **di** (of) or **a** (to/at) comes before a definite article, they merge into one word.

| | il | lo | l' | la | i | gli | le |
|---|---|---|---|---|---|---|---|
| **di** | del | dello | dell' | della | dei | degli | delle |
| **a** | al | allo | all' | alla | ai | agli | alle |

Note that **di** becomes **de-** before the article.

Examples:

- *Il menù del giorno.* — "The menu of the day."
- *Vado al ristorante.* — "I'm going to the restaurant."
- *Il prezzo dello zucchero.* — "The price of sugar."
- *Il cameriere porta il caffè al tavolo.* — "The waiter brings the coffee to the table."
- *Gli spaghetti alle vongole.* — "Spaghetti with clams."

Dish names often use **a + article** to mean "in the style of / with": *pasta all'amatriciana*, *risotto ai funghi*.

**The Italian meal**

| Course | What it is |
|---|---|
| l'antipasto | starter |
| il primo | first course (pasta, risotto, soup) |
| il secondo | main course (meat or fish) |
| il contorno | side dish (vegetables, salad) |
| il dolce | dessert |`,
      vocab: [
        { it: "il menù", en: "menu", pos: "noun", ex: "Posso vedere il menù?", exEn: "Can I see the menu?", note: "Invariable: *i menù*." },
        { it: "l'antipasto", en: "starter / appetizer", pos: "noun", ex: "Come antipasto prendo la bruschetta.", exEn: "As a starter I'll have the bruschetta.", note: "Lit. 'before the meal', not 'anti-pasta'." },
        { it: "il primo", en: "first course (pasta, risotto, soup)", pos: "noun", ex: "Come primo prendo gli spaghetti alla carbonara.", exEn: "For the first course I'll have spaghetti carbonara." },
        { it: "il secondo", en: "main course (meat or fish)", pos: "noun", ex: "Per secondo prendo il pesce.", exEn: "For the main course I'll have the fish." },
        { it: "il contorno", en: "side dish", pos: "noun", ex: "Come contorno, patate o insalata?", exEn: "As a side, potatoes or salad?" },
        { it: "il dolce", en: "dessert; (adj.) sweet", pos: "noun", ex: "Il tiramisù è il dolce della casa.", exEn: "Tiramisù is the house dessert.", note: "Like Spanish *el postre*, but literally 'the sweet'." }
      ],
      drills: [
        { type: "fill", prompt: "Il menù ___ giorno.", en: "The menu of the day.", it: ["del"], hint: "di + il" },
        { type: "fill", prompt: "Vado ___ ristorante.", en: "I'm going to the restaurant.", it: ["al"], hint: "a + il" },
        { type: "fill", prompt: "Risotto ___ funghi.", en: "Risotto with mushrooms.", it: ["ai"], hint: "a + i" },
        { type: "fill", prompt: "Il prezzo ___ acqua.", en: "The price of the water.", it: ["dell'"], hint: "di + l'" },
        { type: "translate", en: "For the main course I'll have the fish.", it: ["Per secondo prendo il pesce.", "Come secondo prendo il pesce.", "Prendo il pesce per secondo.", "Prendo il pesce come secondo."] }
      ]
    },
    {
      title: "Preposizioni articolate (2): da, in, su — and setting the table",
      notes: `**da** (from / at someone's place), **in** (in) and **su** (on) also merge with articles. **in** becomes **ne-**.

| | il | lo | l' | la | i | gli | le |
|---|---|---|---|---|---|---|---|
| **da** | dal | dallo | dall' | dalla | dai | dagli | dalle |
| **in** | nel | nello | nell' | nella | nei | negli | nelle |
| **su** | sul | sullo | sull' | sulla | sui | sugli | sulle |

Examples:

- *Il pane è nel cestino.* — "The bread is in the basket."
- *La forchetta è sul tavolo.* — "The fork is on the table."
- *Il vino è nella bottiglia.* — "The wine is in the bottle."
- *Ceniamo dai nonni.* — "We're having dinner at our grandparents'."

**Not merged:** *con* (with), *per* (for), *tra/fra* (between) stay separate: *con il pane* — "with the bread" (*col* exists but is optional).

**Without an article, no merging:** *in Italia*, *a Roma*, *da Marco*, *a casa*.`,
      vocab: [
        { it: "la forchetta", en: "fork", pos: "noun", ex: "Manca una forchetta.", exEn: "A fork is missing." },
        { it: "il coltello", en: "knife", pos: "noun", ex: "Il coltello è vicino al piatto.", exEn: "The knife is next to the plate." },
        { it: "il cucchiaio", en: "spoon", pos: "noun", ex: "Per la minestra serve un cucchiaio.", exEn: "You need a spoon for the soup.", note: "A teaspoon is *il cucchiaino*." },
        { it: "il piatto", en: "plate; dish", pos: "noun", ex: "Il piatto del giorno è la lasagna.", exEn: "The dish of the day is lasagna." },
        { it: "il tovagliolo", en: "napkin", pos: "noun", ex: "Il tovagliolo è sulla sedia.", exEn: "The napkin is on the chair." },
        { it: "la bottiglia", en: "bottle", pos: "noun", ex: "Una bottiglia di vino rosso, per favore.", exEn: "A bottle of red wine, please." }
      ],
      drills: [
        { type: "fill", prompt: "La forchetta è ___ tavolo.", en: "The fork is on the table.", it: ["sul"], hint: "su + il" },
        { type: "fill", prompt: "Il vino è ___ bottiglia.", en: "The wine is in the bottle.", it: ["nella"], hint: "in + la" },
        { type: "fill", prompt: "Ceniamo ___ nonni.", en: "We're having dinner at our grandparents'.", it: ["dai"], hint: "da + i" },
        { type: "translate", en: "The knife is on the plate.", it: ["Il coltello è sul piatto."] },
        { type: "fill", prompt: "Le forchette sono ___ tovaglioli.", en: "The forks are on the napkins.", it: ["sui"], hint: "su + i" }
      ]
    },
    {
      title: "Volere, potere, dovere — want, can, must",
      notes: `These three **modal verbs** are irregular and are usually followed by an **infinitive**.

| | volere (want) | potere (can) | dovere (must) |
|---|---|---|---|
| io | voglio | posso | devo |
| tu | vuoi | puoi | devi |
| lui/lei/Lei | vuole | può | deve |
| noi | vogliamo | possiamo | dobbiamo |
| voi | volete | potete | dovete |
| loro | vogliono | possono | devono |

Examples:

- *Posso avere il conto?* — "Can I have the bill?"
- *Vuoi un caffè?* — "Do you want a coffee?"
- *Dobbiamo prenotare un tavolo.* — "We have to book a table."
- *Possiamo pagare con la carta?* — "Can we pay by card?"

**Politeness:** *Voglio* ("I want") sounds blunt when ordering. Use **vorrei** ("I'd like") or **posso avere…?** ("may I have…?") instead.

**Negative:** *non* goes before the modal: *Non posso mangiare la carne.* — "I can't eat meat."`,
      vocab: [
        { it: "volere", en: "to want", pos: "verb", ex: "Vuoi un caffè?", exEn: "Do you want a coffee?", note: "Like *querer*; for ordering say *vorrei*." },
        { it: "potere", en: "to be able to, can, may", pos: "verb", ex: "Posso avere il conto?", exEn: "Can I have the bill?" },
        { it: "dovere", en: "to have to, must", pos: "verb", ex: "Devo tornare a casa presto.", exEn: "I have to go home early." },
        { it: "il tavolo", en: "table", pos: "noun", ex: "Vorrei prenotare un tavolo per due.", exEn: "I'd like to book a table for two.", note: "At a restaurant it's *il tavolo*. *La tavola* is the table as a place for eating: *A tavola!* = \"Dinner's ready!\"" },
        { it: "ordinare", en: "to order (food)", pos: "verb", ex: "Possiamo ordinare?", exEn: "Can we order?", note: "Also means 'to tidy up'." },
        { it: "pagare", en: "to pay", pos: "verb", ex: "Pago io!", exEn: "I'm paying! / It's on me!", note: "Adds an h to keep the hard g: *paghi, paghiamo*." }
      ],
      drills: [
        { type: "fill", prompt: "___ avere il conto?", en: "Can I have the bill?", it: ["Posso"], hint: "potere, io" },
        { type: "fill", prompt: "Noi ___ prenotare un tavolo.", en: "We have to book a table.", it: ["dobbiamo"], hint: "dovere, noi" },
        { type: "translate", en: "Do you want a coffee?", it: ["Vuoi un caffè?", "Tu vuoi un caffè?"] },
        { type: "translate", en: "Can we pay by card?", it: ["Possiamo pagare con la carta?", "Possiamo pagare con carta?"] },
        { type: "fill", prompt: "Loro non ___ mangiare la carne.", en: "They can't eat meat.", it: ["possono"], hint: "potere, loro" }
      ]
    },
    {
      title: "In trattoria — a full restaurant conversation",
      notes: `Putting it all together. A typical exchange:

- **Cameriere:** *Buonasera, quanti siete?* — "Good evening, how many of you are there?"
- **Cliente:** *Siamo in due. Abbiamo una prenotazione.* — "There are two of us. We have a reservation."
- **Cameriere:** *Cosa prendete da bere?* — "What will you have to drink?"
- **Cliente:** *Una bottiglia d'acqua frizzante e un quarto di vino rosso.* — "A bottle of sparkling water and a quarter-liter of red wine."
- **Cameriere:** *Siete pronti per ordinare?* — "Are you ready to order?"
- **Cliente:** *Sì. Per me un primo: le tagliatelle al ragù. Lei vuole il pesce.* — "Yes. For me, a first course: tagliatelle with meat sauce. She wants the fish."
- **Cliente:** *Scusi, il conto, per favore.* — "Excuse me, the bill, please."

**Useful:**

| Phrase | Meaning |
|---|---|
| Cosa ci consiglia? | What do you recommend (to us)? |
| Sono vegetariano/a. | I'm vegetarian. |
| Il servizio è incluso? | Is service included? |

Italians rarely tip big; *il coperto* (cover charge) is often on the bill.`,
      vocab: [
        { it: "il cameriere", en: "waiter", pos: "noun", ex: "Il cameriere porta il menù.", exEn: "The waiter brings the menu.", note: "Waitress: *la cameriera*. Not *camarero*!" },
        { it: "l'acqua frizzante", en: "sparkling water", pos: "noun", ex: "Preferisci l'acqua frizzante o naturale?", exEn: "Do you prefer sparkling or still water?", note: "Still water = *l'acqua naturale*." },
        { it: "la carne", en: "meat", pos: "noun", ex: "Non mangio la carne.", exEn: "I don't eat meat.", note: "Same as Spanish." },
        { it: "il pesce", en: "fish (as food and animal)", pos: "noun", ex: "Il pesce è fresco oggi.", exEn: "The fish is fresh today.", note: "Italian has one word for *pez* and *pescado*." },
        { it: "la verdura", en: "vegetables (collective)", pos: "noun", ex: "Come contorno prendo la verdura grigliata.", exEn: "As a side I'll have grilled vegetables." },
        { it: "consigliare", en: "to recommend, advise", pos: "verb", ex: "Cosa ci consiglia?", exEn: "What do you recommend?", note: "Cf. Spanish *aconsejar*." }
      ],
      drills: [
        { type: "translate", en: "Excuse me, the bill, please.", it: ["Scusi, il conto, per favore.", "Scusi il conto per favore"] },
        { type: "translate", en: "I'm vegetarian, I don't eat meat.", it: ["Sono vegetariano, non mangio la carne.", "Sono vegetariana, non mangio la carne.", "Sono vegetariano, non mangio carne.", "Sono vegetariana, non mangio carne.", "Io sono vegetariano, non mangio la carne.", "Io sono vegetariana, non mangio la carne."] },
        { type: "fill", prompt: "Cosa ci ___?", en: "What do you recommend (to us)? (formal)", it: ["consiglia"], hint: "consigliare, Lei" },
        { type: "translate", en: "Sparkling water, please.", it: ["Acqua frizzante, per favore.", "L'acqua frizzante, per favore.", "Un'acqua frizzante, per favore."] },
        { type: "fill", prompt: "Il ___ porta il menù.", en: "The waiter brings the menu.", it: ["cameriere"] }
      ]
    }
  ],
  speaking: [
    "Role-play ordering at a bar: your tutor is the barista. Start with *Buongiorno, vorrei…*",
    "Role-play a full dinner at a trattoria: book a table by phone first (*Vorrei prenotare un tavolo per…*), then order a primo, secondo and dolce.",
    "Describe your favorite restaurant: *Il mio ristorante preferito è… Lì puoi mangiare…*",
    "Ask your tutor what a typical Italian breakfast and dinner look like: *Cosa mangiano gli italiani a colazione?*"
  ],
  writing: "Write a short restaurant dialogue (8–10 lines) between you and a waiter. Use vorrei, posso, devo and at least four articulated prepositions (al, del, nella, sul…)."
};
