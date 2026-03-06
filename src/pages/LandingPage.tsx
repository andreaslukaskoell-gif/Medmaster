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
  RefreshCw,
  TrendingUp,
  Clock,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { usePageTitle } from "@/hooks/usePageTitle";

const NAVY = "#1b3ea7"; /* Signature Navy (--accent) */
const NAVY_HOVER = "#163286"; /* --accent-hover */
const NAVY_LIGHT = "#3655b2"; /* primary-400 for gradients */

const features = [
  {
    icon: Brain,
    title: "KI-Adaptives Lernen",
    description:
      "Unser System erkennt deine Schwächen und passt die Fragen automatisch an dein Niveau an.",
    color: "bg-[#e8ecf7] dark:bg-primary-900/30 text-[#1b3ea7] dark:text-primary-400",
  },
  {
    icon: ListChecks,
    title: "Offizielle Stichwortliste",
    description: "Alle offiziellen BMS-Stichworte 2026. Fortschritt pro Stichwort in Echtzeit.",
    color: "bg-[#e8ecf7] dark:bg-primary-900/30 text-[#1b3ea7] dark:text-primary-400",
  },
  {
    icon: LayoutGrid,
    title: "Alle 4 MedAT-Bereiche",
    description:
      "BMS, KFF, TV und SEK vollständig abgedeckt — alles in einer App, kein Wechsel nötig.",
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  },
  {
    icon: Zap,
    title: "Prüfungs-Simulation",
    description:
      "Realistische MedAT-Simulationen unter echten Prüfungsbedingungen mit Timer und Auswertung.",
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
  },
  {
    icon: RefreshCw,
    title: "Spaced Repetition System",
    description:
      "Wissenschaftlich optimierte Wiederholung: Du lernst genau das, was du gerade vergisst.",
    color: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400",
  },
  {
    icon: TrendingUp,
    title: "Fortschritt & Prognose",
    description: "Live-Tracking deines Wissensstands pro Fach. KI-gestützte Prüfungstag-Prognose.",
    color: "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400",
  },
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

  const socialProofItems = [
    ...(userCount ? [{ emoji: "📊", text: `Bereits über ${userCount} aktive Lernende` }] : []),
    { emoji: "⭐", text: "Alle 4 MedAT-Bereiche: BMS, KFF, TV, SEK" },
    { emoji: "🎯", text: "Offizielle Stichwortliste 2025/2026" },
    { emoji: "🆓", text: "Gratis testen bis Ende März — danach einmalig €29,90" },
    { emoji: "📚", text: "4.300+ Übungsfragen mit Erklärungen" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-2xl flex items-center justify-center text-white shadow-sm"
              style={{ backgroundColor: NAVY }}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              MedMaster
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Anmelden
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-2xl shadow-sm transition-colors"
                style={{ backgroundColor: NAVY }}
              >
                Gratis testen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#e8ecf7] via-white to-[#e8ecf7] dark:from-primary-950/40 dark:via-gray-950 dark:to-primary-950/30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium mb-8 shadow-sm border border-primary-100 dark:border-primary-800/50 bg-white/80 dark:bg-gray-900/80"
            style={{ color: NAVY }}
          >
            <Clock className="w-4 h-4" />
            Gratis bis 31. März — danach einmalig €29,90
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-6 tracking-tight"
          >
            Dein Medizinstudium
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, ${NAVY_LIGHT})` }}
            >
              beginnt hier.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            4.300+ Übungsfragen, alle 4 MedAT-Bereiche, KI-adaptives Lernsystem und realistische
            Prüfungssimulationen. Komplett gratis bis 31. März.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={async () => {
                setGoogleError("");
                const { error } = await signInWithGoogle();
                if (error) setGoogleError(error.message);
              }}
              className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-sm transition-colors"
              style={{ backgroundColor: NAVY }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              In 10 Sekunden starten
            </motion.button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl text-base border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Mit E-Mail registrieren
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
          {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 gap-6 sm:gap-8 max-w-lg mx-auto mt-16 sm:mt-20"
          >
            {[
              { value: "4.300+", label: "Übungsfragen" },
              { value: "174", label: "Lerneinheiten" },
              { value: "4", label: "MedAT-Bereiche" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="rounded-2xl bg-white/80 dark:bg-gray-900/50 p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-gray-800/50"
              >
                <div
                  className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100"
                  style={{ color: i === 1 ? NAVY : undefined }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
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
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                Gratis-Zugang endet in:
              </p>
              <div className="flex justify-center gap-3 sm:gap-4">
                {[
                  { value: countdown.days, label: "Tage" },
                  { value: countdown.hours, label: "Std" },
                  { value: countdown.minutes, label: "Min" },
                  { value: countdown.seconds, label: "Sek" },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-sm border border-gray-100 dark:border-gray-800/50 min-w-[4rem] sm:min-w-[5rem]"
                  >
                    <span
                      className="text-2xl sm:text-3xl font-bold tabular-nums"
                      style={{ color: NAVY }}
                    >
                      {String(unit.value).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                Ab 1. April: einmalig €29,90
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-gray-50/50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Warum MedMaster?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Entwickelt von MedAT-Absolventen, optimiert mit KI.
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
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800/50"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${f.color}`}
                >
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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
            className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-14"
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
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm bg-[#e8ecf7] dark:bg-primary-900/30"
                  style={{ color: NAVY }}
                >
                  <s.icon className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold mb-2" style={{ color: NAVY }}>
                  SCHRITT {s.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-20 bg-gray-50/50 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Fakten statt Versprechen
            </h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {socialProofItems.map((sp) => (
              <motion.div
                key={sp.text}
                variants={item}
                className="flex items-center gap-4 bg-white dark:bg-gray-900 rounded-2xl px-6 py-5 shadow-sm border border-gray-100 dark:border-gray-800/50"
              >
                <span className="text-2xl shrink-0">{sp.emoji}</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {sp.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEO Internal Links */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
            MedAT 2026 Vorbereitung
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link
              to="/medat-uebungsfragen"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm text-center"
            >
              <span className="text-2xl">✏️</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                MedAT Übungsfragen
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">BMS + KFF kostenlos</span>
            </Link>
            <Link
              to="/medat-guide"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm text-center"
            >
              <span className="text-2xl">📖</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                MedAT 2026 Guide
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Alles zum Test</span>
            </Link>
            <Link
              to="/faq"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm text-center"
            >
              <span className="text-2xl">❓</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Häufige Fragen
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">FAQ zum MedAT</span>
            </Link>
            <Link
              to="/medat-biologie-fragen"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm text-center"
            >
              <span className="text-2xl">🧬</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                BMS Biologie
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">1.100+ Fragen</span>
            </Link>
            <Link
              to="/medat-chemie-fragen"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm text-center"
            >
              <span className="text-2xl">⚗️</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                BMS Chemie
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">1.400+ Fragen</span>
            </Link>
            <Link
              to="/medat-physik-fragen"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm text-center"
            >
              <span className="text-2xl">⚡</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                BMS Physik
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">1.300+ Fragen</span>
            </Link>
            <Link
              to="/medat-mathematik-fragen"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm text-center"
            >
              <span className="text-2xl">📊</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                BMS Mathematik
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">490+ Fragen</span>
            </Link>
            <Link
              to="/challenge"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-sm text-center"
            >
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Quiz Challenge
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Teile dein Ergebnis</span>
            </Link>
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
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-12 shadow-sm border-2 border-[#1b3ea7]/20 dark:border-primary-800/50 text-center relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: `linear-gradient(90deg, ${NAVY}, ${NAVY_LIGHT})` }}
            />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium mb-6 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
              Launch-Angebot — nur bis 31. März
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Jetzt komplett gratis
            </h2>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-extrabold" style={{ color: NAVY }}>
                €0
              </span>
              <span className="text-gray-400 line-through text-lg">€29,90</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Ab 1. April: einmalig €29,90 — kein Abo, keine versteckten Kosten
            </p>
            <ul className="text-left max-w-sm mx-auto mb-8 space-y-3">
              {[
                "4.300+ Übungsfragen mit Erklärungen",
                "Alle 4 MedAT-Bereiche (BMS, KFF, TV, SEK)",
                "KI-adaptives Lernsystem",
                "Realistische Prüfungssimulationen",
                "Fortschritt & Prüfungstag-Prognose",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={async () => {
                setGoogleError("");
                const { error } = await signInWithGoogle();
                if (error) setGoogleError(error.message);
              }}
              className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-sm w-full sm:w-auto transition-colors"
              style={{ backgroundColor: NAVY }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Gratis starten mit Google
            </motion.button>
            {googleError && <p className="text-sm text-red-500 mt-2">{googleError}</p>}
            <p className="text-xs text-gray-400 mt-3">
              Oder{" "}
              <Link to="/register" className="underline hover:text-gray-600">
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
          <p className="text-primary-100 mb-8">
            Komplett gratis bis 31. März. Kein Risiko, kein Abo.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white text-[#1b3ea7] font-semibold px-8 py-4 rounded-2xl text-lg shadow-sm hover:bg-primary-50 transition-colors"
            >
              Gratis starten
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary-300" />
            <span className="text-sm font-semibold text-gray-300">MedMaster</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <Link to="/medat-guide" className="hover:text-gray-300 transition-colors">
              MedAT Guide
            </Link>
            <Link to="/faq" className="hover:text-gray-300 transition-colors">
              FAQ
            </Link>
            <Link to="/medat-uebungsfragen" className="hover:text-gray-300 transition-colors">
              Übungsfragen
            </Link>
            <Link to="/impressum" className="hover:text-gray-300 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-gray-300 transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-gray-300 transition-colors">
              AGB
            </Link>
          </div>
          <p className="text-xs text-gray-500">© 2026 MedMaster. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
