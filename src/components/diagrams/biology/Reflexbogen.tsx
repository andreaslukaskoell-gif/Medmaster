import { useState } from "react";

type Component = {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  detail: string;
};

const components: Component[] = [
  {
    id: "rezeptor",
    label: "Rezeptor",
    sublabel: "Reizaufnahme",
    x: 20,
    y: 155,
    w: 80,
    h: 44,
    color: "#dc2626",
    detail:
      "Der Rezeptor (Sensor) nimmt den Reiz aus der Umwelt oder dem Körperinneren auf und wandelt ihn in ein elektrisches Signal um (Transduktion). Beim Eigenreflexborgen: Muskelspindel (Ia-Afferenz). Beim Fremdreflex: freie Nervenendigungen (Schmerzrezeptoren) oder Meissner-Körperchen (Berühung).",
  },
  {
    id: "afferenz",
    label: "Afferente Nervenfaser",
    sublabel: "Sensorisch (zum ZNS)",
    x: 120,
    y: 135,
    w: 80,
    h: 44,
    color: "#d97706",
    detail:
      "Die afferente (sensorische) Nervenfaser leitet den Reiz von der Peripherie zum Rückenmark. Beim Eigenreflex: pseudounipolare Neurone im Spinalganglion (Hinterwurzelganglion), schnelle Aα-Fasern (70–120 m/s). Beim Fremdreflex: Aδ- oder C-Fasern (langsamer). Eintritt in das Rückenmark über die Hinterwurzel.",
  },
  {
    id: "interneuron",
    label: "Interneuron",
    sublabel: "Rückenmark (Hinterhorn)",
    x: 230,
    y: 80,
    w: 90,
    h: 55,
    color: "#7c3aed",
    detail:
      "Das Interneuron (Schaltneuron) liegt im Rückenmark und verschaltet Afferenz auf Efferenz. Beim einfachsten Reflex (monosynaptisch, z. B. Patellarsehnenreflex) fehlt das Interneuron — direkte Synapses zwischen Ia-Afferenz und Motoneuron. Bei polysynaptischen Reflexen können viele Interneuronen zwischengeschaltet sein. Gleichzeitig Hemmung des Antagonisten (reziproke Inhibition über Renshaw-Zellen).",
  },
  {
    id: "efferenz",
    label: "Efferente Nervenfaser",
    sublabel: "Motorisch (vom ZNS)",
    x: 340,
    y: 135,
    w: 80,
    h: 44,
    color: "#0891b2",
    detail:
      "Die efferente (motorische) Nervenfaser leitet den Befehl vom Rückenmark zur Muskulatur. Somatische Efferenz: Aα-Fasern → Skelettmuskel-Motoneuron. Austritt über die Vorderwurzel des Rückenmarks. Das Motoneuron bildet mit dem Muskel die motorische Endplatte (neuromuskuläre Synapse, ACh → nAChR).",
  },
  {
    id: "effektor",
    label: "Effektor",
    sublabel: "Muskel / Organ",
    x: 440,
    y: 155,
    w: 80,
    h: 44,
    color: "#059669",
    detail:
      "Der Effektor führt die motorische Antwort aus. Bei somatischen Reflexen: Skelettmuskel (Kontraktion → Reflexbewegung). Bei autonomen Reflexen: glatte Muskulatur, Herzmuskel oder Drüsen. Beim Patellarsehnenreflex: Kontraktion des M. quadriceps femoris → Kniestreckung. Beim Beugereflex: Rückzug der Extremität vom Schmerzreiz.",
  },
];

const W = 570;
const H = 380;

export default function Reflexbogen() {
  const [active, setActive] = useState<string | null>(null);
  const activeComp = components.find((c) => c.id === active);

  // Arrow helper
  function arrow(x1: number, y1: number, x2: number, y2: number, color: string, id: string) {
    return (
      <>
        <defs>
          <marker id={id} markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={color} />
          </marker>
        </defs>
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth={2}
          markerEnd={`url(#${id})`}
        />
      </>
    );
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Reflexbogen</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf eine Komponente für Details.
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-xl mx-auto">
        <title>Reflexbogen — Rezeptor, Afferenz, Interneuron, Efferenz, Effektor</title>

        {/* Spinal cord representation */}
        <ellipse
          cx={275}
          cy={115}
          rx={50}
          ry={60}
          fill="#f0fdf4"
          stroke="#16a34a"
          strokeWidth={2}
        />
        <text x={275} y={100} textAnchor="middle" fontSize={8} fill="#166534" fontWeight={700}>
          Rücken-
        </text>
        <text x={275} y={111} textAnchor="middle" fontSize={8} fill="#166534" fontWeight={700}>
          mark
        </text>
        <text x={275} y={122} textAnchor="middle" fontSize={7} fill="#16a34a">
          (Medulla
        </text>
        <text x={275} y={132} textAnchor="middle" fontSize={7} fill="#16a34a">
          spinalis)
        </text>

        {/* Gray matter indicator */}
        <ellipse
          cx={275}
          cy={115}
          rx={22}
          ry={30}
          fill="#d1fae5"
          stroke="#059669"
          strokeWidth={1}
          strokeDasharray="3,2"
        />
        <text x={275} y={118} textAnchor="middle" fontSize={6} fill="#059669">
          Grau-
        </text>
        <text x={275} y={126} textAnchor="middle" fontSize={6} fill="#059669">
          substanz
        </text>

        {/* Connection arrows */}
        {/* Rezeptor → Afferenz */}
        {arrow(
          components[0].x + components[0].w,
          components[0].y + components[0].h / 2,
          components[1].x,
          components[1].y + components[1].h / 2,
          "#d97706",
          "arr-rez-aff"
        )}
        {/* Afferenz → Interneuron (curves up into spinal cord) */}
        <path
          d={`M ${components[1].x + components[1].w} ${components[1].y + 10} Q 240 ${components[2].y + 40} ${components[2].x} ${components[2].y + components[2].h / 2}`}
          fill="none"
          stroke="#7c3aed"
          strokeWidth={2}
          markerEnd="url(#arr-aff-int)"
        />
        <defs>
          <marker id="arr-aff-int" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed" />
          </marker>
        </defs>
        {/* Interneuron → Efferenz */}
        <path
          d={`M ${components[2].x + components[2].w} ${components[2].y + components[2].h / 2} Q 360 ${components[3].y + 10} ${components[3].x} ${components[3].y + 10}`}
          fill="none"
          stroke="#0891b2"
          strokeWidth={2}
          markerEnd="url(#arr-int-eff)"
        />
        <defs>
          <marker id="arr-int-eff" markerWidth={8} markerHeight={8} refX={6} refY={3} orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#0891b2" />
          </marker>
        </defs>
        {/* Efferenz → Effektor */}
        {arrow(
          components[3].x + components[3].w,
          components[3].y + components[3].h / 2,
          components[4].x,
          components[4].y + components[4].h / 2,
          "#059669",
          "arr-eff-eff"
        )}

        {/* Hinterwurzel / Vorderwurzel labels */}
        <text x={175} y={90} textAnchor="middle" fontSize={7} fill="#6b7280" fontStyle="italic">
          Hinterwurzel
        </text>
        <line
          x1={175}
          y1={93}
          x2={222}
          y2={100}
          stroke="#9ca3af"
          strokeWidth={0.8}
          strokeDasharray="2,2"
        />
        <text x={365} y={90} textAnchor="middle" fontSize={7} fill="#6b7280" fontStyle="italic">
          Vorderwurzel
        </text>
        <line
          x1={365}
          y1={93}
          x2={328}
          y2={100}
          stroke="#9ca3af"
          strokeWidth={0.8}
          strokeDasharray="2,2"
        />

        {/* Component boxes */}
        {components.map((comp) => {
          const isAct = active === comp.id;
          return (
            <g
              key={comp.id}
              className="cursor-pointer"
              onClick={() => setActive(active === comp.id ? null : comp.id)}
              onMouseEnter={() => setActive(comp.id)}
              onMouseLeave={() => setActive(null)}
            >
              <rect
                x={comp.x}
                y={comp.y}
                width={comp.w}
                height={comp.h}
                rx={8}
                fill={isAct ? comp.color : "white"}
                stroke={comp.color}
                strokeWidth={isAct ? 2.5 : 1.8}
              />
              <text
                x={comp.x + comp.w / 2}
                y={comp.y + 16}
                textAnchor="middle"
                fontSize={8.5}
                fill={isAct ? "white" : comp.color}
                fontWeight={700}
              >
                {comp.label}
              </text>
              <text
                x={comp.x + comp.w / 2}
                y={comp.y + 29}
                textAnchor="middle"
                fontSize={7}
                fill={isAct ? "#e5e7eb" : "#6b7280"}
              >
                {comp.sublabel}
              </text>
            </g>
          );
        })}

        {/* Numbered steps */}
        {components.map((comp, i) => (
          <g key={`num-${comp.id}`}>
            <circle cx={comp.x + comp.w / 2} cy={comp.y - 14} r={10} fill={comp.color} />
            <text
              x={comp.x + comp.w / 2}
              y={comp.y - 10}
              textAnchor="middle"
              fontSize={9}
              fill="white"
              fontWeight={700}
            >
              {i + 1}
            </text>
          </g>
        ))}

        {/* Monosynaptischer Reflex note */}
        <rect
          x={170}
          y={210}
          width={200}
          height={38}
          rx={5}
          fill="#ede9fe"
          stroke="#7c3aed"
          strokeWidth={1}
        />
        <text x={270} y={225} textAnchor="middle" fontSize={8} fill="#5b21b6" fontWeight={700}>
          Monosynaptischer Reflex
        </text>
        <text x={270} y={238} textAnchor="middle" fontSize={7} fill="#7c3aed">
          (z. B. Patellarsehnenreflex)
        </text>
        <text x={270} y={249} textAnchor="middle" fontSize={7} fill="#6b7280">
          Ia-Afferenz → direkt auf Motoneuron
        </text>

        {/* Example: polysynaptic */}
        <rect
          x={30}
          y={265}
          width={155}
          height={30}
          rx={5}
          fill="#fef9c3"
          stroke="#ca8a04"
          strokeWidth={1}
        />
        <text x={108} y={279} textAnchor="middle" fontSize={8} fill="#92400e" fontWeight={700}>
          Polysynaptischer Reflex
        </text>
        <text x={108} y={290} textAnchor="middle" fontSize={7} fill="#92400e">
          z. B. Beugereflex (Schmerzreiz)
        </text>

        {/* Bottom legend: velocity */}
        <rect
          x={390}
          y={255}
          width={165}
          height={50}
          rx={5}
          fill="#e0f2fe"
          stroke="#0891b2"
          strokeWidth={1}
        />
        <text x={472} y={270} textAnchor="middle" fontSize={8} fill="#075985" fontWeight={700}>
          Leitungsgeschwindigkeit
        </text>
        <text x={400} y={284} fontSize={7} fill="#374151">
          Aα: 70–120 m/s (Proprio.)
        </text>
        <text x={400} y={296} fontSize={7} fill="#374151">
          Aδ: 5–30 m/s (Schmerz, Temp.)
        </text>
        <text x={400} y={308} fontSize={7} fill="#374151">
          C: 0,5–2 m/s (langsam)
        </text>
      </svg>

      {activeComp && (
        <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-violet-700 dark:text-violet-300">
            {activeComp.label}
          </p>
          <p className="text-xs text-violet-600 dark:text-violet-400 mb-1">{activeComp.sublabel}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300">{activeComp.detail}</p>
        </div>
      )}
    </div>
  );
}
