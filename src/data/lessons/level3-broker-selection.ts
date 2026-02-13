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
  moduleId: "broker-selection",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const brokerSelectionLessons: Lesson[] = [
  createLesson("broker-criteria", 1, "What to Look For in a Broker", "broker-criteria", "18 min", ["Regulation, safety, fees", "Platform and execution"], [
    { type: "text", heading: "Regulation and Safety First", content: "Your broker holds your money. Before worrying about fees or tools, check that they are regulated in a serious jurisdiction: SEC/FINRA in the US, FCA in the UK, ASIC in Australia, CySEC in Cyprus, etc. Regulated brokers must segregate client funds from their own and often participate in compensation schemes. Avoid unregulated or offshore-only brokers that promise guaranteed returns or pressure you to deposit. Red flags: not regulated, guaranteed profits, high-pressure sales, difficulty withdrawing, or lots of fake-looking reviews." },
    { type: "text", heading: "Fees, Platform, Execution", content: "Compare commissions (per trade, per share, or spread for forex), account minimums, and any inactivity or data fees. Platform quality matters: charting, speed, order types, and mobile app. Execution quality: do you get filled at the price you expect? Slippage and requotes can cost more than a slightly higher commission. For stocks, popular choices include Interactive Brokers, Fidelity, Schwab, and TD Ameritrade; for forex, OANDA, Forex.com, IG; for crypto, Coinbase, Kraken, Binance. Research and read independent reviews." },
    { type: "interactive", heading: "Check Your Understanding", content: "Prioritize safety over low cost.", component: "ConceptCheck", props: { question: "What should you prioritize when choosing a broker?", reveal: "Regulation and safety of funds first. Then fees, execution quality, and platform. Never sacrifice safety for the lowest commission." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Regulation and segregated funds first. Then fees, execution, and platform. Avoid unregulated or too-good-to-be-true offers." },
  ]),
  createLesson("demo-practice", 2, "Demo Account Practice", "demo-practice", "14 min", ["Why and how to practice", "From paper to live"], [
    { type: "text", heading: "Why Practice on Demo First", content: "A demo account lets you trade with virtual money so you can learn the platform, test your strategy, and build habits without risking real capital. You get a feel for order entry, charts, and execution. Use it to run your plan for at least 1–3 months and 50+ trades. Track your results as if it were real: journal every trade, respect your stops, and see if you're profitable and disciplined. Demo doesn't replicate emotion (real money feels different) or sometimes slippage, but it's essential before going live." },
    { type: "text", heading: "From Paper to Real Money", content: "When you go live, start small. Use the smallest position size that still lets you practice proper risk (e.g. 1% risk per trade). Expect different emotions—fear and greed are stronger with real money. Many traders reduce size for the first few weeks. Keep journaling and reviewing. If you were profitable on demo but struggle live, the gap is usually execution or psychology; stick to the plan and give it time." },
    { type: "interactive", heading: "Think It Through", content: "Demo builds skill; live tests psychology.", component: "ConceptCheck", props: { question: "Why practice on demo before going live?", reveal: "To learn the platform and strategy without risking real money. Build consistency and confidence. Real money will feel different emotionally—so start small when you switch." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Demo = learn platform and strategy risk-free. Paper trade 1–3 months, then go live small and keep the same rules." },
  ]),
  createLesson("broker-summary", 3, "Broker Selection: Summary", "broker-summary", "8 min", ["Recap criteria and demo"], [
    { type: "text", heading: "Recap", content: "Choose a regulated broker with segregated funds. Compare fees, execution, and platform. Use a demo to practice before risking real money. When you go live, start small and keep your plan." },
    { type: "interactive", heading: "Final Check", content: "Safety first.", component: "ConceptCheck", props: { question: "What is a major red flag when choosing a broker?", reveal: "Unregulated, guaranteed profits, pressure to deposit, or difficulty withdrawing. Always verify regulation and client fund protection." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Regulation first, then fees and platform. Demo before live; go live small." },
  ], true),
];
