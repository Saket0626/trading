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
  moduleId: "derivatives",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level4DerivativesLessons: Lesson[] = [
  createLesson("futures-basics", 1, "Futures Contracts", "futures-basics", "22 min", ["What futures are", "Contract size, tick, expiration", "Why futures matter"], [
    {
      type: "text",
      heading: "What Are Futures?",
      content:
        "A futures contract is an agreement to buy or sell an asset at a set price on a future date. They're standardized and traded on exchanges (CME, ICE, etc.). Unlike a stock, you're not buying the asset today—you're locking in a price for later. When you buy a futures contract, you're agreeing to take delivery (or cash settle) at expiration—unless you close the position before then.\n\nContracts specify: the underlying (e.g. crude oil, S&P 500, corn), size (e.g. 1,000 barrels for oil, 50 × index for E-mini S&P), tick size (minimum price move), tick value (dollar per tick), and expiration months. Most futures are closed before delivery; physical delivery is rare for most retail. Cash-settled contracts (e.g. index futures) settle in cash at expiration—no physical delivery.",
    },
    {
      type: "text",
      heading: "Contract Specs",
      content:
        "Every futures contract has a spec sheet. Example: E-mini S&P 500 (ES). Size: $50 × index. Tick size: 0.25 points. Tick value: $12.50. So a 1-point move = $50 per contract. If the S&P moves 20 points against you, that's $1,000 per contract—without considering leverage.\n\nCrude oil (CL): 1,000 barrels. Tick: $0.01. Tick value: $10. A $1 move = $1,000 per contract. Gold (GC): 100 troy oz. Tick: $0.10. Tick value: $10. Always check the spec sheet before trading—a small move in the underlying can mean a big P&L change.",
    },
    {
      type: "analogy",
      heading: "The Locked-In Price Analogy",
      content:
        "Think of futures like locking in a hotel rate for next summer. You pay today's price for a room six months from now. If prices go up, you got a bargain. If they go down, you overpaid. Either way, you're committed—unless you sell your reservation (close the position) before the date. Futures work the same way: you lock in a price for future delivery. Producers (farmers, oil companies) use it to hedge—lock in a sell price. Speculators use it to bet on direction—without ever taking delivery.",
    },
    {
      type: "text",
      heading: "Why Trade Futures?",
      content:
        "Leverage: margin is a fraction of notional value. E-mini S&P might require $10,000 margin for a $250,000 notional position—so a 4% move in your favor can double your margin, but a 4% move against you can wipe you out. Liquidity: major contracts (ES, CL, GC) have huge volume. 24-hour trading: many products trade nearly around the clock. Tax treatment in the US: 60/40 rule can benefit certain gains. Diversification: commodities and indices add uncorrelated exposure.\n\nRisk: you can lose more than your initial margin. Margin calls require adding funds or being closed out. Never use more leverage than you can afford.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Futures use leverage. A small adverse move can trigger a margin call—you must add funds or your broker closes you out, often at the worst possible price. Physical delivery: if you hold an agricultural or energy contract to expiration and don't close, you may be obligated to take delivery of actual barrels or bushels. Most retail traders never want that—close or roll before expiration.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Futures are agreements for future delivery.",
      component: "ConceptCheck",
      props: { question: "What is a futures contract?", reveal: "An agreement to buy or sell an asset at a set price on a future date. Standardized, exchange-traded. Most are closed before delivery; some cash-settle." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Futures = standardized agreement for future price. Specify size, tick, expiration. Leverage and liquidity; manage margin and risk. Know the contract specs before trading." },
  ], true),
  createLesson("leverage-margin", 2, "Leverage and Margin", "leverage-margin", "20 min", ["Initial and maintenance margin", "Margin calls", "Position sizing"], [
    {
      type: "text",
      heading: "Margin in Futures",
      content:
        "You don't pay the full notional value to open a futures position. You post initial margin—a deposit set by the exchange and broker. For E-mini S&P, initial margin might be ~$10,000 for a contract with ~$250,000 notional—about 4% of notional. Maintenance margin is the minimum you must keep; if your equity falls below it (because of adverse price move), you get a margin call.\n\nYou must add funds or reduce position; otherwise the broker can close you out—often at the worst possible time. Margin is much lower than stock margin relative to notional—so small price moves can create large P&L and quick margin calls. A 2% move in the S&P against you can mean a 50% loss on your margin if you're fully leveraged.",
    },
    {
      type: "text",
      heading: "Leverage Cuts Both Ways",
      content:
        "Leverage amplifies gains and losses. A 2% move in the underlying can mean a 20%+ move in your equity if you're highly leveraged. Pros use strict position sizing and stop losses. Understand contract specs: tick value tells you how much each tick costs per contract.\n\nExample: E-mini S&P 500 futures, 1 point = $50. A 10-point move = $500 per contract. If your account is $25,000 and you hold 2 contracts, a 20-point adverse move = $2,000 loss = 8% of your account in a single move. Size so that a normal adverse move (e.g. 2–3 standard deviations) doesn't blow out your account. Many pros risk no more than 1–2% per trade.",
    },
    {
      type: "analogy",
      heading: "The Loan Analogy",
      content:
        "Think of margin like a down payment on a house. You put down 20% (initial margin) and the bank lends you 80%. If the house drops 25%, you're underwater—your equity is gone. Same with futures: you put up a fraction of notional (margin), and the rest is 'borrowed.' A small price drop can wipe out your margin. The difference: with futures, the broker can force you out (margin call) before you're fully wiped—and you may owe more if the market gaps against you.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never over-leverage. Margin calls happen when you least expect them—often during volatile, illiquid periods. Your broker may close you out at unfavorable prices. In extreme moves (flash crashes, overnight gaps), you can lose more than your initial margin—you may owe the broker. Always size positions so that a 2–3% adverse move in the underlying doesn't trigger a margin call.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Use stop losses. Know your max loss per contract before entering. If E-mini moves 20 points against you = $1,000 loss per contract—can your account handle that? Many traders use 1–2% of account risk per trade. With $50,000, that's $500–$1,000 max risk—maybe 1 contract with a 10–20 point stop.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Margin is a deposit, not the full cost.",
      component: "ConceptCheck",
      props: { question: "What is initial margin?", reveal: "The deposit required to open a futures (or leveraged) position. It's a fraction of notional value. Below maintenance margin you get a margin call." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Initial margin = deposit to open. Maintenance = minimum to keep. Margin call = add funds or get closed out. Leverage amplifies risk—size accordingly. Never over-leverage." },
  ], true),
  createLesson("derivatives-summary", 3, "Derivatives: Summary", "derivatives-summary", "12 min", ["Recap futures and margin", "Next steps"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Futures are standardized contracts for future delivery or cash settlement. Margin allows leverage but requires discipline—margin calls and close-outs are real. Use position sizing and risk rules; understand contract specs before trading.\n\nFutures are powerful tools for hedging (producers, institutions) and speculation (traders). They offer liquidity, 24-hour access in many products, and tax benefits in some jurisdictions. But they're not for everyone—leverage can destroy accounts. Start with paper trading or micro contracts (e.g. MES instead of ES) to learn before scaling.",
    },
    {
      type: "preview",
      heading: "Portfolio Theory (Preview)",
      content:
        "In the Portfolio module, we'll connect derivatives to broader portfolio management—how futures can hedge equity exposure, how options fit into risk-adjusted returns, and how diversification across asset classes (including derivatives) affects the efficient frontier. Derivatives are one piece of a complete portfolio approach.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Leverage and risk.",
      component: "ConceptCheck",
      props: { question: "Why can leverage be dangerous in futures?", reveal: "Small moves in price create large P&L. You can lose more than initial margin and get margin called. Size and stops are essential." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Futures = leverage + liquidity. Respect margin and contract size; never over-leverage. Know the specs; size for risk." },
  ], true),
];
