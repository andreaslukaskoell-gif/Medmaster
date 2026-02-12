import { useState } from "react";

interface BloodGroup {
  id: string;
  label: string;
  antigens: string;
  antibodies: string;
  canDonateTo: string[];
  canReceiveFrom: string[];
  detail: string;
}

const groups: BloodGroup[] = [
  { id: "A", label: "A", antigens: "A", antibodies: "Anti-B", canDonateTo: ["A", "AB"], canReceiveFrom: ["A", "0"], detail: "Antigen A auf Erythrozyten, Anti-B-Antikörper im Plasma. Häufigkeit in Europa: ~42%." },
  { id: "B", label: "B", antigens: "B", antibodies: "Anti-A", canDonateTo: ["B", "AB"], canReceiveFrom: ["B", "0"], detail: "Antigen B auf Erythrozyten, Anti-A-Antikörper im Plasma. Häufigkeit in Europa: ~11%." },
  { id: "AB", label: "AB", antigens: "A und B", antibodies: "Keine", canDonateTo: ["AB"], canReceiveFrom: ["A", "B", "AB", "0"], detail: "Beide Antigene, keine Antikörper → Universalempfaenger. Häufigkeit: ~4%." },
  { id: "0", label: "0", antigens: "Keine", antibodies: "Anti-A + Anti-B", canDonateTo: ["A", "B", "AB", "0"], canReceiveFrom: ["0"], detail: "Keine Antigene → Universalspender. Beide Antikörper im Plasma. Häufigkeit: ~43%." },
];

export default function BloodGroups() {
  const [activeGroup, setActiveGroup] = useState<BloodGroup | null>(null);

  const cellW = 95;
  const headerH = 35;
  const rowH = 55;
  const tableX = 25;
  const tableY = 30;
  const cols = ["Blutgruppe", "Antigene", "Antikörper", "Spende an", "Empfang von"];
  const colWidths = [75, 80, 90, 100, 100];

  const colX = (col: number) => {
    let x = tableX;
    for (let i = 0; i < col; i++) x += colWidths[i];
    return x;
  };
  const totalW = colWidths.reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">ABO-Blutgruppensystem</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf eine Blutgruppe fuer Details.</p>

      <svg viewBox="0 0 480 320" className="w-full max-w-xl mx-auto">
        {/* Table header */}
        <rect x={tableX} y={tableY} width={totalW} height={headerH} rx="6" fill="#0d9488" />
        {cols.map((col, i) => (
          <text key={`hdr-${i}`} x={colX(i) + colWidths[i] / 2} y={tableY + 22} textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">{col}</text>
        ))}

        {/* Table rows */}
        {groups.map((group, rowIdx) => {
          const y = tableY + headerH + rowIdx * rowH;
          const isActive = activeGroup?.id === group.id;

          return (
            <g
              key={group.id}
              className="cursor-pointer"
              onClick={() => setActiveGroup(activeGroup?.id === group.id ? null : group)}
              onMouseEnter={() => setActiveGroup(group)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              {/* Row background */}
              <rect x={tableX} y={y} width={totalW} height={rowH} fill={isActive ? "#ccfbf1" : rowIdx % 2 === 0 ? "#f0fdfa" : "white"} stroke="#99f6e4" strokeWidth="0.5" />

              {/* Blood group with erythrocyte icon */}
              <g>
                <circle cx={colX(0) + 20} cy={y + 28} r="15" fill="#fecaca" stroke="#ef4444" strokeWidth="1.5" />
                <text x={colX(0) + 20} y={y + 32} textAnchor="middle" fontSize="12" fill="#dc2626" fontWeight="bold">{group.label}</text>
                <text x={colX(0) + 50} y={y + 32} textAnchor="start" fontSize="8" fill="#115e59" fontWeight="bold">{group.label}</text>
              </g>

              {/* Antigens */}
              <g>
                {group.antigens === "Keine" ? (
                  <text x={colX(1) + colWidths[1] / 2} y={y + 30} textAnchor="middle" fontSize="8" fill="#6b7280">—</text>
                ) : (
                  <>
                    {group.antigens.includes("A") && (
                      <rect x={colX(1) + 10} y={y + 15} width="26" height="20" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
                    )}
                    {group.antigens.includes("A") && (
                      <text x={colX(1) + 23} y={y + 30} textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="bold">A</text>
                    )}
                    {group.antigens.includes("B") && (
                      <rect x={colX(1) + (group.antigens.includes("A") ? 42 : 10)} y={y + 15} width="26" height="20" rx="4" fill="#fce7f3" stroke="#ec4899" strokeWidth="1" />
                    )}
                    {group.antigens.includes("B") && (
                      <text x={colX(1) + (group.antigens.includes("A") ? 55 : 23)} y={y + 30} textAnchor="middle" fontSize="9" fill="#be185d" fontWeight="bold">B</text>
                    )}
                  </>
                )}
              </g>

              {/* Antibodies */}
              <g>
                {group.antibodies === "Keine" ? (
                  <text x={colX(2) + colWidths[2] / 2} y={y + 30} textAnchor="middle" fontSize="8" fill="#6b7280">—</text>
                ) : (
                  <text x={colX(2) + colWidths[2] / 2} y={y + 30} textAnchor="middle" fontSize="8" fill="#115e59" fontWeight="bold">{group.antibodies}</text>
                )}
              </g>

              {/* Can donate to */}
              <text x={colX(3) + colWidths[3] / 2} y={y + 30} textAnchor="middle" fontSize="8" fill="#0f766e" fontWeight="bold">{group.canDonateTo.join(", ")}</text>

              {/* Can receive from */}
              <text x={colX(4) + colWidths[4] / 2} y={y + 30} textAnchor="middle" fontSize="8" fill="#0d9488" fontWeight="bold">{group.canReceiveFrom.join(", ")}</text>
            </g>
          );
        })}

        {/* Table border */}
        <rect x={tableX} y={tableY} width={totalW} height={headerH + 4 * rowH} rx="6" fill="none" stroke="#0d9488" strokeWidth="1.5" />

        {/* Column dividers */}
        {[1, 2, 3, 4].map((i) => (
          <line key={`div-${i}`} x1={colX(i)} y1={tableY} x2={colX(i)} y2={tableY + headerH + 4 * rowH} stroke="#99f6e4" strokeWidth="0.5" />
        ))}

        {/* Key rules */}
        <text x="240" y={tableY + headerH + 4 * rowH + 22} textAnchor="middle" fontSize="8" fill="#115e59" fontWeight="bold">Regel: Antikörper im Plasma greifen fremde Antigene an → Agglutination!</text>
        <text x="240" y={tableY + headerH + 4 * rowH + 38} textAnchor="middle" fontSize="8" fill="#0d9488">0 = Universalspender | AB = Universalempfaenger</text>

        {/* Rhesus note */}
        <rect x={tableX} y={tableY + headerH + 4 * rowH + 48} width={totalW} height="25" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1" />
        <text x="240" y={tableY + headerH + 4 * rowH + 64} textAnchor="middle" fontSize="7" fill="#115e59">Zusätzlich: Rhesus-Faktor (Rh+ / Rh-). Rh-Empfaenger darf kein Rh+-Blut erhalten.</text>
      </svg>

      {activeGroup && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">Blutgruppe {activeGroup.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeGroup.detail}</p>
        </div>
      )}
    </div>
  );
}
