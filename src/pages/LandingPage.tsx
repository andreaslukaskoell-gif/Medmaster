import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, ListChecks, BookOpen, Sparkles, Star, ArrowRight, GraduationCap, Shield, Zap } from "lucide-react";

const MEDICAL_BLUE = "#0055ff";
const MEDICAL_BLUE_LIGHT = "#e0ebff";

const features = [
  {
    icon: Brain,
    title: "KI-Adaptives Lernen",
    description: "Unser System erkennt deine Schwächen und passt die Fragen automatisch an dein Niveau an.",
    color: "bg-[#e0ebff] dark:bg-primary-900/30 text-[#0055ff] dark:text-primary-400",
  },
  {
    icon: ListChecks,
    title: "Offizielle Stichwortliste",
    description: "Alle 106 offiziellen BMS-Stichworte 2025/2026. Fortschritt pro Stichwort in Echtzeit.",
    color: "bg-[#e0ebff] dark:bg-primary-900/30 text-[#0055ff] dark:text-primary-400",
  },
  {
    icon: BookOpen,
    title: "1.000+ Übungsfragen",
    description: "BMS, KFF, Textverständnis und Sozial-emotionale Kompetenzen — alles in einer App.",
    color: "bg-[#e0ebff] dark:bg-primary-900/30 text-[#0055ff] dark:text-primary-400",
  },
];

const pricingPlans = [
  { name: "Starter", price: "Gratis", period: "", features: ["50 BMS-Fragen", "1 Simulationstest", "Grundstatistiken"], cta: "Kostenlos starten", highlight: false },
  { name: "Standard", price: "€12.90", period: "/Monat", features: ["Alle 1.000+ BMS-Fragen", "KI-adaptives Lernsystem", "Unbegrenzte Simulationen", "Stichwortlisten-Tracking", "Schwachstellen-Trainer"], cta: "Jetzt starten", highlight: true },
  { name: "Pro", price: "€19.90", period: "/Monat", features: ["Alles aus Standard", "KI-Tutor Chat", "Prüfungstag-Prognose", "Prioritärer Support", "Lernplan-Generator"], cta: "Pro wählen", highlight: false },
];

const testimonials = [
  { name: "Sarah M.", uni: "MedUni Wien 2025", text: "Dank MedMaster habe ich meine BMS-Schwachstellen erkannt und gezielt trainiert. Die adaptive Fragenauswahl hat den Unterschied gemacht!", rating: 5 },
  { name: "Lukas K.", uni: "MedUni Graz 2025", text: "Die Stichwortlisten-Abdeckung gibt mir die Sicherheit, dass ich wirklich alles Relevante gelernt habe. Beste MedAT-App!", rating: 5 },
  { name: "Anna T.", uni: "MedUni Innsbruck 2025", text: "Der KI-Tutor erklärt Fehler so, dass ich sie wirklich verstehe. Viel besser als nur eine Erklärung zu lesen.", rating: 5 },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Nav — clean, floating feel */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: MEDICAL_BLUE }}>
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">MedMaster</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
              Anmelden
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-2xl shadow-sm transition-colors"
                style={{ backgroundColor: MEDICAL_BLUE }}
              >
                Kostenlos starten
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#f0f5ff] via-white to-[#f0f5ff] dark:from-primary-950/40 dark:via-gray-950 dark:to-primary-950/30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-28 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium mb-8 shadow-sm border border-primary-100 dark:border-primary-800/50 bg-white/80 dark:bg-gray-900/80" style={{ color: MEDICAL_BLUE }}>
            <Sparkles className="w-4 h-4" />
            Neu: KI-Tutor jetzt verfügbar
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-6 tracking-tight"
          >
            MedAT 2026 bestehen —
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${MEDICAL_BLUE}, #3b82f6)` }}>
              mit KI ab €12.90/Monat
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Die smarteste MedAT-Vorbereitung Österreichs. Adaptives Lernen, offizielle Stichwortliste und über 1.000 Übungsfragen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-sm"
                style={{ backgroundColor: MEDICAL_BLUE }}
              >
                Kostenlos registrieren
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.a
              href="#preise"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl text-base border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Preise ansehen
            </motion.a>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 gap-6 sm:gap-8 max-w-lg mx-auto mt-16 sm:mt-20"
          >
            {[
              { value: "1.000+", label: "Übungsfragen" },
              { value: "106", label: "Stichworte" },
              { value: "4", label: "MedAT-Bereiche" },
            ].map((stat, i) => (
              <motion.div key={stat.label} variants={item} className="rounded-2xl bg-white/80 dark:bg-gray-900/50 p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-gray-800/50">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100" style={{ color: i === 1 ? MEDICAL_BLUE : undefined }}>{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-gray-50/50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Warum MedMaster?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Entwickelt von MedAT-Absolventen, optimiert mit KI.</p>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800/50"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${f.color}`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-14">
            So funktioniert's
          </motion.h2>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Registrieren", desc: "Konto in unter 30 Sekunden. Kein Abo nötig für den Start.", icon: Shield },
              { step: "2", title: "Lernen & Üben", desc: "Das KI-System erkennt deine Stärken und Schwächen automatisch.", icon: Brain },
              { step: "3", title: "MedAT bestehen", desc: "Mit Prüfungstag-Prognose gehst du optimal vorbereitet in den Test.", icon: Zap },
            ].map((s) => (
              <motion.div key={s.step} variants={item} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm bg-[#e0ebff] dark:bg-primary-900/30" style={{ color: MEDICAL_BLUE }}>
                  <s.icon className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold mb-2" style={{ color: MEDICAL_BLUE }}>SCHRITT {s.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preise" className="py-16 sm:py-24 bg-gray-50/50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Beste MedAT-Vorbereitung zum fairsten Preis</h2>
            <p className="text-gray-600 dark:text-gray-400">Starte gratis und upgrade, wenn du bereit bist.</p>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={item}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-8 shadow-sm ${
                  plan.highlight
                    ? "bg-[#0055ff] text-white shadow-lg shadow-primary-500/20 scale-[1.02]"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Beliebteste Wahl
                  </div>
                )}
                <h3 className={`text-lg font-semibold mb-2 ${plan.highlight ? "text-white" : "text-gray-900 dark:text-gray-100"}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900 dark:text-gray-100"}`}>{plan.price}</span>
                  {plan.period && <span className={plan.highlight ? "text-primary-200" : "text-gray-500 dark:text-gray-400"}>{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={plan.highlight ? "text-primary-200" : "text-[#0055ff]"}>&#10003;</span>
                      <span className={plan.highlight ? "text-primary-100" : "text-gray-600 dark:text-gray-400"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/register"
                    className={`block w-full text-center font-semibold py-3.5 rounded-2xl transition-colors shadow-sm ${
                      plan.highlight ? "bg-white text-[#0055ff] hover:bg-primary-50" : "bg-[#0055ff] text-white hover:opacity-90"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-14">
            Das sagen unsere Nutzer
          </motion.h2>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={item}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed italic">"{t.text}"</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t.uni}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 sm:py-24 rounded-t-[2rem] sm:rounded-t-[3rem]"
        style={{ background: `linear-gradient(135deg, ${MEDICAL_BLUE}, #0047d9)` }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit für den MedAT 2026?</h2>
          <p className="text-primary-100 mb-8">Starte heute. Kostenlos und unverbindlich.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/register" className="inline-flex items-center gap-2 bg-white text-[#0055ff] font-semibold px-8 py-4 rounded-2xl text-lg shadow-sm hover:bg-primary-50 transition-colors">
              Jetzt kostenlos registrieren
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#7aa7ff]" />
            <span className="text-sm font-semibold text-gray-300">MedMaster</span>
          </div>
          <p className="text-xs text-gray-500">© 2026 MedMaster. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
