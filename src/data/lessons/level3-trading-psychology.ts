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
  moduleId: "trading-psychology",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const tradingPsychologyLessons: Lesson[] = [
  createLesson("psychology-basics", 1, "Emotional Control: Fear, Greed, and Discipline", "psychology-basics", "22 min", ["Recognize fear and greed", "Build discipline and patience", "Use structure to override emotion"], [
    {
      type: "text",
      heading: "Why Psychology Matters",
      content:
        "You can have the best strategy and still lose money if fear and greed drive your decisions. When price moves against you, fear makes you close too early or move your stop. When you're up, greed makes you hold for 'just a little more' and give back gains. When you're down, hope makes you hold losers. Professional traders say trading is 90% mental and 10% technical—meaning execution, discipline, and emotional control matter more than knowing one more indicator.\n\nThe same setup that works on paper can fail in live trading if you override your plan. A backtest might show 60% win rate and 1:2 RR, but in real time you cut winners at 0.5R and hold losers until -2R. Your edge evaporates. So building self-awareness and discipline is as important as learning charts and risk management. The strategy gives you an edge; psychology determines whether you execute it.",
    },
    {
      type: "text",
      heading: "Fear and Greed",
      content:
        "Fear shows up as: fear of missing out (FOMO)—jumping into a move too late; fear of losing—cutting winners early or refusing to take a valid loss; and fear of being wrong—not taking a trade that fits your plan. Greed shows up as: holding winners too long and giving back profits; adding to positions without a plan; and risking too much on one trade. Both lead to inconsistent behavior: you break your rules, overtrade, or freeze.\n\nThe fix isn't to feel nothing—it's to have a plan and follow it. When you've defined entry, stop, and target before you enter, you don't need to 'decide' in the heat of the moment; you just execute. The plan does the thinking for you. Your job is to follow it even when your gut screams otherwise.",
    },
    {
      type: "analogy",
      heading: "The Amusement Park Analogy",
      content:
        "Imagine a roller coaster. Fear makes you close your eyes and grip the bar—you can't enjoy the ride or make good decisions. Greed makes you want to stay on forever—you ignore the exit. Trading is similar: fear and greed distort your judgment. The plan is like the safety harness—it's there so you can ride without panicking. You don't fight the coaster; you trust the structure. Same with trading: trust your plan, not your emotions in the moment.",
    },
    {
      type: "text",
      heading: "Discipline and Patience",
      content:
        "Discipline means following your trading plan even when you don't feel like it. No revenge trades after a loss. No skipping your stop. No doubling size because you 'know' this one will work. Patience means waiting for your setup. Most of the time the market doesn't offer a clear, high-probability trade. Forcing trades leads to overtrading and losses.\n\nThe best traders often take only a handful of trades per week that meet all their criteria. If you find yourself bored and taking marginal trades, step away. Quality over quantity. Let the market come to you. Boredom is not a valid reason to trade.",
    },
    {
      type: "warning",
      heading: "Common Mistake",
      content:
        "Thinking you can 'control' emotions by willpower alone. Willpower is finite—it depletes. Structure helps: write your plan, use actual stop orders (not mental stops), and set a max loss per day. When you hit it, stop. The system does the controlling. Don't rely on 'I'll just stay disciplined'—build systems that make discipline automatic.",
    },
    { type: "interactive", heading: "Check Your Understanding", content: "Emotions and execution.", component: "ConceptCheck", props: { question: "Why do many pros say trading is mostly mental?", reveal: "Because the same strategy that works in backtests or paper trading often fails when real money and emotions are involved. Fear and greed cause traders to break their rules—cutting winners early, holding losers, overtrading. Discipline and execution matter more than one more indicator." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Fear and greed drive bad decisions. Combat them with a written plan, real stop orders, and strict rules. Discipline and patience—wait for your setup, then follow the plan." },
  ], true),
  createLesson("cognitive-biases", 2, "Cognitive Biases That Hurt Traders", "cognitive-biases", "20 min", ["Name confirmation, anchoring, recency, loss aversion", "Reduce their impact"], [
    {
      type: "text",
      heading: "Your Brain Works Against You",
      content:
        "Cognitive biases are mental shortcuts that helped our ancestors survive but often hurt in trading. You're not 'stupid' when you fall for them—everyone does. The key is to know them and build habits that offset them. Confirmation bias: you seek and overweight information that agrees with what you already believe. If you're long, you notice every bullish headline and ignore bearish ones. Fix: actively look for reasons you might be wrong; write down the bear case before you enter.\n\nAnchoring: the first number you see (e.g. the price you bought at, or a round number) influences your judgment. You hold a loser because you're 'anchored' to your entry and think it 'should' come back. Fix: base exits on your plan (stop and target), not on entry price. Ask: 'Would I enter this trade right now at this price?' If not, exit.",
    },
    {
      type: "text",
      heading: "Recency, Loss Aversion, and Sunk Cost",
      content:
        "Recency bias: whatever happened last (last trade, last week) feels more important than it is. After a few wins you get overconfident; after a few losses you get too cautious or revenge-trade. Fix: focus on process and sample size. One trade doesn't define you. Loss aversion: losses hurt about twice as much as equivalent gains feel good. So you hold losers too long (hoping to get back to even) and cut winners too early. Fix: treat each trade as independent; accept that losses are part of the game and cap them with a stop.\n\nSunk cost fallacy: 'I've already lost so much, I can't exit now.' The money is already lost; staying in doesn't undo it. Fix: ask 'Would I enter this trade right now at this price?' If not, exit. The past is irrelevant to the current decision.",
    },
    {
      type: "analogy",
      heading: "The Movie Ticket Analogy",
      content:
        "You buy a movie ticket. Halfway through, the movie is terrible. Sunk cost says: 'I paid $15, I have to stay.' The rational view: the $15 is gone; staying won't get it back. You're just wasting more time. Same with a losing trade: the loss is already locked in when your thesis is wrong. Holding won't magically fix it. Exit based on the current situation, not what you've 'invested' emotionally or financially.",
    },
    {
      type: "text",
      heading: "What You Can Do",
      content:
        "Write a trading plan and review it. Before each trade, write one reason you might be wrong. Use checklists so bias doesn't replace process. After a loss, don't immediately trade again—take a break. Track your trades and emotions in a journal so you can spot when bias is driving you. Professional traders use rules and systems so that bias has less room to override logic. The goal isn't to become a robot—it's to build guardrails so bias can't steer you off course.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Create a 'pre-trade checklist' that includes: 'What could make this trade wrong?' Force yourself to write one bear case. If you can't think of any, you're probably in confirmation bias—dig deeper. This simple habit catches many bad entries before they happen.",
    },
    { type: "interactive", heading: "Think It Through", content: "Bias in action.", component: "ConceptCheck", props: { question: "You're in a losing trade and think 'I can't sell now, I'll wait for it to come back to my entry.' Which bias is this, and what's the healthier approach?", reveal: "Anchoring (to entry) and possibly sunk cost. The healthier approach: exit based on your plan. If your stop is hit or your thesis is invalidated, get out. Don't hold because of the price you paid." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Confirmation, anchoring, recency, loss aversion, and sunk cost all distort decisions. Use a plan, checklists, and a journal to reduce their impact." },
  ], true),
  createLesson("trading-journal", 3, "The Trading Journal: Track Emotions and Improve", "trading-journal", "18 min", ["Why and how to keep a journal", "Use it to spot patterns and improve"], [
    {
      type: "text",
      heading: "Why Keep a Journal?",
      content:
        "A trading journal isn't just a list of trades. It's where you record what you did, why you did it, how you felt, and what happened. Over time you see patterns: Do you overtrade on Mondays? Do you hold losers longer when you're tired? Do you skip your plan after a big win? The goal is to improve your process.\n\nMost traders who fail never look back systematically—they repeat the same mistakes. Those who journal and review tend to fix leaks: cutting bad habits, reinforcing good ones, and aligning behavior with their plan. Think of it as a mirror that shows you your real edge (or lack of it) and your real weaknesses. Without a journal, you're guessing. With one, you have evidence.",
    },
    {
      type: "text",
      heading: "What to Record",
      content:
        "For each trade: date, time, market, entry and exit prices, position size, P&L. Then the important part: setup (what pattern or rule triggered the trade?), reasoning (why did you take it?), emotions before and after (calm, anxious, greedy, fearful?), and whether you followed your plan (stop, target, size). Screenshots of the chart at entry help you review later. Also note external factors: sleep, stress, news. Over time you can add simple stats: win rate by setup, by time of day, by day of week. You'll see which setups actually work and when you tend to break rules.\n\nThe 'why' and 'how I felt' are often more valuable than the P&L. A losing trade where you followed your plan is a good trade. A winning trade where you broke your rules is a bad trade—you got lucky.",
    },
    {
      type: "analogy",
      heading: "The Workout Log Analogy",
      content:
        "Athletes keep workout logs: what they did, how they felt, how they performed. Over time they see what works—more rest? Different exercises? Trading is the same. Your journal is your workout log. The trades are the reps. The patterns you spot (overtrading when anxious, cutting winners when fearful) are like discovering you perform better after 8 hours of sleep. Use the data to improve.",
    },
    {
      type: "text",
      heading: "How to Use It",
      content:
        "Review daily: Did I follow my plan? Any revenge trades or FOMO? Weekly: Look at your numbers. Win rate, average win/loss, expectancy. Are you profitable? If not, is it the strategy or execution? Monthly: Big picture. Are you improving? What's the one thing to work on next month? Don't journal for the sake of it—use it to change behavior. If you see that you often break your stop after two losses in a row, make a rule: after two losses, no more trades that day. The journal gives you the evidence; you turn it into rules.",
    },
    { type: "warning", heading: "Common Mistake", content: "Only logging P&L and not the 'why' and 'how I felt.' The value is in spotting emotional and behavioral patterns, not just counting wins and losses." },
    { type: "interactive", heading: "Check Your Understanding", content: "Journaling for improvement.", component: "ConceptCheck", props: { question: "What is the main benefit of recording your emotions and reasoning in a trading journal, not just entry/exit and P&L?", reveal: "You can spot patterns: e.g. overtrading when anxious, or holding losers when you're anchored to entry. That lets you build rules to correct behavior, not just see that you lost money." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Journal every trade: setup, reasoning, emotions, plan adherence. Review regularly and turn insights into rules. Use it to improve process, not just track P&L." },
  ], true),
  createLesson("psychology-summary", 4, "Trading Psychology: Summary", "psychology-summary", "12 min", ["Recap emotions, biases, and journaling"], [
    {
      type: "text",
      heading: "Putting It Together",
      content:
        "Psychology in trading is about consistency: following your plan, managing fear and greed, and reducing the impact of biases. You can't eliminate emotion—you can structure your trading so that emotion has less room to override logic. Use a written plan, real stop orders, position sizing, and a daily loss limit. Keep a journal and review it. When you're on tilt (after a big loss or big win), step away.\n\nThe best traders treat trading like a profession: process over outcome, one trade at a time, and continuous improvement based on evidence from your own behavior. They don't fight emotion with willpower; they build systems that make the right behavior easy and the wrong behavior hard. That's the key: structure over willpower.",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "When you're on tilt, the best trade is no trade. After a big loss, close the platform. After a big win, don't immediately search for the next one. Take a walk. Reset. The market will be there tomorrow. Protecting your capital and your mental state matters more than catching the next move.",
    },
    { type: "interactive", heading: "Final Check", content: "Psychology and structure.", component: "ConceptCheck", props: { question: "What is one concrete way to reduce the impact of emotion on your trading?", reveal: "Examples: Use real stop orders (not mental). Set a max loss per day and stop when hit. Write your plan and a pre-trade checklist. Keep a journal and review it. Take a break after a big loss instead of revenge trading." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Control emotion with structure: plan, stops, size limits, journal. Process over outcome; improve from evidence." },
  ], true),
];
