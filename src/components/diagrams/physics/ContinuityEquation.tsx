export default function ContinuityEquation() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Kontinuitätsgleichung
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Strömung durch ein sich verengendes Rohr — Zusammenhang zwischen Querschnitt und
        Geschwindigkeit.
      </p>

      <svg viewBox="0 0 500 300" className="w-full max-w-lg mx-auto">
        <title>Kontinuitätsgleichung — Rohrverengung und Strömungsgeschwindigkeit</title>
        <defs>
          <marker id="arrowCE" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#2563eb" />
          </marker>
          <linearGradient id="fluidGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="250" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Kontinuitätsgleichung
        </text>

        {/* Pipe walls — wide section */}
        <path d="M40,60 L220,60 L220,60" fill="none" stroke="#6b7280" strokeWidth="3" />
        <path d="M40,180 L220,180 L220,180" fill="none" stroke="#6b7280" strokeWidth="3" />

        {/* Pipe walls — transition */}
        <path d="M220,60 L280,90" fill="none" stroke="#6b7280" strokeWidth="3" />
        <path d="M220,180 L280,150" fill="none" stroke="#6b7280" strokeWidth="3" />

        {/* Pipe walls — narrow section */}
        <path d="M280,90 L460,90" fill="none" stroke="#6b7280" strokeWidth="3" />
        <path d="M280,150 L460,150" fill="none" stroke="#6b7280" strokeWidth="3" />

        {/* Fluid fill — wide section */}
        <rect x="42" y="62" width="178" height="116" fill="#bfdbfe" opacity="0.5" />

        {/* Fluid fill — transition */}
        <path d="M220,62 L280,92 L280,148 L220,178 Z" fill="#93c5fd" opacity="0.5" />

        {/* Fluid fill — narrow section */}
        <rect x="280" y="92" width="178" height="56" fill="#93c5fd" opacity="0.6" />

        {/* Flow arrows — wide section (short, slow) */}
        <line
          x1="70"
          y1="120"
          x2="110"
          y2="120"
          stroke="#2563eb"
          strokeWidth="2"
          markerEnd="url(#arrowCE)"
        />
        <line
          x1="120"
          y1="100"
          x2="155"
          y2="100"
          stroke="#2563eb"
          strokeWidth="1.5"
          markerEnd="url(#arrowCE)"
        />
        <line
          x1="120"
          y1="140"
          x2="155"
          y2="140"
          stroke="#2563eb"
          strokeWidth="1.5"
          markerEnd="url(#arrowCE)"
        />

        {/* Flow arrows — narrow section (long, fast) */}
        <line
          x1="310"
          y1="120"
          x2="390"
          y2="120"
          stroke="#2563eb"
          strokeWidth="2.5"
          markerEnd="url(#arrowCE)"
        />
        <line
          x1="320"
          y1="108"
          x2="385"
          y2="108"
          stroke="#2563eb"
          strokeWidth="2"
          markerEnd="url(#arrowCE)"
        />
        <line
          x1="320"
          y1="132"
          x2="385"
          y2="132"
          stroke="#2563eb"
          strokeWidth="2"
          markerEnd="url(#arrowCE)"
        />

        {/* A₁ bracket */}
        <line x1="52" y1="60" x2="52" y2="180" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="47" y1="60" x2="57" y2="60" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="47" y1="180" x2="57" y2="180" stroke="#ef4444" strokeWidth="1.5" />
        <text x="32" y="124" textAnchor="middle" fontSize="14" fill="#ef4444" fontWeight="bold">
          A₁
        </text>

        {/* v₁ label */}
        <text x="130" y="85" textAnchor="middle" fontSize="12" fill="#2563eb" fontWeight="bold">
          v₁
        </text>

        {/* A₂ bracket */}
        <line x1="450" y1="90" x2="450" y2="150" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="445" y1="90" x2="455" y2="90" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="445" y1="150" x2="455" y2="150" stroke="#ef4444" strokeWidth="1.5" />
        <text x="470" y="124" textAnchor="middle" fontSize="14" fill="#ef4444" fontWeight="bold">
          A₂
        </text>

        {/* v₂ label */}
        <text x="400" y="85" textAnchor="middle" fontSize="12" fill="#2563eb" fontWeight="bold">
          v₂
        </text>

        {/* Stenose label */}
        <text x="250" y="50" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="bold">
          Stenose
        </text>
        <line
          x1="250"
          y1="53"
          x2="250"
          y2="62"
          stroke="#dc2626"
          strokeWidth="1"
          strokeDasharray="2 2"
        />

        {/* Relation indicators */}
        <text x="130" y="200" textAnchor="middle" fontSize="11" fill="#6b7280">
          großer Querschnitt
        </text>
        <text x="130" y="213" textAnchor="middle" fontSize="11" fill="#6b7280">
          → langsame Strömung
        </text>
        <text x="370" y="165" textAnchor="middle" fontSize="11" fill="#6b7280">
          kleiner Querschnitt
        </text>
        <text x="370" y="178" textAnchor="middle" fontSize="11" fill="#6b7280">
          → schnelle Strömung
        </text>

        {/* Formula box */}
        <rect
          x="130"
          y="235"
          width="240"
          height="45"
          rx="6"
          fill="#f0fdfa"
          stroke="#99f6e4"
          strokeWidth="1"
        />
        <text x="250" y="255" textAnchor="middle" fontSize="14" fill="#0f766e" fontWeight="bold">
          A₁ · v₁ = A₂ · v₂
        </text>
        <text x="250" y="272" textAnchor="middle" fontSize="11" fill="#6b7280">
          Volumenstrom bleibt konstant
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Die Kontinuitätsgleichung besagt: In einem geschlossenen Rohrsystem ist der Volumenstrom
          konstant. Verengt sich das Rohr (z. B. bei einer Gefäßstenose), muss die
          Strömungsgeschwindigkeit zunehmen.
        </p>
      </div>
    </div>
  );
}
