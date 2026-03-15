export default function MicroscopeOptics() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Strahlengang im Lichtmikroskop
      </h4>
      <svg viewBox="0 0 520 340" className="w-full max-w-2xl mx-auto">
        <title>Zusammengesetztes Mikroskop — Objektiv und Okular mit Strahlengang</title>
        <defs>
          <marker id="mo-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#374151" />
          </marker>
        </defs>

        {/* Title */}
        <text
          x="260"
          y="22"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Zusammengesetztes Mikroskop
        </text>

        {/* Optical axis */}
        <line
          x1="20"
          y1="170"
          x2="510"
          y2="170"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="5 3"
        />

        {/* Object (small arrow) */}
        <line x1="60" y1="170" x2="60" y2="130" stroke="#059669" strokeWidth="2.5" />
        <polygon points="60,128 55,138 65,138" fill="#059669" />
        <text x="60" y="190" textAnchor="middle" fontSize="10" fill="#059669" fontWeight="600">
          Objekt
        </text>
        <text x="60" y="200" textAnchor="middle" fontSize="9" fill="#6b7280">
          (Pr{"\u00E4"}parat)
        </text>

        {/* Objektiv lens */}
        <ellipse
          cx="150"
          cy="170"
          rx="6"
          ry="45"
          fill="#bfdbfe"
          stroke="#2563eb"
          strokeWidth="2"
          opacity="0.7"
        />
        <text x="150" y="230" textAnchor="middle" fontSize="11" fill="#2563eb" fontWeight="600">
          Objektiv
        </text>
        <text x="150" y="242" textAnchor="middle" fontSize="9" fill="#2563eb">
          (kurze f)
        </text>

        {/* Focal points of Objektiv */}
        <circle cx="110" cy="170" r="3" fill="#2563eb" />
        <text x="110" y="163" textAnchor="middle" fontSize="9" fill="#2563eb">
          F{"\u2081"}
        </text>
        <circle cx="190" cy="170" r="3" fill="#2563eb" />
        <text x="190" y="163" textAnchor="middle" fontSize="9" fill="#2563eb">
          F{"\u2081"}
          {"\u2032"}
        </text>

        {/* Ray paths through Objektiv */}
        {/* Parallel ray -> through focal point */}
        <line x1="60" y1="130" x2="150" y2="130" stroke="#dc2626" strokeWidth="1.2" />
        <line x1="150" y1="130" x2="300" y2="210" stroke="#dc2626" strokeWidth="1.2" />

        {/* Through center ray */}
        <line x1="60" y1="130" x2="300" y2="210" stroke="#f97316" strokeWidth="1.2" opacity="0.7" />

        {/* Focal ray -> parallel */}
        <line x1="60" y1="130" x2="150" y2="185" stroke="#7c3aed" strokeWidth="1.2" />
        <line x1="150" y1="185" x2="300" y2="210" stroke="#7c3aed" strokeWidth="1.2" />

        {/* Real intermediate image (inverted, larger) */}
        <line x1="300" y1="170" x2="300" y2="210" stroke="#dc2626" strokeWidth="2.5" />
        <polygon points="300,212 295,202 305,202" fill="#dc2626" />
        <text x="300" y="155" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="600">
          Zwischenbild
        </text>
        <text x="300" y="165" textAnchor="middle" fontSize="9" fill="#dc2626">
          (reell, vergr., umgekehrt)
        </text>

        {/* Okular lens */}
        <ellipse
          cx="370"
          cy="170"
          rx="6"
          ry="40"
          fill="#fde68a"
          stroke="#d97706"
          strokeWidth="2"
          opacity="0.7"
        />
        <text x="370" y="225" textAnchor="middle" fontSize="11" fill="#d97706" fontWeight="600">
          Okular
        </text>
        <text x="370" y="237" textAnchor="middle" fontSize="9" fill="#d97706">
          (Lupe)
        </text>

        {/* Focal points of Okular */}
        <circle cx="340" cy="170" r="3" fill="#d97706" />
        <text x="340" y="163" textAnchor="middle" fontSize="9" fill="#d97706">
          F{"\u2082"}
        </text>
        <circle cx="400" cy="170" r="3" fill="#d97706" />
        <text x="400" y="163" textAnchor="middle" fontSize="9" fill="#d97706">
          F{"\u2082"}
          {"\u2032"}
        </text>

        {/* Rays through Okular — diverging (virtual image) */}
        <line x1="300" y1="210" x2="370" y2="210" stroke="#dc2626" strokeWidth="1.2" />
        <line
          x1="370"
          y1="210"
          x2="500"
          y2="240"
          stroke="#dc2626"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />

        <line x1="300" y1="210" x2="370" y2="180" stroke="#7c3aed" strokeWidth="1.2" />
        <line
          x1="370"
          y1="180"
          x2="500"
          y2="155"
          stroke="#7c3aed"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />

        {/* Virtual image indication (dashed arrow, far left projected) */}
        <line
          x1="470"
          y1="170"
          x2="470"
          y2="250"
          stroke="#059669"
          strokeWidth="2"
          strokeDasharray="5 3"
        />
        <polygon points="470,252 465,242 475,242" fill="#059669" opacity="0.6" />
        <text x="470" y="265" textAnchor="middle" fontSize="9" fill="#059669" fontWeight="600">
          Virtuelles Bild
        </text>
        <text x="470" y="275" textAnchor="middle" fontSize="8" fill="#059669">
          (stark vergr.)
        </text>

        {/* Eye */}
        <ellipse
          cx="490"
          cy="170"
          rx="10"
          ry="12"
          fill="#fafafa"
          stroke="#374151"
          strokeWidth="1.5"
        />
        <circle cx="490" cy="170" r="4" fill="#374151" />
        <text x="490" y="195" textAnchor="middle" fontSize="9" fill="#374151">
          Auge
        </text>

        {/* Formula box */}
        <rect
          x="120"
          y="285"
          width="280"
          height="40"
          rx="6"
          fill="#eff6ff"
          stroke="#93c5fd"
          strokeWidth="1"
        />
        <text x="260" y="305" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">
          V{"\u2081"}
          {"\u2080"}
          {"\u2080"}
          {"\u2080"} = V{"\u2092"}
          {"\u2096"}
          {"\u2097"} {"\u00D7"} V{"\u2092"}
          {"\u2096"}
        </text>
        <text x="260" y="318" textAnchor="middle" fontSize="10" fill="#6b7280">
          Gesamtvergr{"\u00F6"}
          {"\u00DF"}erung = Objektiv {"\u00D7"} Okular (z.B. 40{"\u00D7"}10 = 400{"\u00D7"})
        </text>
      </svg>
    </div>
  );
}
