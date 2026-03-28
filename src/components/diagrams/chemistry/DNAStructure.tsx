import { useState } from "react";

type Focus = "backbone" | "bases" | "direction" | "bonds";

export default function DNAStructure() {
  const [focus, setFocus] = useState<Focus>("backbone");

  const INFO: Record<Focus, string> = {
    backbone:
      "Zucker-Phosphat-Rückgrat: Abwechselnd Desoxyribose (Pentose) und Phosphatgruppe (–PO₄²⁻). Das Rückgrat ist hydrophil und liegt außen. Zwei antiparallele Stränge bilden die Doppelhelix.",
    bases:
      "Basenpaare: Adenin–Thymin (2 H-Brücken), Guanin–Cytosin (3 H-Brücken). Chargaff-Regel: [A]=[T], [G]=[C]. Purine (A, G): Doppelringe. Pyrimidine (T, C): Einzelringe.",
    direction:
      "Antiparallel: Ein Strang läuft 5'→3', der andere 3'→5'. 5'-Ende: freie Phosphatgruppe. 3'-Ende: freie OH-Gruppe. DNA-Polymerase synthetisiert nur 5'→3'.",
    bonds:
      "Kovalente Bindungen: Phosphodiesterbindungen im Rückgrat (stark). Nicht-kovalente Bindungen: Wasserstoffbrücken zwischen Basen (schwach, reversibel → Denaturierung). Stapelung (π-π): stabilisiert zusätzlich.",
  };

  const phosphateColor = "#dc2626";
  const sugarColor = "#d97706";
  const atColor = "#2563eb";
  const gcColor = "#16a34a";

  // Draw two DNA strands side by side with base pairs
  const pairs: { base1: string; base2: string; color: string }[] = [
    { base1: "A", base2: "T", color: atColor },
    { base1: "G", base2: "C", color: gcColor },
    { base1: "T", base2: "A", color: atColor },
    { base1: "C", base2: "G", color: gcColor },
    { base1: "A", base2: "T", color: atColor },
    { base1: "G", base2: "C", color: gcColor },
  ];

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        DNA-Struktur — Chemischer Aufbau
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Zucker-Phosphat-Rückgrat, Basenpaare, 5'→3'-Richtung, Wasserstoffbrücken.
      </p>

      <div className="flex gap-2 mb-2 flex-wrap">
        {(["backbone", "bases", "direction", "bonds"] as Focus[]).map((f) => (
          <button
            key={f}
            onClick={() => setFocus(f)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              focus === f
                ? "bg-sky-600 text-white border-sky-600"
                : "border-sky-300 text-sky-700 dark:text-sky-300 dark:border-sky-700"
            }`}
          >
            {f === "backbone"
              ? "Rückgrat"
              : f === "bases"
                ? "Basen"
                : f === "direction"
                  ? "5'→3'"
                  : "Bindungen"}
          </button>
        ))}
      </div>

      <svg role="img" viewBox="0 0 480 320" className="w-full max-w-lg mx-auto">
        <title>DNA-Struktur — chemischer Aufbau</title>
        <defs>
          <radialGradient id="pGrad" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#dc2626" />
          </radialGradient>
          <radialGradient id="sGrad" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
        </defs>

        {/* Title */}
        <text x="240" y="18" textAnchor="middle" fontSize="12" fill="#0369a1" fontWeight="bold">
          DNA-Doppelstrang (vereinfacht, flach dargestellt)
        </text>

        {/* 5' / 3' direction labels */}
        <text x="55" y="42" fontSize="10" fill="#0369a1" fontWeight="bold">
          5'
        </text>
        <text x="55" y="295" fontSize="10" fill="#0369a1" fontWeight="bold">
          3'
        </text>
        <text x="405" y="42" fontSize="10" fill="#0369a1" fontWeight="bold">
          3'
        </text>
        <text x="405" y="295" fontSize="10" fill="#0369a1" fontWeight="bold">
          5'
        </text>

        {/* Direction arrows */}
        <line
          x1="68"
          y1="40"
          x2="68"
          y2="285"
          stroke="#0369a1"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        <polygon points="68,285 63,273 73,273" fill="#0369a1" />
        <line
          x1="412"
          y1="285"
          x2="412"
          y2="40"
          stroke="#0369a1"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        <polygon points="412,40 407,52 417,52" fill="#0369a1" />

        {pairs.map((pair, i) => {
          const y = 55 + i * 40;
          const leftSugarX = 100;
          const rightSugarX = 360;
          const leftPhosX = 100;
          const rightPhosX = 360;

          return (
            <g key={i}>
              {/* Phosphate left */}
              <circle
                cx={leftPhosX - 28}
                cy={y}
                r={focus === "backbone" ? 12 : 10}
                fill={focus === "backbone" ? "url(#pGrad)" : "#fca5a580"}
                stroke={phosphateColor}
                strokeWidth="1.2"
              />
              <text
                x={leftPhosX - 28}
                y={y + 4}
                textAnchor="middle"
                fontSize="7"
                fill="#fff"
                fontWeight="bold"
              >
                P
              </text>

              {/* Sugar left */}
              <rect
                x={leftSugarX - 13}
                y={y - 10}
                width="26"
                height="20"
                rx="4"
                fill={focus === "backbone" ? "url(#sGrad)" : "#fde68a80"}
                stroke={sugarColor}
                strokeWidth="1.2"
              />
              <text
                x={leftSugarX}
                y={y + 4}
                textAnchor="middle"
                fontSize="7"
                fill="#92400e"
                fontWeight="bold"
              >
                dR
              </text>

              {/* Base left */}
              <rect
                x={leftSugarX + 18}
                y={y - 9}
                width="55"
                height="18"
                rx="3"
                fill={focus === "bases" ? pair.color + "33" : "#f3f4f6"}
                stroke={pair.color}
                strokeWidth="1.2"
              />
              <text
                x={leftSugarX + 46}
                y={y + 4}
                textAnchor="middle"
                fontSize="10"
                fill={pair.color}
                fontWeight="bold"
              >
                {pair.base1}
              </text>

              {/* H-bonds */}
              {(focus === "bonds" || focus === "bases") && (
                <>
                  <line
                    x1={leftSugarX + 74}
                    y1={y}
                    x2={rightSugarX - 74}
                    y2={y}
                    stroke={pair.color}
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                  <text x="240" y={y + 4} textAnchor="middle" fontSize="8" fill={pair.color}>
                    {pair.color === atColor ? "2 H" : "3 H"}
                  </text>
                </>
              )}
              {focus !== "bonds" && focus !== "bases" && (
                <line
                  x1={leftSugarX + 74}
                  y1={y}
                  x2={rightSugarX - 74}
                  y2={y}
                  stroke="#d1d5db"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                />
              )}

              {/* Base right */}
              <rect
                x={rightSugarX - 73}
                y={y - 9}
                width="55"
                height="18"
                rx="3"
                fill={focus === "bases" ? pair.color + "33" : "#f3f4f6"}
                stroke={pair.color}
                strokeWidth="1.2"
              />
              <text
                x={rightSugarX - 46}
                y={y + 4}
                textAnchor="middle"
                fontSize="10"
                fill={pair.color}
                fontWeight="bold"
              >
                {pair.base2}
              </text>

              {/* Sugar right */}
              <rect
                x={rightSugarX - 13}
                y={y - 10}
                width="26"
                height="20"
                rx="4"
                fill={focus === "backbone" ? "url(#sGrad)" : "#fde68a80"}
                stroke={sugarColor}
                strokeWidth="1.2"
              />
              <text
                x={rightSugarX}
                y={y + 4}
                textAnchor="middle"
                fontSize="7"
                fill="#92400e"
                fontWeight="bold"
              >
                dR
              </text>

              {/* Phosphate right */}
              <circle
                cx={rightPhosX + 28}
                cy={y}
                r={focus === "backbone" ? 12 : 10}
                fill={focus === "backbone" ? "url(#pGrad)" : "#fca5a580"}
                stroke={phosphateColor}
                strokeWidth="1.2"
              />
              <text
                x={rightPhosX + 28}
                y={y + 4}
                textAnchor="middle"
                fontSize="7"
                fill="#fff"
                fontWeight="bold"
              >
                P
              </text>

              {/* Vertical backbone bonds */}
              {i < pairs.length - 1 && (
                <>
                  <line
                    x1={leftPhosX - 28}
                    y1={y + 12}
                    x2={leftPhosX - 28}
                    y2={y + 28}
                    stroke={phosphateColor}
                    strokeWidth="1.5"
                  />
                  <line
                    x1={leftSugarX}
                    y1={y + 10}
                    x2={leftSugarX}
                    y2={y + 30}
                    stroke={sugarColor}
                    strokeWidth="1.5"
                  />
                  <line
                    x1={rightPhosX + 28}
                    y1={y + 12}
                    x2={rightPhosX + 28}
                    y2={y + 28}
                    stroke={phosphateColor}
                    strokeWidth="1.5"
                  />
                  <line
                    x1={rightSugarX}
                    y1={y + 10}
                    x2={rightSugarX}
                    y2={y + 30}
                    stroke={sugarColor}
                    strokeWidth="1.5"
                  />
                </>
              )}
            </g>
          );
        })}

        {/* Legend */}
        <circle cx="80" cy="300" r="6" fill="url(#pGrad)" stroke={phosphateColor} strokeWidth="1" />
        <text x="92" y="304" fontSize="9" fill="#6b7280">
          Phosphat
        </text>
        <rect
          x="148"
          y="294"
          width="14"
          height="12"
          rx="2"
          fill="url(#sGrad)"
          stroke={sugarColor}
          strokeWidth="1"
        />
        <text x="168" y="304" fontSize="9" fill="#6b7280">
          Desoxyribose
        </text>
        <rect
          x="258"
          y="294"
          width="14"
          height="12"
          rx="2"
          fill={atColor + "33"}
          stroke={atColor}
          strokeWidth="1"
        />
        <text x="278" y="304" fontSize="9" fill="#6b7280">
          A–T (2H)
        </text>
        <rect
          x="340"
          y="294"
          width="14"
          height="12"
          rx="2"
          fill={gcColor + "33"}
          stroke={gcColor}
          strokeWidth="1"
        />
        <text x="360" y="304" fontSize="9" fill="#6b7280">
          G–C (3H)
        </text>
      </svg>

      <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">{INFO[focus]}</p>
      </div>
    </div>
  );
}
