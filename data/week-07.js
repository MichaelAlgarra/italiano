window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[7] = {
  week: 7,
  title: "Il fine settimana — Passato prossimo with avere",
  textbook: "Nuovo Espresso 1 · Lezione 6",
  goals: [
    "Form the passato prossimo with avere + past participle",
    "Make regular participles: -are → -ato, -ere → -uto, -ire → -ito",
    "Use past time expressions: ieri, la settimana scorsa, due giorni fa, già, non… ancora",
    "Tell the story of your weekend in order (prima, poi, dopo, alla fine)"
  ],
  spanishNotes: [
    "**Big difference:** Italian uses the passato prossimo (*ho mangiato*) for almost **all** completed past actions in speech, even yesterday or last year. Latin American Spanish would use the pretérito (*comí*). Think *he comido*, but use it everywhere.",
    "**Cognate win:** the participle endings map neatly: *-ado → -ato* (*hablado → parlato*), *-ido → -ito/-uto* (*dormido → dormito*, *vendido → venduto*).",
    "**Trap:** *fa* = 'ago' and comes **after** the time: *due giorni fa* = *hace dos días*.",
    "**Trap:** *ancora* means 'still/yet/again'; *non… ancora* = 'not yet' (*todavía no*). *Già* = *ya*."
  ],
  days: [
    {
      title: "Passato prossimo (1): avere + -ato",
      notes: `The **passato prossimo** is the main spoken past tense. For most verbs it's **avere (present) + past participle**.

For **-are** verbs: drop *-are*, add **-ato**.

| | avere | + participle |
|---|---|---|
| io | ho | mangiato |
| tu | hai | mangiato |
| lui/lei/Lei | ha | mangiato |
| noi | abbiamo | mangiato |
| voi | avete | mangiato |
| loro | hanno | mangiato |

With **avere**, the participle **doesn't change** (no agreement with the subject).

Examples:

- *Ieri ho lavorato tutto il giorno.* — "Yesterday I worked all day."
- *Sabato abbiamo cucinato per gli amici.* — "On Saturday we cooked for our friends."
- *Hai mangiato?* — "Have you eaten? / Did you eat?"
- *Ieri sera Luca ha giocato a calcio.* — "Last night Luca played soccer."

**Word order:** *non* goes before *avere*: *Non ho mangiato.* — "I didn't eat."

**Spelling:** verbs in *-care/-gare* keep their sound: *giocare → giocato*, *pagare → pagato*.`,
      vocab: [
        { it: "guardare", en: "to watch / to look at", pos: "verb", ex: "Sabato sera abbiamo guardato un film.", exEn: "On Saturday night we watched a movie.", note: "= Spanish *mirar*. False friend: Spanish *guardar* (to keep) is *tenere* in Italian." },
        { it: "ieri", en: "yesterday", pos: "adverb", ex: "Ieri ho lavorato fino alle otto.", exEn: "Yesterday I worked until eight." },
        { it: "ieri sera", en: "last night, yesterday evening", pos: "phrase", ex: "Ieri sera abbiamo cenato fuori.", exEn: "Last night we ate out.", note: "*Anoche* = *ieri sera* (or *stanotte* if during the night)." },
        { it: "scorso", en: "last (previous)", pos: "adjective", ex: "Sabato scorso ho giocato a tennis.", exEn: "Last Saturday I played tennis.", note: "Agrees: *la settimana scorsa*, *l'anno scorso*." },
        { it: "cucinare", en: "to cook", pos: "verb", ex: "Domenica ho cucinato le lasagne.", exEn: "On Sunday I made lasagna." },
        { it: "chiacchierare", en: "to chat", pos: "verb", ex: "Abbiamo chiacchierato per ore.", exEn: "We chatted for hours.", note: "Very common. A chat = *una chiacchierata*." }
      ],
      drills: [
        { type: "fill", prompt: "Ieri ___ lavorato tutto il giorno.", en: "Yesterday I worked all day.", it: ["ho"] },
        { type: "fill", prompt: "Sabato abbiamo ___ per gli amici.", en: "On Saturday we cooked for our friends.", it: ["cucinato"] },
        { type: "translate", en: "Did you eat?", it: ["Hai mangiato?", "Tu hai mangiato?"] },
        { type: "translate", en: "Last night we chatted for hours.", it: ["Ieri sera abbiamo chiacchierato per ore.", "Abbiamo chiacchierato per ore ieri sera."] },
        { type: "fill", prompt: "Sabato ___ ho giocato a tennis.", en: "Last Saturday I played tennis.", it: ["scorso"] }
      ]
    },
    {
      title: "Passato prossimo (2): -ere → -uto, -ire → -ito",
      notes: `Regular participles for the other two conjugations:

| Infinitive | Participle | Example |
|---|---|---|
| -are: parlare | parl**ato** | Ho parlato con Anna. — "I spoke with Anna." |
| -ere: ricevere | ricev**uto** | Ho ricevuto un messaggio. — "I received a message." |
| -ire: dormire | dorm**ito** | Ho dormito bene. — "I slept well." |

**-isc- verbs** are regular too: *finire → finito*, *pulire → pulito*, *capire → capito*.

Examples:

- *Abbiamo venduto la macchina.* — "We sold the car."
- *Hai sentito la notizia?* — "Did you hear the news?"
- *Domenica ho pulito tutta la casa.* — "On Sunday I cleaned the whole house."
- *Non ho capito.* — "I didn't understand." (very useful!)

**Heads-up:** many common *-ere* verbs have irregular participles (*fare → fatto, prendere → preso, vedere → visto*). You'll learn them next week.`,
      vocab: [
        { it: "ricevere", en: "to receive", pos: "verb", ex: "Hai ricevuto la mia email?", exEn: "Did you get my email?", note: "Participle *ricevuto* (Spanish *recibido*)." },
        { it: "vendere", en: "to sell", pos: "verb", ex: "Hanno venduto la casa al mare.", exEn: "They sold the house by the sea." },
        { it: "ripetere", en: "to repeat", pos: "verb", ex: "Il professore ha ripetuto la domanda.", exEn: "The teacher repeated the question.", note: "Survival phrase: *Può ripetere, per favore?* = Could you repeat that, please?" },
        { it: "conoscere", en: "to know (a person/place); to meet", pos: "verb", ex: "Ho conosciuto Marta a una festa.", exEn: "I met Marta at a party.", note: "In the passato prossimo it means 'met (for the first time)', like Spanish *conocí*. Participle: *conosciuto*." },
        { it: "il messaggio", en: "message, text", pos: "noun", ex: "Ho ricevuto un messaggio da Marco.", exEn: "I got a text from Marco." },
        { it: "la stanza", en: "room", pos: "noun", ex: "La mia stanza è piccola ma luminosa.", exEn: "My room is small but bright.", note: "Bedroom = *la camera (da letto)*." }
      ],
      drills: [
        { type: "fill", prompt: "Ho ___ un messaggio da Marco.", en: "I got a text from Marco.", it: ["ricevuto"], hint: "ricevere" },
        { type: "fill", prompt: "Stanotte ho ___ bene.", en: "Last night I slept well.", it: ["dormito"], hint: "dormire" },
        { type: "translate", en: "I didn't understand.", it: ["Non ho capito."] },
        { type: "translate", en: "Did you hear the news?", it: ["Hai sentito la notizia?", "Tu hai sentito la notizia?"] },
        { type: "translate", en: "They sold the car.", it: ["Hanno venduto la macchina.", "Loro hanno venduto la macchina.", "Hanno venduto l'auto."] },
        { type: "fill", prompt: "Ho ___ Marta a una festa.", en: "I met Marta at a party.", it: ["conosciuto"], hint: "conoscere" }
      ]
    },
    {
      title: "When? — già, non… ancora, fa, stamattina",
      notes: `**Time expressions** with the passato prossimo:

| Expression | Meaning |
|---|---|
| stamattina | this morning |
| oggi pomeriggio | this afternoon |
| la settimana scorsa | last week |
| due giorni fa | two days ago |
| tutto il giorno | all day |
| appena | just (a moment ago) |

**già / non… ancora** usually go **between** avere and the participle:

- *Hai già mangiato?* — "Have you already eaten?"
- *No, non ho ancora mangiato.* — "No, I haven't eaten yet."
- *Ho appena finito.* — "I've just finished."

**fa** goes **after** the amount of time:

- *Ho chiamato Giulia tre giorni fa.* — "I called Giulia three days ago."
- *Un anno fa ho cambiato lavoro.* — "A year ago I changed jobs."

Examples:

- *Stamattina ho comprato il pane.* — "This morning I bought bread."
- *Ho studiato italiano tutto il giorno.* — "I studied Italian all day."`,
      vocab: [
        { it: "già", en: "already", pos: "adverb", ex: "Ho già pagato.", exEn: "I've already paid.", note: "= Spanish *ya*. On its own, *Già!* means 'Right! / Exactly.'" },
        { it: "ancora", en: "still; yet (with non); again", pos: "adverb", ex: "Non ho ancora finito.", exEn: "I haven't finished yet.", note: "*non… ancora* = *todavía no*." },
        { it: "stamattina", en: "this morning", pos: "adverb", ex: "Stamattina ho lavorato da casa.", exEn: "This morning I worked from home.", note: "Contraction of *questa mattina*. Also *stasera* = this evening." },
        { it: "fa", en: "ago", pos: "adverb", ex: "Ho comprato la macchina due anni fa.", exEn: "I bought the car two years ago.", note: "Comes after the time: *due anni fa* = *hace dos años*." },
        { it: "appena", en: "just (recently); as soon as", pos: "adverb", ex: "Ho appena mangiato.", exEn: "I've just eaten.", note: "≈ *acabo de comer*." },
        { it: "tutto il giorno", en: "all day", pos: "phrase", ex: "Ho dormito tutto il giorno.", exEn: "I slept all day.", note: "Every day = *tutti i giorni*." }
      ],
      drills: [
        { type: "translate", en: "Have you already eaten?", it: ["Hai già mangiato?", "Tu hai già mangiato?"] },
        { type: "translate", en: "I haven't finished yet.", it: ["Non ho ancora finito."] },
        { type: "fill", prompt: "Ho chiamato Giulia tre giorni ___.", en: "I called Giulia three days ago.", it: ["fa"] },
        { type: "fill", prompt: "Ho ___ mangiato.", en: "I've just eaten.", it: ["appena"] },
        { type: "translate", en: "This morning I bought bread.", it: ["Stamattina ho comprato il pane.", "Stamattina ho comprato del pane.", "Ho comprato il pane stamattina."] }
      ]
    },
    {
      title: "Questions about the past — meals and invitations",
      notes: `Asking about someone's day uses the same structure. Question words go first:

| Question | Meaning |
|---|---|
| Cosa hai mangiato? | What did you eat? |
| Con chi hai cenato? | Who did you have dinner with? |
| Dove avete pranzato? | Where did you have lunch? |
| Quanto hai pagato? | How much did you pay? |
| A che ora hai finito? | What time did you finish? |

**Meals in Italy**

| Meal | Verb | Typical time |
|---|---|---|
| la colazione | fare colazione | 7–9 |
| il pranzo | pranzare | 13:00 |
| la cena | cenare | 20:00–21:00 |

Examples:

- *Con chi hai cenato ieri sera?* — "Who did you have dinner with last night?"
- *Abbiamo pranzato in una trattoria in centro.* — "We had lunch at a trattoria downtown."
- *Marta ha invitato tutti gli amici.* — "Marta invited all her friends."
- *Cosa avete mangiato a pranzo?* — "What did you have for lunch?"`,
      vocab: [
        { it: "cenare", en: "to have dinner", pos: "verb", ex: "Ieri abbiamo cenato alle nove.", exEn: "Yesterday we had dinner at nine.", note: "≈ *cenar*." },
        { it: "pranzare", en: "to have lunch", pos: "verb", ex: "Dove hai pranzato oggi?", exEn: "Where did you have lunch today?", note: "Spanish *almorzar / comer*." },
        { it: "la cena", en: "dinner", pos: "noun", ex: "La cena è pronta!", exEn: "Dinner is ready!" },
        { it: "il pranzo", en: "lunch", pos: "noun", ex: "Il pranzo della domenica è sacro in Italia.", exEn: "Sunday lunch is sacred in Italy." },
        { it: "il ristorante", en: "restaurant", pos: "noun", ex: "Abbiamo cenato in un ristorante in centro.", exEn: "We had dinner at a restaurant downtown.", note: "*La trattoria* and *l'osteria* are simpler, cheaper places." },
        { it: "invitare", en: "to invite", pos: "verb", ex: "Abbiamo invitato i vicini a cena.", exEn: "We invited the neighbors to dinner." }
      ],
      drills: [
        { type: "translate", en: "Who did you have dinner with?", it: ["Con chi hai cenato?"] },
        { type: "translate", en: "Where did you have lunch today?", it: ["Dove hai pranzato oggi?", "Oggi dove hai pranzato?"] },
        { type: "fill", prompt: "Marta ha ___ tutti gli amici.", en: "Marta invited all her friends.", it: ["invitato"] },
        { type: "fill", prompt: "Cosa ___ mangiato a pranzo, ragazzi?", en: "What did you have for lunch, guys?", it: ["avete"] },
        { type: "translate", en: "Yesterday we had dinner at nine.", it: ["Ieri abbiamo cenato alle nove.", "Abbiamo cenato alle nove ieri."] }
      ]
    },
    {
      title: "Telling the story of your weekend",
      notes: `To narrate a sequence, use **connectors**:

| Connector | Meaning |
|---|---|
| prima | first |
| poi | then |
| dopo | after(wards) |
| alla fine | in the end, finally |
| e | and |

Example paragraph:

*Sabato mattina **prima** ho pulito la casa, **poi** ho comprato il pane al mercato. **Dopo** pranzo ho dormito un'ora. La sera ho invitato degli amici: abbiamo cucinato, abbiamo ballato e abbiamo chiacchierato fino all'una. **Alla fine** ho lavato i piatti!*

"On Saturday morning I first cleaned the house, then I bought bread at the market. After lunch I slept for an hour. In the evening I invited some friends: we cooked, we danced and we chatted until one o'clock. In the end I washed the dishes!"

**Tip:** *dopo* + noun = "after": *dopo cena* — "after dinner"; *dopo il lavoro* — "after work".

**Stay regular this week:** stick to -ato/-uto/-ito verbs. Next week you'll add *fatto, preso, visto* and the verbs that use **essere** (*sono andato*).`,
      vocab: [
        { it: "prima", en: "first; before", pos: "adverb", ex: "Prima ho studiato, poi ho mangiato.", exEn: "First I studied, then I ate." },
        { it: "poi", en: "then, next", pos: "adverb", ex: "Poi abbiamo guardato un film.", exEn: "Then we watched a movie.", note: "The most common connector in spoken Italian." },
        { it: "dopo", en: "after, afterwards", pos: "adverb", ex: "Dopo cena abbiamo giocato a carte.", exEn: "After dinner we played cards.", note: "Spanish *después* → *dopo*." },
        { it: "alla fine", en: "in the end, finally", pos: "phrase", ex: "Alla fine abbiamo trovato un ristorante.", exEn: "In the end we found a restaurant." },
        { it: "ballare", en: "to dance", pos: "verb", ex: "Abbiamo ballato tutta la notte.", exEn: "We danced all night.", note: "≈ *bailar*." },
        { it: "la festa", en: "party; holiday", pos: "noun", ex: "Sabato abbiamo organizzato una festa.", exEn: "On Saturday we threw a party.", note: "Also a public holiday: *un giorno di festa*." }
      ],
      drills: [
        { type: "translate", en: "First I studied, then I ate.", it: ["Prima ho studiato, poi ho mangiato.", "Prima ho studiato e poi ho mangiato."] },
        { type: "fill", prompt: "___ cena abbiamo giocato a carte.", en: "After dinner we played cards.", it: ["Dopo"] },
        { type: "translate", en: "We danced all night.", it: ["Abbiamo ballato tutta la notte.", "Noi abbiamo ballato tutta la notte."] },
        { type: "fill", prompt: "Alla ___ abbiamo trovato un ristorante.", en: "In the end we found a restaurant.", it: ["fine"] },
        { type: "translate", en: "On Saturday I organized a party.", it: ["Sabato ho organizzato una festa.", "Ho organizzato una festa sabato."] }
      ]
    }
  ],
  speaking: [
    "Tell your tutor about last weekend in 6–8 sentences: *Sabato mattina prima ho… poi ho…*",
    "Interview your tutor about their weekend: *Cosa hai mangiato? Con chi hai cenato? Hai già…?*",
    "Talk about the last party or dinner you organized: *Ho invitato… abbiamo cucinato…*",
    "Practice *già / non… ancora*: your tutor asks about chores (*Hai già pulito la cucina?*) and you answer truthfully."
  ],
  writing: "Write 8–10 sentences about last weekend using the passato prossimo with avere and at least four connectors (prima, poi, dopo, alla fine). Use only regular participles (-ato, -uto, -ito)."
};
