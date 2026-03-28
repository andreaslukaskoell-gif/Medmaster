import { useState } from "react";

type HybType = "sp3" | "sp2" | "sp";

const INFO: Record<HybType, { angle: string; shape: string; example: string; desc: string }> = {
  sp3: {
    angle: "109,5°",
    shape: "Tetraeder",
    example: "CH₄ (Methan)",
    desc: "4 sp³-Orbitale, tetraedrische Anordnung. Alle 4 Bindungen gleichwertig.",
  },
  sp2: {
    angle: "120°",
    shape: "trigonal-planar",
    example: "C₂H₄ (Ethen)",
    desc: "3 sp²-Orbitale in einer Ebene + 1 unhybridisiertes p-Orbital (π-Bindung).",
  },
  sp: {
    angle: "180°",
    shape: "linear",
    example: "C₂H₂ (Ethin)",
    desc: "2 sp-Orbitale linear + 2 p-Orbitale (zwei π-Bindungen → Dreifachbindung).",
  },
};

export default function CarbonHybridization() {
  const [active, setActive] = useState<HybType>("sp3");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Kohlenstoff-Hybridisierung
      </h4>
      <p className="text-xs text-[var(--muted)]">
        sp³, sp², sp — Orbitalform und Molekülgeometrie.
      </p>

      <div className="flex gap-2 mb-2 flex-wrap">
        {(["sp3", "sp2", "sp"] as HybType[]).map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              active === t
                ? "bg-violet-600 text-white border-violet-600"
                : "border-violet-300 text-violet-700 dark:text-violet-300 dark:border-violet-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {active === "sp3" && (
        <svg role="img" viewBox="0 0 480 260" className="w-full max-w-lg mx-auto">
          <title>sp³-Hybridisierung — Tetraeder</title>
          <defs>
            <radialGradient id="cGrad3" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#7c3aed" />
            </radialGradient>
            <radialGradient id="hGrad3" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </radialGradient>
          </defs>

          <text x="240" y="20" textAnchor="middle" fontSize="13" fill="#7c3aed" fontWeight="bold">
            sp³ — Tetraedrisch (109,5°)
          </text>

          {/* Central C */}
          <circle cx="240" cy="130" r="22" fill="url(#cGrad3)" stroke="#5b21b6" strokeWidth="1.5" />
          <text x="240" y="135" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">
            C
          </text>

          {/* 4 H atoms in tetrahedral positions */}
          {/* top */}
          <line x1="240" y1="108" x2="240" y2="62" stroke="#5b21b6" strokeWidth="2" />
          <circle cx="240" cy="50" r="16" fill="url(#hGrad3)" stroke="#d97706" strokeWidth="1.2" />
          <text x="240" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">
            H
          </text>

          {/* left */}
          <line x1="221" y1="143" x2="160" y2="170" stroke="#5b21b6" strokeWidth="2" />
          <circle cx="148" cy="176" r="16" fill="url(#hGrad3)" stroke="#d97706" strokeWidth="1.2" />
          <text x="148" y="181" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">
            H
          </text>

          {/* right */}
          <line x1="259" y1="143" x2="320" y2="170" stroke="#5b21b6" strokeWidth="2" />
          <circle cx="332" cy="176" r="16" fill="url(#hGrad3)" stroke="#d97706" strokeWidth="1.2" />
          <text x="332" y="181" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">
            H
          </text>

          {/* front (dashed = into page) */}
          <line
            x1="240"
            y1="152"
            x2="240"
            y2="196"
            stroke="#5b21b6"
            strokeWidth="2"
            strokeDasharray="5 3"
          />
          <circle cx="240" cy="210" r="16" fill="url(#hGrad3)" stroke="#d97706" strokeWidth="1.2" />
          <text x="240" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">
            H
          </text>

          {/* angle label */}
          <path d="M240,108 A30,30 0 0,1 263,143" fill="none" stroke="#f97316" strokeWidth="1.5" />
          <text x="272" y="120" fontSize="11" fill="#f97316" fontWeight="bold">
            109,5°
          </text>

          {/* Orbital lobes suggestion */}
          <ellipse
            cx="180"
            cy="100"
            rx="28"
            ry="14"
            fill="#ddd6fe"
            opacity="0.5"
            transform="rotate(-40 180 100)"
          />
          <ellipse
            cx="300"
            cy="100"
            rx="28"
            ry="14"
            fill="#ddd6fe"
            opacity="0.5"
            transform="rotate(40 300 100)"
          />
          <ellipse
            cx="180"
            cy="165"
            rx="28"
            ry="14"
            fill="#ddd6fe"
            opacity="0.5"
            transform="rotate(30 180 165)"
          />
          <ellipse
            cx="300"
            cy="165"
            rx="28"
            ry="14"
            fill="#ddd6fe"
            opacity="0.5"
            transform="rotate(-30 300 165)"
          />

          <text x="440" y="60" textAnchor="middle" fontSize="11" fill="#6b7280">
            CH₄
          </text>
          <text x="440" y="74" textAnchor="middle" fontSize="10" fill="#9ca3af">
            Methan
          </text>
          <text x="440" y="100" textAnchor="middle" fontSize="10" fill="#6b7280">
            4 σ-Bindungen
          </text>
          <text x="440" y="115" textAnchor="middle" fontSize="10" fill="#6b7280">
            0 π-Bindungen
          </text>
        </svg>
      )}

      {active === "sp2" && (
        <svg role="img" viewBox="0 0 480 260" className="w-full max-w-lg mx-auto">
          <title>sp²-Hybridisierung — trigonal-planar</title>
          <defs>
            <radialGradient id="cGrad2" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="100%" stopColor="#0891b2" />
            </radialGradient>
            <radialGradient id="hGrad2" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </radialGradient>
          </defs>

          <text x="240" y="20" textAnchor="middle" fontSize="13" fill="#0891b2" fontWeight="bold">
            sp² — Trigonal-planar (120°)
          </text>

          {/* Ethen C=C */}
          {/* C1 */}
          <circle cx="170" cy="130" r="20" fill="url(#cGrad2)" stroke="#0e7490" strokeWidth="1.5" />
          <text x="170" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
            C
          </text>

          {/* C2 */}
          <circle cx="310" cy="130" r="20" fill="url(#cGrad2)" stroke="#0e7490" strokeWidth="1.5" />
          <text x="310" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
            C
          </text>

          {/* Double bond C=C */}
          <line x1="192" y1="126" x2="288" y2="126" stroke="#0e7490" strokeWidth="2.5" />
          <line x1="192" y1="134" x2="288" y2="134" stroke="#0e7490" strokeWidth="2.5" />
          <text x="240" y="120" textAnchor="middle" fontSize="10" fill="#0891b2">
            σ
          </text>
          <text x="240" y="148" textAnchor="middle" fontSize="10" fill="#7c3aed">
            π
          </text>

          {/* H on C1 — 120° apart */}
          <line x1="152" y1="118" x2="105" y2="80" stroke="#0e7490" strokeWidth="1.8" />
          <circle cx="94" cy="72" r="14" fill="url(#hGrad2)" stroke="#d97706" strokeWidth="1.2" />
          <text x="94" y="77" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            H
          </text>

          <line x1="152" y1="142" x2="105" y2="180" stroke="#0e7490" strokeWidth="1.8" />
          <circle cx="94" cy="188" r="14" fill="url(#hGrad2)" stroke="#d97706" strokeWidth="1.2" />
          <text x="94" y="193" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            H
          </text>

          {/* H on C2 */}
          <line x1="328" y1="118" x2="375" y2="80" stroke="#0e7490" strokeWidth="1.8" />
          <circle cx="386" cy="72" r="14" fill="url(#hGrad2)" stroke="#d97706" strokeWidth="1.2" />
          <text x="386" y="77" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            H
          </text>

          <line x1="328" y1="142" x2="375" y2="180" stroke="#0e7490" strokeWidth="1.8" />
          <circle cx="386" cy="188" r="14" fill="url(#hGrad2)" stroke="#d97706" strokeWidth="1.2" />
          <text x="386" y="193" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            H
          </text>

          {/* p-orbital lobes (π bond) */}
          <ellipse cx="240" cy="110" rx="70" ry="10" fill="#c4b5fd" opacity="0.5" />
          <ellipse cx="240" cy="150" rx="70" ry="10" fill="#c4b5fd" opacity="0.5" />
          <text x="240" y="88" textAnchor="middle" fontSize="9" fill="#7c3aed">
            p-Orbital (π)
          </text>

          {/* Angle */}
          <text x="148" y="108" fontSize="10" fill="#f97316">
            120°
          </text>

          <text x="240" y="245" textAnchor="middle" fontSize="10" fill="#6b7280">
            C₂H₄ — 5 σ-Bindungen, 1 π-Bindung (Doppelbindung)
          </text>
        </svg>
      )}

      {active === "sp" && (
        <svg role="img" viewBox="0 0 480 260" className="w-full max-w-lg mx-auto">
          <title>sp-Hybridisierung — linear</title>
          <defs>
            <radialGradient id="cGradSp" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#bbf7d0" />
              <stop offset="100%" stopColor="#16a34a" />
            </radialGradient>
            <radialGradient id="hGradSp" cx="40%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </radialGradient>
          </defs>

          <text x="240" y="20" textAnchor="middle" fontSize="13" fill="#16a34a" fontWeight="bold">
            sp — Linear (180°)
          </text>

          {/* Linear: H-C≡C-H */}
          <circle
            cx="100"
            cy="130"
            r="14"
            fill="url(#hGradSp)"
            stroke="#d97706"
            strokeWidth="1.2"
          />
          <text x="100" y="135" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            H
          </text>

          <line x1="116" y1="130" x2="170" y2="130" stroke="#15803d" strokeWidth="2" />

          <circle
            cx="190"
            cy="130"
            r="20"
            fill="url(#cGradSp)"
            stroke="#15803d"
            strokeWidth="1.5"
          />
          <text x="190" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
            C
          </text>

          {/* Triple bond */}
          <line x1="212" y1="125" x2="268" y2="125" stroke="#15803d" strokeWidth="2" />
          <line x1="212" y1="130" x2="268" y2="130" stroke="#15803d" strokeWidth="2" />
          <line x1="212" y1="135" x2="268" y2="135" stroke="#15803d" strokeWidth="2" />
          <text x="240" y="118" textAnchor="middle" fontSize="9" fill="#15803d">
            σ
          </text>
          <text x="240" y="150" textAnchor="middle" fontSize="9" fill="#7c3aed">
            π π
          </text>

          <circle
            cx="290"
            cy="130"
            r="20"
            fill="url(#cGradSp)"
            stroke="#15803d"
            strokeWidth="1.5"
          />
          <text x="290" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
            C
          </text>

          <line x1="312" y1="130" x2="366" y2="130" stroke="#15803d" strokeWidth="2" />

          <circle
            cx="382"
            cy="130"
            r="14"
            fill="url(#hGradSp)"
            stroke="#d97706"
            strokeWidth="1.2"
          />
          <text x="382" y="135" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            H
          </text>

          {/* 180° label */}
          <path
            d="M116,130 A74,74 0 0,1 212,130"
            fill="none"
            stroke="#f97316"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text x="164" y="90" textAnchor="middle" fontSize="12" fill="#f97316" fontWeight="bold">
            180°
          </text>

          {/* p orbitals */}
          <ellipse cx="240" cy="108" rx="56" ry="10" fill="#c4b5fd" opacity="0.45" />
          <ellipse cx="240" cy="152" rx="56" ry="10" fill="#c4b5fd" opacity="0.45" />
          <ellipse cx="216" cy="130" rx="10" ry="40" fill="#86efac" opacity="0.35" />
          <ellipse cx="264" cy="130" rx="10" ry="40" fill="#86efac" opacity="0.35" />

          <text x="240" y="200" textAnchor="middle" fontSize="10" fill="#7c3aed">
            2 × p-Orbital → 2 π-Bindungen
          </text>
          <text x="240" y="215" textAnchor="middle" fontSize="10" fill="#6b7280">
            C₂H₂ — 3 σ-Bindungen, 2 π-Bindungen (Dreifachbindung)
          </text>
        </svg>
      )}

      <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-lg p-3">
        <div className="grid grid-cols-3 gap-2 text-xs mb-2">
          <div>
            <span className="font-semibold text-violet-700 dark:text-violet-300">Winkel:</span>{" "}
            {INFO[active].angle}
          </div>
          <div>
            <span className="font-semibold text-violet-700 dark:text-violet-300">Form:</span>{" "}
            {INFO[active].shape}
          </div>
          <div>
            <span className="font-semibold text-violet-700 dark:text-violet-300">Bsp.:</span>{" "}
            {INFO[active].example}
          </div>
        </div>
        <p className="text-xs text-gray-700 dark:text-gray-300">{INFO[active].desc}</p>
      </div>
    </div>
  );
}
