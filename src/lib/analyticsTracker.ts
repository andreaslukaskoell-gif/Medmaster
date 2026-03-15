/**
 * Lightweight analytics tracker — writes events to Supabase analytics_events table.
 * Works for both authenticated and anonymous visitors.
 * Complements PostHog (which may or may not be configured).
 */

import { supabase } from "./supabase";

let visitorId = "";
let sessionId = "";
let currentUserId: string | null = null;

/** Initialize visitor/session IDs. Call once on app start. */
export function initTracker() {
  // Visitor ID persists across sessions (localStorage)
  visitorId = localStorage.getItem("mm_vid") || crypto.randomUUID();
  localStorage.setItem("mm_vid", visitorId);

  // Session ID resets per browser session (sessionStorage)
  sessionId = sessionStorage.getItem("mm_sid") || crypto.randomUUID();
  sessionStorage.setItem("mm_sid", sessionId);
}

/** Capture UTM and referral params from URL. Call once on app start. */
export function captureTrafficSource() {
  const params = new URLSearchParams(window.location.search);

  // Capture referral
  const ref = params.get("ref");
  if (ref) {
    insertEvent("referral_visit", { properties: { ref, referrer: document.referrer || null } });
    // Store ref for later attribution on signup
    sessionStorage.setItem("mm_ref", ref);
  }

  // Capture UTM params
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  if (Object.keys(utm).length > 0) {
    insertEvent("utm_visit", { properties: utm });
    sessionStorage.setItem("mm_utm", JSON.stringify(utm));
  }
}

/** Get stored referral code (if visitor came via ?ref=xxx). */
export function getStoredRef(): string | null {
  return sessionStorage.getItem("mm_ref");
}

/** Get stored UTM params. */
export function getStoredUtm(): Record<string, string> | null {
  const raw = sessionStorage.getItem("mm_utm");
  return raw ? JSON.parse(raw) : null;
}

/** Associate the current visitor with an authenticated user. */
export function setTrackerUserId(userId: string | null) {
  currentUserId = userId;
}

/** Track a page view. Called automatically by usePageTracking. */
export function trackPageView(path: string) {
  insertEvent("page_view", { page_path: path, referrer: document.referrer || null });
}

/** Track a named event (CTA click, signup, etc.). */
export function trackEvent(name: string, properties?: Record<string, unknown>) {
  insertEvent(name, { properties });
}

/** Track a click on a specific element. */
export function trackClick(elementId: string, label?: string) {
  insertEvent("cta_click", {
    element_id: elementId,
    properties: label ? { label } : undefined,
  });
}

// ── Internal ──

function insertEvent(
  eventName: string,
  extra: {
    page_path?: string | null;
    element_id?: string | null;
    referrer?: string | null;
    properties?: Record<string, unknown>;
  } = {}
) {
  if (!supabase) return;
  // Skip tracking for admin (flag set when analytics dashboard is unlocked)
  if (localStorage.getItem("mm_admin") === "1") return;

  const row = {
    event_name: eventName,
    page_path: extra.page_path ?? null,
    element_id: extra.element_id ?? null,
    visitor_id: visitorId,
    session_id: sessionId,
    user_id: currentUserId ?? null,
    referrer: extra.referrer ?? null,
    properties: extra.properties ?? {},
  };

  // Fire-and-forget — don't await, don't block UI
  supabase
    .from("analytics_events")
    .insert(row)
    .then(({ error }) => {
      if (error && import.meta.env.DEV) {
        console.warn("[analytics]", eventName, error.message);
      }
    });
}
