import { useState } from "react";

type ShiftFactor = {
  id: string;
  label: string;
  direction: "right" | "left";
  color: string;
  detail: string;
};

const shiftFactors: ShiftFactor[] = [
  {
    id: "ph-down",
    label: "pH ↓ (Azidose)",
    direction: "right",
    color: "#ef4444",
    detail:
      "Bohr-Effekt: Sinkender pH verringert die O₂-Affinität des Hämoglobins → Rechtsvershiebung. In aktiven Geweben (CO₂-Produktion → H⁺-Anstieg) wird O₂ leichter abgegeben. Klinisch wichtig bei Azidose (Laktatazidose, diabetische Ketoazidose).",
  },
  {
    id: "temp-up",
    label: "Temperatur ↑",
    direction: "right",
    color: "#f97316",
    detail:
      "Höhere Temperatur (z. B. in arbeitender Muskulatur, bei Fieber) vermindert die O₂-Affinität → Rechtsvershiebung. Mehr O₂ wird ans Gewebe abgegeben. Bei Hypothermie (Linksverschiebung) nimmt das Hämoglobin O₂ stärker auf.",
  },
  {
    id: "co2-up",
    label: "pCO₂ ↑",
    direction: "right",
    color: "#8b5cf6",
    detail:
      "Erhöhtes CO₂ verringert die O₂-Affinität (Bohr-Effekt, direkter CO₂-Effekt). CO₂ bindet auch direkt an Hämoglobin (Carbaminohämoglobin). In den Lungen: pCO₂ fällt → Linksverschiebung → O₂-Aufnahme erleichtert.",
  },
  {
    id: "bpg-up",
    label: "2,3-BPG ↑",
    direction: "right",
    color: "#0891b2",
    detail:
      "2,3-Bisphosphoglycerat (2,3-BPG) bindet in der zentralen Kavität des desoxy-Hb und stabilisiert die T-Form (geringere O₂-Affinität). Bei Höhenadaptation, chronischer Anämie und Hypoxie erhöht. Fötales Hämoglobin (HbF) bindet 2,3-BPG schwächer → Linksverschiebung → bessere O₂-Aufnahme vom mütterlichen Hb.",
  },
  {
    id: "ph-up",
    label: "pH ↑ (Alkalose)",
    direction: "left",
    color: "#3b82f6",
    detail:
      "Steigender pH erhöht die O₂-Affinität des Hämoglobins → Linksverschiebung. In den Lungen (CO₂-Abgabe → pH-Anstieg) erleichtert dies die O₂-Bindung. Bei respiratorischer Alkalose (Hyperventilation) kann es zu peripherer O₂-Minderversorgung trotz ausreichender SaO₂ kommen.",
  },
  {
    id: "fhb",
    label: "Fötales Hb (HbF)",
    direction: "left",
    color: "#10b981",
    detail:
      "HbF hat γ-Untereinheiten statt β-Untereinheiten. Es bindet 2,3-BPG schwächer als HbA → höhere O₂-Affinität → Linksverschiebung. Dies ermöglicht dem Fötus, O₂ effizient vom mütterlichen Hämoglobin zu übernehmen. HbF wird nach der Geburt durch HbA ersetzt (bis ~6 Monate).",
  },
];

// Sigmoid curve points for normal curve
function sigmoidPoints(shift: number = 0): string {
  const points: [number, number][] = [];
  // x: pO2 (0-100 mmHg), y: Sättigung (0-100%)
  // Hill-Gleichung: S = pO2^n / (P50^n + pO2^n), n=2.7, P50=26+shift
  const P50 = 26 + shift;
  const n = 2.7;
  for (let pO2 = 0; pO2 <= 100; pO2 += 2) {
    const S = (Math.pow(pO2, n) / (Math.pow(P50, n) + Math.pow(pO2, n))) * 100;
    points.push([pO2, S]);
  }
  return points.map(([x, y]) => `${svgX(x)},${svgY(y)}`).join(" ");
}

const PAD_L = 50;
const PAD_R = 20;
const PAD_T = 20;
const PAD_B = 45;
const W = 380;
const H = 260;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

function svgX(pO2: number) {
  return PAD_L + (pO2 / 100) * PLOT_W;
}
function svgY(sat: number) {
  return PAD_T + PLOT_H - (sat / 100) * PLOT_H;
}

export default function HemoglobinCurve() {
  const [activeShifts, setActiveShifts] = useState<Set<string>>(new Set());
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const activeDetail = shiftFactors.find((f) => f.id === activeInfo);

  function toggleShift(id: string) {
    setActiveShifts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        if (activeInfo === id) setActiveInfo(null);
      } else {
        next.add(id);
        setActiveInfo(id);
      }
      return next;
    });
  }

  const rightShifts = [...activeShifts].filter(
    (id) => shiftFactors.find((f) => f.id === id)?.direction === "right"
  );
  const leftShifts = [...activeShifts].filter(
    (id) => shiftFactors.find((f) => f.id === id)?.direction === "left"
  );
  const shift = rightShifts.length * 8 - leftShifts.length * 8;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Sauerstoff-Dissoziationskurve (Hämoglobin)
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf Faktoren, um Kurvenverschiebungen zu simulieren.
      </p>

      {/* Shift factor buttons */}
      <div className="flex flex-wrap gap-2">
        {shiftFactors.map((f) => (
          <button
            key={f.id}
            onClick={() => toggleShift(f.id)}
            className="px-2 py-1 text-xs rounded-full border transition-all"
            style={{
              borderColor: f.color,
              backgroundColor: activeShifts.has(f.id) ? f.color : "transparent",
              color: activeShifts.has(f.id) ? "white" : f.color,
            }}
          >
            {f.label} {f.direction === "right" ? "→" : "←"}
          </button>
        ))}
      </div>

      <svg role="img" viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
        <title>Sauerstoff-Dissoziationskurve des Hämoglobins</title>

        {/* Axes */}
        <line
          x1={PAD_L}
          y1={PAD_T}
          x2={PAD_L}
          y2={PAD_T + PLOT_H}
          stroke="#6b7280"
          strokeWidth={1.5}
        />
        <line
          x1={PAD_L}
          y1={PAD_T + PLOT_H}
          x2={PAD_L + PLOT_W}
          y2={PAD_T + PLOT_H}
          stroke="#6b7280"
          strokeWidth={1.5}
        />

        {/* Grid + axis labels */}
        {[0, 25, 50, 75, 100].map((v) => (
          <g key={`x${v}`}>
            <line
              x1={svgX(v)}
              y1={PAD_T}
              x2={svgX(v)}
              y2={PAD_T + PLOT_H}
              stroke="#e5e7eb"
              strokeWidth={0.8}
            />
            <text
              x={svgX(v)}
              y={PAD_T + PLOT_H + 12}
              textAnchor="middle"
              fontSize={8}
              fill="#6b7280"
            >
              {v}
            </text>
          </g>
        ))}
        {[0, 25, 50, 75, 100].map((v) => (
          <g key={`y${v}`}>
            <line
              x1={PAD_L}
              y1={svgY(v)}
              x2={PAD_L + PLOT_W}
              y2={svgY(v)}
              stroke="#e5e7eb"
              strokeWidth={0.8}
            />
            <text x={PAD_L - 6} y={svgY(v) + 3} textAnchor="end" fontSize={8} fill="#6b7280">
              {v}%
            </text>
          </g>
        ))}

        {/* Axis titles */}
        <text
          x={PAD_L + PLOT_W / 2}
          y={H - 4}
          textAnchor="middle"
          fontSize={9}
          fill="#374151"
          fontWeight={600}
        >
          pO₂ (mmHg)
        </text>
        <text
          x={12}
          y={PAD_T + PLOT_H / 2}
          textAnchor="middle"
          fontSize={9}
          fill="#374151"
          fontWeight={600}
          transform={`rotate(-90, 12, ${PAD_T + PLOT_H / 2})`}
        >
          O₂-Sättigung (%)
        </text>

        {/* Shifted curve (if active) */}
        {shift !== 0 && (
          <polyline
            points={sigmoidPoints(shift)}
            fill="none"
            stroke={shift > 0 ? "#ef4444" : "#3b82f6"}
            strokeWidth={2}
            strokeDasharray="6,3"
            opacity={0.8}
          />
        )}

        {/* Normal curve */}
        <polyline points={sigmoidPoints(0)} fill="none" stroke="#059669" strokeWidth={2.5} />

        {/* P50 marker */}
        <line
          x1={svgX(26)}
          y1={svgY(50)}
          x2={svgX(26)}
          y2={PAD_T + PLOT_H}
          stroke="#059669"
          strokeWidth={1}
          strokeDasharray="3,2"
        />
        <line
          x1={PAD_L}
          y1={svgY(50)}
          x2={svgX(26)}
          y2={svgY(50)}
          stroke="#059669"
          strokeWidth={1}
          strokeDasharray="3,2"
        />
        <text x={svgX(26) + 3} y={svgY(50) - 4} fontSize={8} fill="#059669" fontWeight={700}>
          P₅₀ = 26 mmHg
        </text>

        {/* Physiological reference points */}
        <circle cx={svgX(40)} cy={svgY(75)} r={4} fill="#0891b2" />
        <text x={svgX(40) + 6} y={svgY(75) + 3} fontSize={7} fill="#0891b2">
          Venös
        </text>
        <circle cx={svgX(95)} cy={svgY(97)} r={4} fill="#dc2626" />
        <text x={svgX(95) - 4} y={svgY(97) - 6} fontSize={7} fill="#dc2626">
          Arteriell
        </text>

        {/* Shift arrows */}
        {shift > 0 && (
          <>
            <text x={svgX(55)} y={svgY(60)} fontSize={9} fill="#ef4444" fontWeight={700}>
              → Rechtsverschiebung
            </text>
            <text x={svgX(55)} y={svgY(60) + 11} fontSize={7} fill="#ef4444">
              mehr O₂-Abgabe ans Gewebe
            </text>
          </>
        )}
        {shift < 0 && (
          <>
            <text x={svgX(20)} y={svgY(80)} fontSize={9} fill="#3b82f6" fontWeight={700}>
              ← Linksverschiebung
            </text>
            <text x={svgX(20)} y={svgY(80) + 11} fontSize={7} fill="#3b82f6">
              mehr O₂-Aufnahme in Lunge
            </text>
          </>
        )}

        {/* Legend */}
        <line
          x1={PAD_L + 5}
          y1={H - 18}
          x2={PAD_L + 22}
          y2={H - 18}
          stroke="#059669"
          strokeWidth={2}
        />
        <text x={PAD_L + 26} y={H - 14} fontSize={7} fill="#059669">
          Normalkurve (HbA, 37°C, pH 7,4)
        </text>
      </svg>

      {activeDetail && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-green-700 dark:text-green-300">
            {activeDetail.label} —{" "}
            {activeDetail.direction === "right" ? "Rechtsverschiebung" : "Linksverschiebung"}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeDetail.detail}</p>
        </div>
      )}
    </div>
  );
}
