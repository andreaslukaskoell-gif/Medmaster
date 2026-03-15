export default function ThinFilmInterference() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        D{"\u00FC"}nnschichtinterferenz
      </h4>
      <svg viewBox="0 0 500 380" className="w-full max-w-2xl mx-auto">
        <title>
          D{"\u00FC"}nnschichtinterferenz — Gangunterschied an d{"\u00FC"}nner Schicht
        </title>
        <defs>
          <marker id="tfi-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#2563eb" />
          </marker>
          <marker
            id="tfi-arrowGreen"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="#059669" />
          </marker>
          <linearGradient id="tfi-film" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="25%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="75%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f87171" />
          </linearGradient>
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
          D{"\u00FC"}nnschichtinterferenz
        </text>

        {/* Media labels */}
        <text x="30" y="65" fontSize="11" fill="#6b7280">
          Medium 1 (Luft, n{"\u2081"})
        </text>

        {/* Thin film layer */}
        <rect x="40" y="120" width="350" height="60" rx="0" fill="url(#tfi-film)" opacity="0.3" />
        <rect
          x="40"
          y="120"
          width="350"
          height="60"
          rx="0"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="2"
        />

        <text x="215" y="155" textAnchor="middle" fontSize="12" fill="#7c3aed" fontWeight="600">
          D{"\u00FC"}nne Schicht (n{"\u2082"} &gt; n{"\u2081"})
        </text>

        {/* Film thickness label */}
        <line x1="400" y1="120" x2="400" y2="180" stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="396" y1="120" x2="404" y2="120" stroke="#7c3aed" strokeWidth="1" />
        <line x1="396" y1="180" x2="404" y2="180" stroke="#7c3aed" strokeWidth="1" />
        <text x="415" y="155" fontSize="14" fill="#7c3aed" fontWeight="700">
          d
        </text>

        <text x="30" y="205" fontSize="11" fill="#6b7280">
          Medium 3 (z.B. Glas, n{"\u2083"})
        </text>

        {/* Incoming ray */}
        <line
          x1="100"
          y1="40"
          x2="180"
          y2="120"
          stroke="#2563eb"
          strokeWidth="2.5"
          markerEnd="url(#tfi-arrow)"
        />
        <text
          x="110"
          y="60"
          fontSize="11"
          fill="#2563eb"
          fontWeight="600"
          transform="rotate(-45, 110, 60)"
        >
          Einfallender Strahl
        </text>

        {/* Reflected ray 1 (from top surface) */}
        <line x1="180" y1="120" x2="120" y2="50" stroke="#dc2626" strokeWidth="2" />
        <polygon points="120,50 126,60 131,54" fill="#dc2626" />
        <text x="115" y="90" fontSize="10" fill="#dc2626" fontWeight="600">
          Strahl 1
        </text>
        <text x="70" y="42" fontSize="9" fill="#dc2626">
          (Phasensprung {"\u03C0"})
        </text>

        {/* Transmitted into film */}
        <line
          x1="180"
          y1="120"
          x2="220"
          y2="180"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Reflected from bottom surface */}
        <line
          x1="220"
          y1="180"
          x2="260"
          y2="120"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Reflected ray 2 (exits top surface) */}
        <line
          x1="260"
          y1="120"
          x2="200"
          y2="50"
          stroke="#059669"
          strokeWidth="2"
          markerEnd="url(#tfi-arrowGreen)"
        />
        <text x="255" y="90" fontSize="10" fill="#059669" fontWeight="600">
          Strahl 2
        </text>

        {/* Path difference annotation */}
        <line
          x1="180"
          y1="122"
          x2="220"
          y2="182"
          stroke="#f97316"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        <line
          x1="220"
          y1="182"
          x2="260"
          y2="122"
          stroke="#f97316"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        <text x="220" y="170" textAnchor="middle" fontSize="9" fill="#f97316" fontWeight="600">
          Zusatzweg
        </text>

        {/* Conditions box */}
        <rect
          x="40"
          y="225"
          width="420"
          height="65"
          rx="6"
          fill="#f0fdf4"
          stroke="#86efac"
          strokeWidth="1"
        />
        <text x="250" y="245" textAnchor="middle" fontSize="12" fill="#166534" fontWeight="700">
          Gangunterschied: {"\u0394"}s = 2 {"\u00B7"} n{"\u2082"} {"\u00B7"} d
        </text>
        <text x="250" y="262" textAnchor="middle" fontSize="11" fill="#374151">
          Konstruktiv (hell): 2n{"\u2082"}d = (m + {"\u00BD"}) {"\u00B7"} {"\u03BB"} (mit
          Phasensprung)
        </text>
        <text x="250" y="278" textAnchor="middle" fontSize="11" fill="#374151">
          Destruktiv (dunkel): 2n{"\u2082"}d = m {"\u00B7"} {"\u03BB"} (mit Phasensprung)
        </text>

        {/* Spectrum bar showing color effect */}
        <text x="250" y="310" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="600">
          Farbeffekt: verschiedene {"\u03BB"} erf{"\u00FC"}llen Bedingung bei verschiedenem d
        </text>
        <rect x="100" y="318" width="300" height="14" rx="7" fill="url(#tfi-film)" />
        <text x="100" y="345" fontSize="9" fill="#6b7280">
          violett
        </text>
        <text x="390" y="345" fontSize="9" fill="#6b7280" textAnchor="end">
          rot
        </text>

        {/* Medical note */}
        <text x="250" y="370" textAnchor="middle" fontSize="9" fill="#6b7280" fontStyle="italic">
          Beispiele: Seifenblasen, {"\u00D6"}lfilm auf Wasser, antireflexbeschichtete Brillengl
          {"\u00E4"}ser
        </text>
      </svg>
    </div>
  );
}
