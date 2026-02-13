import type { Lesson } from "../../types";

/** Module 1.4: Risk & Reward Fundamentals */
export const riskRewardLessons: Lesson[] = [
  {
    id: "risk-what",
    title: "What is Risk in Trading?",
    slug: "what-is-risk",
    level: 1,
    moduleId: "risk-reward-fundamentals",
    order: 1,
    duration: "12 min",
    objectives: [
      "Define risk in the context of trading",
      "Understand that risk means the possibility of losing money",
      "See how different markets carry different risk levels",
      "Learn why professionals manage rather than avoid risk",
    ],
    prerequisites: [],
    content: [
      {
        type: "text",
        heading: "Why This Matters",
        content:
          "Risk is the chance that you could lose some or all of the money you put into a trade. Every single trade has risk. There are no exceptions. Professional traders don't try to avoid risk—they manage it. They decide in advance how much they're willing to lose and build their entire approach around that. Understanding risk is the first step to protecting your capital.\n\nIf you skip this, you'll blow up. It's not a matter of if, but when. The traders who survive are the ones who take risk seriously from day one.",
      },
      {
        type: "text",
        heading: "Risk = Uncertainty",
        content:
          "When you buy a stock, you don't know for certain whether the price will go up or down. That uncertainty is risk. The more the price can move against you, the higher the risk. Volatile assets—like some growth stocks or crypto—can swing 5–10% in a single day. That's high risk. A government bond might move 0.1% in a week. Lower risk, but still not zero. Even 'safe' assets can lose value.\n\nRisk isn't bad. It's the price of participation. Your job is to understand it, measure it, and limit it so that you can stay in the game long enough to succeed.",
      },
      {
        type: "example",
        heading: "Real Example",
        content:
          "You buy $1,000 of a stock. If the stock drops 20%, you've lost $200. That $200 (or 20%) is the risk you took by holding. If you'd set a stop loss at 10%, your maximum risk would have been capped at $100. You'd have gotten out earlier, preserved capital, and lived to trade another day. Risk management is about deciding in advance how much you're willing to lose—and then sticking to that decision when emotions scream otherwise.",
      },
      {
        type: "analogy",
        heading: "The Seatbelt Analogy",
        content:
          "Driving has risk. You can't eliminate it—accidents happen. But you wear a seatbelt. You don't drive 100 mph in a school zone. You manage the risk. Trading is the same. You can't eliminate the chance of losing money. But you can limit how much you lose per trade. You can use stop losses. You can size positions small. You manage risk so that when—not if—losses happen, they don't destroy you.",
      },
      {
        type: "warning",
        heading: "You Cannot Avoid Risk Entirely",
        content:
          "The only way to have zero trading risk is not to trade. Every position you open carries the possibility of loss. Even 'sure things' fail. The goal is never to eliminate risk—it's to manage it so that your account survives the inevitable losing streaks. Traders who think they can avoid risk either don't trade (and miss opportunity) or blow up when reality hits.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why can't you avoid risk entirely when trading?",
        component: "ConceptCheck",
        props: { question: "Why can't you avoid risk entirely when trading?", reveal: "Because you don't control the outcome. Price can move against you no matter how good your analysis. The only way to have zero risk is not to trade—so the goal is to manage risk, not eliminate it." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Risk in trading is the possibility of losing money. It's not optional—every trade has it. Your job is to size your trades so that even a string of losses won't wipe you out.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "reward-what",
    title: "What is Reward in Trading?",
    slug: "what-is-reward",
    level: 1,
    moduleId: "risk-reward-fundamentals",
    order: 2,
    duration: "12 min",
    objectives: [
      "Define reward as potential profit",
      "Understand that reward is not guaranteed",
      "See how traders target reward relative to risk",
      "Learn why pros insist on favorable risk-reward",
    ],
    prerequisites: ["risk-what"],
    content: [
      {
        type: "text",
        heading: "Reward = Potential Gain",
        content:
          "Reward is the profit you're aiming for on a trade. If you buy at $100 and your target is $110, your potential reward is $10 per share (10%). That reward is only realized if the price actually reaches your target and you sell. Until then, it's a goal, not a guarantee.\n\nMany beginners confuse 'potential reward' with 'guaranteed profit.' They're not the same. The target is where you plan to take profit if the trade works. It might never get there. Markets don't owe you anything.",
      },
      {
        type: "text",
        heading: "Why Reward Isn't Guaranteed",
        content:
          "Markets can reverse at any time. A trade that looks like it's heading for your target can turn around and hit your stop loss instead. Price doesn't care about your plans. Professional traders think in probabilities: they know that a large percentage of trades will fail. So they aim for a reward that's large enough that they can be wrong more often than right and still make money. That's the power of positive risk-reward ratio.\n\nIf your average winner is $200 and your average loser is $100, you only need to win 34% of trades to break even. Win 50%, and you're printing. The reward size matters as much as the win rate.",
      },
      {
        type: "analogy",
        heading: "The Fishing Analogy",
        content:
          "When you cast a line, you're hoping for a big catch. But you might get nothing. You might get a small fish. The 'reward' is the potential—the big fish you're trying to hook. You can't guarantee it. You set up in a good spot, use the right bait, and wait. Trading is similar. You set your target (the big fish), you take the trade (cast the line), and you wait. Sometimes you hit the target. Often you don't. The key is making sure that when you do catch something, it's worth more than the bait you've lost on empty casts.",
      },
      {
        type: "warning",
        heading: "Don't Confuse Hope With a Plan",
        content:
          "Beginners often set targets based on wishful thinking—'I want to make 50% on this trade.' That's not a target; that's a fantasy. Real targets are based on support/resistance, measured moves, or logical exit points. They're defined before entry. And they're paired with a stop loss. Hope is not a strategy. A clear reward target with a clear risk level is.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why do pros want reward larger than risk?",
        component: "ConceptCheck",
        props: { question: "Why do pros want the potential reward larger than the risk on each trade?", reveal: "So that you can be wrong more than half the time and still profit. If you risk $1 to make $2 (1:2), you only need to win 34% of trades to break even. That's the power of positive risk-reward." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Reward is the profit you're targeting. It's never guaranteed. Smart traders only take trades where the potential reward is meaningfully larger than the risk they're taking.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "risk-reward-relationship",
    title: "The Risk-Reward Relationship",
    slug: "risk-reward-relationship",
    level: 1,
    moduleId: "risk-reward-fundamentals",
    order: 3,
    duration: "12 min",
    objectives: [
      "Understand that you can't have reward without risk",
      "Learn why risk-reward ratio matters",
      "See how 1:2 or 1:3 ratios improve long-term results",
      "Use the math to improve your edge",
    ],
    prerequisites: ["risk-what", "reward-what"],
    content: [
      {
        type: "text",
        heading: "You Can't Have One Without the Other",
        content:
          "There's no reward without risk. If an opportunity had no risk, everyone would take it, the edge would disappear, and the returns would collapse. The best traders don't avoid risk—they seek situations where the potential reward is meaningfully larger than the risk.\n\nThey look for at least 1:2 (risk $1 to make $2) or better. Why? Because with 1:2, you can be wrong more than half the time and still profit. Win 40% of trades, lose 60%—and with 1:2 reward-to-risk, you're still making money. That's the power of positive risk-reward. You don't need to be right most of the time. You need to make more when right than you lose when wrong.",
      },
      {
        type: "example",
        heading: "Simple Math That Changes Everything",
        content:
          "If you risk $100 per trade and your average reward is $200 (1:2 ratio), you need to win only 34% of trades to break even. Win 50%, and you're solidly profitable. Win 40%, and you're still in the green.\n\nNow flip it. If you risk $100 and only make $50 when right (1:0.5), you need to win 67% just to break even. That's much harder. One bad streak and you're crushed. The math favors traders who insist on positive risk-reward. It's not optional—it's the foundation of surviving and thriving.",
      },
      {
        type: "analogy",
        heading: "The Casino Analogy (Reversed)",
        content:
          "A casino wins because the odds are slightly in its favor—51% vs 49%. Over millions of bets, that edge prints money. You're the opposite: you're the player. So you need your wins to be bigger than your losses. If you win $2 when right and lose $1 when wrong, you only need to be right 34% of the time. If you win $1 when right and lose $2 when wrong, you need to be right 67% of the time. The first scenario is achievable. The second is nearly impossible over the long run.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Before every trade, write down your entry, stop loss, and take-profit. Calculate the risk-reward. If it's worse than 1:2, ask yourself: can I find a better entry or a tighter stop to improve the ratio? If not, consider skipping the trade. The best traders are picky. They only take setups that offer favorable math.",
      },
      {
        type: "interactive",
        heading: "Try It: Risk-Reward Calculator",
        content: "Enter entry, stop loss, and a risk:reward ratio to see your take-profit level.",
        component: "RiskRewardCalculator",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Always know your risk and your target reward before entering a trade. Aim for at least 1:2 (risk one unit to make two). That way, you don't need to be right most of the time to succeed.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "thinking-about-losses",
    title: "How to Think About Losses",
    slug: "thinking-about-losses",
    level: 1,
    moduleId: "risk-reward-fundamentals",
    order: 4,
    duration: "12 min",
    objectives: [
      "Accept that losses are inevitable",
      "Understand that even the best traders lose often",
      "Learn to treat losses as the cost of doing business",
      "Size your trades for drawdowns",
    ],
    prerequisites: ["risk-reward-relationship"],
    content: [
      {
        type: "text",
        heading: "Losses Are Inevitable",
        content:
          "Every trader has losing trades. Every single one. Even professional funds with billions under management have losing months. Legendary traders have had 10 or 20 losers in a row. A 60% win rate is considered strong—that means 4 out of every 10 trades lose. If you can't accept losses emotionally, you'll either avoid trading (and miss opportunities) or hold losers too long and turn small losses into disasters.\n\nThe traders who survive are the ones who expect losses and plan for them. They don't take each loss personally. They don't revenge trade. They move on.",
      },
      {
        type: "text",
        heading: "The Cost of Doing Business",
        content:
          "Think of losses like a shop owner thinks of rent or inventory cost—they're part of the business. You're paying to play. The goal isn't to never lose; it's to keep losses small and let winners be larger so that over many trades you're net positive.\n\nA baseball player who fails 7 out of 10 times at bat is a star. A trader who loses 4 out of 10 trades but wins big on the other 6 can be highly profitable. Losses aren't failure—they're the price of admission. The failure is not planning for them.",
      },
      {
        type: "analogy",
        heading: "The Poker Analogy",
        content:
          "In poker, even the best players lose most hands. They fold. They lose the blinds. It's part of the game. The goal isn't to win every hand—it's to lose small on bad hands and win big on good ones. Over a night, or a year, the math works out. Trading is the same. You'll lose often. The key is losing small (tight stops, position sizing) and winning bigger when you're right (targets, letting winners run). One or two disasters can wipe out months of small wins. Avoid the disasters.",
      },
      {
        type: "warning",
        heading: "Plan for Drawdowns",
        content:
          "A drawdown is a peak-to-trough decline in your account. Every trader experiences them. A 20% drawdown means your $10,000 account dropped to $8,000. It happens. If you can't stomach that psychologically, don't risk per trade in a way that makes it possible. Size small. Use strict stops. And understand: drawdowns are normal. The question is whether you'll still be trading when the next uptrend starts.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why is a 60% win rate considered strong?",
        component: "ConceptCheck",
        props: { question: "Why is a 60% win rate considered strong for a trader?", reveal: "Because markets are uncertain—no one gets every trade right. Winning 6 out of 10 trades is already above average. With good risk-reward (e.g. 1:2), you can be profitable even below 50% win rate." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Losses will happen. Plan for them. Size your trades so that a normal string of losses doesn't destroy your account. If you can't stomach a 20% drawdown, don't risk per trade in a way that makes that possible.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "protecting-money-stops",
    title: "Protecting Your Money: Stop Losses",
    slug: "protecting-money-stops",
    level: 1,
    moduleId: "risk-reward-fundamentals",
    order: 5,
    duration: "12 min",
    objectives: [
      "Understand what a stop loss is",
      "Learn why you should decide your exit before you enter",
      "See how stops limit damage",
      "Avoid the trap of moving stops",
    ],
    prerequisites: ["thinking-about-losses"],
    content: [
      {
        type: "text",
        heading: "What is a Stop Loss?",
        content:
          "A stop loss is a predetermined price at which you will exit a trade to limit your loss. If you buy at $50 and set a stop at $48, you're saying: 'If the price hits $48, I'm wrong and I'm out.' You don't wait to 'see if it comes back'—you exit. That caps your loss at $2 per share.\n\nStops can be placed with your broker (automatic) or as a mental level (you watch and exit manually). Automatic stops are better for discipline—they execute even when you're tempted to 'give it more room.' The stop is a commitment to yourself: this is my maximum loss.",
      },
      {
        type: "text",
        heading: "Decide Before You Enter",
        content:
          "Where should your stop go? Before you click buy. Not after. Not when price is approaching it. Before. If you decide after entry, emotions—hope, fear, denial—will push you to move the stop further away or remove it entirely. 'Maybe it'll bounce.' It might. Or it might drop another 20%. Pre-defined stops keep you disciplined. They're part of your trade plan, not a negotiable detail.",
      },
      {
        type: "analogy",
        heading: "The Fire Escape Analogy",
        content:
          "When you enter a building, you notice the fire exits. You don't wait for a fire to figure out how to escape. You plan ahead. A stop loss is your fire exit. You define it before you enter the trade. If the trade 'catches fire'—price moves against you—you have a pre-planned exit. You don't stand there hoping the fire will go out. You exit. Small loss. Live to trade another day.",
      },
      {
        type: "warning",
        heading: "The Fatal Mistake: Moving Your Stop",
        content:
          "Beginners often move their stop loss further away when price approaches it, hoping to avoid being stopped out. 'It's just $1 away, I'll give it more room.' That turns a small loss into a big one. The stock drops another 10%. Now they're down 15% instead of 2%. Once you set your stop, respect it. If you get stopped out often, the problem isn't the stop—it's your entry timing or trade selection. Fix those. Don't remove the stop.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Place stops at a level that invalidates your thesis. If you're buying at support, your stop goes below support. If support breaks, your reason for the trade is gone—exit. Don't place stops arbitrarily (e.g. '2% below entry'). Place them where the trade is objectively wrong.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Where should you decide your stop loss?",
        component: "ConceptCheck",
        props: { question: "When should you decide where to place your stop loss?", reveal: "Before you enter the trade. If you decide after entry, emotions (hope, fear) can push you to move the stop or remove it. Pre-defined stops keep you disciplined." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Decide before you enter where you'll exit if you're wrong. Use a stop loss. Never enter a trade without knowing your maximum loss. It's the most basic form of risk management.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "why-most-lose",
    title: "Why Most Traders Lose Money",
    slug: "why-most-lose",
    level: 1,
    moduleId: "risk-reward-fundamentals",
    order: 6,
    duration: "12 min",
    objectives: [
      "Understand the statistics (e.g. 70–90% of retail traders lose)",
      "Learn the main reasons: overtrading, poor risk management, emotion",
      "See how to be in the minority that succeeds",
      "Avoid the traps that destroy accounts",
    ],
    prerequisites: ["protecting-money-stops"],
    content: [
      {
        type: "text",
        heading: "The Harsh Statistics",
        content:
          "Studies and regulator reports consistently show that a large majority of retail traders lose money—often cited in the 70–90% range. The exact number varies by market and study, but the pattern is clear: most people who try to trade lose. That doesn't mean trading is impossible; it means most people approach it without the right knowledge, discipline, or risk management.\n\nWhy does this matter? Because you need to know what you're up against. The odds are stacked against the unprepared. The good news: the failures are largely preventable. You're learning. That already puts you ahead.",
      },
      {
        type: "text",
        heading: "Main Reasons Traders Fail",
        content:
          "Six patterns show up again and again. (1) Risking too much per trade—one bad streak wipes them out. (2) No stop loss or moving it when wrong—small losses become disasters. (3) Overtrading—taking low-quality setups, paying fees and spreads on every trade, churning the account. (4) Trading on emotion—revenge trading after a loss, or FOMO when they see a move they missed. (5) Unrealistic expectations—expecting to get rich quickly, then taking huge risks to get there. (6) Insufficient education—jumping in before understanding the basics, treating the market like a casino.\n\nNotice: none of these are about 'bad luck.' They're about choices. Choices you can avoid.",
      },
      {
        type: "analogy",
        heading: "The Casino Analogy",
        content:
          "In a casino, the house has an edge. Over time, most gamblers lose. But some people win in the short term—they get lucky. They think they're skilled. They come back and bet bigger. Then variance catches up. They lose everything. Trading is similar. Beginners sometimes win early by luck. They confuse luck with skill. They increase size. They stop using stops. The market eventually teaches them the difference—expensively. Don't be that person. Assume you'll have losing streaks. Plan for them.",
      },
      {
        type: "warning",
        heading: "The Revenge Trade Trap",
        content:
          "After a loss, many traders immediately take another trade to 'get it back.' That's revenge trading. Emotions are high. Judgment is clouded. They size up, ignore their plan, and often lose again. One bad trade becomes five. The solution: after a loss, step away. Take a break. Review what happened when you're calm. Don't trade angry.",
      },
      {
        type: "text",
        heading: "What Winners Do Differently",
        content:
          "They risk a small percentage per trade (e.g. 1%). They use stop losses and stick to them. They have a plan and follow it. They treat trading as a business, not gambling. They keep learning and keep records. They accept losses as part of the process. They don't overtrade—they wait for their setup. They manage emotions. None of this is secret. It's discipline. You're here learning—that already puts you ahead of many who never bother. Now execute.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Keep a trading journal. Write down every trade: entry, exit, reason, emotion. Review weekly. Patterns emerge. You'll see your mistakes repeat. Fix those first. The traders who improve are the ones who learn from their losses instead of pretending they didn't happen.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What is the single biggest reason most retail traders lose?",
        component: "ConceptCheck",
        props: { question: "What is the single biggest reason most retail traders lose?", reveal: "There isn't one—but the main culprits are risking too much per trade, no stop loss or moving it when wrong, and emotional trading. Fix risk and discipline first." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Most traders lose because of poor risk management and emotion, not bad luck. By learning proper risk and reward, using stops, and staying disciplined, you give yourself a real chance to be in the minority that succeeds.",
      },
    ],
    hasQuiz: true,
  },
];

/** Module 1.5: Getting Started Safely */
export const gettingStartedLessons: Lesson[] = [
  {
    id: "paper-trading",
    title: "Paper Trading Explained",
    slug: "paper-trading",
    level: 1,
    moduleId: "getting-started-safely",
    order: 1,
    duration: "12 min",
    objectives: [
      "Understand what paper trading is",
      "Learn why you should practice with fake money first",
      "Know how long to paper trade before going live",
      "Use paper trading effectively",
    ],
    prerequisites: ["why-most-lose"],
    content: [
      {
        type: "text",
        heading: "What is Paper Trading?",
        content:
          "Paper trading is practicing with simulated money—no real cash at risk. You get a virtual account with a fake balance (e.g. $100,000), place orders in real markets (sometimes with delayed data), and see how your decisions would have played out. It's like a flight simulator for trading. You're learning the controls and practicing maneuvers before you're in a real plane with real passengers.\n\nMost brokers offer free paper trading accounts. You download their platform, sign up for a demo, and trade. The mechanics are identical to live trading—entries, exits, stop losses—but the money isn't real.",
      },
      {
        type: "text",
        heading: "Why Start with Paper?",
        content:
          "When real money is on the line, emotions kick in. Fear makes you close winners too early. Hope makes you hold losers too long. Greed makes you overtrade. Paper trading lets you learn the platform, test your strategy, and build habits without the stress of losing real money. You can make mistakes—and you will—without paying for them in cash.\n\nMost educators and pros recommend at least 1–3 months of consistent paper trading before going live. And not just any 3 months—3 months where you're following a plan, tracking results, and showing discipline. If you can't do it with fake money, real money will be harder.",
      },
      {
        type: "analogy",
        heading: "The Driving Simulator Analogy",
        content:
          "Before you drive on a highway, you practice in a parking lot or quiet streets. You learn to steer, brake, and signal without the pressure of rush-hour traffic. Paper trading is the same. You learn order entry, stop placement, and position sizing in a low-stakes environment. When you go live, you'll still be nervous—but you'll have reps. You'll know what a good trade looks like. You'll have built habits. Skipping paper trading is like going straight to the highway with a learner's permit and no practice. Possible, but reckless.",
      },
      {
        type: "warning",
        heading: "Paper Trading Has Limits",
        content:
          "Paper trading doesn't fully replicate the emotional reality of live trading. Losing $1,000 of fake money doesn't feel like losing $1,000 of real money. Slippage and execution can differ. Some traders are disciplined in paper and fall apart with real money. Use paper to learn, but don't assume success there guarantees success live. It's a necessary step—not a substitute for gradual real-money experience with small size.",
      },
      {
        type: "pro-tip",
        heading: "Treat Paper Like Real Money",
        content:
          "Use the same position sizes (as a % of account) you'd use live. Use the same risk rules. Keep a trading journal. If you wouldn't do it with real money, don't do it in paper. The goal is to build real habits, not to 'win' at a game. Traders who treat paper casually often repeat the same mistakes when they go live.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "How long should you paper trade before going live?",
        component: "ConceptCheck",
        props: { question: "How long should you paper trade before going live?", reveal: "Most educators recommend at least 1–3 months of consistent paper trading—and only when you're profitable and disciplined in simulation. There's no rush." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Paper trading is free practice with no financial risk. Use it to learn your platform, test your plan, and build discipline. Don't skip this step—it could save you thousands.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "how-much-to-start",
    title: "How Much Money Do You Need to Start?",
    slug: "how-much-to-start",
    level: 1,
    moduleId: "getting-started-safely",
    order: 2,
    duration: "12 min",
    objectives: [
      "Get realistic numbers for different markets",
      "Understand that you should only use money you can afford to lose",
      "See why starting too small can be limiting",
    ],
    prerequisites: ["paper-trading"],
    content: [
      {
        type: "text",
        heading: "The Honest Answer",
        content:
          "You can open some brokerage accounts with $0–500. But to trade properly—with risk management (e.g. 1% per trade) and room for drawdowns—you need more. Many educators suggest at least $2,000–5,000 for stocks. For day trading US stocks, the PDT rule requires $25,000 minimum to avoid restrictions. Forex and crypto often allow smaller minimums, but the same risk rules apply: never risk money you need for life expenses.\n\nStarting with $500 and risking 1% means $5 per trade. That limits which stocks you can trade (many cost $50–500 per share) and makes fees eat a larger share of profits. $2,000–5,000 gives you room to practice position sizing realistically.",
      },
      {
        type: "text",
        heading: "Why Size Matters",
        content:
          "With too small an account, you can't properly implement risk management. If you have $500 and want to risk 1%, that's $5. On a $100 stock, you can barely buy one share, and your stop might be so tight that normal noise stops you out. You're not really learning—you're just getting chopped up. Save until you have enough to trade with proper sizing. Paper trade in the meantime.",
      },
      {
        type: "warning",
        heading: "Critical Rule",
        content:
          "Only use money you can afford to lose completely. Trading is speculative. If losing this money would affect your rent, food, or family, don't trade it. Save up an emergency fund first—3–6 months of expenses. Then allocate a separate 'trading' portion you're willing to lose. That money is tuition. You might lose it learning. It must not matter to your life.",
      },
      {
        type: "analogy",
        heading: "The Driving School Analogy",
        content:
          "You wouldn't learn to drive in a car you can't afford to scratch. Trading capital is the same. You're going to make mistakes. You might lose 20–30% in your first year while learning. If that loss would devastate you, you're undercapitalized. Save more. Paper trade longer. The right amount is the amount that, if lost, you can say 'that was expensive education' and move on.",
      },
      {
        type: "interactive",
        heading: "Try It: Position Size Calculator",
        content: "See how account size, risk %, and stop distance determine how many shares you can buy.",
        component: "PositionSizeCalculator",
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Minimums vary by broker and market. Whatever the number, it should be capital you can afford to lose. Start with an amount that lets you practice position sizing and risk management—usually at least a few thousand for serious learning.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "choosing-first-market",
    title: "Choosing Your First Market",
    slug: "choosing-first-market",
    level: 1,
    moduleId: "getting-started-safely",
    order: 3,
    duration: "12 min",
    objectives: [
      "Compare stocks, forex, commodities, crypto for beginners",
      "Understand capital and time requirements",
      "Make an informed first choice",
      "Avoid spreading yourself too thin",
    ],
    prerequisites: ["how-much-to-start"],
    content: [
      {
        type: "text",
        heading: "A Simple Framework",
        content:
          "Four factors should drive your choice. (1) Capital: How much do you have? Stocks often need more for meaningful position sizing—$2,000–5,000 minimum for serious learning. Forex and crypto allow smaller accounts, but leverage risk increases. (2) Time: What hours can you trade? US stocks = 9:30 AM–4 PM Eastern. Forex = 24/5. Crypto = 24/7. If you work days, forex or crypto might fit better. (3) Interest: What are you drawn to? You'll learn faster if you care about the asset. (4) Safety: Stick to regulated brokers and well-known instruments. Avoid exotic or unregulated products when starting.",
      },
      {
        type: "text",
        heading: "Stocks vs Forex vs Crypto",
        content:
          "Stocks offer the most learning resources, clearest structure, and strong regulation. Many beginners start here. Forex offers 24/5 access, high liquidity, and the ability to trade with smaller accounts—but leverage is dangerous. Crypto is 24/7 and volatile; it attracts speculation but has less regulation and more risk. Commodities (gold, oil) sit in between. There's no 'best' market—there's the best market for YOU given your capital, schedule, and goals.",
      },
      {
        type: "analogy",
        heading: "The Language Learning Analogy",
        content:
          "Learning to trade a market is like learning a language. You could try to learn Spanish, Mandarin, and French at once—but you'd progress slowly in all of them. Better to master one language first, then add another. Pick one market. Learn its rhythms, its patterns, its quirks. Get good. Then, if you want, add another. Deep skill in one market beats mediocre skill in several.",
      },
      {
        type: "warning",
        heading: "Don't Chase Every Market",
        content:
          "Beginners often see stocks up one day, crypto pumping the next, forex moving, and want to trade everything. That leads to scattered attention, shallow knowledge, and losses everywhere. You'll miss the best setups because you're watching too many things. Commit to one market for at least 6–12 months. Master it. Then expand if you want.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Your first market doesn't have to be forever. Many traders start with stocks (most familiar), get comfortable with charts and risk, then try forex or crypto. The skills transfer—chart reading, risk management, psychology. But learn them in one place first.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why master one market before adding others?",
        component: "ConceptCheck",
        props: { question: "Why master one market before adding others?", reveal: "Because each market has its own hours, rules, and behavior. Spreading attention too thin slows learning and leads to shallow execution. Deep skill in one market beats mediocre skill in several." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Your first market should match your capital, schedule, and interest. Don't spread yourself across everything—master one, then expand.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "demo-account-setup",
    title: "Setting Up a Demo Account",
    slug: "demo-account-setup",
    level: 1,
    moduleId: "getting-started-safely",
    order: 4,
    duration: "12 min",
    objectives: [
      "Know how to open a demo account",
      "Understand what to practice",
      "Use demo as a bridge to live trading",
      "Avoid common demo mistakes",
    ],
    prerequisites: ["choosing-first-market"],
    content: [
      {
        type: "text",
        heading: "How to Get a Demo Account",
        content:
          "Most brokers offer free demo accounts. Sign up on their website, look for 'Demo,' 'Paper Trading,' or 'Practice Account,' and you'll get a virtual balance—often $100,000 or similar. You trade with that in real market conditions. Some brokers offer real-time data; others use delayed data (usually 15–20 minutes). No ID or deposit required for most demos.\n\nPick a broker that serves your chosen market. For stocks: think Schwab, E*TRADE, TD Ameritrade, Interactive Brokers. For forex: Oanda, Forex.com, IG. For crypto: Binance, Coinbase, Kraken. Most have demo options. Download their platform and start practicing.",
      },
      {
        type: "text",
        heading: "What to Practice",
        content:
          "Learn the platform first: placing market and limit orders, setting stop losses, reading charts, checking positions. Get comfortable with the mechanics. Then test your strategy: do you take trades that fit your plan? Do you use stops every time? Do you size positions correctly? Track your results: win rate, average win/loss, maximum drawdown. If you can't be profitable (or at least not blow up) in demo over 1–3 months, don't go live yet. Keep learning and adjusting. The goal is to build habits that will survive the transition to real money.",
      },
      {
        type: "analogy",
        heading: "The Flight Simulator Analogy",
        content:
          "Pilots train in simulators before flying real planes. They practice takeoffs, landings, emergencies—all without risk. Demo trading is your flight simulator. You're learning the controls (platform), practicing maneuvers (strategy), and building muscle memory (discipline). When you eventually go live, you'll still be nervous—but you'll have reps. You'll know what a good trade looks like. You'll have built the habits. Skipping demo is like a pilot skipping the simulator. Possible. Reckless.",
      },
      {
        type: "warning",
        heading: "Don't Treat Demo Like a Game",
        content:
          "Some traders go crazy in demo—huge positions, no stops, 'it's fake money.' That builds bad habits. When they go live, those habits come with them. Treat demo like real money. Use the same position sizes (as % of account), the same risk rules, the same discipline. The point is to build real habits, not to 'win' at a game. If you wouldn't do it with real money, don't do it in demo.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Use the same broker for demo that you might use for live. That way, when you switch, the platform is familiar. You won't be learning new software and real money at the same time. One less variable.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What should you prove in demo before going live?",
        component: "ConceptCheck",
        props: { question: "What should you prove in demo before going live?", reveal: "That you can follow your plan, use stops, and be profitable (or at least not blow up) over 1–3 months. If you can't do it with fake money, real money will be harder." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Demo accounts are free and low-pressure. Use them to learn the platform and validate your approach before risking real money.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "learning-path",
    title: "Your Learning Path",
    slug: "learning-path",
    level: 1,
    moduleId: "getting-started-safely",
    order: 5,
    duration: "12 min",
    objectives: [
      "Know what to study first",
      "Follow a logical order: basics → charts → risk → strategy",
      "Avoid skipping ahead",
      "Understand the full curriculum",
    ],
    prerequisites: ["demo-account-setup"],
    content: [
      {
        type: "text",
        heading: "Build Foundations First",
        content:
          "Start with what you're doing now: money, markets, risk. Understand why trading exists, what risk and reward mean, and why most people lose. Then move to chart reading—candlesticks, support/resistance, trends. You need to read price before you can trade it. After that, risk management in detail: position sizing, stops, the 1% rule. Only then focus on specific strategies and execution.\n\nSkipping to 'strategies' without foundations leads to random trading and losses. A strategy is useless if you don't know how to size positions or read a chart. Build the foundation. The strategies will make sense once you do.",
      },
      {
        type: "text",
        heading: "This Course's Structure",
        content:
          "Level 1 = foundations. Money, markets, risk, getting started. Level 2 = charts and markets in depth—candlesticks, support/resistance, trendlines, and deep dives into stocks, forex, commodities, crypto. Level 3 = indicators (moving averages, RSI, MACD), risk management, psychology, trading plans, and day trading strategies. Level 4 = options, derivatives, portfolio theory, advanced technical analysis. Level 5 = quantitative and algorithmic trading—Python, backtesting, machine learning. Complete each level before relying on the next for real-money decisions. The levels build on each other.",
      },
      {
        type: "analogy",
        heading: "The Building Blocks Analogy",
        content:
          "You can't learn calculus before arithmetic. You can't build a house without a foundation. Trading is the same. Chart reading is your arithmetic—you need it before strategies (calculus). Risk management is your foundation—without it, the house collapses. Don't rush. Each level prepares you for the next. Skipping ahead means you'll hit walls and have to go back anyway. Do it in order.",
      },
      {
        type: "warning",
        heading: "Don't Skip to 'The Good Stuff'",
        content:
          "Beginners often want to jump to Level 3 or 4—indicators, strategies, options. They think Level 1 is boring. It's not boring; it's essential. The traders who skip foundations are the ones who blow up. They have a 'strategy' but no risk management. They can read a chart but don't understand why they're trading. Finish Level 1. Then Level 2. Then decide if you're ready for more.",
      },
      {
        type: "preview",
        heading: "What's Coming in Level 2",
        content:
          "Level 2 dives deep into charts: candlestick patterns, support and resistance, trendlines, and timeframes. You'll also get comprehensive coverage of each market—stocks, forex, commodities, crypto—so you can understand how they work and choose your focus. By the end of Level 2, you'll be able to read a chart like a trader and understand the structure of the major markets.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "Why not skip to strategies first?",
        component: "ConceptCheck",
        props: { question: "Why not skip to strategies first?", reveal: "Because without foundations (risk, charts, discipline), any strategy becomes random trading. You need to know how to size positions, read price, and manage psychology—then strategies make sense." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "There's a logical order to learning. Follow the path: foundations → charts → risk → strategy. Don't jump to advanced tactics before you have the basics.",
      },
    ],
    hasQuiz: true,
  },
  {
    id: "common-mistakes",
    title: "Common Beginner Mistakes",
    slug: "common-mistakes",
    level: 1,
    moduleId: "getting-started-safely",
    order: 6,
    duration: "12 min",
    objectives: [
      "Avoid the most frequent beginner errors",
      "Learn from others' losses",
      "Start with good habits",
      "Recognize the traps before they catch you",
    ],
    prerequisites: ["learning-path"],
    content: [
      {
        type: "text",
        heading: "Mistakes to Avoid",
        content:
          "Eight patterns destroy beginner accounts. (1) Trading with money you need—never. Rent, bills, emergency fund are off-limits. (2) No stop loss—always define your exit before entry. (3) Overtrading—taking every setup, churning the account, paying fees. Wait for your setup. (4) Revenge trading after a loss—emotions high, judgment clouded. Take a break. (5) Chasing price (FOMO)—if you missed the move, wait for the next setup. (6) Risking too much per trade—use 1% or less. (7) Ignoring fees and spreads—they add up and erode returns. (8) Expecting to get rich fast—realistic expectations save your account and your sanity.",
      },
      {
        type: "warning",
        heading: "The One That Hurts Most: Averaging Down",
        content:
          "The single most destructive habit is adding to a losing position ('averaging down') hoping it will come back. You buy at $100, it drops to $90, you buy more to lower your average to $95. Sometimes it bounces and you win. Often it keeps dropping. Now you're down 20% on a doubled position. One big loser wipes out many small gains. Cut losses quickly. Let winners run. Never add to a loser.",
      },
      {
        type: "analogy",
        heading: "The Sinking Boat Analogy",
        content:
          "Imagine your trade is a boat with a leak. Averaging down is like pouring more water into the boat to 'dilute' the leak. It doesn't fix the problem—it makes it worse. The boat sinks faster. The right move is to abandon ship: cut the loss, get out, live to trade another day. Adding to a losing position rarely ends well. The market doesn't care about your average cost.",
      },
      {
        type: "text",
        heading: "Why These Mistakes Happen",
        content:
          "They all stem from two roots: poor risk management and emotion. Fear makes you hold losers too long or panic-sell. Greed makes you overtrade or chase. Ego makes you revenge-trade or refuse to admit you're wrong. The solution isn't to eliminate emotion—it's to have rules that override it. Pre-defined stops. Position sizing. A written plan. When emotion screams, the plan answers.",
      },
      {
        type: "pro-tip",
        heading: "Pro Tip",
        content:
          "Write down your top 3 mistakes before you trade. Keep the list visible. Before every trade, ask: am I about to make one of these? It's a simple check that catches many errors. 'Am I adding to a loser? Am I revenge trading? Am I chasing?' If yes—don't trade.",
      },
      {
        type: "interactive",
        heading: "Think It Through",
        content: "What is 'averaging down' and why is it dangerous?",
        component: "ConceptCheck",
        props: { question: "What is 'averaging down' and why is it dangerous?", reveal: "Averaging down = adding to a losing position to lower your average entry. It's dangerous because you're increasing risk on a trade that's already wrong. One big loser can wipe out many small gains." },
      },
      {
        type: "key-takeaway",
        heading: "Key Takeaway",
        content:
          "Beginners lose mostly due to poor risk management and emotion. Avoid the common mistakes: trade only risk capital, use stops, don't overtrade or revenge trade, and keep expectations realistic.",
      },
    ],
    hasQuiz: true,
  },
];

/** Level 1 Final Exam (single "lesson" that is the exam; 25 questions in level1Quizzes) */
export const level1ExamLesson: Lesson = {
  id: "level-1-exam",
  title: "Level 1 Final Exam",
  slug: "level-1-exam",
  level: 1,
  moduleId: "level-1-exam",
  order: 1,
  duration: "25 min",
  objectives: [
    "Demonstrate mastery of money, markets, risk, and getting started",
    "Pass with 80% or higher to unlock Level 2",
  ],
  prerequisites: [],
  content: [
    {
      type: "text",
      heading: "About This Exam",
      content:
        "This exam has 25 questions drawn from all five Level 1 modules: Money & Economics, Trading & Investing, Markets, Risk & Reward, and Getting Started Safely. You need 80% (20 out of 25 correct) to pass and unlock Level 2. Take your time and use what you've learned.",
    },
    {
      type: "warning",
      heading: "Unlock Requirement",
      content:
        "Level 2 (Market Basics & Chart Reading) stays locked until you pass this exam. There's no time limit—review the modules if you need a refresher before taking it.",
    },
    {
      type: "key-takeaway",
      heading: "Ready?",
      content:
        "When you're ready, the quiz below will show all 25 questions. Good luck.",
    },
  ],
  hasQuiz: true,
};
