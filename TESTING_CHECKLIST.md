# Trading Education Platform – Testing Checklist

Use this checklist before deployment. Items marked [x] are implemented; [ ] require verification.

## Content & Curriculum
- [x] All 5 levels present and accessible
- [x] Level 1–5 modules and lessons load
- [x] Each lesson has content (no blank pages)
- [x] Level exams exist and unlock next level at 80%+
- [x] Admin mode bypasses level locks

## Interactive Tools (12 total)
- [x] Position Size Calculator
- [x] Risk-Reward Visualizer (incl. Recovery Math + 1% vs 10% risk comparison)
- [x] Pip Calculator
- [x] Compound Interest Simulator
- [x] Candlestick Builder
- [x] Live Python Editor
- [x] Economic Calendar
- [x] Order Book Visualizer
- [x] Pattern Recognition Game
- [x] Market Correlation Heatmap
- [x] Indicator Playground (links to simulator)
- [x] Support/Resistance Drawing (links to lesson)

## Paper Trading Simulator
- [x] Stocks, Forex, Crypto, Commodities, Futures accounts
- [x] Real live prices (Binance crypto + WebSocket, Finnhub stocks)
- [x] Order types: Market, Limit, Stop, Stop-Limit, OCO + Trailing Stop % + Bracket (TP/SL) on market
- [x] Pending orders list with Cancel
- [x] Limit/Stop orders fill when price reaches level
- [x] Buy/Sell executes with slippage
- [x] Open positions and trade history
- [x] Performance metrics: Win rate, Profit factor, Drawdown, Sharpe, Sortino, Calmar
- [x] Equity curve
- [x] Trade journal with export CSV
- [x] PDT rules enforced for stocks under $25k

## Charts
- [x] Candlestick, Line, Bar, Heikin Ashi
- [x] Timeframes: 1m, 5m, 15m, 30m, 1h, 4h, 1d, 1w, 1M
- [x] Technical indicators: SMA, EMA, Bollinger, RSI, MACD, VWAP, ATR, Stochastic (simulator chart)
- [x] Horizontal price lines (support/resistance) + Fibonacci retracement on chart
- [x] Chart drawings persist (price lines, Fib) when switching symbols/timeframes
- [x] Multiple charts side-by-side (toggle 1 / 2 charts)
- [x] Volume bars (when data available)
- [x] Dark/light theme
- [x] Skeleton loader while chart loads

## Quizzes
- [x] Quiz loads per lesson
- [x] Score resets on lesson navigation (no carryover)
- [x] Score capped at 100%
- [x] 80% to pass
- [x] Admin: Skip Quiz and Auto-Complete work

## Admin Mode
- [x] Gear icon in footer opens modal
- [x] Correct code activates admin
- [x] Wrong code shows error
- [x] Rate limiting (5 attempts/hour)
- [x] Analytics dashboard accessible when admin
- [x] Exit Admin Mode works

## Gamification & Progress
- [x] Leaderboards show user's own stats (lessons completed, paper P&L)
- [x] Streak display on Progress page
- [x] Daily challenges
- [x] XP and badges (incl. Profitable Trader for paper P&L > 0)

## UI/UX
- [x] Dark mode toggle
- [x] Button hover scale, skeleton loaders
- [ ] Mobile responsive (test on phone)
- [x] "Continue where you left off" on homepage
- [x] Market overview widget
- [x] Live market ticker (scrolling)
- [x] Offline banner when disconnected

## Search
- [x] Header search navigates to /search?q=...
- [x] Search shows lessons + glossary results
- [x] Lesson links route correctly

## Navigation
- [x] All nav links work
- [x] Breadcrumbs on lesson pages
- [x] TOC sidebar on lessons
- [x] Scroll progress bar

## API & Data
- [x] Crypto data loads (Binance, no key) – 50+ symbols, WebSocket for live updates
- [ ] Stocks need VITE_FINNHUB_API_KEY – 50+ symbols (add key for stocks)
- [x] 50 stocks, 28 forex pairs, 50 crypto, 4 commodities, 7 futures
- [x] API Setup page at /settings/api

## Performance
- [x] Lazy loading (skeleton on route change)
- [x] No console errors
- [x] Build succeeds: `npm run build`

## Typography & Readability
- [x] Lesson content 18px min font, 1.6 line spacing

## Accessibility
- [x] Focus states on buttons/inputs
- [x] prefers-reduced-motion respected

---

## Manual verification needed (do these yourself)

Before production deploy, verify:

1. **Mobile responsive** – Test on iPhone, Android, iPad
2. **API key for stocks** – Add `VITE_FINNHUB_API_KEY` in Railway/env for stock quotes
3. **Lighthouse score** – Run `npx lighthouse https://your-url --view` – target 90+
4. **Cross-browser** – Test in Chrome, Firefox, Safari, Edge
5. **End-to-end flow** – Homepage → Learn → Complete lesson → Pass quiz → Progress → Simulator → Place trade

---

**Quick smoke test:** Homepage → Learn Level 1 → Complete a lesson → Pass quiz → Check Progress page → Open Simulator → Place trade → Verify metrics.
