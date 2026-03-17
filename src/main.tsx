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
import { initMetaPixel, initGtag } from "@/lib/growthTracking";
import { getStoredConsent } from "@/hooks/useCookieConsent";

// Sentry (error tracking) — runs regardless of consent (legitimate interest for bug fixes)
const dsn = import.meta.env.VITE_SENTRY_DSN;
if (typeof dsn === "string" && dsn.trim().length > 0) {
  Sentry.init({
    dsn: dsn.trim(),
    environment: import.meta.env.MODE,
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 0.1,
  });
}

// ── Consent-gated analytics ──
// Only initialize analytics/marketing if the user has given consent.
const consent = getStoredConsent();

if (consent?.analytics) {
  // PostHog (analytics)
  initAnalytics();
  captureUtmParams();
  // Supabase analytics tracker
  initTracker();
  captureTrafficSource();
}

if (consent?.marketing) {
  // Google Ads + Meta Pixel (marketing/conversion tracking)
  initMetaPixel();
  initGtag();
}

// Parallax: update --scroll-y on root so .hero-orbs pseudo-elements can use it
(function initParallax() {
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
})();

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
