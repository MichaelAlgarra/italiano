window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[6] = {
  week: 6,
  title: "Fare la spesa — Likes, Food Shopping & Quantities",
  textbook: "Nuovo Espresso 1 · Lezione 5–6",
  goals: [
    "Say what you like and don't like with mi piace / mi piacciono",
    "Agree and disagree: anche a me, neanche a me, a me sì / a me no",
    "Use the partitive (del, della, dei…) to say 'some'",
    "Buy food at a market using quantities (un etto di, un chilo di…)"
  ],
  spanishNotes: [
    "**Cognate win:** *piacere* works exactly like *gustar*: *Mi piace il caffè* = *Me gusta el café*; *Mi piacciono le fragole* = *Me gustan las fresas*.",
    "**Trap:** Spanish *A mí también / A mí tampoco* → Italian **anche a me / neanche a me**. Not *anche io* (that's for normal verbs: *Io mangio la pasta. — Anche io.*).",
    "**Trap:** *il burro* = butter; *il latte* = milk (not 'latte' coffee, which is *il caffellatte* or *il latte macchiato*). Ordering a 'latte' in Italy gets you a glass of milk.",
    "**New concept:** Spanish usually drops 'some' (*Compro pan*). Italian often uses the partitive: *Compro del pane.* Both *Compro pane* and *Compro del pane* are correct."
  ],
  days: [
    {
      title: "Mi piace — liking one thing",
      notes: `**Piacere** means "to be pleasing to". What you like is the **subject**, so the verb agrees with it, not with you.

| Who likes | + singular / infinitive |
|---|---|
| (a me) mi | piace |
| (a te) ti | piace |
| (a lui) gli / (a lei) le | piace |
| (a Lei) Le | piace (formal "you") |

Examples:

- *Mi piace il formaggio.* — "I like cheese."
- *Ti piace la pizza?* — "Do you like pizza?"
- *Le piace il vino, signora?* — "Do you like the wine, madam?"
- *Mi piace cucinare.* — "I like cooking." (infinitive → always *piace*)
- *Mi piace il pane.* — "I like bread."

**Negative:** *Non mi piace il prosciutto.* — "I don't like ham."

**Emphasis / contrast:** use the long form *a me, a te, a Marco*: *A Marco piace il pesce.* — "Marco likes fish."

Note: Italians use the definite article with foods in general statements: *il formaggio*, *la frutta*.`,
      vocab: [
        { it: "il pane", en: "bread", pos: "noun", ex: "Mi piace il pane fresco.", exEn: "I like fresh bread.", note: "Spanish *pan* + e. *Il panino* = sandwich/roll." },
        { it: "il formaggio", en: "cheese", pos: "noun", ex: "Il parmigiano è un formaggio molto famoso.", exEn: "Parmesan is a very famous cheese." },
        { it: "il prosciutto", en: "ham (cured or cooked)", pos: "noun", ex: "Un panino con il prosciutto, per favore.", exEn: "A ham sandwich, please.", note: "*crudo* = cured, *cotto* = cooked." },
        { it: "la frutta", en: "fruit (collective)", pos: "noun", ex: "Mi piace la frutta fresca.", exEn: "I like fresh fruit.", note: "One piece of fruit = *un frutto*, but in the kitchen you almost always say *la frutta*." },
        { it: "il pomodoro", en: "tomato", pos: "noun", ex: "La salsa di pomodoro è fatta in casa.", exEn: "The tomato sauce is homemade.", note: "Lit. 'golden apple' (pomo d'oro)." },
        { it: "la mela", en: "apple", pos: "noun", ex: "Mangio una mela ogni giorno.", exEn: "I eat an apple every day." }
      ],
      drills: [
        { type: "translate", en: "I like cheese.", it: ["Mi piace il formaggio.", "A me piace il formaggio."] },
        { type: "fill", prompt: "Ti ___ cucinare?", en: "Do you like cooking?", it: ["piace"] },
        { type: "translate", en: "I don't like ham.", it: ["Non mi piace il prosciutto.", "A me non piace il prosciutto."] },
        { type: "fill", prompt: "___ piace il vino, signora?", en: "Do you like the wine, madam?", it: ["Le"], hint: "formal 'you'" },
        { type: "translate", en: "Marco likes fruit.", it: ["A Marco piace la frutta.", "La frutta piace a Marco."] }
      ]
    },
    {
      title: "Mi piacciono — liking several things, agreeing & disagreeing",
      notes: `If the thing you like is **plural**, use **piacciono**.

- *Mi piacciono le fragole.* — "I like strawberries."
- *Non ti piacciono i funghi?* — "Don't you like mushrooms?"
- *Gli piacciono le patate.* — "He likes potatoes."

**Reacting to someone else**

| They say | You agree | You disagree |
|---|---|---|
| Mi piace… (positive) | **Anche a me.** (Me too.) | **A me no.** (Not me.) |
| Non mi piace… (negative) | **Neanche a me.** (Me neither.) | **A me sì.** (I do.) |

Example:

- *Mi piacciono le cipolle.* — *A me no!* — "I like onions." — "Not me!"
- *Non mi piace il latte.* — *Neanche a me.* — "I don't like milk." — "Me neither."

**Irregular plural:** *l'uovo* (egg) → *le uova* (eggs) — it changes gender in the plural!`,
      vocab: [
        { it: "l'uovo", en: "egg", pos: "noun", ex: "Per la carbonara servono le uova.", exEn: "You need eggs for carbonara.", note: "Irregular plural: *le uova* (feminine!)." },
        { it: "la fragola", en: "strawberry", pos: "noun", ex: "Mi piacciono le fragole con lo zucchero.", exEn: "I like strawberries with sugar.", note: "Not *fresa*." },
        { it: "la patata", en: "potato", pos: "noun", ex: "Le patate al forno sono buonissime.", exEn: "Roast potatoes are delicious.", note: "Not *papa*." },
        { it: "la cipolla", en: "onion", pos: "noun", ex: "Non mi piacciono le cipolle crude.", exEn: "I don't like raw onions.", note: "Double l." },
        { it: "il fungo", en: "mushroom", pos: "noun", ex: "La pizza ai funghi è la mia preferita.", exEn: "Mushroom pizza is my favorite.", note: "Plural *i funghi* (h keeps the hard g)." },
        { it: "neanche", en: "not even; neither", pos: "adverb", ex: "Non mi piace il tè. — Neanche a me.", exEn: "I don't like tea. — Me neither.", note: "Synonyms: *nemmeno*, *neppure*. ≈ Spanish *tampoco / ni siquiera*." }
      ],
      drills: [
        { type: "fill", prompt: "Mi ___ le fragole.", en: "I like strawberries.", it: ["piacciono"] },
        { type: "translate", en: "Do you like mushrooms?", it: ["Ti piacciono i funghi?", "A te piacciono i funghi?"] },
        { type: "translate", en: "I don't like onions. — Me neither.", it: ["Non mi piacciono le cipolle. Neanche a me.", "Non mi piacciono le cipolle. Nemmeno a me.", "Non mi piacciono le cipolle, neanche a me.", "Non mi piacciono le cipolle, nemmeno a me."] },
        { type: "fill", prompt: "Mi piace il pesce. — ___ a me.", en: "I like fish. — Me too.", it: ["Anche"] },
        { type: "fill", prompt: "Gli piacciono le ___.", en: "He likes eggs.", it: ["uova"], hint: "plural of l'uovo" }
      ]
    },
    {
      title: "Il partitivo — 'some' with di + article",
      notes: `To say "some" (an unspecified quantity), Italian uses **di + definite article** — the same forms as *di* + article from Week 5.

| | Singular (uncountable) | Plural (countable) |
|---|---|---|
| masc. | del pane, dello yogurt, dell'olio | dei pomodori, degli spinaci |
| fem. | della carne, dell'acqua | delle mele, delle uova |

Examples:

- *Compro del pane.* — "I'm buying some bread."
- *Vorrei delle mele.* — "I'd like some apples."
- *Ci sono dei funghi nel frigo.* — "There are some mushrooms in the fridge."
- *Al mercato prendo della frutta.* — "At the market I'm getting some fruit."

**Alternatives:** in questions and negatives you usually drop it: *Hai latte?* — "Do you have milk?" / *Non compro burro.* — "I'm not buying butter."

**Shops**

| Shop | Sells |
|---|---|
| la panetteria / il forno | bread |
| la macelleria | meat |
| il mercato | everything fresh |`,
      vocab: [
        { it: "il mercato", en: "market", pos: "noun", ex: "Il sabato vado al mercato.", exEn: "On Saturdays I go to the market." },
        { it: "la panetteria", en: "bakery (bread)", pos: "noun", ex: "In panetteria compro del pane fresco.", exEn: "At the bakery I buy some fresh bread.", note: "Cake shop = *la pasticceria*." },
        { it: "la macelleria", en: "butcher's shop", pos: "noun", ex: "La macelleria è chiusa il lunedì.", exEn: "The butcher's is closed on Mondays." },
        { it: "il burro", en: "butter", pos: "noun", ex: "Vorrei del pane con il burro.", exEn: "I'd like some bread with butter.", note: "False friend! Spanish *burro* (donkey) = *l'asino*." },
        { it: "il latte", en: "milk", pos: "noun", ex: "C'è del latte nel frigo?", exEn: "Is there any milk in the fridge?", note: "Ordering 'un latte' gets you a glass of milk." },
        { it: "l'olio", en: "oil (olive oil)", pos: "noun", ex: "In Italia usiamo molto olio d'oliva.", exEn: "In Italy we use a lot of olive oil.", note: "Spanish *aceite* → Italian *olio*. *L'aceto* = vinegar." }
      ],
      drills: [
        { type: "fill", prompt: "Compro ___ pane.", en: "I'm buying some bread.", it: ["del"] },
        { type: "fill", prompt: "Vorrei ___ mele.", en: "I'd like some apples.", it: ["delle"] },
        { type: "fill", prompt: "C'è ___ latte nel frigo?", en: "Is there some milk in the fridge?", it: ["del"] },
        { type: "translate", en: "I'd like some bread with butter.", it: ["Vorrei del pane con il burro.", "Vorrei del pane col burro.", "Vorrei del pane con burro.", "Vorrei pane e burro.", "Vorrei del pane e burro."] },
        { type: "fill", prompt: "Ci sono ___ funghi nel frigo.", en: "There are some mushrooms in the fridge.", it: ["dei"] }
      ]
    },
    {
      title: "Quantities — un etto, un chilo, un po' di",
      notes: `After an expression of quantity, use plain **di** (no article).

| Quantity | Meaning |
|---|---|
| un chilo di… | a kilo of… |
| mezzo chilo di… | half a kilo of… |
| un etto di… | 100 grams of… |
| due etti di… | 200 grams of… |
| una bottiglia di… | a bottle of… |
| un pacco di… | a packet of… |
| una scatola di… | a box/can of… |
| un po' di… | a bit of / some… |

Examples:

- *Un chilo di pomodori, per favore.* — "A kilo of tomatoes, please."
- *Due etti di prosciutto crudo.* — "200 grams of prosciutto."
- *Un pacco di pasta e una bottiglia di olio.* — "A packet of pasta and a bottle of oil."
- *Vorrei un po' di formaggio.* — "I'd like a bit of cheese."

**Culture:** at the deli counter, Italians order cold cuts and cheese **by the etto** (100 g), not by the pound or kilo.

**Compare:** *del formaggio* (some cheese) vs. *un po' di formaggio* (a bit of cheese) — both mean roughly the same.`,
      vocab: [
        { it: "il chilo", en: "kilo", pos: "noun", ex: "Un chilo di patate costa due euro.", exEn: "A kilo of potatoes costs two euros." },
        { it: "l'etto", en: "100 grams", pos: "noun", ex: "Due etti di prosciutto, per favore.", exEn: "200 grams of ham, please.", note: "Short for *ettogrammo*. The standard deli unit." },
        { it: "il pacco", en: "packet, package", pos: "noun", ex: "Compro un pacco di spaghetti.", exEn: "I'm buying a packet of spaghetti." },
        { it: "la scatola", en: "box; can, tin", pos: "noun", ex: "Una scatola di pomodori pelati.", exEn: "A can of peeled tomatoes." },
        { it: "un po' di", en: "a bit of, some", pos: "phrase", ex: "Vuoi un po' di zucchero?", exEn: "Do you want a bit of sugar?", note: "*po'* is short for *poco* — apostrophe, not accent!" },
        { it: "mezzo", en: "half", pos: "adjective", ex: "Mezzo chilo di fragole, per favore.", exEn: "Half a kilo of strawberries, please.", note: "No article before it: *mezzo chilo* (not *un mezzo chilo*)." }
      ],
      drills: [
        { type: "fill", prompt: "Un chilo ___ pomodori, per favore.", en: "A kilo of tomatoes, please.", it: ["di"] },
        { type: "translate", en: "200 grams of ham, please.", it: ["Due etti di prosciutto, per favore.", "Due etti di prosciutto per favore"] },
        { type: "translate", en: "Half a kilo of strawberries.", it: ["Mezzo chilo di fragole."] },
        { type: "fill", prompt: "Vuoi un ___ di zucchero?", en: "Do you want a bit of sugar?", it: ["po'", "po"] },
        { type: "translate", en: "A packet of pasta and a bottle of oil.", it: ["Un pacco di pasta e una bottiglia di olio.", "Un pacco di pasta e una bottiglia d'olio."] }
      ]
    },
    {
      title: "Al mercato — shopping dialogue",
      notes: `A typical exchange at a market stall or deli counter (*il banco dei salumi*):

- **Venditore:** *Buongiorno, desidera?* — "Good morning, what would you like?"
- **Cliente:** *Vorrei un chilo di pomodori e mezzo chilo di fragole.* — "I'd like a kilo of tomatoes and half a kilo of strawberries."
- **Venditore:** *Ecco. Altro?* — "Here you are. Anything else?"
- **Cliente:** *Sì, due etti di parmigiano. Quant'è?* — "Yes, 200 grams of parmesan. How much is it?"
- **Venditore:** *Sono otto euro e cinquanta.* — "That's eight euros fifty."
- **Cliente:** *Basta così, grazie. Ecco dieci euro.* — "That's all, thanks. Here's ten euros."
- **Venditore:** *Ecco il resto e lo scontrino.* — "Here's your change and the receipt."

| Phrase | Meaning |
|---|---|
| Desidera? | What would you like? (formal) |
| Altro? | Anything else? |
| Basta così. | That's all / That's enough. |
| Quant'è? | How much is it (in total)? |

**Culture:** keep the receipt (*lo scontrino*). By law shops must give one.`,
      vocab: [
        { it: "desiderare", en: "to wish, desire, want", pos: "verb", ex: "Buongiorno, desidera?", exEn: "Good morning, what would you like?", note: "Shop assistants use *Desidera?* (formal) to ask what you want." },
        { it: "altro", en: "other; anything else", pos: "adjective", ex: "Altro? — No, grazie.", exEn: "Anything else? — No, thanks." },
        { it: "basta", en: "enough; that's all", pos: "phrase", ex: "Basta così, grazie.", exEn: "That's all, thanks.", note: "From *bastare*, like Spanish *¡basta!*." },
        { it: "lo scontrino", en: "receipt", pos: "noun", ex: "Vuole lo scontrino?", exEn: "Do you want the receipt?", note: "*lo* because of s + consonant." },
        { it: "il resto", en: "change (money back); the rest", pos: "noun", ex: "Ecco il resto.", exEn: "Here's your change.", note: "Small coins = *gli spiccioli*." },
        { it: "ecco", en: "here is / here you are", pos: "adverb", ex: "Ecco il pane.", exEn: "Here's the bread.", note: "≈ Spanish *aquí tiene / he aquí*." }
      ],
      drills: [
        { type: "translate", en: "That's all, thanks.", it: ["Basta così, grazie.", "Basta così grazie"] },
        { type: "translate", en: "Anything else?", it: ["Altro?", "Qualcos'altro?"] },
        { type: "fill", prompt: "Ecco il ___ e lo scontrino.", en: "Here's your change and the receipt.", it: ["resto"] },
        { type: "translate", en: "Good morning, what would you like?", it: ["Buongiorno, desidera?", "Buongiorno, cosa desidera?"] },
        { type: "translate", en: "I'd like a kilo of potatoes.", it: ["Vorrei un chilo di patate."] }
      ]
    }
  ],
  speaking: [
    "Tell your tutor five foods you like and five you don't: *Mi piace… / Mi piacciono… / Non mi piacciono…* Ask them to react with *anche a me / a me no*.",
    "Role-play a market stall: your tutor is the vendor. Buy at least four items with quantities (*un etto di, mezzo chilo di…*).",
    "Describe your weekly grocery shopping: *Di solito compro del pane, delle uova…*",
    "Ask your tutor about typical foods from their region: *Cosa si mangia nella tua regione?*"
  ],
  writing: "Write your shopping list for a dinner party with quantities (at least 8 items), then 3–4 sentences about which foods you like and don't like, using mi piace and mi piacciono."
};
