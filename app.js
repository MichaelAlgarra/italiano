/* Italiano — daily study app (static, GitHub Pages).
 * Date → plan week/day → lesson. Progress (SRS cards, drill results, settings) lives in localStorage;
 * Settings has export/import to move it between devices. */

const STORE_KEY = "italiano.v1";
const DEFAULT_START = "2026-10-26"; // Week 1, Day 1 (Monday)
const DAY_NAMES = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
const MONTHS = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

let D;              // window.ITALIANO
let S;              // persisted state
let viewing = null; // { week, day } currently shown on Today
let currentView = "today";
let session = null; // active review / drill session
let voices = [];

// ---------- persistence ----------

function defaultState() {
    return {
        settings: { startDate: DEFAULT_START, voiceURI: "", autoplay: true, rate: 0.9, reviewMode: "mixed", maxReviews: 100 },
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
    return D.phases.find(p => w >= p.weeks[0] && w <= p.weeks[1]);
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
    correct: ["✅", "Corretto!"],
    accent: ["✅", "Correct — but watch the accents"],
    typo: ["🟡", "Almost — small typo"],
    article: ["🟡", "Right word — check the article"],
    wrong: ["❌", "Not quite"],
};

function isPass(result) {
    return result === "correct" || result === "accent" || result === "typo";
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

function speakBtn(text) {
    return `<button class="speak" data-speak="${escapeHtml(text)}" title="Listen">🔊</button>`;
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

// grade: 0 again, 1 hard, 2 good, 3 easy
function schedule(key, grade) {
    const c = S.cards[key];
    if (grade === 0) {
        c.lapses++;
        c.reps = 0;
        c.interval = 0;
        c.ease = Math.max(1.3, c.ease - 0.2);
    } else {
        if (grade === 1) {
            c.interval = Math.max(1, Math.round(c.interval * 1.2));
            c.ease = Math.max(1.3, c.ease - 0.15);
        } else if (grade === 2) {
            c.interval = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.interval * c.ease);
        } else {
            c.interval = c.reps === 0 ? 4 : Math.round(Math.max(c.interval, 1) * c.ease * 1.3);
            c.ease += 0.15;
        }
        c.reps++;
    }
    c.due = ymd(addDays(today(), c.interval));
    logToday("reviews");
    if (grade >= 2) logToday("correct");
    save();
}

function intervalLabel(key, grade) {
    const c = S.cards[key];
    if (grade === 0) return "now";
    let i;
    if (grade === 1) i = Math.max(1, Math.round(c.interval * 1.2));
    else if (grade === 2) i = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.interval * c.ease);
    else i = c.reps === 0 ? 4 : Math.round(Math.max(c.interval, 1) * c.ease * 1.3);
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
    const el = document.getElementById("statDue");
    el.textContent = due;
    el.parentElement.classList.toggle("has-due", due > 0);
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
    ({ today: renderToday, review: renderReview, drills: renderDrills, words: renderWords, plan: renderPlan, settings: renderSettings }[currentView])(el);
}

// ---------- Today ----------

function renderToday(el) {
    const t = todayPos();
    if (!viewing) viewing = t.week >= 1 ? { week: Math.min(t.week, D.TOTAL_WEEKS), day: t.day } : { week: 0, day: 0 };
    const { week, day } = viewing;

    if (week === 0) {
        const daysLeft = -t.idx;
        el.innerHTML = `
            <section class="card hero">
                <p class="eyebrow">Settimana 0 · Setup</p>
                <h1>Week 1 starts in ${daysLeft} day${daysLeft === 1 ? "" : "s"}</h1>
                <p>${prettyDate(parseYmd(S.settings.startDate))}. Before then:</p>
                <ul>
                    <li>Get <i>Nuovo Espresso 1</i> and <i>Nuova Grammatica pratica</i></li>
                    <li>Book a trial tutor (italki / Preply) for Week 3</li>
                    <li>Try the free Language Transfer <i>Introduction to Italian</i> audio</li>
                </ul>
                <div class="row">
                    <button class="primary" data-act="peek">Preview Week 1 →</button>
                    <button data-act="startnow">Start today instead</button>
                </div>
            </section>`;
        el.querySelector("[data-act=peek]").onclick = () => { viewing = { week: 1, day: 1, peek: true }; render(); };
        el.querySelector("[data-act=startnow]").onclick = () => { S.settings.startDate = ymd(today()); save(); viewing = null; render(); };
        return;
    }

    if (week > D.TOTAL_WEEKS) {
        el.innerHTML = `<section class="card hero"><h1>🎉 Piano completato!</h1><p>You've reached the end of the 96-week plan. Keep the reviews going.</p></section>`;
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

    let html = `
        <section class="day-nav">
            <button data-act="prev" ${week === 1 && day === 1 ? "disabled" : ""}>‹</button>
            <div class="day-title">
                <p class="eyebrow">Settimana ${week} · Giorno ${day} · ${phase.level}</p>
                <h1>${escapeHtml(wd?.title || plan.theme)}</h1>
                <p class="muted">${prettyDate(date)}${isToday ? ' · <b class="today-tag">oggi</b>' : viewing.peek ? " · preview" : ""}</p>
            </div>
            <button data-act="next" ${canNext ? "" : "disabled"}>›</button>
        </section>
        ${isToday ? "" : `<button class="link center" data-act="today">↩ Back to today</button>`}
        <div class="week-strip">${[1, 2, 3, 4, 5, 6, 7].map(d => {
            const done = d <= 5 ? S.learnedDays[`${week}-${d}`] : false;
            const locked = !viewing.peek && !isUnlocked(week, d);
            return `<button data-day="${d}" class="${d === day ? "cur" : ""} ${done ? "done" : ""}" ${locked ? "disabled" : ""}>
                ${["L", "M", "M", "G", "V", "S", "D"][d - 1]}<small>${d <= 5 ? (done ? "✓" : "•") : d === 6 ? "💬" : "📝"}</small></button>`;
        }).join("")}</div>`;

    if (due && !viewing.peek) {
        html += `<section class="card due-card"><div><b>${due}</b> review${due === 1 ? "" : "s"} due</div><button class="primary" data-act="review">Start review →</button></section>`;
    }
    if (behind.length && isToday) {
        const first = behind[0];
        html += `<section class="card warn">You have <b>${behind.length}</b> earlier lesson day${behind.length === 1 ? "" : "s"} whose words you haven't added yet.
            <button class="link" data-act="catchup" data-w="${first.week}" data-d="${first.day}">Go to Week ${first.week} · Day ${first.day}</button></section>`;
    }

    html += `<section class="card meta"><span>📘 ${escapeHtml(wd?.textbook || `Nuovo Espresso · ${plan.lesson}`)}</span><span>🧩 ${escapeHtml(plan.grammar)}</span></section>`;

    if (!wd) {
        html += `<section class="card">
            <h2>Plan for this week</h2>
            <p><b>Grammar:</b> ${escapeHtml(plan.grammar)}</p>
            <p><b>Theme / task:</b> ${escapeHtml(plan.theme)}</p>
            <p class="muted">Detailed daily content for this week hasn't been written yet. Work from <i>${escapeHtml(phase.book)}</i> (${escapeHtml(plan.lesson)}), and keep your reviews going.</p>
        </section>`;
    } else if (day <= 5) {
        html += renderLessonDay(wd, week, day);
    } else if (day === 6) {
        html += renderSaturday(wd, week);
    } else {
        html += renderSunday(wd, week);
    }

    el.innerHTML = html;

    el.querySelector("[data-act=prev]").onclick = () => { viewing = { week: prevPos(week, day)[0], day: prevPos(week, day)[1], peek: viewing.peek }; render(); };
    el.querySelector("[data-act=next]").onclick = () => { const [w, d] = nextPos(week, day); viewing = { week: w, day: d }; render(); };
    el.querySelector("[data-act=today]")?.addEventListener("click", () => { viewing = null; render(); });
    el.querySelector("[data-act=review]")?.addEventListener("click", () => go("review"));
    el.querySelector("[data-act=catchup]")?.addEventListener("click", e => { viewing = { week: +e.target.dataset.w, day: +e.target.dataset.d }; render(); });
    el.querySelectorAll(".week-strip button").forEach(b => b.onclick = () => { viewing = { week, day: +b.dataset.day, peek: viewing.peek }; render(); });

    const learnBtn = el.querySelector("[data-act=learn]");
    if (learnBtn) learnBtn.onclick = () => { addDayWords(week, day); render(); };

    if (wd && day <= 5) mountDrillRunner(el.querySelector("#dayDrills"), drillsFor(week, day), { title: "Today's drills" });
    if (wd && day === 6) el.querySelector("[data-act=weekcram]").onclick = () => startCram(wd.days.flatMap((d, i) => d.vocab.map(v => ({ ...v, week, day: i + 1 }))), `Week ${week} words`);
    if (wd && day === 7) {
        mountDrillRunner(el.querySelector("#weekQuiz"), shuffle(drillsFor(week)), { title: "Weekly quiz" });
        const ta = el.querySelector("#writing");
        ta.oninput = () => { S.writing[week] = ta.value; save(); el.querySelector("#wordCount").textContent = wordCount(ta.value); };
    }
}

function renderLessonDay(wd, week, day) {
    const d = wd.days[day - 1];
    const learned = S.learnedDays[`${week}-${day}`];
    const locked = viewing.peek;
    let html = "";
    if (day === 1) {
        html += `<section class="card">
            <h2>This week's goals</h2>
            <ul>${wd.goals.map(g => `<li>${mdInline(g)}</li>`).join("")}</ul>
            ${wd.spanishNotes?.length ? `<div class="spanish"><h3>🇪🇸 From Spanish</h3><ul>${wd.spanishNotes.map(n => `<li>${mdInline(n)}</li>`).join("")}</ul></div>` : ""}
        </section>`;
    }
    html += `<section class="card"><h2>📖 ${escapeHtml(d.title)}</h2><div class="notes">${md(d.notes)}</div></section>`;
    html += `<section class="card">
        <h2>🆕 New words</h2>
        <ul class="vocab-list">${d.vocab.map(v => vocabItem(v)).join("")}</ul>
        ${locked ? "" : learned
            ? `<p class="ok">✓ Added to your reviews on ${prettyDate(parseYmd(learned))}</p>`
            : `<button class="primary wide" data-act="learn">Add these ${d.vocab.length} words to my reviews</button>`}
    </section>`;
    html += `<section class="card" id="dayDrills"></section>`;
    return html;
}

function renderSaturday(wd, week) {
    return `<section class="card">
        <h2>💬 Sabato — Conversazione</h2>
        <p>Tutor day. Use these prompts in your session (or talk to yourself out loud — it still counts).</p>
        <ol class="prompts">${wd.speaking.map(p => `<li>${mdInline(p)}</li>`).join("")}</ol>
    </section>
    <section class="card">
        <h2>Warm up: this week's words</h2>
        <p class="muted">Quick practice of all ${wd.days.reduce((n, d) => n + d.vocab.length, 0)} words from Week ${week}. Doesn't affect your review schedule.</p>
        <button class="primary wide" data-act="weekcram">Practice Week ${week} words</button>
    </section>`;
}

function renderSunday(wd, week) {
    const text = S.writing[week] || "";
    return `<section class="card">
        <h2>📝 Domenica — Ripasso</h2>
        <p>Review day: run the weekly quiz, then write.</p>
    </section>
    <section class="card" id="weekQuiz"></section>
    <section class="card">
        <h2>✍️ Writing</h2>
        <p>${mdInline(wd.writing)}</p>
        <textarea id="writing" rows="8" placeholder="Scrivi qui…" lang="it">${escapeHtml(text)}</textarea>
        <p class="muted"><span id="wordCount">${wordCount(text)}</span> words · saved automatically. Bring it to your tutor for corrections.</p>
    </section>`;
}

function vocabItem(v) {
    return `<li>
        <div class="v-main">${speakBtn(v.it)}<b lang="it">${escapeHtml(v.it)}</b> <span class="pos">${escapeHtml(v.pos || "")}</span><span class="v-en">${escapeHtml(v.en)}</span></div>
        ${v.ex ? `<div class="v-ex">${speakBtn(v.ex)}<span lang="it">${escapeHtml(v.ex)}</span><br><span class="muted">${escapeHtml(v.exEn || "")}</span></div>` : ""}
        ${v.note ? `<div class="v-note">💡 ${mdInline(v.note)}</div>` : ""}
    </li>`;
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

function mountDrillRunner(container, drills, { title }) {
    if (!container) return;
    if (!drills.length) { container.innerHTML = `<h2>${title}</h2><p class="muted">No drills here.</p>`; return; }
    let i = 0;
    let answered = false;
    let first = true; // don't grab focus (and pop the mobile keyboard) on initial page render

    const draw = () => {
        const dr = drills[i];
        const st = S.drills[dr.id]?.status;
        const dots = drills.map((x, j) => `<span class="dot ${S.drills[x.id]?.status || ""} ${j === i ? "cur" : ""}" data-j="${j}"></span>`).join("");
        const question = dr.type === "fill"
            ? `<p class="q-en muted">${escapeHtml(dr.en)}</p><p class="q-it" lang="it">${escapeHtml(dr.prompt).replace("___", '<span class="blank">___</span>')}</p>`
            : `<p class="q-label">Translate into Italian:</p><p class="q-it">${escapeHtml(dr.en)}</p>`;
        container.innerHTML = `
            <div class="drill-head"><h2>${title}</h2><span class="muted">${i + 1} / ${drills.length}</span></div>
            <div class="dots">${dots}</div>
            <div class="drill">
                ${question}
                ${dr.hint ? `<details class="hint"><summary>Hint</summary>${escapeHtml(dr.hint)}</details>` : ""}
                <form class="answer-row">
                    <input type="text" lang="it" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${dr.type === "fill" ? "Missing word(s)…" : "In italiano…"}">
                    <button class="primary" type="submit">Check</button>
                </form>
                <div class="accent-slot"></div>
                <div class="feedback"></div>
                <div class="row drill-nav">
                    <button data-act="dprev" ${i === 0 ? "disabled" : ""}>← Prev</button>
                    <button data-act="dshow">Show answer</button>
                    <button data-act="dnext">${i === drills.length - 1 ? "Finish" : "Next →"}</button>
                </div>
                ${st ? `<p class="muted small">Last time: ${st === "correct" ? "✅ correct" : "❌ missed"}</p>` : ""}
            </div>`;
        answered = false;
        const input = container.querySelector("input");
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
            container.querySelector(`.dot[data-j="${i}"]`).classList.add(status);
            container.querySelector("button[type=submit]").textContent = "Next →";
            if (S.settings.autoplay) speak(full);
        };
        container.querySelector("[data-act=dshow]").onclick = () => {
            const full = dr.type === "fill" ? dr.prompt.replace("___", expandAnswers(dr.it)[0]) : expandAnswers(dr.it)[0];
            showFeedback(container.querySelector(".feedback"), "shown", full, "", dr);
            answered = true;
            container.querySelector("button[type=submit]").textContent = "Next →";
        };
        container.querySelector("[data-act=dprev]").onclick = () => { i--; draw(); };
        container.querySelector("[data-act=dnext]").onclick = advance;
        container.querySelectorAll(".dot").forEach(d => d.onclick = () => { i = +d.dataset.j; draw(); });
        if (!first) input.focus({ preventScroll: true });
        first = false;
    };

    const advance = () => {
        if (i < drills.length - 1) { i++; draw(); return; }
        const right = drills.filter(d => S.drills[d.id]?.status === "correct").length;
        container.innerHTML = `<div class="drill-head"><h2>${title}</h2></div>
            <div class="done-box"><p class="big">${right} / ${drills.length}</p><p>${right === drills.length ? "Perfetto! 🎉" : right >= drills.length * 0.7 ? "Bravo! 👏" : "Keep at it — try the missed ones again."}</p>
            <div class="row"><button data-act="again">Go again</button>${right < drills.length ? `<button class="primary" data-act="missed">Retry missed</button>` : ""}</div></div>`;
        container.querySelector("[data-act=again]").onclick = () => { i = 0; draw(); };
        container.querySelector("[data-act=missed]")?.addEventListener("click", () => mountDrillRunner(container, drills.filter(d => S.drills[d.id]?.status !== "correct"), { title }));
    };

    draw();
}

function showFeedback(el, result, full, given, dr) {
    const [icon, label] = result === "shown" ? ["👀", "Answer"] : RESULT_TEXT[result];
    const alts = expandAnswers(dr.it);
    el.className = `feedback show ${result === "shown" ? "" : isPass(result) ? "pass" : "fail"}`;
    el.innerHTML = `<p><b>${icon} ${label}</b></p>
        <p class="answer" lang="it">${speakBtn(full)}${escapeHtml(full)}</p>
        ${dr.type === "translate" && alts.length > 1 ? `<details><summary>Also accepted</summary><ul>${alts.filter(a => normalize(a) !== normalize(full)).map(a => `<li lang="it">${escapeHtml(a)}</li>`).join("")}</ul></details>` : ""}
        ${result === "wrong" && given ? `<p class="muted">You wrote: <s>${escapeHtml(given)}</s></p>` : ""}`;
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
    if (!session || session.kind !== "srs") {
        const due = dueCards();
        if (!due.length) {
            const total = Object.keys(S.cards).length;
            const next = Object.values(S.cards).map(c => c.due).sort()[0];
            el.innerHTML = `<section class="card hero center">
                <h1>${total ? "Tutto fatto! ✨" : "No words yet"}</h1>
                <p>${total ? `No reviews due. Next review: <b>${prettyDate(parseYmd(next))}</b>.` : "Add words from a lesson day on the Today tab, and they'll show up here."}</p>
                <div class="row center"><button class="primary" data-act="today">Go to today's lesson</button>${total ? `<button data-act="cram">Practice anyway</button>` : ""}</div>
            </section>`;
            el.querySelector("[data-act=today]").onclick = () => go("today");
            el.querySelector("[data-act=cram]")?.addEventListener("click", () => startCram(shuffle(Object.values(S.cards)).slice(0, 20), "Free practice"));
            return;
        }
        session = { kind: "srs", queue: due.slice(0, S.settings.maxReviews), done: 0, right: 0, total: Math.min(due.length, S.settings.maxReviews) };
    }
    drawCard(el);
}

function startCram(items, title) {
    currentView = "review";
    document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("active", b.dataset.view === "review"));
    session = { kind: "cram", title, items: shuffle(items.slice()), i: 0, right: 0 };
    drawCard(document.getElementById("view"));
}

function drawCard(el) {
    let card, key, title, progress;
    if (session.kind === "srs") {
        if (!session.queue.length) return finishSession(el);
        key = session.queue[0];
        card = S.cards[key];
        title = "Review";
        progress = `${session.done} done · ${session.queue.length} left`;
    } else {
        if (session.i >= session.items.length) return finishSession(el);
        card = session.items[session.i];
        title = session.title;
        progress = `${session.i + 1} / ${session.items.length}`;
    }

    const mode = S.settings.reviewMode === "mixed"
        ? (session.kind === "cram" ? (Math.random() < 0.5 ? "recognize" : "produce")
            : card.reps < 1 || Math.random() < 0.4 ? "recognize" : "produce")
        : S.settings.reviewMode;

    el.innerHTML = `
        <section class="card review">
            <div class="drill-head"><h2>${escapeHtml(title)}</h2><span class="muted">${progress}</span></div>
            <div class="flash ${mode}">
                <p class="eyebrow">${mode === "recognize" ? "What does this mean?" : "How do you say it in Italian?"}</p>
                <p class="flash-front" ${mode === "recognize" ? 'lang="it"' : ""}>${escapeHtml(mode === "recognize" ? card.it : card.en)}</p>
                ${mode === "recognize" ? speakBtn(card.it) : `<p class="muted small">${escapeHtml(card.pos || "")}${/noun/.test(card.pos || "") ? " · include the article" : ""}</p>`}
                ${mode === "produce" ? `<form class="answer-row"><input type="text" lang="it" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="In italiano…"><button class="primary" type="submit">Check</button></form><div class="accent-slot"></div>` : `<button class="primary wide" data-act="flip">Show answer</button>`}
                <div class="flash-back" hidden></div>
            </div>
            <div class="grades" hidden></div>
        </section>
        <button class="link center" data-act="quit">End session</button>`;

    const back = el.querySelector(".flash-back");
    const reveal = result => {
        back.hidden = false;
        back.innerHTML = `
            ${result ? `<p class="result ${isPass(result) ? "pass" : "fail"}">${RESULT_TEXT[result].join(" ")}</p>` : ""}
            <p class="flash-answer"><b lang="it">${escapeHtml(card.it)}</b> ${mode === "produce" ? speakBtn(card.it) : ""}</p>
            <p>${escapeHtml(card.en)}</p>
            ${card.ex ? `<p class="v-ex">${speakBtn(card.ex)}<span lang="it">${escapeHtml(card.ex)}</span><br><span class="muted">${escapeHtml(card.exEn || "")}</span></p>` : ""}
            ${card.note ? `<p class="v-note">💡 ${mdInline(card.note)}</p>` : ""}
            <p class="muted small">Week ${card.week} · Day ${card.day}</p>`;
        el.querySelector("[data-act=flip]")?.remove();
        const g = el.querySelector(".grades");
        g.hidden = false;
        if (session.kind === "srs") {
            const suggested = result ? (isPass(result) ? (result === "correct" ? 2 : 1) : 0) : null;
            g.innerHTML = ["Again", "Hard", "Good", "Easy"].map((n, i) =>
                `<button data-g="${i}" class="g${i} ${suggested === i ? "suggested" : ""}">${n}<small>${intervalLabel(key, i)}</small></button>`).join("");
            g.querySelectorAll("button").forEach(b => b.onclick = () => gradeSrs(el, key, +b.dataset.g));
        } else {
            g.innerHTML = `<button class="g0" data-ok="0">Missed it</button><button class="g2" data-ok="1">Got it</button>`;
            g.querySelectorAll("button").forEach(b => b.onclick = () => {
                if (b.dataset.ok === "1") session.right++;
                else session.items.push(card); // see it again at the end
                session.i++;
                drawCard(el);
            });
        }
        if (S.settings.autoplay) speak(card.it);
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
    el.innerHTML = `<section class="card hero center">
        <h1>Finito! 🎉</h1>
        <p>${isSrs ? `${session.done} reviews done.` : `${session.right} words recalled.`}</p>
        <div class="row center"><button class="primary" data-act="today">Back to today</button></div>
    </section>`;
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
    el.innerHTML = `
        <section class="card">
            <h2>✍️ Drills</h2>
            <p class="muted">Re-run any past lesson's drills.</p>
            <div class="row">
                <label>Week <select id="dWeek">${weeks.map(w => `<option value="${w}" ${w === sel.week ? "selected" : ""}>Week ${w}: ${escapeHtml(D.weeks[w].title)}</option>`).join("")}</select></label>
                <label>Day <select id="dDay"><option value="0">Whole week</option>${[1, 2, 3, 4, 5].map(d => `<option value="${d}" ${d === sel.day ? "selected" : ""}>Day ${d}</option>`).join("")}</select></label>
            </div>
            <div class="row">
                <button data-act="missed">Only ones I missed</button>
                <button data-act="mixed">Mixed: everything so far</button>
            </div>
        </section>
        <section class="card" id="drillBox"></section>`;
    const box = el.querySelector("#drillBox");
    const run = list => mountDrillRunner(box, list, { title: "Drills" });
    const load = () => {
        sel.week = +el.querySelector("#dWeek").value;
        sel.day = +el.querySelector("#dDay").value;
        run(drillsFor(sel.week, sel.day || null).filter(open));
    };
    el.querySelector("#dWeek").onchange = load;
    el.querySelector("#dDay").onchange = load;
    el.querySelector("[data-act=missed]").onclick = () => run(shuffle(weeks.flatMap(w => drillsFor(w)).filter(d => S.drills[d.id]?.status === "wrong")));
    el.querySelector("[data-act=mixed]").onclick = () => run(shuffle(weeks.flatMap(w => drillsFor(w)).filter(open)).slice(0, 20));
    load();
}

// ---------- Words tab ----------

function renderWords(el) {
    const cards = Object.values(S.cards).sort((a, b) => a.week - b.week || a.day - b.day);
    el.innerHTML = `
        <section class="card">
            <h2>📚 My words <span class="muted">(${cards.length})</span></h2>
            <input type="search" id="wSearch" placeholder="Search Italian or English…">
            <div id="wList"></div>
        </section>`;
    const list = el.querySelector("#wList");
    const draw = q => {
        q = stripAccents(normalize(q || ""));
        const rows = cards.filter(c => !q || stripAccents(normalize(c.it + " " + c.en)).includes(q));
        list.innerHTML = rows.length ? `<table class="words"><thead><tr><th></th><th>Italiano</th><th>English</th><th>Wk</th><th>Next</th></tr></thead><tbody>
            ${rows.map(c => `<tr><td>${speakBtn(c.it)}</td><td lang="it"><b>${escapeHtml(c.it)}</b></td><td>${escapeHtml(c.en)}</td><td>${c.week}</td><td class="muted small">${c.due <= ymd(today()) ? "due" : c.due.slice(5)}</td></tr>`).join("")}
            </tbody></table>` : `<p class="muted">${cards.length ? "No matches." : "No words yet — add them from a lesson day."}</p>`;
    };
    el.querySelector("#wSearch").oninput = e => draw(e.target.value);
    draw("");
}

// ---------- Plan tab ----------

function renderPlan(el) {
    const t = todayPos();
    el.innerHTML = D.phases.map(p => `
        <section class="card">
            <h2>Phase ${p.phase} · ${p.level} <span class="muted">— ${escapeHtml(p.book)}</span></h2>
            <p class="muted small">Weeks ${p.weeks[0]}–${p.weeks[1]} · Exit: ${escapeHtml(p.exit)}</p>
            <ol class="plan-list">${range(p.weeks[0], p.weeks[1]).map(w => {
                const pl = D.plan[w];
                const state = w < t.week ? "past" : w === t.week ? "current" : "future";
                const learned = [1, 2, 3, 4, 5].filter(d => S.learnedDays[`${w}-${d}`]).length;
                return `<li class="${state}" data-w="${w}">
                    <span class="wk">${w}</span>
                    <span class="pl-body"><b>${escapeHtml(D.weeks[w]?.title || pl.theme)}</b><br><span class="muted small">${escapeHtml(pl.lesson)} · ${escapeHtml(pl.grammar)}</span></span>
                    <span class="pl-flags">${D.weeks[w] ? (learned ? `${learned}/5` : "📗") : ""}${state === "current" ? " 📍" : ""}</span>
                </li>`;
            }).join("")}</ol>
        </section>`).join("");
    el.querySelectorAll(".plan-list li").forEach(li => li.onclick = () => {
        const w = +li.dataset.w;
        const unlocked = isUnlocked(w, 1);
        viewing = unlocked ? { week: w, day: w === t.week ? t.day : 1 } : { week: w, day: 1, peek: true };
        go("today");
    });
    el.querySelector(".plan-list li.current")?.scrollIntoView({ block: "center" });
}

function range(a, b) {
    return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

// ---------- Settings ----------

function renderSettings(el) {
    const st = S.settings;
    const t = todayPos();
    el.innerHTML = `
        <section class="card">
            <h2>📅 Schedule</h2>
            <label>Week 1 starts on <input type="date" id="sStart" value="${st.startDate}"></label>
            <p class="muted small">Today is ${t.week >= 1 ? `Week ${t.week}, Day ${t.day}` : "before Week 1"}.</p>
            <p>Fell behind or want to jump ahead? Set where you are today:</p>
            <div class="row">
                <label>Week <input type="number" id="sWeek" min="1" max="${D.TOTAL_WEEKS}" value="${Math.max(1, t.week)}"></label>
                <label>Day <input type="number" id="sDay" min="1" max="7" value="${Math.max(1, t.day)}"></label>
                <button data-act="setpos">Set</button>
            </div>
        </section>
        <section class="card">
            <h2>🔊 Audio</h2>
            ${voices.length ? `<label>Voice <select id="sVoice">${voices.map(v => `<option value="${escapeHtml(v.voiceURI)}" ${v.voiceURI === st.voiceURI ? "selected" : ""}>${escapeHtml(v.name)}</option>`).join("")}</select></label>`
                : `<p class="muted">No Italian voice found on this device. On iPhone: Settings → Accessibility → Spoken Content → Voices → Italian. On Mac: System Settings → Accessibility → Spoken Content.</p>`}
            <label>Speed <input type="range" id="sRate" min="0.6" max="1.2" step="0.05" value="${st.rate}"> <span id="sRateV">${st.rate}</span></label>
            <label class="check"><input type="checkbox" id="sAuto" ${st.autoplay ? "checked" : ""}> Auto-play audio on answers</label>
            <button data-act="testvoice">Test: “Ciao, come stai?”</button>
        </section>
        <section class="card">
            <h2>🔁 Reviews</h2>
            <label>Card direction <select id="sMode">
                <option value="mixed" ${st.reviewMode === "mixed" ? "selected" : ""}>Mixed (recognize new, then type)</option>
                <option value="recognize" ${st.reviewMode === "recognize" ? "selected" : ""}>Italian → English (flip)</option>
                <option value="produce" ${st.reviewMode === "produce" ? "selected" : ""}>English → Italian (type)</option>
            </select></label>
            <label>Max reviews per session <input type="number" id="sMax" min="10" max="500" value="${st.maxReviews}"></label>
        </section>
        <section class="card">
            <h2>💾 Progress</h2>
            <p class="muted">Progress is saved in this browser. To move it to another device, export here and import there.</p>
            <div class="row">
                <button data-act="export">Export progress</button>
                <label class="button">Import progress<input type="file" id="sImport" accept="application/json" hidden></label>
                <button class="danger" data-act="reset">Reset everything</button>
            </div>
        </section>`;

    el.querySelector("#sStart").onchange = e => { if (e.target.value) { st.startDate = e.target.value; save(); viewing = null; render(); } };
    el.querySelector("[data-act=setpos]").onclick = () => {
        const w = clamp(+el.querySelector("#sWeek").value, 1, D.TOTAL_WEEKS), d = clamp(+el.querySelector("#sDay").value, 1, 7);
        st.startDate = ymd(addDays(today(), -((w - 1) * 7 + (d - 1))));
        save(); viewing = null; render();
    };
    el.querySelector("#sVoice")?.addEventListener("change", e => { st.voiceURI = e.target.value; save(); });
    el.querySelector("#sRate").oninput = e => { st.rate = +e.target.value; el.querySelector("#sRateV").textContent = st.rate; save(); };
    el.querySelector("#sAuto").onchange = e => { st.autoplay = e.target.checked; save(); };
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
    S = loadState();
    initSpeech();
    document.querySelectorAll("#tabs button").forEach(b => b.onclick = () => { if (b.dataset.view === "today") viewing = null; go(b.dataset.view); });
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
