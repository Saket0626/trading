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
    duration: "8 min",
    objectives: [
      "Define risk in the context of trading",
      "Understand that risk means the possibility of losing money",
      "See how different markets carry different risk levels",
    ],
    prerequisites: [],
    content: [
      {
        type: "text",
        heading: "Why This Matters",
        content:
          "Risk is the chance that you could lose some or all of the money you put into a trade. Every trade has risk. Professional traders don't try to avoid risk—they manage it. Understanding risk is the first step to protecting your capital.",
      },
      {
        type: "text",
        heading: "Risk = Uncertainty",
        content:
          "When you buy a stock, you don't know for certain whether the price will go up or down. That uncertainty is risk. The more the price can move against you, the higher the risk. Volatile assets (like some growth stocks or crypto) can swing 5–10% in a day—that's high risk. A bond might move 0.1%—lower risk, but still not zero.",
      },
      {
        type: "example",
        heading: "Real Example",
        content:
          "You buy $1,000 of a stock. If the stock drops 20%, you've lost $200. That $200 (or 20%) is the risk you took. If you'd set a stop loss at 10%, your risk would have been capped at $100. Risk management is about deciding in advance how much you're willing to lose.",
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
    duration: "8 min",
    objectives: [
      "Define reward as potential profit",
      "Understand that reward is not guaranteed",
      "See how traders target reward relative to risk",
    ],
    prerequisites: ["risk-what"],
    content: [
      {
        type: "text",
        heading: "Reward = Potential Gain",
        content:
          "Reward is the profit you're aiming for on a trade. If you buy at $100 and your target is $110, your potential reward is $10 per share (10%). That reward is only realized if the price actually reaches your target and you sell. Until then, it's a goal, not a guarantee.",
      },
      {
        type: "text",
        heading: "Why Reward Isn't Guaranteed",
        content:
          "Markets can reverse at any time. A trade that looks like it's heading for your target can turn around and hit your stop loss instead. Professional traders think in probabilities: they aim for a reward that's large enough that they can be wrong more often than right and still make money—that's the risk-reward ratio.",
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
    duration: "10 min",
    objectives: [
      "Understand that you can't have reward without risk",
      "Learn why risk-reward ratio matters",
      "See how 1:2 or 1:3 ratios improve long-term results",
    ],
    prerequisites: ["risk-what", "reward-what"],
    content: [
      {
        type: "text",
        heading: "You Can't Have One Without the Other",
        content:
          "There's no reward without risk. If an opportunity had no risk, everyone would take it and the edge would disappear. The best traders look for situations where the potential reward is at least 2x the risk—so even if they're wrong half the time, they can still profit.",
      },
      {
        type: "example",
        heading: "Simple Math",
        content:
          "If you risk $100 per trade and your average reward is $200 (1:2), you need to win only 34% of trades to break even. If you win 50%, you're making money. If you risk $100 and only make $50 when right (1:0.5), you need to win 67% just to break even—much harder.",
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
    duration: "8 min",
    objectives: [
      "Accept that losses are inevitable",
      "Understand that even the best traders lose often",
      "Learn to treat losses as the cost of doing business",
    ],
    prerequisites: ["risk-reward-relationship"],
    content: [
      {
        type: "text",
        heading: "Losses Are Inevitable",
        content:
          "Every trader has losing trades. Even professional funds with billions under management have losing months. A 60% win rate is considered strong. That means 4 out of every 10 trades lose. If you can't accept losses emotionally, you'll either avoid trading (and miss opportunities) or hold losers too long and turn small losses into disasters.",
      },
      {
        type: "text",
        heading: "The Cost of Doing Business",
        content:
          "Think of losses like a shop owner thinks of rent or inventory cost—they're part of the business. You're paying to play. The goal isn't to never lose; it's to keep losses small and let winners be larger so that over many trades you're net positive.",
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
    duration: "10 min",
    objectives: [
      "Understand what a stop loss is",
      "Learn why you should decide your exit before you enter",
      "See how stops limit damage",
    ],
    prerequisites: ["thinking-about-losses"],
    content: [
      {
        type: "text",
        heading: "What is a Stop Loss?",
        content:
          "A stop loss is a predetermined price at which you will exit a trade to limit your loss. If you buy at $50 and set a stop at $48, you're saying: 'If the price hits $48, I'm wrong and I'm out.' You don't wait to 'see if it comes back'—you exit. That caps your loss at $2 per share.",
      },
      {
        type: "warning",
        heading: "Common Mistake",
        content:
          "Beginners often move their stop loss further away when price approaches it, hoping to avoid being stopped out. That turns a small loss into a big one. Once you set your stop, respect it. If you get stopped out often, improve your entry timing—don't remove the stop.",
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
    duration: "10 min",
    objectives: [
      "Understand the statistics (e.g. 70–90% of retail traders lose)",
      "Learn the main reasons: overtrading, poor risk management, emotion",
      "See how to be in the minority that succeeds",
    ],
    prerequisites: ["protecting-money-stops"],
    content: [
      {
        type: "text",
        heading: "The Harsh Statistics",
        content:
          "Studies and regulator reports consistently show that a large majority of retail traders lose money—often cited in the 70–90% range. That doesn't mean trading is impossible; it means most people approach it without the right knowledge, discipline, or risk management.",
      },
      {
        type: "text",
        heading: "Main Reasons Traders Fail",
        content:
          "(1) Risking too much per trade—one bad streak wipes them out. (2) No stop loss or moving it when wrong. (3) Overtrading—taking low-quality setups and paying fees/spreads. (4) Trading on emotion—revenge trading after a loss, or FOMO. (5) Unrealistic expectations—expecting to get rich quickly. (6) Insufficient education—jumping in before understanding the basics.",
      },
      {
        type: "text",
        heading: "What Winners Do Differently",
        content:
          "They risk a small percentage per trade (e.g. 1%). They use stop losses and stick to them. They have a plan and follow it. They treat trading as a business, not gambling. They keep learning and keep records. You're here learning—that already puts you ahead of many who never bother.",
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
    duration: "8 min",
    objectives: [
      "Understand what paper trading is",
      "Learn why you should practice with fake money first",
      "Know how long to paper trade before going live",
    ],
    prerequisites: ["why-most-lose"],
    content: [
      {
        type: "text",
        heading: "What is Paper Trading?",
        content:
          "Paper trading is practicing with simulated money—no real cash at risk. You get a virtual account with fake balance, place real orders in real markets (or delayed data), and see how your decisions would have played out. It's like a flight simulator for trading.",
      },
      {
        type: "text",
        heading: "Why Start with Paper?",
        content:
          "When real money is on the line, emotions kick in. You might close winners too early or hold losers too long. Paper trading lets you learn the platform, test your strategy, and build habits without the stress of losing real money. Most educators and pros recommend at least 1–3 months of consistent paper trading before going live.",
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
    duration: "10 min",
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
          "You can open some brokerage accounts with $0–500. But to trade properly—with risk management (e.g. 1% per trade) and room for drawdowns—you need more. Many educators suggest at least $2,000–5,000 for stocks (and more for day trading due to the PDT rule). Forex and crypto often allow smaller minimums, but the same risk rules apply: never risk money you need for life expenses.",
      },
      {
        type: "warning",
        heading: "Critical Rule",
        content:
          "Only use money you can afford to lose completely. Trading is speculative. If losing this money would affect your rent, food, or family, don't trade it. Save up an emergency fund first, then allocate a separate 'trading' portion you're willing to lose.",
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
    duration: "8 min",
    objectives: [
      "Compare stocks, forex, commodities, crypto for beginners",
      "Understand capital and time requirements",
      "Make an informed first choice",
    ],
    prerequisites: ["how-much-to-start"],
    content: [
      {
        type: "text",
        heading: "A Simple Framework",
        content:
          "Consider: (1) How much capital do you have? Stocks often need more for meaningful position sizing; forex and crypto allow smaller accounts (with higher leverage risk). (2) What hours can you trade? US stocks = market hours; forex = 24/5; crypto = 24/7. (3) What are you interested in? You'll learn faster if you care about the asset. (4) Regulation and safety—stick to regulated brokers and well-known instruments.",
      },
      {
        type: "text",
        heading: "A Common Path",
        content:
          "Many educators suggest starting with stocks or forex because of the abundance of learning material, regulated brokers, and clear market structure. Crypto is volatile and exciting but riskier and less regulated. Pick one market, learn it deeply, and only add others once you're consistent.",
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
    duration: "8 min",
    objectives: [
      "Know how to open a demo account",
      "Understand what to practice",
      "Use demo as a bridge to live trading",
    ],
    prerequisites: ["choosing-first-market"],
    content: [
      {
        type: "text",
        heading: "How to Get a Demo Account",
        content:
          "Most brokers offer free demo accounts. Sign up on their website, choose 'Demo' or 'Paper Trading', and you'll get a virtual balance (e.g. $100,000). You trade with that in real market conditions (sometimes delayed data). No ID or deposit required for most demos.",
      },
      {
        type: "text",
        heading: "What to Practice",
        content:
          "Learn the platform: placing orders, setting stop losses, reading charts. Test your strategy: do you take trades that fit your plan? Track your results: win rate, average win/loss, drawdowns. If you can't be profitable in demo over 1–3 months, don't go live yet—keep learning and adjusting.",
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
    duration: "8 min",
    objectives: [
      "Know what to study first",
      "Follow a logical order: basics → charts → risk → strategy",
      "Avoid skipping ahead",
    ],
    prerequisites: ["demo-account-setup"],
    content: [
      {
        type: "text",
        heading: "Build Foundations First",
        content:
          "Start with what you're doing now: money, markets, risk. Then move to chart reading (candlesticks, support/resistance, trends). After that, risk management in detail (position sizing, stops). Only then focus on specific strategies and execution. Skipping to 'strategies' without foundations leads to random trading and losses.",
      },
      {
        type: "text",
        heading: "This Course's Structure",
        content:
          "Level 1 = foundations. Level 2 = charts and markets in depth. Level 3 = indicators, risk management, psychology, and day trading strategies. Level 4 = options and advanced topics. Level 5 = quantitative and algorithmic trading. Complete each level before relying on the next for real-money decisions.",
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
    duration: "10 min",
    objectives: [
      "Avoid the most frequent beginner errors",
      "Learn from others' losses",
      "Start with good habits",
    ],
    prerequisites: ["learning-path"],
    content: [
      {
        type: "text",
        heading: "Mistakes to Avoid",
        content:
          "(1) Trading with money you need—never. (2) No stop loss—always define your exit. (3) Overtrading—wait for your setup. (4) Revenge trading after a loss—take a break. (5) Chasing price (FOMO)—if you missed the move, wait for the next setup. (6) Risking too much per trade—use 1% or less. (7) Ignoring fees and spreads—they add up. (8) Expecting to get rich fast—realistic expectations save your account and your sanity.",
      },
      {
        type: "warning",
        heading: "The One That Hurts Most",
        content:
          "The single most destructive habit is adding to a losing position ('averaging down') hoping it will come back. Sometimes it does; often it doesn't. When it doesn't, you've doubled or tripled your loss. Cut losses quickly; let winners run.",
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
