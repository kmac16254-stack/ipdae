# 입대할게요

에이스냐 폐급이냐, 그것이 문제로다.

Korean browser narrative game: character creation, 8-question personality survey, seeded seasonal enlistment, nine squadmates and two instructors, five weeks, 20 independent events and 10 conditional follow-ups, four brief activities, local save, specialty matching, and private story submissions.

## Run

Node 22.13+ (Node 24 preferred). No dependencies required.

```
npm run build
npm test
npm run dev
```

Local preview uses Node SQLite. Production uses Sites D1 binding `DB`, with schema in `drizzle/0000_stories.sql`. No public endpoint exposes submitted stories. Sites database tools provide owner inspection. Submissions require consent and are not automatically published.

## Implementation notes

The supplied Sites Vinext helpers/starter were not mounted and package network access was unavailable in this workspace. To keep the game runnable and deployable, it uses dependency-free browser ES modules and a self-contained Worker with the same D1 submission behavior. `scripts/build.mjs` embeds application assets into the Worker.

Save data is versioned and stored on this browser. Randomness is seeded; same-cohort replay reproduces the roster while choices and focus change the story. Repeat visits never reroll an active event. Save schema changes require an explicit migration before raising the version.

## Historical verification limits

See RESEARCH.md. 242 historical-source specialty entries, 238 assignment candidates; 2013 official completeness is not verified. The current prototype uses named historical intake centers and fictional training companies. Exact division routing and official insignia remain unimplemented pending source/usage verification. In-game date and curriculum are fictionalized. Assignment is a game affinity model, not an authentic military placement procedure. There are no ranks or final scores.

## Beta 0.2 (2026-10-27)

Daily 35-day timeline with pause, speed and skip-to-event; historical Army 21-calendar-month discharge countdown; 15 event slots; persistent event chain and separate member/instructor relationships; five numeric growth dimensions and fatigue. Specialty aptitude freezes through training. Fifteen short introductory knowledge questions with teaching and feedback. Fictional photographic portraits generated for this game and embedded offline. Nine division intake candidates replace replacement depots; direct intake is fictionalized. Insignia source files still pending.

Download build: `node scripts/standalone.mjs` creates `outputs/ipdae-beta-02.html`. This version has a separate save key from v0.1, so previous progress remains stored. Offline story submissions stay on the device and can be exported instead of claiming server delivery.

Checks: `npm test` uses test-isolation=none to ensure sandbox execution actually runs individual assertions. Browser verification is not completed because Chromium socket operations are blocked in this environment. Tests verify 200 cohorts, history prerequisites, stable matching, dates and endpoint validation. Mobile viewport fitting still needs real-device acceptance.

## Beta 0.4
- Opponent and protagonist dialogue stay visible in vertically stacked cards. Thoughts remain parenthesized; previous dialogue review does not replay effects.
- 1x automatic day advance is 650ms (previously 2200ms); decisions always pause time.
- Every narrative choice has audited explicit effects in balance.js. Excuses/avoidance yield no basic-skill rewards. Wrong/skipped training answers have no numeric reward; correct answers grant +2.
- Respirator lesson uses military-training framing rather than civil-defense dialogue.
- Allocation uses 15 common historical-listed specialties and configurable demand weights, capped experience affinity. These are beta game assumptions, NOT actual 2013 assignment shares. Archive retains the wider list. Official recruiting statistics exclude conscripts and cannot supply total shares: https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=2841
- Specialty demand weights can be replaced with verified historical assignment data later. No actual percentages have been asserted.
