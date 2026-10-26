window.ITALIANO = window.ITALIANO || { weeks: {} };
window.ITALIANO.weeks[11] = {
  week: 11,
  title: "Family and people: possessives and descriptions",
  textbook: "Nuovo Espresso 1 · Lezione 9",
  goals: [
    "Use possessive adjectives with the article (la mia casa, il loro cane)",
    "Apply the family-noun exception (mia madre, but i miei fratelli)",
    "Describe what people look like (essere alto, avere i capelli…)",
    "Describe personality and relationships",
    "Use possessive pronouns and di chi è? (whose)"
  ],
  spanishNotes: [
    "**Trap:** Italian keeps the article with possessives: *la mia casa* (Spanish *mi casa*). The exception is singular family members: *mia madre*, *mio fratello*.",
    "**False friend:** *i parenti* = relatives. *Parents* = **i genitori**.",
    "**One word, two meanings:** *il / la nipote* = grandchild **and** nephew / niece (Spanish *nieto* + *sobrino*).",
    "**Trap:** *loro* (their) never changes and always takes the article: *la loro madre*, *i loro figli*."
  ],
  days: [
    {
      title: "Possessive adjectives",
      notes: `Possessives agree with the **thing owned**, not the owner, and normally take the **article**:

| | m sing. | f sing. | m plur. | f plur. |
|---|---|---|---|---|
| my | il **mio** | la **mia** | i **miei** | le **mie** |
| your (tu) | il **tuo** | la **tua** | i **tuoi** | le **tue** |
| his / her / your (Lei) | il **suo** | la **sua** | i **suoi** | le **sue** |
| our | il **nostro** | la **nostra** | i **nostri** | le **nostre** |
| your (voi) | il **vostro** | la **vostra** | i **vostri** | le **vostre** |
| their | il **loro** | la **loro** | i **loro** | le **loro** |

La mia casa è piccola, ma il mio giardino è grande.
"My house is small, but my garden is big."

**Suo** can mean *his* or *her*. It agrees with the object:

Marco ama la sua macchina. / Anna ama il suo lavoro.
"Marco loves his car. / Anna loves her job."

With the formal *Lei*, it's often capitalised in writing: *il Suo nome* (your name).

**Loro** never changes:

Paolo e Sara vendono la loro casa.
"Paolo and Sara are selling their house."

Articulated prepositions work as usual: *nella mia stanza* (in my room), *dal tuo amico* (at your friend's).`,
      vocab: [
        { it: "i genitori", en: "parents", pos: "noun (m, pl)", ex: "I miei genitori abitano a Napoli.", exEn: "My parents live in Naples.", note: "Not *parenti* (= relatives)!" },
        { it: "il marito", en: "husband", pos: "noun (m)", ex: "Suo marito è medico.", exEn: "Her husband is a doctor.", note: "Spanish *marido*" },
        { it: "la moglie", en: "wife", pos: "noun (f)", ex: "Ti presento mia moglie.", exEn: "Let me introduce my wife.", note: "Plural *le mogli*" },
        { it: "il figlio", en: "son / child", pos: "noun (m)", ex: "Hanno due figli.", exEn: "They have two children.", note: "*i figli* = sons or children in general" },
        { it: "la figlia", en: "daughter", pos: "noun (f)", ex: "La loro figlia studia a Bologna.", exEn: "Their daughter studies in Bologna.", note: "Plural *le figlie*" },
        { it: "i parenti", en: "relatives", pos: "noun (m, pl)", ex: "A Natale vediamo tutti i parenti.", exEn: "At Christmas we see all our relatives.", note: "False friend: not *parents*" }
      ],
      drills: [
        { type: "fill", prompt: "Questa è ___ macchina.", en: "This is my car.", it: ["la mia"], hint: "my (f) + article" },
        { type: "translate", en: "Our house is big.", it: ["La nostra casa è grande."] },
        { type: "fill", prompt: "Anna ama ___ lavoro.", en: "Anna loves her job.", it: ["il suo"], hint: "her (agrees with lavoro)" },
        { type: "translate", en: "Where are your books?", it: ["Dove sono i tuoi libri?", "Dove sono i vostri libri?", "Dove sono i Suoi libri?", "Dove sono i suoi libri?"] },
        { type: "fill", prompt: "Paolo e Sara vendono ___ casa.", en: "Paolo and Sara are selling their house.", it: ["la loro"], hint: "their + article" }
      ]
    },
    {
      title: "The family exception",
      notes: `With **singular family members**, drop the article:

| No article | Article returns |
|---|---|
| **mia** madre | **le mie** sorelle (plural) |
| **tuo** padre | **la mia** mamma (affectionate form) |
| **suo** fratello | **il mio** fratellino (with a suffix) |
| **nostro** zio | **la nostra** zia preferita (with an adjective) |
| — | **la loro** madre (*loro* always) |

Mio zio abita in Sicilia.
"My uncle lives in Sicily."

I miei cugini abitano a Milano.
"My cousins live in Milan."

So in short: **one** family member with mio / tuo / suo / nostro / vostro takes no article. Anything else gets the article.

Questa è mia nonna, e questi sono i miei nonni.
"This is my grandmother, and these are my grandparents."

To ask about family: **Hai fratelli?** (Do you have brothers and sisters?) **Quanti anni ha tua sorella?** (How old is your sister?)`,
      vocab: [
        { it: "lo zio", en: "uncle", pos: "noun (m)", ex: "Mio zio fa il cuoco.", exEn: "My uncle is a cook.", note: "Plural *gli zii*" },
        { it: "la zia", en: "aunt", pos: "noun (f)", ex: "Vado da mia zia domenica.", exEn: "I'm going to my aunt's on Sunday.", note: "Spanish *tía*" },
        { it: "il cugino", en: "cousin (m)", pos: "noun (m)", ex: "Mio cugino vive in Germania.", exEn: "My cousin lives in Germany.", note: "Spanish *primo* (in Italian *primo* = first!)" },
        { it: "la cugina", en: "cousin (f)", pos: "noun (f)", ex: "Le mie cugine sono gemelle.", exEn: "My cousins are twins." },
        { it: "il nipote", en: "grandson / nephew", pos: "noun (m)", ex: "Mio nipote ha cinque anni.", exEn: "My grandson / nephew is five.", note: "f: *la nipote*. Covers *nieto* and *sobrino*" },
        { it: "i nonni", en: "grandparents", pos: "noun (m, pl)", ex: "I miei nonni sono di Bari.", exEn: "My grandparents are from Bari.", note: "Remember the double n: *nonno* vs *nono* (ninth)" }
      ],
      drills: [
        { type: "fill", prompt: "___ zio abita in Sicilia.", en: "My uncle lives in Sicily.", it: ["Mio"], hint: "my (no article!)" },
        { type: "fill", prompt: "___ cugini abitano a Milano.", en: "My cousins live in Milan.", it: ["I miei"], hint: "my (plural, article)" },
        { type: "translate", en: "Her mother is a doctor.", it: ["Sua madre è medico.", "Sua madre è un medico.", "Sua madre è dottoressa.", "Sua madre è una dottoressa.", "Sua madre fa il medico.", "Sua madre è medica."] },
        { type: "translate", en: "Their grandparents are Italian.", it: ["I loro nonni sono italiani."] },
        { type: "fill", prompt: "Questo è ___ fratello, Luca.", en: "This is my brother, Luca.", it: ["mio"], hint: "my" }
      ]
    },
    {
      title: "What do they look like?",
      notes: `Ask **Com'è?** (What is he/she like? / What does he/she look like?).

Use **essere** for build and **avere** for hair and eyes:

| essere | avere |
|---|---|
| alto / basso | **i capelli** biondi, castani, neri, corti, lunghi, ricci |
| magro / robusto | **gli occhi** azzurri, verdi, castani |

Mia sorella è alta e magra.
"My sister is tall and slim."

Giulia ha i capelli biondi e gli occhi azzurri.
"Giulia has blonde hair and blue eyes."

Italian says **i capelli** (plural), with the article. *Castano* is the word for brown hair and eyes. *Marrone* is used for objects.

Suo fratello porta la barba e gli occhiali.
"Her brother has a beard and wears glasses."

Remember to make the adjective agree: *Luca è basso*, *Anna è bassa*, *i miei figli sono alti*.`,
      vocab: [
        { it: "alto", en: "tall / high", pos: "adjective", ex: "Mio padre è molto alto.", exEn: "My father is very tall.", note: "Spanish *alto*" },
        { it: "basso", en: "short (height) / low", pos: "adjective", ex: "Sono un po' basso.", exEn: "I'm a bit short.", note: "Spanish *bajo*" },
        { it: "magro", en: "thin / slim", pos: "adjective", ex: "È diventato magro.", exEn: "He has become thin.", note: "Spanish *delgado* (*magro* = lean meat)" },
        { it: "biondo", en: "blond(e)", pos: "adjective", ex: "Ha i capelli biondi.", exEn: "She has blonde hair.", note: "Spanish *rubio*" },
        { it: "i capelli", en: "hair (on the head)", pos: "noun (m, pl)", ex: "Ho i capelli corti.", exEn: "I have short hair.", note: "Always plural. Don't confuse with *il cappello* (hat)" },
        { it: "gli occhi", en: "eyes", pos: "noun (m, pl)", ex: "Ha gli occhi castani.", exEn: "He has brown eyes.", note: "Singular *l'occhio*" }
      ],
      drills: [
        { type: "translate", en: "My sister is tall.", it: ["Mia sorella è alta."] },
        { type: "translate", en: "He has blue eyes.", it: ["Ha gli occhi azzurri.", "Lui ha gli occhi azzurri.", "Ha gli occhi blu.", "Lui ha gli occhi blu."] },
        { type: "fill", prompt: "Giulia ha ___ capelli biondi.", en: "Giulia has blonde hair.", it: ["i"], hint: "article" },
        { type: "translate", en: "Her brother is short and thin.", it: ["Suo fratello è basso e magro."] },
        { type: "fill", prompt: "Mio padre è ___.", en: "My father is thin.", it: ["magro"], hint: "thin" }
      ]
    },
    {
      title: "Personality: what are they like?",
      notes: `To ask about character: **Che tipo è?** or **Com'è di carattere?**

| Positive | Negative |
|---|---|
| simpatico (nice, likeable) | antipatico (unpleasant) |
| gentile (kind) | — |
| allegro (cheerful) | serio (serious) |
| — | timido (shy), pigro (lazy) |

Make the endings agree. Adjectives in **-co** usually become **-ci / -che** in the plural:

| m sing. | m plur. | f plur. |
|---|---|---|
| simpatico | simpati**ci** | simpati**che** |
| antipatico | antipati**ci** | antipati**che** |

Le tue amiche sono simpatiche.
"Your friends are nice."

Soften or strengthen with **un po'**, **molto** or **troppo**:

Mio fratello è un po' pigro, ma è molto gentile.
"My brother is a bit lazy, but he's very kind."

**Gentile con** means kind to someone:

La nonna è sempre gentile con tutti.
"Grandma is always kind to everyone."`,
      vocab: [
        { it: "simpatico", en: "nice / likeable", pos: "adjective", ex: "Il tuo amico è molto simpatico.", exEn: "Your friend is very nice.", note: "Plural *simpatici / simpatiche*" },
        { it: "antipatico", en: "unpleasant / unlikeable", pos: "adjective", ex: "Il nuovo collega è antipatico.", exEn: "The new colleague is unpleasant.", note: "Spanish *antipático*" },
        { it: "gentile", en: "kind / polite", pos: "adjective", ex: "Grazie, sei molto gentile.", exEn: "Thanks, you're very kind.", note: "Spanish *amable*. Also used in letters: *Gentile signora…*" },
        { it: "timido", en: "shy", pos: "adjective", ex: "Mio figlio è un po' timido.", exEn: "My son is a bit shy." },
        { it: "allegro", en: "cheerful", pos: "adjective", ex: "Mia nonna è sempre allegra.", exEn: "My grandmother is always cheerful.", note: "Spanish *alegre*" },
        { it: "pigro", en: "lazy", pos: "adjective", ex: "La domenica sono un po' pigro.", exEn: "On Sundays I'm a bit lazy.", note: "Spanish *perezoso / flojo*" }
      ],
      drills: [
        { type: "translate", en: "My cousins are very nice.", it: ["I miei cugini sono molto simpatici.", "Le mie cugine sono molto simpatiche."] },
        { type: "fill", prompt: "Le tue amiche sono ___.", en: "Your friends are nice.", it: ["simpatiche"], hint: "simpatico (f, pl)" },
        { type: "translate", en: "He is a bit lazy.", it: ["È un po' pigro.", "Lui è un po' pigro."] },
        { type: "fill", prompt: "Mia nonna è sempre ___.", en: "My grandmother is always cheerful.", it: ["allegra"], hint: "cheerful" },
        { type: "translate", en: "Her husband is shy.", it: ["Suo marito è timido."] }
      ]
    },
    {
      title: "Relationships and possessive pronouns",
      notes: `Civil status:

Sono sposato / sposata.
"I'm married."

Mio fratello è divorziato.
"My brother is divorced."

Ho un fidanzato / una fidanzata.
"I have a boyfriend / girlfriend (or fiancé / fiancée)."

**Andare d'accordo con** means to get along with someone:

Vado d'accordo con mio fratello.
"I get along with my brother."

**Possessive pronouns** are the same words used without a noun, with the article:

Il tuo cane è piccolo, il mio è grande.
"Your dog is small, mine is big."

Questa è la tua borsa? No, la mia è nera.
"Is this your bag? No, mine is black."

**A friend of mine** puts the possessive between the indefinite article and the noun:

Un mio amico abita a Roma.
"A friend of mine lives in Rome."

To ask **whose**, use **Di chi è?** / **Di chi sono?** Answer with *È di Marco* (It's Marco's).`,
      vocab: [
        { it: "sposato", en: "married", pos: "adjective", ex: "Sei sposato?", exEn: "Are you married?", note: "*sposarsi* = to get married" },
        { it: "divorziato", en: "divorced", pos: "adjective", ex: "I suoi genitori sono divorziati.", exEn: "His parents are divorced." },
        { it: "separato", en: "separated", pos: "adjective", ex: "Mia zia è separata e vive da sola.", exEn: "My aunt is separated and lives alone." },
        { it: "il fidanzato", en: "boyfriend / fiancé", pos: "noun (m)", ex: "Il suo fidanzato è di Torino.", exEn: "Her boyfriend is from Turin.", note: "Used for any serious relationship, not only engagement" },
        { it: "la fidanzata", en: "girlfriend / fiancée", pos: "noun (f)", ex: "Ti presento la mia fidanzata.", exEn: "Let me introduce my girlfriend.", note: "Keeps the article: not a family member (yet!)" },
        { it: "andare d'accordo", en: "to get along", pos: "expression", ex: "Andiamo d'accordo con i vicini.", exEn: "We get along with the neighbours.", note: "Spanish *llevarse bien*" }
      ],
      drills: [
        { type: "translate", en: "Are you married?", it: ["Sei sposato?", "Sei sposata?", "Tu sei sposato?", "Tu sei sposata?", "È sposato?", "È sposata?", "Lei è sposato?", "Lei è sposata?", "Siete sposati?"] },
        { type: "fill", prompt: "Vado d'accordo con ___ fratello.", en: "I get along with my brother.", it: ["mio"], hint: "my (family)" },
        { type: "translate", en: "A friend of mine lives in Rome.", it: ["Un mio amico abita a Roma.", "Una mia amica abita a Roma.", "Un mio amico vive a Roma.", "Una mia amica vive a Roma."] },
        { type: "fill", prompt: "Questa è la tua borsa? No, ___ è nera.", en: "Is this your bag? No, mine is black.", it: ["la mia"], hint: "mine (f)" },
        { type: "translate", en: "Whose is it?", it: ["Di chi è?"] }
      ]
    }
  ],
  speaking: [
    "Show your tutor a family photo and introduce everyone: *Questa è mia madre, questi sono i miei cugini…*",
    "Describe one relative's looks and personality: *Mio zio è alto, ha i capelli… È molto simpatico.*",
    "Ask your tutor about their family: *Hai fratelli? Come si chiamano? Dove abitano?*",
    "Describe your best friend and how you met: *Il mio migliore amico si chiama… Andiamo d'accordo perché…*"
  ],
  writing: "Describe your family in 8–10 sentences: who they are, where they live, what they look like and what they're like. Watch the article with mio/mia + family members."
};
