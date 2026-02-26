import { useState } from "react";

interface FunctionalGroup {
  id: string;
  name: string;
  formula: string;
  foundIn: string;
  detail: string;
}

const groups: FunctionalGroup[] = [
  {
    id: "hydroxyl",
    name: "Hydroxylgruppe",
    formula: "-OH",
    foundIn: "Alkohole (Ethanol, Methanol)",
    detail: "Polare Gruppe, erhoet die Wasserlöslichkeit. Kann Wasserstoffbrücken bilden.",
  },
  {
    id: "carbonyl",
    name: "Carbonylgruppe",
    formula: "C=O",
    foundIn: "Aldehyde / Ketone",
    detail: "Aldehyde: C=O am Kettenende. Ketone: C=O in der Kettenmitte. Wichtig in Zuckern.",
  },
  {
    id: "carboxyl",
    name: "Carboxylgruppe",
    formula: "-COOH",
    foundIn: "Carbonsäuren (Essigsäure)",
    detail: "Kann ein Proton abgeben (saure Gruppe). Enthalten in Aminosäuren und Fettsäuren.",
  },
  {
    id: "amino",
    name: "Aminogruppe",
    formula: "-NH\u2082",
    foundIn: "Aminosäuren, Amine",
    detail: "Basische Gruppe, kann ein Proton aufnehmen. Grundbaustein aller Aminosäuren.",
  },
  {
    id: "phosphat",
    name: "Phosphatgruppe",
    formula: "-PO\u2084",
    foundIn: "ATP, DNA, Phospholipide",
    detail: "Negativ geladen bei pH 7. Energieträger (ATP). Rückgrat der DNA/RNA.",
  },
  {
    id: "sulfhydryl",
    name: "Sulfhydrylgruppe",
    formula: "-SH",
    foundIn: "Cystein, Coenzym A",
    detail: "Thiolgruppe. Bildet Disulfidbrücken (S-S) bei Proteinstruktur. Redox-aktiv.",
  },
];

export default function FunctionalGroups() {
  const [active, setActive] = useState<string | null>(null);
  const activeGroup = groups.find((g) => g.id === active);

  const COL_W = 140;
  const ROW_H = 70;
  const START_X = 15;
  const START_Y = 40;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Funktionelle Gruppen
      </h4>
      <p className="text-xs text-muted">Klicke auf eine Gruppe für Details.</p>
      <svg viewBox="0 0 450 280" className="w-full max-w-lg mx-auto">
        <title>Funktionelle Gruppen der organischen Chemie</title>
        <text x="225" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Funktionelle Gruppen der Organischen Chemie
        </text>

        {groups.map((g, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = START_X + col * COL_W;
          const y = START_Y + row * (ROW_H + 50);
          const isActive = active === g.id;

          return (
            <g
              key={g.id}
              className="cursor-pointer"
              onClick={() => setActive(isActive ? null : g.id)}
              onMouseEnter={() => setActive(g.id)}
              onMouseLeave={() => setActive(null)}
            >
              <rect
                x={x}
                y={y}
                width={COL_W - 10}
                height={ROW_H + 40}
                rx="6"
                fill={isActive ? "#f0fdfa" : "#fafafa"}
                stroke={isActive ? "#0d9488" : "#e5e7eb"}
                strokeWidth={isActive ? 2 : 1}
                className="dark:fill-gray-800/50"
              />

              {/* Structure circle */}
              <circle
                cx={x + 65}
                cy={y + 28}
                r="20"
                fill={isActive ? "#ccfbf1" : "#f0fdfa"}
                stroke="#14b8a6"
                strokeWidth="1.5"
              />
              <text
                x={x + 65}
                y={y + 32}
                textAnchor="middle"
                fontSize="13"
                fill="#0f766e"
                fontWeight="bold"
              >
                {g.formula}
              </text>

              {/* Name */}
              <text
                x={x + 65}
                y={y + 60}
                textAnchor="middle"
                fontSize="13"
                fill="#0f766e"
                fontWeight="bold"
              >
                {g.name}
              </text>

              {/* Found in */}
              <rect
                x={x + 5}
                y={y + 68}
                width={COL_W - 20}
                height="18"
                rx="3"
                fill="#f0fdfa"
                stroke="#99f6e4"
                strokeWidth="0.5"
              />
              <text x={x + 65} y={y + 80} textAnchor="middle" fontSize="6" fill="#6b7280">
                {g.foundIn}
              </text>

              {/* Structural drawings inside circles */}
              {g.id === "hydroxyl" && (
                <g>
                  <line
                    x1={x + 52}
                    y1={y + 28}
                    x2={x + 60}
                    y2={y + 28}
                    stroke="#374151"
                    strokeWidth="1.5"
                  />
                  <text x={x + 67} y={y + 22} fontSize="13" fill="#dc2626" fontWeight="bold">
                    O
                  </text>
                  <line
                    x1={x + 72}
                    y1={y + 26}
                    x2={x + 78}
                    y2={y + 26}
                    stroke="#374151"
                    strokeWidth="1.5"
                  />
                  <text x={x + 80} y={y + 30} fontSize="13" fill="#374151">
                    H
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {activeGroup && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
            {activeGroup.name} ({activeGroup.formula})
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeGroup.detail}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Vorkommen: {activeGroup.foundIn}
          </p>
        </div>
      )}
    </div>
  );
}
