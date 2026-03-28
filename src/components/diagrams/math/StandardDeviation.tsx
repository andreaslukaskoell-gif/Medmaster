import { useState } from "react";

type Region = "1sigma" | "2sigma" | "3sigma" | null;

const REGIONS = [
  {
    key: "1sigma" as Region,
    label: "±1σ",
    pct: "68,3 %",
    color: "#2563eb",
    desc: "68,3 % aller Werte liegen zwischen μ−σ und μ+σ",
  },
  {
    key: "2sigma" as Region,
    label: "±2σ",
    pct: "95,4 %",
    color: "#16a34a",
    desc: "95,4 % aller Werte liegen zwischen μ−2σ und μ+2σ",
  },
  {
    key: "3sigma" as Region,
    label: "±3σ",
    pct: "99,7 %",
    color: "#d97706",
    desc: "99,7 % aller Werte liegen zwischen μ−3σ und μ+3σ",
  },
];

export default function StandardDeviation() {
  const [active, setActive] = useState<Region>("1sigma");

  const W = 420;
  const H = 290;

  // Bell curve area
  const CX = W / 2;
  const BX = 30;
  const BW = 360;
  const BY = 30;
  const BH = 150;

  // Normal distribution: y = exp(-x²/2) / sqrt(2π)
  // Map x from -4 to 4, y from 0 to 0.4
  const sigma = BW / 8; // 1σ = BW/8 pixels

  const gauss = (x: number) => Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI);
  const maxG = gauss(0); // ~0.3989

  const toSvgX = (z: number) => CX + (z / 4) * (BW / 2);
  const toSvgY = (g: number) => BY + BH - (g / maxG) * BH * 0.92;

  // Full bell curve path
  const bellPts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const z = -4 + (i / 120) * 8;
    const g = gauss(z);
    const sx = toSvgX(z);
    const sy = toSvgY(g);
    bellPts.push(`${i === 0 ? "M" : "L"}${sx.toFixed(1)},${sy.toFixed(1)}`);
  }
  const baselineLeft = toSvgX(-4);
  const baselineRight = toSvgX(4);
  const baseY = BY + BH;
  const bellFillPath = `${bellPts.join(" ")} L${baselineRight},${baseY} L${baselineLeft},${baseY} Z`;

  // Colored region fill
  const regionBound =
    active === "1sigma" ? 1 : active === "2sigma" ? 2 : active === "3sigma" ? 3 : 0;
  const regionPts: string[] = [];
  if (active && regionBound > 0) {
    for (let i = 0; i <= 120; i++) {
      const z = -regionBound + (i / 120) * regionBound * 2;
      const g = gauss(z);
      regionPts.push(`${i === 0 ? "M" : "L"}${toSvgX(z).toFixed(1)},${toSvgY(g).toFixed(1)}`);
    }
    regionPts.push(`L${toSvgX(regionBound)},${baseY}`);
    regionPts.push(`L${toSvgX(-regionBound)},${baseY}`);
    regionPts.push("Z");
  }

  const activeColor = active
    ? (REGIONS.find((r) => r.key === active)?.color ?? "#2563eb")
    : "#2563eb";
  const activePct = active ? (REGIONS.find((r) => r.key === active)?.pct ?? "") : "";

  // Sigma markers: -3σ to +3σ
  const sigmas = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
        Normalverteilung und Standardabweichung
      </h4>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">
        68-95-99,7-Regel — Klicke auf eine Region
      </p>
      <div className="flex gap-2 justify-center mb-2">
        {REGIONS.map((r) => (
          <button
            key={r.key as string}
            onClick={() => setActive(active === r.key ? null : r.key)}
            className={`px-3 py-1 rounded text-xs font-bold border transition-colors ${
              active === r.key
                ? "text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300"
            }`}
            style={active === r.key ? { backgroundColor: r.color, borderColor: r.color } : {}}
          >
            {r.label} = {r.pct}
          </button>
        ))}
      </div>

      <svg role="img" viewBox={`0 0 ${W} ${H}`} className="w-full">
        <title>Normalverteilung — Standardabweichung</title>

        <defs>
          <clipPath id="bellclip">
            <rect x={BX} y={BY - 5} width={BW} height={BH + 10} />
          </clipPath>
        </defs>

        {/* Bell curve fill background */}
        <path d={bellFillPath} fill="#e2e8f0" clipPath="url(#bellclip)" />

        {/* Colored region */}
        {active && regionBound > 0 && (
          <path
            d={regionPts.join(" ")}
            fill={activeColor}
            fillOpacity={0.3}
            clipPath="url(#bellclip)"
          />
        )}

        {/* Bell curve outline */}
        <path d={bellPts.join(" ")} fill="none" stroke="#334155" strokeWidth={2} />

        {/* Baseline */}
        <line x1={BX} y1={baseY} x2={BX + BW} y2={baseY} stroke="#94a3b8" strokeWidth={1.5} />

        {/* Sigma tick marks */}
        {sigmas.map((s) => {
          const x = toSvgX(s);
          const isCenter = s === 0;
          return (
            <g key={s}>
              <line
                x1={x}
                y1={baseY}
                x2={x}
                y2={baseY + (isCenter ? 10 : 7)}
                stroke={isCenter ? "#334155" : "#94a3b8"}
                strokeWidth={isCenter ? 2 : 1}
              />
              <text
                x={x}
                y={baseY + 20}
                textAnchor="middle"
                fontSize={9}
                fill={isCenter ? "#334155" : "#64748b"}
                fontWeight={isCenter ? 700 : 400}
              >
                {s === 0 ? "μ" : `${s > 0 ? "+" : ""}${s}σ`}
              </text>
            </g>
          );
        })}

        {/* μ vertical line */}
        <line
          x1={CX}
          y1={BY}
          x2={CX}
          y2={baseY}
          stroke="#334155"
          strokeWidth={1}
          strokeDasharray="4,3"
        />

        {/* Percentage label in the colored area */}
        {active && (
          <text
            x={CX}
            y={BY + BH * 0.55}
            textAnchor="middle"
            fontSize={14}
            fill={activeColor}
            fontWeight={800}
          >
            {activePct}
          </text>
        )}

        {/* σ bracket annotation */}
        {active && regionBound > 0 && (
          <>
            <line
              x1={toSvgX(-regionBound)}
              y1={baseY + 30}
              x2={toSvgX(regionBound)}
              y2={baseY + 30}
              stroke={activeColor}
              strokeWidth={1.5}
              markerStart="url(#dot)"
              markerEnd="url(#dot)"
            />
            <text
              x={CX}
              y={baseY + 42}
              textAnchor="middle"
              fontSize={9}
              fill={activeColor}
              fontWeight={700}
            >
              {regionBound === 1 ? "2σ breit" : regionBound === 2 ? "4σ breit" : "6σ breit"}
            </text>
          </>
        )}

        {/* Description box */}
        <rect
          x={10}
          y={H - 55}
          width={W - 20}
          height={50}
          rx={6}
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth={1}
        />
        {active ? (
          <>
            <text
              x={W / 2}
              y={H - 38}
              textAnchor="middle"
              fontSize={10}
              fill={activeColor}
              fontWeight={700}
            >
              {REGIONS.find((r) => r.key === active)?.label}: {activePct} der Werte
            </text>
            <text x={W / 2} y={H - 22} textAnchor="middle" fontSize={9} fill="#334155">
              {REGIONS.find((r) => r.key === active)?.desc}
            </text>
            <text x={W / 2} y={H - 9} textAnchor="middle" fontSize={8} fill="#64748b">
              Bsp: IQ-Verteilung (μ=100, σ=15) → ±1σ: IQ 85–115 ≈ 68 % der Population
            </text>
          </>
        ) : (
          <text x={W / 2} y={H - 26} textAnchor="middle" fontSize={10} fill="#94a3b8">
            Klicke oben auf eine Region, um Details anzuzeigen
          </text>
        )}

        {/* Variance formula */}
        <text x={W / 2} y={H - 62} textAnchor="middle" fontSize={8} fill="#94a3b8">
          σ = √(Varianz) &nbsp;|&nbsp; Varianz = Σ(xᵢ − μ)² / n
        </text>

        {/* Sigma label */}
        <text
          x={toSvgX(1) - sigma / 4}
          y={BY + BH * 0.2}
          textAnchor="middle"
          fontSize={8}
          fill="#64748b"
        >
          σ
        </text>
        <line
          x1={CX}
          y1={BY + BH * 0.12}
          x2={toSvgX(1)}
          y2={BY + BH * 0.12}
          stroke="#94a3b8"
          strokeWidth={1}
          markerEnd="url(#arrS)"
        />
        <defs>
          <marker id="arrS" markerWidth={4} markerHeight={4} refX={2} refY={2} orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#94a3b8" />
          </marker>
          <marker id="dot" markerWidth={4} markerHeight={4} refX={2} refY={2}>
            <circle cx={2} cy={2} r={1.5} fill={activeColor} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
