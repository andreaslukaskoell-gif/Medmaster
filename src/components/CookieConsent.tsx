import { useState, useEffect, useRef } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { initGtagConsentMode, initGtag } from "@/lib/growthTracking";

export function CookieConsentBanner() {
  const { hasConsented, acceptAll, acceptNecessaryOnly, updateConsent } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Add padding-bottom to body so the banner never overlaps scrollable content
  useEffect(() => {
    if (hasConsented) return;
    const update = () => {
      const h = bannerRef.current?.offsetHeight ?? 0;
      document.body.style.paddingBottom = h ? `${h}px` : "";
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      document.body.style.paddingBottom = "";
      window.removeEventListener("resize", update);
    };
  }, [hasConsented, showDetails]);

  if (hasConsented) return null;

  const handleSaveCustom = () => {
    updateConsent({ analytics, marketing });
    if (marketing) {
      initGtagConsentMode(marketing, analytics);
      initGtag();
    }
    window.location.reload();
  };

  const handleAcceptAll = () => {
    acceptAll();
    initGtagConsentMode(true, true);
    initGtag();
    window.location.reload();
  };

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-[var(--surface)] border-t border-[var(--border)] shadow-2xl"
    >
      <div className="max-w-4xl mx-auto px-6 py-4">
        {!showDetails ? (
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm text-[var(--text-secondary)] flex-1">
              <p>
                Wir verwenden Cookies und ähnliche Technologien für Analyse und Marketing.{" "}
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-[var(--accent)] hover:underline cursor-pointer"
                >
                  Mehr erfahren
                </button>
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => {
                  acceptNecessaryOnly();
                  window.location.reload();
                }}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--background)] cursor-pointer"
              >
                Nur notwendige
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium rounded-lg text-white cursor-pointer"
                style={{ background: "var(--accent)" }}
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-[var(--text-secondary)]">
              Wähle, welche Cookies du erlauben möchtest.{" "}
              <a href="/datenschutz" className="text-[var(--accent)] hover:underline">
                Datenschutzerklärung
              </a>
            </p>
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" checked disabled className="accent-[var(--accent)]" />
                <span className="font-medium text-[var(--text-primary)]">Notwendig</span>
                <span className="text-[var(--muted)]">
                  — Anmeldung, Einstellungen (immer aktiv)
                </span>
              </label>
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="accent-[var(--accent)]"
                />
                <span className="font-medium text-[var(--text-primary)]">Analyse</span>
                <span className="text-[var(--muted)]">— Nutzungsstatistiken, Fehlerberichte</span>
              </label>
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="accent-[var(--accent)]"
                />
                <span className="font-medium text-[var(--text-primary)]">Marketing</span>
                <span className="text-[var(--muted)]">— Google Ads, Conversion-Tracking</span>
              </label>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 text-sm rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--background)] cursor-pointer"
              >
                Zurück
              </button>
              <button
                onClick={handleSaveCustom}
                className="px-4 py-2 text-sm font-medium rounded-lg text-white cursor-pointer"
                style={{ background: "var(--accent)" }}
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
