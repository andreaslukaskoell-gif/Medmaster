import { useState } from "react";

type View = "rates" | "concentration" | "lechatelierPreview";

export default function Equilibrium() {
  const [view, setView] = useState<View>("rates");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Chemisches Gleichgewicht
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Hin- und Rückreaktion, Konzentrations-Zeit-Verlauf, dynamisches Gleichgewicht.
      </p>

      <div className="flex gap-2 mb-2 flex-wrap">
        {(["rates", "concentration"] as View[]).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              view === v
                ? "bg-teal-600 text-white border-teal-600"
                : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
            }`}
          >
            {v === "rates" ? "Reaktionsraten" : "Konzentrationen"}
          </button>
        ))}
      </div>

      {view === "rates" && (
        <svg role="img" viewBox="0 0 480 270" className="w-full max-w-lg mx-auto">
          <title>Chemisches Gleichgewicht — Reaktionsraten</title>
          <defs>
            <marker id="arrT" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="#9ca3af" />
            </marker>
          </defs>

          {/* Axes */}
          <line
            x1="50"
            y1="220"
            x2="440"
            y2="220"
            stroke="#9ca3af"
            strokeWidth="1.5"
            markerEnd="url(#arrT)"
          />
          <line
            x1="50"
            y1="220"
            x2="50"
            y2="30"
            stroke="#9ca3af"
            strokeWidth="1.5"
            markerEnd="url(#arrT)"
          />
          <text x="245" y="240" textAnchor="middle" fontSize="11" fill="#9ca3af">
            Zeit →
          </text>
          <text
            x="20"
            y="125"
            textAnchor="middle"
            fontSize="11"
            fill="#9ca3af"
            transform="rotate(-90 20 125)"
          >
            Reaktionsrate
          </text>

          {/* Forward rate: starts high, decreases to equilibrium */}
          <path
            d="M60,50 C100,50 140,130 200,155 C240,165 280,165 420,165"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.5"
          />
          <text x="75" y="44" fontSize="10" fill="#2563eb" fontWeight="bold">
            v₁ (Hinreaktion)
          </text>

          {/* Reverse rate: starts low, increases to equilibrium */}
          <path
            d="M60,210 C100,210 140,180 200,170 C240,165 280,165 420,165"
            fill="none"
            stroke="#dc2626"
            strokeWidth="2.5"
          />
          <text x="62" y="208" fontSize="10" fill="#dc2626" fontWeight="bold">
            v₂ (Rückreaktion)
          </text>

          {/* Equilibrium line */}
          <line
            x1="200"
            y1="50"
            x2="200"
            y2="220"
            stroke="#16a34a"
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />
          <text x="204" y="45" fontSize="9" fill="#16a34a" fontWeight="bold">
            Gleichgewicht
          </text>
          <text x="204" y="57" fontSize="9" fill="#16a34a">
            v₁ = v₂
          </text>

          {/* Equilibrium rate label */}
          <circle cx="420" cy="165" r="4" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
          <text x="380" y="158" fontSize="9" fill="#f59e0b" fontWeight="bold">
            v₁ = v₂
          </text>

          {/* Arrows showing reactions */}
          <text x="240" y="100" textAnchor="middle" fontSize="22" fill="#2563eb">
            ⇌
          </text>
          <text x="310" y="96" fontSize="10" fill="#2563eb">
            A + B
          </text>
          <text x="340" y="108" fontSize="10" fill="#dc2626">
            ⇌ C + D
          </text>

          <text x="245" y="258" textAnchor="middle" fontSize="10" fill="#6b7280">
            Vor dem GGW: v₁ &gt; v₂ → danach: v₁ = v₂ (dynamisch)
          </text>
        </svg>
      )}

      {view === "concentration" && (
        <svg role="img" viewBox="0 0 480 270" className="w-full max-w-lg mx-auto">
          <title>Gleichgewicht — Konzentrationen vs. Zeit</title>
          <defs>
            <marker id="arrC" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="#9ca3af" />
            </marker>
          </defs>

          {/* Axes */}
          <line
            x1="50"
            y1="220"
            x2="440"
            y2="220"
            stroke="#9ca3af"
            strokeWidth="1.5"
            markerEnd="url(#arrC)"
          />
          <line
            x1="50"
            y1="220"
            x2="50"
            y2="30"
            stroke="#9ca3af"
            strokeWidth="1.5"
            markerEnd="url(#arrC)"
          />
          <text x="245" y="240" textAnchor="middle" fontSize="11" fill="#9ca3af">
            Zeit →
          </text>
          <text
            x="20"
            y="125"
            textAnchor="middle"
            fontSize="11"
            fill="#9ca3af"
            transform="rotate(-90 20 125)"
          >
            Konzentration
          </text>

          {/* Reactant A: decreases */}
          <path
            d="M60,60 C100,60 140,100 200,120 C240,128 280,130 420,130"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.5"
          />
          <text x="65" y="54" fontSize="10" fill="#2563eb" fontWeight="bold">
            [A] Edukts
          </text>

          {/* Reactant B: decreases (slightly different) */}
          <path
            d="M60,80 C100,80 140,115 200,132 C240,138 280,140 420,140"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="2"
          />
          <text x="65" y="75" fontSize="10" fill="#7c3aed" fontWeight="bold">
            [B]
          </text>

          {/* Product C: increases */}
          <path
            d="M60,210 C100,210 140,175 200,158 C240,150 280,148 420,148"
            fill="none"
            stroke="#dc2626"
            strokeWidth="2.5"
          />
          <text x="65" y="205" fontSize="10" fill="#dc2626" fontWeight="bold">
            [C] Produkt
          </text>

          {/* Product D */}
          <path
            d="M60,215 C100,215 140,185 200,166 C240,158 280,158 420,158"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
          />
          <text x="65" y="218" fontSize="10" fill="#f97316" fontWeight="bold">
            [D]
          </text>

          {/* Equilibrium dashed line */}
          <line
            x1="200"
            y1="30"
            x2="200"
            y2="220"
            stroke="#16a34a"
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />
          <text x="204" y="42" fontSize="9" fill="#16a34a" fontWeight="bold">
            GGW erreicht
          </text>

          {/* Kc expression */}
          <rect
            x="330"
            y="38"
            width="110"
            height="38"
            rx="6"
            fill="#f0fdf4"
            stroke="#16a34a"
            strokeWidth="1"
          />
          <text x="385" y="52" textAnchor="middle" fontSize="9" fill="#15803d" fontWeight="bold">
            Kc = [C]·[D]
          </text>
          <text x="385" y="64" textAnchor="middle" fontSize="9" fill="#15803d">
            {" "}
            [A]·[B]
          </text>
          <line x1="340" y1="58" x2="430" y2="58" stroke="#15803d" strokeWidth="1" />
        </svg>
      )}

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {view === "rates"
            ? "Das dynamische Gleichgewicht ist kein statischer Zustand — Hin- und Rückreaktion laufen weiterhin ab, aber mit gleicher Geschwindigkeit (v₁ = v₂). Makroskopisch keine Änderung sichtbar."
            : "Am Gleichgewicht bleiben die Konzentrationen konstant. Das Massenwirkungsgesetz (MWG) beschreibt die Gleichgewichtskonstante Kc. Kc > 1: Gleichgewicht auf Produktseite; Kc < 1: auf Eduktseite."}
        </p>
      </div>
    </div>
  );
}
