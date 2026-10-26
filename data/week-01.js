window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[1] = {
  week: 1,
  title: "Ciao! Sounds, greetings & essere",
  textbook: "Nuovo Espresso 1 · Lezione 1",
  goals: [
    "Pronounce c/g before e/i, gli, gn, and double consonants",
    "Greet people and say goodbye at different times of day",
    "Use subject pronouns and the verb essere (to be)",
    "Introduce yourself and ask someone's name (tu and Lei)",
    "Count from 0 to 20"
  ],
  spanishNotes: [
    "**Trap:** *ci/ce* sounds like English \"chee/cheh\" (*ciao* = \"chow\"), and *chi/che* sounds like \"kee/keh\" (*che* = \"keh\"). It's the reverse of what Spanish spelling suggests.",
    "**Trap:** Double consonants are pronounced longer and change the meaning: *nono* (ninth) vs *nonno* (grandpa), *pala* (shovel) vs *palla* (ball).",
    "**Cognate win:** *essere* works like *ser*: *sono* ≈ *soy*, *sei* ≈ *eres*, *è* ≈ *es*. Watch the accent: *è* (is) vs *e* (and).",
    "**Formal you:** Italian *Lei* = Spanish *usted*, and it takes the 3rd-person verb: *Come si chiama?* ≈ *¿Cómo se llama?*"
  ],
  days: [
    {
      title: "Sounds & greetings",
      notes: `### Italian sounds

Italian is spelled almost exactly as it's pronounced. Most of the alphabet is easy for Spanish speakers. A few combinations need attention:

| Spelling | Sound | Example |
|---|---|---|
| **ce, ci** | "che, chee" | *ciao* (chow), *cena* (dinner) |
| **che, chi** | "ke, kee" | *che* (what), *chi* (who) |
| **ge, gi** | "je, jee" | *gelato*, *giorno* |
| **ghe, ghi** | "ge, gee" (hard g) | *spaghetti* |
| **gli** | like Spanish *ll* (traditional) | *famiglia* |
| **gn** | like Spanish *ñ* | *bagno*, *lasagna* |
| **sc + e/i** | "sh" | *pesce* (fish) |

**Double consonants** are held longer: *nonno*, *palla*, *notte*.

### Greetings

- **Ciao** is informal hello and goodbye, used with friends.
- **Buongiorno** (good morning / good day) is used until early afternoon.
- **Buonasera** (good evening) is used from mid-afternoon onward.
- **Arrivederci** (goodbye) works in neutral and formal situations.

*Buongiorno, signora!*
"Good morning, madam!"

*Grazie! — Prego.*
"Thank you! — You're welcome."`,
      vocab: [
        { it: "ciao", en: "hi / bye (informal)", pos: "interjection", ex: "Ciao, Marco! Come stai?", exEn: "Hi, Marco! How are you?", note: "Informal only. Use buongiorno with strangers." },
        { it: "buongiorno", en: "good morning / good day", pos: "interjection", ex: "Buongiorno, signora.", exEn: "Good morning, madam.", note: "Used until early afternoon. Also a formal hello." },
        { it: "buonasera", en: "good evening", pos: "interjection", ex: "Buonasera, signor Rossi.", exEn: "Good evening, Mr. Rossi.", note: "Used from mid-afternoon on, when Spanish would still say 'buenas tardes'. Buonanotte = good night (going to bed)." },
        { it: "arrivederci", en: "goodbye", pos: "interjection", ex: "Grazie e arrivederci!", exEn: "Thanks and goodbye!", note: "ArrivederLa is the very formal version." },
        { it: "grazie", en: "thank you", pos: "interjection", ex: "Grazie mille!", exEn: "Thanks a lot!", note: "Pronounced GRAH-tsee-eh, three syllables." },
        { it: "prego", en: "you're welcome / please, go ahead", pos: "interjection", ex: "Grazie! — Prego.", exEn: "Thank you! — You're welcome.", note: "Also used by shopkeepers to mean 'Can I help you?'" }
      ],
      drills: [
        { type: "translate", en: "Good morning, madam.", it: ["Buongiorno, signora."] },
        { type: "translate", en: "Thanks a lot!", it: ["Grazie mille!", "Grazie tante!"] },
        { type: "fill", prompt: "Grazie! — ___.", en: "Thank you! — You're welcome.", it: ["prego"], hint: "the reply to grazie" },
        { type: "fill", prompt: "___, signor Rossi! (at 8 pm)", en: "Good evening, Mr. Rossi!", it: ["buonasera"], hint: "evening greeting" },
        { type: "translate", en: "Thanks and goodbye!", it: ["Grazie e arrivederci!", "Grazie, arrivederci!"] }
      ]
    },
    {
      title: "Subject pronouns & essere",
      notes: `### Subject pronouns + *essere* (to be)

| Pronoun | essere | English |
|---|---|---|
| io | **sono** | I am |
| tu | **sei** | you are (informal) |
| lui / lei / Lei | **è** | he / she is, you are (formal) |
| noi | **siamo** | we are |
| voi | **siete** | you all are |
| loro | **sono** | they are |

Like Spanish, Italian usually **drops the subject pronoun** because the verb ending already shows who it is.

*Sono di Philadelphia.*
"I'm from Philadelphia."

Use the pronoun for emphasis or contrast:

*Io sono di Roma, ma lui è di Milano.*
"I'm from Rome, but he's from Milan."

### Where are you from?

*Di dove sei?* — *Sono di Napoli.*
"Where are you from? — I'm from Naples."

Note that *sono* means both "I am" and "they are". Context tells you which.

**è** (is) has an accent; **e** (and) doesn't.`,
      vocab: [
        { it: "essere", en: "to be", pos: "verb", ex: "Noi siamo di Boston.", exEn: "We're from Boston.", note: "sono, sei, è, siamo, siete, sono" },
        { it: "sì", en: "yes", pos: "adverb", ex: "Sì, sono di Roma.", exEn: "Yes, I'm from Rome.", note: "Accent on sì. Without the accent, si is a pronoun." },
        { it: "anche", en: "also / too", pos: "adverb", ex: "Anche io sono di Roma.", exEn: "I'm from Rome too.", note: "Like Spanish 'también'. Goes before the word it modifies: anche io." },
        { it: "ma", en: "but", pos: "conjunction", ex: "Sono di Milano, ma abito qui.", exEn: "I'm from Milan, but I live here.", note: "= Spanish 'pero'" },
        { it: "qui", en: "here", pos: "adverb", ex: "Marco è qui.", exEn: "Marco is here.", note: "Also 'qua'. = Spanish 'aquí'" },
        { it: "di dove sei?", en: "where are you from? (informal)", pos: "expression", ex: "Di dove sei? — Sono di Chicago.", exEn: "Where are you from? — I'm from Chicago.", note: "Formal: Di dov'è?" }
      ],
      drills: [
        { type: "fill", prompt: "Io ___ di New York.", en: "I'm from New York.", it: ["sono"], hint: "essere, io" },
        { type: "fill", prompt: "Noi ___ di Roma.", en: "We're from Rome.", it: ["siamo"], hint: "essere, noi" },
        { type: "fill", prompt: "Tu ___ di Milano?", en: "Are you from Milan?", it: ["sei"], hint: "essere, tu" },
        { type: "translate", en: "Where are you from? (informal)", it: ["Di dove sei?", "Tu di dove sei?"] },
        { type: "translate", en: "I'm from Rome too.", it: ["Anche io sono di Roma.", "Anch'io sono di Roma.", "Sono di Roma anche io.", "Sono anche io di Roma."] }
      ]
    },
    {
      title: "How are you?",
      notes: `### Asking how someone is

**Informal (tu):**

*Come stai?* — *Bene, grazie. E tu?*
"How are you? — Well, thanks. And you?"

**Formal (Lei):**

*Come sta?* — *Molto bene, grazie. E Lei?*
"How are you? — Very well, thanks. And you?"

*Stai* and *sta* come from **stare**. For now, learn them as fixed phrases. As in Spanish (*¿cómo estás?*), Italian uses *stare* for "how are you".

### Common answers

| Italian | English |
|---|---|
| Benissimo! | Great! |
| Bene, grazie. | Fine, thanks. |
| Così così. | So-so. |
| Non c'è male. | Not bad. |
| Male. | Badly. |

### Feelings with essere

To describe a state, use *essere* + adjective. The ending changes for gender: **-o** for a man, **-a** for a woman.

*Sono stanco.* / *Sono stanca.*
"I'm tired." (said by a man / by a woman)

*Lei è contenta.*
"She's happy."

**Non** makes any verb negative and always goes before it:

*Non sono stanco.*
"I'm not tired."`,
      vocab: [
        { it: "come stai?", en: "how are you? (informal)", pos: "expression", ex: "Ciao, Luca! Come stai?", exEn: "Hi, Luca! How are you?", note: "Formal: Come sta?" },
        { it: "bene", en: "well / fine", pos: "adverb", ex: "Sto bene, grazie.", exEn: "I'm well, thanks.", note: "Benissimo = very well" },
        { it: "male", en: "badly / unwell", pos: "adverb", ex: "Oggi sto male.", exEn: "I feel bad today.", note: "Non c'è male = not bad" },
        { it: "così così", en: "so-so", pos: "expression", ex: "Come stai? — Così così.", exEn: "How are you? — So-so.", note: "" },
        { it: "stanco", en: "tired", pos: "adjective", ex: "Sono molto stanca.", exEn: "I'm very tired. (woman speaking)", note: "stanco / stanca; plural stanchi / stanche (the h keeps the hard k sound)" },
        { it: "contento", en: "happy / pleased", pos: "adjective", ex: "Siamo contenti.", exEn: "We're happy.", note: "Like Spanish 'contento'. Felice is a stronger 'happy'." }
      ],
      drills: [
        { type: "translate", en: "How are you? (informal)", it: ["Come stai?", "Tu come stai?"] },
        { type: "translate", en: "Fine, thanks. And you? (informal)", it: ["Bene, grazie. E tu?", "Bene grazie, e tu?"] },
        { type: "fill", prompt: "Marco ___ stanco.", en: "Marco is tired.", it: ["è"], hint: "essere, lui" },
        { type: "translate", en: "I'm not tired. (man speaking)", it: ["Non sono stanco.", "Io non sono stanco."] },
        { type: "fill", prompt: "Anna e Sara sono ___.", en: "Anna and Sara are happy.", it: ["contente"], hint: "contento, feminine plural" }
      ]
    },
    {
      title: "Introducing yourself (tu & Lei)",
      notes: `### What's your name?

The verb is *chiamarsi* (to be called), literally "to call oneself". Learn the forms as phrases for now:

| | Question | Answer |
|---|---|---|
| informal | *Come ti chiami?* | *Mi chiamo Michael.* |
| formal | *Come si chiama?* | *Mi chiamo Michael.* |

*Come ti chiami?* — *Mi chiamo Giulia. E tu?*
"What's your name? — My name is Giulia. And you?"

### Tu or Lei?

- **tu**: friends, family, children, people your age in casual settings.
- **Lei**: strangers, shop staff, older people, at work until invited to switch. *Lei* takes the 3rd-person verb, just like *usted*.

*Scusi, Lei è il signor Bianchi?*
"Excuse me, are you Mr. Bianchi?"

### Nice to meet you

*Piacere!* — *Piacere mio!*
"Nice to meet you! — The pleasure is mine!"

### Name and surname

*Il mio nome è Anna, il mio cognome è Verdi.*
"My first name is Anna, my surname is Verdi."

For "excuse me", use **scusa** with *tu* and **scusi** with *Lei*.`,
      vocab: [
        { it: "mi chiamo", en: "my name is", pos: "expression", ex: "Mi chiamo Michael.", exEn: "My name is Michael.", note: "= Spanish 'me llamo'. Also 'Sono Michael.'" },
        { it: "come ti chiami?", en: "what's your name? (informal)", pos: "expression", ex: "Ciao! Come ti chiami?", exEn: "Hi! What's your name?", note: "Formal: Come si chiama?" },
        { it: "piacere", en: "nice to meet you", pos: "expression", ex: "Piacere, sono Luca.", exEn: "Nice to meet you, I'm Luca.", note: "Reply: Piacere mio! It's also a noun: il piacere = pleasure." },
        { it: "il nome", en: "first name / name", pos: "noun", ex: "Il mio nome è Sara.", exEn: "My name is Sara.", note: "" },
        { it: "il cognome", en: "surname / last name", pos: "noun", ex: "Qual è il tuo cognome?", exEn: "What's your surname?", note: "= Spanish 'apellido'. The two are not cognates." },
        { it: "scusi", en: "excuse me (formal)", pos: "expression", ex: "Scusi, Lei è il signor Bianchi?", exEn: "Excuse me, are you Mr. Bianchi?", note: "Informal: scusa" }
      ],
      drills: [
        { type: "translate", en: "My name is Michael.", it: ["Mi chiamo Michael.", "Io mi chiamo Michael.", "Sono Michael."] },
        { type: "translate", en: "What's your name? (formal)", it: ["Come si chiama?", "Lei come si chiama?"] },
        { type: "fill", prompt: "Ciao! Come ti ___?", en: "Hi! What's your name?", it: ["chiami"], hint: "chiamarsi, tu" },
        { type: "fill", prompt: "Piacere! — Piacere ___!", en: "Nice to meet you! — The pleasure is mine!", it: ["mio"], hint: "'mine'" },
        { type: "translate", en: "Excuse me, are you Mrs. Verdi? (formal)", it: ["Scusi, Lei è la signora Verdi?", "Scusi, è la signora Verdi?"] }
      ]
    },
    {
      title: "Numbers 0–20 & spelling",
      notes: `### Numbers 0–20

| | | | |
|---|---|---|---|
| 0 zero | 1 uno | 2 due | 3 tre |
| 4 quattro | 5 cinque | 6 sei | 7 sette |
| 8 otto | 9 nove | 10 dieci | 11 undici |
| 12 dodici | 13 tredici | 14 quattordici | 15 quindici |
| 16 sedici | 17 diciassette | 18 diciotto | 19 diciannove |
| 20 venti | | | |

From 11 to 16, the number word comes first and **-dici** follows (*undici*, *dodici*). From 17 to 19, it flips to *dicia-* + number (*diciassette*, *diciotto*).

Watch the double consonants: *qua**tt**ro*, *se**tt**e*, *o**tt**o*.

Also, **sei** means both "6" and "you are".

### Giving a phone number

Italians usually say phone numbers digit by digit or in pairs.

*Il mio numero di telefono è tre tre tre, uno due...*
"My phone number is three three three, one two..."

### Spelling your name

*Come si scrive?* — *Emme, i, ci, acca, a, e, elle.*
"How do you spell it? — M, I, C, H, A, E, L."

Letter names to know: **acca** (h), **ci** (c), **gi** (g), **i lunga** (j), **kappa** (k), **ipsilon** (y), **doppia vu** (w).`,
      vocab: [
        { it: "il numero", en: "number", pos: "noun", ex: "Qual è il tuo numero?", exEn: "What's your number?", note: "il numero di telefono = phone number" },
        { it: "dieci", en: "ten", pos: "number", ex: "Sono le dieci.", exEn: "It's ten o'clock.", note: "= Spanish 'diez'" },
        { it: "quindici", en: "fifteen", pos: "number", ex: "Ho quindici minuti.", exEn: "I have fifteen minutes.", note: "11–16 end in -dici" },
        { it: "venti", en: "twenty", pos: "number", ex: "Venti euro, grazie.", exEn: "Twenty euros, thanks.", note: "= Spanish 'veinte'" },
        { it: "il telefono", en: "telephone", pos: "noun", ex: "Il numero di telefono è qui.", exEn: "The phone number is here.", note: "" },
        { it: "come si scrive?", en: "how do you spell it? / how is it written?", pos: "expression", ex: "Come si scrive il tuo cognome?", exEn: "How do you spell your surname?", note: "= Spanish '¿cómo se escribe?'" }
      ],
      drills: [
        { type: "fill", prompt: "Dieci + cinque = ___", en: "10 + 5 = 15", it: ["quindici"], hint: "15" },
        { type: "fill", prompt: "Nove + otto = ___", en: "9 + 8 = 17", it: ["diciassette"], hint: "17" },
        { type: "translate", en: "How do you spell it?", it: ["Come si scrive?"] },
        { type: "translate", en: "Twenty euros, thanks.", it: ["Venti euro, grazie."] },
        { type: "fill", prompt: "Il mio ___ di telefono è 333 1234.", en: "My phone number is 333 1234.", it: ["numero"], hint: "number" }
      ]
    }
  ],
  speaking: [
    "Greet your tutor appropriately for the time of day (Buongiorno / Buonasera) and ask how they are: 'Come sta?' or 'Come stai?'",
    "Introduce yourself: 'Mi chiamo... Sono di... Piacere!'",
    "Spell your first name and surname aloud with Italian letter names: 'Si scrive...'",
    "Ask your tutor where they're from and say whether you're tired or happy today: 'Di dov'è? Oggi sono...'"
  ],
  writing: "Write 4–5 short lines introducing yourself: greeting, your name, where you're from, how you are today, and goodbye."
};
