import { useState } from "react";

const parts = [
  {
    id: "plasma",
    label: "Plasma (~55%)",
    detail:
      "Wasser (90%), Proteine (Albumin, Globuline, Fibrinogen), Elektrolyte, Glukose, Lipide, Hormone",
  },
  {
    id: "buffy-coat",
    label: "Buffy Coat (<1%)",
    detail: "Dünne Schicht aus Leukozyten (weiße Blutkörperchen) und Thrombozyten (Blutplättchen)",
  },
  {
    id: "rbc-layer",
    label: "Erythrozyten (~45%)",
    detail: "Hämatokrit: zelluläre Bestandteile, hauptsächlich rote Blutkörperchen",
  },
  {
    id: "erythrocyte",
    label: "Erythrozyt",
    detail: "Bikonkave Scheibe, kernlos, enthält Hämoglobin für O₂-Transport, ~5 Mio/μL",
  },
  {
    id: "neutrophil",
    label: "Neutrophiler Granulozyt",
    detail: "60-70% der Leukozyten, Phagozytose von Bakterien, erste Abwehrlinie",
  },
  {
    id: "lymphocyte",
    label: "Lymphozyt",
    detail: "20-30% der Leukozyten, B-Zellen (Antikörper) und T-Zellen (zelluläre Immunität)",
  },
  {
    id: "monocyte",
    label: "Monozyt",
    detail: "3-8% der Leukozyten, größte Leukozyten, differenzieren zu Makrophagen",
  },
  {
    id: "eosinophil",
    label: "Eosinophiler Granulozyt",
    detail: "1-4% der Leukozyten, Abwehr von Parasiten, Allergiereaktionen",
  },
  {
    id: "basophil",
    label: "Basophiler Granulozyt",
    detail: "<1% der Leukozyten, Freisetzung von Histamin bei Entzündungen",
  },
  {
    id: "platelet",
    label: "Thrombozyt",
    detail: "Zellfragmente ohne Kern, Blutgerinnung (Hämostase), 150.000-400.000/μL",
  },
];

type Part = (typeof parts)[number];

export default function BloodComponents() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Blutbestandteile</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf Bestandteile für Details.
      </p>
      <svg viewBox="0 0 700 500" className="w-full max-w-3xl mx-auto">
        {/* Test tube container */}
        <rect
          x="250"
          y="50"
          width="100"
          height="350"
          fill="none"
          stroke="#6b7280"
          strokeWidth="2"
          rx="5"
        />
        <ellipse cx="300" cy="50" rx="50" ry="8" fill="none" stroke="#6b7280" strokeWidth="2" />

        {/* Plasma layer - top ~55% */}
        <rect
          x="252"
          y="52"
          width="96"
          height="192"
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth="1.5"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[0])}
          onMouseLeave={() => setActive(null)}
        />

        {/* Buffy coat - thin layer ~1% */}
        <rect
          x="252"
          y="244"
          width="96"
          height="4"
          fill="#f5f5f4"
          stroke="#78716c"
          strokeWidth="1"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[1])}
          onMouseLeave={() => setActive(null)}
        />

        {/* Erythrocyte layer - bottom ~45% */}
        <rect
          x="252"
          y="248"
          width="96"
          height="150"
          fill="#ef4444"
          stroke="#991b1b"
          strokeWidth="1.5"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[2])}
          onMouseLeave={() => setActive(null)}
        />

        {/* Labels for test tube layers */}
        {/* Plasma label */}
        <line
          x1="350"
          y1="148"
          x2="390"
          y2="148"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <text x="395" y="152" fontSize="12" fill="#374151" className="dark:fill-gray-300">
          Plasma
        </text>

        {/* Buffy coat label */}
        <line
          x1="350"
          y1="246"
          x2="390"
          y2="246"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <text x="395" y="250" fontSize="11" fill="#374151" className="dark:fill-gray-300">
          Buffy Coat
        </text>

        {/* RBC layer label */}
        <line
          x1="350"
          y1="323"
          x2="390"
          y2="323"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <text x="395" y="327" fontSize="12" fill="#374151" className="dark:fill-gray-300">
          Hämatokrit
        </text>

        {/* Title above tube */}
        <text
          x="300"
          y="30"
          fontSize="13"
          fontWeight="600"
          fill="#374151"
          textAnchor="middle"
          className="dark:fill-gray-300"
        >
          Zentrifugiertes Blut
        </text>

        {/* Individual cell illustrations */}

        {/* Erythrocyte - biconcave disc */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[3])}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse
            cx="100"
            cy="100"
            rx="20"
            ry="20"
            fill="#ef4444"
            stroke="#991b1b"
            strokeWidth="1.5"
          />
          <ellipse cx="100" cy="100" rx="12" ry="12" fill="none" stroke="#991b1b" strokeWidth="1" />
          <line
            x1="120"
            y1="100"
            x2="160"
            y2="80"
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text x="165" y="84" fontSize="10" fill="#374151" className="dark:fill-gray-300">
            Erythrozyt
          </text>
        </g>

        {/* Neutrophil */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[4])}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="100" cy="180" r="18" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M 92 180 Q 100 175 108 180" fill="none" stroke="#1e40af" strokeWidth="1.5" />
          <path d="M 90 185 Q 100 190 110 185" fill="none" stroke="#1e40af" strokeWidth="1.5" />
          <circle cx="100" cy="180" r="5" fill="#1e40af" />
          <line
            x1="118"
            y1="180"
            x2="160"
            y2="160"
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text x="165" y="164" fontSize="10" fill="#374151" className="dark:fill-gray-300">
            Neutrophil
          </text>
        </g>

        {/* Lymphocyte */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[5])}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="100" cy="260" r="16" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="100" cy="260" r="8" fill="#1e40af" />
          <line
            x1="116"
            y1="260"
            x2="160"
            y2="240"
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text x="165" y="244" fontSize="10" fill="#374151" className="dark:fill-gray-300">
            Lymphozyt
          </text>
        </g>

        {/* Monocyte */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[6])}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="100" cy="340" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
          <ellipse cx="100" cy="340" rx="8" ry="10" fill="#1e40af" />
          <line
            x1="120"
            y1="340"
            x2="160"
            y2="320"
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text x="165" y="324" fontSize="10" fill="#374151" className="dark:fill-gray-300">
            Monozyt
          </text>
        </g>

        {/* Eosinophil */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[7])}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="100" cy="420" r="18" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="95" cy="420" r="4" fill="#ef4444" />
          <circle cx="105" cy="420" r="4" fill="#ef4444" />
          <circle cx="100" cy="413" r="4" fill="#ef4444" />
          <circle cx="100" cy="427" r="4" fill="#ef4444" />
          <circle cx="100" cy="420" r="6" fill="#1e40af" />
          <line
            x1="118"
            y1="420"
            x2="160"
            y2="400"
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text x="165" y="404" fontSize="10" fill="#374151" className="dark:fill-gray-300">
            Eosinophil
          </text>
        </g>

        {/* Basophil */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[8])}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="560" cy="100" r="18" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="554" cy="100" r="5" fill="#6366f1" />
          <circle cx="566" cy="100" r="5" fill="#6366f1" />
          <circle cx="560" cy="93" r="4" fill="#6366f1" />
          <circle cx="560" cy="107" r="4" fill="#6366f1" />
          <circle cx="560" cy="100" r="5" fill="#1e40af" />
          <line
            x1="542"
            y1="100"
            x2="500"
            y2="80"
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text
            x="440"
            y="84"
            fontSize="10"
            fill="#374151"
            textAnchor="end"
            className="dark:fill-gray-300"
          >
            Basophil
          </text>
        </g>

        {/* Thrombocyte/Platelet */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[9])}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse
            cx="560"
            cy="180"
            rx="12"
            ry="8"
            fill="#e9d5ff"
            stroke="#a855f7"
            strokeWidth="1.5"
          />
          <ellipse cx="560" cy="180" rx="6" ry="4" fill="#9333ea" />
          <ellipse
            cx="575"
            cy="185"
            rx="10"
            ry="7"
            fill="#e9d5ff"
            stroke="#a855f7"
            strokeWidth="1.5"
          />
          <ellipse cx="575" cy="185" rx="5" ry="3" fill="#9333ea" />
          <line
            x1="542"
            y1="180"
            x2="500"
            y2="160"
            stroke="#6b7280"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text
            x="440"
            y="164"
            fontSize="10"
            fill="#374151"
            textAnchor="end"
            className="dark:fill-gray-300"
          >
            Thrombozyt
          </text>
        </g>

        {/* Legend - Percentages */}
        <text
          x="480"
          y="260"
          fontSize="11"
          fontWeight="600"
          fill="#374151"
          className="dark:fill-gray-300"
        >
          Leukozyten-Verteilung:
        </text>
        <text x="480" y="280" fontSize="9" fill="#374151" className="dark:fill-gray-300">
          Neutrophile: 60-70%
        </text>
        <text x="480" y="295" fontSize="9" fill="#374151" className="dark:fill-gray-300">
          Lymphozyten: 20-30%
        </text>
        <text x="480" y="310" fontSize="9" fill="#374151" className="dark:fill-gray-300">
          Monozyten: 3-8%
        </text>
        <text x="480" y="325" fontSize="9" fill="#374151" className="dark:fill-gray-300">
          Eosinophile: 1-4%
        </text>
        <text x="480" y="340" fontSize="9" fill="#374151" className="dark:fill-gray-300">
          Basophile: &lt;1%
        </text>
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
