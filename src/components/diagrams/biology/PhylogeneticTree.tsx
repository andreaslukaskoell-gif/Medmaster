import { useState } from "react";

type TreeNode = {
  id: string;
  label: string;
  sublabel?: string;
  color: string;
  x: number;
  y: number;
  detail: string;
  examples?: string;
  isLeaf?: boolean;
};

const NODES: TreeNode[] = [
  {
    id: "luca",
    label: "LUCA",
    sublabel: "Letzter gemeinsamer Vorfahr",
    color: "#64748b",
    x: 220,
    y: 30,
    detail:
      "LUCA (Last Universal Common Ancestor) — der hypothetische gemeinsame Vorfahre aller heutigen Lebewesen. Lebte vor ~3,5–4 Mrd. Jahren. Hatte bereits DNA, Ribosomen und eine Zellmembran. Noch kein Nukleus.",
    examples: "Alle Lebewesen",
  },
  {
    id: "prokaryoten",
    label: "Prokaryoten",
    sublabel: "Kein Nukleus",
    color: "#f59e0b",
    x: 100,
    y: 105,
    detail:
      "Prokaryoten: kein membranumhüllter Zellkern, kein ER, keine Mitochondrien (primär). Kleine Ribosomen (70S). Ringförmiges Chromosom + Plasmide. Zwei Domänen: Bacteria und Archaea. Zellwand: Bacteria = Peptidoglykan, Archaea = Pseudopeptidoglykan (Murein fehlt!).",
    examples: "Bacteria: E. coli, Staphylococcus | Archaea: Methanbakterien, Halobakterien",
  },
  {
    id: "eukaryoten",
    label: "Eukaryoten",
    sublabel: "Mit Nukleus",
    color: "#6366f1",
    x: 340,
    y: 105,
    detail:
      "Eukaryoten: membranumhüllter Zellkern, lineare Chromosomen, Organellen (ER, Golgi, Mitochondrien). Große Ribosomen (80S). Endosymbiontentheorie: Mitochondrien und Chloroplasten stammen von aufgenommenen Prokaryoten ab (eigene DNA, 70S-Ribosomen, doppelte Membran).",
    examples: "Protisten, Pilze, Pflanzen, Tiere",
  },
  {
    id: "bacteria",
    label: "Bacteria",
    sublabel: "Murein-Zellwand",
    color: "#f97316",
    x: 55,
    y: 195,
    detail:
      "Bacteria: grampositiv (dicker Peptidoglykanmantel) vs. gramnegativ (äußere Membran + dünner Peptidoglykanmantel). Wichtigste Pathogene: Staphylococcus (grampos.), E. coli, Salmonella (gramneg.). Antibiotika targeten 70S-Ribosomen und Zellwandsynthese.",
    examples: "E. coli, S. aureus, M. tuberculosis, Streptococcus",
    isLeaf: true,
  },
  {
    id: "archaea",
    label: "Archaea",
    sublabel: "Kein Murein",
    color: "#eab308",
    x: 148,
    y: 195,
    detail:
      "Archaea: oft Extremophile (Thermophile, Halophile, Acidophile). Keine echte Peptidoglykan-Zellwand (deshalb resistent gegen Lysozym und Penicillin). Ähnliche Transkriptionsmaschinerie wie Eukaryoten. Methanogene Archaea im Dickdarm.",
    examples: "Methanococcus, Halobacterium, Thermus aquaticus",
    isLeaf: true,
  },
  {
    id: "protisten",
    label: "Protisten",
    sublabel: "Einzeller / paraphyletisch",
    color: "#06b6d4",
    x: 248,
    y: 195,
    detail:
      "Protisten: künstliche, paraphyletische Gruppe der eukaryotischen Einzeller. Keine einheitliche Abstammung. Medizinisch relevant: Plasmodium (Malaria), Trypanosoma (Schlafkrankheit, Chagas), Giardia (Giardien), Toxoplasma. Chloroplasten oft sekundär erworben.",
    examples: "Plasmodium, Trypanosoma, Amoeba, Euglena",
    isLeaf: true,
  },
  {
    id: "pilze",
    label: "Pilze",
    sublabel: "Chitin-Zellwand",
    color: "#8b5cf6",
    x: 330,
    y: 230,
    detail:
      "Pilze (Fungi): heterotroph, chitinhältige Zellwand (kein Peptidoglykan, kein Cellulose). Haploid oder diploid. Asexuelle und sexuelle Fortpflanzung via Sporen. Näher mit Tieren verwandt als mit Pflanzen (Opisthokonta). Medizinisch: Candida, Aspergillus, Dermatophyten.",
    examples: "Saccharomyces, Candida, Aspergillus, Penicillium",
    isLeaf: true,
  },
  {
    id: "pflanzen",
    label: "Pflanzen",
    sublabel: "Cellulose + Chloroplasten",
    color: "#10b981",
    x: 398,
    y: 230,
    detail:
      "Pflanzen (Plantae): autotroph via Photosynthese in Chloroplasten. Zellwand aus Cellulose. Zellvakuole groß. Keine Zentriolen (Ausnahme: Moose). Choroplast-Genmaterial (cpDNA) zirkulär → Endosymbiont-Herkunft. Alternation of generations (Generationswechsel).",
    examples: "Moose, Farne, Gymnospermen (Nadelbäume), Angiospermen",
    isLeaf: true,
  },
  {
    id: "tiere",
    label: "Tiere",
    sublabel: "Keine Zellwand",
    color: "#ef4444",
    x: 463,
    y: 230,
    detail:
      "Tiere (Animalia): heterotroph, keine Zellwand, Centriolen vorhanden. Enger verwandt mit Pilzen als mit Pflanzen (gemeinsamer Opisthokonta-Vorfahre). Entwicklung über Embryostadien (Blastula, Gastrula). Komplexes Nerven- und Immunsystem.",
    examples: "Porifera, Cnidaria, Würmer, Arthropoden, Vertebraten (inkl. Mensch)",
    isLeaf: true,
  },
];

// Branch lines connecting nodes
const BRANCHES = [
  { from: "luca", to: "prokaryoten" },
  { from: "luca", to: "eukaryoten" },
  { from: "prokaryoten", to: "bacteria" },
  { from: "prokaryoten", to: "archaea" },
  { from: "eukaryoten", to: "protisten" },
  { from: "eukaryoten", to: "pilze" },
  { from: "eukaryoten", to: "pflanzen" },
  { from: "eukaryoten", to: "tiere" },
];

// Time axis labels
const TIME_LABELS = [
  { y: 30, text: "~3,8 Mrd. J." },
  { y: 105, text: "~2,0 Mrd. J." },
  { y: 210, text: "~1,0 Mrd. J." },
  { y: 280, text: "Heute" },
];

export default function PhylogeneticTree() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = NODES.find((n) => n.id === activeId) ?? null;

  function getNode(id: string) {
    return NODES.find((n) => n.id === id)!;
  }

  const W = 520;
  const H = 300;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Phylogenetischer Baum — Von LUCA zu den Domänen des Lebens
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf einen Ast oder eine Gruppe für Details.
      </p>

      <svg role="img" viewBox={`0 0 ${W} ${H}`} className="w-full max-w-2xl mx-auto">
        <title>
          Phylogenetischer Baum: Prokaryoten und Eukaryoten (Protisten, Pilze, Pflanzen, Tiere)
        </title>

        {/* Time axis */}
        <line x1={8} y1={25} x2={8} y2={H - 10} stroke="#cbd5e1" strokeWidth={1} />
        <text x={8} y={20} textAnchor="middle" fontSize={7} fill="#94a3b8" fontWeight={600}>
          Zeit
        </text>
        {TIME_LABELS.map(({ y, text }) => (
          <g key={text}>
            <line x1={4} y1={y} x2={12} y2={y} stroke="#cbd5e1" strokeWidth={1} />
            <text x={14} y={y + 3} fontSize={6} fill="#94a3b8">
              {text}
            </text>
          </g>
        ))}

        {/* Branch lines */}
        {BRANCHES.map(({ from, to }) => {
          const f = getNode(from);
          const t = getNode(to);
          // Elbow path: down from parent, then horizontal to child
          const midY = f.y + (t.y - f.y) * 0.5;
          const path = `M ${f.x} ${f.y + 14} L ${f.x} ${midY} L ${t.x} ${midY} L ${t.x} ${t.y - 14}`;
          return (
            <path
              key={`${from}-${to}`}
              d={path}
              fill="none"
              stroke={t.color}
              strokeWidth={2}
              strokeOpacity={0.5}
            />
          );
        })}

        {/* Opisthokonta brace for Pilze + Tiere */}
        <path
          d="M 330 218 Q 396 208 463 218"
          fill="none"
          stroke="#94a3b8"
          strokeWidth={1}
          strokeDasharray="3,2"
        />
        <text x={396} y={208} textAnchor="middle" fontSize={6} fill="#94a3b8">
          Opisthokonta
        </text>

        {/* Nodes */}
        {NODES.map((node) => {
          const isActive = activeId === node.id;
          const r = node.id === "luca" ? 16 : node.isLeaf ? 22 : 18;
          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onClick={() => setActiveId(activeId === node.id ? null : node.id)}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={r}
                fill={node.color}
                fillOpacity={isActive ? 0.3 : 0.12}
                stroke={node.color}
                strokeWidth={isActive ? 2.5 : 1.5}
              />
              <text
                x={node.x}
                y={node.y + (node.sublabel ? -2 : 4)}
                textAnchor="middle"
                fontSize={node.id === "luca" ? 8 : node.isLeaf ? 7.5 : 8}
                fontWeight={700}
                fill={node.color}
              >
                {node.label}
              </text>
              {node.sublabel && (
                <text
                  x={node.x}
                  y={node.y + 8}
                  textAnchor="middle"
                  fontSize={5.5}
                  fill={node.color}
                  opacity={0.8}
                >
                  {node.sublabel}
                </text>
              )}
            </g>
          );
        })}

        {/* Endosymbiont annotation */}
        <text x={W - 6} y={160} textAnchor="end" fontSize={6} fill="#6366f1" opacity={0.7}>
          ★ Mitochondrien: Endosymbiont
        </text>
      </svg>

      {/* Detail card */}
      {active ? (
        <div
          className="rounded-lg p-3 border text-xs text-gray-700 dark:text-gray-300"
          style={{ backgroundColor: `${active.color}12`, borderColor: `${active.color}44` }}
        >
          <p className="font-semibold mb-1" style={{ color: active.color }}>
            {active.label}
            {active.sublabel && (
              <span className="font-normal text-gray-500 dark:text-gray-400">
                {" "}
                — {active.sublabel}
              </span>
            )}
          </p>
          <p className="mb-1">{active.detail}</p>
          {active.examples && (
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-600 dark:text-gray-300">Beispiele: </span>
              {active.examples}
            </p>
          )}
        </div>
      ) : (
        <div className="rounded-lg p-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <strong className="text-gray-700 dark:text-gray-200">MedAT-Fokus:</strong> Prokaryot
            (kein Nukleus, 70S-Ribosomen) vs. Eukaryot (Nukleus, 80S). Endosymbiontentheorie
            (Mitochondrien, Chloroplasten). Archaea: kein Murein → resistent gegen Penicillin.
            Opisthokonta: Pilze + Tiere näher verwandt als Pflanzen + Tiere.
          </p>
        </div>
      )}
    </div>
  );
}
