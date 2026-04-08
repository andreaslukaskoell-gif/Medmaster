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
  event: "Lead" | "CompleteRegistration" | "StartTrial" | "ViewContent" | "InitiateCheckout" | "Purchase",
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
  (import.meta.env.VITE_GTAG_CONV_SIGNUP as string | undefined) || "B4jqCOSgrIscEP3xzpBD";
const GTAG_CONV_CHECKOUT =
  (import.meta.env.VITE_GTAG_CONV_CHECKOUT as string | undefined) || "dnlKCJLYq5gcEP3xzpBD";

let gtagReady = false;

/**
 * Initialize Google Consent Mode v2 defaults.
 * Must be called BEFORE gtag("config") — ideally before the gtag script loads.
 * This allows Google to model conversions even when full consent is denied.
 */
export function initGtagConsentMode(marketingConsent: boolean) {
  if (typeof window === "undefined") return;
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).dataLayer = (window as any).dataLayer || [];

  // Set consent defaults BEFORE gtag loads
  gtag("consent", "default", {
    ad_storage: marketingConsent ? "granted" : "denied",
    ad_user_data: marketingConsent ? "granted" : "denied",
    ad_personalization: marketingConsent ? "granted" : "denied",
    analytics_storage: "granted", // basic analytics always allowed for conversion modeling
    wait_for_update: 500,
  });
}

/** Update consent state after user interaction with cookie banner. */
export function updateGtagConsent(marketingConsent: boolean) {
  if (!gtagReady) return;
  gtag("consent", "update", {
    ad_storage: marketingConsent ? "granted" : "denied",
    ad_user_data: marketingConsent ? "granted" : "denied",
    ad_personalization: marketingConsent ? "granted" : "denied",
  });
}

/**
 * Load gtag.js and initialize with Consent Mode v2.
 * Now always called on app start — consent mode handles the rest.
 */
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

// Must use 'arguments' (not rest params) — gtag.js expects Arguments objects, not arrays.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function gtag(..._args: any[]) {
  // eslint-disable-next-line prefer-rest-params
  ((window as any).dataLayer as IArguments[])?.push(arguments);
}

/** Track Google Ads conversion with optional Enhanced Conversions data. */
export function trackGtagConversion(conversionLabel: string, value?: number, userEmail?: string) {
  if (!gtagReady || !GTAG_ID) return;

  // Enhanced Conversions: send hashed user data for better attribution
  if (userEmail) {
    gtag("set", "user_data", { email: userEmail });
  }

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
// Dedup flag to prevent duplicate conversion fires per session
const _firedConversions = new Set<string>();

export function trackConversion(
  event:
    | "signup_started" // clicked any signup CTA
    | "signup_completed" // registration finished
    | "activation" // first meaningful action (question answered)
    | "checkout_started" // started payment
    | "purchase_completed" // payment confirmed (Stripe success page)
    | "lead_captured" // email captured (exit-intent, newsletter)
    | "onboarding_completed", // finished onboarding steps
  properties?: Record<string, unknown>
) {
  // Dedup: these must fire only once per session
  if (event === "signup_completed" || event === "checkout_started" || event === "purchase_completed") {
    if (_firedConversions.has(event)) return;
    _firedConversions.add(event);
  }

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

  // Google Ads — fire conversion with Enhanced Conversions (hashed email)
  const userEmail = (properties?.email as string) || undefined;
  if (event === "signup_completed" && GTAG_CONV_SIGNUP) {
    trackGtagConversion(GTAG_CONV_SIGNUP, undefined, userEmail);
  } else if (event === "checkout_started" && GTAG_CONV_CHECKOUT) {
    trackGtagConversion(GTAG_CONV_CHECKOUT, 29.9, userEmail);
  } else if (event === "purchase_completed" && GTAG_CONV_CHECKOUT) {
    trackGtagConversion(GTAG_CONV_CHECKOUT, 29.9, userEmail);
  }

  // Meta Pixel — purchase event
  if (event === "purchase_completed") {
    trackMetaConversion("Purchase", { value: 29.9, currency: "EUR", ...properties });
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

// ── Session Duration Tracking ──────────────────────────────────────────────

let sessionStartTime = 0;
let sessionTrackingInitialized = false;

function logSessionEnd() {
  if (!sessionStartTime) return;
  const seconds = Math.round((Date.now() - sessionStartTime) / 1000);
  if (seconds >= 3) {
    trackEvent("session_end", { session_duration_seconds: seconds });
  }
}

function handleSessionVisibility() {
  if (document.visibilityState === "hidden") logSessionEnd();
}

/** Call once on app start to begin tracking total session duration. */
export function initSessionDurationTracking() {
  if (typeof window === "undefined") return;
  if (sessionTrackingInitialized) return;
  sessionTrackingInitialized = true;
  sessionStartTime = Date.now();

  document.addEventListener("visibilitychange", handleSessionVisibility);
}
