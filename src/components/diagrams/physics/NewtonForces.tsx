import { useState } from "react";

const forces = [
  { id: "fg", label: "Gravitationskraft (Fg)", color: "#ef4444", detail: "Fg = m \u00D7 g. Wirkt stets senkrecht nach unten zum Erdmittelpunkt. g = 9,81 m/s\u00B2." },
  { id: "fn", label: "Normalkraft (FN)", color: "#3b82f6", detail: "FN = Fg \u00D7 cos(\u03B1). Steht senkrecht auf der Oberflaeche. Gegenkraft zur Hangabtriebskraft-Komponente." },
  { id: "fr", label: "Reibungskraft (FR)", color: "#f59e0b", detail: "FR = \u03BC \u00D7 FN. Wirkt entgegen der Bewegungsrichtung entlang der Oberflaeche." },
  { id: "fh", label: "Hangabtriebskraft (FH)", color: "#22c55e", detail: "FH = Fg \u00D7 sin(\u03B1). Kompenente der Gewichtskraft parallel zur schiefen Ebene." },
];

export default function NewtonForces() {
  const [active, setActive] = useState<string | null>(null);
  const activeForce = forces.find((f) => f.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Kraefte an der Schiefen Ebene</h4>
      <p className="text-xs text-muted">Klicke auf eine Kraft fuer Details.</p>
      <svg viewBox="0 0 480 320" className="w-full max-w-lg mx-auto">
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

        <text x="165" y="20" textAnchor="middle" fontSize="11" fill="#0f766e" fontWeight="bold">Schiefe Ebene</text>

        {/* Inclined plane */}
        <polygon points="30,260 300,260 300,100" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2" />
        {/* Surface pattern */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={50 + i * 45} y1={260} x2={30 + i * 45} y2={270} stroke="#9ca3af" strokeWidth="1" />
        ))}
        {/* Ground */}
        <line x1="20" y1="260" x2="310" y2="260" stroke="#374151" strokeWidth="2" />

        {/* Angle arc */}
        <path d="M260,260 Q260,240 275,232" fill="none" stroke="#0d9488" strokeWidth="1.5" />
        <text x="250" y="252" fontSize="10" fill="#0d9488" fontWeight="bold">\u03B1</text>

        {/* Block on incline */}
        <g transform="translate(180, 165) rotate(-30.5)">
          <rect x="-20" y="-20" width="40" height="40" rx="3" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="0" y="4" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">m</text>
        </g>

        {/* Center of mass point */}
        <circle cx="180" cy="170" r="3" fill="#115e59" />

        {/* Fg - gravity (straight down) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "fg" ? null : "fg")}
          onMouseEnter={() => setActive("fg")}
          onMouseLeave={() => setActive(null)}
        >
          <line x1="180" y1="170" x2="180" y2="260" stroke="#ef4444" strokeWidth={active === "fg" ? 3.5 : 2.5} markerEnd="url(#arrowRed)" />
          <text x="192" y="225" fontSize="10" fill="#ef4444" fontWeight="bold">Fg</text>
          {active === "fg" && <rect x="170" y="160" width="20" height="105" fill="transparent" />}
        </g>

        {/* FN - normal force (perpendicular to surface, pointing away) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "fn" ? null : "fn")}
          onMouseEnter={() => setActive("fn")}
          onMouseLeave={() => setActive(null)}
        >
          <line x1="180" y1="170" x2="138" y2="97" stroke="#3b82f6" strokeWidth={active === "fn" ? 3.5 : 2.5} markerEnd="url(#arrowBlue)" />
          <text x="142" y="120" fontSize="10" fill="#3b82f6" fontWeight="bold">FN</text>
        </g>

        {/* FH - component along slope (downhill) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "fh" ? null : "fh")}
          onMouseEnter={() => setActive("fh")}
          onMouseLeave={() => setActive(null)}
        >
          <line x1="180" y1="170" x2="228" y2="198" stroke="#22c55e" strokeWidth={active === "fh" ? 3.5 : 2.5} markerEnd="url(#arrowGreen)" />
          <text x="215" y="210" fontSize="10" fill="#22c55e" fontWeight="bold">FH</text>
        </g>

        {/* FR - friction (up the slope) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "fr" ? null : "fr")}
          onMouseEnter={() => setActive("fr")}
          onMouseLeave={() => setActive(null)}
        >
          <line x1="180" y1="170" x2="130" y2="141" stroke="#f59e0b" strokeWidth={active === "fr" ? 3.5 : 2.5} markerEnd="url(#arrowYellow)" />
          <text x="138" y="148" fontSize="10" fill="#f59e0b" fontWeight="bold">FR</text>
        </g>

        {/* Dashed decomposition lines */}
        <line x1="180" y1="260" x2="228" y2="198" stroke="#6b7280" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <line x1="180" y1="260" x2="138" y2="97" stroke="#6b7280" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />

        {/* Free body diagram */}
        <text x="395" y="20" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">Freischnitt</text>
        <circle cx="395" cy="140" r="4" fill="#115e59" />
        <text x="395" y="137" textAnchor="middle" fontSize="7" fill="#6b7280">m</text>

        {/* FBD arrows */}
        <line x1="395" y1="144" x2="395" y2="200" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
        <text x="405" y="185" fontSize="8" fill="#ef4444" fontWeight="bold">Fg</text>

        <line x1="395" y1="136" x2="395" y2="80" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
        <text x="405" y="100" fontSize="8" fill="#3b82f6" fontWeight="bold">FN</text>

        <line x1="399" y1="140" x2="445" y2="170" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowGreen)" />
        <text x="440" y="168" fontSize="8" fill="#22c55e" fontWeight="bold">FH</text>

        <line x1="391" y1="140" x2="345" y2="110" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowYellow)" />
        <text x="348" y="108" fontSize="8" fill="#f59e0b" fontWeight="bold">FR</text>

        {/* Formulas */}
        <rect x="330" y="220" width="130" height="85" rx="6" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1" />
        <text x="395" y="237" textAnchor="middle" fontSize="8" fill="#0f766e" fontWeight="bold">Formeln</text>
        <text x="340" y="252" fontSize="7" fill="#374151">FH = Fg \u00D7 sin(\u03B1)</text>
        <text x="340" y="265" fontSize="7" fill="#374151">FN = Fg \u00D7 cos(\u03B1)</text>
        <text x="340" y="278" fontSize="7" fill="#374151">FR = \u03BC \u00D7 FN</text>
        <text x="340" y="291" fontSize="7" fill="#374151">Fg = m \u00D7 g</text>
      </svg>

      {activeForce && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold" style={{ color: forces.find((f) => f.id === active)?.color }}>{activeForce.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeForce.detail}</p>
        </div>
      )}
    </div>
  );
}
