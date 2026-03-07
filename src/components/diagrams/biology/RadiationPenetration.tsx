import { useState } from "react";

const radiationTypes = [
  {
    id: "alpha",
    label: "Alpha (α)",
    symbol: "α",
    color: "#ef4444",
    stoppedBy: "Papier",
    range: "wenige cm Luft",
    detail:
      "Heliumkern (2p + 2n), Ladung +2, Masse 4u. Höchste Ionisationsdichte, aber geringste Reichweite. Bereits ein Blatt Papier oder die Hornhaut der Haut stoppt Alpha-Strahlung. Gefährlich nur bei Inkorporation (Einatmen, Verschlucken).",
    penetration: 0.15,
  },
  {
    id: "beta",
    label: "Beta (β)",
    symbol: "β",
    color: "#3b82f6",
    stoppedBy: "Aluminium",
    range: "wenige m Luft",
    detail:
      "Elektron (β⁻) oder Positron (β⁺), Ladung ±1, vernachlässigbare Masse. Mittlere Ionisationsdichte und Reichweite. Einige mm Aluminium oder Plexiglas stoppen Beta-Strahlung. Klinisch relevant: PET nutzt β⁺-Strahler (Positronenemitter).",
    penetration: 0.45,
  },
  {
    id: "gamma",
    label: "Gamma (γ)",
    symbol: "γ",
    color: "#8b5cf6",
    stoppedBy: "Blei / Beton",
    range: "viele m Luft",
    detail:
      "Hochenergetische Photonen, keine Ladung, keine Masse. Geringste Ionisationsdichte, aber höchste Durchdringungsfähigkeit. Nur dickes Blei oder Beton schwächt Gamma-Strahlung wirksam ab (exponentielle Abschwächung). Klinisch: Teletherapie, Gamma-Knife.",
    penetration: 0.92,
  },
];

export default function RadiationPenetration() {
  const [active, setActive] = useState<string | null>(null);
  const activeType = radiationTypes.find((r) => r.id === active);

  const W = 440;
  const H = 240;
  const sourceX = 50;
  const endX = W - 30;
  const totalLen = endX - sourceX;

  // Material barrier positions (fraction of total length)
  const paperX = sourceX + totalLen * 0.15;
  const aluX = sourceX + totalLen * 0.45;
  const leadX = sourceX + totalLen * 0.78;

  const rowH = 36;
  const startY = 70;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Durchdringungsfähigkeit — Alpha, Beta, Gamma
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf einen Strahlungstyp für Details.
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-lg mx-auto">
        <title>Durchdringungsfähigkeit von Alpha-, Beta- und Gamma-Strahlung</title>

        {/* Source */}
        <circle
          cx={sourceX}
          cy={startY + rowH}
          r={18}
          fill="#fef2f2"
          stroke="#ef4444"
          strokeWidth={1.5}
        />
        <text
          x={sourceX}
          y={startY + rowH + 1}
          textAnchor="middle"
          fontSize={7}
          fill="#991b1b"
          fontWeight={600}
        >
          Radioaktive
        </text>
        <text
          x={sourceX}
          y={startY + rowH + 10}
          textAnchor="middle"
          fontSize={7}
          fill="#991b1b"
          fontWeight={600}
        >
          Quelle
        </text>

        {/* Material barriers */}
        {/* Paper */}
        <rect
          x={paperX - 4}
          y={startY - 10}
          width={8}
          height={rowH * 3 + 20}
          rx={1}
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth={1}
        />
        <text
          x={paperX}
          y={startY - 15}
          textAnchor="middle"
          fontSize={8}
          fill="#92400e"
          fontWeight={600}
        >
          Papier
        </text>

        {/* Aluminum */}
        <rect
          x={aluX - 6}
          y={startY - 10}
          width={12}
          height={rowH * 3 + 20}
          rx={1}
          fill="#e0e7ff"
          stroke="#6366f1"
          strokeWidth={1}
        />
        <text
          x={aluX}
          y={startY - 15}
          textAnchor="middle"
          fontSize={8}
          fill="#3730a3"
          fontWeight={600}
        >
          Aluminium
        </text>

        {/* Lead */}
        <rect
          x={leadX - 10}
          y={startY - 10}
          width={20}
          height={rowH * 3 + 20}
          rx={2}
          fill="#d1d5db"
          stroke="#4b5563"
          strokeWidth={1.5}
        />
        <text
          x={leadX}
          y={startY - 15}
          textAnchor="middle"
          fontSize={8}
          fill="#1f2937"
          fontWeight={600}
        >
          Blei
        </text>

        {/* Radiation paths */}
        {radiationTypes.map((rad, i) => {
          const y = startY + i * rowH + rowH / 2;
          const stopX = sourceX + totalLen * rad.penetration;
          const isActive = active === rad.id;

          return (
            <g
              key={rad.id}
              className="cursor-pointer"
              onClick={() => setActive(active === rad.id ? null : rad.id)}
              onMouseEnter={() => setActive(rad.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Radiation beam */}
              <line
                x1={sourceX + 20}
                y1={y}
                x2={stopX}
                y2={y}
                stroke={rad.color}
                strokeWidth={isActive ? 4 : 2.5}
                strokeLinecap="round"
                opacity={isActive ? 1 : 0.8}
              />
              {/* Arrow at tip */}
              <polygon
                points={`${stopX - 6},${y - 4} ${stopX},${y} ${stopX - 6},${y + 4}`}
                fill={rad.color}
              />
              {/* Stop marker (X) */}
              <text x={stopX + 5} y={y + 4} fontSize={12} fill={rad.color} fontWeight={700}>
                ×
              </text>

              {/* Label on left */}
              <rect
                x={sourceX + 22}
                y={y - 10}
                width={38}
                height={20}
                rx={4}
                fill={isActive ? rad.color : "white"}
                fillOpacity={isActive ? 0.15 : 0.9}
                stroke={rad.color}
                strokeWidth={isActive ? 2 : 1}
              />
              <text
                x={sourceX + 41}
                y={y + 4}
                textAnchor="middle"
                fontSize={9}
                fill={rad.color}
                fontWeight={700}
              >
                {rad.symbol}
              </text>
            </g>
          );
        })}

        {/* Gamma continues (attenuated) past lead */}
        <line
          x1={leadX + 10}
          y1={startY + 2 * rowH + rowH / 2}
          x2={endX}
          y2={startY + 2 * rowH + rowH / 2}
          stroke="#8b5cf6"
          strokeWidth={1}
          strokeDasharray="4,3"
          opacity={0.5}
        />
        <text
          x={endX - 2}
          y={startY + 2 * rowH + rowH / 2 - 6}
          textAnchor="end"
          fontSize={7}
          fill="#8b5cf6"
        >
          abgeschwächt
        </text>

        {/* Legend at bottom */}
        <text x={W / 2} y={H - 10} textAnchor="middle" fontSize={8} fill="#94a3b8">
          Ionisationsdichte: α {">"} β {">"} γ | Reichweite: γ {">"} β {">"} α
        </text>
      </svg>

      {activeType && (
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
            {activeType.label} — gestoppt durch {activeType.stoppedBy}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeType.detail}</p>
        </div>
      )}
    </div>
  );
}
