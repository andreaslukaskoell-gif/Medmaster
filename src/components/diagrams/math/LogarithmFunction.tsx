export default function LogarithmFunction() {
  const W = 400,
    H = 260;
  const cx = 80,
    cy = 150;
  const scX = 40,
    scY = 35;

  // ln(x)
  const ptsLn: string[] = [];
  for (let x = 0.05; x <= 7; x += 0.05) {
    const y = Math.log(x);
    if (y < -4 || y > 3) continue;
    ptsLn.push(`${(cx + x * scX).toFixed(1)},${(cy - y * scY).toFixed(1)}`);
  }

  // log10(x)
  const ptsLog: string[] = [];
  for (let x = 0.05; x <= 7; x += 0.05) {
    const y = Math.log10(x);
    if (y < -4 || y > 3) continue;
    ptsLog.push(`${(cx + x * scX).toFixed(1)},${(cy - y * scY).toFixed(1)}`);
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
      <title>Logarithmusfunktionen — ln und log</title>

      <text x={W / 2} y={18} textAnchor="middle" fontSize={13} fill="#1e40af" fontWeight={700}>
        Logarithmusfunktionen
      </text>

      {/* Grid lines */}
      {[1, 2, 3, 4, 5, 6].map((v) => (
        <line
          key={`v${v}`}
          x1={cx + v * scX}
          y1={cy - 2.5 * scY}
          x2={cx + v * scX}
          y2={cy + 2 * scY}
          stroke="#f1f5f9"
          strokeWidth={0.5}
        />
      ))}

      {/* Axes */}
      <line x1={cx - 10} y1={cy} x2={cx + 7.5 * scX} y2={cy} stroke="#334155" strokeWidth={1.5} />
      <line
        x1={cx}
        y1={cy + 2.5 * scY}
        x2={cx}
        y2={cy - 2.5 * scY}
        stroke="#334155"
        strokeWidth={1.5}
      />
      <text x={cx + 7.5 * scX + 5} y={cy + 4} fontSize={10} fill="#334155">
        x
      </text>
      <text x={cx + 5} y={cy - 2.5 * scY + 5} fontSize={10} fill="#334155">
        y
      </text>

      {/* X-axis ticks */}
      {[1, 2, 3, 4, 5, 6].map((v) => (
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

      {/* Y-axis ticks */}
      {[-2, -1, 1, 2].map((v) => (
        <g key={`ty${v}`}>
          <line
            x1={cx - 3}
            y1={cy - v * scY}
            x2={cx + 3}
            y2={cy - v * scY}
            stroke="#334155"
            strokeWidth={1}
          />
          <text x={cx - 8} y={cy - v * scY + 4} textAnchor="end" fontSize={8} fill="#64748b">
            {v}
          </text>
        </g>
      ))}

      {/* Asymptote x=0 */}
      <line
        x1={cx}
        y1={cy - 2.5 * scY}
        x2={cx}
        y2={cy + 2.5 * scY}
        stroke="#94a3b8"
        strokeWidth={1}
        strokeDasharray="4,3"
      />
      <text x={cx + 4} y={cy + 2.3 * scY} fontSize={8} fill="#94a3b8" fontStyle="italic">
        x = 0
      </text>

      {/* ln(x) curve */}
      <polyline points={ptsLn.join(" ")} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <text x={cx + 5.5 * scX} y={cy - 1.6 * scY} fontSize={10} fill="#2563eb" fontWeight={600}>
        y = ln(x)
      </text>

      {/* log10(x) curve */}
      <polyline
        points={ptsLog.join(" ")}
        fill="none"
        stroke="#16a34a"
        strokeWidth={2}
        strokeDasharray="6,3"
      />
      <text x={cx + 5.5 * scX} y={cy - 0.6 * scY} fontSize={10} fill="#16a34a" fontWeight={600}>
        y = log₁₀(x)
      </text>

      {/* Key point (1,0) */}
      <circle cx={cx + scX} cy={cy} r={4} fill="#1e40af" />
      <text x={cx + scX + 7} y={cy - 6} fontSize={9} fill="#1e40af" fontWeight={600}>
        (1 | 0)
      </text>

      {/* Key point (e, 1) */}
      <circle cx={cx + 2.718 * scX} cy={cy - scY} r={3} fill="#2563eb" />
      <text x={cx + 2.718 * scX + 6} y={cy - scY - 4} fontSize={8} fill="#2563eb">
        (e | 1)
      </text>

      {/* Formula box */}
      <rect
        x={10}
        y={H - 28}
        width={W - 20}
        height={20}
        rx={4}
        fill="#f8fafc"
        stroke="#e2e8f0"
        strokeWidth={1}
      />
      <text x={W / 2} y={H - 14} textAnchor="middle" fontSize={9} fill="#334155">
        log_b(x·y) = log_b(x) + log_b(y) | log_b(x^n) = n · log_b(x) | ln(e) = 1 | Definiert für x
        &gt; 0
      </text>
    </svg>
  );
}
