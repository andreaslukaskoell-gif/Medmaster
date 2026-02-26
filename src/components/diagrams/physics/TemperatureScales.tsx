export default function TemperatureScales() {
  const W = 400,
    H = 300;
  const scales = [
    {
      label: "°C",
      color: "#2563eb",
      values: [-40, 0, 37, 100],
      yLabels: ["-40", "0", "37", "100"],
      title: "Celsius",
    },
    {
      label: "K",
      color: "#16a34a",
      values: [233, 273, 310, 373],
      yLabels: ["233", "273", "310", "373"],
      title: "Kelvin",
    },
    {
      label: "°F",
      color: "#d97706",
      values: [-40, 32, 98.6, 212],
      yLabels: ["-40", "32", "98,6", "212"],
      title: "Fahrenheit",
    },
  ];
  const barW = 40;
  const gap = 90;
  const startX = 70;
  const topY = 40;
  const botY = 260;
  const rangeY = botY - topY;

  // Map value to Y position (using Celsius range -40..100 as reference)
  const toY = (val: number, min: number, max: number) =>
    botY - ((val - min) / (max - min)) * rangeY;

  // Reference lines (freezing, body temp, boiling)
  const refs = [
    { cVal: 0, label: "Gefrierpunkt H₂O", dash: "4,3" },
    { cVal: 37, label: "Körpertemperatur", dash: "2,2" },
    { cVal: 100, label: "Siedepunkt H₂O", dash: "4,3" },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
      <title>Temperaturskalen — Celsius, Kelvin, Fahrenheit</title>

      <text x={W / 2} y={20} textAnchor="middle" fontSize={13} fill="#1e40af" fontWeight={700}>
        Temperaturskalen im Vergleich
      </text>

      {/* Reference lines */}
      {refs.map((r) => {
        const y = toY(r.cVal, -40, 100);
        return (
          <g key={r.cVal}>
            <line
              x1={startX - 10}
              y1={y}
              x2={startX + 3 * gap + barW + 10}
              y2={y}
              stroke="#94a3b8"
              strokeWidth={0.8}
              strokeDasharray={r.dash}
            />
            <text x={W - 5} y={y + 4} textAnchor="end" fontSize={8} fill="#64748b">
              {r.label}
            </text>
          </g>
        );
      })}

      {/* Thermometer bars */}
      {scales.map((s, i) => {
        const x = startX + i * gap;
        const min = s.values[0];
        const max = s.values[s.values.length - 1];
        return (
          <g key={s.label}>
            {/* Bar background */}
            <rect
              x={x}
              y={topY}
              width={barW}
              height={rangeY}
              rx={6}
              fill="#f1f5f9"
              stroke={s.color}
              strokeWidth={1.5}
            />
            {/* Filled portion (up to body temp) */}
            <rect
              x={x + 2}
              y={toY(s.values[2], min, max)}
              width={barW - 4}
              height={botY - toY(s.values[2], min, max) - 2}
              rx={4}
              fill={s.color}
              opacity={0.2}
            />
            {/* Title */}
            <text
              x={x + barW / 2}
              y={botY + 18}
              textAnchor="middle"
              fontSize={11}
              fill={s.color}
              fontWeight={700}
            >
              {s.title}
            </text>
            {/* Value labels */}
            {s.values.map((v, j) => {
              const y = toY(v, min, max);
              return (
                <g key={j}>
                  <line x1={x} y1={y} x2={x - 5} y2={y} stroke={s.color} strokeWidth={1} />
                  <text
                    x={x - 8}
                    y={y + 4}
                    textAnchor="end"
                    fontSize={9}
                    fill={s.color}
                    fontWeight={500}
                  >
                    {s.yLabels[j]} {s.label}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Conversion formulas */}
      <text x={W / 2} y={botY + 35} textAnchor="middle" fontSize={9} fill="#334155">
        T(K) = T(°C) + 273,15 | T(°F) = T(°C) · 1,8 + 32
      </text>
    </svg>
  );
}
