export default function HarmonicOscillation() {
  // Generate sine wave points
  const wavePoints: string[] = [];
  const waveW = 320;
  const waveH = 60;
  const offsetX = 90;
  const offsetY = 120;
  for (let i = 0; i <= 200; i++) {
    const x = offsetX + (i / 200) * waveW;
    const y = offsetY - Math.sin((i / 200) * 4 * Math.PI) * waveH;
    wavePoints.push(`${x},${y}`);
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Harmonische Schwingung
      </h4>
      <svg viewBox="0 0 500 380" className="w-full max-w-2xl mx-auto">
        <title>Harmonische Schwingung — Sinuswelle und Feder-Masse-System</title>
        <defs>
          <marker
            id="ho-arrowBlack"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="#374151" />
          </marker>
          <marker id="ho-arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#dc2626" />
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
          Harmonische Schwingung
        </text>

        {/* === SINE WAVE SECTION === */}

        {/* Axes */}
        {/* x-axis (time) */}
        <line
          x1="80"
          y1={offsetY}
          x2="425"
          y2={offsetY}
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#ho-arrowBlack)"
        />
        <text x="430" y={offsetY + 5} fontSize="12" fill="#374151" fontWeight="500">
          t
        </text>

        {/* y-axis (displacement) */}
        <line
          x1="90"
          y1="190"
          x2="90"
          y2="42"
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#ho-arrowBlack)"
        />
        <text x="82" y="42" fontSize="12" fill="#374151" fontWeight="500" textAnchor="end">
          x(t)
        </text>

        {/* Equilibrium line (dashed) */}
        <line
          x1="90"
          y1={offsetY}
          x2="415"
          y2={offsetY}
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="5 4"
        />
        <text x="425" y={offsetY - 6} fontSize="9" fill="#94a3b8" fontWeight="500">
          Ruhelage
        </text>

        {/* Sine wave */}
        <polyline
          points={wavePoints.join(" ")}
          fill="none"
          stroke="#2563eb"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Amplitude A labels */}
        {/* Top amplitude */}
        <line
          x1="78"
          y1={offsetY - waveH}
          x2="88"
          y2={offsetY - waveH}
          stroke="#dc2626"
          strokeWidth="1"
        />
        <line
          x1="78"
          y1={offsetY}
          x2="78"
          y2={offsetY - waveH}
          stroke="#dc2626"
          strokeWidth="1.5"
        />
        <line x1="75" y1={offsetY} x2="81" y2={offsetY} stroke="#dc2626" strokeWidth="1" />
        <line
          x1="75"
          y1={offsetY - waveH}
          x2="81"
          y2={offsetY - waveH}
          stroke="#dc2626"
          strokeWidth="1"
        />
        <text
          x="68"
          y={offsetY - waveH / 2 + 4}
          fontSize="14"
          fill="#dc2626"
          fontWeight="700"
          textAnchor="end"
        >
          A
        </text>

        {/* Bottom amplitude */}
        <line
          x1="78"
          y1={offsetY}
          x2="78"
          y2={offsetY + waveH}
          stroke="#dc2626"
          strokeWidth="1.5"
        />
        <line
          x1="75"
          y1={offsetY + waveH}
          x2="81"
          y2={offsetY + waveH}
          stroke="#dc2626"
          strokeWidth="1"
        />
        <text
          x="68"
          y={offsetY + waveH / 2 + 4}
          fontSize="14"
          fill="#dc2626"
          fontWeight="700"
          textAnchor="end"
        >
          A
        </text>

        {/* Period T marker (one full cycle) */}
        {/* One period = waveW/2 = 160px, starts at offsetX */}
        <line
          x1={offsetX}
          y1={offsetY + waveH + 15}
          x2={offsetX + waveW / 2}
          y2={offsetY + waveH + 15}
          stroke="#7c3aed"
          strokeWidth="1.5"
        />
        <line
          x1={offsetX}
          y1={offsetY + waveH + 10}
          x2={offsetX}
          y2={offsetY + waveH + 20}
          stroke="#7c3aed"
          strokeWidth="1.5"
        />
        <line
          x1={offsetX + waveW / 2}
          y1={offsetY + waveH + 10}
          x2={offsetX + waveW / 2}
          y2={offsetY + waveH + 20}
          stroke="#7c3aed"
          strokeWidth="1.5"
        />
        <text
          x={offsetX + waveW / 4}
          y={offsetY + waveH + 32}
          textAnchor="middle"
          fontSize="14"
          fill="#7c3aed"
          fontWeight="700"
        >
          T (Periode)
        </text>

        {/* === SPRING-MASS SYSTEM (below) === */}
        <text
          x="250"
          y="230"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Feder-Masse-System
        </text>

        {/* Wall */}
        <rect
          x="60"
          y="248"
          width="8"
          height="50"
          fill="#94a3b8"
          stroke="#64748b"
          strokeWidth="1"
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`hatch-${i}`}
            x1="60"
            y1={253 + i * 11}
            x2="52"
            y2={259 + i * 11}
            stroke="#64748b"
            strokeWidth="1"
          />
        ))}

        {/* Spring (zigzag) */}
        <polyline
          points="68,273 80,273 88,258 104,288 120,258 136,288 152,258 168,288 176,273 188,273"
          fill="none"
          stroke="#6b7280"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Mass block */}
        <rect
          x="188"
          y="258"
          width="35"
          height="30"
          rx="3"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <text x="205" y="278" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">
          m
        </text>

        {/* Equilibrium position marker */}
        <line
          x1="205"
          y1="292"
          x2="205"
          y2="310"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        <text x="205" y="320" textAnchor="middle" fontSize="9" fill="#94a3b8">
          Ruhelage
        </text>

        {/* Displacement positions (ghost masses) */}
        {/* Extended position */}
        <rect
          x="248"
          y="258"
          width="35"
          height="30"
          rx="3"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="265"
          y1="292"
          x2="265"
          y2="302"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.5"
        />
        <text x="265" y="312" textAnchor="middle" fontSize="8" fill="#94a3b8" opacity="0.7">
          +A
        </text>

        {/* Compressed position */}
        <rect
          x="128"
          y="258"
          width="35"
          height="30"
          rx="3"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="145"
          y1="292"
          x2="145"
          y2="302"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.5"
        />
        <text x="145" y="312" textAnchor="middle" fontSize="8" fill="#94a3b8" opacity="0.7">
          {"\u2212"}A
        </text>

        {/* Motion arrow */}
        <line x1="155" y1="250" x2="250" y2="250" stroke="#6b7280" strokeWidth="1" />
        <line x1="250" y1="250" x2="245" y2="247" stroke="#6b7280" strokeWidth="1" />
        <line x1="250" y1="250" x2="245" y2="253" stroke="#6b7280" strokeWidth="1" />
        <line x1="155" y1="250" x2="160" y2="247" stroke="#6b7280" strokeWidth="1" />
        <line x1="155" y1="250" x2="160" y2="253" stroke="#6b7280" strokeWidth="1" />

        {/* Spring force arrow */}
        <line
          x1="223"
          y1="273"
          x2="240"
          y2="273"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#ho-arrowRed)"
          opacity="0.7"
        />
        <text x="246" y="277" fontSize="10" fill="#dc2626" fontWeight="600" opacity="0.7">
          F = {"\u2212"}kx
        </text>

        {/* Formula box */}
        <rect
          x="300"
          y="245"
          width="175"
          height="65"
          rx="6"
          fill="#eff6ff"
          stroke="#93c5fd"
          strokeWidth="1"
        />
        <text
          x="387"
          y="264"
          textAnchor="middle"
          fontSize="12"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          Auslenkung:
        </text>
        <text
          x="387"
          y="282"
          textAnchor="middle"
          fontSize="14"
          fill="#1e40af"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          x(t) = A {"\u00B7"} sin({"\u03C9"}t)
        </text>
        <text x="387" y="300" textAnchor="middle" fontSize="11" fill="#6b7280">
          {"\u03C9"} = 2{"\u03C0"}/T = 2{"\u03C0"}f
        </text>

        {/* Bottom note */}
        <text x="250" y="365" textAnchor="middle" fontSize="10" fill="#6b7280" fontStyle="italic">
          A = Amplitude, T = Periodendauer, f = Frequenz, {"\u03C9"} = Kreisfrequenz
        </text>
      </svg>
    </div>
  );
}
