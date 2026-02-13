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
  moduleId: "day-trading-fundamentals",
  order,
  duration,
  objectives,
  content,
  hasQuiz,
});

export const dayTradingFundamentalsLessons: Lesson[] = [
  createLesson("day-trading-intro", 1, "What Is Day Trading?", "day-trading-intro", "14 min", ["Define day trading", "Understand time frame and no overnight risk"], [
    { type: "text", heading: "Definition", content: "Day trading means opening and closing all positions within the same trading day. You do not hold overnight. When the market closes, your account is flat—no open exposure to the next day's open. That removes overnight gap risk (news, earnings, geopolitical events) and lets you start each day with a clean slate. Day traders typically use 1-minute to 15-minute charts and may take several trades per day. The style requires focus during market hours and discipline to exit by the close." },
    { type: "text", heading: "Why It Appeals", content: "No overnight risk, quick feedback, and the possibility of compounding small gains. But it also demands screen time, fast decisions, and strict risk management. In the US, pattern day trader (PDT) rules require a minimum $25,000 equity in a margin account to day trade stocks more than three times in five business days. Many beginners use forex or futures for day trading because they don't have the same PDT restriction, or they swing trade until they build capital." },
    { type: "warning", heading: "Common Mistake", content: "Treating day trading as a get-rich-quick side gig. It requires real time, education, and capital. Most who try without a plan and risk rules lose money." },
    { type: "interactive", heading: "Check Your Understanding", content: "Day trading is defined by holding period.", component: "ConceptCheck", props: { question: "What defines a day trade?", reveal: "All positions are opened and closed within the same trading day—no overnight exposure. That's what separates day trading from swing or position trading." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Day trading = in and out the same day. No overnight risk; requires focus, discipline, and often PDT-compliant capital for US stocks." },
  ]),
  createLesson("day-trader-mindset", 2, "Day Trader Mindset", "day-trader-mindset", "14 min", ["Discipline, focus, emotional control", "Why mindset separates winners from losers"], [
    { type: "text", heading: "Why Mindset Matters", content: "You can have a great strategy on paper and still lose money if your mindset isn't right. Day trading forces quick decisions under pressure. Fear makes you cut winners early or skip valid setups. Greed makes you hold losers or overtrade. Hope makes you ignore your stop. The traders who last are the ones who follow their plan every time: same entry rules, same position sizing, same stop and target. That takes discipline—doing what you're supposed to do even when you don't feel like it." },
    { type: "text", heading: "Focus and Routine", content: "During market hours, focus matters. Distractions lead to missed exits or emotional trades. Many pros have a pre-market routine (review watchlist, set alerts, check news) and a post-market routine (review trades, update journal). They also set a max loss for the day; when hit, they stop. Physical health—sleep, exercise, diet—affects decision quality. Treat trading like a job: show up prepared, follow the process, and leave when the session is over." },
    { type: "interactive", heading: "Think It Through", content: "Mindset and execution.", component: "ConceptCheck", props: { question: "Why does mindset matter as much as strategy in day trading?", reveal: "Strategy gives you an edge only if you execute it. Fear, greed, and hope cause traders to break rules—cutting winners, holding losers, overtrading. Discipline and emotional control let the edge play out." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Discipline, focus, and emotional control separate consistent traders from those who blow up. Routine, daily limits, and health support good decisions." },
  ]),
  createLesson("day-trading-summary", 3, "Day Trading Fundamentals: Summary", "day-trading-summary", "8 min", ["Recap definition and mindset"], [
    { type: "text", heading: "Recap", content: "Day trading is same-day in and out; no overnight risk. It requires screen time, capital (e.g. PDT rules in the US), and above all a professional mindset: discipline, focus, and strict risk management. Build a routine, set daily loss limits, and treat it as a craft—not a lottery." },
    { type: "interactive", heading: "Final Check", content: "Day trading fundamentals.", component: "ConceptCheck", props: { question: "What is one key benefit of not holding overnight as a day trader?", reveal: "You avoid overnight gap risk from news, earnings, or global events. You start each day flat and in control of your exposure." } },
    { type: "key-takeaway", heading: "Key Takeaway", content: "Same-day only; mindset and risk rules matter more than the next hot setup." },
  ], true),
];
