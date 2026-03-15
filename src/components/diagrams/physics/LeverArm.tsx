export default function LeverArm() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Hebelgesetz</h4>
      <svg viewBox="0 0 520 340" className="w-full max-w-2xl mx-auto">
        <title>Hebelgesetz — Drehmoment und Gleichgewicht</title>
        <defs>
          <marker
            id="lv-arrowDown"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="#d97706" />
          </marker>
          <marker
            id="lv-arrowDown2"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="#c2410c" />
          </marker>
          <marker
            id="lv-arrowCurve"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="#9333ea" />
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
          Hebel (Drehmoment)
        </text>

        {/* Beam */}
        <rect
          x="60"
          y="118"
          width="400"
          height="8"
          rx="2"
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth="1.5"
        />

        {/* Fulcrum triangle */}
        <polygon points="260,126 240,175 280,175" fill="#fde68a" stroke="#b45309" strokeWidth="2" />
        <text x="260" y="192" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="600">
          Drehpunkt
        </text>

        {/* Ground line */}
        <line x1="40" y1="175" x2="480" y2="175" stroke="#374151" strokeWidth="1.5" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line
            key={i}
            x1={55 + i * 50}
            y1={175}
            x2={40 + i * 50}
            y2={185}
            stroke="#9ca3af"
            strokeWidth="1"
          />
        ))}

        {/* Left force F1 */}
        <line
          x1="120"
          y1="50"
          x2="120"
          y2="112"
          stroke="#d97706"
          strokeWidth="2.5"
          markerEnd="url(#lv-arrowDown)"
        />
        <text
          x="120"
          y="42"
          textAnchor="middle"
          fontSize="15"
          fill="#d97706"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x2081;
        </text>

        {/* Right force F2 */}
        <line
          x1="400"
          y1="50"
          x2="400"
          y2="112"
          stroke="#c2410c"
          strokeWidth="2.5"
          markerEnd="url(#lv-arrowDown2)"
        />
        <text
          x="400"
          y="42"
          textAnchor="middle"
          fontSize="15"
          fill="#c2410c"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x2082;
        </text>

        {/* Distance r1 */}
        <line x1="120" y1="140" x2="258" y2="140" stroke="#78716c" strokeWidth="1" />
        <line x1="120" y1="135" x2="120" y2="145" stroke="#78716c" strokeWidth="1" />
        <line x1="258" y1="135" x2="258" y2="145" stroke="#78716c" strokeWidth="1" />
        <text
          x="189"
          y="155"
          textAnchor="middle"
          fontSize="14"
          fill="#78716c"
          fontWeight="600"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          r&#x2081;
        </text>

        {/* Distance r2 */}
        <line x1="262" y1="140" x2="400" y2="140" stroke="#78716c" strokeWidth="1" />
        <line x1="262" y1="135" x2="262" y2="145" stroke="#78716c" strokeWidth="1" />
        <line x1="400" y1="135" x2="400" y2="145" stroke="#78716c" strokeWidth="1" />
        <text
          x="331"
          y="155"
          textAnchor="middle"
          fontSize="14"
          fill="#78716c"
          fontWeight="600"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
        >
          r&#x2082;
        </text>

        {/* Rotation arrows (moments) */}
        <path
          d="M100,80 A30,30 0 0,1 140,80"
          fill="none"
          stroke="#9333ea"
          strokeWidth="1.5"
          markerEnd="url(#lv-arrowCurve)"
        />
        <text x="120" y="75" textAnchor="middle" fontSize="10" fill="#9333ea" fontWeight="600">
          M&#x2081;
        </text>

        <path
          d="M420,80 A30,30 0 0,0 380,80"
          fill="none"
          stroke="#9333ea"
          strokeWidth="1.5"
          markerEnd="url(#lv-arrowCurve)"
        />
        <text x="400" y="75" textAnchor="middle" fontSize="10" fill="#9333ea" fontWeight="600">
          M&#x2082;
        </text>

        {/* Formula box */}
        <rect
          x="160"
          y="210"
          width="200"
          height="50"
          rx="6"
          fill="#fffbeb"
          stroke="#fbbf24"
          strokeWidth="1"
        />
        <text
          x="260"
          y="232"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Gleichgewicht:
        </text>
        <text
          x="260"
          y="250"
          textAnchor="middle"
          fontSize="14"
          fill="#92400e"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x2081; {"\u00B7"} r&#x2081; = F&#x2082; {"\u00B7"} r&#x2082;
        </text>

        {/* Medical context: forearm lever */}
        <rect
          x="100"
          y="280"
          width="320"
          height="50"
          rx="8"
          fill="#fef9c3"
          stroke="#facc15"
          strokeWidth="1"
          opacity="0.85"
        />
        <text x="260" y="298" textAnchor="middle" fontSize="11" fill="#854d0e" fontWeight="600">
          Medizinischer Bezug: Unterarm als Hebel
        </text>
        {/* Simple arm outline */}
        <line x1="160" y1="315" x2="360" y2="315" stroke="#b45309" strokeWidth="2" />
        {/* Elbow joint (fulcrum) */}
        <circle cx="160" cy="315" r="5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
        <text x="148" y="328" fontSize="8" fill="#854d0e" textAnchor="middle">
          Ellbogen
        </text>
        {/* Biceps force */}
        <line x1="200" y1="315" x2="200" y2="295" stroke="#d97706" strokeWidth="2" />
        <text x="200" y="292" fontSize="8" fill="#d97706" textAnchor="middle" fontWeight="600">
          Bizeps
        </text>
        {/* Load */}
        <circle cx="350" cy="315" r="6" fill="#c2410c" opacity="0.7" />
        <text x="350" y="328" fontSize="8" fill="#c2410c" textAnchor="middle" fontWeight="600">
          Last
        </text>
      </svg>
    </div>
  );
}
