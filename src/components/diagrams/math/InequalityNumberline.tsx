import { useState } from "react";

type IneqType = "lt" | "lte" | "gt" | "gte" | "between";

type Config = {
  label: string;
  symbol: string;
  example: string;
  interval: string;
  leftOpen: boolean;
  rightOpen: boolean;
  leftBound: number | null;
  rightBound: number | null;
  arrowLeft: boolean;
  arrowRight: boolean;
  color: string;
};

const CONFIGS: Record<IneqType, Config> = {
  lt: {
    label: "Kleiner als",
    symbol: "<",
    example: "x < 3",
    interval: "]-∞ ; 3[",
    leftOpen: true,
    rightOpen: true,
    leftBound: null,
    rightBound: 3,
    arrowLeft: true,
    arrowRight: false,
    color: "#2563eb",
  },
  lte: {
    label: "Kleiner gleich",
    symbol: "≤",
    example: "x ≤ 3",
    interval: "]-∞ ; 3]",
    leftOpen: true,
    rightOpen: false,
    leftBound: null,
    rightBound: 3,
    arrowLeft: true,
    arrowRight: false,
    color: "#0891b2",
  },
  gt: {
    label: "Größer als",
    symbol: ">",
    example: "x > −1",
    interval: "]-1 ; +∞[",
    leftOpen: true,
    rightOpen: true,
    leftBound: -1,
    rightBound: null,
    arrowLeft: false,
    arrowRight: true,
    color: "#16a34a",
  },
  gte: {
    label: "Größer gleich",
    symbol: "≥",
    example: "x ≥ −1",
    interval: "[-1 ; +∞[",
    leftOpen: false,
    rightOpen: true,
    leftBound: -1,
    rightBound: null,
    arrowLeft: false,
    arrowRight: true,
    color: "#65a30d",
  },
  between: {
    label: "Zwischen (Intervall)",
    symbol: "≤ x ≤",
    example: "−1 ≤ x ≤ 3",
    interval: "[-1 ; 3]",
    leftOpen: false,
    rightOpen: false,
    leftBound: -1,
    rightBound: 3,
    arrowLeft: false,
    arrowRight: false,
    color: "#7c3aed",
  },
};

const TYPES: IneqType[] = ["lt", "lte", "gt", "gte", "between"];

export default function InequalityNumberline() {
  const [type, setType] = useState<IneqType>("lt");
  const cfg = CONFIGS[type];

  const W = 420;
  const H = 230;

  // Number line: shows -4 to 6
  const NL_X = 30;
  const NL_Y = 110;
  const NL_W = 360;
  const MIN_VAL = -4;
  const MAX_VAL = 6;
  const range = MAX_VAL - MIN_VAL;

  const toX = (v: number) => NL_X + ((v - MIN_VAL) / range) * NL_W;
  const ticks = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];

  // Line segment start/end for the highlighted region
  const lx = cfg.leftBound !== null ? toX(cfg.leftBound) : NL_X;
  const rx = cfg.rightBound !== null ? toX(cfg.rightBound) : NL_X + NL_W;

  const lineColor = cfg.color;

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
        Ungleichungen und Intervalle
      </h4>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">
        Wähle eine Ungleichung
      </p>
      <div className="flex flex-wrap gap-1 justify-center mb-2">
        {TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-2 py-1 rounded text-xs font-semibold border transition-colors ${
              type === t
                ? "text-white border-transparent"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400"
            }`}
            style={
              type === t ? { backgroundColor: CONFIGS[t].color, borderColor: CONFIGS[t].color } : {}
            }
          >
            {CONFIGS[t].symbol}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        <title>Ungleichungen und Intervalle</title>

        {/* Title */}
        <text x={W / 2} y={18} textAnchor="middle" fontSize={13} fill={lineColor} fontWeight={800}>
          {cfg.example}
        </text>
        <text x={W / 2} y={34} textAnchor="middle" fontSize={10} fill="#64748b">
          {cfg.label}
        </text>

        {/* Background number line */}
        <line x1={NL_X} y1={NL_Y} x2={NL_X + NL_W} y2={NL_Y} stroke="#cbd5e1" strokeWidth={2} />

        {/* Highlighted segment */}
        <line
          x1={cfg.arrowLeft ? NL_X : lx}
          y1={NL_Y}
          x2={cfg.arrowRight ? NL_X + NL_W : rx}
          y2={NL_Y}
          stroke={lineColor}
          strokeWidth={4}
        />

        {/* Left endpoint dot */}
        {cfg.leftBound !== null && (
          <circle
            cx={lx}
            cy={NL_Y}
            r={6}
            fill={cfg.leftOpen ? "white" : lineColor}
            stroke={lineColor}
            strokeWidth={2}
          />
        )}
        {/* Right endpoint dot */}
        {cfg.rightBound !== null && (
          <circle
            cx={rx}
            cy={NL_Y}
            r={6}
            fill={cfg.rightOpen ? "white" : lineColor}
            stroke={lineColor}
            strokeWidth={2}
          />
        )}

        {/* Arrows */}
        {cfg.arrowLeft && (
          <polygon
            points={`${NL_X - 2},${NL_Y} ${NL_X + 8},${NL_Y - 5} ${NL_X + 8},${NL_Y + 5}`}
            fill={lineColor}
          />
        )}
        {cfg.arrowRight && (
          <polygon
            points={`${NL_X + NL_W + 2},${NL_Y} ${NL_X + NL_W - 8},${NL_Y - 5} ${NL_X + NL_W - 8},${NL_Y + 5}`}
            fill={lineColor}
          />
        )}

        {/* Tick marks and labels */}
        {ticks.map((t) => {
          const x = toX(t);
          const isZero = t === 0;
          return (
            <g key={t}>
              <line
                x1={x}
                y1={NL_Y - (isZero ? 8 : 5)}
                x2={x}
                y2={NL_Y + (isZero ? 8 : 5)}
                stroke="#64748b"
                strokeWidth={isZero ? 1.5 : 1}
              />
              <text
                x={x}
                y={NL_Y + 20}
                textAnchor="middle"
                fontSize={10}
                fill={isZero ? "#334155" : "#64748b"}
                fontWeight={isZero ? 700 : 400}
              >
                {t}
              </text>
            </g>
          );
        })}

        {/* Bound labels above the line */}
        {cfg.leftBound !== null && (
          <text
            x={lx}
            y={NL_Y - 16}
            textAnchor="middle"
            fontSize={10}
            fill={lineColor}
            fontWeight={700}
          >
            {cfg.leftBound}
          </text>
        )}
        {cfg.rightBound !== null && (
          <text
            x={rx}
            y={NL_Y - 16}
            textAnchor="middle"
            fontSize={10}
            fill={lineColor}
            fontWeight={700}
          >
            {cfg.rightBound}
          </text>
        )}

        {/* Legend: open/closed dot */}
        <g transform={`translate(30, 148)`}>
          <circle cx={10} cy={8} r={6} fill="white" stroke="#334155" strokeWidth={2} />
          <text x={22} y={13} fontSize={10} fill="#334155">
            = offen (Wert ausgeschlossen, &lt; oder &gt;)
          </text>
        </g>
        <g transform={`translate(30, 168)`}>
          <circle cx={10} cy={8} r={6} fill="#334155" />
          <text x={22} y={13} fontSize={10} fill="#334155">
            = geschlossen (Wert eingeschlossen, ≤ oder ≥)
          </text>
        </g>

        {/* Interval notation box */}
        <rect
          x={10}
          y={H - 32}
          width={W - 20}
          height={26}
          rx={6}
          fill={lineColor}
          fillOpacity={0.1}
          stroke={lineColor}
          strokeWidth={1.2}
        />
        <text
          x={W / 2}
          y={H - 22}
          textAnchor="middle"
          fontSize={10}
          fill="#334155"
          fontWeight={600}
        >
          Intervallschreibweise:
        </text>
        <text
          x={W / 2}
          y={H - 9}
          textAnchor="middle"
          fontSize={12}
          fill={lineColor}
          fontWeight={800}
        >
          {cfg.interval}
        </text>
      </svg>
    </div>
  );
}
