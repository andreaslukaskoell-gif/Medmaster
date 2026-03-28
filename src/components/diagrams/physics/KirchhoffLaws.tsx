export default function KirchhoffLaws() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Kirchhoff&apos;sche Gesetze
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Knotenregel (1. Kirchhoff) und Maschenregel (2. Kirchhoff) in einem Netzwerk.
      </p>

      <svg role="img" viewBox="0 0 520 380" className="w-full max-w-lg mx-auto">
        <title>Kirchhoffsche Gesetze — Knoten- und Maschenregel</title>

        <defs>
          <marker id="kCurArrow" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <path d="M0,0 L7,2.5 L0,5" fill="#2563eb" />
          </marker>
          <marker
            id="kCurArrowRed"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5" fill="#dc2626" />
          </marker>
          <marker
            id="kCurArrowGreen"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5" fill="#16a34a" />
          </marker>
          <marker
            id="kLoopArrow"
            markerWidth="6"
            markerHeight="5"
            refX="6"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L6,2.5 L0,5" fill="#7c3aed" />
          </marker>
        </defs>

        <text x="260" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f766e">
          Kirchhoff&apos;sche Gesetze
        </text>

        {/* === Circuit layout === */}
        {/* Top wire: left to junction */}
        <line x1="60" y1="80" x2="260" y2="80" stroke="#374151" strokeWidth="2" />
        {/* Top wire: junction to right */}
        <line x1="260" y1="80" x2="460" y2="80" stroke="#374151" strokeWidth="2" />
        {/* Bottom wire */}
        <line x1="60" y1="280" x2="460" y2="280" stroke="#374151" strokeWidth="2" />
        {/* Left vertical */}
        <line x1="60" y1="80" x2="60" y2="280" stroke="#374151" strokeWidth="2" />
        {/* Right vertical */}
        <line x1="460" y1="80" x2="460" y2="280" stroke="#374151" strokeWidth="2" />
        {/* Middle vertical (junction to bottom) */}
        <line x1="260" y1="80" x2="260" y2="280" stroke="#374151" strokeWidth="2" />

        {/* Junction point */}
        <circle cx="260" cy="80" r="5" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
        {/* Bottom junction */}
        <circle cx="260" cy="280" r="5" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />

        {/* === Resistors (zigzag) === */}
        {/* R1 — left loop top, between left and junction */}
        <path
          d="M120,80 L130,65 L145,95 L160,65 L175,95 L190,65 L200,80"
          fill="none"
          stroke="#374151"
          strokeWidth="2"
        />
        <text x="160" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">
          R&#x2081;
        </text>

        {/* R2 — right loop top, between junction and right */}
        <path
          d="M320,80 L330,65 L345,95 L360,65 L375,95 L390,65 L400,80"
          fill="none"
          stroke="#374151"
          strokeWidth="2"
        />
        <text x="360" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">
          R&#x2082;
        </text>

        {/* R3 — middle vertical */}
        <path
          d="M260,140 L245,150 L275,165 L245,180 L275,195 L245,210 L260,220"
          fill="none"
          stroke="#374151"
          strokeWidth="2"
        />
        <text x="285" y="183" textAnchor="start" fontSize="12" fontWeight="bold" fill="#374151">
          R&#x2083;
        </text>

        {/* === Battery U1 — left vertical === */}
        <line x1="60" y1="140" x2="60" y2="165" stroke="#374151" strokeWidth="2" />
        {/* Short plate (minus) */}
        <line x1="45" y1="165" x2="75" y2="165" stroke="#374151" strokeWidth="2" />
        {/* Long plate (plus) */}
        <line x1="40" y1="178" x2="80" y2="178" stroke="#374151" strokeWidth="3" />
        <line x1="60" y1="178" x2="60" y2="200" stroke="#374151" strokeWidth="2" />
        <text x="35" y="175" textAnchor="end" fontSize="12" fontWeight="bold" fill="#16a34a">
          U&#x2081;
        </text>
        <text x="85" y="160" fontSize="8" fill="#6b7280">
          &#x2212;
        </text>
        <text x="85" y="185" fontSize="8" fill="#6b7280">
          +
        </text>

        {/* === Battery U2 — right vertical === */}
        <line x1="460" y1="140" x2="460" y2="165" stroke="#374151" strokeWidth="2" />
        <line x1="445" y1="165" x2="475" y2="165" stroke="#374151" strokeWidth="2" />
        <line x1="440" y1="178" x2="480" y2="178" stroke="#374151" strokeWidth="3" />
        <line x1="460" y1="178" x2="460" y2="200" stroke="#374151" strokeWidth="2" />
        <text x="490" y="175" textAnchor="start" fontSize="12" fontWeight="bold" fill="#16a34a">
          U&#x2082;
        </text>
        <text x="487" y="160" fontSize="8" fill="#6b7280">
          &#x2212;
        </text>
        <text x="487" y="185" fontSize="8" fill="#6b7280">
          +
        </text>

        {/* === Current arrows === */}
        {/* I1 — flowing into junction from left */}
        <line
          x1="100"
          y1="72"
          x2="140"
          y2="72"
          stroke="#2563eb"
          strokeWidth="1.5"
          markerEnd="url(#kCurArrow)"
        />
        <text x="120" y="68" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2563eb">
          I&#x2081;
        </text>

        {/* I2 — flowing out of junction to right */}
        <line
          x1="310"
          y1="72"
          x2="350"
          y2="72"
          stroke="#dc2626"
          strokeWidth="1.5"
          markerEnd="url(#kCurArrowRed)"
        />
        <text x="330" y="68" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#dc2626">
          I&#x2082;
        </text>

        {/* I3 — flowing down from junction */}
        <line
          x1="252"
          y1="95"
          x2="252"
          y2="130"
          stroke="#16a34a"
          strokeWidth="1.5"
          markerEnd="url(#kCurArrowGreen)"
        />
        <text x="242" y="115" textAnchor="end" fontSize="11" fontWeight="bold" fill="#16a34a">
          I&#x2083;
        </text>

        {/* === Knotenregel box === */}
        <rect
          x="300"
          y="95"
          width="170"
          height="32"
          rx="6"
          fill="#fef2f2"
          stroke="#fca5a5"
          strokeWidth="1"
        />
        <text x="385" y="110" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">
          1. Kirchhoff (Knotenregel)
        </text>
        <text x="385" y="122" textAnchor="middle" fontSize="11" fill="#991b1b">
          &#x2211;I = 0 &#x2192; I&#x2081; = I&#x2082; + I&#x2083;
        </text>

        {/* === Loop arrows === */}
        {/* Loop I — left mesh */}
        <path
          d="M100,130 A80,70 0 1,1 220,130"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          markerEnd="url(#kLoopArrow)"
        />
        <text x="150" y="230" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">
          Masche I
        </text>

        {/* Loop II — right mesh */}
        <path
          d="M300,130 A80,70 0 1,1 420,130"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          markerEnd="url(#kLoopArrow)"
        />
        <text x="370" y="230" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">
          Masche II
        </text>

        {/* === Maschenregel box === */}
        <rect
          x="120"
          y="300"
          width="280"
          height="32"
          rx="6"
          fill="#f5f3ff"
          stroke="#c4b5fd"
          strokeWidth="1"
        />
        <text x="260" y="315" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">
          2. Kirchhoff (Maschenregel)
        </text>
        <text x="260" y="327" textAnchor="middle" fontSize="11" fill="#5b21b6">
          &#x2211;U = 0 in jeder geschlossenen Masche
        </text>

        {/* === Formula at bottom === */}
        <text x="260" y="365" textAnchor="middle" fontSize="10" fill="#374151" fontStyle="italic">
          Masche I: U&#x2081; = I&#x2081;&#xb7;R&#x2081; + I&#x2083;&#xb7;R&#x2083; | Masche II:
          U&#x2082; = I&#x2082;&#xb7;R&#x2082; + I&#x2083;&#xb7;R&#x2083;
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          <strong>Knotenregel:</strong> Die Summe aller Ströme an einem Knoten ist null
          (Ladungserhaltung). <strong>Maschenregel:</strong> Die Summe aller Spannungen in einer
          geschlossenen Masche ist null (Energieerhaltung).
        </p>
      </div>
    </div>
  );
}
