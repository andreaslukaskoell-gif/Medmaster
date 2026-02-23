import { useState } from "react";

const parts = [
  // Mitochondrium
  {
    id: "mito-outer",
    label: "Äußere Membran",
    detail: "Permeabel durch Porine – ermöglicht Durchgang kleiner Moleküle (<5 kDa)",
  },
  {
    id: "mito-inner",
    label: "Innere Membran",
    detail:
      "Stark gefaltet (Cristae) – Oberflächenvergrößerung für Atmungskette mit Komplex I-IV und ATP-Synthase",
  },
  {
    id: "mito-matrix",
    label: "Matrix",
    detail: "Eigene ringförmige DNA (mtDNA), 70S Ribosomen, Enzyme des Citratzyklus",
  },
  {
    id: "mito-intermembran",
    label: "Intermembranraum",
    detail: "H⁺-Gradient durch Atmungskette – treibt Chemiosmose und ATP-Synthase an",
  },
  {
    id: "mito-function",
    label: "Mitochondrium",
    detail:
      "ATP-Produktion durch oxidative Phosphorylierung, ~36 ATP pro Glukose. Endosymbionten-Ursprung",
  },

  // Chloroplast
  { id: "chloro-outer", label: "Äußere Membran", detail: "Permeabel – umgibt das Chloroplast" },
  {
    id: "chloro-inner",
    label: "Innere Membran",
    detail: "Selektiv permeabel – bildet Barriere zum Stroma",
  },
  {
    id: "chloro-thylakoid",
    label: "Thylakoid-Membran",
    detail: "Grana = Thylakoid-Stapel. Lichtreaktion der Photosynthese (Photosysteme I + II)",
  },
  {
    id: "chloro-stroma",
    label: "Stroma",
    detail: "Eigene DNA, 70S Ribosomen, Calvin-Zyklus (Dunkelreaktion) – CO₂-Fixierung zu Glucose",
  },
  {
    id: "chloro-function",
    label: "Chloroplast",
    detail:
      "Photosynthese: Lichtenergie → chemische Energie (ATP, NADPH) → Glucose. Nur in Pflanzenzellen",
  },

  // Zellkern
  {
    id: "nucleus-envelope",
    label: "Kernhülle",
    detail: "Doppelmembran – kontinuierlich mit dem Endoplasmatischen Retikulum (ER)",
  },
  {
    id: "nucleus-pore",
    label: "Kernporen",
    detail: "Regulierter bidirektionaler Transport (mRNA raus, Proteine rein) – Kernporenkomplex",
  },
  {
    id: "nucleus-nucleolus",
    label: "Nukleolus",
    detail: "rRNA-Synthese und Ribosomen-Zusammenbau – kein Membran-umschlossenes Organell",
  },
  {
    id: "nucleus-chromatin",
    label: "Chromatin",
    detail: "DNA + Histone → Nukleosomen. Kondensiert zu Chromosomen bei Zellteilung",
  },
  {
    id: "nucleus-lamina",
    label: "Kernlamina",
    detail: "Proteinnetzwerk – stabilisiert Kernhülle, organisiert Chromatin",
  },
  {
    id: "nucleus-function",
    label: "Zellkern",
    detail:
      "Speicherung und Regulation der genetischen Information. Steuerung von Transkription und Replikation",
  },

  // Endosymbiontentheorie
  {
    id: "endosymbiont",
    label: "Endosymbiontentheorie",
    detail:
      "Mitochondrien und Chloroplasten stammen von freilebenden Prokaryoten ab: eigene DNA, 70S Ribosomen, Doppelmembran, eigenständige Teilung",
  },
];

type Part = (typeof parts)[number];

export default function DoubleMembraneOrganelles() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Doppelmembran-Organellen
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Organellen für Details.</p>
      <svg viewBox="0 0 800 500" className="w-full max-w-4xl mx-auto">
        {/* Background */}
        <rect width="800" height="500" fill="#f8fafc" className="dark:fill-gray-900" />

        {/* Title */}
        <text
          x="400"
          y="25"
          textAnchor="middle"
          className="fill-gray-800 dark:fill-gray-200 text-sm font-semibold"
        >
          Doppelmembran-Organellen
        </text>

        {/* ==================== MITOCHONDRIUM (LEFT) ==================== */}
        <g id="mitochondrium">
          {/* Outer membrane */}
          <ellipse
            cx="140"
            cy="250"
            rx="90"
            ry="60"
            fill="#fee2e2"
            stroke="#dc2626"
            strokeWidth="2"
            className="cursor-pointer hover:fill-red-100 dark:hover:fill-red-900/40 transition-colors"
            onClick={() => setActive(parts.find((p) => p.id === "mito-outer")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "mito-outer")!)}
          />

          {/* Inner membrane with cristae folds */}
          <path
            d="M 60,250 Q 70,230 85,240 T 105,250 T 125,240 T 145,250 T 165,240 T 185,250 T 205,240 T 220,250"
            fill="none"
            stroke="#b91c1c"
            strokeWidth="2.5"
            className="cursor-pointer"
            onClick={() => setActive(parts.find((p) => p.id === "mito-inner")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "mito-inner")!)}
          />
          <path
            d="M 70,265 Q 80,275 95,270 T 115,265 T 135,270 T 155,265 T 175,270 T 195,265 T 210,270"
            fill="none"
            stroke="#b91c1c"
            strokeWidth="2.5"
            className="cursor-pointer"
            onClick={() => setActive(parts.find((p) => p.id === "mito-inner")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "mito-inner")!)}
          />

          {/* Cristae folds */}
          <path d="M 85,240 L 85,250 L 80,248" fill="none" stroke="#991b1b" strokeWidth="1.5" />
          <path d="M 125,240 L 125,250 L 120,248" fill="none" stroke="#991b1b" strokeWidth="1.5" />
          <path d="M 165,240 L 165,250 L 160,248" fill="none" stroke="#991b1b" strokeWidth="1.5" />
          <path d="M 205,240 L 205,250 L 200,248" fill="none" stroke="#991b1b" strokeWidth="1.5" />

          {/* Matrix with mtDNA */}
          <circle
            cx="140"
            cy="255"
            r="8"
            fill="#7f1d1d"
            stroke="#450a0a"
            strokeWidth="1"
            className="cursor-pointer hover:fill-red-900 transition-colors"
            onClick={() => setActive(parts.find((p) => p.id === "mito-matrix")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "mito-matrix")!)}
          />
          <text x="140" y="258" textAnchor="middle" className="fill-white text-[8px]">
            DNA
          </text>

          {/* Ribosomes (70S) */}
          <circle cx="120" cy="255" r="2" fill="#450a0a" />
          <circle cx="160" cy="255" r="2" fill="#450a0a" />
          <circle cx="130" cy="270" r="2" fill="#450a0a" />
          <circle cx="150" cy="270" r="2" fill="#450a0a" />

          {/* Intermembrane space indicator */}
          <rect
            x="55"
            y="235"
            width="15"
            height="10"
            fill="#fca5a5"
            opacity="0.6"
            className="cursor-pointer hover:opacity-100 transition-opacity"
            onClick={() => setActive(parts.find((p) => p.id === "mito-intermembran")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "mito-intermembran")!)}
          />

          {/* Label */}
          <text
            x="140"
            y="330"
            textAnchor="middle"
            className="fill-red-700 dark:fill-red-400 text-sm font-semibold cursor-pointer"
            onClick={() => setActive(parts.find((p) => p.id === "mito-function")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "mito-function")!)}
          >
            Mitochondrium
          </text>
          <text
            x="140"
            y="345"
            textAnchor="middle"
            className="fill-gray-600 dark:fill-gray-400 text-[10px]"
          >
            ATP-Produktion
          </text>
        </g>

        {/* ==================== CHLOROPLAST (CENTER) ==================== */}
        <g id="chloroplast">
          {/* Outer membrane */}
          <ellipse
            cx="400"
            cy="250"
            rx="95"
            ry="65"
            fill="#d1fae5"
            stroke="#059669"
            strokeWidth="2"
            className="cursor-pointer hover:fill-emerald-100 dark:hover:fill-emerald-900/40 transition-colors"
            onClick={() => setActive(parts.find((p) => p.id === "chloro-outer")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "chloro-outer")!)}
          />

          {/* Inner membrane */}
          <ellipse
            cx="400"
            cy="250"
            rx="85"
            ry="55"
            fill="#a7f3d0"
            stroke="#047857"
            strokeWidth="2"
            className="cursor-pointer hover:fill-emerald-200 dark:hover:fill-emerald-800/40 transition-colors"
            onClick={() => setActive(parts.find((p) => p.id === "chloro-inner")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "chloro-inner")!)}
          />

          {/* Thylakoid stacks (Grana) */}
          <g
            className="cursor-pointer"
            onClick={() => setActive(parts.find((p) => p.id === "chloro-thylakoid")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "chloro-thylakoid")!)}
          >
            {/* Left granum */}
            <rect x="340" y="235" width="30" height="3" fill="#065f46" rx="1" />
            <rect x="340" y="240" width="30" height="3" fill="#065f46" rx="1" />
            <rect x="340" y="245" width="30" height="3" fill="#065f46" rx="1" />
            <rect x="340" y="250" width="30" height="3" fill="#065f46" rx="1" />
            <rect x="340" y="255" width="30" height="3" fill="#065f46" rx="1" />

            {/* Right granum */}
            <rect x="430" y="240" width="30" height="3" fill="#065f46" rx="1" />
            <rect x="430" y="245" width="30" height="3" fill="#065f46" rx="1" />
            <rect x="430" y="250" width="30" height="3" fill="#065f46" rx="1" />
            <rect x="430" y="255" width="30" height="3" fill="#065f46" rx="1" />
            <rect x="430" y="260" width="30" height="3" fill="#065f46" rx="1" />

            {/* Connecting thylakoids */}
            <line x1="370" y1="247" x2="430" y2="247" stroke="#047857" strokeWidth="1.5" />
            <line x1="370" y1="253" x2="430" y2="253" stroke="#047857" strokeWidth="1.5" />
          </g>

          {/* Stroma with DNA */}
          <circle
            cx="400"
            cy="275"
            r="7"
            fill="#064e3b"
            stroke="#022c22"
            strokeWidth="1"
            className="cursor-pointer hover:fill-emerald-900 transition-colors"
            onClick={() => setActive(parts.find((p) => p.id === "chloro-stroma")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "chloro-stroma")!)}
          />
          <text x="400" y="278" textAnchor="middle" className="fill-white text-[7px]">
            DNA
          </text>

          {/* 70S Ribosomes */}
          <circle cx="380" cy="275" r="2" fill="#022c22" />
          <circle cx="420" cy="275" r="2" fill="#022c22" />
          <circle cx="390" cy="285" r="2" fill="#022c22" />
          <circle cx="410" cy="285" r="2" fill="#022c22" />

          {/* Label */}
          <text
            x="400"
            y="330"
            textAnchor="middle"
            className="fill-emerald-700 dark:fill-emerald-400 text-sm font-semibold cursor-pointer"
            onClick={() => setActive(parts.find((p) => p.id === "chloro-function")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "chloro-function")!)}
          >
            Chloroplast
          </text>
          <text
            x="400"
            y="345"
            textAnchor="middle"
            className="fill-gray-600 dark:fill-gray-400 text-[10px]"
          >
            Photosynthese
          </text>
        </g>

        {/* ==================== ZELLKERN (RIGHT) ==================== */}
        <g id="nucleus">
          {/* Nuclear envelope (double membrane) */}
          <circle
            cx="660"
            cy="250"
            r="75"
            fill="#ede9fe"
            stroke="#7c3aed"
            strokeWidth="3"
            className="cursor-pointer hover:fill-violet-100 dark:hover:fill-violet-900/40 transition-colors"
            onClick={() => setActive(parts.find((p) => p.id === "nucleus-envelope")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "nucleus-envelope")!)}
          />
          <circle cx="660" cy="250" r="70" fill="none" stroke="#6d28d9" strokeWidth="2" />

          {/* Nuclear pores */}
          <g
            className="cursor-pointer"
            onClick={() => setActive(parts.find((p) => p.id === "nucleus-pore")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "nucleus-pore")!)}
          >
            <circle cx="660" cy="175" r="4" fill="#5b21b6" />
            <circle cx="620" cy="200" r="4" fill="#5b21b6" />
            <circle cx="700" cy="200" r="4" fill="#5b21b6" />
            <circle cx="600" cy="250" r="4" fill="#5b21b6" />
            <circle cx="720" cy="250" r="4" fill="#5b21b6" />
            <circle cx="620" cy="300" r="4" fill="#5b21b6" />
            <circle cx="700" cy="300" r="4" fill="#5b21b6" />
            <circle cx="660" cy="325" r="4" fill="#5b21b6" />
          </g>

          {/* Nucleolus */}
          <circle
            cx="660"
            cy="250"
            r="25"
            fill="#a78bfa"
            stroke="#6d28d9"
            strokeWidth="2"
            className="cursor-pointer hover:fill-violet-400 transition-colors"
            onClick={() => setActive(parts.find((p) => p.id === "nucleus-nucleolus")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "nucleus-nucleolus")!)}
          />
          <text
            x="660"
            y="253"
            textAnchor="middle"
            className="fill-violet-900 dark:fill-violet-100 text-[9px] font-semibold"
          >
            Nukleolus
          </text>

          {/* Chromatin */}
          <g
            className="cursor-pointer"
            onClick={() => setActive(parts.find((p) => p.id === "nucleus-chromatin")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "nucleus-chromatin")!)}
          >
            <path
              d="M 615,220 Q 620,215 625,220 T 635,220"
              fill="none"
              stroke="#4c1d95"
              strokeWidth="2"
            />
            <path
              d="M 690,225 Q 695,220 700,225 T 710,225"
              fill="none"
              stroke="#4c1d95"
              strokeWidth="2"
            />
            <path
              d="M 610,270 Q 615,265 620,270 T 630,270"
              fill="none"
              stroke="#4c1d95"
              strokeWidth="2"
            />
            <path
              d="M 695,275 Q 700,270 705,275 T 715,275"
              fill="none"
              stroke="#4c1d95"
              strokeWidth="2"
            />
          </g>

          {/* Nuclear lamina (inner support) */}
          <circle
            cx="660"
            cy="250"
            r="68"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1"
            strokeDasharray="3,2"
            className="cursor-pointer"
            onClick={() => setActive(parts.find((p) => p.id === "nucleus-lamina")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "nucleus-lamina")!)}
          />

          {/* Label */}
          <text
            x="660"
            y="355"
            textAnchor="middle"
            className="fill-violet-700 dark:fill-violet-400 text-sm font-semibold cursor-pointer"
            onClick={() => setActive(parts.find((p) => p.id === "nucleus-function")!)}
            onMouseEnter={() => setActive(parts.find((p) => p.id === "nucleus-function")!)}
          >
            Zellkern
          </text>
          <text
            x="660"
            y="370"
            textAnchor="middle"
            className="fill-gray-600 dark:fill-gray-400 text-[10px]"
          >
            Genetische Information
          </text>
        </g>

        {/* ==================== ENDOSYMBIONT CONNECTION ==================== */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(parts.find((p) => p.id === "endosymbiont")!)}
          onMouseEnter={() => setActive(parts.find((p) => p.id === "endosymbiont")!)}
        >
          {/* Arrow from Mito to Chloro */}
          <line
            x1="230"
            y1="410"
            x2="310"
            y2="410"
            stroke="#059669"
            strokeWidth="2"
            strokeDasharray="5,3"
          />
          <polygon points="310,410 305,407 305,413" fill="#059669" />

          {/* Label box */}
          <rect
            x="240"
            y="395"
            width="160"
            height="30"
            fill="#fef3c7"
            stroke="#f59e0b"
            strokeWidth="1.5"
            rx="4"
          />
          <text
            x="320"
            y="407"
            textAnchor="middle"
            className="fill-amber-900 text-[9px] font-semibold"
          >
            Endosymbiontentheorie
          </text>
          <text x="320" y="418" textAnchor="middle" className="fill-amber-800 text-[7px]">
            eigene DNA, 70S Ribosomen, Doppelmembran
          </text>
        </g>

        {/* ==================== LEADER LINES & LABELS ==================== */}
        {/* Mitochondrium labels */}
        <line
          x1="55"
          y1="240"
          x2="20"
          y2="220"
          stroke="#999"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text
          x="15"
          y="220"
          textAnchor="end"
          className="fill-gray-700 dark:fill-gray-300 text-[9px]"
        >
          Intermembranraum
        </text>

        <line
          x1="220"
          y1="255"
          x2="260"
          y2="255"
          stroke="#999"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="265" y="258" className="fill-gray-700 dark:fill-gray-300 text-[9px]">
          Matrix
        </text>

        <line
          x1="140"
          y1="190"
          x2="140"
          y2="160"
          stroke="#999"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text
          x="140"
          y="155"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300 text-[9px]"
        >
          Cristae (Innere Membran)
        </text>

        {/* Chloroplast labels */}
        <line
          x1="355"
          y1="245"
          x2="320"
          y2="220"
          stroke="#999"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text
          x="315"
          y="220"
          textAnchor="end"
          className="fill-gray-700 dark:fill-gray-300 text-[9px]"
        >
          Grana
        </text>

        <line
          x1="485"
          y1="250"
          x2="520"
          y2="250"
          stroke="#999"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="525" y="253" className="fill-gray-700 dark:fill-gray-300 text-[9px]">
          Stroma
        </text>

        {/* Nucleus labels */}
        <line
          x1="735"
          y1="250"
          x2="770"
          y2="250"
          stroke="#999"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="775" y="253" className="fill-gray-700 dark:fill-gray-300 text-[9px]">
          Kernhülle
        </text>

        <line
          x1="720"
          y1="200"
          x2="750"
          y2="180"
          stroke="#999"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="755" y="183" className="fill-gray-700 dark:fill-gray-300 text-[9px]">
          Kernporen
        </text>

        <line
          x1="615"
          y1="220"
          x2="580"
          y2="200"
          stroke="#999"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text
          x="575"
          y="200"
          textAnchor="end"
          className="fill-gray-700 dark:fill-gray-300 text-[9px]"
        >
          Chromatin
        </text>

        {/* Legend */}
        <text x="20" y="460" className="fill-gray-600 dark:fill-gray-400 text-[10px] font-semibold">
          Gemeinsame Merkmale (Endosymbionten):
        </text>
        <text x="20" y="475" className="fill-gray-600 dark:fill-gray-400 text-[9px]">
          • Eigene ringförmige DNA (prokaryotisch)
        </text>
        <text x="20" y="487" className="fill-gray-600 dark:fill-gray-400 text-[9px]">
          • 70S Ribosomen (nicht 80S wie Eukaryoten)
        </text>
        <text x="250" y="475" className="fill-gray-600 dark:fill-gray-400 text-[9px]">
          • Doppelmembran
        </text>
        <text x="250" y="487" className="fill-gray-600 dark:fill-gray-400 text-[9px]">
          • Eigenständige Teilung
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
