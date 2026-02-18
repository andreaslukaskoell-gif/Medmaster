import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Fehleranalyse (Sentry-ähnlich): Name, Message, Stack + Komponentenstack
    console.error("[ErrorBoundary] Fehler:", error?.name, error?.message);
    console.error("[ErrorBoundary] Stack:", error?.stack);
    console.error("[ErrorBoundary] Komponentenstack:", info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Etwas ist schiefgelaufen
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              Zurück zum Dashboard
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
