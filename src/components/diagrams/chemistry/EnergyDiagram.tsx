import { useState } from "react";

type Mode = "exotherm" | "endotherm";

export default function EnergyDiagram() {
  const [mode, setMode] = useState<Mode>("exotherm");

  const isExo = mode === "exotherm";

  // Path coordinates for reaction coordinate diagram
  // Exotherm: products lower than reactants
  // Endotherm: products higher than reactants
  const reactantY = 160;
  const productY = isExo ? 210 : 110;
  const tsY = 80; // transition state (highest point)
  const r1x = 60;
  const r2x = 140;
  const ts1x = 200;
  const ts2x = 260;
  const p1x = 320;
  const p2x = 400;

  const pathD = `M${r1x},${reactantY} L${r2x},${reactantY}
    C${ts1x},${reactantY} ${ts1x},${tsY} ${(ts1x + ts2x) / 2},${tsY}
    C${ts2x},${tsY} ${ts2x},${productY} ${p1x},${productY}
    L${p2x},${productY}`;

  const deltaHColor = isExo ? "#dc2626" : "#2563eb";
  const deltaHLabel = isExo ? "ΔH < 0 (exotherm)" : "ΔH > 0 (endotherm)";

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Energiediagramm — Reaktionsverlauf
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Aktivierungsenergie, Übergangszustand und Reaktionsenthalpie.
      </p>

      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setMode("exotherm")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            mode === "exotherm"
              ? "bg-red-600 text-white border-red-600"
              : "border-red-300 text-red-700 dark:text-red-300 dark:border-red-700"
          }`}
        >
          Exotherm
        </button>
        <button
          onClick={() => setMode("endotherm")}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            mode === "endotherm"
              ? "bg-blue-600 text-white border-blue-600"
              : "border-blue-300 text-blue-700 dark:text-blue-300 dark:border-blue-700"
          }`}
        >
          Endotherm
        </button>
      </div>

      <svg role="img" viewBox="0 0 480 280" className="w-full max-w-lg mx-auto">
        <title>Energiediagramm — {isExo ? "exotherme" : "endotherme"} Reaktion</title>
        <defs>
          <marker id="arrowE" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#6b7280" />
          </marker>
          <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill={deltaHColor} />
          </marker>
          <marker id="arrowOrange" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#f97316" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1="40"
          y1="240"
          x2="440"
          y2="240"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowE)"
        />
        <line
          x1="40"
          y1="240"
          x2="40"
          y2="30"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#arrowE)"
        />
        <text x="230" y="258" textAnchor="middle" fontSize="11" fill="#9ca3af">
          Reaktionskoordinate →
        </text>
        <text
          x="15"
          y="135"
          textAnchor="middle"
          fontSize="11"
          fill="#9ca3af"
          transform="rotate(-90 15 135)"
        >
          Energie (kJ/mol)
        </text>

        {/* Reaction path */}
        <path d={pathD} fill="none" stroke={isExo ? "#f97316" : "#3b82f6"} strokeWidth="2.5" />

        {/* Reactants plateau */}
        <line
          x1={r1x}
          y1={reactantY}
          x2={r2x}
          y2={reactantY}
          stroke={isExo ? "#f97316" : "#3b82f6"}
          strokeWidth="2.5"
        />
        <text
          x={(r1x + r2x) / 2}
          y={reactantY - 8}
          textAnchor="middle"
          fontSize="10"
          fill="#374151"
          fontWeight="bold"
        >
          Edukte
        </text>

        {/* Products plateau */}
        <line
          x1={p1x}
          y1={productY}
          x2={p2x}
          y2={productY}
          stroke={isExo ? "#f97316" : "#3b82f6"}
          strokeWidth="2.5"
        />
        <text
          x={(p1x + p2x) / 2}
          y={productY - 8}
          textAnchor="middle"
          fontSize="10"
          fill="#374151"
          fontWeight="bold"
        >
          Produkte
        </text>

        {/* Transition state label */}
        <circle cx="230" cy={tsY} r="5" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
        <text
          x="230"
          y={tsY - 10}
          textAnchor="middle"
          fontSize="9"
          fill="#d97706"
          fontWeight="bold"
        >
          Übergangszustand ‡
        </text>

        {/* Activation energy arrow (Edukte → TS) */}
        <line
          x1={r2x + 10}
          y1={reactantY}
          x2={r2x + 10}
          y2={tsY + 5}
          stroke="#f97316"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#arrowOrange)"
        />
        <line
          x1={r2x + 10}
          y1={reactantY}
          x2={r2x + 10}
          y2={tsY + 5}
          stroke="#f97316"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <text
          x={r2x + 22}
          y={(reactantY + tsY) / 2 + 4}
          fontSize="10"
          fill="#f97316"
          fontWeight="bold"
        >
          Ea
        </text>

        {/* ΔH arrow */}
        <line
          x1={p1x + 15}
          y1={reactantY}
          x2={p1x + 15}
          y2={productY + (isExo ? -5 : 5)}
          stroke={deltaHColor}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#arrowRed)"
        />
        <line
          x1={p1x}
          y1={reactantY}
          x2={p1x + 30}
          y2={reactantY}
          stroke={deltaHColor}
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        <text
          x={p1x + 26}
          y={(reactantY + productY) / 2 + 4}
          fontSize="10"
          fill={deltaHColor}
          fontWeight="bold"
        >
          ΔH
        </text>

        {/* Horizontal ref line for reactant level */}
        <line
          x1={r2x}
          y1={reactantY}
          x2={p1x + 30}
          y2={reactantY}
          stroke={deltaHColor}
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.5"
        />

        {/* ΔH label */}
        <text x="240" y="22" textAnchor="middle" fontSize="12" fill={deltaHColor} fontWeight="bold">
          {deltaHLabel}
        </text>

        {/* Catalyst path (optional dashed) */}
        <path
          d={`M${r2x},${reactantY} C${ts1x},${reactantY} ${ts1x},${tsY + 30} ${(ts1x + ts2x) / 2},${tsY + 30} C${ts2x},${tsY + 30} ${ts2x},${productY} ${p1x},${productY}`}
          fill="none"
          stroke="#16a34a"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          opacity="0.7"
        />
        <text x="230" y={tsY + 24} textAnchor="middle" fontSize="8" fill="#16a34a">
          mit Katalysator
        </text>
      </svg>

      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {isExo
            ? "Exotherme Reaktion: Produkte haben niedrigere Energie als Edukte → ΔH < 0. Energie wird freigesetzt (z. B. Verbrennung). Der Katalysator senkt die Aktivierungsenergie Ea."
            : "Endotherme Reaktion: Produkte haben höhere Energie als Edukte → ΔH > 0. Energie wird aufgenommen (z. B. Photosynthe­se, thermische Zersetzung)."}
        </p>
      </div>
    </div>
  );
}
