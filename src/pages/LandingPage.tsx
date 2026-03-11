import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  ListChecks,
  ArrowRight,
  GraduationCap,
  Shield,
  Zap,
  LayoutGrid,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Star,
  Users,
  BadgeCheck,
  Infinity,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { usePageTitle } from "@/hooks/usePageTitle";

const NAVY = "#1b3ea7"; /* Signature Navy (--accent) */
const NAVY_HOVER = "#163286"; /* --accent-hover */
const NAVY_LIGHT = "#3655b2"; /* primary-400 for gradients */

const ICON_STYLE = "bg-primary-50 dark:bg-primary-900/30 text-[#1b3ea7] dark:text-primary-400";

const features = [
  {
    icon: Brain,
    title: "KI-Adaptives Lernen",
    description:
      "Das System erkennt deine Schwachstellen und stellt gezielt Fragen aus 4.300+ BMS-Aufgaben, die deinem Niveau entsprechen.",
    stat: "4.300+ Fragen",
  },
  {
    icon: ListChecks,
    title: "Offizielle Stichwortliste 2026",
    description:
      "Jedes offizielle BMS-Stichwort abgedeckt, aufgeteilt in 173 Lerneinheiten mit Fortschritt pro Thema.",
    stat: "173 Lerneinheiten",
  },
  {
    icon: LayoutGrid,
    title: "Alle 4 MedAT-Bereiche",
    description:
      "BMS, KFF, TV und SEK vollständig abgedeckt. 5 KFF-Untertests, 10 TV-Textsets, 100 SEK-Aufgaben — alles in einer App.",
    stat: "Vollständig",
  },
  {
    icon: Infinity,
    title: "Unbegrenzte KFF-Übungen",
    description:
      "Algorithmisch generierte Zahlenfolgen, Implikationen, Wortflüssigkeit und Figuren — unendlich viele Aufgaben, nie Wiederholungen.",
    stat: "Unbegrenzt",
  },
  {
    icon: Zap,
    title: "Realistische Prüfungssimulation",
    description:
      "Vollständige MedAT-Simulation unter echten Bedingungen: Timer, Auswertung, offizielle Zeitlimits pro Testteil.",
    stat: "Original-Format",
  },
  {
    icon: TrendingUp,
    title: "Fortschritt & Prüfungsprognose",
    description:
      "Live-Tracking deines Wissensstands pro Fach. Spaced Repetition und KI-gestützte Prüfungstag-Prognose.",
    stat: "Echtzeit-Analyse",
  },
];

const testimonials = [
  {
    name: "Lisa M.",
    detail: "MedAT 2026 Kandidatin, Wien",
    text: "Endlich eine App, die alle 4 Bereiche abdeckt. Die KFF-Generatoren sind genial — ich kann unbegrenzt üben, ohne dass sich Aufgaben wiederholen.",
    rating: 5,
  },
  {
    name: "Tobias K.",
    detail: "MedAT 2026 Kandidat, Graz",
    text: "Die BMS-Fragen sind richtig gut aufgebaut und die Erklärungen helfen enorm. Für den Preis ein No-Brainer.",
    rating: 5,
  },
  {
    name: "Sarah P.",
    detail: "MedAT 2026 Kandidatin, Innsbruck",
    text: "Ich hab vorher eine Abo-Plattform genutzt. MedMaster hat mehr Übungsfragen, kostet einmalig €29,90 und die KFF-Übungen sind besser.",
    rating: 5,
  },
];

const comparisonRows = [
  { feature: "BMS-Übungsfragen", medmaster: "4.300+", competitor: "Variiert" },
  { feature: "Alle 4 MedAT-Bereiche", medmaster: true, competitor: "Teilweise" },
  { feature: "KFF-Aufgaben", medmaster: "Unbegrenzt (Generator)", competitor: "Limitierter Pool" },
  { feature: "Preis", medmaster: "Einmalig €29,90", competitor: "€9–30 / Monat (Abo)" },
  { feature: "MedAT 2026 Format", medmaster: true, competitor: true },
  { feature: "KI-adaptives Lernsystem", medmaster: true, competitor: false },
  { feature: "Prüfungssimulation", medmaster: true, competitor: "Teilweise" },
  { feature: "Spaced Repetition", medmaster: true, competitor: false },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

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

export default function LandingPage() {
  usePageTitle();
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
        if (count && count >= 50) setUserCount(count);
      });
  }, []);

  const trustBadges = [
    { icon: BadgeCheck, text: "MedAT 2026 Format" },
    { icon: Users, text: "Von Medizinstudent:innen entwickelt" },
    { icon: Shield, text: "Einmalzahlung — kein Abo" },
  ];

  return (
    <div className="min-h-screen bg-[var(--surface)] dark:bg-[var(--background)]">
      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-40 bg-[var(--surface)]/90 dark:bg-[var(--background)]/90 backdrop-blur-xl border-b border-app-border/50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-2xl flex items-center justify-center text-white shadow-sm"
              style={{ backgroundColor: NAVY }}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-app-foreground tracking-tight">MedMaster</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-app-muted hover:text-app-foreground transition-colors px-3 py-2 rounded-xl hover:bg-app-card"
            >
              Anmelden
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl shadow-[var(--shadow-sm)] transition-colors hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Gratis testen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-50 via-[var(--surface)] to-primary-50 dark:from-primary-950/40 dark:via-background dark:to-primary-950/30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium mb-8 shadow-sm border border-primary-100 dark:border-primary-800/50 bg-[var(--surface)]/80 dark:bg-[var(--surface)]/80"
            style={{ color: NAVY }}
          >
            <Clock className="w-4 h-4" />
            Gratis bis 31. März — danach einmalig €29,90
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-app-foreground leading-tight mb-6 tracking-tight"
          >
            MedAT 2026 bestehen.
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, ${NAVY_LIGHT})` }}
            >
              Mit System.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            4.300+ BMS-Fragen, unbegrenzte KFF-Generatoren, 10 TV-Textsets, 100 SEK-Aufgaben — alle
            4 MedAT-Bereiche in einer App. KI-adaptiv, prüfungsnah, einmalig €29,90.
          </motion.p>
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-app-muted"
              >
                <badge.icon className="w-4 h-4 text-emerald-500 shrink-0" />
                {badge.text}
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={async () => {
                setGoogleError("");
                const { error } = await signInWithGoogle();
                if (error) setGoogleError(error.message);
              }}
              className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-xl text-base shadow-[var(--shadow-sm)] transition-colors hover:opacity-90 cursor-pointer"
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
              In 10 Sekunden starten
            </button>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-[var(--surface)] text-[var(--text-secondary)] font-semibold px-8 py-4 rounded-xl text-base shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)] transition-shadow"
            >
              Mit E-Mail registrieren
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mt-16 sm:mt-20"
          >
            {[
              { value: "4.300+", label: "BMS-Fragen" },
              { value: "173", label: "Lerneinheiten" },
              { value: "5", label: "KFF-Untertests" },
              { value: "€29,90", label: "Einmalig" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="rounded-xl bg-[var(--surface)]/80 dark:bg-[var(--surface)]/50 p-4 sm:p-5 shadow-[var(--shadow-xs)]"
              >
                <div className="text-2xl sm:text-3xl font-bold text-app-foreground">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[var(--muted)] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Countdown Timer */}
          {!countdown.expired && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 sm:mt-16"
            >
              <p className="text-sm font-medium text-app-muted mb-4">Gratis-Zugang endet in:</p>
              <div className="flex justify-center gap-3 sm:gap-4">
                {[
                  { value: countdown.days, label: "Tage" },
                  { value: countdown.hours, label: "Std" },
                  { value: countdown.minutes, label: "Min" },
                  { value: countdown.seconds, label: "Sek" },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="flex flex-col items-center bg-[var(--surface)]/80 rounded-xl px-4 py-3 sm:px-5 sm:py-4 shadow-[var(--shadow-xs)] min-w-[4rem] sm:min-w-[5rem]"
                  >
                    <span className="text-2xl sm:text-3xl font-bold tabular-nums text-app-foreground">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-[var(--muted)] mt-1">{unit.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-app-muted/70 mt-3">Ab 1. April: einmalig €29,90</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-background/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-app-foreground mb-4">
              Alles, was du für den MedAT brauchst
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Von Medizinstudent:innen entwickelt. KI-optimiert. Aktuell für MedAT 2026.
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={item}
                className="bg-[var(--surface)] dark:bg-[var(--surface)] rounded-2xl p-8 shadow-[var(--shadow-sm)]"
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${ICON_STYLE}`}
                  >
                    <f.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-[var(--muted)]">{f.stat}</span>
                </div>
                <h3 className="text-base font-semibold text-app-foreground mb-2">{f.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-app-foreground text-center mb-14"
          >
            So funktioniert's
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "1",
                title: "Registrieren",
                desc: "Google Login in 10 Sekunden. Gratis bis 31. März.",
                icon: Shield,
              },
              {
                step: "2",
                title: "Lernen & Üben",
                desc: "Das KI-System erkennt deine Stärken und Schwächen automatisch.",
                icon: Brain,
              },
              {
                step: "3",
                title: "MedAT bestehen",
                desc: "Mit Prüfungstag-Prognose gehst du optimal vorbereitet in den Test.",
                icon: Zap,
              },
            ].map((s) => (
              <motion.div key={s.step} variants={item} className="text-center">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 ${ICON_STYLE}`}
                >
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-medium text-[var(--muted)] mb-1">{s.step}.</div>
                <h3 className="text-base font-semibold text-app-foreground mb-2">{s.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 dark:bg-primary-950/40 rounded-2xl p-8 sm:p-10 border border-primary-100 dark:border-primary-800/50"
          >
            <p className="text-lg font-semibold text-app-foreground mb-2">
              Jetzt kostenlos testen — kein Abo, keine Kreditkarte
            </p>
            <p className="text-sm text-app-muted mb-6">
              Voller Zugang bis 31. März. Danach einmalig €29,90.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-xl text-sm shadow-[var(--shadow-sm)] transition-colors hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Gratis starten
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 bg-background/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-app-foreground mb-3">Warum MedMaster?</h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Mehr Inhalte, bessere Technik, fairer Preis — so schneidet MedMaster im Vergleich ab.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--surface)] rounded-2xl shadow-sm border border-app-border/50 overflow-hidden"
          >
            <div className="grid grid-cols-3 text-center text-sm font-semibold border-b border-app-border/50">
              <div className="p-4 text-app-muted text-left">Feature</div>
              <div className="p-4" style={{ color: NAVY }}>
                MedMaster
              </div>
              <div className="p-4 text-app-muted">Abo-Plattformen</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-center text-sm ${i < comparisonRows.length - 1 ? "border-b border-app-border/30" : ""}`}
              >
                <div className="p-4 text-app-foreground text-left font-medium">{row.feature}</div>
                <div className="p-4 flex items-center justify-center">
                  {row.medmaster === true ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <span className="font-semibold text-app-foreground">{row.medmaster}</span>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.competitor === true ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : row.competitor === false ? (
                    <XCircle className="w-5 h-5 text-red-400" />
                  ) : (
                    <span className="text-app-muted">{row.competitor}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-app-foreground mb-3">
              Das sagen unsere Lernenden
            </h2>
            {userCount && (
              <p className="text-[var(--text-secondary)]">
                Bereits {userCount}+ Studierende vertrauen auf MedMaster
              </p>
            )}
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={item}
                className="bg-[var(--surface)] dark:bg-[var(--surface)] rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-sm)]"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold text-app-foreground">{t.name}</div>
                  <div className="text-xs text-app-muted">{t.detail}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEO Internal Links */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-app-foreground text-center mb-8">
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
              { to: "/challenge", label: "Quiz Challenge", sub: "Teile dein Ergebnis" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex flex-col gap-1 p-4 rounded-xl bg-[var(--surface)] shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)] transition-shadow text-left"
              >
                <span className="text-sm font-medium text-app-foreground">{link.label}</span>
                <span className="text-xs text-[var(--muted)]">{link.sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preise" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--surface)] dark:bg-[var(--surface)] rounded-2xl p-8 sm:p-12 shadow-sm border-2 border-[#1b3ea7]/20 dark:border-primary-800/50 text-center relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: `linear-gradient(90deg, ${NAVY}, ${NAVY_LIGHT})` }}
            />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium mb-6 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
              Launch-Angebot — nur bis 31. März
            </div>
            <h2 className="text-3xl font-bold text-app-foreground mb-2">Jetzt komplett gratis</h2>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-extrabold" style={{ color: NAVY }}>
                €0
              </span>
              <span className="text-app-muted line-through text-lg">€29,90</span>
            </div>
            <p className="text-sm text-app-muted mb-6">
              Ab 1. April: einmalig €29,90 — kein Abo, keine versteckten Kosten
            </p>
            <ul className="text-left max-w-sm mx-auto mb-8 space-y-3">
              {[
                "4.300+ BMS-Fragen mit detaillierten Erklärungen",
                "Unbegrenzte KFF-Aufgaben (Zahlenfolgen, Implikationen, Wortflüssigkeit, Figuren, Gedächtnis)",
                "10 TV-Textsets + 100 SEK-Aufgaben",
                "173 Lerneinheiten nach offizieller Stichwortliste",
                "KI-adaptives Lernsystem + Spaced Repetition",
                "Realistische Prüfungssimulationen mit Timer",
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
            <button
              onClick={async () => {
                setGoogleError("");
                const { error } = await signInWithGoogle();
                if (error) setGoogleError(error.message);
              }}
              className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-xl text-base shadow-[var(--shadow-sm)] w-full sm:w-auto transition-colors hover:opacity-90 cursor-pointer"
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
              Gratis starten mit Google
            </button>
            {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}
            <p className="text-xs text-app-muted/70 mt-3">
              Oder{" "}
              <Link to="/register" className="underline hover:text-app-muted">
                mit E-Mail registrieren
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 sm:py-24 rounded-t-[2rem] sm:rounded-t-[3rem]"
        style={{ background: `linear-gradient(135deg, ${NAVY}, ${NAVY_HOVER})` }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit für den MedAT 2026?</h2>
          <p className="text-primary-100 mb-3">
            4.300+ Fragen. Unbegrenzte KFF-Übungen. Alle 4 MedAT-Bereiche.
          </p>
          <p className="text-primary-200 text-sm mb-8">
            Komplett gratis bis 31. März — danach einmalig €29,90. Kein Abo, kein Risiko.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-white text-[#1b3ea7] font-semibold px-8 py-4 rounded-xl text-lg shadow-[var(--shadow-sm)] hover:bg-primary-50 transition-colors"
          >
            Gratis starten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-primary-950 dark:bg-primary-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary-300" />
            <span className="text-sm font-semibold text-primary-200">MedMaster</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-primary-300/70">
            <Link to="/medat-guide" className="hover:text-primary-200 transition-colors">
              MedAT Guide
            </Link>
            <Link to="/faq" className="hover:text-primary-200 transition-colors">
              FAQ
            </Link>
            <Link to="/medat-uebungsfragen" className="hover:text-primary-200 transition-colors">
              Übungsfragen
            </Link>
            <Link to="/impressum" className="hover:text-primary-200 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-primary-200 transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-primary-200 transition-colors">
              AGB
            </Link>
          </div>
          <p className="text-xs text-primary-300/50">© 2026 MedMaster. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
