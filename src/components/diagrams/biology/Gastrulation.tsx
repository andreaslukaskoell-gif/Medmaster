import { useState } from "react";

const stages = [
  {
    id: "before",
    label: "Zweiblattscheibe",
    detail:
      "Bilaminar disc: Die Keimscheibe besteht aus Epiblast (oben) und Hypoblast (unten). Noch keine Differenzierung in drei Keimblätter.",
  },
  {
    id: "invagination",
    label: "Invagination",
    detail:
      "Epiblastzellen wandern durch den Primitivstreifen nach innen (Invagination). Erste Zellen verdrängen den Hypoblast und bilden das Entoderm, weitere schieben sich dazwischen als Mesoderm.",
  },
  {
    id: "result",
    label: "Drei Keimblätter",
    detail:
      "Ergebnis: Ektoderm (außen — Haut, Nervensystem), Mesoderm (Mitte — Knochen, Muskeln, Herz), Entoderm (innen — Darm, Lunge, Leber).",
  },
];

export default function Gastrulation() {
  const [active, setActive] = useState<string | null>(null);
  const activeStage = stages.find((s) => s.id === active);

  const W = 520;
  const H = 220;
  const stageW = 140;
  const gap = 20;
  const startX = (W - 3 * stageW - 2 * gap) / 2;

  const ecto = "#3b82f6"; // blue
  const meso = "#f59e0b"; // amber
  const endo = "#22c55e"; // green
  const hypoblast = "#94a3b8"; // gray

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Gastrulation — Bildung der drei Keimblätter
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf ein Stadium für Details.
      </p>

      <svg role="img" viewBox={`0 0 ${W} ${H}`} className="w-full max-w-2xl mx-auto">
        <title>Gastrulation — Von der Zweiblattscheibe zu drei Keimblättern</title>

        {stages.map((stage, i) => {
          const x = startX + i * (stageW + gap);
          const cx = x + stageW / 2;
          const isActive = active === stage.id;

          return (
            <g
              key={stage.id}
              className="cursor-pointer"
              onClick={() => setActive(active === stage.id ? null : stage.id)}
              onMouseEnter={() => setActive(stage.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Background box */}
              <rect
                x={x}
                y={25}
                width={stageW}
                height={170}
                rx={10}
                fill={isActive ? "#f0fdf4" : "#f8fafc"}
                stroke={isActive ? "#16a34a" : "#cbd5e1"}
                strokeWidth={isActive ? 2 : 1}
              />

              {/* Stage label */}
              <text
                x={cx}
                y={16}
                textAnchor="middle"
                fontSize={12}
                fill="#1f2937"
                fontWeight={600}
                stroke="white"
                strokeWidth={4}
                paintOrder="stroke"
              >
                {stage.label}
              </text>

              {stage.id === "before" && (
                <>
                  {/* Epiblast layer */}
                  <rect
                    x={x + 15}
                    y={75}
                    width={stageW - 30}
                    height={28}
                    rx={4}
                    fill={ecto}
                    opacity={0.7}
                  />
                  <text
                    x={cx}
                    y={93}
                    textAnchor="middle"
                    fontSize={10}
                    fill="white"
                    fontWeight={600}
                  >
                    Epiblast
                  </text>
                  {/* Hypoblast layer */}
                  <rect
                    x={x + 15}
                    y={107}
                    width={stageW - 30}
                    height={28}
                    rx={4}
                    fill={hypoblast}
                    opacity={0.6}
                  />
                  <text
                    x={cx}
                    y={125}
                    textAnchor="middle"
                    fontSize={10}
                    fill="white"
                    fontWeight={600}
                  >
                    Hypoblast
                  </text>
                  {/* Amniotic cavity label */}
                  <text x={cx} y={65} textAnchor="middle" fontSize={8} fill="#94a3b8">
                    Amnionhöhle
                  </text>
                  {/* Yolk sac label */}
                  <text x={cx} y={150} textAnchor="middle" fontSize={8} fill="#94a3b8">
                    Dottersack
                  </text>
                </>
              )}

              {stage.id === "invagination" && (
                <>
                  {/* Epiblast with groove */}
                  <path
                    d={`M${x + 15},${85} L${cx - 15},${85} Q${cx},${110} ${cx + 15},${85} L${x + stageW - 15},${85}`}
                    fill={ecto}
                    opacity={0.7}
                    stroke={ecto}
                    strokeWidth={2}
                  />
                  <rect
                    x={x + 15}
                    y={85}
                    width={stageW - 30}
                    height={12}
                    rx={3}
                    fill={ecto}
                    opacity={0.7}
                  />
                  {/* Primitivstreifen label */}
                  <text
                    x={cx}
                    y={80}
                    textAnchor="middle"
                    fontSize={8}
                    fill="#dc2626"
                    fontWeight={600}
                  >
                    Primitivstreifen
                  </text>
                  {/* Migration arrows */}
                  <path
                    d={`M${cx},${108} Q${cx - 20},${125} ${cx - 30},${130}`}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth={1.5}
                    strokeDasharray="3,2"
                    markerEnd="url(#gastArrow)"
                  />
                  <path
                    d={`M${cx},${108} Q${cx + 20},${125} ${cx + 30},${130}`}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth={1.5}
                    strokeDasharray="3,2"
                    markerEnd="url(#gastArrow)"
                  />
                  {/* Mesoderm forming */}
                  <ellipse cx={cx - 25} cy={132} rx={18} ry={6} fill={meso} opacity={0.5} />
                  <ellipse cx={cx + 25} cy={132} rx={18} ry={6} fill={meso} opacity={0.5} />
                  {/* Endoderm replacing hypoblast */}
                  <rect
                    x={x + 15}
                    y={140}
                    width={stageW - 30}
                    height={12}
                    rx={3}
                    fill={endo}
                    opacity={0.5}
                  />
                  {/* Labels */}
                  <text x={cx} y={160} textAnchor="middle" fontSize={8} fill="#64748b">
                    Zellwanderung
                  </text>
                </>
              )}

              {stage.id === "result" && (
                <>
                  {/* Three germ layers */}
                  <rect
                    x={x + 15}
                    y={70}
                    width={stageW - 30}
                    height={24}
                    rx={4}
                    fill={ecto}
                    opacity={0.8}
                  />
                  <text
                    x={cx}
                    y={86}
                    textAnchor="middle"
                    fontSize={10}
                    fill="white"
                    fontWeight={600}
                  >
                    Ektoderm
                  </text>

                  <rect
                    x={x + 15}
                    y={98}
                    width={stageW - 30}
                    height={24}
                    rx={4}
                    fill={meso}
                    opacity={0.8}
                  />
                  <text
                    x={cx}
                    y={114}
                    textAnchor="middle"
                    fontSize={10}
                    fill="white"
                    fontWeight={600}
                  >
                    Mesoderm
                  </text>

                  <rect
                    x={x + 15}
                    y={126}
                    width={stageW - 30}
                    height={24}
                    rx={4}
                    fill={endo}
                    opacity={0.8}
                  />
                  <text
                    x={cx}
                    y={142}
                    textAnchor="middle"
                    fontSize={10}
                    fill="white"
                    fontWeight={600}
                  >
                    Entoderm
                  </text>

                  {/* Derivative labels */}
                  <text x={cx} y={62} textAnchor="middle" fontSize={7} fill={ecto}>
                    Haut, ZNS
                  </text>
                  <text x={x + stageW - 8} y={112} textAnchor="end" fontSize={7} fill="#b45309">
                    Knochen, Muskel
                  </text>
                  <text x={cx} y={162} textAnchor="middle" fontSize={7} fill="#16a34a">
                    Darm, Lunge
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Arrows between stages */}
        <defs>
          <marker id="gastArrow" markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
            <path d="M0 0 L6 3 L0 6 z" fill="#ef4444" />
          </marker>
        </defs>
        {[0, 1].map((i) => {
          const x1 = startX + (i + 1) * stageW + i * gap + 2;
          const x2 = x1 + gap - 4;
          const my = 110;
          return (
            <g key={`arrow-${i}`}>
              <line x1={x1} y1={my} x2={x2} y2={my} stroke="#16a34a" strokeWidth={1.5} />
              <polygon points={`${x2},${my - 4} ${x2 + 5},${my} ${x2},${my + 4}`} fill="#16a34a" />
            </g>
          );
        })}
      </svg>

      {activeStage && (
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            {activeStage.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeStage.detail}</p>
        </div>
      )}
    </div>
  );
}
