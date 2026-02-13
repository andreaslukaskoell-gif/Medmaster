import { useState } from "react";

const parts = [
  {
    id: "hypothalamus",
    label: "Hypothalamus",
    detail: "Oberste Steuerungsinstanz. Produziert Releasing- und Inhibiting-Hormone (CRH, GnRH, TRH, GHRH, Dopamin) zur Steuerung der Hypophyse."
  },
  {
    id: "hypophyse",
    label: "Hypophyse (Hirnanhangdrüse)",
    detail: "Adenohypophyse (HVL): ACTH, TSH, FSH, LH, GH, Prolaktin. Neurohypophyse (HHL): ADH (Wasserhaushalt), Oxytocin (Wehentätigkeit, Milchfluss)."
  },
  {
    id: "schilddruese",
    label: "Schilddrüse",
    detail: "Produziert T3 und T4 (Stoffwechsel, Wachstum, Entwicklung) sowie Calcitonin (senkt Ca²⁺-Spiegel im Blut)."
  },
  {
    id: "nebenschilddruese",
    label: "Nebenschilddrüse",
    detail: "4 kleine Drüsen dorsal der Schilddrüse. Produzieren Parathormon (PTH) zur Erhöhung des Ca²⁺-Spiegels (Gegenspieler Calcitonin)."
  },
  {
    id: "nebenniere",
    label: "Nebenniere",
    detail: "Nebennierenrinde (Cortex): Cortisol (Stresshormon), Aldosteron (Na⁺/K⁺-Haushalt), Androgene. Nebennierenmark (Medulla): Adrenalin, Noradrenalin (Sympathikus)."
  },
  {
    id: "pankreas",
    label: "Pankreas (Langerhans-Inseln)",
    detail: "Endokriner Teil: β-Zellen → Insulin (senkt Blutzucker), α-Zellen → Glucagon (erhöht Blutzucker), δ-Zellen → Somatostatin."
  },
  {
    id: "ovar",
    label: "Ovar (Eierstock)",
    detail: "Weibliche Keimdrüse. Produziert Östrogen (Follikelphase, sekundäre Geschlechtsmerkmale) und Progesteron (Lutealphase, Schwangerschaft)."
  },
  {
    id: "hoden",
    label: "Hoden",
    detail: "Männliche Keimdrüse. Leydig-Zellen produzieren Testosteron (Spermienbildung, sekundäre Geschlechtsmerkmale, Muskelwachstum)."
  },
];

type Part = (typeof parts)[number];

export default function HormoneSystem() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Hormonsystem (Endokrines System)</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf die Drüsen für Details zu Hormonen und Funktionen.</p>

      <svg viewBox="0 0 500 620" className="w-full max-w-2xl mx-auto">
        {/* Body silhouette */}
        <path
          d="M 250 40 Q 240 35, 235 45 L 230 60 Q 228 70, 230 80 L 235 110 Q 238 130, 240 150 L 242 200 Q 243 230, 245 260 L 248 320 Q 250 360, 252 400 L 255 480 Q 256 520, 258 560 L 260 600 Q 265 608, 270 600 L 272 560 Q 274 520, 276 480 L 280 400 Q 282 360, 285 320 L 288 260 Q 290 230, 292 200 L 295 150 Q 298 130, 300 110 L 305 80 Q 307 70, 305 60 L 300 45 Q 295 35, 285 40 Q 275 45, 270 50 Q 265 55, 260 50 Q 255 45, 250 40 Z M 230 110 Q 210 120, 195 140 L 180 160 Q 175 175, 172 190 L 170 220 Q 168 240, 170 260 L 175 300 Q 178 320, 182 340 L 190 380 Q 195 400, 200 420 L 210 460 Q 215 480, 220 500 L 230 540 Q 235 560, 240 580 L 245 600 M 305 110 Q 325 120, 340 140 L 355 160 Q 360 175, 363 190 L 365 220 Q 367 240, 365 260 L 360 300 Q 357 320, 353 340 L 345 380 Q 340 400, 335 420 L 325 460 Q 320 480, 315 500 L 305 540 Q 300 560, 295 580 L 290 600"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="1.5"
          opacity="0.4"
        />

        {/* Head outline */}
        <ellipse cx="267.5" cy="35" rx="22" ry="28" fill="none" stroke="#d1d5db" strokeWidth="1.5" opacity="0.4" />

        {/* Hypothalamus - in brain */}
        <ellipse
          id="hypothalamus"
          cx="267.5"
          cy="38"
          rx="8"
          ry="6"
          fill={active?.id === "hypothalamus" ? "#9333ea" : "#7c3aed"}
          stroke={active?.id === "hypothalamus" ? "#581c87" : "#6b21a8"}
          strokeWidth="1.5"
          className="cursor-pointer transition-all duration-200 hover:opacity-80"
          onMouseEnter={() => setActive(parts[0])}
          onMouseLeave={() => setActive(null)}
        />

        {/* Hypophyse - below hypothalamus */}
        <ellipse
          id="hypophyse"
          cx="267.5"
          cy="50"
          rx="7"
          ry="5"
          fill={active?.id === "hypophyse" ? "#9333ea" : "#7c3aed"}
          stroke={active?.id === "hypophyse" ? "#581c87" : "#6b21a8"}
          strokeWidth="1.5"
          className="cursor-pointer transition-all duration-200 hover:opacity-80"
          onMouseEnter={() => setActive(parts[1])}
          onMouseLeave={() => setActive(null)}
        />

        {/* Feedback loop: Hypothalamus → Hypophyse */}
        <path
          d="M 267.5 44 L 267.5 45"
          stroke="#9333ea"
          strokeWidth="1"
          markerEnd="url(#arrowhead-purple)"
          opacity="0.6"
        />

        {/* Schilddrüse (Thyroid) - neck */}
        <path
          id="schilddruese"
          d="M 260 75 Q 267.5 78, 275 75 L 278 82 Q 275 88, 267.5 90 Q 260 88, 257 82 Z"
          fill={active?.id === "schilddruese" ? "#60a5fa" : "#3b82f6"}
          stroke={active?.id === "schilddruese" ? "#1d4ed8" : "#2563eb"}
          strokeWidth="1.5"
          className="cursor-pointer transition-all duration-200 hover:opacity-80"
          onMouseEnter={() => setActive(parts[2])}
          onMouseLeave={() => setActive(null)}
        />

        {/* Nebenschilddrüse (4 small dots dorsal to thyroid) */}
        <g id="nebenschilddruese-group">
          <circle
            cx="257"
            cy="77"
            r="2"
            fill={active?.id === "nebenschilddruese" ? "#fbbf24" : "#f59e0b"}
            stroke={active?.id === "nebenschilddruese" ? "#d97706" : "#f59e0b"}
            strokeWidth="0.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[3])}
            onMouseLeave={() => setActive(null)}
          />
          <circle
            cx="278"
            cy="77"
            r="2"
            fill={active?.id === "nebenschilddruese" ? "#fbbf24" : "#f59e0b"}
            stroke={active?.id === "nebenschilddruese" ? "#d97706" : "#f59e0b"}
            strokeWidth="0.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[3])}
            onMouseLeave={() => setActive(null)}
          />
          <circle
            cx="257"
            cy="85"
            r="2"
            fill={active?.id === "nebenschilddruese" ? "#fbbf24" : "#f59e0b"}
            stroke={active?.id === "nebenschilddruese" ? "#d97706" : "#f59e0b"}
            strokeWidth="0.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[3])}
            onMouseLeave={() => setActive(null)}
          />
          <circle
            cx="278"
            cy="85"
            r="2"
            fill={active?.id === "nebenschilddruese" ? "#fbbf24" : "#f59e0b"}
            stroke={active?.id === "nebenschilddruese" ? "#d97706" : "#f59e0b"}
            strokeWidth="0.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[3])}
            onMouseLeave={() => setActive(null)}
          />
        </g>

        {/* Feedback: Hypophyse → Schilddrüse (HPT axis) */}
        <path
          d="M 267.5 55 L 267.5 70"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="3,2"
          markerEnd="url(#arrowhead-blue)"
          opacity="0.5"
        />

        {/* Nebenniere (Adrenal) - above kidneys, bilateral */}
        <g id="nebenniere-left">
          <path
            d="M 230 240 Q 225 238, 222 242 L 220 250 Q 222 256, 227 258 L 232 260 Q 237 258, 238 252 L 237 244 Q 235 240, 230 240 Z"
            fill={active?.id === "nebenniere" ? "#fb923c" : "#f97316"}
            stroke={active?.id === "nebenniere" ? "#ea580c" : "#f97316"}
            strokeWidth="1.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[4])}
            onMouseLeave={() => setActive(null)}
          />
        </g>
        <g id="nebenniere-right">
          <path
            d="M 305 240 Q 310 238, 313 242 L 315 250 Q 313 256, 308 258 L 303 260 Q 298 258, 297 252 L 298 244 Q 300 240, 305 240 Z"
            fill={active?.id === "nebenniere" ? "#fb923c" : "#f97316"}
            stroke={active?.id === "nebenniere" ? "#ea580c" : "#f97316"}
            strokeWidth="1.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[4])}
            onMouseLeave={() => setActive(null)}
          />
        </g>

        {/* Feedback: Hypophyse → Nebenniere (HPA axis) */}
        <path
          d="M 262 53 Q 240 120, 230 235"
          stroke="#f97316"
          strokeWidth="1"
          strokeDasharray="3,2"
          markerEnd="url(#arrowhead-orange)"
          opacity="0.5"
          fill="none"
        />

        {/* Pankreas - left upper abdomen */}
        <path
          id="pankreas"
          d="M 245 280 Q 240 278, 235 280 L 220 285 Q 215 287, 218 292 L 225 298 Q 230 300, 238 298 L 250 295 Q 255 293, 252 288 L 248 282 Q 246 280, 245 280 Z"
          fill={active?.id === "pankreas" ? "#34d399" : "#10b981"}
          stroke={active?.id === "pankreas" ? "#059669" : "#10b981"}
          strokeWidth="1.5"
          className="cursor-pointer transition-all duration-200 hover:opacity-80"
          onMouseEnter={() => setActive(parts[5])}
          onMouseLeave={() => setActive(null)}
        />

        {/* Gonaden - Ovar (bilateral, lower abdomen) */}
        <g id="ovar-group">
          <ellipse
            cx="230"
            cy="380"
            rx="8"
            ry="12"
            fill={active?.id === "ovar" ? "#f472b6" : "#ec4899"}
            stroke={active?.id === "ovar" ? "#db2777" : "#ec4899"}
            strokeWidth="1.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[6])}
            onMouseLeave={() => setActive(null)}
          />
          <ellipse
            cx="305"
            cy="380"
            rx="8"
            ry="12"
            fill={active?.id === "ovar" ? "#f472b6" : "#ec4899"}
            stroke={active?.id === "ovar" ? "#db2777" : "#ec4899"}
            strokeWidth="1.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[6])}
            onMouseLeave={() => setActive(null)}
          />
        </g>

        {/* Gonaden - Hoden (below body, bilateral) */}
        <g id="hoden-group">
          <ellipse
            cx="245"
            cy="608"
            rx="10"
            ry="14"
            fill={active?.id === "hoden" ? "#f472b6" : "#ec4899"}
            stroke={active?.id === "hoden" ? "#db2777" : "#ec4899"}
            strokeWidth="1.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[7])}
            onMouseLeave={() => setActive(null)}
            opacity="0.7"
          />
          <ellipse
            cx="290"
            cy="608"
            rx="10"
            ry="14"
            fill={active?.id === "hoden" ? "#f472b6" : "#ec4899"}
            stroke={active?.id === "hoden" ? "#db2777" : "#ec4899"}
            strokeWidth="1.5"
            className="cursor-pointer transition-all duration-200 hover:opacity-80"
            onMouseEnter={() => setActive(parts[7])}
            onMouseLeave={() => setActive(null)}
            opacity="0.7"
          />
        </g>

        {/* Feedback: Hypophyse → Gonaden (HPG axis) */}
        <path
          d="M 262 54 Q 250 180, 230 375"
          stroke="#ec4899"
          strokeWidth="1"
          strokeDasharray="3,2"
          markerEnd="url(#arrowhead-pink)"
          opacity="0.5"
          fill="none"
        />

        {/* Labels with leader lines */}

        {/* Hypothalamus label */}
        <line x1="275.5" y1="38" x2="320" y2="25" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="325" y="28" fontSize="9" fill="#4b5563" className="dark:fill-gray-400">Hypothalamus</text>

        {/* Hypophyse label */}
        <line x1="274.5" y1="50" x2="320" y2="50" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="325" y="53" fontSize="9" fill="#4b5563" className="dark:fill-gray-400">Hypophyse</text>

        {/* Schilddrüse label */}
        <line x1="278" y1="82" x2="330" y2="82" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="335" y="85" fontSize="9" fill="#4b5563" className="dark:fill-gray-400">Schilddrüse</text>

        {/* Nebenschilddrüse label */}
        <line x1="280" y1="81" x2="350" y2="70" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="355" y="73" fontSize="8" fill="#4b5563" className="dark:fill-gray-400">Nebenschilddrüse</text>

        {/* Nebenniere label */}
        <line x1="315" y1="250" x2="360" y2="250" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="365" y="253" fontSize="9" fill="#4b5563" className="dark:fill-gray-400">Nebenniere</text>

        {/* Pankreas label */}
        <line x1="220" y1="285" x2="150" y2="285" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="80" y="288" fontSize="9" fill="#4b5563" className="dark:fill-gray-400">Pankreas</text>

        {/* Ovar label */}
        <line x1="222" y1="380" x2="160" y2="380" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="120" y="383" fontSize="9" fill="#4b5563" className="dark:fill-gray-400">Ovar</text>

        {/* Hoden label */}
        <line x1="255" y1="608" x2="310" y2="608" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="2,2" />
        <text x="315" y="611" fontSize="9" fill="#4b5563" className="dark:fill-gray-400">Hoden</text>

        {/* Axis labels */}
        <text x="10" y="120" fontSize="8" fill="#6b7280" className="dark:fill-gray-500" fontStyle="italic">HPA-Achse</text>
        <text x="10" y="80" fontSize="8" fill="#6b7280" className="dark:fill-gray-500" fontStyle="italic">HPT-Achse</text>
        <text x="10" y="200" fontSize="8" fill="#6b7280" className="dark:fill-gray-500" fontStyle="italic">HPG-Achse</text>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowhead-purple"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#9333ea" />
          </marker>
          <marker
            id="arrowhead-blue"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#3b82f6" />
          </marker>
          <marker
            id="arrowhead-orange"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#f97316" />
          </marker>
          <marker
            id="arrowhead-pink"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#ec4899" />
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
