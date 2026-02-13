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
  createLesson("ml-overview", 1, "ML for Trading Overview", "ml-overview", "18 min", ["When ML helps", "Realistic expectations"], [
    { type: "text", heading: "When Can ML Help?", content: "Machine learning can help when you have rich features (e.g. many indicators, volume, sentiment) and a clear target (e.g. next-day return up/down, or volatility regime). It's useful for pattern recognition and regime detection. It doesn't magic away market noise—predicting price is hard. Use ML as one tool: maybe a classifier for regime (trending vs mean-reverting) and then apply the right strategy. Or a model to rank stocks; then trade the top/bottom. Always validate out-of-sample and with walk-forward; overfitting is the main enemy." },
    { type: "text", heading: "Realistic Expectations", content: "ML in finance is competitive; edge erodes as more people use similar data and models. Start simple: logistic regression or random forest before deep learning. Focus on feature quality and robust validation. Many quants find that simple rules with good risk management beat complex ML. Use ML where it adds value (e.g. combining many signals, non-linear relationships) and stay disciplined on overfitting and costs." },
    { type: "interactive", heading: "Check Your Understanding", content: "ML as a tool.", component: "ConceptCheck", props: { question: "When can ML help in trading?", reveal: "Feature-rich problems, regime detection, pattern recognition—with strict validation. It doesn't remove noise; validate out-of-sample and avoid overfitting." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ML can help with features and regimes. Keep expectations realistic; validate rigorously. Simple models first." },
  ]),
  createLesson("feature-engineering", 2, "Feature Engineering", "feature-engineering", "18 min", ["What features to use", "Lags and normalization"], [
    { type: "text", heading: "What Is Feature Engineering?", content: "Feature engineering is creating inputs (features) for your model from raw data. In trading, features might be: returns over different windows, RSI, moving average crossovers, volume ratio, volatility (ATR), or lagged values of the target. Good features matter more than a fancy model. Avoid look-ahead: every feature must be known at the time of prediction (use lagged values). Scale features (e.g. standardize or min-max) so that model training is stable. Too many features invite overfitting—start with a small set and add only if validation improves." },
    { type: "text", heading: "Lags and Targets", content: "For a next-day return prediction, your features could be today's return, 5-day return, RSI as of today's close, etc. Never use tomorrow's data. Use pandas shift(1) or similar to align features with the target. Define a clear target: binary (up/down), continuous (return), or multi-class (regime). Train/test split must be in time: train on past, test on future. No shuffling—preserve order." },
    { type: "interactive", heading: "Think It Through", content: "Features must be known in advance.", component: "ConceptCheck", props: { question: "What is feature engineering?", reveal: "Creating inputs (e.g. from price/volume) that help the model. Critical for ML performance. Use only lagged/past data; no look-ahead." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Features = inputs from data. No look-ahead; scale and limit count. Clear target and time-based train/test." },
  ]),
  createLesson("overfitting", 3, "Avoiding Overfitting", "overfitting", "16 min", ["Train/test and walk-forward", "Simpler models"], [
    { type: "text", heading: "Why Overfitting Happens", content: "Overfitting is when the model fits the training data too well—including noise—and fails on new data. In trading, we have limited data and lots of noise. Too many features, too complex a model, or too much tuning leads to overfitting. Signs: great in-sample performance, poor out-of-sample. Fix: use a proper train/test split in time (e.g. train 2010–2019, test 2020–2023). Walk-forward: multiple train/test rolls. Use simpler models (fewer parameters). Regularization (L1, L2). Fewer features. Cross-validation in time (expanding or rolling window), not random shuffle." },
    { type: "text", heading: "Best Practices", content: "Hold out a final test set you never touch until the end. Use one validation set for tuning; report only on the true test set. Prefer simpler models (linear, small random forest) unless you have a lot of data and a clear gain from complexity. If performance drops a lot from train to test, you're likely overfitting. When in doubt, simplify." },
    { type: "interactive", heading: "Check Your Understanding", content: "Overfitting = memorizing the past.", component: "ConceptCheck", props: { question: "How do you avoid overfitting?", reveal: "Train/test split in time, walk-forward validation, simpler models, fewer features. Never shuffle time series; hold out a final test set." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Overfitting = fits past, fails future. Use time-based splits, walk-forward, simple models, and fewer features." },
  ]),
  createLesson("ml-summary", 4, "ML for Trading: Summary", "ml-summary", "8 min", ["Recap and caution"], [
    { type: "text", heading: "Recap", content: "ML can help with features and regimes; keep expectations realistic. Feature engineering is key; no look-ahead. Avoid overfitting with time splits, walk-forward, and simplicity. Validate rigorously before live use." },
    { type: "interactive", heading: "Final Check", content: "ML and validation.", component: "ConceptCheck", props: { question: "What is the main risk when using ML in trading?", reveal: "Overfitting—model fits past noise and fails on new data. Use out-of-sample and walk-forward validation; prefer simpler models." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "ML = tool, not magic. Good features, no look-ahead, strict validation, avoid overfitting." },
  ], true),
];
