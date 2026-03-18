/**
 * Growth Tracking — enhanced funnel analytics for conversion optimization.
 *
 * Adds Meta Pixel, Google Ads (gtag), scroll-depth tracking, section visibility,
 * and structured conversion events on top of the existing analytics stack.
 *
 * Env vars (optional — gracefully noop if missing):
 *   VITE_META_PIXEL_ID     — Facebook/Meta Pixel ID
 *   VITE_GTAG_ID           — Google Ads / GA4 Measurement ID
 */

import { trackEvent } from "./analyticsTracker";

// ── Meta Pixel ──────────────────────────────────────────────────────────────

const _META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;

let metaPixelReady = false;

/**
 * Detect Meta Pixel loaded from index.html (the recommended approach).
 * When the pixel ID is ready, uncomment the script block in index.html —
 * this function will detect window.fbq and enable conversion tracking.
 * Call once on app start.
 */
export function initMetaPixel() {
  if (typeof window === "undefined") return;
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;

  // Detect pixel already loaded via index.html script tag
  const f = window as unknown as Record<string, unknown>;
  if (typeof f.fbq === "function") {
    metaPixelReady = true;
  }
}

/** Fire a Meta Pixel standard or custom event. */
function fbq(...args: unknown[]) {
  const f = window as unknown as Record<string, (...a: unknown[]) => void>;
  if (typeof f.fbq === "function") f.fbq(...args);
}

/** Track Meta Pixel conversion events mapped to our funnel. */
export function trackMetaConversion(
  event: "Lead" | "CompleteRegistration" | "StartTrial" | "ViewContent" | "InitiateCheckout",
  data?: Record<string, unknown>
) {
  if (!metaPixelReady) return;
  fbq("track", event, data);
}

/** Track custom Meta Pixel events. */
export function trackMetaCustom(event: string, data?: Record<string, unknown>) {
  if (!metaPixelReady) return;
  fbq("trackCustom", event, data);
}

// ── Google Ads / GA4 ────────────────────────────────────────────────────────

const GTAG_ID = (import.meta.env.VITE_GTAG_ID as string | undefined) || "AW-18020022525";
// Conversion labels from Google Ads → Tools → Conversions → Tag setup
const GTAG_CONV_SIGNUP =
  (import.meta.env.VITE_GTAG_CONV_SIGNUP as string | undefined) || "qK1CCKr-yYkcEP3xzpBD";
const GTAG_CONV_CHECKOUT = import.meta.env.VITE_GTAG_CONV_CHECKOUT as string | undefined;

let gtagReady = false;

/** Load gtag.js and initialize. Call once on app start. */
export function initGtag() {
  if (!GTAG_ID?.trim()) return;
  if (typeof window === "undefined") return;
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID.trim()}`;
  document.head.appendChild(script);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).dataLayer = (window as any).dataLayer || [];
  gtag("js", new Date());
  gtag("config", GTAG_ID.trim(), { send_page_view: true });
  gtagReady = true;
}

function gtag(...args: unknown[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((window as any).dataLayer as unknown[])?.push(args);
}

/** Track Google Ads conversion. */
export function trackGtagConversion(conversionLabel: string, value?: number) {
  if (!gtagReady || !GTAG_ID) return;
  gtag("event", "conversion", {
    send_to: `${GTAG_ID}/${conversionLabel}`,
    value: value ?? 0,
    currency: "EUR",
  });
}

// ── Scroll Depth Tracking ───────────────────────────────────────────────────

const scrollMilestones = new Set<number>();

/** Track scroll depth on landing page. Fire once per milestone (25/50/75/90%). */
export function initScrollDepthTracking() {
  if (typeof window === "undefined") return;

  const thresholds = [25, 50, 75, 90];
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        ticking = false;
        return;
      }
      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const threshold of thresholds) {
        if (pct >= threshold && !scrollMilestones.has(threshold)) {
          scrollMilestones.add(threshold);
          trackEvent("scroll_depth", { depth: threshold, page: window.location.pathname });
          trackMetaCustom("ScrollDepth", { depth: threshold });
        }
      }
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  // Return cleanup
  return () => window.removeEventListener("scroll", onScroll);
}

/** Reset scroll tracking (call on route change). */
export function resetScrollDepth() {
  scrollMilestones.clear();
}

// ── Section Visibility Tracking ─────────────────────────────────────────────

const observedSections = new Set<string>();

/**
 * Track when landing page sections become visible.
 * Call once after DOM is ready. Pass section IDs to observe.
 */
export function initSectionVisibility(sectionIds: string[]) {
  if (typeof IntersectionObserver === "undefined") return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !observedSections.has(entry.target.id)) {
          observedSections.add(entry.target.id);
          trackEvent("section_view", {
            section: entry.target.id,
            page: window.location.pathname,
          });
        }
      }
    },
    { threshold: 0.3 } // 30% visible
  );

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  }

  return () => observer.disconnect();
}

// ── Unified Conversion Events ───────────────────────────────────────────────

/**
 * Fire a unified conversion event across all tracking platforms.
 * Call this instead of individual platform trackers.
 */
export function trackConversion(
  event:
    | "signup_started" // clicked any signup CTA
    | "signup_completed" // registration finished
    | "activation" // first meaningful action (question answered)
    | "checkout_started" // started payment
    | "lead_captured" // email captured (exit-intent, newsletter)
    | "onboarding_completed", // finished onboarding steps
  properties?: Record<string, unknown>
) {
  // Supabase analytics (always)
  trackEvent(`conversion_${event}`, properties);

  // Meta Pixel
  switch (event) {
    case "signup_started":
      trackMetaConversion("Lead", properties);
      break;
    case "signup_completed":
      trackMetaConversion("CompleteRegistration", properties);
      break;
    case "activation":
      trackMetaConversion("StartTrial", properties);
      break;
    case "checkout_started":
      trackMetaConversion("InitiateCheckout", { value: 29.9, currency: "EUR", ...properties });
      break;
    case "lead_captured":
      trackMetaConversion("Lead", { content_name: "exit_intent", ...properties });
      break;
    case "onboarding_completed":
      trackMetaCustom("OnboardingComplete", properties);
      break;
  }

  // Google Ads — fire conversion with label from env vars
  // Set VITE_GTAG_CONV_SIGNUP / VITE_GTAG_CONV_CHECKOUT in .env.local
  // (copy from Google Ads → Tools → Conversions → Tag setup → Conversion label)
  if (event === "signup_completed" && GTAG_CONV_SIGNUP) {
    trackGtagConversion(GTAG_CONV_SIGNUP, 29.9);
  } else if (event === "checkout_started" && GTAG_CONV_CHECKOUT) {
    trackGtagConversion(GTAG_CONV_CHECKOUT, 29.9);
  }
}

// ── Time on Page ────────────────────────────────────────────────────────────

let pageEntryTime = 0;

/** Call on page load to start timer. */
export function startPageTimer() {
  pageEntryTime = Date.now();
}

/** Call before navigation or on beforeunload to log time spent. */
export function logPageTime(page: string) {
  if (!pageEntryTime) return;
  const seconds = Math.round((Date.now() - pageEntryTime) / 1000);
  if (seconds > 2) {
    trackEvent("time_on_page", { page, seconds });
  }
  pageEntryTime = 0;
}
