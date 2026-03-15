export default function SIPrefixes() {
  const prefixes = [
    { prefix: "Tera", symbol: "T", exp: "10\u00B9\u00B2", highlight: false },
    { prefix: "Giga", symbol: "G", exp: "10\u2079", highlight: false },
    { prefix: "Mega", symbol: "M", exp: "10\u2076", highlight: false },
    { prefix: "Kilo", symbol: "k", exp: "10\u00B3", highlight: false },
    { prefix: "Hekto", symbol: "h", exp: "10\u00B2", highlight: false },
    { prefix: "Deka", symbol: "da", exp: "10\u00B9", highlight: false },
    { prefix: "\u2014", symbol: "\u2014", exp: "10\u2070 = 1", highlight: false },
    { prefix: "Dezi", symbol: "d", exp: "10\u207B\u00B9", highlight: false },
    { prefix: "Zenti", symbol: "c", exp: "10\u207B\u00B2", highlight: false },
    { prefix: "Milli", symbol: "m", exp: "10\u207B\u00B3", highlight: true, med: "mL (Dosierung)" },
    {
      prefix: "Mikro",
      symbol: "\u00B5",
      exp: "10\u207B\u2076",
      highlight: true,
      med: "\u00B5m (Zellen)",
    },
    {
      prefix: "Nano",
      symbol: "n",
      exp: "10\u207B\u2079",
      highlight: true,
      med: "nm (Wellenl\u00E4ngen)",
    },
    { prefix: "Piko", symbol: "p", exp: "10\u207B\u00B9\u00B2", highlight: false },
    { prefix: "Femto", symbol: "f", exp: "10\u207B\u00B9\u2075", highlight: false },
  ];

  const rowH = 22;
  const startY = 50;
  const totalH = startY + prefixes.length * rowH + 40;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        SI-Pr{"\u00E4"}fixe
      </h4>
      <svg viewBox={`0 0 480 ${totalH}`} className="w-full max-w-2xl mx-auto">
        <title>SI-Pr{"\u00E4"}fixe — von Femto bis Tera mit medizinischen Beispielen</title>

        {/* Title */}
        <text
          x="240"
          y="22"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          SI-Pr{"\u00E4"}fixe: Zehnerpotenzen
        </text>

        {/* Column headers */}
        <rect x="20" y="32" width="440" height="18" rx="3" fill="#f1f5f9" />
        <text x="35" y="45" fontSize="10" fill="#64748b" fontWeight="600">
          Pr{"\u00E4"}fix
        </text>
        <text x="130" y="45" fontSize="10" fill="#64748b" fontWeight="600">
          Symbol
        </text>
        <text x="200" y="45" fontSize="10" fill="#64748b" fontWeight="600">
          Faktor
        </text>
        <text x="310" y="45" fontSize="10" fill="#64748b" fontWeight="600">
          Medizinisches Beispiel
        </text>

        {/* Vertical number line (left side) */}
        <line
          x1="15"
          y1={startY}
          x2="15"
          y2={startY + prefixes.length * rowH}
          stroke="#94a3b8"
          strokeWidth="2"
        />

        {/* Rows */}
        {prefixes.map((p, i) => {
          const y = startY + i * rowH;
          const isBase = p.prefix === "\u2014";
          const bgColor = p.highlight
            ? "#eff6ff"
            : isBase
              ? "#fef3c7"
              : i % 2 === 0
                ? "#fafafa"
                : "transparent";
          const borderColor = p.highlight ? "#93c5fd" : isBase ? "#fbbf24" : "transparent";

          return (
            <g key={p.prefix + i}>
              {/* Row background */}
              <rect
                x="20"
                y={y}
                width="440"
                height={rowH}
                fill={bgColor}
                stroke={borderColor}
                strokeWidth={p.highlight || isBase ? 1 : 0}
                rx="3"
              />

              {/* Scale marker */}
              <circle
                cx="15"
                cy={y + rowH / 2}
                r={p.highlight ? 4 : isBase ? 5 : 2.5}
                fill={p.highlight ? "#2563eb" : isBase ? "#d97706" : "#94a3b8"}
              />

              {/* Prefix name */}
              <text
                x="35"
                y={y + 15}
                fontSize="11"
                fill={isBase ? "#92400e" : "#374151"}
                fontWeight={p.highlight || isBase ? "600" : "400"}
              >
                {p.prefix}
              </text>

              {/* Symbol */}
              <text
                x="145"
                y={y + 15}
                fontSize="13"
                fill={p.highlight ? "#1e40af" : isBase ? "#d97706" : "#1f2937"}
                fontWeight="700"
                textAnchor="middle"
              >
                {p.symbol}
              </text>

              {/* Exponent */}
              <text
                x="200"
                y={y + 15}
                fontSize="11"
                fill={isBase ? "#92400e" : "#6b7280"}
                fontWeight={isBase ? "600" : "400"}
              >
                {p.exp}
              </text>

              {/* Medical example (if highlighted) */}
              {p.highlight && "med" in p && (
                <>
                  <rect
                    x="305"
                    y={y + 2}
                    width={p.med!.length * 6.5 + 16}
                    height="18"
                    rx="9"
                    fill="#dbeafe"
                    stroke="#93c5fd"
                    strokeWidth="1"
                  />
                  <text x="315" y={y + 15} fontSize="10" fill="#1e40af" fontWeight="600">
                    {p.med}
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Arrow indicators on scale */}
        <text x="8" y={startY - 5} fontSize="9" fill="#374151" textAnchor="middle" fontWeight="600">
          gro{"\u00DF"}
        </text>
        <text
          x="8"
          y={startY + prefixes.length * rowH + 15}
          fontSize="9"
          fill="#374151"
          textAnchor="middle"
          fontWeight="600"
        >
          klein
        </text>

        {/* Mnemonic */}
        <text
          x="240"
          y={totalH - 10}
          textAnchor="middle"
          fontSize="9"
          fill="#6b7280"
          fontStyle="italic"
        >
          Merkhilfe: Kilo (10{"\u00B3"}), Milli (10{"\u207B"}
          {"\u00B3"}), Mikro (10{"\u207B"}
          {"\u2076"}), Nano (10{"\u207B"}
          {"\u2079"}) — je Faktor 1000
        </text>
      </svg>
    </div>
  );
}
