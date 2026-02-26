export default function ExponentialFunction() {
  const W = 400,
    H = 260;
  const cx = 120,
    cy = 200;
  const scX = 35,
    scY = 25;

  // Growth: y = e^(0.5x)
  const ptsGrow: string[] = [];
  for (let x = -3; x <= 5; x += 0.1) {
    const y = Math.exp(0.5 * x);
    if (y > 8) break;
    ptsGrow.push(`${(cx + x * scX).toFixed(1)},${(cy - y * scY).toFixed(1)}`);
  }

  // Decay: y = e^(-0.5x)
  const ptsDecay: string[] = [];
  for (let x = -2; x <= 7; x += 0.1) {
    const y = Math.exp(-0.5 * x);
    if (y > 8) break;
    ptsDecay.push(`${(cx + x * scX).toFixed(1)},${(cy - y * scY).toFixed(1)}`);
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
      <title>Exponentialfunktionen — Wachstum und Zerfall</title>

      <text x={W / 2} y={18} textAnchor="middle" fontSize={13} fill="#1e40af" fontWeight={700}>
        Exponentialfunktionen
      </text>

      {/* Axes */}
      <line
        x1={cx - 3.5 * scX}
        y1={cy}
        x2={cx + 7 * scX}
        y2={cy}
        stroke="#334155"
        strokeWidth={1.5}
      />
      <line x1={cx} y1={cy + scY} x2={cx} y2={cy - 8 * scY} stroke="#334155" strokeWidth={1.5} />
      <text x={cx + 7 * scX + 5} y={cy + 4} fontSize={10} fill="#334155">
        x
      </text>
      <text x={cx + 5} y={cy - 8 * scY + 5} fontSize={10} fill="#334155">
        y
      </text>

      {/* Y=1 reference */}
      <line
        x1={cx - 3 * scX}
        y1={cy - scY}
        x2={cx + 6 * scX}
        y2={cy - scY}
        stroke="#e2e8f0"
        strokeWidth={0.5}
      />
      <text x={cx - 8} y={cy - scY + 4} textAnchor="end" fontSize={8} fill="#64748b">
        1
      </text>

      {/* Asymptote y=0 label */}
      <text x={cx + 6.5 * scX} y={cy - 5} fontSize={8} fill="#94a3b8" fontStyle="italic">
        Asymptote y = 0
      </text>

      {/* Growth curve */}
      <polyline points={ptsGrow.join(" ")} fill="none" stroke="#16a34a" strokeWidth={2.5} />
      <text x={cx + 3 * scX} y={cy - 5.5 * scY} fontSize={10} fill="#16a34a" fontWeight={600}>
        y = e^(0,5x)
      </text>
      <text x={cx + 3 * scX} y={cy - 5.5 * scY + 13} fontSize={9} fill="#16a34a">
        Wachstum (k &gt; 0)
      </text>

      {/* Decay curve */}
      <polyline
        points={ptsDecay.join(" ")}
        fill="none"
        stroke="#dc2626"
        strokeWidth={2.5}
        strokeDasharray="6,3"
      />
      <text x={cx + 4 * scX} y={cy - 1.5 * scY} fontSize={10} fill="#dc2626" fontWeight={600}>
        y = e^(−0,5x)
      </text>
      <text x={cx + 4 * scX} y={cy - 1.5 * scY + 13} fontSize={9} fill="#dc2626">
        Zerfall (k &lt; 0)
      </text>

      {/* Common point (0,1) */}
      <circle cx={cx} cy={cy - scY} r={4} fill="#1e40af" />
      <text x={cx + 7} y={cy - scY - 5} fontSize={9} fill="#1e40af" fontWeight={600}>
        (0 | 1)
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
        f(x) = a · e^(kx) | k &gt; 0: Wachstum | k &lt; 0: Zerfall | T₂ = ln(2)/k | Asymptote y = 0
      </text>
    </svg>
  );
}
