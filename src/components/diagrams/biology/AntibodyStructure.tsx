import { useState } from "react";

type Region = {
  id: string;
  label: string;
  color: string;
  detail: string;
};

const regions: Region[] = [
  {
    id: "variable",
    label: "Variable Region (Fab)",
    color: "#3b82f6",
    detail:
      "Die variable Region (V-Domäne) bildet die Antigenbindungsstelle. Jeder Antikörper hat zwei identische Fab-Fragmente (fragment antigen-binding). Die hohe Sequenzvariabilität in den CDRs (complementarity-determining regions) ermöglicht die spezifische Bindung an Millionen verschiedener Antigene.",
  },
  {
    id: "constant",
    label: "Konstante Region (Fc)",
    color: "#10b981",
    detail:
      "Die konstante Region (C-Domäne) bestimmt die Antikörperklasse (IgG, IgM, IgA, IgE, IgD) und vermittelt Effektorfunktionen: Komplementaktivierung, Opsonisierung, ADCC (antikörperabhängige zellvermittelte Zytotoxizität). Das Fc-Fragment wird von Fc-Rezeptoren auf Immunzellen erkannt.",
  },
  {
    id: "heavy",
    label: "Schwere Ketten (H-Ketten)",
    color: "#8b5cf6",
    detail:
      "Zwei identische schwere Ketten (heavy chains, ~50 kDa) bilden das Rückgrat des Y-förmigen Antikörpers. Sie sind über Disulfidbrücken miteinander und mit je einer leichten Kette verbunden. Der Isotyp der schweren Kette (γ, μ, α, ε, δ) definiert die Antikörperklasse.",
  },
  {
    id: "light",
    label: "Leichte Ketten (L-Ketten)",
    color: "#f59e0b",
    detail:
      "Zwei identische leichte Ketten (light chains, ~25 kDa) sind je über eine Disulfidbrücke an eine schwere Kette gebunden. Es gibt zwei Typen: κ (Kappa) und λ (Lambda). Jeder Antikörper hat entweder zwei κ- oder zwei λ-Ketten, nie eine Mischung.",
  },
  {
    id: "hinge",
    label: "Gelenkregion (Hinge)",
    color: "#ef4444",
    detail:
      "Die Gelenkregion verbindet Fab- und Fc-Fragment und verleiht dem Antikörper Flexibilität. Sie enthält Cystein-Reste für Disulfidbrücken zwischen den schweren Ketten. Die Gelenkregion ist besonders anfällig für Proteolyse (Papain → Fab; Pepsin → F(ab')₂).",
  },
  {
    id: "disulfide",
    label: "Disulfidbrücken",
    color: "#6b7280",
    detail:
      "Disulfidbrücken (S-S-Bindungen) stabilisieren die Antikörperstruktur: intrakatenäre Brücken innerhalb jeder Domäne, interkatenäre Brücken zwischen L- und H-Kette sowie zwischen den beiden H-Ketten in der Gelenkregion. Reduktion dieser Brücken denaturiert den Antikörper.",
  },
];

export default function AntibodyStructure() {
  const [active, setActive] = useState<string | null>(null);
  const activeRegion = regions.find((r) => r.id === active);

  const W = 420;
  const H = 320;
  // Center of antibody
  const cx = W / 2;
  const fcTop = 200; // top of Fc stem
  const fcBot = 285;
  const hingeY = 165;
  const armTopY = 60;
  const armW = 44;
  const armH = 100;
  // Left arm x-center, right arm x-center
  const leftArmCx = cx - 80;
  const rightArmCx = cx + 80;

  const isActive = (id: string) => active === id;
  const col = (id: string) => regions.find((r) => r.id === id)!.color;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Antikörperstruktur (IgG)
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf einen Bereich für Details.
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
        <title>Y-förmige Antikörperstruktur mit Fab und Fc Fragment</title>

        {/* ── Fc stem (constant, heavy chains) ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "constant" ? null : "constant")}
          onMouseEnter={() => setActive("constant")}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x={cx - 22}
            y={fcTop}
            width={44}
            height={fcBot - fcTop}
            rx={6}
            fill={isActive("constant") ? "#d1fae5" : "#ecfdf5"}
            stroke={col("constant")}
            strokeWidth={isActive("constant") ? 2.5 : 1.5}
          />
          <text
            x={cx}
            y={fcTop + 30}
            textAnchor="middle"
            fontSize={9}
            fill={col("constant")}
            fontWeight={700}
          >
            Fc
          </text>
          <text x={cx} y={fcTop + 44} textAnchor="middle" fontSize={7} fill={col("constant")}>
            konstant
          </text>
          {/* Domain boxes inside Fc */}
          <rect
            x={cx - 16}
            y={fcTop + 52}
            width={32}
            height={20}
            rx={3}
            fill={col("constant")}
            opacity={0.25}
          />
          <text
            x={cx}
            y={fcTop + 66}
            textAnchor="middle"
            fontSize={7}
            fill={col("constant")}
            fontWeight={600}
          >
            CH2
          </text>
          <rect
            x={cx - 16}
            y={fcTop + 76}
            width={32}
            height={20}
            rx={3}
            fill={col("constant")}
            opacity={0.25}
          />
          <text
            x={cx}
            y={fcTop + 90}
            textAnchor="middle"
            fontSize={7}
            fill={col("constant")}
            fontWeight={600}
          >
            CH3
          </text>
        </g>

        {/* ── Hinge region ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "hinge" ? null : "hinge")}
          onMouseEnter={() => setActive("hinge")}
          onMouseLeave={() => setActive(null)}
        >
          {/* Left connector */}
          <line
            x1={leftArmCx}
            y1={armTopY + armH}
            x2={cx - 22}
            y2={fcTop}
            stroke={col("hinge")}
            strokeWidth={isActive("hinge") ? 3 : 2}
          />
          {/* Right connector */}
          <line
            x1={rightArmCx}
            y1={armTopY + armH}
            x2={cx + 22}
            y2={fcTop}
            stroke={col("hinge")}
            strokeWidth={isActive("hinge") ? 3 : 2}
          />
          {/* Hinge label */}
          <rect
            x={cx - 28}
            y={hingeY}
            width={56}
            height={18}
            rx={5}
            fill={isActive("hinge") ? "#fee2e2" : "#fef2f2"}
            stroke={col("hinge")}
            strokeWidth={1}
          />
          <text
            x={cx}
            y={hingeY + 12}
            textAnchor="middle"
            fontSize={8}
            fill={col("hinge")}
            fontWeight={700}
          >
            Hinge
          </text>
        </g>

        {/* ── Left Fab arm ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "variable" ? null : "variable")}
          onMouseEnter={() => setActive("variable")}
          onMouseLeave={() => setActive(null)}
        >
          {/* VL + VH (variable, top half) */}
          <rect
            x={leftArmCx - armW / 2}
            y={armTopY}
            width={armW}
            height={armH / 2}
            rx={6}
            fill={isActive("variable") ? "#dbeafe" : "#eff6ff"}
            stroke={col("variable")}
            strokeWidth={isActive("variable") ? 2.5 : 1.5}
          />
          <text
            x={leftArmCx}
            y={armTopY + 14}
            textAnchor="middle"
            fontSize={7}
            fill={col("variable")}
            fontWeight={700}
          >
            VH
          </text>
          <text
            x={leftArmCx}
            y={armTopY + 25}
            textAnchor="middle"
            fontSize={7}
            fill={col("variable")}
            fontWeight={700}
          >
            VL
          </text>
          <text
            x={leftArmCx}
            y={armTopY + 38}
            textAnchor="middle"
            fontSize={6}
            fill={col("variable")}
          >
            Antigen-
          </text>
          <text
            x={leftArmCx}
            y={armTopY + 47}
            textAnchor="middle"
            fontSize={6}
            fill={col("variable")}
          >
            bindung
          </text>

          {/* CH1 + CL (constant, bottom half of Fab) */}
          <rect
            x={leftArmCx - armW / 2}
            y={armTopY + armH / 2}
            width={armW}
            height={armH / 2}
            rx={4}
            fill={isActive("variable") ? "#dbeafe" : "#f0fdf4"}
            stroke={col("constant")}
            strokeWidth={1}
          />
          <text
            x={leftArmCx}
            y={armTopY + armH / 2 + 16}
            textAnchor="middle"
            fontSize={7}
            fill={col("constant")}
            fontWeight={600}
          >
            CH1
          </text>
          <text
            x={leftArmCx}
            y={armTopY + armH / 2 + 28}
            textAnchor="middle"
            fontSize={7}
            fill={col("constant")}
            fontWeight={600}
          >
            CL
          </text>
        </g>

        {/* ── Right Fab arm ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "variable" ? null : "variable")}
          onMouseEnter={() => setActive("variable")}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x={rightArmCx - armW / 2}
            y={armTopY}
            width={armW}
            height={armH / 2}
            rx={6}
            fill={isActive("variable") ? "#dbeafe" : "#eff6ff"}
            stroke={col("variable")}
            strokeWidth={isActive("variable") ? 2.5 : 1.5}
          />
          <text
            x={rightArmCx}
            y={armTopY + 14}
            textAnchor="middle"
            fontSize={7}
            fill={col("variable")}
            fontWeight={700}
          >
            VH
          </text>
          <text
            x={rightArmCx}
            y={armTopY + 25}
            textAnchor="middle"
            fontSize={7}
            fill={col("variable")}
            fontWeight={700}
          >
            VL
          </text>
          <text
            x={rightArmCx}
            y={armTopY + 38}
            textAnchor="middle"
            fontSize={6}
            fill={col("variable")}
          >
            Antigen-
          </text>
          <text
            x={rightArmCx}
            y={armTopY + 47}
            textAnchor="middle"
            fontSize={6}
            fill={col("variable")}
          >
            bindung
          </text>

          <rect
            x={rightArmCx - armW / 2}
            y={armTopY + armH / 2}
            width={armW}
            height={armH / 2}
            rx={4}
            fill={isActive("variable") ? "#dbeafe" : "#f0fdf4"}
            stroke={col("constant")}
            strokeWidth={1}
          />
          <text
            x={rightArmCx}
            y={armTopY + armH / 2 + 16}
            textAnchor="middle"
            fontSize={7}
            fill={col("constant")}
            fontWeight={600}
          >
            CH1
          </text>
          <text
            x={rightArmCx}
            y={armTopY + armH / 2 + 28}
            textAnchor="middle"
            fontSize={7}
            fill={col("constant")}
            fontWeight={600}
          >
            CL
          </text>
        </g>

        {/* ── Light chains (L side of each arm, shown as thin overlay lines) ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "light" ? null : "light")}
          onMouseEnter={() => setActive("light")}
          onMouseLeave={() => setActive(null)}
        >
          {/* Left light chain accent */}
          <rect
            x={leftArmCx - armW / 2}
            y={armTopY}
            width={10}
            height={armH}
            rx={4}
            fill={col("light")}
            opacity={isActive("light") ? 0.45 : 0.2}
          />
          {/* Right light chain accent */}
          <rect
            x={rightArmCx + armW / 2 - 10}
            y={armTopY}
            width={10}
            height={armH}
            rx={4}
            fill={col("light")}
            opacity={isActive("light") ? 0.45 : 0.2}
          />
        </g>

        {/* ── Disulfide bridges ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "disulfide" ? null : "disulfide")}
          onMouseEnter={() => setActive("disulfide")}
          onMouseLeave={() => setActive(null)}
        >
          {/* Between the two heavy chains at hinge */}
          <line
            x1={cx - 8}
            y1={fcTop + 2}
            x2={cx + 8}
            y2={fcTop + 2}
            stroke={col("disulfide")}
            strokeWidth={2.5}
            strokeDasharray="3,2"
          />
          <line
            x1={cx - 8}
            y1={fcTop + 8}
            x2={cx + 8}
            y2={fcTop + 8}
            stroke={col("disulfide")}
            strokeWidth={2.5}
            strokeDasharray="3,2"
          />
          {/* L-H chain bridges */}
          <line
            x1={leftArmCx + armW / 2 - 10}
            y1={armTopY + armH * 0.7}
            x2={leftArmCx + armW / 2}
            y2={armTopY + armH * 0.7}
            stroke={col("disulfide")}
            strokeWidth={2}
            strokeDasharray="2,2"
          />
          <line
            x1={rightArmCx - armW / 2}
            y1={armTopY + armH * 0.7}
            x2={rightArmCx - armW / 2 + 10}
            y2={armTopY + armH * 0.7}
            stroke={col("disulfide")}
            strokeWidth={2}
            strokeDasharray="2,2"
          />
        </g>

        {/* ── Labels: heavy/light chain arrows ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "heavy" ? null : "heavy")}
          onMouseEnter={() => setActive("heavy")}
          onMouseLeave={() => setActive(null)}
        >
          <text x={18} y={130} fontSize={8} fill={col("heavy")} fontWeight={700}>
            H-Kette
          </text>
          <line
            x1={52}
            y1={128}
            x2={leftArmCx - armW / 2 + 14}
            y2={120}
            stroke={col("heavy")}
            strokeWidth={1}
            strokeDasharray="3,2"
          />
        </g>

        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "light" ? null : "light")}
          onMouseEnter={() => setActive("light")}
          onMouseLeave={() => setActive(null)}
        >
          <text x={18} y={90} fontSize={8} fill={col("light")} fontWeight={700}>
            L-Kette
          </text>
          <line
            x1={52}
            y1={88}
            x2={leftArmCx - armW / 2 + 5}
            y2={82}
            stroke={col("light")}
            strokeWidth={1}
            strokeDasharray="3,2"
          />
        </g>

        {/* Fab / Fc bracket labels */}
        <text x={leftArmCx - 38} y={armTopY + 10} fontSize={9} fill="#1e40af" fontWeight={700}>
          Fab
        </text>
        <text x={leftArmCx - 38} y={armTopY + 22} fontSize={7} fill="#1e40af">
          (×2)
        </text>
        <text x={cx + 30} y={fcTop + 20} fontSize={9} fill="#059669" fontWeight={700}>
          Fc
        </text>

        {/* Bottom legend */}
        {regions.slice(0, 4).map((r, i) => (
          <g
            key={r.id}
            className="cursor-pointer"
            onClick={() => setActive(active === r.id ? null : r.id)}
            onMouseEnter={() => setActive(r.id)}
            onMouseLeave={() => setActive(null)}
          >
            <rect x={10 + i * 100} y={295} width={10} height={10} rx={2} fill={r.color} />
            <text x={24 + i * 100} y={303} fontSize={7} fill="#374151">
              {r.label.split(" ")[0]}
            </text>
          </g>
        ))}
      </svg>

      {activeRegion && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            {activeRegion.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeRegion.detail}</p>
        </div>
      )}
    </div>
  );
}
