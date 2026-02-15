import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  Percent,
  DollarSign,
  BarChart3,
  TrendingUp,
  Calendar,
  Grid3X3,
  Ruler,
  Code,
  BookOpen,
  Layers,
  Activity,
  Columns3,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { PositionSizeCalculator } from "../components/tools/PositionSizeCalculator";
import { RiskRewardCalculator } from "../components/tools/RiskRewardCalculator";
import { PipCalculator } from "../components/tools/PipCalculator";
import { CompoundInterestCalculator } from "../components/tools/CompoundInterestCalculator";
import { CandlestickBuilder } from "../components/charts/CandlestickBuilder";
import { EconomicCalendar } from "../components/tools/EconomicCalendar";
import { OrderBookVisualizer } from "../components/tools/OrderBookVisualizer";
import { PatternRecognitionGame } from "../components/tools/PatternRecognitionGame";
import { MarketCorrelationHeatmap } from "../components/tools/MarketCorrelationHeatmap";

const PythonSandbox = lazy(() =>
  import("../components/tools/PythonSandbox").then((m) => ({ default: m.PythonSandbox }))
);

const tools = [
  { id: "position-size", title: "Position Size Calculator", icon: Calculator, built: true },
  { id: "risk-reward", title: "Risk-Reward Visualizer", icon: Percent, built: true },
  { id: "pip", title: "Pip Calculator", icon: DollarSign, built: true },
  { id: "compound", title: "Compound Interest Simulator", icon: TrendingUp, built: true },
  { id: "candlestick", title: "Candlestick Builder", icon: BarChart3, built: true },
  { id: "python", title: "Live Python Editor", icon: Code, built: true },
  { id: "economic-calendar", title: "Economic Calendar", icon: Calendar, built: true },
  { id: "order-book", title: "Order Book Visualizer", icon: Columns3, built: true },
  { id: "indicator-playground", title: "Indicator Playground", icon: Activity, built: false, link: "/simulator" },
  { id: "pattern-game", title: "Pattern Recognition Game", icon: Grid3X3, built: true },
  { id: "sr-drawing", title: "Support/Resistance Drawing", icon: Ruler, built: false, link: "/learn/2/support-and-resistance/support-resistance-basics" },
  { id: "correlation-heatmap", title: "Market Correlation Heatmap", icon: Layers, built: true },
  { id: "strategy-simulator", title: "Strategy Simulator", icon: BookOpen, built: false, link: "/simulator" },
];

const VALID_TOOL_IDS = [
  "position-size", "risk-reward", "pip", "compound", "candlestick", "python",
  "economic-calendar", "order-book", "pattern-game", "correlation-heatmap",
  "indicator-playground", "sr-drawing", "strategy-simulator",
];

export function ToolsPage() {
  const [searchParams] = useSearchParams();
  const toolFromUrl = searchParams.get("tool");
  const initialTool =
    toolFromUrl && VALID_TOOL_IDS.includes(toolFromUrl) ? toolFromUrl : "position-size";
  const [activeTool, setActiveTool] = useState(initialTool);

  // Sync URL ?tool= param to active tool when it changes (e.g. direct navigation)
  useEffect(() => {
    if (toolFromUrl && VALID_TOOL_IDS.includes(toolFromUrl) && toolFromUrl !== activeTool) {
      setActiveTool(toolFromUrl);
    }
  }, [toolFromUrl]);

  const renderTool = () => {
    switch (activeTool) {
      case "position-size":
        return <PositionSizeCalculator />;
      case "risk-reward":
        return <RiskRewardCalculator />;
      case "pip":
        return <PipCalculator />;
      case "compound":
        return <CompoundInterestCalculator />;
      case "candlestick":
        return <CandlestickBuilder />;
      case "python":
        return (
          <Suspense
            fallback={
              <div className="p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] animate-pulse min-h-[200px] flex items-center justify-center">
                <span className="text-[var(--text-muted)]">Loading editor…</span>
              </div>
            }
          >
            <PythonSandbox />
          </Suspense>
        );
      case "economic-calendar":
        return <EconomicCalendar />;
      case "order-book":
        return <OrderBookVisualizer />;
      case "pattern-game":
        return <PatternRecognitionGame />;
      case "correlation-heatmap":
        return <MarketCorrelationHeatmap />;
      case "indicator-playground":
      case "sr-drawing":
      case "strategy-simulator": {
        const t = tools.find((x) => x.id === activeTool);
        const href = t?.link || "/learn";
        return (
          <div className="p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-center">
            <p className="text-[var(--text-secondary)] mb-4">
              {t?.title} is integrated into lessons and the Paper Trading simulator.
            </p>
            <Link to={href} className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-[var(--bg-primary)] font-semibold rounded-lg hover:brightness-110 transition-all duration-200">
              Open {href.startsWith("/learn") ? "Lesson" : "Simulator"}
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
        );
      }
      default:
        return <PositionSizeCalculator />;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-12">
      <h1 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-2">
        Trading Tools & Calculators
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Practical tools to support your trading decisions. Use the{" "}
        <a href="/learn/2/candlestick-mastery/candlestick-anatomy" className="text-[var(--accent-primary)] hover:underline">
          Candlestick Mastery
        </a>{" "}
        lesson for context on the builder.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 text-left ${
              activeTool === t.id
                ? "bg-[var(--accent-primary)] text-[var(--bg-primary)]"
                : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
            }`}
          >
            <t.icon className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{t.title}</span>
          </button>
        ))}
      </div>

      <div className="max-w-2xl">{renderTool()}</div>
    </div>
  );
}
