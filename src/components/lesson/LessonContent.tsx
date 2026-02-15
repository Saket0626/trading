import type { ComponentType } from "react";
import { lazy, Suspense } from "react";
import type { LessonContent as LessonContentType } from "../../types";
import { Lightbulb, AlertTriangle, Target, BookOpen, CheckCircle, Eye } from "lucide-react";

const LazyFlashcards = lazy(() =>
  import("../learn/Flashcards").then((m) => ({ default: m.Flashcards }))
);
const LazyCandlestickBuilder = lazy(() =>
  import("../charts/CandlestickBuilder").then((m) => ({ default: m.CandlestickBuilder }))
);
const LazyWhichMarketQuiz = lazy(() =>
  import("../quiz/WhichMarketQuiz").then((m) => ({ default: m.WhichMarketQuiz }))
);
const LazySupplyDemandSimulator = lazy(() =>
  import("./SupplyDemandSimulator").then((m) => ({ default: m.SupplyDemandSimulator }))
);
const LazyConceptCheck = lazy(() => import("./ConceptCheck").then((m) => ({ default: m.ConceptCheck })));
const LazyRiskRewardCalculator = lazy(() =>
  import("../tools/RiskRewardCalculator").then((m) => ({ default: m.RiskRewardCalculator }))
);
const LazyPositionSizeCalculator = lazy(() =>
  import("../tools/PositionSizeCalculator").then((m) => ({ default: m.PositionSizeCalculator }))
);
const LazyPipCalculator = lazy(() =>
  import("../tools/PipCalculator").then((m) => ({ default: m.PipCalculator }))
);

const LAZY_COMPONENTS: Record<string, ComponentType<Record<string, unknown>>> = {
  Flashcards: LazyFlashcards as ComponentType<Record<string, unknown>>,
  CandlestickBuilder: LazyCandlestickBuilder as ComponentType<Record<string, unknown>>,
  WhichMarketQuiz: LazyWhichMarketQuiz as ComponentType<Record<string, unknown>>,
  SupplyDemandSimulator: LazySupplyDemandSimulator as ComponentType<Record<string, unknown>>,
  ConceptCheck: LazyConceptCheck as ComponentType<Record<string, unknown>>,
  RiskRewardCalculator: LazyRiskRewardCalculator as ComponentType<Record<string, unknown>>,
  PositionSizeCalculator: LazyPositionSizeCalculator as ComponentType<Record<string, unknown>>,
  PipCalculator: LazyPipCalculator as ComponentType<Record<string, unknown>>,
};

const typeConfig = {
  text: {
    icon: BookOpen,
    className: "text-[var(--text-secondary)]",
    wrapperClass: "",
  },
  analogy: {
    icon: Lightbulb,
    className: "text-amber-700 dark:text-amber-300",
    wrapperClass: "bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400",
  },
  warning: {
    icon: AlertTriangle,
    className: "text-red-700 dark:text-red-300",
    wrapperClass: "bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400",
  },
  "key-takeaway": {
    icon: Target,
    className: "text-primary-700 dark:text-primary-300",
    wrapperClass: "bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500",
  },
  example: {
    icon: BookOpen,
    className: "text-[var(--text-secondary)]",
    wrapperClass: "bg-surface-100 dark:bg-surface-800/50",
  },
  "pro-tip": {
    icon: CheckCircle,
    className: "text-emerald-700 dark:text-emerald-300",
    wrapperClass: "bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500",
  },
  preview: {
    icon: Eye,
    className: "text-violet-700 dark:text-violet-300",
    wrapperClass: "bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500",
  },
  interactive: {
    icon: Target,
    className: "text-primary-700 dark:text-primary-300",
    wrapperClass: "bg-primary-50/50 dark:bg-primary-900/10",
  },
};

export function LessonContentBlock({ block, sectionId }: { block: LessonContentType; sectionId?: string }) {
  const config = typeConfig[block.type] || typeConfig.text;
  const Icon = config.icon;

  const useWrapper =
    block.type === "interactive" ||
    block.type === "analogy" ||
    block.type === "warning" ||
    block.type === "key-takeaway" ||
    block.type === "pro-tip" ||
    block.type === "preview";

  const CustomComponent = block.component ? LAZY_COMPONENTS[block.component] : null;
  const Wrapper = sectionId ? "section" : "div";
  const wrapperProps = sectionId ? { id: sectionId } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`rounded-r-lg p-6 mb-6 lesson-content ${useWrapper ? config.wrapperClass : ""}`}
    >
      {CustomComponent ? (
        <div>
          {block.heading && (
            <h3 className={`font-semibold text-lg mb-4 ${config.className}`}>
              {block.heading}
            </h3>
          )}
          {block.content && (
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              {block.content}
            </p>
          )}
          <Suspense
            fallback={
              <div className="animate-pulse h-24 rounded-lg bg-[var(--bg-tertiary)]" />
            }
          >
            <CustomComponent {...(block.props || {})} />
          </Suspense>
        </div>
      ) : (
        <div className="flex gap-3">
          {block.heading && (
            <div className="flex-shrink-0 mt-0.5">
              <Icon className={`h-6 w-6 ${config.className}`} />
            </div>
          )}
          <div className="flex-1 min-w-0">
            {block.heading && (
              <h3 className={`font-semibold text-lg mb-2 ${config.className}`}>
                {block.heading}
              </h3>
            )}
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
              {(block.content || "")
                .split(/\n\n+/)
                .filter((p) => p.trim())
                .map((para, i) => (
                  <p key={i} className="text-[var(--text-secondary)] leading-relaxed mb-4 last:mb-0">
                    {para.trim()}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
