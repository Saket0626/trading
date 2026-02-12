import type { Lesson } from "../../types";

const createLesson = (
  id: string,
  order: number,
  title: string,
  slug: string,
  duration: string,
  objectives: string[],
  content: Lesson["content"],
  hasQuiz = false
): Lesson => ({
  id,
  title,
  slug,
  level: 2,
  moduleId: "market-comparison",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const choosingMarketLessons: Lesson[] = [
  createLesson("market-capital", 1, "Capital Requirements Comparison", "market-capital", "12 min", ["How much to start each market"], [
    { type: "text", heading: "How Much Do You Need?", content: "Stocks: Pattern Day Trader rule in the US requires $25k minimum for unlimited day trades; otherwise you can swing trade with less. Forex: Many brokers allow $100–500 to open an account; leverage lets you control larger size. Crypto: You can start with small amounts on exchanges. Commodities: Futures typically need $1,000+ for margin; commodity ETFs need less. Match your capital to the market so you're not over-leveraged or under-capitalized." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stocks day trading often needs $25k; forex and crypto can start smaller; futures need more margin." },
  ]),
  createLesson("market-time", 2, "Time Commitment", "market-time", "10 min", ["Market hours", "Research and screen time"], [
    { type: "text", heading: "When Can You Trade?", content: "Stocks (US): Regular hours 9:30 AM–4:00 PM ET; pre-market and after-hours extend the day. Forex: 24 hours, 5 days a week—sessions in Asia, Europe, and the US. Crypto: 24/7. Commodities: Futures have defined hours but cover much of the day. Your availability (full-time, evenings, weekends) should guide which market fits. Day trading demands focus during session; swing trading needs less screen time." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stocks = set hours; forex = 24/5; crypto = 24/7. Align market choice with your schedule." },
  ]),
  createLesson("market-volatility", 3, "Volatility Comparison", "market-volatility", "10 min", ["Risk levels across markets"], [
    { type: "text", heading: "How Much Do Prices Move?", content: "Stocks: Single names can move 1–5% or more in a day; indices are usually calmer. Forex: Major pairs often move 0.5–1% a day; emerging-market pairs more. Crypto: Often 5–20% daily moves. Commodities: Vary—gold relatively stable, natural gas and some ags can spike. Higher volatility means bigger profit potential and bigger loss potential; size positions and stops accordingly." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto and some commodities are most volatile; major forex and large-cap stocks tend to be less so." },
  ]),
  createLesson("market-learning", 4, "Learning Curve", "market-learning", "10 min", ["Easiest to hardest"], [
    { type: "text", heading: "Which Market Is Easiest to Learn?", content: "Stocks and ETFs are familiar to most people—ownership, earnings, sectors. Forex adds pairs, pips, sessions, and leverage. Commodities add futures, contract specs, and carry. Crypto adds wallets, keys, and 24/7 risk. There's no single 'easiest'—it depends on your background. Start with one market, learn it well, then expand if you want." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stocks/ETFs are often the most intuitive; forex and commodities need extra concepts; crypto has its own learning curve." },
  ]),
  createLesson("market-costs", 5, "Costs and Fees", "market-costs", "12 min", ["Commissions", "Spreads", "Overnight fees"], [
    { type: "text", heading: "What You Pay", content: "Stocks: Many brokers offer zero commission; some charge per share or per trade. Forex: Cost is mainly the spread (bid-ask); some brokers charge commission. Crypto: Trading and withdrawal fees vary by exchange. Commodities: Futures have commissions and spread; ETFs have expense ratios. Overnight or swap fees apply to leveraged forex and some futures. Compare total cost for how you plan to trade (frequency, size, hold period)." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Compare commissions, spreads, and overnight fees. High-frequency trading makes costs matter more." },
  ]),
  createLesson("market-liquidity", 6, "Liquidity Comparison", "market-liquidity", "10 min", ["Ease of entry and exit"], [
    { type: "text", heading: "Can You Get In and Out Easily?", content: "Major stocks, forex pairs, and big crypto (BTC, ETH) are very liquid—tight spreads and quick fills. Small-cap stocks, exotic forex pairs, and small altcoins can have wide spreads and slippage. Commodity futures on popular contracts are liquid; off-month or niche contracts less so. Liquid markets mean you can execute at fair prices; illiquid ones can cost you in spread and delay." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stick to liquid instruments when starting; illiquid markets increase cost and execution risk." },
  ]),
  createLesson("market-leverage", 7, "Leverage Availability and Risks", "market-leverage", "12 min", ["Leverage by market", "Why it's dangerous"], [
    { type: "text", heading: "Leverage by Market", content: "Forex: Brokers often offer 30:1 to 50:1 or more—small margin controls large position. Futures: Built-in leverage via margin. Crypto: Some exchanges offer leverage. Stocks: Margin typically 2:1 or similar in the US. Leverage amplifies gains and losses; a small move against you can wipe out margin. Use leverage sparingly and only when you understand the risk." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Forex and futures offer high leverage; it can lead to fast losses. Use low leverage or none when learning." },
  ]),
  createLesson("market-tax", 8, "Tax Implications", "market-tax", "12 min", ["Short-term vs long-term", "Wash sales"], [
    { type: "text", heading: "Taxes Depend on How You Trade", content: "In the US, short-term capital gains (holdings under one year) are taxed as ordinary income; long-term (over one year) get lower rates. Wash sale rules can disallow loss deductions if you repurchase the same or substantially identical security within 30 days. Crypto and forex have specific reporting requirements. Pattern day traders may use mark-to-market accounting. Consult a tax professional; keep clear records of all trades." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Holding period and wash sales affect taxes. Keep records and consider a tax advisor." },
  ]),
  createLesson("market-personality", 9, "Personality Matching", "market-personality", "10 min", ["Which market fits you"], [
    { type: "text", heading: "Fit Your Style", content: "If you like structure and regular hours, stocks might suit you. If you want flexibility and 24/5 action, forex. If you're comfortable with extreme volatility and tech, crypto. If you like macro and physical supply/demand, commodities. Your risk tolerance, patience, and interest in the asset class matter as much as capital and time. A market you understand and enjoy is one you'll stick with." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Choose a market that matches your schedule, risk tolerance, and interest—not just what's popular." },
  ]),
  createLesson("market-multi", 10, "Multi-Market Strategies", "market-multi", "10 min", ["Diversification benefits", "Spreading across markets"], [
    { type: "text", heading: "Using More Than One Market", content: "Once you're comfortable, you can diversify across markets—e.g. stocks for growth, forex for macro views, commodities for inflation, crypto for a small speculative allocation. Correlations change; different markets can smooth returns and reduce concentration risk. Don't spread yourself too thin early on; master one market first, then add others with clear rules and risk limits." },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Multi-market exposure can diversify risk. Build skill in one market before adding others." },
  ], true),
  createLesson("which-market-quiz", 11, "Which Market Should You Start With?", "which-market-quiz", "5 min", ["Take the interactive quiz"], [
    { type: "interactive", heading: "Find Your Market", content: "Take the quiz below to get a recommendation based on your capital, time, and risk tolerance.", component: "WhichMarketQuiz" },
  ], false),
];
