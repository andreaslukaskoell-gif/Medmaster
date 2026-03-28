export default function EndoscopeFiber() {
  // Generate zigzag reflection path inside fiber
  const fiberTop = 140;
  const fiberBot = 200;
  const fiberLeft = 80;
  const fiberRight = 420;
  const bounces = 6;
  const segW = (fiberRight - fiberLeft) / bounces;

  const reflectionPoints: string[] = [];
  for (let i = 0; i <= bounces; i++) {
    const x = fiberLeft + i * segW;
    const y = i % 2 === 0 ? fiberTop + 8 : fiberBot - 8;
    reflectionPoints.push(`${x},${y}`);
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Totalreflexion im Lichtleiter (Endoskop)
      </h4>
      <svg role="img" viewBox="0 0 500 360" className="w-full max-w-2xl mx-auto">
        <title>Glasfaser-Lichtleiter — Totalreflexion im Kern f{"\u00FC"}r Endoskopie</title>
        <defs>
          <marker id="ef-arrow" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <path d="M0,0 L7,2.5 L0,5" fill="#dc2626" />
          </marker>
        </defs>

        {/* Title */}
        <text
          x="250"
          y="22"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Lichtwellenleiter — Totalreflexion
        </text>

        {/* === CROSS-SECTION (left top) === */}
        <text x="75" y="55" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="600">
          Querschnitt
        </text>

        {/* Outer protection */}
        <circle cx="75" cy="90" r="32" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="75" y="130" textAnchor="middle" fontSize="8" fill="#94a3b8">
          Schutzmantel
        </text>

        {/* Cladding */}
        <circle cx="75" cy="90" r="24" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.5" />

        {/* Core */}
        <circle cx="75" cy="90" r="14" fill="#2563eb" opacity="0.8" />
        <text x="75" y="94" textAnchor="middle" fontSize="8" fill="white" fontWeight="600">
          Kern
        </text>

        {/* Labels */}
        <line x1="95" y1="78" x2="125" y2="65" stroke="#60a5fa" strokeWidth="1" />
        <text x="128" y="68" fontSize="9" fill="#2563eb" fontWeight="500">
          Mantel (n{"\u2082"})
        </text>
        <line x1="88" y1="92" x2="125" y2="85" stroke="#2563eb" strokeWidth="1" />
        <text x="128" y="88" fontSize="9" fill="#1e40af" fontWeight="500">
          Kern (n{"\u2081"})
        </text>
        <text x="128" y="100" fontSize="9" fill="#dc2626" fontWeight="600">
          n{"\u2081"} &gt; n{"\u2082"}
        </text>

        {/* === LONGITUDINAL VIEW === */}
        <text x="250" y="125" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="600">
          L{"\u00E4"}ngsschnitt — Totalreflexion im Kern
        </text>

        {/* Cladding (outer rectangle) */}
        <rect
          x={fiberLeft - 10}
          y={fiberTop - 15}
          width={fiberRight - fiberLeft + 20}
          height={fiberBot - fiberTop + 30}
          rx="8"
          fill="#dbeafe"
          stroke="#60a5fa"
          strokeWidth="1.5"
        />

        {/* Core (inner rectangle) */}
        <rect
          x={fiberLeft}
          y={fiberTop}
          width={fiberRight - fiberLeft}
          height={fiberBot - fiberTop}
          rx="4"
          fill="#eff6ff"
          stroke="#2563eb"
          strokeWidth="1.5"
        />

        {/* Layer labels */}
        <text
          x={fiberLeft - 5}
          y={fiberTop - 5}
          fontSize="9"
          fill="#60a5fa"
          fontWeight="500"
          textAnchor="end"
        >
          Mantel (n{"\u2082"})
        </text>
        <text x={fiberLeft + 5} y={fiberTop + 14} fontSize="9" fill="#2563eb" fontWeight="500">
          Kern (n{"\u2081"})
        </text>

        {/* Light ray bouncing inside */}
        <polyline
          points={reflectionPoints.join(" ")}
          fill="none"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#ef-arrow)"
        />

        {/* Reflection angle indicators at bounce points */}
        {[1, 2, 3, 4, 5].map((i) => {
          const x = fiberLeft + i * segW;
          const y = i % 2 === 0 ? fiberTop + 8 : fiberBot - 8;
          const isTop = i % 2 !== 0;
          return (
            <g key={`angle-${i}`}>
              {/* Normal line */}
              <line
                x1={x}
                y1={isTop ? fiberBot - 15 : fiberTop + 15}
                x2={x}
                y2={isTop ? fiberBot + 5 : fiberTop - 5}
                stroke="#94a3b8"
                strokeWidth="0.8"
                strokeDasharray="3 2"
              />
              {/* Angle arc */}
              {i <= 2 && (
                <text x={x + (isTop ? 8 : -8)} y={y + (isTop ? 8 : -5)} fontSize="8" fill="#7c3aed">
                  {"\u03B8"}
                </text>
              )}
            </g>
          );
        })}

        {/* Incoming light */}
        <line
          x1="40"
          y1="160"
          x2={fiberLeft}
          y2={fiberTop + 8}
          stroke="#f97316"
          strokeWidth="2"
          markerEnd="url(#ef-arrow)"
        />
        <text x="30" y="155" fontSize="10" fill="#f97316" fontWeight="500">
          Licht
        </text>

        {/* Outgoing light */}
        <line
          x1={fiberRight}
          y1={fiberBot - 8}
          x2="460"
          y2="190"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#ef-arrow)"
        />

        {/* Condition box */}
        <rect
          x="100"
          y="240"
          width="300"
          height="45"
          rx="6"
          fill="#fef2f2"
          stroke="#fca5a5"
          strokeWidth="1"
        />
        <text x="250" y="258" textAnchor="middle" fontSize="12" fill="#991b1b" fontWeight="700">
          Totalreflexion wenn: {"\u03B8"} &gt; {"\u03B8"}
          {"\u2082"} (Grenzwinkel)
        </text>
        <text x="250" y="274" textAnchor="middle" fontSize="11" fill="#6b7280">
          sin({"\u03B8"}
          {"\u2082"}) = n{"\u2082"}/n{"\u2081"} — Licht bleibt im optisch dichteren Medium
        </text>

        {/* Medical application */}
        <rect
          x="80"
          y="300"
          width="340"
          height="40"
          rx="6"
          fill="#eff6ff"
          stroke="#93c5fd"
          strokeWidth="1"
        />
        <text x="250" y="318" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="600">
          Medizinische Anwendung: Endoskop
        </text>
        <text x="250" y="332" textAnchor="middle" fontSize="10" fill="#6b7280">
          Flexible Glasfaserb{"\u00FC"}ndel {"\u2192"} Bild{"\u00FC"}bertragung aus K{"\u00F6"}rperh
          {"\u00F6"}hlen
        </text>
      </svg>
    </div>
  );
}
