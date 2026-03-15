export default function CentripetalForce() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Zentripetalkraft und Kreisbewegung
      </h4>
      <svg viewBox="0 0 520 380" className="w-full max-w-2xl mx-auto">
        <title>Zentripetalkraft bei Kreisbewegung und medizinische Zentrifuge</title>
        <defs>
          <marker id="cp-arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#dc2626" />
          </marker>
          <marker
            id="cp-arrowBlue"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6" fill="#2563eb" />
          </marker>
          <linearGradient id="cp-bloodGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="45%" stopColor="#fde68a" />
            <stop offset="46%" stopColor="#e5e7eb" />
            <stop offset="52%" stopColor="#e5e7eb" />
            <stop offset="53%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>

        {/* === LEFT: Circular motion === */}
        <text
          x="170"
          y="22"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Kreisbewegung
        </text>

        {/* Circular path (dashed) */}
        <circle
          cx="170"
          cy="165"
          r="100"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />

        {/* Center point */}
        <circle cx="170" cy="165" r="3" fill="#1f2937" />
        <text x="170" y="180" textAnchor="middle" fontSize="11" fill="#6b7280" fontWeight="500">
          Zentrum
        </text>

        {/* Radius line */}
        <line
          x1="170"
          y1="165"
          x2="270"
          y2="165"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <text x="220" y="158" textAnchor="middle" fontSize="12" fill="#6b7280" fontWeight="600">
          r
        </text>

        {/* Object on circular path (right side) */}
        <circle cx="270" cy="165" r="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="270" y="169" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="700">
          m
        </text>

        {/* Velocity vector v (tangent, pointing up at right position) */}
        <line
          x1="270"
          y1="155"
          x2="270"
          y2="85"
          stroke="#2563eb"
          strokeWidth="2.5"
          markerEnd="url(#cp-arrowBlue)"
        />
        <text
          x="282"
          y="108"
          fontSize="14"
          fill="#2563eb"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          v
        </text>

        {/* Centripetal force Fz (pointing inward toward center) */}
        <line
          x1="260"
          y1="165"
          x2="195"
          y2="165"
          stroke="#dc2626"
          strokeWidth="2.5"
          markerEnd="url(#cp-arrowRed)"
        />
        <text
          x="225"
          y="155"
          textAnchor="middle"
          fontSize="14"
          fill="#dc2626"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x2098;
        </text>

        {/* Second position (top) */}
        <circle
          cx="170"
          cy="65"
          r="7"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line x1="170" y1="62" x2="110" y2="62" stroke="#2563eb" strokeWidth="1.5" opacity="0.5" />
        <text x="105" y="66" fontSize="10" fill="#2563eb" opacity="0.6" textAnchor="end">
          v
        </text>
        <line x1="170" y1="72" x2="170" y2="110" stroke="#dc2626" strokeWidth="1.5" opacity="0.5" />

        {/* Third position (left) */}
        <circle
          cx="70"
          cy="165"
          r="7"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line x1="70" y1="158" x2="70" y2="210" stroke="#2563eb" strokeWidth="1.5" opacity="0.5" />
        <line x1="77" y1="165" x2="120" y2="165" stroke="#dc2626" strokeWidth="1.5" opacity="0.5" />

        {/* Motion direction arc arrow */}
        <path
          d="M250,80 A95,95 0 0,1 265,130"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.2"
          strokeDasharray="4 2"
        />
        <text x="268" y="100" fontSize="10" fill="#6b7280">
          {"\u03C9"}
        </text>

        {/* Formula box */}
        <rect
          x="60"
          y="280"
          width="220"
          height="50"
          rx="6"
          fill="#fef2f2"
          stroke="#fca5a5"
          strokeWidth="1"
        />
        <text
          x="170"
          y="300"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Zentripetalkraft:
        </text>
        <text
          x="170"
          y="320"
          textAnchor="middle"
          fontSize="14"
          fill="#991b1b"
          fontWeight="700"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          F&#x2098; = mv&#xB2; / r
        </text>

        {/* === RIGHT: Centrifuge (medical context) === */}
        <text
          x="410"
          y="22"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Zentrifuge
        </text>
        <text x="410" y="38" textAnchor="middle" fontSize="10" fill="#6b7280">
          (medizinische Anwendung)
        </text>

        {/* Centrifuge tube */}
        <rect
          x="385"
          y="55"
          width="50"
          height="180"
          rx="4"
          fill="url(#cp-bloodGrad)"
          stroke="#64748b"
          strokeWidth="1.5"
        />
        {/* Tube cap */}
        <rect
          x="383"
          y="50"
          width="54"
          height="10"
          rx="3"
          fill="#94a3b8"
          stroke="#64748b"
          strokeWidth="1"
        />

        {/* Separation labels */}
        {/* Plasma (top, yellow) */}
        <line x1="437" y1="85" x2="465" y2="85" stroke="#94a3b8" strokeWidth="1" />
        <text x="468" y="89" fontSize="11" fill="#b45309" fontWeight="600">
          Plasma
        </text>
        <text x="468" y="101" fontSize="9" fill="#92400e">
          (55 %)
        </text>

        {/* Buffy coat (thin white band) */}
        <line x1="437" y1="142" x2="465" y2="130" stroke="#94a3b8" strokeWidth="1" />
        <text x="468" y="127" fontSize="10" fill="#6b7280" fontWeight="600">
          Buffy Coat
        </text>
        <text x="468" y="139" fontSize="9" fill="#6b7280">
          (Leukozyten,
        </text>
        <text x="468" y="149" fontSize="9" fill="#6b7280">
          Thrombozyten)
        </text>

        {/* Erythrocytes (bottom, red) */}
        <line x1="437" y1="195" x2="465" y2="195" stroke="#94a3b8" strokeWidth="1" />
        <text x="468" y="192" fontSize="11" fill="#dc2626" fontWeight="600">
          Erythrozyten
        </text>
        <text x="468" y="204" fontSize="9" fill="#991b1b">
          (45 %, H{"\u00E4"}matokrit)
        </text>

        {/* Rotation arrows around tube */}
        <path
          d="M375,140 A50,20 0 0,1 375,180"
          fill="none"
          stroke="#9333ea"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <text x="358" y="164" fontSize="10" fill="#9333ea" fontWeight="600" textAnchor="end">
          {"\u03C9"}
        </text>

        {/* Explanation box */}
        <rect
          x="340"
          y="250"
          width="160"
          height="75"
          rx="6"
          fill="#faf5ff"
          stroke="#d8b4fe"
          strokeWidth="1"
        />
        <text x="420" y="270" textAnchor="middle" fontSize="10" fill="#6b21a8" fontWeight="600">
          Dichtere Bestandteile
        </text>
        <text x="420" y="283" textAnchor="middle" fontSize="10" fill="#6b21a8">
          wandern nach au{"\u00DF"}en
        </text>
        <text x="420" y="298" textAnchor="middle" fontSize="10" fill="#6b21a8">
          (Erythrozyten: dichter)
        </text>
        <text x="420" y="313" textAnchor="middle" fontSize="10" fill="#6b21a8">
          (Plasma: leichter, oben)
        </text>

        {/* Connecting note */}
        <text x="260" y="365" textAnchor="middle" fontSize="10" fill="#6b7280" fontStyle="italic">
          Die Zentrifuge nutzt die Zentripetalkraft zur Trennung von Blutbestandteilen.
        </text>
      </svg>
    </div>
  );
}
