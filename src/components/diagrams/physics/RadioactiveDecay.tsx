export default function RadioactiveDecay() {
  const W = 400,
    H = 280;
  const padL = 55,
    padR = 20,
    padT = 35,
    padB = 45;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  // Exponential decay: N(t) = N0 * e^(-λt), using t in half-lives
  const pts: string[] = [];
  for (let t = 0; t <= 5; t += 0.05) {
    const n = Math.pow(0.5, t); // fraction remaining
    const x = padL + (t / 5) * plotW;
    const y = padT + (1 - n) * plotH;
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  // Half-life markers
  const halves = [1, 2, 3, 4];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
      <title>Radioaktiver Zerfall — Zerfallskurve</title>

      <text x={W / 2} y={18} textAnchor="middle" fontSize={13} fill="#7c3aed" fontWeight={700}>
        Radioaktiver Zerfall
      </text>

      {/* Axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="#334155" strokeWidth={1.5} />
      <line
        x1={padL}
        y1={padT + plotH}
        x2={padL + plotW}
        y2={padT + plotH}
        stroke="#334155"
        strokeWidth={1.5}
      />

      {/* Y-axis labels */}
      {[0, 25, 50, 75, 100].map((pct) => {
        const y = padT + (1 - pct / 100) * plotH;
        return (
          <g key={pct}>
            <line x1={padL - 4} y1={y} x2={padL} y2={y} stroke="#334155" strokeWidth={1} />
            <text x={padL - 8} y={y + 4} textAnchor="end" fontSize={9} fill="#334155">
              {pct} %
            </text>
            <line x1={padL} y1={y} x2={padL + plotW} y2={y} stroke="#e2e8f0" strokeWidth={0.5} />
          </g>
        );
      })}

      {/* X-axis labels */}
      {[0, 1, 2, 3, 4, 5].map((t) => {
        const x = padL + (t / 5) * plotW;
        return (
          <g key={t}>
            <line
              x1={x}
              y1={padT + plotH}
              x2={x}
              y2={padT + plotH + 4}
              stroke="#334155"
              strokeWidth={1}
            />
            <text x={x} y={padT + plotH + 16} textAnchor="middle" fontSize={9} fill="#334155">
              {t} T½
            </text>
          </g>
        );
      })}

      {/* Axis titles */}
      <text
        x={padL - 40}
        y={padT + plotH / 2}
        textAnchor="middle"
        fontSize={10}
        fill="#64748b"
        transform={`rotate(-90,${padL - 40},${padT + plotH / 2})`}
      >
        N(t) / N₀
      </text>
      <text x={padL + plotW / 2} y={H - 5} textAnchor="middle" fontSize={10} fill="#64748b">
        Zeit (Halbwertszeiten)
      </text>

      {/* Half-life drop lines */}
      {halves.map((t) => {
        const n = Math.pow(0.5, t);
        const x = padL + (t / 5) * plotW;
        const y = padT + (1 - n) * plotH;
        return (
          <g key={t}>
            <line
              x1={x}
              y1={y}
              x2={x}
              y2={padT + plotH}
              stroke="#7c3aed"
              strokeWidth={0.8}
              strokeDasharray="3,2"
            />
            <line
              x1={padL}
              y1={y}
              x2={x}
              y2={y}
              stroke="#7c3aed"
              strokeWidth={0.8}
              strokeDasharray="3,2"
            />
            <circle cx={x} cy={y} r={3.5} fill="#7c3aed" />
            <text x={x + 6} y={y - 5} fontSize={8} fill="#7c3aed" fontWeight={600}>
              {(n * 100).toFixed(1)} %
            </text>
          </g>
        );
      })}

      {/* Decay curve */}
      <polyline points={pts.join(" ")} fill="none" stroke="#7c3aed" strokeWidth={2.5} />

      {/* Formula */}
      <text x={padL + plotW - 5} y={padT + 15} textAnchor="end" fontSize={10} fill="#64748b">
        N(t) = N₀ · (½)^(t/T½)
      </text>
    </svg>
  );
}
