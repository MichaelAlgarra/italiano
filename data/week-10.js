window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[10] = {
  week: 10,
  title: "Shopping for clothes: colors, sizes, lo/la/li/le, questo/quello",
  textbook: "Nuovo Espresso 1 · Lezione 8",
  goals: [
    "Name common clothes and say what you're wearing",
    "Make colors agree with nouns (and know the invariable ones)",
    "Replace objects with direct object pronouns lo/la/li/le",
    "Point things out with questo and quello",
    "Handle a shop conversation: try on, ask about size and price"
  ],
  spanishNotes: [
    "**False friend:** *largo* = wide / loose. *Long* is **lungo**. *Corto* = short for clothes, but short people are *bassi*.",
    "**Trap:** *los / las* → **li / le**. In Italian, *le* is a **direct** object meaning *them (feminine)*: *Le scarpe? Le compro.*",
    "**False friend:** *la camicia* = shirt (Spanish *camisa*), but a T-shirt is **la maglietta**.",
    "**Cheap:** there's no Italian *barato*. Use **economico** (or *costa poco*)."
  ],
  days: [
    {
      title: "Clothes and what you wear",
      notes: `There are three ways to say you're wearing or putting on clothes:

| Verb | Use |
|---|---|
| **portare** | to wear (also: to carry) |
| **indossare** | to wear (slightly more formal) |
| **mettersi** | to put on |

Oggi porto una camicia e i jeans.
"Today I'm wearing a shirt and jeans."

Mi metto il maglione perché fa freddo.
"I'm putting on my sweater because it's cold."

Some clothing words are **always plural**, just like in English: *i pantaloni* (trousers), *i jeans*, *gli occhiali* (glasses).

I pantaloni sono nuovi.
"The trousers are new."

Review the articles with clothing. *Lo / gli* go before s + consonant:

| Singular | Plural |
|---|---|
| **la** gonna | **le** gonne |
| **il** maglione | **i** maglioni |
| **la** scarpa | **le** scarpe |
| **lo** stivale | **gli** stivali |

To ask what someone is wearing: **Cosa porti oggi?** "What are you wearing today?"`,
      vocab: [
        { it: "la camicia", en: "shirt (with buttons)", pos: "noun (f)", ex: "Questa camicia è di cotone.", exEn: "This shirt is cotton.", note: "Plural *le camicie*. Spanish *camisa*" },
        { it: "i pantaloni", en: "trousers / pants", pos: "noun (m, pl)", ex: "Porto i pantaloni neri.", exEn: "I'm wearing black trousers.", note: "Always plural" },
        { it: "la giacca", en: "jacket", pos: "noun (f)", ex: "Prendi la giacca, fa freddo.", exEn: "Take your jacket, it's cold.", note: "Plural *le giacche*" },
        { it: "la gonna", en: "skirt", pos: "noun (f)", ex: "Anna porta una gonna lunga.", exEn: "Anna is wearing a long skirt.", note: "Spanish *falda*" },
        { it: "le scarpe", en: "shoes", pos: "noun (f, pl)", ex: "Ho comprato scarpe nuove.", exEn: "I bought new shoes.", note: "Singular *la scarpa*. Spanish *zapatos*" },
        { it: "il maglione", en: "sweater / jumper", pos: "noun (m)", ex: "Mi metto il maglione.", exEn: "I'm putting on my sweater.", note: "*la maglia* = a lighter top" }
      ],
      drills: [
        { type: "translate", en: "Today I'm wearing a skirt.", it: ["Oggi porto una gonna.", "Oggi indosso una gonna.", "Oggi mi metto una gonna.", "Oggi io porto una gonna.", "Io oggi porto una gonna."] },
        { type: "fill", prompt: "Mi metto ___ maglione perché fa freddo.", en: "I'm putting on the sweater because it's cold.", it: ["il"], hint: "article" },
        { type: "translate", en: "The shoes are new.", it: ["Le scarpe sono nuove."] },
        { type: "translate", en: "Where is the jacket?", it: ["Dov'è la giacca?", "Dove è la giacca?"] },
        { type: "fill", prompt: "Luca indossa una ___.", en: "Luca is wearing a shirt.", it: ["camicia"], hint: "shirt" }
      ]
    },
    {
      title: "Colors and agreement",
      notes: `Colors are adjectives. They go **after** the noun and agree with it.

**-o adjectives** have four forms:

| | m | f |
|---|---|---|
| sing. | ross**o** | ross**a** |
| plur. | ross**i** | ross**e** |

**-e adjectives** have two forms: *verde → verdi*.

**Invariable** colors never change: **blu, rosa, viola, beige**.

| Example | English |
|---|---|
| una giacca nera | a black jacket |
| due camicie bianche | two white shirts |
| i pantaloni verdi | green trousers |
| le scarpe blu | blue shoes |

Watch the spelling: *bianco → bianchi / bianche* (add **h**), and *grigio → grigi / grigie*.

Ho una gonna rossa e due maglioni grigi.
"I have a red skirt and two grey sweaters."

**Blu** is dark blue; **azzurro** is light / sky blue (and the color of the national team, *gli Azzurri*). **Marrone** (brown) has the plural *marroni*.

To ask about color: **Di che colore è?** "What color is it?"`,
      vocab: [
        { it: "rosso", en: "red", pos: "adjective", ex: "Vorrei la borsa rossa.", exEn: "I'd like the red bag.", note: "Spanish *rojo*" },
        { it: "nero", en: "black", pos: "adjective", ex: "Porto sempre i jeans neri.", exEn: "I always wear black jeans.", note: "Spanish *negro*" },
        { it: "bianco", en: "white", pos: "adjective", ex: "Due camicie bianche, per favore.", exEn: "Two white shirts, please.", note: "Plural *bianchi / bianche*" },
        { it: "verde", en: "green", pos: "adjective", ex: "Ha gli occhi verdi.", exEn: "She has green eyes.", note: "-e adjective: *verde / verdi*" },
        { it: "blu", en: "(dark) blue", pos: "adjective (invariable)", ex: "Le scarpe blu sono belle.", exEn: "The blue shoes are nice.", note: "Never changes. Light blue = *azzurro*" },
        { it: "grigio", en: "grey", pos: "adjective", ex: "Ho un cappotto grigio.", exEn: "I have a grey coat.", note: "Plural *grigi / grigie*" }
      ],
      drills: [
        { type: "fill", prompt: "Ho due camicie ___.", en: "I have two white shirts.", it: ["bianche"], hint: "bianco (agreement)" },
        { type: "translate", en: "I want a black jacket.", it: ["Voglio una giacca nera.", "Vorrei una giacca nera.", "Io voglio una giacca nera."] },
        { type: "fill", prompt: "Le scarpe ___ sono belle.", en: "The blue shoes are nice.", it: ["blu"], hint: "blue (invariable)" },
        { type: "translate", en: "The sweaters are green.", it: ["I maglioni sono verdi."] },
        { type: "fill", prompt: "Luca porta i pantaloni ___.", en: "Luca is wearing grey trousers.", it: ["grigi"], hint: "grigio (agreement)" }
      ]
    },
    {
      title: "Direct object pronouns: lo, la, li, le",
      notes: `A **direct object pronoun** replaces the thing you buy, see or take:

| | singular | plural |
|---|---|---|
| me / us | **mi** | **ci** |
| you | **ti** | **vi** |
| him / it (m) | **lo** | **li** (them, m) |
| her / it (f) | **la** | **le** (them, f) |

It goes **before** the conjugated verb:

Ti piace la gonna? Sì, la prendo.
"Do you like the skirt? Yes, I'll take it."

I pantaloni? Non li compro, sono cari.
"The trousers? I'm not buying them, they're expensive."

With an infinitive, the pronoun can **attach** to it or go before the modal:

Posso provarla? / La posso provare?
"Can I try it on?"

Before a vowel, *lo* and *la* usually become **l'**: *L'aspetto qui* (I'll wait for him/her here). *Li* and *le* never shorten.

In the shop:

Commesso: Che taglia porta?
"What size do you wear?"

Cliente: La 44. Dov'è il camerino?
"A 44. Where's the fitting room?"`,
      vocab: [
        { it: "provare", en: "to try / try on", pos: "verb", ex: "Posso provare questa giacca?", exEn: "Can I try on this jacket?", note: "Spanish *probar(se)*" },
        { it: "il camerino", en: "fitting room", pos: "noun (m)", ex: "Il camerino è in fondo a destra.", exEn: "The fitting room is at the back on the right.", note: "Spanish *probador*" },
        { it: "la taglia", en: "size (clothes)", pos: "noun (f)", ex: "Che taglia porta?", exEn: "What size do you wear?", note: "Shoe size = *il numero*: *Che numero porta?*" },
        { it: "il commesso", en: "shop assistant (m)", pos: "noun (m)", ex: "Il commesso è molto gentile.", exEn: "The shop assistant is very kind.", note: "f: *la commessa*" },
        { it: "lo sconto", en: "discount", pos: "noun (m)", ex: "C'è uno sconto del venti per cento.", exEn: "There's a twenty percent discount.", note: "Spanish *descuento*" },
        { it: "i saldi", en: "the sales", pos: "noun (m, pl)", ex: "A gennaio ci sono i saldi.", exEn: "In January there are the sales.", note: "Spanish *rebajas*" }
      ],
      drills: [
        { type: "fill", prompt: "La giacca è bella. ___ prendo.", en: "The jacket is nice. I'll take it.", it: ["La"], hint: "it (f)" },
        { type: "fill", prompt: "Ti piacciono i pantaloni? Sì, ___ compro.", en: "Do you like the trousers? Yes, I'm buying them.", it: ["li"], hint: "them (m)" },
        { type: "translate", en: "Can I try it on? (la camicia)", it: ["Posso provarla?", "La posso provare?"] },
        { type: "translate", en: "I don't see them. (le scarpe)", it: ["Non le vedo.", "Io non le vedo."] },
        { type: "fill", prompt: "Il commesso ___ aiuta.", en: "The shop assistant helps us.", it: ["ci"], hint: "us" }
      ]
    },
    {
      title: "Questo and how things fit",
      notes: `**Questo** (this) agrees like a normal -o adjective:

| | m | f |
|---|---|---|
| sing. | **questo** maglione | **questa** gonna |
| plur. | **questi** pantaloni | **queste** scarpe |

Before a vowel, *questo / questa* can become **quest'**: *quest'anno* (this year).

On its own, *questo* is a pronoun:

Prendo questo.
"I'll take this one."

Use **troppo** (too) or **un po'** (a bit) with fit adjectives:

Questi pantaloni sono troppo lunghi.
"These trousers are too long."

Queste scarpe sono un po' strette.
"These shoes are a bit tight."

Asking for alternatives:

Ha una taglia più grande?
"Do you have a bigger size?"

Quanto costa questa giacca? / Quanto costano queste scarpe?
"How much is this jacket? / How much are these shoes?"

Watch the plural spelling: *lungo → lunghi / lunghe*, *largo → larghi / larghe*, *economico → economici / economiche*.`,
      vocab: [
        { it: "stretto", en: "tight / narrow", pos: "adjective", ex: "La gonna è troppo stretta.", exEn: "The skirt is too tight.", note: "Spanish *estrecho / apretado*" },
        { it: "largo", en: "wide / loose", pos: "adjective", ex: "Questa camicia è larga.", exEn: "This shirt is loose.", note: "False friend! *long* = *lungo*" },
        { it: "lungo", en: "long", pos: "adjective", ex: "Ho i capelli lunghi.", exEn: "I have long hair.", note: "Plural *lunghi / lunghe*" },
        { it: "corto", en: "short (length)", pos: "adjective", ex: "I pantaloni sono troppo corti.", exEn: "The trousers are too short.", note: "For people's height use *basso*" },
        { it: "caro", en: "expensive / dear", pos: "adjective", ex: "Questo negozio è molto caro.", exEn: "This shop is very expensive.", note: "Same as Spanish *caro*" },
        { it: "economico", en: "cheap / inexpensive", pos: "adjective", ex: "Cerco un vestito economico.", exEn: "I'm looking for an inexpensive dress.", note: "Plural *economici / economiche*" }
      ],
      drills: [
        { type: "translate", en: "These shoes are too tight.", it: ["Queste scarpe sono troppo strette."] },
        { type: "fill", prompt: "___ pantaloni sono troppo lunghi.", en: "These trousers are too long.", it: ["Questi"], hint: "this (m, pl)" },
        { type: "translate", en: "This shirt is cheap.", it: ["Questa camicia è economica.", "Questa camicia costa poco."] },
        { type: "fill", prompt: "La gonna è troppo ___.", en: "The skirt is too short.", it: ["corta"], hint: "corto (agreement)" },
        { type: "translate", en: "The jacket is too loose.", it: ["La giacca è troppo larga."] }
      ]
    },
    {
      title: "Quello: that one over there",
      notes: `**Quello** (that) changes its ending **like the definite article**:

| Article | quello + noun |
|---|---|
| **il** vestito | **quel** vestito |
| **lo** stivale | **quello** stivale |
| **l'**uomo | **quell'**uomo |
| **la** borsa | **quella** borsa |
| **i** vestiti | **quei** vestiti |
| **gli** stivali | **quegli** stivali |
| **le** borse | **quelle** borse |

Quel vestito è molto bello.
"That dress is very nice."

Quanto costano quegli stivali?
"How much are those boots?"

As a **pronoun** (no noun after it), use only the regular forms **quello, quella, quelli, quelle**:

Ti piace questo cappello? No, preferisco quello rosso.
"Do you like this hat? No, I prefer the red one."

Italian has just two levels, *questo* (near me) and *quello* (away from me). Spanish has three (*este / ese / aquel*), but *ese* and *aquel* both become **quello**.`,
      vocab: [
        { it: "la maglietta", en: "T-shirt", pos: "noun (f)", ex: "D'estate porto sempre una maglietta.", exEn: "In summer I always wear a T-shirt.", note: "Spanish *camiseta*" },
        { it: "il vestito", en: "dress / (men's) suit", pos: "noun (m)", ex: "Quel vestito blu è elegante.", exEn: "That blue dress is elegant.", note: "Masculine! Spanish *vestido*" },
        { it: "la borsa", en: "bag / handbag", pos: "noun (f)", ex: "Ho dimenticato la borsa.", exEn: "I forgot my bag.", note: "Spanish *bolso*. *La Borsa* = the stock exchange" },
        { it: "il cappello", en: "hat", pos: "noun (m)", ex: "Mi metto il cappello.", exEn: "I put on my hat.", note: "Double p and double l! *capelli* = hair" },
        { it: "gli stivali", en: "boots", pos: "noun (m, pl)", ex: "Quegli stivali sono cari.", exEn: "Those boots are expensive.", note: "Singular *lo stivale*. Italy is *lo Stivale*" },
        { it: "la cravatta", en: "tie", pos: "noun (f)", ex: "Per il colloquio porto la cravatta.", exEn: "For the interview I'm wearing a tie.", note: "Spanish *corbata*" }
      ],
      drills: [
        { type: "fill", prompt: "Mi piace ___ borsa nera.", en: "I like that black bag.", it: ["quella"], hint: "that (f)" },
        { type: "fill", prompt: "Quanto costano ___ stivali?", en: "How much are those boots?", it: ["quegli"], hint: "that (m, pl, before s+consonant)" },
        { type: "translate", en: "That dress is very nice.", it: ["Quel vestito è molto bello."] },
        { type: "translate", en: "I prefer the red one. (il cappello)", it: ["Preferisco quello rosso.", "Io preferisco quello rosso."] },
        { type: "fill", prompt: "Vedi ___ uomo con il cappello?", en: "Do you see that man with the hat?", it: ["quell'", "quell"], hint: "that (before a vowel)" }
      ]
    }
  ],
  speaking: [
    "Role-play a clothes shop with your tutor: *Buongiorno, posso provare…?* / *Che taglia porta?* / *È troppo stretto, ha una taglia più grande?*",
    "Describe what you're wearing today, colors included: *Oggi porto una camicia bianca e…*",
    "Point at objects around you and compare them: *Preferisco questo / quello perché…*",
    "Talk about your favourite clothes and where you buy them: *Di solito compro i vestiti…*"
  ],
  writing: "Write a short dialogue (8–10 lines) in a clothing shop: ask to try something on, say it doesn't fit, and buy something else. Use lo/la/li/le at least three times."
};
