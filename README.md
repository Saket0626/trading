# ChartWise — Interactive Trading Education Platform

A world-class, interactive web-based trading education platform that takes complete beginners (10-year-old level understanding) all the way to quantitative trading expertise.

## Features

- **5-Level Progressive Curriculum**: Foundations → Market Basics → Intermediate → Advanced → Quantitative (90+ lessons)
- **Interactive Lessons**: Feynman technique, analogies, real-world examples, key takeaways
- **Candlestick Mastery Module**: Full anatomy, single/multi-candle patterns, timeframes, market psychology
- **Interactive Candlestick Builder**: Build candles by adjusting OHLC and see the result
- **Paper Trading Simulator**: Real live market data (Binance crypto, Finnhub stocks, Open ER-API forex), Stocks $100k, Forex $1k, Crypto $5k, Commodities $10k, Live candlestick charts
- **Calculators**: Position size, risk-reward, pip/forex, compound interest
- **Python Sandbox**: Run Python in browser via Pyodide (Monaco Editor)
- **Glossary**: 80+ trading terms with search and category filter
- **Which Market Quiz**: Interactive quiz to recommend your starting market
- **Quizzes**: Knowledge checks after each lesson (80% to pass)
- **Progress & Gamification**: XP, completed lessons, badges (First Lesson, First Quiz, 10 Lessons, Quiz Master)
- **Live Leaderboards**: Compete with other users in real time (Lessons Completed, Paper Trading P&L) — requires Supabase
- **PWA**: Installable, offline-capable Progressive Web App
- **Dark Mode**: Full theme support
- **Risk Warnings**: Honest disclaimers about trader failure rates
- **Responsive Design**: Works on mobile, tablet, desktop

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **React Router** (routing)
- **Recharts** (charts - for future use)
- **Monaco Editor** (for Python sandbox - future use)
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Layout/       # Header, Footer
│   ├── lesson/       # Lesson content blocks
│   ├── quiz/         # Quiz, QuizResults
│   └── charts/       # CandlestickBuilder, etc.
├── contexts/         # Theme, Progress
├── data/             # Curriculum, lessons, quizzes
├── pages/            # Route pages
├── types/            # TypeScript types
└── main.tsx
```

## Curriculum Overview

### Level 1: Foundations
- What is money, value, prices
- Buying and selling
- Trading vs investing
- Trader types (day, swing, position)
- Risk and reward
- Markets overview

### Level 2: Market Basics
- **Candlestick Mastery** (full module with interactive builder)
- Forex, Commodities, Stocks, Crypto
- Market comparison
- Chart foundations

### Level 3-5: (Modules defined, lessons expandable)
- Day trading, technical/fundamental analysis
- Risk management, psychology
- Options, derivatives, portfolio theory
- Python, backtesting, ML, automated systems

## What's Included

- [x] **Real live market data** (Binance, CoinGecko, Finnhub, Open ER-API)
- [x] **Live market ticker** on homepage
- [x] **Professional charts** (Lightweight Charts by TradingView)
- [x] Paper trading simulator with real prices and candlestick charts
- [x] Position size, risk-reward, pip, compound interest calculators
- [x] Python sandbox (Pyodide) in Tools
- [x] PWA / offline support
- [x] Full Level 1 & 2 content; Level 3-5 modules with stub lessons

## API Keys (Optional)

For stock data, add `VITE_FINNHUB_API_KEY` to `.env` (free at finnhub.io).
Crypto works without any key (Binance/CoinGecko).
Forex works without key (Open ER-API).

## Live Leaderboards (Optional)

To enable live leaderboards where users compete in real time:

1. Create a free project at [Supabase](https://supabase.com)
2. Add to `.env`:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
3. In the Supabase SQL Editor, run `supabase-leaderboard.sql`

Users must set a username in Profile to appear on the leaderboard. They appear after completing at least one lesson.

## Newsletter (Optional)

The footer newsletter signup stores emails in Supabase and sends a welcome email to each subscriber.

**Quick setup:** See **[NEWSLETTER_SETUP.md](./NEWSLETTER_SETUP.md)** for a full step-by-step guide.

**Summary:**
1. Run `supabase-newsletter.sql` in Supabase SQL Editor.
2. Create a [Resend](https://resend.com) account and API key.
3. Install Supabase CLI → `supabase login` → `supabase link --project-ref YOUR_REF`
4. Set secret: `supabase secrets set RESEND_API_KEY=re_xxx`
5. Deploy: `supabase functions deploy send-newsletter-welcome`

Subscribers are stored in `newsletter_subscribers`. Export via Supabase dashboard or connect to Mailchimp/ConvertKit for campaigns.

## Important Disclaimer

This platform is for **educational purposes only**. Trading involves substantial risk of loss. 70-90% of retail traders lose money. Never trade with money you cannot afford to lose. The platform emphasizes risk management and realistic expectations throughout.

## License

MIT
