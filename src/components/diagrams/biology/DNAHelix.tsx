import { useState } from "react";

const parts = [
  {
    id: "backbone",
    label: "Zucker-Phosphat-Rückgrat",
    detail:
      "Desoxyribose (Zucker) und Phosphatgruppen bilden das Rückgrat der DNA. Über Phosphodiesterbindungen verknüpft.",
  },
  {
    id: "basepair-at",
    label: "Basenpaar A-T",
    detail:
      "Adenin und Thymin: 2 Wasserstoffbrückenbindungen. Komplementäre Basenpaarung nach Chargaff-Regel.",
  },
  {
    id: "basepair-gc",
    label: "Basenpaar G-C",
    detail: "Guanin und Cytosin: 3 Wasserstoffbrückenbindungen. Stärkere Bindung als A-T.",
  },
  {
    id: "ends",
    label: "5'- und 3'-Ende",
    detail:
      "DNA-Stränge verlaufen antiparallel. 5'-Ende: Phosphatgruppe. 3'-Ende: Hydroxylgruppe. Replikation erfolgt 5'→3'.",
  },
  {
    id: "major",
    label: "Große Furche (Major Groove)",
    detail: "Breitere Furche der Doppelhelix. Wichtig für Proteinbindung (Transkriptionsfaktoren).",
  },
  {
    id: "minor",
    label: "Kleine Furche (Minor Groove)",
    detail: "Schmalere Furche. Ebenfalls Bindestelle für regulatorische Proteine und Medikamente.",
  },
];

type PartInfo = (typeof parts)[number];

export default function DNAHelix() {
  const [active, setActive] = useState<PartInfo | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">DNA-Doppelhelix</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Strukturen für Details.</p>

      <svg viewBox="0 0 620 470" className="w-full max-w-2xl mx-auto">
        {/* ---- 5' / 3' end labels (top) ---- */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[3])}
          onMouseLeave={() => setActive(null)}
        >
          {/* Left strand top: 5' */}
          <line x1="210" y1="42" x2="160" y2="22" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="155"
            y="27"
            textAnchor="end"
            fontSize="14"
            fontWeight="600"
            fill="#1f2937"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            5&apos;
          </text>
          {/* Right strand top: 3' */}
          <line x1="340" y1="42" x2="390" y2="22" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="395"
            y="27"
            textAnchor="start"
            fontSize="14"
            fontWeight="600"
            fill="#1f2937"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            3&apos;
          </text>
        </g>

        {/* ---- 5' / 3' end labels (bottom) ---- */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[3])}
          onMouseLeave={() => setActive(null)}
        >
          {/* Left strand bottom: 3' */}
          <line x1="210" y1="410" x2="160" y2="435" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="155"
            y="440"
            textAnchor="end"
            fontSize="14"
            fontWeight="600"
            fill="#1f2937"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            3&apos;
          </text>
          {/* Right strand bottom: 5' */}
          <line x1="340" y1="410" x2="390" y2="435" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="395"
            y="440"
            textAnchor="start"
            fontSize="14"
            fontWeight="600"
            fill="#1f2937"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            5&apos;
          </text>
        </g>

        {/* ---- Direction arrows (antiparallel) ---- */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[3])}
          onMouseLeave={() => setActive(null)}
        >
          <line
            x1="195"
            y1="52"
            x2="195"
            y2="405"
            stroke="#0d9488"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.5"
          />
          <polygon points="191,405 195,413 199,405" fill="#0d9488" opacity="0.5" />
          <line
            x1="355"
            y1="405"
            x2="355"
            y2="52"
            stroke="#0f766e"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.5"
          />
          <polygon points="351,52 355,44 359,52" fill="#0f766e" opacity="0.5" />
        </g>

        {/* ---- Draw helix rungs and backbone ---- */}
        {Array.from({ length: 12 }, (_, i) => {
          const y = 60 + i * 30;
          const phase = i * 0.55;
          const sinVal = Math.sin(phase);
          const amplitude = 50;
          const centerX = 275;

          const leftX = centerX - amplitude + sinVal * amplitude * 0.3;
          const rightX = centerX + amplitude + sinVal * amplitude * 0.3;

          const isAT = i % 3 !== 0;
          const basePair = isAT ? parts[1] : parts[2];
          const baseLabel = isAT ? "A — T" : "G \u2261 C";
          const bondCount = isAT ? 2 : 3;
          const baseColor = isAT ? "#14b8a6" : "#0f766e";

          return (
            <g key={`rung-${i}`}>
              {/* Left backbone segment */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActive(parts[0])}
                onMouseLeave={() => setActive(null)}
              >
                <circle cx={leftX} cy={y} r="6" fill="#0d9488" stroke="#115e59" strokeWidth="1" />
                {i < 11 && (
                  <line
                    x1={leftX}
                    y1={y + 6}
                    x2={275 - amplitude + Math.sin((i + 1) * 0.55) * amplitude * 0.3}
                    y2={y + 24}
                    stroke="#0d9488"
                    strokeWidth="2.5"
                  />
                )}
              </g>

              {/* Right backbone segment */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActive(parts[0])}
                onMouseLeave={() => setActive(null)}
              >
                <circle cx={rightX} cy={y} r="6" fill="#0f766e" stroke="#115e59" strokeWidth="1" />
                {i < 11 && (
                  <line
                    x1={rightX}
                    y1={y + 6}
                    x2={275 + amplitude + Math.sin((i + 1) * 0.55) * amplitude * 0.3}
                    y2={y + 24}
                    stroke="#0f766e"
                    strokeWidth="2.5"
                  />
                )}
              </g>

              {/* Base pair rung */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActive(basePair)}
                onMouseLeave={() => setActive(null)}
              >
                <line
                  x1={leftX + 6}
                  y1={y}
                  x2={rightX - 6}
                  y2={y}
                  stroke={baseColor}
                  strokeWidth="1.5"
                />
                {/* H-bonds */}
                {Array.from({ length: bondCount }, (_, b) => {
                  const frac = (b + 1) / (bondCount + 1);
                  const bx = leftX + 6 + (rightX - leftX - 12) * frac;
                  return (
                    <g key={`bond-${i}-${b}`}>
                      <line
                        x1={bx - 2}
                        y1={y - 2}
                        x2={bx + 2}
                        y2={y + 2}
                        stroke={baseColor}
                        strokeWidth="1"
                        opacity="0.6"
                      />
                      <line
                        x1={bx + 2}
                        y1={y - 2}
                        x2={bx - 2}
                        y2={y + 2}
                        stroke={baseColor}
                        strokeWidth="1"
                        opacity="0.6"
                      />
                    </g>
                  );
                })}
                {/* Base label on rung */}
                <text
                  x={(leftX + rightX) / 2}
                  y={y + 4}
                  textAnchor="middle"
                  fontSize="13"
                  fill={baseColor}
                  fontWeight="bold"
                  stroke="white"
                  strokeWidth="3"
                  paintOrder="stroke"
                >
                  {baseLabel}
                </text>
              </g>
            </g>
          );
        })}

        {/* ---- Major groove label (outside right) ---- */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[4])}
          onMouseLeave={() => setActive(null)}
        >
          <path d="M380,110 Q410,150 380,190" fill="none" stroke="#99f6e4" strokeWidth="2" />
          <line x1="410" y1="150" x2="460" y2="150" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="465"
            y="155"
            textAnchor="start"
            fontSize="14"
            fontWeight="600"
            fill="#1f2937"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            Gro\u00dfe Furche
          </text>
        </g>

        {/* ---- Minor groove label (outside right) ---- */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[5])}
          onMouseLeave={() => setActive(null)}
        >
          <path d="M380,210 Q400,240 380,270" fill="none" stroke="#ccfbf1" strokeWidth="2" />
          <line x1="400" y1="240" x2="460" y2="240" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="465"
            y="245"
            textAnchor="start"
            fontSize="14"
            fontWeight="600"
            fill="#1f2937"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            Kleine Furche
          </text>
        </g>

        {/* ---- Backbone label (outside left) ---- */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[0])}
          onMouseLeave={() => setActive(null)}
        >
          <line x1="210" y1="150" x2="120" y2="130" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="115"
            y="125"
            textAnchor="end"
            fontSize="13"
            fill="#1f2937"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            Zucker-Phosphat-
          </text>
          <text
            x="115"
            y="142"
            textAnchor="end"
            fontSize="13"
            fill="#1f2937"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            R\u00fcckgrat
          </text>
        </g>

        {/* ---- H-bond count legend (outside right, lower) ---- */}
        <rect
          x="440"
          y="300"
          width="165"
          height="75"
          rx="6"
          fill="#f0fdfa"
          stroke="#14b8a6"
          strokeWidth="1"
        />
        <text
          x="522"
          y="322"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          H-Br\u00fccken
        </text>
        <text
          x="522"
          y="342"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          A — T: 2 Bindungen
        </text>
        <text
          x="522"
          y="362"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          G \u2261 C: 3 Bindungen
        </text>

        {/* ---- Antiparallel info box (outside right, bottom) ---- */}
        <rect
          x="440"
          y="390"
          width="165"
          height="50"
          rx="6"
          fill="#f0fdfa"
          stroke="#14b8a6"
          strokeWidth="1"
        />
        <text
          x="522"
          y="412"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Antiparallele Str\u00e4nge
        </text>
        <text
          x="522"
          y="430"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          5&apos;\u21923&apos; / 3&apos;\u21925&apos;
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
