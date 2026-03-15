import { useState } from "react";

type RType = "synthese" | "analyse" | "austausch" | "redox";

const TYPES: { id: RType; label: string; color: string; bg: string }[] = [
  { id: "synthese", label: "Synthese", color: "#2563eb", bg: "#dbeafe" },
  { id: "analyse", label: "Analyse", color: "#dc2626", bg: "#fee2e2" },
  { id: "austausch", label: "Austausch", color: "#d97706", bg: "#fef3c7" },
  { id: "redox", label: "Redox", color: "#7c3aed", bg: "#ede9fe" },
];

const INFO: Record<RType, { eq: string; desc: string; example: string }> = {
  synthese: {
    eq: "A + B → AB",
    desc: "Zwei oder mehr Stoffe vereinigen sich zu einem einzigen Produkt.",
    example: "2 H₂ + O₂ → 2 H₂O  |  N₂ + 3 H₂ ⇌ 2 NH₃ (Haber-Bosch)",
  },
  analyse: {
    eq: "AB → A + B",
    desc: "Ein Stoff zerfällt in zwei oder mehr einfachere Produkte (Zersetzung).",
    example: "2 H₂O₂ → 2 H₂O + O₂  |  CaCO₃ → CaO + CO₂",
  },
  austausch: {
    eq: "AB + C → AC + B  (einfach)\nAB + CD → AD + CB  (doppelt)",
    desc: "Einfacher Austausch: Ein Element ersetzt ein anderes. Doppelter Austausch: Ionentausch zwischen zwei Verbindungen.",
    example: "Fe + CuSO₄ → FeSO₄ + Cu  |  NaCl + AgNO₃ → AgCl↓ + NaNO₃",
  },
  redox: {
    eq: "Ox + Red → Red' + Ox'",
    desc: "Elektronenübertragung: Oxidation (e⁻-Abgabe) und Reduktion (e⁻-Aufnahme) laufen gleichzeitig ab.",
    example: "Zn + CuSO₄ → ZnSO₄ + Cu  |  Zn → Zn²⁺ + 2e⁻ (Oxidation)",
  },
};

export default function ReactionTypes() {
  const [active, setActive] = useState<RType>("synthese");
  const t = TYPES.find((x) => x.id === active)!;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Reaktionstypen</h4>
      <p className="text-xs text-[var(--muted)]">
        Synthese, Analyse, Austausch und Redox — Übersicht mit Gleichungen.
      </p>

      <div className="flex gap-2 mb-2 flex-wrap">
        {TYPES.map((ty) => (
          <button
            key={ty.id}
            onClick={() => setActive(ty.id)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors`}
            style={
              active === ty.id
                ? { backgroundColor: ty.color, color: "#fff", borderColor: ty.color }
                : { borderColor: ty.color, color: ty.color }
            }
          >
            {ty.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 480 240" className="w-full max-w-lg mx-auto">
        <title>Reaktionstyp: {t.label}</title>
        <defs>
          <radialGradient id="rtA" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#2563eb" />
          </radialGradient>
          <radialGradient id="rtB" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#16a34a" />
          </radialGradient>
          <radialGradient id="rtAB" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#dc2626" />
          </radialGradient>
          <radialGradient id="rtC" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
          <marker id="arrRT" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill={t.color} />
          </marker>
        </defs>

        {/* Title */}
        <text x="240" y="22" textAnchor="middle" fontSize="14" fill={t.color} fontWeight="bold">
          {t.label}
        </text>

        {active === "synthese" && (
          <>
            <circle cx="80" cy="110" r="28" fill="url(#rtA)" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="80" y="115" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">
              A
            </text>
            <text x="120" y="115" textAnchor="middle" fontSize="18" fill="#6b7280">
              +
            </text>
            <circle cx="160" cy="110" r="28" fill="url(#rtB)" stroke="#15803d" strokeWidth="1.5" />
            <text x="160" y="115" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">
              B
            </text>
            <line
              x1="196"
              y1="110"
              x2="244"
              y2="110"
              stroke={t.color}
              strokeWidth="2.5"
              markerEnd="url(#arrRT)"
            />
            <text x="220" y="104" textAnchor="middle" fontSize="10" fill={t.color}>
              Synthese
            </text>
            <circle cx="290" cy="110" r="38" fill="url(#rtAB)" stroke="#b91c1c" strokeWidth="1.5" />
            <text x="290" y="115" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">
              AB
            </text>
            <text x="240" y="175" textAnchor="middle" fontSize="11" fill="#6b7280">
              A + B → AB
            </text>
          </>
        )}

        {active === "analyse" && (
          <>
            <circle cx="100" cy="110" r="38" fill="url(#rtAB)" stroke="#b91c1c" strokeWidth="1.5" />
            <text x="100" y="115" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">
              AB
            </text>
            <line
              x1="145"
              y1="110"
              x2="193"
              y2="110"
              stroke={t.color}
              strokeWidth="2.5"
              markerEnd="url(#arrRT)"
            />
            <text x="169" y="100" textAnchor="middle" fontSize="10" fill={t.color}>
              Analyse
            </text>
            <circle cx="240" cy="85" r="28" fill="url(#rtA)" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="240" y="90" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">
              A
            </text>
            <text x="276" y="105" textAnchor="middle" fontSize="16" fill="#6b7280">
              +
            </text>
            <circle cx="312" cy="135" r="28" fill="url(#rtB)" stroke="#15803d" strokeWidth="1.5" />
            <text x="312" y="140" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">
              B
            </text>
            <text x="240" y="195" textAnchor="middle" fontSize="11" fill="#6b7280">
              AB → A + B
            </text>
          </>
        )}

        {active === "austausch" && (
          <>
            {/* Simple: AB + C → AC + B */}
            <text x="240" y="45" textAnchor="middle" fontSize="10" fill="#d97706" fontWeight="bold">
              Einfacher Austausch: AB + C → AC + B
            </text>
            <circle cx="70" cy="100" r="24" fill="url(#rtAB)" stroke="#b91c1c" strokeWidth="1.5" />
            <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">
              AB
            </text>
            <text x="103" y="105" textAnchor="middle" fontSize="14" fill="#6b7280">
              +
            </text>
            <circle cx="135" cy="100" r="20" fill="url(#rtC)" stroke="#b45309" strokeWidth="1.5" />
            <text x="135" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">
              C
            </text>
            <line
              x1="160"
              y1="100"
              x2="196"
              y2="100"
              stroke={t.color}
              strokeWidth="2.5"
              markerEnd="url(#arrRT)"
            />
            <circle cx="230" cy="100" r="24" fill="url(#rtA)" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">
              AC
            </text>
            <text x="262" y="105" textAnchor="middle" fontSize="14" fill="#6b7280">
              +
            </text>
            <circle cx="295" cy="100" r="20" fill="url(#rtB)" stroke="#15803d" strokeWidth="1.5" />
            <text x="295" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">
              B
            </text>

            {/* Double: AB + CD → AD + CB */}
            <text
              x="240"
              y="148"
              textAnchor="middle"
              fontSize="10"
              fill="#d97706"
              fontWeight="bold"
            >
              Doppelter Austausch: AB + CD → AD + CB
            </text>
            <text x="240" y="165" textAnchor="middle" fontSize="10" fill="#6b7280">
              Fe + CuSO₄ → FeSO₄ + Cu
            </text>
            <text x="240" y="180" textAnchor="middle" fontSize="10" fill="#6b7280">
              NaCl + AgNO₃ → AgCl↓ + NaNO₃
            </text>
          </>
        )}

        {active === "redox" && (
          <>
            {/* Zn oxidation, Cu reduction */}
            <rect
              x="40"
              y="70"
              width="130"
              height="90"
              rx="8"
              fill="#ede9fe"
              stroke="#7c3aed"
              strokeWidth="1.5"
            />
            <text x="105" y="95" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="bold">
              Oxidation
            </text>
            <text
              x="105"
              y="112"
              textAnchor="middle"
              fontSize="13"
              fontWeight="bold"
              fill="#374151"
            >
              Zn → Zn²⁺
            </text>
            <text x="105" y="128" textAnchor="middle" fontSize="11" fill="#7c3aed">
              + 2 e⁻ abgeben
            </text>
            <text x="105" y="144" textAnchor="middle" fontSize="10" fill="#9ca3af">
              Reduktionsmittel
            </text>

            <rect
              x="310"
              y="70"
              width="130"
              height="90"
              rx="8"
              fill="#dbeafe"
              stroke="#2563eb"
              strokeWidth="1.5"
            />
            <text x="375" y="95" textAnchor="middle" fontSize="11" fill="#2563eb" fontWeight="bold">
              Reduktion
            </text>
            <text
              x="375"
              y="112"
              textAnchor="middle"
              fontSize="13"
              fontWeight="bold"
              fill="#374151"
            >
              Cu²⁺ → Cu
            </text>
            <text x="375" y="128" textAnchor="middle" fontSize="11" fill="#2563eb">
              + 2 e⁻ aufnehmen
            </text>
            <text x="375" y="144" textAnchor="middle" fontSize="10" fill="#9ca3af">
              Oxidationsmittel
            </text>

            {/* Electron transfer arrow */}
            <path
              d="M175,100 C200,85 250,85 300,100"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              markerEnd="url(#arrRT)"
            />
            <text x="240" y="80" textAnchor="middle" fontSize="10" fill="#d97706" fontWeight="bold">
              2 e⁻
            </text>

            <text x="240" y="190" textAnchor="middle" fontSize="10" fill="#6b7280">
              Zn + Cu²⁺ → Zn²⁺ + Cu (Gesamtreaktion)
            </text>
          </>
        )}
      </svg>

      <div
        className="border rounded-lg p-3"
        style={{ backgroundColor: t.bg + "33", borderColor: t.color + "44" }}
      >
        <p className="text-xs text-gray-700 dark:text-gray-300 mb-1">
          <span className="font-semibold" style={{ color: t.color }}>
            {INFO[active].eq}
          </span>
        </p>
        <p className="text-xs text-gray-700 dark:text-gray-300 mb-1">{INFO[active].desc}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 italic">{INFO[active].example}</p>
      </div>
    </div>
  );
}
