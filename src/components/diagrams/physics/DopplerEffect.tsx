export default function DopplerEffect() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Doppler-Effekt</h4>
      <p className="text-xs text-muted">Frequenzänderung bei bewegter Schallquelle.</p>
      <svg viewBox="0 0 480 320" className="w-full max-w-lg mx-auto">
        <defs>
          <marker id="arrowDop" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#0d9488" />
          </marker>
        </defs>

        <text x="240" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Doppler-Effekt
        </text>

        {/* Background */}
        <rect
          x="20"
          y="35"
          width="420"
          height="200"
          rx="8"
          fill="#f9fafb"
          stroke="#e5e7eb"
          strokeWidth="1"
        />

        {/* Compressed waves (in front - right side of ambulance) */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ellipse
            key={`comp-${i}`}
            cx={260 + i * 18}
            cy={140}
            rx={i * 12}
            ry={i * 18 + 10}
            fill="none"
            stroke="#0d9488"
            strokeWidth={1.5 - i * 0.15}
            opacity={1 - i * 0.12}
          />
        ))}

        {/* Stretched waves (behind - left side of ambulance) */}
        {[1, 2, 3, 4].map((i) => (
          <ellipse
            key={`str-${i}`}
            cx={200 - i * 28}
            cy={140}
            rx={i * 20}
            ry={i * 22 + 10}
            fill="none"
            stroke="#6b7280"
            strokeWidth={1.2 - i * 0.15}
            opacity={0.8 - i * 0.12}
          />
        ))}

        {/* Ambulance body */}
        <rect
          x="210"
          y="118"
          width="65"
          height="40"
          rx="5"
          fill="#fff"
          stroke="#0d9488"
          strokeWidth="2.5"
        />
        <rect
          x="215"
          y="123"
          width="18"
          height="12"
          rx="2"
          fill="#ccfbf1"
          stroke="#0d9488"
          strokeWidth="1"
        />
        {/* Red cross */}
        <line x1="238" y1="130" x2="258" y2="130" stroke="#ef4444" strokeWidth="3" />
        <line x1="248" y1="122" x2="248" y2="138" stroke="#ef4444" strokeWidth="3" />
        {/* Wheels */}
        <circle cx="225" cy="160" r="6" fill="#374151" stroke="#1f2937" strokeWidth="1.5" />
        <circle cx="225" cy="160" r="2.5" fill="#9ca3af" />
        <circle cx="262" cy="160" r="6" fill="#374151" stroke="#1f2937" strokeWidth="1.5" />
        <circle cx="262" cy="160" r="2.5" fill="#9ca3af" />
        {/* Siren */}
        <rect
          x="237"
          y="112"
          width="18"
          height="7"
          rx="3"
          fill="#ef4444"
          stroke="#dc2626"
          strokeWidth="1"
        />

        {/* Movement direction */}
        <line
          x1="280"
          y1="140"
          x2="320"
          y2="140"
          stroke="#0d9488"
          strokeWidth="2.5"
          markerEnd="url(#arrowDop)"
        />
        <text x="300" y="133" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
          Bewegungsrichtung
        </text>

        {/* Observer 1 (in front) */}
        <g>
          <circle cx="420" cy="130" r="12" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.5" />
          <circle cx="416" cy="127" r="1.5" fill="#115e59" />
          <circle cx="424" cy="127" r="1.5" fill="#115e59" />
          <path d="M415,133 Q420,137 425,133" fill="none" stroke="#115e59" strokeWidth="1" />
          <text x="420" y="155" textAnchor="middle" fontSize="7" fill="#0f766e" fontWeight="bold">
            Beobachter A
          </text>
        </g>

        {/* Observer 2 (behind) */}
        <g>
          <circle cx="55" cy="130" r="12" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
          <circle cx="51" cy="127" r="1.5" fill="#991b1b" />
          <circle cx="59" cy="127" r="1.5" fill="#991b1b" />
          <path d="M50,134 Q55,131 60,134" fill="none" stroke="#991b1b" strokeWidth="1" />
          <text x="55" y="155" textAnchor="middle" fontSize="7" fill="#ef4444" fontWeight="bold">
            Beobachter B
          </text>
        </g>

        {/* Labels for wave compression/stretching */}
        <rect
          x="290"
          y="45"
          width="130"
          height="30"
          rx="4"
          fill="#ccfbf1"
          stroke="#0d9488"
          strokeWidth="1"
        />
        <text x="355" y="57" textAnchor="middle" fontSize="7" fill="#0d9488" fontWeight="bold">
          Komprimierte Wellen
        </text>
        <text x="355" y="68" textAnchor="middle" fontSize="7" fill="#0f766e">
          Kürzeres \u03BB \u2192 Höheres f
        </text>

        <rect
          x="40"
          y="45"
          width="130"
          height="30"
          rx="4"
          fill="#f3f4f6"
          stroke="#6b7280"
          strokeWidth="1"
        />
        <text x="105" y="57" textAnchor="middle" fontSize="7" fill="#6b7280" fontWeight="bold">
          Gedehnte Wellen
        </text>
        <text x="105" y="68" textAnchor="middle" fontSize="7" fill="#6b7280">
          Längeres \u03BB \u2192 Niedrigeres f
        </text>

        {/* Frequency comparison */}
        <rect
          x="50"
          y="250"
          width="170"
          height="55"
          rx="6"
          fill="#f0fdfa"
          stroke="#99f6e4"
          strokeWidth="1"
        />
        <text x="135" y="268" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Annäherung (A)
        </text>
        <text x="60" y="282" fontSize="13" fill="#374151">
          Höhere Frequenz empfangen
        </text>
        <text x="60" y="294" fontSize="13" fill="#374151">
          Höherer Ton wahrgenommen
        </text>

        <rect
          x="240"
          y="250"
          width="170"
          height="55"
          rx="6"
          fill="#fef2f2"
          stroke="#fca5a5"
          strokeWidth="1"
        />
        <text x="325" y="268" textAnchor="middle" fontSize="13" fill="#ef4444" fontWeight="bold">
          Entfernung (B)
        </text>
        <text x="250" y="282" fontSize="13" fill="#374151">
          Niedrigere Frequenz empfangen
        </text>
        <text x="250" y="294" fontSize="13" fill="#374151">
          Tieferer Ton wahrgenommen
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Der Doppler-Effekt beschreibt die Änderung der wahrgenommenen Frequenz, wenn sich Quelle
          und Beobachter relativ zueinander bewegen. Bei Annäherung steigt die Frequenz (höherer
          Ton), bei Entfernung sinkt sie (tieferer Ton). Anwendung: Ultraschall-Doppler, Radar.
        </p>
      </div>
    </div>
  );
}
