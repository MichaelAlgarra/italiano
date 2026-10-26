# Italiano · Daily Study

A static, date-driven Italian study app. It follows a 96-week beginner → C1 plan built on *Nuovo Espresso 1–5*.

- **Today**: works out the plan week and day from the date. Mon–Fri are lesson days (grammar notes, 6 new words, drills), Saturday is conversation prompts and a warm-up on the week's words, and Sunday is a weekly quiz plus a writing task. Use ‹ to go back to any earlier day.
- **Review**: spaced repetition (simplified SM-2) over every word you've added. Cards alternate between Italian → English recognition and typed English → Italian production.
- **Drills**: re-run any past day's translate and fill-in drills, or just the ones you missed.
- **Words / Plan / Settings**: your vocabulary list, the full roadmap, and settings for the schedule, voice and progress export/import.

Progress is stored in `localStorage` on each device. Use Settings → Export / Import to move it between devices. Audio uses the browser's built-in Italian voice (Web Speech API).

## Adding content

Each detailed week is a file `data/week-XX.js` (see `data/week-01.js` for the format). Add the week number to `data/manifest.js`. Weeks without a file still show their topic from `data/plan.js`.

## Run locally

```bash
python3 -m http.server 8765   # then open http://localhost:8765
```
