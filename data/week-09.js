window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[9] = {
  week: 9,
  title: "Daily routine: reflexive verbs, time, and habits",
  textbook: "Nuovo Espresso 1 · Lezione 7",
  goals: [
    "Conjugate reflexive verbs in the present (mi alzo, ti vesti, si lava…)",
    "Tell the time and say when things happen (alle otto, all'una, a mezzogiorno)",
    "Talk about how often you do things (sempre, spesso, di solito, non… mai)",
    "Use reflexive verbs in the passato prossimo with essere and agreement",
    "Narrate your day in order (prima, poi, dopo, alla fine)"
  ],
  spanishNotes: [
    "**Cognate pronouns:** me/te/se/nos/os → **mi/ti/si/ci/vi**. *Nos levantamos* → *Ci alziamo*.",
    "**Trap:** reflexive verbs in the past always take **essere**: *mi sono alzato* (Spanish *me he levantado / me levanté*). The participle agrees with the subject: *Anna si è alzata*.",
    "**Trap:** *qualche volta* is **singular** (Spanish *algunas veces*). *Qualche* always takes a singular noun.",
    "**Telling time:** *Son las dos* → *Sono le due*; *y media* → *e mezza*; *menos cuarto* → *meno **un** quarto*."
  ],
  days: [
    {
      title: "Reflexive verbs in the present",
      notes: `A **reflexive verb** describes an action you do to yourself. The infinitive ends in **-arsi, -ersi, -irsi**: *alzarsi* (to get up), *mettersi* (to put on), *vestirsi* (to get dressed).

The reflexive pronoun goes **before** the conjugated verb:

| | alzarsi | vestirsi |
|---|---|---|
| io | **mi** alzo | **mi** vesto |
| tu | **ti** alzi | **ti** vesti |
| lui / lei / Lei | **si** alza | **si** veste |
| noi | **ci** alziamo | **ci** vestiamo |
| voi | **vi** alzate | **vi** vestite |
| loro | **si** alzano | **si** vestono |

Mi sveglio alle sette e mi alzo subito.
"I wake up at seven and get up right away."

With body parts, Italian uses the **article**, not a possessive (just like Spanish):

Mi lavo le mani.
"I wash my hands."

Some reflexives are expressions with *fare*: *farsi la doccia* (to take a shower). You'll also hear *fare la doccia* without the pronoun. Both are correct.

Mi faccio la doccia la sera.
"I take a shower in the evening."

With a modal verb, the pronoun can go before the modal or attach to the infinitive:

Domani devo alzarmi presto. / Domani mi devo alzare presto.
"Tomorrow I have to get up early."`,
      vocab: [
        { it: "svegliarsi", en: "to wake up", pos: "verb (reflexive)", ex: "Mi sveglio alle sette.", exEn: "I wake up at seven.", note: "Spanish *despertarse*" },
        { it: "alzarsi", en: "to get up", pos: "verb (reflexive)", ex: "Ti alzi presto la domenica?", exEn: "Do you get up early on Sundays?", note: "Spanish *levantarse*" },
        { it: "lavarsi", en: "to wash (oneself)", pos: "verb (reflexive)", ex: "Il bambino si lava le mani.", exEn: "The child washes his hands.", note: "*lavarsi i denti* = to brush your teeth" },
        { it: "vestirsi", en: "to get dressed", pos: "verb (reflexive)", ex: "Ci vestiamo e usciamo.", exEn: "We get dressed and go out." },
        { it: "farsi la doccia", en: "to take a shower", pos: "expression (reflexive)", ex: "Mi faccio la doccia ogni mattina.", exEn: "I take a shower every morning.", note: "Also simply *fare la doccia*" },
        { it: "pettinarsi", en: "to comb one's hair", pos: "verb (reflexive)", ex: "Lei si pettina davanti allo specchio.", exEn: "She combs her hair in front of the mirror.", note: "Spanish *peinarse*" }
      ],
      drills: [
        { type: "translate", en: "I wake up at seven.", it: ["Mi sveglio alle sette.", "Io mi sveglio alle sette."] },
        { type: "fill", prompt: "Tu ___ alzi alle sei?", en: "Do you get up at six?", it: ["ti"], hint: "reflexive pronoun (tu)" },
        { type: "fill", prompt: "Marco si ___ le mani.", en: "Marco washes his hands.", it: ["lava"], hint: "lavarsi" },
        { type: "translate", en: "We get dressed.", it: ["Ci vestiamo.", "Noi ci vestiamo."] },
        { type: "translate", en: "She takes a shower.", it: ["Si fa la doccia.", "Lei si fa la doccia.", "Fa la doccia.", "Lei fa la doccia."] }
      ]
    },
    {
      title: "Telling the time",
      notes: `To ask the time: **Che ora è?** or **Che ore sono?** (both are fine).

Hours are feminine plural (*le ore*), so you say **sono le…**. The exceptions are one o'clock, midday and midnight, which are singular:

| Time | Italian |
|---|---|
| 1:00 | **È l'una** |
| 3:00 | **Sono le tre** |
| 3:15 | Sono le tre **e un quarto** |
| 3:30 | Sono le tre **e mezza** (or *e mezzo*) |
| 3:45 | Sono le quattro **meno un quarto** |
| 3:50 | Sono le quattro **meno dieci** |
| 12:00 | **È mezzogiorno** / **È mezzanotte** |

To say **at** what time, use **a + article**: *alle otto*, *all'una*, but *a mezzogiorno* (no article).

A che ora comincia la lezione? Alle nove.
"What time does the class start? At nine."

Timetables and official times use the 24-hour clock:

Il treno parte alle diciotto e trenta.
"The train leaves at 18:30."

**In ritardo** means late (for something). **Tardi** means late in the day:

Scusa, sono in ritardo!
"Sorry, I'm late!"`,
      vocab: [
        { it: "l'orologio", en: "watch / clock", pos: "noun (m)", ex: "Il mio orologio è fermo.", exEn: "My watch has stopped.", note: "Spanish *reloj*" },
        { it: "il quarto", en: "quarter", pos: "noun (m)", ex: "Sono le due e un quarto.", exEn: "It's quarter past two.", note: "Always *un quarto*: *meno un quarto* (Spanish *menos cuarto*)" },
        { it: "mezzogiorno", en: "midday / noon", pos: "noun (m)", ex: "Pranziamo a mezzogiorno.", exEn: "We have lunch at noon.", note: "No article in time expressions: *È mezzogiorno.*" },
        { it: "mezzanotte", en: "midnight", pos: "noun (f)", ex: "Vado a letto a mezzanotte.", exEn: "I go to bed at midnight.", note: "No article in time expressions: *È mezzanotte.*" },
        { it: "puntuale", en: "on time; punctual", pos: "adjective", ex: "Il treno è puntuale oggi.", exEn: "The train is on time today.", note: "Plural *puntuali*. You already know *in ritardo* (late) from Week 8." },
        { it: "in anticipo", en: "early (ahead of time)", pos: "expression", ex: "Siamo arrivati in anticipo.", exEn: "We arrived early." }
      ],
      drills: [
        { type: "translate", en: "It's one o'clock.", it: ["È l'una."] },
        { type: "translate", en: "It's half past three.", it: ["Sono le tre e mezza.", "Sono le tre e mezzo.", "Sono le tre e trenta."] },
        { type: "fill", prompt: "Il film comincia ___ nove.", en: "The film starts at nine.", it: ["alle"], hint: "a + le" },
        { type: "translate", en: "I'm late.", it: ["Sono in ritardo.", "Io sono in ritardo."] },
        { type: "fill", prompt: "Sono le otto ___ un quarto.", en: "It's a quarter to eight.", it: ["meno"], hint: "minus" }
      ]
    },
    {
      title: "How often? Frequency adverbs",
      notes: `Frequency words, from most to least often:

| Italian | English |
|---|---|
| **sempre** | always |
| **ogni giorno** | every day |
| **spesso** | often |
| **di solito** | usually |
| **qualche volta** / *a volte* | sometimes |
| **raramente** | rarely |
| **non… mai** | never |

Most go **after the verb**. *Di solito* and *qualche volta* usually go at the start:

Vado spesso al cinema.
"I often go to the cinema."

Di solito mi alzo alle sette.
"Usually I get up at seven."

**Never** needs two pieces: **non** before the verb and **mai** after it:

Non bevo mai caffè la sera.
"I never drink coffee in the evening."

In the passato prossimo, *mai* goes between the auxiliary and the participle:

Non sono mai stato a Napoli.
"I've never been to Naples."

The question **Quante volte?** means "How many times?". Answer with *una volta, due volte alla settimana…*:

Vado in palestra due volte alla settimana.
"I go to the gym twice a week."`,
      vocab: [
        { it: "sempre", en: "always", pos: "adverb", ex: "Mangio sempre a casa.", exEn: "I always eat at home.", note: "Spanish *siempre*" },
        { it: "raramente", en: "rarely", pos: "adverb", ex: "Guardo raramente la televisione.", exEn: "I rarely watch TV.", note: "You already know *spesso* (often) from Week 3." },
        { it: "di solito", en: "usually", pos: "adverb", ex: "Di solito prendo l'autobus.", exEn: "I usually take the bus.", note: "Spanish *de costumbre / normalmente*" },
        { it: "qualche volta", en: "sometimes", pos: "adverb", ex: "Qualche volta cucino io.", exEn: "Sometimes I cook.", note: "Singular! Also *a volte*" },
        { it: "non... mai", en: "never", pos: "adverb", ex: "Non guardo mai la TV.", exEn: "I never watch TV.", note: "Always with *non* before the verb" },
        { it: "ogni giorno", en: "every day", pos: "expression", ex: "Studio italiano ogni giorno.", exEn: "I study Italian every day.", note: "*ogni* never changes and takes a singular noun. Also *tutti i giorni*" }
      ],
      drills: [
        { type: "translate", en: "I never drink coffee.", it: ["Non bevo mai caffè.", "Non bevo mai il caffè.", "Io non bevo mai caffè.", "Io non bevo mai il caffè."] },
        { type: "translate", en: "We often go to the cinema.", it: ["Andiamo spesso al cinema.", "Noi andiamo spesso al cinema."] },
        { type: "fill", prompt: "___ mi alzo alle sette.", en: "Usually I get up at seven.", it: ["Di solito"], hint: "usually" },
        { type: "translate", en: "Sometimes she takes the bus.", it: ["Qualche volta prende l'autobus.", "Qualche volta lei prende l'autobus.", "Lei qualche volta prende l'autobus.", "A volte prende l'autobus.", "A volte lei prende l'autobus.", "Lei a volte prende l'autobus."] },
        { type: "fill", prompt: "Marco arriva ___ in ritardo.", en: "Marco always arrives late.", it: ["sempre"], hint: "always" }
      ]
    },
    {
      title: "Reflexive verbs in the past",
      notes: `In the passato prossimo, reflexive verbs **always** use **essere**. The participle agrees with the subject (-o, -a, -i, -e):

| | alzarsi |
|---|---|
| io | **mi sono** alzato / alzata |
| tu | **ti sei** alzato / alzata |
| lui / lei | **si è** alzato / alzata |
| noi | **ci siamo** alzati / alzate |
| voi | **vi siete** alzati / alzate |
| loro | **si sono** alzati / alzate |

Stamattina mi sono svegliata tardi.
"This morning I (f) woke up late."

Ieri sera ci siamo divertiti molto.
"Last night we had a lot of fun."

Negatives: put **non** before the pronoun.

Non mi sono riposato per niente.
"I didn't rest at all."

Compare a non-reflexive verb with avere:

Ho lavato la macchina. → Mi sono lavato.
"I washed the car." → "I washed (myself)."`,
      vocab: [
        { it: "addormentarsi", en: "to fall asleep", pos: "verb (reflexive)", ex: "Mi sono addormentato sul divano.", exEn: "I fell asleep on the sofa.", note: "Spanish *dormirse*" },
        { it: "riposarsi", en: "to rest", pos: "verb (reflexive)", ex: "Il weekend mi riposo.", exEn: "On weekends I rest.", note: "Spanish *descansar*" },
        { it: "prepararsi", en: "to get ready", pos: "verb (reflexive)", ex: "Si prepara per uscire.", exEn: "She's getting ready to go out." },
        { it: "sbrigarsi", en: "to hurry", pos: "verb (reflexive)", ex: "Ci siamo sbrigati per prendere il treno.", exEn: "We hurried to catch the train.", note: "Spanish *darse prisa / apurarse*" },
        { it: "divertirsi", en: "to have fun", pos: "verb (reflexive)", ex: "Vi siete divertiti alla festa?", exEn: "Did you have fun at the party?", note: "Spanish *divertirse*" },
        { it: "annoiarsi", en: "to get bored", pos: "verb (reflexive)", ex: "Al museo i bambini si sono annoiati.", exEn: "At the museum the children got bored.", note: "Spanish *aburrirse*" }
      ],
      drills: [
        { type: "fill", prompt: "Ieri sera Laura si ___ addormentata tardi.", en: "Last night Laura fell asleep late.", it: ["è"], hint: "auxiliary" },
        { type: "translate", en: "We had fun.", it: ["Ci siamo divertiti.", "Ci siamo divertite.", "Noi ci siamo divertiti.", "Noi ci siamo divertite."] },
        { type: "translate", en: "I got up late.", it: ["Mi sono alzato tardi.", "Mi sono alzata tardi.", "Io mi sono alzato tardi.", "Io mi sono alzata tardi."] },
        { type: "fill", prompt: "Le ragazze si sono ___.", en: "The girls got bored.", it: ["annoiate"], hint: "annoiarsi (agreement!)" },
        { type: "translate", en: "Did you rest?", it: ["Ti sei riposato?", "Ti sei riposata?", "Tu ti sei riposato?", "Tu ti sei riposata?", "Vi siete riposati?", "Vi siete riposate?", "Si è riposato?", "Si è riposata?"] }
      ]
    },
    {
      title: "Telling your day in order",
      notes: `Sequencing words help you narrate:

| Italian | English |
|---|---|
| **prima** | first / before |
| **poi** | then |
| **dopo** | after / afterwards |
| **alla fine** | in the end / finally |

La mattina mi sveglio alle sette. Prima mi faccio la doccia, poi mi vesto e faccio colazione. Dopo esco di casa. Alla fine della giornata mi riposo.
"In the morning I wake up at seven. First I shower, then I get dressed and have breakfast. Afterwards I leave the house. At the end of the day I rest."

The same day in the past:

Ieri mi sono svegliato alle sette. Prima mi sono fatto la doccia, poi mi sono vestito.
"Yesterday I woke up at seven. First I showered, then I got dressed."

**Dopo** + noun works directly: *dopo cena* (after dinner), *dopo il lavoro* (after work). **Prima di** + noun means "before": *prima di cena*.

**Mettersi** means to put on clothes:

Mi metto il cappotto perché fa freddo.
"I'm putting on my coat because it's cold."`,
      vocab: [
        { it: "più tardi", en: "later", pos: "adverb", ex: "Ci vediamo più tardi!", exEn: "See you later!", note: "*Ci vediamo* = see you; use it as a fixed phrase for now." },
        { it: "verso", en: "around / towards (time)", pos: "preposition", ex: "Torno a casa verso le sette.", exEn: "I get home around seven.", note: "*verso le otto* = around eight; *alle otto* = at eight." },
        { it: "subito", en: "right away, immediately", pos: "adverb", ex: "Mi alzo e faccio subito la doccia.", exEn: "I get up and take a shower right away.", note: "**False friend:** Spanish *súbito* = sudden; Italian *subito* = right away." },
        { it: "intanto", en: "meanwhile", pos: "adverb", ex: "Io preparo la cena, tu intanto apparecchi.", exEn: "I'll make dinner; meanwhile you set the table.", note: "Spanish *mientras tanto*." },
        { it: "mettersi", en: "to put on (clothes)", pos: "verb (reflexive)", ex: "Mi metto le scarpe.", exEn: "I put on my shoes.", note: "Spanish *ponerse*. Past: *mi sono messo*" },
        { it: "farsi la barba", en: "to shave (face)", pos: "expression (reflexive)", ex: "Paolo si fa la barba ogni mattina.", exEn: "Paolo shaves every morning.", note: "*la barba* = beard" }
      ],
      drills: [
        { type: "translate", en: "First I take a shower, then I get dressed.", it: ["Prima mi faccio la doccia, poi mi vesto.", "Prima faccio la doccia, poi mi vesto.", "Prima mi faccio la doccia e poi mi vesto.", "Prima faccio la doccia e poi mi vesto."] },
        { type: "fill", prompt: "Fa freddo: mi ___ il cappotto.", en: "It's cold: I'm putting on my coat.", it: ["metto"], hint: "mettersi" },
        { type: "translate", en: "After dinner I rest.", it: ["Dopo cena mi riposo.", "Dopo la cena mi riposo.", "Io dopo cena mi riposo."] },
        { type: "fill", prompt: "Paolo si fa ___ barba ogni mattina.", en: "Paolo shaves every morning.", it: ["la"], hint: "article" },
        { type: "translate", en: "In the end we went home.", it: ["Alla fine siamo tornati a casa.", "Alla fine siamo tornate a casa.", "Alla fine siamo andati a casa.", "Alla fine siamo andate a casa."] }
      ]
    }
  ],
  speaking: [
    "Describe your typical weekday from start to finish: *Di solito mi sveglio alle…, poi…*",
    "Ask your tutor about their routine: *A che ora ti alzi?* *Cosa fai la sera?*",
    "Tell what you did yesterday morning using reflexives in the past: *Ieri mi sono alzato/a alle…*",
    "Talk about your habits: *Vado spesso…*, *Qualche volta…*, *Non… mai…*"
  ],
  writing: "Write 8–10 sentences describing your typical day from waking up to going to bed, then 3 sentences about how yesterday was different (passato prossimo)."
};
