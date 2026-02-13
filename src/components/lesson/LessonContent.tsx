import type { ComponentType } from "react";
import type { LessonContent as LessonContentType } from "../../types";
import { Lightbulb, AlertTriangle, Target, BookOpen } from "lucide-react";
import { CandlestickBuilder } from "../charts/CandlestickBuilder";
import { WhichMarketQuiz } from "../quiz/WhichMarketQuiz";
import { SupplyDemandSimulator } from "./SupplyDemandSimulator";
import { ConceptCheck } from "./ConceptCheck";
import { RiskRewardCalculator } from "../tools/RiskRewardCalculator";
import { PositionSizeCalculator } from "../tools/PositionSizeCalculator";
import { PipCalculator } from "../tools/PipCalculator";
import { Flashcards, type FlashcardsProps } from "../learn/Flashcards";

const FlashcardsWrapper = (props: Record<string, unknown>) => (
  <Flashcards
    cards={(props.cards as FlashcardsProps["cards"]) ?? []}
    title={(props.title as string) ?? "Chapter Flashcards"}
  />
);

const COMPONENTS: Record<string, ComponentType<Record<string, unknown>>> = {
  Flashcards: FlashcardsWrapper as ComponentType<Record<string, unknown>>,
  CandlestickBuilder,
  WhichMarketQuiz,
  SupplyDemandSimulator,
  ConceptCheck,
  RiskRewardCalculator,
  PositionSizeCalculator,
  PipCalculator,
};

const typeConfig = {
  text: {
    icon: BookOpen,
    className: "text-surface-700 dark:text-surface-300",
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
    className: "text-surface-700 dark:text-surface-300",
    wrapperClass: "bg-surface-100 dark:bg-surface-800/50",
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
    block.type === "key-takeaway";

  const CustomComponent = block.component ? COMPONENTS[block.component] : null;
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
            <p className="text-surface-700 dark:text-surface-300 leading-relaxed mb-4">
              {block.content}
            </p>
          )}
          <CustomComponent {...(block.props || {})} />
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
              <p className="text-surface-700 dark:text-surface-300 leading-relaxed whitespace-pre-line">
                {block.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
