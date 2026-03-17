import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
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
  Clock,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackClick, trackEvent } from "@/lib/analyticsTracker";
import {
  initScrollDepthTracking,
  resetScrollDepth,
  initSectionVisibility,
  startPageTimer,
  logPageTime,
  trackConversion,
} from "@/lib/growthTracking";
import { ExitIntentCapture } from "@/components/growth/ExitIntentCapture";
import { ReturningVisitorBanner } from "@/components/growth/ReturningVisitorBanner";
import { Logo } from "@/components/brand/Logo";
import { blogArticles } from "@/data/blogArticles";

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
    <div className="card-glass p-8 max-w-2xl mx-auto">
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
          className="btn-premium w-full py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
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
            className="btn-premium flex items-center justify-center gap-2 w-full py-3 text-sm"
          >
            5.000+ Fragen wie diese — jetzt gratis starten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

/* ── Daily question pool (one per weekday, cycles weekly) ── */
const DAILY_QUESTIONS = [
  {
    // Monday – Bio: Zellorganellen
    subject: "Biologie",
    badge: "bg-emerald-100 text-emerald-700",
    text: "Welches Zellorganell ist der Hauptort der ATP-Synthese in eukaryotischen Zellen?",
    options: [
      { id: "a", text: "Zellkern" },
      { id: "b", text: "Endoplasmatisches Retikulum" },
      { id: "c", text: "Mitochondrium" },
      { id: "d", text: "Golgi-Apparat" },
      { id: "e", text: "Lysosom" },
    ],
    correctId: "c",
    explanation:
      'Mitochondrien sind die "Kraftwerke der Zelle". In der inneren Mitochondrienmembran findet die oxidative Phosphorylierung statt, bei der der Gro\u00dfteil des ATPs gebildet wird (bis zu 34 ATP pro Glukose).',
  },
  {
    // Tuesday – Chemie: pH-Wert
    subject: "Chemie",
    badge: "bg-red-100 text-red-700",
    text: "Eine w\u00e4ssrige L\u00f6sung hat eine Hydroxidionen-Konzentration von 10\u207b\u00b3 mol/L. Welchen pH-Wert hat die L\u00f6sung bei 25\u00a0\u00b0C?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "7" },
      { id: "c", text: "9" },
      { id: "d", text: "11" },
      { id: "e", text: "14" },
    ],
    correctId: "d",
    explanation:
      "pOH = \u2212log(10\u207b\u00b3) = 3. Bei 25\u00a0\u00b0C gilt pH + pOH = 14, also pH = 14 \u2212 3 = 11. Die L\u00f6sung ist basisch, da die OH\u207b-Konzentration \u00fcber 10\u207b\u2077 mol/L liegt.",
  },
  {
    // Wednesday – Physik: Energieerhaltung
    subject: "Physik",
    badge: "bg-blue-100 text-blue-700",
    text: "Ein 2\u00a0kg schwerer Ball f\u00e4llt aus 5\u00a0m H\u00f6he. Welche kinetische Energie hat er unmittelbar vor dem Aufprall? (g\u00a0=\u00a010\u00a0m/s\u00b2, Luftwiderstand vernachl\u00e4ssigt)",
    options: [
      { id: "a", text: "10 J" },
      { id: "b", text: "20 J" },
      { id: "c", text: "50 J" },
      { id: "d", text: "100 J" },
      { id: "e", text: "200 J" },
    ],
    correctId: "d",
    explanation:
      "Nach dem Energieerhaltungssatz wird die potentielle Energie vollst\u00e4ndig in kinetische Energie umgewandelt: E_kin = E_pot = m\u00b7g\u00b7h = 2\u00a0kg \u00d7 10\u00a0m/s\u00b2 \u00d7 5\u00a0m = 100\u00a0J.",
  },
  {
    // Thursday – Mathe: Wahrscheinlichkeit
    subject: "Mathematik",
    badge: "bg-violet-100 text-violet-700",
    text: "Aus einem Kartenspiel mit 52 Karten werden nacheinander 2 Karten ohne Zur\u00fccklegen gezogen. Wie gro\u00df ist die Wahrscheinlichkeit, dass beide Karten Asse sind?",
    options: [
      { id: "a", text: "1/169" },
      { id: "b", text: "1/221" },
      { id: "c", text: "1/256" },
      { id: "d", text: "1/13" },
      { id: "e", text: "1/52" },
    ],
    correctId: "b",
    explanation:
      "P(1. Ass) = 4/52 = 1/13. P(2. Ass | 1. Ass) = 3/51 = 1/17. P(beide Asse) = 1/13 \u00d7 1/17 = 1/221. Ohne Zur\u00fccklegen \u00e4ndert sich die Wahrscheinlichkeit beim zweiten Zug.",
  },
  {
    // Friday/Weekend – Bio: Genetik
    subject: "Biologie",
    badge: "bg-emerald-100 text-emerald-700",
    text: "Ein Gen f\u00fcr Blutgruppe zeigt Kodominanz (I\u1d2c und I\u1d2e) und Dominanz \u00fcber i. Welche Blutgruppe hat ein Mensch mit dem Genotyp I\u1d2ci?",
    options: [
      { id: "a", text: "Blutgruppe A" },
      { id: "b", text: "Blutgruppe B" },
      { id: "c", text: "Blutgruppe AB" },
      { id: "d", text: "Blutgruppe 0" },
      { id: "e", text: "Nicht bestimmbar ohne weitere Informationen" },
    ],
    correctId: "a",
    explanation:
      "I\u1d2c ist dominant \u00fcber i, daher ist der Ph\u00e4notyp Blutgruppe A. Blutgruppe AB entsteht nur bei I\u1d2cI\u1d2e (Kodominanz), Blutgruppe 0 nur bei ii (homozygot rezessiv).",
  },
];

function getDailyQuestionIndex(): number {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  // Mon=0, Tue=1, Wed=2, Thu=3, Fri/Sat/Sun=4
  if (day === 0 || day === 5 || day === 6) return 4;
  return day - 1;
}

function DailyQuestion() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const q = DAILY_QUESTIONS[getDailyQuestionIndex()];
  const isCorrect = selected === q.correctId;

  return (
    <div className="card-glass p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${q.badge}`}>{q.subject}</span>
        <span className="text-xs text-[var(--muted)]">Tagesfrage</span>
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
                  ? "\u2713"
                  : submitted && opt.id === selected
                    ? "\u2717"
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
          className="btn-premium w-full py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Antwort pr\u00fcfen
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
            className="btn-premium flex items-center justify-center gap-2 w-full py-3 text-sm"
          >
            \u00dcber 5.000 weitere Fragen \u2014 Jetzt starten
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
      "1.252 Biologie-Fragen",
      "1.315 Chemie-Fragen",
      "1.377 Physik-Fragen",
      "1.077 Mathematik-Fragen",
    ],
    extra: "173 Lerneinheiten nach offizieller Stichwortliste 2026",
    demoLink: "/medat-uebungsfragen",
  },
  {
    icon: Puzzle,
    section: "KFF",
    subtitle: "Kognitive Fähigkeiten & Fertigkeiten",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    items: [
      "Zahlenfolgen",
      "Implikationen erkennen",
      "Wortflüssigkeit",
      "Figuren zusammensetzen",
      "Gedächtnis & Merkfähigkeit",
    ],
    extra: "10.000+ Aufgaben — algorithmisch generiert, nie Wiederholungen",
    demoLink: "/medat-kff-ueben",
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
    extra: "324 Aufgaben mit offiziellen MedAT-Instruktionen",
  },
];

const comparisonRows = [
  { feature: "BMS-Übungsfragen", medmaster: "5.000+", competitor: "500–2.000" },
  {
    feature: "KFF-Aufgaben",
    medmaster: "10.000+",
    competitor: "Fester Pool (50–200)",
  },
  { feature: "Alle 4 MedAT-Bereiche", medmaster: true, competitor: "Meist nur BMS" },
  { feature: "Lerneinheiten (Theorie)", medmaster: "173", competitor: "Keine / extern" },
  { feature: "Prüfungssimulation", medmaster: true, competitor: "Teilweise" },
  { feature: "Adaptiver Lernplan", medmaster: true, competitor: false },
  { feature: "Preis", medmaster: "Einmalig €29,90", competitor: "€9–30 / Monat" },
  { feature: "Zugang", medmaster: "Bis zum MedAT 2026", competitor: "Solange du zahlst" },
];

export default function LandingPage() {
  usePageMeta({
    title: "MedAT 2026 Vorbereitung — Bestehe sicher mit 5.000+ Fragen",
    description:
      "MedAT 2026 Vorbereitung: 5.000+ BMS-Fragen, 10.000+ KFF-Übungen, 10 TV-Textsets, 324 SEK-Aufgaben. Alle 4 MedAT-Bereiche in einer App. Einmalig €29,90.",
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
    trackClick("google-signup", "Google Signup CTA");
    trackEvent("signup_click", { method: "google" });
    trackConversion("signup_started", { method: "google", source: "landing" });
    const { error } = await signInWithGoogle();
    if (error) setGoogleError(error.message);
  };

  // Track CTA link clicks via delegation
  const handleLinkClick = (ctaId: string) => () => {
    trackClick(ctaId, ctaId);
    trackEvent("signup_click", { cta: ctaId });
    trackConversion("signup_started", { cta: ctaId, source: "landing" });
  };

  const [showBottomCta, setShowBottomCta] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const [glowPos, setGlowPos] = useState({ x: -9999, y: -9999 });

  const handleHeroMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleHeroMouseLeave = useCallback(() => {
    setGlowPos({ x: -9999, y: -9999 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPct =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setShowBottomCta(scrollPct > 0.3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Growth tracking: scroll depth, section visibility, time on page
  useEffect(() => {
    startPageTimer();
    const cleanupScroll = initScrollDepthTracking();
    // Delay section observer to let DOM render
    const timer = setTimeout(() => {
      initSectionVisibility([
        "lp-hero",
        "lp-preview",
        "lp-content",
        "lp-features",
        "lp-sample",
        "lp-comparison",
        "lp-social",
        "lp-faq",
        "lp-pricing",
        "lp-final-cta",
      ]);
    }, 500);
    return () => {
      logPageTime("/");
      resetScrollDepth();
      cleanupScroll?.();
      clearTimeout(timer);
    };
  }, []);

  const GoogleBtn = ({ label, className = "" }: { label: string; className?: string }) => (
    <button
      onClick={handleGoogle}
      className={`inline-flex items-center justify-center gap-3 font-semibold px-8 py-4 text-base cursor-pointer ${className}`}
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
    <div className="min-h-screen">
      {/* ─── Nav ─── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-40 bg-[var(--surface)]/90 dark:bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo variant="full" size={28} />
          <div className="flex items-center gap-3">
            <Link
              to="/medat-kff-ueben"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors px-3 py-2 rounded-xl hover:bg-[var(--card)]"
            >
              KFF Demo
            </Link>
            <Link
              to="/medat-uebungsfragen"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors px-3 py-2 rounded-xl hover:bg-[var(--card)]"
            >
              BMS Demo
            </Link>
            <Link to="/login" className="btn-glass text-sm font-medium px-3 py-2">
              Anmelden
            </Link>
            <Link
              to="/login"
              className="btn-premium inline-flex items-center gap-2 text-sm px-5 py-2.5"
            >
              Kostenlos testen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* ─── Returning Visitor Banner ─── */}
      <ReturningVisitorBanner />

      {/* ─── Urgency Banner ─── */}
      {!countdown.expired && (
        <div className="bg-emerald-50 dark:bg-emerald-900/30 text-center py-2 px-4">
          <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
            Noch {countdown.days} Tage gratis — ab 1. April: einmalig €29,90
          </p>
        </div>
      )}

      {/* ─── Hero ─── */}
      <section
        id="lp-hero"
        ref={heroRef}
        className="relative overflow-hidden hero-orbs"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        {/* Cursor glow — subtle depth effect, GPU-accelerated */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            style={{
              position: "absolute",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 70%)",
              transform: `translate(${glowPos.x - 100}px, ${glowPos.y - 100}px)`,
              transition: "transform 0.15s ease-out",
              willChange: "transform",
              pointerEvents: "none",
            }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-7xl font-extrabold text-[var(--text-primary)] leading-tight mb-6 tracking-tight"
          >
            Bestehe den MedAT 2026.
            <br />
            5.000+ BMS-Fragen. 10.000+ KFF-Übungen.
            <br />
            <span className="text-[var(--accent)]">Eine Plattform. Kein Abo.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Alle 4 MedAT-Bereiche in einer App — BMS, KFF, TV und SEK. Adaptiver Lernplan, der sich
            an deine Schwächen anpasst.
          </motion.p>
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-2.5 mb-10"
          >
            {(
              [
                {
                  icon: BookOpen,
                  text: "5.000+ Fragen",
                  cls: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-200 dark:ring-emerald-800/50",
                },
                {
                  icon: Puzzle,
                  text: "10.000+ KFF-Übungen",
                  cls: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-blue-800/50",
                },
                {
                  icon: GraduationCap,
                  text: "Alle 4 MedAT-Bereiche",
                  cls: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 ring-1 ring-violet-200 dark:ring-violet-800/50",
                },
                {
                  icon: BadgeCheck,
                  text: "Gratis bis 31. März",
                  cls: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 ring-1 ring-amber-200 dark:ring-amber-800/50",
                },
                ...(userCount
                  ? [
                      {
                        icon: Users,
                        text: `${userCount}+ Lernende`,
                        cls: "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 ring-1 ring-rose-200 dark:ring-rose-800/50",
                      },
                    ]
                  : [
                      {
                        icon: Shield,
                        text: "Kein Abo — einmalig €29,90",
                        cls: "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 ring-1 ring-rose-200 dark:ring-rose-800/50",
                      },
                    ]),
              ] as {
                icon: React.ComponentType<{ className?: string }>;
                text: string;
                cls: string;
              }[]
            ).map((badge) => (
              <span
                key={badge.text}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium ${badge.cls}`}
              >
                <badge.icon className="w-3.5 h-3.5 shrink-0" />
                {badge.text}
              </span>
            ))}
          </motion.div>

          {/* Live social proof ticker */}
          {userCount && userCount >= 10 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center justify-center gap-2 mb-8 text-xs text-[var(--text-secondary)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>
                Aktuell: {userCount}+ Lernende &middot; {(userCount * 150).toLocaleString("de-AT")}+
                Fragen beantwortet
              </span>
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-row gap-4 justify-center"
          >
            <GoogleBtn label="Kostenlos ausprobieren" className="btn-premium" />
            <Link
              to="/login"
              onClick={handleLinkClick("hero-email-login")}
              className="btn-glass inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 text-base"
            >
              Mit E-Mail anmelden
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}
        </div>
      </section>

      {/* ─── Product Preview ─── */}
      <section id="lp-preview" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              So sieht deine MedAT-Vorbereitung aus
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Echte Übungsfragen im Original-MedAT-Format, adaptiver Lernplan und über 10.000
              KFF-Aufgaben.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 stagger-children">
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
                5 KFF-Untertests mit 10.000+ algorithmisch generierten Aufgaben
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
      <section id="lp-content" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Alle 4 MedAT-Bereiche. Vollständig.
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Nicht „ein bisschen von allem" — jeder Testteil ist mit hunderten Aufgaben und Theorie
              abgedeckt.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 stagger-children">
            {contentDepth.map((section) => (
              <div key={section.section} className="card-glass p-8">
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
                <div className="flex items-center justify-between border-t border-[var(--border)] pt-3 mt-3">
                  <p className="text-xs text-[var(--muted)]">{section.extra}</p>
                  {section.demoLink && (
                    <Link
                      to={section.demoLink}
                      className="text-xs font-medium text-[var(--accent)] hover:underline shrink-0 ml-3"
                    >
                      Demo →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Total stat bar */}
          <div className="mt-8 card-glass p-6">
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { value: "5.000+", label: "BMS-Fragen" },
                { value: "173", label: "Lerneinheiten" },
                { value: "∞", label: "KFF-Aufgaben" },
                { value: "220+", label: "SEK+TV Aufgaben" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[var(--accent)]">{stat.value}</div>
                  <div className="text-xs text-[var(--muted)] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="lp-features" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Nicht nur Fragen — ein Lernsystem
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              MedMaster merkt, wo du Schwächen hast, und stellt gezielt Aufgaben daraus zusammen.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 stagger-children">
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
              <div key={f.title} className="card-glass p-6">
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                  {f.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Daily MedAT question ─── */}
      <section id="lp-daily" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Tägliche MedAT-Frage
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
              Jeden Tag eine neue Frage — teste dein Wissen
            </p>
          </div>
          <DailyQuestion />
        </div>
      </section>

      {/* ─── Try it: Interactive sample question ─── */}
      <section id="lp-sample" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Probier es aus — eine echte BMS-Frage
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
              So sehen die Fragen in MedMaster aus. 5.000+ davon warten auf dich — mit detaillierten
              Erklärungen bei jeder Antwort.
            </p>
          </div>
          <SampleQuestion />
        </div>
      </section>

      {/* ─── Comparison ─── */}
      <section id="lp-comparison" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Was du woanders bekommst — und was bei MedMaster
            </h2>
            <p className="text-sm text-[var(--muted)] max-w-lg mx-auto">
              Die meisten MedAT-Plattformen decken nur BMS ab und verkaufen monatliche Abos.
              MedMaster deckt alle 4 Bereiche ab — für eine einmalige Zahlung.
            </p>
          </div>
          <div className="card-glass overflow-hidden">
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

      {/* ─── Social Proof ─── */}
      <section id="lp-social" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Das sagen MedAT-Kandidierende
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5 stagger-children">
            {[
              {
                quote:
                  "Über 10.000 KFF-Aufgaben — man übt nie dieselbe Aufgabe zweimal. Das gibt's sonst nirgends.",
                name: "Anna K.",
                detail: "MedAT 2026 Kandidatin, Wien",
              },
              {
                quote:
                  "5.000+ BMS-Fragen mit Erklärungen — das ist mehr als jede andere Plattform. Und der adaptive Lernplan zeigt mir genau, wo ich noch schwach bin.",
                name: "Maximilian R.",
                detail: "MedAT 2026 Kandidat, Graz",
              },
              {
                quote:
                  "Einmalig €29,90 statt monatliches Abo? Bei der Menge an Inhalten ist das unschlagbar. Nutze es seit 3 Wochen täglich.",
                name: "Sophie L.",
                detail: "MedAT 2026 Kandidatin, Innsbruck",
              },
            ].map((t) => (
              <div key={t.name} className="card-glass p-6">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  &bdquo;{t.quote}&ldquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</p>
                  <p className="text-xs text-[var(--muted)]">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mini FAQ ─── */}
      <section id="lp-faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-10">
            Häufige Fragen
          </h2>
          <div className="card-glass divide-y divide-[var(--border)]">
            {[
              {
                q: "Ist MedMaster aktuell für den MedAT 2026?",
                a: "Ja. Alle Inhalte basieren auf der offiziellen Stichwortliste 2026. Die 173 Lerneinheiten und 5.000+ Fragen decken den gesamten BMS-Stoff ab. KFF-Aufgaben folgen dem aktuellen MedAT-Format.",
              },
              {
                q: "Was passiert nach dem 31. März?",
                a: "Ab 1. April kostet MedMaster einmalig €29,90. Das ist eine einmalige Zahlung — kein Abo. Du behältst vollen Zugang zu allen Inhalten und Updates bis zum MedAT 2026.",
              },
              {
                q: "Reicht MedMaster als alleinige Vorbereitung?",
                a: "MedMaster deckt alle 4 MedAT-Bereiche vollständig ab: 5.000+ BMS-Fragen, 10.000+ KFF-Übungen, 10 TV-Textsets und 324 SEK-Aufgaben. Viele ergänzen mit einem Biologie-Lehrbuch für die Theorie — die Übungskomponente ist komplett.",
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
      <section id="lp-pricing" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card-glass p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--accent)]" />
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
              Jetzt komplett gratis testen
            </h2>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-extrabold text-[var(--accent)]">€0</span>
              <span className="text-[var(--muted)] line-through text-lg">€29,90</span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-6">
              Ab 1. April: einmalig €29,90 — kein Abo, keine versteckten Kosten
            </p>

            {/* Countdown — only here */}
            {!countdown.expired && (
              <div className="mb-8">
                <p className="text-xs font-medium text-[var(--muted)] mb-3">
                  Gratis-Zugang endet in:
                </p>
                <div className="flex justify-center gap-3">
                  {[
                    { value: countdown.days, label: "Tage" },
                    { value: countdown.hours, label: "Std" },
                    { value: countdown.minutes, label: "Min" },
                    { value: countdown.seconds, label: "Sek" },
                  ].map((unit) => (
                    <div
                      key={unit.label}
                      className="flex flex-col items-center bg-[var(--card)] rounded-lg px-4 py-3 min-w-[4.5rem]"
                    >
                      <span className="text-2xl font-bold tabular-nums text-[var(--text-primary)]">
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
                "5.000+ BMS-Fragen mit Erklärungen",
                "10.000+ KFF-Übungen",
                "173 Lerneinheiten + Prüfungssimulation",
                "Kein Abo — einmalige Zahlung, voller Zugang",
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

            <GoogleBtn label="Gratis starten mit Google" className="btn-premium w-auto" />
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

      {/* ─── Neueste Artikel ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-3">
            Lerntipps f&uuml;r den MedAT 2026
          </h2>
          <p className="text-sm text-[var(--muted)] text-center mb-10 max-w-xl mx-auto">
            Evidenzbasierte Strategien, Fehleranalysen und Lernhacks f&uuml;r deine
            MedAT-Vorbereitung.
          </p>
          <div className="grid grid-cols-3 gap-6 stagger-children">
            {blogArticles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="card-glass flex flex-col gap-4 p-6 hover:shadow-[var(--shadow-md)] transition-shadow group"
              >
                <span
                  className="self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${NAVY} 10%, transparent)`,
                    color: NAVY,
                  }}
                >
                  {article.topic}
                </span>
                <h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTime} Min. Lesezeit
                  </span>
                  <span
                    className="text-xs font-semibold group-hover:gap-2 transition-all inline-flex items-center gap-1"
                    style={{ color: NAVY }}
                  >
                    Weiterlesen
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: NAVY }}
            >
              Alle Artikel ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SEO Internal Links ─── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-8">
            MedAT 2026 Vorbereitung
          </h2>
          <div className="grid grid-cols-4 gap-3 stagger-children">
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
              { to: "/medat-kff-ueben", label: "KFF Training", sub: "10.000+ Aufgaben" },
              { to: "/challenge", label: "Quiz Challenge", sub: "Teile dein Ergebnis" },
              { to: "/blog", label: "Lerntipps & Strategien", sub: "13+ Artikel" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="card-glass flex flex-col gap-1 p-4 hover:shadow-[var(--shadow-sm)] transition-shadow text-left"
              >
                <span className="text-sm font-medium text-[var(--text-primary)]">{link.label}</span>
                <span className="text-xs text-[var(--muted)]">{link.sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section id="lp-final-cta" className="py-24" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit für den MedAT 2026?</h2>
          <p className="text-white/80 text-sm mb-8 max-w-lg mx-auto">
            Teste MedMaster jetzt gratis — voller Zugang zu allen Fragen, Lerneinheiten und Übungen.
            Kein Abo, keine Kreditkarte.
          </p>
          <Link
            to="/login"
            onClick={handleLinkClick("footer-cta")}
            className="inline-flex items-center gap-2 bg-white text-[#1b3ea7] font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/90 transition-colors"
          >
            Kostenlos starten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo variant="icon" size={24} />
            <span className="text-sm font-semibold text-[var(--text-primary)]">MedMaster</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--muted)]">
            <Link to="/medat-guide" className="hover:text-[var(--text-primary)] transition-colors">
              MedAT Guide
            </Link>
            <Link to="/faq" className="hover:text-[var(--text-primary)] transition-colors">
              FAQ
            </Link>
            <Link
              to="/medat-uebungsfragen"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Übungsfragen
            </Link>
            <Link to="/blog" className="hover:text-[var(--text-primary)] transition-colors">
              Lerntipps
            </Link>
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
          <p className="text-xs text-[var(--muted)]">© 2026 MedMaster. Alle Rechte vorbehalten.</p>
        </div>
      </footer>

      {/* ─── Exit Intent Lead Capture ─── */}
      <ExitIntentCapture />

      {/* ─── Sticky bottom CTA ─── */}
      {showBottomCta && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--surface)]/95 backdrop-blur-sm border-t border-[var(--border)] shadow-[var(--shadow-md)]">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Bereit für den MedAT 2026?
              </p>
              <p className="text-xs text-[var(--muted)]">
                5.000+ Fragen · Alle 4 Bereiche · Jetzt gratis
              </p>
            </div>
            <Link
              to="/login"
              onClick={handleLinkClick("sticky-bottom-cta")}
              className="btn-premium inline-flex items-center gap-2 text-sm px-6 py-2.5"
            >
              Kostenlos starten
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
