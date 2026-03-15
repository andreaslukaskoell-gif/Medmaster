export default function MagneticFieldLines() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Magnetische Feldlinien
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Feldlinienverlauf eines Stabmagneten — von Nord nach Süd (außen) und Süd nach Nord (innen).
      </p>

      <svg viewBox="0 0 520 340" className="w-full max-w-lg mx-auto">
        <title>Magnetische Feldlinien eines Stabmagneten</title>

        <defs>
          <marker
            id="fieldArrow"
            markerWidth="6"
            markerHeight="5"
            refX="3"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L6,2.5 L0,5" fill="#6b7280" />
          </marker>
          <marker
            id="compassArrow"
            markerWidth="5"
            markerHeight="4"
            refX="5"
            refY="2"
            orient="auto"
          >
            <path d="M0,0 L5,2 L0,4" fill="#dc2626" />
          </marker>
        </defs>

        {/* Bar magnet body */}
        <rect
          x="160"
          y="145"
          width="200"
          height="50"
          rx="4"
          fill="#d1d5db"
          stroke="#9ca3af"
          strokeWidth="1.5"
        />
        {/* North pole (red) */}
        <rect
          x="160"
          y="145"
          width="100"
          height="50"
          rx="4"
          fill="#fecaca"
          stroke="#ef4444"
          strokeWidth="1.5"
        />
        <rect x="210" y="145" width="50" height="50" fill="#fecaca" />
        <text x="210" y="177" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#dc2626">
          N
        </text>
        {/* South pole (blue) */}
        <rect
          x="260"
          y="145"
          width="100"
          height="50"
          rx="4"
          fill="#bfdbfe"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        <rect x="260" y="145" width="50" height="50" fill="#bfdbfe" />
        <text x="310" y="177" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#2563eb">
          S
        </text>

        {/* Internal field line (S→N inside magnet) */}
        <line
          x1="340"
          y1="170"
          x2="180"
          y2="170"
          stroke="#9ca3af"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          markerEnd="url(#fieldArrow)"
        />

        {/* Field line 1 — closest */}
        <path
          d="M160,155 C100,155 70,100 100,60 C140,20 260,10 370,40 C420,55 440,100 420,140 C410,160 380,165 360,165"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.3"
          markerEnd="url(#fieldArrow)"
        />

        {/* Field line 2 — medium top */}
        <path
          d="M160,150 C80,140 40,80 80,30 C130,-15 280,-20 400,20 C450,40 470,100 450,145 C440,160 390,162 360,160"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.3"
          markerEnd="url(#fieldArrow)"
        />

        {/* Field line 3 — closest bottom */}
        <path
          d="M160,185 C100,185 70,240 100,280 C140,320 260,330 370,300 C420,285 440,240 420,200 C410,180 380,175 360,175"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.3"
          markerEnd="url(#fieldArrow)"
        />

        {/* Field line 4 — medium bottom */}
        <path
          d="M160,190 C80,200 40,260 80,310 C130,355 280,360 400,320 C450,300 470,240 450,195 C440,180 390,178 360,180"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.3"
          markerEnd="url(#fieldArrow)"
        />

        {/* Field line 5 — wide top */}
        <path
          d="M155,148 C50,120 15,50 60,5 C120,-35 300,-40 420,-5 C480,20 500,90 475,148 C465,165 400,158 360,155"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1"
          opacity="0.6"
          markerEnd="url(#fieldArrow)"
        />

        {/* Field line 6 — wide bottom */}
        <path
          d="M155,192 C50,220 15,290 60,335 C120,375 300,380 420,345 C480,320 500,250 475,192 C465,175 400,182 360,185"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1"
          opacity="0.6"
          markerEnd="url(#fieldArrow)"
        />

        {/* Compass needle on field line 1 */}
        <g transform="translate(100, 60) rotate(-25)">
          <ellipse
            cx="0"
            cy="0"
            rx="12"
            ry="12"
            fill="white"
            stroke="#9ca3af"
            strokeWidth="1"
            opacity="0.9"
          />
          {/* Red north-seeking end */}
          <line
            x1="0"
            y1="0"
            x2="10"
            y2="0"
            stroke="#dc2626"
            strokeWidth="2"
            markerEnd="url(#compassArrow)"
          />
          {/* White south end */}
          <line x1="0" y1="0" x2="-9" y2="0" stroke="#93c5fd" strokeWidth="2" />
          <circle cx="0" cy="0" r="1.5" fill="#374151" />
        </g>
        <text x="100" y="48" textAnchor="middle" fontSize="8" fill="#6b7280">
          Kompassnadel
        </text>

        {/* Labels */}
        <text x="260" y="330" textAnchor="middle" fontSize="10" fill="#374151" fontStyle="italic">
          Feldlinien sind geschlossen — es gibt keine magnetischen Monopole
        </text>

        {/* Direction label */}
        <text x="260" y="8" textAnchor="middle" fontSize="9" fill="#6b7280">
          Außen: N → S
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Magnetische Feldlinien verlaufen außerhalb des Magneten vom Nord- zum Südpol und innerhalb
          vom Süd- zum Nordpol. Sie sind stets geschlossene Kurven — im Gegensatz zu elektrischen
          Feldlinien gibt es keine magnetischen Monopole.
        </p>
      </div>
    </div>
  );
}
