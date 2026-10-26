window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[4] = {
  week: 4,
  title: "In albergo: articles, c'è/ci sono & dates",
  textbook: "Nuovo Espresso 1 · Lezione 4",
  goals: [
    "Use all the definite articles: il, lo, l', la, i, gli, le",
    "Describe what's available with c'è / ci sono",
    "Book a hotel room and ask about prices",
    "Say dates, days of the week, and months",
    "Count to 1000"
  ],
  spanishNotes: [
    "**Trap:** Italian has seven forms of 'the'. The **lo / gli** forms (before s + consonant, z, gn, ps, y, and *gli* before vowels) have no Spanish equivalent: *lo studente*, *gli amici*, *gli zii*.",
    "**Cognate win:** *c'è / ci sono* = Spanish *hay*, but Italian distinguishes singular and plural: *C'è un bagno* / *Ci sono due camere*.",
    "**False friend:** *la camera* = (bed)room, not a camera (*la macchina fotografica*). *La stanza* also means room.",
    "**Dates:** Italian uses cardinal numbers for dates, like Spanish: *il cinque maggio*. The 1st is the exception: *il primo maggio*. Days and months are not capitalized."
  ],
  days: [
    {
      title: "Definite articles: singular",
      notes: `### "The" in the singular

| Article | Use before | Example |
|---|---|---|
| **il** | masc. + most consonants | *il bagno*, *il letto* |
| **lo** | masc. + **s + consonant**, **z**, **gn**, **ps**, **y** | *lo specchio*, *lo zaino* |
| **l'** | masc. or fem. + **vowel** | *l'albergo*, *l'amica* |
| **la** | fem. + consonant | *la camera*, *la chiave* |

The pattern matches the indefinite articles from Week 2: *un → il*, *uno → lo*, *una → la*, and *un / un' → l'*.

*La camera ha il bagno e la doccia.*
"The room has a bathroom and a shower."

*Scusi, dov'è l'albergo Roma?*
"Excuse me, where is the Hotel Roma?"

*Ecco la chiave!*
"Here's the key!"

### Where Italian uses the article but English doesn't

- With **possessives**: *il mio libro* (my book).
- With **general nouns**: *Preferisco il caffè.* ("I prefer coffee.")

Spanish behaves the same way here (*prefiero el café*).`,
      vocab: [
        { it: "l'albergo", en: "hotel", pos: "noun", ex: "L'albergo è vicino alla stazione.", exEn: "The hotel is near the station.", note: "Masculine. Also l'hotel. Spanish 'albergue' is a hostel" },
        { it: "la camera", en: "room / bedroom", pos: "noun", ex: "La camera è molto bella.", exEn: "The room is very nice.", note: "False friend: not a camera! camera singola / doppia" },
        { it: "il bagno", en: "bathroom; bath", pos: "noun", ex: "Il bagno è in camera.", exEn: "The bathroom is in the room.", note: "gn = ñ: BA-nyo" },
        { it: "la chiave", en: "key", pos: "noun", ex: "Ecco la chiave della camera.", exEn: "Here's the room key.", note: "= Spanish 'llave' (same Latin root, clavis). Plural: le chiavi" },
        { it: "lo specchio", en: "mirror", pos: "noun", ex: "Lo specchio è in bagno.", exEn: "The mirror is in the bathroom.", note: "lo because of s + consonant. = Spanish 'espejo'" },
        { it: "la doccia", en: "shower", pos: "noun", ex: "Faccio la doccia la mattina.", exEn: "I shower in the morning.", note: "fare la doccia = to take a shower" }
      ],
      drills: [
        { type: "fill", prompt: "___ specchio", en: "the mirror", it: ["lo"], hint: "s + consonant" },
        { type: "fill", prompt: "___ albergo", en: "the hotel", it: ["l'"], hint: "vowel" },
        { type: "fill", prompt: "___ chiave", en: "the key", it: ["la"], hint: "feminine" },
        { type: "fill", prompt: "___ bagno", en: "the bathroom", it: ["il"], hint: "masc. + consonant" },
        { type: "translate", en: "The room has a shower.", it: ["La camera ha la doccia.", "La camera ha una doccia."] }
      ]
    },
    {
      title: "Definite articles: plural",
      notes: `### "The" in the plural

| Singular | Plural | Example |
|---|---|---|
| **il** | **i** | *il letto → i letti* |
| **lo** | **gli** | *lo specchio → gli specchi* |
| **l'** (masc.) | **gli** | *l'asciugamano → gli asciugamani* |
| **l'** (fem.) | **le** | *l'amica → le amiche* |
| **la** | **le** | *la valigia → le valigie* |

The hardest one for Spanish speakers is **gli**. It's used for masculine plurals before a vowel or one of the *lo* sounds: *gli amici*, *gli studenti*, *gli zii*.

*Gli asciugamani sono in bagno.*
"The towels are in the bathroom."

*Le valigie sono in camera.*
"The suitcases are in the room."

*I letti sono comodi.*
"The beds are comfortable."

### Floors and nights

*La camera è al terzo piano.*
"The room is on the third floor."

*Prendo l'ascensore.*
"I'm taking the elevator."

*Quante notti?* — *Tre notti.*
"How many nights? — Three nights."

The Italian *primo piano* is one floor above the ground floor (*il piano terra*), like the European system in Spain.`,
      vocab: [
        { it: "il letto", en: "bed", pos: "noun", ex: "Il letto è comodo.", exEn: "The bed is comfortable.", note: "letto matrimoniale = double bed. Plural: i letti" },
        { it: "l'asciugamano", en: "towel", pos: "noun", ex: "Gli asciugamani sono in bagno.", exEn: "The towels are in the bathroom.", note: "Masculine (asciugare + mano). Plural: gli asciugamani" },
        { it: "la valigia", en: "suitcase", pos: "noun", ex: "La mia valigia è grande.", exEn: "My suitcase is big.", note: "= Spanish 'maleta'. Plural: le valigie" },
        { it: "la notte", en: "night", pos: "noun", ex: "Una camera per due notti, per favore.", exEn: "A room for two nights, please.", note: "Buonanotte = good night (when going to bed)" },
        { it: "l'ascensore", en: "elevator / lift", pos: "noun", ex: "L'ascensore è a destra.", exEn: "The elevator is on the right.", note: "Masculine. = Spanish 'ascensor'" },
        { it: "il piano", en: "floor (of a building)", pos: "noun", ex: "Abito al secondo piano.", exEn: "I live on the second floor.", note: "Also 'piano' = slowly/quietly; il pianoforte = piano" }
      ],
      drills: [
        { type: "fill", prompt: "___ asciugamani", en: "the towels", it: ["gli"], hint: "masc. plural + vowel" },
        { type: "fill", prompt: "___ valigie", en: "the suitcases", it: ["le"], hint: "fem. plural" },
        { type: "fill", prompt: "___ studenti", en: "the students", it: ["gli"], hint: "s + consonant, plural" },
        { type: "fill", prompt: "___ letti", en: "the beds", it: ["i"], hint: "il → ?" },
        { type: "translate", en: "A room for two nights, please.", it: ["Una camera per due notti, per favore.", "Una camera per due notti, per piacere."] }
      ]
    },
    {
      title: "C'è / ci sono",
      notes: `### There is / there are

| | Italian | Spanish |
|---|---|---|
| there is | **c'è** + singular | hay |
| there are | **ci sono** + plural | hay |

*In albergo c'è una piscina.*
"There's a pool in the hotel."

*Ci sono due ristoranti vicino.*
"There are two restaurants nearby."

### Questions and negatives

*C'è il parcheggio?* — *No, non c'è.*
"Is there parking? — No, there isn't."

*Ci sono asciugamani in camera?*
"Are there towels in the room?"

### *C'è* vs *è*

- **c'è** says something exists: *C'è un bar.* ("There's a café.")
- **è** says where a specific thing is: *Il bar è vicino.* ("The café is nearby.")

*Dov'è* = "where is" (*dove + è*):

*Dov'è la piscina?*
"Where is the pool?"

### Near and far

**vicino (a)** = near, **lontano (da)** = far from:

*L'albergo è lontano dal centro?*
"Is the hotel far from the center?"`,
      vocab: [
        { it: "c'è", en: "there is", pos: "expression", ex: "C'è un bar qui vicino?", exEn: "Is there a café nearby?", note: "= Spanish 'hay' (singular)" },
        { it: "ci sono", en: "there are", pos: "expression", ex: "Ci sono due letti.", exEn: "There are two beds.", note: "= Spanish 'hay' (plural)" },
        { it: "il parcheggio", en: "parking / parking lot", pos: "noun", ex: "C'è il parcheggio in albergo?", exEn: "Is there parking at the hotel?", note: "parcheggiare = to park" },
        { it: "la piscina", en: "swimming pool", pos: "noun", ex: "La piscina è aperta fino alle otto.", exEn: "The pool is open until eight.", note: "= Spanish 'piscina'. sc+i = sh: pi-SHEE-na" },
        { it: "vicino", en: "near / nearby", pos: "adverb", ex: "Il ristorante è qui vicino.", exEn: "The restaurant is nearby.", note: "vicino a = near (something). Also il vicino = neighbor" },
        { it: "lontano", en: "far", pos: "adverb", ex: "La stazione è lontana?", exEn: "Is the station far?", note: "lontano da = far from. Agrees as an adjective: lontana" }
      ],
      drills: [
        { type: "fill", prompt: "___ una piscina in albergo.", en: "There's a pool in the hotel.", it: ["c'è"], hint: "singular" },
        { type: "fill", prompt: "___ due bagni.", en: "There are two bathrooms.", it: ["ci sono"], hint: "plural" },
        { type: "translate", en: "Is there parking?", it: ["C'è il parcheggio?", "C'è un parcheggio?", "C'è parcheggio?"] },
        { type: "translate", en: "Where is the pool?", it: ["Dov'è la piscina?", "Dove è la piscina?"] },
        { type: "translate", en: "The hotel is near here.", it: ["L'albergo è qui vicino.", "L'albergo è vicino.", "L'hotel è qui vicino."] }
      ]
    },
    {
      title: "Days, months & dates",
      notes: `### Days of the week

**lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica**

All of them are masculine except *la domenica*. They're not capitalized.

A useful difference:
- *il lunedì* = every Monday
- *lunedì* = this Monday

*Il sabato faccio la spesa.*
"On Saturdays I do the grocery shopping."

### Months

**gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre**

Use **a** or **in** with months: *a maggio*, *in agosto*.

### Dates: *il* + number + month

*Oggi è il dieci ottobre.*
"Today is October 10th."

*Il primo gennaio.*
"January 1st." (only the 1st uses the ordinal *primo*)

Italian writes dates day-first: 10/10 = 10 ottobre, and 3/4 = 3 aprile (not March 4!).

*Che giorno è oggi?* — *È giovedì.*
"What day is it today? — It's Thursday."

*Quando è il tuo compleanno?* — *È il quindici maggio.*
"When is your birthday? — It's May 15th."`,
      vocab: [
        { it: "oggi", en: "today", pos: "adverb", ex: "Oggi è lunedì.", exEn: "Today is Monday.", note: "= Spanish 'hoy'" },
        { it: "domani", en: "tomorrow", pos: "adverb", ex: "A domani!", exEn: "See you tomorrow!", note: "dopodomani = the day after tomorrow" },
        { it: "la settimana", en: "week", pos: "noun", ex: "Lavoro cinque giorni alla settimana.", exEn: "I work five days a week.", note: "= Spanish 'semana'" },
        { it: "il compleanno", en: "birthday", pos: "noun", ex: "Buon compleanno!", exEn: "Happy birthday!", note: "Spanish 'cumpleaños'. Note the double n" },
        { it: "gennaio", en: "January", pos: "noun", ex: "A gennaio fa freddo.", exEn: "It's cold in January.", note: "Months: gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre" },
        { it: "lunedì", en: "Monday", pos: "noun", ex: "Il lunedì vado in palestra.", exEn: "On Mondays I go to the gym.", note: "Days: lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica (f.)" }
      ],
      drills: [
        { type: "translate", en: "Today is Monday.", it: ["Oggi è lunedì."] },
        { type: "translate", en: "See you tomorrow!", it: ["A domani!"] },
        { type: "fill", prompt: "Oggi è il ___ maggio.", en: "Today is May 1st.", it: ["primo"], hint: "the 1st is special" },
        { type: "translate", en: "When is your birthday? (informal)", it: ["Quando è il tuo compleanno?", "Quand'è il tuo compleanno?"] },
        { type: "translate", en: "On Saturdays I do the grocery shopping.", it: ["Il sabato faccio la spesa.", "Il sabato io faccio la spesa."] }
      ]
    },
    {
      title: "Numbers to 1000, booking a room & review",
      notes: `### Hundreds

| | | |
|---|---|---|
| 100 cento | 200 duecento | 300 trecento |
| 500 cinquecento | 900 novecento | 1000 **mille** |

As before, everything joins into one word: *centoventi* (120), *duecentocinquanta* (250), *milleduecento* (1200).

The plural of *mille* is **-mila**: *duemila* (2000), *tremila* (3000).

### Booking a room

*Buonasera, avete una camera libera per stanotte?*
"Good evening, do you have a room available for tonight?"

*Vorrei prenotare una camera doppia per tre notti.*
"I'd like to book a double room for three nights."

*Quanto costa?* — *Centoventi euro a notte.*
"How much is it? — 120 euros a night."

*La colazione è compresa?*
"Is breakfast included?"

*Vorrei* (I'd like) is the polite form of *volere*. Learn it as a phrase for now.

### Weeks 1–4 recap

- **essere** / **avere**: *sono, sei, è...* / *ho, hai, ha...*
- **-are / -ere / -ire** verbs: *parlo, leggo, dormo, capisco*
- **fare / andare**: *faccio, vado*
- **Articles**: *un / uno / una / un'* and *il / lo / l' / la / i / gli / le*
- **c'è / ci sono**`,
      vocab: [
        { it: "mille", en: "one thousand", pos: "number", ex: "Mille grazie!", exEn: "Thanks a million! (lit. a thousand thanks)", note: "Plural: -mila (duemila, tremila)" },
        { it: "prenotare", en: "to book / to reserve", pos: "verb", ex: "Vorrei prenotare una camera.", exEn: "I'd like to book a room.", note: "la prenotazione = reservation" },
        { it: "il prezzo", en: "price", pos: "noun", ex: "Il prezzo è di cento euro.", exEn: "The price is a hundred euros.", note: "= Spanish 'precio'. zz = ts sound" },
        { it: "quanto costa?", en: "how much does it cost?", pos: "expression", ex: "Quanto costa la camera?", exEn: "How much is the room?", note: "Plural: Quanto costano?" },
        { it: "libero", en: "free / available", pos: "adjective", ex: "Avete una camera libera?", exEn: "Do you have a room available?", note: "Also 'free time': il tempo libero. Free of charge = gratis" },
        { it: "compreso", en: "included", pos: "adjective", ex: "La colazione è compresa.", exEn: "Breakfast is included.", note: "Agrees: compreso / compresa. Also incluso" }
      ],
      drills: [
        { type: "fill", prompt: "1000 + 1000 = ___", en: "2000", it: ["duemila"], hint: "mille → -mila" },
        { type: "translate", en: "I'd like to book a room.", it: ["Vorrei prenotare una camera.", "Vorrei prenotare una stanza."] },
        { type: "translate", en: "How much is the room?", it: ["Quanto costa la camera?", "Quanto costa la stanza?"] },
        { type: "translate", en: "Is breakfast included?", it: ["La colazione è compresa?", "La colazione è inclusa?", "È compresa la colazione?", "È inclusa la colazione?"] },
        { type: "fill", prompt: "Avete una camera ___ per stanotte?", en: "Do you have a room available for tonight?", it: ["libera"], hint: "free, feminine" }
      ]
    }
  ],
  speaking: [
    "Role-play checking into a hotel: 'Buonasera, ho una prenotazione a nome...' / 'Avete una camera libera?'",
    "Ask about facilities: 'C'è il parcheggio? C'è il wifi? A che piano è la camera?'",
    "Say today's date, your birthday, and your favorite month: 'Oggi è il... Il mio compleanno è il...'",
    "Describe your home: 'A casa mia c'è... / ci sono...'"
  ],
  writing: "Write a short email to an Italian hotel booking a room: dates, number of nights, type of room, and two questions about the hotel (use c'è / ci sono and quanto costa)."
};
