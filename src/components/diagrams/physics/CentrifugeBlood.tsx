export default function CentrifugeBlood() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Blutzentrifugation</h4>
      <svg viewBox="0 0 500 380" className="w-full max-w-2xl mx-auto">
        <title>Blutzentrifugation — Auftrennung in Plasma, Buffy Coat und Erythrozyten</title>
        <defs>
          <linearGradient id="cb-plasma" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id="cb-rbc" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <marker id="cb-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#6b7280" />
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
          Bluttrennung durch Zentrifugation
        </text>

        {/* === BEFORE tube (left) === */}
        <text x="120" y="55" textAnchor="middle" fontSize="12" fill="#374151" fontWeight="600">
          Vollblut (vor)
        </text>

        {/* Tube outline */}
        <rect
          x="85"
          y="65"
          width="70"
          height="200"
          rx="0"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2"
        />
        <path
          d="M85,265 Q85,290 120,290 Q155,290 155,265"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2"
        />

        {/* Mixed blood */}
        <rect x="87" y="100" width="66" height="165" fill="#dc2626" opacity="0.6" />
        <path d="M87,265 Q87,288 120,288 Q153,288 153,265" fill="#dc2626" opacity="0.6" />

        {/* Centrifuge arrow */}
        <line
          x1="180"
          y1="165"
          x2="230"
          y2="165"
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#cb-arrow)"
        />
        <text x="205" y="155" textAnchor="middle" fontSize="10" fill="#6b7280" fontWeight="500">
          Zentrifuge
        </text>
        {/* Rotation symbol */}
        <path d="M195,175 A8,8 0 1,1 215,175" fill="none" stroke="#6b7280" strokeWidth="1.5" />
        <path d="M213,172 L215,175 L212,176" fill="#6b7280" />

        {/* === AFTER tube (right) === */}
        <text x="330" y="55" textAnchor="middle" fontSize="12" fill="#374151" fontWeight="600">
          Nach Zentrifugation
        </text>

        {/* Tube outline */}
        <rect
          x="295"
          y="65"
          width="70"
          height="200"
          rx="0"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2"
        />
        <path
          d="M295,265 Q295,290 330,290 Q365,290 365,265"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2"
        />

        {/* Plasma layer (~55%, top) */}
        <rect x="297" y="100" width="66" height="93" fill="url(#cb-plasma)" />

        {/* Buffy coat (<1%) */}
        <rect
          x="297"
          y="193"
          width="66"
          height="4"
          fill="#f5f5f4"
          stroke="#d6d3d1"
          strokeWidth="0.5"
        />

        {/* Erythrocytes (~45%, bottom) */}
        <rect x="297" y="197" width="66" height="68" fill="url(#cb-rbc)" />
        <path d="M297,265 Q297,288 330,288 Q363,288 363,265" fill="url(#cb-rbc)" />

        {/* Labels with lines */}
        {/* Plasma */}
        <line x1="365" y1="140" x2="395" y2="140" stroke="#d97706" strokeWidth="1" />
        <text x="400" y="136" fontSize="12" fill="#d97706" fontWeight="600">
          Plasma (~55 %)
        </text>
        <text x="400" y="150" fontSize="10" fill="#92400e">
          Wasser, Proteine,
        </text>
        <text x="400" y="162" fontSize="10" fill="#92400e">
          Elektrolyte, Hormone
        </text>

        {/* Buffy coat */}
        <line x1="365" y1="195" x2="395" y2="195" stroke="#78716c" strokeWidth="1" />
        <text x="400" y="191" fontSize="12" fill="#78716c" fontWeight="600">
          Buffy Coat (&lt;1 %)
        </text>
        <text x="400" y="205" fontSize="10" fill="#78716c">
          Leukozyten +
        </text>
        <text x="400" y="217" fontSize="10" fill="#78716c">
          Thrombozyten
        </text>

        {/* Erythrocytes */}
        <line x1="365" y1="230" x2="395" y2="230" stroke="#dc2626" strokeWidth="1" />
        <text x="400" y="226" fontSize="12" fill="#dc2626" fontWeight="600">
          Erythrozyten (~45 %)
        </text>
        <text x="400" y="240" fontSize="10" fill="#991b1b">
          Rote Blutk{"\u00F6"}rperchen
        </text>

        {/* Hematocrit box */}
        <rect
          x="80"
          y="310"
          width="340"
          height="35"
          rx="6"
          fill="#eff6ff"
          stroke="#93c5fd"
          strokeWidth="1"
        />
        <text x="250" y="330" textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">
          H{"\u00E4"}matokrit = Erythrozytenanteil {"\u2248"} 45 %
        </text>
        <text x="250" y="342" textAnchor="middle" fontSize="10" fill="#6b7280">
          (Frauen: 37{"\u2013"}47 %, M{"\u00E4"}nner: 40{"\u2013"}54 %)
        </text>

        {/* Percentage markers on tube */}
        <text x="288" y="148" fontSize="9" fill="#92400e" textAnchor="end" fontWeight="500">
          55 %
        </text>
        <text x="288" y="235" fontSize="9" fill="#fca5a5" textAnchor="end" fontWeight="500">
          45 %
        </text>

        {/* Bottom note */}
        <text x="250" y="368" textAnchor="middle" fontSize="9" fill="#6b7280" fontStyle="italic">
          Zentripetalkraft trennt Bestandteile nach Dichte — schwere Erythrozyten sinken nach au
          {"\u00DF"}en/unten.
        </text>
      </svg>
    </div>
  );
}
