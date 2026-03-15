import { useState } from "react";

type HCType = "alkan" | "alken" | "alkin" | "aromat";

const HC_INFO: Record<
  HCType,
  { name: string; bond: string; suffix: string; example: string; desc: string; color: string }
> = {
  alkan: {
    name: "Alkane",
    bond: "nur C–C Einfachbindungen",
    suffix: "-an",
    example: "Methan CH₄, Ethan C₂H₆, Propan C₃H₈",
    desc: "Gesättigte Kohlenwasserstoffe. Allgemeine Formel: CₙH₂ₙ₊₂. sp³-Hybridisierung, tetraedrisch. Wenig reaktiv (nur Halogenierung/Verbrennung).",
    color: "#2563eb",
  },
  alken: {
    name: "Alkene",
    bond: "eine C=C Doppelbindung",
    suffix: "-en",
    example: "Ethen C₂H₄, Propen C₃H₆, Buten C₄H₈",
    desc: "Ungesättigte KW mit einer Doppelbindung. Formel: CₙH₂ₙ. sp²-Hybridisierung, trigonal-planar. Elektrophile Addition (z. B. HBr, H₂O) typisch.",
    color: "#16a34a",
  },
  alkin: {
    name: "Alkine",
    bond: "eine C≡C Dreifachbindung",
    suffix: "-in",
    example: "Ethin C₂H₂ (Acetylen), Propin C₃H₄",
    desc: "Ungesättigte KW mit einer Dreifachbindung. Formel: CₙH₂ₙ₋₂. sp-Hybridisierung, linear (180°). Sehr reaktiv, elektrophile Addition.",
    color: "#dc2626",
  },
  aromat: {
    name: "Aromaten",
    bond: "delokalisiertes π-System",
    suffix: "-benzol",
    example: "Benzol C₆H₆, Toluol, Naphthalin",
    desc: "Cyclische, planare Verbindungen mit (4n+2) π-Elektronen (Hückel-Regel). Benzol: 6 π-e⁻. Elektrophile aromatische Substitution (EAS) statt Addition.",
    color: "#7c3aed",
  },
};

export default function HydrocarbonTypes() {
  const [active, setActive] = useState<HCType>("alkan");
  const info = HC_INFO[active];

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Kohlenwasserstofftypen
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Alkane, Alkene, Alkine, Aromaten — Strukturen und Eigenschaften.
      </p>

      <div className="flex gap-2 mb-2 flex-wrap">
        {(Object.entries(HC_INFO) as [HCType, (typeof HC_INFO)[HCType]][]).map(([k, v]) => (
          <button
            key={k}
            onClick={() => setActive(k)}
            className="text-xs px-3 py-1 rounded-full border transition-colors"
            style={
              active === k
                ? { backgroundColor: v.color, color: "#fff", borderColor: v.color }
                : { borderColor: v.color, color: v.color }
            }
          >
            {v.name}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 480 250" className="w-full max-w-lg mx-auto">
        <title>{info.name} — Struktur</title>
        <defs>
          <radialGradient id="hcC" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#374151" />
          </radialGradient>
          <radialGradient id="hcH" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
        </defs>

        <text x="240" y="20" textAnchor="middle" fontSize="14" fill={info.color} fontWeight="bold">
          {info.name} (Endung: {info.suffix})
        </text>

        {active === "alkan" && (
          <>
            {/* Ethan: H₃C–CH₃ */}
            <text x="240" y="40" textAnchor="middle" fontSize="11" fill="#6b7280">
              Ethan: C₂H₆
            </text>

            {/* C1 */}
            <circle cx="140" cy="120" r="18" fill="url(#hcC)" stroke="#374151" strokeWidth="1.5" />
            <text x="140" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
              C
            </text>
            {/* C2 */}
            <circle cx="240" cy="120" r="18" fill="url(#hcC)" stroke="#374151" strokeWidth="1.5" />
            <text x="240" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
              C
            </text>
            {/* C-C single bond */}
            <line x1="160" y1="120" x2="220" y2="120" stroke="#374151" strokeWidth="2.5" />
            <text x="190" y="113" textAnchor="middle" fontSize="9" fill="#2563eb">
              σ
            </text>

            {/* H atoms around C1 */}
            {[
              [100, 95],
              [100, 145],
              [135, 76],
            ].map(([hx, hy], i) => (
              <g key={i}>
                <line
                  x1={hx + 14}
                  y1={hy + (hy < 120 ? 10 : -10)}
                  x2={140 + (hx < 140 ? 14 : -14)}
                  y2={120 + (hy < 120 ? -14 : 14)}
                  stroke="#374151"
                  strokeWidth="1.5"
                />
                <circle cx={hx} cy={hy} r="12" fill="url(#hcH)" stroke="#d97706" strokeWidth="1" />
                <text
                  x={hx}
                  y={hy + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="bold"
                  fill="#fff"
                >
                  H
                </text>
              </g>
            ))}
            {/* H around C2 */}
            {[
              [280, 95],
              [280, 145],
              [245, 76],
            ].map(([hx, hy], i) => (
              <g key={i + 10}>
                <line
                  x1={hx - (hx > 240 ? 14 : -14)}
                  y1={hy + (hy < 120 ? 10 : -10)}
                  x2={240 + (hx > 240 ? 14 : -14)}
                  y2={120 + (hy < 120 ? -14 : 14)}
                  stroke="#374151"
                  strokeWidth="1.5"
                />
                <circle cx={hx} cy={hy} r="12" fill="url(#hcH)" stroke="#d97706" strokeWidth="1" />
                <text
                  x={hx}
                  y={hy + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="bold"
                  fill="#fff"
                >
                  H
                </text>
              </g>
            ))}

            <text x="240" y="185" textAnchor="middle" fontSize="10" fill="#6b7280">
              Formel: CₙH₂ₙ₊₂ | sp³ | 109,5°
            </text>
          </>
        )}

        {active === "alken" && (
          <>
            <text x="240" y="40" textAnchor="middle" fontSize="11" fill="#6b7280">
              Ethen: C₂H₄
            </text>
            {/* C1 */}
            <circle cx="160" cy="120" r="18" fill="url(#hcC)" stroke="#374151" strokeWidth="1.5" />
            <text x="160" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
              C
            </text>
            {/* C2 */}
            <circle cx="270" cy="120" r="18" fill="url(#hcC)" stroke="#374151" strokeWidth="1.5" />
            <text x="270" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
              C
            </text>
            {/* C=C double bond */}
            <line x1="180" y1="116" x2="250" y2="116" stroke="#16a34a" strokeWidth="2.5" />
            <line x1="180" y1="124" x2="250" y2="124" stroke="#16a34a" strokeWidth="2.5" />
            <text x="215" y="108" textAnchor="middle" fontSize="9" fill="#2563eb">
              σ
            </text>
            <text x="215" y="138" textAnchor="middle" fontSize="9" fill="#7c3aed">
              π
            </text>

            {/* H atoms */}
            {[
              [118, 95],
              [118, 145],
            ].map(([hx, hy], i) => (
              <g key={i}>
                <line
                  x1={hx + 12}
                  y1={hy + (hy < 120 ? 8 : -8)}
                  x2={146}
                  y2={hy < 120 ? 108 : 132}
                  stroke="#374151"
                  strokeWidth="1.5"
                />
                <circle cx={hx} cy={hy} r="12" fill="url(#hcH)" stroke="#d97706" strokeWidth="1" />
                <text
                  x={hx}
                  y={hy + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="bold"
                  fill="#fff"
                >
                  H
                </text>
              </g>
            ))}
            {[
              [312, 95],
              [312, 145],
            ].map(([hx, hy], i) => (
              <g key={i + 10}>
                <line
                  x1={hx - 12}
                  y1={hy + (hy < 120 ? 8 : -8)}
                  x2={284}
                  y2={hy < 120 ? 108 : 132}
                  stroke="#374151"
                  strokeWidth="1.5"
                />
                <circle cx={hx} cy={hy} r="12" fill="url(#hcH)" stroke="#d97706" strokeWidth="1" />
                <text
                  x={hx}
                  y={hy + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="bold"
                  fill="#fff"
                >
                  H
                </text>
              </g>
            ))}

            {/* π cloud */}
            <ellipse cx="215" cy="108" rx="48" ry="8" fill="#c4b5fd" opacity="0.5" />
            <ellipse cx="215" cy="132" rx="48" ry="8" fill="#c4b5fd" opacity="0.5" />
            <text x="240" y="185" textAnchor="middle" fontSize="10" fill="#6b7280">
              Formel: CₙH₂ₙ | sp² | 120°
            </text>
          </>
        )}

        {active === "alkin" && (
          <>
            <text x="240" y="40" textAnchor="middle" fontSize="11" fill="#6b7280">
              Ethin: C₂H₂
            </text>
            {/* H-C≡C-H linear */}
            <circle cx="90" cy="120" r="12" fill="url(#hcH)" stroke="#d97706" strokeWidth="1" />
            <text x="90" y="124" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">
              H
            </text>
            <line x1="104" y1="120" x2="150" y2="120" stroke="#374151" strokeWidth="2" />
            <circle cx="170" cy="120" r="18" fill="url(#hcC)" stroke="#374151" strokeWidth="1.5" />
            <text x="170" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
              C
            </text>
            {/* Triple bond */}
            <line x1="190" y1="114" x2="260" y2="114" stroke="#dc2626" strokeWidth="2" />
            <line x1="190" y1="120" x2="260" y2="120" stroke="#dc2626" strokeWidth="2" />
            <line x1="190" y1="126" x2="260" y2="126" stroke="#dc2626" strokeWidth="2" />
            <text x="225" y="106" textAnchor="middle" fontSize="9" fill="#2563eb">
              σ
            </text>
            <text x="225" y="140" textAnchor="middle" fontSize="9" fill="#7c3aed">
              π π
            </text>
            <circle cx="280" cy="120" r="18" fill="url(#hcC)" stroke="#374151" strokeWidth="1.5" />
            <text x="280" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
              C
            </text>
            <line x1="300" y1="120" x2="346" y2="120" stroke="#374151" strokeWidth="2" />
            <circle cx="358" cy="120" r="12" fill="url(#hcH)" stroke="#d97706" strokeWidth="1" />
            <text x="358" y="124" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">
              H
            </text>

            {/* p orbital lobes */}
            <ellipse cx="225" cy="103" rx="52" ry="9" fill="#c4b5fd" opacity="0.45" />
            <ellipse cx="225" cy="137" rx="52" ry="9" fill="#c4b5fd" opacity="0.45" />
            <ellipse cx="225" cy="120" rx="9" ry="38" fill="#86efac" opacity="0.3" />

            <text x="240" y="185" textAnchor="middle" fontSize="10" fill="#6b7280">
              Formel: CₙH₂ₙ₋₂ | sp | 180°
            </text>
          </>
        )}

        {active === "aromat" && (
          <>
            <text x="240" y="40" textAnchor="middle" fontSize="11" fill="#6b7280">
              Benzol: C₆H₆
            </text>
            {/* Benzene ring (hexagon) */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const a1 = ((i * 60 - 90) * Math.PI) / 180;
              const a2 = (((i + 1) * 60 - 90) * Math.PI) / 180;
              const r = 50;
              const cx = 200,
                cy = 120;
              return (
                <line
                  key={i}
                  x1={cx + r * Math.cos(a1)}
                  y1={cy + r * Math.sin(a1)}
                  x2={cx + r * Math.cos(a2)}
                  y2={cy + r * Math.sin(a2)}
                  stroke="#7c3aed"
                  strokeWidth="2.5"
                />
              );
            })}
            {/* Circle for delocalized π */}
            <circle
              cx="200"
              cy="120"
              r="32"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="1.5"
              strokeDasharray="5 3"
            />
            <text x="200" y="124" textAnchor="middle" fontSize="9" fill="#7c3aed">
              6 π e⁻
            </text>

            {/* C and H at vertices */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const a = ((i * 60 - 90) * Math.PI) / 180;
              const r = 50;
              const cx = 200,
                cy = 120;
              const vx = cx + r * Math.cos(a);
              const vy = cy + r * Math.sin(a);
              const hx = cx + (r + 22) * Math.cos(a);
              const hy = cy + (r + 22) * Math.sin(a);
              return (
                <g key={i}>
                  <circle
                    cx={vx}
                    cy={vy}
                    r="10"
                    fill="url(#hcC)"
                    stroke="#374151"
                    strokeWidth="1"
                  />
                  <text
                    x={vx}
                    y={vy + 3}
                    textAnchor="middle"
                    fontSize="7"
                    fontWeight="bold"
                    fill="#fff"
                  >
                    C
                  </text>
                  <line
                    x1={vx + 10 * Math.cos(a)}
                    y1={vy + 10 * Math.sin(a)}
                    x2={hx - 10 * Math.cos(a)}
                    y2={hy - 10 * Math.sin(a)}
                    stroke="#374151"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx={hx}
                    cy={hy}
                    r="9"
                    fill="url(#hcH)"
                    stroke="#d97706"
                    strokeWidth="0.8"
                  />
                  <text
                    x={hx}
                    y={hy + 3}
                    textAnchor="middle"
                    fontSize="7"
                    fontWeight="bold"
                    fill="#fff"
                  >
                    H
                  </text>
                </g>
              );
            })}

            <text x="340" y="100" textAnchor="middle" fontSize="9" fill="#7c3aed" fontWeight="bold">
              Hückel-Regel:
            </text>
            <text x="340" y="114" textAnchor="middle" fontSize="9" fill="#7c3aed">
              (4n+2) π e⁻
            </text>
            <text x="340" y="128" textAnchor="middle" fontSize="9" fill="#7c3aed">
              n=1: 6 e⁻ ✓
            </text>
            <text x="240" y="185" textAnchor="middle" fontSize="10" fill="#6b7280">
              Planar, delokalisiert, EAS statt Addition
            </text>
          </>
        )}
      </svg>

      <div
        className="rounded-lg p-3 border"
        style={{ backgroundColor: info.color + "11", borderColor: info.color + "44" }}
      >
        <div className="text-xs mb-1">
          <span className="font-semibold" style={{ color: info.color }}>
            Bindung:{" "}
          </span>
          <span className="text-gray-700 dark:text-gray-300">{info.bond}</span>
        </div>
        <p className="text-xs text-gray-700 dark:text-gray-300 mb-1">{info.desc}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 italic">{info.example}</p>
      </div>
    </div>
  );
}
