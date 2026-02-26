export default function ProbabilityDistribution() {
  const W = 400,
    H = 280,
    PAD = 40;
  const cx = W / 2,
    cy = H - PAD;
  const scaleX = 50,
    scaleY = 180;

  // Normal distribution curve (μ=0, σ=1)
  const pts: string[] = [];
  for (let x = -3.2; x <= 3.2; x += 0.1) {
    const y = Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
    pts.push(`${(cx + x * scaleX).toFixed(1)},${(cy - y * scaleY).toFixed(1)}`);
  }

  // σ-boundaries
  const sigmas = [-3, -2, -1, 0, 1, 2, 3];
  const pcts = ["0.1%", "2.1%", "13.6%", "34.1%", "34.1%", "13.6%", "2.1%"];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
      <title>Normalverteilung</title>
      {/* Shaded areas */}
      {[-2, -1, 0, 1].map((s) => {
        const x1 = cx + s * scaleX;
        const x2 = cx + (s + 1) * scaleX;
        const fill =
          Math.abs(s) === 0 || Math.abs(s + 1) === 0
            ? "#3b82f680"
            : Math.abs(s) <= 1
              ? "#60a5fa50"
              : "#93c5fd30";
        const segPts: string[] = [`${x1},${cy}`];
        for (let x = s; x <= s + 1; x += 0.05) {
          const y = Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
          segPts.push(`${(cx + x * scaleX).toFixed(1)},${(cy - y * scaleY).toFixed(1)}`);
        }
        segPts.push(`${x2},${cy}`);
        return <polygon key={s} points={segPts.join(" ")} fill={fill} />;
      })}
      {/* Curve */}
      <polyline points={pts.join(" ")} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      {/* Axis */}
      <line x1={PAD} y1={cy} x2={W - PAD} y2={cy} stroke="#334155" strokeWidth={1.5} />
      {/* σ labels */}
      {sigmas.map((s) => (
        <g key={s}>
          <line
            x1={cx + s * scaleX}
            y1={cy}
            x2={cx + s * scaleX}
            y2={cy + 6}
            stroke="#64748b"
            strokeWidth={1}
          />
          <text
            x={cx + s * scaleX}
            y={cy + 18}
            textAnchor="middle"
            fontSize={11}
            fill="#334155"
            fontWeight={s === 0 ? 700 : 400}
          >
            {s === 0 ? "μ" : `${s > 0 ? "+" : ""}${s}σ`}
          </text>
        </g>
      ))}
      {/* Percentage labels */}
      {pcts.slice(2, 5).map((p, i) => {
        const s = i - 1;
        return (
          <text
            key={`p${i}`}
            x={cx + (s + 0.5) * scaleX}
            y={cy - 30}
            textAnchor="middle"
            fontSize={10}
            fill="#1e40af"
            fontWeight={600}
          >
            {p}
          </text>
        );
      })}
      {/* 68-95-99.7 rule */}
      <text x={cx} y={22} textAnchor="middle" fontSize={12} fill="#1e40af" fontWeight={700}>
        68 – 95 – 99,7 %-Regel
      </text>
      {/* Brackets for 68% and 95% */}
      <line x1={cx - scaleX} y1={35} x2={cx + scaleX} y2={35} stroke="#2563eb" strokeWidth={1.5} />
      <text x={cx} y={47} textAnchor="middle" fontSize={10} fill="#2563eb">
        68,2 %
      </text>
      <line
        x1={cx - 2 * scaleX}
        y1={55}
        x2={cx + 2 * scaleX}
        y2={55}
        stroke="#60a5fa"
        strokeWidth={1.2}
      />
      <text x={cx} y={67} textAnchor="middle" fontSize={10} fill="#60a5fa">
        95,4 %
      </text>
    </svg>
  );
}
