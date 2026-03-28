/* eslint-disable react-hooks/static-components */
import { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Zap,
  BarChart3,
  Clock,
  Users,
  Brain,
  FileText,
  Heart,
  Check,
  Sparkles,
} from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BlurFade } from "@/components/ui/blur-fade";
import { useAuth } from "@/hooks/useAuth";
import { useViewportMode } from "@/hooks/useViewportMode";
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

/* ── Sticky CTA hook ── */
function useShowStickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return show;
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
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-10 max-w-2xl mx-auto shadow-[var(--shadow-sm)]">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent)]/8 text-[var(--accent)]">
          {q.subject}
        </span>
        <span className="text-xs text-[var(--muted)] tracking-wide">1 von tausenden</span>
      </div>
      <p className="text-base sm:text-lg font-semibold text-[var(--text-primary)] leading-relaxed mb-5 sm:mb-7">
        {q.text}
      </p>
      <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-7">
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
              className={`flex items-center gap-3 sm:gap-4 w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border text-sm text-left transition-all duration-200 cursor-pointer disabled:cursor-default ${ring} ${bg} ${text}`}
            >
              <span
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${letterStyle}`}
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
          className="btn-premium w-full py-3.5 sm:py-4 text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed rounded-xl"
        >
          Antwort prüfen
        </button>
      ) : (
        <div className="space-y-4 sm:space-y-5">
          <div
            className={`rounded-xl p-4 sm:p-5 text-sm leading-relaxed ${
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
            className="btn-premium flex items-center justify-center gap-2.5 w-full py-3.5 sm:py-4 text-sm font-semibold rounded-xl"
          >
            Tausende weitere Fragen warten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

/* ── FAQ ── */
function FAQItem({ q, a, isMobile }: { q: string; a: string; isMobile: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left cursor-pointer"
      >
        <span className="text-sm sm:text-base font-semibold text-[var(--text-primary)] leading-relaxed">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-[var(--muted)] shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className={`text-sm text-[var(--muted)] leading-relaxed pb-5 sm:pb-6 -mt-2 ${isMobile ? "pr-4" : "pr-8 sm:pr-12"}`}>
          {a}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  usePageMeta({
    title: "MedMaster — MedAT 2026 Vorbereitung | Tausende Fragen, Adaptives Lernsystem",
    description:
      "MedAT 2026 bestehen mit MedMaster: Tausende Übungsfragen, alle 4 Testbereiche (BMS, KFF, TV, SEK), adaptives Lernsystem, Prüfungssimulation. Kostenlos starten.",
    canonical: "https://medmaster.at",
    ogImage: "https://medmaster.at/og-image.png",
  });

  const { signInWithGoogle } = useAuth();
  const { isMobile } = useViewportMode();
  const [googleError, setGoogleError] = useState("");
  const [userCount, setUserCount] = useState<number | null>(null);
  const showStickyCTA = useShowStickyCTA();

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

  const handleGoogle = useCallback(async () => {
    setGoogleError("");
    trackClick("lp-google-signup", "Landing Google CTA");
    trackEvent("signup_click", { method: "google", source: "landing" });
    trackConversion("signup_started", { method: "google", source: "landing" });
    const { error } = await signInWithGoogle();
    if (error) setGoogleError(error.message);
  }, [signInWithGoogle]);

  const handleEmailClick = useCallback(() => {
    trackClick("lp-email-signup", "Landing Email CTA");
    trackEvent("signup_click", { method: "email", source: "landing" });
    trackConversion("signup_started", { method: "email", source: "landing" });
  }, []);

  const GoogleBtn = ({ label, className = "" }: { label: string; className?: string }) => (
    <button
      onClick={handleGoogle}
      className={`inline-flex items-center justify-center gap-3 font-semibold ${isMobile ? "px-5" : "px-8 sm:px-10"} py-4 text-base cursor-pointer transition-all duration-200 ${className}`}
    >
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
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
      {/* ─── Header + Urgency bar (sticky together) ─── */}
      <div className="sticky top-0 z-40">
        <header className="bg-[var(--surface)]/80 backdrop-blur-2xl border-b border-[var(--border)]/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
            <Logo variant="full" size={24} />
            <div className="flex items-center gap-3 sm:gap-6">
              <Link
                to="/medat-kff-ueben"
                className="text-sm text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors hidden md:block"
              >
                KFF Demo
              </Link>
              <Link
                to="/medat-uebungsfragen"
                className="text-sm text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors hidden md:block"
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
                className="btn-premium text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl inline-flex items-center gap-1.5"
              >
                <span className="hidden sm:inline">Kostenlos starten</span>
                <span className="sm:hidden">Starten</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </header>

        {/* ─── Urgency bar (sticks below header) ─── */}
        {!countdown.expired && (
          <div className="text-center py-2 sm:py-3 px-4" style={{ backgroundColor: NAVY }}>
            <p className="text-xs sm:text-sm font-medium text-white/90 tracking-wide flex items-center justify-center gap-2 sm:gap-3">
              <span>Gratis-Zugang endet in</span>
              <span className="inline-flex gap-1 sm:gap-1.5 font-mono tabular-nums text-xs sm:text-sm">
                <span className="bg-white/15 rounded px-1.5 py-0.5">{countdown.days}d</span>
                <span className="bg-white/15 rounded px-1.5 py-0.5">
                  {String(countdown.hours).padStart(2, "0")}h
                </span>
                <span className="bg-white/15 rounded px-1.5 py-0.5">
                  {String(countdown.minutes).padStart(2, "0")}m
                </span>
                <span className="bg-white/15 rounded px-1.5 py-0.5 hidden sm:inline">
                  {String(countdown.seconds).padStart(2, "0")}s
                </span>
              </span>
            </p>
          </div>
        )}
      </div>

      <ReturningVisitorBanner />

      {/* ─── Hero ─── */}
      <section className="pt-12 sm:pt-28 pb-10 sm:pb-24 hero-orbs relative overflow-hidden">
        {/* Subtle radial glow behind hero */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, color-mix(in srgb, ${NAVY} 6%, transparent) 0%, transparent 70%)`,
          }}
        />

        <div className={`max-w-3xl mx-auto ${isMobile ? "px-4" : "px-5 sm:px-8"} text-center relative`}>
          {/* Pill badge */}
          <BlurFade delay={0} className="mb-5 sm:mb-7">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase border"
              style={{
                color: NAVY,
                borderColor: `color-mix(in srgb, ${NAVY} 20%, transparent)`,
                background: `color-mix(in srgb, ${NAVY} 5%, transparent)`,
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              MedAT 2026 Vorbereitung
            </span>
          </BlurFade>

          {/* Headline with staggered word animation */}
          <TextAnimate
            as="h1"
            animation="blurInUp"
            by="word"
            delay={0.15}
            className={`${isMobile ? "text-2xl" : "text-3xl sm:text-5xl lg:text-6xl"} font-extrabold text-[var(--text-primary)] leading-[1.15] sm:leading-[1.1] tracking-tight mb-5 sm:mb-8 justify-center`}
          >
            {"17.000 Kandidaten. 1.900 Plätze."}
          </TextAnimate>

          <BlurFade delay={0.4} className="mb-5 sm:mb-8">
            <span className={`${isMobile ? "text-2xl" : "text-3xl sm:text-5xl lg:text-6xl"} font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight`}>
              <AnimatedGradientText colors={["#1b3ea7", "#2563eb", "#7c3aed", "#2563eb", "#1b3ea7"]}>
                Bist du vorbereitet?
              </AnimatedGradientText>
            </span>
          </BlurFade>

          <BlurFade delay={0.55}>
            <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-lg mx-auto mb-8 sm:mb-12 leading-relaxed">
              Der Unterschied zwischen Zusage und Absage ist oft nur wenige Punkte. MedMaster gibt dir
              die Werkzeuge, die diesen Unterschied machen.
            </p>
          </BlurFade>

          {/* CTA */}
          <BlurFade delay={0.7} className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <ShimmerButton
              onClick={handleGoogle}
              className={`${isMobile ? "px-5" : "px-8 sm:px-10"} py-4 text-base shadow-xl w-full sm:w-auto`}
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#fff" fillOpacity="0.9" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#fff" fillOpacity="0.7" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#fff" fillOpacity="0.6" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#fff" fillOpacity="0.8" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Kostenlos ausprobieren
            </ShimmerButton>
            <Link
              to="/login"
              onClick={handleEmailClick}
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-medium flex items-center gap-1.5"
            >
              Mit E-Mail anmelden
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </BlurFade>
          {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}
          <BlurFade delay={0.8}>
            <p className="text-xs text-[var(--muted)]/60 tracking-wide">
              Keine Kreditkarte &middot; Kein Abo &middot; 1 Klick mit Google
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ─── Numbers ─── */}
      <section className="py-10 sm:py-20 border-y border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8" data-mobile-keep>
            {([
              { counter: 4000, suffix: "+", label: "BMS-Fragen", sub: "mit detaillierten Erklärungen" },
              { text: "∞", label: "KFF-Aufgaben", sub: "algorithmisch generiert" },
              { counter: 100, suffix: "%", label: "Stichwörter abgedeckt", sub: "offizielle Stichwortliste" },
              { text: "4 / 4", label: "MedAT-Bereiche", sub: "vollständig abgedeckt" },
            ] as const).map((s, i) => (
              <BlurFade key={s.label} delay={0.1 + i * 0.08}>
                <div className="text-center">
                  <div
                    className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-1 sm:mb-2"
                    style={{ color: NAVY }}
                  >
                    {"counter" in s ? (
                      <AnimatedCounter value={s.counter} suffix={s.suffix} duration={1200} />
                    ) : (
                      s.text
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-0.5">
                    {s.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[var(--muted)]">{s.sub}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust strip (mobile: compact badges, desktop: inline) ─── */}
      <section className="py-6 sm:py-8">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { icon: Check, text: "Alle 4 MedAT-Bereiche" },
              { icon: Check, text: "Offizielle Stichwortliste" },
              { icon: Check, text: "Adaptives Lernsystem" },
              ...(userCount ? [{ icon: Users, text: `${userCount}+ lernen bereits` }] : []),
            ].map((b, i) => (
              <BlurFade key={b.text} delay={0.05 + i * 0.06}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[var(--text-secondary)] bg-[var(--card)] border border-[var(--border)]">
                  <b.icon className="w-3.5 h-3.5 text-emerald-500" />
                  {b.text}
                </span>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problem vs. Solution ─── */}
      <section className="py-12 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <BlurFade className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
              Wie sich die meisten vorbereiten — und warum es nicht reicht
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <BlurFade delay={0.1}>
              <div className="rounded-2xl border border-[var(--border)] p-6 sm:p-8 h-full">
                <div className="w-10 h-10 rounded-xl bg-[var(--card)] flex items-center justify-center mb-4 sm:mb-5">
                  <span className="text-lg text-[var(--muted)]">&times;</span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
                  Planlos lernen
                </h3>
                <ul className="space-y-2.5 sm:space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <li>Lehrbuch von vorne bis hinten durchlesen</li>
                  <li>50 Altfragen auswendig können</li>
                  <li>Schwächen ignorieren, Stärken wiederholen</li>
                  <li>Am Prüfungstag überrascht werden</li>
                </ul>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div
                className="rounded-2xl border-2 p-6 sm:p-8 h-full relative overflow-hidden"
                style={{ borderColor: `color-mix(in srgb, ${NAVY} 30%, transparent)` }}
              >
                {/* Subtle accent glow */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, color-mix(in srgb, ${NAVY} 8%, transparent) 0%, transparent 70%)` }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 sm:mb-5 relative"
                  style={{ backgroundColor: `color-mix(in srgb, ${NAVY} 10%, transparent)` }}
                >
                  <span className="text-lg" style={{ color: NAVY }}>
                    &rarr;
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 sm:mb-4 relative">
                  Systematisch mit MedMaster
                </h3>
                <ul className="space-y-2.5 sm:space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed relative">
                  <li>Tausende Fragen im echten MedAT-Format üben</li>
                  <li>Schwächen werden automatisch erkannt</li>
                  <li>Gezielte Wiederholung statt Zufall</li>
                  <li>Fortschritt pro Stichwort sichtbar</li>
                </ul>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ─── 4 MedAT-Bereiche ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
              Alle 4 MedAT-Bereiche. Vollständig.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              Nicht &bdquo;ein bisschen von allem&ldquo; — jeder Testteil ist mit hunderten
              Aufgaben, Theorie und Erklärungen abgedeckt.
            </p>
          </motion.div>
          <motion.div {...fade} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: BookOpen,
                title: "BMS",
                sub: "Basiskenntnistest Medizinische Studien",
                items: [
                  "Biologie — umfassender Fragenpool",
                  "Chemie — organisch & anorganisch",
                  "Physik — Mechanik bis Optik",
                  "Mathematik — Algebra bis Stochastik",
                ],
                footer: "Jedes offizielle Stichwort mit Lerneinheit abgedeckt",
                link: "/medat-uebungsfragen",
                linkLabel: "BMS testen",
              },
              {
                icon: Brain,
                title: "KFF",
                sub: "Kognitive Fähigkeiten & Fertigkeiten",
                items: [
                  "Zahlenfolgen",
                  "Implikationen erkennen",
                  "Wortflüssigkeit",
                  "Figuren zusammensetzen",
                  "Gedächtnis & Merkfähigkeit",
                ],
                footer: "Unbegrenzt viele algorithmisch generierte Aufgaben",
                link: "/medat-kff-ueben",
                linkLabel: "KFF testen",
              },
              {
                icon: FileText,
                title: "TV",
                sub: "Textverständnis",
                items: ["Prüfungsnahe Textsets", "Hunderte Verständnisfragen"],
                footer: "Prüfungsnahe Texte mit detaillierter Auswertung",
              },
              {
                icon: Heart,
                title: "SEK",
                sub: "Sozial-emotionale Kompetenzen",
                items: ["Emotionen erkennen", "Emotionen regulieren", "Soziales Entscheiden"],
                footer: "Hunderte Aufgaben mit offiziellen MedAT-Instruktionen",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-[var(--border)] p-5 sm:p-8 hover:shadow-[var(--shadow-sm)] transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `color-mix(in srgb, ${NAVY} 8%, transparent)` }}
                  >
                    <area.icon className="w-5 h-5" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)]">{area.sub}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 sm:space-y-2 text-sm text-[var(--text-secondary)] mb-4 sm:mb-5">
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
                    className="inline-flex items-center gap-1.5 text-sm font-semibold mt-3 sm:mt-4 transition-colors hover:opacity-80"
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
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
              Kein Fragenpool. Ein Lernsystem.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              MedMaster erkennt, wo du Schwächen hast, und trainiert gezielt diese Bereiche.
            </p>
          </motion.div>
          <motion.div {...fade} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: BookOpen,
                title: "Theorie + Praxis",
                desc: "Lerneinheiten zu jedem offiziellen Stichwort — mit Erklärung, Merksätzen und Übungsfragen.",
              },
              {
                icon: Zap,
                title: "Adaptiv, nicht zufällig",
                desc: "Was du falsch beantwortest, kommt wieder. Was du kannst, wird seltener. Dein Lernplan passt sich an.",
              },
              {
                icon: BarChart3,
                title: "Echte Prüfungssimulation",
                desc: "Vollständige Testsimulation unter echten Bedingungen — offizielle Zeitlimits pro Testteil.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[var(--border)] p-5 sm:p-8 hover:shadow-[var(--shadow-sm)] transition-shadow"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                  style={{ backgroundColor: `color-mix(in srgb, ${NAVY} 8%, transparent)` }}
                >
                  <f.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: NAVY }} />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Mid CTA ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            {...fade}
            className={`rounded-2xl ${isMobile ? "p-5" : "p-8 sm:p-12"} text-center`}
            style={{
              background: `linear-gradient(135deg, color-mix(in srgb, ${NAVY} 4%, transparent), color-mix(in srgb, ${NAVY} 8%, transparent))`,
              border: `1px solid color-mix(in srgb, ${NAVY} 12%, transparent)`,
            }}
          >
            <Clock className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-4 sm:mb-5" style={{ color: NAVY }} />
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">
              {countdown.expired ? (
                "Einmalig €29,90. Kein Abo."
              ) : (
                <>
                  Gratis-Zugang endet in{" "}
                  <span className={`font-mono tabular-nums ${isMobile ? "text-base" : "text-lg sm:text-2xl"}`}>
                    {countdown.days}d {String(countdown.hours).padStart(2, "0")}h{" "}
                    {String(countdown.minutes).padStart(2, "0")}m
                  </span>
                </>
              )}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
              {countdown.expired
                ? "Kein Abo. Voller Zugang zu allen Fragen, Lerneinheiten und der Prüfungssimulation."
                : "Wer jetzt startet, lernt bis April gratis — und hat einen Vorsprung gegenüber allen, die noch warten."}
            </p>
            <ShimmerButton
              onClick={handleGoogle}
              className="px-8 sm:px-10 py-4 text-base shadow-xl w-full sm:w-auto"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#fff" fillOpacity="0.9" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#fff" fillOpacity="0.7" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#fff" fillOpacity="0.6" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#fff" fillOpacity="0.8" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Kostenlos starten
            </ShimmerButton>
            {googleError && <p className="text-sm text-red-500 mt-3">{googleError}</p>}
            <p className="text-xs text-[var(--muted)] mt-4">
              <Link
                to="/login"
                onClick={handleEmailClick}
                className="underline hover:text-[var(--text-secondary)]"
              >
                Mit E-Mail anmelden
              </Link>
              {" · "}Keine Kreditkarte{" · "}Kein Abo
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Demo question ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
              Eine Frage. Weißt du die Antwort?
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md mx-auto">
              So sehen die Fragen in MedMaster aus. Originalformat, detaillierte Erklärung bei jeder
              Antwort.
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

      {/* ─── Comparison ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
              Warum MedMaster?
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              MedAT-Vorbereitung muss nicht teuer sein. Vergleich mit typischen Anbietern am Markt.
            </p>
          </motion.div>
          <motion.div {...fade}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="py-3 pr-4 text-left font-semibold text-[var(--text-secondary)]" />
                    <th className="py-3 px-4 text-center font-bold text-teal-700 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-900/15 rounded-t-xl">
                      MedMaster
                    </th>
                    <th className="py-3 px-4 text-center font-medium text-[var(--text-secondary)]">
                      Typische Anbieter
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-primary)]">
                  {[
                    ["Preis", "Einmalig €29,90", "€69 – €599+"],
                    ["Abo / Verlängerung", "Nein", "Häufig monatlich"],
                    ["BMS-Fragen", "Tausende", "Deutlich weniger"],
                    ["KFF-Aufgaben", "Unbegrenzt (generiert)", "Begrenzter Pool"],
                    ["Prüfungssimulation", "Inklusive, unbegrenzt", "Extra kostenpflichtig"],
                    ["Adaptives Lernsystem", "Ja", "Nicht verfügbar"],
                    ["Alle 4 MedAT-Bereiche", "Ja", "Oft nur BMS"],
                    ["Zugang bis MedAT", "Ja", "Saisonabhängig"],
                  ].map(([label, medmaster, others]) => (
                    <tr key={label} className="border-b border-[var(--border)]/50">
                      <td className="py-2.5 pr-4 font-medium">{label}</td>
                      <td className="py-2.5 px-4 text-center font-semibold text-teal-700 dark:text-teal-400 bg-teal-50/30 dark:bg-teal-900/10">
                        {medmaster}
                      </td>
                      <td className="py-2.5 px-4 text-center text-[var(--text-secondary)]">
                        {others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--muted)] mt-4 text-center">
              Vergleich basierend auf öffentlich sichtbaren Preisen und Leistungen führender
              MedAT-Vorbereitungsplattformen (Stand März 2026). Keine spezifischen Anbieter genannt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 sm:py-24 border-t border-[var(--border)]/50">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <motion.h2
            {...fade}
            className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] text-center mb-8 sm:mb-12"
          >
            Häufige Fragen
          </motion.h2>
          <motion.div {...fade} className="divide-y divide-[var(--border)]">
            {[
              {
                q: "Ist das aktuell für den MedAT 2026?",
                a: "Ja, vollständig. Alle Inhalte basieren auf der offiziellen Stichwortliste 2026 der Medizinischen Universitäten. Unsere Lerneinheiten decken jedes einzelne Stichwort ab — von Zellbiologie über organische Chemie bis Stochastik. Sämtliche BMS-Fragen sind im originalen MedAT-Format (A–E, genau eine richtige Antwort) und werden laufend aktualisiert.",
              },
              {
                q: "Kann ich jederzeit kündigen?",
                a: "Ja, ohne Wenn und Aber. Es gibt kein Abo, keine automatische Verlängerung und keine Kündigungsfrist. Du kannst deinen Account jederzeit in den Einstellungen löschen — mit einem Klick. Bis 31. März ist der volle Zugang komplett gratis, danach fällt eine einmalige Zahlung von €29,90 an. Keine versteckten Kosten, kein Kleingedrucktes.",
              },
              {
                q: "Reicht MedMaster als Vorbereitung?",
                a: "MedMaster deckt alle 4 MedAT-Bereiche vollständig ab: BMS (Biologie, Chemie, Physik, Mathematik), KFF (Zahlenfolgen, Implikationen, Wortflüssigkeit, Figuren, Gedächtnis), Textverständnis und SEK. Für den BMS-Teil empfehlen viele Kandidierende ergänzend ein Biologie-Lehrbuch wie den Campbell für die Tiefe der Theorie. Die gesamte Übungs- und Simulationskomponente ist aber komplett abgedeckt — inklusive adaptivem Lernplan, der deine Schwächen gezielt trainiert.",
              },
              {
                q: "Was passiert nach dem 31. März?",
                a: "Ab 1. April kostet MedMaster einmalig €29,90. Das ist eine einmalige Zahlung — kein monatliches Abo, keine wiederkehrenden Kosten. Du behältst vollen Zugang zu allen Fragen, Lerneinheiten, der Prüfungssimulation und allen zukünftigen Updates bis zum MedAT 2026. Wer sich jetzt registriert, lernt bis dahin komplett gratis.",
              },
              {
                q: "Was unterscheidet MedMaster von anderen Anbietern?",
                a: "Vier Dinge: Erstens decken wir alle 4 MedAT-Bereiche ab — nicht nur BMS. Zweitens ist unser Lernsystem adaptiv — es erkennt deine Schwächen und passt den Lernplan automatisch an. Drittens kosten andere Plattformen €69–599 (oft mit Abo), während MedMaster einmalig €29,90 kostet. Viertens: KFF-Aufgaben werden algorithmisch generiert und validiert — du bekommst nie dieselbe Aufgabe zweimal. Dazu eine realistische Prüfungssimulation mit echten MedAT-Zeitlimits, unbegrenzt wiederholbar.",
              },
            ].map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} isMobile={isMobile} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16 sm:py-28" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-5 leading-tight tracking-tight">
            Der MedAT wartet nicht.
            <br />
            Deine Konkurrenz auch nicht.
          </h2>
          <p className="text-white/60 text-sm sm:text-base mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed">
            Tausende Fragen. Alle 4 Bereiche. Adaptives Lernsystem. Kein Abo.
          </p>
          <GoogleBtn
            label="Jetzt kostenlos starten"
            className="bg-white text-[var(--text-primary)] rounded-2xl shadow-xl hover:bg-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 w-full sm:w-auto"
          />
          <p className="text-xs text-white/40 mt-4 sm:mt-5 tracking-wide">
            <Link to="/login" onClick={handleEmailClick} className="underline hover:text-white/60">
              Mit E-Mail anmelden
            </Link>
            {" · "}Keine Kreditkarte nötig
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 sm:py-10 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-6 sm:gap-0 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <Logo variant="icon" size={20} />
              <span className="text-sm font-semibold text-[var(--text-primary)]">MedMaster</span>
            </div>
            <div className={`flex flex-wrap ${isMobile ? "gap-x-4 gap-y-2" : "gap-x-8 gap-y-2"} text-sm`}>
              <Link
                to="/medat-uebungsfragen"
                className="text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                Übungsfragen
              </Link>
              <Link
                to="/medat-kff-ueben"
                className="text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                KFF Training
              </Link>
              <Link
                to="/medat-guide"
                className="text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                MedAT Guide
              </Link>
              <Link
                to="/blog"
                className="text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className="text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                FAQ
              </Link>
              <Link
                to="/ueber-uns"
                className="text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                Über uns
              </Link>
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--muted)]">
            <span>&copy; 2026 MedMaster — Alle Rechte vorbehalten.</span>
            <div className="flex gap-4 sm:gap-6">
              <Link to="/impressum" className="hover:text-[var(--text-primary)] transition-colors">
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Datenschutz
              </Link>
              <Link to="/agb" className="hover:text-[var(--text-primary)] transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Sticky mobile CTA ─── */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[var(--surface)] border-t border-[var(--border)] px-4 py-3 safe-area-bottom">
          <button
            onClick={handleGoogle}
            className="btn-premium w-full flex items-center justify-center gap-2.5 py-3.5 text-sm font-semibold rounded-xl shadow-lg"
          >
            <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="#fff"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#fff"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#fff"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Kostenlos starten
          </button>
        </div>
      )}

      {/* Add bottom padding when sticky CTA is visible on mobile */}
      {showStickyCTA && <div className="h-16 sm:hidden" />}

      <ExitIntentCapture />
    </div>
  );
}
