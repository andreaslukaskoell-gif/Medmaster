import { useState } from "react";

const forces = [
  {
    id: "fg",
    label: "Gravitationskraft (Fg)",
    color: "#ef4444",
    detail:
      "Fg = m \u00D7 g. Wirkt stets senkrecht nach unten zum Erdmittelpunkt. g = 9,81 m/s\u00B2.",
  },
  {
    id: "fn",
    label: "Normalkraft (FN)",
    color: "#3b82f6",
    detail:
      "FN = Fg \u00D7 cos(\u03B1). Steht senkrecht auf der Oberfl\u00E4che. Gegenkraft zur Hangabtriebskraft-Komponente.",
  },
  {
    id: "fr",
    label: "Reibungskraft (FR)",
    color: "#f59e0b",
    detail:
      "FR = \u03BC \u00D7 FN. Wirkt entgegen der Bewegungsrichtung entlang der Oberfl\u00E4che.",
  },
  {
    id: "fh",
    label: "Hangabtriebskraft (FH)",
    color: "#22c55e",
    detail: "FH = Fg \u00D7 sin(\u03B1). Kompenente der Gewichtskraft parallel zur schiefen Ebene.",
  },
];

export default function NewtonForces() {
  const [active, setActive] = useState<string | null>(null);
  const activeForce = forces.find((f) => f.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Kr\u00E4fte an der Schiefen Ebene
      </h4>
      <p className="text-xs text-muted">Klicke auf eine Kraft f\u00FCr Details.</p>
      <svg viewBox="0 0 520 350" className="w-full max-w-2xl mx-auto">
        <defs>
          <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#ef4444" />
          </marker>
          <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#3b82f6" />
          </marker>
          <marker id="arrowYellow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#f59e0b" />
          </marker>
          <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#22c55e" />
          </marker>
        </defs>

        <text
          x="165"
          y="22"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Schiefe Ebene
        </text>

        {/* Inclined plane */}
        <polygon points="30,270 300,270 300,110" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2" />
        {/* Surface pattern */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={i}
            x1={50 + i * 45}
            y1={270}
            x2={30 + i * 45}
            y2={280}
            stroke="#9ca3af"
            strokeWidth="1"
          />
        ))}
        {/* Ground */}
        <line x1="20" y1="270" x2="310" y2="270" stroke="#374151" strokeWidth="2" />

        {/* Angle arc */}
        <path d="M260,270 Q260,250 275,242" fill="none" stroke="#0d9488" strokeWidth="1.5" />
        <text
          x="248"
          y="262"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          {"\u03B1"}
        </text>

        {/* Block on incline */}
        <g transform="translate(180, 175) rotate(-30.5)">
          <rect
            x="-20"
            y="-20"
            width="40"
            height="40"
            rx="3"
            fill="#ccfbf1"
            stroke="#0d9488"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fontSize="13"
            fill="#1f2937"
            fontWeight="600"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            m
          </text>
        </g>

        {/* Center of mass point */}
        <circle cx="180" cy="180" r="3" fill="#115e59" />

        {/* Fg - gravity (straight down) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "fg" ? null : "fg")}
          onMouseEnter={() => setActive("fg")}
          onMouseLeave={() => setActive(null)}
        >
          <line
            x1="180"
            y1="180"
            x2="180"
            y2="270"
            stroke="#ef4444"
            strokeWidth={active === "fg" ? 3.5 : 2.5}
            markerEnd="url(#arrowRed)"
          />
          {/* Leader line to offset label */}
          <line x1="186" y1="240" x2="208" y2="240" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="212"
            y="244"
            fontSize="14"
            fill="#1f2937"
            fontWeight="600"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            Fg
          </text>
          {active === "fg" && <rect x="170" y="170" width="20" height="105" fill="transparent" />}
        </g>

        {/* FN - normal force (perpendicular to surface, pointing away) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "fn" ? null : "fn")}
          onMouseEnter={() => setActive("fn")}
          onMouseLeave={() => setActive(null)}
        >
          <line
            x1="180"
            y1="180"
            x2="138"
            y2="107"
            stroke="#3b82f6"
            strokeWidth={active === "fn" ? 3.5 : 2.5}
            markerEnd="url(#arrowBlue)"
          />
          {/* Leader line to offset label */}
          <line x1="138" y1="107" x2="112" y2="90" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="110"
            y="87"
            textAnchor="end"
            fontSize="14"
            fill="#1f2937"
            fontWeight="600"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            FN
          </text>
        </g>

        {/* FH - component along slope (downhill) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "fh" ? null : "fh")}
          onMouseEnter={() => setActive("fh")}
          onMouseLeave={() => setActive(null)}
        >
          <line
            x1="180"
            y1="180"
            x2="228"
            y2="208"
            stroke="#22c55e"
            strokeWidth={active === "fh" ? 3.5 : 2.5}
            markerEnd="url(#arrowGreen)"
          />
          {/* Leader line to offset label */}
          <line x1="228" y1="208" x2="250" y2="218" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="254"
            y="222"
            fontSize="14"
            fill="#1f2937"
            fontWeight="600"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            FH
          </text>
        </g>

        {/* FR - friction (up the slope) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "fr" ? null : "fr")}
          onMouseEnter={() => setActive("fr")}
          onMouseLeave={() => setActive(null)}
        >
          <line
            x1="180"
            y1="180"
            x2="130"
            y2="151"
            stroke="#f59e0b"
            strokeWidth={active === "fr" ? 3.5 : 2.5}
            markerEnd="url(#arrowYellow)"
          />
          {/* Leader line to offset label */}
          <line x1="130" y1="151" x2="108" y2="158" stroke="#94a3b8" strokeWidth="1" />
          <text
            x="106"
            y="162"
            textAnchor="end"
            fontSize="14"
            fill="#1f2937"
            fontWeight="600"
            stroke="white"
            strokeWidth="4"
            paintOrder="stroke"
          >
            FR
          </text>
        </g>

        {/* Dashed decomposition lines */}
        <line
          x1="180"
          y1="270"
          x2="228"
          y2="208"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.5"
        />
        <line
          x1="180"
          y1="270"
          x2="138"
          y2="107"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.5"
        />

        {/* Free body diagram */}
        <text
          x="420"
          y="22"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Freischnitt
        </text>
        <circle cx="420" cy="150" r="5" fill="#115e59" />
        <text
          x="420"
          y="146"
          textAnchor="middle"
          fontSize="13"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          m
        </text>

        {/* FBD arrows */}
        <line
          x1="420"
          y1="155"
          x2="420"
          y2="215"
          stroke="#ef4444"
          strokeWidth="2"
          markerEnd="url(#arrowRed)"
        />
        <line x1="426" y1="200" x2="448" y2="200" stroke="#94a3b8" strokeWidth="1" />
        <text
          x="452"
          y="204"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Fg
        </text>

        <line
          x1="420"
          y1="145"
          x2="420"
          y2="85"
          stroke="#3b82f6"
          strokeWidth="2"
          markerEnd="url(#arrowBlue)"
        />
        <line x1="426" y1="100" x2="448" y2="100" stroke="#94a3b8" strokeWidth="1" />
        <text
          x="452"
          y="104"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          FN
        </text>

        <line
          x1="424"
          y1="150"
          x2="472"
          y2="180"
          stroke="#22c55e"
          strokeWidth="2"
          markerEnd="url(#arrowGreen)"
        />
        <line x1="472" y1="180" x2="484" y2="172" stroke="#94a3b8" strokeWidth="1" />
        <text
          x="488"
          y="176"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          FH
        </text>

        <line
          x1="416"
          y1="150"
          x2="368"
          y2="120"
          stroke="#f59e0b"
          strokeWidth="2"
          markerEnd="url(#arrowYellow)"
        />
        <line x1="368" y1="120" x2="354" y2="114" stroke="#94a3b8" strokeWidth="1" />
        <text
          x="352"
          y="112"
          textAnchor="end"
          fontSize="13"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          FR
        </text>

        {/* Formulas */}
        <rect
          x="348"
          y="235"
          width="148"
          height="100"
          rx="6"
          fill="#f0fdfa"
          stroke="#99f6e4"
          strokeWidth="1"
        />
        <text
          x="422"
          y="254"
          textAnchor="middle"
          fontSize="14"
          fill="#1f2937"
          fontWeight="600"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Formeln
        </text>
        <text
          x="358"
          y="272"
          fontSize="13"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          FH = Fg {"\u00D7"} sin({"\u03B1"})
        </text>
        <text
          x="358"
          y="289"
          fontSize="13"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          FN = Fg {"\u00D7"} cos({"\u03B1"})
        </text>
        <text
          x="358"
          y="306"
          fontSize="13"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          FR = {"\u03BC"} {"\u00D7"} FN
        </text>
        <text
          x="358"
          y="323"
          fontSize="13"
          fill="#1f2937"
          stroke="white"
          strokeWidth="4"
          paintOrder="stroke"
        >
          Fg = m {"\u00D7"} g
        </text>
      </svg>

      {activeForce && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p
            className="text-sm font-semibold"
            style={{ color: forces.find((f) => f.id === active)?.color }}
          >
            {activeForce.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeForce.detail}</p>
        </div>
      )}
    </div>
  );
}
