# CHARTWISE.INFO — Content Audit Summary Report

**Date:** Feb 11, 2025  
**Scope:** Master content checklist (21 modules, ~225 topics) vs. chartwise.info curriculum

---

## 1. Summary of Changes (This Session)

### Content Added / Expanded

| Item | Location | Description |
|------|----------|-------------|
| **Trading halts and circuit breakers** | `market-halts` lesson (level3-market-mechanics.ts) | Full lesson: single-stock halts (news), circuit breakers 7%/13%/20%, example (biotech FDA halt), warning about stops during halts |
| **Opening hour 9:30–10:30 AM ET** | `day-trading-intro` (level3-day-trading-fundamentals.ts) | New section: why first hour is special (volume, ORB, VWAP reclaims, lunch lull) |
| **Leveraged ETFs decay** | `stocks-etfs` (level2-stocks.ts) | Example with math ($100 SPY vs 3x: up 10% then down 10% = $99 vs $91), common mistake (holding long-term), warning |
| **EV/EBITDA** | `key-ratios` (level3-fundamental-analysis.ts) | Added to valuation ratios; EV/EBITDA strips debt/depreciation for comparison across capital structures |
| **3-timeframe rule** | `entry-timing` (level3-day-trading-strategies.ts) | Explicit daily/4H/15min rule: trend TF, setup TF, entry TF |
| **Trigger candle — wait for close** | `entry-timing` | New section: don't enter mid-candle; wait for close to confirm breakout or pattern |
| **Gap opens — what to do/not do** | `entry-timing` | New section: don't chase first 5–15 min; wait for structure; trade continuation or fill |
| **A+ vs B/C setups** | `entry-timing` | New section: A+ = full size; B = half size or skip; C = never |
| **Avoiding obvious stop levels** | `stop-losses` (level3-risk-management.ts) | New section: don't place stops exactly at round numbers or swing lows; add room to avoid stop hunts |
| **Heikin-Ashi and Renko charts** | `heikin-renko` (level2-understanding-charts.ts) | Full lesson: what they are, how they work, limitations (price mismatch), when to use; example; common mistake; quiz |

### Supporting Updates

- **Quiz:** `market-halts` — 3 questions; `mechanics-summary` — Q16 about halts
- **Quiz:** `key-ratios` — Q4 for EV/EBITDA
- **Quiz:** `entry-timing` — Q9 (3-TF rule), Q10 (trigger candle close)
- **Quiz:** `heikin-renko` — 3 questions in level2.ts
- **Lesson summaries:** `market-halts`, `key-ratios` (EV/EBITDA)

---

## 2. Final Status by Module

| Module | Complete | Partial | Missing |
|--------|----------|---------|---------|
| 1. Market Fundamentals | 14 | 2 | 0 |
| 2. Top-Down Analysis | 6 | 4 | 0 |
| 3. Trading Instruments | 8 | 4 | 0 |
| 4. Charts & Price Action | 16 | 4 | 5 |
| 5. Support & Resistance | 14 | 3 | 0 |
| 6. Chart Patterns | 6 | 8 | 3 |
| 7. Technical Indicators | 17 | 0 | 0 |
| 8. Fundamental Analysis | 13 | 5 | 0 |
| 9. Order Types & Mechanics | 11 | 5 | 3 |
| 10. When to Enter | 13 | 0 | 0 |
| 11. When NOT to Enter | 13 | 1 | 0 |
| 12–13. Long/Short Setups | 9 | 7 | 0 |
| 14. Trade Setup & Execution | 11 | 4 | 0 |
| 15. Stop Losses | 9 | 0 | 0 |
| 16. Take Profit Strategies | 8 | 2 | 0 |
| 17. Risk Management | 10 | 1 | 0 |
| 18. Trading Psychology | 12 | 3 | 0 |
| 19. Trading Styles | 7 | 2 | 0 |
| 20. Trading Plan & Journaling | 9 | 3 | 0 |
| 21. Common Mistakes | 15 | 0 | 0 |
| **Totals** | **~195** | **~52** | **~11** |

---

## 3. Gaps and Inconsistencies

### Gaps (Missing or Partial)

- **SMC-style concepts:** BOS, ChoCH, FVG, order blocks, liquidity sweeps, premium/discount — not taught; curriculum uses classic S/R, structure, and patterns instead.
- **Leveraged ETFs decay:** Not covered; students may not understand why 3x ETFs don’t triple long-term returns.
- **EV/EBITDA:** Not in key-ratios; P/E and PEG are.
- **Time & Sales (tape):** Not covered; order flow basics exist but not tape reading.
- **MOO/MOC orders:** Not covered; GTC and DAY are.
- ~~**Heikin-Ashi, Renko**~~ — Done: heikin-renko lesson.
- **3-timeframe rule:** Used implicitly in top-down; no explicit “3-TF rule” lesson.
- **Rising/falling wedge:** Not covered as named patterns.
- **Triple top/bottom:** Not covered.

### Potential Inconsistencies (Concepts Used Before Taught)

- **Order blocks:** Glossary references it; no full SMC-style lesson.
- **Circuit breakers:** Previously only in automated-systems context; now clarified in market-halts.
- **Pattern names (e.g. morning star, evening star):** Some appear in quizzes or glossary before being taught in a dedicated lesson.

---

## 4. Recommended Learning Path

For a new student going through chartwise.info:

1. **Level 1 (Foundations)** — Money, trading vs investing, markets, risk-reward, getting started. *Complete before any trading.*
2. **Level 2 (Market Basics)** — Charts, candlesticks, markets (stocks/forex), S/R, trendlines. *Complete before live trading.*
3. **Level 3 (Intermediate)** — In this order:
   - Day trading fundamentals (hours, PDT, opening hour)
   - Technical indicators (MA, RSI, MACD, etc.)
   - Fundamental analysis basics
   - **Risk management** (position sizing, 1% rule, drawdown)
   - **Entry timing** and confluence
   - Psychology and cognitive biases
   - Trading plan and journal
   - Strategies (breakout, VWAP, ORB)
   - Broker selection and demo practice
   - **Market mechanics** (orders, execution, halts)
   - Costs and taxes
4. **Level 4 (Advanced)** — Options, derivatives, portfolio, advanced technical, intermarket. *Only after Level 3 is solid.*
5. **Level 5 (Quantitative)** — Python, backtesting, quant strategies. *Optional for discretionary traders.*

**Critical path before live trading:** Level 1 → Level 2 → risk-management → entry-timing → stop-losses → position-sizing → trading-plan → psychology.

---

## 5. Potential Inaccuracies for Human Review

| Item | Location | Concern |
|------|----------|---------|
| Circuit breaker levels | market-halts | 7%/13%/20% based on S&P 500 prior close; exact rules can change — confirm against current SEC/exchange rules |
| Biotech halt example | market-halts | $15 → $28 gap is illustrative; actual gap magnitudes vary |
| Opening hour timing | day-trading-intro | 9:30–10:30 ET is a common convention; some traders use 9:30–10:00 or 10:15 — verify consistency with rest of site |

---

## 6. Suggested Next Steps (Priority Order)

1. ~~**Leveraged ETFs decay**~~ — Done: stocks-etfs.
2. ~~**3-timeframe rule**~~ — Done: entry-timing.
3. ~~**EV/EBITDA**~~ — Done: key-ratios.
4. **Gap opens** — Expand “what to do / what not to do” in a dedicated lesson or strategy section.
5. **Time & Sales** — Add to market mechanics or a new “reading the tape” lesson.
6. **MOO/MOC** — Add to order-types (when to use, execution rules).
7. **SMC concepts** — Decide whether to add BOS, ChoCH, FVG, order blocks, liquidity sweeps, premium/discount as a module or leave as glossary-only.
