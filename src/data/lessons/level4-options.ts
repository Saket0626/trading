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
  level: 4,
  moduleId: "options-trading",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level4OptionsLessons: Lesson[] = [
  createLesson("options-basics", 1, "Calls and Puts", "options-basics", "22 min", ["Define calls and puts", "ITM, ATM, OTM; premium and strike", "Why options matter"], [
    {
      type: "text",
      heading: "What Are Options?",
      content:
        "An option is the right—but not the obligation—to buy or sell an asset at a set price (the strike) by a set date (expiration). A call gives you the right to buy; a put gives you the right to sell. You pay a premium to the seller for this right. Unlike a stock, you can lose 100% of the premium if the option expires out of the money. That's why options demand respect: they're powerful tools, not lottery tickets.\n\nOptions offer three main uses: leverage (control 100 shares with less capital—one call might cost $3 per share while the stock costs $150), hedging (protect a portfolio with puts—like insurance), and income (selling premium when you're willing to buy or sell the stock). Most beginners focus on buying calls for leverage and lose. Professionals often sell premium or use spreads for defined risk.",
    },
    {
      type: "text",
      heading: "Terminology",
      content:
        "Premium = what you pay for the option. Strike = the price at which you can buy (call) or sell (put). Expiration = when the right ends. In-the-money (ITM): call when stock > strike, put when stock < strike. At-the-money (ATM): stock near strike. Out-of-the-money (OTM): call when stock < strike, put when stock > strike.\n\nIntrinsic value = real value if exercised now. Example: stock at $105, call strike $100 → $5 intrinsic. Extrinsic value (or time value) = premium minus intrinsic—it reflects time and implied volatility. OTM options have only extrinsic value; they expire worthless if the stock doesn't move your way. That's why time decay hurts buyers.",
    },
    {
      type: "analogy",
      heading: "The Movie Ticket Analogy",
      content:
        "Think of a call option like a movie ticket. You pay $15 (premium) for the right to see a film at a specific time (expiration). If the movie is great (stock goes up), you got a bargain. If you don't show up or the movie is terrible (stock stays flat or falls), you lose the $15. The ticket has no obligation—you can skip the movie. Same with options: you're not forced to exercise. But the ticket expires worthless if unused. Options work the same way: time runs out, and OTM options become worthless.",
    },
    {
      type: "text",
      heading: "Buying Calls and Puts",
      content:
        "Buying a call: bullish. Max loss = premium. Max gain = theoretically unlimited (stock can rise forever). Break-even at expiration = strike + premium. Example: buy a $100 strike call for $5; break-even is $105. Buying a put: bearish. Max loss = premium. Max gain = strike minus zero (stock can't go below zero)—so for a $100 strike put bought at $4, max gain ≈ $96. Break-even = strike − premium = $96.\n\nAmerican options can be exercised anytime before expiration; European only at expiration. Most index options (SPX, VIX) are European; many equity options are American. For long-dated holdings, the difference rarely matters; for short-dated, American gives the holder more flexibility.",
    },
    {
      type: "text",
      heading: "Weekly, Monthly, and LEAPS Options",
      content:
        "Weekly options expire every Friday (or Thursday for some indices). They're shorter-dated than standard monthly options—typical monthly expirations are the third Friday of each month. Weeklys give traders precision for event-driven trades (earnings, Fed meetings), but time decay is brutal. Monthly options have the most liquidity and tightest spreads; they're the default choice for most retail. LEAPS (Long-Term Equity Anticipation Securities) have 1–3 years to expiration. Time decay is slower; you have more time to be right. LEAPS are used for long-term bullish or bearish views and synthetic stock positions. They're more expensive in absolute dollars but offer defined-risk leverage over years.",
    },
    {
      type: "text",
      heading: "Index Options and ETF Options",
      content:
        "Index options are on broad market indices—S&P 500 (SPX), Nasdaq 100 (NDX), Russell 2000 (RUT), VIX. They're usually cash-settled: at expiration you receive the difference between the index value and the strike; no shares change hands. Index options are European-style (exercise only at expiration) for SPX and many others. Benefits: no single-stock risk, tax advantages (SPX can qualify for 60/40 treatment in the US). ETF options (SPY, QQQ, IWM) are American-style and physically settled—100 shares of the ETF per contract. They're more accessible for retail: smaller notional, high liquidity, tight spreads. SPY options are among the most traded in the world. You can replicate many index strategies with ETF options.",
    },
    {
      type: "text",
      heading: "FLEX Options",
      content:
        "FLEX (Flexible Exchange) options allow custom terms: strike, expiration, and exercise style. They're traded on CBOE and other exchanges, primarily for institutional and large retail. Use FLEX when standardized options don't fit—e.g. you need a specific expiration date or strike not in the monthly cycle. Liquidity is lower; you often negotiate with market makers. FLEX options exist on indices (e.g. SPX FLEX) and some ETFs. They're useful for tailored hedging or structured strategies. Most retail traders never use FLEX; they're for customized institutional needs.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never treat options like stocks. Time decay (theta) erodes value every day—the closer to expiration, the faster OTM options die. Studies show most bought options expire worthless. Size small and use defined-risk strategies (spreads) instead of naked calls or puts. Beginners who buy OTM calls 'because they're cheap' often lose 100% of the premium. If you wouldn't buy 100 shares of the stock, think twice before buying a call.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Start with paper trading or very small size. Learn the Greeks (especially delta and theta) before risking real capital. Many pros begin with cash-secured puts or covered calls—strategies with defined risk and income—before ever buying naked options. One contract controls 100 shares; a $3 option = $300 per contract. That adds up fast.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Options are rights, not obligations.",
      component: "ConceptCheck",
      props: { question: "What is a call option?", reveal: "The right (not obligation) to buy the underlying at the strike price by expiration. You pay a premium; max loss is that premium." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Calls = right to buy; puts = right to sell. Premium, strike, expiration. ITM/ATM/OTM. Max loss for buyer = premium. Treat options with respect—time decay and leverage can wipe you out." },
  ], true),
  createLesson("options-greeks", 2, "The Greeks", "options-greeks", "22 min", ["Delta, Gamma, Theta, Vega", "How they affect option price", "Using Greeks in practice"], [
    {
      type: "text",
      heading: "Why Greeks Matter",
      content:
        "The Greeks measure how an option's price changes with stock price (delta, gamma), time (theta), and volatility (vega). They help you choose strikes, manage risk, and understand why an option moved the way it did. Without Greeks, you're trading blind—you might buy a call and watch the stock rally 2% while your option barely moves. Greeks explain that.\n\nDelta: how much the option price changes when the stock moves $1. Calls range from 0 to 1 (ITM near 1, ATM near 0.5, OTM near 0). Puts range from 0 to -1. A 0.5 delta call moves roughly $0.50 for every $1 the stock moves. Delta also approximates the probability of finishing ITM—a 0.3 delta option has ~30% chance of expiring in the money.",
    },
    {
      type: "text",
      heading: "Theta, Vega, and Gamma",
      content:
        "Theta: time decay. The option loses value each day as expiration approaches. OTM options lose theta fastest in their last weeks—that's why buying weekly OTM calls is often a losing bet. Sellers collect theta; buyers pay it.\n\nVega: sensitivity to implied volatility. When IV rises (fear, earnings, etc.), option prices rise. Long options are long vega; short options are short vega. Before earnings, IV often spikes—options get expensive. After earnings, IV collapses and option prices can fall even if the stock moves in your direction.\n\nGamma: rate of change of delta. Highest for ATM options near expiration. It means delta changes fast—a small stock move can turn an OTM option into ITM, and the P&L accelerates. Sellers of naked options get crushed by gamma in fast moves.",
    },
    {
      type: "analogy",
      heading: "The Thermometer Analogy",
      content:
        "Think of Greeks like a car's dashboard. Delta is your speedometer—how fast you're gaining or losing as the stock moves. Theta is the fuel gauge—time is running out, and your option is burning value every day. Vega is the outside temperature—when volatility (fear or excitement) rises, option prices heat up. Gamma is the accelerator—near expiration, a small stock move can cause a big delta change and a big P&L swing. You wouldn't drive without a dashboard; don't trade options without understanding the Greeks.",
    },
    {
      type: "text",
      heading: "Using Greeks",
      content:
        "Buyers of options are long gamma and vega but lose to theta. Sellers collect theta but are short gamma and vega—so they profit from time decay but get hurt by big moves or vol spikes. To hedge delta, you can trade shares: a 0.5 delta call ≈ 50 shares of exposure per contract. Professional traders manage their net delta and gamma exposure across their entire book.\n\nFor beginners, focus on this: direction alone isn't enough. Time and volatility matter as much. A call can lose value even when the stock goes up if theta and vega crush the premium. Always check delta (how much stock movement you need) and theta (how much you're paying per day) before buying.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use delta to size positions. If you want exposure equivalent to 100 shares, buy one 1.0 delta ITM call—or two 0.5 delta ATM calls. The latter is cheaper but decays faster. For income sellers, staying short theta and managing delta with stock or other options is the game. Never sell naked options without understanding gamma risk.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Delta and direction.",
      component: "ConceptCheck",
      props: { question: "What does delta measure?", reveal: "How much the option price changes when the underlying moves $1. Calls 0–1, puts 0 to -1. Also used as hedge ratio (delta shares per contract)." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Delta = price sensitivity to stock; theta = time decay; vega = vol sensitivity; gamma = delta acceleration. Buyers pay theta; sellers collect it. Direction, time, and volatility all matter." },
  ], true),
  createLesson("options-strategies", 3, "Basic Options Strategies", "options-strategies", "24 min", ["Covered call, cash-secured put", "Spreads and defined risk", "When to use each"], [
    {
      type: "text",
      heading: "Covered Call and Cash-Secured Put",
      content:
        "Covered call: you own the stock and sell a call. You collect premium and cap upside at the strike. If the stock is called away at expiration, you sell at the strike—often a good outcome. Good when you're neutral to slightly bullish and willing to sell at that price. Example: own AAPL at $175, sell a $180 call for $3. You keep the $3; if AAPL stays below $180, the call expires worthless and you keep the stock. If AAPL hits $185, you're assigned and sell at $180—you made $5 on the stock plus $3 premium = $8 total, but gave up $5 of upside.\n\nCash-secured put: you sell a put and have cash to buy the stock if assigned. You collect premium; if stock stays above strike you keep the premium. If assigned, you buy at the strike—so only do this if you want to own the stock at that price. Both are income strategies with defined risk if you're prepared to hold or buy. Protective put: own stock + buy put = insurance; you pay premium but limit downside while keeping upside.",
    },
    {
      type: "text",
      heading: "Credit Spreads and Debit Spreads",
      content:
        "A credit spread: you sell an OTM option and buy a further OTM option. You collect premium; max loss = spread width minus premium. Example: bull put spread—sell $95 put, buy $90 put; you're paid to take the risk of buying at $95 if assigned. A debit spread: you buy an option and sell a further OTM one; you pay premium; max gain = width minus debit. Example: bull call spread—buy $100 call, sell $110 call; lower cost than a naked call, profit capped at $10 minus what you paid. Both give defined risk on both sides. Credit spreads profit from time decay and range-bound price action; debit spreads profit from directional moves.",
    },
    {
      type: "text",
      heading: "Iron Condors and Butterflies",
      content:
        "An iron condor combines a bear call spread (sell OTM call, buy further OTM call) and a bull put spread (sell OTM put, buy further OTM put). You profit if the stock stays within a range between the two short strikes. Max profit = net credit received; max loss = width of wider spread minus credit. Iron condors are used when you expect low volatility and range-bound price action. A butterfly: buy one OTM, sell two ATM, buy one ITM at the same expiration. Profit is maximized if the stock lands at the middle strike. Butterflies are cheaper but have a narrower profit zone. Both are premium-selling, range-bound strategies with defined risk.",
    },
    {
      type: "text",
      heading: "Straddles and Strangles",
      content:
        "A straddle: buy a call and put at the same strike (usually ATM). You profit from a large move in either direction—you don't care which way. Used around binary events (earnings, FDA approval) when you expect a big move but are unsure of direction. Max loss = total premium (both options); break-evens = strike ± total premium. A strangle: buy OTM call and OTM put (different strikes). Cheaper than a straddle; you need a larger move to profit. Profit zone is outside the two strikes minus premium. Both are long volatility—you want implied vol to rise or the underlying to move a lot. Risk: if the stock doesn't move, you lose the full premium.",
    },
    {
      type: "text",
      heading: "Calendar Spreads, Diagonal Spreads, and Ratio Spreads",
      content:
        "A calendar spread: sell a short-dated option and buy a longer-dated option at the same strike. You profit from the faster time decay of the short option while the long retains value. Best when the stock stays near the strike; you're betting that time decay of the short works in your favor. A diagonal spread: same idea but different strikes—e.g. sell a near-term OTM call and buy a longer-dated call at a different strike. Used for income, rolling, or directional bias with reduced cost. A ratio spread: sell more options than you buy—e.g. buy one call, sell two higher strike calls. You collect premium and have a bearish bias above the short strikes. Ratio spreads have undefined risk on one side (the extra short option) and require careful management.",
    },
    {
      type: "analogy",
      heading: "The Insurance Analogy",
      content:
        "Think of spreads like layered insurance. A bull call spread is like buying basic coverage (the long call) but selling the 'catastrophic' part (the short call) to lower your premium. You're protected up to a point, but you cap your upside. A cash-secured put is like offering to buy a house at a set price—you get paid (premium) for the promise. If the seller doesn't need you, you keep the fee. If they do, you buy the house. Both sides know exactly what they're getting—defined risk, defined reward.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never sell naked (uncovered) calls. If the stock moons, your loss is unlimited. Naked puts can also lead to huge losses if the stock crashes—you're obliged to buy at the strike. Always use defined-risk structures (spreads) or have the underlying (covered call) or cash (cash-secured put). Know your max loss before every trade. A spread can still lose the full width—if you sell a $5-wide bull put spread for $1, max loss is $4 per share ($400 per contract).",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Start with cash-secured puts on stocks you'd be happy to own—you get paid to wait for a lower entry. Covered calls work well in sideways or gently rising markets. For directional plays with limited capital, use spreads instead of naked options. Always calculate break-even and max loss before entering.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Covered call caps upside.",
      component: "ConceptCheck",
      props: { question: "What is a covered call?", reveal: "You own the stock and sell a call. You collect premium and cap upside at the strike. If stock is above strike at expiration you may be assigned and sell at strike." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Covered call and cash-secured put = income with defined risk. Spreads = defined risk on both sides. Always know max loss and break-evens before trading. Never sell naked options." },
  ], true),
  createLesson("options-summary", 4, "Options: Summary", "options-summary", "12 min", ["Recap and when to use options", "Next steps"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Options are rights (calls = buy, puts = sell) with premium, strike, and expiration. Greeks (delta, theta, vega, gamma) drive price. Basic strategies: covered call, cash-secured put, spreads, protective put. Use for leverage, hedging, or income—and only with defined risk and position size. Never sell naked options until you understand margin and assignment.\n\nOptions are tools, not shortcuts. They require more homework than stocks: you need to understand the Greeks, expiration effects, and assignment risk. Start small, paper trade, and build up to live trading only when you're comfortable with the mechanics.",
    },
    {
      type: "preview",
      heading: "Options in Portfolio Context (Preview)",
      content:
        "In the Portfolio module, we'll connect options to broader portfolio theory—how puts can hedge a stock portfolio, how selling premium fits into an income strategy, and how leverage from options affects overall risk. Options are one piece of a diversified approach; we'll see how they fit with stocks, bonds, and other assets.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Options and risk.",
      component: "ConceptCheck",
      props: { question: "What is the maximum loss when buying a call?", reveal: "The premium paid. You can lose 100% of what you paid; you are not obligated to exercise." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Options = leverage, hedging, income. Understand Greeks and max loss. Start with defined-risk strategies. Never trade what you don't understand." },
  ], true),
];
