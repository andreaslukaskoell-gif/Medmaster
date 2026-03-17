import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Zap,
  BarChart3,
  Clock,
  Users,
  Shield,
  Star,
  Brain,
  FileText,
  Heart,
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
import { ReturningVisitorBanner } from "@/components/growth/ReturningVisitorBanner";
import { Logo } from "@/components/brand/Logo";
import { supabase } from "@/lib/supabase";

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

/* ── Sample question ── */
const SAMPLE_Q = {
  subject: "Biologie",
  text: "Welche Aussage zur DNA-Replikation ist FALSCH?",
  options: [
    { id: "a", text: "Die Replikation verläuft semikonservativ" },
    { id: "b", text: "Die DNA-Polymerase synthetisiert in 5'\u21923'-Richtung" },
    { id: "c", text: "Am Leitstrang erfolgt die Synthese kontinuierlich" },
    { id: "d", text: "Die Helikase spaltet die Wasserstoffbrücken" },
    { id: "e", text: "Okazaki-Fragmente entstehen am Leitstrang" },
  ],
  correctId: "e",
  explanation:
    "Okazaki-Fragmente entstehen am Folgestrang, nicht am Leitstrang. Am Leitstrang verläuft die Synthese kontinuierlich.",
};

function SampleQuestion({ onSignupClick }: { onSignupClick: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const q = SAMPLE_Q;
  const isCorrect = selected === q.correctId;

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 max-w-2xl mx-auto shadow-[var(--shadow-sm)]">
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
          Antwort pr\u00fcfen
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
              trackEvent("signup_click", { cta: "demo-question", source: "landing" });
              onSignupClick();
            }}
            className="btn-premium flex items-center justify-center gap-2.5 w-full py-4 text-sm font-semibold rounded-xl"
          >
            \u00dcber 5.000 weitere Fragen warten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

/* ── FAQ ── */
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

// ─────────────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  usePageMeta({
    title: "MedMaster \u2014 MedAT 2026 Vorbereitung | 5.000+ Fragen, KI-Lernsystem",
    description:
      "MedAT 2026 bestehen mit MedMaster: 5.000+ \u00dcbungsfragen, alle 4 Testbereiche (BMS, KFF, TV, SEK), adaptives KI-Lernsystem, Pr\u00fcfungssimulation. Kostenlos starten.",
    canonical: "https://medmaster.at",
    ogImage: "https://medmaster.at/og-image.png",
  });

  const { signInWithGoogle } = useAuth();
  const [googleError, setGoogleError] = useState("");
  const [userCount, setUserCount] = useState<number | null>(null);

  const deadline = useMemo(() => new Date("2026-03-31T23:59:59+02:00"), []);
  const countdown = useCountdown(deadline);

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from("leaderboard_snapshots")
      .select("*", { count: "exact", head: true })
      .then(({ count }) => {
        if (count && count >= 10) setUserCount(count);
      });
  }, []);

  useEffect(() => {
    startPageTimer();
    const cleanupScroll = initScrollDepthTracking();
    return () => {
      logPageTime("/");
      resetScrollDepth();
      cleanupScroll?.();
    };
  }, []);

  const handleGoogle = async () => {
    setGoogleError("");
    trackClick("lp-google-signup", "Landing Google CTA");
    trackEvent("signup_click", { method: "google", source: "landing" });
    trackConversion("signup_started", { method: "google", source: "landing" });
    const { error } = await signInWithGoogle();
    if (error) setGoogleError(error.message);
  };

  const handleEmailClick = () => {
    trackClick("lp-email-signup", "Landing Email CTA");
    trackEvent("signup_click", { method: "email", source: "landing" });
    trackConversion("signup_started", { method: "email", source: "landing" });
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
        <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
          <Logo variant="full" size={26} />
          <div className="flex items-center gap-6">
            <Link
              to="/medat-kff-ueben"
              className="text-sm text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors hidden sm:block"
            >
              KFF Demo
            </Link>
            <Link
              to="/medat-uebungsfragen"
              className="text-sm text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors hidden sm:block"
            >
              BMS Demo
            </Link>
            <Link
              to="/login"
              className="text-sm text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Anmelden
            </Link>
            <Link
              to="/login"
              onClick={handleEmailClick}
              className="btn-premium text-sm font-semibold px-5 py-2.5 rounded-xl hidden sm:inline-flex"
            >
              Kostenlos testen
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Urgency bar ─── */}
      {!countdown.expired && (
        <div className="text-center py-3 px-4" style={{ backgroundColor: NAVY }}>
          <p className="text-sm font-medium text-white/90 tracking-wide flex items-center justify-center gap-3">
            <span>Gratis-Zugang endet in</span>
            <span className="inline-flex gap-1.5 font-mono tabular-nums">
              <span className="bg-white/15 rounded px-1.5 py-0.5">{countdown.days}d</span>
              <span className="bg-white/15 rounded px-1.5 py-0.5">
                {String(countdown.hours).padStart(2, "0")}h
              </span>
              <span className="bg-white/15 rounded px-1.5 py-0.5">
                {String(countdown.minutes).padStart(2, "0")}m
              </span>
              <span className="bg-white/15 rounded px-1.5 py-0.5">
                {String(countdown.seconds).padStart(2, "0")}s
              </span>
            </span>
          </p>
        </div>
      )}

      <ReturningVisitorBanner />

      {/* ─── Hero ─── */}
      <section className="pt-24 pb-20 hero-orbs">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.p
            {...fade}
            className="text-sm font-semibold tracking-widest uppercase mb-6"
            style={{ color: NAVY }}
          >
            MedAT 2026 Vorbereitung
          </motion.p>
          <motion.h1
            {...fade}
            transition={{ ...fade.transition, delay: 0.1 }}
            className="text-6xl font-extrabold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-8"
          >
            17.000 Kandidaten.
            <br />
            1.900 Pl\u00e4tze.
            <br />
            <span className="text-[var(--accent)]">Bist du vorbereitet?</span>
          </motion.h1>
          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.2 }}
            className="text-xl text-[var(--text-secondary)] max-w-lg mx-auto mb-12 leading-relaxed"
          >
            Der Unterschied zwischen Zusage und Absage sind oft wenige Punkte. MedMaster gibt dir
            die Werkzeuge, die diesen Unterschied machen.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...fade}
            transition={{ ...fade.transition, delay: 0.3 }}
            className="flex flex-col items-center gap-4 mb-6"
          >
            <GoogleBtn
              label="Kostenlos ausprobieren"
              className="btn-premium rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            />
            <Link
              to="/login"
              onClick={handleEmailClick}
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-medium flex items-center gap-1.5"
            >
              Mit E-Mail anmelden
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
          {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}
          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.35 }}
            className="text-xs text-[var(--muted)]/60 tracking-wide"
          >
            Keine Kreditkarte &middot; Jederzeit k\u00fcndbar &middot; 1 Klick mit Google
          </motion.p>
        </div>
      </section>

      {/* ─── Numbers ─── */}
      <section className="py-20 border-y border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div {...fade} className="grid grid-cols-4 gap-8">
            {[
              { value: "5.000+", label: "BMS-Fragen", sub: "mit Erkl\u00e4rungen" },
              { value: "10.000+", label: "KFF-Aufgaben", sub: "algorithmisch generiert" },
              { value: "173", label: "Lerneinheiten", sub: "offizielle Stichwortliste" },
              { value: "4", label: "MedAT-Bereiche", sub: "vollst\u00e4ndig abgedeckt" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-4xl font-extrabold tracking-tight mb-2"
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

      {/* ─── Problem vs. Solution ─── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div {...fade} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Wie sich die meisten vorbereiten \u2014 und warum es nicht reicht
            </h2>
          </motion.div>
          <motion.div {...fade} className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[var(--border)] p-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--card)] flex items-center justify-center mb-5">
                <span className="text-lg text-[var(--muted)]">&times;</span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-4">
                Planlos lernen
              </h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <li>Lehrbuch von vorne bis hinten durchlesen</li>
                <li>50 Altfragen auswendig k\u00f6nnen</li>
                <li>Schw\u00e4chen ignorieren, St\u00e4rken wiederholen</li>
                <li>Am Pr\u00fcfungstag \u00fcberrascht werden</li>
              </ul>
            </div>
            <div
              className="rounded-2xl border-2 p-8"
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
                <li>5.000+ Fragen im echten MedAT-Format \u00fcben</li>
                <li>Schw\u00e4chen werden automatisch erkannt</li>
                <li>Gezielte Wiederholung statt Zufall</li>
                <li>Fortschritt pro Stichwort sichtbar</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4 MedAT-Bereiche ─── */}
      <section className="py-24 border-t border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div {...fade} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Alle 4 MedAT-Bereiche. Vollst\u00e4ndig.
            </h2>
            <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              Nicht &bdquo;ein bisschen von allem&ldquo; \u2014 jeder Testteil ist mit hunderten
              Aufgaben und Theorie abgedeckt.
            </p>
          </motion.div>
          <motion.div {...fade} className="grid grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                title: "BMS",
                sub: "Basiskenntnistest Medizinische Studien",
                items: [
                  "1.252 Biologie-Fragen",
                  "1.315 Chemie-Fragen",
                  "1.377 Physik-Fragen",
                  "1.077 Mathematik-Fragen",
                ],
                footer: "173 Lerneinheiten nach offizieller Stichwortliste",
                link: "/medat-uebungsfragen",
                linkLabel: "BMS testen",
              },
              {
                icon: Brain,
                title: "KFF",
                sub: "Kognitive F\u00e4higkeiten & Fertigkeiten",
                items: [
                  "Zahlenfolgen",
                  "Implikationen erkennen",
                  "Wortfl\u00fcssigkeit",
                  "Figuren zusammensetzen",
                  "Ged\u00e4chtnis & Merkf\u00e4higkeit",
                ],
                footer: "10.000+ algorithmisch generierte Aufgaben",
                link: "/medat-kff-ueben",
                linkLabel: "KFF testen",
              },
              {
                icon: FileText,
                title: "TV",
                sub: "Textverst\u00e4ndnis",
                items: ["10 vollst\u00e4ndige Textsets", "120 Verst\u00e4ndnisfragen"],
                footer: "Pr\u00fcfungsnahe Texte mit detaillierter Auswertung",
              },
              {
                icon: Heart,
                title: "SEK",
                sub: "Sozial-emotionale Kompetenzen",
                items: ["Emotionen erkennen", "Emotionen regulieren", "Soziales Entscheiden"],
                footer: "324 Aufgaben mit offiziellen MedAT-Instruktionen",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-[var(--border)] p-8 hover:shadow-[var(--shadow-sm)] transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `color-mix(in srgb, ${NAVY} 8%, transparent)` }}
                  >
                    <area.icon className="w-5.5 h-5.5" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)]">{area.sub}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)] mb-5">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--muted)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{area.footer}</p>
                {area.link && (
                  <Link
                    to={area.link}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4 transition-colors hover:opacity-80"
                    style={{ color: NAVY }}
                  >
                    {area.linkLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Features (Lernsystem) ─── */}
      <section className="py-24 border-t border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div {...fade} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Kein Fragenpool. Ein Lernsystem.
            </h2>
            <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              MedMaster erkennt, wo du Schw\u00e4chen hast, und trainiert gezielt diese Bereiche.
            </p>
          </motion.div>
          <motion.div {...fade} className="grid grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Theorie + Praxis",
                desc: "173 Lerneinheiten nach offizieller Stichwortliste \u2014 jedes Stichwort mit Erkl\u00e4rung, Merks\u00e4tzen und \u00dcbungsfragen.",
              },
              {
                icon: Zap,
                title: "Adaptiv, nicht zuf\u00e4llig",
                desc: "Was du falsch beantwortest, kommt wieder. Was du kannst, wird seltener. Dein Lernplan passt sich an.",
              },
              {
                icon: BarChart3,
                title: "Echte Pr\u00fcfungssimulation",
                desc: "Vollst\u00e4ndige Testsimulation unter echten Bedingungen \u2014 offizielle Zeitlimits pro Testteil.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[var(--border)] p-8 hover:shadow-[var(--shadow-sm)] transition-shadow"
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
      <section className="py-24 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div {...fade} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Eine Frage. Wei\u00dft du die Antwort?
            </h2>
            <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto">
              So sehen die Fragen in MedMaster aus. Originalformat, detaillierte Erkl\u00e4rung bei
              jeder Antwort.
            </p>
          </motion.div>
          <motion.div {...fade}>
            <SampleQuestion
              onSignupClick={() =>
                trackConversion("signup_started", { cta: "demo-question", source: "landing" })
              }
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Mid CTA ─── */}
      <section className="py-24 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            {...fade}
            className="rounded-2xl p-12 text-center"
            style={{
              background: `linear-gradient(135deg, color-mix(in srgb, ${NAVY} 4%, transparent), color-mix(in srgb, ${NAVY} 8%, transparent))`,
              border: `1px solid color-mix(in srgb, ${NAVY} 12%, transparent)`,
            }}
          >
            <Clock className="w-7 h-7 mx-auto mb-5" style={{ color: NAVY }} />
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              {countdown.expired ? (
                "Einmalig \u20ac29,90. Kein Abo."
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
                ? "Jederzeit k\u00fcndbar. Voller Zugang zu allen Fragen, Lerneinheiten und der Pr\u00fcfungssimulation."
                : "Wer jetzt startet, lernt bis April gratis \u2014 und hat einen Vorsprung gegen\u00fcber allen, die noch warten."}
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
              {" \u00b7 "}Keine Kreditkarte{" \u00b7 "}Jederzeit k\u00fcndbar
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Trust badges ─── */}
      <section className="py-16 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div {...fade} className="flex flex-wrap justify-center gap-3">
            {(
              [
                { icon: BookOpen, text: "5.000+ BMS-Fragen" },
                { icon: Zap, text: "10.000+ KFF-Aufgaben" },
                { icon: Star, text: "Alle 4 MedAT-Bereiche" },
                { icon: Shield, text: "Jederzeit k\u00fcndbar" },
                ...(userCount ? [{ icon: Users, text: `${userCount}+ lernen bereits` }] : []),
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
      <section className="py-24 border-t border-[var(--border)]/50">
        <div className="max-w-2xl mx-auto px-8">
          <motion.h2
            {...fade}
            className="text-3xl font-bold text-[var(--text-primary)] text-center mb-12"
          >
            H\u00e4ufige Fragen
          </motion.h2>
          <motion.div {...fade} className="divide-y divide-[var(--border)]">
            {[
              {
                q: "Ist das aktuell f\u00fcr den MedAT 2026?",
                a: "Ja, vollst\u00e4ndig. Alle Inhalte basieren auf der offiziellen Stichwortliste 2026 der Medizinischen Universit\u00e4ten. Die 173 Lerneinheiten decken jedes einzelne Stichwort ab \u2014 von Zellbiologie \u00fcber organische Chemie bis Stochastik. Die \u00fcber 5.000 BMS-Fragen sind im originalen MedAT-Format (A\u2013E, genau eine richtige Antwort) und werden laufend aktualisiert.",
              },
              {
                q: "Kann ich jederzeit k\u00fcndigen?",
                a: "Ja, ohne Wenn und Aber. Es gibt kein Abo, keine automatische Verl\u00e4ngerung und keine K\u00fcndigungsfrist. Du kannst deinen Account jederzeit in den Einstellungen l\u00f6schen \u2014 mit einem Klick. Bis 31. M\u00e4rz ist der volle Zugang komplett gratis, danach f\u00e4llt eine einmalige Zahlung von \u20ac29,90 an. Keine versteckten Kosten, kein Kleingedrucktes.",
              },
              {
                q: "Reicht MedMaster als Vorbereitung?",
                a: "MedMaster deckt alle 4 MedAT-Bereiche vollst\u00e4ndig ab: BMS (Biologie, Chemie, Physik, Mathematik), KFF (Zahlenfolgen, Implikationen, Wortfl\u00fcssigkeit, Figuren, Ged\u00e4chtnis), Textverst\u00e4ndnis und SEK. F\u00fcr den BMS-Teil empfehlen viele Kandidierende erg\u00e4nzend ein Biologie-Lehrbuch wie den Campbell f\u00fcr die Tiefe der Theorie. Die gesamte \u00dcbungs- und Simulationskomponente ist aber komplett abgedeckt \u2014 inklusive adaptivem Lernplan, der deine Schw\u00e4chen gezielt trainiert.",
              },
              {
                q: "Was passiert nach dem 31. M\u00e4rz?",
                a: "Ab 1. April kostet MedMaster einmalig \u20ac29,90. Das ist eine einmalige Zahlung \u2014 kein monatliches Abo, keine wiederkehrenden Kosten. Du beh\u00e4ltst vollen Zugang zu allen Fragen, Lerneinheiten, der Pr\u00fcfungssimulation und allen zuk\u00fcnftigen Updates bis zum MedAT 2026. Wer sich jetzt registriert, lernt bis dahin komplett gratis.",
              },
              {
                q: "Was unterscheidet MedMaster von anderen Anbietern?",
                a: "Drei Dinge: Erstens decken wir alle 4 MedAT-Bereiche ab, nicht nur BMS. Zweitens ist unser Lernsystem adaptiv \u2014 es erkennt deine Schw\u00e4chen und trainiert sie gezielt. Drittens kosten wir einmalig \u20ac29,90 statt monatlich \u20ac9\u201330. Und: \u00fcber 10.000 KFF-Aufgaben werden algorithmisch generiert, sodass du nie dieselbe Aufgabe zweimal bekommst.",
              },
            ].map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-28" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-5 leading-tight tracking-tight">
            Der MedAT wartet nicht.
            <br />
            Deine Konkurrenz auch nicht.
          </h2>
          <p className="text-white/60 text-base mb-10 max-w-md mx-auto leading-relaxed">
            5.000+ Fragen. Alle 4 Bereiche. Adaptives Lernsystem. Jederzeit k\u00fcndbar.
          </p>
          <GoogleBtn
            label="Jetzt kostenlos starten"
            className="bg-white text-[var(--text-primary)] rounded-2xl shadow-xl hover:bg-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
          />
          <p className="text-xs text-white/40 mt-5 tracking-wide">
            <Link to="/login" onClick={handleEmailClick} className="underline hover:text-white/60">
              Mit E-Mail anmelden
            </Link>
            {" \u00b7 "}Keine Kreditkarte n\u00f6tig
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-10 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-2">
              <Logo variant="icon" size={20} />
              <span className="text-sm font-semibold text-[var(--text-primary)]">MedMaster</span>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="space-y-2">
                <Link
                  to="/medat-uebungsfragen"
                  className="block text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  MedAT \u00dcbungsfragen
                </Link>
                <Link
                  to="/medat-kff-ueben"
                  className="block text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  KFF Training
                </Link>
                <Link
                  to="/medat-guide"
                  className="block text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  MedAT 2026 Guide
                </Link>
              </div>
              <div className="space-y-2">
                <Link
                  to="/faq"
                  className="block text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  H\u00e4ufige Fragen
                </Link>
                <Link
                  to="/blog"
                  className="block text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/medat-punkte-rechner"
                  className="block text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Punkterechner
                </Link>
              </div>
              <div className="space-y-2">
                <Link
                  to="/impressum"
                  className="block text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Impressum
                </Link>
                <Link
                  to="/datenschutz"
                  className="block text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Datenschutz
                </Link>
                <Link
                  to="/agb"
                  className="block text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  AGB
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
            &copy; 2026 MedMaster \u2014 Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>

      <ExitIntentCapture />
    </div>
  );
}
