import { useState } from "react";

const parts = [
  {
    id: "dna",
    label: "DNA-Doppelstrang",
    detail:
      "Matrizenstrang (3'→5') wird abgelesen. Codogener Strang dient als Vorlage für die mRNA.",
  },
  {
    id: "rnapol",
    label: "RNA-Polymerase",
    detail:
      "Enzym, das den DNA-Matrizenstrang abliest und eine komplementäre mRNA synthetisiert (5'→3').",
  },
  {
    id: "mrna",
    label: "mRNA",
    detail:
      "Messenger-RNA: trägt die genetische Information vom Kern zum Ribosom. Codons aus je 3 Basen.",
  },
  {
    id: "ribosom",
    label: "Ribosom",
    detail:
      "Ort der Translation. Besteht aus großer und kleiner Untereinheit. Liest mRNA in 5'→3'-Richtung.",
  },
  {
    id: "trna",
    label: "tRNA",
    detail:
      "Transfer-RNA: bringt passende Aminosäuren. Anticodon paart sich komplementär mit mRNA-Codon.",
  },
  {
    id: "polypeptid",
    label: "Polypeptidkette",
    detail:
      "Wachsende Kette aus Aminosäuren. Peptidbindungen zwischen den Aminosäuren. Wird später zum Protein gefaltet.",
  },
];

type PartInfo = (typeof parts)[number];

export default function TranscriptionTranslation() {
  const [active, setActive] = useState<PartInfo | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Transkription &amp; Translation
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Strukturen für Details.</p>

      <svg viewBox="0 0 480 400" className="w-full max-w-xl mx-auto">
        <title>Transkription und Translation — vom Gen zum Protein</title>
        {/* ===== SECTION 1: TRANSKRIPTION ===== */}
        <rect
          x="10"
          y="10"
          width="460"
          height="165"
          rx="10"
          fill="none"
          stroke="#0d9488"
          strokeWidth="1.5"
          strokeDasharray="6 3"
        />
        <text x="240" y="30" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
          Transkription (im Zellkern)
        </text>

        {/* DNA double strand */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[0])}
          onMouseLeave={() => setActive(null)}
        >
          {/* Template strand 3'→5' */}
          <line x1="40" y1="70" x2="440" y2="70" stroke="#0f766e" strokeWidth="3" />
          <text x="30" y="65" fontSize="7" fill="#0f766e">
            3&apos;
          </text>
          <text x="445" y="65" fontSize="7" fill="#0f766e">
            5&apos;
          </text>
          {/* Coding strand 5'→3' */}
          <line x1="40" y1="80" x2="180" y2="80" stroke="#14b8a6" strokeWidth="3" />
          <line x1="320" y1="80" x2="440" y2="80" stroke="#14b8a6" strokeWidth="3" />
          <text x="30" y="85" fontSize="7" fill="#14b8a6">
            5&apos;
          </text>
          <text x="445" y="85" fontSize="7" fill="#14b8a6">
            3&apos;
          </text>

          {/* Open bubble */}
          <path d="M180,80 Q200,95 220,80" fill="none" stroke="#14b8a6" strokeWidth="2" />
          <path d="M300,80 Q320,95 340,80" fill="none" stroke="#14b8a6" strokeWidth="2" />

          {/* Base pairs (closed regions) */}
          {[60, 80, 100, 120, 140, 160, 360, 380, 400, 420].map((x) => (
            <line key={`bp-${x}`} x1={x} y1={72} x2={x} y2={78} stroke="#99f6e4" strokeWidth="1" />
          ))}
        </g>

        {/* DNA labels */}
        <text x="100" y="58" textAnchor="middle" fontSize="7" fill="#0f766e">
          Matrizenstrang
        </text>
        <text x="100" y="96" textAnchor="middle" fontSize="7" fill="#14b8a6">
          Codogener Strang
        </text>

        {/* RNA Polymerase */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[1])}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse
            cx="250"
            cy="72"
            rx="35"
            ry="20"
            fill="#6366f1"
            opacity="0.8"
            stroke="#4f46e5"
            strokeWidth="1.5"
          />
          <text x="250" y="69" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">
            RNA-
          </text>
          <text x="250" y="79" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">
            Polymerase
          </text>
        </g>

        {/* Growing mRNA */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[2])}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M250,92 Q260,105 270,100 Q290,110 310,105 Q330,115 350,110 Q370,120 390,115"
            fill="none"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Codons on mRNA */}
          {["A", "U", "G", "C", "A", "G", "U", "A", "C"].map((base, i) => (
            <text
              key={`mrna-base-${i}`}
              x={260 + i * 15}
              y={118 + (i % 2) * 6}
              fontSize="7"
              fill="#f97316"
              fontWeight="bold"
            >
              {base}
            </text>
          ))}
          <text x="330" y="138" textAnchor="middle" fontSize="13" fill="#f97316" fontWeight="bold">
            mRNA (5&apos;→3&apos;)
          </text>
        </g>

        {/* Direction arrow */}
        <line x1="215" y1="58" x2="290" y2="58" stroke="#0d9488" strokeWidth="1" />
        <polygon points="290,55 296,58 290,61" fill="#0d9488" />
        <text x="253" y="54" textAnchor="middle" fontSize="6" fill="#0d9488">
          Richtung
        </text>

        {/* Arrow between sections */}
        <line x1="240" y1="176" x2="240" y2="196" stroke="#0d9488" strokeWidth="2" />
        <polygon points="236,196 240,204 244,196" fill="#0d9488" />
        <text x="260" y="193" fontSize="7" fill="#0d9488" fontWeight="bold">
          mRNA wandert zum Ribosom
        </text>

        {/* ===== SECTION 2: TRANSLATION ===== */}
        <rect
          x="10"
          y="205"
          width="460"
          height="185"
          rx="10"
          fill="none"
          stroke="#0d9488"
          strokeWidth="1.5"
          strokeDasharray="6 3"
        />
        <text x="240" y="225" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
          Translation (am Ribosom)
        </text>

        {/* mRNA strand */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[2])}
          onMouseLeave={() => setActive(null)}
        >
          <line
            x1="50"
            y1="300"
            x2="430"
            y2="300"
            stroke="#f97316"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text x="40" y="296" fontSize="7" fill="#f97316">
            5&apos;
          </text>
          <text x="438" y="296" fontSize="7" fill="#f97316">
            3&apos;
          </text>
          {/* Codons */}
          {[
            "A",
            "U",
            "G",
            "G",
            "C",
            "A",
            "U",
            "U",
            "C",
            "A",
            "G",
            "U",
            "C",
            "A",
            "A",
            "U",
            "A",
            "G",
          ].map((b, i) => (
            <text
              key={`codon-${i}`}
              x={62 + i * 20}
              y={313}
              fontSize="7"
              fill="#f97316"
              fontWeight="bold"
            >
              {b}
            </text>
          ))}
          {/* Codon brackets */}
          {[0, 1, 2, 3, 4, 5].map((g) => (
            <line
              key={`bracket-${g}`}
              x1={58 + g * 60}
              y1={316}
              x2={114 + g * 60}
              y2={316}
              stroke="#f97316"
              strokeWidth="0.8"
              opacity="0.5"
            />
          ))}
        </g>

        {/* Ribosom */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[3])}
          onMouseLeave={() => setActive(null)}
        >
          {/* Large subunit */}
          <ellipse
            cx="220"
            cy="285"
            rx="55"
            ry="25"
            fill="#99f6e4"
            opacity="0.5"
            stroke="#0d9488"
            strokeWidth="1.5"
          />
          <text x="220" y="278" textAnchor="middle" fontSize="7" fill="#115e59">
            Große UE
          </text>
          {/* Small subunit */}
          <ellipse
            cx="220"
            cy="315"
            rx="45"
            ry="15"
            fill="#ccfbf1"
            opacity="0.6"
            stroke="#0d9488"
            strokeWidth="1.5"
          />
          <text x="220" y="318" textAnchor="middle" fontSize="7" fill="#115e59">
            Kleine UE
          </text>
          <text x="220" y="340" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
            Ribosom
          </text>
        </g>

        {/* tRNAs */}
        {[
          { x: 192, codon: "CGU", aa: "Arg", color: "#6366f1" },
          { x: 220, codon: "AAG", aa: "Lys", color: "#8b5cf6" },
          { x: 248, codon: "GUC", aa: "Val", color: "#a855f7" },
        ].map((trna, i) => (
          <g
            key={`trna-${i}`}
            className="cursor-pointer"
            onMouseEnter={() => setActive(parts[4])}
            onMouseLeave={() => setActive(null)}
          >
            {/* tRNA body */}
            <path
              d={`M${trna.x},${295} L${trna.x - 8},${265} Q${trna.x},${255} ${trna.x + 8},${265} Z`}
              fill={trna.color}
              opacity="0.6"
              stroke={trna.color}
              strokeWidth="1"
            />
            {/* Anticodon label */}
            <text
              x={trna.x}
              y={292}
              textAnchor="middle"
              fontSize="5"
              fill={trna.color}
              fontWeight="bold"
            >
              {trna.codon}
            </text>
            {/* Amino acid */}
            <circle
              cx={trna.x}
              cy={253}
              r="8"
              fill={trna.color}
              opacity="0.3"
              stroke={trna.color}
              strokeWidth="1"
            />
            <text
              x={trna.x}
              y={256}
              textAnchor="middle"
              fontSize="6"
              fill={trna.color}
              fontWeight="bold"
            >
              {trna.aa}
            </text>
          </g>
        ))}

        {/* tRNA label */}
        <text x="280" y="250" fontSize="7" fill="#6366f1" fontWeight="bold">
          tRNA
        </text>
        <line x1="275" y1="252" x2="256" y2="260" stroke="#6366f1" strokeWidth="0.8" />

        {/* Polypeptide chain */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActive(parts[5])}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M192,253 Q175,240 160,248 Q145,256 130,248 Q115,240 100,248 Q85,256 75,248"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {[160, 130, 100].map((px, i) => (
            <circle
              key={`aa-${i}`}
              cx={px}
              cy={248}
              r="6"
              fill="#fecaca"
              stroke="#ef4444"
              strokeWidth="1"
            />
          ))}
          <text x="110" y="238" textAnchor="middle" fontSize="7" fill="#ef4444" fontWeight="bold">
            Polypeptidkette
          </text>
        </g>

        {/* Direction arrow */}
        <line x1="165" y1="350" x2="275" y2="350" stroke="#0d9488" strokeWidth="1" />
        <polygon points="275,347 281,350 275,353" fill="#0d9488" />
        <text x="220" y="362" textAnchor="middle" fontSize="7" fill="#0d9488">
          Leserichtung 5&apos;→3&apos;
        </text>

        {/* A, P, E site labels */}
        <text x="248" y="288" textAnchor="middle" fontSize="6" fill="#115e59" fontWeight="bold">
          A
        </text>
        <text x="220" y="288" textAnchor="middle" fontSize="6" fill="#115e59" fontWeight="bold">
          P
        </text>
        <text x="192" y="288" textAnchor="middle" fontSize="6" fill="#115e59" fontWeight="bold">
          E
        </text>
        <text x="340" y="265" fontSize="6" fill="#115e59">
          A = Aminoacyl-Stelle
        </text>
        <text x="340" y="275" fontSize="6" fill="#115e59">
          P = Peptidyl-Stelle
        </text>
        <text x="340" y="285" fontSize="6" fill="#115e59">
          E = Exit-Stelle
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
