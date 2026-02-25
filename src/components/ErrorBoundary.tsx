import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, RotateCcw } from "lucide-react";

const MEDICAL_BLUE = "#0055ff";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  retryKey: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, retryKey: 0 };
  }

  static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary] Fehler:", error?.name, error?.message);
    console.error("[ErrorBoundary] Stack:", error?.stack);
    console.error("[ErrorBoundary] Komponentenstack:", info?.componentStack);
  }

  handleRetry = () => {
    this.setState((prev) => ({ hasError: false, retryKey: prev.retryKey + 1 }));
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-gray-950 px-4">
          <div className="text-center max-w-md w-full">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"
              style={{ backgroundColor: `${MEDICAL_BLUE}18` }}
            >
              <AlertTriangle className="w-10 h-10" style={{ color: MEDICAL_BLUE }} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Etwas ist schiefgelaufen
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Ein unerwarteter Fehler ist aufgetreten. Du kannst es erneut versuchen oder die App
              neu starten.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={this.handleRetry}
                className="inline-flex items-center justify-center gap-2 text-white font-medium px-6 py-3 rounded-2xl shadow-sm transition-opacity hover:opacity-95"
                style={{ backgroundColor: MEDICAL_BLUE }}
              >
                <RotateCcw className="w-5 h-5" />
                Erneut versuchen
              </button>
              <button
                type="button"
                onClick={this.handleRestart}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium px-6 py-3 rounded-2xl bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                App neu starten
              </button>
            </div>
          </div>
        </div>
      );
    }

    return <div key={this.state.retryKey}>{this.props.children}</div>;
  }
}
