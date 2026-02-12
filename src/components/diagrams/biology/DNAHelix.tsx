import { useState } from "react";

const parts = [
  { id: "backbone", label: "Zucker-Phosphat-Rückgrat", detail: "Desoxyribose (Zucker) und Phosphatgruppen bilden das Rückgrat der DNA. Über Phosphodiesterbindungen verknuepft." },
  { id: "basepair-at", label: "Basenpaar A-T", detail: "Adenin und Thymin: 2 Wasserstoffbrückenbindungen. Komplementäre Basenpaarung nach Chargaff-Regel." },
  { id: "basepair-gc", label: "Basenpaar G-C", detail: "Guanin und Cytosin: 3 Wasserstoffbrückenbindungen. Stärkere Bindung als A-T." },
  { id: "ends", label: "5'- und 3'-Ende", detail: "DNA-Straenge verlaufen antiparallel. 5'-Ende: Phosphatgruppe. 3'-Ende: Hydroxylgruppe. Replikation erfolgt 5'→3'." },
  { id: "major", label: "Große Furche (Major Groove)", detail: "Breitere Furche der Doppelhelix. Wichtig fuer Proteinbindung (Transkriptionsfaktoren)." },
  { id: "minor", label: "Kleine Furche (Minor Groove)", detail: "Schmalere Furche. Ebenfalls Bindestelle fuer regulatorische Proteine und Medikamente." },
];

type PartInfo = (typeof parts)[number];

export default function DNAHelix() {
  const [active, setActive] = useState<PartInfo | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">DNA-Doppelhelix</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Strukturen fuer Details.</p>

      <svg viewBox="0 0 460 440" className="w-full max-w-lg mx-auto">
        {/* 5' / 3' labels */}
        <text x="110" y="28" textAnchor="middle" fontSize="10" fill="#0d9488" fontWeight="bold">5&apos;</text>
        <text x="240" y="28" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">3&apos;</text>

        <text x="110" y="410" textAnchor="middle" fontSize="10" fill="#0d9488" fontWeight="bold">3&apos;</text>
        <text x="240" y="410" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">5&apos;</text>

        {/* Direction arrows */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[3])} onMouseLeave={() => setActive(null)}>
          <line x1="95" y1="32" x2="95" y2="400" stroke="#0d9488" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
          <polygon points="91,400 95,408 99,400" fill="#0d9488" opacity="0.5" />
          <line x1="255" y1="400" x2="255" y2="32" stroke="#0f766e" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
          <polygon points="251,32 255,24 259,32" fill="#0f766e" opacity="0.5" />
        </g>

        {/* Draw helix rungs and backbone */}
        {Array.from({ length: 12 }, (_, i) => {
          const y = 50 + i * 30;
          const phase = i * 0.55;
          const sinVal = Math.sin(phase);
          const amplitude = 50;
          const centerX = 175;

          const leftX = centerX - amplitude + sinVal * amplitude * 0.3;
          const rightX = centerX + amplitude + sinVal * amplitude * 0.3;

          const isAT = i % 3 !== 0;
          const basePair = isAT ? parts[1] : parts[2];
          const baseLabel = isAT ? "A — T" : "G ≡ C";
          const bondCount = isAT ? 2 : 3;
          const baseColor = isAT ? "#14b8a6" : "#0f766e";

          return (
            <g key={`rung-${i}`}>
              {/* Left backbone segment */}
              <g className="cursor-pointer" onMouseEnter={() => setActive(parts[0])} onMouseLeave={() => setActive(null)}>
                <circle cx={leftX} cy={y} r="6" fill="#0d9488" stroke="#115e59" strokeWidth="1" />
                {i < 11 && (
                  <line
                    x1={leftX} y1={y + 6}
                    x2={175 - amplitude + Math.sin((i + 1) * 0.55) * amplitude * 0.3}
                    y2={y + 24}
                    stroke="#0d9488" strokeWidth="2.5"
                  />
                )}
              </g>

              {/* Right backbone segment */}
              <g className="cursor-pointer" onMouseEnter={() => setActive(parts[0])} onMouseLeave={() => setActive(null)}>
                <circle cx={rightX} cy={y} r="6" fill="#0f766e" stroke="#115e59" strokeWidth="1" />
                {i < 11 && (
                  <line
                    x1={rightX} y1={y + 6}
                    x2={175 + amplitude + Math.sin((i + 1) * 0.55) * amplitude * 0.3}
                    y2={y + 24}
                    stroke="#0f766e" strokeWidth="2.5"
                  />
                )}
              </g>

              {/* Base pair rung */}
              <g className="cursor-pointer" onMouseEnter={() => setActive(basePair)} onMouseLeave={() => setActive(null)}>
                <line x1={leftX + 6} y1={y} x2={rightX - 6} y2={y} stroke={baseColor} strokeWidth="1.5" />
                {/* H-bonds */}
                {Array.from({ length: bondCount }, (_, b) => {
                  const frac = (b + 1) / (bondCount + 1);
                  const bx = leftX + 6 + (rightX - leftX - 12) * frac;
                  return (
                    <g key={`bond-${i}-${b}`}>
                      <line x1={bx - 2} y1={y - 2} x2={bx + 2} y2={y + 2} stroke={baseColor} strokeWidth="1" opacity="0.6" />
                      <line x1={bx + 2} y1={y - 2} x2={bx - 2} y2={y + 2} stroke={baseColor} strokeWidth="1" opacity="0.6" />
                    </g>
                  );
                })}
                {/* Base label */}
                <text x={(leftX + rightX) / 2} y={y + 4} textAnchor="middle" fontSize="7" fill={baseColor} fontWeight="bold">{baseLabel}</text>
              </g>
            </g>
          );
        })}

        {/* Major groove label */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[4])} onMouseLeave={() => setActive(null)}>
          <path d="M280,100 Q310,140 280,180" fill="none" stroke="#99f6e4" strokeWidth="2" />
          <text x="320" y="145" fontSize="8" fill="#0d9488" fontWeight="bold">Große Furche</text>
        </g>

        {/* Minor groove label */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[5])} onMouseLeave={() => setActive(null)}>
          <path d="M280,200 Q300,225 280,250" fill="none" stroke="#ccfbf1" strokeWidth="2" />
          <text x="320" y="230" fontSize="8" fill="#14b8a6" fontWeight="bold">Kleine Furche</text>
        </g>

        {/* Backbone label */}
        <line x1="55" y1="140" x2="100" y2="140" stroke="#115e59" strokeWidth="0.8" />
        <text x="50" y="130" textAnchor="end" fontSize="7" fill="#115e59" fontWeight="bold">Zucker-Phosphat-</text>
        <text x="50" y="140" textAnchor="end" fontSize="7" fill="#115e59" fontWeight="bold">Rückgrat</text>

        {/* H-bond count legend */}
        <rect x="320" y="280" width="130" height="60" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1" />
        <text x="385" y="296" textAnchor="middle" fontSize="8" fill="#115e59" fontWeight="bold">H-Brücken</text>
        <text x="385" y="312" textAnchor="middle" fontSize="7" fill="#14b8a6">A — T: 2 Bindungen</text>
        <text x="385" y="328" textAnchor="middle" fontSize="7" fill="#0f766e">G ≡ C: 3 Bindungen</text>

        {/* Antiparallel label */}
        <rect x="320" y="355" width="130" height="35" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1" />
        <text x="385" y="370" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">Antiparallele Straenge</text>
        <text x="385" y="382" textAnchor="middle" fontSize="7" fill="#0d9488">5&apos;→3&apos; / 3&apos;→5&apos;</text>
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
