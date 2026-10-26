window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[3] = {
  week: 3,
  title: "Tempo libero: -ere/-ire verbs, fare & andare",
  textbook: "Nuovo Espresso 1 · Lezione 3",
  goals: [
    "Conjugate regular -ere and -ire verbs in the present",
    "Use -isc- verbs like capire, finire, preferire",
    "Use the irregular verbs fare and andare",
    "Talk about free time, hobbies, and how often you do things"
  ],
  spanishNotes: [
    "**Trap:** -ere and -ire verbs share almost every ending. Only voi differs: *leggete* vs *dormite*. Spanish has a similar split (*coméis / vivís*).",
    "**Trap:** *capire* = to understand (Spanish *entender*). *Capisco* (I understand) has a hidden *-isc-*. Don't say *capo*, which means 'boss'!",
    "**False friend:** *prendere* (to take / to have food or drink) = *tomar*, not *prender*. *Prendo un caffè* = 'I'll have a coffee.'",
    "**Different verb:** Many activities use *fare*, where Spanish uses other verbs or none: *fare colazione* (*desayunar*), *fare la spesa* (*hacer la compra*), *fare una passeggiata* (*dar un paseo*)."
  ],
  days: [
    {
      title: "Present tense: -ere verbs",
      notes: `### Regular -ere verbs

| | leggere (to read) | ending |
|---|---|---|
| io | legg**o** | -o |
| tu | legg**i** | -i |
| lui / lei / Lei | legg**e** | -e |
| noi | legg**iamo** | -iamo |
| voi | legg**ete** | -ete |
| loro | legg**ono** | -ono |

### Watch the sound changes

In *leggere*, the spelling stays the same but the **sound** changes: *leggo* has a hard g ("leg-go"), while *leggi* has a soft g ("led-jee"). *Vincere* and *conoscere* work the same way.

*Leggo un libro.*
"I'm reading a book."

*Scrivi un'email?*
"Are you writing an email?"

*Prendiamo un caffè?*
"Shall we have a coffee?"

*Vedete il film stasera?*
"Are you all seeing the film tonight?"

### The present tense covers a lot

As in Spanish, one present-tense form covers "I read", "I'm reading", and even near-future plans ("I'm reading it tomorrow").

**Prendere** is very common: take the bus (*prendere l'autobus*), have a drink or food (*prendere un caffè*).`,
      vocab: [
        { it: "leggere", en: "to read", pos: "verb", ex: "Leggo un libro in italiano.", exEn: "I'm reading a book in Italian.", note: "leggo (hard g), leggi (soft g)" },
        { it: "scrivere", en: "to write", pos: "verb", ex: "Scrivo un'email a Marco.", exEn: "I'm writing an email to Marco.", note: "= Spanish 'escribir'" },
        { it: "prendere", en: "to take; to have (food/drink)", pos: "verb", ex: "Prendo un caffè, grazie.", exEn: "I'll have a coffee, thanks.", note: "= Spanish 'tomar'" },
        { it: "vedere", en: "to see", pos: "verb", ex: "Vedi Anna oggi?", exEn: "Are you seeing Anna today?", note: "= Spanish 'ver'" },
        { it: "il caffè", en: "coffee (espresso)", pos: "noun", ex: "Un caffè, per favore.", exEn: "A coffee, please.", note: "In Italy, 'un caffè' means an espresso by default. Plural unchanged: i caffè" },
        { it: "il film", en: "film / movie", pos: "noun", ex: "Vediamo un film?", exEn: "Shall we watch a movie?", note: "Foreign nouns don't change in the plural: i film" }
      ],
      drills: [
        { type: "fill", prompt: "Io ___ un libro. (leggere)", en: "I'm reading a book.", it: ["leggo"], hint: "-o" },
        { type: "fill", prompt: "Lei ___ un'email. (scrivere)", en: "She's writing an email.", it: ["scrive"], hint: "-e" },
        { type: "fill", prompt: "Loro ___ il treno. (prendere)", en: "They're taking the train.", it: ["prendono"], hint: "-ono" },
        { type: "translate", en: "I'll have a coffee, thanks.", it: ["Prendo un caffè, grazie.", "Io prendo un caffè, grazie."] },
        { type: "translate", en: "Shall we watch a movie?", it: ["Vediamo un film?", "Guardiamo un film?"] }
      ]
    },
    {
      title: "Present tense: -ire verbs",
      notes: `### Regular -ire verbs

| | dormire (to sleep) | ending |
|---|---|---|
| io | dorm**o** | -o |
| tu | dorm**i** | -i |
| lui / lei / Lei | dorm**e** | -e |
| noi | dorm**iamo** | -iamo |
| voi | dorm**ite** | -ite |
| loro | dorm**ono** | -ono |

These are the same endings as -ere verbs, except for **voi** (*-ite*).

*Dormo otto ore.*
"I sleep eight hours."

*Quando parti?* — *Parto domani.*
"When are you leaving? — I'm leaving tomorrow."

*Apri la finestra, per favore?*
"Could you open the window, please?"

*Senti la musica?*
"Do you hear the music?"

### *Sentire* has two meanings

**sentire** = to hear *and* to feel. In conversation, *Senti!* means "Listen!" or "Hey!" (*Senta!* with *Lei*), very much like Spanish *¡Oye!*`,
      vocab: [
        { it: "dormire", en: "to sleep", pos: "verb", ex: "Dormo poco.", exEn: "I don't sleep much.", note: "= Spanish 'dormir', but regular (no o→ue)" },
        { it: "partire", en: "to leave / depart", pos: "verb", ex: "Il treno parte alle otto.", exEn: "The train leaves at eight.", note: "Like Spanish 'partir' (to set off). Partire per = to leave for: parto per Roma" },
        { it: "aprire", en: "to open", pos: "verb", ex: "Apri la finestra?", exEn: "Will you open the window?", note: "= Spanish 'abrir'" },
        { it: "sentire", en: "to hear / to feel", pos: "verb", ex: "Senti la musica?", exEn: "Do you hear the music?", note: "Senti! = Listen!/Hey! (like ¡Oye!)" },
        { it: "la musica", en: "music", pos: "noun", ex: "Ascolto la musica italiana.", exEn: "I listen to Italian music.", note: "Stress on MU: MU-si-ca" },
        { it: "la finestra", en: "window", pos: "noun", ex: "La finestra è aperta.", exEn: "The window is open.", note: "Spanish 'ventana' is a different root" }
      ],
      drills: [
        { type: "fill", prompt: "Voi ___ bene? (dormire)", en: "Do you all sleep well?", it: ["dormite"], hint: "voi, -ire" },
        { type: "fill", prompt: "Noi ___ domani. (partire)", en: "We're leaving tomorrow.", it: ["partiamo"], hint: "-iamo" },
        { type: "fill", prompt: "Tu ___ la finestra? (aprire)", en: "Will you open the window?", it: ["apri"], hint: "-i" },
        { type: "translate", en: "Do you hear the music? (informal)", it: ["Senti la musica?", "Tu senti la musica?"] },
        { type: "translate", en: "The train leaves tomorrow.", it: ["Il treno parte domani."] }
      ]
    },
    {
      title: "-isc- verbs: capire, finire, preferire",
      notes: `### Verbs with *-isc-*

Many -ire verbs add **-isc-** in four forms: io, tu, lui/lei, and loro. The noi and voi forms stay regular.

| | capire (to understand) |
|---|---|
| io | cap**isc**o |
| tu | cap**isc**i |
| lui / lei / Lei | cap**isc**e |
| noi | capiamo |
| voi | capite |
| loro | cap**isc**ono |

### Pronunciation

Pronunciation follows the spelling: *capisco* has a hard sk sound, while *capisci* and *capisce* have an sh sound.

*Capisci l'italiano?* — *Sì, capisco un po'.*
"Do you understand Italian? — Yes, I understand a little."

*Finisco il lavoro alle sei.*
"I finish work at six."

*Preferisci il tè o il caffè?*
"Do you prefer tea or coffee?"

### How do you know?

There's no rule for which -ire verbs take *-isc-*, so learn them as a group. Common ones: **capire, finire, preferire, pulire, spedire** (to send), **costruire** (to build).

*Non capisco* means "I don't understand". It's a lifesaver, so learn it today!`,
      vocab: [
        { it: "capire", en: "to understand", pos: "verb", ex: "Scusi, non capisco.", exEn: "Sorry, I don't understand.", note: "-isc-: capisco, capisci, capisce, capiamo, capite, capiscono" },
        { it: "finire", en: "to finish / to end", pos: "verb", ex: "Il film finisce alle dieci.", exEn: "The movie ends at ten.", note: "-isc- verb" },
        { it: "preferire", en: "to prefer", pos: "verb", ex: "Preferisco il tè.", exEn: "I prefer tea.", note: "-isc- verb. = Spanish 'preferir', but no e→ie change" },
        { it: "pulire", en: "to clean", pos: "verb", ex: "Puliamo la casa il sabato.", exEn: "We clean the house on Saturdays.", note: "-isc- verb: pulisco" },
        { it: "il lavoro", en: "work / job", pos: "noun", ex: "Il lavoro finisce alle sei.", exEn: "Work ends at six.", note: "Che lavoro fai? = What do you do for work?" },
        { it: "presto", en: "early; soon", pos: "adverb", ex: "Finisco presto oggi.", exEn: "I'm finishing early today.", note: "A presto! = See you soon! Fai presto! = Hurry up! Not Spanish 'presto' (ready) — that's pronto." }
      ],
      drills: [
        { type: "fill", prompt: "Io non ___. (capire)", en: "I don't understand.", it: ["capisco"], hint: "-isc-" },
        { type: "fill", prompt: "Noi ___ il tè. (preferire)", en: "We prefer tea.", it: ["preferiamo"], hint: "noi = no -isc-" },
        { type: "fill", prompt: "Il film ___ alle dieci. (finire)", en: "The movie ends at ten.", it: ["finisce"], hint: "lui/lei form, -isc-" },
        { type: "translate", en: "Do you prefer tea or coffee? (informal)", it: ["Preferisci il tè o il caffè?", "Tu preferisci il tè o il caffè?"] },
        { type: "translate", en: "Sorry, I don't understand. (formal)", it: ["Scusi, non capisco.", "Scusi, io non capisco."] }
      ]
    },
    {
      title: "Fare: the do-everything verb",
      notes: `### *Fare* (to do / to make) is irregular

| | fare |
|---|---|
| io | **faccio** |
| tu | **fai** |
| lui / lei / Lei | **fa** |
| noi | **facciamo** |
| voi | **fate** |
| loro | **fanno** |

### Fixed expressions with *fare*

| Italian | English |
|---|---|
| fare colazione | to have breakfast |
| fare la spesa | to do the grocery shopping |
| fare sport | to play / do sports |
| fare una passeggiata | to go for a walk |
| fare una foto | to take a photo |
| fare il medico | to work as a doctor |

*Che cosa fai nel fine settimana?*
"What do you do on the weekend?"

*Faccio sport e faccio la spesa.*
"I play sports and do the grocery shopping."

*Facciamo una passeggiata?*
"Shall we go for a walk?"

*Che tempo fa?* — *Fa caldo.*
"What's the weather like? — It's hot."

Remember the false friend: **caldo** means hot, not broth like Spanish *caldo*.`,
      vocab: [
        { it: "fare", en: "to do / to make", pos: "verb", ex: "Che cosa fai stasera?", exEn: "What are you doing tonight?", note: "faccio, fai, fa, facciamo, fate, fanno" },
        { it: "lo sport", en: "sport(s)", pos: "noun", ex: "Faccio sport tre volte alla settimana.", exEn: "I play sports three times a week.", note: "fare sport (no article). Plural: gli sport" },
        { it: "la spesa", en: "grocery shopping", pos: "noun", ex: "Il sabato faccio la spesa.", exEn: "On Saturdays I do the grocery shopping.", note: "fare la spesa. Different from fare shopping (clothes etc.)" },
        { it: "la colazione", en: "breakfast", pos: "noun", ex: "Faccio colazione al bar.", exEn: "I have breakfast at the café.", note: "fare colazione (no article) = to have breakfast" },
        { it: "la passeggiata", en: "walk / stroll", pos: "noun", ex: "Facciamo una passeggiata?", exEn: "Shall we go for a walk?", note: "Italians love la passeggiata in the evening" },
        { it: "il fine settimana", en: "weekend", pos: "noun", ex: "Che cosa fai il fine settimana?", exEn: "What do you do on weekends?", note: "Also il weekend" }
      ],
      drills: [
        { type: "fill", prompt: "Io ___ colazione alle sette.", en: "I have breakfast at seven.", it: ["faccio"], hint: "fare, io" },
        { type: "fill", prompt: "Loro ___ la spesa il sabato.", en: "They do the grocery shopping on Saturdays.", it: ["fanno"], hint: "fare, loro" },
        { type: "fill", prompt: "Noi ___ una passeggiata.", en: "We're going for a walk.", it: ["facciamo"], hint: "fare, noi" },
        { type: "translate", en: "What are you doing on the weekend? (informal)", it: ["Che cosa fai il fine settimana?", "Cosa fai il fine settimana?", "Che fai il fine settimana?", "Che cosa fai nel fine settimana?", "Cosa fai nel fine settimana?", "Che cosa fai questo fine settimana?", "Cosa fai questo fine settimana?"] },
        { type: "translate", en: "Shall we go for a walk?", it: ["Facciamo una passeggiata?"] }
      ]
    },
    {
      title: "Andare & how often",
      notes: `### *Andare* (to go) is irregular

| | andare |
|---|---|
| io | **vado** |
| tu | **vai** |
| lui / lei / Lei | **va** |
| noi | andiamo |
| voi | andate |
| loro | **vanno** |

### Where to? Learn these as chunks

The full preposition rules come in Week 5. For now:

| a + place | in + place |
|---|---|
| a casa | in palestra |
| a Roma | in montagna |
| al cinema | in ufficio |
| al mare | in Italia |

*Vado al cinema con Anna.*
"I'm going to the movies with Anna."

*Andiamo in montagna o al mare?*
"Shall we go to the mountains or the beach?"

### How often?

| Italian | English |
|---|---|
| sempre | always |
| spesso | often |
| qualche volta | sometimes |
| non... mai | never |

*Vado spesso in palestra.*
"I often go to the gym."

*Non vado mai al cinema.*
"I never go to the movies."

Like Spanish, Italian uses a **double negative**: *non... mai*.`,
      vocab: [
        { it: "andare", en: "to go", pos: "verb", ex: "Dove vai?", exEn: "Where are you going?", note: "vado, vai, va, andiamo, andate, vanno" },
        { it: "il cinema", en: "cinema / movie theater", pos: "noun", ex: "Andiamo al cinema stasera?", exEn: "Shall we go to the movies tonight?", note: "Masculine despite -a. Plural unchanged: i cinema" },
        { it: "la palestra", en: "gym", pos: "noun", ex: "Vado in palestra la mattina.", exEn: "I go to the gym in the morning.", note: "andare in palestra. Not 'gimnasio'!" },
        { it: "la montagna", en: "mountain(s)", pos: "noun", ex: "D'estate andiamo in montagna.", exEn: "In summer we go to the mountains.", note: "andare in montagna (singular!)" },
        { it: "il mare", en: "sea / beach", pos: "noun", ex: "Vado al mare ad agosto.", exEn: "I go to the beach in August.", note: "andare al mare = to go to the seaside" },
        { it: "spesso", en: "often", pos: "adverb", ex: "Vado spesso al cinema.", exEn: "I often go to the movies.", note: "Goes after the verb" }
      ],
      drills: [
        { type: "fill", prompt: "Io ___ in palestra.", en: "I'm going to the gym.", it: ["vado"], hint: "andare, io" },
        { type: "fill", prompt: "Marco e Luca ___ al mare.", en: "Marco and Luca are going to the beach.", it: ["vanno"], hint: "andare, loro" },
        { type: "translate", en: "Where are you going? (informal)", it: ["Dove vai?", "Tu dove vai?"] },
        { type: "translate", en: "I never go to the movies.", it: ["Non vado mai al cinema.", "Io non vado mai al cinema."] },
        { type: "translate", en: "We often go to the mountains.", it: ["Andiamo spesso in montagna.", "Noi andiamo spesso in montagna."] }
      ]
    }
  ],
  speaking: [
    "Describe a typical weekend: 'Il fine settimana faccio... / vado...'",
    "Ask your tutor about their hobbies: 'Che cosa fa nel tempo libero? Preferisce il mare o la montagna?'",
    "Say how often you do 5 activities using sempre / spesso / qualche volta / non... mai.",
    "Practice survival phrases: 'Non capisco. Può ripetere, per favore?'"
  ],
  writing: "Write 6–8 sentences about your free time: what you do, where you go, and how often, using fare, andare, and at least two -ere/-ire verbs."
};
