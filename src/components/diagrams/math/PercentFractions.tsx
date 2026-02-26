export default function PercentFractions() {
  const W = 400,
    H = 260;

  // Pie chart segments for percentage visualization
  const pieR = 55;
  const pieCx = 100;
  const pieCy = 130;
  const segments = [
    { pct: 25, color: "#2563eb", label: "25 %" },
    { pct: 50, color: "#16a34a", label: "50 %" },
    { pct: 12.5, color: "#d97706", label: "12,5 %" },
    { pct: 12.5, color: "#7c3aed", label: "12,5 %" },
  ];

  let cumAngle = -90; // start at top
  const pieSegments = segments.map((s) => {
    const startAngle = cumAngle;
    const sweep = (s.pct / 100) * 360;
    cumAngle += sweep;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = ((startAngle + sweep) * Math.PI) / 180;
    const midRad = ((startAngle + sweep / 2) * Math.PI) / 180;
    const x1 = pieCx + pieR * Math.cos(startRad);
    const y1 = pieCy + pieR * Math.sin(startRad);
    const x2 = pieCx + pieR * Math.cos(endRad);
    const y2 = pieCy + pieR * Math.sin(endRad);
    const lx = pieCx + pieR * 0.65 * Math.cos(midRad);
    const ly = pieCy + pieR * 0.65 * Math.sin(midRad);
    const large = sweep > 180 ? 1 : 0;
    return { ...s, x1, y1, x2, y2, large, lx, ly };
  });

  // Bar chart for fraction comparison
  const barX = 230;
  const barW = 150;
  const barH = 18;
  const fractions = [
    { frac: "1/1", val: 1, color: "#334155" },
    { frac: "3/4", val: 0.75, color: "#2563eb" },
    { frac: "1/2", val: 0.5, color: "#16a34a" },
    { frac: "1/3", val: 1 / 3, color: "#d97706" },
    { frac: "1/4", val: 0.25, color: "#7c3aed" },
    { frac: "1/8", val: 0.125, color: "#dc2626" },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
      <title>Prozent- und Bruchrechnung — Visualisierung</title>

      <text x={W / 2} y={18} textAnchor="middle" fontSize={13} fill="#1e40af" fontWeight={700}>
        Prozent und Brüche
      </text>

      {/* Pie chart */}
      <text x={pieCx} y={42} textAnchor="middle" fontSize={10} fill="#64748b" fontWeight={600}>
        Kreisdiagramm
      </text>
      {pieSegments.map((s, i) => (
        <g key={i}>
          <path
            d={`M${pieCx},${pieCy} L${s.x1},${s.y1} A${pieR},${pieR} 0 ${s.large},1 ${s.x2},${s.y2} Z`}
            fill={s.color}
            opacity={0.2}
            stroke={s.color}
            strokeWidth={1.5}
          />
          <text
            x={s.lx}
            y={s.ly + 4}
            textAnchor="middle"
            fontSize={9}
            fill={s.color}
            fontWeight={600}
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* Equivalence */}
      <text x={pieCx} y={pieCy + pieR + 20} textAnchor="middle" fontSize={9} fill="#334155">
        100 % = 1 Ganzes
      </text>

      {/* Bar chart */}
      <text
        x={barX + barW / 2}
        y={42}
        textAnchor="middle"
        fontSize={10}
        fill="#64748b"
        fontWeight={600}
      >
        Brüche als Balken
      </text>
      {fractions.map((f, i) => {
        const y = 52 + i * (barH + 10);
        return (
          <g key={i}>
            {/* Background */}
            <rect
              x={barX}
              y={y}
              width={barW}
              height={barH}
              rx={3}
              fill="#f1f5f9"
              stroke="#e2e8f0"
              strokeWidth={0.5}
            />
            {/* Filled */}
            <rect
              x={barX}
              y={y}
              width={barW * f.val}
              height={barH}
              rx={3}
              fill={f.color}
              opacity={0.3}
              stroke={f.color}
              strokeWidth={1}
            />
            {/* Label */}
            <text
              x={barX - 8}
              y={y + barH / 2 + 4}
              textAnchor="end"
              fontSize={10}
              fill={f.color}
              fontWeight={600}
            >
              {f.frac}
            </text>
            {/* Percentage */}
            <text x={barX + barW * f.val + 5} y={y + barH / 2 + 4} fontSize={9} fill="#64748b">
              {(f.val * 100).toFixed(f.val === 1 / 3 ? 1 : 0)} %
            </text>
          </g>
        );
      })}

      {/* Conversion formulas */}
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
        Bruch → Prozent: Zähler/Nenner × 100 | Prozent → Dezimal: p/100 | Grundwert × Prozentsatz =
        Prozentwert
      </text>
    </svg>
  );
}
