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
  moduleId: "markets-forex",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const forexDeepDiveLessons: Lesson[] = [
  createLesson("forex-what", 1, "What Is Forex Trading?", "forex-what", "10 min", ["Define forex", "Why it matters"], [
    { type: "text", heading: "Trading Currencies", content: "Forex (foreign exchange) is the market where currencies are traded. When you buy EUR/USD, you buy euros and sell US dollars. The price is how many dollars you need for one euro. It's the largest financial market in the world by volume—trillions of dollars trade every day." },
    { type: "interactive", heading: "Think It Through", content: "When you buy EUR/USD, what are you doing?", component: "ConceptCheck", props: { question: "When you buy EUR/USD, what are you doing?", reveal: "Buying euros and selling US dollars. You're always buying one currency and selling another in a pair." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Forex = trading currency pairs. You're always buying one currency and selling another." },
  ]),
  createLesson("forex-pairs", 2, "Currency Pairs: Base and Quote", "forex-pairs", "10 min", ["Base and quote", "How to read a pair"], [
    { type: "text", heading: "Base and Quote Currency", content: "Every pair has a base currency (first) and a quote currency (second). In EUR/USD, EUR is base, USD is quote. The price tells you how many units of the quote you need to buy one unit of the base. So EUR/USD 1.0850 means 1 euro costs 1.0850 US dollars." },
    { type: "interactive", heading: "Think It Through", content: "In EUR/USD, which is the base and which is the quote?", component: "ConceptCheck", props: { question: "In EUR/USD, which is the base and which is the quote?", reveal: "EUR is base (the one you're buying/selling), USD is quote (the price currency). Price = how much USD per 1 EUR." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Base = the one you're buying/selling. Quote = the price currency. Price = how much quote per 1 base." },
  ]),
  createLesson("forex-major-pairs", 3, "Major Pairs", "forex-major-pairs", "10 min", ["The seven majors", "Most liquid pairs"], [
    { type: "text", heading: "The Major Pairs", content: "Major pairs all include the US dollar: EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD. They have the tightest spreads and highest liquidity. Most beginners and day traders focus on these." },
    { type: "interactive", heading: "Think It Through", content: "Why do beginners usually focus on major pairs?", component: "ConceptCheck", props: { question: "Why do beginners usually focus on major pairs?", reveal: "They have the tightest spreads and highest liquidity—easiest to trade and lowest cost. All include the US dollar." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Majors = USD vs EUR, GBP, JPY, CHF, AUD, CAD, NZD. Best liquidity and lowest costs." },
  ]),
  createLesson("forex-minor-pairs", 4, "Minor Pairs (Crosses)", "forex-minor-pairs", "8 min", ["Cross-currency pairs", "No USD"], [
    { type: "text", heading: "Crosses", content: "Minor pairs don't include the US dollar—e.g. EUR/GBP, EUR/JPY, GBP/JPY. They're called crosses. Spreads are usually a bit wider than majors. Useful when you have a view on two non-USD currencies." },
    { type: "interactive", heading: "Think It Through", content: "What are minor pairs (crosses)?", component: "ConceptCheck", props: { question: "What are minor pairs (crosses)?", reveal: "Pairs that don't include the US dollar (e.g. EUR/GBP, EUR/JPY). Spreads are usually a bit wider than majors." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Minors = no USD (e.g. EUR/GBP). Slightly wider spreads than majors." },
  ]),
  createLesson("forex-exotic-pairs", 5, "Exotic Pairs", "forex-exotic-pairs", "8 min", ["Emerging market currencies", "Higher risk"], [
    { type: "text", heading: "Exotics", content: "Exotic pairs include a major and an emerging-market currency (e.g. USD/TRY, USD/ZAR). They often have wide spreads, lower liquidity, and higher volatility. Not ideal for beginners." },
    { type: "interactive", heading: "Think It Through", content: "Why are exotic pairs not ideal for beginners?", component: "ConceptCheck", props: { question: "Why are exotic pairs not ideal for beginners?", reveal: "Wide spreads, lower liquidity, and higher volatility. Trade with care once you have experience." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Exotics = major vs emerging currency. Wide spreads, more risk—trade with care." },
  ]),
  createLesson("forex-quoted", 6, "How Forex Is Quoted: Bid and Ask", "forex-quoted", "10 min", ["Bid/ask and spread", "Why it matters"], [
    { type: "text", heading: "Bid and Ask", content: "The bid is the price at which the market will buy from you; the ask is the price at which you can buy. You sell at the bid, buy at the ask. The spread = ask − bid. That's the broker's cost. Tighter spread = lower cost per trade." },
    { type: "interactive", heading: "Think It Through", content: "At which price do you buy—bid or ask?", component: "ConceptCheck", props: { question: "At which price do you buy—bid or ask?", reveal: "You buy at the ask. You sell at the bid. Spread = ask − bid; you want it small for lower cost." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Bid = sell price, ask = buy price. Spread = difference; you want it small." },
  ]),
  createLesson("forex-pips", 7, "Pips Explained", "forex-pips", "10 min", ["What a pip is", "Pip value"], [
    { type: "text", heading: "What Is a Pip?", content: "A pip (percentage in point) is the smallest common price move. For most pairs it's the 4th decimal: 0.0001. So if EUR/USD moves from 1.0850 to 1.0851, that's 1 pip. For JPY pairs the pip is often the 2nd decimal (0.01). Pips measure profit and loss and stop distances." },
    { type: "interactive", heading: "Think It Through", content: "If EUR/USD moves from 1.0850 to 1.0851, how many pips?", component: "ConceptCheck", props: { question: "If EUR/USD moves from 1.0850 to 1.0851, how many pips?", reveal: "1 pip. For most pairs 1 pip = 0.0001 (4th decimal). Used for risk and targets." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "1 pip = smallest standard move (e.g. 0.0001 for EUR/USD). Used for risk and targets." },
  ]),
  createLesson("forex-lots", 8, "Lots: Standard, Mini, Micro, Nano", "forex-lots", "10 min", ["Contract sizes", "Position sizing"], [
    { type: "text", heading: "Lot Sizes", content: "A standard lot = 100,000 units of the base currency. Mini = 10,000, micro = 1,000, nano = 100. So 0.1 lots = mini. Lot size determines how much each pip is worth. Smaller accounts use micro or nano to keep risk low." },
    { type: "interactive", heading: "Think It Through", content: "How many units is a standard lot?", component: "ConceptCheck", props: { question: "How many units is a standard lot?", reveal: "100,000 units of the base currency. Mini = 10k, micro = 1k, nano = 100. Choose lot size to match your risk." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Standard = 100k units. Mini/micro/nano = smaller. Choose lot size to match your risk." },
  ]),
  createLesson("forex-leverage", 9, "Leverage in Forex", "forex-leverage", "12 min", ["How leverage works", "Dangers"], [
    { type: "text", heading: "What Leverage Does", content: "Leverage lets you control a large position with a small deposit. With 50:1, $1,000 margin can control $50,000. Gains and losses are calculated on the full position size. A 1% move against you on 50:1 can wipe out half your margin." },
    { type: "warning", heading: "Common Mistake", content: "Using maximum leverage (100:1, 500:1) is dangerous. One bad trade can wipe the account. Use low leverage and strict risk (e.g. 1% per trade)." },
    { type: "interactive", heading: "Think It Through", content: "With 50:1 leverage, what can a 1% move against you do?", component: "ConceptCheck", props: { question: "With 50:1 leverage, what can a 1% move against you do?", reveal: "A 1% move against you can wipe out about half your margin. Leverage amplifies losses; use it sparingly." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Leverage amplifies both gains and losses. Use it sparingly; risk management is essential." },
  ]),
  createLesson("forex-hours", 10, "Forex Market Hours: 24/5", "forex-hours", "8 min", ["When forex trades", "Why 24/5"], [
    { type: "text", heading: "Never Sleeps (Almost)", content: "Forex trades 24 hours from Sunday evening to Friday evening (Eastern). Sessions roll: Sydney → Tokyo → London → New York. There's no single closing bell—when one center closes, another opens. That's why forex is 24/5." },
    { type: "interactive", heading: "Think It Through", content: "Why is forex called 24/5?", component: "ConceptCheck", props: { question: "Why is forex called 24/5?", reveal: "It's open 24 hours a day, 5 days a week (Sunday evening to Friday evening ET). When one session closes, another opens." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Forex is open 24 hours, 5 days a week. You can trade at almost any time." },
  ]),
  createLesson("forex-sessions", 11, "Trading Sessions: Asian, European, American", "forex-sessions", "10 min", ["Three main sessions", "When volume is highest"], [
    { type: "text", heading: "The Three Sessions", content: "Asian (Tokyo): roughly 7 PM–4 AM ET. European (London): 2 AM–11 AM ET. American (New York): 7 AM–4 PM ET. London and New York overlap (7 AM–11 AM ET) has the highest volume and tightest spreads. Asian is often quieter." },
    { type: "interactive", heading: "Think It Through", content: "When is forex volume usually highest?", component: "ConceptCheck", props: { question: "When is forex volume usually highest?", reveal: "During the London–New York overlap (roughly 7 AM–11 AM ET). Tightest spreads and clearest moves." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "London–New York overlap = most volume. Asian = often lower volume." },
  ]),
  createLesson("forex-best-times", 12, "Best Times to Trade Forex", "forex-best-times", "8 min", ["Session overlaps", "When to avoid"], [
    { type: "text", heading: "When to Trade", content: "Session overlaps (London–NY, Sydney–Tokyo) usually offer the best liquidity and clearest trends. Late Friday and Sunday open can be thin and erratic. Many traders avoid major news releases (NFP, FOMC) or trade with wider stops." },
    { type: "interactive", heading: "Think It Through", content: "When might traders avoid trading or use wider stops?", component: "ConceptCheck", props: { question: "When might traders avoid trading or use wider stops?", reveal: "Around major news (NFP, FOMC) and during thin periods (late Friday, Sunday open). Have a plan for news." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Overlaps = best liquidity. Avoid thin periods and trade news with a plan." },
  ]),
  createLesson("forex-what-moves", 13, "What Moves Currency Prices", "forex-what-moves", "12 min", ["Rates, data, geopolitics"], [
    { type: "text", heading: "Main Drivers", content: "Interest rate expectations: higher rates usually strengthen a currency. Economic data: strong GDP, jobs, inflation often support the currency. Geopolitics and risk sentiment: safe havens (JPY, CHF) gain in stress. Central bank talk and policy shifts move markets for days or weeks." },
    { type: "interactive", heading: "Think It Through", content: "What usually happens to a currency when interest rates rise?", component: "ConceptCheck", props: { question: "What usually happens to a currency when interest rates rise?", reveal: "It usually strengthens—higher rates attract capital. Watch central banks and key data releases." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Rates, economic data, and geopolitics drive forex. Watch central banks and key releases." },
  ]),
  createLesson("forex-central-banks", 14, "Central Banks: Fed, ECB, BOJ, BOE", "forex-central-banks", "10 min", ["Who they are", "Why they matter"], [
    { type: "text", heading: "The Big Four", content: "Federal Reserve (Fed) = US. European Central Bank (ECB) = eurozone. Bank of Japan (BOJ) = Japan. Bank of England (BOE) = UK. They set interest rates and QE. Their decisions and tone move currencies. Watch rate decisions and press conferences." },
    { type: "interactive", heading: "Think It Through", content: "Why do central bank meetings matter for forex?", component: "ConceptCheck", props: { question: "Why do central bank meetings matter for forex?", reveal: "They set interest rates and policy. Their decisions and tone move currencies for days or weeks. Watch rate decisions and press conferences." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Central banks set rates and policy. Their meetings are high-impact for forex." },
  ]),
  createLesson("forex-carry-trade", 15, "Carry Trade", "forex-carry-trade", "10 min", ["Interest rate differential", "Risk"], [
    { type: "text", heading: "What Is a Carry Trade?", content: "You borrow in a low-yield currency (e.g. JPY) and invest in a higher-yield currency (e.g. AUD). You earn the interest differential. It works until the high-yield currency falls—then you lose on the exchange rate. Popular in calm markets; dangerous when volatility spikes." },
    { type: "interactive", heading: "Think It Through", content: "What is the main risk of a carry trade?", component: "ConceptCheck", props: { question: "What is the main risk of a carry trade?", reveal: "The high-yield currency can fall—you lose on the exchange rate. Dangerous when volatility spikes." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Carry = profit from rate differential. Risk = the high-yield currency can fall." },
  ]),
  createLesson("forex-day-trading", 16, "Why Forex for Day Trading?", "forex-day-trading", "8 min", ["Liquidity, costs", "Accessibility"], [
    { type: "text", heading: "Advantages", content: "Forex offers deep liquidity in majors, low spreads, 24/5 access, and high leverage (use with caution). You can start with a small account. No PDT rule like US stocks. Many day traders use forex for these reasons—but discipline and risk management still matter most." },
    { type: "interactive", heading: "Think It Through", content: "Does forex have a Pattern Day Trader rule like US stocks?", component: "ConceptCheck", props: { question: "Does forex have a Pattern Day Trader rule like US stocks?", reveal: "No. Forex has no PDT rule, so you can day trade with a small account. Risk control is still key." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Forex suits day trading: liquid, low cost, 24/5, small capital. Risk control is still key." },
  ]),
  createLesson("forex-risks", 17, "Forex Risks", "forex-risks", "12 min", ["Leverage, volatility", "Scams"], [
    { type: "text", heading: "Key Risks", content: "Leverage can wipe an account quickly. Volatility can gap through stops. Unregulated or dishonest brokers can steal funds or manipulate prices. Overtrading and revenge trading are common. Protect yourself: use regulated brokers, low leverage, and strict risk rules." },
    { type: "warning", heading: "Red Flags", content: "Avoid brokers that promise guaranteed profits, aren't regulated, or make withdrawal difficult. Check regulation (FCA, ASIC, NFA, CySEC) before depositing." },
    { type: "interactive", heading: "Think It Through", content: "What should you check before depositing with a forex broker?", component: "ConceptCheck", props: { question: "What should you check before depositing with a forex broker?", reveal: "Regulation (FCA, ASIC, NFA, CySEC). Avoid those that promise guaranteed profits or make withdrawal difficult." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Risks: leverage, volatility, fraud. Use regulated brokers and strict risk management." },
  ]),
  createLesson("forex-broker", 18, "Choosing a Forex Broker", "forex-broker", "10 min", ["Regulation, spreads", "Execution"], [
    { type: "text", heading: "What to Look For", content: "Regulation in a strong jurisdiction (FCA, ASIC, NFA). Tight spreads on the pairs you trade. Fast, reliable execution. Easy deposits and withdrawals. Good platform and tools. Compare several brokers and read independent reviews." },
    { type: "interactive", heading: "Think It Through", content: "What should you prioritize when choosing a forex broker?", component: "ConceptCheck", props: { question: "What should you prioritize when choosing a forex broker?", reveal: "Regulation, spreads, execution, and withdrawal. Then platform and service. Compare several and read independent reviews." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Prioritize regulation, spreads, execution, and withdrawal. Then platform and service." },
  ]),
  createLesson("forex-demo", 19, "Demo Account Practice", "forex-demo", "8 min", ["Practice first", "What to test"], [
    { type: "text", heading: "Why Demo First", content: "Open a demo account and trade with virtual money. Learn the platform, test your strategy, and get used to pips and lots. Most brokers offer free demos. Only go live when you're consistent in demo and can afford to lose real money." },
    { type: "interactive", heading: "Think It Through", content: "When should you go live after demo?", component: "ConceptCheck", props: { question: "When should you go live after demo?", reveal: "When you're consistent in demo and can afford to lose real money. Learn the platform and strategy first." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Practice on demo. Learn the platform and strategy before risking real capital." },
  ], true),
];
