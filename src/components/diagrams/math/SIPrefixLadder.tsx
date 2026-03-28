import { useState } from "react";

type Prefix = {
  name: string;
  symbol: string;
  power: number;
  color: string;
  example: string;
};

const PREFIXES: Prefix[] = [
  { name: "Tera", symbol: "T", power: 12, color: "#7c3aed", example: "10¹² Hz — Infrarot-Licht" },
  { name: "Giga", symbol: "G", power: 9, color: "#2563eb", example: "10⁹ Hz — Mikrowellen" },
  { name: "Mega", symbol: "M", power: 6, color: "#0891b2", example: "10⁶ Hz — UKW-Radio" },
  { name: "Kilo", symbol: "k", power: 3, color: "#16a34a", example: "10³ g — 1 kg Körpergewicht" },
  {
    name: "Hekto",
    symbol: "h",
    power: 2,
    color: "#65a30d",
    example: "10² Pa — Luftdruck ≈ 10⁵ Pa",
  },
  { name: "–", symbol: "", power: 0, color: "#64748b", example: "10⁰ — Basiseinheit" },
  { name: "Dezi", symbol: "d", power: -1, color: "#ca8a04", example: "10⁻¹ L — 100 mL Blut" },
  { name: "Zenti", symbol: "c", power: -2, color: "#d97706", example: "10⁻² m — EKG-Ausschlag" },
  { name: "Milli", symbol: "m", power: -3, color: "#ea580c", example: "10⁻³ m — Gewebeschicht mm" },
  {
    name: "Mikro",
    symbol: "μ",
    power: -6,
    color: "#dc2626",
    example: "10⁻⁶ m — Erythrozyt Ø 8 μm",
  },
  { name: "Nano", symbol: "n", power: -9, color: "#be185d", example: "10⁻⁹ m — Virus Ø ~100 nm" },
  { name: "Piko", symbol: "p", power: -12, color: "#9d174d", example: "10⁻¹² g — Hormonmenge" },
  {
    name: "Femto",
    symbol: "f",
    power: -15,
    color: "#831843",
    example: "10⁻¹⁵ m — Protonen-Radius",
  },
];

export default function SIPrefixLadder() {
  const [selected, setSelected] = useState<number | null>(null);

  const W = 420;
  const H = 310;
  const ladderX = 15;
  const ladderW = 230;
  const rowH = 21;
  const startY = 22;

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
        SI-Präfix-Leiter
      </h4>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">
        Klicke auf einen Präfix für Details
      </p>

      <svg role="img" viewBox={`0 0 ${W} ${H}`} className="w-full">
        <title>SI-Präfix-Leiter</title>

        {/* Header */}
        <text x={5} y={14} fontSize={9} fill="#64748b" fontWeight={600}>
          Präfix
        </text>
        <text x={70} y={14} fontSize={9} fill="#64748b" fontWeight={600}>
          Symbol
        </text>
        <text x={105} y={14} fontSize={9} fill="#64748b" fontWeight={600}>
          Potenz
        </text>
        <text x={155} y={14} fontSize={9} fill="#64748b" fontWeight={600}>
          Wert
        </text>

        {/* Ladder lines */}
        <line
          x1={ladderX + 58}
          y1={startY}
          x2={ladderX + 58}
          y2={startY + PREFIXES.length * rowH}
          stroke="#e2e8f0"
          strokeWidth={0.8}
        />
        <line
          x1={ladderX + 90}
          y1={startY}
          x2={ladderX + 90}
          y2={startY + PREFIXES.length * rowH}
          stroke="#e2e8f0"
          strokeWidth={0.8}
        />
        <line
          x1={ladderX + 140}
          y1={startY}
          x2={ladderX + 140}
          y2={startY + PREFIXES.length * rowH}
          stroke="#e2e8f0"
          strokeWidth={0.8}
        />

        {PREFIXES.map((p, i) => {
          const y = startY + i * rowH;
          const isSel = selected === i;
          const isBase = p.power === 0;
          return (
            <g
              key={p.power}
              onClick={() => setSelected(selected === i ? null : i)}
              style={{ cursor: "pointer" }}
            >
              <rect
                x={ladderX}
                y={y + 1}
                width={ladderW}
                height={rowH - 2}
                rx={3}
                fill={isSel ? p.color : isBase ? "#f1f5f9" : "transparent"}
                fillOpacity={isSel ? 0.15 : 1}
                stroke={isSel ? p.color : isBase ? "#94a3b8" : "transparent"}
                strokeWidth={1}
              />
              {/* Prefix name */}
              <text
                x={ladderX + 5}
                y={y + rowH - 6}
                fontSize={isBase ? 9 : 10}
                fill={isSel ? p.color : "#334155"}
                fontWeight={isSel || isBase ? 700 : 400}
              >
                {p.name}
              </text>
              {/* Symbol */}
              <text
                x={ladderX + 65}
                y={y + rowH - 6}
                textAnchor="middle"
                fontSize={10}
                fill={p.color}
                fontWeight={700}
              >
                {p.symbol || "—"}
              </text>
              {/* Power */}
              <text
                x={ladderX + 110}
                y={y + rowH - 6}
                textAnchor="middle"
                fontSize={9}
                fill="#334155"
              >
                10{p.power >= 0 ? "+" : ""}
                {p.power}
              </text>
              {/* Value */}
              <text x={ladderX + 145} y={y + rowH - 6} fontSize={9} fill="#64748b">
                {p.power >= 0
                  ? p.power === 0
                    ? "1"
                    : "1" + "0".repeat(Math.min(p.power, 4)) + (p.power > 4 ? "…" : "")
                  : "0," +
                    "0".repeat(Math.min(-p.power - 1, 4)) +
                    (Math.abs(p.power) > 5 ? "…1" : "1")}
              </text>

              {/* Colored dot on right edge */}
              <circle
                cx={ladderX + ladderW - 5}
                cy={y + rowH / 2}
                r={4}
                fill={p.color}
                fillOpacity={0.7}
              />
            </g>
          );
        })}

        {/* Detail panel */}
        {selected !== null ? (
          <g>
            <rect
              x={255}
              y={20}
              width={160}
              height={90}
              rx={8}
              fill={PREFIXES[selected].color}
              fillOpacity={0.1}
              stroke={PREFIXES[selected].color}
              strokeWidth={1.5}
            />
            <text
              x={335}
              y={40}
              textAnchor="middle"
              fontSize={13}
              fill={PREFIXES[selected].color}
              fontWeight={800}
            >
              {PREFIXES[selected].symbol || "–"}
            </text>
            <text x={335} y={56} textAnchor="middle" fontSize={10} fill="#334155" fontWeight={600}>
              {PREFIXES[selected].name}
            </text>
            <text x={335} y={70} textAnchor="middle" fontSize={10} fill="#64748b">
              10^{PREFIXES[selected].power}
            </text>
            {PREFIXES[selected].example.split(" — ").map((line, li) => (
              <text key={li} x={262} y={84 + li * 14} fontSize={9} fill="#334155">
                {li === 0 ? line : "→ " + line}
              </text>
            ))}
          </g>
        ) : (
          <g>
            <rect
              x={255}
              y={20}
              width={160}
              height={90}
              rx={8}
              fill="#f8fafc"
              stroke="#e2e8f0"
              strokeWidth={1}
            />
            <text x={335} y={55} textAnchor="middle" fontSize={10} fill="#94a3b8">
              Klicke einen Präfix
            </text>
            <text x={335} y={70} textAnchor="middle" fontSize={9} fill="#cbd5e1">
              für medizinische Beispiele
            </text>
          </g>
        )}

        {/* "×10 each step" indicator */}
        <text x={255} y={130} fontSize={9} fill="#64748b" fontWeight={600}>
          Jede Stufe: Faktor 10
        </text>
        <text x={255} y={144} fontSize={9} fill="#64748b">
          1 mm = 10⁻³ m = 1000 μm
        </text>
        <text x={255} y={158} fontSize={9} fill="#64748b">
          1 mg = 10⁻³ g = 1000 μg
        </text>
        <text x={255} y={172} fontSize={9} fill="#64748b">
          1 μL = 10⁻⁶ L = 1000 nL
        </text>

        {/* Medical relevance box */}
        <rect
          x={255}
          y={185}
          width={160}
          height={110}
          rx={6}
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth={1}
        />
        <text x={335} y={200} textAnchor="middle" fontSize={9} fill="#92400e" fontWeight={700}>
          Medizinisch relevant
        </text>
        <text x={262} y={215} fontSize={8} fill="#92400e">
          μm: Zellgröße (Erythrozyt 8 μm)
        </text>
        <text x={262} y={229} fontSize={8} fill="#92400e">
          nm: Viren (HIV ~100 nm)
        </text>
        <text x={262} y={243} fontSize={8} fill="#92400e">
          mg/dL: Blutzucker, Cholesterin
        </text>
        <text x={262} y={257} fontSize={8} fill="#92400e">
          mmHg: Blutdruck
        </text>
        <text x={262} y={271} fontSize={8} fill="#92400e">
          mL/min: GFR ~120 mL/min
        </text>
        <text x={262} y={285} fontSize={8} fill="#92400e">
          μmol/L: Serumwerte
        </text>
      </svg>
    </div>
  );
}
