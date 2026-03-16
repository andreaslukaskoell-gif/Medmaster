/**
 * Exit-Intent Lead Capture — captures emails from visitors about to leave.
 *
 * Triggers when mouse moves toward browser chrome (desktop).
 * Shows a clean overlay offering a free MedAT resource in exchange for email.
 * Stores captured email in Supabase `leads` table for lifecycle follow-up.
 * Only shows once per session (sessionStorage flag).
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { X, ArrowRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { trackConversion } from "@/lib/growthTracking";
import { trackEvent } from "@/lib/analyticsTracker";

const SESSION_KEY = "mm_exit_shown";
const DISMISSED_KEY = "mm_exit_dismissed";

export function ExitIntentCapture() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const hasTriggered = useRef(false);

  const triggerPopup = useCallback(() => {
    // Don't show if already triggered this session, or user dismissed before
    if (hasTriggered.current) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (localStorage.getItem(DISMISSED_KEY)) return;

    hasTriggered.current = true;
    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(true);
    trackEvent("exit_intent_shown");
  }, []);

  useEffect(() => {
    // Desktop: mouse leaves viewport toward top (browser chrome)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && e.movementY < 0) {
        triggerPopup();
      }
    };

    // Delay listener — don't trigger within first 8 seconds
    timeoutRef.current = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [triggerPopup]);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem(DISMISSED_KEY, "1");
    trackEvent("exit_intent_dismissed");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || loading) return;

    const trimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Store in leads table (upsert to avoid duplicates)
      if (supabase) {
        await supabase.from("leads").upsert(
          {
            email: trimmed,
            source: "exit_intent",
            utm_source: sessionStorage.getItem("mm_utm")
              ? JSON.parse(sessionStorage.getItem("mm_utm")!).utm_source
              : null,
            created_at: new Date().toISOString(),
          },
          { onConflict: "email" }
        );
      }

      trackConversion("lead_captured", { source: "exit_intent", email: trimmed });
      setSubmitted(true);
    } catch {
      setError("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleDismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="relative w-full max-w-md mx-4 bg-[var(--surface)] rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Accent top bar */}
            <div className="h-1 bg-[var(--accent)]" />

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--text-primary)] hover:bg-[var(--card)] transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {submitted ? (
                /* ── Success state ── */
                <div className="text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Perfekt, wir melden uns!
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Du bekommst die 10 häufigsten MedAT-Fehler + Tipps direkt per E-Mail.
                  </p>
                  <p className="text-xs text-[var(--muted)]">
                    Oder starte jetzt direkt:{" "}
                    <a href="/login" className="text-[var(--accent)] font-medium hover:underline">
                      Kostenlos anmelden
                    </a>
                  </p>
                </div>
              ) : (
                /* ── Capture form ── */
                <div className="space-y-5">
                  <div className="text-center">
                    <p className="text-2xl mb-1">📋</p>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      Bevor du gehst —
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                      Hol dir die <strong>10 häufigsten MedAT-Fehler</strong> und wie du sie
                      vermeidest. Kostenlos per E-Mail.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="deine@email.at"
                      required
                      autoFocus
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                    {error && <p className="text-xs text-red-500">{error}</p>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-premium w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold"
                    >
                      {loading ? "Wird gesendet..." : "Kostenlos erhalten"}
                      {!loading && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </form>

                  <p className="text-center text-xs text-[var(--muted)]">
                    Kein Spam. Du kannst dich jederzeit abmelden.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
