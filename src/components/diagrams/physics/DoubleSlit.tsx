export default function DoubleSlit() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Doppelspaltexperiment
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Interferenzmuster durch Beugung am Doppelspalt — Beweis der Wellennatur des Lichts.
      </p>

      <svg viewBox="0 0 540 360" className="w-full max-w-lg mx-auto">
        <title>Doppelspaltexperiment mit Interferenzmuster</title>

        <defs>
          <marker
            id="dsWaveArrow"
            markerWidth="6"
            markerHeight="5"
            refX="6"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L6,2.5 L0,5" fill="#7c3aed" />
          </marker>
        </defs>

        <text x="270" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f766e">
          Doppelspaltexperiment (Young)
        </text>

        {/* === Incoming plane wave === */}
        {/* Wave fronts (vertical lines moving right) */}
        {[30, 50, 70, 90].map((x) => (
          <line
            key={x}
            x1={x}
            y1="80"
            x2={x}
            y2="280"
            stroke="#7c3aed"
            strokeWidth="1.5"
            opacity={0.3 + x / 130}
          />
        ))}
        {/* Arrow showing direction */}
        <line
          x1="40"
          y1="65"
          x2="90"
          y2="65"
          stroke="#7c3aed"
          strokeWidth="1.5"
          markerEnd="url(#dsWaveArrow)"
        />
        <text x="65" y="58" textAnchor="middle" fontSize="9" fill="#7c3aed">
          Ebene Welle
        </text>

        {/* === Barrier with double slit === */}
        <rect x="120" y="70" width="12" height="85" fill="#374151" rx="1" />
        <rect x="120" y="170" width="12" height="20" fill="#374151" rx="1" />
        <rect x="120" y="205" width="12" height="85" fill="#374151" rx="1" />

        {/* Slit 1 */}
        <rect x="120" y="155" width="12" height="15" fill="none" />
        <text x="115" y="165" textAnchor="end" fontSize="9" fontWeight="bold" fill="#2563eb">
          Spalt 1
        </text>

        {/* Slit 2 */}
        <rect x="120" y="190" width="12" height="15" fill="none" />
        <text x="115" y="200" textAnchor="end" fontSize="9" fontWeight="bold" fill="#2563eb">
          Spalt 2
        </text>

        {/* Slit distance label (d) */}
        <line x1="110" y1="162" x2="110" y2="197" stroke="#dc2626" strokeWidth="1" />
        <line x1="107" y1="162" x2="113" y2="162" stroke="#dc2626" strokeWidth="1" />
        <line x1="107" y1="197" x2="113" y2="197" stroke="#dc2626" strokeWidth="1" />
        <text x="100" y="183" textAnchor="end" fontSize="11" fontWeight="bold" fill="#dc2626">
          d
        </text>

        {/* === Circular wave fronts from slit 1 === */}
        {[40, 70, 100, 130, 160].map((r) => (
          <circle
            key={`s1-${r}`}
            cx="132"
            cy="162"
            r={r}
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.8"
            opacity={0.3}
          />
        ))}

        {/* === Circular wave fronts from slit 2 === */}
        {[40, 70, 100, 130, 160].map((r) => (
          <circle
            key={`s2-${r}`}
            cx="132"
            cy="197"
            r={r}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="0.8"
            opacity={0.3}
          />
        ))}

        {/* === Path difference lines === */}
        {/* Ray from slit 1 to screen point */}
        <line
          x1="132"
          y1="162"
          x2="430"
          y2="130"
          stroke="#6366f1"
          strokeWidth="1"
          strokeDasharray="3 2"
          opacity="0.7"
        />
        {/* Ray from slit 2 to same screen point */}
        <line
          x1="132"
          y1="197"
          x2="430"
          y2="130"
          stroke="#8b5cf6"
          strokeWidth="1"
          strokeDasharray="3 2"
          opacity="0.7"
        />

        {/* Angle theta */}
        <line
          x1="132"
          y1="180"
          x2="250"
          y2="180"
          stroke="#6b7280"
          strokeWidth="0.8"
          strokeDasharray="3 2"
        />
        <path d="M180,180 A48,48 0 0,0 175,164" fill="none" stroke="#16a34a" strokeWidth="1.5" />
        <text x="190" y="172" fontSize="10" fontWeight="bold" fill="#16a34a">
          &#x3b8;
        </text>

        {/* Path difference label */}
        <text x="280" y="140" fontSize="9" fill="#7c3aed" fontStyle="italic">
          Gangunterschied &#x394;s
        </text>

        {/* === Screen === */}
        <rect
          x="430"
          y="60"
          width="8"
          height="240"
          fill="#e5e7eb"
          stroke="#9ca3af"
          strokeWidth="1"
          rx="2"
        />
        <text x="455" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">
          Schirm
        </text>

        {/* === Interference pattern on screen === */}
        {/* Bright fringes (constructive) */}
        {[
          { y: 180, w: 1.0, label: "m=0" },
          { y: 148, w: 0.7, label: "m=1" },
          { y: 212, w: 0.7, label: "m=1" },
          { y: 116, w: 0.4, label: "m=2" },
          { y: 244, w: 0.4, label: "m=2" },
          { y: 88, w: 0.2, label: "" },
          { y: 272, w: 0.2, label: "" },
        ].map(({ y, w, label }) => (
          <g key={`bright-${y}`}>
            <rect
              x="440"
              y={y - 8}
              width="20"
              height="16"
              fill="#7c3aed"
              opacity={w * 0.8}
              rx="1"
            />
            {label && (
              <text x="470" y={y + 4} fontSize="8" fill="#7c3aed">
                {label}
              </text>
            )}
          </g>
        ))}

        {/* Dark fringes (destructive) — gaps between bright */}
        {[164, 196, 132, 228, 100, 260].map((y) => (
          <rect
            key={`dark-${y}`}
            x="440"
            y={y - 4}
            width="20"
            height="8"
            fill="#1e1b4b"
            opacity="0.15"
            rx="1"
          />
        ))}

        {/* Intensity curve alongside screen */}
        <path
          d="M500,80 Q503,88 500,96 Q497,104 500,116 Q506,128 500,132
             Q494,136 500,148 Q510,160 510,180 Q510,200 500,212
             Q494,220 500,228 Q506,236 500,244 Q497,252 500,260
             Q503,268 500,276"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1.5"
        />
        <text x="515" y="184" fontSize="7" fill="#7c3aed">
          I(&#x3b8;)
        </text>

        {/* === Formulas === */}
        <rect
          x="100"
          y="308"
          width="340"
          height="44"
          rx="6"
          fill="#f5f3ff"
          stroke="#c4b5fd"
          strokeWidth="1"
        />
        <text x="270" y="325" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5b21b6">
          d &#xb7; sin(&#x3b8;) = m &#xb7; &#x3bb;
        </text>
        <text x="270" y="342" textAnchor="middle" fontSize="9" fill="#6b7280">
          m = 0, &#xb1;1, &#xb1;2, ... (konstruktive Interferenz) | d = Spaltabstand, &#x3bb; =
          Wellenlänge
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Am Doppelspalt entstehen Kugelwellen, die interferieren: Ist der Gangunterschied ein
          Vielfaches der Wellenlänge, gibt es konstruktive Interferenz (heller Streifen); bei
          halbzahligem Vielfachen destruktive Interferenz (dunkler Streifen). Das Muster beweist die
          Wellennatur des Lichts.
        </p>
      </div>
    </div>
  );
}
