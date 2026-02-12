# Curriculum Implementation Roadmap

This document tracks progress toward the full 5-level trading education spec. Use it to continue implementation in future sessions.

---

## SPEC TOTALS (Target)

| Level | Modules | Lessons | Quiz Q's | Interactive | Status |
|-------|---------|---------|----------|-------------|--------|
| 1 | 5 | 25+ | 50+ + 25 exam | 10+ | **DONE** |
| 2 | 9 + exam | 75+ | 125+ + 30 exam | 30+ | **Structure + exam done**; expand 2.3–2.7 |
| 3 | 15 + exam | 100+ | 200+ + 40 exam | 50+ | Stubs + **Level 3 exam + gating** |
| 4 | 8 + exam | 60+ | 150+ + 40 exam | 30+ | Stubs + **Level 4 exam + gating** |
| 5 | 12 + exam | 75+ | 125+ + 50 exam | 50+ coding | Stubs + **Level 5 exam + gating** |
| **Total** | **49 + 5 exams** | **335+** | **650+** | **170+** | — |

---

## LEVEL 1: FOUNDATIONS — COMPLETE

- **Modules:** 5 + Level 1 Final Exam
- **Lessons:** 29 + 1 exam lesson (all full content)
- **Quizzes:** Per-lesson quizzes + **Level 1 Final Exam: 25 questions** (80% to unlock Level 2)
- **Gating:** Level 2 unlocks only after passing Level 1 Final Exam (80%+)

---

## LEVEL 2: MARKET BASICS & CHART READING

### Implemented

| # | Module | Lessons | Quizzes | Status |
|---|--------|---------|---------|--------|
| 2.1 | Understanding Charts | 8 | 15 (on last lesson) | **DONE** |
| 2.2 | Candlestick Mastery | 5 (existing) | Yes | Partial; spec wants 20+ |
| 2.3 | Stocks (markets-stocks) | **14** | **15** (stocks-beginners) | **DONE** |
| 2.4 | Forex (markets-forex) | **19** | **20** (forex-demo) | **DONE** |
| 2.5 | Commodities | 3 | — | Expand to 17 |
| 2.6 | Crypto | 3 | — | Expand to 16 |
| 2.7 | Choosing Your Market | 2 | — | Expand to 10 |
| 2.8 | Support & Resistance | **12** | **12** (sr-summary) | **DONE** |
| 2.9 | Trendlines & Trends | **11** | **12** (tl-summary) | **DONE** |
| — | **Level 2 Final Exam** | 1 | **30 questions** | **DONE** (80% → unlock Level 3) |

- **Gating:** Level 3 unlocks only after passing Level 2 Final Exam (80%+).
- **Note:** `chart-foundations` was removed; Support & Resistance and Trendlines & Trends are separate modules.

---

## LEVEL 3: INTERMEDIATE TRADING

- **Modules:** 10 content + **Level 3 Final Exam** (in curriculum).
- **Lessons:** All stub (coming soon) + **level-3-exam** lesson.
- **Quizzes:** **level3Quizzes["level-3-exam"]** = 40 questions (20 real + 20 placeholder; expand as content fills).
- **Gating:** Level 4 unlocks only after passing Level 3 Final Exam (80%+).
- **To do:** Replace stubs with full lessons for 3.1–3.15 per spec; add per-lesson quizzes; replace placeholder exam questions.

---

## LEVEL 4: ADVANCED TRADING

- **Modules:** 5 content + **Level 4 Final Exam** (in curriculum).
- **Lessons:** Stub + **level-4-exam** lesson.
- **Quizzes:** **level4Quizzes["level-4-exam"]** = 40 questions (13 real + 27 placeholder).
- **Gating:** Level 5 unlocks only after passing Level 4 Final Exam (80%+).
- **To do:** Full lessons for Options, Greeks, Strategies, Futures, Advanced Patterns, Intermarket, Microstructure, Portfolio Theory; replace placeholder exam questions.

---

## LEVEL 5: QUANTITATIVE TRADING

- **Modules:** 7 content + **Level 5 Final Exam** (in curriculum).
- **Lessons:** Stub + **level-5-exam** lesson.
- **Quizzes:** **level5Quizzes["level-5-exam"]** = 50 questions (8 real + 42 placeholder). Spec: 85% to certify.
- **Gating:** Level 5 is accessible after Level 4 exam; certification (85% on Level 5 exam) not yet implemented.
- **To do:** Full lessons for Python, Pandas, Data, Indicators, Backtesting, Backtrader, Metrics, Mean Reversion, Momentum, ML, Time Series, Full System; coding exercises; replace placeholder exam questions; add certificate/PDF/badge.

---

## UNLOCK CHAIN (Implemented)

1. Pass **Level 1 Final Exam** (80%) → Level 2 unlocks.
2. Pass **Level 2 Final Exam** (80%) → Level 3 unlocks.
3. Pass **Level 3 Final Exam** (80%) → Level 4 unlocks.
4. Pass **Level 4 Final Exam** (80%) → Level 5 unlocks.
5. Pass **Level 5 Final Exam** (85%) → **Certification** (to be implemented: certificate, PDF, badge).

---

## HOW TO CONTINUE (Next Session)

1. **Level 2:** Expand Stocks, Forex, Commodities, Crypto, Choosing Your Market to full lesson counts per spec; expand Candlestick to full pattern set.
2. **Level 3:** Replace stubs with full lessons (3.1–3.15); add per-lesson quizzes; replace Level 3 exam placeholder questions with 40 real questions.
3. **Level 4 & 5:** Same—full lessons, quizzes, replace exam placeholders with real questions.
4. **Interactives:** Add components (supply/demand, candlestick builder, pip calculator, position size calculator, etc.) and reference from lessons.
5. **Certification:** When Level 5 exam passed at 85%+, show certificate page, PDF download, and badge (e.g. in profile).

---

## FILE REFERENCE

- **Curriculum:** `src/data/curriculum.ts` (LEVELS, MODULES)
- **Lessons:** `src/data/lessons/` — level1.ts, level1-risk-getting-started.ts, level2-understanding-charts.ts, level2-candlestick.ts, level2-remaining.ts, level2-support-trends.ts, level2-exam.ts, level3-stub.ts, level3-4-5-exams.ts, level4-5-stub.ts
- **Quizzes:** `src/data/quizzes/level1.ts`, `level2.ts`, `level3-4-5.ts`
- **Level gating:** `LearnIndexPage.tsx` (locked cards + links to exams), `LearnPage.tsx` (Navigate when level locked)

---

*Last updated: Level 2 Stocks Deep Dive (14 lessons, 15q), Forex Deep Dive (19 lessons, 20q). Level 2 Final Exam, S/R, Trendlines, and L3–L5 exam chain already in place.*
