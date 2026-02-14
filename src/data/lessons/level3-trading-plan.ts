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
  moduleId: "trading-plan",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const tradingPlanLessons: Lesson[] = [
  createLesson("trading-plan-intro", 1, "Why You Need a Trading Plan", "trading-plan-intro", "18 min", ["Why a plan is non-negotiable", "What happens without one", "What a plan covers"], [
    {
      type: "text",
      heading: "Without a Plan, You Will Fail",
      content:
        "Imagine driving with no destination and no map. You'd waste fuel and end up somewhere random. Trading without a plan is the same: you react to every tick, chase moves, hold losers, and cut winners early. A trading plan is a written set of rules that defines your goals, markets, style, entry and exit criteria, risk rules, and review process.\n\nIt removes emotion from the moment of decision. When the market gets volatile, you don't 'decide'—you follow the plan. Professional traders and prop firms insist on a plan; it's the foundation of consistent execution. Without it, you're winging it—and the market will exploit that.",
    },
    {
      type: "text",
      heading: "What a Plan Covers",
      content:
        "Goals (realistic, measurable—e.g. 'preserve capital and learn' in year one, not 'double my account'). Markets and instruments you trade. Timeframe and style (day, swing, position). Entry rules: what setup, what confirmation, minimum risk-reward. Exit rules: where is the stop, where is the target, time stop if applicable. Risk rules: max % per trade, max loss per day/week. Daily routine: pre-market, during, post-market. Review: daily journal, weekly metrics, monthly review. Loss limits: when you stop trading (e.g. down 5% on the day).\n\nThe plan answers: What do I trade? When do I enter? When do I exit? How much do I risk? When do I stop for the day? If you can't answer these in writing, you don't have a plan.",
    },
    {
      type: "analogy",
      heading: "The Flight Plan Analogy",
      content:
        "Pilots file a flight plan before takeoff: route, fuel, alternate airport. They don't improvise mid-flight. Trading is similar. Your plan is your flight plan. When turbulence hits (volatility, a loss), you follow the plan—you don't panic and change course. The plan keeps you on track when emotions want to take over.",
    },
    { type: "warning", heading: "Common Mistake", content: "Writing a plan and then ignoring it when the market gets scary or exciting. The plan only works if you follow it every time." },
    { type: "interactive", heading: "Check Your Understanding", content: "Plans remove discretion at the moment of action.", component: "ConceptCheck", props: { question: "Why do you need a trading plan?", reveal: "Without one, emotions and randomness take over. A plan defines your rules so you execute consistently instead of reacting to fear or greed." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "A written plan defines goals, entry/exit, risk, and review. Follow it every time—that's how you get consistent." },
  ], true),
  createLesson("plan-template", 2, "Trading Plan Template", "plan-template", "20 min", ["Build your plan step by step", "Entry/exit checklist and loss limits"], [
    {
      type: "text",
      heading: "Components to Include",
      content:
        "Trading goals: e.g. 'Learn and preserve capital' or 'X% monthly with max Y% drawdown.' Markets: e.g. 'S&P 500 liquid stocks only' or 'Forex majors.' Style and timeframe: e.g. 'Day trading, 5-min and 15-min charts.' Entry criteria: e.g. 'Pullback to VWAP in uptrend, 1:2 RR minimum, volume confirmation.' Exit criteria: stop loss (e.g. below swing low), take profit (e.g. 2× risk), time stop (e.g. exit all by 3:30 PM). Risk: e.g. '1% per trade, max 2% total risk, max 3 trades per day.' Daily loss limit: e.g. 'Stop trading if down 2% for the day.' Journal: every trade with setup, reasoning, emotion, outcome. Review: weekly P&L and rule adherence, monthly big picture.\n\nWrite it down. A plan in your head isn't a plan—it's a vague intention. The act of writing forces clarity. Keep it simple at first; refine as you learn.",
    },
    {
      type: "text",
      heading: "Entry Checklist",
      content:
        "Before every trade, confirm: (1) Setup matches my rules. (2) Trend/support confirms. (3) Volume confirms if required. (4) Risk-reward is at least 1:2. (5) I know exactly where my stop and target are. (6) Position size is calculated from risk %. If any box is unchecked, don't take the trade. This sounds strict, but it's what keeps you from impulsive trades.\n\nThe checklist is your quality control. It catches 'almost' setups that don't quite meet your criteria. Skipping it is how discipline breaks down—one unchecked box becomes two, then the whole plan goes out the window.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Print your checklist and keep it visible. Or use a trading journal template that includes it. Before you click 'buy,' physically check each item. The 30 seconds it takes can save you from a bad trade that would cost hours of regret.",
    },
    { type: "interactive", heading: "Think It Through", content: "What should a plan include?", component: "ConceptCheck", props: { question: "What should a trading plan include?", reveal: "Goals, markets, style, entry/exit rules, risk rules (size, stop, daily limit), schedule, and a review process. Plus a pre-trade checklist so you don't skip steps." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Use a template: goals, markets, entry/exit, risk, loss limits, journal, review. Use an entry checklist before every trade." },
  ], true),
  createLesson("plan-summary", 3, "Trading Plan: Summary", "plan-summary", "12 min", ["Recap and next steps"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Your plan is your edge in execution. Write it down, backtest or paper trade it for at least 1–3 months and 50+ trades, then go live only when you follow it consistently. Don't change the plan after one bad trade; need statistical significance. Refine based on quarterly review, not daily noise.\n\nA plan that you don't follow is worthless. A simple plan you follow every time beats a complex plan you ignore. Start with the essentials: entry rules, stop, target, risk %, daily limit. Add detail as you grow.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Changing your plan after a single loss or win. One trade tells you nothing. You need 50–100 trades to judge whether a strategy works. If you keep tweaking after every result, you'll never have a stable edge. Trust the process; review on a schedule, not in the heat of the moment.",
    },
    { type: "interactive", heading: "Final Check", content: "Plan and consistency.", component: "ConceptCheck", props: { question: "When should you change your trading plan?", reveal: "After a meaningful sample (e.g. 50–100 trades) and a structured review—not after one loss or one win. Change based on evidence, not emotion." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Plan = rules + checklist + review. Test it, then follow it. Change only with evidence and process." },
  ], true),
];
