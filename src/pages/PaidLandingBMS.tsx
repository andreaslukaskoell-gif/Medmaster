/* eslint-disable react-hooks/static-components */
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Zap,
  BarChart3,
  Clock,
  Shield,
  Star,
  FlaskConical,
  Atom,
  Calculator,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackClick, trackEvent } from "@/lib/analyticsTracker";
import {
  initScrollDepthTracking,
  resetScrollDepth,
  startPageTimer,
  logPageTime,
  trackConversion,
} from "@/lib/growthTracking";
import { ExitIntentCapture } from "@/components/growth/ExitIntentCapture";
import { Logo } from "@/components/brand/Logo";

const NAVY = "#1b3ea7";

/* ── Countdown ── */
function useCountdown(targetDate: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    expired: diff === 0,
  };
}

/* ── Sample BMS question ── */
const SAMPLE_Q = {
  subject: "Chemie",
  text: "Welches der folgenden Elemente hat die höchste Elektronegativität?",
  options: [
    { id: "a", text: "Natrium (Na)" },
    { id: "b", text: "Chlor (Cl)" },
    { id: "c", text: "Fluor (F)" },
    { id: "d", text: "Sauerstoff (O)" },
    { id: "e", text: "Stickstoff (N)" },
  ],
  correctId: "c",
  explanation:
    "Fluor hat mit 4,0 (Pauling-Skala) die höchste Elektronegativität aller Elemente. Die Elektronegativität nimmt im Periodensystem nach rechts oben zu — Fluor steht als Halogen in der 2. Periode ganz rechts oben.",
};

function SampleQuestion({ onSignupClick }: { onSignupClick: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const q = SAMPLE_Q;
  const isCorrect = selected === q.correctId;

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-10 max-w-2xl mx-auto shadow-[var(--shadow-sm)]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent)]/8 text-[var(--accent)]">
          {q.subject}
        </span>
        <span className="text-xs text-[var(--muted)] tracking-wide">1 von 5.000+</span>
      </div>
      <p className="text-lg font-semibold text-[var(--text-primary)] leading-relaxed mb-7">
        {q.text}
      </p>
      <div className="space-y-3 mb-7">
        {q.options.map((opt) => {
          const letter = opt.id.toUpperCase();
          let ring = "border-[var(--border)] hover:border-[var(--accent)]/30";
          let bg = "";
          let text = "text-[var(--text-secondary)]";
          let letterStyle = "bg-[var(--card)] text-[var(--muted)]";

          if (submitted) {
            if (opt.id === q.correctId) {
              ring = "border-emerald-300 dark:border-emerald-700";
              bg = "bg-emerald-50/60 dark:bg-emerald-900/15";
              text = "text-emerald-800 dark:text-emerald-300";
              letterStyle = "bg-emerald-500 text-white";
            } else if (opt.id === selected) {
              ring = "border-red-300 dark:border-red-700";
              bg = "bg-red-50/60 dark:bg-red-900/15";
              text = "text-red-700 dark:text-red-300";
              letterStyle = "bg-red-400 text-white";
            } else {
              text = "text-[var(--muted)] opacity-50";
            }
          } else if (opt.id === selected) {
            ring = "border-[var(--accent)]";
            bg = "bg-[var(--accent)]/4";
            text = "text-[var(--text-primary)]";
            letterStyle = "bg-[var(--accent)] text-white";
          }

          return (
            <button
              key={opt.id}
              onClick={() => !submitted && setSelected(opt.id)}
              disabled={submitted}
              className={`flex items-center gap-4 w-full px-5 py-4 rounded-xl border text-sm text-left transition-all duration-200 cursor-pointer disabled:cursor-default ${ring} ${bg} ${text}`}
            >
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${letterStyle}`}
              >
                {submitted && opt.id === q.correctId
                  ? "\u2713"
                  : submitted && opt.id === selected
                    ? "\u2717"
                    : letter}
              </span>
              <span className="leading-snug">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={() => selected && setSubmitted(true)}
          disabled={!selected}
          className="btn-premium w-full py-4 text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed rounded-xl"
        >
          Antwort prüfen
        </button>
      ) : (
        <div className="space-y-5">
          <div
            className={`rounded-xl p-5 text-sm leading-relaxed ${
              isCorrect
                ? "bg-emerald-50 dark:bg-emerald-900/15 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/40"
                : "bg-amber-50 dark:bg-amber-900/15 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800/40"
            }`}
          >
            <p className="font-semibold mb-1.5">{isCorrect ? "Richtig." : "Nicht ganz."}</p>
            <p className="leading-relaxed">{q.explanation}</p>
          </div>
          <Link
            to="/login"
            onClick={() => {
              trackClick("demo-q-cta", "Post-question CTA");
              trackEvent("signup_click", { cta: "demo-question", source: "paid-lp-bms" });
              onSignupClick();
            }}
            className="btn-premium flex items-center justify-center gap-2.5 w-full py-4 text-sm font-semibold rounded-xl"
          >
            Über 5.000 weitere BMS-Fragen warten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function PaidLandingBMS() {
  usePageMeta({
    title: "BMS lernen für den MedAT 2026 — 5.000+ Fragen, alle 4 Fächer",
    description:
      "BMS-Vorbereitung für den MedAT 2026: 5.000+ Fragen in Biologie, Chemie, Physik & Mathematik. 218 Lerneinheiten nach offizieller Stichwortliste. Einmalig €29,90.",
    canonical: "https://medmaster.at/lp/bms",
    ogImage: "https://medmaster.at/og-image.png",
  });

  const { signInWithGoogle } = useAuth();
  const [googleError, setGoogleError] = useState("");

  const medatDate = useMemo(() => new Date("2026-07-03T08:00:00+02:00"), []);
  const countdown = useCountdown(medatDate);

  useEffect(() => {
    startPageTimer();
    const cleanupScroll = initScrollDepthTracking();
    return () => {
      logPageTime("/lp/bms");
      resetScrollDepth();
      cleanupScroll?.();
    };
  }, []);

  /* ── FAQ JSON-LD structured data ── */
  useEffect(() => {
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Deckt MedMaster die gesamte BMS-Stichwortliste 2026 ab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, vollständig. Die 218 Lerneinheiten decken jedes einzelne Stichwort der offiziellen BMS-Liste ab — von Zellbiologie und DNA-Replikation über das Periodensystem und Stöchiometrie bis zu Mechanik, Optik, Trigonometrie und Vektorrechnung. Die über 5.000 BMS-Fragen sind im originalen MedAT-Format (A–E, genau eine richtige Antwort) und werden laufend aktualisiert.",
          },
        },
        {
          "@type": "Question",
          name: "Wie viele BMS-Fragen gibt es pro Fach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aktuell: ca. 1.250 Biologie-Fragen, 1.300 Chemie-Fragen, 1.350 Physik-Fragen und 1.050 Mathematik-Fragen. Jede Frage hat fünf Optionen (A–E) und eine ausführliche Erklärung. Die Schwierigkeitsgrade (leicht, mittel, schwer) sind gleichmäßig verteilt und bilden das echte MedAT-Niveau ab.",
          },
        },
        {
          "@type": "Question",
          name: "Reicht MedMaster für die BMS-Vorbereitung?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MedMaster deckt den gesamten BMS-Teil vollständig ab: alle Stichwörter, Tausende Übungsfragen, adaptives Lernen und Fortschrittskontrolle pro Thema. Für die Vertiefung in Biologie empfehlen viele ergänzend ein Lehrbuch wie den Campbell. Die Übungs- und Lernkomponente ist aber komplett abgedeckt — inklusive adaptivem Lernplan, der deine Schwächen gezielt trainiert.",
          },
        },
        {
          "@type": "Question",
          name: "Warum ist MedMaster so günstig?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Andere Anbieter verlangen €200–800 für MedAT-Kurse. MedMaster ist eine App — kein Kursraum, keine Trainer-Gehälter. Deshalb €29,90 statt €500+. Gleicher Inhalt, Bruchteil der Kosten.",
          },
        },
        {
          "@type": "Question",
          name: "Gibt es ein Abo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, ohne Wenn und Aber. Es gibt kein Abo, keine automatische Verlängerung und keine Kündigungsfrist. Du kannst deinen Account jederzeit in den Einstellungen löschen — mit einem Klick.",
          },
        },
      ],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleGoogle = async () => {
    setGoogleError("");
    trackClick("lp-bms-google-signup", "Paid LP BMS Google CTA");
    trackEvent("signup_click", { method: "google", source: "paid-lp-bms" });
    trackConversion("signup_started", { method: "google", source: "paid-lp-bms" });
    const { error } = await signInWithGoogle();
    if (error) setGoogleError(error.message);
  };

  const handleEmailClick = () => {
    trackClick("lp-bms-email-signup", "Paid LP BMS Email CTA");
    trackEvent("signup_click", { method: "email", source: "paid-lp-bms" });
    trackConversion("signup_started", { method: "email", source: "paid-lp-bms" });
  };

  const GoogleBtn = ({ label, className = "" }: { label: string; className?: string }) => (
    <button
      onClick={handleGoogle}
      className={`inline-flex items-center justify-center gap-3 font-semibold px-10 py-4.5 text-base cursor-pointer transition-all duration-200 ${className}`}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      {label}
    </button>
  );

  const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 bg-[var(--surface)]/80 backdrop-blur-2xl border-b border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
          <Logo variant="full" size={26} />
          <Link
            to="/login"
            onClick={handleEmailClick}
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Anmelden
          </Link>
        </div>
      </header>

      {/* ─── MedAT Countdown bar ─── */}
      {!countdown.expired && (
        <div className="text-center py-3 px-4" style={{ backgroundColor: NAVY }}>
          <p className="text-sm font-medium text-white/90 tracking-wide flex items-center justify-center gap-3">
            <span>MedAT 2026 in</span>
            <span className="inline-flex gap-1.5 font-mono tabular-nums">
              <span className="bg-white/15 rounded px-1.5 py-0.5">{countdown.days} Tagen</span>
              <span className="bg-white/15 rounded px-1.5 py-0.5 hidden sm:inline">
                {String(countdown.hours).padStart(2, "0")}h
              </span>
            </span>
          </p>
        </div>
      )}

      {/* ─── Hero ─── */}
      <section className="pt-24 pb-20 hero-orbs">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.p
            {...fade}
            className="text-sm font-semibold tracking-widest uppercase mb-6"
            style={{ color: NAVY }}
          >
            BMS-Vorbereitung MedAT 2026
          </motion.p>
          <motion.h1
            {...fade}
            transition={{ ...fade.transition, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-[1.15] sm:leading-[1.1] tracking-tight mb-5 sm:mb-8 heading-glow"
          >
            BMS ist 40 % deiner
            <br />
            MedAT-Note.
            <br />
            <span className="text-[var(--accent)]">Bist du vorbereitet?</span>
          </motion.h1>
          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.2 }}
            className="text-xl text-[var(--text-secondary)] max-w-lg mx-auto mb-12 leading-relaxed"
          >
            Biologie, Chemie, Physik, Mathematik — vier Fächer, eine Plattform. MedMaster deckt
            jedes Stichwort der offiziellen BMS-Liste 2026 ab.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...fade}
            transition={{ ...fade.transition, delay: 0.3 }}
            className="flex flex-col items-center gap-4 mb-6"
          >
            <GoogleBtn
              label="Kostenlos starten"
              className="btn-premium rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            />
            <Link
              to="/login"
              onClick={handleEmailClick}
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-medium"
            >
              Mit E-Mail registrieren
            </Link>
          </motion.div>
          {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}
          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.35 }}
            className="text-xs text-[var(--muted)]/60 tracking-wide"
          >
            Keine Kreditkarte &middot; Kein Abo &middot; 1 Klick mit Google
          </motion.p>
        </div>
      </section>

      {/* ─── Numbers ─── */}
      <section className="py-20 border-y border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "5.000+", label: "BMS-Fragen", sub: "mit Erklärungen" },
              { value: "218", label: "Lerneinheiten", sub: "offizielle Stichwortliste 2026" },
              { value: "4", label: "Fächer", sub: "Bio, Chemie, Physik, Mathe" },
              { value: "100 %", label: "Stichwortliste 2026", sub: "vollständig abgedeckt" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-1 sm:mb-2"
                  style={{ color: NAVY }}
                >
                  {s.value}
                </div>
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-0.5">
                  {s.label}
                </div>
                <div className="text-xs text-[var(--muted)]">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── The BMS problem ─── */}
      <section className="py-12 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4 heading-glow">
              BMS ist kein Auswendiglernen — es ist ein System
            </h2>
            <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              40 % der MedAT-Gesamtnote kommen aus dem BMS-Teil. Wer hier Punkte verschenkt, kann
              das in anderen Bereichen kaum aufholen.
            </p>
          </motion.div>
          <motion.div {...fade} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-[var(--border)] p-5 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--card)] flex items-center justify-center mb-5">
                <span className="text-lg text-[var(--muted)]">&times;</span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-4">
                Wie die meisten BMS lernen
              </h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <li>Lehrbuch lesen und hoffen, dass es reicht</li>
                <li>Keine Ahnung, welche Themen drankommen</li>
                <li>Altfragen auswendig lernen statt verstehen</li>
                <li>Vier Fächer, kein System, kein Plan</li>
              </ul>
            </div>
            <div
              className="rounded-2xl border-2 p-5 sm:p-8"
              style={{ borderColor: `color-mix(in srgb, ${NAVY} 30%, transparent)` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `color-mix(in srgb, ${NAVY} 10%, transparent)` }}
              >
                <span className="text-lg" style={{ color: NAVY }}>
                  &rarr;
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-4">
                Systematisch mit MedMaster
              </h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <li>5.000+ Fragen im echten MedAT-Format (A-E)</li>
                <li>Jedes Stichwort der offiziellen Liste abgedeckt</li>
                <li>Schwächen werden automatisch erkannt und trainiert</li>
                <li>Fortschritt pro Fach und Kapitel sichtbar</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4 Fächer ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4 heading-glow">
              Alle 4 BMS-Fächer. Lückenlos.
            </h2>
            <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              Jedes Fach mit eigenen Lerneinheiten, Übungsfragen und detaillierten Erklärungen —
              exakt nach der offiziellen Stichwortliste 2026.
            </p>
          </motion.div>
          <motion.div {...fade} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: BookOpen,
                title: "Biologie",
                desc: "Zellbiologie, Genetik, Evolution, Anatomie, Physiologie, Ökologie — von der Zellmembran bis zum Stammbaum.",
                count: "1.250+ Fragen",
              },
              {
                icon: FlaskConical,
                title: "Chemie",
                desc: "Atombau, Periodensystem, Stöchiometrie, organische Chemie, Reaktionsgleichgewichte, chemische Bindung.",
                count: "1.300+ Fragen",
              },
              {
                icon: Atom,
                title: "Physik",
                desc: "Mechanik, Thermodynamik, Elektrizität, Optik, Wellen, Atomphysik — inklusive Rechenaufgaben.",
                count: "1.350+ Fragen",
              },
              {
                icon: Calculator,
                title: "Mathematik",
                desc: "Algebra, Geometrie, Einheiten, Funktionen, Vektorrechnung.",
                count: "1.050+ Fragen",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[var(--border)] p-5 sm:p-8 hover:shadow-[var(--shadow-sm)] transition-shadow"
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `color-mix(in srgb, ${NAVY} 8%, transparent)` }}
                  >
                    <f.icon className="w-6 h-6" style={{ color: NAVY }} />
                  </div>
                  <span
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: NAVY }}
                  >
                    {f.count}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4 heading-glow">
              Kein Fragenpool. Ein Lernsystem.
            </h2>
            <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              MedMaster erkennt, wo du Schwächen hast, und trainiert gezielt diese Bereiche.
            </p>
          </motion.div>
          <motion.div {...fade} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Zap,
                title: "Adaptiv, nicht zufällig",
                desc: "Was du falsch beantwortest, kommt wieder. Was du kannst, wird seltener. Dein Lernplan passt sich an.",
              },
              {
                icon: BarChart3,
                title: "Fortschritt pro Stichwort",
                desc: "Sieh auf einen Blick, welche BMS-Themen du beherrschst und wo Lücken sind. Pro Fach, pro Kapitel, pro Stichwort.",
              },
              {
                icon: Star,
                title: "Echtes MedAT-Format",
                desc: "Alle Fragen im Original-Format (A-E, eine richtige Antwort) mit detaillierter Erklärung. So wie am Prüfungstag.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[var(--border)] p-5 sm:p-8 hover:shadow-[var(--shadow-sm)] transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `color-mix(in srgb, ${NAVY} 8%, transparent)` }}
                >
                  <f.icon className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Demo question ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4 heading-glow">
              Eine BMS-Frage. Weißt du die Antwort?
            </h2>
            <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto">
              So sehen die Fragen in MedMaster aus. Originalformat, detaillierte Erklärung bei jeder
              Antwort.
            </p>
          </motion.div>
          <motion.div {...fade}>
            <SampleQuestion
              onSignupClick={() =>
                trackConversion("signup_started", { cta: "demo-question", source: "paid-lp-bms" })
              }
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Mid CTA ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            {...fade}
            className="rounded-2xl p-8 sm:p-12 text-center"
            style={{
              background: `linear-gradient(135deg, color-mix(in srgb, ${NAVY} 4%, transparent), color-mix(in srgb, ${NAVY} 8%, transparent))`,
              border: `1px solid color-mix(in srgb, ${NAVY} 12%, transparent)`,
            }}
          >
            <Clock className="w-7 h-7 mx-auto mb-5" style={{ color: NAVY }} />
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              {countdown.expired ? (
                "Einmalig €29,90. Kein Abo."
              ) : (
                <>
                  Gratis-Zugang endet in{" "}
                  <span className="font-mono tabular-nums">
                    {countdown.days}d {String(countdown.hours).padStart(2, "0")}h{" "}
                    {String(countdown.minutes).padStart(2, "0")}m{" "}
                    {String(countdown.seconds).padStart(2, "0")}s
                  </span>
                </>
              )}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-8 max-w-md mx-auto leading-relaxed">
              {countdown.expired
                ? "Einmalige Zahlung. Voller Zugang zu allen 5.000+ BMS-Fragen, 218 Lerneinheiten und der Prüfungssimulation."
                : "Wer jetzt startet, lernt bis April gratis — und hat einen Vorsprung gegenüber allen, die noch warten."}
            </p>
            <GoogleBtn
              label="Kostenlos starten"
              className="btn-premium rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            />
            {googleError && <p className="text-sm text-red-500 mt-3">{googleError}</p>}
            <p className="text-xs text-[var(--muted)] mt-4">
              <Link
                to="/login"
                onClick={handleEmailClick}
                className="underline hover:text-[var(--text-secondary)]"
              >
                Mit E-Mail anmelden
              </Link>
              {" \u00b7 "}Keine Kreditkarte{" \u00b7 "}Kein Abo
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Trust badges ─── */}
      <section className="py-16 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="flex flex-wrap justify-center gap-3">
            {(
              [
                { icon: BookOpen, text: "5.000+ BMS-Fragen" },
                { icon: Star, text: "218 Lerneinheiten" },
                { icon: Zap, text: "Stichwortliste 2026" },
                { icon: Shield, text: "Kein Abo" },
              ] as { icon: React.ComponentType<{ className?: string }>; text: string }[]
            ).map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[var(--text-secondary)] bg-[var(--card)] border border-[var(--border)]"
              >
                <b.icon className="w-4 h-4 text-[var(--muted)]" />
                {b.text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <motion.h2
            {...fade}
            className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] text-center mb-12"
          >
            Häufige Fragen zum BMS
          </motion.h2>
          <motion.div {...fade} className="divide-y divide-[var(--border)]">
            {[
              {
                q: "Deckt MedMaster die gesamte BMS-Stichwortliste 2026 ab?",
                a: "Ja, vollständig. Die 218 Lerneinheiten decken jedes einzelne Stichwort der offiziellen BMS-Liste ab — von Zellbiologie und DNA-Replikation über das Periodensystem und Stöchiometrie bis zu Mechanik, Optik, Trigonometrie und Vektorrechnung. Die über 5.000 BMS-Fragen sind im originalen MedAT-Format (A\u2013E, genau eine richtige Antwort) und werden laufend aktualisiert.",
              },
              {
                q: "Wie viele BMS-Fragen gibt es pro Fach?",
                a: "Aktuell: ca. 1.250 Biologie-Fragen, 1.300 Chemie-Fragen, 1.350 Physik-Fragen und 1.050 Mathematik-Fragen. Jede Frage hat fünf Optionen (A\u2013E) und eine ausführliche Erklärung. Die Schwierigkeitsgrade (leicht, mittel, schwer) sind gleichmäßig verteilt und bilden das echte MedAT-Niveau ab.",
              },
              {
                q: "Reicht MedMaster für die BMS-Vorbereitung?",
                a: "MedMaster deckt den gesamten BMS-Teil vollständig ab: alle Stichwörter, Tausende Übungsfragen, adaptives Lernen und Fortschrittskontrolle pro Thema. Für die Vertiefung in Biologie empfehlen viele ergänzend ein Lehrbuch wie den Campbell. Die Übungs- und Lernkomponente ist aber komplett abgedeckt — inklusive adaptivem Lernplan, der deine Schwächen gezielt trainiert.",
              },
              {
                q: "Warum ist MedMaster so g\u00fcnstig?",
                a: "Andere Anbieter verlangen \u20ac200\u2013800 f\u00fcr Kurse. MedMaster ist eine App \u2014 kein Kursraum, keine Trainer-Geh\u00e4lter. Deshalb \u20ac29,90 statt \u20ac500+. Gleicher Inhalt, Bruchteil der Kosten.",
              },
              {
                q: "Gibt es ein Abo?",
                a: "Nein. Einmalig \u20ac29,90, kein Abo, keine automatische Verl\u00e4ngerung. Du beh\u00e4ltst vollen Zugang bis zum MedAT 2026. Account jederzeit l\u00f6schbar in den Einstellungen.",
              },
            ].map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16 sm:py-28" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-5 leading-tight tracking-tight">
            40 % deiner Note.
            <br />
            Null Prozent dem Zufall überlassen.
          </h2>
          <p className="text-white/60 text-base mb-10 max-w-md mx-auto leading-relaxed">
            5.000+ BMS-Fragen. 4 Fächer. 218 Lerneinheiten. Adaptives Lernsystem. Kein Abo.
          </p>
          <GoogleBtn
            label="Jetzt kostenlos starten"
            className="bg-white text-[var(--text-primary)] rounded-2xl shadow-xl hover:bg-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
          />
          <p className="text-xs text-white/40 mt-5 tracking-wide">
            <Link to="/login" onClick={handleEmailClick} className="underline hover:text-white/60">
              Mit E-Mail anmelden
            </Link>
            {" \u00b7 "}Keine Kreditkarte nötig
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 flex items-center justify-between text-xs text-[var(--muted)]">
          <span>&copy; 2026 MedMaster</span>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-[var(--text-primary)] transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-[var(--text-primary)] transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-[var(--text-primary)] transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </footer>

      <ExitIntentCapture />
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer"
      >
        <span className="text-base font-semibold text-[var(--text-primary)] leading-relaxed">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-[var(--muted)] shrink-0 mt-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="text-sm text-[var(--muted)] leading-relaxed pb-6 -mt-2 pr-12">{a}</p>}
    </div>
  );
}
