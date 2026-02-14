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
  createLesson("market-capital", 1, "Capital Requirements Comparison", "market-capital", "14 min", ["How much to start each market", "PDT rule", "Match capital to market"], [
    {
      type: "text",
      heading: "How Much Do You Need?",
      content:
        "Stocks: Pattern Day Trader (PDT) rule in the US requires $25k minimum in your account for unlimited day trades; otherwise you're limited to 3 day trades in a 5-day rolling period. You can still swing trade with less—$2k–5k is common for small accounts. Forex: Many brokers allow $100–500 to open an account; leverage lets you control larger size, but that doesn't mean you should. Crypto: You can start with small amounts on exchanges. Commodities: Futures typically need $1,000+ per contract for margin; commodity ETFs need only the share price. Match your capital to the market so you're not over-leveraged or under-capitalized.\n\nIf you have $5k, day trading US stocks is restricted (PDT). You could swing trade stocks, trade forex or crypto with strict size limits, or use commodity ETFs. If you have $25k+, you have more options including day trading stocks. The key is never to use maximum leverage just because it's offered—capital determines safe position size.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Don't open a forex or crypto account with $200 and use 50:1 leverage. A 2% move against you can wipe the account. Small capital + high leverage = high risk of ruin. Use low leverage or trade smaller size so that normal volatility doesn't blow you out.",
    },
    { type: "interactive", heading: "Think It Through", content: "Which market can you often start with the smallest capital?", component: "ConceptCheck", props: { question: "Which market can you often start with the smallest capital?", reveal: "Forex and crypto often allow $100–500 or less to open an account. Stocks day trading in the US typically needs $25k for unlimited day trades." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stocks day trading often needs $25k (PDT); forex and crypto can start smaller. Match capital to market; avoid max leverage." },
  ]),
  createLesson("market-time", 2, "Time Commitment", "market-time", "12 min", ["Market hours", "Research and screen time", "Day vs swing"], [
    {
      type: "text",
      heading: "When Can You Trade?",
      content:
        "Stocks (US): Regular hours 9:30 AM–4:00 PM ET; pre-market and after-hours extend the day but with less liquidity. Forex: 24 hours, 5 days a week—sessions in Asia, Europe, and the US overlap at certain times (e.g. London–NY overlap is busiest). Crypto: 24/7. Commodities: Futures have defined hours but cover much of the day and night. Your availability (full-time job, evenings only, weekends) should guide which market fits.\n\nDay trading demands focus during the session—you need to watch and act. Swing trading needs less screen time: you can place orders and check a few times a day. If you can only trade at 10 PM, US stocks are closed; forex and crypto are open. If you want structure and a clear open/close, stocks or futures fit. There's no 'best'—only what fits your life.",
    },
    {
      type: "analogy",
      heading: "The Gym Hours Analogy",
      content:
        "Markets are like gyms with different hours. Stocks = gym that closes at 4 PM. Forex = 24/5 gym. Crypto = gym that never closes. If you can only work out at midnight, the stock gym doesn't help. Pick the market whose 'hours' match when you can actually trade.",
    },
    { type: "interactive", heading: "Think It Through", content: "Which market trades 24/7?", component: "ConceptCheck", props: { question: "Which market trades 24/7?", reveal: "Crypto. Forex is 24/5 (weekdays). US stocks have set regular hours (9:30 AM–4:00 PM ET) plus extended sessions." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stocks = set hours; forex = 24/5; crypto = 24/7. Align market choice with when you can actually trade." },
  ]),
  createLesson("market-volatility", 3, "Volatility Comparison", "market-volatility", "12 min", ["Risk levels across markets", "Sizing for volatility"], [
    {
      type: "text",
      heading: "How Much Do Prices Move?",
      content:
        "Stocks: Single names can move 1–5% or more in a day; indices are usually calmer (S&P 500 might move 0.5–1.5%). Forex: Major pairs (EUR/USD, USD/JPY) often move 0.5–1% a day; emerging-market pairs more. Crypto: Often 5–20% daily moves; altcoins can do 30%+. Commodities: Vary—gold relatively stable (1–2% daily), natural gas and some ags can spike 10%+ on weather or reports. Higher volatility means bigger profit potential and bigger loss potential; you must size positions and stops accordingly.\n\nIf you risk 1% per trade, a 10% stop in crypto is normal—so your position is 10% of account per trade. In forex with a 0.5% move as stop, you could have a larger position for the same 1% risk. Volatility dictates stop distance and thus position size.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Size by volatility, not by 'how much you want to make.' In low-volatility markets you need larger size (or leverage) for the same dollar move; in high-volatility markets you need smaller size so one bad day doesn't wipe you out. Let the market tell you the position size.",
    },
    { type: "interactive", heading: "Think It Through", content: "Which asset class tends to be most volatile day to day?", component: "ConceptCheck", props: { question: "Which asset class tends to be most volatile day to day?", reveal: "Crypto often has 5–20% daily moves. Major forex and large-cap stocks tend to be less volatile. Size positions and stops for the market you trade." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Crypto and some commodities are most volatile; major forex and large-cap stocks tend to be less so. Size and stops accordingly." },
  ]),
  createLesson("market-learning", 4, "Learning Curve", "market-learning", "12 min", ["Easiest to hardest", "Start with one market"], [
    {
      type: "text",
      heading: "Which Market Is Easiest to Learn?",
      content:
        "Stocks and ETFs are familiar to most people—ownership, earnings, sectors, company news. Forex adds pairs, pips, sessions, and leverage; the jargon (lots, margin, swap) is new. Commodities add futures, contract specs, expiry, and carry (contango/backwardation). Crypto adds wallets, keys, 24/7 risk, and a different culture. There's no single 'easiest'—it depends on your background. Someone from tech might find crypto concepts natural; someone from farming might get commodities faster.\n\nThe mistake is jumping between markets before mastering one. Each market has its own calendar (earnings, Fed, USDA, OPEC), its own order types, and its own pitfalls. Start with one market, learn it well—chart reading, risk management, psychology—then expand if you want. Breadth without depth leads to mediocrity in all of them.",
    },
    {
      type: "analogy",
      heading: "The Language Analogy",
      content:
        "Each market is like a language. Stocks, forex, commodities, crypto—each has vocabulary, grammar, and nuance. You wouldn't try to learn four languages at once in month one. Pick one, get conversational (profitable and consistent), then add another if it fits your goals.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why is there no single 'easiest' market to learn?", component: "ConceptCheck", props: { question: "Why is there no single 'easiest' market to learn?", reveal: "It depends on your background. Stocks/ETFs are often most intuitive; forex and commodities need extra concepts; crypto has its own curve. Start with one and learn it well." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stocks/ETFs are often the most intuitive; each market has its own curve. Master one before adding others." },
  ]),
  createLesson("market-costs", 5, "Costs and Fees", "market-costs", "14 min", ["Commissions", "Spreads", "Overnight fees"], [
    {
      type: "text",
      heading: "What You Pay",
      content:
        "Stocks: Many brokers offer zero commission; some charge per share or per trade. Watch for payment for order flow (PFOF)—your fill might be slightly worse. Forex: Cost is mainly the spread (bid-ask); some brokers charge commission on top. Crypto: Trading and withdrawal fees vary by exchange; withdrawal can be expensive on-chain. Commodities: Futures have commissions and spread; ETFs have expense ratios (e.g. 0.4% a year). Overnight or swap fees apply to leveraged forex and some futures—holding a position overnight can cost or credit you. Compare total cost for how you plan to trade (frequency, size, hold period).\n\nA day trader making 20 trades a day pays 20 × (spread + commission). A swing trader making 4 trades a month pays less in total. But the swing trader might hold forex overnight and pay swap. Run the numbers for your style.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Ignoring overnight fees in forex. If you're long a high-yield currency vs a low-yield one, you might get paid (positive swap). If you're on the wrong side, you pay every night. Over weeks, swap can exceed your spread cost. Check your broker's swap rates before holding positions long-term.",
    },
    { type: "interactive", heading: "Think It Through", content: "When do trading costs matter most?", component: "ConceptCheck", props: { question: "When do trading costs matter most?", reveal: "High-frequency trading—many trades multiply small costs. Compare commissions, spreads, and overnight fees for your planned style." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Compare commissions, spreads, and overnight/swap fees. High-frequency trading makes costs matter most; check swap for overnight forex." },
  ]),
  createLesson("market-liquidity", 6, "Liquidity Comparison", "market-liquidity", "12 min", ["Ease of entry and exit", "Spreads and slippage"], [
    {
      type: "text",
      heading: "Can You Get In and Out Easily?",
      content:
        "Major stocks (large cap, high volume), major forex pairs (EUR/USD, USD/JPY), and big crypto (BTC, ETH) are very liquid—tight spreads and quick fills. Small-cap stocks, exotic forex pairs (e.g. USD/TRY), and small altcoins can have wide spreads and slippage: you might buy at 100 and the next tick is 98. Commodity futures on front-month popular contracts (CL, GC, ES) are liquid; off-month or niche contracts less so. Liquid markets mean you can execute at fair prices; illiquid ones can cost you in spread and delay.\n\nWhen you're learning, stick to liquid names. Slippage and wide spreads are a hidden tax—you lose a little on every trade. In illiquid markets that tax is large. Once you're experienced, you can venture into less liquid instruments if you have an edge and accept the execution risk.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Check average daily volume (stocks) or typical spread (forex/crypto) before trading. If the spread is 0.5% and you're aiming for 1% moves, half your edge is gone before you start. Trade instruments where the spread is a small fraction of your expected move.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why stick to liquid instruments when starting?", component: "ConceptCheck", props: { question: "Why stick to liquid instruments when starting?", reveal: "Liquid markets give tight spreads and quick fills. Illiquid ones mean wider spreads, slippage, and higher execution risk." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stick to liquid instruments when starting; illiquid markets increase cost and execution risk. Check spread vs your target move." },
  ]),
  createLesson("market-leverage", 7, "Leverage Availability and Risks", "market-leverage", "14 min", ["Leverage by market", "Why it's dangerous"], [
    {
      type: "text",
      heading: "Leverage by Market",
      content:
        "Forex: Brokers often offer 30:1 to 50:1 or more—$1,000 margin can control $50,000. Futures: Built-in leverage via margin (e.g. 5–10% of notional). Crypto: Some exchanges offer 5x–125x (extreme risk). Stocks: Margin typically 2:1 or similar in the US. Leverage amplifies gains and losses; a 2% move against you with 50:1 leverage wipes your margin. Use leverage sparingly and only when you understand the risk.\n\nLeverage doesn't change the market—it changes how much you gain or lose per percent move. Same trade, 1x vs 10x: at 10x a 5% move against you is a 50% loss. Most beginners overuse leverage because they want 'big' positions. Pros use leverage to size correctly for their stop, not to maximize position.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Leverage is the fastest way to blow up an account. You can be right about direction and still get stopped out by normal volatility. Never use maximum offered leverage. Start with 1x–2x or cash; increase only when you have a track record and strict risk rules.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why use low or no leverage when learning?", component: "ConceptCheck", props: { question: "Why use low or no leverage when learning?", reveal: "Leverage amplifies both gains and losses. A small move against you can wipe out margin. Learn with small size and low leverage first." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Forex and futures offer high leverage; it can lead to fast losses. Use low or no leverage when learning; size by risk, not by leverage." },
  ]),
  createLesson("market-tax", 8, "Tax Implications", "market-tax", "14 min", ["Short-term vs long-term", "Wash sales", "Records"], [
    {
      type: "text",
      heading: "Taxes Depend on How You Trade",
      content:
        "In the US, short-term capital gains (holdings under one year) are taxed as ordinary income; long-term (over one year) get preferential rates. Wash sale rules can disallow loss deductions if you repurchase the same or substantially identical security within 30 days—so you can't sell for a loss and buy back the next day and keep the loss. Crypto and forex have specific reporting (e.g. Form 8949, FBAR in some cases). Pattern day traders may elect mark-to-market accounting. Consult a tax professional; keep clear records of all trades (date, price, size, cost basis).\n\nDifferent instruments are taxed differently: futures have 60/40 treatment in the US; crypto is property (each trade can be a taxable event). If you trade across markets, your tax situation can get complex. Good record-keeping from day one saves pain at tax time.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Ignoring wash sales. You sell a stock at a loss, then buy it back within 30 days—the loss is disallowed and added to your new cost basis. Traders often trigger wash sales without realizing it. Track your trades; consider software or a pro to avoid surprises.",
    },
    { type: "interactive", heading: "Think It Through", content: "What can wash sale rules do to your loss deduction?", component: "ConceptCheck", props: { question: "What can wash sale rules do to your loss deduction?", reveal: "They can disallow the deduction if you repurchase the same or substantially identical security within 30 days. Keep records and consider a tax advisor." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Holding period and wash sales affect taxes. Keep records; consider a tax advisor. Rules differ by asset (stocks, futures, crypto)." },
  ]),
  createLesson("market-personality", 9, "Personality Matching", "market-personality", "12 min", ["Which market fits you", "Style and interest"], [
    {
      type: "text",
      heading: "Fit Your Style",
      content:
        "If you like structure and regular hours, stocks might suit you. If you want flexibility and 24/5 action, forex. If you're comfortable with extreme volatility and tech, crypto. If you like macro and physical supply/demand (weather, OPEC, harvests), commodities. Your risk tolerance, patience, and interest in the asset class matter as much as capital and time. A market you understand and enjoy is one you'll stick with when the going gets tough.\n\nTrading is hard. You'll have losing streaks. If you don't care about the market you're trading, you're more likely to quit or break rules. If you're fascinated by currencies or by company earnings, that curiosity will keep you studying and improving. Match the market to your personality, not to what's hot this month.",
    },
    {
      type: "analogy",
      heading: "The Sport Analogy",
      content:
        "Choosing a market is like choosing a sport. Some people love the pace of basketball (stocks—constant action during hours). Some prefer the global, around-the-clock nature of soccer (forex). Some like the wild swings of extreme sports (crypto). You'll practice more and stick longer if you actually like the game.",
    },
    { type: "interactive", heading: "Think It Through", content: "What should matter when choosing a market?", component: "ConceptCheck", props: { question: "What should matter when choosing a market?", reveal: "Schedule, risk tolerance, and interest—not just what's popular. A market you understand and enjoy is one you'll stick with." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Choose a market that matches your schedule, risk tolerance, and interest. You'll stick with it longer and learn faster." },
  ]),
  createLesson("market-multi", 10, "Multi-Market Strategies", "market-multi", "12 min", ["Diversification benefits", "Spreading across markets"], [
    {
      type: "text",
      heading: "Using More Than One Market",
      content:
        "Once you're comfortable in one market, you can diversify—e.g. stocks for growth, forex for macro views, commodities for inflation, crypto for a small speculative allocation. Correlations change; different markets can smooth returns and reduce concentration risk. A bad year in stocks might coincide with a good year in commodities. Don't spread yourself too thin early on: master one market first, then add others with clear rules and risk limits.\n\nMulti-market doesn't mean trading everything every day. It can mean 70% of capital in your best market and 30% in one or two others when setups appear. Or it can mean a long-term allocation (e.g. 80% stocks, 10% gold ETF, 10% crypto) with rebalancing. The key is that each market you add should have a defined role and risk limit.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Adding markets before you're profitable in one. Diversifying losing strategies just gives you more ways to lose. Get consistently profitable (or at least disciplined) in one market, then add another. Quality of execution in one market beats mediocre execution in four.",
    },
    { type: "interactive", heading: "Think It Through", content: "When should you add more than one market?", component: "ConceptCheck", props: { question: "When should you add more than one market?", reveal: "After you're comfortable in one market. Master one first, then add others with clear rules and risk limits. Don't spread yourself too thin early on." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Multi-market exposure can diversify risk. Master one market first, then add others with clear rules and risk limits." },
  ], true),
  createLesson("market-best-instruments", 11, "Best Instruments by Category", "market-best-instruments", "16 min", ["Top picks per market", "Where to start in each category", "Liquidity-first approach"], [
    {
      type: "warning",
      heading: "Disclaimer",
      content:
        "These are commonly traded, liquid instruments—not buy recommendations. Past performance does not guarantee future results. Do your own research; consider your capital, risk tolerance, and goals. This is education, not financial advice.",
    },
    {
      type: "text",
      heading: "Stocks and ETFs",
      content:
        "For long-term growth: NVIDIA (NVDA) has delivered exceptional returns driven by AI and data centers. Apple (AAPL), Microsoft (MSFT), and Amazon (AMZN) are statistically strong mega-caps with durable competitive advantages. For diversification: SPY (S&P 500) and QQQ (Nasdaq 100) capture broad market exposure and have historically outperformed most active managers. For day trading and learning: AAPL, MSFT, SPY, QQQ—high volume, tight spreads, predictable behavior. Start with names and ETFs you understand.",
    },
    {
      type: "text",
      heading: "Forex",
      content:
        "Best pairs to start with: EUR/USD and GBP/USD—tightest spreads, highest liquidity, and the most research and analysis available. USD/JPY is excellent for Asia-session overlap and carry-trade dynamics. These majors move on Fed, ECB, BOE, and BOJ news—learn the central bank calendar. Avoid exotics (USD/TRY, USD/ZAR) until experienced; wider spreads and volatility can eat profits. Stick to majors; they're liquid and well-researched.",
    },
    {
      type: "text",
      heading: "Futures",
      content:
        "Index futures: E-mini S&P 500 (ES) and Micro E-mini (MES)—most liquid, nearly 24-hour trading, ideal for learning and small accounts. E-mini Nasdaq (NQ) and Micro Nasdaq (MNQ) for tech exposure. Commodity futures: Gold (GC) and crude oil (CL) are highly liquid; gold for safe-haven and inflation plays, oil for energy and macro. Treasury futures (ZN, ZB) for interest-rate views. Start with micro contracts (MES, MNQ) if capital is limited; they offer the same mechanics with smaller notional size.",
    },
    {
      type: "text",
      heading: "Options",
      content:
        "Best underlyings: SPY and QQQ options are among the most liquid in the world—tight spreads, high open interest, and plentiful strikes and expirations. Trade options on stocks you'd hold: AAPL, NVDA, MSFT. Index options (SPX) offer 60/40 tax treatment but require larger capital. Avoid illiquid single-stock options; wide spreads and low volume make entry and exit costly. Start with monthly expirations; weekly options decay quickly. Only trade options after understanding the Greeks and assignment risk.",
    },
    {
      type: "text",
      heading: "Commodities",
      content:
        "Gold (GLD, GC futures) and silver (SLV, SI futures) are the most accessible—liquidity, clear drivers (rates, dollar, inflation). Crude oil (USO, CL futures) for energy exposure; watch OPEC+ and EIA reports. Copper (HG) is a growth barometer. For agriculture: corn, wheat, and soybean ETFs or futures—follow USDA reports. Commodity ETFs (GLD, SLV, USO) let you avoid futures mechanics; futures give direct exposure and leverage. Choose based on whether you want simplicity (ETFs) or leverage (futures).",
    },
    {
      type: "text",
      heading: "Crypto",
      content:
        "Bitcoin (BTC) and Ethereum (ETH) dominate liquidity and volume—they're where most retail and institutional activity lives. Start with these if you trade crypto; avoid illiquid altcoins until you understand volatility and 24/7 risk. Crypto exchanges differ in fees, security, and availability by region. Understand custody: not your keys, not your coins. Crypto is highly volatile; size accordingly and never risk more than you can afford to lose. Treat it as a speculative allocation, not a core holding.",
    },
    {
      type: "analogy",
      heading: "The Restaurant Menu Analogy",
      content:
        "Each trading category is like a section of a menu. Stocks and ETFs are the main courses—familiar, well-served. Forex is the international section—different flavors, 24/5 service. Futures are the chef's specials—more complex, larger portions. Options are the à la carte add-ons—powerful but easy to over-order. Commodities are the basics—gold, oil, wheat. Crypto is the experimental dish—exciting but unpredictable. Start with what you understand. Don't order everything at once.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Stick to the most liquid instrument in each category. Liquidity means tight spreads, fair fills, and the ability to exit when you need to. Illiquid markets are where retail gets hurt—slippage and wide spreads eat into edges. Quality over novelty. Master one category before spreading across several.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why should beginners stick to the most liquid instruments in each category?", component: "ConceptCheck", props: { question: "Why should beginners stick to the most liquid instruments in each category?", reveal: "Liquid markets give tight spreads, fair fills, and the ability to exit when needed. Illiquid instruments mean wider spreads, slippage, and higher execution risk—edges get eaten before you start." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Stocks: NVDA, AAPL, MSFT, SPY, QQQ. Forex: EUR/USD, GBP/USD, USD/JPY. Futures: ES, MES, GC, CL. Options: SPY, QQQ. Commodities: Gold, silver, oil. Crypto: BTC, ETH. Start liquid; add complexity only when experienced. This is not financial advice." },
  ]),
  createLesson("which-market-quiz", 12, "Which Market Should You Start With?", "which-market-quiz", "5 min", ["Take the interactive quiz"], [
    { type: "interactive", heading: "Find Your Market", content: "Take the quiz below to get a recommendation based on your capital, time, and risk tolerance.", component: "WhichMarketQuiz" },
  ], false),
];
