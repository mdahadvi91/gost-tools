import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { cn } from "@lib/cn";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  variant?: "global" | "tool";
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("[ErrorBoundary]", error, info);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render() {
    if (!this.state.hasError) return this.props.children;
    if (this.props.fallback) return this.props.fallback;

    const isTool = this.props.variant === "tool";

    return (
      <div
        role="alert"
        className={cn(
          "flex flex-col items-center justify-center text-center",
          isTool
            ? "min-h-[400px] p-8 rounded-2xl bg-dark-surface/50 border border-aha-coral/20"
            : "min-h-screen p-6 bg-dark-bg"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center rounded-2xl mb-6",
            "bg-aha-coral/10 border border-aha-coral/20",
            isTool ? "w-16 h-16" : "w-20 h-20"
          )}
        >
          <AlertTriangle
            className={cn(
              "text-aha-coral",
              isTool ? "w-8 h-8" : "w-10 h-10"
            )}
            aria-hidden="true"
          />
        </div>

        <h2
          className={cn(
            "font-display font-bold text-white mb-2",
            isTool ? "text-xl" : "text-3xl"
          )}
        >
          Something went wrong
        </h2>

        <p className="text-dark-textSecondary max-w-md mb-8 text-sm">
          {isTool
            ? "This tool ran into an issue. Please try again or return to the tools list."
            : "We hit an unexpected error. Please refresh the page or return home."}
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            type="button"
            onClick={this.handleReset}
            className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-logo-gradient text-white font-medium hover:opacity-90 transition-opacity"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Try Again
          </button>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Go Home
          </a>
        </div>

        {import.meta.env.DEV && this.state.error && (
          <pre className="mt-8 max-w-2xl p-4 rounded-lg bg-black/50 text-left text-xs text-aha-coral overflow-auto">
            {this.state.error.message}
          </pre>
        )}
      </div>
    );
  }
}