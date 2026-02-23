import { useState } from "react";

const parts = [
  {
    id: "rechter-vorhof",
    label: "Rechter Vorhof",
    detail:
      "Empfängt sauerstoffarmes Blut aus dem Körper über die obere und untere Hohlvene (Vena cava).",
  },
  {
    id: "rechte-kammer",
    label: "Rechte Kammer",
    detail: "Pumpt sauerstoffarmes Blut in die Lungenarterien zum Lungenkreislauf.",
  },
  {
    id: "lungenarterien",
    label: "Lungenarterien",
    detail:
      "Transportieren sauerstoffarmes Blut vom rechten Ventrikel zur Lunge (einzige Arterien mit sauerstoffarmem Blut).",
  },
  {
    id: "lunge",
    label: "Lunge (Gasaustausch)",
    detail: "CO₂ wird abgegeben, O₂ wird aufgenommen. Blut wird mit Sauerstoff angereichert.",
  },
  {
    id: "lungenvenen",
    label: "Lungenvenen",
    detail:
      "Transportieren sauerstoffreiches Blut von der Lunge zum linken Vorhof (einzige Venen mit sauerstoffreichem Blut).",
  },
  {
    id: "linker-vorhof",
    label: "Linker Vorhof",
    detail: "Empfängt sauerstoffreiches Blut aus der Lunge über die Lungenvenen.",
  },
  {
    id: "linke-kammer",
    label: "Linke Kammer",
    detail:
      "Pumpt sauerstoffreiches Blut in die Aorta zum Körperkreislauf. Stärkste Herzkammer mit dickster Muskelwand.",
  },
  {
    id: "aorta",
    label: "Aorta",
    detail:
      "Hauptschlagader. Transportiert sauerstoffreiches Blut vom linken Ventrikel in den gesamten Körper.",
  },
  {
    id: "koerperkapillaren",
    label: "Körperkapillaren",
    detail:
      "Feine Blutgefäße in Organen und Geweben. O₂ wird abgegeben, CO₂ und Stoffwechselprodukte werden aufgenommen.",
  },
  {
    id: "vena-cava",
    label: "Vena cava",
    detail:
      "Obere und untere Hohlvene. Sammeln sauerstoffarmes Blut aus dem Körper und leiten es zum rechten Vorhof.",
  },
];

type Part = (typeof parts)[number];

export default function BloodCirculation() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Blutkreislauf</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Abschnitte für Details.</p>
      <svg viewBox="0 0 480 500" className="w-full max-w-xl mx-auto">
        {/* Background */}
        <rect width="480" height="500" fill="white" />

        {/* Lungenkreislauf (pulmonary circuit) - top loop */}

        {/* Right ventricle to pulmonary arteries (blue - deoxygenated) */}
        <path
          d="M 240 220 L 240 140 L 180 100"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="12"
          markerEnd="url(#arrowBlue)"
        />
        <path
          d="M 240 220 L 240 140 L 300 100"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="12"
          markerEnd="url(#arrowBlue)"
        />

        {/* Lungs - left and right */}
        <ellipse
          cx="150"
          cy="80"
          rx="35"
          ry="40"
          fill="#e0f2fe"
          stroke="#0369a1"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setActive(parts.find((p) => p.id === "lunge") || null)}
        />
        <ellipse
          cx="330"
          cy="80"
          rx="35"
          ry="40"
          fill="#e0f2fe"
          stroke="#0369a1"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setActive(parts.find((p) => p.id === "lunge") || null)}
        />

        {/* Pulmonary veins from lungs (red - oxygenated) */}
        <path
          d="M 180 60 L 240 100 L 240 180"
          fill="none"
          stroke="#ef4444"
          strokeWidth="12"
          markerEnd="url(#arrowRed)"
        />
        <path
          d="M 300 60 L 240 100 L 240 180"
          fill="none"
          stroke="#ef4444"
          strokeWidth="12"
          markerEnd="url(#arrowRed)"
        />

        {/* Heart - central box with 4 chambers */}
        <rect
          x="160"
          y="180"
          width="160"
          height="120"
          fill="#fef3c7"
          stroke="#92400e"
          strokeWidth="3"
          rx="5"
        />

        {/* Dividing line - vertical */}
        <line
          x1="240"
          y1="180"
          x2="240"
          y2="300"
          stroke="#92400e"
          strokeWidth="2"
          strokeDasharray="4"
        />

        {/* Dividing line - horizontal */}
        <line
          x1="160"
          y1="240"
          x2="320"
          y2="240"
          stroke="#92400e"
          strokeWidth="2"
          strokeDasharray="4"
        />

        {/* Right atrium (top right) */}
        <rect
          x="165"
          y="185"
          width="70"
          height="50"
          fill="#dbeafe"
          stroke="#1e40af"
          strokeWidth="1.5"
          rx="3"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setActive(parts.find((p) => p.id === "rechter-vorhof") || null)}
        />

        {/* Right ventricle (bottom right) */}
        <rect
          x="165"
          y="245"
          width="70"
          height="50"
          fill="#bfdbfe"
          stroke="#1e40af"
          strokeWidth="1.5"
          rx="3"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setActive(parts.find((p) => p.id === "rechte-kammer") || null)}
        />

        {/* Left atrium (top left) */}
        <rect
          x="245"
          y="185"
          width="70"
          height="50"
          fill="#fee2e2"
          stroke="#991b1b"
          strokeWidth="1.5"
          rx="3"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setActive(parts.find((p) => p.id === "linker-vorhof") || null)}
        />

        {/* Left ventricle (bottom left) */}
        <rect
          x="245"
          y="245"
          width="70"
          height="50"
          fill="#fecaca"
          stroke="#991b1b"
          strokeWidth="1.5"
          rx="3"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setActive(parts.find((p) => p.id === "linke-kammer") || null)}
        />

        {/* Körperkreislauf (systemic circuit) - bottom loop */}

        {/* Left ventricle to aorta (red - oxygenated) */}
        <path
          d="M 280 300 L 280 340 L 360 380"
          fill="none"
          stroke="#ef4444"
          strokeWidth="12"
          markerEnd="url(#arrowRed)"
        />

        {/* Body organs/capillaries */}
        <rect
          x="340"
          y="360"
          width="80"
          height="60"
          fill="#fef3c7"
          stroke="#78350f"
          strokeWidth="2"
          rx="5"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setActive(parts.find((p) => p.id === "koerperkapillaren") || null)}
        />
        <text x="380" y="395" textAnchor="middle" fontSize="11" fill="#78350f" fontWeight="600">
          Körper
        </text>

        {/* Vena cava from body (blue - deoxygenated) */}
        <path
          d="M 340 390 L 120 390 L 120 340 L 200 300"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="12"
          markerEnd="url(#arrowBlue)"
        />

        {/* Arrow markers */}
        <defs>
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
        </defs>

        {/* Interactive overlays for blood vessels */}

        {/* Pulmonary arteries */}
        <path
          d="M 240 220 L 240 140 L 180 100 M 240 140 L 300 100"
          fill="none"
          stroke="transparent"
          strokeWidth="20"
          className="cursor-pointer"
          onClick={() => setActive(parts.find((p) => p.id === "lungenarterien") || null)}
        />

        {/* Pulmonary veins */}
        <path
          d="M 180 60 L 240 100 L 240 180 M 300 60 L 240 100"
          fill="none"
          stroke="transparent"
          strokeWidth="20"
          className="cursor-pointer"
          onClick={() => setActive(parts.find((p) => p.id === "lungenvenen") || null)}
        />

        {/* Aorta */}
        <path
          d="M 280 300 L 280 340 L 360 380"
          fill="none"
          stroke="transparent"
          strokeWidth="20"
          className="cursor-pointer"
          onClick={() => setActive(parts.find((p) => p.id === "aorta") || null)}
        />

        {/* Vena cava */}
        <path
          d="M 340 390 L 120 390 L 120 340 L 200 300"
          fill="none"
          stroke="transparent"
          strokeWidth="20"
          className="cursor-pointer"
          onClick={() => setActive(parts.find((p) => p.id === "vena-cava") || null)}
        />

        {/* Labels with leader lines */}

        {/* Lungs label */}
        <line
          x1="240"
          y1="50"
          x2="240"
          y2="30"
          stroke="#64748b"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="240" y="25" textAnchor="middle" fontSize="11" fill="#0f172a" fontWeight="600">
          Lunge
        </text>

        {/* Pulmonary arteries label */}
        <line
          x1="210"
          y1="120"
          x2="140"
          y2="130"
          stroke="#64748b"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="135" y="135" textAnchor="end" fontSize="10" fill="#0f172a">
          Lungenarterien
        </text>

        {/* Pulmonary veins label */}
        <line
          x1="270"
          y1="120"
          x2="340"
          y2="130"
          stroke="#64748b"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="345" y="135" textAnchor="start" fontSize="10" fill="#0f172a">
          Lungenvenen
        </text>

        {/* Heart chamber labels */}
        <text x="200" y="212" textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="500">
          R. Vorhof
        </text>
        <text x="200" y="273" textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="500">
          R. Kammer
        </text>
        <text x="280" y="212" textAnchor="middle" fontSize="9" fill="#991b1b" fontWeight="500">
          L. Vorhof
        </text>
        <text x="280" y="273" textAnchor="middle" fontSize="9" fill="#991b1b" fontWeight="500">
          L. Kammer
        </text>

        {/* Aorta label */}
        <line
          x1="320"
          y1="340"
          x2="380"
          y2="330"
          stroke="#64748b"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="385" y="335" textAnchor="start" fontSize="10" fill="#0f172a">
          Aorta
        </text>

        {/* Vena cava label */}
        <line
          x1="160"
          y1="340"
          x2="100"
          y2="330"
          stroke="#64748b"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="95" y="335" textAnchor="end" fontSize="10" fill="#0f172a">
          Vena cava
        </text>

        {/* Circuit labels */}
        <text x="60" y="80" textAnchor="middle" fontSize="11" fill="#0369a1" fontWeight="700">
          Lungenkreislauf
        </text>
        <text x="420" y="420" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="700">
          Körperkreislauf
        </text>

        {/* Legend */}
        <g transform="translate(20, 450)">
          <line x1="0" y1="0" x2="30" y2="0" stroke="#ef4444" strokeWidth="6" />
          <text x="35" y="4" fontSize="9" fill="#0f172a">
            O₂-reich
          </text>

          <line x1="100" y1="0" x2="130" y2="0" stroke="#3b82f6" strokeWidth="6" />
          <text x="135" y="4" fontSize="9" fill="#0f172a">
            O₂-arm
          </text>
        </g>
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
