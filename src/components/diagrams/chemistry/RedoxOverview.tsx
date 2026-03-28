import { useState } from "react";

type Focus = "overview" | "oxidation" | "reduction" | "ox-numbers";

export default function RedoxOverview() {
  const [focus, setFocus] = useState<Focus>("overview");

  const INFO: Record<Focus, string> = {
    overview:
      "Redoxreaktionen umfassen stets eine Oxidation und eine Reduktion — sie laufen immer gleichzeitig ab (Kopplung). Das Reduktionsmittel wird oxidiert, das Oxidationsmittel wird reduziert.",
    oxidation:
      "Oxidation = Elektronenabgabe (OIL: Oxidation Is Loss). Die Oxidationszahl steigt. Beispiel: Zn → Zn²⁺ + 2 e⁻ (Oxidationszahl 0 → +2).",
    reduction:
      "Reduktion = Elektronenaufnahme (RIG: Reduction Is Gain). Die Oxidationszahl sinkt. Beispiel: Cu²⁺ + 2 e⁻ → Cu (Oxidationszahl +2 → 0).",
    "ox-numbers":
      "Oxidationszahlen: Elementar = 0; Ionen = Ladung; O meist −2 (außer H₂O₂: −1); H meist +1 (außer Metallhydride: −1). Summe = Gesamtladung.",
  };

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Redoxreaktionen — Überblick
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Oxidation, Reduktion, Oxidationszahlen, OIL-RIG-Regel.
      </p>

      <div className="flex gap-2 mb-2 flex-wrap">
        {(["overview", "oxidation", "reduction", "ox-numbers"] as Focus[]).map((f) => (
          <button
            key={f}
            onClick={() => setFocus(f)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              focus === f
                ? "bg-amber-600 text-white border-amber-600"
                : "border-amber-300 text-amber-700 dark:text-amber-300 dark:border-amber-700"
            }`}
          >
            {f === "overview"
              ? "Übersicht"
              : f === "oxidation"
                ? "Oxidation"
                : f === "reduction"
                  ? "Reduktion"
                  : "Ox.-zahlen"}
          </button>
        ))}
      </div>

      <svg role="img" viewBox="0 0 480 270" className="w-full max-w-lg mx-auto">
        <title>Redoxreaktionen Überblick</title>
        <defs>
          <radialGradient id="znGrad" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#6b7280" />
          </radialGradient>
          <radialGradient id="cuGrad" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
          <radialGradient id="znPlusGrad" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#dc2626" />
          </radialGradient>
          <marker id="arrRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#f59e0b" />
          </marker>
          <marker id="arrBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#2563eb" />
          </marker>
        </defs>

        {/* OIL-RIG mnemonic */}
        <rect
          x="10"
          y="10"
          width="140"
          height="50"
          rx="6"
          fill="#fffbeb"
          stroke="#d97706"
          strokeWidth="1.2"
        />
        <text x="80" y="30" textAnchor="middle" fontSize="12" fill="#d97706" fontWeight="bold">
          OIL
        </text>
        <text x="80" y="45" textAnchor="middle" fontSize="9" fill="#92400e">
          Oxidation Is Loss
        </text>
        <text x="80" y="56" textAnchor="middle" fontSize="9" fill="#92400e">
          (e⁻-Abgabe)
        </text>

        <rect
          x="330"
          y="10"
          width="140"
          height="50"
          rx="6"
          fill="#eff6ff"
          stroke="#2563eb"
          strokeWidth="1.2"
        />
        <text x="400" y="30" textAnchor="middle" fontSize="12" fill="#2563eb" fontWeight="bold">
          RIG
        </text>
        <text x="400" y="45" textAnchor="middle" fontSize="9" fill="#1e40af">
          Reduction Is Gain
        </text>
        <text x="400" y="56" textAnchor="middle" fontSize="9" fill="#1e40af">
          (e⁻-Aufnahme)
        </text>

        {/* Zn atom (left) */}
        <circle
          cx="95"
          cy="150"
          r="30"
          fill="url(#znGrad)"
          stroke="#4b5563"
          strokeWidth="1.5"
          opacity={focus === "reduction" ? 0.4 : 1}
        />
        <text x="95" y="147" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">
          Zn
        </text>
        <text x="95" y="162" textAnchor="middle" fontSize="9" fill="#d1d5db">
          Ox.: 0
        </text>

        {/* Zn2+ (bottom left) */}
        <circle
          cx="95"
          cy="230"
          r="24"
          fill="url(#znPlusGrad)"
          stroke="#b91c1c"
          strokeWidth="1.5"
          opacity={focus === "reduction" ? 0.4 : 1}
        />
        <text x="95" y="227" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
          Zn²⁺
        </text>
        <text x="95" y="241" textAnchor="middle" fontSize="9" fill="#fca5a5">
          Ox.: +2
        </text>

        {/* Oxidation arrow */}
        <line
          x1="95"
          y1="182"
          x2="95"
          y2="204"
          stroke="#d97706"
          strokeWidth="2"
          markerEnd="url(#arrRed)"
        />
        <text x="10" y="196" fontSize="9" fill="#d97706" fontWeight="bold">
          Oxidation
        </text>
        <text x="10" y="207" fontSize="8" fill="#d97706">
          −2 e⁻
        </text>

        {/* Cu2+ (right top) */}
        <circle
          cx="385"
          cy="150"
          r="30"
          fill="url(#cuGrad)"
          stroke="#b45309"
          strokeWidth="1.5"
          opacity={focus === "oxidation" ? 0.4 : 1}
        />
        <text x="385" y="147" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
          Cu²⁺
        </text>
        <text x="385" y="162" textAnchor="middle" fontSize="9" fill="#fef3c7">
          Ox.: +2
        </text>

        {/* Cu (right bottom) */}
        <circle
          cx="385"
          cy="230"
          r="26"
          fill="url(#cuGrad)"
          stroke="#b45309"
          strokeWidth="2"
          opacity={focus === "oxidation" ? 0.4 : 1}
        />
        <text x="385" y="227" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">
          Cu
        </text>
        <text x="385" y="241" textAnchor="middle" fontSize="9" fill="#fef3c7">
          Ox.: 0
        </text>

        {/* Reduction arrow */}
        <line
          x1="385"
          y1="182"
          x2="385"
          y2="204"
          stroke="#2563eb"
          strokeWidth="2"
          markerEnd="url(#arrBlue)"
        />
        <text x="418" y="196" fontSize="9" fill="#2563eb" fontWeight="bold">
          Reduktion
        </text>
        <text x="418" y="207" fontSize="8" fill="#2563eb">
          +2 e⁻
        </text>

        {/* Electron transfer */}
        <path
          d="M130,160 C200,120 280,120 350,160"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2.5"
          markerEnd="url(#arrRed)"
        />
        <text x="240" y="118" textAnchor="middle" fontSize="11" fill="#d97706" fontWeight="bold">
          2 e⁻
        </text>

        {/* Overall equation */}
        <text x="240" y="260" textAnchor="middle" fontSize="10" fill="#6b7280">
          Zn + Cu²⁺ → Zn²⁺ + Cu
        </text>

        {/* Highlight box for ox-numbers */}
        {focus === "ox-numbers" && (
          <>
            <rect
              x="155"
              y="130"
              width="170"
              height="110"
              rx="8"
              fill="#fefce8"
              stroke="#ca8a04"
              strokeWidth="1.5"
              opacity="0.95"
            />
            <text
              x="240"
              y="150"
              textAnchor="middle"
              fontSize="10"
              fill="#713f12"
              fontWeight="bold"
            >
              Oxidationszahlen
            </text>
            <text x="240" y="166" textAnchor="middle" fontSize="9" fill="#713f12">
              Elementar: 0
            </text>
            <text x="240" y="180" textAnchor="middle" fontSize="9" fill="#713f12">
              Ionen: = Ladung
            </text>
            <text x="240" y="194" textAnchor="middle" fontSize="9" fill="#713f12">
              O: meist −2
            </text>
            <text x="240" y="208" textAnchor="middle" fontSize="9" fill="#713f12">
              H: meist +1
            </text>
            <text x="240" y="226" textAnchor="middle" fontSize="9" fill="#713f12">
              Summe = Gesamtladung
            </text>
          </>
        )}
      </svg>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">{INFO[focus]}</p>
      </div>
    </div>
  );
}
