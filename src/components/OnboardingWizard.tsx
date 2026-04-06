import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { trackOnboardingComplete } from "@/lib/analytics";
import { trackEvent } from "@/lib/analyticsTracker";

const LS_KEY = "medmaster-onboarding-complete";

/* ── Component ───────────────────────────────────────────────────── */

export function OnboardingWizard() {
  const completedChapters = useStore((s) => s.completedChapters);
  const setMedATOnboardingComplete = useStore((s) => s.setMedATOnboardingComplete);
  const totalAnswered = useAdaptiveStore((s) => s.profile.totalQuestionsAnswered);
  const { user, profile } = useAuth();
  const [step, setStep] = useState(0);
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(LS_KEY) === "true");
  const [displayName, setDisplayName] = useState("");
  const [nameSaving, setNameSaving] = useState(false);
  const navigate = useNavigate();

  // Check if user already has a display name (e.g. Google OAuth)
  const existingName =
    profile?.display_name?.trim() ||
    (profile?.username?.trim() && !profile.username.includes("@") ? profile.username.trim() : "");
  const needsName = !existingName;

  const finish = useCallback(() => {
    localStorage.setItem(LS_KEY, "true");
    setMedATOnboardingComplete();
    setDismissed(true);
    trackOnboardingComplete();
    trackEvent("onboarding_complete");
  }, [setMedATOnboardingComplete]);

  const saveName = useCallback(
    async (name: string) => {
      if (!supabase || !user) return;
      setNameSaving(true);
      try {
        await supabase
          .from("profiles")
          .upsert({ id: user.id, display_name: name, username: name }, { onConflict: "id" });
      } catch {
        // non-critical — name can be set later in settings
      }
      setNameSaving(false);
    },
    [user]
  );

  /* Don't show if user already has progress or explicitly dismissed */
  const hasProgress = completedChapters.length > 0 || totalAnswered > 0;
  if (dismissed || hasProgress) return null;

  const TOTAL_STEPS = 2;

  const stepVariants = {
    enter: { opacity: 0, x: 32 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -32 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Onboarding"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.div
        className="card-glass hero-orbs rounded-2xl p-10 max-w-lg w-full mx-4 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ── Steps ─────────────────────────────────────── */}
        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait" custom={step}>
            {step === 0 && (
              <motion.div
                key="step-0"
                custom={1}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-5 ring-1 ring-[var(--accent)]/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    className="w-8 h-8"
                  >
                    <path
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-2">
                  Willkommen bei MedMaster
                </h2>
                <p className="text-[var(--muted-foreground)] leading-relaxed max-w-sm mb-5 text-sm">
                  Deine MedAT-Vorbereitung — strukturiert, intelligent, effektiv.
                </p>

                {/* Name input if needed */}
                {needsName && (
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && displayName.trim().length >= 2) {
                        saveName(displayName.trim());
                        setStep(1);
                      }
                    }}
                    placeholder="Dein Name"
                    maxLength={30}
                    autoFocus
                    className="w-full max-w-xs rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 text-center text-base font-medium text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] mb-4"
                  />
                )}

                {/* Trust pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {["5.000+ Fragen", "10.000+ KFF-Aufgaben", "Alle 4 Bereiche"].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/8 text-[var(--accent)] ring-1 ring-[var(--accent)]/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                custom={1}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center text-center justify-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-5 ring-1 ring-[var(--accent)]/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    className="w-7 h-7"
                  >
                    <path
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-3">
                  Bereit? Los geht's!
                </h2>
                <p className="text-[var(--muted-foreground)] mb-8 max-w-xs leading-relaxed text-sm">
                  Wähle deinen Einstieg und leg direkt los.
                </p>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <button
                    type="button"
                    className="btn-premium w-full py-3 rounded-xl text-sm font-semibold"
                    onClick={() => {
                      finish();
                      navigate("/bms");
                    }}
                  >
                    Starte mit BMS-Grundlagen
                  </button>
                  <button
                    type="button"
                    className="card-glass w-full py-3 rounded-xl text-sm font-medium text-[var(--foreground)] hover:bg-white/20 transition-colors ring-1 ring-[var(--border)]"
                    onClick={() => {
                      finish();
                      navigate("/kff");
                    }}
                  >
                    KFF-Training starten
                  </button>
                  <button
                    type="button"
                    className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mt-1"
                    onClick={() => {
                      finish();
                      navigate("/dashboard");
                    }}
                  >
                    Erstmal Dashboard erkunden
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Bottom: dots + buttons ──────────────────── */}
        <div className="mt-8 flex flex-col items-center gap-4">
          {/* Step indicator pills */}
          <div className="flex gap-2 items-center">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <motion.span
                key={i}
                animate={{
                  width: i === step ? 24 : 8,
                  backgroundColor:
                    i === step
                      ? "var(--accent)"
                      : i < step
                        ? "color-mix(in srgb, var(--accent) 40%, transparent)"
                        : "color-mix(in srgb, var(--muted-foreground) 30%, transparent)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-2 rounded-full"
                style={{ display: "inline-block" }}
              />
            ))}
          </div>

          {/* Navigation — only on step 0 */}
          {step === 0 && (
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                onClick={finish}
              >
                Überspringen
              </button>
              <button
                type="button"
                className="btn-premium px-8 py-2.5 rounded-xl text-sm font-semibold"
                disabled={needsName && displayName.trim().length < 2}
                onClick={async () => {
                  if (needsName && displayName.trim().length >= 2) {
                    await saveName(displayName.trim());
                  }
                  setStep(1);
                }}
              >
                {nameSaving ? "..." : "Weiter"}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
