import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";

const LS_KEY = "medmaster-onboarding-complete";

/* ── Step data ───────────────────────────────────────────────────── */

const SECTIONS = [
  {
    key: "bms",
    label: "BMS",
    desc: "Biologie, Chemie, Physik & Mathe — interaktiv lernen.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "kff",
    label: "KFF",
    desc: "Zahlenfolgen, Figuren, Wortflüssigkeit & mehr.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82 48.213 48.213 0 0 1-4.29.298.64.64 0 0 1-.657-.643v0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "tv",
    label: "TV",
    desc: "Textverständnis mit originalnahen Übungstexten.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "sek",
    label: "SEK",
    desc: "Sozial-emotionale Kompetenzen gezielt trainieren.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

/* ── Component ───────────────────────────────────────────────────── */

export function OnboardingWizard() {
  const completedChapters = useStore((s) => s.completedChapters);
  const totalAnswered = useAdaptiveStore((s) => s.profile.totalQuestionsAnswered);
  const [step, setStep] = useState(0);
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(LS_KEY) === "true");
  const navigate = useNavigate();

  const finish = useCallback(() => {
    localStorage.setItem(LS_KEY, "true");
    setDismissed(true);
  }, []);

  /* Don't show if user already has progress or explicitly dismissed */
  const hasProgress = completedChapters.length > 0 || totalAnswered > 0;
  if (dismissed || hasProgress) return null;

  const isLast = step === 2;
  const TOTAL_STEPS = 3;

  const stepVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 32 : -32,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -32 : 32,
    }),
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
        <div className="relative min-h-[280px]">
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
                <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-6 ring-1 ring-[var(--accent)]/20">
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
                <h2 className="text-2xl font-serif font-semibold text-[var(--foreground)] mb-3">
                  Willkommen bei MedMaster
                </h2>
                <p className="text-[var(--muted-foreground)] leading-relaxed max-w-sm mb-6">
                  Deine MedAT-Vorbereitung — strukturiert, intelligent, effektiv.
                </p>
                {/* Mini trust pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {["5.000+ Fragen", "10.000+ KFF-Übungen", "Alle 4 Bereiche"].map((badge) => (
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
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <h2 className="text-xl font-serif font-semibold text-[var(--foreground)] mb-6">
                  So funktioniert MedMaster
                </h2>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {SECTIONS.map((s, i) => (
                    <motion.div
                      key={s.key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                      className="card-glass rounded-xl p-4 flex flex-col items-center gap-2 text-center ring-1 ring-[var(--accent)]/10 hover:ring-[var(--accent)]/25 transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                        {s.icon}
                      </div>
                      <span className="text-sm font-semibold text-[var(--foreground)]">
                        {s.label}
                      </span>
                      <span className="text-xs text-[var(--muted-foreground)] leading-snug">
                        {s.desc}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
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
                <h2 className="text-2xl font-serif font-semibold text-[var(--foreground)] mb-3">
                  Bereit? Los geht's!
                </h2>
                <p className="text-[var(--muted-foreground)] mb-8 max-w-xs leading-relaxed">
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
                      navigate("/dashboard");
                    }}
                  >
                    Oder erkunde das Dashboard
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

          {/* Navigation */}
          {!isLast && (
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
                onClick={() => setStep((s) => s + 1)}
              >
                Weiter
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
