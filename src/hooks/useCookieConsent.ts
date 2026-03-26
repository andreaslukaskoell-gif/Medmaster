/**
 * Cookie consent hook — GDPR-compliant consent management.
 *
 * Categories:
 *   necessary  — always on (auth, theme, onboarding state)
 *   analytics  — PostHog, Supabase analytics tracker, scroll/section tracking
 *   marketing  — Google Ads (gtag), Meta Pixel
 *
 * Consent is stored in localStorage under "medmaster_consent".
 * Analytics/marketing init is deferred until consent is given.
 */

import { useState, useCallback } from "react";

export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

const CONSENT_KEY = "medmaster_consent";

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Safari private mode / storage full
  }
}

export function useCookieConsent() {
  const [consent, setConsentState] = useState<ConsentState | null>(loadConsent);

  const hasConsented = consent !== null;
  const analyticsAllowed = consent?.analytics ?? false;
  const marketingAllowed = consent?.marketing ?? false;

  const acceptAll = useCallback(() => {
    const c: ConsentState = {
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    saveConsent(c);
    setConsentState(c);
  }, []);

  const acceptNecessaryOnly = useCallback(() => {
    const c: ConsentState = {
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    saveConsent(c);
    setConsentState(c);
  }, []);

  const updateConsent = useCallback(
    (updates: Partial<Pick<ConsentState, "analytics" | "marketing">>) => {
      const current = loadConsent() || { analytics: false, marketing: false, timestamp: "" };
      const c: ConsentState = {
        ...current,
        ...updates,
        timestamp: new Date().toISOString(),
      };
      saveConsent(c);
      setConsentState(c);
    },
    []
  );

  return {
    consent,
    hasConsented,
    analyticsAllowed,
    marketingAllowed,
    acceptAll,
    acceptNecessaryOnly,
    updateConsent,
  };
}

/** Non-hook version for use in main.tsx (outside React tree). */
export function getStoredConsent(): ConsentState | null {
  return loadConsent();
}
