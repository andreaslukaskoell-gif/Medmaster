import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Shield,
  CheckCircle,
  XCircle,
  Users,
  BadgeCheck,
  BookOpen,
  Puzzle,
  FileText,
  Heart,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { usePageMeta } from "@/hooks/usePageMeta";

const NAVY = "#1b3ea7";

function useCountdown(targetDate: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, expired: diff === 0 };
}

/* ── Screenshot wrapper ── */
function ScreenshotFrame({ src, alt }: { title?: string; src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-[var(--shadow-md)] bg-[var(--surface)]">
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
    </div>
  );
}

/* ── Collapsible FAQ item ── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-[var(--muted)] shrink-0 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="text-sm text-[var(--muted)] leading-relaxed pb-5 -mt-1">{a}</p>}
    </div>
  );
}

/* ── Interactive sample question ── */
const SAMPLE_QUESTIONS = [
  {
    subject: "Biologie",
    badge: "bg-emerald-100 text-emerald-700",
    text: "Welche Aussage zur DNA-Replikation ist FALSCH?",
    options: [
      { id: "a", text: "Die Replikation verläuft semikonservativ" },
      { id: "b", text: "Die DNA-Polymerase synthetisiert in 5'→3'-Richtung" },
      { id: "c", text: "Am Leitstrang erfolgt die Synthese kontinuierlich" },
      { id: "d", text: "Die Helikase spaltet die Wasserstoffbrücken zwischen den Basen" },
      { id: "e", text: "Okazaki-Fragmente entstehen am Leitstrang" },
    ],
    correctId: "e",
    explanation:
      "Okazaki-Fragmente entstehen am Folgestrang (Lagging Strand), nicht am Leitstrang. Am Leitstrang (Leading Strand) verläuft die Synthese kontinuierlich in Richtung der Replikationsgabel.",
  },
  {
    subject: "Chemie",
    badge: "bg-red-100 text-red-700",
    text: "Welche Bindungsart hält die Sekundärstruktur (α-Helix, β-Faltblatt) eines Proteins zusammen?",
    options: [
      { id: "a", text: "Ionenbindung" },
      { id: "b", text: "Peptidbindung" },
      { id: "c", text: "Wasserstoffbrückenbindung" },
      { id: "d", text: "Disulfidbrücke" },
      { id: "e", text: "Van-der-Waals-Kräfte" },
    ],
    correctId: "c",
    explanation:
      "Die Sekundärstruktur wird durch Wasserstoffbrückenbindungen zwischen C=O und N-H Gruppen des Peptidrückgrats stabilisiert. Peptidbindungen bilden die Primärstruktur, Disulfidbrücken die Tertiärstruktur.",
  },
  {
    subject: "Physik",
    badge: "bg-blue-100 text-blue-700",
    text: "Ein Körper wird mit 10 m/s senkrecht nach oben geworfen. Welche maximale Höhe erreicht er? (g = 10 m/s²)",
    options: [
      { id: "a", text: "2 m" },
      { id: "b", text: "5 m" },
      { id: "c", text: "10 m" },
      { id: "d", text: "15 m" },
      { id: "e", text: "20 m" },
    ],
    correctId: "b",
    explanation:
      "Mit v² = 2·g·h → h = v²/(2g) = 100/20 = 5 m. Am höchsten Punkt ist die Geschwindigkeit 0, die gesamte kinetische Energie wurde in potentielle Energie umgewandelt.",
  },
];

function SampleQuestion() {
  const [qIndex] = useState(() => Math.floor(Math.random() * SAMPLE_QUESTIONS.length));
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const q = SAMPLE_QUESTIONS[qIndex];
  const isCorrect = selected === q.correctId;

  return (
    <div className="bg-[var(--surface)] rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-sm)] border border-[var(--border)] max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${q.badge}`}>{q.subject}</span>
        <span className="text-xs text-[var(--muted)]">Beispielfrage</span>
      </div>
      <p className="text-base font-semibold text-[var(--text-primary)] leading-relaxed mb-5">
        {q.text}
      </p>
      <div className="space-y-2.5 mb-5">
        {q.options.map((opt) => {
          const letter = opt.id.toUpperCase();
          let style =
            "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40";
          if (submitted) {
            if (opt.id === q.correctId)
              style =
                "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300";
            else if (opt.id === selected)
              style = "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
            else style = "border-[var(--border)] text-[var(--muted)] opacity-60";
          } else if (opt.id === selected) {
            style = "border-[var(--accent)] bg-[var(--accent)]/5 text-[var(--text-primary)]";
          }
          return (
            <button
              key={opt.id}
              onClick={() => !submitted && setSelected(opt.id)}
              disabled={submitted}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl border text-sm text-left transition-colors cursor-pointer disabled:cursor-default ${style}`}
            >
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                  submitted && opt.id === q.correctId
                    ? "bg-emerald-500 text-white"
                    : submitted && opt.id === selected
                      ? "bg-red-400 text-white"
                      : opt.id === selected
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[var(--card)] text-[var(--muted)]"
                }`}
              >
                {submitted && opt.id === q.correctId
                  ? "✓"
                  : submitted && opt.id === selected
                    ? "✗"
                    : letter}
              </span>
              {opt.text}
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={() => selected && setSubmitted(true)}
          disabled={!selected}
          className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          style={{ backgroundColor: NAVY }}
        >
          Antwort prüfen
        </button>
      ) : (
        <div className="space-y-4">
          <div
            className={`rounded-xl p-4 text-sm leading-relaxed ${
              isCorrect
                ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                : "bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300"
            }`}
          >
            <p className="font-semibold mb-1">{isCorrect ? "Richtig!" : "Nicht ganz."}</p>
            <p>{q.explanation}</p>
          </div>
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer"
            style={{ backgroundColor: NAVY }}
          >
            Mehr Fragen wie diese — kostenlos testen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

/* ── Screenshot paths ── */
const SCREENSHOTS = {
  bmsQuiz: "/screenshots/fragen-trainer-bio.png",
  kffOverview: "/screenshots/kff-overview.png",
  simulation: "/screenshots/simulation.png",
};

/* ── Content depth table ── */
const contentDepth = [
  {
    icon: BookOpen,
    section: "BMS",
    subtitle: "Basiskenntnistest Medizinische Studien",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    items: [
      "1.113 Biologie-Fragen",
      "1.426 Chemie-Fragen",
      "1.316 Physik-Fragen",
      "494 Mathematik-Fragen",
    ],
    extra: "173 Lerneinheiten nach offizieller Stichwortliste 2026",
  },
  {
    icon: Puzzle,
    section: "KFF",
    subtitle: "Kognitive Fähigkeiten & Fertigkeiten",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    items: [
      "Zahlenfolgen (Generator)",
      "Implikationen erkennen",
      "Wortflüssigkeit",
      "Figuren zusammensetzen",
      "Gedächtnis & Merkfähigkeit",
    ],
    extra: "Unbegrenzte Aufgaben — algorithmisch generiert, nie Wiederholungen",
  },
  {
    icon: FileText,
    section: "TV",
    subtitle: "Textverständnis",
    color: "text-amber-600",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    items: ["10 vollständige Textsets", "120 Verständnisfragen"],
    extra: "Prüfungsnahe Texte mit detaillierter Auswertung",
  },
  {
    icon: Heart,
    section: "SEK",
    subtitle: "Sozial-emotionale Kompetenzen",
    color: "text-rose-600",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
    items: ["Emotionen erkennen", "Emotionen regulieren", "Soziales Entscheiden"],
    extra: "100 Aufgaben mit offiziellen MedAT-Instruktionen",
  },
];

const comparisonRows = [
  { feature: "BMS-Übungsfragen", medmaster: "4.300+", competitor: "500–2.000" },
  {
    feature: "KFF-Aufgaben",
    medmaster: "Unbegrenzt (Generator)",
    competitor: "Fester Pool (50–200)",
  },
  { feature: "Alle 4 MedAT-Bereiche", medmaster: true, competitor: "Meist nur BMS" },
  { feature: "Lerneinheiten (Theorie)", medmaster: "173", competitor: "Keine / extern" },
  { feature: "Prüfungssimulation", medmaster: true, competitor: "Teilweise" },
  { feature: "Adaptiver Lernplan", medmaster: true, competitor: false },
  { feature: "Preis", medmaster: "Einmalig €29,90", competitor: "€9–30 / Monat" },
  { feature: "Zugang", medmaster: "Lebenslang", competitor: "Solange du zahlst" },
];

export default function LandingPage() {
  usePageMeta({
    title: "MedAT 2026 Vorbereitung — 4.300+ Fragen",
    description:
      "MedAT 2026 Vorbereitung: 4.300+ BMS-Fragen, unbegrenzte KFF-Übungen, 10 TV-Textsets, 100 SEK-Aufgaben. Alle 4 MedAT-Bereiche in einer App. Einmalig €29,90.",
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

  /* Schema.org structured data is in index.html */

  const handleGoogle = async () => {
    setGoogleError("");
    const { error } = await signInWithGoogle();
    if (error) setGoogleError(error.message);
  };

  const GoogleBtn = ({ label, className = "" }: { label: string; className?: string }) => (
    <button
      onClick={handleGoogle}
      className={`inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-xl text-base shadow-[var(--shadow-sm)] transition-colors hover:opacity-90 cursor-pointer ${className}`}
      style={{ backgroundColor: NAVY }}
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

  return (
    <div className="min-h-screen bg-[var(--surface)] dark:bg-[var(--background)]">
      {/* ─── Nav ─── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-40 bg-[var(--surface)]/90 dark:bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
            MedMaster
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors px-3 py-2 rounded-xl hover:bg-[var(--card)]"
            >
              Anmelden
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl shadow-[var(--shadow-sm)] transition-colors hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Kostenlos testen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[var(--accent)]/5 via-[var(--surface)] to-[var(--accent)]/5 dark:from-[var(--accent)]/5 dark:via-background dark:to-[var(--accent)]/5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight mb-6 tracking-tight"
          >
            4.300 BMS-Fragen.
            <br />
            Unbegrenzte KFF-Übungen.
            <br />
            <span className="text-[var(--accent)]">Eine einmalige Zahlung.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Die vollständigste MedAT-Vorbereitung in einer App — BMS, KFF, TV und SEK. Dein Lernplan
            passt sich automatisch an deine Schwachstellen an.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-[var(--muted)] mb-8"
          >
            Aktuell komplett gratis. Ab 1. April: einmalig €29,90 — kein Abo.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
          >
            {[
              { icon: BadgeCheck, text: "MedAT 2026 Format" },
              { icon: Shield, text: "Einmalzahlung — kein Abo" },
              ...(userCount ? [{ icon: Users, text: `${userCount}+ Lernende` }] : []),
            ].map((badge) => (
              <div
                key={badge.text}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--muted)]"
              >
                <badge.icon className="w-4 h-4 text-emerald-500 shrink-0" />
                {badge.text}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GoogleBtn label="Kostenlos ausprobieren" />
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 bg-[var(--surface)] text-[var(--text-secondary)] font-semibold px-8 py-4 rounded-xl text-base shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)] transition-shadow border border-[var(--border)]"
            >
              Mit E-Mail anmelden
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}
        </div>
      </section>

      {/* ─── Product Preview ─── */}
      <section className="py-16 sm:py-24 bg-[var(--background)]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              So sieht deine MedAT-Vorbereitung aus
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Echte Übungsfragen im Original-MedAT-Format, adaptiver Lernplan und unbegrenzte
              KFF-Generatoren.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <ScreenshotFrame
                src={SCREENSHOTS.bmsQuiz}
                alt="BMS-Quiz mit 5 Antwortoptionen im MedAT-Format"
              />
              <p className="text-xs text-[var(--muted)] text-center mt-3">
                Echte BMS-Fragen mit 5 Optionen (A–E) im Original-MedAT-Format
              </p>
            </div>
            <div>
              <ScreenshotFrame
                src={SCREENSHOTS.kffOverview}
                alt="KFF-Übersicht mit Zahlenfolgen, Gedächtnis, Implikationen, Wortflüssigkeit und Figuren"
              />
              <p className="text-xs text-[var(--muted)] text-center mt-3">
                5 KFF-Untertests mit unbegrenzten, algorithmisch generierten Aufgaben
              </p>
            </div>
            <div>
              <ScreenshotFrame
                src={SCREENSHOTS.simulation}
                alt="Vollständige MedAT-Simulation mit Timer und offiziellen Zeitlimits"
              />
              <p className="text-xs text-[var(--muted)] text-center mt-3">
                Realistische Prüfungssimulation: 211 Fragen, 271 Minuten, echte Zeitlimits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content Depth: Was steckt drin? ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Alle 4 MedAT-Bereiche. Vollständig.
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Nicht „ein bisschen von allem" — jeder Testteil ist mit hunderten Aufgaben und Theorie
              abgedeckt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {contentDepth.map((section) => (
              <div
                key={section.section}
                className="bg-[var(--surface)] rounded-xl p-6 sm:p-8 border border-[var(--border)]"
              >
                <div className="flex items-baseline gap-2 mb-4">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {section.section}
                  </h3>
                  <span className="text-xs text-[var(--muted)]">{section.subtitle}</span>
                </div>
                <ul className="space-y-1.5 mb-3">
                  {section.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--muted)] shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--muted)] border-t border-[var(--border)] pt-3 mt-3">
                  {section.extra}
                </p>
              </div>
            ))}
          </div>

          {/* Total stat bar */}
          <div className="mt-8 bg-[var(--surface)] rounded-xl p-6 border border-[var(--border)]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { value: "4.349", label: "BMS-Fragen" },
                { value: "173", label: "Lerneinheiten" },
                { value: "∞", label: "KFF-Aufgaben" },
                { value: "220+", label: "SEK+TV Aufgaben" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-16 sm:py-24 bg-[var(--background)]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Nicht nur Fragen — ein Lernsystem
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              MedMaster merkt, wo du Schwächen hast, und stellt gezielt Aufgaben daraus zusammen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Adaptive Fragenauswahl",
                desc: "Themen, die du falsch beantwortest, kommen häufiger. Themen, die du beherrschst, seltener. Automatisch.",
              },
              {
                title: "Fortschritt pro Stichwort",
                desc: "Jedes der 173 offiziellen Stichwörter wird einzeln getrackt — du siehst genau, wo du stehst.",
              },
              {
                title: "KFF ohne Wiederholungen",
                desc: "Zahlenfolgen, Implikationen, Wortflüssigkeit und Figuren werden algorithmisch generiert. Kein Auswendiglernen möglich.",
              },
              {
                title: "Prüfungssimulation",
                desc: "Vollständiger MedAT unter echten Bedingungen — Timer, Auswertung, offizielle Zeitlimits pro Testteil.",
              },
              {
                title: "Detaillierte Erklärungen",
                desc: "Jede BMS-Frage hat eine ausführliche Erklärung — du lernst aus Fehlern, nicht nur durch Wiederholung.",
              },
              {
                title: "Theorie nach Stichwortliste",
                desc: "173 Lerneinheiten decken die offizielle BMS-Stichwortliste 2026 ab — mit Merksätzen, Diagrammen und Prüfungstipps.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
              >
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                  {f.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Try it: Interactive sample question ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Probier es aus — eine echte BMS-Frage
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
              So sehen die Fragen in MedMaster aus. 4.300+ davon warten auf dich — mit detaillierten
              Erklärungen bei jeder Antwort.
            </p>
          </div>
          <SampleQuestion />
        </div>
      </section>

      {/* ─── Comparison ─── */}
      <section className="py-16 sm:py-24 bg-[var(--background)]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Was du woanders bekommst — und was bei MedMaster
            </h2>
            <p className="text-sm text-[var(--muted)] max-w-lg mx-auto">
              Die meisten MedAT-Plattformen decken nur BMS ab und verkaufen monatliche Abos.
              MedMaster deckt alle 4 Bereiche ab — für eine einmalige Zahlung.
            </p>
          </div>
          <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] overflow-hidden">
            <div className="grid grid-cols-3 text-center text-sm font-semibold border-b border-[var(--border)]">
              <div className="p-4 text-[var(--muted)] text-left" />
              <div className="p-4" style={{ color: NAVY }}>
                MedMaster
              </div>
              <div className="p-4 text-[var(--muted)]">Typische Alternativen</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-center text-sm ${i < comparisonRows.length - 1 ? "border-b border-[var(--border)]" : ""}`}
              >
                <div className="p-4 text-[var(--text-primary)] text-left font-medium">
                  {row.feature}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.medmaster === true ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <span className="font-semibold text-[var(--text-primary)]">
                      {row.medmaster}
                    </span>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.competitor === true ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : row.competitor === false ? (
                    <XCircle className="w-5 h-5 text-red-400" />
                  ) : (
                    <span className="text-[var(--muted)]">{row.competitor}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mini FAQ ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-10">
            Häufige Fragen
          </h2>
          <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] divide-y divide-[var(--border)]">
            {[
              {
                q: "Ist MedMaster aktuell für den MedAT 2026?",
                a: "Ja. Alle Inhalte basieren auf der offiziellen Stichwortliste 2026. Die 173 Lerneinheiten und 4.300+ Fragen decken den gesamten BMS-Stoff ab. KFF-Aufgaben folgen dem aktuellen MedAT-Format.",
              },
              {
                q: "Was passiert nach dem 31. März?",
                a: "Ab 1. April kostet MedMaster einmalig €29,90. Das ist eine einmalige Zahlung — kein Abo. Du behältst lebenslangen Zugang zu allen Inhalten und zukünftigen Updates.",
              },
              {
                q: "Reicht MedMaster als alleinige Vorbereitung?",
                a: "MedMaster deckt alle 4 MedAT-Bereiche vollständig ab: 4.300+ BMS-Fragen, unbegrenzte KFF-Übungen, 10 TV-Textsets und 100 SEK-Aufgaben. Viele ergänzen mit einem Biologie-Lehrbuch für die Theorie — die Übungskomponente ist komplett.",
              },
              {
                q: "Brauche ich eine App?",
                a: "Nein. MedMaster läuft im Browser — auf Desktop, Tablet und Smartphone. Keine Installation nötig. Du kannst es als Web-App auf deinem Homescreen speichern.",
              },
            ].map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <p className="text-center mt-4">
            <Link to="/faq" className="text-sm text-[var(--accent)] hover:underline font-medium">
              Alle Fragen ansehen →
            </Link>
          </p>
        </div>
      </section>

      {/* ─── Pricing + Countdown ─── */}
      <section id="preise" className="py-16 sm:py-24 bg-[var(--background)]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[var(--surface)] rounded-xl p-8 sm:p-12 border border-[var(--border)] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--accent)]" />
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
              Jetzt komplett gratis testen
            </h2>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-extrabold text-[var(--accent)]">€0</span>
              <span className="text-[var(--muted)] line-through text-lg">€29,90</span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-6">
              Ab 1. April: einmalig €29,90 — kein Abo, keine versteckten Kosten, lebenslanger Zugang
            </p>

            {/* Countdown — only here */}
            {!countdown.expired && (
              <div className="mb-8">
                <p className="text-xs font-medium text-[var(--muted)] mb-3">
                  Gratis-Zugang endet in:
                </p>
                <div className="flex justify-center gap-2 sm:gap-3">
                  {[
                    { value: countdown.days, label: "Tage" },
                    { value: countdown.hours, label: "Std" },
                    { value: countdown.minutes, label: "Min" },
                    { value: countdown.seconds, label: "Sek" },
                  ].map((unit) => (
                    <div
                      key={unit.label}
                      className="flex flex-col items-center bg-[var(--card)] rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[3.5rem] sm:min-w-[4.5rem]"
                    >
                      <span className="text-xl sm:text-2xl font-bold tabular-nums text-[var(--text-primary)]">
                        {String(unit.value).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-[var(--muted)]">{unit.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <ul className="text-left max-w-sm mx-auto mb-8 space-y-2.5">
              {[
                "Voller Zugang zu allen 4 MedAT-Bereichen",
                "4.300+ BMS-Fragen mit Erklärungen",
                "Unbegrenzte KFF-Übungen",
                "173 Lerneinheiten + Prüfungssimulation",
                "Kein Abo — einmalige Zahlung, lebenslanger Zugang",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <GoogleBtn label="Gratis starten mit Google" className="w-full sm:w-auto" />
            {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}
            <p className="text-xs text-[var(--muted)]/70 mt-3">
              Oder{" "}
              <Link to="/login" className="underline hover:text-[var(--muted)]">
                mit E-Mail anmelden
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ─── SEO Internal Links ─── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-8">
            MedAT 2026 Vorbereitung
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                to: "/medat-uebungsfragen",
                label: "MedAT Übungsfragen",
                sub: "BMS + KFF kostenlos",
              },
              { to: "/medat-guide", label: "MedAT 2026 Guide", sub: "Alles zum Test" },
              { to: "/faq", label: "Häufige Fragen", sub: "FAQ zum MedAT" },
              { to: "/medat-biologie-fragen", label: "BMS Biologie", sub: "1.100+ Fragen" },
              { to: "/medat-chemie-fragen", label: "BMS Chemie", sub: "1.400+ Fragen" },
              { to: "/medat-physik-fragen", label: "BMS Physik", sub: "1.300+ Fragen" },
              { to: "/medat-mathematik-fragen", label: "BMS Mathematik", sub: "490+ Fragen" },
              { to: "/medat-kff-ueben", label: "KFF Training", sub: "Unbegrenzt üben" },
              { to: "/challenge", label: "Quiz Challenge", sub: "Teile dein Ergebnis" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex flex-col gap-1 p-4 rounded-xl bg-[var(--surface)] shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)] transition-shadow text-left"
              >
                <span className="text-sm font-medium text-[var(--text-primary)]">{link.label}</span>
                <span className="text-xs text-[var(--muted)]">{link.sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit für den MedAT 2026?</h2>
          <p className="text-white/80 text-sm mb-8 max-w-lg mx-auto">
            Teste MedMaster jetzt gratis — voller Zugang zu allen Fragen, Lerneinheiten und Übungen.
            Kein Abo, keine Kreditkarte.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-white text-[#1b3ea7] font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/90 transition-colors"
          >
            Kostenlos starten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 bg-[var(--accent)] dark:bg-[var(--accent)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-white/70" />
            <span className="text-sm font-semibold text-white/80">MedMaster</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <Link to="/medat-guide" className="hover:text-white/80 transition-colors">
              MedAT Guide
            </Link>
            <Link to="/faq" className="hover:text-white/80 transition-colors">
              FAQ
            </Link>
            <Link to="/medat-uebungsfragen" className="hover:text-white/80 transition-colors">
              Übungsfragen
            </Link>
            <Link to="/impressum" className="hover:text-white/80 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white/80 transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-white/80 transition-colors">
              AGB
            </Link>
          </div>
          <p className="text-xs text-white/50">© 2026 MedMaster. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
