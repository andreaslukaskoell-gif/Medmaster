import { useState } from "react";

interface Element {
  symbol: string;
  name: string;
  number: number;
  mass: string;
  group: "alkali" | "erdalkali" | "halogen" | "edelgas" | "übergang" | "other" | "nonmetal" | "metalloid" | "postTransition";
  col: number;
  row: number;
}

const groupColors: Record<Element["group"], { fill: string; stroke: string; text: string; label: string }> = {
  alkali: { fill: "#fef2f2", stroke: "#ef4444", text: "#dc2626", label: "Alkalimetalle" },
  erdalkali: { fill: "#fff7ed", stroke: "#f97316", text: "#ea580c", label: "Erdalkalimetalle" },
  halogen: { fill: "#f0fdf4", stroke: "#22c55e", text: "#16a34a", label: "Halogene" },
  edelgas: { fill: "#eff6ff", stroke: "#3b82f6", text: "#2563eb", label: "Edelgase" },
  übergang: { fill: "#f9fafb", stroke: "#9ca3af", text: "#6b7280", label: "Übergangsmetalle" },
  other: { fill: "#f0fdfa", stroke: "#0d9488", text: "#0f766e", label: "Nichtmetalle" },
  nonmetal: { fill: "#fefce8", stroke: "#eab308", text: "#ca8a04", label: "Nichtmetalle" },
  metalloid: { fill: "#fdf4ff", stroke: "#a855f7", text: "#9333ea", label: "Halbmetalle" },
  postTransition: { fill: "#f0f9ff", stroke: "#0ea5e9", text: "#0284c7", label: "Metalle" },
};

const elements: Element[] = [
  // Row 1
  { symbol: "H", name: "Wasserstoff", number: 1, mass: "1,008", group: "nonmetal", col: 1, row: 1 },
  { symbol: "He", name: "Helium", number: 2, mass: "4,003", group: "edelgas", col: 18, row: 1 },
  // Row 2
  { symbol: "Li", name: "Lithium", number: 3, mass: "6,941", group: "alkali", col: 1, row: 2 },
  { symbol: "Be", name: "Beryllium", number: 4, mass: "9,012", group: "erdalkali", col: 2, row: 2 },
  { symbol: "B", name: "Bor", number: 5, mass: "10,81", group: "metalloid", col: 13, row: 2 },
  { symbol: "C", name: "Kohlenstoff", number: 6, mass: "12,01", group: "nonmetal", col: 14, row: 2 },
  { symbol: "N", name: "Stickstoff", number: 7, mass: "14,01", group: "nonmetal", col: 15, row: 2 },
  { symbol: "O", name: "Sauerstoff", number: 8, mass: "16,00", group: "nonmetal", col: 16, row: 2 },
  { symbol: "F", name: "Fluor", number: 9, mass: "19,00", group: "halogen", col: 17, row: 2 },
  { symbol: "Ne", name: "Neon", number: 10, mass: "20,18", group: "edelgas", col: 18, row: 2 },
  // Row 3
  { symbol: "Na", name: "Natrium", number: 11, mass: "22,99", group: "alkali", col: 1, row: 3 },
  { symbol: "Mg", name: "Magnesium", number: 12, mass: "24,31", group: "erdalkali", col: 2, row: 3 },
  { symbol: "Al", name: "Aluminium", number: 13, mass: "26,98", group: "postTransition", col: 13, row: 3 },
  { symbol: "Si", name: "Silicium", number: 14, mass: "28,09", group: "metalloid", col: 14, row: 3 },
  { symbol: "P", name: "Phosphor", number: 15, mass: "30,97", group: "nonmetal", col: 15, row: 3 },
  { symbol: "S", name: "Schwefel", number: 16, mass: "32,07", group: "nonmetal", col: 16, row: 3 },
  { symbol: "Cl", name: "Chlor", number: 17, mass: "35,45", group: "halogen", col: 17, row: 3 },
  { symbol: "Ar", name: "Argon", number: 18, mass: "39,95", group: "edelgas", col: 18, row: 3 },
  // Row 4
  { symbol: "K", name: "Kalium", number: 19, mass: "39,10", group: "alkali", col: 1, row: 4 },
  { symbol: "Ca", name: "Calcium", number: 20, mass: "40,08", group: "erdalkali", col: 2, row: 4 },
  { symbol: "Sc", name: "Scandium", number: 21, mass: "44,96", group: "übergang", col: 3, row: 4 },
  { symbol: "Ti", name: "Titan", number: 22, mass: "47,87", group: "übergang", col: 4, row: 4 },
  { symbol: "V", name: "Vanadium", number: 23, mass: "50,94", group: "übergang", col: 5, row: 4 },
  { symbol: "Cr", name: "Chrom", number: 24, mass: "52,00", group: "übergang", col: 6, row: 4 },
  { symbol: "Mn", name: "Mangan", number: 25, mass: "54,94", group: "übergang", col: 7, row: 4 },
  { symbol: "Fe", name: "Eisen", number: 26, mass: "55,85", group: "übergang", col: 8, row: 4 },
  { symbol: "Co", name: "Cobalt", number: 27, mass: "58,93", group: "übergang", col: 9, row: 4 },
  { symbol: "Ni", name: "Nickel", number: 28, mass: "58,69", group: "übergang", col: 10, row: 4 },
  { symbol: "Cu", name: "Kupfer", number: 29, mass: "63,55", group: "übergang", col: 11, row: 4 },
  { symbol: "Zn", name: "Zink", number: 30, mass: "65,38", group: "übergang", col: 12, row: 4 },
  { symbol: "Ga", name: "Gallium", number: 31, mass: "69,72", group: "postTransition", col: 13, row: 4 },
  { symbol: "Ge", name: "Germanium", number: 32, mass: "72,63", group: "metalloid", col: 14, row: 4 },
  { symbol: "As", name: "Arsen", number: 33, mass: "74,92", group: "metalloid", col: 15, row: 4 },
  { symbol: "Se", name: "Selen", number: 34, mass: "78,97", group: "nonmetal", col: 16, row: 4 },
  { symbol: "Br", name: "Brom", number: 35, mass: "79,90", group: "halogen", col: 17, row: 4 },
  { symbol: "Kr", name: "Krypton", number: 36, mass: "83,80", group: "edelgas", col: 18, row: 4 },
];

const CELL_W = 24;
const CELL_H = 28;
const OFFSET_X = 8;
const OFFSET_Y = 30;

export default function PeriodicTable() {
  const [active, setActive] = useState<Element | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Periodensystem der Elemente</h4>
      <p className="text-xs text-muted">Klicke auf ein Element fuer Details.</p>
      <svg viewBox="0 0 460 180" className="w-full max-w-2xl mx-auto">
        <text x="230" y="16" textAnchor="middle" fontSize="11" fill="#0f766e" fontWeight="bold">Periodensystem (1-36)</text>

        {elements.map((el) => {
          const x = OFFSET_X + (el.col - 1) * CELL_W;
          const y = OFFSET_Y + (el.row - 1) * CELL_H;
          const gc = groupColors[el.group];
          const isActive = active?.number === el.number;

          return (
            <g
              key={el.number}
              className="cursor-pointer"
              onClick={() => setActive(isActive ? null : el)}
              onMouseEnter={() => setActive(el)}
              onMouseLeave={() => setActive(null)}
            >
              <rect
                x={x}
                y={y}
                width={CELL_W - 2}
                height={CELL_H - 2}
                rx="2"
                fill={isActive ? gc.stroke : gc.fill}
                stroke={gc.stroke}
                strokeWidth={isActive ? 2 : 1}
              />
              <text x={x + (CELL_W - 2) / 2} y={y + 5} textAnchor="middle" fontSize="4" fill={isActive ? "#fff" : gc.text}>
                {el.number}
              </text>
              <text x={x + (CELL_W - 2) / 2} y={y + 16} textAnchor="middle" fontSize="8" fontWeight="bold" fill={isActive ? "#fff" : gc.text}>
                {el.symbol}
              </text>
              <text x={x + (CELL_W - 2) / 2} y={y + 23} textAnchor="middle" fontSize="3.5" fill={isActive ? "#fff" : gc.text} opacity="0.8">
                {el.mass}
              </text>
            </g>
          );
        })}

        {/* Legend */}
        {(["alkali", "erdalkali", "übergang", "halogen", "edelgas"] as const).map((g, i) => {
          const gc = groupColors[g];
          const lx = 10 + i * 88;
          const ly = 150;
          return (
            <g key={g}>
              <rect x={lx} y={ly} width="10" height="10" rx="2" fill={gc.fill} stroke={gc.stroke} strokeWidth="1" />
              <text x={lx + 14} y={ly + 9} fontSize="6" fill={gc.text}>{gc.label}</text>
            </g>
          );
        })}
      </svg>

      {active && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold" style={{ color: groupColors[active.group].stroke }}>
            {active.symbol} — {active.name}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
            Ordnungszahl: {active.number} | Masse: {active.mass} u | Gruppe: {groupColors[active.group].label}
          </p>
        </div>
      )}
    </div>
  );
}
