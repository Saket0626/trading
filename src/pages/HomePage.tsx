import { Link } from "react-router-dom";
import {
  BookOpen,
  BarChart3,
  Calculator,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Flame,
  Calendar,
  Target,
  Star,
} from "lucide-react";
import { useState } from "react";
import { LEVELS } from "../data/curriculum";
import { useProgress } from "../contexts/ProgressContext";
import { getNextLessonToContinue, getProgressPercentage } from "../lib/continue";
import { MarketOverviewWidget } from "../components/MarketOverviewWidget";
import { useMarketNews } from "../hooks/useMarketNews";

const levelColors: Record<string, string> = {
  emerald: "from-emerald-500 to-teal-600",
  blue: "from-blue-500 to-cyan-600",
  violet: "from-violet-500 to-purple-600",
  amber: "from-amber-500 to-orange-600",
  rose: "from-rose-500 to-pink-600",
};

type FeatureTab = "courses" | "tools" | "news";

const FALLBACK_NEWS: { id: number; headline: string; source: string; timeAgo: string; url: string }[] = [
  { id: 1, headline: "Fed signals cautious stance on rates", source: "Reuters", timeAgo: "2h ago", url: "https://www.google.com/search?q=Fed+rates+news&tbm=nws" },
  { id: 2, headline: "Tech stocks extend sell-off amid inflation concerns", source: "Bloomberg", timeAgo: "4h ago", url: "https://www.google.com/search?q=tech+stocks+inflation&tbm=nws" },
  { id: 3, headline: "Crypto markets show resilience as Bitcoin holds key level", source: "CoinDesk", timeAgo: "5h ago", url: "https://www.google.com/search?q=Bitcoin+crypto+markets&tbm=nws" },
];

export function HomePage() {
  const { xp, completedLessons, streakDays } = useProgress();
  const nextLesson = getNextLessonToContinue(completedLessons);
  const progressPercent = getProgressPercentage(completedLessons);
  const [featureTab, setFeatureTab] = useState<FeatureTab>("courses");
  const { items: newsItems, loading } = useMarketNews();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient-bg min-h-[560px] flex items-center py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
              <a
                href="/learn"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D4AA15] border border-[#00D4AA40] text-[var(--accent-primary)] text-[13px] font-semibold mb-6 hover:border-[var(--accent-primary)] transition-colors duration-200"
              >
                <TrendingUp className="h-4 w-4" />
                Trusted by 12,000+ traders
                <ChevronRight className="h-4 w-4" />
              </a>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] mb-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
                Learn Day Trading.
                <br />
                <span
                  className="bg-gradient-to-r from-[#00D4AA] to-[#38BDF8] bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Actually Learn It.
                </span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-[480px] mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
                ChartWise is the most structured trading education platform on the internet.
                From your first candlestick to building quant strategies — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
                <a
                  href="/learn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--accent-primary)] text-[var(--bg-primary)] font-bold rounded-lg hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[var(--glow-teal)] transition-all duration-200"
                >
                  Start Learning
                  <ChevronRight className="h-5 w-5" />
                </a>
                <Link
                  to="/warnings"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold rounded-lg hover:border-[#00D4AA40] transition-all duration-200"
                >
                  <AlertTriangle className="h-5 w-5" />
                  Read Risk Warnings
                </Link>
              </div>
              <p className="text-[13px] text-[var(--text-secondary)] animate-fade-up" style={{ animationDelay: "400ms" }}>
                ★★★★★ Rated 4.9/5 by 2,400+ learners · ✓ 60+ lessons · ✓ Absolutely Free!
              </p>
            </div>
            <div className="hidden lg:block animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Link
                to="/tools?tool=pattern-game"
                className="block relative group"
              >
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)] group-hover:border-[#00D4AA40] group-hover:shadow-[var(--glow-teal)] transition-all duration-300 transform group-hover:-translate-y-1 group-hover:rotate-[0.5deg]">
                  <div className="h-[200px] rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center mb-4">
                    <BarChart3 className="h-16 w-16 text-[var(--accent-primary)] opacity-60" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-1">
                    Candlestick Mastery
                  </h3>
                  <p className="text-[13px] text-[var(--text-secondary)]">
                    Master the language of price action
                  </p>
                  <p className="mt-2 text-[13px] text-[var(--accent-primary)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Try the Candlestick Challenge →
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-10">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-[var(--accent-primary)] tabular-nums">12,400+</span>
              <span className="text-[var(--text-secondary)] text-[15px]">Learners Enrolled</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-[var(--border-subtle)]" />
            <div className="flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-[var(--accent-primary)] tabular-nums">60+</span>
              <span className="text-[var(--text-secondary)] text-[15px]">Lessons Published</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-[var(--border-subtle)]" />
            <div className="flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-[var(--accent-primary)] tabular-nums">4.9★</span>
              <span className="text-[var(--text-secondary)] text-[15px]">Average Rating</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-[var(--border-subtle)]" />
            <div className="flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-[var(--accent-primary)] tabular-nums">Absolutely Free!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Continue where you left off */}
      {nextLesson && (
        <section className="py-10 border-b border-[var(--border-subtle)]">
          <div className="max-w-[1200px] mx-auto px-8">
            <Link
              to={`/learn/${nextLesson.levelId}/${nextLesson.moduleSlug}/${nextLesson.lesson.slug}`}
              className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[#00D4AA40] hover:shadow-[var(--glow-teal)] transition-all duration-250 group"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[var(--text-secondary)] uppercase tracking-[0.08em]">
                    Continue where you left off
                  </p>
                  <p className="font-display font-semibold text-lg text-[var(--text-primary)]">
                    {nextLesson.lesson.title}
                  </p>
                  <p className="text-[13px] text-[var(--text-secondary)] mt-0.5">
                    Level {nextLesson.levelId} · {nextLesson.lesson.duration}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all duration-200" />
            </Link>
          </div>
        </section>
      )}

      {/* User Stats */}
      <section className="py-10 border-b border-[var(--border-subtle)]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <Target className="h-6 w-6 text-[var(--accent-primary)]" />
              <div>
                <p className="font-display text-xl font-bold text-[var(--text-primary)] tabular-nums">{xp}</p>
                <p className="text-[13px] text-[var(--text-secondary)]">XP</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <BookOpen className="h-6 w-6 text-[var(--accent-primary)]" />
              <div>
                <p className="font-display text-xl font-bold text-[var(--text-primary)] tabular-nums">{completedLessons.length}</p>
                <p className="text-[13px] text-[var(--text-secondary)]">Lessons</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <div>
                <p className="font-display text-xl font-bold text-[var(--text-primary)] tabular-nums">{progressPercent}%</p>
                <p className="text-[13px] text-[var(--text-secondary)]">Progress</p>
              </div>
              <div className="w-20">
                <div className="h-2 rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
                  <div
                    className="h-full bg-[var(--accent-primary)] rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
            {streakDays > 0 && (
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                <Flame className="h-6 w-6 text-[var(--accent-secondary)]" />
                <div>
                  <p className="font-display text-xl font-bold text-[var(--text-primary)] tabular-nums">{streakDays}</p>
                  <p className="text-[13px] text-[var(--text-secondary)]">
                    Day{streakDays !== 1 ? "s" : ""} Streak
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <MarketOverviewWidget />

      {/* Features / Product Section with Tabs */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="rounded-[10px] bg-[var(--bg-secondary)] p-1 inline-flex gap-0 mb-10">
            <button
              onClick={() => setFeatureTab("courses")}
              className={`px-5 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                featureTab === "courses"
                  ? "bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Courses & Lessons
            </button>
            <button
              onClick={() => setFeatureTab("tools")}
              className={`px-5 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                featureTab === "tools"
                  ? "bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Trading Tools
            </button>
            <button
              onClick={() => setFeatureTab("news")}
              className={`px-5 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                featureTab === "news"
                  ? "bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Market News
            </button>
          </div>

          {featureTab === "courses" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {LEVELS.slice(0, 6).map((level) => (
                <Link
                  key={level.id}
                  to={`/learn/${level.id}`}
                  className="block rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden hover:-translate-y-1.5 hover:border-[#00D4AA40] hover:shadow-[var(--glow-teal)] transition-all duration-250 cursor-pointer"
                >
                  <div className="h-40 bg-[var(--bg-tertiary)] flex items-center justify-center">
                    <BarChart3 className="h-14 w-14 text-[var(--accent-primary)] opacity-70" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-1 rounded text-[12px] font-semibold bg-[#00D4AA20] text-[var(--accent-primary)] mb-2">
                      {level.id === 1 ? "BEGINNER" : level.id <= 3 ? "INTERMEDIATE" : "ADVANCED"}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                      {level.title}
                    </h3>
                    <p className="text-[14px] text-[var(--text-secondary)] line-clamp-2 mb-4">
                      {level.description}
                    </p>
                    <div className="flex items-center text-[13px] text-[var(--text-secondary)]">
                      {level.moduleIds.length} modules · Free
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {featureTab === "tools" && (
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
              {[
                { icon: Calendar, title: "Economic Calendar", desc: "Track high-impact events and releases that move markets.", to: "/tools" },
                { icon: Calculator, title: "Position Size Calculator", desc: "Calculate proper position sizes based on risk and account size.", to: "/tools" },
                { icon: Target, title: "Market Watchlist", desc: "Monitor live prices across stocks, forex, and crypto.", to: "/simulator" },
              ].map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className="block p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:-translate-y-1 hover:border-[var(--accent-primary)] hover:shadow-[var(--glow-teal)] transition-all duration-250"
                >
                  <item.icon className="h-12 w-12 text-[var(--accent-primary)] mb-4" />
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-[15px] text-[var(--text-secondary)] mb-4 leading-relaxed">{item.desc}</p>
                  <span className="text-[var(--accent-primary)] font-semibold text-[15px]">Try it →</span>
                </Link>
              ))}
            </div>
          )}

          {featureTab === "news" && (
            <div className="space-y-4 animate-fade-in max-w-2xl">
              {(loading && newsItems.length === 0 ? FALLBACK_NEWS : newsItems.length > 0 ? newsItems : FALLBACK_NEWS).map((item, i) => (
                <a
                  key={item.id ?? i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative hover:border-[var(--accent-primary)] hover:shadow-[var(--glow-teal)] transition-all duration-200 group block"
                >
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-danger)] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-danger)]" />
                    </span>
                    <span className="text-[11px] font-bold text-[var(--accent-danger)] uppercase">Live</span>
                  </div>
                  <div className={`w-1 rounded-full flex-shrink-0 ${i % 3 === 1 ? "bg-[var(--accent-danger)]" : "bg-[var(--accent-primary)]"}`} />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">{item.headline}</h4>
                    <p className="text-[13px] text-[var(--text-secondary)]">{item.source} · {item.timeAgo}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-t border-[var(--border-subtle)]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "01", icon: BookOpen, title: "Structured Curriculum", desc: "Five levels from absolute beginner to quantitative strategies. No fluff, no shortcuts." },
              { num: "02", icon: BarChart3, title: "Real Market Data", desc: "Learn with live prices from Binance, Finnhub. Stocks, forex, crypto, commodities." },
              { num: "03", icon: Star, title: "Interactive Practice", desc: "Candlestick builder, pattern recognition, paper trading. Learn by doing." },
            ].map((item) => (
              <div
                key={item.num}
                className="relative pt-2"
              >
                <span className="font-display text-[48px] text-[var(--border-subtle)] absolute -top-2 left-0">{item.num}</span>
                <div className="pl-16">
                  <item.icon className="h-12 w-12 text-[var(--accent-primary)] mb-4" />
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Path */}
      <section className="py-20 border-t border-[var(--border-subtle)]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl font-semibold text-[var(--text-primary)] mb-2">
            Your Learning Path
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mb-12">
            Five levels take you from "what is money?" to building quantitative trading systems.
            Each level builds on the previous. Take your time.
          </p>
          <div className="space-y-4 max-w-2xl">
            {LEVELS.map((level) => (
              <Link key={level.id} to={`/learn/${level.id}`} className="block group">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[#00D4AA40] hover:bg-[var(--bg-tertiary)] transition-all duration-200">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${levelColors[level.color] || "from-primary-500 to-primary-600"} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {level.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-[var(--text-primary)]">
                      {level.title}
                    </h3>
                    <p className="text-[14px] text-[var(--text-secondary)] mt-0.5">
                      {level.description}
                    </p>
                  </div>
                  <ChevronRight className="flex-shrink-0 h-5 w-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-12 border-t border-[var(--border-subtle)]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-2xl p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-[var(--accent-secondary)] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">
                  Reality Check Before You Start
                </h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  70-90% of retail traders lose money. Trading is difficult and requires significant
                  education, discipline, and capital. Never trade with money you need for living
                  expenses. This platform teaches you properly—expect 1-2 years minimum to reach
                  consistent profitability, and many never do.{" "}
                  <Link to="/warnings" className="text-[var(--accent-primary)] underline font-medium hover:no-underline">
                    Read the full warnings
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
