import { useState } from "react";

type Gland = {
  id: string;
  label: string;
  sublabel: string;
  hormone: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  detail: string;
};

const glands: Gland[] = [
  {
    id: "hypothalamus",
    label: "Hypothalamus",
    sublabel: "Zwischenhirn",
    hormone: "CRH (Corticotropin-Releasing-Hormon)",
    x: 130,
    y: 30,
    w: 160,
    h: 55,
    color: "#7c3aed",
    detail:
      "Der Hypothalamus integriert neuronale und hormonale Signale und gibt CRH (Corticotropin-Releasing-Hormon) in das Pfortadersystem des Hypophysenstiels ab. CRH-Freisetzung wird stimuliert durch: Stress (psychisch, physisch), Hypoglykämie, Kälte, Zytokine (IL-1, IL-6). Hemmung durch: hohe Cortisolspiegel (negatives Feedback), Schlaf.",
  },
  {
    id: "hypophysis",
    label: "Hypophyse",
    sublabel: "Adenohypophyse (Vorderlappen)",
    hormone: "ACTH (Adrenocorticotropes Hormon)",
    x: 130,
    y: 145,
    w: 160,
    h: 55,
    color: "#2563eb",
    detail:
      "CRH stimuliert die kortikotropen Zellen der Adenohypophyse zur ACTH-Sekretion. ACTH wird aus dem Vorläuferprotein POMC (Proopiomelanocortin) gespalten (gleichzeitig entstehen β-Endorphin und MSH). ACTH folgt einem zirkadianen Rhythmus: Maximum früh morgens, Minimum abends. Hemmung durch Cortisol (kurze Feedbackschleife).",
  },
  {
    id: "adrenal",
    label: "Nebennierenrinde",
    sublabel: "Zona fasciculata",
    hormone: "Cortisol (Glukokortikoid)",
    x: 130,
    y: 260,
    w: 160,
    h: 55,
    color: "#0891b2",
    detail:
      "ACTH stimuliert die Zona fasciculata der Nebennierenrinde zur Cortisolsynthese aus Cholesterin (steroidogene Kaskade). Cortisol-Effekte: Glukoneogenese↑, Immunsuppression, Proteinkatabolismus, Lipolyse, Na⁺-Retention, antiinflammatorisch. Cortisol ist fettlöslich → bindet an intrazelluläre Rezeptoren (GR), wirkt auf Gentranskription.",
  },
];

export default function HPAAxis() {
  const [active, setActive] = useState<string | null>(null);
  const activeGland = glands.find((g) => g.id === active);

  const arrowColor = "#6b7280";
  const feedbackColor = "#dc2626";

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Hypothalamus-Hypophysen-Nebennierenrinden-Achse (HPA)
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf eine Drüse für Details.</p>

      <svg role="img" viewBox="0 0 420 430" className="w-full max-w-sm mx-auto">
        <title>HPA-Achse — CRH, ACTH, Cortisol und negatives Feedback</title>

        <defs>
          <marker id="hpa-arrow" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={arrowColor} />
          </marker>
          <marker
            id="hpa-feedback"
            markerWidth={8}
            markerHeight={8}
            refX={6}
            refY={3}
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill={feedbackColor} />
          </marker>
        </defs>

        {/* Stimulating arrows (downward) */}
        {/* Hypothalamus → Hypophyse */}
        <line
          x1={210}
          y1={glands[0].y + glands[0].h}
          x2={210}
          y2={glands[1].y}
          stroke={arrowColor}
          strokeWidth={2}
          markerEnd="url(#hpa-arrow)"
        />
        {/* Hormone label on arrow */}
        <text x={215} y={102} fontSize={8} fill="#7c3aed" fontWeight={600}>
          CRH
        </text>

        {/* Hypophyse → NNR */}
        <line
          x1={210}
          y1={glands[1].y + glands[1].h}
          x2={210}
          y2={glands[2].y}
          stroke={arrowColor}
          strokeWidth={2}
          markerEnd="url(#hpa-arrow)"
        />
        <text x={215} y={218} fontSize={8} fill="#2563eb" fontWeight={600}>
          ACTH
        </text>

        {/* Negative feedback loop (right side) */}
        {/* Cortisol feedback line from adrenal → hypophysis */}
        <path
          d={`M ${glands[2].x + glands[2].w} ${glands[2].y + 27} C 380 ${glands[2].y + 27} 380 ${glands[1].y + 27} ${glands[1].x + glands[1].w} ${glands[1].y + 27}`}
          fill="none"
          stroke={feedbackColor}
          strokeWidth={1.5}
          strokeDasharray="5,3"
          markerEnd="url(#hpa-feedback)"
        />
        {/* Cortisol feedback line from adrenal → hypothalamus */}
        <path
          d={`M ${glands[2].x + glands[2].w} ${glands[2].y + 10} C 395 ${glands[2].y} 395 ${glands[0].y + 27} ${glands[0].x + glands[0].w} ${glands[0].y + 27}`}
          fill="none"
          stroke={feedbackColor}
          strokeWidth={1.5}
          strokeDasharray="5,3"
          markerEnd="url(#hpa-feedback)"
        />

        {/* Feedback label */}
        <rect
          x={330}
          y={150}
          width={72}
          height={28}
          rx={5}
          fill="#fee2e2"
          stroke={feedbackColor}
          strokeWidth={1}
        />
        <text
          x={366}
          y={162}
          textAnchor="middle"
          fontSize={7}
          fill={feedbackColor}
          fontWeight={700}
        >
          Cortisol
        </text>
        <text x={366} y={173} textAnchor="middle" fontSize={7} fill={feedbackColor}>
          neg. Feedback
        </text>

        {/* Gland boxes */}
        {glands.map((g) => {
          const isAct = active === g.id;
          return (
            <g
              key={g.id}
              className="cursor-pointer"
              onClick={() => setActive(active === g.id ? null : g.id)}
              onMouseEnter={() => setActive(g.id)}
              onMouseLeave={() => setActive(null)}
            >
              <rect
                x={g.x}
                y={g.y}
                width={g.w}
                height={g.h}
                rx={10}
                fill={isAct ? g.color : "white"}
                stroke={g.color}
                strokeWidth={isAct ? 2.5 : 1.8}
              />
              <text
                x={g.x + g.w / 2}
                y={g.y + 18}
                textAnchor="middle"
                fontSize={10}
                fill={isAct ? "white" : g.color}
                fontWeight={700}
              >
                {g.label}
              </text>
              <text
                x={g.x + g.w / 2}
                y={g.y + 31}
                textAnchor="middle"
                fontSize={7}
                fill={isAct ? "#e5e7eb" : "#6b7280"}
              >
                {g.sublabel}
              </text>
              <text
                x={g.x + g.w / 2}
                y={g.y + 46}
                textAnchor="middle"
                fontSize={7.5}
                fill={isAct ? "white" : g.color}
                fontWeight={600}
              >
                → {g.hormone.split(" ")[0]}
              </text>
            </g>
          );
        })}

        {/* Stress stimulus box */}
        <rect
          x={20}
          y={50}
          width={90}
          height={30}
          rx={6}
          fill="#fef9c3"
          stroke="#ca8a04"
          strokeWidth={1}
        />
        <text x={65} y={62} textAnchor="middle" fontSize={8} fill="#92400e" fontWeight={700}>
          Stressreiz
        </text>
        <text x={65} y={74} textAnchor="middle" fontSize={7} fill="#92400e">
          (Cortex, Amygdala)
        </text>
        <line
          x1={110}
          y1={65}
          x2={130}
          y2={57}
          stroke="#ca8a04"
          strokeWidth={1.2}
          markerEnd="url(#hpa-arrow)"
        />

        {/* Cortisol effects box */}
        <rect
          x={10}
          y={270}
          width={115}
          height={85}
          rx={6}
          fill="#e0f2fe"
          stroke="#0891b2"
          strokeWidth={1}
        />
        <text x={67} y={285} textAnchor="middle" fontSize={8} fill="#075985" fontWeight={700}>
          Cortisol-Effekte
        </text>
        <text x={20} y={300} fontSize={7} fill="#374151">
          • Glukoneogenese ↑
        </text>
        <text x={20} y={312} fontSize={7} fill="#374151">
          • Immunsuppression
        </text>
        <text x={20} y={324} fontSize={7} fill="#374151">
          • Protein-Katabolismus
        </text>
        <text x={20} y={336} fontSize={7} fill="#374151">
          • Lipolyse ↑
        </text>
        <text x={20} y={348} fontSize={7} fill="#374151">
          • antiinflammatorisch
        </text>

        <line
          x1={130}
          y1={300}
          x2={125}
          y2={295}
          stroke="#0891b2"
          strokeWidth={1}
          strokeDasharray="3,2"
        />

        {/* Circadian rhythm note */}
        <rect
          x={250}
          y={360}
          width={155}
          height={40}
          rx={5}
          fill="#f0fdf4"
          stroke="#16a34a"
          strokeWidth={1}
        />
        <text x={328} y={375} textAnchor="middle" fontSize={8} fill="#166534" fontWeight={700}>
          Zirkadianer Rhythmus
        </text>
        <text x={328} y={388} textAnchor="middle" fontSize={7} fill="#374151">
          ACTH/Cortisol: max. morgens (~8 Uhr)
        </text>

        {/* Legend bottom */}
        <line
          x1={10}
          y1={412}
          x2={30}
          y2={412}
          stroke={arrowColor}
          strokeWidth={2}
          markerEnd="url(#hpa-arrow)"
        />
        <text x={34} y={416} fontSize={7} fill="#374151">
          Stimulation
        </text>
        <line
          x1={120}
          y1={412}
          x2={140}
          y2={412}
          stroke={feedbackColor}
          strokeWidth={1.5}
          strokeDasharray="5,3"
          markerEnd="url(#hpa-feedback)"
        />
        <text x={144} y={416} fontSize={7} fill="#374151">
          Negatives Feedback
        </text>
      </svg>

      {activeGland && (
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
            {activeGland.label}
          </p>
          <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-1">
            Hormon: {activeGland.hormone}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300">{activeGland.detail}</p>
        </div>
      )}
    </div>
  );
}
