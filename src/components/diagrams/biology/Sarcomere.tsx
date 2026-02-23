import { useState } from "react";

const parts = [
  {
    id: "z-line",
    label: "Z-Scheibe",
    detail: "Begrenzung des Sarkomers, verankert Aktinfilamente. Besteht aus α-Actinin.",
  },
  {
    id: "actin",
    label: "Aktinfilament (dünnes Filament)",
    detail:
      "Besteht aus F-Aktin mit Troponin und Tropomyosin. Bindet Myosinköpfe während Kontraktion.",
  },
  {
    id: "myosin",
    label: "Myosinfilament (dickes Filament)",
    detail: "Motor-Protein mit beweglichen Köpfen (Querbrücken), spaltet ATP für Kontraktion.",
  },
  {
    id: "i-band",
    label: "I-Bande (isotrop)",
    detail: "Helle Zone mit nur Aktinfilamenten. Verkürzt sich bei Kontraktion.",
  },
  {
    id: "a-band",
    label: "A-Bande (anisotrop)",
    detail: "Dunkle Zone über gesamte Länge der Myosinfilamente. Länge bleibt konstant.",
  },
  {
    id: "h-zone",
    label: "H-Zone",
    detail:
      "Zentrum mit nur Myosinfilamenten, keine Überlappung. Verschwindet fast bei maximaler Kontraktion.",
  },
  {
    id: "m-line",
    label: "M-Linie",
    detail: "Mittelstruktur des Sarkomers, hält Myosinfilamente in Position.",
  },
  {
    id: "titin",
    label: "Titin",
    detail:
      "Elastisches Riesenprotein, verbindet Z-Scheibe mit Myosin, stabilisiert und verhindert Überdehnung.",
  },
  {
    id: "troponin",
    label: "Troponin + Tropomyosin",
    detail:
      "Regulatorische Proteine auf Aktin. Ca²⁺ bindet an Troponin → Freigabe der Myosin-Bindungsstellen.",
  },
];

type Part = (typeof parts)[number];

export default function Sarcomere() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Sarkomer — Muskelkontraktion
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf Strukturen für Details zur Gleitfilamenttheorie.
      </p>
      <svg viewBox="0 0 600 420" className="w-full max-w-2xl mx-auto">
        <defs>
          {/* Gradient for depth */}
          <linearGradient id="actinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="myosinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text
          x="300"
          y="20"
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          className="fill-gray-900 dark:fill-gray-100"
        >
          Gleitfilamenttheorie der Muskelkontraktion
        </text>

        {/* ============ RELAXED STATE (TOP) ============ */}
        <g id="relaxed-state">
          <text
            x="10"
            y="50"
            fontSize="12"
            fontWeight="600"
            className="fill-gray-700 dark:fill-gray-300"
          >
            Relaxierter Zustand
          </text>

          {/* I-band backgrounds (left and right) */}
          <rect x="50" y="60" width="60" height="80" fill="#fef3c7" opacity="0.4" />
          <rect x="490" y="60" width="60" height="80" fill="#fef3c7" opacity="0.4" />

          {/* A-band background */}
          <rect x="110" y="60" width="380" height="80" fill="#dbeafe" opacity="0.4" />

          {/* H-zone background */}
          <rect x="240" y="60" width="120" height="80" fill="#e0f2fe" opacity="0.6" />

          {/* Left Z-line */}
          <rect
            x="48"
            y="60"
            width="4"
            height="80"
            fill="#1f2937"
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "z-line") || null)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Right Z-line */}
          <rect
            x="548"
            y="60"
            width="4"
            height="80"
            fill="#1f2937"
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "z-line") || null)}
            onMouseLeave={() => setActive(null)}
          />

          {/* M-line */}
          <line
            x1="300"
            y1="65"
            x2="300"
            y2="135"
            stroke="#6b7280"
            strokeWidth="2"
            strokeDasharray="3,3"
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "m-line") || null)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Actin filaments (thin, red) - from Z-lines */}
          {/* Left side actin */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "actin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <rect x="52" y="72" width="180" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="52" y="85" width="180" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="52" y="98" width="180" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="52" y="111" width="180" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="52" y="124" width="180" height="6" fill="url(#actinGrad)" rx="3" />
          </g>

          {/* Right side actin */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "actin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <rect x="368" y="72" width="180" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="368" y="85" width="180" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="368" y="98" width="180" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="368" y="111" width="180" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="368" y="124" width="180" height="6" fill="url(#actinGrad)" rx="3" />
          </g>

          {/* Myosin filaments (thick, blue) - central */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "myosin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <rect x="180" y="70" width="240" height="10" fill="url(#myosinGrad)" rx="3" />
            <rect x="180" y="88" width="240" height="10" fill="url(#myosinGrad)" rx="3" />
            <rect x="180" y="106" width="240" height="10" fill="url(#myosinGrad)" rx="3" />
            <rect x="180" y="124" width="240" height="10" fill="url(#myosinGrad)" rx="3" />
            {/* Myosin heads (cross-bridges) */}
            <circle cx="200" cy="75" r="3" fill="#1e40af" />
            <circle cx="220" cy="75" r="3" fill="#1e40af" />
            <circle cx="240" cy="93" r="3" fill="#1e40af" />
            <circle cx="260" cy="93" r="3" fill="#1e40af" />
            <circle cx="340" cy="111" r="3" fill="#1e40af" />
            <circle cx="360" cy="111" r="3" fill="#1e40af" />
            <circle cx="380" cy="129" r="3" fill="#1e40af" />
            <circle cx="400" cy="129" r="3" fill="#1e40af" />
          </g>

          {/* Titin (elastic, green spring) */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "titin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <path
              d="M 52 100 Q 70 95, 88 100 T 124 100 T 160 100 T 180 100"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2,2"
            />
            <path
              d="M 420 100 Q 438 95, 456 100 T 492 100 T 528 100 T 548 100"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2,2"
            />
          </g>

          {/* Troponin/Tropomyosin markers */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "troponin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <circle cx="100" cy="75" r="2.5" fill="#f59e0b" />
            <circle cx="140" cy="88" r="2.5" fill="#f59e0b" />
            <circle cx="180" cy="101" r="2.5" fill="#f59e0b" />
            <circle cx="420" cy="75" r="2.5" fill="#f59e0b" />
            <circle cx="460" cy="88" r="2.5" fill="#f59e0b" />
            <circle cx="500" cy="101" r="2.5" fill="#f59e0b" />
          </g>

          {/* Labels with leader lines */}
          {/* I-band label */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "i-band") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <line x1="80" y1="145" x2="80" y2="155" stroke="#94a3b8" strokeDasharray="2,2" />
            <text
              x="80"
              y="165"
              fontSize="9"
              textAnchor="middle"
              className="fill-gray-600 dark:fill-gray-400"
            >
              I-Bande
            </text>
          </g>

          {/* A-band label */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "a-band") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <line x1="300" y1="145" x2="300" y2="155" stroke="#94a3b8" strokeDasharray="2,2" />
            <text
              x="300"
              y="165"
              fontSize="9"
              textAnchor="middle"
              className="fill-gray-600 dark:fill-gray-400"
            >
              A-Bande
            </text>
          </g>

          {/* H-zone label */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "h-zone") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <line x1="300" y1="60" x2="300" y2="50" stroke="#94a3b8" strokeDasharray="2,2" />
            <text
              x="300"
              y="45"
              fontSize="9"
              textAnchor="middle"
              className="fill-gray-600 dark:fill-gray-400"
            >
              H-Zone
            </text>
          </g>

          {/* Sarcomere bracket */}
          <path
            d="M 50 145 L 50 150 L 550 150 L 550 145"
            stroke="#1f2937"
            strokeWidth="1.5"
            fill="none"
          />
          <text
            x="300"
            y="180"
            fontSize="10"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
          >
            Sarkomer (≈2.2 μm)
          </text>
        </g>

        {/* ============ CONTRACTED STATE (BOTTOM) ============ */}
        <g id="contracted-state">
          <text
            x="10"
            y="215"
            fontSize="12"
            fontWeight="600"
            className="fill-gray-700 dark:fill-gray-300"
          >
            Kontrahierter Zustand
          </text>

          {/* Contraction arrows */}
          <path
            d="M 120 200 L 140 200"
            stroke="#dc2626"
            strokeWidth="2"
            markerEnd="url(#arrowRed)"
          />
          <path
            d="M 480 200 L 460 200"
            stroke="#dc2626"
            strokeWidth="2"
            markerEnd="url(#arrowRed)"
          />
          <defs>
            <marker
              id="arrowRed"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#dc2626" />
            </marker>
          </defs>

          {/* I-band backgrounds (narrower) */}
          <rect x="110" y="225" width="40" height="80" fill="#fef3c7" opacity="0.4" />
          <rect x="450" y="225" width="40" height="80" fill="#fef3c7" opacity="0.4" />

          {/* A-band background (same width) */}
          <rect x="150" y="225" width="300" height="80" fill="#dbeafe" opacity="0.4" />

          {/* H-zone background (much narrower) */}
          <rect x="275" y="225" width="50" height="80" fill="#e0f2fe" opacity="0.6" />

          {/* Left Z-line */}
          <rect
            x="108"
            y="225"
            width="4"
            height="80"
            fill="#1f2937"
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "z-line") || null)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Right Z-line */}
          <rect
            x="488"
            y="225"
            width="4"
            height="80"
            fill="#1f2937"
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "z-line") || null)}
            onMouseLeave={() => setActive(null)}
          />

          {/* M-line */}
          <line
            x1="300"
            y1="230"
            x2="300"
            y2="300"
            stroke="#6b7280"
            strokeWidth="2"
            strokeDasharray="3,3"
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "m-line") || null)}
            onMouseLeave={() => setActive(null)}
          />

          {/* Actin filaments (more overlap) */}
          {/* Left side actin - deeper into center */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "actin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <rect x="112" y="237" width="210" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="112" y="250" width="210" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="112" y="263" width="210" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="112" y="276" width="210" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="112" y="289" width="210" height="6" fill="url(#actinGrad)" rx="3" />
          </g>

          {/* Right side actin - deeper into center */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "actin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <rect x="278" y="237" width="210" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="278" y="250" width="210" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="278" y="263" width="210" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="278" y="276" width="210" height="6" fill="url(#actinGrad)" rx="3" />
            <rect x="278" y="289" width="210" height="6" fill="url(#actinGrad)" rx="3" />
          </g>

          {/* Myosin filaments (same size, central) */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "myosin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <rect x="150" y="235" width="300" height="10" fill="url(#myosinGrad)" rx="3" />
            <rect x="150" y="253" width="300" height="10" fill="url(#myosinGrad)" rx="3" />
            <rect x="150" y="271" width="300" height="10" fill="url(#myosinGrad)" rx="3" />
            <rect x="150" y="289" width="300" height="10" fill="url(#myosinGrad)" rx="3" />
            {/* More cross-bridges engaged */}
            <circle cx="170" cy="240" r="3" fill="#1e40af" />
            <circle cx="190" cy="240" r="3" fill="#1e40af" />
            <circle cx="210" cy="258" r="3" fill="#1e40af" />
            <circle cx="230" cy="258" r="3" fill="#1e40af" />
            <circle cx="250" cy="276" r="3" fill="#1e40af" />
            <circle cx="270" cy="276" r="3" fill="#1e40af" />
            <circle cx="330" cy="276" r="3" fill="#1e40af" />
            <circle cx="350" cy="276" r="3" fill="#1e40af" />
            <circle cx="370" cy="258" r="3" fill="#1e40af" />
            <circle cx="390" cy="258" r="3" fill="#1e40af" />
            <circle cx="410" cy="240" r="3" fill="#1e40af" />
            <circle cx="430" cy="240" r="3" fill="#1e40af" />
          </g>

          {/* Titin (compressed spring) */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "titin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <path
              d="M 112 265 Q 120 260, 128 265 T 144 265 T 150 265"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2,2"
            />
            <path
              d="M 450 265 Q 458 260, 466 265 T 482 265 T 488 265"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2,2"
            />
          </g>

          {/* Troponin/Tropomyosin markers */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "troponin") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <circle cx="150" cy="240" r="2.5" fill="#f59e0b" />
            <circle cx="190" cy="253" r="2.5" fill="#f59e0b" />
            <circle cx="230" cy="266" r="2.5" fill="#f59e0b" />
            <circle cx="370" cy="240" r="2.5" fill="#f59e0b" />
            <circle cx="410" cy="253" r="2.5" fill="#f59e0b" />
            <circle cx="450" cy="266" r="2.5" fill="#f59e0b" />
          </g>

          {/* Labels */}
          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "i-band") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <line x1="130" y1="310" x2="130" y2="320" stroke="#94a3b8" strokeDasharray="2,2" />
            <text
              x="130"
              y="330"
              fontSize="9"
              textAnchor="middle"
              className="fill-gray-600 dark:fill-gray-400"
            >
              I-Bande
            </text>
          </g>

          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "a-band") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <line x1="300" y1="310" x2="300" y2="320" stroke="#94a3b8" strokeDasharray="2,2" />
            <text
              x="300"
              y="330"
              fontSize="9"
              textAnchor="middle"
              className="fill-gray-600 dark:fill-gray-400"
            >
              A-Bande
            </text>
          </g>

          <g
            cursor="pointer"
            onMouseEnter={() => setActive(parts.find((p) => p.id === "h-zone") || null)}
            onMouseLeave={() => setActive(null)}
          >
            <line x1="300" y1="225" x2="300" y2="215" stroke="#94a3b8" strokeDasharray="2,2" />
            <text
              x="300"
              y="210"
              fontSize="9"
              textAnchor="middle"
              className="fill-gray-600 dark:fill-gray-400"
            >
              H-Zone
            </text>
          </g>

          {/* Sarcomere bracket (shorter) */}
          <path
            d="M 110 310 L 110 315 L 490 315 L 490 310"
            stroke="#1f2937"
            strokeWidth="1.5"
            fill="none"
          />
          <text
            x="300"
            y="345"
            fontSize="10"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
          >
            Sarkomer (≈1.5 μm)
          </text>
        </g>

        {/* Legend */}
        <g id="legend" transform="translate(10, 365)">
          <text
            x="0"
            y="0"
            fontSize="9"
            fontWeight="600"
            className="fill-gray-700 dark:fill-gray-300"
          >
            Legende:
          </text>
          <rect x="0" y="5" width="20" height="4" fill="url(#actinGrad)" rx="1" />
          <text x="25" y="10" fontSize="8" className="fill-gray-600 dark:fill-gray-400">
            Aktin
          </text>

          <rect x="70" y="5" width="20" height="4" fill="url(#myosinGrad)" rx="1" />
          <text x="95" y="10" fontSize="8" className="fill-gray-600 dark:fill-gray-400">
            Myosin
          </text>

          <line
            x1="140"
            y1="7"
            x2="160"
            y2="7"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="2,2"
          />
          <text x="165" y="10" fontSize="8" className="fill-gray-600 dark:fill-gray-400">
            Titin
          </text>

          <circle cx="210" cy="7" r="2.5" fill="#f59e0b" />
          <text x="220" y="10" fontSize="8" className="fill-gray-600 dark:fill-gray-400">
            Troponin
          </text>

          <rect x="280" y="5" width="4" height="8" fill="#1f2937" />
          <text x="290" y="10" fontSize="8" className="fill-gray-600 dark:fill-gray-400">
            Z-Scheibe
          </text>
        </g>

        {/* Mechanism note */}
        <text
          x="300"
          y="395"
          fontSize="8"
          textAnchor="middle"
          className="fill-gray-500 dark:fill-gray-500"
          fontStyle="italic"
        >
          Bei Kontraktion: Ca²⁺ → Troponin → Freigabe Bindungsstellen → Myosin zieht Aktin →
          Sarkomer verkürzt sich
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
