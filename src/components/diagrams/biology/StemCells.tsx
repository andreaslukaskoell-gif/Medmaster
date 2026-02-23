import { useState } from "react";

const parts = [
  {
    id: "totipotent",
    label: "Totipotente Stammzelle (Zygote)",
    detail:
      "Kann sich zu ALLEN Zelltypen entwickeln, inkl. extraembryonales Gewebe (Plazenta). Entsteht in den ersten Teilungen nach der Befruchtung.",
  },
  {
    id: "pluripotent",
    label: "Pluripotente Stammzelle (Embryonale SZ)",
    detail:
      "Innere Zellmasse der Blastozyste. Kann sich zu allen 3 Keimblättern differenzieren, aber NICHT zu extraembryonalem Gewebe.",
  },
  {
    id: "multipotent-haema",
    label: "Hämatopoetische Stammzelle",
    detail:
      "Multipotent. Differenziert sich zu allen Blutzellen: Erythrozyten, Leukozyten, Thrombozyten.",
  },
  {
    id: "multipotent-mesen",
    label: "Mesenchymale Stammzelle",
    detail:
      "Multipotent. Differenziert sich zu Bindegewebszellen: Osteoblasten (Knochen), Chondrozyten (Knorpel), Adipozyten (Fett).",
  },
  {
    id: "multipotent-neural",
    label: "Neurale Stammzelle",
    detail: "Multipotent. Differenziert sich zu Nervenzellen: Neuronen und Gliazellen.",
  },
  {
    id: "erythrocyte",
    label: "Erythrozyten",
    detail:
      "Rote Blutkörperchen (RBK). Kern- und organellenlos; bikonkave Form ↑ Oberfläche. Hämoglobin HbA (α₂β₂) bindet O₂ kooperativ. Lebensdauer ~120 Tage → Abbau in Milz. Normalwert: 4,5–5,5 Mio./μL.",
  },
  {
    id: "leukocyte",
    label: "Leukozyten",
    detail:
      "Weiße Blutkörperchen (Normalwert 4–10 × 10⁹/L). Lymphozyten (B-, T-, NK-Zellen), Granulozyten (neutrophil, eosinophil, basophil) und Monozyten. Spezifische und unspezifische Immunabwehr.",
  },
  {
    id: "thrombocyte",
    label: "Thrombozyten",
    detail:
      "Blutplättchen. Kernlose Zellbruchstücke von Megakaryozyten (Knochenmark). 150.000–400.000/μL. Primäre Hämostase: Adhäsion (vWF/GPIb), Aktivierung, Aggregation → Plättchenthrombus.",
  },
  {
    id: "osteoblast",
    label: "Osteoblasten",
    detail:
      "Knochenbildende Zellen aus mesenchymalen SZ. Synthetisieren Kollagen Typ I und Osteocalcin → Knochenmatrix. Bei vollständiger Einmauerung: Differenzierung zu Osteozyten. Reguliert durch PTH (+) und Calcitonin.",
  },
  {
    id: "chondrocyte",
    label: "Chondrozyten",
    detail:
      "Knorpelzellen in lakunären Höhlen der Knorpelmatrix. Produzieren Kollagen Typ II und Aggrekan (Proteoglykan). Avaskulär → Ernährung durch Diffusion. Hyaliner Knorpel: Gelenke, Luftwege, Rippenknorpel.",
  },
  {
    id: "adipocyte",
    label: "Adipozyten",
    detail:
      "Fettzellen. Unilokulär: ein großer Lipidtropfen (Triglyceride). Endokrin aktiv: Leptin (Sättigungssignal), Adiponectin (Insulinsensitivität ↑). Braunes Fettgewebe (UCP1): Thermogenese durch entkoppelte Atmung.",
  },
  {
    id: "neuron",
    label: "Neuronen",
    detail:
      "Nervenzellen. Soma + Dendriten (Eingang) + Axon (Ausgang). Aktionspotenziale via spannungsgesteuerte Na⁺/K⁺-Kanäle. Myelinisiert: saltatorische Erregungsleitung (Schwann-Zellen/Oligodendrozyten). Chemische Synapsen: Neurotransmitter.",
  },
  {
    id: "glia",
    label: "Gliazellen",
    detail:
      "Stützzellen: Astrozyten (Blut-Hirn-Schranke, K⁺-Pufferung), Oligodendrozyten (Myelinisierung ZNS), Schwann-Zellen (Myelinisierung PNS), Mikroglia (Makrophagen des ZNS). Keine Aktionspotenziale.",
  },
];

type Part = (typeof parts)[number];

export default function StemCells() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Stammzellen &amp; Differenzierung
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Zelltypen für Details.</p>
      <svg viewBox="0 0 600 500" className="w-full max-w-2xl mx-auto">
        {/* Background labels for differentiation levels */}
        <text x="10" y="25" fontSize="11" fill="#6b7280" fontWeight="600">
          Totipotent
        </text>
        <text x="10" y="95" fontSize="11" fill="#6b7280" fontWeight="600">
          Pluripotent
        </text>
        <text x="10" y="195" fontSize="11" fill="#6b7280" fontWeight="600">
          Multipotent
        </text>
        <text x="10" y="330" fontSize="11" fill="#6b7280" fontWeight="600">
          Unipotent/Spezialisiert
        </text>

        {/* Level 1: Totipotent - Zygote */}
        <circle
          cx="300"
          cy="50"
          r="22"
          fill="#7c3aed"
          stroke="#5b21b6"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[0])}
          onMouseLeave={() => setActive(null)}
        />
        <circle
          cx="300"
          cy="50"
          r="16"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <text x="300" y="55" fontSize="10" fill="white" textAnchor="middle" fontWeight="600">
          Z
        </text>
        <text x="350" y="50" fontSize="10" fill="#6b7280" className="pointer-events-none">
          Zygote
        </text>

        {/* Arrow down to pluripotent */}
        <path d="M 300 72 L 300 95" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Level 2: Pluripotent - Embryonale SZ */}
        <circle
          cx="300"
          cy="120"
          r="20"
          fill="#3b82f6"
          stroke="#1d4ed8"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[1])}
          onMouseLeave={() => setActive(null)}
        />
        <circle
          cx="300"
          cy="120"
          r="14"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <text x="300" y="125" fontSize="9" fill="white" textAnchor="middle" fontWeight="600">
          ESZ
        </text>

        {/* Arrows to multipotent cells */}
        <path
          d="M 285 138 L 180 195"
          stroke="#9ca3af"
          strokeWidth="1.8"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 300 140 L 300 195"
          stroke="#9ca3af"
          strokeWidth="1.8"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 315 138 L 420 195"
          stroke="#9ca3af"
          strokeWidth="1.8"
          markerEnd="url(#arrowhead)"
        />

        {/* Level 3: Multipotent cells */}

        {/* Hämatopoetische SZ */}
        <circle
          cx="180"
          cy="220"
          r="18"
          fill="#10b981"
          stroke="#059669"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[2])}
          onMouseLeave={() => setActive(null)}
        />
        <circle
          cx="180"
          cy="220"
          r="12"
          fill="none"
          stroke="#34d399"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <text x="180" y="224" fontSize="8" fill="white" textAnchor="middle" fontWeight="600">
          HSZ
        </text>
        <text
          x="180"
          y="242"
          fontSize="9"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Hämatopoetisch
        </text>

        {/* Mesenchymale SZ */}
        <circle
          cx="300"
          cy="220"
          r="18"
          fill="#10b981"
          stroke="#059669"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[3])}
          onMouseLeave={() => setActive(null)}
        />
        <circle
          cx="300"
          cy="220"
          r="12"
          fill="none"
          stroke="#34d399"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <text x="300" y="224" fontSize="8" fill="white" textAnchor="middle" fontWeight="600">
          MSZ
        </text>
        <text
          x="300"
          y="242"
          fontSize="9"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Mesenchymal
        </text>

        {/* Neurale SZ */}
        <circle
          cx="420"
          cy="220"
          r="18"
          fill="#10b981"
          stroke="#059669"
          strokeWidth="2"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[4])}
          onMouseLeave={() => setActive(null)}
        />
        <circle
          cx="420"
          cy="220"
          r="12"
          fill="none"
          stroke="#34d399"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <text x="420" y="224" fontSize="8" fill="white" textAnchor="middle" fontWeight="600">
          NSZ
        </text>
        <text
          x="420"
          y="242"
          fontSize="9"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Neural
        </text>

        {/* Arrows from multipotent to specialized cells */}
        {/* From HSZ */}
        <path
          d="M 165 235 L 100 350"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 180 238 L 180 350"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 195 235 L 260 350"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />

        {/* From MSZ */}
        <path
          d="M 285 235 L 280 350"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 300 238 L 340 350"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 315 235 L 400 350"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />

        {/* From NSZ */}
        <path
          d="M 405 235 L 460 350"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 435 235 L 520 350"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />

        {/* Level 4: Specialized cells */}

        {/* Erythrozyten (biconcave disc) */}
        <ellipse
          cx="100"
          cy="375"
          rx="15"
          ry="8"
          fill="#ef4444"
          stroke="#dc2626"
          strokeWidth="1.5"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[5])}
          onMouseLeave={() => setActive(null)}
        />
        <ellipse cx="100" cy="375" rx="8" ry="4" fill="#fca5a5" opacity="0.6" />
        <text
          x="100"
          y="395"
          fontSize="8"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Erythrozyten
        </text>

        {/* Leukozyten (irregular shape) */}
        <circle
          cx="180"
          cy="375"
          r="12"
          fill="#ef4444"
          stroke="#dc2626"
          strokeWidth="1.5"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[6])}
          onMouseLeave={() => setActive(null)}
        />
        <circle cx="176" cy="375" r="4" fill="#7c2d12" opacity="0.7" />
        <circle cx="184" cy="375" r="3" fill="#7c2d12" opacity="0.7" />
        <text
          x="180"
          y="395"
          fontSize="8"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Leukozyten
        </text>

        {/* Thrombozyten (small fragments) */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[7])}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="255" cy="375" r="6" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
          <circle cx="265" cy="375" r="5" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
          <circle cx="260" cy="383" r="4" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        </g>
        <text
          x="260"
          y="400"
          fontSize="8"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Thrombozyten
        </text>

        {/* Osteoblasten (cuboidal) */}
        <rect
          x="270"
          y="365"
          width="20"
          height="20"
          rx="2"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="1.5"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[8])}
          onMouseLeave={() => setActive(null)}
        />
        <circle cx="280" cy="375" r="4" fill="#7c2d12" opacity="0.6" />
        <text
          x="280"
          y="402"
          fontSize="8"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Osteoblasten
        </text>

        {/* Chondrozyten (rounded) */}
        <ellipse
          cx="340"
          cy="375"
          rx="14"
          ry="11"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="1.5"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[9])}
          onMouseLeave={() => setActive(null)}
        />
        <circle cx="340" cy="375" r="5" fill="#7c2d12" opacity="0.5" />
        <text
          x="340"
          y="395"
          fontSize="8"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Chondrozyten
        </text>

        {/* Adipozyten (lipid droplet) */}
        <circle
          cx="400"
          cy="375"
          r="13"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="1.5"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[10])}
          onMouseLeave={() => setActive(null)}
        />
        <circle cx="400" cy="375" r="10" fill="#fed7aa" />
        <circle cx="397" cy="368" r="2" fill="#7c2d12" opacity="0.7" />
        <text
          x="400"
          y="398"
          fontSize="8"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Adipozyten
        </text>

        {/* Neuronen (with axon) */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[11])}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="460" cy="375" r="10" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
          <line x1="470" y1="375" x2="485" y2="375" stroke="#1d4ed8" strokeWidth="2" />
          <polygon points="485,375 480,372 480,378" fill="#1d4ed8" />
          <circle cx="460" cy="375" r="4" fill="#7c2d12" opacity="0.6" />
        </g>
        <text
          x="460"
          y="398"
          fontSize="8"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Neuronen
        </text>

        {/* Gliazellen (star-shaped) */}
        <g
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onMouseEnter={() => setActive(parts[12])}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="520" cy="375" r="8" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
          <line x1="520" y1="367" x2="520" y2="360" stroke="#1d4ed8" strokeWidth="2" />
          <line x1="520" y1="383" x2="520" y2="390" stroke="#1d4ed8" strokeWidth="2" />
          <line x1="512" y1="375" x2="505" y2="375" stroke="#1d4ed8" strokeWidth="2" />
          <line x1="528" y1="375" x2="535" y2="375" stroke="#1d4ed8" strokeWidth="2" />
          <line x1="514" y1="369" x2="509" y2="364" stroke="#1d4ed8" strokeWidth="1.5" />
          <line x1="526" y1="381" x2="531" y2="386" stroke="#1d4ed8" strokeWidth="1.5" />
        </g>
        <text
          x="520"
          y="403"
          fontSize="8"
          fill="#6b7280"
          textAnchor="middle"
          className="pointer-events-none"
        >
          Gliazellen
        </text>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#9ca3af" />
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
