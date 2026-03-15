import { useState } from "react";

type MutationType = {
  id: string;
  label: string;
  color: string;
  short: string;
  detail: string;
  before: string[];
  after: string[];
  afterLabel?: string;
};

const MUTATIONS: MutationType[] = [
  {
    id: "deletion",
    label: "Deletion",
    color: "#ef4444",
    short: "Verlust eines Chromosomenabschnitts",
    detail:
      "Ein Chromosomenstück bricht heraus und geht verloren. Folge: Haploinsuffizienz für alle Gene in diesem Abschnitt. Beispiel: Cri-du-chat-Syndrom (Deletion 5p), Wolf-Hirschhorn-Syndrom (Deletion 4p).",
    before: ["A", "B", "C", "D", "E"],
    after: ["A", "D", "E"],
    afterLabel: "B–C fehlen",
  },
  {
    id: "duplikation",
    label: "Duplikation",
    color: "#3b82f6",
    short: "Verdopplung eines Chromosomenabschnitts",
    detail:
      "Ein Abschnitt liegt in zwei oder mehr Kopien vor. Gendosis erhöht. Häufig durch ungleiches Crossing-over. Beispiel: Charcot-Marie-Tooth Typ 1A (Duplikation 17p12).",
    before: ["A", "B", "C", "D", "E"],
    after: ["A", "B", "C", "B", "C", "D", "E"],
    afterLabel: "B–C verdoppelt",
  },
  {
    id: "inversion",
    label: "Inversion",
    color: "#8b5cf6",
    short: "Umkehrung eines Chromosomenabschnitts",
    detail:
      "Ein herausgebrochener Abschnitt wird um 180° gedreht und wieder eingebaut. Perizentrisch: betrifft das Zentromere. Parazentrisch: nur einen Arm. Träger oft phänotypisch normal, aber erhöhtes Fehlgeburtsrisiko.",
    before: ["A", "B", "C", "D", "E"],
    after: ["A", "D", "C", "B", "E"],
    afterLabel: "B–D invertiert",
  },
  {
    id: "translokation",
    label: "Translokation",
    color: "#f59e0b",
    short: "Übertragung auf ein anderes Chromosom",
    detail:
      "Abschnitt bricht heraus und lagert sich an ein nicht-homologes Chromosom an. Reziproke Translokation: gegenseitiger Austausch. Robertsonsche Translokation: Fusion akrozentrischer Chromosomen — häufigste Ursache familiärer Trisomie 21 (Chromosom 14+21).",
    before: ["A", "B", "C", "D", "E"],
    after: ["A", "B", "X", "Y"],
    afterLabel: "C–E → Chrom. 2",
  },
  {
    id: "aneuploidie",
    label: "Aneuploidie",
    color: "#10b981",
    short: "Veränderte Chromosomenzahl",
    detail:
      "Trisomie (+1 Chromosom): Trisomie 21 (Down-Syndrom), Trisomie 18 (Edwards), Trisomie 13 (Patau). Monosomie (−1 Chromosom): Monosomie X = Turner-Syndrom (45,X). Ursache: Non-disjunction in Meiose I oder II.",
    before: ["Chr 1", "Chr 1"],
    after: ["Chr 1", "Chr 1", "Chr 1"],
    afterLabel: "Trisomie",
  },
];

// Segment colors for chromosome representation
const SEG_COLORS = ["#60a5fa", "#34d399", "#f87171", "#fbbf24", "#a78bfa", "#f472b6", "#38bdf8"];

function ChromosomeBar({
  segments,
  color,
  compact = false,
}: {
  segments: string[];
  color: string;
  compact?: boolean;
}) {
  const segW = compact ? 22 : 28;
  const segH = 20;
  const gap = 2;
  const totalW = segments.length * segW + (segments.length - 1) * gap;
  const rx = 4;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${segH}`}
      width={totalW}
      height={segH}
      style={{ display: "block" }}
    >
      {segments.map((label, i) => {
        const x = i * (segW + gap);
        const fill = i < SEG_COLORS.length ? SEG_COLORS[i % SEG_COLORS.length] : color;
        return (
          <g key={`${label}-${i}`}>
            <rect x={x} y={0} width={segW} height={segH} rx={rx} fill={fill} opacity={0.85} />
            <text
              x={x + segW / 2}
              y={segH / 2 + 4}
              textAnchor="middle"
              fontSize={label.length > 3 ? 5.5 : 8}
              fontWeight={700}
              fill="white"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ChromosomalMutations() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = MUTATIONS.find((m) => m.id === activeId) ?? null;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Chromosomenmutationen — Typen im Überblick
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf einen Mutationstyp für Details.
      </p>

      {/* Main diagram */}
      <svg viewBox="0 0 440 310" className="w-full max-w-lg mx-auto">
        <title>
          Chromosomenmutationen: Deletion, Duplikation, Inversion, Translokation, Aneuploidie
        </title>

        {/* Column headers */}
        <text x={80} y={18} textAnchor="middle" fontSize={9} fontWeight={700} fill="#64748b">
          Mutationstyp
        </text>
        <text x={210} y={18} textAnchor="middle" fontSize={9} fontWeight={700} fill="#64748b">
          Vorher
        </text>
        <text x={345} y={18} textAnchor="middle" fontSize={9} fontWeight={700} fill="#64748b">
          Nachher
        </text>

        {/* Divider */}
        <line x1={10} y1={24} x2={430} y2={24} stroke="#e2e8f0" strokeWidth={1} />

        {MUTATIONS.map((m, idx) => {
          const rowY = 34 + idx * 54;
          const isActive = activeId === m.id;

          // Before: 5 segments, after: variable
          const beforeW = 5 * 28 + 4 * 2; // 148
          const afterW = m.after.length * (m.after.length > 5 ? 22 : 28) + (m.after.length - 1) * 2;

          return (
            <g
              key={m.id}
              className="cursor-pointer"
              onClick={() => setActiveId(activeId === m.id ? null : m.id)}
            >
              {/* Row hover background */}
              <rect
                x={8}
                y={rowY - 4}
                width={424}
                height={50}
                rx={6}
                fill={isActive ? m.color : "transparent"}
                fillOpacity={isActive ? 0.07 : 0}
                stroke={isActive ? m.color : "transparent"}
                strokeWidth={1.5}
              />

              {/* Label pill */}
              <rect
                x={10}
                y={rowY + 8}
                width={140}
                height={26}
                rx={6}
                fill={m.color}
                fillOpacity={isActive ? 0.2 : 0.1}
                stroke={m.color}
                strokeWidth={isActive ? 2 : 1}
              />
              <text
                x={80}
                y={rowY + 26}
                textAnchor="middle"
                fontSize={11}
                fontWeight={700}
                fill={m.color}
              >
                {m.label}
              </text>

              {/* Arrow */}
              <text x={162} y={rowY + 26} textAnchor="middle" fontSize={14} fill="#94a3b8">
                →
              </text>

              {/* Before bar (foreign object for React SVG) */}
              <foreignObject x={170} y={rowY + 12} width={beforeW} height={24}>
                <div style={{ display: "flex" }}>
                  <ChromosomeBar segments={m.before} color={m.color} />
                </div>
              </foreignObject>

              {/* Arrow between before/after */}
              <text x={328} y={rowY + 26} textAnchor="middle" fontSize={14} fill="#94a3b8">
                →
              </text>

              {/* After bar */}
              <foreignObject x={338} y={rowY + 12} width={Math.min(afterW, 90)} height={24}>
                <div style={{ overflowX: "auto" }}>
                  <ChromosomeBar segments={m.after} color={m.color} compact={m.after.length > 5} />
                </div>
              </foreignObject>

              {/* After label */}
              {m.afterLabel && (
                <text
                  x={383}
                  y={rowY + 44}
                  textAnchor="middle"
                  fontSize={6.5}
                  fill={m.color}
                  fontStyle="italic"
                >
                  {m.afterLabel}
                </text>
              )}
            </g>
          );
        })}

        {/* Bottom legend */}
        <text x={220} y={302} textAnchor="middle" fontSize={7.5} fill="#94a3b8">
          Segmente A–E = Genabschnitte | Farbe = Position am Chromosom
        </text>
      </svg>

      {/* Detail card */}
      {active && (
        <div
          className="rounded-lg p-3 border text-sm"
          style={{
            backgroundColor: `${active.color}12`,
            borderColor: `${active.color}44`,
          }}
        >
          <p className="font-semibold" style={{ color: active.color }}>
            {active.label} — {active.short}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{active.detail}</p>
        </div>
      )}

      {!active && (
        <div className="rounded-lg p-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <strong className="text-gray-700 dark:text-gray-200">MedAT-Fokus:</strong> Aneuploidie
            durch Non-disjunction (Trisomie 21, Turner-Syndrom), Translokation als Ursache
            familiärer Trisomien, Inversion bei phänotypisch normalen Trägern.
          </p>
        </div>
      )}
    </div>
  );
}
