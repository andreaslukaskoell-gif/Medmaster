import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { GraduationCap, ArrowRight, Copy, Check, Share2 } from "lucide-react";

const NAVY = "#1b3ea7";

type SubjectKey = "bio" | "chemie" | "physik" | "mathe";

type BMSScores = Record<SubjectKey, number>;

const BMS_SUBJECTS: { key: SubjectKey; label: string }[] = [
  { key: "bio", label: "Biologie" },
  { key: "chemie", label: "Chemie" },
  { key: "physik", label: "Physik" },
  { key: "mathe", label: "Mathematik" },
];

function getResultInfo(pct: number): { label: string; color: string; bg: string; border: string } {
  if (pct >= 85)
    return {
      label: "Sehr gut",
      color: "#15803d",
      bg: "#f0fdf4",
      border: "#bbf7d0",
    };
  if (pct >= 70)
    return {
      label: "Gut",
      color: "#16a34a",
      bg: "#f0fdf4",
      border: "#86efac",
    };
  if (pct >= 50)
    return {
      label: "Möglich",
      color: "#ca8a04",
      bg: "#fefce8",
      border: "#fde68a",
    };
  return {
    label: "Schwierig",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  };
}

function SliderRow({
  label,
  value,
  min,
  max,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm font-bold tabular-nums" style={{ color: NAVY }}>
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, ${NAVY} 0%, ${NAVY} ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`,
          accentColor: NAVY,
        }}
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

function ScoreBar({
  label,
  pct,
  weight,
  weighted,
}: {
  label: string;
  pct: number;
  weight: number;
  weighted: number;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          {label} <span className="text-xs text-gray-400">({weight}%)</span>
        </span>
        <span className="font-semibold tabular-nums text-gray-900 dark:text-gray-100">
          {pct.toFixed(1)}% → {weighted.toFixed(1)} Pkt.
        </span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, backgroundColor: NAVY }}
        />
      </div>
    </div>
  );
}

export default function MedATPunkterechner() {
  usePageMeta({
    title: "MedAT Punkterechner 2026",
    description:
      "Berechne deinen MedAT-Score online: BMS, KFF, TV und SEK eingeben und sofort deinen gewichteten Gesamtprozentsatz sehen. Kostenloser MedAT Punkterechner 2026.",
    canonical: "https://medmaster.at/medat-punkte-rechner",
    ogImage: "https://medmaster.at/og-image.svg",
    ogType: "website",
  });

  const [bms, setBms] = useState<BMSScores>({ bio: 5, chemie: 5, physik: 5, mathe: 5 });
  const [kff, setKff] = useState(15);
  const [tv, setTv] = useState(6);
  const [sek, setSek] = useState(20);
  const [copied, setCopied] = useState(false);

  const bmsTotal = bms.bio + bms.chemie + bms.physik + bms.mathe;
  const bmsPct = (bmsTotal / 40) * 100;
  const kffPct = (kff / 30) * 100;
  const tvPct = (tv / 12) * 100;
  const sekPct = (sek / 40) * 100;

  const gesamtPct = bmsPct * 0.4 + kffPct * 0.2 + tvPct * 0.1 + sekPct * 0.3;
  const result = getResultInfo(gesamtPct);

  const shareText = `Mein MedAT-Ergebnis: ${gesamtPct.toFixed(1)}% — Teste dich selbst: medmaster.at/medat-punkte-rechner`;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [shareText]);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "MedAT Punkterechner 2026",
      description:
        "Berechne deinen MedAT-Score: BMS (40%), KFF (20%), TV (10%) und SEK (30%) gewichtet.",
      url: "https://medmaster.at/medat-punkte-rechner",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      author: { "@type": "Organization", name: "MedMaster", url: "https://medmaster.at" },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: NAVY }}
            >
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">MedMaster</span>
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-xl"
            style={{ backgroundColor: NAVY }}
          >
            Gratis testen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium mb-6 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">
            MedAT 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            MedAT Punkterechner
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Gib deine Ergebnisse ein und berechne deinen gewichteten MedAT-Gesamtscore sofort.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* BMS Section */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              BMS — Basiskenntnistest
            </h2>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">
              Gewichtung: 40%
            </span>
          </div>
          <div className="space-y-6">
            {BMS_SUBJECTS.map(({ key, label }) => (
              <SliderRow
                key={key}
                label={label}
                value={bms[key]}
                min={0}
                max={10}
                unit="von 10 richtig"
                onChange={(v) => setBms((prev) => ({ ...prev, [key]: v }))}
              />
            ))}
            <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Gesamt BMS</span>
              <span className="font-bold text-gray-900 dark:text-gray-100 tabular-nums">
                {bmsTotal} / 40 ({bmsPct.toFixed(1)}%)
              </span>
            </div>
          </div>
        </section>

        {/* KFF Section */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              KFF — Kognitive Fähigkeiten
            </h2>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400">
              Gewichtung: 20%
            </span>
          </div>
          <SliderRow
            label="KFF-Punkte"
            value={kff}
            min={0}
            max={30}
            unit="Punkte"
            onChange={setKff}
          />
        </section>

        {/* TV Section */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              TV — Textverständnis
            </h2>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400">
              Gewichtung: 10%
            </span>
          </div>
          <SliderRow label="TV-Punkte" value={tv} min={0} max={12} unit="Punkte" onChange={setTv} />
        </section>

        {/* SEK Section */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              SEK — Sozial-emotionale Kompetenzen
            </h2>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
              Gewichtung: 30%
            </span>
          </div>
          <SliderRow
            label="SEK-Punkte"
            value={sek}
            min={0}
            max={40}
            unit="Punkte"
            onChange={setSek}
          />
        </section>

        {/* Results */}
        <section
          className="rounded-2xl border p-6 sm:p-8 space-y-5"
          style={{ backgroundColor: result.bg, borderColor: result.border }}
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-900">
            Dein MedAT-Ergebnis
          </h2>

          <div className="space-y-3">
            <ScoreBar label="BMS" pct={bmsPct} weight={40} weighted={bmsPct * 0.4} />
            <ScoreBar label="KFF" pct={kffPct} weight={20} weighted={kffPct * 0.2} />
            <ScoreBar label="TV" pct={tvPct} weight={10} weighted={tvPct * 0.1} />
            <ScoreBar label="SEK" pct={sekPct} weight={30} weighted={sekPct * 0.3} />
          </div>

          <div
            className="rounded-xl p-5 text-center"
            style={{ backgroundColor: result.color + "15", border: `2px solid ${result.color}40` }}
          >
            <div
              className="text-4xl font-extrabold tabular-nums mb-1"
              style={{ color: result.color }}
            >
              {gesamtPct.toFixed(1)}%
            </div>
            <div className="text-lg font-bold mb-0.5" style={{ color: result.color }}>
              {result.label}
            </div>
            <div className="text-sm text-gray-500">
              {gesamtPct >= 85
                ? "Ausgezeichnete Chance auf einen Studienplatz!"
                : gesamtPct >= 70
                  ? "Gute Chancen — weiter so!"
                  : gesamtPct >= 50
                    ? "Noch Luft nach oben — Training hilft!"
                    : "Intensives Training empfohlen."}
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCopy}
              className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-4 py-3 rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Kopiert!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Ergebnis kopieren
                </>
              )}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-4 py-3 rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25d366" }}
            >
              <Share2 className="w-4 h-4" /> WhatsApp teilen
            </a>
          </div>
        </section>

        {/* Explanation */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            So wird gerechnet
          </h2>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p>
              Der MedAT-Score ist ein{" "}
              <strong className="text-gray-900 dark:text-gray-100">gewichteter Durchschnitt</strong>{" "}
              der vier Testteile:
            </p>
            <ul className="space-y-1.5 pl-4">
              <li>BMS: (richtige Antworten / 40) × 100 × 40%</li>
              <li>KFF: (Punkte / 30) × 100 × 20%</li>
              <li>TV: (Punkte / 12) × 100 × 10%</li>
              <li>SEK: (Punkte / 40) × 100 × 30%</li>
            </ul>
            <p className="pt-1">
              Die Bewertung basiert auf einem Richtwert — die tatsächliche Aufnahmegrenze variiert
              jährlich je nach Bewerberfeld und Uni.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Verbessere dein Ergebnis
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            Mit 4.300+ Übungsfragen, adaptivem KI-Training und realistischen Prüfungssimulationen.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-sm"
            style={{ backgroundColor: NAVY }}
          >
            Kostenlos starten <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>

      <footer className="py-6 mt-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-semibold text-gray-500">MedMaster</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link to="/impressum" className="hover:text-gray-600 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-gray-600 transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-gray-600 transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
