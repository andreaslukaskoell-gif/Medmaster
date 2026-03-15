import { useState } from "react";

type SelectedFeature = "central" | "side1" | "side2" | "min1" | "min2" | null;

type Feature = {
  id: SelectedFeature;
  label: string;
  explanation: string;
  color: string;
};

const FEATURES: Feature[] = [
  {
    id: "central",
    label: "Zentralmaximum (m = 0)",
    explanation:
      "Das Zentralmaximum ist das hellste und breiteste Maximum. Alle Strahlen aus dem Spalt interferieren konstruktiv — der Gangunterschied beträgt null. Die Intensität ist maximal: I₀.",
    color: "#7c3aed",
  },
  {
    id: "side1",
    label: "1. Nebenmaximum (m = ±1)",
    explanation:
      "Das 1. Nebenmaximum entsteht ungefähr bei sin(θ) ≈ 1,5λ/b. Die Intensität beträgt nur noch etwa 4,7 % von I₀ — deutlich schwächer als beim Doppelspalt.",
    color: "#6366f1",
  },
  {
    id: "side2",
    label: "2. Nebenmaximum (m = ±2)",
    explanation:
      "Das 2. Nebenmaximum liegt bei sin(θ) ≈ 2,5λ/b. Die Intensität fällt weiter auf ca. 1,7 % von I₀. Je höher die Ordnung, desto schwächer das Maximum.",
    color: "#8b5cf6",
  },
  {
    id: "min1",
    label: "1. Minimum (m = ±1)",
    explanation:
      "Das 1. Minimum liegt bei sin(θ) = λ/b. Der Spalt wird in 2 Hälften geteilt — jedes Strahlenpaar aus den Hälften löscht sich gegenseitig aus (destruktive Interferenz). Vollständige Dunkelheit.",
    color: "#dc2626",
  },
  {
    id: "min2",
    label: "2. Minimum (m = ±2)",
    explanation:
      "Das 2. Minimum liegt bei sin(θ) = 2λ/b. Der Spalt wird in 4 Hälften geteilt — vollständige destruktive Interferenz. Formel allgemein: sin(θ) = mλ/b, m = ±1, ±2, ...",
    color: "#b91c1c",
  },
];

// Precomputed intensity curve path for single-slit diffraction I(θ) ∝ [sin(α)/α]²
// Mapped to SVG coordinates: x = 500..540 (intensity axis), y = 60..300 (screen)
function buildIntensityCurve(): string {
  const screenTop = 62;
  const screenBottom = 298;
  const screenCenter = (screenTop + screenBottom) / 2; // 180
  const screenHalf = (screenBottom - screenTop) / 2; // 118
  const xBase = 500;
  const xScale = 34; // max intensity width in px

  const points: string[] = [];
  const steps = 80;
  for (let i = 0; i <= steps; i++) {
    const frac = i / steps; // 0..1 top to bottom
    const y = screenTop + frac * (screenBottom - screenTop);
    // Normalised position: -1..+1 mapped to angular range ≈ ±2.5 * (λ/b)
    const norm = ((y - screenCenter) / screenHalf) * 2.8; // ~range covers 2nd minima
    const alpha = norm * Math.PI;
    const intensity = alpha === 0 ? 1 : Math.pow(Math.sin(alpha) / alpha, 2);
    const x = xBase + intensity * xScale;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return "M" + points.join(" L");
}

const INTENSITY_PATH = buildIntensityCurve();

export default function DiffractionSlit() {
  const [selected, setSelected] = useState<SelectedFeature>(null);

  const selectedFeature = FEATURES.find((f) => f.id === selected) ?? null;

  function toggle(id: SelectedFeature) {
    setSelected((prev) => (prev === id ? null : id));
  }

  // Screen y-positions for features (center = 180)
  const cy = 180; // central max
  const s1y = 145; // 1st side max ~±35px
  const s1yB = 215;
  const min1y = 128; // 1st minimum ~±52px
  const min1yB = 232;
  const s2y = 112; // 2nd side max ~±68px
  const s2yB = 248;
  const min2y = 96; // 2nd minimum ~±84px
  const min2yB = 264;

  const isSelected = (id: SelectedFeature) => selected === id;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Einzelspaltbeugung</h4>
      <p className="text-xs text-[var(--muted)]">
        Beugungsmuster am Einzelspalt — Intensitätsverteilung mit Zentral- und Nebenmaxima. Klicke
        auf ein Maximum oder Minimum für die Erklärung.
      </p>

      <svg viewBox="0 0 580 370" className="w-full max-w-xl mx-auto">
        <title>Einzelspaltbeugung — Intensitätsmuster und Minima-Formel</title>

        <defs>
          <marker id="dfArrow" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
            <path d="M0,0 L6,2.5 L0,5" fill="#7c3aed" />
          </marker>
          <marker
            id="dfArrowGray"
            markerWidth="6"
            markerHeight="5"
            refX="6"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L6,2.5 L0,5" fill="#6b7280" />
          </marker>
        </defs>

        {/* Title */}
        <text x="270" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f766e">
          Einzelspaltbeugung (Fraunhofer)
        </text>

        {/* === Incoming plane wave === */}
        {[28, 48, 68, 88].map((x) => (
          <line
            key={x}
            x1={x}
            y1="80"
            x2={x}
            y2="280"
            stroke="#7c3aed"
            strokeWidth="1.5"
            opacity={0.25 + x / 140}
          />
        ))}
        <line
          x1="38"
          y1="64"
          x2="86"
          y2="64"
          stroke="#7c3aed"
          strokeWidth="1.5"
          markerEnd="url(#dfArrow)"
        />
        <text x="62" y="57" textAnchor="middle" fontSize="9" fill="#7c3aed">
          Ebene Welle (λ)
        </text>

        {/* === Barrier with single slit === */}
        {/* top block */}
        <rect x="118" y="70" width="12" height="95" fill="#374151" rx="1" />
        {/* bottom block */}
        <rect x="118" y="195" width="12" height="110" fill="#374151" rx="1" />

        {/* Slit opening label */}
        <text x="113" y="186" textAnchor="end" fontSize="9" fontWeight="bold" fill="#2563eb">
          Spalt
        </text>

        {/* Slit width label b */}
        <line x1="108" y1="165" x2="108" y2="195" stroke="#dc2626" strokeWidth="1" />
        <line x1="105" y1="165" x2="111" y2="165" stroke="#dc2626" strokeWidth="1" />
        <line x1="105" y1="195" x2="111" y2="195" stroke="#dc2626" strokeWidth="1" />
        <text x="98" y="183" textAnchor="end" fontSize="12" fontWeight="bold" fill="#dc2626">
          b
        </text>

        {/* === Circular wave fronts from slit centre === */}
        {[35, 65, 95, 125, 155, 185].map((r) => (
          <circle
            key={r}
            cx="130"
            cy="180"
            r={r}
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.7"
            opacity={0.22}
          />
        ))}

        {/* === Dashed rays to screen features === */}
        {/* Central (straight) */}
        <line
          x1="130"
          y1="180"
          x2="418"
          y2={cy}
          stroke="#7c3aed"
          strokeWidth="1"
          strokeDasharray="4 2"
          opacity="0.55"
        />
        {/* Ray to 1st minimum upper */}
        <line
          x1="130"
          y1="180"
          x2="418"
          y2={min1y}
          stroke="#dc2626"
          strokeWidth="0.8"
          strokeDasharray="3 2"
          opacity="0.4"
        />
        {/* Ray to 1st minimum lower */}
        <line
          x1="130"
          y1="180"
          x2="418"
          y2={min1yB}
          stroke="#dc2626"
          strokeWidth="0.8"
          strokeDasharray="3 2"
          opacity="0.4"
        />

        {/* Angle theta arc */}
        <line
          x1="130"
          y1="180"
          x2="270"
          y2="180"
          stroke="#6b7280"
          strokeWidth="0.8"
          strokeDasharray="3 2"
        />
        <path d="M190,180 A60,60 0 0,0 186,162" fill="none" stroke="#16a34a" strokeWidth="1.5" />
        <text x="204" y="171" fontSize="10" fontWeight="bold" fill="#16a34a">
          θ
        </text>

        {/* === Screen === */}
        <rect
          x="418"
          y="60"
          width="8"
          height="240"
          fill="#e5e7eb"
          stroke="#9ca3af"
          strokeWidth="1"
          rx="2"
        />
        <text x="422" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">
          Schirm
        </text>

        {/* === Intensity bands on screen === */}

        {/* 2nd minima (dark) */}
        <rect x="426" y={min2y - 3} width="18" height="6" fill="#111827" opacity="0.5" rx="1" />
        <rect x="426" y={min2yB - 3} width="18" height="6" fill="#111827" opacity="0.5" rx="1" />

        {/* 2nd side maxima */}
        <rect
          x="426"
          y={s2y - 7}
          width="18"
          height="14"
          fill="#6366f1"
          opacity={isSelected("side2") ? 0.9 : 0.35}
          rx="1"
          style={{ cursor: "pointer" }}
          onClick={() => toggle("side2")}
        />
        <rect
          x="426"
          y={s2yB - 7}
          width="18"
          height="14"
          fill="#6366f1"
          opacity={isSelected("side2") ? 0.9 : 0.35}
          rx="1"
          style={{ cursor: "pointer" }}
          onClick={() => toggle("side2")}
        />

        {/* 1st minima (dark) */}
        <rect
          x="426"
          y={min1y - 4}
          width="18"
          height="8"
          fill="#111827"
          opacity={isSelected("min1") ? 0.85 : 0.55}
          rx="1"
          style={{ cursor: "pointer" }}
          onClick={() => toggle("min1")}
        />
        <rect
          x="426"
          y={min1yB - 4}
          width="18"
          height="8"
          fill="#111827"
          opacity={isSelected("min1") ? 0.85 : 0.55}
          rx="1"
          style={{ cursor: "pointer" }}
          onClick={() => toggle("min1")}
        />

        {/* 2nd minima labels */}
        <rect
          x="426"
          y={min2y - 4}
          width="18"
          height="8"
          fill="#111827"
          opacity={isSelected("min2") ? 0.85 : 0.55}
          rx="1"
          style={{ cursor: "pointer" }}
          onClick={() => toggle("min2")}
        />
        <rect
          x="426"
          y={min2yB - 4}
          width="18"
          height="8"
          fill="#111827"
          opacity={isSelected("min2") ? 0.85 : 0.55}
          rx="1"
          style={{ cursor: "pointer" }}
          onClick={() => toggle("min2")}
        />

        {/* 1st side maxima */}
        <rect
          x="426"
          y={s1y - 10}
          width="18"
          height="20"
          fill="#6366f1"
          opacity={isSelected("side1") ? 0.95 : 0.55}
          rx="1"
          style={{ cursor: "pointer" }}
          onClick={() => toggle("side1")}
        />
        <rect
          x="426"
          y={s1yB - 10}
          width="18"
          height="20"
          fill="#6366f1"
          opacity={isSelected("side1") ? 0.95 : 0.55}
          rx="1"
          style={{ cursor: "pointer" }}
          onClick={() => toggle("side1")}
        />

        {/* Central maximum */}
        <rect
          x="426"
          y={cy - 30}
          width="18"
          height="60"
          fill="#7c3aed"
          opacity={isSelected("central") ? 1 : 0.85}
          rx="1"
          style={{ cursor: "pointer" }}
          onClick={() => toggle("central")}
        />

        {/* === Intensity curve === */}
        <path d={INTENSITY_PATH} fill="none" stroke="#a78bfa" strokeWidth="1.8" />
        <text x="542" y="184" fontSize="8" fill="#7c3aed" fontWeight="bold">
          I(θ)
        </text>

        {/* === Labels on screen === */}
        <text x="450" y={cy + 4} fontSize="8" fill="#5b21b6" fontWeight="bold">
          m=0
        </text>
        <text x="450" y={s1y + 4} fontSize="7" fill="#4f46e5">
          m=±1
        </text>
        <text x="450" y={s1yB + 4} fontSize="7" fill="#4f46e5">
          m=±1
        </text>
        <text x="450" y={min1y + 3} fontSize="7" fill="#dc2626">
          Min
        </text>
        <text x="450" y={min1yB + 3} fontSize="7" fill="#dc2626">
          Min
        </text>

        {/* === Formula box === */}
        <rect x="80" y="315" width="340" height="46" rx="6" fill="#f5f3ff" stroke="#c4b5fd" />
        <text x="250" y="333" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5b21b6">
          sin(θ) = m · λ / b
        </text>
        <text x="250" y="350" textAnchor="middle" fontSize="9" fill="#6b7280">
          m = ±1, ±2, ... (Minima) | b = Spaltbreite, λ = Wellenlänge
        </text>
      </svg>

      {/* Interactive info box */}
      {selectedFeature ? (
        <div
          className="rounded-lg border p-3 text-xs transition-all"
          style={{
            borderColor: selectedFeature.color + "55",
            backgroundColor: selectedFeature.color + "10",
          }}
        >
          <p className="font-semibold mb-1" style={{ color: selectedFeature.color }}>
            {selectedFeature.label}
          </p>
          <p className="text-gray-700 dark:text-gray-300">{selectedFeature.explanation}</p>
        </div>
      ) : (
        <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-lg p-3">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Am Einzelspalt entsteht ein charakteristisches Beugungsmuster: ein breites, helles&nbsp;
            <strong>Zentralmaximum</strong> flankiert von schwächer werdenden Nebenmaxima. Minima
            liegen bei <em>sin(θ) = mλ/b</em>. Je schmaler der Spalt (kleines b), desto breiter das
            Beugungsmuster. Klicke auf ein Maximum oder Minimum für Details.
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-2 text-xs">
        {FEATURES.map((f) => (
          <button
            key={f.id}
            onClick={() => toggle(f.id)}
            className="flex items-center gap-1.5 px-2 py-1 rounded border transition-all"
            style={{
              borderColor: isSelected(f.id) ? f.color : f.color + "44",
              backgroundColor: isSelected(f.id) ? f.color + "18" : "transparent",
              color: isSelected(f.id) ? f.color : undefined,
            }}
          >
            <span
              className="inline-block w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: f.color }}
            />
            <span className="text-gray-700 dark:text-gray-300">{f.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
