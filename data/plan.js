// 96-week roadmap (mirrors ../plan.md). Detailed daily content lives in week-XX.js;
// weeks without a content file still show their plan topic and keep SRS reviews running.
window.ITALIANO = window.ITALIANO || { weeks: {} };

window.ITALIANO.phases = [
  { phase: 1, level: "A1", weeks: [1, 12], book: "Nuovo Espresso 1", exit: "CILS A1 mock" },
  { phase: 2, level: "A2", weeks: [13, 26], book: "Nuovo Espresso 2", exit: "CILS A2 / CELI 1 mock" },
  { phase: 3, level: "B1", weeks: [27, 46], book: "Nuovo Espresso 3", exit: "CILS UNO-B1 / CELI 2 mock" },
  { phase: 4, level: "B2", weeks: [47, 70], book: "Nuovo Espresso 4 + Grammatica avanzata", exit: "CILS DUE-B2 / CELI 3" },
  { phase: 5, level: "C1", weeks: [71, 96], book: "Nuovo Espresso 5 + authentic material", exit: "CILS TRE-C1 / CELI 4" },
];

// [week, lesson, grammar, theme]
const rows = [
  [1, "NE1 L1", "Alphabet, pronunciation, subject pronouns, essere", "Greetings, introductions, numbers 0–20"],
  [2, "NE1 L2", "Nouns (gender/number), indefinite articles, avere, -are verbs", "Nationality, professions, numbers to 100"],
  [3, "NE1 L3", "-ere/-ire verbs, -isc- verbs, fare, andare", "Free time, hobbies, likes"],
  [4, "NE1 L4", "Definite articles, c'è / ci sono", "Hotels, rooms, dates, numbers to 1000"],
  [5, "NE1 L5", "Articulated prepositions, volere/potere/dovere", "Food, restaurants, ordering"],
  [6, "NE1 L5–6", "Mi piace / mi piacciono, partitive", "Food shopping, quantities"],
  [7, "NE1 L6", "Passato prossimo with avere", "Weekend, past activities"],
  [8, "NE1 L6–7", "Passato prossimo with essere, irregular participles", "Travel, what you did"],
  [9, "NE1 L7", "Reflexive verbs, telling time, frequency adverbs", "Daily routine"],
  [10, "NE1 L8", "Direct object pronouns, questo/quello", "Shopping, clothes, colors, sizes"],
  [11, "NE1 L9", "Possessives (family-noun exception)", "Family, describing people"],
  [12, "NE1 L10 + review", "Ci (place), consolidation", "City, house, directions · A1 checkpoint"],
  [13, "NE2 L1", "Imperfetto forms", "Childhood, past habits"],
  [14, "NE2 L1–2", "Passato prossimo vs imperfetto", "Telling stories"],
  [15, "NE2 L2", "Indirect object pronouns, piacere fully", "Gifts, preferences"],
  [16, "NE2 L3", "Pronoun agreement in passato prossimo, ne", "Quantities, shopping"],
  [17, "NE2 L3–4", "Futuro semplice, future of probability", "Plans, weather, predictions"],
  [18, "Review", "Consolidation", "Graded reader A2"],
  [19, "NE2 L4", "Imperativo tu/noi/voi + pronouns", "Advice, instructions, recipes"],
  [20, "NE2 L5", "Formal imperative (Lei)", "Directions, services"],
  [21, "NE2 L5–6", "Condizionale presente", "Requests, wishes, advice"],
  [22, "NE2 L6", "Comparatives & superlatives", "Comparing cities, products"],
  [23, "NE2 L7", "Combined pronouns (me lo, glielo)", "Lending, giving"],
  [24, "NE2 L8", "Che / cui, stare + gerundio, stare per", "Describing people, ongoing actions"],
  [25, "NE2 L9–10", "Si impersonale, trapassato prossimo", "Customs, rules"],
  [26, "Review", "A2 consolidation", "A2 checkpoint"],
  [27, "NE3 L1", "Congiuntivo presente forms", "Opinions"],
  [28, "NE3 L1–2", "Congiuntivo after opinion/emotion/will", "Debating, doubt"],
  [29, "NE3 L2", "Congiuntivo passato", "Opinions about the past"],
  [30, "NE3 L3", "Congiuntivo after conjunctions", "Conditions, purpose"],
  [31, "NE3 L3–4", "Condizionale passato", "Regrets, future-in-past"],
  [32, "Review", "Consolidation", "Graded reader B1"],
  [33, "NE3 L4", "Futuro anteriore, time clauses", "Plans, deadlines"],
  [34, "NE3 L5", "Congiuntivo imperfetto forms", "—"],
  [35, "NE3 L5–6", "Periodo ipotetico types 1 & 2", "Hypotheticals, dreams"],
  [36, "NE3 L6", "Il quale, chi, ciò che, il cui", "Formal descriptions"],
  [37, "NE3 L7", "Passive, si passivante", "News, processes"],
  [38, "NE3 L7–8", "Discorso indiretto", "Reporting conversations"],
  [39, "NE3 L8", "Gerundio, infinitive clauses, verb + preposition", "Work, studies"],
  [40, "Review", "Consolidation", "Start native podcasts"],
  [41, "NE3 L9", "Passato remoto (recognition)", "Stories, history"],
  [42, "NE3 L9", "Connectors", "Structuring arguments"],
  [43, "NE3 L10", "Congiuntivo trapassato, periodo ipotetico type 3", "Counterfactuals"],
  [44, "NE3 L10", "Concordanza dei tempi (intro)", "—"],
  [45, "Writing", "—", "300-word opinion essay"],
  [46, "Checkpoint", "B1 consolidation", "B1 checkpoint"],
];

const blocks = [
  [47, 48, "Full concordanza dei tempi", "Summarize an Il Post article"],
  [49, 50, "Advanced indirect speech", "Retell a podcast episode"],
  [51, 52, "Passive with andare/venire, si passivante with modals", "Read instructions/regulations"],
  [53, 54, "Participle and gerund clauses", "Write a formal email"],
  [55, 56, "Pronominal verbs (farcela, andarsene, cavarsela…)", "Shadow Easy Italian clips"],
  [57, 58, "Subjunctive in relatives & indefinites, come se", "Debate with tutor"],
  [59, 60, "Passato remoto production", "400-word short story"],
  [61, 62, "Register: formal vs informal, bureaucratic Italian", "Mock formal complaint"],
  [63, 64, "Suffixes, modi di dire", "Italian series with IT subs"],
  [65, 66, "Advanced connectors", "500-word argumentative essay"],
  [67, 68, "Error clinic: Spanish leaks", "News week"],
  [69, 70, "Mock exam", "B2 checkpoint"],
  [71, 74, "Nuance in subjunctive/conditional, hedging", "Nuovo Espresso 5"],
  [75, 78, "Literature", "Ginzburg, Ferrante"],
  [79, 82, "Science & pharma Italian", "Le Scienze, AIFA documents"],
  [83, 86, "Regional Italy, dialect awareness", "Films from different regions"],
  [87, 90, "Formal writing & presenting", "10-min presentation"],
  [91, 96, "Exam prep + immersion", "CILS TRE-C1 / CELI 4"],
];

window.ITALIANO.plan = {};
for (const [week, lesson, grammar, theme] of rows) {
  window.ITALIANO.plan[week] = { week, lesson, grammar, theme };
}
for (const [from, to, grammar, theme] of blocks) {
  for (let w = from; w <= to; w++) {
    window.ITALIANO.plan[w] = { week: w, lesson: w <= 70 ? "NE4" : "NE5", grammar, theme };
  }
}
window.ITALIANO.TOTAL_WEEKS = 96;
