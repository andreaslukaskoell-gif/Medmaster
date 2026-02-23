import { useState } from "react";

const parts = [
  {
    id: "phospholipid",
    label: "Phospholipid",
    detail:
      "Amphiphiles Molekül: hydrophiler Kopf (Phosphatgruppe) und zwei hydrophobe Fettsäureketten.",
  },
  {
    id: "integral",
    label: "Integrales Protein",
    detail: "Durchspannt die gesamte Membran. Funktion: Kanäle, Transporter, Rezeptoren.",
  },
  {
    id: "peripheral",
    label: "Peripheres Protein",
    detail: "An der Membranoberfläche angelagert. Funktion: Signaltransduktion, Strukturgebung.",
  },
  {
    id: "cholesterol",
    label: "Cholesterin",
    detail: "Reguliert die Membranfluidität. Verhindert zu starkes Erstarren oder Verflüssigen.",
  },
  {
    id: "glycoprotein",
    label: "Glykoprotein",
    detail: "Protein mit Zuckerketten. Wichtig für Zellerkennung und Immunantwort (Glykokalyx).",
  },
  {
    id: "glycolipid",
    label: "Glykolipid",
    detail: "Lipid mit Zuckerketten. Teil der Glykokalyx auf der Außenseite.",
  },
];

type PartInfo = (typeof parts)[number];

export default function CellMembrane() {
  const [active, setActive] = useState<PartInfo | null>(null);

  const handleHover = (part: PartInfo | null) => setActive(part);

  /* Draw a phospholipid at (x,y): circle head + two wavy tails going down */
  const Phospholipid = ({ x, y, flip }: { x: number; y: number; flip?: boolean }) => {
    const dir = flip ? -1 : 1;
    return (
      <g
        className="cursor-pointer"
        onMouseEnter={() => handleHover(parts[0])}
        onMouseLeave={() => handleHover(null)}
      >
        <circle cx={x} cy={y} r="6" fill="#14b8a6" stroke="#0f766e" strokeWidth="1" />
        <path
          d={`M${x - 2},${y + 6 * dir} Q${x - 4},${y + 14 * dir} ${x - 2},${y + 22 * dir} Q${x},${y + 28 * dir} ${x - 2},${y + 34 * dir}`}
          fill="none"
          stroke="#eab308"
          strokeWidth="1.5"
        />
        <path
          d={`M${x + 2},${y + 6 * dir} Q${x + 4},${y + 14 * dir} ${x + 2},${y + 22 * dir} Q${x},${y + 28 * dir} ${x + 2},${y + 34 * dir}`}
          fill="none"
          stroke="#eab308"
          strokeWidth="1.5"
        />
      </g>
    );
  };

  const topY = 100;
  const botY = 180;
  const spacing = 18;
  const startX = 30;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Zellmembran — Flüssig-Mosaik-Modell
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf Bestandteile für Details.
      </p>

      <svg viewBox="0 0 500 310" className="w-full max-w-xl mx-auto">
        {/* Extrazellular label */}
        <text x="250" y="18" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
          Extrazellulärer Raum
        </text>
        {/* Intrazellular label */}
        <text x="250" y="300" textAnchor="middle" fontSize="13" fill="#0d9488" fontWeight="bold">
          Intrazellulärer Raum (Zytoplasma)
        </text>

        {/* Hydrophilic / Hydrophobic labels */}
        <text x="470" y="98" textAnchor="end" fontSize="7" fill="#14b8a6">
          hydrophil
        </text>
        <text x="470" y="145" textAnchor="end" fontSize="7" fill="#eab308">
          hydrophob
        </text>
        <text x="470" y="188" textAnchor="end" fontSize="7" fill="#14b8a6">
          hydrophil
        </text>

        {/* Upper leaflet: heads up, tails down */}
        {Array.from({ length: 24 }, (_, i) => {
          const x = startX + i * spacing;
          /* Skip positions where proteins go */
          if (i >= 6 && i <= 8) return null;
          if (i >= 16 && i <= 17) return null;
          return <Phospholipid key={`top-${i}`} x={x} y={topY} />;
        })}

        {/* Lower leaflet: heads down, tails up */}
        {Array.from({ length: 24 }, (_, i) => {
          const x = startX + i * spacing;
          if (i >= 6 && i <= 8) return null;
          if (i >= 16 && i <= 17) return null;
          return <Phospholipid key={`bot-${i}`} x={x} y={botY} flip />;
        })}

        {/* Integral protein (channel) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[1])}
          onMouseLeave={() => handleHover(null)}
        >
          <rect
            x={startX + 6 * spacing - 16}
            y={topY - 8}
            width="52"
            height="96"
            rx="12"
            fill="#6366f1"
            opacity="0.8"
            stroke="#4f46e5"
            strokeWidth="1.5"
          />
          {/* Channel pore */}
          <rect
            x={startX + 6 * spacing - 2}
            y={topY + 5}
            width="24"
            height="70"
            rx="8"
            fill="#f0fdfa"
            opacity="0.6"
          />
          <text
            x={startX + 7 * spacing}
            y={topY + 45}
            textAnchor="middle"
            fontSize="7"
            fill="#312e81"
            fontWeight="bold"
          >
            Kanal
          </text>
        </g>
        <text
          x={startX + 7 * spacing}
          y={topY - 14}
          textAnchor="middle"
          fontSize="7"
          fill="#6366f1"
          fontWeight="bold"
        >
          Integrales Protein
        </text>

        {/* Peripheral protein (top) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[2])}
          onMouseLeave={() => handleHover(null)}
        >
          <ellipse
            cx={startX + 12 * spacing}
            cy={topY - 12}
            rx="20"
            ry="10"
            fill="#ec4899"
            opacity="0.7"
            stroke="#db2777"
            strokeWidth="1.5"
          />
        </g>
        <text
          x={startX + 12 * spacing}
          y={topY - 26}
          textAnchor="middle"
          fontSize="7"
          fill="#db2777"
          fontWeight="bold"
        >
          Peripheres Protein
        </text>

        {/* Cholesterol */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[3])}
          onMouseLeave={() => handleHover(null)}
        >
          <path
            d={`M${startX + 3 * spacing},${topY + 8} L${startX + 3 * spacing - 5},${topY + 28} L${startX + 3 * spacing + 5},${topY + 28} Z`}
            fill="#f59e0b"
            stroke="#d97706"
            strokeWidth="1"
          />
          <circle
            cx={startX + 3 * spacing}
            cy={topY + 8}
            r="4"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1"
          />
        </g>
        <text
          x={startX + 3 * spacing}
          y={topY + 42}
          textAnchor="middle"
          fontSize="6"
          fill="#d97706"
        >
          Cholesterin
        </text>

        {/* Second cholesterol */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[3])}
          onMouseLeave={() => handleHover(null)}
        >
          <path
            d={`M${startX + 21 * spacing},${botY - 8} L${startX + 21 * spacing - 5},${botY - 28} L${startX + 21 * spacing + 5},${botY - 28} Z`}
            fill="#f59e0b"
            stroke="#d97706"
            strokeWidth="1"
          />
          <circle
            cx={startX + 21 * spacing}
            cy={botY - 8}
            r="4"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1"
          />
        </g>

        {/* Glycoprotein (integral + sugar chains) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[4])}
          onMouseLeave={() => handleHover(null)}
        >
          <rect
            x={startX + 16 * spacing - 10}
            y={topY - 6}
            width="38"
            height="92"
            rx="10"
            fill="#8b5cf6"
            opacity="0.7"
            stroke="#7c3aed"
            strokeWidth="1.5"
          />
          {/* Sugar chains */}
          {[0, 10, 20].map((dx) => (
            <g key={`sugar-${dx}`}>
              <line
                x1={startX + 16 * spacing - 4 + dx}
                y1={topY - 6}
                x2={startX + 16 * spacing - 4 + dx}
                y2={topY - 24}
                stroke="#7c3aed"
                strokeWidth="1"
              />
              <circle
                cx={startX + 16 * spacing - 4 + dx}
                cy={topY - 26}
                r="4"
                fill="#c4b5fd"
                stroke="#7c3aed"
                strokeWidth="1"
              />
              <circle
                cx={startX + 16 * spacing - 4 + dx}
                cy={topY - 34}
                r="3"
                fill="#ddd6fe"
                stroke="#7c3aed"
                strokeWidth="0.8"
              />
            </g>
          ))}
        </g>
        <text
          x={startX + 17 * spacing}
          y={topY - 42}
          textAnchor="middle"
          fontSize="7"
          fill="#7c3aed"
          fontWeight="bold"
        >
          Glykoprotein
        </text>

        {/* Glycolipid */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => handleHover(parts[5])}
          onMouseLeave={() => handleHover(null)}
        >
          <circle
            cx={startX + 22 * spacing}
            cy={topY}
            r="6"
            fill="#14b8a6"
            stroke="#0f766e"
            strokeWidth="1"
          />
          <line
            x1={startX + 22 * spacing}
            y1={topY - 6}
            x2={startX + 22 * spacing}
            y2={topY - 20}
            stroke="#0f766e"
            strokeWidth="1"
          />
          <circle
            cx={startX + 22 * spacing}
            cy={topY - 22}
            r="4"
            fill="#99f6e4"
            stroke="#0f766e"
            strokeWidth="1"
          />
          <circle
            cx={startX + 22 * spacing}
            cy={topY - 30}
            r="3"
            fill="#ccfbf1"
            stroke="#0f766e"
            strokeWidth="0.8"
          />
        </g>
        <text
          x={startX + 22 * spacing}
          y={topY - 36}
          textAnchor="middle"
          fontSize="7"
          fill="#0f766e"
          fontWeight="bold"
        >
          Glykolipid
        </text>

        {/* Legend */}
        <circle cx="30" cy="270" r="5" fill="#14b8a6" />
        <text x="40" y="273" fontSize="7" fill="#115e59">
          Hydrophiler Kopf
        </text>
        <line x1="120" y1="265" x2="120" y2="275" stroke="#eab308" strokeWidth="2" />
        <text x="128" y="273" fontSize="7" fill="#115e59">
          Hydrophobe Schwänze
        </text>
      </svg>

      {active && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">{active.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{active.detail}</p>
        </div>
      )}
    </div>
  );
}
