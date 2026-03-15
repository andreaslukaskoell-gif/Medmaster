// PostHog analytics — tracks conversion funnel events.
// Noop in dev unless VITE_POSTHOG_KEY is set.

import posthog from "posthog-js";

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const POSTHOG_HOST = (import.meta.env.VITE_POSTHOG_HOST as string) || "https://eu.i.posthog.com";

let initialized = false;

export function initAnalytics() {
  if (initialized) return;
  if (!POSTHOG_KEY?.trim()) return;

  posthog.init(POSTHOG_KEY.trim(), {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
    autocapture: false, // manual events only — less noise
  });
  initialized = true;
}

/** Identify user after signup/login */
export function identifyUser(userId: string, properties?: Record<string, unknown>) {
  if (!initialized) return;
  posthog.identify(userId, properties);
}

/** Reset identity on logout */
export function resetAnalytics() {
  if (!initialized) return;
  posthog.reset();
}

/** Track a custom event */
export function track(event: string, properties?: Record<string, unknown>) {
  if (!initialized) return;
  posthog.capture(event, properties);
}

// ── Funnel events ──

export function trackSignup(method: "google" | "email" | "magic_link") {
  track("signup", { method });
}

export function trackLogin(method: "google" | "email" | "magic_link") {
  track("login", { method });
}

export function trackOnboardingComplete() {
  track("onboarding_complete");
}

export function trackFirstQuestion(section: string) {
  track("first_question_answered", { section });
}

export function trackQuizComplete(section: string, score: number, total: number) {
  track("quiz_complete", { section, score, total, pct: Math.round((score / total) * 100) });
}

export function trackPageView(page: string) {
  track("$pageview", { $current_url: window.location.href, page });
}

export function trackCheckoutStart() {
  track("checkout_start");
}

export function trackPricingView() {
  track("pricing_view");
}

/** Capture UTM params from URL on first visit */
export function captureUtmParams() {
  if (!initialized) return;
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  if (Object.keys(utm).length > 0) {
    posthog.register(utm); // persists as super properties on all future events
    track("utm_captured", utm);
  }
}
