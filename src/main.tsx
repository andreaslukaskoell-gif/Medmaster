// React/ReactDOM must be the first imports — do not reorder (prevents createContext load-order issues)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
// Single global CSS entry (Tailwind + theme) — do not import index.css elsewhere to avoid HMR loops
import "@/index.css";
import App from "@/App";
import { initAnalytics, captureUtmParams } from "@/lib/analytics";
import { initTracker, captureTrafficSource } from "@/lib/analyticsTracker";

const dsn = import.meta.env.VITE_SENTRY_DSN;
if (typeof dsn === "string" && dsn.trim().length > 0) {
  Sentry.init({
    dsn: dsn.trim(),
    environment: import.meta.env.MODE,
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 0.1,
  });
}

// Analytics (PostHog) — noop if VITE_POSTHOG_KEY is missing
initAnalytics();
captureUtmParams();

// Supabase analytics tracker (always active when Supabase is configured)
initTracker();
captureTrafficSource();

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}
