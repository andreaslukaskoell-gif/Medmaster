import { useState } from "react";

const parts = [
  // Prokaryot (left)
  {
    id: "pro-zellwand",
    label: "Zellwand (Murein)",
    detail: "Peptidoglykan-Schicht. Gibt Stabilität und Form. Typisch für Bakterien.",
  },
  {
    id: "pro-membran",
    label: "Zellmembran",
    detail: "Phospholipid-Doppelschicht. Reguliert Stoffaustausch.",
  },
  {
    id: "pro-nucleoid",
    label: "Nucleoid",
    detail: "Ringförmige DNA (zirkulär), nicht membranumschlossen. Kein echter Zellkern.",
  },
  {
    id: "pro-plasmid",
    label: "Plasmide",
    detail: "Kleine zirkuläre DNA-Moleküle. Enthalten oft Resistenzgene.",
  },
  {
    id: "pro-ribosom",
    label: "Ribosomen (70S)",
    detail: "Proteinsynthese. Kleinere 70S-Ribosomen (50S + 30S Untereinheiten).",
  },
  {
    id: "pro-flagellum",
    label: "Flagellum",
    detail: "Bewegungsorganell. Rotation durch Protonengradienten angetrieben.",
  },
  {
    id: "pro-pili",
    label: "Pili",
    detail: "Anheftungsstrukturen. Wichtig für Konjugation (DNA-Transfer).",
  },
  {
    id: "pro-kapsel",
    label: "Kapsel",
    detail: "Polysaccharid-Schicht außerhalb der Zellwand. Schutz vor Phagocytose.",
  },

  // Eukaryot (right)
  {
    id: "euk-membran",
    label: "Zellmembran",
    detail: "Phospholipid-Doppelschicht. Reguliert Stoffaustausch.",
  },
  {
    id: "euk-kern",
    label: "Zellkern",
    detail: "Doppelmembran (Kernhülle) mit Kernporen. Enthält lineare DNA in Chromosomen.",
  },
  {
    id: "euk-dna",
    label: "DNA + Histone",
    detail: "Lineare DNA organisiert in Chromosomen. Mit Histonproteinen verpackt (Chromatin).",
  },
  {
    id: "euk-er-rau",
    label: "Raues ER",
    detail: "Endoplasmatisches Retikulum mit Ribosomen. Proteinsynthese und -modifikation.",
  },
  {
    id: "euk-er-glatt",
    label: "Glattes ER",
    detail: "ER ohne Ribosomen. Lipidsynthese, Entgiftung, Ca²⁺-Speicherung.",
  },
  {
    id: "euk-golgi",
    label: "Golgi-Apparat",
    detail: "Modifikation, Sortierung und Verpackung von Proteinen und Lipiden.",
  },
  {
    id: "euk-mito",
    label: "Mitochondrien",
    detail: "Doppelmembran. ATP-Synthese (Zellatmung). Eigene DNA und Ribosomen (70S).",
  },
  {
    id: "euk-ribosom",
    label: "Ribosomen (80S)",
    detail: "Proteinsynthese. Größere 80S-Ribosomen (60S + 40S Untereinheiten).",
  },
];

type Part = (typeof parts)[number];

export default function ProkaryoteVsEukaryote() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Prokaryot vs. Eukaryot
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Strukturen für Details.</p>

      <svg viewBox="0 0 700 420" className="w-full max-w-3xl mx-auto">
        <title>Prokaryoten vs. Eukaryoten — Strukturvergleich</title>
        <defs>
          {/* Gradients for depth */}
          <linearGradient id="prokGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="eukGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="nucleusGrad">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Title and size comparison */}
        <text
          x="140"
          y="25"
          fontSize="16"
          fontWeight="bold"
          fill="currentColor"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
        >
          Prokaryot
        </text>
        <text
          x="140"
          y="45"
          fontSize="11"
          fill="currentColor"
          textAnchor="middle"
          className="fill-gray-600 dark:fill-gray-400"
        >
          (1-10 μm)
        </text>

        <text
          x="520"
          y="25"
          fontSize="16"
          fontWeight="bold"
          fill="currentColor"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
        >
          Eukaryot
        </text>
        <text
          x="520"
          y="45"
          fontSize="11"
          fill="currentColor"
          textAnchor="middle"
          className="fill-gray-600 dark:fill-gray-400"
        >
          (10-100 μm)
        </text>

        {/* Divider line */}
        <line
          x1="340"
          y1="60"
          x2="340"
          y2="410"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4,4"
          className="stroke-gray-300 dark:stroke-gray-600"
        />

        {/* ========== PROKARYOT (LEFT) ========== */}

        {/* Kapsel (outermost) */}
        <ellipse
          cx="140"
          cy="230"
          rx="95"
          ry="95"
          fill="none"
          stroke="#0891b2"
          strokeWidth="3"
          strokeDasharray="5,3"
          className="cursor-pointer transition-all hover:stroke-[4]"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "pro-kapsel")!)}
          onMouseLeave={() => setActive(null)}
        />

        {/* Zellwand */}
        <ellipse
          cx="140"
          cy="230"
          rx="85"
          ry="85"
          fill="url(#prokGrad)"
          stroke="#0ea5e9"
          strokeWidth="4"
          className="cursor-pointer transition-all hover:stroke-[5]"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "pro-zellwand")!)}
          onMouseLeave={() => setActive(null)}
        />

        {/* Zellmembran */}
        <ellipse
          cx="140"
          cy="230"
          rx="78"
          ry="78"
          fill="none"
          stroke="#0284c7"
          strokeWidth="2"
          className="cursor-pointer transition-all hover:stroke-[3]"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "pro-membran")!)}
          onMouseLeave={() => setActive(null)}
        />

        {/* Cytoplasma background */}
        <ellipse
          cx="140"
          cy="230"
          rx="70"
          ry="70"
          fill="#e0f2fe"
          className="dark:fill-gray-800"
          opacity="0.6"
        />

        {/* Nucleoid (ring DNA) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "pro-nucleoid")!)}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M 130 210 Q 150 200, 170 210 Q 180 230, 170 250 Q 150 260, 130 250 Q 120 230, 130 210 Z"
            fill="#06b6d4"
            opacity="0.4"
            stroke="#0891b2"
            strokeWidth="1.5"
          />
          {/* DNA strands */}
          <circle cx="145" cy="225" r="2" fill="#0891b2" />
          <circle cx="150" cy="235" r="2" fill="#0891b2" />
          <circle cx="140" cy="240" r="2" fill="#0891b2" />
          <circle cx="155" cy="228" r="2" fill="#0891b2" />
        </g>

        {/* Plasmide (small circles) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "pro-plasmid")!)}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="100" cy="200" r="5" fill="none" stroke="#0891b2" strokeWidth="1.5" />
          <circle cx="180" cy="260" r="4" fill="none" stroke="#0891b2" strokeWidth="1.5" />
          <circle cx="110" cy="270" r="4.5" fill="none" stroke="#0891b2" strokeWidth="1.5" />
        </g>

        {/* Ribosomen 70S (small dots) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "pro-ribosom")!)}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="120" cy="220" r="2.5" fill="#0c4a6e" />
          <circle cx="160" cy="210" r="2.5" fill="#0c4a6e" />
          <circle cx="130" cy="250" r="2.5" fill="#0c4a6e" />
          <circle cx="165" cy="245" r="2.5" fill="#0c4a6e" />
          <circle cx="145" cy="260" r="2.5" fill="#0c4a6e" />
          <circle cx="105" cy="235" r="2.5" fill="#0c4a6e" />
        </g>

        {/* Flagellum */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "pro-flagellum")!)}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M 225 230 Q 240 210, 260 215 Q 280 218, 295 205"
            fill="none"
            stroke="#0891b2"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Pili */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "pro-pili")!)}
          onMouseLeave={() => setActive(null)}
        >
          <line x1="195" y1="170" x2="210" y2="150" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="180" y1="290" x2="190" y2="310" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="75" y1="260" x2="60" y2="275" stroke="#0891b2" strokeWidth="1.5" />
        </g>

        {/* ========== EUKARYOT (RIGHT) ========== */}

        {/* Zellmembran */}
        <ellipse
          cx="520"
          cy="240"
          rx="120"
          ry="120"
          fill="url(#eukGrad)"
          stroke="#10b981"
          strokeWidth="3"
          className="cursor-pointer transition-all hover:stroke-[4]"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "euk-membran")!)}
          onMouseLeave={() => setActive(null)}
        />

        {/* Cytoplasma */}
        <ellipse
          cx="520"
          cy="240"
          rx="113"
          ry="113"
          fill="#d1fae5"
          className="dark:fill-gray-800"
          opacity="0.5"
        />

        {/* Zellkern mit Kernhülle */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "euk-kern")!)}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="520" cy="240" r="45" fill="url(#nucleusGrad)" />
          <circle
            cx="520"
            cy="240"
            r="45"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="3"
            strokeDasharray="2,2"
          />
          {/* Kernporen */}
          <circle cx="495" cy="220" r="2" fill="#8b5cf6" />
          <circle cx="545" cy="235" r="2" fill="#8b5cf6" />
          <circle cx="510" cy="265" r="2" fill="#8b5cf6" />
        </g>

        {/* DNA + Histone (im Kern) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "euk-dna")!)}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M 505 235 Q 515 230, 525 235 M 510 245 Q 520 240, 530 245"
            stroke="#7c3aed"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="515" cy="232" r="2" fill="#7c3aed" />
          <circle cx="520" cy="243" r="2" fill="#7c3aed" />
        </g>

        {/* Mitochondrien */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "euk-mito")!)}
          onMouseLeave={() => setActive(null)}
        >
          {/* Mito 1 */}
          <ellipse
            cx="460"
            cy="200"
            rx="20"
            ry="12"
            fill="#f59e0b"
            opacity="0.3"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <path
            d="M 445 200 Q 450 195, 455 200 M 455 200 Q 460 195, 465 200 M 465 200 Q 470 195, 475 200"
            stroke="#f59e0b"
            strokeWidth="1"
            fill="none"
          />

          {/* Mito 2 */}
          <ellipse
            cx="580"
            cy="270"
            rx="20"
            ry="12"
            fill="#f59e0b"
            opacity="0.3"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <path
            d="M 565 270 Q 570 265, 575 270 M 575 270 Q 580 265, 585 270 M 585 270 Q 590 265, 595 270"
            stroke="#f59e0b"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* Raues ER */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "euk-er-rau")!)}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M 440 240 Q 430 245, 425 250 Q 430 255, 440 260"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
          />
          <path
            d="M 445 245 Q 435 250, 430 255 Q 435 260, 445 265"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
          />
          {/* Ribosomen on ER */}
          <circle cx="435" cy="247" r="2" fill="#4f46e5" />
          <circle cx="440" cy="252" r="2" fill="#4f46e5" />
          <circle cx="432" cy="257" r="2" fill="#4f46e5" />
        </g>

        {/* Glattes ER */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "euk-er-glatt")!)}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M 440 310 Q 430 315, 425 320 Q 430 325, 440 330"
            fill="none"
            stroke="#818cf8"
            strokeWidth="2"
          />
          <path d="M 445 315 Q 435 320, 430 325" fill="none" stroke="#818cf8" strokeWidth="2" />
        </g>

        {/* Golgi-Apparat */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "euk-golgi")!)}
          onMouseLeave={() => setActive(null)}
        >
          <path d="M 590 210 Q 600 210, 605 215" fill="none" stroke="#ec4899" strokeWidth="2" />
          <path d="M 592 217 Q 602 217, 607 222" fill="none" stroke="#ec4899" strokeWidth="2" />
          <path d="M 594 224 Q 604 224, 609 229" fill="none" stroke="#ec4899" strokeWidth="2" />
        </g>

        {/* Ribosomen 80S (larger dots) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts.find((p) => p.id === "euk-ribosom")!)}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="480" cy="280" r="3" fill="#4f46e5" />
          <circle cx="550" cy="300" r="3" fill="#4f46e5" />
          <circle cx="560" cy="190" r="3" fill="#4f46e5" />
          <circle cx="490" cy="320" r="3" fill="#4f46e5" />
        </g>

        {/* ========== LABELS ========== */}

        {/* Prokaryot labels */}
        <text
          x="50"
          y="140"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Kapsel
        </text>
        <line
          x1="90"
          y1="145"
          x2="110"
          y2="165"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="240"
          y="100"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Zellwand
        </text>
        <line
          x1="240"
          y1="105"
          x2="210"
          y2="165"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="35"
          y="230"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Nucleoid
        </text>
        <line
          x1="70"
          y1="230"
          x2="90"
          y2="230"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="245"
          y="200"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Plasmide
        </text>
        <line
          x1="245"
          y1="205"
          x2="185"
          y2="260"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="305"
          y="220"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Flagellum
        </text>
        <line
          x1="305"
          y1="225"
          x2="295"
          y2="208"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="215"
          y="150"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Pili
        </text>
        <line
          x1="215"
          y1="155"
          x2="210"
          y2="150"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        {/* Eukaryot labels */}
        <text
          x="620"
          y="130"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Zellkern
        </text>
        <line
          x1="620"
          y1="135"
          x2="555"
          y2="210"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="390"
          y="190"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Mitochondrium
        </text>
        <line
          x1="420"
          y1="195"
          x2="445"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="360"
          y="245"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Raues ER
        </text>
        <line
          x1="390"
          y1="250"
          x2="425"
          y2="250"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="360"
          y="325"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Glattes ER
        </text>
        <line
          x1="395"
          y1="325"
          x2="425"
          y2="320"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="625"
          y="215"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Golgi
        </text>
        <line
          x1="625"
          y1="220"
          x2="610"
          y2="220"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="575"
          y="305"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Ribosomen 80S
        </text>
        <line
          x1="575"
          y1="310"
          x2="555"
          y2="302"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />

        <text
          x="85"
          y="215"
          fontSize="10"
          stroke="white"
          strokeWidth="3"
          paintOrder="stroke"
          className="fill-gray-600 dark:fill-gray-400"
        >
          Ribosomen 70S
        </text>
        <line
          x1="115"
          y1="215"
          x2="120"
          y2="220"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className="stroke-gray-400"
        />
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
