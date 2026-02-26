export default function CombinatoricsTree() {
  const W = 400,
    H = 280;

  // Simple tree: coin flip twice (H/T)
  const root = { x: 50, y: 140 };
  const l1 = [
    { x: 160, y: 60, label: "K", p: "½", color: "#2563eb" },
    { x: 160, y: 220, label: "Z", p: "½", color: "#dc2626" },
  ];
  const l2 = [
    { x: 300, y: 30, label: "K", p: "½", result: "KK", prob: "¼", color: "#2563eb" },
    { x: 300, y: 90, label: "Z", p: "½", result: "KZ", prob: "¼", color: "#dc2626" },
    { x: 300, y: 190, label: "K", p: "½", result: "ZK", prob: "¼", color: "#2563eb" },
    { x: 300, y: 250, label: "Z", p: "½", result: "ZZ", prob: "¼", color: "#dc2626" },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
      <title>Baumdiagramm — Kombinatorik und Wahrscheinlichkeit</title>

      <text x={W / 2} y={16} textAnchor="middle" fontSize={12} fill="#1e40af" fontWeight={700}>
        Baumdiagramm — Zweifacher Münzwurf
      </text>

      {/* Root */}
      <circle cx={root.x} cy={root.y} r={8} fill="#f8fafc" stroke="#334155" strokeWidth={2} />
      <text
        x={root.x}
        y={root.y + 4}
        textAnchor="middle"
        fontSize={9}
        fill="#334155"
        fontWeight={600}
      >
        S
      </text>

      {/* Level 1 branches */}
      {l1.map((n, i) => (
        <g key={`l1-${i}`}>
          <line
            x1={root.x + 8}
            y1={root.y}
            x2={n.x - 12}
            y2={n.y}
            stroke={n.color}
            strokeWidth={1.8}
          />
          <text
            x={(root.x + n.x) / 2 - 8}
            y={(root.y + n.y) / 2 + (i === 0 ? -8 : 10)}
            fontSize={11}
            fill={n.color}
            fontWeight={600}
          >
            {n.p}
          </text>
          <circle
            cx={n.x}
            cy={n.y}
            r={12}
            fill={n.color}
            opacity={0.15}
            stroke={n.color}
            strokeWidth={1.5}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontSize={11}
            fill={n.color}
            fontWeight={700}
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* Level 2 branches */}
      {l2.map((n, i) => {
        const parent = l1[i < 2 ? 0 : 1];
        return (
          <g key={`l2-${i}`}>
            <line
              x1={parent.x + 12}
              y1={parent.y}
              x2={n.x - 15}
              y2={n.y}
              stroke={n.color}
              strokeWidth={1.5}
            />
            <text
              x={(parent.x + n.x) / 2 - 5}
              y={(parent.y + n.y) / 2 + (i % 2 === 0 ? -6 : 8)}
              fontSize={10}
              fill={n.color}
              fontWeight={500}
            >
              {n.p}
            </text>
            <circle
              cx={n.x}
              cy={n.y}
              r={12}
              fill={n.color}
              opacity={0.1}
              stroke={n.color}
              strokeWidth={1.5}
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontSize={10}
              fill={n.color}
              fontWeight={700}
            >
              {n.label}
            </text>
            {/* Result */}
            <text x={n.x + 20} y={n.y - 5} fontSize={10} fill="#334155" fontWeight={600}>
              {n.result}
            </text>
            <text x={n.x + 20} y={n.y + 8} fontSize={9} fill="#64748b">
              P = {n.prob}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <rect
        x={10}
        y={H - 25}
        width={W - 20}
        height={18}
        rx={4}
        fill="#f8fafc"
        stroke="#e2e8f0"
        strokeWidth={1}
      />
      <text x={W / 2} y={H - 12} textAnchor="middle" fontSize={8.5} fill="#334155">
        Pfadmultiplikation: P(Pfad) = Produkt der Pfadwahrscheinlichkeiten | Pfadaddition:
        P(Ereignis) = Summe der Pfade
      </text>
    </svg>
  );
}
