export default function QuadraticFunction() {
  const W = 400,
    H = 280;
  const cx = W / 2,
    cy = 180;
  const scX = 30,
    scY = 4;

  // Parabola y = x^2 - 4 (vertex at (0,-4), roots at ±2)
  const pts: string[] = [];
  for (let x = -5; x <= 5; x += 0.1) {
    const y = x * x - 4;
    if (y > 8) continue;
    pts.push(`${(cx + x * scX).toFixed(1)},${(cy - y * scY).toFixed(1)}`);
  }

  // Second parabola y = -0.5x^2 + 2 (opens down)
  const pts2: string[] = [];
  for (let x = -5; x <= 5; x += 0.1) {
    const y = -0.5 * x * x + 2;
    if (y < -8) continue;
    pts2.push(`${(cx + x * scX).toFixed(1)},${(cy - y * scY).toFixed(1)}`);
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
      <title>Quadratische Funktionen — Parabelformen</title>

      <text x={W / 2} y={18} textAnchor="middle" fontSize={13} fill="#1e40af" fontWeight={700}>
        Quadratische Funktionen
      </text>

      {/* Grid */}
      {[-4, -2, 0, 2, 4].map((v) => (
        <line
          key={`h${v}`}
          x1={cx - 5 * scX}
          y1={cy - v * scY}
          x2={cx + 5 * scX}
          y2={cy - v * scY}
          stroke="#e2e8f0"
          strokeWidth={0.5}
        />
      ))}

      {/* Axes */}
      <line
        x1={cx - 5.5 * scX}
        y1={cy}
        x2={cx + 5.5 * scX}
        y2={cy}
        stroke="#334155"
        strokeWidth={1.5}
        markerEnd="url(#arrM)"
      />
      <line
        x1={cx}
        y1={cy + 5 * scY}
        x2={cx}
        y2={cy - 9 * scY}
        stroke="#334155"
        strokeWidth={1.5}
        markerEnd="url(#arrM)"
      />
      <text x={cx + 5.5 * scX + 5} y={cy + 4} fontSize={11} fill="#334155">
        x
      </text>
      <text x={cx + 5} y={cy - 9 * scY + 2} fontSize={11} fill="#334155">
        y
      </text>

      {/* Tick marks */}
      {[-4, -2, 2, 4].map((v) => (
        <g key={`tx${v}`}>
          <line
            x1={cx + v * scX}
            y1={cy - 3}
            x2={cx + v * scX}
            y2={cy + 3}
            stroke="#334155"
            strokeWidth={1}
          />
          <text x={cx + v * scX} y={cy + 14} textAnchor="middle" fontSize={8} fill="#64748b">
            {v}
          </text>
        </g>
      ))}

      {/* Parabola 1: opens up */}
      <polyline points={pts.join(" ")} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      {/* Vertex */}
      <circle cx={cx} cy={cy + 4 * scY} r={4} fill="#2563eb" />
      <text x={cx + 8} y={cy + 4 * scY + 4} fontSize={9} fill="#2563eb" fontWeight={600}>
        S(0|−4)
      </text>
      {/* Roots */}
      <circle cx={cx - 2 * scX} cy={cy} r={3} fill="#2563eb" />
      <circle cx={cx + 2 * scX} cy={cy} r={3} fill="#2563eb" />
      {/* Label */}
      <text x={cx + 4.5 * scX} y={cy - 6 * scY} fontSize={10} fill="#2563eb" fontWeight={600}>
        y = x² − 4
      </text>
      <text x={cx + 4.5 * scX} y={cy - 6 * scY + 12} fontSize={8} fill="#2563eb">
        a &gt; 0 → nach oben
      </text>

      {/* Parabola 2: opens down */}
      <polyline
        points={pts2.join(" ")}
        fill="none"
        stroke="#dc2626"
        strokeWidth={2}
        strokeDasharray="6,3"
      />
      <circle cx={cx} cy={cy - 2 * scY} r={4} fill="#dc2626" />
      <text x={cx + 8} y={cy - 2 * scY - 5} fontSize={9} fill="#dc2626" fontWeight={600}>
        S(0|2)
      </text>
      <text x={cx - 5 * scX} y={cy - 3 * scY} fontSize={10} fill="#dc2626" fontWeight={600}>
        y = −½x² + 2
      </text>
      <text x={cx - 5 * scX} y={cy - 3 * scY + 12} fontSize={8} fill="#dc2626">
        a &lt; 0 → nach unten
      </text>

      {/* Arrow marker */}
      <defs>
        <marker id="arrM" markerWidth={8} markerHeight={6} refX={8} refY={3} orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#334155" />
        </marker>
      </defs>

      {/* Formula box */}
      <rect
        x={10}
        y={H - 30}
        width={W - 20}
        height={22}
        rx={4}
        fill="#f8fafc"
        stroke="#e2e8f0"
        strokeWidth={1}
      />
      <text x={W / 2} y={H - 15} textAnchor="middle" fontSize={9} fill="#334155">
        y = ax² + bx + c | Scheitelpunkt S(−b/2a | c − b²/4a) | Nullstellen: x = (−b ± √(b²−4ac)) /
        2a
      </text>
    </svg>
  );
}
