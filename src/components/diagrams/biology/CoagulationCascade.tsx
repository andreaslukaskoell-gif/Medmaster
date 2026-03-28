import { useState } from "react";

type Step = {
  id: string;
  label: string;
  sublabel?: string;
  x: number;
  y: number;
  color: string;
  pathway: "intrinsic" | "extrinsic" | "common";
  detail: string;
};

const steps: Step[] = [
  {
    id: "xii",
    label: "Faktor XII",
    sublabel: "Hageman-Faktor",
    x: 80,
    y: 40,
    color: "#7c3aed",
    pathway: "intrinsic",
    detail:
      "Faktor XII (Hageman-Faktor) wird durch Kontakt mit negativen Oberflächen (z. B. Kollagen, Glas) aktiviert. Dies startet den intrinsischen Weg. Klinisch weniger relevant — Mangel führt kaum zu Blutungen.",
  },
  {
    id: "xi",
    label: "Faktor XI",
    x: 80,
    y: 110,
    color: "#7c3aed",
    pathway: "intrinsic",
    detail:
      "Faktor XIa aktiviert Faktor IX. Faktor-XI-Mangel führt zur Hämophilie C (autosomal-rezessiv). Klinisch variabel — Blutungsneigung korreliert schlecht mit dem Faktorspiegel.",
  },
  {
    id: "ix",
    label: "Faktor IX",
    sublabel: "Christmas-Faktor",
    x: 80,
    y: 180,
    color: "#7c3aed",
    pathway: "intrinsic",
    detail:
      "Faktor IXa bildet zusammen mit Faktor VIIIa den Tenase-Komplex auf Phospholipidmembranen. Mangel an Faktor IX: Hämophilie B (X-chromosomal-rezessiv). Hemmung durch Heparin (über ATIII).",
  },
  {
    id: "vii",
    label: "Faktor VII",
    sublabel: "+ Tissue Factor",
    x: 320,
    y: 40,
    color: "#dc2626",
    pathway: "extrinsic",
    detail:
      "Faktor VII bindet Tissue Factor (TF/Faktor III), der bei Gefäßverletzung freigesetzt wird. Faktor VII hat die kürzeste Halbwertszeit (~4 h) aller Gerinnungsfaktoren → Erstmarker bei Vitamin-K-Mangel oder oraler Antikoagulation (INR/Quick).",
  },
  {
    id: "x",
    label: "Faktor X",
    sublabel: "Stuart-Prower",
    x: 200,
    y: 250,
    color: "#0891b2",
    pathway: "common",
    detail:
      "Faktor X ist der Konvergenzpunkt beider Wege. Aktivierung durch Tenase-Komplex (intrinsisch) oder Faktor VIIa/TF (extrinsisch). Faktor Xa bildet mit Faktor Va den Prothrombinase-Komplex. Hemmung durch: Heparin (indirekt über ATIII) und direkte orale Antikoagulanzien (Rivaroxaban, Apixaban).",
  },
  {
    id: "prothrombin",
    label: "Prothrombin",
    sublabel: "Faktor II",
    x: 200,
    y: 320,
    color: "#0891b2",
    pathway: "common",
    detail:
      "Prothrombin (Faktor II) wird vom Prothrombinase-Komplex (Xa + Va + Ca²⁺ + Phospholipid) zu Thrombin (Faktor IIa) gespalten. Prothrombin ist vitamin-K-abhängig (wie II, VII, IX, X, Protein C, S). Merkhilfe: '1972' (I, IX, VII, II) oder PIVKA bei Mangel.",
  },
  {
    id: "thrombin",
    label: "Thrombin",
    sublabel: "Faktor IIa",
    x: 200,
    y: 390,
    color: "#b45309",
    pathway: "common",
    detail:
      "Thrombin (Faktor IIa) ist das zentrale Effektorenzym: 1) Fibrinogen → Fibrin, 2) Aktivierung von Faktor XIII (Fibrinquervernetzung), 3) Aktivierung von Faktor V, VIII, XI (Amplifikation), 4) Aktivierung von Thrombozyten. Hemmung durch: Heparin (über ATIII), Hirudin, Dabigatran.",
  },
  {
    id: "fibrinogen",
    label: "Fibrinogen",
    sublabel: "Faktor I",
    x: 200,
    y: 460,
    color: "#065f46",
    pathway: "common",
    detail:
      "Fibrinogen (Faktor I, 340 kDa) ist ein lösliches Plasmaprotein. Thrombin spaltet Fibrinopeptide A und B ab → unlösliches Fibrinmonomer → spontane Polymerisation → Fibrinnetz. Faktor XIIIa vernetzt Fibrin kovalent (Glutaminreste). Fibrin bildet das strukturelle Gerüst des Thrombus.",
  },
  {
    id: "fibrin",
    label: "Fibrin",
    sublabel: "(vernetzt)",
    x: 200,
    y: 530,
    color: "#065f46",
    pathway: "common",
    detail:
      "Vernetztes Fibrin bildet das stabile Blutgerinnsel. Faktor XIIIa (aktiviert durch Thrombin) katalysiert die Quervernetzung. Auflösung durch Plasmin (Fibrinolyse). D-Dimere entstehen beim Abbau von vernetztem Fibrin (Diagnose: Thrombose/Lungenembolie).",
  },
];

const arrows = [
  { from: "xii", to: "xi" },
  { from: "xi", to: "ix" },
  { from: "ix", to: "x" },
  { from: "vii", to: "x" },
  { from: "x", to: "prothrombin" },
  { from: "prothrombin", to: "thrombin" },
  { from: "thrombin", to: "fibrinogen" },
  { from: "fibrinogen", to: "fibrin" },
];

const BOX_W = 110;
const BOX_H = 42;

function getCenter(step: Step) {
  return { x: step.x + BOX_W / 2, y: step.y + BOX_H / 2 };
}

export default function CoagulationCascade() {
  const [active, setActive] = useState<string | null>(null);
  const activeStep = steps.find((s) => s.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Gerinnungskaskade</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf einen Schritt für Details.
      </p>

      <svg role="img" viewBox="0 0 420 590" className="w-full max-w-sm mx-auto">
        <title>Gerinnungskaskade — intrinsischer und extrinsischer Weg</title>

        {/* Pathway headers */}
        <rect
          x={10}
          y={5}
          width={140}
          height={22}
          rx={5}
          fill="#ede9fe"
          stroke="#7c3aed"
          strokeWidth={1}
        />
        <text x={80} y={20} textAnchor="middle" fontSize={9} fill="#5b21b6" fontWeight={700}>
          Intrinsischer Weg
        </text>

        <rect
          x={250}
          y={5}
          width={140}
          height={22}
          rx={5}
          fill="#fee2e2"
          stroke="#dc2626"
          strokeWidth={1}
        />
        <text x={320} y={20} textAnchor="middle" fontSize={9} fill="#991b1b" fontWeight={700}>
          Extrinsischer Weg
        </text>

        <rect
          x={110}
          y={228}
          width={160}
          height={22}
          rx={5}
          fill="#e0f2fe"
          stroke="#0891b2"
          strokeWidth={1}
        />
        <text x={200} y={243} textAnchor="middle" fontSize={9} fill="#075985" fontWeight={700}>
          Gemeinsamer Weg
        </text>

        {/* Convergence connector: Faktor IX → Faktor X */}
        <line
          x1={getCenter(steps.find((s) => s.id === "ix")!).x}
          y1={getCenter(steps.find((s) => s.id === "ix")!).y}
          x2={getCenter(steps.find((s) => s.id === "x")!).x}
          y2={steps.find((s) => s.id === "x")!.y}
          stroke="#7c3aed"
          strokeWidth={1.5}
          markerEnd="url(#arrow-purple)"
        />
        {/* Faktor VII → Faktor X */}
        <line
          x1={getCenter(steps.find((s) => s.id === "vii")!).x}
          y1={getCenter(steps.find((s) => s.id === "vii")!).y}
          x2={getCenter(steps.find((s) => s.id === "x")!).x}
          y2={steps.find((s) => s.id === "x")!.y}
          stroke="#dc2626"
          strokeWidth={1.5}
          markerEnd="url(#arrow-red)"
        />

        {/* Common pathway arrows */}
        {["x", "prothrombin", "thrombin", "fibrinogen"].map((id) => {
          const from = steps.find((s) => s.id === id)!;
          const toId = arrows.find((a) => a.from === id)?.to;
          const to = steps.find((s) => s.id === toId);
          if (!to) return null;
          return (
            <line
              key={id}
              x1={from.x + BOX_W / 2}
              y1={from.y + BOX_H}
              x2={to.x + BOX_W / 2}
              y2={to.y}
              stroke="#0891b2"
              strokeWidth={1.5}
              markerEnd="url(#arrow-teal)"
            />
          );
        })}

        {/* Intrinsic pathway arrows (XII→XI, XI→IX) */}
        {["xii", "xi"].map((id) => {
          const from = steps.find((s) => s.id === id)!;
          const toId = arrows.find((a) => a.from === id)?.to;
          const to = steps.find((s) => s.id === toId);
          if (!to) return null;
          return (
            <line
              key={id}
              x1={from.x + BOX_W / 2}
              y1={from.y + BOX_H}
              x2={to.x + BOX_W / 2}
              y2={to.y}
              stroke="#7c3aed"
              strokeWidth={1.5}
              markerEnd="url(#arrow-purple)"
            />
          );
        })}

        {/* Thrombin → fibrin arrow color */}
        <line
          x1={steps.find((s) => s.id === "thrombin")!.x + BOX_W / 2}
          y1={steps.find((s) => s.id === "thrombin")!.y + BOX_H}
          x2={steps.find((s) => s.id === "fibrinogen")!.x + BOX_W / 2}
          y2={steps.find((s) => s.id === "fibrinogen")!.y}
          stroke="#b45309"
          strokeWidth={2}
          markerEnd="url(#arrow-amber)"
        />

        {/* Fibrinogen → fibrin */}
        <line
          x1={steps.find((s) => s.id === "fibrinogen")!.x + BOX_W / 2}
          y1={steps.find((s) => s.id === "fibrinogen")!.y + BOX_H}
          x2={steps.find((s) => s.id === "fibrin")!.x + BOX_W / 2}
          y2={steps.find((s) => s.id === "fibrin")!.y}
          stroke="#065f46"
          strokeWidth={2}
          markerEnd="url(#arrow-green)"
        />

        <defs>
          {[
            { id: "arrow-purple", color: "#7c3aed" },
            { id: "arrow-red", color: "#dc2626" },
            { id: "arrow-teal", color: "#0891b2" },
            { id: "arrow-amber", color: "#b45309" },
            { id: "arrow-green", color: "#065f46" },
          ].map(({ id, color }) => (
            <marker
              key={id}
              id={id}
              markerWidth={8}
              markerHeight={8}
              refX={6}
              refY={3}
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill={color} />
            </marker>
          ))}
        </defs>

        {/* Step boxes */}
        {steps.map((step) => {
          const isAct = active === step.id;
          return (
            <g
              key={step.id}
              className="cursor-pointer"
              onClick={() => setActive(active === step.id ? null : step.id)}
              onMouseEnter={() => setActive(step.id)}
              onMouseLeave={() => setActive(null)}
            >
              <rect
                x={step.x}
                y={step.y}
                width={BOX_W}
                height={BOX_H}
                rx={7}
                fill={isAct ? step.color : "white"}
                stroke={step.color}
                strokeWidth={isAct ? 2.5 : 1.5}
              />
              <text
                x={step.x + BOX_W / 2}
                y={step.y + (step.sublabel ? 16 : 24)}
                textAnchor="middle"
                fontSize={9}
                fill={isAct ? "white" : step.color}
                fontWeight={700}
              >
                {step.label}
              </text>
              {step.sublabel && (
                <text
                  x={step.x + BOX_W / 2}
                  y={step.y + 30}
                  textAnchor="middle"
                  fontSize={7}
                  fill={isAct ? "white" : "#6b7280"}
                >
                  {step.sublabel}
                </text>
              )}
            </g>
          );
        })}

        {/* Cofactor annotations */}
        <text x={152} y={215} fontSize={7} fill="#6b7280" fontStyle="italic">
          + VIIIa, Ca²⁺, PL
        </text>
        <text x={152} y={285} fontSize={7} fill="#6b7280" fontStyle="italic">
          + Va, Ca²⁺, PL
        </text>
      </svg>

      {activeStep && (
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
            {activeStep.label}
            {activeStep.sublabel ? ` (${activeStep.sublabel})` : ""}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeStep.detail}</p>
        </div>
      )}
    </div>
  );
}
