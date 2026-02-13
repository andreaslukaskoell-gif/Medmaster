import { useState } from "react";

const functions = [
  { id: "linear", label: "y = 2x", color: "#3b82f6", type: "Linear" },
  { id: "quadratic", label: "y = x\u00B2", color: "#22c55e", type: "Quadratisch" },
  { id: "exponential", label: "y = 2\u02E3", color: "#ef4444", type: "Exponentiell" },
];

export default function CoordinateSystem() {
  const [visible, setVisible] = useState<Record<string, boolean>>({
    linear: true,
    quadratic: true,
    exponential: true,
  });

  const toggleFn = (id: string) => setVisible((v) => ({ ...v, [id]: !v[id] }));

  // Coordinate system mapping
  const ORIGIN_X = 200;
  const ORIGIN_Y = 220;
  const SCALE = 28; // pixels per unit

  const toSvgX = (x: number) => ORIGIN_X + x * SCALE;
  const toSvgY = (y: number) => ORIGIN_Y - y * SCALE;

  // Generate path for linear: y = 2x
  const linearPoints: string[] = [];
  for (let x = -6; x <= 6; x += 0.5) {
    const y = 2 * x;
    if (y >= -7 && y <= 7) {
      linearPoints.push(`${toSvgX(x)},${toSvgY(y)}`);
    }
  }

  // Generate path for quadratic: y = x^2
  const quadPoints: string[] = [];
  for (let x = -3; x <= 3; x += 0.1) {
    const y = x * x;
    if (y <= 7) {
      quadPoints.push(`${toSvgX(x).toFixed(1)},${toSvgY(y).toFixed(1)}`);
    }
  }

  // Generate path for exponential: y = 2^x
  const expPoints: string[] = [];
  for (let x = -6; x <= 3; x += 0.1) {
    const y = Math.pow(2, x);
    if (y <= 7 && y >= -7) {
      expPoints.push(`${toSvgX(x).toFixed(1)},${toSvgY(y).toFixed(1)}`);
    }
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Koordinatensystem — Funktionstypen</h4>
      <p className="text-xs text-muted">Schalte Funktionen ein und aus.</p>

      <div className="flex gap-2 flex-wrap mb-2">
        {functions.map((f) => (
          <button
            key={f.id}
            onClick={() => toggleFn(f.id)}
            className="text-xs px-3 py-1 rounded-full border transition-colors"
            style={{
              backgroundColor: visible[f.id] ? f.color : "transparent",
              color: visible[f.id] ? "#fff" : f.color,
              borderColor: f.color,
            }}
          >
            {f.label} ({f.type})
          </button>
        ))}
      </div>

      <svg viewBox="0 0 420 310" className="w-full max-w-lg mx-auto">
        <text x="210" y="18" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">Funktionstypen im Vergleich</text>

        {/* Grid lines */}
        {Array.from({ length: 15 }, (_, i) => i - 7).map((v) => (
          <g key={`grid-${v}`}>
            {/* Vertical */}
            <line x1={toSvgX(v)} y1={toSvgY(7)} x2={toSvgX(v)} y2={toSvgY(-3)} stroke="#f3f4f6" strokeWidth="1" />
            {/* Horizontal */}
            {v >= -3 && v <= 7 && (
              <line x1={toSvgX(-7)} y1={toSvgY(v)} x2={toSvgX(7)} y2={toSvgY(v)} stroke="#f3f4f6" strokeWidth="1" />
            )}
          </g>
        ))}

        {/* X axis */}
        <line x1={toSvgX(-7)} y1={ORIGIN_Y} x2={toSvgX(7.5)} y2={ORIGIN_Y} stroke="#374151" strokeWidth="1.5" />
        <polygon points={`${toSvgX(7.5)},${ORIGIN_Y - 4} ${toSvgX(7.5)},${ORIGIN_Y + 4} ${toSvgX(7.5) + 8},${ORIGIN_Y}`} fill="#374151" />
        <text x={toSvgX(7.5) + 10} y={ORIGIN_Y + 4} fontSize="13" fill="#374151" fontWeight="bold">x</text>

        {/* Y axis */}
        <line x1={ORIGIN_X} y1={toSvgY(-3)} x2={ORIGIN_X} y2={toSvgY(7.5)} stroke="#374151" strokeWidth="1.5" />
        <polygon points={`${ORIGIN_X - 4},${toSvgY(7.5)} ${ORIGIN_X + 4},${toSvgY(7.5)} ${ORIGIN_X},${toSvgY(7.5) - 8}`} fill="#374151" />
        <text x={ORIGIN_X + 8} y={toSvgY(7.5) - 2} fontSize="13" fill="#374151" fontWeight="bold">y</text>

        {/* Tick marks and labels */}
        {Array.from({ length: 13 }, (_, i) => i - 6).map((v) => (
          <g key={`tick-x-${v}`}>
            {v !== 0 && (
              <>
                <line x1={toSvgX(v)} y1={ORIGIN_Y - 3} x2={toSvgX(v)} y2={ORIGIN_Y + 3} stroke="#374151" strokeWidth="1" />
                <text x={toSvgX(v)} y={ORIGIN_Y + 14} textAnchor="middle" fontSize="7" fill="#6b7280">{v}</text>
              </>
            )}
          </g>
        ))}
        {Array.from({ length: 10 }, (_, i) => i - 2).map((v) => (
          <g key={`tick-y-${v}`}>
            {v !== 0 && v <= 7 && (
              <>
                <line x1={ORIGIN_X - 3} y1={toSvgY(v)} x2={ORIGIN_X + 3} y2={toSvgY(v)} stroke="#374151" strokeWidth="1" />
                <text x={ORIGIN_X - 10} y={toSvgY(v) + 3} textAnchor="end" fontSize="7" fill="#6b7280">{v}</text>
              </>
            )}
          </g>
        ))}
        <text x={ORIGIN_X - 8} y={ORIGIN_Y + 12} textAnchor="end" fontSize="7" fill="#6b7280">0</text>

        {/* Linear function: y = 2x */}
        {visible.linear && (
          <polyline
            points={linearPoints.join(" ")}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2.5"
          />
        )}

        {/* Quadratic function: y = x^2 */}
        {visible.quadratic && (
          <polyline
            points={quadPoints.join(" ")}
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.5"
          />
        )}

        {/* Exponential function: y = 2^x */}
        {visible.exponential && (
          <polyline
            points={expPoints.join(" ")}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2.5"
          />
        )}

        {/* Function labels on the graph */}
        {visible.linear && (
          <text x={toSvgX(3) + 5} y={toSvgY(6) + 5} fontSize="13" fill="#3b82f6" fontWeight="bold">y = 2x</text>
        )}
        {visible.quadratic && (
          <text x={toSvgX(2.5) + 5} y={toSvgY(6.25)} fontSize="13" fill="#22c55e" fontWeight="bold">y = x\u00B2</text>
        )}
        {visible.exponential && (
          <text x={toSvgX(2.8) + 5} y={toSvgY(7)} fontSize="13" fill="#ef4444" fontWeight="bold">y = 2\u02E3</text>
        )}

        {/* Origin marker */}
        <circle cx={ORIGIN_X} cy={ORIGIN_Y} r="3" fill="#0d9488" />
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          <strong className="text-blue-600">Linear (y=2x):</strong> Konstante Steigung, Gerade durch den Ursprung.{" "}
          <strong className="text-green-600">Quadratisch (y=x\u00B2):</strong> Parabel, symmetrisch zur y-Achse.{" "}
          <strong className="text-red-600">Exponentiell (y=2\u02E3):</strong> Waechst immer schneller, Asymptote bei y=0.
        </p>
      </div>
    </div>
  );
}
