import { useState } from "react";

export default function VectorAddition() {
  const [showParallelogram, setShowParallelogram] = useState(true);

  // Vectors
  const aX = 3,
    aY = 2;
  const bX = 1,
    bY = 3;
  const sumX = aX + bX,
    sumY = aY + bY;

  // Coordinate system
  const ORIGIN_X = 80;
  const ORIGIN_Y = 280;
  const SCALE = 40;

  const toSvgX = (x: number) => ORIGIN_X + x * SCALE;
  const toSvgY = (y: number) => ORIGIN_Y - y * SCALE;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Vektoraddition</h4>
      <p className="text-xs text-muted">Parallelogrammregel: a + b = c</p>

      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setShowParallelogram(!showParallelogram)}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            showParallelogram
              ? "bg-teal-600 text-white border-teal-600"
              : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          {showParallelogram ? "Parallelogramm ausblenden" : "Parallelogramm anzeigen"}
        </button>
      </div>

      <svg viewBox="0 0 420 350" className="w-full max-w-lg mx-auto">
        <defs>
          <marker id="arrowVecA" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#3b82f6" />
          </marker>
          <marker id="arrowVecB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#ef4444" />
          </marker>
          <marker id="arrowVecSum" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#0d9488" />
          </marker>
        </defs>

        <text x="210" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Vektoraddition — Parallelogrammregel
        </text>

        {/* Grid */}
        {Array.from({ length: 7 }, (_, i) => (
          <g key={`gx-${i}`}>
            <line
              x1={toSvgX(i)}
              y1={toSvgY(0)}
              x2={toSvgX(i)}
              y2={toSvgY(6)}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          </g>
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <g key={`gy-${i}`}>
            <line
              x1={toSvgX(0)}
              y1={toSvgY(i)}
              x2={toSvgX(6)}
              y2={toSvgY(i)}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          </g>
        ))}

        {/* X axis */}
        <line
          x1={toSvgX(-0.3)}
          y1={ORIGIN_Y}
          x2={toSvgX(6.3)}
          y2={ORIGIN_Y}
          stroke="#374151"
          strokeWidth="1.5"
        />
        <polygon
          points={`${toSvgX(6.3)},${ORIGIN_Y - 4} ${toSvgX(6.3)},${ORIGIN_Y + 4} ${toSvgX(6.3) + 8},${ORIGIN_Y}`}
          fill="#374151"
        />
        <text x={toSvgX(6.3) + 12} y={ORIGIN_Y + 4} fontSize="13" fill="#374151" fontWeight="bold">
          x
        </text>

        {/* Y axis */}
        <line
          x1={ORIGIN_X}
          y1={toSvgY(-0.3)}
          x2={ORIGIN_X}
          y2={toSvgY(6.3)}
          stroke="#374151"
          strokeWidth="1.5"
        />
        <polygon
          points={`${ORIGIN_X - 4},${toSvgY(6.3)} ${ORIGIN_X + 4},${toSvgY(6.3)} ${ORIGIN_X},${toSvgY(6.3) - 8}`}
          fill="#374151"
        />
        <text x={ORIGIN_X + 8} y={toSvgY(6.3) - 4} fontSize="13" fill="#374151" fontWeight="bold">
          y
        </text>

        {/* Tick marks */}
        {Array.from({ length: 6 }, (_, i) => i + 1).map((v) => (
          <g key={`tick-${v}`}>
            <line
              x1={toSvgX(v)}
              y1={ORIGIN_Y - 3}
              x2={toSvgX(v)}
              y2={ORIGIN_Y + 3}
              stroke="#374151"
              strokeWidth="1"
            />
            <text x={toSvgX(v)} y={ORIGIN_Y + 14} textAnchor="middle" fontSize="7" fill="#6b7280">
              {v}
            </text>
            <line
              x1={ORIGIN_X - 3}
              y1={toSvgY(v)}
              x2={ORIGIN_X + 3}
              y2={toSvgY(v)}
              stroke="#374151"
              strokeWidth="1"
            />
            <text x={ORIGIN_X - 10} y={toSvgY(v) + 3} textAnchor="end" fontSize="7" fill="#6b7280">
              {v}
            </text>
          </g>
        ))}
        <text x={ORIGIN_X - 8} y={ORIGIN_Y + 12} textAnchor="end" fontSize="7" fill="#6b7280">
          0
        </text>

        {/* Parallelogram fill */}
        {showParallelogram && (
          <polygon
            points={`${toSvgX(0)},${toSvgY(0)} ${toSvgX(aX)},${toSvgY(aY)} ${toSvgX(sumX)},${toSvgY(sumY)} ${toSvgX(bX)},${toSvgY(bY)}`}
            fill="#99f6e4"
            opacity="0.2"
            stroke="#0d9488"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        )}

        {/* Parallelogram dashed sides */}
        {showParallelogram && (
          <>
            <line
              x1={toSvgX(aX)}
              y1={toSvgY(aY)}
              x2={toSvgX(sumX)}
              y2={toSvgY(sumY)}
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeDasharray="5 3"
              opacity="0.5"
            />
            <line
              x1={toSvgX(bX)}
              y1={toSvgY(bY)}
              x2={toSvgX(sumX)}
              y2={toSvgY(sumY)}
              stroke="#3b82f6"
              strokeWidth="1.5"
              strokeDasharray="5 3"
              opacity="0.5"
            />
          </>
        )}

        {/* Vector a (blue) */}
        <line
          x1={toSvgX(0)}
          y1={toSvgY(0)}
          x2={toSvgX(aX) - 4}
          y2={toSvgY(aY) + 2}
          stroke="#3b82f6"
          strokeWidth="3"
          markerEnd="url(#arrowVecA)"
        />
        <text
          x={toSvgX(aX / 2) + 5}
          y={toSvgY(aY / 2) + 15}
          fontSize="13"
          fill="#3b82f6"
          fontWeight="bold"
        >
          a
        </text>

        {/* Vector b (red) */}
        <line
          x1={toSvgX(0)}
          y1={toSvgY(0)}
          x2={toSvgX(bX) + 2}
          y2={toSvgY(bY) + 4}
          stroke="#ef4444"
          strokeWidth="3"
          markerEnd="url(#arrowVecB)"
        />
        <text
          x={toSvgX(bX / 2) - 12}
          y={toSvgY(bY / 2) - 2}
          fontSize="13"
          fill="#ef4444"
          fontWeight="bold"
        >
          b
        </text>

        {/* Resultant vector a+b (teal) */}
        <line
          x1={toSvgX(0)}
          y1={toSvgY(0)}
          x2={toSvgX(sumX) - 3}
          y2={toSvgY(sumY) + 3}
          stroke="#0d9488"
          strokeWidth="3"
          markerEnd="url(#arrowVecSum)"
        />
        <text
          x={toSvgX(sumX / 2) - 5}
          y={toSvgY(sumY / 2) - 5}
          fontSize="13"
          fill="#0d9488"
          fontWeight="bold"
        >
          a + b
        </text>

        {/* Point labels */}
        <circle cx={toSvgX(0)} cy={toSvgY(0)} r="3" fill="#374151" />
        <circle cx={toSvgX(aX)} cy={toSvgY(aY)} r="4" fill="#3b82f6" />
        <circle cx={toSvgX(bX)} cy={toSvgY(bY)} r="4" fill="#ef4444" />
        <circle cx={toSvgX(sumX)} cy={toSvgY(sumY)} r="4" fill="#0d9488" />

        {/* Coordinate labels */}
        <text x={toSvgX(aX) + 10} y={toSvgY(aY)} fontSize="13" fill="#3b82f6">
          ({aX}|{aY})
        </text>
        <text x={toSvgX(bX) - 30} y={toSvgY(bY)} fontSize="13" fill="#ef4444">
          ({bX}|{bY})
        </text>
        <text x={toSvgX(sumX) + 10} y={toSvgY(sumY)} fontSize="13" fill="#0d9488">
          ({sumX}|{sumY})
        </text>

        {/* Component notation box */}
        <rect
          x="250"
          y="220"
          width="155"
          height="110"
          rx="6"
          fill="#f0fdfa"
          stroke="#99f6e4"
          strokeWidth="1"
        />
        <text x="327" y="238" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Komponentendarstellung
        </text>

        <text x="260" y="258" fontSize="13" fill="#3b82f6" fontWeight="bold">
          a
        </text>
        <text x="272" y="258" fontSize="13" fill="#374151">
          = ({aX}, {aY})
        </text>

        <text x="260" y="276" fontSize="13" fill="#ef4444" fontWeight="bold">
          b
        </text>
        <text x="272" y="276" fontSize="13" fill="#374151">
          = ({bX}, {bY})
        </text>

        <line x1="260" y1="284" x2="380" y2="284" stroke="#d1d5db" strokeWidth="0.8" />

        <text x="260" y="300" fontSize="13" fill="#0d9488" fontWeight="bold">
          a + b
        </text>
        <text x="292" y="300" fontSize="13" fill="#374151">
          = ({aX}+{bX}, {aY}+{bY})
        </text>
        <text x="292" y="316" fontSize="13" fill="#374151" fontWeight="bold">
          = ({sumX}, {sumY})
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Vektoren werden komponentenweise addiert: Die x- und y-Komponenten werden einzeln
          summiert. Graphisch entspricht die Summe der Diagonale des Parallelogramms, das von den
          beiden Vektoren aufgespannt wird.
        </p>
      </div>
    </div>
  );
}
