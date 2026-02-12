import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class QuizErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Quiz Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-8 text-center">
          <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">
            Something went wrong with the quiz
          </h3>
          <p className="text-surface-600 dark:text-surface-400 mb-4 text-sm">
            Refreshing the page should fix it.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
