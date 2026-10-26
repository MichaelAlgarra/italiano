window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[2] = {
  week: 2,
  title: "Io e gli altri: nouns, avere & -are verbs",
  textbook: "Nuovo Espresso 1 · Lezione 2",
  goals: [
    "Recognize noun gender and form plurals (-o → -i, -a → -e, -e → -i)",
    "Use the indefinite articles un, uno, una, un'",
    "Conjugate avere and talk about your job and nationality",
    "Conjugate regular -are verbs in the present tense",
    "Count to 100 and give an address or phone number"
  ],
  spanishNotes: [
    "**Trap:** Plurals don't add -s. *ragazzo → ragazzi*, *ragazza → ragazze*, *studente → studenti*.",
    "**Trap:** For professions after *essere*, Italian drops the article, just like Spanish: *Sono medico* = *Soy médico*. Don't say *sono un medico* in a neutral statement.",
    "**Cognate win:** The -are verbs map directly onto -ar verbs: *parlo/hablo*, *parli/hablas*, *parla/habla*. Note the noi form: *parliamo*, not *parlamos*.",
    "**False friend:** *largo* means wide, not long. And *aspettare* means to wait, not 'to expect' (that's *aspettarsi*)."
  ],
  days: [
    {
      title: "Nouns: gender & plural",
      notes: `### Masculine or feminine?

Every Italian noun has a gender. The ending is usually a reliable guide:

| Ending | Gender | Singular → Plural |
|---|---|---|
| **-o** | masculine | ragazz**o** → ragazz**i** |
| **-a** | feminine | ragazz**a** → ragazz**e** |
| **-e** | masculine *or* feminine | studente → studenti, chiave → chiavi |

Nouns ending in **-e** become **-i** in the plural, whatever their gender. You just have to learn whether each one is masculine or feminine.

*Il ragazzo e la ragazza sono amici.*
"The boy and the girl are friends."

*Ho due libri.*
"I have two books."

### Learn the article with the noun

In the vocab cards, nouns come with *il / la / l'*, meaning "the". This tells you the gender, so memorize it as part of the word. Week 4 covers all the article forms.

Two useful quirks:
- A mixed group of men and women takes the masculine plural: *Marco e Anna sono amici.*
- *amico* → **amici** (the c softens to a "ch" sound), but *amica* → **amiche** (it keeps the hard k).`,
      vocab: [
        { it: "il ragazzo", en: "boy / young man; boyfriend", pos: "noun", ex: "Il ragazzo è di Roma.", exEn: "The boy is from Rome.", note: "plural: i ragazzi (also 'guys')" },
        { it: "la ragazza", en: "girl / young woman; girlfriend", pos: "noun", ex: "La ragazza è italiana.", exEn: "The girl is Italian.", note: "plural: le ragazze" },
        { it: "l'amico", en: "friend (male)", pos: "noun", ex: "Luca è un amico.", exEn: "Luca is a friend.", note: "plural: gli amici" },
        { it: "l'amica", en: "friend (female)", pos: "noun", ex: "Sara è un'amica di Anna.", exEn: "Sara is a friend of Anna's.", note: "plural: le amiche (keeps the hard k sound)" },
        { it: "il libro", en: "book", pos: "noun", ex: "Il libro è qui.", exEn: "The book is here.", note: "= Spanish 'libro'. False friend: la libreria = bookshop." },
        { it: "la casa", en: "house / home", pos: "noun", ex: "La casa è grande.", exEn: "The house is big.", note: "a casa = at home / (to) home" }
      ],
      drills: [
        { type: "fill", prompt: "un ragazzo → due ___", en: "one boy → two boys", it: ["ragazzi"], hint: "-o → -i" },
        { type: "fill", prompt: "una ragazza → due ___", en: "one girl → two girls", it: ["ragazze"], hint: "-a → -e" },
        { type: "fill", prompt: "un'amica → due ___", en: "one (female) friend → two friends", it: ["amiche"], hint: "keep the hard k" },
        { type: "translate", en: "The book is here.", it: ["Il libro è qui.", "Il libro è qua."] },
        { type: "translate", en: "Marco and Anna are friends.", it: ["Marco e Anna sono amici."] }
      ]
    },
    {
      title: "Indefinite articles & nationalities",
      notes: `### A / an: *un, uno, una, un'*

| | Use before | Example |
|---|---|---|
| **un** | most masculine nouns | *un libro*, *un amico* |
| **uno** | masc. nouns starting with **s + consonant**, **z**, **gn**, **ps**, **y** | *uno studente*, *uno zaino* |
| **una** | feminine nouns starting with a consonant | *una ragazza*, *una casa* |
| **un'** | feminine nouns starting with a vowel | *un'amica* |

Masculine *un* **never** takes an apostrophe: *un amico*, but *un'amica*.

### Nationalities

Nationality adjectives come in two types:

| Type | Masculine | Feminine |
|---|---|---|
| -o / -a | italiano, americano, spagnolo, tedesco | italiana, americana, spagnola, tedesca |
| -e (same for both) | inglese, francese | inglese, francese |

*Sono americano, ma mia madre è italiana.*
"I'm American, but my mother is Italian."

*Lei è inglese?* — *No, sono francese.*
"Are you English? — No, I'm French."

Nationality words are **not capitalized** in Italian (same as Spanish): *italiano*, not *Italiano*.

*Parla* means "speaks" (3rd person). The full verb is tomorrow's topic.`,
      vocab: [
        { it: "italiano", en: "Italian", pos: "adjective", ex: "Giulia è italiana.", exEn: "Giulia is Italian.", note: "italiano / italiana. Also the language: l'italiano" },
        { it: "americano", en: "American", pos: "adjective", ex: "Sono americano.", exEn: "I'm American.", note: "americano / americana" },
        { it: "spagnolo", en: "Spanish", pos: "adjective", ex: "Parla spagnolo?", exEn: "Do you speak Spanish? (formal)", note: "Note gn (≈ ñ): spa-NYO-lo" },
        { it: "inglese", en: "English", pos: "adjective", ex: "Lei è inglese.", exEn: "She's English.", note: "Same form for m./f. Plural: inglesi" },
        { it: "tedesco", en: "German", pos: "adjective", ex: "Il ragazzo è tedesco.", exEn: "The boy is German.", note: "Not 'alemano'! plural: tedeschi / tedesche" },
        { it: "francese", en: "French", pos: "adjective", ex: "Marie è francese.", exEn: "Marie is French.", note: "Same form for m./f." }
      ],
      drills: [
        { type: "fill", prompt: "___ studente", en: "a student", it: ["uno"], hint: "s + consonant" },
        { type: "fill", prompt: "___ amica", en: "a (female) friend", it: ["un'"], hint: "feminine + vowel" },
        { type: "fill", prompt: "Giulia è ___.", en: "Giulia is Italian.", it: ["italiana"], hint: "feminine" },
        { type: "translate", en: "I'm American, but she's German.", it: ["Sono americano, ma lei è tedesca.", "Io sono americano, ma lei è tedesca.", "Sono americana, ma lei è tedesca.", "Io sono americana, ma lei è tedesca."] },
        { type: "translate", en: "Paul is English and Marie is French.", it: ["Paul è inglese e Marie è francese."] }
      ]
    },
    {
      title: "Avere & professions",
      notes: `### *Avere* (to have)

| | avere |
|---|---|
| io | **ho** |
| tu | **hai** |
| lui / lei / Lei | **ha** |
| noi | **abbiamo** |
| voi | **avete** |
| loro | **hanno** |

The **h** is silent. It only exists to tell *ho* (I have) apart from *o* (or), *ha* from *a* (to), and *hanno* from *anno* (year).

### Age uses *avere*, like Spanish

*Quanti anni hai?* — *Ho trentacinque anni.*
"How old are you? — I'm thirty-five."

### Professions

After *essere*, a profession takes **no article**:

*Sono ingegnere.*
"I'm an engineer."

*Marco è medico e Anna è insegnante.*
"Marco is a doctor and Anna is a teacher."

With *avere*:

*Ho un ufficio a Milano.*
"I have an office in Milan."

Asking someone's job:

*Che lavoro fai?*
"What do you do for work?"

Many profession words ending in **-e** work for both genders: *l'insegnante*, *il/la cantante*. Some have a feminine form: *studente → studentessa*.`,
      vocab: [
        { it: "avere", en: "to have", pos: "verb", ex: "Abbiamo due figli.", exEn: "We have two children.", note: "ho, hai, ha, abbiamo, avete, hanno. The h is silent." },
        { it: "il medico", en: "doctor", pos: "noun", ex: "Mia sorella è medico.", exEn: "My sister is a doctor.", note: "Also il dottore / la dottoressa. plural: i medici" },
        { it: "l'insegnante", en: "teacher", pos: "noun", ex: "Anna è insegnante.", exEn: "Anna is a teacher.", note: "m./f. same form. Also il professore / la professoressa" },
        { it: "lo studente", en: "student (male)", pos: "noun", ex: "Sono uno studente americano.", exEn: "I'm an American student.", note: "f: la studentessa. Takes lo/uno (s + consonant)" },
        { it: "l'ingegnere", en: "engineer", pos: "noun", ex: "Mio padre è ingegnere.", exEn: "My father is an engineer.", note: "gn as in Spanish ñ: in-je-NYE-re" },
        { it: "l'ufficio", en: "office", pos: "noun", ex: "L'ufficio è qui.", exEn: "The office is here.", note: "= Spanish 'oficina' (Spanish 'oficio' = trade is a false friend)" }
      ],
      drills: [
        { type: "fill", prompt: "Io ___ trent'anni.", en: "I'm thirty years old.", it: ["ho"], hint: "avere, io" },
        { type: "fill", prompt: "Loro ___ un ufficio a Roma.", en: "They have an office in Rome.", it: ["hanno"], hint: "avere, loro" },
        { type: "fill", prompt: "Tu quanti anni ___?", en: "How old are you?", it: ["hai"], hint: "avere, tu" },
        { type: "translate", en: "I'm an engineer.", it: ["Sono ingegnere.", "Io sono ingegnere.", "Sono un ingegnere."] },
        { type: "translate", en: "Anna is a teacher and Marco is a doctor.", it: ["Anna è insegnante e Marco è medico.", "Anna è un'insegnante e Marco è un medico.", "Anna è insegnante e Marco è dottore."] }
      ]
    },
    {
      title: "Present tense: -are verbs",
      notes: `### Regular -are verbs

Drop **-are** and add the endings:

| | parlare (to speak) | ending |
|---|---|---|
| io | parl**o** | -o |
| tu | parl**i** | -i |
| lui / lei / Lei | parl**a** | -a |
| noi | parl**iamo** | -iamo |
| voi | parl**ate** | -ate |
| loro | parl**ano** | -ano |

The stress in *parlano* falls on the first syllable: **PAR**-la-no, not par-LA-no.

*Parlo inglese e un po' di spagnolo.*
"I speak English and a little Spanish."

*Dove abiti?* — *Abito a Philadelphia.*
"Where do you live? — I live in Philadelphia."

*Lavoriamo in un ufficio.*
"We work in an office."

### Spelling notes

- **-iare** verbs don't double the *i*: *studiare* → tu **studi** (not *studii*), noi **studiamo**.
- **-care / -gare** verbs add an *h* to keep the hard sound: *cercare* → tu **cerchi**, noi **cerchiamo**.

### Questions

Questions are just a rising intonation. No word order change is needed:

*Parli italiano?*
"Do you speak Italian?"

*Abito a Roma* means "I live in Rome". Use **a** before cities.`,
      vocab: [
        { it: "parlare", en: "to speak / to talk", pos: "verb", ex: "Parli italiano?", exEn: "Do you speak Italian?", note: "= Spanish 'hablar'" },
        { it: "lavorare", en: "to work", pos: "verb", ex: "Lavoro in un ufficio.", exEn: "I work in an office.", note: "= Spanish 'trabajar'. il lavoro = job/work" },
        { it: "abitare", en: "to live (reside)", pos: "verb", ex: "Abito a Philadelphia.", exEn: "I live in Philadelphia.", note: "abitare a + city, abitare in + country/street" },
        { it: "studiare", en: "to study", pos: "verb", ex: "Studio italiano.", exEn: "I'm studying Italian.", note: "tu studi (one i), noi studiamo" },
        { it: "ascoltare", en: "to listen (to)", pos: "verb", ex: "Ascolto la radio.", exEn: "I listen to the radio.", note: "No 'to' needed: ascoltare qualcosa, like Spanish 'escuchar'" },
        { it: "aspettare", en: "to wait (for)", pos: "verb", ex: "Aspetto un amico.", exEn: "I'm waiting for a friend.", note: "No 'for' needed: aspetto Marco = I'm waiting for Marco" }
      ],
      drills: [
        { type: "fill", prompt: "Noi ___ italiano. (parlare)", en: "We speak Italian.", it: ["parliamo"], hint: "-iamo" },
        { type: "fill", prompt: "Tu ___ a Roma? (abitare)", en: "Do you live in Rome?", it: ["abiti"], hint: "-i" },
        { type: "fill", prompt: "Loro ___ in un ufficio. (lavorare)", en: "They work in an office.", it: ["lavorano"], hint: "-ano" },
        { type: "translate", en: "I'm waiting for a friend.", it: ["Aspetto un amico.", "Io aspetto un amico.", "Aspetto un'amica.", "Io aspetto un'amica."] },
        { type: "translate", en: "Do you study Italian? (informal)", it: ["Studi italiano?", "Tu studi italiano?", "Studi l'italiano?", "Tu studi l'italiano?"] }
      ]
    },
    {
      title: "Numbers to 100, phone & address",
      notes: `### Tens

| | | |
|---|---|---|
| 20 venti | 30 trenta | 40 quaranta |
| 50 cinquanta | 60 sessanta | 70 settanta |
| 80 ottanta | 90 novanta | 100 cento |

### Building numbers

Join the tens and the units into **one word**: *ventitré* (23), *trentacinque* (35), *quarantadue* (42).

Two rules:
- Before **uno** and **otto**, the tens drop their last vowel: *ventuno* (21), *ventotto* (28), *trentuno*, *quarantotto*.
- Numbers ending in **-tré** get an accent: *ventitré*, *trentatré*.

*Ho quarantadue anni.*
"I'm forty-two."

### Contact details

*Qual è il tuo indirizzo?* — *Via Roma, numero ventotto.*
"What's your address? — Via Roma, number twenty-eight."

*Qual è il tuo numero di cellulare?*
"What's your cell number?"

In an Italian address, the street comes first and then the number: *Via Garibaldi 15*.

**quanti / quante** = how many (masculine / feminine):

*Quanti studenti ci sono?* (how many students)
*Quante ragazze?* (how many girls)`,
      vocab: [
        { it: "trenta", en: "thirty", pos: "number", ex: "Ho trent'anni.", exEn: "I'm thirty.", note: "trentuno, trentotto (drop the -a)" },
        { it: "quaranta", en: "forty", pos: "number", ex: "Mio padre ha quarantotto anni.", exEn: "My father is forty-eight.", note: "= Spanish 'cuarenta'" },
        { it: "cento", en: "one hundred", pos: "number", ex: "Cento euro? Grazie!", exEn: "A hundred euros? Thanks!", note: "No 'uno' before it: cento, not 'un cento'" },
        { it: "l'indirizzo", en: "address", pos: "noun", ex: "Qual è il tuo indirizzo?", exEn: "What's your address?", note: "= Spanish 'dirección'. Also used for email: indirizzo email" },
        { it: "il cellulare", en: "cell phone / mobile", pos: "noun", ex: "Il mio cellulare è qui.", exEn: "My phone is here.", note: "Colloquially il cell or il telefonino" },
        { it: "quanti", en: "how many", pos: "adjective", ex: "Quanti anni hai?", exEn: "How old are you? (lit. how many years do you have?)", note: "quanti (m.) / quante (f.). quanto = how much" }
      ],
      drills: [
        { type: "fill", prompt: "20 + 1 = ___", en: "21", it: ["ventuno"], hint: "drop the -i before uno" },
        { type: "fill", prompt: "40 + 8 = ___", en: "48", it: ["quarantotto"], hint: "drop the -a before otto" },
        { type: "fill", prompt: "30 + 3 = ___", en: "33", it: ["trentatré"], hint: "accent on the end" },
        { type: "translate", en: "What's your address? (informal)", it: ["Qual è il tuo indirizzo?"] },
        { type: "translate", en: "How old are you? (informal)", it: ["Quanti anni hai?", "Tu quanti anni hai?"] }
      ]
    }
  ],
  speaking: [
    "Tell your tutor your nationality and job: 'Sono americano. Sono... / Lavoro in...'",
    "Ask the tutor about their job and city: 'Che lavoro fa? Dove abita?'",
    "Say your age and ask theirs politely: 'Ho... anni. E Lei, quanti anni ha?' (only if appropriate!)",
    "Dictate your phone number in pairs of digits and have the tutor read it back."
  ],
  writing: "Write a short profile (5–6 sentences): your name, nationality, age, job, where you live, and which languages you speak (parlo...)."
};
