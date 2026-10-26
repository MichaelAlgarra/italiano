/* Italiano — daily study app (static, GitHub Pages).
 * Date → plan week/day → lesson. Progress (SRS cards, drill results, settings) lives in localStorage;
 * Settings has export/import to move it between devices. */

const STORE_KEY = "italiano.v1";
const DEFAULT_START = "2026-10-26"; // Week 1, Day 1 (Monday)
const DAY_NAMES = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
const DAY_SHORT = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
const MONTHS = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

let D;              // window.ITALIANO
let IMG;            // window.ITALIANO_IMAGES
let S;              // persisted state
let viewing = null; // { week, day, peek? } currently shown on Today
let currentView = "today";
let session = null; // active review / drill session
let voices = [];

// ---------- icons (Lucide-style line icons) ----------

const ICONS = {
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    map: '<path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/>',
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    volume: '<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-1"/>',
    sparkle: '<path d="M12 3l1.9 5.8L20 10.7l-5.8 1.9L12 18.5l-1.9-5.9L4 10.7l6.1-1.9z"/>',
};

function icon(name, cls = "") {
    return `<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

function hydrateIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach(el => { el.innerHTML = icon(el.dataset.icon); el.removeAttribute("data-icon"); });
}

// ---------- persistence ----------

function defaultState() {
    return {
        settings: { startDate: DEFAULT_START, voiceURI: "", autoSpeak: false, rate: 0.9, reviewMode: "mixed", maxReviews: 100 },
        cards: {},       // key → { it, en, week, day, due, interval, ease, reps, lapses, added }
        learnedDays: {}, // "w-d" → date the day's words were added
        drills: {},      // "w-d-i" → { status, date }
        writing: {},     // week → text
        log: {},         // date → { reviews, correct, newWords, drills }
    };
}

function loadState() {
    try {
        const raw = JSON.parse(localStorage.getItem(STORE_KEY));
        const base = defaultState();
        if (!raw) return base;
        return { ...base, ...raw, settings: { ...base.settings, ...(raw.settings || {}) } };
    } catch {
        return defaultState();
    }
}

function save() {
    localStorage.setItem(STORE_KEY, JSON.stringify(S));
    updateTopStats();
}

function logToday(field, n = 1) {
    const t = ymd(today());
    S.log[t] = S.log[t] || { reviews: 0, correct: 0, newWords: 0, drills: 0 };
    S.log[t][field] = (S.log[t][field] || 0) + n;
}

// ---------- dates ----------

function today() {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

function parseYmd(s) {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
}

function ymd(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function addDays(d, n) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}

function dayDiff(a, b) {
    return Math.round((a - b) / 864e5);
}

function prettyDate(d) {
    return `${DAY_NAMES[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

// Plan position for a calendar date. index < 0 → before Week 1.
function positionFor(date) {
    const idx = dayDiff(date, parseYmd(S.settings.startDate));
    if (idx < 0) return { week: 0, day: 0, idx };
    return { week: Math.floor(idx / 7) + 1, day: (idx % 7) + 1, idx };
}

function dateFor(week, day) {
    return addDays(parseYmd(S.settings.startDate), (week - 1) * 7 + (day - 1));
}

function todayPos() {
    return positionFor(today());
}

function isUnlocked(week, day) {
    const t = todayPos();
    if (week < t.week) return true;
    return week === t.week && day <= t.day;
}

// ---------- content helpers ----------

function weekData(w) {
    return D.weeks[w] || null;
}

function phaseFor(w) {
    return D.phases.find(p => w >= p.weeks[0] && w <= p.weeks[1]) || D.phases[0];
}

function imageFor(w) {
    if (!IMG) return null;
    return IMG.weeks?.[w] || IMG.phases?.[phaseFor(w).phase] || IMG.fallback || null;
}

function cardKey(it) {
    return it.trim().toLowerCase();
}

function allLessonDays() {
    const out = [];
    for (const w of Object.keys(D.weeks).map(Number).sort((a, b) => a - b)) {
        D.weeks[w].days.forEach((_, i) => out.push({ week: w, day: i + 1 }));
    }
    return out;
}

function drillsFor(week, day) {
    const wd = weekData(week);
    if (!wd) return [];
    const days = day ? [day] : wd.days.map((_, i) => i + 1);
    return days.flatMap(d => (wd.days[d - 1]?.drills || []).map((drill, i) => ({ ...drill, id: `${week}-${d}-${i}`, week, day: d })));
}

// ---------- text / answer checking ----------

function escapeHtml(s) {
    return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function md(text) {
    return DOMPurify.sanitize(marked.parse(text || ""));
}

function mdInline(text) {
    return DOMPurify.sanitize(marked.parseInline(text || ""));
}

function normalize(s) {
    return String(s)
        .toLowerCase()
        .replace(/[’‘`´]/g, "'")
        .replace(/[.,!?;:"“”«»¿¡()…]/g, " ")
        .replace(/'\s+/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

function stripAccents(s) {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
        const cur = [i];
        for (let j = 1; j <= n; j++) {
            cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        }
        prev = cur;
    }
    return prev[n];
}

// Accepted answers may be an array and/or contain " / " alternatives.
function expandAnswers(ans) {
    return [].concat(ans).flatMap(a => String(a).split(/\s+\/\s+/));
}

const ARTICLE_RE = /^(il|lo|la|i|gli|le|l'|un|uno|una|un')\s*/;

// → { result: "correct" | "accent" | "typo" | "article" | "wrong", best }
function checkAnswer(input, accepted, { articleMatters = false } = {}) {
    const answers = expandAnswers(accepted);
    const u = normalize(input);
    if (!u) return { result: "wrong", best: answers[0] };
    let best = answers[0], bestDist = Infinity;
    for (const a of answers) {
        const n = normalize(a);
        if (u === n) return { result: "correct", best: a };
        if (stripAccents(u) === stripAccents(n)) return { result: "accent", best: a };
        const dist = levenshtein(stripAccents(u), stripAccents(n));
        if (dist < bestDist) { bestDist = dist; best = a; }
    }
    if (articleMatters) {
        for (const a of answers) {
            const bare = normalize(a).replace(ARTICLE_RE, "");
            if (bare !== normalize(a) && stripAccents(u.replace(ARTICLE_RE, "")) === stripAccents(bare)) {
                return { result: "article", best: a };
            }
        }
    }
    const tolerance = normalize(best).length >= 6 ? 1 : 0;
    if (bestDist <= tolerance) return { result: "typo", best };
    return { result: "wrong", best };
}

const RESULT_TEXT = {
    correct: ["check", "Corretto"],
    accent: ["check", "Correct — watch the accents"],
    typo: ["alert", "Almost — small typo"],
    article: ["alert", "Right word — check the article"],
    wrong: ["x", "Not quite"],
};

function isPass(result) {
    return result === "correct" || result === "accent" || result === "typo";
}

function resultLine(result) {
    const [ic, label] = RESULT_TEXT[result];
    return `<span class="result ${isPass(result) ? "pass" : "fail"}">${icon(ic)}${label}</span>`;
}

// ---------- speech ----------

function initSpeech() {
    if (!("speechSynthesis" in window)) return;
    const load = () => {
        voices = speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().startsWith("it"));
        if (currentView === "settings") render();
    };
    load();
    speechSynthesis.onvoiceschanged = load;
}

function speak(text) {
    if (!("speechSynthesis" in window) || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "it-IT";
    u.rate = S.settings.rate;
    const v = voices.find(v => v.voiceURI === S.settings.voiceURI) || voices[0];
    if (v) u.voice = v;
    speechSynthesis.speak(u);
}

function speakBtn(text, cls = "") {
    return `<button class="speak ${cls}" data-speak="${escapeHtml(text)}" title="Listen" aria-label="Listen">${icon("volume")}</button>`;
}

// ---------- SRS (simplified SM-2) ----------

function addDayWords(week, day) {
    const wd = weekData(week);
    if (!wd) return 0;
    let added = 0;
    for (const v of wd.days[day - 1].vocab) {
        const key = cardKey(v.it);
        if (S.cards[key]) continue;
        S.cards[key] = { it: v.it, en: v.en, ex: v.ex, exEn: v.exEn, note: v.note || "", pos: v.pos || "", week, day,
            due: ymd(today()), interval: 0, ease: 2.5, reps: 0, lapses: 0, added: ymd(today()) };
        added++;
    }
    S.learnedDays[`${week}-${day}`] = ymd(today());
    logToday("newWords", added);
    save();
    return added;
}

function dueCards() {
    const t = ymd(today());
    return Object.entries(S.cards)
        .filter(([, c]) => c.due <= t)
        .sort((a, b) => a[1].due.localeCompare(b[1].due) || a[1].reps - b[1].reps)
        .map(([k]) => k);
}

function nextInterval(c, grade) {
    if (grade === 0) return 0;
    if (grade === 1) return Math.max(1, Math.round(c.interval * 1.2));
    if (grade === 2) return c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.interval * c.ease);
    return c.reps === 0 ? 4 : Math.round(Math.max(c.interval, 1) * c.ease * 1.3);
}

// grade: 0 again, 1 hard, 2 good, 3 easy
function schedule(key, grade) {
    const c = S.cards[key];
    c.interval = nextInterval(c, grade);
    if (grade === 0) {
        c.lapses++;
        c.reps = 0;
        c.ease = Math.max(1.3, c.ease - 0.2);
    } else {
        if (grade === 1) c.ease = Math.max(1.3, c.ease - 0.15);
        if (grade === 3) c.ease += 0.15;
        c.reps++;
    }
    c.due = ymd(addDays(today(), c.interval));
    logToday("reviews");
    if (grade >= 2) logToday("correct");
    save();
}

function intervalLabel(key, grade) {
    const i = nextInterval(S.cards[key], grade);
    if (!i) return "now";
    return i < 30 ? `${i}d` : i < 365 ? `${Math.round(i / 30)}mo` : `${(i / 365).toFixed(1)}y`;
}

// ---------- stats ----------

function streak() {
    let n = 0;
    let d = today();
    const active = x => { const l = S.log[ymd(x)]; return l && (l.reviews || l.newWords || l.drills); };
    if (!active(d)) d = addDays(d, -1); // today not done yet doesn't break the streak
    while (active(d)) { n++; d = addDays(d, -1); }
    return n;
}

function updateTopStats() {
    document.getElementById("statStreak").textContent = streak();
    document.getElementById("statWords").textContent = Object.keys(S.cards).length;
    const due = dueCards().length;
    document.getElementById("statDue").textContent = due;
    document.querySelector(".due-pill").classList.toggle("has-due", due > 0);
    const badge = document.getElementById("tabDue");
    badge.hidden = !due;
    badge.textContent = due;
}

// ---------- routing ----------

function go(view) {
    currentView = view;
    session = null;
    document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("active", b.dataset.view === view));
    render();
    window.scrollTo(0, 0);
}

function render() {
    const el = document.getElementById("view");
    el.className = `view view-${currentView}`;
    ({ today: renderToday, review: renderReview, drills: renderDrills, words: renderWords, plan: renderPlan, settings: renderSettings }[currentView])(el);
}

// ---------- shared pieces ----------

// Stripe-style hero: tilted gradient band behind a headline, with a framed photo.
function hero({ eyebrow, title, sub, actions = "", img, compact = false }) {
    return `<section class="hero ${compact ? "compact" : ""}">
        <div class="hero-bg" aria-hidden="true"><div class="mesh"></div></div>
        <div class="hero-inner">
            <div class="hero-copy">
                ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
                <h1>${title}</h1>
                ${sub ? `<p class="hero-sub">${sub}</p>` : ""}
                ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
            </div>
            ${img ? photo(img, "hero-photo") : ""}
        </div>
    </section>`;
}

function photo(img, cls) {
    return `<figure class="${cls}">
        <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt || "")}" loading="lazy">
        <figcaption>${escapeHtml(img.caption || img.alt || "")}<a href="${escapeHtml(img.page)}" target="_blank" rel="noopener">Photo: ${escapeHtml(img.credit)} · ${escapeHtml(img.license)}</a></figcaption>
    </figure>`;
}

function section(label, title, body, cls = "") {
    return `<section class="block ${cls}">
        ${label ? `<p class="label">${label}</p>` : ""}
        ${title ? `<h2>${title}</h2>` : ""}
        ${body}
    </section>`;
}

function btn(text, attrs = "", cls = "") {
    return `<button class="btn ${cls}" ${attrs}>${text}</button>`;
}

function arrowBtn(text, attrs = "", cls = "primary") {
    return `<button class="btn ${cls} arrow" ${attrs}>${text}${icon("arrow")}</button>`;
}

// ---------- Today ----------

function renderToday(el) {
    const t = todayPos();
    if (!viewing) viewing = t.week >= 1 ? { week: Math.min(t.week, D.TOTAL_WEEKS), day: t.day } : { week: 0, day: 0 };
    const { week, day } = viewing;

    if (week === 0) {
        const daysLeft = -t.idx;
        el.innerHTML = hero({
            eyebrow: "Settimana 0 · Setup",
            title: `Week 1 starts in ${daysLeft} day${daysLeft === 1 ? "" : "s"}.`,
            sub: `Your first lesson opens ${prettyDate(parseYmd(S.settings.startDate))}. Get the books, book a tutor, and you're set.`,
            actions: arrowBtn("Preview Week 1", 'data-act="peek"') + btn("Start today instead", 'data-act="startnow"', "ghost"),
            img: IMG?.fallback,
        }) + `<div class="wrap">${section("Before you start", "Three things to do this week", `
            <ol class="steps">
                <li><b>Get the books.</b> <i>Nuovo Espresso 1</i> and <i>Nuova Grammatica pratica della lingua italiana</i>.</li>
                <li><b>Book a tutor.</b> A trial on italki or Preply for Week 3.</li>
                <li><b>Prime your ear.</b> The free Language Transfer <i>Introduction to Italian</i> audio course.</li>
            </ol>`)}</div>`;
        el.querySelector("[data-act=peek]").onclick = () => { viewing = { week: 1, day: 1, peek: true }; render(); };
        el.querySelector("[data-act=startnow]").onclick = () => { S.settings.startDate = ymd(today()); save(); viewing = null; render(); };
        return;
    }

    if (week > D.TOTAL_WEEKS) {
        el.innerHTML = hero({ eyebrow: "Piano completato", title: "You finished the 96-week plan.", sub: "Keep the reviews going — and go to Italy.", img: IMG?.fallback });
        return;
    }

    const date = dateFor(week, day);
    const plan = D.plan[week];
    const phase = phaseFor(week);
    const wd = weekData(week);
    const isToday = week === t.week && day === t.day;
    const canNext = viewing.peek ? false : isUnlocked(...nextPos(week, day));
    const due = dueCards().length;
    const behind = unlearnedPastDays();
    const dayKind = day <= 5 ? "Lesson" : day === 6 ? "Conversation" : "Review & writing";

    const actions = [];
    if (due && !viewing.peek) actions.push(arrowBtn(`Review ${due} word${due === 1 ? "" : "s"}`, 'data-act="review"'));
    if (wd) actions.push(btn(day <= 5 ? "Jump to today's words" : day === 6 ? "Conversation prompts" : "Weekly quiz", 'data-act="jump"', due ? "ghost" : "primary"));
    if (!isToday) actions.push(btn(`${icon("undo")}Back to today`, 'data-act="today"', "ghost"));

    let html = hero({
        eyebrow: `Settimana ${week} · Giorno ${day} · ${phase.level}`,
        title: escapeHtml(wd?.title || plan.theme),
        sub: `${prettyDate(date)}${isToday ? ' · <span class="today-tag">oggi</span>' : viewing.peek ? " · preview" : ""} — ${dayKind}. ${escapeHtml(wd?.textbook || `Nuovo Espresso · ${plan.lesson}`)}.`,
        actions: actions.join(""),
        img: imageFor(week),
    });

    html += `<div class="wrap">
        <nav class="day-nav">
            <button class="round" data-act="prev" ${week === 1 && day === 1 ? "disabled" : ""} aria-label="Previous day">${icon("left")}</button>
            <div class="week-strip">${[1, 2, 3, 4, 5, 6, 7].map(d => {
                const done = d <= 5 && S.learnedDays[`${week}-${d}`];
                const locked = !viewing.peek && !isUnlocked(week, d);
                const dd = dateFor(week, d);
                return `<button data-day="${d}" class="${d === day ? "cur" : ""} ${done ? "done" : ""}" ${locked ? "disabled" : ""}>
                    <span class="ws-day">${DAY_SHORT[dd.getDay()]}</span><span class="ws-num">${dd.getDate()}</span><span class="ws-mark">${done ? icon("check") : ""}</span></button>`;
            }).join("")}</div>
            <button class="round" data-act="next" ${canNext ? "" : "disabled"} aria-label="Next day">${icon("right")}</button>
        </nav>`;

    if (behind.length && isToday) {
        const first = behind[0];
        html += `<div class="banner">${icon("alert")}<span>You have <b>${behind.length}</b> earlier lesson day${behind.length === 1 ? "" : "s"} whose words aren't in your reviews yet.</span>
            <button class="link" data-act="catchup" data-w="${first.week}" data-d="${first.day}">Go to Week ${first.week}, Day ${first.day}${icon("arrow")}</button></div>`;
    }

    html += `<div class="facts">
        <div><span class="fact-k">Textbook</span><span class="fact-v">${escapeHtml(wd?.textbook || `Nuovo Espresso · ${plan.lesson}`)}</span></div>
        <div><span class="fact-k">Grammar</span><span class="fact-v">${escapeHtml(plan.grammar)}</span></div>
        <div><span class="fact-k">Phase</span><span class="fact-v">${phase.level} · ${escapeHtml(phase.book)}</span></div>
    </div>`;

    if (!wd) {
        html += section("This week", "Plan for the week", `
            <p><b>Grammar:</b> ${escapeHtml(plan.grammar)}</p>
            <p><b>Theme / task:</b> ${escapeHtml(plan.theme)}</p>
            <p class="muted">Detailed daily content for this week hasn't been written yet. Work from <i>${escapeHtml(phase.book)}</i> (${escapeHtml(plan.lesson)}), and keep your reviews going.</p>`);
    } else if (day <= 5) {
        html += renderLessonDay(wd, week, day);
    } else if (day === 6) {
        html += renderSaturday(wd, week);
    } else {
        html += renderSunday(wd, week);
    }
    html += `</div>`;

    el.innerHTML = html;

    const nav = (w, d, peek) => { viewing = { week: w, day: d, peek }; render(); };
    el.querySelector("[data-act=prev]").onclick = () => nav(...prevPos(week, day), viewing.peek);
    el.querySelector("[data-act=next]").onclick = () => nav(...nextPos(week, day));
    el.querySelector("[data-act=today]")?.addEventListener("click", () => { viewing = null; render(); });
    el.querySelector("[data-act=review]")?.addEventListener("click", () => go("review"));
    el.querySelector("[data-act=jump]")?.addEventListener("click", () => el.querySelector("#anchor")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    el.querySelector("[data-act=catchup]")?.addEventListener("click", e => { const b = e.currentTarget; nav(+b.dataset.w, +b.dataset.d); });
    el.querySelectorAll(".week-strip button").forEach(b => b.onclick = () => nav(week, +b.dataset.day, viewing.peek));

    const learnBtn = el.querySelector("[data-act=learn]");
    if (learnBtn) learnBtn.onclick = () => { addDayWords(week, day); render(); };

    if (wd && day <= 5) mountDrillRunner(el.querySelector("#dayDrills"), drillsFor(week, day), { label: "Practice", title: "Today's drills" });
    if (wd && day === 6) el.querySelector("[data-act=weekcram]").onclick = () => startCram(wd.days.flatMap((d, i) => d.vocab.map(v => ({ ...v, week, day: i + 1 }))), `Week ${week} words`);
    if (wd && day === 7) {
        mountDrillRunner(el.querySelector("#weekQuiz"), shuffle(drillsFor(week)), { label: "Domenica · Ripasso", title: "Weekly quiz" });
        const ta = el.querySelector("#writing");
        ta.oninput = () => { S.writing[week] = ta.value; save(); el.querySelector("#wordCount").textContent = wordCount(ta.value); };
    }
}

function renderLessonDay(wd, week, day) {
    const d = wd.days[day - 1];
    const learned = S.learnedDays[`${week}-${day}`];
    let html = "";
    if (day === 1) {
        html += `<section class="block split">
            <div>
                <p class="label">This week</p>
                <h2>Goals</h2>
                <ul class="checks">${wd.goals.map(g => `<li>${icon("check")}<span>${mdInline(g)}</span></li>`).join("")}</ul>
            </div>
            ${wd.spanishNotes?.length ? `<div class="aside-card">
                <p class="label">${icon("globe")}From Spanish</p>
                <ul>${wd.spanishNotes.map(n => `<li>${mdInline(n)}</li>`).join("")}</ul>
            </div>` : ""}
        </section>`;
    }
    html += section("Grammar", escapeHtml(d.title), `<div class="notes">${md(d.notes)}</div>`);
    html += `<section class="block" id="anchor">
        <div class="block-head">
            <div><p class="label">Vocabulary</p><h2>${d.vocab.length} new words</h2></div>
            ${viewing.peek ? "" : learned
                ? `<span class="pill ok">${icon("check")}In your reviews since ${prettyDate(parseYmd(learned))}</span>`
                : arrowBtn("Add to my reviews", 'data-act="learn"')}
        </div>
        <div class="word-grid">${d.vocab.map(vocabCard).join("")}</div>
    </section>`;
    html += `<section class="block" id="dayDrills"></section>`;
    return html;
}

function renderSaturday(wd, week) {
    const n = wd.days.reduce((k, d) => k + d.vocab.length, 0);
    return `<section class="block" id="anchor">
        <p class="label">Sabato · Conversazione</p>
        <h2>Talk it through</h2>
        <p class="lead">Tutor day. Use these prompts in your session — or say them out loud on your own. It still counts.</p>
        <ol class="prompts">${wd.speaking.map(p => `<li><span>${mdInline(p)}</span></li>`).join("")}</ol>
    </section>
    <section class="block cta">
        <div>
            <p class="label">Warm up</p>
            <h2>All ${n} words from Week ${week}</h2>
            <p class="muted">A quick run-through before you talk. Doesn't change your review schedule.</p>
        </div>
        ${arrowBtn(`Practice Week ${week}`, 'data-act="weekcram"')}
    </section>`;
}

function renderSunday(wd, week) {
    const text = S.writing[week] || "";
    return `<section class="block" id="weekQuiz"></section>
    ${section("Scrittura", "Write", `
        <p class="lead">${mdInline(wd.writing)}</p>
        <textarea id="writing" rows="8" placeholder="Scrivi qui…" lang="it">${escapeHtml(text)}</textarea>
        <p class="muted small"><span id="wordCount">${wordCount(text)}</span> words · saved automatically. Bring it to your tutor for corrections.</p>`)}`;
}

function vocabCard(v) {
    return `<article class="word">
        <header>
            <div><h3 lang="it">${escapeHtml(v.it)}</h3><span class="pos">${escapeHtml(v.pos || "")}</span></div>
            ${speakBtn(v.it)}
        </header>
        <p class="w-en">${escapeHtml(v.en)}</p>
        ${v.ex ? `<div class="w-ex"><p lang="it">${escapeHtml(v.ex)}</p><p class="muted">${escapeHtml(v.exEn || "")}</p>${speakBtn(v.ex, "small")}</div>` : ""}
        ${v.note ? `<p class="w-note">${icon("bulb")}<span>${mdInline(v.note)}</span></p>` : ""}
    </article>`;
}

function wordCount(s) {
    return (s.trim().match(/\S+/g) || []).length;
}

function nextPos(w, d) {
    return d < 7 ? [w, d + 1] : [w + 1, 1];
}

function prevPos(w, d) {
    return d > 1 ? [w, d - 1] : [Math.max(1, w - 1), w > 1 ? 7 : 1];
}

function unlearnedPastDays() {
    return allLessonDays().filter(({ week, day }) => isUnlocked(week, day) && !S.learnedDays[`${week}-${day}`]);
}

// ---------- drill runner (translate / fill) ----------

function mountDrillRunner(container, drills, { label = "Practice", title }) {
    if (!container) return;
    const head = `<p class="label">${label}</p><h2>${title}</h2>`;
    if (!drills.length) { container.innerHTML = `${head}<p class="muted">No drills here.</p>`; return; }
    let i = 0;
    let answered = false;
    let first = true; // don't grab focus (and pop the mobile keyboard) on initial page render

    const draw = () => {
        const dr = drills[i];
        const st = S.drills[dr.id]?.status;
        const segs = drills.map((x, j) => `<button class="seg ${S.drills[x.id]?.status || ""} ${j === i ? "cur" : ""}" data-j="${j}" aria-label="Question ${j + 1}"></button>`).join("");
        const question = dr.type === "fill"
            ? `<p class="q-kicker">Fill the gap · <span>${escapeHtml(dr.en)}</span></p><p class="q-main" lang="it">${escapeHtml(dr.prompt).replace("___", '<span class="blank"></span>')}</p>`
            : `<p class="q-kicker">Translate into Italian</p><p class="q-main">${escapeHtml(dr.en)}</p>`;
        container.innerHTML = `
            <div class="block-head"><div>${head}</div><span class="counter">${i + 1}<span>/${drills.length}</span></span></div>
            <div class="segs">${segs}</div>
            <div class="drill">
                ${question}
                ${dr.hint ? `<details class="hint"><summary>Hint</summary>${escapeHtml(dr.hint)}</details>` : ""}
                <form class="answer-row">
                    <input type="text" lang="it" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${dr.type === "fill" ? "Missing word(s)" : "In italiano"}">
                    <button class="btn primary" type="submit">Check</button>
                </form>
                <div class="accent-slot"></div>
                <div class="feedback"></div>
                <div class="drill-nav">
                    ${btn(`${icon("left")}Prev`, `data-act="dprev" ${i === 0 ? "disabled" : ""}`, "ghost")}
                    ${btn(`${icon("eye")}Show answer`, 'data-act="dshow"', "ghost")}
                    ${btn(`${i === drills.length - 1 ? "Finish" : "Next"}${icon("right")}`, 'data-act="dnext"', "ghost")}
                </div>
                ${st ? `<p class="muted small last">Last time: ${st === "correct" ? "correct" : "missed"}</p>` : ""}
            </div>`;
        answered = false;
        const input = container.querySelector("input");
        const submit = container.querySelector("button[type=submit]");
        attachAccentBar(container.querySelector(".accent-slot"), input);
        container.querySelector("form").onsubmit = e => {
            e.preventDefault();
            if (answered) return advance();
            const r = checkAnswer(input.value, dr.it);
            answered = true;
            const full = dr.type === "fill" ? dr.prompt.replace("___", r.best) : r.best;
            showFeedback(container.querySelector(".feedback"), r.result, full, input.value, dr);
            const status = isPass(r.result) ? "correct" : "wrong";
            S.drills[dr.id] = { status, date: ymd(today()) };
            logToday("drills");
            save();
            container.querySelector(`.seg[data-j="${i}"]`).classList.add(status);
            submit.textContent = "Next";
            if (S.settings.autoSpeak) speak(full);
        };
        container.querySelector("[data-act=dshow]").onclick = () => {
            const full = dr.type === "fill" ? dr.prompt.replace("___", expandAnswers(dr.it)[0]) : expandAnswers(dr.it)[0];
            showFeedback(container.querySelector(".feedback"), "shown", full, "", dr);
            answered = true;
            submit.textContent = "Next";
        };
        container.querySelector("[data-act=dprev]").onclick = () => { i--; draw(); };
        container.querySelector("[data-act=dnext]").onclick = advance;
        container.querySelectorAll(".seg").forEach(d => d.onclick = () => { i = +d.dataset.j; draw(); });
        if (!first) input.focus({ preventScroll: true });
        first = false;
    };

    const advance = () => {
        if (i < drills.length - 1) { i++; draw(); return; }
        const right = drills.filter(d => S.drills[d.id]?.status === "correct").length;
        const pct = Math.round(right / drills.length * 100);
        container.innerHTML = `${head}
            <div class="score">
                <div class="ring" style="--p:${pct}"><span>${right}<small>/${drills.length}</small></span></div>
                <div>
                    <h3>${right === drills.length ? "Perfetto." : pct >= 70 ? "Bravo." : "Keep at it."}</h3>
                    <p class="muted">${right === drills.length ? "Every answer right." : pct >= 70 ? "Solid — retry the misses to lock them in." : "Run the missed ones again; repetition is the point."}</p>
                    <div class="row">${btn("Go again", 'data-act="again"', "ghost")}${right < drills.length ? arrowBtn("Retry missed", 'data-act="missed"') : ""}</div>
                </div>
            </div>`;
        container.querySelector("[data-act=again]").onclick = () => { i = 0; draw(); };
        container.querySelector("[data-act=missed]")?.addEventListener("click", () => mountDrillRunner(container, drills.filter(d => S.drills[d.id]?.status !== "correct"), { label, title }));
    };

    draw();
}

function showFeedback(el, result, full, given, dr) {
    const alts = expandAnswers(dr.it);
    el.className = `feedback show ${result === "shown" ? "" : isPass(result) ? "pass" : "fail"}`;
    el.innerHTML = `${result === "shown" ? `<span class="result">${icon("eye")}Answer</span>` : resultLine(result)}
        <p class="answer" lang="it">${escapeHtml(full)}${speakBtn(full, "small")}</p>
        ${result === "wrong" && given ? `<p class="muted small">You wrote: <s>${escapeHtml(given)}</s></p>` : ""}
        ${dr.type === "translate" && alts.length > 1 ? `<details><summary>Also accepted</summary><ul>${alts.filter(a => normalize(a) !== normalize(full)).map(a => `<li lang="it">${escapeHtml(a)}</li>`).join("")}</ul></details>` : ""}`;
}

function attachAccentBar(slot, input) {
    slot.appendChild(document.getElementById("accentBar").content.cloneNode(true));
    slot.querySelectorAll("button").forEach(b => {
        b.onmousedown = e => e.preventDefault();
        b.onclick = () => {
            const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? s;
            input.value = input.value.slice(0, s) + b.textContent + input.value.slice(e);
            input.focus();
            input.setSelectionRange(s + 1, s + 1);
        };
    });
}

// ---------- Review (SRS) ----------

function renderReview(el) {
    if (!session || (session.kind !== "srs" && session.kind !== "cram")) {
        const due = dueCards();
        if (!due.length) {
            const total = Object.keys(S.cards).length;
            const next = Object.values(S.cards).map(c => c.due).sort()[0];
            el.innerHTML = hero({
                eyebrow: "Ripasso",
                title: total ? "Tutto fatto." : "No words yet.",
                sub: total ? `Nothing due right now. Your next review is ${prettyDate(parseYmd(next))}.` : "Add the words from a lesson day on Today, and they'll show up here on a spaced schedule.",
                actions: arrowBtn("Go to today's lesson", 'data-act="today"') + (total ? btn("Practice anyway", 'data-act="cram"', "ghost") : ""),
                img: imageFor(Math.max(1, todayPos().week)),
                compact: true,
            });
            el.querySelector("[data-act=today]").onclick = () => go("today");
            el.querySelector("[data-act=cram]")?.addEventListener("click", () => startCram(shuffle(Object.values(S.cards)).slice(0, 20), "Free practice"));
            return;
        }
        session = { kind: "srs", queue: due.slice(0, S.settings.maxReviews), done: 0, right: 0 };
    }
    drawCard(el);
}

function startCram(items, title) {
    currentView = "review";
    document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("active", b.dataset.view === "review"));
    session = { kind: "cram", title, items: shuffle(items.slice()), i: 0, right: 0 };
    const el = document.getElementById("view");
    el.className = "view view-review";
    drawCard(el);
    window.scrollTo(0, 0);
}

function drawCard(el) {
    let card, key, title, done, total;
    if (session.kind === "srs") {
        if (!session.queue.length) return finishSession(el);
        key = session.queue[0];
        card = S.cards[key];
        title = "Daily review";
        done = session.done;
        total = session.done + session.queue.length;
    } else {
        if (session.i >= session.items.length) return finishSession(el);
        card = session.items[session.i];
        title = session.title;
        done = session.i;
        total = session.items.length;
    }

    const mode = S.settings.reviewMode === "mixed"
        ? (session.kind === "cram" ? (Math.random() < 0.5 ? "recognize" : "produce")
            : card.reps < 1 || Math.random() < 0.4 ? "recognize" : "produce")
        : S.settings.reviewMode;
    const img = imageFor(card.week);

    el.innerHTML = `
        <div class="review-stage">
            <div class="hero-bg" aria-hidden="true"><div class="mesh"></div></div>
            <div class="review-inner">
                <div class="review-top">
                    <div><p class="eyebrow">${escapeHtml(title)}</p><p class="review-count">${done} of ${total}</p></div>
                    <button class="btn ghost on-dark" data-act="quit">End session</button>
                </div>
                <div class="progress"><span style="width:${total ? done / total * 100 : 0}%"></span></div>
                <article class="flash ${mode}">
                    ${img ? `<div class="flash-img" style="background-image:url('${escapeHtml(img.src)}')"></div>` : ""}
                    <div class="flash-body">
                        <p class="label">${mode === "recognize" ? "What does this mean?" : "Say it in Italian"}</p>
                        <p class="flash-front" ${mode === "recognize" ? 'lang="it"' : ""}>${escapeHtml(mode === "recognize" ? card.it : card.en)}</p>
                        ${mode === "recognize" ? speakBtn(card.it, "large") : `<p class="muted small">${escapeHtml(card.pos || "")}${/noun/.test(card.pos || "") ? " · include the article" : ""}</p>`}
                        ${mode === "produce" ? `<form class="answer-row"><input type="text" lang="it" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="In italiano"><button class="btn primary" type="submit">Check</button></form><div class="accent-slot"></div>` : arrowBtn("Show answer", 'data-act="flip"', "primary wide")}
                        <div class="flash-back" hidden></div>
                        <div class="grades" hidden></div>
                    </div>
                </article>
            </div>
        </div>`;

    const back = el.querySelector(".flash-back");
    const reveal = result => {
        back.hidden = false;
        back.innerHTML = `
            ${result ? resultLine(result) : ""}
            <p class="flash-answer"><span lang="it">${escapeHtml(card.it)}</span>${mode === "produce" ? speakBtn(card.it, "small") : ""}</p>
            <p class="flash-en">${escapeHtml(card.en)}</p>
            ${card.ex ? `<div class="w-ex"><p lang="it">${escapeHtml(card.ex)}</p><p class="muted">${escapeHtml(card.exEn || "")}</p>${speakBtn(card.ex, "small")}</div>` : ""}
            ${card.note ? `<p class="w-note">${icon("bulb")}<span>${mdInline(card.note)}</span></p>` : ""}
            <p class="muted small">Week ${card.week} · Day ${card.day}</p>`;
        el.querySelector("[data-act=flip]")?.remove();
        const g = el.querySelector(".grades");
        g.hidden = false;
        if (session.kind === "srs") {
            const suggested = result ? (isPass(result) ? (result === "correct" ? 2 : 1) : 0) : null;
            g.innerHTML = ["Again", "Hard", "Good", "Easy"].map((n, i) =>
                `<button data-g="${i}" class="g${i} ${suggested === i ? "suggested" : ""}"><span>${n}</span><small>${intervalLabel(key, i)}</small></button>`).join("");
            g.querySelectorAll("button").forEach(b => b.onclick = () => gradeSrs(el, key, +b.dataset.g));
        } else {
            g.innerHTML = `<button class="g0" data-ok="0"><span>Missed it</span></button><button class="g2" data-ok="1"><span>Got it</span></button>`;
            g.querySelectorAll("button").forEach(b => b.onclick = () => {
                if (b.dataset.ok === "1") session.right++;
                else session.items.push(card); // see it again at the end
                session.i++;
                drawCard(el);
            });
        }
        if (S.settings.autoSpeak) speak(card.it);
        g.querySelector(".suggested, .g2")?.focus();
    };

    el.querySelector("[data-act=flip]")?.addEventListener("click", () => reveal(null));
    const form = el.querySelector("form");
    if (form) {
        const input = form.querySelector("input");
        attachAccentBar(el.querySelector(".accent-slot"), input);
        form.onsubmit = e => {
            e.preventDefault();
            if (!back.hidden) return;
            input.disabled = true;
            reveal(checkAnswer(input.value, card.it, { articleMatters: true }).result);
        };
        input.focus();
    } else {
        el.querySelector("[data-act=flip]").focus();
    }
    el.querySelector("[data-act=quit]").onclick = () => { session = null; go("today"); };
}

function gradeSrs(el, key, grade) {
    schedule(key, grade);
    session.queue.shift();
    session.done++;
    if (grade === 0) session.queue.push(key); // relearn within this session
    else session.right++;
    drawCard(el);
}

function finishSession(el) {
    const isSrs = session.kind === "srs";
    el.innerHTML = hero({
        eyebrow: "Finito",
        title: isSrs ? `${session.done} reviews done.` : `${session.right} words recalled.`,
        sub: isSrs ? "That's today's spaced repetition. The next batch is scheduled automatically." : "Nice warm-up. Your review schedule is unchanged.",
        actions: arrowBtn("Back to today", 'data-act="today"'),
        img: imageFor(Math.max(1, todayPos().week)),
        compact: true,
    });
    el.querySelector("[data-act=today]").onclick = () => go("today");
    session = null;
}

// ---------- Drills tab ----------

function renderDrills(el) {
    const t = todayPos();
    const preStart = t.week < 1; // before Week 1, let Week 1 be previewed
    const open = d => preStart || isUnlocked(d.week, d.day);
    const weeks = Object.keys(D.weeks).map(Number).sort((a, b) => a - b).filter(w => w <= t.week || (preStart && w === 1));
    const sel = session?.kind === "drillpick" ? session : { kind: "drillpick", week: Math.min(Math.max(t.week, 1), weeks.at(-1) || 1), day: 0 };
    session = sel;
    el.innerHTML = hero({ eyebrow: "Esercizi", title: "Drills", sub: "Re-run any past lesson's translations and fill-in-the-gaps, or just the ones you missed.", compact: true })
        + `<div class="wrap">
        <section class="block controls">
            <label><span>Week</span><select id="dWeek">${weeks.map(w => `<option value="${w}" ${w === sel.week ? "selected" : ""}>Week ${w} · ${escapeHtml(D.weeks[w].title)}</option>`).join("")}</select></label>
            <label><span>Day</span><select id="dDay"><option value="0">Whole week</option>${[1, 2, 3, 4, 5].map(d => `<option value="${d}" ${d === sel.day ? "selected" : ""}>Day ${d}</option>`).join("")}</select></label>
            <div class="row">${btn("Only ones I missed", 'data-act="missed"', "ghost")}${btn("Mixed: 20 from everything", 'data-act="mixed"', "ghost")}</div>
        </section>
        <section class="block" id="drillBox"></section></div>`;
    const box = el.querySelector("#drillBox");
    const run = (list, title = "Drills") => mountDrillRunner(box, list, { label: "Practice", title });
    const load = () => {
        sel.week = +el.querySelector("#dWeek").value;
        sel.day = +el.querySelector("#dDay").value;
        run(drillsFor(sel.week, sel.day || null).filter(open), `Week ${sel.week}${sel.day ? `, Day ${sel.day}` : ""}`);
    };
    el.querySelector("#dWeek").onchange = load;
    el.querySelector("#dDay").onchange = load;
    el.querySelector("[data-act=missed]").onclick = () => run(shuffle(weeks.flatMap(w => drillsFor(w)).filter(d => S.drills[d.id]?.status === "wrong")), "Missed drills");
    el.querySelector("[data-act=mixed]").onclick = () => run(shuffle(weeks.flatMap(w => drillsFor(w)).filter(open)).slice(0, 20), "Mixed review");
    load();
}

// ---------- Words tab ----------

function renderWords(el) {
    const cards = Object.values(S.cards).sort((a, b) => a.week - b.week || a.day - b.day);
    const t = ymd(today());
    const mature = cards.filter(c => c.interval >= 21).length;
    el.innerHTML = hero({ eyebrow: "Vocabolario", title: "My words", sub: "Everything you've added to your reviews, with when you'll see it next.", compact: true })
        + `<div class="wrap">
        <div class="facts stats3">
            <div><span class="fact-n">${cards.length}</span><span class="fact-k">Words learned</span></div>
            <div><span class="fact-n">${cards.filter(c => c.due <= t).length}</span><span class="fact-k">Due today</span></div>
            <div><span class="fact-n">${mature}</span><span class="fact-k">Long-term (21d+)</span></div>
        </div>
        <section class="block">
            <input type="search" id="wSearch" placeholder="Search Italian or English">
            <div id="wList"></div>
        </section></div>`;
    const list = el.querySelector("#wList");
    const draw = q => {
        q = stripAccents(normalize(q || ""));
        const rows = cards.filter(c => !q || stripAccents(normalize(c.it + " " + c.en)).includes(q));
        list.innerHTML = rows.length ? `<table class="words"><thead><tr><th></th><th>Italiano</th><th>English</th><th>Week</th><th>Next</th></tr></thead><tbody>
            ${rows.map(c => `<tr><td>${speakBtn(c.it, "small")}</td><td lang="it"><b>${escapeHtml(c.it)}</b></td><td>${escapeHtml(c.en)}</td><td class="num">${c.week}</td><td class="num">${c.due <= t ? '<span class="pill due">due</span>' : escapeHtml(c.due.slice(5).replace("-", "/"))}</td></tr>`).join("")}
            </tbody></table>` : `<p class="muted">${cards.length ? "No matches." : "No words yet — add them from a lesson day."}</p>`;
    };
    el.querySelector("#wSearch").oninput = e => draw(e.target.value);
    draw("");
}

// ---------- Plan tab ----------

function renderPlan(el) {
    const t = todayPos();
    el.innerHTML = hero({ eyebrow: "Il piano", title: "96 weeks to fluent.", sub: "Five phases, one textbook level each — A1 to C1. Tap any week you've reached to open it.", compact: true })
        + `<div class="wrap">${D.phases.map(p => {
            const img = IMG?.phases?.[p.phase] || IMG?.weeks?.[p.weeks[0]] || IMG?.fallback;
            return `<section class="phase">
                ${img ? `<div class="phase-banner" style="background-image:url('${escapeHtml(img.src)}')">
                    <div class="phase-banner-copy"><p class="eyebrow on-photo">Phase ${p.phase} · Weeks ${p.weeks[0]}–${p.weeks[1]}</p><h2>${p.level} · ${escapeHtml(p.book)}</h2><p>Exit: ${escapeHtml(p.exit)}</p></div>
                </div>` : `<h2>Phase ${p.phase} · ${p.level}</h2>`}
                <ol class="plan-list">${range(p.weeks[0], p.weeks[1]).map(w => {
                    const pl = D.plan[w];
                    const state = w < t.week ? "past" : w === t.week ? "current" : "future";
                    const learned = [1, 2, 3, 4, 5].filter(d => S.learnedDays[`${w}-${d}`]).length;
                    return `<li class="${state}" data-w="${w}">
                        <span class="wk">${w}</span>
                        <span class="pl-body"><b>${escapeHtml(D.weeks[w]?.title || pl.theme)}</b><span>${escapeHtml(pl.lesson)} · ${escapeHtml(pl.grammar)}</span></span>
                        <span class="pl-flags">${state === "current" ? '<span class="pill">This week</span>' : ""}${D.weeks[w] && learned ? `<span class="pill ok">${learned}/5</span>` : ""}${icon("right")}</span>
                    </li>`;
                }).join("")}</ol>
            </section>`;
        }).join("")}</div>`;
    el.querySelectorAll(".plan-list li").forEach(li => li.onclick = () => {
        const w = +li.dataset.w;
        viewing = isUnlocked(w, 1) ? { week: w, day: w === t.week ? t.day : 1 } : { week: w, day: 1, peek: true };
        go("today");
    });
}

function range(a, b) {
    return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

// ---------- Settings ----------

function renderSettings(el) {
    const st = S.settings;
    const t = todayPos();
    el.innerHTML = hero({ eyebrow: "Impostazioni", title: "Settings", sub: "Schedule, audio, review style, and moving your progress between devices.", compact: true })
        + `<div class="wrap settings">
        ${section("Schedule", "Where you are in the plan", `
            <div class="field"><label for="sStart">Week 1 starts on</label><input type="date" id="sStart" value="${st.startDate}"></div>
            <p class="muted small">Today is ${t.week >= 1 ? `Week ${t.week}, Day ${t.day}` : "before Week 1"}.</p>
            <p>Fell behind or want to jump ahead? Set where you are today:</p>
            <div class="row">
                <div class="field inline"><label for="sWeek">Week</label><input type="number" id="sWeek" min="1" max="${D.TOTAL_WEEKS}" value="${Math.max(1, t.week)}"></div>
                <div class="field inline"><label for="sDay">Day</label><input type="number" id="sDay" min="1" max="7" value="${Math.max(1, t.day)}"></div>
                ${btn("Set", 'data-act="setpos"', "ghost")}
            </div>`)}
        ${section("Audio", "Pronunciation", `
            ${voices.length ? `<div class="field"><label for="sVoice">Voice</label><select id="sVoice">${voices.map(v => `<option value="${escapeHtml(v.voiceURI)}" ${v.voiceURI === st.voiceURI ? "selected" : ""}>${escapeHtml(v.name)}</option>`).join("")}</select></div>`
                : `<p class="muted">No Italian voice found on this device. On iPhone: Settings → Accessibility → Spoken Content → Voices → Italian. On Mac: System Settings → Accessibility → Spoken Content.</p>`}
            <div class="field"><label for="sRate">Speed <span id="sRateV">${st.rate}×</span></label><input type="range" id="sRate" min="0.6" max="1.2" step="0.05" value="${st.rate}"></div>
            <label class="check"><input type="checkbox" id="sAuto" ${st.autoSpeak ? "checked" : ""}><span>Read answers aloud automatically (off: audio only plays when you tap a speaker button)</span></label>
            ${btn(`${icon("volume")}Test: “Ciao, come stai?”`, 'data-act="testvoice"', "ghost")}`)}
        ${section("Reviews", "How cards are shown", `
            <div class="field"><label for="sMode">Card direction</label><select id="sMode">
                <option value="mixed" ${st.reviewMode === "mixed" ? "selected" : ""}>Mixed — recognize new words, then type them</option>
                <option value="recognize" ${st.reviewMode === "recognize" ? "selected" : ""}>Italian → English (flip)</option>
                <option value="produce" ${st.reviewMode === "produce" ? "selected" : ""}>English → Italian (type)</option>
            </select></div>
            <div class="field"><label for="sMax">Max reviews per session</label><input type="number" id="sMax" min="10" max="500" value="${st.maxReviews}"></div>`)}
        ${section("Progress", "Your data", `
            <p class="muted">Progress is saved in this browser. To move it to another device, export here and import there.</p>
            <div class="row">
                ${btn("Export progress", 'data-act="export"', "ghost")}
                <label class="btn ghost">Import progress<input type="file" id="sImport" accept="application/json" hidden></label>
                ${btn("Reset everything", 'data-act="reset"', "danger")}
            </div>`)}
        ${IMG?.all?.length ? section("Credits", "Photography", `<p class="muted small">Photos from Wikimedia Commons, used under their licenses.</p>
            <ul class="credits">${IMG.all.map(i => `<li><a href="${escapeHtml(i.page)}" target="_blank" rel="noopener">${escapeHtml(i.caption || i.alt)}</a> — ${escapeHtml(i.credit)}, ${escapeHtml(i.license)}</li>`).join("")}</ul>`) : ""}
    </div>`;

    el.querySelector("#sStart").onchange = e => { if (e.target.value) { st.startDate = e.target.value; save(); viewing = null; render(); } };
    el.querySelector("[data-act=setpos]").onclick = () => {
        const w = clamp(+el.querySelector("#sWeek").value, 1, D.TOTAL_WEEKS), d = clamp(+el.querySelector("#sDay").value, 1, 7);
        st.startDate = ymd(addDays(today(), -((w - 1) * 7 + (d - 1))));
        save(); viewing = null; render();
    };
    el.querySelector("#sVoice")?.addEventListener("change", e => { st.voiceURI = e.target.value; save(); });
    el.querySelector("#sRate").oninput = e => { st.rate = +e.target.value; el.querySelector("#sRateV").textContent = `${st.rate}×`; save(); };
    el.querySelector("#sAuto").onchange = e => { st.autoSpeak = e.target.checked; save(); };
    el.querySelector("[data-act=testvoice]").onclick = () => speak("Ciao, come stai?");
    el.querySelector("#sMode").onchange = e => { st.reviewMode = e.target.value; save(); };
    el.querySelector("#sMax").onchange = e => { st.maxReviews = clamp(+e.target.value, 10, 500); save(); };
    el.querySelector("[data-act=export]").onclick = () => {
        const blob = new Blob([JSON.stringify(S, null, 1)], { type: "application/json" });
        const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `italiano-progress-${ymd(today())}.json` });
        a.click();
        URL.revokeObjectURL(a.href);
    };
    el.querySelector("#sImport").onchange = async e => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const data = JSON.parse(await file.text());
            if (!data.cards || !data.settings) throw new Error("Not an Italiano progress file");
            if (!confirm(`Replace this device's progress with the file (${Object.keys(data.cards).length} words)?`)) return;
            localStorage.setItem(STORE_KEY, JSON.stringify(data));
            S = loadState(); save(); viewing = null; go("today");
        } catch (err) {
            alert(`Import failed: ${err.message}`);
        }
    };
    el.querySelector("[data-act=reset]").onclick = () => {
        if (!confirm("Delete all progress on this device? Export first if you want a backup.")) return;
        S = defaultState(); save(); viewing = null; go("today");
    };
}

function clamp(n, a, b) {
    return Math.min(b, Math.max(a, n || a));
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ---------- boot ----------

function loadWeekScripts() {
    const weeks = window.ITALIANO_AVAILABLE_WEEKS || [];
    return Promise.all(weeks.map(w => new Promise(res => {
        const s = document.createElement("script");
        s.src = `data/week-${String(w).padStart(2, "0")}.js`;
        s.onload = res;
        s.onerror = () => { console.warn(`Missing data for week ${w}`); res(); };
        document.head.appendChild(s);
    })));
}

async function init() {
    await loadWeekScripts();
    D = window.ITALIANO;
    IMG = window.ITALIANO_IMAGES || null;
    S = loadState();
    hydrateIcons();
    initSpeech();
    document.querySelectorAll("[data-view]").forEach(b => b.onclick = () => { if (b.dataset.view === "today") viewing = null; go(b.dataset.view); });
    document.addEventListener("click", e => {
        const b = e.target.closest("[data-speak]");
        if (b) { e.preventDefault(); speak(b.dataset.speak); }
    });
    // Roll over to the new day if the tab stays open past midnight.
    let lastDay = ymd(today());
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible" && ymd(today()) !== lastDay) { lastDay = ymd(today()); viewing = null; session = null; render(); updateTopStats(); }
    });
    updateTopStats();
    render();
}

document.addEventListener("DOMContentLoaded", init);
