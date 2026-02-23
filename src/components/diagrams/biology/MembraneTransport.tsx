import { useState } from "react";

const parts = [
  {
    id: "passive",
    label: "Passive Diffusion",
    detail:
      "Kleine unpolare Moleküle (O₂, CO₂) diffundieren direkt durch die Lipiddoppelschicht entlang des Konzentrationsgradienten. Keine Energie erforderlich.",
  },
  {
    id: "facilitated",
    label: "Erleichterte Diffusion",
    detail:
      "Polare Moleküle und Ionen nutzen Kanalproteine oder Carrierproteine. Entlang des Konzentrationsgradienten, keine ATP-Hydrolyse notwendig.",
  },
  {
    id: "active",
    label: "Aktiver Transport",
    detail:
      "Pumpenproteine transportieren Stoffe gegen den Konzentrationsgradienten unter ATP-Verbrauch. Beispiel: Na⁺/K⁺-ATPase (3 Na⁺ raus, 2 K⁺ rein).",
  },
  {
    id: "vesicular",
    label: "Vesikulärer Transport",
    detail:
      "Große Moleküle und Partikel werden in Vesikeln transportiert. Endozytose (Aufnahme) und Exozytose (Abgabe) durch Membranfusion.",
  },
];

type Part = (typeof parts)[number];

export default function MembraneTransport() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Membrantransport</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf Transportarten für Details.
      </p>
      <svg viewBox="0 0 560 400" className="w-full max-w-xl mx-auto">
        {/* Background */}
        <rect x="0" y="0" width="560" height="400" fill="#f8fafc" className="dark:fill-gray-800" />

        {/* Labels for extracellular/intracellular */}
        <text x="10" y="30" fontSize="11" fill="#6b7280" fontWeight="600">
          extrazellulär
        </text>
        <text x="10" y="380" fontSize="11" fill="#6b7280" fontWeight="600">
          intrazellulär
        </text>

        {/* Dividing lines between transport types */}
        <line
          x1="140"
          y1="60"
          x2="140"
          y2="340"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="280"
          y1="60"
          x2="280"
          y2="340"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="420"
          y1="60"
          x2="420"
          y2="340"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4,4"
        />

        {/* ========== PASSIVE DIFFUSION (Section 1) ========== */}
        {/* Lipid bilayer section */}
        <g>
          {/* Phospholipid heads (upper layer) */}
          <circle cx="30" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="50" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="70" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="90" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="110" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="130" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Phospholipid tails (upper layer) */}
          <path d="M 30 185 Q 28 200 30 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 33 185 Q 35 200 33 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 50 185 Q 48 200 50 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 53 185 Q 55 200 53 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 70 185 Q 68 200 70 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 73 185 Q 75 200 73 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 90 185 Q 88 200 90 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 93 185 Q 95 200 93 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 110 185 Q 108 200 110 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 113 185 Q 115 200 113 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 130 185 Q 128 200 130 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 133 185 Q 135 200 133 215" stroke="#9ca3af" strokeWidth="2" fill="none" />

          {/* Phospholipid heads (lower layer) */}
          <circle cx="30" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="50" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="70" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="90" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="110" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="130" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Small molecules passing through */}
          <circle cx="60" cy="140" r="4" fill="#3b82f6" opacity="0.7" />
          <circle cx="80" cy="160" r="4" fill="#3b82f6" opacity="0.7" />
          <circle cx="100" cy="200" r="4" fill="#3b82f6" opacity="0.7" />
          <circle cx="65" cy="240" r="4" fill="#3b82f6" opacity="0.7" />
          <circle cx="85" cy="260" r="4" fill="#3b82f6" opacity="0.7" />

          {/* Concentration gradient arrows */}
          <path
            d="M 50 120 L 50 150"
            stroke="#3b82f6"
            strokeWidth="2"
            markerEnd="url(#arrowBlue)"
          />
          <path
            d="M 90 250 L 90 280"
            stroke="#3b82f6"
            strokeWidth="2"
            markerEnd="url(#arrowBlue)"
          />

          {/* Interactive overlay */}
          <rect
            x="10"
            y="100"
            width="130"
            height="200"
            fill="transparent"
            stroke={active?.id === "passive" ? "#3b82f6" : "transparent"}
            strokeWidth="3"
            className="cursor-pointer"
            onMouseEnter={() => setActive(parts[0])}
            onMouseLeave={() => setActive(null)}
          />

          {/* Label */}
          <line
            x1="70"
            y1="320"
            x2="70"
            y2="340"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text x="70" y="355" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">
            Passive
          </text>
          <text x="70" y="368" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">
            Diffusion
          </text>
        </g>

        {/* ========== ERLEICHTERTE DIFFUSION (Section 2) ========== */}
        <g>
          {/* Lipid bilayer section */}
          {/* Phospholipid heads (upper layer) */}
          <circle cx="170" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="190" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="210" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="250" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="270" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Tails */}
          <path d="M 170 185 Q 168 200 170 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 173 185 Q 175 200 173 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 190 185 Q 188 200 190 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 193 185 Q 195 200 193 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 210 185 Q 208 200 210 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 213 185 Q 215 200 213 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 250 185 Q 248 200 250 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 253 185 Q 255 200 253 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 270 185 Q 268 200 270 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 273 185 Q 275 200 273 215" stroke="#9ca3af" strokeWidth="2" fill="none" />

          {/* Phospholipid heads (lower layer) */}
          <circle cx="170" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="190" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="210" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="250" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="270" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Channel protein */}
          <rect x="225" y="170" width="20" height="60" rx="3" fill="#10b981" opacity="0.3" />
          <rect x="228" y="175" width="4" height="50" rx="2" fill="#10b981" />
          <rect x="238" y="175" width="4" height="50" rx="2" fill="#10b981" />
          <circle cx="235" cy="200" r="3" fill="#059669" />

          {/* Carrier protein (left side) */}
          <ellipse
            cx="180"
            cy="200"
            rx="15"
            ry="30"
            fill="#10b981"
            opacity="0.5"
            stroke="#059669"
            strokeWidth="2"
          />
          <circle cx="180" cy="200" r="4" fill="#fef3c7" />

          {/* Ions/molecules passing through */}
          <circle cx="235" cy="150" r="3.5" fill="#10b981" opacity="0.8" />
          <text x="235" y="152" fontSize="7" fill="white" fontWeight="bold" textAnchor="middle">
            +
          </text>
          <circle cx="235" cy="250" r="3.5" fill="#10b981" opacity="0.8" />
          <text x="235" y="252" fontSize="7" fill="white" fontWeight="bold" textAnchor="middle">
            +
          </text>

          {/* Gradient arrows */}
          <path
            d="M 180 130 L 180 160"
            stroke="#10b981"
            strokeWidth="2"
            markerEnd="url(#arrowGreen)"
          />

          {/* Interactive overlay */}
          <rect
            x="150"
            y="100"
            width="130"
            height="200"
            fill="transparent"
            stroke={active?.id === "facilitated" ? "#10b981" : "transparent"}
            strokeWidth="3"
            className="cursor-pointer"
            onMouseEnter={() => setActive(parts[1])}
            onMouseLeave={() => setActive(null)}
          />

          {/* Label */}
          <line
            x1="210"
            y1="320"
            x2="210"
            y2="340"
            stroke="#10b981"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text x="210" y="355" fontSize="10" fill="#10b981" fontWeight="600" textAnchor="middle">
            Erleichterte
          </text>
          <text x="210" y="368" fontSize="10" fill="#10b981" fontWeight="600" textAnchor="middle">
            Diffusion
          </text>
        </g>

        {/* ========== AKTIVER TRANSPORT (Section 3) ========== */}
        <g>
          {/* Lipid bilayer section */}
          {/* Phospholipid heads (upper layer) */}
          <circle cx="310" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="330" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="350" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="390" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="410" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Tails */}
          <path d="M 310 185 Q 308 200 310 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 313 185 Q 315 200 313 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 330 185 Q 328 200 330 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 333 185 Q 335 200 333 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 350 185 Q 348 200 350 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 353 185 Q 355 200 353 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 390 185 Q 388 200 390 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 393 185 Q 395 200 393 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 410 185 Q 408 200 410 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 413 185 Q 415 200 413 215" stroke="#9ca3af" strokeWidth="2" fill="none" />

          {/* Phospholipid heads (lower layer) */}
          <circle cx="310" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="330" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="350" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="390" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="410" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Pump protein (Na+/K+-ATPase) */}
          <path
            d="M 360 175 L 365 180 L 365 220 L 360 225 L 355 220 L 355 180 Z"
            fill="#ef4444"
            opacity="0.6"
            stroke="#dc2626"
            strokeWidth="2"
          />
          <circle cx="360" cy="200" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="360" y="203" fontSize="6" fill="#991b1b" fontWeight="bold" textAnchor="middle">
            ATP
          </text>

          {/* Na+ ions (3 going out) */}
          <circle cx="360" cy="155" r="3" fill="#ef4444" />
          <text x="360" y="157" fontSize="6" fill="white" fontWeight="bold" textAnchor="middle">
            Na
          </text>
          <circle cx="355" cy="145" r="3" fill="#ef4444" />
          <text x="355" y="147" fontSize="6" fill="white" fontWeight="bold" textAnchor="middle">
            Na
          </text>
          <circle cx="365" cy="145" r="3" fill="#ef4444" />
          <text x="365" y="147" fontSize="6" fill="white" fontWeight="bold" textAnchor="middle">
            Na
          </text>

          {/* K+ ions (2 going in) */}
          <circle cx="360" cy="245" r="3" fill="#3b82f6" />
          <text x="360" y="247" fontSize="6" fill="white" fontWeight="bold" textAnchor="middle">
            K
          </text>
          <circle cx="355" cy="255" r="3" fill="#3b82f6" />
          <text x="355" y="257" fontSize="6" fill="white" fontWeight="bold" textAnchor="middle">
            K
          </text>

          {/* Gradient arrows (AGAINST gradient) */}
          <path
            d="M 350 165 L 350 135"
            stroke="#ef4444"
            strokeWidth="2"
            markerEnd="url(#arrowRed)"
          />
          <path
            d="M 370 265 L 370 235"
            stroke="#3b82f6"
            strokeWidth="2"
            markerEnd="url(#arrowBlue)"
          />

          {/* Interactive overlay */}
          <rect
            x="290"
            y="100"
            width="130"
            height="200"
            fill="transparent"
            stroke={active?.id === "active" ? "#ef4444" : "transparent"}
            strokeWidth="3"
            className="cursor-pointer"
            onMouseEnter={() => setActive(parts[2])}
            onMouseLeave={() => setActive(null)}
          />

          {/* Label */}
          <line
            x1="350"
            y1="320"
            x2="350"
            y2="340"
            stroke="#ef4444"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text x="350" y="355" fontSize="10" fill="#ef4444" fontWeight="600" textAnchor="middle">
            Aktiver
          </text>
          <text x="350" y="368" fontSize="10" fill="#ef4444" fontWeight="600" textAnchor="middle">
            Transport
          </text>
        </g>

        {/* ========== VESIKULÄRER TRANSPORT (Section 4) ========== */}
        <g>
          {/* Lipid bilayer section */}
          {/* Phospholipid heads (upper layer) */}
          <circle cx="450" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="470" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="490" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="510" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="530" cy="180" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Tails */}
          <path d="M 450 185 Q 448 200 450 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 453 185 Q 455 200 453 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 470 185 Q 468 200 470 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 473 185 Q 475 200 473 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 490 185 Q 488 200 490 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 493 185 Q 495 200 493 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 510 185 Q 508 200 510 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 513 185 Q 515 200 513 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 530 185 Q 528 200 530 215" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M 533 185 Q 535 200 533 215" stroke="#9ca3af" strokeWidth="2" fill="none" />

          {/* Phospholipid heads (lower layer) */}
          <circle cx="450" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="470" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="490" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="510" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="530" cy="220" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Endocytosis (top) - vesicle forming from membrane */}
          <circle
            cx="470"
            cy="150"
            r="15"
            fill="#8b5cf6"
            opacity="0.3"
            stroke="#7c3aed"
            strokeWidth="2"
          />
          <circle cx="470" cy="150" r="8" fill="#a78bfa" opacity="0.6" />
          <path
            d="M 460 165 Q 470 175 480 165"
            stroke="#7c3aed"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,2"
          />

          {/* Vesicle inside cell (endocytosis completed) */}
          <circle
            cx="500"
            cy="240"
            r="12"
            fill="#8b5cf6"
            opacity="0.4"
            stroke="#7c3aed"
            strokeWidth="2"
          />
          <circle cx="500" cy="240" r="6" fill="#a78bfa" opacity="0.7" />

          {/* Exocytosis (bottom) - vesicle fusing with membrane */}
          <circle
            cx="460"
            cy="260"
            r="12"
            fill="#8b5cf6"
            opacity="0.4"
            stroke="#7c3aed"
            strokeWidth="2"
          />
          <circle cx="460" cy="260" r="6" fill="#a78bfa" opacity="0.7" />
          <path
            d="M 452 248 Q 460 235 468 248"
            stroke="#7c3aed"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,2"
          />

          {/* Arrows */}
          <path
            d="M 485 155 L 495 155"
            stroke="#8b5cf6"
            strokeWidth="2"
            markerEnd="url(#arrowPurple)"
          />
          <text x="505" y="158" fontSize="8" fill="#7c3aed" fontWeight="600">
            Endo
          </text>
          <path
            d="M 475 265 L 485 265"
            stroke="#8b5cf6"
            strokeWidth="2"
            markerEnd="url(#arrowPurple)"
          />
          <text x="488" y="268" fontSize="8" fill="#7c3aed" fontWeight="600">
            Exo
          </text>

          {/* Interactive overlay */}
          <rect
            x="430"
            y="100"
            width="130"
            height="200"
            fill="transparent"
            stroke={active?.id === "vesicular" ? "#8b5cf6" : "transparent"}
            strokeWidth="3"
            className="cursor-pointer"
            onMouseEnter={() => setActive(parts[3])}
            onMouseLeave={() => setActive(null)}
          />

          {/* Label */}
          <line
            x1="490"
            y1="320"
            x2="490"
            y2="340"
            stroke="#8b5cf6"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text x="490" y="355" fontSize="10" fill="#8b5cf6" fontWeight="600" textAnchor="middle">
            Vesikulärer
          </text>
          <text x="490" y="368" fontSize="10" fill="#8b5cf6" fontWeight="600" textAnchor="middle">
            Transport
          </text>
        </g>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowBlue"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
          </marker>
          <marker
            id="arrowGreen"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
          </marker>
          <marker
            id="arrowRed"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
          </marker>
          <marker
            id="arrowPurple"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#8b5cf6" />
          </marker>
        </defs>
      </svg>
      {active && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">{active.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{active.detail}</p>
        </div>
      )}
    </div>
  );
}
