import { useState } from "react";
import { Calculator, Percent, DollarSign, BarChart3, TrendingUp } from "lucide-react";
import { PositionSizeCalculator } from "../components/tools/PositionSizeCalculator";
import { RiskRewardCalculator } from "../components/tools/RiskRewardCalculator";
import { PipCalculator } from "../components/tools/PipCalculator";
import { CompoundInterestCalculator } from "../components/tools/CompoundInterestCalculator";
import { CandlestickBuilder } from "../components/charts/CandlestickBuilder";
import { PythonSandbox } from "../components/tools/PythonSandbox";

const tools = [
  { id: "position-size", title: "Position Size", icon: Calculator },
  { id: "risk-reward", title: "Risk-Reward", icon: Percent },
  { id: "pip", title: "Pip Calculator", icon: DollarSign },
  { id: "compound", title: "Compound Interest", icon: TrendingUp },
  { id: "candlestick", title: "Candlestick Builder", icon: BarChart3 },
  { id: "python", title: "Python Sandbox", icon: Calculator },
];

export function ToolsPage() {
  const [activeTool, setActiveTool] = useState("position-size");

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
        return <PythonSandbox />;
      default:
        return <PositionSizeCalculator />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
        Trading Tools & Calculators
      </h1>
      <p className="text-surface-600 dark:text-surface-400 mb-8">
        Practical tools to support your trading decisions. Use the{" "}
        <a href="/learn/2/candlestick-mastery/candlestick-anatomy" className="text-primary-500 hover:underline">
          Candlestick Mastery
        </a>{" "}
        lesson for context on the builder.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTool === t.id
                ? "bg-primary-500 text-white"
                : "bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600"
            }`}
          >
            <t.icon className="h-4 w-4" />
            {t.title}
          </button>
        ))}
      </div>

      <div className="max-w-2xl">{renderTool()}</div>
    </div>
  );
}
