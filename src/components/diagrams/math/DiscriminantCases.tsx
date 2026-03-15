import { useState } from "react";

type Case = "pos" | "zero" | "neg";

type CaseConfig = {
  label: string;
  disc: string;
  subtitle: string;
  color: string;
  bgColor: string;
  // parabola: a*(x-h)^2 + k, expressed for plotting
  a: number;
  h: number;
  k: number;
  roots: string;
  formula: string;
};

const CASES: Record<Case, CaseConfig> = {
  pos: {
    label: "D > 0",
    disc: "b² − 4ac > 0",
    subtitle: "Zwei verschiedene reelle Nullstellen",
    color: "#2563eb",
    bgColor: "#dbeafe",
    a: 1,
    h: 0,
    k: -4,
    roots: "x₁ = −2 und x₂ = 2",
    formula: "f(x) = x² − 4",
  },
  zero: {
    label: "D = 0",
    disc: "b² − 4ac = 0",
    subtitle: "Eine doppelte reelle Nullstelle",
    color: "#16a34a",
    bgColor: "#dcfce7",
    a: 1,
    h: 1,
    k: 0,
    roots: "x₁ = x₂ = 1 (Scheitelpunkt)",
    formula: "f(x) = (x − 1)²",
  },
  neg: {
    label: "D < 0",
    disc: "b² − 4ac < 0",
    subtitle: "Keine reellen Nullstellen",
    color: "#dc2626",
    bgColor: "#fee2e2",
    a: 1,
    h: 0,
    k: 3,
    roots: "Keine reellen Lösungen",
    formula: "f(x) = x² + 3",
  },
};

const CASE_KEYS: Case[] = ["pos", "zero", "neg"];

export default function DiscriminantCases() {
  const [active, setActive] = useState<Case>("pos");
  const cfg = CASES[active];

  const W = 420;
  const H = 280;

  // Graph area
  const GX = 30;
  const GY = 30;
  const GW = 200;
  const GH = 160;

  // Map math coords to SVG
  const xMin = -4;
  const xMax = 4;
  const yMin = -6;
  const yMax = 8;
  const toSvgX = (x: number) => GX + ((x - xMin) / (xMax - xMin)) * GW;
  const toSvgY = (y: number) => GY + GH - ((y - yMin) / (yMax - yMin)) * GH;

  // Parabola path
  const steps = 80;
  const parabolaPts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const xv = xMin + (i / steps) * (xMax - xMin);
    const yv = cfg.a * (xv - cfg.h) ** 2 + cfg.k;
    if (yv >= yMin && yv <= yMax) {
      parabolaPts.push(
        `${i === 0 || (i > 0 && parabolaPts.length === 0) ? "M" : "L"}${toSvgX(xv).toFixed(1)},${toSvgY(yv).toFixed(1)}`
      );
    }
  }

  // Axis lines
  const axisX0 = toSvgX(0);
  const axisY0 = toSvgY(0);

  // Roots
  const rootX1 = cfg.h - Math.sqrt(Math.max(0, -cfg.k / cfg.a));
  const rootX2 = cfg.h + Math.sqrt(Math.max(0, -cfg.k / cfg.a));

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
        Diskriminante der quadratischen Gleichung
      </h4>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">
        D = b² − 4ac &nbsp;|&nbsp; Klicke auf einen Fall
      </p>
      <div className="flex gap-2 justify-center mb-2">
        {CASE_KEYS.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-1 rounded text-xs font-bold border transition-colors ${
              active === c
                ? "text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            }`}
            style={
              active === c ? { backgroundColor: CASES[c].color, borderColor: CASES[c].color } : {}
            }
          >
            {CASES[c].label}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        <title>Diskriminante — Fallunterscheidung</title>

        {/* Graph background */}
        <rect
          x={GX}
          y={GY}
          width={GW}
          height={GH}
          rx={4}
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth={1}
        />

        {/* Grid lines */}
        {[-4, -2, 0, 2, 4].map((v) => (
          <g key={`gx${v}`}>
            <line
              x1={toSvgX(v)}
              y1={GY}
              x2={toSvgX(v)}
              y2={GY + GH}
              stroke="#e2e8f0"
              strokeWidth={0.8}
            />
            <text x={toSvgX(v)} y={GY + GH + 11} textAnchor="middle" fontSize={8} fill="#94a3b8">
              {v}
            </text>
          </g>
        ))}
        {[-4, 0, 4, 8].map((v) => (
          <line
            key={`gy${v}`}
            x1={GX}
            y1={toSvgY(v)}
            x2={GX + GW}
            y2={toSvgY(v)}
            stroke="#e2e8f0"
            strokeWidth={0.8}
          />
        ))}

        {/* Axes */}
        <line x1={GX} y1={axisY0} x2={GX + GW} y2={axisY0} stroke="#94a3b8" strokeWidth={1.2} />
        <line x1={axisX0} y1={GY} x2={axisX0} y2={GY + GH} stroke="#94a3b8" strokeWidth={1.2} />
        <text x={GX + GW - 4} y={axisY0 - 4} fontSize={9} fill="#64748b">
          x
        </text>
        <text x={axisX0 + 4} y={GY + 10} fontSize={9} fill="#64748b">
          y
        </text>

        {/* Parabola */}
        <path d={parabolaPts.join(" ")} fill="none" stroke={cfg.color} strokeWidth={2.5} />

        {/* Root markers */}
        {active === "pos" && (
          <>
            <circle cx={toSvgX(rootX1)} cy={axisY0} r={5} fill={cfg.color} />
            <circle cx={toSvgX(rootX2)} cy={axisY0} r={5} fill={cfg.color} />
          </>
        )}
        {active === "zero" && (
          <circle cx={toSvgX(cfg.h)} cy={toSvgY(cfg.k)} r={5} fill={cfg.color} />
        )}
        {active === "neg" && (
          // No real roots — show minimum above x-axis
          <circle
            cx={toSvgX(cfg.h)}
            cy={toSvgY(cfg.k)}
            r={5}
            fill={cfg.color}
            fillOpacity={0.5}
            strokeDasharray="3,2"
            stroke={cfg.color}
            strokeWidth={1}
          />
        )}

        {/* Vertex label */}
        <text
          x={toSvgX(cfg.h) + 6}
          y={toSvgY(cfg.k) - 6}
          fontSize={8}
          fill={cfg.color}
          fontWeight={600}
        >
          S({cfg.h},{cfg.k})
        </text>

        {/* X-axis label area */}
        <text x={GX + GW / 2} y={GY + GH + 22} textAnchor="middle" fontSize={8} fill="#64748b">
          x
        </text>

        {/* Right panel — info */}
        <rect
          x={245}
          y={GY}
          width={170}
          height={GH}
          rx={6}
          fill={cfg.bgColor}
          stroke={cfg.color}
          strokeWidth={1.5}
        />

        <text
          x={330}
          y={GY + 20}
          textAnchor="middle"
          fontSize={14}
          fill={cfg.color}
          fontWeight={800}
        >
          {cfg.label}
        </text>
        <text x={330} y={GY + 35} textAnchor="middle" fontSize={9} fill="#334155" fontWeight={600}>
          {cfg.disc}
        </text>

        {/* Divider */}
        <line
          x1={255}
          y1={GY + 42}
          x2={405}
          y2={GY + 42}
          stroke={cfg.color}
          strokeWidth={0.8}
          strokeOpacity={0.4}
        />

        <text x={252} y={GY + 56} fontSize={9} fill="#334155" fontWeight={700}>
          Aussage:
        </text>
        {cfg.subtitle
          .split(" ")
          .reduce<string[][]>((acc, word) => {
            const last = acc[acc.length - 1];
            if (!last || last.join(" ").length + word.length > 24) acc.push([word]);
            else last.push(word);
            return acc;
          }, [])
          .map((line, li) => (
            <text
              key={li}
              x={252}
              y={GY + 68 + li * 13}
              fontSize={9}
              fill={cfg.color}
              fontWeight={600}
            >
              {line.join(" ")}
            </text>
          ))}

        <text x={252} y={GY + 100} fontSize={9} fill="#334155" fontWeight={700}>
          Funktion:
        </text>
        <text x={252} y={GY + 113} fontSize={9} fill="#64748b">
          {cfg.formula}
        </text>

        <text x={252} y={GY + 128} fontSize={9} fill="#334155" fontWeight={700}>
          Lösung:
        </text>
        {cfg.roots.split(" und ").map((r, ri) => (
          <text
            key={ri}
            x={252}
            y={GY + 141 + ri * 13}
            fontSize={9}
            fill={cfg.color}
            fontWeight={600}
          >
            {r}
          </text>
        ))}

        {/* Formula display */}
        <rect
          x={10}
          y={GY + GH + 30}
          width={W - 20}
          height={44}
          rx={6}
          fill="#f1f5f9"
          stroke="#e2e8f0"
          strokeWidth={1}
        />
        <text
          x={W / 2}
          y={GY + GH + 46}
          textAnchor="middle"
          fontSize={10}
          fill="#334155"
          fontWeight={700}
        >
          Lösungsformel: x = (−b ± √D) / 2a
        </text>
        <text x={W / 2} y={GY + GH + 62} textAnchor="middle" fontSize={10} fill="#64748b">
          D &gt; 0: 2 Lösungen &nbsp;|&nbsp; D = 0: 1 Lösung &nbsp;|&nbsp; D &lt; 0: keine reelle
          Lösung
        </text>
      </svg>
    </div>
  );
}
