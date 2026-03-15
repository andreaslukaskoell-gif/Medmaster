import { useState } from "react";

type View = "function" | "derivative" | "integral";

const VIEWS: { key: View; label: string; color: string; formula: string; desc: string }[] = [
  {
    key: "function",
    label: "f(x)",
    color: "#2563eb",
    formula: "f(x) = x² − 2x",
    desc: "Die Originalfunktion — zeigt den Verlauf",
  },
  {
    key: "derivative",
    label: "f′(x)",
    color: "#16a34a",
    formula: "f′(x) = 2x − 2",
    desc: "Ableitung = Steigung der Tangente an jedem Punkt",
  },
  {
    key: "integral",
    label: "∫f(x)dx",
    color: "#d97706",
    formula: "F(x) = x³/3 − x² + C",
    desc: "Integral = Fläche unter der Kurve (Stammfunktion)",
  },
];

export default function CalculusOverview() {
  const [view, setView] = useState<View>("function");
  const [hoverX, setHoverX] = useState<number | null>(null);

  const W = 420;
  const H = 300;

  // Graph area
  const GX = 50;
  const GY = 30;
  const GW = 270;
  const GH = 170;

  const xMin = -1;
  const xMax = 4;
  const yMin = -4;
  const yMax = 8;

  const toSvgX = (x: number) => GX + ((x - xMin) / (xMax - xMin)) * GW;
  const toSvgY = (y: number) => GY + GH - ((y - yMin) / (yMax - yMin)) * GH;

  const f = (x: number) => x * x - 2 * x;
  const fPrime = (x: number) => 2 * x - 2;
  const F = (x: number) => (x * x * x) / 3 - x * x; // antiderivative

  const makePath = (fn: (x: number) => number, steps = 100) => {
    const pts: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const x = xMin + (i / steps) * (xMax - xMin);
      const y = fn(x);
      if (y >= yMin - 0.5 && y <= yMax + 0.5) {
        const sx = toSvgX(x).toFixed(1);
        const sy = toSvgY(Math.max(yMin, Math.min(yMax, y))).toFixed(1);
        pts.push(`${pts.length === 0 ? "M" : "L"}${sx},${sy}`);
      }
    }
    return pts.join(" ");
  };

  // Integral fill area (between x=0 and x=3, under f(x))
  const integralFill = () => {
    const pts: string[] = [];
    const xL = 0,
      xR = 3;
    for (let i = 0; i <= 60; i++) {
      const x = xL + (i / 60) * (xR - xL);
      const y = f(x);
      const sx = toSvgX(x).toFixed(1);
      const sy = toSvgY(Math.max(yMin, Math.min(yMax, y))).toFixed(1);
      pts.push(`${i === 0 ? "M" : "L"}${sx},${sy}`);
    }
    const axisY0 = toSvgY(0);
    pts.push(`L${toSvgX(xR)},${axisY0}`);
    pts.push(`L${toSvgX(xL)},${axisY0}`);
    pts.push("Z");
    return pts.join(" ");
  };

  // Axes
  const axisX0 = toSvgX(0);
  const axisY0 = toSvgY(0);

  // Tangent at hoverX
  const tangentX = hoverX ?? 1.5;
  const tx0 = tangentX - 1.2;
  const tx1 = tangentX + 1.2;
  const slope = fPrime(tangentX);
  const fy0 = f(tangentX) + slope * (tx0 - tangentX);
  const fy1 = f(tangentX) + slope * (tx1 - tangentX);

  const activeCfg = VIEWS.find((v) => v.key === view)!;

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
        Analysis — Funktion, Ableitung, Integral
      </h4>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">
        Klicke auf eine Ansicht
      </p>
      <div className="flex gap-2 justify-center mb-2">
        {VIEWS.map((v) => (
          <button
            key={v.key}
            onClick={() => setView(v.key)}
            className={`px-3 py-1 rounded text-xs font-bold border transition-colors ${
              view === v.key
                ? "text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300"
            }`}
            style={view === v.key ? { backgroundColor: v.color, borderColor: v.color } : {}}
          >
            {v.label}
          </button>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        onMouseMove={(e) => {
          const rect = (e.target as SVGElement).closest("svg")?.getBoundingClientRect();
          if (!rect) return;
          const svgX = ((e.clientX - rect.left) / rect.width) * W;
          const mathX = xMin + ((svgX - GX) / GW) * (xMax - xMin);
          if (mathX >= xMin && mathX <= xMax) setHoverX(mathX);
        }}
        onMouseLeave={() => setHoverX(null)}
      >
        <title>Analysis — Funktion, Ableitung, Integral</title>

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

        {/* Grid */}
        {[-1, 0, 1, 2, 3, 4].map((v) => (
          <g key={`gx${v}`}>
            <line
              x1={toSvgX(v)}
              y1={GY}
              x2={toSvgX(v)}
              y2={GY + GH}
              stroke="#e2e8f0"
              strokeWidth={0.8}
            />
            <text x={toSvgX(v)} y={GY + GH + 12} textAnchor="middle" fontSize={8} fill="#94a3b8">
              {v}
            </text>
          </g>
        ))}
        {[-4, -2, 0, 2, 4, 6, 8].map((v) => (
          <g key={`gy${v}`}>
            <line
              x1={GX}
              y1={toSvgY(v)}
              x2={GX + GW}
              y2={toSvgY(v)}
              stroke="#e2e8f0"
              strokeWidth={0.8}
            />
            <text x={GX - 5} y={toSvgY(v) + 4} textAnchor="end" fontSize={8} fill="#94a3b8">
              {v}
            </text>
          </g>
        ))}

        {/* Axes */}
        <line x1={GX} y1={axisY0} x2={GX + GW} y2={axisY0} stroke="#64748b" strokeWidth={1.5} />
        <line x1={axisX0} y1={GY} x2={axisX0} y2={GY + GH} stroke="#64748b" strokeWidth={1.5} />
        <text x={GX + GW + 5} y={axisY0 + 4} fontSize={9} fill="#64748b">
          x
        </text>
        <text x={axisX0 + 4} y={GY + 9} fontSize={9} fill="#64748b">
          y
        </text>

        {/* Integral fill */}
        {view === "integral" && <path d={integralFill()} fill="#d97706" fillOpacity={0.2} />}

        {/* Base function (always shown faintly when not selected) */}
        {view !== "function" && (
          <path
            d={makePath(f)}
            fill="none"
            stroke="#2563eb"
            strokeWidth={1}
            strokeOpacity={0.25}
            strokeDasharray="4,3"
          />
        )}

        {/* Main curve */}
        {view === "function" && (
          <path d={makePath(f)} fill="none" stroke="#2563eb" strokeWidth={2.5} />
        )}
        {view === "derivative" && (
          <>
            <path
              d={makePath(f)}
              fill="none"
              stroke="#2563eb"
              strokeWidth={1}
              strokeOpacity={0.3}
              strokeDasharray="4,3"
            />
            <path d={makePath(fPrime)} fill="none" stroke="#16a34a" strokeWidth={2.5} />
          </>
        )}
        {view === "integral" && (
          <path d={makePath(f)} fill="none" stroke="#d97706" strokeWidth={2.5} />
        )}

        {/* Tangent line (derivative view) */}
        {view === "derivative" && (
          <>
            <line
              x1={toSvgX(tx0)}
              y1={toSvgY(fy0)}
              x2={toSvgX(tx1)}
              y2={toSvgY(fy1)}
              stroke="#16a34a"
              strokeWidth={1.8}
              strokeDasharray="5,3"
            />
            <circle cx={toSvgX(tangentX)} cy={toSvgY(f(tangentX))} r={4} fill="#16a34a" />
            <text
              x={toSvgX(tangentX) + 8}
              y={toSvgY(f(tangentX)) - 6}
              fontSize={8}
              fill="#16a34a"
              fontWeight={600}
            >
              Steigung = {slope.toFixed(1)}
            </text>
          </>
        )}

        {/* Integral bounds markers */}
        {view === "integral" && (
          <>
            <line
              x1={toSvgX(0)}
              y1={GY}
              x2={toSvgX(0)}
              y2={GY + GH}
              stroke="#d97706"
              strokeWidth={1}
              strokeDasharray="4,3"
            />
            <line
              x1={toSvgX(3)}
              y1={GY}
              x2={toSvgX(3)}
              y2={GY + GH}
              stroke="#d97706"
              strokeWidth={1}
              strokeDasharray="4,3"
            />
            <text
              x={toSvgX(1.5)}
              y={toSvgY(-1)}
              textAnchor="middle"
              fontSize={9}
              fill="#d97706"
              fontWeight={700}
            >
              ∫₀³ f(x)dx = {(F(3) - F(0)).toFixed(2)}
            </text>
          </>
        )}

        {/* Info panel */}
        <rect
          x={330}
          y={GY}
          width={85}
          height={GH}
          rx={6}
          fill={activeCfg.color}
          fillOpacity={0.08}
          stroke={activeCfg.color}
          strokeWidth={1.2}
        />
        <text
          x={372}
          y={GY + 16}
          textAnchor="middle"
          fontSize={11}
          fill={activeCfg.color}
          fontWeight={800}
        >
          {activeCfg.label}
        </text>
        <line
          x1={336}
          y1={GY + 22}
          x2={408}
          y2={GY + 22}
          stroke={activeCfg.color}
          strokeWidth={0.8}
          strokeOpacity={0.4}
        />
        <text x={336} y={GY + 36} fontSize={8} fill="#334155" fontWeight={600}>
          {activeCfg.formula.split(" = ")[0]} =
        </text>
        <text x={336} y={GY + 50} fontSize={8} fill={activeCfg.color} fontWeight={700}>
          {activeCfg.formula.split(" = ")[1]}
        </text>

        {/* Description */}
        <rect
          x={10}
          y={H - 68}
          width={W - 20}
          height={30}
          rx={5}
          fill={activeCfg.color}
          fillOpacity={0.08}
          stroke={activeCfg.color}
          strokeWidth={1}
        />
        <text x={W / 2} y={H - 55} textAnchor="middle" fontSize={9} fill="#334155" fontWeight={600}>
          {activeCfg.desc}
        </text>
        <text x={W / 2} y={H - 42} textAnchor="middle" fontSize={8} fill="#64748b">
          {view === "function"
            ? "Nullstellen bei x=0 und x=2, Scheitelpunkt bei x=1 (Minimum)"
            : view === "derivative"
              ? "f′(x)=0 bei x=1 → Extrempunkt | f′(x)>0 → steigend | f′(x)<0 → fallend"
              : "∫₀³ f(x)dx = F(3)−F(0) = 0 − 0 = 0  (Vorzeichen: Fläche unter Achse negativ)"}
        </text>

        {/* Formula summary */}
        <rect
          x={10}
          y={H - 34}
          width={W - 20}
          height={28}
          rx={5}
          fill="#f1f5f9"
          stroke="#e2e8f0"
          strokeWidth={1}
        />
        <text x={W / 2} y={H - 20} textAnchor="middle" fontSize={9} fill="#334155" fontWeight={600}>
          f(x) = xⁿ → f′(x) = n·xⁿ⁻¹ (Potenzregel)
        </text>
        <text x={W / 2} y={H - 8} textAnchor="middle" fontSize={8} fill="#64748b">
          ∫xⁿdx = xⁿ⁺¹/(n+1) + C (Umkehrung der Ableitung)
        </text>
      </svg>
    </div>
  );
}
