import { useState } from "react";

const substances = [
  { ph: 1, label: "Magensäure", color: "#ef4444" },
  { ph: 2, label: "Zitrone", color: "#f97316" },
  { ph: 3, label: "Essig", color: "#f59e0b" },
  { ph: 5, label: "Kaffee", color: "#84cc16" },
  { ph: 7, label: "Wasser", color: "#22c55e" },
  { ph: 7.4, label: "Blut", color: "#14b8a6" },
  { ph: 9, label: "Seife", color: "#3b82f6" },
  { ph: 12, label: "Bleiche", color: "#8b5cf6" },
  { ph: 14, label: "Natronlauge", color: "#a855f7" },
];

const phColors = [
  "#dc2626",
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#14b8a6",
  "#0d9488",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#9333ea",
];

export default function PHScale() {
  const [active, setActive] = useState<number | null>(null);
  const activeSubstance = substances.find((s) => s.ph === active);

  const SCALE_X = 30;
  const SCALE_Y = 100;
  const SCALE_W = 390;
  const SCALE_H = 40;
  const UNIT_W = SCALE_W / 14;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">pH-Skala</h4>
      <p className="text-xs text-muted">Klicke auf eine Substanz für Details.</p>
      <svg viewBox="0 0 460 280" className="w-full max-w-lg mx-auto">
        <title>pH-Skala — sauer, neutral, basisch</title>
        <text x="230" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          pH-Skala (0 - 14)
        </text>

        {/* Section labels */}
        <text
          x={SCALE_X + SCALE_W * 0.21}
          y="50"
          textAnchor="middle"
          fontSize="13"
          fill="#ef4444"
          fontWeight="bold"
        >
          Sauer
        </text>
        <text
          x={SCALE_X + SCALE_W * 0.5}
          y="50"
          textAnchor="middle"
          fontSize="13"
          fill="#22c55e"
          fontWeight="bold"
        >
          Neutral
        </text>
        <text
          x={SCALE_X + SCALE_W * 0.79}
          y="50"
          textAnchor="middle"
          fontSize="13"
          fill="#8b5cf6"
          fontWeight="bold"
        >
          Basisch
        </text>

        {/* Arrows */}
        <line
          x1={SCALE_X}
          y1="55"
          x2={SCALE_X + SCALE_W * 0.42}
          y2="55"
          stroke="#ef4444"
          strokeWidth="1.5"
        />
        <polygon points={`${SCALE_X},52 ${SCALE_X},58 ${SCALE_X - 5},55`} fill="#ef4444" />
        <line
          x1={SCALE_X + SCALE_W * 0.58}
          y1="55"
          x2={SCALE_X + SCALE_W}
          y2="55"
          stroke="#8b5cf6"
          strokeWidth="1.5"
        />
        <polygon
          points={`${SCALE_X + SCALE_W},52 ${SCALE_X + SCALE_W},58 ${SCALE_X + SCALE_W + 5},55`}
          fill="#8b5cf6"
        />

        {/* H+ / OH- labels */}
        <text x={SCALE_X + 15} y="75" fontSize="13" fill="#ef4444">
          H\u207A-Konzentration hoch
        </text>
        <text x={SCALE_X + SCALE_W - 15} y="75" textAnchor="end" fontSize="13" fill="#8b5cf6">
          OH\u207B-Konzentration hoch
        </text>

        {/* pH Scale bar */}
        {phColors.map((color, i) => (
          <rect
            key={i}
            x={SCALE_X + i * UNIT_W}
            y={SCALE_Y}
            width={UNIT_W + 0.5}
            height={SCALE_H}
            fill={color}
            opacity="0.85"
          />
        ))}
        <rect
          x={SCALE_X}
          y={SCALE_Y}
          width={SCALE_W}
          height={SCALE_H}
          fill="none"
          stroke="#374151"
          strokeWidth="1.5"
          rx="4"
        />

        {/* pH numbers */}
        {Array.from({ length: 15 }, (_, i) => (
          <text
            key={i}
            x={SCALE_X + i * UNIT_W + UNIT_W / 2}
            y={SCALE_Y + SCALE_H + 14}
            textAnchor="middle"
            fontSize="13"
            fill="#374151"
            fontWeight="bold"
          >
            {i}
          </text>
        ))}

        {/* Substance markers */}
        {substances.map((s) => {
          const x = SCALE_X + s.ph * UNIT_W + UNIT_W / 2;
          const isActive = active === s.ph;
          return (
            <g
              key={s.ph}
              className="cursor-pointer"
              onClick={() => setActive(isActive ? null : s.ph)}
              onMouseEnter={() => setActive(s.ph)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Marker line */}
              <line
                x1={x}
                y1={SCALE_Y - 2}
                x2={x}
                y2={SCALE_Y + SCALE_H + 20}
                stroke={s.color}
                strokeWidth={isActive ? 2.5 : 1}
                strokeDasharray={isActive ? "none" : "3 2"}
              />
              {/* Marker dot */}
              <circle
                cx={x}
                cy={SCALE_Y + SCALE_H / 2}
                r={isActive ? 6 : 4}
                fill="#fff"
                stroke={s.color}
                strokeWidth="2"
              />
              {/* Label */}
              <g transform={`translate(${x}, ${SCALE_Y + SCALE_H + 28}) rotate(-45)`}>
                <text
                  x="0"
                  y="0"
                  fontSize={isActive ? "9" : "7.5"}
                  fill={s.color}
                  fontWeight={isActive ? "bold" : "normal"}
                >
                  {s.label}
                </text>
              </g>
              {/* pH value label */}
              <text
                x={x}
                y={SCALE_Y - 8}
                textAnchor="middle"
                fontSize="7"
                fill={s.color}
                fontWeight="bold"
              >
                {s.ph}
              </text>
            </g>
          );
        })}

        {/* Formula */}
        <text x="230" y="248" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          pH = \u2013 log\u2081\u2080 [H\u207A]
        </text>
        <text x="230" y="262" textAnchor="middle" fontSize="13" fill="#6b7280">
          pH + pOH = 14 (bei 25\u00B0C)
        </text>
      </svg>

      {activeSubstance && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold" style={{ color: activeSubstance.color }}>
            {activeSubstance.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
            pH-Wert: {activeSubstance.ph} |{" "}
            {activeSubstance.ph < 7 ? "Sauer" : activeSubstance.ph === 7 ? "Neutral" : "Basisch"}
            {" | [H\u207A] = 10\u207B"}
            {String(activeSubstance.ph).replace(".", ",")} mol/L
          </p>
        </div>
      )}
    </div>
  );
}
