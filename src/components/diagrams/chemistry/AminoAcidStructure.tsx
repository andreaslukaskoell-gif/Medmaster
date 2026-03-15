import { useState } from "react";

type Group = "amino" | "carboxyl" | "rgroup" | "central" | "zwitterion" | null;

const GROUP_INFO: Record<NonNullable<Group>, { title: string; desc: string; color: string }> = {
  amino: {
    title: "Aminogruppe (–NH₂)",
    desc: "Basische Gruppe: nimmt Protonen auf → –NH₃⁺. Trägt im Zwitterion eine positive Ladung. Für Peptidbindung: reagiert mit Carboxylgruppe des nächsten AS.",
    color: "#22c55e",
  },
  carboxyl: {
    title: "Carboxylgruppe (–COOH)",
    desc: "Saure Gruppe: gibt Proton ab → –COO⁻. Trägt im Zwitterion eine negative Ladung. Für Peptidbindung: reagiert mit Aminogruppe des nächsten AS.",
    color: "#ef4444",
  },
  rgroup: {
    title: "Seitenkette (R-Gruppe)",
    desc: "Variable Gruppe: definiert die Identität der Aminosäure. Kann unpolar, polar, geladen, aromatisch, oder schwefelhaltig sein. Bestimmt Eigenschaften der AS.",
    color: "#8b5cf6",
  },
  central: {
    title: "Zentrales Kohlenstoffatom (α-C)",
    desc: "Das Cα-Atom ist chiral (außer bei Glycin, wo R=H). Liegt im Zentrum der Aminosäure. Verbindet alle 4 Gruppen tetraedrisch.",
    color: "#f97316",
  },
  zwitterion: {
    title: "Zwitterion (isoelektrischer Punkt)",
    desc: "Bei physiologischem pH (~ 7,4) liegt die Aminosäure als Zwitterion vor: –NH₃⁺ und –COO⁻. Nettoladung = 0 am isoelektrischen Punkt (pI).",
    color: "#0d9488",
  },
};

export default function AminoAcidStructure() {
  const [selected, setSelected] = useState<Group>(null);
  const [showZwitterion, setShowZwitterion] = useState(false);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Aminosäure — Allgemeine Struktur
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Klicke auf Gruppen für Details. Aminosäuren sind die Bausteine der Proteine.
      </p>

      <div className="flex gap-2 mb-2">
        <button
          onClick={() => {
            setShowZwitterion(false);
            setSelected(null);
          }}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            !showZwitterion
              ? "bg-teal-600 text-white border-teal-600"
              : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Neutrale Form
        </button>
        <button
          onClick={() => {
            setShowZwitterion(true);
            setSelected("zwitterion");
          }}
          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
            showZwitterion
              ? "bg-teal-600 text-white border-teal-600"
              : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
          }`}
        >
          Zwitterion (pH 7)
        </button>
      </div>

      <svg viewBox="0 0 480 310" className="w-full max-w-lg mx-auto">
        <title>Allgemeine Aminosäurestruktur mit Amino-, Carboxyl- und R-Gruppe</title>

        <text x="240" y="22" textAnchor="middle" fontSize="12" fill="#0f766e" fontWeight="bold">
          {showZwitterion ? "Zwitterion — physiologischer pH" : "Aminosäure — allgemeine Struktur"}
        </text>

        {/* Central carbon */}
        <g
          className="cursor-pointer"
          onClick={() => setSelected(selected === "central" ? null : "central")}
        >
          <circle
            cx="240"
            cy="155"
            r="20"
            fill={selected === "central" ? "#f9731644" : "#f9731622"}
            stroke="#f97316"
            strokeWidth="2"
          />
          <text x="240" y="152" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ea580c">
            Cα
          </text>
          <text x="240" y="165" textAnchor="middle" fontSize="8" fill="#ea580c">
            chiral
          </text>
        </g>

        {/* Amino group (left) */}
        <line x1="218" y1="155" x2="130" y2="155" stroke="#374151" strokeWidth="2.5" />
        <g
          className="cursor-pointer"
          onClick={() => setSelected(selected === "amino" ? null : "amino")}
        >
          <rect
            x="60"
            y="132"
            width="70"
            height="45"
            rx="8"
            fill={selected === "amino" ? "#22c55e33" : "#22c55e15"}
            stroke="#22c55e"
            strokeWidth="2"
          />
          <text x="95" y="152" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803d">
            {showZwitterion ? "NH₃⁺" : "NH₂"}
          </text>
          <text x="95" y="168" textAnchor="middle" fontSize="8" fill="#15803d">
            {showZwitterion ? "(+)" : "Aminogruppe"}
          </text>
        </g>
        <text x="175" y="150" textAnchor="middle" fontSize="8" fill="#6b7280">
          H
        </text>

        {/* Carboxyl group (right) */}
        <line x1="262" y1="155" x2="345" y2="155" stroke="#374151" strokeWidth="2.5" />
        <g
          className="cursor-pointer"
          onClick={() => setSelected(selected === "carboxyl" ? null : "carboxyl")}
        >
          <rect
            x="345"
            y="132"
            width="90"
            height="45"
            rx="8"
            fill={selected === "carboxyl" ? "#ef444433" : "#ef444415"}
            stroke="#ef4444"
            strokeWidth="2"
          />
          <text x="390" y="152" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">
            {showZwitterion ? "COO⁻" : "COOH"}
          </text>
          <text x="390" y="168" textAnchor="middle" fontSize="8" fill="#dc2626">
            {showZwitterion ? "(–)" : "Carboxylgruppe"}
          </text>
        </g>

        {/* H above central C */}
        <line x1="240" y1="133" x2="240" y2="88" stroke="#374151" strokeWidth="2" />
        <circle cx="240" cy="78" r="12" fill="#d1fae5" stroke="#6b7280" strokeWidth="1.5" />
        <text x="240" y="82" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">
          H
        </text>

        {/* R group (bottom) */}
        <line x1="240" y1="177" x2="240" y2="218" stroke="#374151" strokeWidth="2.5" />
        <g
          className="cursor-pointer"
          onClick={() => setSelected(selected === "rgroup" ? null : "rgroup")}
        >
          <rect
            x="175"
            y="218"
            width="130"
            height="50"
            rx="8"
            fill={selected === "rgroup" ? "#8b5cf633" : "#8b5cf615"}
            stroke="#8b5cf6"
            strokeWidth="2"
          />
          <text x="240" y="240" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#7c3aed">
            R
          </text>
          <text x="240" y="258" textAnchor="middle" fontSize="8" fill="#7c3aed">
            Seitenkette (variabel)
          </text>
        </g>

        {/* Bond annotations */}
        <text x="170" y="143" fontSize="8" fill="#6b7280">
          H
        </text>
        <line x1="178" y1="146" x2="222" y2="148" stroke="#374151" strokeWidth="1.5" />

        {/* 20 amino acids note */}
        <rect
          x="10"
          y="50"
          width="110"
          height="60"
          rx="6"
          fill="#f9fafb"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <text x="65" y="68" textAnchor="middle" fontSize="9" fill="#374151" fontWeight="bold">
          20 proteinogene
        </text>
        <text x="65" y="80" textAnchor="middle" fontSize="9" fill="#374151">
          Aminosäuren
        </text>
        <text x="65" y="94" textAnchor="middle" fontSize="8" fill="#6b7280">
          Unterschied: R-Gruppe
        </text>
        <text x="65" y="104" textAnchor="middle" fontSize="8" fill="#6b7280">
          Glycin: R = H
        </text>

        {/* Peptide bond note */}
        <rect
          x="360"
          y="50"
          width="115"
          height="60"
          rx="6"
          fill="#fef9c3"
          stroke="#fbbf24"
          strokeWidth="1"
        />
        <text x="418" y="68" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="bold">
          Peptidbindung
        </text>
        <text x="418" y="82" textAnchor="middle" fontSize="8" fill="#374151">
          NH₂ + COOH →
        </text>
        <text x="418" y="94" textAnchor="middle" fontSize="8" fill="#374151">
          –CO–NH– + H₂O
        </text>
        <text x="418" y="106" textAnchor="middle" fontSize="8" fill="#6b7280">
          (Kondensation)
        </text>

        {/* pI note */}
        {showZwitterion && (
          <g>
            <text x="240" y="295" textAnchor="middle" fontSize="9" fill="#0d9488" fontWeight="bold">
              Nettoladung = 0 am isoelektrischen Punkt (pI)
            </text>
          </g>
        )}
        {!showZwitterion && (
          <text x="240" y="295" textAnchor="middle" fontSize="9" fill="#6b7280">
            Alle AS haben: α-NH₂, α-COOH, H und R am Cα
          </text>
        )}
      </svg>

      {selected ? (
        <div
          className="rounded-lg p-3 border text-xs text-gray-700 dark:text-gray-300"
          style={{
            background: `${GROUP_INFO[selected].color}12`,
            borderColor: `${GROUP_INFO[selected].color}44`,
          }}
        >
          <strong style={{ color: GROUP_INFO[selected].color }}>
            {GROUP_INFO[selected].title}:
          </strong>{" "}
          {GROUP_INFO[selected].desc}
        </div>
      ) : (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Alle Aminosäuren teilen das Grundgerüst: α-Aminogruppe, α-Carboxylgruppe und H am
            zentralen Cα. Nur die R-Gruppe variiert und bestimmt die Eigenschaften (polar, unpolar,
            geladen, aromatisch).
          </p>
        </div>
      )}
    </div>
  );
}
