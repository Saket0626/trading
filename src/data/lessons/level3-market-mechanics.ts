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
  level: 3,
  moduleId: "market-mechanics",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const marketMechanicsLessons: Lesson[] = [
  createLesson("order-types", 1, "Market, Limit, and Stop Orders", "order-types", "22 min", ["When to use each order type", "Pros and cons"], [
    {
      type: "text",
      heading: "Market Orders",
      content:
        "A market order tells the broker to execute immediately at the best available price. You get filled quickly, but the price can slip in fast or thin markets—you might get a worse fill than the last traded price. Use when you need to get in or out now (e.g. closing before the bell) and liquidity is good.\n\nFor stop losses, a stop-market order becomes a market order when price hits your level; you're guaranteed an exit but may get slippage. In a fast drop, your stop at $50 might fill at $49.50. That's the trade-off: guarantee of exit vs. price certainty. For most traders, guaranteed exit is worth the slippage risk on stops.",
    },
    {
      type: "text",
      heading: "Limit Orders",
      content:
        "A limit order executes only at your specified price or better. You control the price: for a buy, you won't pay more than your limit; for a sell, you won't receive less. The trade-off: the order may not fill if price never reaches your level. Use for patient entries (e.g. 'buy when it pulls back to 50') or when you want to avoid paying the spread.\n\nStop-limit orders combine both: when price hits your stop, a limit order is placed—more control but risk of no fill in a fast move. If price gaps through your level, your stop-limit might not fill and you're still in the trade. For stop losses, many pros prefer stop-market (guaranteed exit) over stop-limit (might not fill). For entries, limit orders give you price control.",
    },
    {
      type: "text",
      heading: "Trailing Stops and Bracket Orders",
      content:
        "A trailing stop moves with price: e.g. keep the stop 2× ATR below the current price so you lock in profit as the trade runs. Bracket orders submit entry + stop loss + take profit together (OCO-style), so you don't forget to set the stop. Time-in-force: day order expires at end of day; GTC (good till canceled) stays until filled or you cancel.\n\nTrailing stops are great for letting winners run—they lock in profit as price moves in your favor. But in choppy markets they can get you stopped out on normal pullbacks. Use them when you have a clear trend. Bracket orders are excellent for discipline: you can't 'forget' the stop when you're focused on the entry.",
    },
    {
      type: "analogy",
      heading: "The Thermostat Analogy",
      content:
        "A limit order is like setting a thermostat: 'I'll buy when the price drops to 50' or 'I'll sell when it hits 55.' You've set your price; the market has to come to you. A market order is like flipping the AC on full blast immediately—you get action now, but you might pay more (or get less) than you expected. Each has its place: limits for patience, markets for urgency.",
    },
    { type: "interactive", heading: "Check Your Understanding", content: "Order type choice affects fill and control.", component: "ConceptCheck", props: { question: "When would you use a limit order instead of a market order?", reveal: "When you want a specific price or better and can wait. Limit orders give price control but may not fill; market orders fill quickly but may slip." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Market = immediate fill, possible slippage. Limit = price control, may not fill. Use the right type for entry vs exit and for volatility." },
  ], true),
  createLesson("order-execution", 2, "How Orders Get Filled", "order-execution", "16 min", ["Slippage, liquidity", "Market makers vs ECN"], [
    { type: "text", heading: "Slippage and Liquidity", content: "Slippage is when you get a worse fill than expected—e.g. you hit 'buy' at 100.00 but get filled at 100.05. It happens in fast markets (price moves between click and fill) or when liquidity is thin (not enough orders at your price). To minimize: use limit orders when you can; trade liquid instruments; avoid trading through major news spikes if you need a precise price. Volume is a proxy for liquidity: high volume usually means tighter spreads and less slippage." },
    { type: "text", heading: "Order Book and Execution", content: "The order book shows buy orders (bids) and sell orders (asks) at each price level. The spread is the difference between best bid and best ask. Market makers provide liquidity by quoting both sides and may trade against your order; ECNs (Electronic Communication Networks) match you with other participants. Understanding that your market order can 'walk the book' (take multiple price levels) in thin conditions helps you appreciate why limit orders and liquidity matter." },
    { type: "warning", heading: "Common Mistake", content: "Assuming you'll always get the last price. In volatile or illiquid markets, last price and your fill can differ a lot. Plan for slippage in risk and position size." },
    { type: "interactive", heading: "Think It Through", content: "What causes slippage?", component: "ConceptCheck", props: { question: "What causes slippage?", reveal: "Fast markets (price moves before your order fills) and low liquidity (not enough size at your price). You get a worse fill than expected. Use limits and liquid names to reduce it." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Slippage = worse fill than expected. Caused by speed and thin liquidity. Use limits where possible; trade liquid instruments." },
  ], true),
  createLesson("mechanics-summary", 3, "Market Mechanics: Summary", "mechanics-summary", "8 min", ["Recap order types and execution"], [
    { type: "text", heading: "Recap", content: "Market orders fill fast but can slip; limit orders control price but may not fill. Stop and trailing stops manage risk. Slippage comes from fast markets and low liquidity—trade liquid names and use limits when precision matters." },
    { type: "interactive", heading: "Final Check", content: "Execution quality.", component: "ConceptCheck", props: { question: "How can you minimize slippage?", reveal: "Use limit orders when you can; trade liquid instruments; avoid trading through high-volatility news if you need a precise fill." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Choose order type by need: speed vs price. Understand slippage and liquidity so execution doesn't erode your edge." },
  ], true),
];
