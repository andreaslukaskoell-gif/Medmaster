import { useState } from "react";

type Op = "add" | "sub" | "mul" | "div";

const OPS: { key: Op; label: string; symbol: string }[] = [
  { key: "add", label: "Addition", symbol: "+" },
  { key: "sub", label: "Subtraktion", symbol: "−" },
  { key: "mul", label: "Multiplikation", symbol: "×" },
  { key: "div", label: "Division", symbol: "÷" },
];

const COLORS = {
  a: "#2563eb",
  b: "#16a34a",
  result: "#d97706",
};

function BarFraction({
  x,
  y,
  w,
  h,
  num,
  den,
  color,
  label,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  num: number;
  den: number;
  color: string;
  label?: string;
}) {
  const cells = Array.from({ length: den });
  const cellW = w / den;
  return (
    <g>
      {label && (
        <text
          x={x + w / 2}
          y={y - 5}
          textAnchor="middle"
          fontSize={10}
          fill={color}
          fontWeight={700}
        >
          {label}
        </text>
      )}
      {cells.map((_, i) => (
        <rect
          key={i}
          x={x + i * cellW}
          y={y}
          width={cellW}
          height={h}
          fill={i < num ? color : "#f1f5f9"}
          fillOpacity={i < num ? 0.35 : 1}
          stroke={color}
          strokeWidth={0.8}
        />
      ))}
      <text
        x={x + w / 2}
        y={y + h + 13}
        textAnchor="middle"
        fontSize={11}
        fill={color}
        fontWeight={700}
      >
        {num}/{den}
      </text>
    </g>
  );
}

export default function FractionOperations() {
  const [op, setOp] = useState<Op>("add");

  const W = 420;
  const H = 270;

  type Config = {
    title: string;
    steps: string[];
    result: string;
    visual: React.ReactNode;
  };

  const configs: Record<Op, Config> = {
    add: {
      title: "Addition — gemeinsamer Nenner",
      steps: [
        "1. Nenner angleichen: 1/3 → 2/6",
        "2. Zähler addieren: 1/6 + 2/6 = 3/6",
        "3. Kürzen: 3/6 = 1/2",
      ],
      result: "1/6 + 2/6 = 3/6 = 1/2",
      visual: (
        <g>
          <BarFraction x={20} y={70} w={110} h={28} num={1} den={6} color={COLORS.a} label="1/6" />
          <text x={140} y={90} textAnchor="middle" fontSize={18} fill="#64748b" fontWeight={700}>
            +
          </text>
          <BarFraction x={155} y={70} w={110} h={28} num={2} den={6} color={COLORS.b} label="2/6" />
          <text x={275} y={90} textAnchor="middle" fontSize={18} fill="#64748b" fontWeight={700}>
            =
          </text>
          <BarFraction
            x={290}
            y={70}
            w={110}
            h={28}
            num={3}
            den={6}
            color={COLORS.result}
            label="3/6 = 1/2"
          />
        </g>
      ),
    },
    sub: {
      title: "Subtraktion — gemeinsamer Nenner",
      steps: [
        "1. Nenner angleichen: 3/4 → 6/8",
        "2. Zähler subtrahieren: 6/8 − 3/8 = 3/8",
        "3. Nicht kürzbar",
      ],
      result: "3/4 − 3/8 = 6/8 − 3/8 = 3/8",
      visual: (
        <g>
          <BarFraction x={20} y={70} w={110} h={28} num={6} den={8} color={COLORS.a} label="6/8" />
          <text x={140} y={90} textAnchor="middle" fontSize={18} fill="#64748b" fontWeight={700}>
            −
          </text>
          <BarFraction x={155} y={70} w={110} h={28} num={3} den={8} color={COLORS.b} label="3/8" />
          <text x={275} y={90} textAnchor="middle" fontSize={18} fill="#64748b" fontWeight={700}>
            =
          </text>
          <BarFraction
            x={290}
            y={70}
            w={110}
            h={28}
            num={3}
            den={8}
            color={COLORS.result}
            label="3/8"
          />
        </g>
      ),
    },
    mul: {
      title: "Multiplikation — Zähler × Zähler, Nenner × Nenner",
      steps: ["Zähler: 2 × 1 = 2", "Nenner: 3 × 4 = 12", "Kürzen: 2/12 = 1/6"],
      result: "2/3 × 1/4 = 2/12 = 1/6",
      visual: (
        <g>
          {/* 2D rectangle showing 2/3 × 1/4 */}
          <text x={210} y={55} textAnchor="middle" fontSize={10} fill={COLORS.b} fontWeight={600}>
            1/4
          </text>
          {[0, 1, 2, 3].map((col) =>
            [0, 1, 2].map((row) => (
              <rect
                key={`${col}-${row}`}
                x={130 + col * 32}
                y={62 + row * 32}
                width={30}
                height={30}
                fill={
                  col === 0 && row < 2
                    ? COLORS.result
                    : col === 0
                      ? COLORS.b
                      : row < 2
                        ? COLORS.a
                        : "#f1f5f9"
                }
                fillOpacity={col === 0 && row < 2 ? 0.55 : 0.18}
                stroke="#94a3b8"
                strokeWidth={0.8}
              />
            ))
          )}
          <text x={110} y={80} textAnchor="end" fontSize={10} fill={COLORS.a} fontWeight={600}>
            2/3
          </text>
          <text x={60} y={120} fontSize={11} fill="#334155" fontWeight={600}>
            2/3 × 1/4
          </text>
          <text x={60} y={138} fontSize={11} fill="#64748b">
            = 2×1 / 3×4
          </text>
          <text x={60} y={156} fontSize={11} fill={COLORS.result} fontWeight={700}>
            = 2/12 = 1/6
          </text>
        </g>
      ),
    },
    div: {
      title: "Division — mit Kehrwert multiplizieren",
      steps: ["Kehrwert des Divisors: 3/4 → 4/3", "Multiplizieren: 2/3 × 4/3", "= 8/9"],
      result: "2/3 ÷ 3/4 = 2/3 × 4/3 = 8/9",
      visual: (
        <g>
          {/* Arrow showing flip */}
          <text x={210} y={58} textAnchor="middle" fontSize={11} fill="#334155" fontWeight={600}>
            Kehrwert bilden:
          </text>
          <rect
            x={140}
            y={65}
            width={60}
            height={34}
            rx={6}
            fill={COLORS.b}
            fillOpacity={0.15}
            stroke={COLORS.b}
            strokeWidth={1}
          />
          <text x={170} y={87} textAnchor="middle" fontSize={14} fill={COLORS.b} fontWeight={700}>
            3/4
          </text>
          <text x={210} y={87} textAnchor="middle" fontSize={18} fill="#64748b">
            →
          </text>
          <rect
            x={220}
            y={65}
            width={60}
            height={34}
            rx={6}
            fill={COLORS.result}
            fillOpacity={0.15}
            stroke={COLORS.result}
            strokeWidth={1}
          />
          <text
            x={250}
            y={87}
            textAnchor="middle"
            fontSize={14}
            fill={COLORS.result}
            fontWeight={700}
          >
            4/3
          </text>
          {/* Equation */}
          <text x={210} y={125} textAnchor="middle" fontSize={12} fill="#334155">
            2/3 ÷ 3/4
          </text>
          <text x={210} y={143} textAnchor="middle" fontSize={12} fill="#64748b">
            = 2/3 × 4/3
          </text>
          <text
            x={210}
            y={161}
            textAnchor="middle"
            fontSize={13}
            fill={COLORS.result}
            fontWeight={700}
          >
            = 8/9
          </text>
          <BarFraction
            x={330}
            y={100}
            w={72}
            h={22}
            num={8}
            den={9}
            color={COLORS.result}
            label="8/9"
          />
        </g>
      ),
    },
  };

  const cfg = configs[op];

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
        Bruchrechenoperationen
      </h4>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">
        Klicke auf eine Operation
      </p>

      {/* Tab buttons */}
      <div className="flex gap-1 justify-center mb-2">
        {OPS.map((o) => (
          <button
            key={o.key}
            onClick={() => setOp(o.key)}
            className={`px-3 py-1 rounded text-xs font-semibold border transition-colors ${
              op === o.key
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400"
            }`}
          >
            {o.symbol} {o.label}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        <title>Bruchrechenoperationen</title>

        {/* Title */}
        <text x={W / 2} y={20} textAnchor="middle" fontSize={12} fill="#1e40af" fontWeight={700}>
          {cfg.title}
        </text>

        {/* Visual area */}
        <rect
          x={10}
          y={30}
          width={W - 20}
          height={155}
          rx={8}
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth={1}
        />
        {cfg.visual}

        {/* Steps */}
        {cfg.steps.map((s, i) => (
          <text key={i} x={18} y={205 + i * 16} fontSize={10} fill="#334155">
            {s}
          </text>
        ))}

        {/* Result box */}
        <rect
          x={10}
          y={H - 28}
          width={W - 20}
          height={22}
          rx={5}
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth={1}
        />
        <text
          x={W / 2}
          y={H - 13}
          textAnchor="middle"
          fontSize={11}
          fill="#92400e"
          fontWeight={700}
        >
          {cfg.result}
        </text>
      </svg>
    </div>
  );
}
