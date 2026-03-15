import { useState } from "react";

type View = "single" | "network";

export default function WaterMolecule() {
  const [view, setView] = useState<View>("single");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Wassermolekül — H₂O Struktur und Wasserstoffbrücken
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Gewinkelte Geometrie (104,5°), Partialladungen und Wasserstoffbrückennetzwerk.
      </p>

      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setView("single")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            view === "single"
              ? "bg-teal-600 text-white border-teal-600"
              : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Einzelmolekül
        </button>
        <button
          onClick={() => setView("network")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            view === "network"
              ? "bg-teal-600 text-white border-teal-600"
              : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          H-Brücken-Netzwerk
        </button>
      </div>

      {view === "single" ? (
        <svg viewBox="0 0 480 300" className="w-full max-w-lg mx-auto">
          <title>Wassermolekül — gewinkelte Geometrie, Partialladungen und Dipolmoment</title>
          <defs>
            <radialGradient id="oGrad" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#fca5a5" />
              <stop offset="100%" stopColor="#dc2626" />
            </radialGradient>
            <radialGradient id="hGrad" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#38bdf8" />
            </radialGradient>
            <marker
              id="dipoleArrow"
              markerWidth="8"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L8,3 L0,6" fill="#6d28d9" />
            </marker>
          </defs>

          {/* Title */}
          <text x="240" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            H₂O — Gewinkeltes Molekül
          </text>

          {/* O atom */}
          <circle cx="240" cy="140" r="38" fill="url(#oGrad)" stroke="#b91c1c" strokeWidth="2" />
          <text x="240" y="144" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">
            O
          </text>
          <text x="240" y="158" textAnchor="middle" fontSize="9" fill="#fecaca">
            δ⁻
          </text>

          {/* Lone pairs */}
          <ellipse
            cx="240"
            cy="102"
            rx="10"
            ry="5"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />
          <ellipse cx="240" cy="95" rx="10" ry="5" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
          <text x="270" y="98" fontSize="9" fill="#d97706">
            freie e⁻-Paare
          </text>

          {/* H-O bonds */}
          <line x1="207" y1="165" x2="155" y2="215" stroke="#374151" strokeWidth="3" />
          <line x1="273" y1="165" x2="325" y2="215" stroke="#374151" strokeWidth="3" />

          {/* H atoms */}
          <circle cx="140" cy="225" r="24" fill="url(#hGrad)" stroke="#0284c7" strokeWidth="1.5" />
          <text x="140" y="229" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0c4a6e">
            H
          </text>
          <text x="140" y="243" textAnchor="middle" fontSize="9" fill="#0369a1">
            δ⁺
          </text>

          <circle cx="340" cy="225" r="24" fill="url(#hGrad)" stroke="#0284c7" strokeWidth="1.5" />
          <text x="340" y="229" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0c4a6e">
            H
          </text>
          <text x="340" y="243" textAnchor="middle" fontSize="9" fill="#0369a1">
            δ⁺
          </text>

          {/* Angle arc */}
          <path
            d="M 175 210 A 50 50 0 0 1 305 210"
            fill="none"
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text x="240" y="208" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="bold">
            104,5°
          </text>

          {/* Dipole moment arrow */}
          <line
            x1="240"
            y1="180"
            x2="240"
            y2="130"
            stroke="#6d28d9"
            strokeWidth="2"
            markerEnd="url(#dipoleArrow)"
            strokeDasharray="4 2"
          />
          <text x="260" y="158" fontSize="9" fill="#6d28d9">
            Dipolmoment
          </text>
          <text x="260" y="170" fontSize="9" fill="#6d28d9">
            μ = 1,85 D
          </text>

          {/* Info box */}
          <rect
            x="10"
            y="45"
            width="130"
            height="70"
            rx="6"
            fill="#f0fdf4"
            stroke="#bbf7d0"
            strokeWidth="1"
          />
          <text x="75" y="62" textAnchor="middle" fontSize="9" fill="#15803d" fontWeight="bold">
            Eigenschaften
          </text>
          <text x="75" y="76" textAnchor="middle" fontSize="8" fill="#374151">
            Bindungswinkel: 104,5°
          </text>
          <text x="75" y="89" textAnchor="middle" fontSize="8" fill="#374151">
            Bindungslänge: 96 pm
          </text>
          <text x="75" y="102" textAnchor="middle" fontSize="8" fill="#374151">
            Geometrie: gewinkelt
          </text>
          <text x="75" y="115" textAnchor="middle" fontSize="8" fill="#374151">
            Hybridisierung: sp³
          </text>

          <text x="240" y="290" textAnchor="middle" fontSize="9" fill="#6b7280">
            Polare Atombindungen + gewinkelte Geometrie → Dipol
          </text>
        </svg>
      ) : (
        <svg viewBox="0 0 480 300" className="w-full max-w-lg mx-auto">
          <title>Wasserstoffbrücken-Netzwerk im flüssigen Wasser</title>
          <defs>
            <radialGradient id="oGrad2" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#fca5a5" />
              <stop offset="100%" stopColor="#dc2626" />
            </radialGradient>
            <radialGradient id="hGrad2" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#38bdf8" />
            </radialGradient>
          </defs>

          <text x="240" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
            Wasserstoffbrücken-Netzwerk (H-Brücken)
          </text>

          {/* Central molecule */}
          {[
            { ox: 240, oy: 140, h1x: 210, h1y: 168, h2x: 270, h2y: 168 },
            { ox: 130, oy: 80, h1x: 105, h1y: 105, h2x: 155, h2y: 100 },
            { ox: 350, oy: 80, h1x: 325, h1y: 100, h2x: 372, h2y: 104 },
            { ox: 130, oy: 210, h1x: 105, h1y: 185, h2x: 115, h2y: 235 },
            { ox: 350, oy: 210, h1x: 375, h1y: 188, h2x: 370, h2y: 234 },
          ].map(({ ox, oy, h1x, h1y, h2x, h2y }, i) => (
            <g key={i}>
              <line x1={ox} y1={oy} x2={h1x} y2={h1y} stroke="#374151" strokeWidth="2.5" />
              <line x1={ox} y1={oy} x2={h2x} y2={h2y} stroke="#374151" strokeWidth="2.5" />
              <circle
                cx={ox}
                cy={oy}
                r={i === 0 ? 22 : 18}
                fill="url(#oGrad2)"
                stroke="#b91c1c"
                strokeWidth="1.5"
              />
              <text
                x={ox}
                y={oy + 4}
                textAnchor="middle"
                fontSize={i === 0 ? "12" : "10"}
                fontWeight="bold"
                fill="white"
              >
                O
              </text>
              <circle
                cx={h1x}
                cy={h1y}
                r={i === 0 ? 13 : 11}
                fill="url(#hGrad2)"
                stroke="#0284c7"
                strokeWidth="1"
              />
              <text
                x={h1x}
                y={h1y + 3}
                textAnchor="middle"
                fontSize="8"
                fontWeight="bold"
                fill="#0c4a6e"
              >
                H
              </text>
              <circle
                cx={h2x}
                cy={h2y}
                r={i === 0 ? 13 : 11}
                fill="url(#hGrad2)"
                stroke="#0284c7"
                strokeWidth="1"
              />
              <text
                x={h2x}
                y={h2y + 3}
                textAnchor="middle"
                fontSize="8"
                fontWeight="bold"
                fill="#0c4a6e"
              >
                H
              </text>
            </g>
          ))}

          {/* H-bonds (dashed) */}
          <line
            x1="215"
            y1="155"
            x2="148"
            y2="97"
            stroke="#6d28d9"
            strokeWidth="1.8"
            strokeDasharray="5 3"
          />
          <line
            x1="265"
            y1="155"
            x2="332"
            y2="97"
            stroke="#6d28d9"
            strokeWidth="1.8"
            strokeDasharray="5 3"
          />
          <line
            x1="215"
            y1="163"
            x2="141"
            y2="195"
            stroke="#6d28d9"
            strokeWidth="1.8"
            strokeDasharray="5 3"
          />
          <line
            x1="265"
            y1="163"
            x2="339"
            y2="196"
            stroke="#6d28d9"
            strokeWidth="1.8"
            strokeDasharray="5 3"
          />

          {/* Legend */}
          <line x1="20" y1="262" x2="50" y2="262" stroke="#374151" strokeWidth="2.5" />
          <text x="56" y="266" fontSize="9" fill="#374151">
            kovalente O–H Bindung
          </text>
          <line
            x1="20"
            y1="278"
            x2="50"
            y2="278"
            stroke="#6d28d9"
            strokeWidth="1.8"
            strokeDasharray="5 3"
          />
          <text x="56" y="282" fontSize="9" fill="#6d28d9">
            Wasserstoffbrücke (H-Brücke)
          </text>

          <text x="390" y="266" textAnchor="middle" fontSize="8" fill="#6b7280">
            ~20 kJ/mol
          </text>
          <text x="390" y="278" textAnchor="middle" fontSize="8" fill="#6b7280">
            pro H-Brücke
          </text>
        </svg>
      )}

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {view === "single"
            ? "H₂O ist ein Dipolmolekül: die 2 freien Elektronenpaare am O-Atom drängen die H-Atome auf 104,5° zusammen (weniger als Tetraederwinkel 109,5°)."
            : "Jedes Wassermolekül kann bis zu 4 Wasserstoffbrücken eingehen (2 als Donor, 2 als Akzeptor). Dies erklärt die hohe Siedetemperatur (100 °C) und Oberflächenspannung."}
        </p>
      </div>
    </div>
  );
}
