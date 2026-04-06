// React/ReactDOM must be the first imports — do not reorder (prevents createContext load-order issues)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
// Single global CSS entry (Tailwind + theme) — do not import index.css elsewhere to avoid HMR loops
import "@/index.css";
import App from "@/App";
import { initAnalytics, captureUtmParams } from "@/lib/analytics";
import { initTracker, captureTrafficSource, captureAttributionOnly } from "@/lib/analyticsTracker";
import {
  initMetaPixel,
  initGtag,
  initGtagConsentMode,
  initSessionDurationTracking,
} from "@/lib/growthTracking";
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

// ── Global unhandled promise rejection handler ──
window.addEventListener("unhandledrejection", (event) => {
  Sentry.captureException(event.reason ?? new Error("Unhandled promise rejection"));
});

// ── Attribution capture (always) ──
// Store UTM, gclid, fbclid, ref in sessionStorage regardless of consent.
// This ensures signup attribution works even without analytics consent.
captureAttributionOnly();

// ── Consent-gated analytics ──
// Only initialize analytics/marketing if the user has given consent.
const consent = getStoredConsent();

// Google Ads Consent Mode v2: always init gtag with consent defaults.
// This allows Google to model conversions even when consent is denied.
const marketingConsent = consent?.marketing ?? false;
initGtagConsentMode(marketingConsent);
initGtag(); // always load — consent mode controls data collection

if (consent?.analytics) {
  // PostHog (analytics) — dynamically loaded
  initAnalytics().then(() => captureUtmParams());
  // Supabase analytics tracker
  initTracker();
  captureTrafficSource();
  initSessionDurationTracking();
}

if (marketingConsent) {
  // Meta Pixel (marketing) — still consent-gated
  initMetaPixel();
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

// ── Service Worker registration (web only — skip in native) ──
import { isNative, setupAppListeners, setStatusBarLight } from "@/lib/native";

if ("serviceWorker" in navigator && import.meta.env.PROD && !isNative) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // SW registration failed — app works fine without it
    });
  });
}

// ── Native app setup (Capacitor) ──
if (isNative) {
  setStatusBarLight().catch(() => {});
  setupAppListeners(() => {
    // On resume: could trigger sync or re-check auth
  }).catch(() => {});
}
