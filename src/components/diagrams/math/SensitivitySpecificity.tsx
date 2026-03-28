import { useState } from "react";

type Cell = "tp" | "fp" | "fn" | "tn" | null;

type CellConfig = {
  key: Cell;
  abbr: string;
  name: string;
  value: number;
  x: number;
  y: number;
  color: string;
  metrics: string[];
  description: string;
};

const CELLS: CellConfig[] = [
  {
    key: "tp",
    abbr: "TP",
    name: "Richtig Positiv",
    value: 80,
    x: 0,
    y: 0,
    color: "#16a34a",
    metrics: ["Sensitivität", "PPV (positiver Vorhersagewert)"],
    description: "Krank + Test positiv — Krankheit korrekt erkannt",
  },
  {
    key: "fp",
    abbr: "FP",
    name: "Falsch Positiv",
    value: 20,
    x: 1,
    y: 0,
    color: "#dc2626",
    metrics: ["Spezifität (negativ)", "FPR (Falsch-Positiv-Rate)"],
    description: "Gesund + Test positiv — fälschlich krank diagnostiziert",
  },
  {
    key: "fn",
    abbr: "FN",
    name: "Falsch Negativ",
    value: 10,
    x: 0,
    y: 1,
    color: "#d97706",
    metrics: ["Sensitivität (negativ)", "FNR (Falsch-Negativ-Rate)"],
    description: "Krank + Test negativ — Krankheit übersehen!",
  },
  {
    key: "tn",
    abbr: "TN",
    name: "Richtig Negativ",
    value: 90,
    x: 1,
    y: 1,
    color: "#2563eb",
    metrics: ["Spezifität", "NPV (negativer Vorhersagewert)"],
    description: "Gesund + Test negativ — Gesundheit korrekt erkannt",
  },
];

// Numbers
const TP = 80,
  FP = 20,
  FN = 10,
  TN = 90;
const sens = ((TP / (TP + FN)) * 100).toFixed(1);
const spec = ((TN / (TN + FP)) * 100).toFixed(1);
const ppv = ((TP / (TP + FP)) * 100).toFixed(1);
const npv = ((TN / (TN + FN)) * 100).toFixed(1);

export default function SensitivitySpecificity() {
  const [active, setActive] = useState<Cell>("tp");

  const W = 420;
  const H = 310;

  const CELL_W = 90;
  const CELL_H = 70;
  const TABLE_X = 90;
  const TABLE_Y = 50;

  const activeCfg = CELLS.find((c) => c.key === active);

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
        Sensitivität und Spezifität — Vierfeldertafel
      </h4>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">
        Klicke auf eine Zelle, um zu sehen, welche Kennzahl sie beeinflusst
      </p>

      <svg role="img" viewBox={`0 0 ${W} ${H}`} className="w-full">
        <title>Sensitivität und Spezifität — Vierfeldertafel</title>

        {/* Column headers */}
        <text
          x={TABLE_X + CELL_W * 0.5}
          y={TABLE_Y - 20}
          textAnchor="middle"
          fontSize={10}
          fill="#16a34a"
          fontWeight={700}
        >
          Test +
        </text>
        <text
          x={TABLE_X + CELL_W * 1.5}
          y={TABLE_Y - 20}
          textAnchor="middle"
          fontSize={10}
          fill="#dc2626"
          fontWeight={700}
        >
          Test −
        </text>
        {/* Column header label */}
        <text
          x={TABLE_X + CELL_W}
          y={TABLE_Y - 34}
          textAnchor="middle"
          fontSize={9}
          fill="#64748b"
          fontWeight={600}
        >
          Testergebnis
        </text>

        {/* Row headers */}
        <text
          x={TABLE_X - 6}
          y={TABLE_Y + CELL_H * 0.5 + 4}
          textAnchor="end"
          fontSize={10}
          fill="#334155"
          fontWeight={700}
        >
          Krank
        </text>
        <text
          x={TABLE_X - 6}
          y={TABLE_Y + CELL_H * 1.5 + 4}
          textAnchor="end"
          fontSize={10}
          fill="#334155"
          fontWeight={700}
        >
          Gesund
        </text>
        {/* Row header label */}
        <text
          x={TABLE_X - 55}
          y={TABLE_Y + CELL_H}
          textAnchor="middle"
          fontSize={9}
          fill="#64748b"
          fontWeight={600}
          transform={`rotate(-90, ${TABLE_X - 55}, ${TABLE_Y + CELL_H})`}
        >
          Wahrheit
        </text>

        {/* Cells */}
        {CELLS.map((cell) => {
          const cx = TABLE_X + cell.x * CELL_W;
          const cy = TABLE_Y + cell.y * CELL_H;
          const isSel = active === cell.key;
          return (
            <g
              key={cell.key as string}
              onClick={() => setActive(active === cell.key ? null : cell.key)}
              style={{ cursor: "pointer" }}
            >
              <rect
                x={cx}
                y={cy}
                width={CELL_W}
                height={CELL_H}
                fill={isSel ? cell.color : "#f8fafc"}
                fillOpacity={isSel ? 0.2 : 1}
                stroke={cell.color}
                strokeWidth={isSel ? 2.5 : 1}
                rx={isSel ? 6 : 3}
              />
              <text
                x={cx + CELL_W / 2}
                y={cy + 22}
                textAnchor="middle"
                fontSize={15}
                fill={cell.color}
                fontWeight={800}
              >
                {cell.abbr}
              </text>
              <text
                x={cx + CELL_W / 2}
                y={cy + 38}
                textAnchor="middle"
                fontSize={10}
                fill="#64748b"
              >
                n = {cell.value}
              </text>
              <text x={cx + CELL_W / 2} y={cy + 54} textAnchor="middle" fontSize={8} fill="#94a3b8">
                {cell.name}
              </text>
            </g>
          );
        })}

        {/* Row totals */}
        <text
          x={TABLE_X + CELL_W * 2 + 10}
          y={TABLE_Y + CELL_H * 0.5 + 4}
          fontSize={10}
          fill="#334155"
          fontWeight={600}
        >
          n={TP + FN}
        </text>
        <text
          x={TABLE_X + CELL_W * 2 + 10}
          y={TABLE_Y + CELL_H * 1.5 + 4}
          fontSize={10}
          fill="#334155"
          fontWeight={600}
        >
          n={FP + TN}
        </text>
        <text
          x={TABLE_X + CELL_W * 2 + 10}
          y={TABLE_Y + CELL_H * 2 + 14}
          fontSize={9}
          fill="#64748b"
        >
          N={TP + FP + FN + TN}
        </text>

        {/* Column totals */}
        <text
          x={TABLE_X + CELL_W * 0.5}
          y={TABLE_Y + CELL_H * 2 + 14}
          textAnchor="middle"
          fontSize={10}
          fill="#334155"
          fontWeight={600}
        >
          n={TP + FN}
        </text>
        <text
          x={TABLE_X + CELL_W * 1.5}
          y={TABLE_Y + CELL_H * 2 + 14}
          textAnchor="middle"
          fontSize={10}
          fill="#334155"
          fontWeight={600}
        >
          n={FP + TN}
        </text>

        {/* Formulas panel */}
        <rect
          x={290}
          y={TABLE_Y - 10}
          width={125}
          height={155}
          rx={6}
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth={1}
        />
        <text
          x={352}
          y={TABLE_Y + 6}
          textAnchor="middle"
          fontSize={9}
          fill="#64748b"
          fontWeight={700}
        >
          Kennzahlen
        </text>

        {[
          { name: "Sensitivität", formula: "TP / (TP+FN)", value: sens + " %", color: "#16a34a" },
          { name: "Spezifität", formula: "TN / (TN+FP)", value: spec + " %", color: "#2563eb" },
          { name: "PPV", formula: "TP / (TP+FP)", value: ppv + " %", color: "#7c3aed" },
          { name: "NPV", formula: "TN / (TN+FN)", value: npv + " %", color: "#0891b2" },
        ].map((m, i) => (
          <g key={m.name}>
            <text x={298} y={TABLE_Y + 24 + i * 32} fontSize={9} fill={m.color} fontWeight={700}>
              {m.name}
            </text>
            <text x={298} y={TABLE_Y + 36 + i * 32} fontSize={8} fill="#64748b">
              {m.formula}
            </text>
            <text
              x={408}
              y={TABLE_Y + 36 + i * 32}
              textAnchor="end"
              fontSize={9}
              fill={m.color}
              fontWeight={700}
            >
              {m.value}
            </text>
          </g>
        ))}

        {/* Active cell detail */}
        {activeCfg && (
          <g>
            <rect
              x={10}
              y={TABLE_Y + CELL_H * 2 + 24}
              width={W - 20}
              height={70}
              rx={6}
              fill={activeCfg.color}
              fillOpacity={0.08}
              stroke={activeCfg.color}
              strokeWidth={1.5}
            />
            <text
              x={W / 2}
              y={TABLE_Y + CELL_H * 2 + 40}
              textAnchor="middle"
              fontSize={11}
              fill={activeCfg.color}
              fontWeight={800}
            >
              {activeCfg.abbr} — {activeCfg.name} (n = {activeCfg.value})
            </text>
            <text
              x={W / 2}
              y={TABLE_Y + CELL_H * 2 + 56}
              textAnchor="middle"
              fontSize={9}
              fill="#334155"
            >
              {activeCfg.description}
            </text>
            <text
              x={W / 2}
              y={TABLE_Y + CELL_H * 2 + 70}
              textAnchor="middle"
              fontSize={9}
              fill="#64748b"
            >
              Relevant für: {activeCfg.metrics.join(" | ")}
            </text>
            <text
              x={W / 2}
              y={TABLE_Y + CELL_H * 2 + 84}
              textAnchor="middle"
              fontSize={8}
              fill="#94a3b8"
            >
              Merke: Hohe Sensitivität → wenige FN (Screening) | Hohe Spezifität → wenige FP
              (Bestätigung)
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
