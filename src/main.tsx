// React/ReactDOM must be the first imports — do not reorder (prevents createContext load-order issues)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "@/components/ErrorBoundary";
// Single global CSS entry (Tailwind + theme) — do not import index.css elsewhere to avoid HMR loops
import "@/index.css";
import App from "@/App";

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
