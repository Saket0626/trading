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
  createLesson("automation-workflow", 1, "Automation Workflow", "automation-workflow", "22 min", ["Data, strategy, execution", "Risk and monitoring", "Architecture"], [
    {
      type: "text",
      heading: "What an Automated System Needs",
      content:
        "A full automated trading system has: (1) Data—real-time or delayed feed; clean and aligned. (2) Strategy—signal logic (entries, exits, position size). (3) Execution—sending orders to the broker (API or direct). (4) Risk controls—max position size, max drawdown, daily loss limit, kill switch. (5) Monitoring—logs, P&L, alerts (email, SMS) on fills, errors, or breach of risk.\n\nStart with paper trading: same code, but orders go to a sim account. Find bugs and tune risk before going live. Paper trading reveals timing issues, data gaps, and execution quirks that backtests miss.",
    },
    {
      type: "text",
      heading: "Architecture",
      content:
        "Keep modules separate: data fetcher, strategy engine, order manager, risk checker. That way you can backtest the strategy on historical data without execution, and add execution only when going live. Use a queue or event loop: new bar → strategy computes signal → risk check → if pass, send order.\n\nLog everything: timestamps, signals, orders, fills, errors. When something goes wrong, you need to replay what happened. Use structured logging (JSON) so you can parse and analyze. Store logs persistently—disk or cloud—not just console. Logs are your black box.",
    },
    {
      type: "analogy",
      heading: "The Assembly Line Analogy",
      content:
        "Think of an automated system like an assembly line. Data = raw materials. Strategy = the machine that decides what to build. Execution = the robot that builds it. Risk checker = the safety inspector who stops the line if something's wrong. Monitoring = the supervisor watching the line. Each module is separate—if the robot breaks, the machine keeps running (you just don't ship). Modular design lets you test and fix each part independently.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Design for failure. What happens if the data feed dies? If the broker API times out? If your server crashes? Add retries, circuit breakers, and graceful shutdown. Never run without a kill switch—one command to stop everything. Log every decision—you'll need it when something goes wrong.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "System = data + strategy + execution + risk.",
      component: "ConceptCheck",
      props: { question: "What does an automated system need?", reveal: "Data, strategy logic, execution (orders), risk controls, and monitoring. Paper trade first to find bugs and tune risk." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Automation = data, strategy, execution, risk, monitoring. Modular design; log everything. Paper trade before live. Design for failure." },
  ], true),
  createLesson("paper-automation", 2, "Paper Trading Automation", "paper-automation", "20 min", ["Why paper trade first", "Sim vs live", "What to check"], [
    {
      type: "text",
      heading: "Why Paper Trade a System First?",
      content:
        "To find bugs: logic errors, timezone issues, missing data handling. To see how it behaves with live data (not just backtest)—real data has gaps, halts, and quirks. To tune risk (position size, max drawdown) without losing money. To verify execution path: orders go to sim broker, fills are simulated.\n\nMany brokers offer paper/sim accounts with the same API as live. Run for at least several weeks; compare sim P&L and drawdown to backtest. If they're way off, investigate: slippage assumptions, timing (did you get the bar at the right time?), data (is sim data identical to backtest?). Paper trading is cheap insurance.",
    },
    {
      type: "text",
      heading: "Sim vs Live",
      content:
        "Sim fills are often perfect (no slippage); live won't be. Sim doesn't have partial fills or rejections. So live results can be worse. Use conservative assumptions in backtest and paper: assume some slippage (e.g. 0.05% per trade) and delay (e.g. fill at next bar, not current).\n\nWhen switching to live, start with the smallest size—1 share, 1 contract—and scale up only after consistency. Monitor closely: first week live, watch every fill and log. Expect surprises—live trading always has them. Paper trading reduces surprises but doesn't eliminate them.",
    },
    {
      type: "analogy",
      heading: "The Flight Simulator Analogy",
      content:
        "Think of paper trading like a flight simulator. Pilots train in simulators before flying real planes—same controls, same procedures, but no risk. Paper trading is your simulator: same code, same logic, but no real money. You'll find bugs (turbulence handling) and tune risk (emergency procedures) before going live. But the real flight (live trading) can still have surprises—weather, mechanical issues. Sim ≠ live.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Sim results are not live results. Sim fills are often instant at mid; live fills have slippage, partial fills, rejections. Sim data may differ from live data. Don't assume sim performance = live performance. Use sim to find bugs and tune risk—not to predict returns. When you go live, expect worse execution and possibly worse P&L. Start small.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Paper = test with no capital at risk.",
      component: "ConceptCheck",
      props: { question: "Why paper trade a system first?", reveal: "To find bugs and assess behavior with live data before risking real money. Verify execution path and risk settings." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Paper trade to find bugs and tune risk. Sim ≠ live (slippage, fills). Go live small and scale only after consistency. Sim is insurance, not prediction." },
  ], true),
  createLesson("live-deployment", 3, "Live Deployment", "live-deployment", "20 min", ["Checklist before live", "Kill switch and alerts", "Runbook"], [
    {
      type: "text",
      heading: "Before Going Live",
      content:
        "Checklist: Risk limits set (max position, max drawdown, daily loss limit). Kill switch tested (one action stops all orders or flattens). Data feed verified (correct symbols, no gaps). Execution path tested (paper orders fill as expected). Monitoring and alerts (SMS/email on fill, error, or risk breach). Logging and logs reviewed. Start with minimum size—1 share, 1 contract. Have a plan for weekends and holidays (no trading or reduced). Document runbook: what to do if the system misbehaves—step-by-step instructions for you or someone else.",
    },
    {
      type: "text",
      heading: "Kill Switch and Monitoring",
      content:
        "Kill switch: a single button or command that cancels all orders and/or flattens all positions. Test it in paper—verify it works. In live, you must be able to act fast if something is wrong. Have it accessible: phone app, hotkey, or script you can run immediately.\n\nAlerts: get notified on every fill (optional), every error, and when risk limits are hit. Monitor equity and drawdown daily. If drawdown exceeds your threshold, stop and review—don't let the machine keep trading. Human oversight is required; automation doesn't replace discipline. The kill switch is your ejector seat—use it when needed.",
    },
    {
      type: "analogy",
      heading: "The Emergency Exit Analogy",
      content:
        "Think of the kill switch like an emergency exit. You hope you never need it, but you must know where it is and how to use it. In a fire (system bug, runaway orders, data disaster), you hit the kill switch—cancel everything, flatten positions—and get out. Test it before you need it. Alerts are the smoke detector—they tell you when something's wrong. Don't ignore them. Human oversight is the fire marshal—automation doesn't replace you.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never go live without a tested kill switch. Bugs happen—wrong orders, double orders, runaway logic. You need one action to stop everything. Test it in paper. Have a runbook: if X happens, do Y. If you're on vacation and the system misbehaves, someone (or you remotely) needs to know what to do. Automation runs 24/7; you don't. Plan for when you're not watching.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Live = real money; prepare fully.",
      component: "ConceptCheck",
      props: { question: "Before going live, what to check?", reveal: "Risk limits, kill switch, data feed, execution path, monitoring/alerts. Start small; have a runbook for when things go wrong." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Checklist: risk, kill switch, data, execution, alerts. Start small. Human oversight and runbook are essential. Test the kill switch." },
  ], true),
  createLesson("automated-summary", 4, "Automated Systems: Summary", "automated-summary", "12 min", ["Recap workflow and safety", "Course completion"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "Automation = data, strategy, execution, risk, monitoring. Paper trade first—find bugs, tune risk. Before live: risk limits, kill switch, data and execution verified, alerts. Start small; monitor constantly. Automation is a tool—you're still responsible for risk and discipline.\n\nYou've now completed the full curriculum: from foundations (Level 1) through quantitative trading (Level 5). You have the tools—Python, data, backtesting, strategies, risk metrics, automation. The discipline is yours. Trade responsibly.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "Safety first.",
      component: "ConceptCheck",
      props: { question: "What is a kill switch?", reveal: "A single action that stops all orders or flattens positions. Essential for live; test in paper. Use when something is wrong." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Build modular; paper trade; go live with checklist and kill switch. Oversight and discipline stay with you. You've completed the curriculum—now apply it." },
  ], true),
];
