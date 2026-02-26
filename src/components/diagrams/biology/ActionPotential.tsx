import { useState } from "react";

const phases = [
  {
    id: "resting",
    label: "Ruhepotential (-70 mV)",
    detail:
      "Stabile Spannung von ca. -70 mV. Na⁺/K⁺-ATPase hält Ionengradienten aufrecht: 3 Na⁺ raus, 2 K⁺ rein. K⁺-Leckstroeme dominieren.",
  },
  {
    id: "threshold",
    label: "Schwellenpotential (-55 mV)",
    detail:
      "Wird das Schwellenpotential erreicht, öffnen sich spannungsgesteuerte Na⁺-Kanäle. Alles-oder-nichts-Prinzip!",
  },
  {
    id: "depol",
    label: "Depolarisation (Na⁺-Einstrom)",
    detail:
      "Spannungsgesteuerte Na⁺-Kanäle öffnen sich. Massiver Na⁺-Einstrom macht Zellinneres positiv. Positiver Feedback.",
  },
  {
    id: "overshoot",
    label: "Overshoot (+30 mV)",
    detail:
      "Membranpotential erreicht ca. +30 mV. Na⁺-Kanäle inaktivieren (Inaktivierungstor schließt). Umkehrpotential für Na⁺.",
  },
  {
    id: "repol",
    label: "Repolarisation (K⁺-Ausstrom)",
    detail:
      "Spannungsgesteuerte K⁺-Kanäle öffnen (verzögert). K⁺ strömt aus der Zelle. Membranpotential fällt wieder.",
  },
  {
    id: "hyper",
    label: "Hyperpolarisation (-80 mV)",
    detail:
      "K⁺-Kanäle schließen langsam → kurzzeitig negativer als Ruhepotential. Refraktärzeit verhindert sofortige Neuerregung.",
  },
];

type Phase = (typeof phases)[number];

export default function ActionPotential() {
  const [active, setActive] = useState<Phase | null>(null);

  /* Graph coordinates */
  const graphL = 80;
  const graphR = 440;
  const graphT = 40;
  const graphB = 300;
  const graphW = graphR - graphL;
  const graphH = graphB - graphT;

  /* mV to y */
  const mvToY = (mv: number) => graphB - ((mv + 90) / 130) * graphH;
  /* ms to x */
  const msToX = (ms: number) => graphL + (ms / 6) * graphW;

  /* AP curve points */
  const curvePoints: [number, number][] = [
    [0, -70],
    [1.0, -70],
    [1.3, -55],
    [1.8, 0],
    [2.0, 30],
    [2.3, 20],
    [2.6, 0],
    [3.0, -50],
    [3.3, -70],
    [3.6, -80],
    [4.0, -75],
    [4.5, -70],
    [6, -70],
  ];

  const pathD = curvePoints
    .map(([ms, mv], i) => `${i === 0 ? "M" : "L"}${msToX(ms).toFixed(1)},${mvToY(mv).toFixed(1)}`)
    .join(" ");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Aktionspotential</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Phasen für Details.</p>

      <svg viewBox="0 0 480 380" className="w-full max-w-xl mx-auto">
        <title>Aktionspotential — Ruhepotential, Depolarisation, Repolarisation</title>
        {/* Grid lines */}
        {[-90, -70, -55, -30, 0, 30].map((mv) => (
          <g key={`grid-${mv}`}>
            <line
              x1={graphL}
              y1={mvToY(mv)}
              x2={graphR}
              y2={mvToY(mv)}
              stroke="#99f6e4"
              strokeWidth="0.5"
              strokeDasharray="4 3"
            />
            <text x={graphL - 5} y={mvToY(mv) + 3} textAnchor="end" fontSize="7" fill="#115e59">
              {mv} mV
            </text>
          </g>
        ))}

        {/* Time axis ticks */}
        {[0, 1, 2, 3, 4, 5, 6].map((ms) => (
          <g key={`t-${ms}`}>
            <line
              x1={msToX(ms)}
              y1={graphB}
              x2={msToX(ms)}
              y2={graphB + 5}
              stroke="#115e59"
              strokeWidth="0.8"
            />
            <text x={msToX(ms)} y={graphB + 15} textAnchor="middle" fontSize="7" fill="#115e59">
              {ms} ms
            </text>
          </g>
        ))}

        {/* Axes */}
        <line
          x1={graphL}
          y1={graphT - 10}
          x2={graphL}
          y2={graphB + 5}
          stroke="#115e59"
          strokeWidth="1.5"
        />
        <line
          x1={graphL - 5}
          y1={graphB}
          x2={graphR + 10}
          y2={graphB}
          stroke="#115e59"
          strokeWidth="1.5"
        />
        {/* Y-axis label */}
        <text
          x="20"
          y={(graphT + graphB) / 2}
          textAnchor="middle"
          fontSize="13"
          fill="#0d9488"
          fontWeight="bold"
          transform={`rotate(-90, 20, ${(graphT + graphB) / 2})`}
        >
          Membranpotential (mV)
        </text>
        {/* X-axis label */}
        <text
          x={(graphL + graphR) / 2}
          y={graphB + 30}
          textAnchor="middle"
          fontSize="13"
          fill="#0d9488"
          fontWeight="bold"
        >
          Zeit (ms)
        </text>

        {/* Threshold line */}
        <line
          x1={graphL}
          y1={mvToY(-55)}
          x2={graphR}
          y2={mvToY(-55)}
          stroke="#f97316"
          strokeWidth="1"
          strokeDasharray="6 3"
          opacity="0.7"
        />
        <text x={graphR + 5} y={mvToY(-55) + 3} fontSize="7" fill="#f97316">
          Schwelle
        </text>

        {/* Resting potential line */}
        <line
          x1={graphL}
          y1={mvToY(-70)}
          x2={graphR}
          y2={mvToY(-70)}
          stroke="#6366f1"
          strokeWidth="1"
          strokeDasharray="6 3"
          opacity="0.5"
        />

        {/* AP curve */}
        <path
          d={pathD}
          fill="none"
          stroke="#0d9488"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Phase shading + clickable zones */}
        {/* Resting */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(phases[0])}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x={msToX(0)}
            y={graphT}
            width={msToX(1.0) - msToX(0)}
            height={graphH}
            fill="#6366f1"
            opacity={active?.id === "resting" ? 0.15 : 0.05}
          />
          <text
            x={(msToX(0) + msToX(1.0)) / 2}
            y={graphT + 15}
            textAnchor="middle"
            fontSize="7"
            fill="#6366f1"
            fontWeight="bold"
          >
            Ruhe
          </text>
        </g>

        {/* Depolarisation */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(phases[2])}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x={msToX(1.0)}
            y={graphT}
            width={msToX(2.0) - msToX(1.0)}
            height={graphH}
            fill="#ef4444"
            opacity={active?.id === "depol" ? 0.15 : 0.05}
          />
          <text
            x={(msToX(1.0) + msToX(2.0)) / 2}
            y={graphT + 15}
            textAnchor="middle"
            fontSize="7"
            fill="#ef4444"
            fontWeight="bold"
          >
            Depolarisation
          </text>
          <text
            x={(msToX(1.0) + msToX(2.0)) / 2}
            y={graphT + 26}
            textAnchor="middle"
            fontSize="6"
            fill="#ef4444"
          >
            Na⁺ Einstrom
          </text>
        </g>

        {/* Overshoot marker */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(phases[3])}
          onMouseLeave={() => setActive(null)}
        >
          <circle
            cx={msToX(2.0)}
            cy={mvToY(30)}
            r="6"
            fill={active?.id === "overshoot" ? "#ccfbf1" : "#f0fdfa"}
            stroke="#0d9488"
            strokeWidth="1.5"
          />
          <text x={msToX(2.0) + 10} y={mvToY(30) - 5} fontSize="7" fill="#0d9488" fontWeight="bold">
            +30 mV
          </text>
          <text x={msToX(2.0) + 10} y={mvToY(30) + 5} fontSize="6" fill="#0d9488">
            Overshoot
          </text>
        </g>

        {/* Repolarisation */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(phases[4])}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x={msToX(2.0)}
            y={graphT}
            width={msToX(3.3) - msToX(2.0)}
            height={graphH}
            fill="#14b8a6"
            opacity={active?.id === "repol" ? 0.15 : 0.05}
          />
          <text
            x={(msToX(2.0) + msToX(3.3)) / 2}
            y={graphT + 15}
            textAnchor="middle"
            fontSize="7"
            fill="#0f766e"
            fontWeight="bold"
          >
            Repolarisation
          </text>
          <text
            x={(msToX(2.0) + msToX(3.3)) / 2}
            y={graphT + 26}
            textAnchor="middle"
            fontSize="6"
            fill="#0f766e"
          >
            K⁺ Ausstrom
          </text>
        </g>

        {/* Hyperpolarisation */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(phases[5])}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x={msToX(3.3)}
            y={graphT}
            width={msToX(4.5) - msToX(3.3)}
            height={graphH}
            fill="#8b5cf6"
            opacity={active?.id === "hyper" ? 0.15 : 0.05}
          />
          <text
            x={(msToX(3.3) + msToX(4.5)) / 2}
            y={mvToY(-80) - 8}
            textAnchor="middle"
            fontSize="6"
            fill="#8b5cf6"
            fontWeight="bold"
          >
            Hyperpol.
          </text>
          <text
            x={(msToX(3.3) + msToX(4.5)) / 2}
            y={mvToY(-80) + 4}
            textAnchor="middle"
            fontSize="6"
            fill="#8b5cf6"
          >
            -80 mV
          </text>
        </g>

        {/* Threshold marker */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(phases[1])}
          onMouseLeave={() => setActive(null)}
        >
          <circle
            cx={msToX(1.3)}
            cy={mvToY(-55)}
            r="5"
            fill={active?.id === "threshold" ? "#fef3c7" : "#fff7ed"}
            stroke="#f97316"
            strokeWidth="1.5"
          />
        </g>

        {/* Ion channel annotations */}
        <rect
          x={msToX(1.2)}
          y={graphB + 35}
          width={msToX(2.0) - msToX(1.2)}
          height="18"
          rx="4"
          fill="#fecaca"
          opacity="0.6"
        />
        <text
          x={(msToX(1.2) + msToX(2.0)) / 2}
          y={graphB + 47}
          textAnchor="middle"
          fontSize="6"
          fill="#dc2626"
          fontWeight="bold"
        >
          Na⁺-Kanäle offen
        </text>

        <rect
          x={msToX(2.0)}
          y={graphB + 35}
          width={msToX(4.0) - msToX(2.0)}
          height="18"
          rx="4"
          fill="#ccfbf1"
          opacity="0.6"
        />
        <text
          x={(msToX(2.0) + msToX(4.0)) / 2}
          y={graphB + 47}
          textAnchor="middle"
          fontSize="6"
          fill="#0f766e"
          fontWeight="bold"
        >
          K⁺-Kanäle offen
        </text>

        {/* Na/K pump label */}
        <text
          x={msToX(5)}
          y={graphB + 47}
          textAnchor="middle"
          fontSize="6"
          fill="#6366f1"
          fontWeight="bold"
        >
          Na⁺/K⁺-ATPase
        </text>
      </svg>

      {active && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">{active.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{active.detail}</p>
        </div>
      )}
    </div>
  );
}
