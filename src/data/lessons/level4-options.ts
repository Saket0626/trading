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
  createLesson("options-basics", 1, "Calls and Puts", "options-basics", "20 min", ["Define calls and puts", "ITM, ATM, OTM; premium and strike"], [
    { type: "text", heading: "What Are Options?", content: "An option is the right—but not the obligation—to buy or sell an asset at a set price (the strike) by a set date (expiration). A call gives you the right to buy; a put gives you the right to sell. You pay a premium to the seller. Unlike a stock, you can lose 100% of the premium if the option expires out of the money. Options offer leverage (control 100 shares with less capital), hedging (protect a portfolio with puts), and income (selling premium)." },
    { type: "text", heading: "Terminology", content: "Premium = what you pay for the option. Strike = the price at which you can buy (call) or sell (put). Expiration = when the right ends. In-the-money (ITM): call when stock > strike, put when stock < strike. At-the-money (ATM): stock near strike. Out-of-the-money (OTM): call when stock < strike, put when stock > strike. Intrinsic value = real value if exercised now (e.g. stock 105, call strike 100 → 5 intrinsic). Extrinsic value = premium minus intrinsic (time and volatility)." },
    { type: "text", heading: "Buying Calls and Puts", content: "Buying a call: bullish. Max loss = premium. Max gain = theoretically unlimited. Break-even at expiration = strike + premium. Buying a put: bearish. Max loss = premium. Max gain = strike minus premium (stock can only go to zero). Break-even = strike − premium. American options can be exercised anytime before expiration; European only at expiration. Most index options are European; many equity options are American." },
    { type: "warning", heading: "Common Mistake", content: "Treating options like stocks. Time decay (theta) erodes value. Most bought options expire worthless. Size small and use for defined strategies." },
    { type: "interactive", heading: "Check Your Understanding", content: "Options are rights, not obligations.", component: "ConceptCheck", props: { question: "What is a call option?", reveal: "The right (not obligation) to buy the underlying at the strike price by expiration. You pay a premium; max loss is that premium." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Calls = right to buy; puts = right to sell. Premium, strike, expiration. ITM/ATM/OTM. Max loss for buyer = premium." },
  ]),
  createLesson("options-greeks", 2, "The Greeks", "options-greeks", "18 min", ["Delta, Gamma, Theta, Vega", "How they affect option price"], [
    { type: "text", heading: "Why Greeks Matter", content: "The Greeks measure how an option's price changes with stock price (delta, gamma), time (theta), and volatility (vega). They help you choose and manage positions. Delta: how much the option price changes when the stock moves $1. Calls 0 to 1 (ITM near 1, ATM near 0.5, OTM near 0). Puts 0 to -1. Delta also approximates the probability of finishing ITM. Gamma: rate of change of delta—highest for ATM options near expiration. Theta: time decay; option loses value each day. Vega: sensitivity to implied volatility; higher vol = higher option price for long options." },
    { type: "text", heading: "Using Greeks", content: "Buyers of options are long gamma and vega but lose to theta. Sellers collect theta but are short gamma and vega. To hedge delta, you can trade shares (e.g. 0.5 delta call ≈ 50 shares). Professional traders manage their net delta and gamma exposure. For beginners, focus on understanding that time and volatility matter as much as direction." },
    { type: "interactive", heading: "Think It Through", content: "Delta and direction.", component: "ConceptCheck", props: { question: "What does delta measure?", reveal: "How much the option price changes when the underlying moves $1. Calls 0–1, puts 0 to -1. Also used as hedge ratio (delta shares per contract)." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Delta = price sensitivity to stock; theta = time decay; vega = vol sensitivity. Buyers pay theta; sellers collect it." },
  ]),
  createLesson("options-strategies", 3, "Basic Options Strategies", "options-strategies", "22 min", ["Covered call, cash-secured put", "Spreads and defined risk"], [
    { type: "text", heading: "Covered Call and Cash-Secured Put", content: "Covered call: you own the stock and sell a call. You collect premium and cap upside at the strike. If the stock is called away, you sell at the strike. Good when you're neutral to slightly bullish. Cash-secured put: you sell a put and have cash to buy the stock if assigned. You collect premium; if stock stays above strike you keep it. If assigned, you buy at the strike. Both are income strategies with defined risk if you're prepared to hold or buy the stock. Protective put: own stock + buy put = insurance against a drop; you keep upside." },
    { type: "text", heading: "Spreads", content: "Bull call spread: buy a call, sell a higher call. Lower cost than naked call; profit capped. Bear put spread: buy a put, sell a lower put. Defined risk on both sides. Credit spreads: sell an OTM option and buy a further OTM option (e.g. bull put spread). You collect premium; max loss = width of spread minus premium. Iron condor: sell OTM call spread + OTM put spread; profit if stock stays in a range. Straddle: buy call + put same strike—profit from a big move either way; expensive." },
    { type: "interactive", heading: "Check Your Understanding", content: "Covered call caps upside.", component: "ConceptCheck", props: { question: "What is a covered call?", reveal: "You own the stock and sell a call. You collect premium and cap upside at the strike. If stock is above strike at expiration you may be assigned and sell at strike." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Covered call and cash-secured put = income. Spreads = defined risk. Always know max loss and break-evens before trading." },
  ]),
  createLesson("options-summary", 4, "Options: Summary", "options-summary", "10 min", ["Recap and when to use options"], [
    { type: "text", heading: "Recap", content: "Options are rights (calls = buy, puts = sell) with premium, strike, and expiration. Greeks (delta, theta, vega) drive price. Basic strategies: covered call, cash-secured put, spreads, protective put. Use for leverage, hedging, or income—and only with defined risk and position size. Never sell naked options until you understand margin and assignment." },
    { type: "interactive", heading: "Final Check", content: "Options and risk.", component: "ConceptCheck", props: { question: "What is the maximum loss when buying a call?", reveal: "The premium paid. You can lose 100% of what you paid; you are not obligated to exercise." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Options = leverage, hedging, income. Understand Greeks and max loss. Start with defined-risk strategies." },
  ], true),
];
