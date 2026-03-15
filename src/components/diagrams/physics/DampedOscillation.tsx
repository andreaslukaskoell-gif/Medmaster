export default function DampedOscillation() {
  // Generate damped sine wave: x(t) = A0 * e^(-delta*t) * sin(omega*t)
  const waveW = 340;
  const offsetX = 80;
  const offsetY = 140;
  const A0 = 55;
  const delta = 0.012; // damping coefficient (per px)
  const omega = 0.08; // angular frequency (per px)

  const wavePoints: string[] = [];
  const envelopeTop: string[] = [];
  const envelopeBottom: string[] = [];

  for (let i = 0; i <= 300; i++) {
    const x = offsetX + (i / 300) * waveW;
    const envelope = A0 * Math.exp(-delta * i);
    const y = offsetY - envelope * Math.sin(omega * i);
    wavePoints.push(`${x},${y}`);
    envelopeTop.push(`${x},${offsetY - envelope}`);
    envelopeBottom.push(`${x},${offsetY + envelope}`);
  }

  // Period in pixels
  const periodPx = (2 * Math.PI) / omega;
  const periodScaled = (periodPx / 300) * waveW;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Ged{"\u00E4"}mpfte Schwingung
      </h4>
      <svg viewBox="0 0 500 300" className="w-full max-w-2xl mx-auto">
        <title>Ged{"\u00E4"}mpfte Schwingung — exponentiell abklingende Amplitude</title>
        <defs>
          <marker
            id="do-arrowBlack"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="#374151" />
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
          Ged{"\u00E4"}mpfte Schwingung (unterd{"\u00E4"}mpft)
        </text>

        {/* x-axis (time) */}
        <line
          x1="70"
          y1={offsetY}
          x2="440"
          y2={offsetY}
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#do-arrowBlack)"
        />
        <text x="446" y={offsetY + 5} fontSize="12" fill="#374151" fontWeight="500">
          t
        </text>

        {/* y-axis */}
        <line
          x1={offsetX}
          y1="210"
          x2={offsetX}
          y2="40"
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#do-arrowBlack)"
        />
        <text x="72" y="40" fontSize="12" fill="#374151" fontWeight="500" textAnchor="end">
          x(t)
        </text>

        {/* Envelope curves (dashed) */}
        <polyline
          points={envelopeTop.join(" ")}
          fill="none"
          stroke="#dc2626"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <polyline
          points={envelopeBottom.join(" ")}
          fill="none"
          stroke="#dc2626"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />

        {/* Envelope labels */}
        <text x="425" y={offsetY - 12} fontSize="10" fill="#dc2626" fontWeight="600">
          e{"\u207B"}
          {"\u1D5F"}
          {"\u1D57"}
        </text>
        <text x="425" y={offsetY + 18} fontSize="10" fill="#dc2626" fontWeight="600">
          {"\u2212"}e{"\u207B"}
          {"\u1D5F"}
          {"\u1D57"}
        </text>

        {/* Damped sine wave */}
        <polyline
          points={wavePoints.join(" ")}
          fill="none"
          stroke="#2563eb"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* A0 label */}
        <line
          x1="68"
          y1={offsetY - A0}
          x2={offsetX}
          y2={offsetY - A0}
          stroke="#7c3aed"
          strokeWidth="1"
        />
        <line x1="68" y1={offsetY} x2="68" y2={offsetY - A0} stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="65" y1={offsetY} x2="71" y2={offsetY} stroke="#7c3aed" strokeWidth="1" />
        <line
          x1="65"
          y1={offsetY - A0}
          x2="71"
          y2={offsetY - A0}
          stroke="#7c3aed"
          strokeWidth="1"
        />
        <text
          x="58"
          y={offsetY - A0 / 2 + 4}
          fontSize="14"
          fill="#7c3aed"
          fontWeight="700"
          textAnchor="end"
        >
          A{"\u2080"}
        </text>

        {/* Period T marker */}
        <line
          x1={offsetX}
          y1={offsetY + A0 + 15}
          x2={offsetX + periodScaled}
          y2={offsetY + A0 + 15}
          stroke="#059669"
          strokeWidth="1.5"
        />
        <line
          x1={offsetX}
          y1={offsetY + A0 + 10}
          x2={offsetX}
          y2={offsetY + A0 + 20}
          stroke="#059669"
          strokeWidth="1.5"
        />
        <line
          x1={offsetX + periodScaled}
          y1={offsetY + A0 + 10}
          x2={offsetX + periodScaled}
          y2={offsetY + A0 + 20}
          stroke="#059669"
          strokeWidth="1.5"
        />
        <text
          x={offsetX + periodScaled / 2}
          y={offsetY + A0 + 32}
          textAnchor="middle"
          fontSize="13"
          fill="#059669"
          fontWeight="700"
        >
          T (Periode)
        </text>

        {/* Formula box */}
        <rect
          x="290"
          y="230"
          width="195"
          height="55"
          rx="6"
          fill="#eff6ff"
          stroke="#93c5fd"
          strokeWidth="1"
        />
        <text
          x="387"
          y="252"
          textAnchor="middle"
          fontSize="13"
          fill="#1e40af"
          fontWeight="700"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          x(t) = A{"\u2080"} {"\u00B7"} e{"\u207B"}
          {"\u1D5F"}
          {"\u1D57"} {"\u00B7"} sin({"\u03C9"}t)
        </text>
        <text x="387" y="272" textAnchor="middle" fontSize="10" fill="#6b7280">
          {"\u03B4"} = D{"\u00E4"}mpfungskoeffizient, {"\u03C9"} = Kreisfrequenz
        </text>

        {/* Medical note */}
        <text x="250" y="296" textAnchor="middle" fontSize="9" fill="#6b7280" fontStyle="italic">
          Medizin: Ged{"\u00E4"}mpfte Schwingungen im EKG-Filter und Ultraschallwandler
        </text>
      </svg>
    </div>
  );
}
