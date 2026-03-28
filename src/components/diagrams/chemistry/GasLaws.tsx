import { useState } from "react";

type Law = "boyle" | "gay-lussac" | "charles";

const LAW_INFO: Record<
  Law,
  { title: string; formula: string; desc: string; color: string; x: string; y: string }
> = {
  boyle: {
    title: "Boyle-Mariotte",
    formula: "p · V = const  (T = const)",
    desc: "Bei konstanter Temperatur ist das Produkt aus Druck und Volumen konstant. Verdoppelt sich der Druck, halbiert sich das Volumen.",
    color: "#3b82f6",
    x: "Volumen V →",
    y: "↑ Druck p",
  },
  "gay-lussac": {
    title: "Gay-Lussac",
    formula: "p / T = const  (V = const)",
    desc: "Bei konstantem Volumen ist der Druck proportional zur absoluten Temperatur (in Kelvin). Praxis: Druckbehälter nicht erhitzen!",
    color: "#ef4444",
    x: "Temperatur T (K) →",
    y: "↑ Druck p",
  },
  charles: {
    title: "Charles",
    formula: "V / T = const  (p = const)",
    desc: "Bei konstantem Druck ist das Volumen proportional zur absoluten Temperatur. Beispiel: Heißluftballon.",
    color: "#22c55e",
    x: "Temperatur T (K) →",
    y: "↑ Volumen V",
  },
};

function BoyleGraph({ color }: { color: string }) {
  return (
    <>
      <path
        d="M 60 195 Q 90 120 140 95 Q 180 82 230 78"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
      />
      <text x="240" y="78" fontSize="9" fill={color} fontWeight="bold">
        p·V=const
      </text>
      <line x1="60" y1="80" x2="60" y2="200" stroke="#6b7280" strokeWidth="1.5" />
      <line x1="60" y1="200" x2="290" y2="200" stroke="#6b7280" strokeWidth="1.5" />
    </>
  );
}
function LinearGraph({ color }: { color: string }) {
  return (
    <>
      <line x1="60" y1="195" x2="260" y2="85" stroke={color} strokeWidth="2.5" />
      <line x1="60" y1="80" x2="60" y2="200" stroke="#6b7280" strokeWidth="1.5" />
      <line x1="60" y1="200" x2="290" y2="200" stroke="#6b7280" strokeWidth="1.5" />
    </>
  );
}

export default function GasLaws() {
  const [active, setActive] = useState<Law>("boyle");
  const info = LAW_INFO[active];

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Gasgesetze — Boyle-Mariotte, Gay-Lussac, Charles
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Wähle ein Gasgesetz, um den Zusammenhang grafisch zu sehen.
      </p>

      <div className="flex gap-2 flex-wrap mb-2">
        {(["boyle", "gay-lussac", "charles"] as Law[]).map((law) => (
          <button
            key={law}
            onClick={() => setActive(law)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              active === law
                ? "text-white border-transparent"
                : "border-gray-300 text-gray-600 dark:text-gray-300 dark:border-gray-600"
            }`}
            style={
              active === law
                ? { background: LAW_INFO[law].color, borderColor: LAW_INFO[law].color }
                : {}
            }
          >
            {LAW_INFO[law].title}
          </button>
        ))}
      </div>

      <svg role="img" viewBox="0 0 480 280" className="w-full max-w-lg mx-auto">
        <title>
          Gasgesetze: {info.title} — {info.formula}
        </title>

        {/* Title and formula */}
        <text x="240" y="22" textAnchor="middle" fontSize="13" fill={info.color} fontWeight="bold">
          {info.title}
        </text>
        <text
          x="240"
          y="38"
          textAnchor="middle"
          fontSize="11"
          fill="#374151"
          fontFamily="monospace"
        >
          {info.formula}
        </text>

        {/* Graph area */}
        <g transform="translate(100, 50)">
          {active === "boyle" ? (
            <BoyleGraph color={info.color} />
          ) : (
            <LinearGraph color={info.color} />
          )}

          {/* Axis labels */}
          <text x="170" y="218" textAnchor="middle" fontSize="9" fill="#6b7280">
            {info.x}
          </text>
          <text
            x="20"
            y="140"
            textAnchor="middle"
            fontSize="9"
            fill="#6b7280"
            transform="rotate(-90, 20, 140)"
          >
            {info.y}
          </text>

          {/* Origin label */}
          <text x="55" y="212" fontSize="8" fill="#6b7280">
            0
          </text>

          {/* Gridlines */}
          {[130, 165].map((y) => (
            <line
              key={y}
              x1="60"
              y1={y}
              x2="290"
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="0.8"
              strokeDasharray="3 3"
            />
          ))}
          {[120, 180, 240].map((x) => (
            <line
              key={x}
              x1={x}
              y1="200"
              x2={x}
              y2="80"
              stroke="#e5e7eb"
              strokeWidth="0.8"
              strokeDasharray="3 3"
            />
          ))}
        </g>

        {/* Formula derivation box */}
        <rect
          x="10"
          y="50"
          width="85"
          height="90"
          rx="6"
          fill="#f9fafb"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <text x="52" y="68" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="bold">
          Ideales Gas
        </text>
        <text
          x="52"
          y="82"
          textAnchor="middle"
          fontSize="10"
          fill="#0f766e"
          fontFamily="monospace"
          fontWeight="bold"
        >
          pV = nRT
        </text>
        <text x="52" y="97" textAnchor="middle" fontSize="7" fill="#6b7280">
          p = Druck
        </text>
        <text x="52" y="108" textAnchor="middle" fontSize="7" fill="#6b7280">
          V = Volumen
        </text>
        <text x="52" y="119" textAnchor="middle" fontSize="7" fill="#6b7280">
          n = Stoffmenge
        </text>
        <text x="52" y="130" textAnchor="middle" fontSize="7" fill="#6b7280">
          R = 8,314 J/(mol·K)
        </text>

        {/* Current law highlight */}
        {active === "boyle" && (
          <g>
            <text
              x="390"
              y="75"
              textAnchor="middle"
              fontSize="9"
              fill={info.color}
              fontWeight="bold"
            >
              T = const
            </text>
            <text x="390" y="90" textAnchor="middle" fontSize="9" fill={info.color}>
              n = const
            </text>
            <text x="390" y="108" textAnchor="middle" fontSize="8" fill="#374151">
              p₁V₁ = p₂V₂
            </text>
          </g>
        )}
        {active === "gay-lussac" && (
          <g>
            <text
              x="390"
              y="75"
              textAnchor="middle"
              fontSize="9"
              fill={info.color}
              fontWeight="bold"
            >
              V = const
            </text>
            <text x="390" y="90" textAnchor="middle" fontSize="9" fill={info.color}>
              n = const
            </text>
            <text x="390" y="108" textAnchor="middle" fontSize="8" fill="#374151">
              p₁/T₁ = p₂/T₂
            </text>
          </g>
        )}
        {active === "charles" && (
          <g>
            <text
              x="390"
              y="75"
              textAnchor="middle"
              fontSize="9"
              fill={info.color}
              fontWeight="bold"
            >
              p = const
            </text>
            <text x="390" y="90" textAnchor="middle" fontSize="9" fill={info.color}>
              n = const
            </text>
            <text x="390" y="108" textAnchor="middle" fontSize="8" fill="#374151">
              V₁/T₁ = V₂/T₂
            </text>
          </g>
        )}

        <text x="240" y="268" textAnchor="middle" fontSize="9" fill="#6b7280">
          Alle Gesetze sind Sonderfälle von pV = nRT (ideales Gasgesetz)
        </text>
      </svg>

      <div
        className="rounded-lg p-3 border text-xs text-gray-700 dark:text-gray-300"
        style={{ background: `${info.color}10`, borderColor: `${info.color}40` }}
      >
        <strong style={{ color: info.color }}>{info.title}:</strong> {info.desc}
      </div>
    </div>
  );
}
