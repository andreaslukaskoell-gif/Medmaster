import { useState } from "react";

type MutDef = {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  detail: string;
  before: string[];
  after: string[];
  changeIdx: number[];
  strikeIdx?: number[];
  insertAt?: number;
};

const MUTATIONS: MutDef[] = [
  {
    id: "transition",
    label: "Substitution",
    sublabel: "Transition (Purin ↔ Purin / Pyrimidin ↔ Pyrimidin)",
    color: "#3b82f6",
    detail:
      "Transition: Austausch innerhalb der gleichen Basenkategorie — A↔G (Purine) oder C↔T (Pyrimidine). Weniger störend als Transversion. Häufig durch oxidative Schäden (8-OHdG: G→T Transversion) oder spontane Desaminierung (C→U→T).",
    before: ["A", "T", "G", "C", "A", "T"],
    after: ["A", "T", "G", "C", "G", "T"],
    changeIdx: [4],
  },
  {
    id: "transversion",
    label: "Substitution",
    sublabel: "Transversion (Purin ↔ Pyrimidin)",
    color: "#6366f1",
    detail:
      "Transversion: Austausch zwischen Purin und Pyrimidin (A↔C, A↔T, G↔C, G↔T). Seltener als Transition, aber häufig stärker deletär. Führt je nach Position zu silent, missense oder nonsense Mutation. Nonsense: Austausch erzeugt Stop-Codon → verkürztes Protein.",
    before: ["A", "T", "G", "C", "A", "T"],
    after: ["A", "T", "G", "C", "C", "T"],
    changeIdx: [4],
  },
  {
    id: "insertion",
    label: "Insertion",
    sublabel: "Einfügung eines Basenpaars → Frameshift",
    color: "#10b981",
    detail:
      "Insertion eines oder mehrerer Basenpaare. Verursacht Leserahmenverschiebung (Frameshift) ab der Insertionsstelle. Alle nachfolgenden Codons sind verändert → meist vorzeitiges Stop-Codon oder völlig verändertes Protein. Beispiel: Cystic Fibrosis (ΔF508 = Deletion von 3 Basen in CFTR).",
    before: ["A", "T", "G", "C", "A", "T"],
    after: ["A", "T", "G", "X", "C", "A", "T"],
    changeIdx: [3],
    insertAt: 3,
  },
  {
    id: "deletion",
    label: "Deletion",
    sublabel: "Verlust eines Basenpaars → Frameshift",
    color: "#ef4444",
    detail:
      "Deletion eines oder mehrerer Basenpaare führt zur Leserahmenverschiebung. Alle Codons stromabwärts sind verändert. Deletionen von 3n Basenpaaren dagegen erhalten den Leserahmen (In-Frame-Deletion) → nur wenige Aminosäuren fehlen. Beispiel: Duchenne (Frameshift) vs. Becker Muskeldystrophie (In-Frame).",
    before: ["A", "T", "G", "C", "A", "T"],
    after: ["A", "T", "G", "A", "T"],
    changeIdx: [],
    strikeIdx: [3],
  },
];

const BASE_COLORS: Record<string, string> = {
  A: "#f59e0b",
  T: "#3b82f6",
  G: "#10b981",
  C: "#ef4444",
  X: "#a78bfa",
};

function BaseBox({
  base,
  highlight = false,
  strike = false,
  color,
  inserted = false,
}: {
  base: string;
  highlight?: boolean;
  strike?: boolean;
  color?: string;
  inserted?: boolean;
}) {
  const bg = highlight
    ? (color ?? BASE_COLORS[base] ?? "#8b5cf6")
    : (BASE_COLORS[base] ?? "#94a3b8");
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 26,
        height: 26,
        borderRadius: 5,
        backgroundColor: bg,
        opacity: strike ? 0.35 : 1,
        border: inserted
          ? `2px dashed ${color ?? "#8b5cf6"}`
          : `2px solid ${highlight ? bg : "transparent"}`,
        marginRight: 2,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <span style={{ color: "white", fontWeight: 700, fontSize: 13 }}>{base}</span>
      {inserted && (
        <span
          style={{
            position: "absolute",
            top: -8,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 9,
            color: color ?? "#8b5cf6",
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          neu
        </span>
      )}
    </div>
  );
}

function SequenceRow({
  bases,
  highlightIdx,
  strikeIdx,
  insertedIdx,
  mutColor,
  label,
}: {
  bases: string[];
  highlightIdx?: number[];
  strikeIdx?: number[];
  insertedIdx?: number[];
  mutColor: string;
  label: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
      <span style={{ fontSize: 11, color: "#64748b", width: 56, flexShrink: 0 }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}>
        {bases.map((b, i) => (
          <BaseBox
            key={`${b}-${i}`}
            base={b}
            highlight={highlightIdx?.includes(i) || insertedIdx?.includes(i)}
            strike={strikeIdx?.includes(i)}
            color={mutColor}
            inserted={insertedIdx?.includes(i)}
          />
        ))}
      </div>
      {strikeIdx && strikeIdx.length > 0 && (
        <span style={{ fontSize: 10, color: "#ef4444", fontStyle: "italic" }}>← Frameshift</span>
      )}
      {insertedIdx && insertedIdx.length > 0 && (
        <span style={{ fontSize: 10, color: mutColor, fontStyle: "italic" }}>← Frameshift</span>
      )}
    </div>
  );
}

export default function MutationTypes() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = MUTATIONS.find((m) => m.id === activeId) ?? null;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Punktmutationen der DNA — Typen und Auswirkungen
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf eine Mutation für Details zur Auswirkung auf das Protein.
      </p>

      {/* Mutation type buttons */}
      <div className="grid grid-cols-2 gap-2">
        {MUTATIONS.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveId(activeId === m.id ? null : m.id)}
            className="text-left rounded-lg p-2 transition-all border"
            style={{
              backgroundColor: activeId === m.id ? `${m.color}18` : "transparent",
              borderColor: activeId === m.id ? m.color : "#e2e8f0",
            }}
          >
            <div className="text-xs font-bold" style={{ color: m.color }}>
              {m.label}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{m.sublabel}</div>
          </button>
        ))}
      </div>

      {/* Sequence visualizer */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
        {active ? (
          <div>
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Sequenzveränderung:
            </div>
            <SequenceRow bases={active.before} mutColor={active.color} label="Vorher:" />
            <SequenceRow
              bases={active.after}
              highlightIdx={active.changeIdx}
              strikeIdx={active.id === "deletion" ? undefined : undefined}
              insertedIdx={active.id === "insertion" ? [active.insertAt ?? 3] : undefined}
              mutColor={active.color}
              label="Nachher:"
            />
            {/* Codon reading frame below */}
            <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Leserahmen (je 3 Basen):{" "}
              </span>
              {active.id === "insertion" || active.id === "deletion" ? (
                <span style={{ color: active.color }}>
                  Ab Mutationsstelle verschoben → alle nachfolgenden Codons geändert (Frameshift)
                </span>
              ) : (
                <span style={{ color: active.color }}>
                  Leserahmen erhalten — nur 1 Codon und 1 Aminosäure betroffen
                </span>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Default: show all four side by side as small overview */}
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Alle Typen auf einen Blick (Originalsequenz: A T G C A T)
            </div>
            {MUTATIONS.map((m) => (
              <div key={m.id} className="mb-2">
                <div className="text-xs font-bold mb-1" style={{ color: m.color }}>
                  {m.label} ({m.sublabel.split(" ")[0]}):
                </div>
                <SequenceRow
                  bases={m.after}
                  highlightIdx={m.changeIdx}
                  insertedIdx={m.id === "insertion" ? [m.insertAt ?? 3] : undefined}
                  mutColor={m.color}
                  label="→"
                />
              </div>
            ))}
          </>
        )}
      </div>

      {/* Detail card */}
      {active && (
        <div
          className="rounded-lg p-3 border text-xs text-gray-700 dark:text-gray-300"
          style={{ backgroundColor: `${active.color}10`, borderColor: `${active.color}40` }}
        >
          <p className="font-semibold mb-1" style={{ color: active.color }}>
            {active.label} — {active.sublabel}
          </p>
          <p>{active.detail}</p>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
        {[
          { b: "A", label: "Adenin" },
          { b: "T", label: "Thymin" },
          { b: "G", label: "Guanin" },
          { b: "C", label: "Cytosin" },
        ].map(({ b, label }) => (
          <span key={b} className="flex items-center gap-1">
            <span
              style={{
                display: "inline-block",
                width: 14,
                height: 14,
                borderRadius: 3,
                backgroundColor: BASE_COLORS[b],
              }}
            />
            {b} = {label}
          </span>
        ))}
      </div>
    </div>
  );
}
