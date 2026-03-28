export default function InclinedPlane() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Schiefe Ebene — Kräftezerlegung
      </h4>
      <svg role="img" viewBox="0 0 500 360" className="w-full max-w-2xl mx-auto">
        <title>Schiefe Ebene mit Kräftezerlegung</title>
        <defs>
          <marker id="ip-arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#dc2626" />
          </marker>
          <marker
            id="ip-arrowBlue"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="#2563eb" />
          </marker>
          <marker
            id="ip-arrowGreen"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="#16a34a" />
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
          Schiefe Ebene
        </text>

        {/* Inclined plane triangle */}
        <polygon points="40,260 340,260 340,100" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />

        {/* Surface hatching */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={i}
            x1={60 + i * 42}
            y1={260}
            x2={42 + i * 42}
            y2={270}
            stroke="#94a3b8"
            strokeWidth="1"
          />
        ))}

        {/* Ground line */}
        <line x1="30" y1="260" x2="350" y2="260" stroke="#374151" strokeWidth="2" />

        {/* Angle arc alpha */}
        <path d="M300,260 A50,50 0 0,0 318,237" fill="none" stroke="#0d9488" strokeWidth="2" />
        <text
          x="288"
          y="250"
          fontSize="15"
          fill="#0d9488"
          fontWeight="700"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          {"\u03B1"}
        </text>

        {/* Right angle marker at top */}
        <rect x="332" y="248" width="8" height="12" fill="none" stroke="#64748b" strokeWidth="1" />

        {/* Object (block) on incline — positioned on slope */}
        {/* Slope angle: atan((260-100)/(340-40)) = atan(160/300) ~ 28° */}
        <g transform="translate(200, 168) rotate(-28.07)">
          <rect
            x="-22"
            y="-22"
            width="44"
            height="44"
            rx="4"
            fill="#dbeafe"
            stroke="#2563eb"
            strokeWidth="2"
          />
          <text x="0" y="6" textAnchor="middle" fontSize="14" fill="#1e40af" fontWeight="700">
            m
          </text>
        </g>

        {/* Center of mass */}
        <circle cx="200" cy="172" r="3" fill="#1e3a5f" />

        {/* FG — weight force (straight down) */}
        <line
          x1="200"
          y1="172"
          x2="200"
          y2="270"
          stroke="#dc2626"
          strokeWidth="2.5"
          markerEnd="url(#ip-arrowRed)"
        />
        <text
          x="213"
          y="240"
          fontSize="14"
          fill="#dc2626"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x1D33E;
        </text>

        {/* FN — normal force (perpendicular to surface, pointing away from surface) */}
        {/* Normal direction: perpendicular to slope, angle = 90 - 28.07 = 61.93° from horizontal */}
        <line
          x1="200"
          y1="172"
          x2="157"
          y2="97"
          stroke="#2563eb"
          strokeWidth="2.5"
          markerEnd="url(#ip-arrowBlue)"
        />
        <text
          x="140"
          y="92"
          textAnchor="end"
          fontSize="14"
          fill="#2563eb"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x2099;
        </text>

        {/* F_parallel — along slope downhill */}
        <line
          x1="200"
          y1="172"
          x2="248"
          y2="198"
          stroke="#16a34a"
          strokeWidth="2.5"
          markerEnd="url(#ip-arrowGreen)"
        />
        <text
          x="260"
          y="208"
          fontSize="14"
          fill="#16a34a"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x2016;
        </text>

        {/* Dashed decomposition lines */}
        <line
          x1="200"
          y1="270"
          x2="248"
          y2="198"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.5"
        />
        <line
          x1="200"
          y1="270"
          x2="157"
          y2="97"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.4"
        />

        {/* Right angle at decomposition */}
        <rect
          x="243"
          y="195"
          width="6"
          height="6"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1"
          transform="rotate(-28.07, 248, 198)"
        />

        {/* Force triangle (separate, right side) */}
        <text
          x="420"
          y="65"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Kräftedreieck
        </text>

        {/* FG vertical */}
        <line
          x1="420"
          y1="85"
          x2="420"
          y2="195"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#ip-arrowRed)"
        />
        <text
          x="432"
          y="145"
          fontSize="12"
          fill="#dc2626"
          fontWeight="600"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          F&#x1D33E;
        </text>

        {/* FN perpendicular */}
        <line
          x1="420"
          y1="195"
          x2="375"
          y2="115"
          stroke="#2563eb"
          strokeWidth="2"
          markerEnd="url(#ip-arrowBlue)"
        />
        <text
          x="385"
          y="165"
          fontSize="12"
          fill="#2563eb"
          fontWeight="600"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          textAnchor="end"
        >
          F&#x2099;
        </text>

        {/* F_parallel */}
        <line
          x1="420"
          y1="85"
          x2="375"
          y2="115"
          stroke="#16a34a"
          strokeWidth="2"
          markerEnd="url(#ip-arrowGreen)"
        />
        <text
          x="388"
          y="95"
          fontSize="12"
          fill="#16a34a"
          fontWeight="600"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          textAnchor="end"
        >
          F&#x2016;
        </text>

        {/* Angle alpha in force triangle */}
        <path d="M420,185 A15,15 0 0,0 413,177" fill="none" stroke="#0d9488" strokeWidth="1.5" />
        <text x="430" y="183" fontSize="10" fill="#0d9488" fontWeight="600">
          {"\u03B1"}
        </text>

        {/* Formula box */}
        <rect
          x="130"
          y="290"
          width="240"
          height="55"
          rx="6"
          fill="#f0fdf4"
          stroke="#86efac"
          strokeWidth="1"
        />
        <text
          x="250"
          y="310"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x2016; = mg {"\u00B7"} sin({"\u03B1"})
        </text>
        <text
          x="250"
          y="332"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x2099; = mg {"\u00B7"} cos({"\u03B1"})
        </text>
      </svg>
    </div>
  );
}
