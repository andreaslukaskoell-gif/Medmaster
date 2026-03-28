import { useState } from "react";

type CarbType = "mono" | "di" | "poly";

const CARB_INFO: Record<
  CarbType,
  { title: string; examples: string; desc: string; color: string }
> = {
  mono: {
    title: "Monosaccharide",
    examples: "Glucose, Fructose, Galactose, Ribose",
    color: "#22c55e",
    desc: "Einfachste Kohlenhydrate, nicht weiter hydrolysierbar. Glucose (C₆H₁₂O₆): wichtigste Energiequelle der Zelle. Zwei Formen: α-Glucose (Stärke/Glykogen) und β-Glucose (Cellulose).",
  },
  di: {
    title: "Disaccharide",
    examples: "Saccharose, Lactose, Maltose",
    color: "#3b82f6",
    desc: "Aus 2 Monosacchariden durch glykosidische Bindung (Kondensation). Saccharose = Glucose + Fructose (α,β-1,2). Lactose = Galactose + Glucose (β-1,4). Spaltung durch Hydrolyse.",
  },
  poly: {
    title: "Polysaccharide",
    examples: "Stärke, Glykogen, Cellulose, Chitin",
    color: "#f97316",
    desc: "Viele Monosaccharide verknüpft. Stärke/Glykogen: α-1,4 und α-1,6 Bindungen (Energiespeicher). Cellulose: β-1,4 Bindungen (Strukturmaterial). Menschen können Cellulose nicht verdauen.",
  },
};

// Simple hexagonal ring for glucose
function GlucoseRing({
  x,
  y,
  scale = 1,
  color = "#22c55e",
  label = "Glucose",
  showOH = true,
}: {
  x: number;
  y: number;
  scale?: number;
  color?: string;
  label?: string;
  showOH?: boolean;
}) {
  const s = scale;
  return (
    <g transform={`translate(${x}, ${y}) scale(${s})`}>
      {/* Pyranose ring */}
      <polygon
        points="0,-28 24,-14 24,14 0,28 -24,14 -24,-14"
        fill={`${color}22`}
        stroke={color}
        strokeWidth={1.5}
      />
      {/* O in ring */}
      <circle cx="0" cy="0" r="7" fill={`${color}44`} stroke={color} strokeWidth="1" />
      <text x="0" y="3" textAnchor="middle" fontSize="7" fill={color} fontWeight="bold">
        O
      </text>
      {/* OH groups */}
      {showOH && (
        <>
          <text x="32" y="-16" fontSize="6" fill="#374151">
            OH
          </text>
          <text x="32" y="18" fontSize="6" fill="#374151">
            OH
          </text>
          <text x="-40" y="-16" fontSize="6" fill="#374151">
            HO
          </text>
          <text x="-38" y="18" fontSize="6" fill="#374151">
            HO
          </text>
        </>
      )}
      <text x="0" y="42" textAnchor="middle" fontSize="8" fill={color} fontWeight="bold">
        {label}
      </text>
    </g>
  );
}

export default function CarbohydrateTypes() {
  const [selected, setSelected] = useState<CarbType | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Kohlenhydrate — Mono-, Di- und Polysaccharide
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Klicke auf einen Typ für Details. Kohlenhydrate sind Energielieferanten und
        Strukturmoleküle.
      </p>

      <div className="flex gap-2 flex-wrap mb-2">
        {(["mono", "di", "poly"] as CarbType[]).map((type) => (
          <button
            key={type}
            onClick={() => setSelected(selected === type ? null : type)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              selected === type
                ? "text-white border-transparent"
                : "border-gray-300 text-gray-600 dark:text-gray-300 dark:border-gray-600"
            }`}
            style={selected === type ? { background: CARB_INFO[type].color } : {}}
          >
            {CARB_INFO[type].title}
          </button>
        ))}
      </div>

      <svg role="img" viewBox="0 0 480 310" className="w-full max-w-lg mx-auto">
        <title>Kohlenhydrattypen: Monosaccharide, Disaccharide, Polysaccharide</title>

        {/* Monosaccharide section */}
        <g
          className="cursor-pointer"
          onClick={() => setSelected(selected === "mono" ? null : "mono")}
        >
          <rect
            x="10"
            y="30"
            width="130"
            height="175"
            rx="8"
            fill={selected === "mono" ? "#22c55e15" : "#f9fafb"}
            stroke="#22c55e"
            strokeWidth={selected === "mono" ? 2 : 1.5}
          />
          <text x="75" y="50" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="bold">
            Monosaccharid
          </text>
          <text x="75" y="63" textAnchor="middle" fontSize="8" fill="#15803d">
            1 Zuckereinheit
          </text>
          <GlucoseRing x={75} y={120} color="#22c55e" label="Glucose" showOH />
          <text x="75" y="195" textAnchor="middle" fontSize="8" fill="#15803d">
            C₆H₁₂O₆
          </text>
        </g>

        {/* Arrow + bond: mono → di */}
        <text x="148" y="113" fontSize="16" fill="#0d9488">
          +
        </text>
        <text x="150" y="128" fontSize="8" fill="#0d9488">
          +
        </text>

        {/* Disaccharide section */}
        <g className="cursor-pointer" onClick={() => setSelected(selected === "di" ? null : "di")}>
          <rect
            x="165"
            y="30"
            width="150"
            height="175"
            rx="8"
            fill={selected === "di" ? "#3b82f615" : "#f9fafb"}
            stroke="#3b82f6"
            strokeWidth={selected === "di" ? 2 : 1.5}
          />
          <text x="240" y="50" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="bold">
            Disaccharid
          </text>
          <text x="240" y="63" textAnchor="middle" fontSize="8" fill="#1d4ed8">
            2 Zuckereinheiten
          </text>
          <GlucoseRing x={200} y={120} scale={0.85} color="#3b82f6" label="" showOH={false} />
          <GlucoseRing x={272} y={120} scale={0.85} color="#3b82f6" label="" showOH={false} />
          {/* glycosidic bond */}
          <line x1="220" y1="120" x2="252" y2="120" stroke="#3b82f6" strokeWidth="2.5" />
          <text x="240" y="155" textAnchor="middle" fontSize="7" fill="#1d4ed8">
            glykosidische Bindung
          </text>
          <text x="240" y="168" textAnchor="middle" fontSize="7" fill="#1d4ed8">
            Kondensation (–H₂O)
          </text>
          <text x="240" y="195" textAnchor="middle" fontSize="8" fill="#1d4ed8">
            z.B. Saccharose
          </text>
        </g>

        {/* Arrow: di → poly */}
        <text x="322" y="113" fontSize="16" fill="#0d9488">
          +
        </text>
        <text x="321" y="128" fontSize="8" fill="#0d9488">
          viele
        </text>

        {/* Polysaccharide section */}
        <g
          className="cursor-pointer"
          onClick={() => setSelected(selected === "poly" ? null : "poly")}
        >
          <rect
            x="340"
            y="30"
            width="135"
            height="175"
            rx="8"
            fill={selected === "poly" ? "#f9731615" : "#f9fafb"}
            stroke="#f97316"
            strokeWidth={selected === "poly" ? 2 : 1.5}
          />
          <text x="407" y="50" textAnchor="middle" fontSize="10" fill="#c2410c" fontWeight="bold">
            Polysaccharid
          </text>
          <text x="407" y="63" textAnchor="middle" fontSize="8" fill="#c2410c">
            n Einheiten (n &gt; 10)
          </text>
          {/* Chain visualization */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle
                cx={355 + i * 28}
                cy={110}
                r={11}
                fill={`#f9731622`}
                stroke="#f97316"
                strokeWidth="1.5"
              />
              <text x={355 + i * 28} y={114} textAnchor="middle" fontSize="7" fill="#c2410c">
                G
              </text>
              {i < 3 && (
                <line
                  x1={366 + i * 28}
                  y1={110}
                  x2={372 + i * 28}
                  y2={110}
                  stroke="#f97316"
                  strokeWidth="2"
                />
              )}
            </g>
          ))}
          <text x="407" y="132" textAnchor="middle" fontSize="10" fill="#c2410c">
            ...
          </text>
          {/* Branch */}
          <line x1="383" y1="110" x2="383" y2="135" stroke="#f97316" strokeWidth="1.5" />
          <circle cx="383" cy="146" r="10" fill="#f9731622" stroke="#f97316" strokeWidth="1.5" />
          <text x="383" y="150" textAnchor="middle" fontSize="7" fill="#c2410c">
            G
          </text>
          <text x="407" y="165" textAnchor="middle" fontSize="7" fill="#c2410c">
            α-1,6 Verzweigung
          </text>
          <text x="407" y="178" textAnchor="middle" fontSize="7" fill="#c2410c">
            (Glykogen)
          </text>
          <text x="407" y="195" textAnchor="middle" fontSize="8" fill="#c2410c">
            z.B. Stärke, Glykogen
          </text>
        </g>

        {/* Bottom comparison */}
        <rect
          x="10"
          y="215"
          width="460"
          height="80"
          rx="6"
          fill="#f9fafb"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <text x="240" y="232" textAnchor="middle" fontSize="9" fill="#374151" fontWeight="bold">
          Wichtige Polysaccharide im Vergleich
        </text>

        {[
          {
            name: "Stärke",
            bind: "α-1,4 / α-1,6",
            func: "Energiespeicher (Pflanzen)",
            color: "#22c55e",
          },
          {
            name: "Glykogen",
            bind: "α-1,4 / α-1,6",
            func: "Energiespeicher (Tier/Mensch)",
            color: "#3b82f6",
          },
          {
            name: "Cellulose",
            bind: "β-1,4",
            func: "Strukturmaterial (Pflanze)",
            color: "#f97316",
          },
        ].map(({ name, bind, func, color }, i) => (
          <g key={i}>
            <text x="20" y={250 + i * 15} fontSize="8" fill={color} fontWeight="bold">
              {name}:
            </text>
            <text x="80" y={250 + i * 15} fontSize="8" fill="#374151">
              {bind}
            </text>
            <text x="180" y={250 + i * 15} fontSize="8" fill="#6b7280">
              {func}
            </text>
          </g>
        ))}
      </svg>

      {selected ? (
        <div
          className="rounded-lg p-3 border text-xs text-gray-700 dark:text-gray-300"
          style={{
            background: `${CARB_INFO[selected].color}12`,
            borderColor: `${CARB_INFO[selected].color}44`,
          }}
        >
          <div className="mb-1">
            <strong style={{ color: CARB_INFO[selected].color }}>
              {CARB_INFO[selected].title}:
            </strong>{" "}
            {CARB_INFO[selected].desc}
          </div>
          <p>
            <strong>Beispiele:</strong> {CARB_INFO[selected].examples}
          </p>
        </div>
      ) : (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Kohlenhydrate (Saccharide) bestehen aus C, H, O. Empirische Formel: (CH₂O)n. Dienen als
            Energiequelle (Glucose → ATP), Energiespeicher (Glykogen in der Leber) und
            Strukturmaterial (Cellulose, Chitin).
          </p>
        </div>
      )}
    </div>
  );
}
