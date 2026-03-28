export default function PhaseDiagramWater() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Phasendiagramm von Wasser
      </h4>
      <p className="text-xs text-[var(--muted)]">
        P-T-Diagramm mit Tripelpunkt, kritischem Punkt und der Anomalie des Wassers.
      </p>

      <svg role="img" viewBox="0 0 500 340" className="w-full max-w-lg mx-auto">
        <title>Phasendiagramm von Wasser — Tripelpunkt, kritischer Punkt und Anomalie</title>

        {/* Axes */}
        <line x1="70" y1="280" x2="470" y2="280" stroke="#374151" strokeWidth="2" />
        <line x1="70" y1="280" x2="70" y2="30" stroke="#374151" strokeWidth="2" />

        {/* Axis labels */}
        <text x="270" y="310" textAnchor="middle" fontSize="13" fill="#374151" fontWeight="bold">
          Temperatur (T)
        </text>
        <text
          x="30"
          y="155"
          textAnchor="middle"
          fontSize="13"
          fill="#374151"
          fontWeight="bold"
          transform="rotate(-90, 30, 155)"
        >
          Druck (P)
        </text>

        {/* Arrow heads on axes */}
        <polygon points="470,280 460,275 460,285" fill="#374151" />
        <polygon points="70,30 65,40 75,40" fill="#374151" />

        {/* Region fills */}
        {/* Solid (ice blue) - left of sublimation + left of melting line */}
        <path d="M70,280 L160,200 L155,60 L70,60 Z" fill="#dbeafe" opacity="0.5" />
        {/* Liquid (water blue) - between melting and vaporization */}
        <path d="M160,200 L155,60 L350,60 L350,110 Z" fill="#93c5fd" opacity="0.4" />
        {/* Gas (light gray) - right and below */}
        <path d="M70,280 L160,200 L350,110 L350,280 Z" fill="#f3f4f6" opacity="0.6" />

        {/* Sublimation curve (solid-gas boundary) */}
        <path d="M70,280 Q120,240 160,200" fill="none" stroke="#7c3aed" strokeWidth="2.5" />

        {/* Melting curve — tilts LEFT (water anomaly!) */}
        <path d="M160,200 Q157,130 155,60" fill="none" stroke="#2563eb" strokeWidth="2.5" />

        {/* Vaporization curve (liquid-gas) */}
        <path d="M160,200 Q240,170 350,110" fill="none" stroke="#059669" strokeWidth="2.5" />

        {/* Triple point */}
        <circle cx="160" cy="200" r="5" fill="#dc2626" />
        <text x="175" y="218" fontSize="10" fill="#dc2626" fontWeight="bold">
          Tripelpunkt
        </text>
        <text x="175" y="230" fontSize="9" fill="#6b7280">
          0,01 °C / 611 Pa
        </text>

        {/* Critical point */}
        <circle cx="350" cy="110" r="5" fill="#dc2626" />
        <text x="355" y="100" fontSize="10" fill="#dc2626" fontWeight="bold">
          Kritischer Punkt
        </text>
        <text x="355" y="112" fontSize="9" fill="#6b7280">
          374 °C / 221 bar
        </text>

        {/* Region labels */}
        <text x="105" y="130" textAnchor="middle" fontSize="14" fill="#2563eb" fontWeight="bold">
          Eis
        </text>
        <text x="105" y="145" textAnchor="middle" fontSize="10" fill="#2563eb">
          (fest)
        </text>

        <text x="250" y="90" textAnchor="middle" fontSize="14" fill="#1d4ed8" fontWeight="bold">
          Wasser
        </text>
        <text x="250" y="105" textAnchor="middle" fontSize="10" fill="#1d4ed8">
          (flüssig)
        </text>

        <text x="280" y="240" textAnchor="middle" fontSize="14" fill="#6b7280" fontWeight="bold">
          Dampf
        </text>
        <text x="280" y="255" textAnchor="middle" fontSize="10" fill="#6b7280">
          (gasförmig)
        </text>

        {/* Curve labels */}
        <text
          x="95"
          y="248"
          fontSize="10"
          fill="#7c3aed"
          fontWeight="bold"
          transform="rotate(-45, 95, 248)"
        >
          Sublimation
        </text>

        <text
          x="140"
          y="130"
          fontSize="10"
          fill="#2563eb"
          fontWeight="bold"
          transform="rotate(-85, 140, 130)"
        >
          Schmelzen
        </text>

        <text
          x="260"
          y="165"
          fontSize="10"
          fill="#059669"
          fontWeight="bold"
          transform="rotate(-20, 260, 165)"
        >
          Verdampfen
        </text>

        {/* Anomaly annotation */}
        <path
          d="M175,140 C172,140 168,145 160,148"
          fill="none"
          stroke="#dc2626"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        <rect
          x="175"
          y="130"
          width="120"
          height="30"
          rx="4"
          fill="#fef2f2"
          stroke="#fecaca"
          strokeWidth="1"
        />
        <text x="235" y="145" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="bold">
          Anomalie: Schmelzkurve
        </text>
        <text x="235" y="156" textAnchor="middle" fontSize="9" fill="#dc2626">
          neigt sich nach links!
        </text>

        {/* Temperature markers on x-axis */}
        <line x1="160" y1="280" x2="160" y2="285" stroke="#374151" strokeWidth="1" />
        <text x="160" y="298" textAnchor="middle" fontSize="9" fill="#6b7280">
          0 °C
        </text>
        <line x1="350" y1="280" x2="350" y2="285" stroke="#374151" strokeWidth="1" />
        <text x="350" y="298" textAnchor="middle" fontSize="9" fill="#6b7280">
          374 °C
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Wasser zeigt eine Anomalie: Die Schmelzkurve neigt sich nach links (negative Steigung).
          Das bedeutet, dass Eis unter Druck schmilzt — bei den meisten Stoffen ist es umgekehrt. Am
          Tripelpunkt existieren alle drei Phasen gleichzeitig.
        </p>
      </div>
    </div>
  );
}
