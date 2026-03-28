export default function ScalarVectorComparison() {
  const scalars = [
    { name: "Temperatur", value: "37 \u00B0C", icon: "\u{1F321}" },
    { name: "Masse", value: "70 kg", icon: "\u2696" },
    { name: "Energie", value: "500 J", icon: "\u26A1" },
    { name: "Zeit", value: "60 s", icon: "\u23F1" },
    { name: "Druck", value: "120 mmHg", icon: "\u{1F4CA}" },
  ];

  const vectors = [
    { name: "Kraft", value: "10 N", angle: 0 },
    { name: "Geschwindigkeit", value: "5 m/s", angle: -45 },
    { name: "Beschleunigung", value: "9,81 m/s\u00B2", angle: 90 },
    { name: "Impuls", value: "350 kg\u00B7m/s", angle: 30 },
    { name: "E-Feld", value: "100 V/m", angle: -20 },
  ];

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Skalare vs. Vektoren
      </h4>
      <svg role="img" viewBox="0 0 500 360" className="w-full max-w-2xl mx-auto">
        <title>Vergleich Skalar vs. Vektor — Betrag vs. Betrag + Richtung</title>
        <defs>
          <marker id="sv-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#2563eb" />
          </marker>
        </defs>

        {/* Title */}
        <text
          x="250"
          y="25"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Skalare vs. Vektoren
        </text>

        {/* Dividing line */}
        <line
          x1="250"
          y1="40"
          x2="250"
          y2="320"
          stroke="#e2e8f0"
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {/* SCALAR column header */}
        <rect
          x="30"
          y="40"
          width="190"
          height="30"
          rx="6"
          fill="#dcfce7"
          stroke="#86efac"
          strokeWidth="1"
        />
        <text x="125" y="60" textAnchor="middle" fontSize="13" fill="#166534" fontWeight="700">
          Skalar (nur Betrag)
        </text>

        {/* VECTOR column header */}
        <rect
          x="280"
          y="40"
          width="190"
          height="30"
          rx="6"
          fill="#dbeafe"
          stroke="#93c5fd"
          strokeWidth="1"
        />
        <text x="375" y="60" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">
          Vektor (Betrag + Richtung)
        </text>

        {/* Scalar entries */}
        {scalars.map((s, i) => {
          const y = 90 + i * 44;
          return (
            <g key={s.name}>
              <rect
                x="35"
                y={y}
                width="180"
                height="36"
                rx="5"
                fill="#f0fdf4"
                stroke="#bbf7d0"
                strokeWidth="1"
              />
              <text x="50" y={y + 15} fontSize="12" fill="#374151" fontWeight="600">
                {s.name}
              </text>
              <text x="50" y={y + 29} fontSize="11" fill="#059669" fontWeight="500">
                {s.value}
              </text>
              {/* Magnitude bar */}
              <rect x="155" y={y + 10} width="50" height="14" rx="3" fill="#86efac" opacity="0.5" />
              <text
                x="180"
                y={y + 21}
                textAnchor="middle"
                fontSize="9"
                fill="#166534"
                fontWeight="500"
              >
                Betrag
              </text>
            </g>
          );
        })}

        {/* Vector entries */}
        {vectors.map((v, i) => {
          const y = 90 + i * 44;
          const arrowLen = 30;
          const rad = (v.angle * Math.PI) / 180;
          const ax = 440;
          const ay = y + 18;
          const dx = Math.cos(rad) * arrowLen;
          const dy = Math.sin(rad) * arrowLen;
          return (
            <g key={v.name}>
              <rect
                x="285"
                y={y}
                width="180"
                height="36"
                rx="5"
                fill="#eff6ff"
                stroke="#bfdbfe"
                strokeWidth="1"
              />
              <text x="300" y={y + 15} fontSize="12" fill="#374151" fontWeight="600">
                {v.name}
              </text>
              <text x="300" y={y + 29} fontSize="11" fill="#2563eb" fontWeight="500">
                {v.value}
              </text>
              {/* Direction arrow */}
              <line
                x1={ax}
                y1={ay}
                x2={ax + dx}
                y2={ay + dy}
                stroke="#2563eb"
                strokeWidth="2"
                markerEnd="url(#sv-arrow)"
              />
            </g>
          );
        })}

        {/* Bottom comparison */}
        <text x="125" y="340" textAnchor="middle" fontSize="10" fill="#6b7280">
          Addition: normal
        </text>
        <text x="375" y="340" textAnchor="middle" fontSize="10" fill="#6b7280">
          Addition: Parallelogramm
        </text>
        <text x="250" y="356" textAnchor="middle" fontSize="9" fill="#94a3b8" fontStyle="italic">
          Im MedAT: Kr{"\u00E4"}fte, Geschwindigkeiten und Felder sind immer Vektoren!
        </text>
      </svg>
    </div>
  );
}
