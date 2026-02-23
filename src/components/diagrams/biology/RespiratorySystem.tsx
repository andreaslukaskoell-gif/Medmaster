import { useState } from "react";

const parts = [
  {
    id: "nasenhohle",
    label: "Nasenhöhle",
    detail:
      "Erwärmt, befeuchtet und filtert die eingeatmete Luft. Enthält Flimmerhärchen und Schleimhäute.",
  },
  {
    id: "pharynx",
    label: "Pharynx (Rachen)",
    detail:
      "Gemeinsamer Durchgang für Luft und Nahrung. Verbindet Nasenhöhle mit Larynx und Mund mit Ösophagus.",
  },
  {
    id: "larynx",
    label: "Larynx (Kehlkopf)",
    detail:
      "Enthält die Stimmbänder zur Lauterzeugung. Der Kehldeckel (Epiglottis) verschließt beim Schlucken die Luftröhre.",
  },
  {
    id: "trachea",
    label: "Trachea (Luftröhre)",
    detail:
      "C-förmige Knorpelringe stabilisieren die Luftröhre. Flimmerepithel transportiert Schleim nach oben ab.",
  },
  {
    id: "bronchien",
    label: "Bronchien",
    detail:
      "Verzweigte Atemwege in die Lungen. Rechter Hauptbronchus versorgt 3 Lungenlappen, linker 2 Lappen.",
  },
  {
    id: "bronchiolen",
    label: "Bronchiolen",
    detail:
      "Kleinste Atemwege ohne Knorpel, aber mit glatter Muskulatur. Regulieren den Luftstrom zu den Alveolen.",
  },
  {
    id: "alveolen",
    label: "Alveolen",
    detail:
      "Lungenbläschen für Gasaustausch (O₂ ↔ CO₂). Surfactant verhindert Kollaps. Etwa 300 Millionen pro Lunge.",
  },
];

type Part = (typeof parts)[number];

export default function RespiratorySystem() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Atmungssystem</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Strukturen für Details.</p>
      <svg viewBox="0 0 400 500" className="w-full max-w-xl mx-auto">
        {/* Nasenhöhle */}
        <ellipse
          cx="200"
          cy="30"
          rx="25"
          ry="15"
          fill="#93c5fd"
          stroke="#1e40af"
          strokeWidth="2"
          onClick={() => setActive(parts[0])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Pharynx */}
        <rect
          x="185"
          y="45"
          width="30"
          height="25"
          fill="#93c5fd"
          stroke="#1e40af"
          strokeWidth="2"
          onClick={() => setActive(parts[1])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Larynx */}
        <path
          d="M 185 70 L 175 90 L 225 90 L 215 70 Z"
          fill="#93c5fd"
          stroke="#1e40af"
          strokeWidth="2"
          onClick={() => setActive(parts[2])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        {/* Trachea */}
        <g
          onClick={() => setActive(parts[3])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <rect
            x="185"
            y="90"
            width="30"
            height="80"
            fill="#93c5fd"
            stroke="#1e40af"
            strokeWidth="2"
          />
          {/* C-shaped cartilage rings */}
          <line x1="185" y1="100" x2="215" y2="100" stroke="#1e40af" strokeWidth="1.5" />
          <line x1="185" y1="115" x2="215" y2="115" stroke="#1e40af" strokeWidth="1.5" />
          <line x1="185" y1="130" x2="215" y2="130" stroke="#1e40af" strokeWidth="1.5" />
          <line x1="185" y1="145" x2="215" y2="145" stroke="#1e40af" strokeWidth="1.5" />
          <line x1="185" y1="160" x2="215" y2="160" stroke="#1e40af" strokeWidth="1.5" />
        </g>

        {/* Bronchien */}
        <g
          onClick={() => setActive(parts[4])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          {/* Right main bronchus */}
          <path
            d="M 200 170 Q 240 190 260 210"
            fill="none"
            stroke="#1e40af"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 200 170 Q 240 190 260 210"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Left main bronchus */}
          <path
            d="M 200 170 Q 160 190 140 210"
            fill="none"
            stroke="#1e40af"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 200 170 Q 160 190 140 210"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>

        {/* Lungs with Bronchiolen */}
        <g
          onClick={() => setActive(parts[5])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          {/* Right lung (3 lobes) */}
          <ellipse
            cx="280"
            cy="270"
            rx="70"
            ry="110"
            fill="#fda4af"
            fillOpacity="0.3"
            stroke="#be123c"
            strokeWidth="2"
          />

          {/* Left lung (2 lobes) */}
          <ellipse
            cx="120"
            cy="270"
            rx="60"
            ry="100"
            fill="#fda4af"
            fillOpacity="0.3"
            stroke="#be123c"
            strokeWidth="2"
          />

          {/* Bronchiolen network - right */}
          <path d="M 260 210 L 270 230 L 260 250" fill="none" stroke="#1e40af" strokeWidth="3" />
          <path d="M 260 210 L 280 230 L 290 250" fill="none" stroke="#1e40af" strokeWidth="3" />
          <path d="M 260 210 L 290 230 L 300 250" fill="none" stroke="#1e40af" strokeWidth="3" />

          {/* Bronchiolen network - left */}
          <path d="M 140 210 L 130 230 L 120 250" fill="none" stroke="#1e40af" strokeWidth="3" />
          <path d="M 140 210 L 120 230 L 110 250" fill="none" stroke="#1e40af" strokeWidth="3" />
          <path d="M 140 210 L 110 230 L 100 250" fill="none" stroke="#1e40af" strokeWidth="3" />
        </g>

        {/* Alveolen (scattered in lungs) */}
        <g
          onClick={() => setActive(parts[6])}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          {/* Right lung alveoli clusters */}
          <circle cx="270" cy="260" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="280" cy="265" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="275" cy="275" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="290" cy="270" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="295" cy="285" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="265" cy="290" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="285" cy="295" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="300" cy="300" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />

          {/* Left lung alveoli clusters */}
          <circle cx="120" cy="260" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="110" cy="265" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="125" cy="275" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="105" cy="280" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="115" cy="290" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
          <circle cx="130" cy="295" r="4" fill="#fda4af" stroke="#be123c" strokeWidth="1" />
        </g>

        {/* Labels with leader lines */}
        {/* Nasenhöhle label */}
        <line
          x1="225"
          y1="30"
          x2="260"
          y2="20"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="265" y="22" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Nasenhöhle
        </text>

        {/* Pharynx label */}
        <line
          x1="215"
          y1="57"
          x2="250"
          y2="50"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="255" y="52" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Pharynx
        </text>

        {/* Larynx label */}
        <line
          x1="225"
          y1="80"
          x2="260"
          y2="75"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="265" y="77" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Larynx
        </text>

        {/* Trachea label */}
        <line
          x1="215"
          y1="130"
          x2="250"
          y2="130"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="255" y="132" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Trachea
        </text>

        {/* Bronchien label */}
        <line
          x1="200"
          y1="180"
          x2="160"
          y2="175"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="85" y="177" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Bronchien
        </text>

        {/* Bronchiolen label */}
        <line
          x1="260"
          y1="230"
          x2="320"
          y2="220"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="325" y="222" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Bronchiolen
        </text>

        {/* Alveolen label */}
        <line
          x1="270"
          y1="260"
          x2="320"
          y2="250"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="325" y="252" fontSize="10" fill="#374151" className="dark:fill-gray-300">
          Alveolen
        </text>

        {/* Zoomed-in Alveolus Detail */}
        <g transform="translate(50, 380)">
          <text
            x="90"
            y="-5"
            fontSize="11"
            fontWeight="bold"
            fill="#374151"
            className="dark:fill-gray-300"
          >
            Gasaustausch Detail
          </text>

          {/* Alveolus structure */}
          <circle
            cx="100"
            cy="40"
            r="35"
            fill="#fda4af"
            fillOpacity="0.2"
            stroke="#be123c"
            strokeWidth="2"
          />

          {/* Capillaries around alveolus */}
          <path
            d="M 70 20 Q 80 35 70 50"
            fill="none"
            stroke="#dc2626"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <text x="45" y="38" fontSize="8" fill="#dc2626">
            O₂-reich
          </text>

          <path
            d="M 130 20 Q 120 35 130 50"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <text x="135" y="38" fontSize="8" fill="#3b82f6">
            CO₂-reich
          </text>

          {/* Gas exchange arrows */}
          <path d="M 85 35 L 95 40" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrowO2)" />
          <path
            d="M 115 40 L 105 35"
            stroke="#3b82f6"
            strokeWidth="1.5"
            markerEnd="url(#arrowCO2)"
          />

          {/* Labels */}
          <text x="82" y="55" fontSize="7" fill="#374151" className="dark:fill-gray-300">
            O₂
          </text>
          <text x="112" y="28" fontSize="7" fill="#374151" className="dark:fill-gray-300">
            CO₂
          </text>

          {/* Surfactant indication */}
          <circle cx="100" cy="15" r="3" fill="#fbbf24" opacity="0.6" />
          <circle cx="108" cy="18" r="2.5" fill="#fbbf24" opacity="0.6" />
          <circle cx="92" cy="18" r="2.5" fill="#fbbf24" opacity="0.6" />
          <text x="60" y="12" fontSize="7" fill="#f59e0b">
            Surfactant
          </text>
        </g>

        {/* Arrow markers for gas exchange */}
        <defs>
          <marker
            id="arrowO2"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#dc2626" />
          </marker>
          <marker
            id="arrowCO2"
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
