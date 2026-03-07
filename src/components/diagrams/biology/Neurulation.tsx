import { useState } from "react";

const stages = [
  {
    id: "plate",
    label: "Neuralplatte",
    detail:
      "Das Ektoderm verdickt sich dorsal über dem Notochord zur Neuralplatte. Diese ist der Ausgangspunkt für das gesamte zentrale Nervensystem.",
  },
  {
    id: "groove",
    label: "Neuralrinne",
    detail:
      "Die Ränder der Neuralplatte heben sich als Neuralwulste an. Dazwischen entsteht die Neuralrinne. Der Notochord induziert die Faltung.",
  },
  {
    id: "tube",
    label: "Neuralrohr",
    detail:
      "Die Neuralwülste verschmelzen dorsal zum Neuralrohr (später Gehirn und Rückenmark). Neuralleistenzellen lösen sich ab und wandern lateral aus.",
  },
  {
    id: "crest",
    label: "Neuralleiste",
    detail:
      "Neuralleistenzellen migrieren durch den Körper und bilden: peripheres Nervensystem, Melanozyten, Nebennierenmark, Teile des Gesichtsschädels.",
  },
];

export default function Neurulation() {
  const [active, setActive] = useState<string | null>(null);
  const activeStage = stages.find((s) => s.id === active);

  const W = 520;
  const H = 200;
  const stageW = 110;
  const gap = 12;
  const startX = (W - 4 * stageW - 3 * gap) / 2;

  const ecto = "#93c5fd"; // light blue - ectoderm
  const neural = "#3b82f6"; // blue - neural tissue
  const noto = "#f59e0b"; // amber - notochord
  const meso = "#fbbf24"; // yellow - mesoderm
  const crest = "#a855f7"; // purple - neural crest

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Neurulation — Vom Ektoderm zum Neuralrohr
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf ein Stadium für Details.
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-2xl mx-auto">
        <title>Neurulation — Neuralplatte, Neuralrinne, Neuralrohr, Neuralleiste</title>

        {stages.map((stage, i) => {
          const x = startX + i * (stageW + gap);
          const cx = x + stageW / 2;
          const baseY = 140;
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
                y={22}
                width={stageW}
                height={160}
                rx={8}
                fill={isActive ? "#eff6ff" : "#f8fafc"}
                stroke={isActive ? "#3b82f6" : "#cbd5e1"}
                strokeWidth={isActive ? 2 : 1}
              />

              {/* Stage label */}
              <text
                x={cx}
                y={14}
                textAnchor="middle"
                fontSize={11}
                fill="#1f2937"
                fontWeight={600}
                stroke="white"
                strokeWidth={4}
                paintOrder="stroke"
              >
                {stage.label}
              </text>

              {/* Mesoderm background */}
              <rect
                x={x + 10}
                y={baseY - 50}
                width={stageW - 20}
                height={55}
                rx={4}
                fill={meso}
                opacity={0.2}
              />

              {/* Notochord (consistent across all stages) */}
              <ellipse
                cx={cx}
                cy={baseY - 10}
                rx={10}
                ry={7}
                fill={noto}
                stroke="#d97706"
                strokeWidth={1}
              />
              <text
                x={cx}
                y={baseY - 7}
                textAnchor="middle"
                fontSize={6}
                fill="#78350f"
                fontWeight={600}
              >
                NC
              </text>

              {stage.id === "plate" && (
                <>
                  {/* Flat ectoderm with thickened center */}
                  <path
                    d={`M${x + 12},${baseY - 30} L${x + stageW - 12},${baseY - 30}`}
                    stroke={ecto}
                    strokeWidth={3}
                    fill="none"
                  />
                  {/* Thickened neural plate region */}
                  <line
                    x1={cx - 22}
                    y1={baseY - 30}
                    x2={cx + 22}
                    y2={baseY - 30}
                    stroke={neural}
                    strokeWidth={6}
                    strokeLinecap="round"
                  />
                  <text
                    x={cx}
                    y={baseY - 38}
                    textAnchor="middle"
                    fontSize={7}
                    fill={neural}
                    fontWeight={600}
                  >
                    Neuralplatte
                  </text>
                  <text x={x + 20} y={baseY - 38} textAnchor="middle" fontSize={6} fill="#94a3b8">
                    Ekto
                  </text>
                  <text
                    x={x + stageW - 20}
                    y={baseY - 38}
                    textAnchor="middle"
                    fontSize={6}
                    fill="#94a3b8"
                  >
                    Ekto
                  </text>
                </>
              )}

              {stage.id === "groove" && (
                <>
                  {/* Ectoderm bending up at edges */}
                  <path
                    d={`M${x + 12},${baseY - 35} L${cx - 18},${baseY - 45} Q${cx},${baseY - 28} ${cx + 18},${baseY - 45} L${x + stageW - 12},${baseY - 35}`}
                    fill="none"
                    stroke={ecto}
                    strokeWidth={3}
                  />
                  {/* Neural folds thickened */}
                  <circle cx={cx - 18} cy={baseY - 45} r={4} fill={neural} />
                  <circle cx={cx + 18} cy={baseY - 45} r={4} fill={neural} />
                  {/* Labels */}
                  <text
                    x={cx - 18}
                    y={baseY - 55}
                    textAnchor="middle"
                    fontSize={6}
                    fill={neural}
                    fontWeight={600}
                  >
                    Wulst
                  </text>
                  <text
                    x={cx + 18}
                    y={baseY - 55}
                    textAnchor="middle"
                    fontSize={6}
                    fill={neural}
                    fontWeight={600}
                  >
                    Wulst
                  </text>
                  <text x={cx} y={baseY - 22} textAnchor="middle" fontSize={6} fill="#64748b">
                    Rinne
                  </text>
                </>
              )}

              {stage.id === "tube" && (
                <>
                  {/* Closed neural tube */}
                  <ellipse
                    cx={cx}
                    cy={baseY - 40}
                    rx={12}
                    ry={10}
                    fill="#dbeafe"
                    stroke={neural}
                    strokeWidth={2}
                  />
                  {/* Lumen */}
                  <ellipse
                    cx={cx}
                    cy={baseY - 40}
                    rx={5}
                    ry={4}
                    fill="white"
                    stroke={neural}
                    strokeWidth={0.8}
                  />
                  {/* Ectoderm closed over */}
                  <path
                    d={`M${x + 12},${baseY - 35} Q${cx},${baseY - 55} ${x + stageW - 12},${baseY - 35}`}
                    fill="none"
                    stroke={ecto}
                    strokeWidth={2}
                  />
                  {/* Neural crest cells detaching */}
                  <circle cx={cx - 16} cy={baseY - 48} r={3} fill={crest} opacity={0.7} />
                  <circle cx={cx + 16} cy={baseY - 48} r={3} fill={crest} opacity={0.7} />
                  {/* Label */}
                  <text
                    x={cx}
                    y={baseY - 60}
                    textAnchor="middle"
                    fontSize={6}
                    fill={neural}
                    fontWeight={600}
                  >
                    Neuralrohr
                  </text>
                </>
              )}

              {stage.id === "crest" && (
                <>
                  {/* Neural tube (smaller, settled) */}
                  <ellipse
                    cx={cx}
                    cy={baseY - 38}
                    rx={10}
                    ry={8}
                    fill="#dbeafe"
                    stroke={neural}
                    strokeWidth={2}
                  />
                  <ellipse
                    cx={cx}
                    cy={baseY - 38}
                    rx={4}
                    ry={3}
                    fill="white"
                    stroke={neural}
                    strokeWidth={0.8}
                  />
                  {/* Ectoderm closed */}
                  <path
                    d={`M${x + 12},${baseY - 33} Q${cx},${baseY - 52} ${x + stageW - 12},${baseY - 33}`}
                    fill="none"
                    stroke={ecto}
                    strokeWidth={2}
                  />
                  {/* Migrating neural crest cells */}
                  <circle cx={cx - 28} cy={baseY - 35} r={3} fill={crest} />
                  <circle cx={cx + 28} cy={baseY - 35} r={3} fill={crest} />
                  <circle cx={cx - 35} cy={baseY - 22} r={2.5} fill={crest} opacity={0.7} />
                  <circle cx={cx + 35} cy={baseY - 22} r={2.5} fill={crest} opacity={0.7} />
                  {/* Migration arrows */}
                  <path
                    d={`M${cx - 18},${baseY - 46} Q${cx - 30},${baseY - 42} ${cx - 28},${baseY - 38}`}
                    fill="none"
                    stroke={crest}
                    strokeWidth={1}
                    strokeDasharray="2,1"
                  />
                  <path
                    d={`M${cx + 18},${baseY - 46} Q${cx + 30},${baseY - 42} ${cx + 28},${baseY - 38}`}
                    fill="none"
                    stroke={crest}
                    strokeWidth={1}
                    strokeDasharray="2,1"
                  />
                  {/* Derivative label */}
                  <text
                    x={cx}
                    y={baseY - 56}
                    textAnchor="middle"
                    fontSize={6}
                    fill={crest}
                    fontWeight={600}
                  >
                    Neuralleistenzellen
                  </text>
                  <text x={cx} y={baseY + 8} textAnchor="middle" fontSize={6} fill="#64748b">
                    PNS, Melanozyten
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Arrows between stages */}
        {[0, 1, 2].map((i) => {
          const x1 = startX + (i + 1) * stageW + i * gap + 2;
          const x2 = x1 + gap - 4;
          const my = 105;
          return (
            <g key={`arrow-${i}`}>
              <line x1={x1} y1={my} x2={x2} y2={my} stroke="#3b82f6" strokeWidth={1.5} />
              <polygon points={`${x2},${my - 4} ${x2 + 5},${my} ${x2},${my + 4}`} fill="#3b82f6" />
            </g>
          );
        })}
      </svg>

      {activeStage && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            {activeStage.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeStage.detail}</p>
        </div>
      )}
    </div>
  );
}
