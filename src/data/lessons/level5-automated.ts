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
  level: 5,
  moduleId: "automated-systems",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level5AutomatedLessons: Lesson[] = [
  createLesson("automation-workflow", 1, "Automation Workflow", "automation-workflow", "18 min", ["Data, strategy, execution", "Risk and monitoring"], [
    { type: "text", heading: "What an Automated System Needs", content: "A full automated trading system has: (1) Data—real-time or delayed feed; clean and aligned. (2) Strategy—signal logic (entries, exits, position size). (3) Execution—sending orders to the broker (API or direct). (4) Risk controls—max position size, max drawdown, daily loss limit, kill switch. (5) Monitoring—logs, P&L, alerts (email, SMS) on fills, errors, or breach of risk. Start with paper trading: same code, but orders go to a sim account. Find bugs and tune risk before going live." },
    { type: "text", heading: "Architecture", content: "Keep modules separate: data fetcher, strategy engine, order manager, risk checker. That way you can backtest the strategy on historical data without execution, and add execution only when going live. Use a queue or event loop: new bar → strategy computes signal → risk check → if pass, send order. Log everything: timestamps, signals, orders, fills. When something goes wrong, you need to replay what happened." },
    { type: "interactive", heading: "Check Your Understanding", content: "System = data + strategy + execution + risk.", component: "ConceptCheck", props: { question: "What does an automated system need?", reveal: "Data, strategy logic, execution (orders), risk controls, and monitoring. Paper trade first to find bugs and tune risk." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Automation = data, strategy, execution, risk, monitoring. Modular design; log everything. Paper trade before live." },
  ]),
  createLesson("paper-automation", 2, "Paper Trading Automation", "paper-automation", "16 min", ["Why paper trade first", "Sim vs live"], [
    { type: "text", heading: "Why Paper Trade a System First?", content: "To find bugs: logic errors, timezone issues, missing data handling. To see how it behaves with live data (not just backtest). To tune risk (position size, max drawdown) without losing money. To verify execution path: orders go to sim broker, fills are simulated. Many brokers offer paper/sim accounts with the same API as live. Run for at least several weeks; compare sim P&L and drawdown to backtest. If they're way off, investigate (slippage, timing, data)." },
    { type: "text", heading: "Sim vs Live", content: "Sim fills are often perfect (no slippage); live won't be. Sim doesn't have partial fills or rejections. So live results can be worse. Use conservative assumptions in backtest and paper: assume some slippage and delay. When switching to live, start with the smallest size and scale up only after consistency. Monitor closely: first week live, watch every fill and log." },
    { type: "interactive", heading: "Think It Through", content: "Paper = test with no capital at risk.", component: "ConceptCheck", props: { question: "Why paper trade a system first?", reveal: "To find bugs and assess behavior with live data before risking real money. Verify execution path and risk settings." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Paper trade to find bugs and tune risk. Sim ≠ live (slippage, fills). Go live small and scale only after consistency." },
  ]),
  createLesson("live-deployment", 3, "Live Deployment", "live-deployment", "16 min", ["Checklist before live", "Kill switch and alerts"], [
    { type: "text", heading: "Before Going Live", content: "Checklist: Risk limits set (max position, max drawdown, daily loss limit). Kill switch tested (one action stops all orders or flattens). Data feed verified (correct symbols, no gaps). Execution path tested (paper orders fill as expected). Monitoring and alerts (SMS/email on fill, error, or risk breach). Logging and logs reviewed. Start with minimum size. Have a plan for weekends and holidays (no trading or reduced). Document runbook: what to do if the system misbehaves." },
    { type: "text", heading: "Kill Switch and Monitoring", content: "Kill switch: a single button or command that cancels all orders and/or flattens all positions. Test it in paper. In live, you must be able to act fast if something is wrong. Alerts: get notified on every fill (optional), every error, and when risk limits are hit. Monitor equity and drawdown daily. If drawdown exceeds your threshold, stop and review—don't let the machine keep trading. Human oversight is required; automation doesn't replace discipline." },
    { type: "interactive", heading: "Check Your Understanding", content: "Live = real money; prepare fully.", component: "ConceptCheck", props: { question: "Before going live, what to check?", reveal: "Risk limits, kill switch, data feed, execution path, monitoring/alerts. Start small; have a runbook for when things go wrong." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Checklist: risk, kill switch, data, execution, alerts. Start small. Human oversight and runbook are essential." },
  ]),
  createLesson("automated-summary", 4, "Automated Systems: Summary", "automated-summary", "8 min", ["Recap workflow and safety"], [
    { type: "text", heading: "Recap", content: "Automation = data, strategy, execution, risk, monitoring. Paper trade first. Before live: risk limits, kill switch, data and execution verified, alerts. Start small; monitor constantly. Automation is a tool—you're still responsible for risk and discipline." },
    { type: "interactive", heading: "Final Check", content: "Safety first.", component: "ConceptCheck", props: { question: "What is a kill switch?", reveal: "A single action that stops all orders or flattens positions. Essential for live; test in paper. Use when something is wrong." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Build modular; paper trade; go live with checklist and kill switch. Oversight and discipline stay with you." },
  ], true),
];
