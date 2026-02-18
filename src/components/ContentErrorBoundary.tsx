import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Wrench } from "lucide-react";

interface Props {
  children: ReactNode;
  /** Optional context (e.g. chapter id) for console logs */
  context?: string;
}

interface State {
  hasError: boolean;
}

/**
 * Error Boundary für Kapitel-Content. Zeigt bei Fehlern (z. B. kaputtes JSON)
 * eine freundliche Meldung statt White-Screen und loggt Details in die Konsole.
 */
export class ContentErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    const ctx = this.props.context ? ` [${this.props.context}]` : "";
    console.error("[Content] Fehler im Kapitel-Inhalt:", error?.name, error?.message, ctx);
    console.error("[Content] Stack:", error?.stack);
    console.error("[Content] Komponentenstack (wo der Fehler auftrat):", info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-900/20 p-8 text-center">
          <div className="w-14 h-14 rounded-xl bg-amber-100 dark:bg-amber-800/40 flex items-center justify-center mx-auto mb-4">
            <Wrench className="w-7 h-7 text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-1">
            Inhalt konnte nicht geladen werden
          </h2>
          <p className="text-sm text-amber-800 dark:text-amber-200/80">
            Dieser Abschnitt ist möglicherweise fehlerhaft oder die Datei (z. B. Kapitel-Daten) fehlt bzw. ist beschädigt. Prüfe die Konsole (F12) für Details.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
