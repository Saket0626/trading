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
  moduleId: "ml-trading",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const level5MLLessons: Lesson[] = [
  createLesson("ml-overview", 1, "ML for Trading Overview", "ml-overview", "22 min", ["When ML helps", "Realistic expectations", "Where it adds value"], [
    {
      type: "text",
      heading: "When Can ML Help?",
      content:
        "Machine learning can help when you have rich features (e.g. many indicators, volume, sentiment) and a clear target (e.g. next-day return up/down, or volatility regime). It's useful for pattern recognition and regime detection—combining many signals in non-linear ways.\n\nIt doesn't magic away market noise—predicting price is hard. Use ML as one tool: maybe a classifier for regime (trending vs mean-reverting) and then apply the right strategy. Or a model to rank stocks; then trade the top/bottom. Always validate out-of-sample and with walk-forward; overfitting is the main enemy. ML can find patterns in noise—validate rigorously.",
    },
    {
      type: "text",
      heading: "Realistic Expectations",
      content:
        "ML in finance is competitive; edge erodes as more people use similar data and models. Start simple: logistic regression or random forest before deep learning. Focus on feature quality and robust validation. Many quants find that simple rules with good risk management beat complex ML.\n\nUse ML where it adds value: combining many signals, non-linear relationships, regime detection. Don't use ML when a simple rule works—don't add complexity without benefit. Stay disciplined on overfitting and costs. Past ML performance doesn't guarantee future results.",
    },
    {
      type: "analogy",
      heading: "The Swiss Army Knife Analogy",
      content:
        "Think of ML like a Swiss Army knife. It has many tools—some useful, some not. You don't use every tool for every job. ML can combine many signals (regime, momentum, mean reversion) in complex ways. But sometimes a simple screwdriver (rule-based strategy) is enough. Don't reach for ML because it's fancy; use it when it solves a problem simple rules can't. And keep it sharp—validate, validate, validate.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Overfitting is the #1 risk with ML in trading. Models with many parameters can fit noise—great in-sample, terrible out-of-sample. Always use time-based train/test splits, walk-forward validation, and hold out a final test set. Never shuffle time series—preserve order. Simpler models often generalize better. If your ML model crushes the backtest, suspect overfitting first.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "ML as a tool.",
      component: "ConceptCheck",
      props: { question: "When can ML help in trading?", reveal: "Feature-rich problems, regime detection, pattern recognition—with strict validation. It doesn't remove noise; validate out-of-sample and avoid overfitting." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ML can help with features and regimes. Keep expectations realistic; validate rigorously. Simple models first. Overfitting is the main enemy." },
  ], true),
  createLesson("feature-engineering", 2, "Feature Engineering", "feature-engineering", "22 min", ["What features to use", "Lags and normalization", "Target definition"], [
    {
      type: "text",
      heading: "What Is Feature Engineering?",
      content:
        "Feature engineering is creating inputs (features) for your model from raw data. In trading, features might be: returns over different windows (1-day, 5-day, 20-day), RSI, moving average crossovers, volume ratio, volatility (ATR), or lagged values of the target. Good features matter more than a fancy model—garbage in, garbage out.\n\nAvoid look-ahead: every feature must be known at the time of prediction. Use lagged values: shift(1) for prior bar. Scale features (standardize or min-max) so that model training is stable. Too many features invite overfitting—start with a small set (5–10) and add only if validation improves.",
    },
    {
      type: "text",
      heading: "Lags and Targets",
      content:
        "For a next-day return prediction, your features could be: today's return, 5-day return, RSI as of today's close, volume ratio (today/20-day avg), etc. Never use tomorrow's data. Use pandas shift(1) or similar to align features with the target. Define a clear target: binary (up/down), continuous (return), or multi-class (regime).\n\nTrain/test split must be in time: train on past (e.g. 2010–2019), test on future (e.g. 2020–2023). No shuffling—preserve temporal order. Cross-validation for time series: use expanding or rolling windows, not random shuffle.",
    },
    {
      type: "analogy",
      heading: "The Recipe Analogy",
      content:
        "Think of features like recipe ingredients. Good ingredients (features) make a good dish (model). Bad ingredients (look-ahead, noise) ruin it. You can't use ingredients you don't have yet (no future data). Scale ingredients (normalize) so nothing dominates. Too many ingredients (too many features) can overcomplicate—start simple. The target is what you're cooking: binary (soup or salad?), continuous (how hot?), multi-class (which cuisine?).",
    },
    {
      type: "pro-tip",
      heading: "Pro Tip",
      content:
        "Start with a small feature set: returns, volatility, volume ratio, RSI, MA crossover. Add one feature at a time and check validation—does it improve? Use sklearn's StandardScaler for normalization. Always use shift(1) for lagged inputs—never use current bar for next-bar prediction. Document your features—future you will thank you.",
    },
    {
      type: "interactive",
      heading: "Think It Through",
      content: "Features must be known in advance.",
      component: "ConceptCheck",
      props: { question: "What is feature engineering?", reveal: "Creating inputs (e.g. from price/volume) that help the model. Critical for ML performance. Use only lagged/past data; no look-ahead." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Features = inputs from data. No look-ahead; scale and limit count. Clear target and time-based train/test. Good features > fancy model." },
  ], true),
  createLesson("overfitting", 3, "Avoiding Overfitting", "overfitting", "20 min", ["Train/test and walk-forward", "Simpler models", "Regularization"], [
    {
      type: "text",
      heading: "Why Overfitting Happens",
      content:
        "Overfitting is when the model fits the training data too well—including noise—and fails on new data. In trading, we have limited data and lots of noise. Too many features, too complex a model, or too much tuning leads to overfitting. Signs: great in-sample performance (e.g. 80% accuracy), poor out-of-sample (e.g. 50%—random).\n\nFix: use a proper train/test split in time (e.g. train 2010–2019, test 2020–2023). Walk-forward: multiple train/test rolls. Use simpler models (fewer parameters). Regularization (L1, L2) penalizes complexity. Fewer features. Cross-validation in time (expanding or rolling window), not random shuffle.",
    },
    {
      type: "text",
      heading: "Best Practices",
      content:
        "Hold out a final test set you never touch until the end—no tuning on it, no peeking. Use one validation set for tuning; report only on the true test set. Prefer simpler models (logistic regression, small random forest with max_depth=5) unless you have a lot of data and a clear gain from complexity.\n\nIf performance drops a lot from train to test (e.g. train 75%, test 52%), you're likely overfitting. When in doubt, simplify. Fewer features, simpler model, less tuning. A model that's slightly worse in-sample but robust out-of-sample is better than one that crushes in-sample and fails out-of-sample.",
    },
    {
      type: "analogy",
      heading: "The Memorization Analogy",
      content:
        "Think of overfitting like memorizing exam answers instead of understanding the material. You ace the practice test (in-sample) but fail the real exam (out-of-sample) because the questions changed. The model memorized noise, not signal. To avoid: study the concepts (simpler model), practice on different problems (walk-forward), and don't peek at the exam (hold out test set). Understanding beats memorization.",
    },
    {
      type: "warning",
      heading: "Critical Warning",
      content:
        "Never tune on the test set. If you try different models and pick the one that does best on the test set, you've leaked test information—your 'out-of-sample' result is now in-sample. Use a three-way split: train (fit), validation (tune), test (report). Or use walk-forward and report mean across rolls. One clean test set, used once.",
    },
    {
      type: "interactive",
      heading: "Check Your Understanding",
      content: "Overfitting = memorizing the past.",
      component: "ConceptCheck",
      props: { question: "How do you avoid overfitting?", reveal: "Train/test split in time, walk-forward validation, simpler models, fewer features. Never shuffle time series; hold out a final test set." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Overfitting = fits past, fails future. Use time-based splits, walk-forward, simple models, fewer features. Never tune on test set." },
  ], true),
  createLesson("ml-summary", 4, "ML for Trading: Summary", "ml-summary", "12 min", ["Recap and caution", "Risk metrics module"], [
    {
      type: "text",
      heading: "Recap",
      content:
        "ML can help with features and regimes; keep expectations realistic. Feature engineering is key; no look-ahead. Avoid overfitting with time splits, walk-forward, and simplicity. Validate rigorously before live use.\n\nML is a tool, not magic. Good features, strict validation, and simpler models beat complex black boxes. Many quants find simple rules with good risk management outperform complex ML. Use ML where it adds value; don't add complexity without benefit.",
    },
    {
      type: "preview",
      heading: "Risk Metrics (Preview)",
      content:
        "In the Risk Metrics module, we'll cover Sharpe ratio, Sortino, max drawdown, and Monte Carlo simulation. These metrics help you evaluate your ML (and rule-based) strategies—not just return, but risk-adjusted return and worst-case scenarios. ML models need risk metrics too.",
    },
    {
      type: "interactive",
      heading: "Final Check",
      content: "ML and validation.",
      component: "ConceptCheck",
      props: { question: "What is the main risk when using ML in trading?", reveal: "Overfitting—model fits past noise and fails on new data. Use out-of-sample and walk-forward validation; prefer simpler models." },
    },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ML = tool, not magic. Good features, no look-ahead, strict validation, avoid overfitting. Simpler often wins." },
  ], true),
];
