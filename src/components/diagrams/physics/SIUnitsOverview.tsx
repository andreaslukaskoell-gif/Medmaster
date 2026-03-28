export default function SIUnitsOverview() {
  const units = [
    { quantity: "L\u00E4nge", name: "Meter", symbol: "m", color: "#2563eb", bg: "#dbeafe" },
    { quantity: "Masse", name: "Kilogramm", symbol: "kg", color: "#7c3aed", bg: "#ede9fe" },
    { quantity: "Zeit", name: "Sekunde", symbol: "s", color: "#059669", bg: "#d1fae5" },
    { quantity: "Stromst\u00E4rke", name: "Ampere", symbol: "A", color: "#d97706", bg: "#fef3c7" },
    { quantity: "Temperatur", name: "Kelvin", symbol: "K", color: "#dc2626", bg: "#fee2e2" },
    { quantity: "Stoffmenge", name: "Mol", symbol: "mol", color: "#0891b2", bg: "#cffafe" },
    {
      quantity: "Lichtst\u00E4rke",
      name: "Candela",
      symbol: "cd",
      color: "#ca8a04",
      bg: "#fef9c3",
    },
  ];

  const rowH = 38;
  const startY = 65;
  const colX = [30, 155, 310, 395];

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Die 7 SI-Basiseinheiten
      </h4>
      <svg role="img" viewBox="0 0 490 360" className="w-full max-w-2xl mx-auto">
        <title>
          Die 7 SI-Basiseinheiten — Gr{"\u00F6"}
          {"\u00DF"}e, Name und Symbol
        </title>

        {/* Title */}
        <text
          x="245"
          y="25"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          SI-Basiseinheiten (Syst{"\u00E8"}me International)
        </text>

        {/* Header row */}
        <rect x="20" y="40" width="450" height="24" rx="4" fill="#f1f5f9" />
        <text x={colX[0]} y="57" fontSize="11" fill="#64748b" fontWeight="600">
          Physik. Gr{"\u00F6"}
          {"\u00DF"}e
        </text>
        <text x={colX[1]} y="57" fontSize="11" fill="#64748b" fontWeight="600">
          Einheit
        </text>
        <text x={colX[2]} y="57" fontSize="11" fill="#64748b" fontWeight="600">
          Symbol
        </text>
        <text x={colX[3]} y="57" fontSize="11" fill="#64748b" fontWeight="600">
          Beispiel
        </text>

        {/* Separator */}
        <line x1="20" y1="64" x2="470" y2="64" stroke="#e2e8f0" strokeWidth="1" />

        {/* Unit rows */}
        {units.map((u, i) => {
          const y = startY + i * rowH;
          const examples = [
            "1,80 m K\u00F6rpergr\u00F6\u00DFe",
            "70 kg K\u00F6rpermasse",
            "60 s = 1 min",
            "0,5 A Defibrillator",
            "310 K = 37 \u00B0C",
            "0,15 mol Glucose",
            "1 cd Kerze",
          ];
          return (
            <g key={u.symbol}>
              {/* Row background */}
              {i % 2 === 0 && <rect x="20" y={y} width="450" height={rowH} fill="#fafafa" />}

              {/* Symbol badge */}
              <rect
                x={colX[2]}
                y={y + 5}
                width={u.symbol.length > 2 ? 40 : 30}
                height="24"
                rx="12"
                fill={u.bg}
                stroke={u.color}
                strokeWidth="1.5"
              />
              <text
                x={colX[2] + (u.symbol.length > 2 ? 20 : 15)}
                y={y + 22}
                textAnchor="middle"
                fontSize="13"
                fill={u.color}
                fontWeight="700"
              >
                {u.symbol}
              </text>

              {/* Quantity */}
              <text x={colX[0]} y={y + 22} fontSize="12" fill="#374151" fontWeight="500">
                {u.quantity}
              </text>

              {/* Name */}
              <text x={colX[1]} y={y + 22} fontSize="12" fill="#1f2937" fontWeight="600">
                {u.name}
              </text>

              {/* Example */}
              <text x={colX[3]} y={y + 22} fontSize="10" fill="#6b7280" fontStyle="italic">
                {examples[i]}
              </text>

              {/* Row separator */}
              <line
                x1="20"
                y1={y + rowH}
                x2="470"
                y2={y + rowH}
                stroke="#e2e8f0"
                strokeWidth="0.5"
              />
            </g>
          );
        })}

        {/* Bottom note */}
        <text x="245" y="345" textAnchor="middle" fontSize="9" fill="#6b7280" fontStyle="italic">
          Alle anderen Einheiten (N, Pa, J, W, V, ...) sind abgeleitete Einheiten aus diesen 7
          Basiseinheiten.
        </text>
      </svg>
    </div>
  );
}
