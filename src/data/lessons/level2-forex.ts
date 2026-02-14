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
  createLesson("forex-what", 1, "What Is Forex Trading?", "forex-what", "12 min", ["Define forex", "Why it matters", "The world's largest market"], [
    {
      type: "text",
      heading: "Trading Currencies",
      content:
        "Forex (foreign exchange) is the market where currencies are traded. When you buy EUR/USD, you buy euros and sell US dollars. The price is how many dollars you need for one euro. It's the largest financial market in the world by volume—trillions of dollars trade every day.\n\nEvery time you travel abroad and exchange money, you're participating in forex. Banks, corporations, governments, and retail traders all trade currencies. The difference is scale: a tourist might exchange $500; a central bank might move billions. The same mechanism—supply and demand for one currency versus another—drives the market.",
    },
    {
      type: "text",
      heading: "Why Forex Matters",
      content:
        "Currencies affect everything: the cost of imports and exports, corporate earnings (when converted to home currency), inflation, and interest rates. When the dollar strengthens, US consumers pay less for imported goods—but US exporters suffer. Forex traders bet on these moves. The market is open 24 hours a day, five days a week—when Sydney closes, Tokyo opens; when London closes, New York opens. There's always someone trading.",
    },
    {
      type: "analogy",
      heading: "The Exchange Booth Analogy",
      content:
        "Think of forex like a giant airport exchange booth—but instead of one booth, there are millions of them worldwide, all connected. You walk up and say 'I'll give you dollars for euros.' The rate (price) depends on how many people want dollars vs euros right now. When more people want euros, the price of euros (in dollars) goes up. That's forex: a global network of currency exchange, happening continuously.",
    },
    {
      type: "preview",
      heading: "Currency Pairs (Preview)",
      content:
        "Forex is always traded in pairs—EUR/USD, GBP/USD, USD/JPY. Each pair has a base currency and a quote currency. We'll cover how to read them in the next lesson. For now, know that every forex trade is a bet on one currency strengthening against another.",
    },
    { type: "interactive", heading: "Think It Through", content: "When you buy EUR/USD, what are you doing?", component: "ConceptCheck", props: { question: "When you buy EUR/USD, what are you doing?", reveal: "Buying euros and selling US dollars. You're always buying one currency and selling another in a pair." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Forex = trading currency pairs. You're always buying one currency and selling another. It's the world's largest market by volume." },
  ]),
  createLesson("forex-pairs", 2, "Currency Pairs: Base and Quote", "forex-pairs", "12 min", ["Base and quote", "How to read a pair", "Price interpretation"], [
    {
      type: "text",
      heading: "Base and Quote Currency",
      content:
        "Every pair has a base currency (first) and a quote currency (second). In EUR/USD, EUR is base, USD is quote. The price tells you how many units of the quote you need to buy one unit of the base. So EUR/USD 1.0850 means 1 euro costs 1.0850 US dollars.\n\nWhen the price goes UP, the base is strengthening against the quote. EUR/USD rising means euros are getting more expensive in dollars—the euro is strengthening. When the price goes DOWN, the base is weakening. Simple rule: up = base stronger, down = base weaker.",
    },
    {
      type: "text",
      heading: "How to Read a Pair",
      content:
        "In USD/JPY, the dollar is base and the yen is quote. A price of 150.00 means 1 US dollar costs 150 yen. So USD/JPY rising means the dollar is strengthening against the yen. GBP/USD: pound is base, dollar is quote. 1.2700 means 1 pound costs 1.27 dollars. Always ask: which currency am I buying? That's the base. What am I paying? That's the quote.",
    },
    {
      type: "analogy",
      heading: "The Price Tag Analogy",
      content:
        "Think of a currency pair like a price tag in a store. The item (base) has a price in the local currency (quote). EUR/USD 1.0850 = the item (1 euro) costs 1.0850 dollars. When the price tag changes, the item got more or less expensive. In forex, the 'item' is always 1 unit of the base currency, and the 'price' is in the quote currency.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Don't confuse USD/JPY with JPY/USD. They're inverses. USD/JPY 150 means 1 USD = 150 JPY. JPY/USD would be 1/150 ≈ 0.0067 (1 JPY = 0.0067 USD). Brokers quote one convention—usually the standard (e.g. EUR/USD, not USD/EUR). Know which convention your broker uses.",
    },
    { type: "interactive", heading: "Think It Through", content: "In EUR/USD, which is the base and which is the quote?", component: "ConceptCheck", props: { question: "In EUR/USD, which is the base and which is the quote?", reveal: "EUR is base (the one you're buying/selling), USD is quote (the price currency). Price = how much USD per 1 EUR." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Base = the one you're buying/selling. Quote = the price currency. Price = how much quote per 1 base. Up = base stronger; down = base weaker." },
  ]),
  createLesson("forex-major-pairs", 3, "Major Pairs", "forex-major-pairs", "12 min", ["The seven majors", "Most liquid pairs", "Why start here"], [
    {
      type: "text",
      heading: "The Major Pairs",
      content:
        "Major pairs all include the US dollar: EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD. They have the tightest spreads and highest liquidity. Most beginners and day traders focus on these.\n\nThese seven pairs account for the bulk of forex volume. EUR/USD alone is roughly 25% of all forex trading. When liquidity is high, spreads (the cost of trading) are low—often 1 pip or less for EUR/USD during London–New York overlap. That matters: tight spreads mean you keep more of your profit.",
    },
    {
      type: "text",
      heading: "Why Majors Are Best for Beginners",
      content:
        "Majors are easy to analyze—there's tons of data, news, and research. Economic releases (US jobs, ECB rates, BOJ policy) move these pairs predictably. You can find charts, analysis, and community discussion. Exotic pairs (USD/TRY, USD/ZAR) have wider spreads, less liquidity, and can gap violently. Start with EUR/USD or GBP/USD; master those before branching out.",
    },
    {
      type: "analogy",
      heading: "The Highway Analogy",
      content:
        "Think of major pairs like major highways—lots of traffic, well-maintained, easy to navigate. Minor pairs (crosses) are like secondary roads—less traffic, maybe a few potholes. Exotic pairs are like dirt roads—bumpy, unpredictable, easy to get stuck. Beginners should drive the highways first.",
    },
    { type: "pro-tip", heading: "Pro Tip", content: "EUR/USD and GBP/USD often move similarly (both vs USD). If you're learning, pick one and master it. Don't scatter attention across seven pairs at once." },
    { type: "interactive", heading: "Think It Through", content: "Why do beginners usually focus on major pairs?", component: "ConceptCheck", props: { question: "Why do beginners usually focus on major pairs?", reveal: "They have the tightest spreads and highest liquidity—easiest to trade and lowest cost. All include the US dollar." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Majors = USD vs EUR, GBP, JPY, CHF, AUD, CAD, NZD. Best liquidity and lowest costs. Start here." },
  ]),
  createLesson("forex-minor-pairs", 4, "Minor Pairs (Crosses)", "forex-minor-pairs", "10 min", ["Cross-currency pairs", "No USD", "When to use them"], [
    {
      type: "text",
      heading: "Crosses",
      content:
        "Minor pairs don't include the US dollar—e.g. EUR/GBP, EUR/JPY, GBP/JPY. They're called crosses. Spreads are usually a bit wider than majors. Useful when you have a view on two non-USD currencies.\n\nEUR/GBP = euro vs pound. EUR/JPY = euro vs yen. GBP/JPY (the 'dragon') = pound vs yen—often volatile. These pairs are derived from the majors (EUR/JPY = EUR/USD ÷ USD/JPY) but trade as separate instruments. When the dollar is range-bound, crosses can offer clearer trends.",
    },
    {
      type: "analogy",
      heading: "The Side Street Analogy",
      content:
        "Think of majors as main streets (busy, tight spreads) and crosses as side streets (less traffic, slightly wider spreads). Side streets can get you where you need to go—sometimes more directly if you have a view on EUR vs JPY without caring about the dollar. But they're not as crowded, so execution can cost a bit more.",
    },
    { type: "interactive", heading: "Think It Through", content: "What are minor pairs (crosses)?", component: "ConceptCheck", props: { question: "What are minor pairs (crosses)?", reveal: "Pairs that don't include the US dollar (e.g. EUR/GBP, EUR/JPY). Spreads are usually a bit wider than majors." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Minors = no USD (e.g. EUR/GBP). Slightly wider spreads than majors. Useful for non-USD views." },
  ]),
  createLesson("forex-exotic-pairs", 5, "Exotic Pairs", "forex-exotic-pairs", "10 min", ["Emerging market currencies", "Higher risk", "When to avoid"], [
    {
      type: "text",
      heading: "Exotics",
      content:
        "Exotic pairs include a major and an emerging-market currency (e.g. USD/TRY, USD/ZAR, USD/MXN). They often have wide spreads (10–50+ pips), lower liquidity, and higher volatility. Not ideal for beginners.\n\nExotics can gap on political news, central bank surprises, or capital controls. USD/TRY (Turkish lira) has moved 10% in a day. Spreads eat into small profits. Only trade exotics when you have experience and a clear edge—and use small size.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Exotic pairs are dangerous for beginners. Wide spreads mean you start every trade underwater. Low liquidity means stops can slip—you might get filled far worse than your stop price. Political risk can gap the market overnight. Avoid until you're consistently profitable in majors.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why are exotic pairs not ideal for beginners?", component: "ConceptCheck", props: { question: "Why are exotic pairs not ideal for beginners?", reveal: "Wide spreads, lower liquidity, and higher volatility. Trade with care once you have experience." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Exotics = major vs emerging currency. Wide spreads, more risk—avoid until experienced." },
  ]),
  createLesson("forex-quoted", 6, "How Forex Is Quoted: Bid and Ask", "forex-quoted", "12 min", ["Bid/ask and spread", "Why it matters", "Trading costs"], [
    {
      type: "text",
      heading: "Bid and Ask",
      content:
        "The bid is the price at which the market will buy from you; the ask is the price at which you can buy. You sell at the bid, buy at the ask. The spread = ask − bid. That's the broker's cost. Tighter spread = lower cost per trade.\n\nExample: EUR/USD bid 1.0850, ask 1.0852. Spread = 2 pips. If you buy at 1.0852, the pair must move up 2 pips before you're break-even (excluding commission). The spread is a hidden cost—you pay it on every round-trip trade. On a 1-pip spread for EUR/USD, a 10-pip scalp means you're giving up 10% to the spread.",
    },
    {
      type: "text",
      heading: "Why Spread Matters",
      content:
        "Scalpers and day traders care most about spread—they make many small trades, so spread eats into profits. A 2-pip spread on a 5-pip target means 40% of your potential profit is gone before price moves. Swing traders care less—a 2-pip spread on a 100-pip move is negligible. Always check spread on the pairs and times you trade. Spreads widen during low liquidity (Asian session, news).",
    },
    {
      type: "analogy",
      heading: "The Pawn Shop Analogy",
      content:
        "Think of bid/ask like a pawn shop. The pawn shop buys (bid) at $80 and sells (ask) at $100. The $20 difference is their spread—their profit. You buy at the ask ($100); if you sell back immediately, you get the bid ($80). You lose $20. In forex, the spread is smaller—but the same idea. You're always 'buying high and selling low' relative to the mid-price. The spread is the cost of instant liquidity.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Don't ignore spread when choosing a pair or broker. Some brokers offer 'zero spread' but charge commission—compare total cost. A 0.5 pip spread + $7 commission might be worse than a 1.5 pip spread with no commission for small lots. Do the math.",
    },
    { type: "interactive", heading: "Think It Through", content: "At which price do you buy—bid or ask?", component: "ConceptCheck", props: { question: "At which price do you buy—bid or ask?", reveal: "You buy at the ask. You sell at the bid. Spread = ask − bid; you want it small for lower cost." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Bid = sell price, ask = buy price. Spread = difference; you want it small. Spread is a cost on every trade." },
  ]),
  createLesson("forex-pips", 7, "Pips Explained", "forex-pips", "12 min", ["What a pip is", "Pip value", "Fractional pips"], [
    {
      type: "text",
      heading: "What Is a Pip?",
      content:
        "A pip (percentage in point) is the smallest common price move. For most pairs it's the 4th decimal: 0.0001. So if EUR/USD moves from 1.0850 to 1.0851, that's 1 pip. For JPY pairs the pip is often the 2nd decimal (0.01). So USD/JPY 150.00 to 150.01 = 1 pip. Pips measure profit and loss and stop distances.\n\nWhy does this matter? When you set a stop loss 30 pips away, you know exactly how far price can move before you're stopped out. When you target 50 pips, you have a clear profit goal. Pips standardize risk and reward across different pairs.",
    },
    {
      type: "text",
      heading: "Pip Value",
      content:
        "Pip value depends on lot size and the pair. For a standard lot (100,000 units) of EUR/USD, 1 pip ≈ $10. For a mini lot (10,000), 1 pip ≈ $1. For JPY pairs, the math is slightly different (divide by the exchange rate). Most platforms calculate pip value for you—use a pip calculator or your broker's tool to know your risk per pip before trading.",
    },
    {
      type: "analogy",
      heading: "The Ruler Analogy",
      content:
        "Think of pips like inches on a ruler. You measure distance in inches; you measure forex moves in pips. A 50-pip move is like a 50-inch distance—you know exactly how far that is. Without pips, you'd say 'price moved a little' or 'a lot'—vague. With pips, you say 'price moved 30 pips'—precise. Pips are the ruler of forex.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Some brokers quote 5 decimal places (e.g. 1.08501). The 5th decimal is a 'pipette' or fractional pip. 1 pip = 10 pipettes. For most retail trading, 1 pip is precise enough—don't get lost in fractional pips.",
    },
    { type: "interactive", heading: "Think It Through", content: "If EUR/USD moves from 1.0850 to 1.0851, how many pips?", component: "ConceptCheck", props: { question: "If EUR/USD moves from 1.0850 to 1.0851, how many pips?", reveal: "1 pip. For most pairs 1 pip = 0.0001 (4th decimal). Used for risk and targets." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "1 pip = smallest standard move (e.g. 0.0001 for EUR/USD). Used for risk and targets. Pip value depends on lot size." },
  ]),
  createLesson("forex-lots", 8, "Lots: Standard, Mini, Micro, Nano", "forex-lots", "12 min", ["Contract sizes", "Position sizing", "Pip value by lot"], [
    {
      type: "text",
      heading: "Lot Sizes",
      content:
        "A standard lot = 100,000 units of the base currency. Mini = 10,000, micro = 1,000, nano = 100. So 0.1 lots = mini. Lot size determines how much each pip is worth. Smaller accounts use micro or nano to keep risk low.\n\nFor EUR/USD: 1 standard lot = 100,000 euros. 1 pip ≈ $10. 1 mini lot (0.1) = 10,000 euros; 1 pip ≈ $1. 1 micro lot (0.01) = 1,000 euros; 1 pip ≈ $0.10. With a $1,000 account and 1% risk ($10), a 50-pip stop means you can afford to lose $10 over 50 pips = $0.20 per pip = 0.02 lots (2 micro lots).",
    },
    {
      type: "text",
      heading: "Position Sizing",
      content:
        "Lot size is how you control risk. Bigger lots = bigger P&L per pip. If you risk 1% per trade, your lot size should make your stop distance (in pips) × pip value = 1% of account. Use a position size calculator or do the math: Account × Risk% ÷ (Stop pips × Pip value per lot) = lots. Never guess—calculate.",
    },
    {
      type: "analogy",
      heading: "The Gas Pedal Analogy",
      content:
        "Think of lot size like a gas pedal. Press lightly (micro lots) and you move slowly—small gains, small losses. Press hard (standard lots) and you accelerate—big gains, big losses. Same road (market), different speed (position size). Beginners should drive slowly—micro lots until they're consistent.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Don't trade standard lots with a $500 account. One bad trade can wipe you out. A 100-pip move against you on 1 standard lot = $1,000 loss. Match lot size to account size and risk tolerance. Micro and nano lots exist for a reason—use them.",
    },
    { type: "interactive", heading: "Think It Through", content: "How many units is a standard lot?", component: "ConceptCheck", props: { question: "How many units is a standard lot?", reveal: "100,000 units of the base currency. Mini = 10k, micro = 1k, nano = 100. Choose lot size to match your risk." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Standard = 100k units. Mini/micro/nano = smaller. Choose lot size to match your risk—calculate, don't guess." },
  ]),
  createLesson("forex-leverage", 9, "Leverage in Forex", "forex-leverage", "14 min", ["How leverage works", "Dangers", "Using leverage safely"], [
    {
      type: "text",
      heading: "What Leverage Does",
      content:
        "Leverage lets you control a large position with a small deposit. With 50:1, $1,000 margin can control $50,000. Gains and losses are calculated on the full position size. A 1% move against you on 50:1 can wipe out half your margin.\n\nExample: You have $10,000 and use 50:1. You control $500,000 (5 standard lots of EUR/USD). A 100-pip move against you (about 1%) = $5,000 loss—half your account. Leverage doesn't change the market; it multiplies your exposure. Same move, bigger P&L.",
    },
    {
      type: "text",
      heading: "Using Leverage Safely",
      content:
        "Pros use leverage to increase position size while keeping risk low. With 1% risk per trade and a 50-pip stop, you might use 0.2 lots on a $10,000 account—that's conservative leverage. The key: leverage is a tool, not a goal. Use it to size positions appropriately. Don't use maximum leverage 'because it's there.' Most brokers offer 50:1, 100:1, or 500:1—you don't have to use it all.",
    },
    {
      type: "analogy",
      heading: "The Amplifier Analogy",
      content:
        "Think of leverage like a stereo amplifier. Turn it up and the music gets louder—but distort it and you blow the speakers. Leverage amplifies your gains and losses. Use it at a reasonable level and you can hear the music. Crank it to max and one bad note (trade) blows everything. Pros keep the volume at a level where they can survive bad songs.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Using maximum leverage (100:1, 500:1) is dangerous. One bad trade can wipe the account. A 20-pip move against you on 500:1 can eliminate your margin. Use low leverage (10:1 or 20:1) when learning. Even experienced traders rarely use more than 50:1. Leverage is the number-one killer of forex accounts.",
    },
    { type: "pro-tip", heading: "Pro Tip", content: "Risk 1% per trade regardless of leverage. If you have $10,000, risk $100 per trade. Size your lot so that your stop distance × pip value = $100. Leverage becomes irrelevant—you're controlling risk, not chasing size." },
    { type: "interactive", heading: "Think It Through", content: "With 50:1 leverage, what can a 1% move against you do?", component: "ConceptCheck", props: { question: "With 50:1 leverage, what can a 1% move against you do?", reveal: "A 1% move against you can wipe out about half your margin. Leverage amplifies losses; use it sparingly." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Leverage amplifies both gains and losses. Use it sparingly; risk 1% per trade. Leverage kills accounts when abused." },
  ]),
  createLesson("forex-hours", 10, "Forex Market Hours: 24/5", "forex-hours", "12 min", ["When forex trades", "Why 24/5", "Session rollover"], [
    {
      type: "text",
      heading: "Never Sleeps (Almost)",
      content:
        "Forex trades 24 hours from Sunday evening to Friday evening (Eastern). Sessions roll: Sydney → Tokyo → London → New York. There's no single closing bell—when one center closes, another opens. That's why forex is 24/5.\n\nSunday 5 PM Eastern: Sydney opens. A few hours later Tokyo joins. Then London (around 2–3 AM ET), then New York (7 AM ET). Friday 5 PM ET: New York closes and the market shuts until Sunday. No weekend trading—banks and liquidity providers are offline.",
    },
    {
      type: "analogy",
      heading: "The Relay Race Analogy",
      content:
        "Think of forex like a relay race. When the Asian runner (Tokyo) hands off the baton, the European runner (London) takes over. When London hands off, New York runs. The race never stops during the week—someone is always holding the baton. That's why you can trade at 3 AM or 3 PM—different runners are on the track.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why is forex called 24/5?", component: "ConceptCheck", props: { question: "Why is forex called 24/5?", reveal: "It's open 24 hours a day, 5 days a week (Sunday evening to Friday evening ET). When one session closes, another opens." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Forex is open 24 hours, 5 days a week. Sessions roll Sydney → Tokyo → London → New York. No weekend trading." },
  ]),
  createLesson("forex-sessions", 11, "Trading Sessions: Asian, European, American", "forex-sessions", "12 min", ["Three main sessions", "When volume is highest", "Session characteristics"], [
    {
      type: "text",
      heading: "The Three Sessions",
      content:
        "Asian (Tokyo): roughly 7 PM–4 AM ET. European (London): 2 AM–11 AM ET. American (New York): 7 AM–4 PM ET. London and New York overlap (7 AM–11 AM ET) has the highest volume and tightest spreads. Asian is often quieter.\n\nAsian session: JPY pairs (USD/JPY, EUR/JPY) are most active. London: EUR, GBP, CHF pairs move. New York: USD pairs. During the London–NY overlap, all major pairs see heavy volume—that's when big moves and clean trends often happen. If you're day trading, that 4-hour window is prime time.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Check your time zone. If you're in London, the overlap is midday for you. In New York, it's the morning. In Asia, the overlap might be late night—adjust your schedule or focus on Asian session pairs (USD/JPY, AUD/USD) when London/NY are closed.",
    },
    { type: "interactive", heading: "Think It Through", content: "When is forex volume usually highest?", component: "ConceptCheck", props: { question: "When is forex volume usually highest?", reveal: "During the London–New York overlap (roughly 7 AM–11 AM ET). Tightest spreads and clearest moves." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "London–New York overlap = most volume. Asian = often lower volume. Match your pairs to the active session." },
  ]),
  createLesson("forex-best-times", 12, "Best Times to Trade Forex", "forex-best-times", "12 min", ["Session overlaps", "When to avoid", "News and liquidity"], [
    {
      type: "text",
      heading: "When to Trade",
      content:
        "Session overlaps (London–NY, Sydney–Tokyo) usually offer the best liquidity and clearest trends. Late Friday and Sunday open can be thin and erratic. Many traders avoid major news releases (NFP, FOMC) or trade with wider stops.\n\nBest times: London open (2–3 AM ET), NY open (8–10 AM ET), and the full overlap (7–11 AM ET). Worst times: late Friday (after 12 PM ET), Sunday first hours (erratic), and the 30 minutes before/after major news (NFP, FOMC, ECB)—spreads widen and price can spike both ways.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Trading the first hour of Sunday open is risky. Volume is thin, spreads wide, and price can gap from Friday's close. Wait at least 1–2 hours for liquidity to build. Same for late Friday—don't hold positions into the weekend unless you're swing trading and accept gap risk.",
    },
    { type: "interactive", heading: "Think It Through", content: "When might traders avoid trading or use wider stops?", component: "ConceptCheck", props: { question: "When might traders avoid trading or use wider stops?", reveal: "Around major news (NFP, FOMC) and during thin periods (late Friday, Sunday open). Have a plan for news." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Overlaps = best liquidity. Avoid thin periods (late Fri, Sun open) and trade news with a plan or wider stops." },
  ]),
  createLesson("forex-what-moves", 13, "What Moves Currency Prices", "forex-what-moves", "14 min", ["Rates, data, geopolitics", "Safe havens"], [
    {
      type: "text",
      heading: "Main Drivers",
      content:
        "Interest rate expectations: higher rates usually strengthen a currency. Economic data: strong GDP, jobs, inflation often support the currency. Geopolitics and risk sentiment: safe havens (JPY, CHF) gain in stress. Central bank talk and policy shifts move markets for days or weeks.\n\nWhen the Fed signals rate hikes, the dollar tends to rise—capital flows to higher yields. When US jobs data beats expectations, USD often strengthens. When global risk appetite falls (stock market selloff, crisis), traders buy JPY and CHF and sell riskier currencies (AUD, emerging markets). Keep an economic calendar; know when key data and central bank meetings hit.",
    },
    {
      type: "analogy",
      heading: "The Magnet Analogy",
      content:
        "Think of interest rates as magnets. Higher rates attract capital—money flows where it gets paid more. So when the Fed raises rates and the ECB doesn't, money flows into dollars and out of euros. The dollar strengthens. When risk spikes, money flows to 'safe' currencies (JPY, CHF) like people running to a shelter. Rates and risk sentiment are the two biggest magnets in forex.",
    },
    { type: "interactive", heading: "Think It Through", content: "What usually happens to a currency when interest rates rise?", component: "ConceptCheck", props: { question: "What usually happens to a currency when interest rates rise?", reveal: "It usually strengthens—higher rates attract capital. Watch central banks and key data releases." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Rates, economic data, and geopolitics drive forex. Safe havens (JPY, CHF) gain in stress. Watch central banks and the calendar." },
  ]),
  createLesson("forex-central-banks", 14, "Central Banks: Fed, ECB, BOJ, BOE", "forex-central-banks", "12 min", ["Who they are", "Why they matter", "What to watch"], [
    {
      type: "text",
      heading: "The Big Four",
      content:
        "Federal Reserve (Fed) = US. European Central Bank (ECB) = eurozone. Bank of Japan (BOJ) = Japan. Bank of England (BOE) = UK. They set interest rates and QE. Their decisions and tone move currencies. Watch rate decisions and press conferences.\n\nFed: FOMC meetings (8x/year), dot plot, Powell's presser—drive USD. ECB: Lagarde, rate decisions—drive EUR. BOJ: Kuroda/Ueda, yield curve control—drive JPY. BOE: rate decisions—drive GBP. One hawkish surprise (rates higher than expected) can move a pair 100+ pips in minutes.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Don't trade the initial spike on a central bank release—spreads widen and price can whipsaw. Wait 15–30 minutes for the market to digest. Or trade the direction after the first clear move. The press conference often matters more than the rate decision itself—tone (hawkish/dovish) sets the trend.",
    },
    { type: "interactive", heading: "Think It Through", content: "Why do central bank meetings matter for forex?", component: "ConceptCheck", props: { question: "Why do central bank meetings matter for forex?", reveal: "They set interest rates and policy. Their decisions and tone move currencies for days or weeks. Watch rate decisions and press conferences." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Central banks set rates and policy. Fed, ECB, BOJ, BOE drive USD, EUR, JPY, GBP. Their meetings are high-impact." },
  ]),
  createLesson("forex-carry-trade", 15, "Carry Trade", "forex-carry-trade", "12 min", ["Interest rate differential", "Risk", "When it works"], [
    {
      type: "text",
      heading: "What Is a Carry Trade?",
      content:
        "You borrow in a low-yield currency (e.g. JPY) and invest in a higher-yield currency (e.g. AUD). You earn the interest differential. It works until the high-yield currency falls—then you lose on the exchange rate. Popular in calm markets; dangerous when volatility spikes.\n\nExample: Sell JPY, buy AUD. Australia pays 4%, Japan pays 0%—you earn the spread (positive carry). But if AUD falls 5% vs JPY, you lose more on the FX move than you gained in interest. Carry trades get unwound fast in crises—everyone sells the high-yielder and buys the funding currency (JPY).",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Carry trades blow up when volatility spikes. 2008, 2020—funding currencies (JPY) rallied hard as carry was unwound. If you run carry, use strict stops and size small. Don't assume the differential will protect you when the market panics.",
    },
    { type: "interactive", heading: "Think It Through", content: "What is the main risk of a carry trade?", component: "ConceptCheck", props: { question: "What is the main risk of a carry trade?", reveal: "The high-yield currency can fall—you lose on the exchange rate. Dangerous when volatility spikes." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Carry = profit from rate differential. Risk = the high-yield currency can fall. Unwinds are violent in stress." },
  ]),
  createLesson("forex-day-trading", 16, "Why Forex for Day Trading?", "forex-day-trading", "12 min", ["Liquidity, costs", "Accessibility", "No PDT"], [
    {
      type: "text",
      heading: "Advantages",
      content:
        "Forex offers deep liquidity in majors, low spreads, 24/5 access, and high leverage (use with caution). You can start with a small account. No PDT rule like US stocks. Many day traders use forex for these reasons—but discipline and risk management still matter most.\n\nUS stocks: Pattern Day Trader rule limits you to 3 day trades per 5 days if account < $25k. Forex: no such rule. You can day trade with $500 (not that you should risk it all). You can also trade evenings or early mornings—whenever London or NY is open. Flexibility is a real advantage.",
    },
    {
      type: "analogy",
      heading: "The 24-Hour Gym Analogy",
      content:
        "Stocks are like a gym that's open 9:30–4. Forex is like a 24-hour gym. If you have a day job, you can 'work out' (trade) before or after work. You're not locked into US market hours. That doesn't mean you should trade at 2 AM—but the option exists. Match your schedule to the session that fits (e.g. London if you're in Europe, NY if you're in the Americas).",
    },
    { type: "interactive", heading: "Think It Through", content: "Does forex have a Pattern Day Trader rule like US stocks?", component: "ConceptCheck", props: { question: "Does forex have a Pattern Day Trader rule like US stocks?", reveal: "No. Forex has no PDT rule, so you can day trade with a small account. Risk control is still key." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Forex suits day trading: liquid, low cost, 24/5, no PDT. Risk control and discipline still matter most." },
  ]),
  createLesson("forex-risks", 17, "Forex Risks", "forex-risks", "14 min", ["Leverage, volatility", "Scams", "Protection"], [
    {
      type: "text",
      heading: "Key Risks",
      content:
        "Leverage can wipe an account quickly. Volatility can gap through stops. Unregulated or dishonest brokers can steal funds or manipulate prices. Overtrading and revenge trading are common. Protect yourself: use regulated brokers, low leverage, and strict risk rules.\n\nWeekend gaps: if something happens Saturday (e.g. bank failure), the market opens Sunday with a huge gap—your stop might not protect you. Slippage: in fast markets, your fill can be worse than your stop price. Only trade with money you can afford to lose.",
    },
    {
      type: "warning",
      heading: "Red Flags",
      content:
        "Avoid brokers that promise guaranteed profits, aren't regulated, or make withdrawal difficult. Check regulation (FCA, ASIC, NFA, CySEC) before depositing. If a 'manager' calls you and pressures you to deposit more, it's a scam. Real brokers don't cold-call. If withdrawals are delayed or denied, raise the alarm.",
    },
    { type: "pro-tip", heading: "Pro Tip", content: "Use only brokers regulated in the UK (FCA), Australia (ASIC), US (NFA/CFTC), or EU (CySEC). Check the regulator's website to confirm the license. Clone firms and fake regulators exist—verify independently." },
    { type: "interactive", heading: "Think It Through", content: "What should you check before depositing with a forex broker?", component: "ConceptCheck", props: { question: "What should you check before depositing with a forex broker?", reveal: "Regulation (FCA, ASIC, NFA, CySEC). Avoid those that promise guaranteed profits or make withdrawal difficult." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Risks: leverage, volatility, fraud, gaps. Use regulated brokers and strict risk management. Verify regulation independently." },
  ]),
  createLesson("forex-broker", 18, "Choosing a Forex Broker", "forex-broker", "12 min", ["Regulation, spreads", "Execution", "Withdrawals"], [
    {
      type: "text",
      heading: "What to Look For",
      content:
        "Regulation in a strong jurisdiction (FCA, ASIC, NFA). Tight spreads on the pairs you trade. Fast, reliable execution. Easy deposits and withdrawals. Good platform and tools. Compare several brokers and read independent reviews.\n\nExecution: ECN/STP brokers often offer raw spread + commission; market makers offer no commission but wider spread. For active traders, compare total cost. Withdrawals: how fast? Any fees? Read the fine print. Some brokers make it easy to deposit and hard to withdraw—red flag.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Start with a small deposit. Test execution, spreads, and withdrawal with a few hundred dollars before committing more. If anything feels off (requotes, slow fills, withdrawal delays), switch brokers.",
    },
    { type: "interactive", heading: "Think It Through", content: "What should you prioritize when choosing a forex broker?", component: "ConceptCheck", props: { question: "What should you prioritize when choosing a forex broker?", reveal: "Regulation, spreads, execution, and withdrawal. Then platform and service. Compare several and read independent reviews." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Prioritize regulation, spreads, execution, and withdrawal. Test with a small deposit first." },
  ]),
  createLesson("forex-demo", 19, "Demo Account Practice", "forex-demo", "12 min", ["Practice first", "What to test", "When to go live"], [
    {
      type: "text",
      heading: "Why Demo First",
      content:
        "Open a demo account and trade with virtual money. Learn the platform, test your strategy, and get used to pips and lots. Most brokers offer free demos. Only go live when you're consistent in demo and can afford to lose real money.\n\nUse demo to: (1) Learn order types, lot sizing, and the chart. (2) Test your strategy—does it hold up over 50+ trades? (3) Practice discipline—do you follow your rules when there's no real money? Demo psychology is different from live—but it's still the best training ground. Don't skip it.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Don't stay in demo forever. At some point you need skin in the game to feel real emotion. But don't go live after one good week—that's luck. Aim for at least 1–3 months of consistent demo results and a clear plan. Then start live with the smallest size you can.",
    },
    { type: "interactive", heading: "Think It Through", content: "When should you go live after demo?", component: "ConceptCheck", props: { question: "When should you go live after demo?", reveal: "When you're consistent in demo and can afford to lose real money. Learn the platform and strategy first." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Practice on demo. Learn platform and strategy; test over many trades. Go live only when consistent and with money you can afford to lose." },
  ], true),
];
