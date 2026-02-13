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
  createLesson("futures-basics", 1, "Futures Contracts", "futures-basics", "18 min", ["What futures are", "Contract size, tick, expiration"], [
    { type: "text", heading: "What Are Futures?", content: "A futures contract is an agreement to buy or sell an asset at a set price on a future date. They're standardized and traded on exchanges (CME, ICE, etc.). Unlike a stock, you're not buying the asset today—you're locking in a price for later. Contracts specify: the underlying (e.g. crude oil, S&P 500), size (e.g. 1,000 barrels, 50 × index), tick size (minimum price move), tick value (dollar per tick), and expiration months. Most futures are closed before delivery; physical delivery is rare for most retail. Cash-settled contracts (e.g. index futures) settle in cash at expiration." },
    { type: "text", heading: "Why Trade Futures?", content: "Leverage: margin is a fraction of notional value. Liquidity in major contracts. 24-hour trading in many products. Tax treatment in the US (60/40 rule for certain gains). Diversification. Used by producers and consumers to hedge, and by speculators to express view. Risk: you can lose more than your initial margin if the market moves against you; margin calls require adding funds or being closed out." },
    { type: "interactive", heading: "Check Your Understanding", content: "Futures are agreements for future delivery.", component: "ConceptCheck", props: { question: "What is a futures contract?", reveal: "An agreement to buy or sell an asset at a set price on a future date. Standardized, exchange-traded. Most are closed before delivery; some cash-settle." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Futures = standardized agreement for future price. Specify size, tick, expiration. Leverage and liquidity; manage margin and risk." },
  ]),
  createLesson("leverage-margin", 2, "Leverage and Margin", "leverage-margin", "16 min", ["Initial and maintenance margin", "Margin calls"], [
    { type: "text", heading: "Margin in Futures", content: "You don't pay the full notional value to open a futures position. You post initial margin—a deposit set by the exchange and broker. Maintenance margin is the minimum you must keep; if your equity falls below it (because of adverse price move), you get a margin call. You must add funds or reduce position; otherwise the broker can close you out. Margin is much lower than stock margin relative to notional—so small price moves can create large P&L and quick margin calls. Never use more leverage than you can afford to lose." },
    { type: "text", heading: "Leverage Cuts Both Ways", content: "Leverage amplifies gains and losses. A 2% move in the underlying can mean a 20%+ move in your equity if you're highly leveraged. Pros use strict position sizing and stop losses. Understand contract specs: tick value tells you how much each tick costs per contract. Example: E-mini S&P 500 futures, 1 point = $50. A 10-point move = $500 per contract. Size so that a normal adverse move doesn't blow out your account." },
    { type: "interactive", heading: "Think It Through", content: "Margin is a deposit, not the full cost.", component: "ConceptCheck", props: { question: "What is initial margin?", reveal: "The deposit required to open a futures (or leveraged) position. It's a fraction of notional value. Below maintenance margin you get a margin call." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Initial margin = deposit to open. Maintenance = minimum to keep. Margin call = add funds or get closed out. Leverage amplifies risk—size accordingly." },
  ]),
  createLesson("derivatives-summary", 3, "Derivatives: Summary", "derivatives-summary", "8 min", ["Recap futures and margin"], [
    { type: "text", heading: "Recap", content: "Futures are standardized contracts for future delivery or cash settlement. Margin allows leverage but requires discipline—margin calls and close-outs are real. Use position sizing and risk rules; understand contract specs before trading." },
    { type: "interactive", heading: "Final Check", content: "Leverage and risk.", component: "ConceptCheck", props: { question: "Why can leverage be dangerous in futures?", reveal: "Small moves in price create large P&L. You can lose more than initial margin and get margin called. Size and stops are essential." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Futures = leverage + liquidity. Respect margin and contract size; never over-leverage." },
  ], true),
];
