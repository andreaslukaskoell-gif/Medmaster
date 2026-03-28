import { useState } from "react";

type Mode = "direct" | "inverse";

export default function ProportionalRelationship() {
  const [mode, setMode] = useState<Mode>("direct");

  const W = 420;
  const H = 280;

  // Coordinate system setup
  const OX = 60;
  const OY = 220;
  const axisW = 330;
  const axisH = 180;
  const k = 1.2;

  // Direct: y = k*x  (k=1.2)
  // Inverse: y = k/x  (k=120, scaled)
  const direct: [number, number][] = [];
  const inverse: [number, number][] = [];
  const steps = 60;
  for (let i = 0; i <= steps; i++) {
    const xVal = (i / steps) * 10; // 0..10
    const xPx = OX + (xVal / 10) * axisW;
    const yDirect = k * xVal; // 0..12, clamp
    const yDirectPx = OY - Math.min(yDirect / 12, 1) * axisH;
    direct.push([xPx, yDirectPx]);
    if (i > 0) {
      const yInv = 12 / xVal; // k/x
      const yInvPx = OY - Math.min(yInv / 12, 1) * axisH;
      inverse.push([xPx, yInvPx]);
    }
  }

  const toPath = (pts: [number, number][]) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");

  // X-axis ticks
  const ticks = [0, 2, 4, 6, 8, 10];

  // Table data
  const tableData =
    mode === "direct"
      ? [
          [1, 1.2],
          [2, 2.4],
          [4, 4.8],
          [8, 9.6],
        ]
      : [
          [1, 12],
          [2, 6],
          [3, 4],
          [4, 3],
          [6, 2],
          [12, 1],
        ];

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
        Proportionale Beziehungen
      </h4>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">
        Klicke zum Wechseln
      </p>
      <div className="flex gap-2 justify-center mb-2">
        {(["direct", "inverse"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-1 rounded text-xs font-semibold border transition-colors ${
              mode === m
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400"
            }`}
          >
            {m === "direct" ? "Direkte Proportionalität" : "Indirekte Proportionalität"}
          </button>
        ))}
      </div>

      <svg role="img" viewBox={`0 0 ${W} ${H}`} className="w-full">
        <title>Proportionale Beziehungen</title>

        {/* Title */}
        <text x={W / 2} y={18} textAnchor="middle" fontSize={12} fill="#1e40af" fontWeight={700}>
          {mode === "direct"
            ? "Direkte Proportionalität: y = k·x"
            : "Indirekte Proportionalität: y = k/x"}
        </text>

        {/* Axes */}
        <line
          x1={OX}
          y1={OY}
          x2={OX + axisW + 10}
          y2={OY}
          stroke="#334155"
          strokeWidth={1.5}
          markerEnd="url(#arr)"
        />
        <line
          x1={OX}
          y1={OY}
          x2={OX}
          y2={OY - axisH - 10}
          stroke="#334155"
          strokeWidth={1.5}
          markerEnd="url(#arr)"
        />
        <defs>
          <marker id="arr" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#334155" />
          </marker>
        </defs>

        {/* Axis labels */}
        <text x={OX + axisW + 18} y={OY + 4} fontSize={11} fill="#334155" fontWeight={600}>
          x
        </text>
        <text x={OX - 4} y={OY - axisH - 14} fontSize={11} fill="#334155" fontWeight={600}>
          y
        </text>
        <text x={OX - 4} y={OY + 12} fontSize={9} fill="#64748b">
          0
        </text>

        {/* X ticks */}
        {ticks.map((t) => {
          const xPx = OX + (t / 10) * axisW;
          return (
            <g key={t}>
              <line x1={xPx} y1={OY - 3} x2={xPx} y2={OY + 3} stroke="#94a3b8" strokeWidth={1} />
              {t > 0 && (
                <text x={xPx} y={OY + 13} textAnchor="middle" fontSize={9} fill="#64748b">
                  {t}
                </text>
              )}
              <line
                x1={xPx}
                y1={OY}
                x2={xPx}
                y2={OY - axisH}
                stroke="#e2e8f0"
                strokeWidth={0.5}
                strokeDasharray="3,3"
              />
            </g>
          );
        })}

        {/* Y ticks */}
        {[3, 6, 9, 12].map((t) => {
          const yPx = OY - (t / 12) * axisH;
          return (
            <g key={t}>
              <line x1={OX - 3} y1={yPx} x2={OX + 3} y2={yPx} stroke="#94a3b8" strokeWidth={1} />
              <text x={OX - 7} y={yPx + 4} textAnchor="end" fontSize={9} fill="#64748b">
                {t}
              </text>
              <line
                x1={OX}
                y1={yPx}
                x2={OX + axisW}
                y2={yPx}
                stroke="#e2e8f0"
                strokeWidth={0.5}
                strokeDasharray="3,3"
              />
            </g>
          );
        })}

        {/* Curves */}
        {mode === "direct" ? (
          <path d={toPath(direct)} fill="none" stroke="#2563eb" strokeWidth={2.5} />
        ) : (
          <path d={toPath(inverse)} fill="none" stroke="#dc2626" strokeWidth={2.5} />
        )}

        {/* Curve label */}
        {mode === "direct" ? (
          <text x={OX + 230} y={OY - axisH * 0.75} fontSize={11} fill="#2563eb" fontWeight={700}>
            y = {k}·x
          </text>
        ) : (
          <text x={OX + 20} y={OY - axisH * 0.8} fontSize={11} fill="#dc2626" fontWeight={700}>
            y = 12/x
          </text>
        )}

        {/* Mini table */}
        <rect
          x={310}
          y={30}
          width={100}
          height={tableData.length * 16 + 20}
          rx={5}
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth={1}
        />
        <text x={360} y={44} textAnchor="middle" fontSize={9} fill="#64748b" fontWeight={600}>
          x → y
        </text>
        {tableData.map(([x, y], i) => (
          <text key={i} x={360} y={58 + i * 16} textAnchor="middle" fontSize={9} fill="#334155">
            {x} → {y}
          </text>
        ))}

        {/* Description box */}
        <rect
          x={OX}
          y={H - 34}
          width={230}
          height={28}
          rx={5}
          fill={mode === "direct" ? "#dbeafe" : "#fee2e2"}
          stroke={mode === "direct" ? "#2563eb" : "#dc2626"}
          strokeWidth={1}
        />
        <text
          x={OX + 115}
          y={H - 22}
          textAnchor="middle"
          fontSize={9}
          fill={mode === "direct" ? "#1e40af" : "#991b1b"}
          fontWeight={600}
        >
          {mode === "direct"
            ? "y/x = k (konstant) — Gerade durch Ursprung"
            : "x·y = k (konstant) — Hyperbel, nie 0"}
        </text>
        <text x={OX + 115} y={H - 10} textAnchor="middle" fontSize={8} fill="#64748b">
          {mode === "direct"
            ? "Bsp: Geschwindigkeit ↑ → Strecke ↑"
            : "Bsp: Geschwindigkeit ↑ → Zeit ↓"}
        </text>
      </svg>
    </div>
  );
}
