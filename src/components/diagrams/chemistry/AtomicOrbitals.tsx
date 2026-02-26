import { useState } from "react";

const orbitals = [
  {
    id: "s",
    label: "s-Orbital",
    maxE: 2,
    detail: "Kugelförmig. Eine Orientierung. Maximale Besetzung: 2 Elektronen.",
  },
  {
    id: "px",
    label: "p_x-Orbital",
    maxE: 2,
    detail: "Hantelförmig entlang der x-Achse. Teil des p-Unterraums (max. 6 e⁻).",
  },
  {
    id: "py",
    label: "p_y-Orbital",
    maxE: 2,
    detail: "Hantelförmig entlang der y-Achse. Teil des p-Unterraums (max. 6 e⁻).",
  },
  {
    id: "pz",
    label: "p_z-Orbital",
    maxE: 2,
    detail: "Hantelförmig entlang der z-Achse. Teil des p-Unterraums (max. 6 e⁻).",
  },
  {
    id: "d",
    label: "d-Orbital",
    maxE: 2,
    detail: "Kleeblattförmig (d_xy gezeigt). 5 Orientierungen. d-Unterraum: max. 10 e⁻.",
  },
];

/* Shared text style props for white halo + dark colour */
const halo = {
  stroke: "white",
  strokeWidth: 4,
  paintOrder: "stroke" as const,
  fill: "#1f2937",
};

export default function AtomicOrbitals() {
  const [active, setActive] = useState<string | null>(null);
  const activeOrbital = orbitals.find((o) => o.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Atomorbitale</h4>
      <p className="text-xs text-muted">Klicke auf ein Orbital für Details.</p>
      <svg viewBox="0 0 540 380" className="w-full max-w-2xl mx-auto">
        <title>Atomorbitale — s-, p-, d-Orbitale</title>
        <defs>
          <radialGradient id="sGrad" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#99f6e4" />
            <stop offset="70%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0f766e" />
          </radialGradient>
          <radialGradient id="pGradPos" cx="40%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#99f6e4" />
            <stop offset="100%" stopColor="#0d9488" />
          </radialGradient>
          <radialGradient id="pGradNeg" cx="60%" cy="70%" r="60%">
            <stop offset="0%" stopColor="#ccfbf1" />
            <stop offset="100%" stopColor="#0f766e" />
          </radialGradient>
          <radialGradient id="dGrad1" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#99f6e4" />
            <stop offset="100%" stopColor="#0d9488" />
          </radialGradient>
          <radialGradient id="dGrad2" cx="65%" cy="65%" r="60%">
            <stop offset="0%" stopColor="#ccfbf1" />
            <stop offset="100%" stopColor="#115e59" />
          </radialGradient>
        </defs>

        {/* Title */}
        <text x="270" y="24" textAnchor="middle" fontSize="14" fontWeight="600" {...halo}>
          Atomorbitale
        </text>

        {/* ── s-Orbital ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "s" ? null : "s")}
          onMouseEnter={() => setActive("s")}
          onMouseLeave={() => setActive(null)}
        >
          <circle
            cx="70"
            cy="110"
            r="38"
            fill="url(#sGrad)"
            stroke={active === "s" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "s" ? 2.5 : 1.5}
            opacity="0.85"
          />
          <circle
            cx="70"
            cy="110"
            r="25"
            fill="none"
            stroke="#ccfbf1"
            strokeWidth="0.5"
            strokeDasharray="3 2"
            opacity="0.5"
          />
          <circle cx="70" cy="110" r="3" fill="#115e59" />
          {/* Leader line from orbital to label */}
          <line x1="70" y1="149" x2="70" y2="162" stroke="#9ca3af" strokeWidth="1" />
          <text x="70" y="177" textAnchor="middle" fontSize="14" fontWeight="600" {...halo}>
            s-Orbital
          </text>
          <text x="70" y="194" textAnchor="middle" fontSize="13" {...halo}>
            max. 2 e⁻
          </text>
        </g>

        {/* ── px Orbital ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "px" ? null : "px")}
          onMouseEnter={() => setActive("px")}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse
            cx="177"
            cy="92"
            rx="14"
            ry="32"
            fill="url(#pGradPos)"
            stroke={active === "px" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "px" ? 2.5 : 1.5}
            opacity="0.85"
          />
          <ellipse
            cx="213"
            cy="92"
            rx="14"
            ry="32"
            fill="url(#pGradNeg)"
            stroke={active === "px" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "px" ? 2.5 : 1.5}
            opacity="0.85"
          />
          <circle cx="195" cy="92" r="3" fill="#115e59" />
          {/* Phase signs inside lobes – keep white for contrast on coloured fill */}
          <text
            x="175"
            y="85"
            textAnchor="middle"
            fontSize="13"
            fill="#fff"
            fontWeight="bold"
            stroke="none"
          >
            +
          </text>
          <text
            x="215"
            y="85"
            textAnchor="middle"
            fontSize="13"
            fill="#fff"
            fontWeight="bold"
            stroke="none"
          >
            –
          </text>
          {/* x-axis */}
          <line
            x1="155"
            y1="92"
            x2="235"
            y2="92"
            stroke="#6b7280"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          {/* Axis label moved outside orbital, with leader line */}
          <line x1="235" y1="92" x2="245" y2="92" stroke="#9ca3af" strokeWidth="0.8" />
          <text x="249" y="96" fontSize="13" {...halo}>
            x
          </text>
          {/* Leader line to label below */}
          <line x1="195" y1="125" x2="195" y2="162" stroke="#9ca3af" strokeWidth="1" />
          <text x="195" y="177" textAnchor="middle" fontSize="14" fontWeight="600" {...halo}>
            p_x
          </text>
          <text x="195" y="194" textAnchor="middle" fontSize="13" {...halo}>
            max. 2 e⁻
          </text>
        </g>

        {/* ── py Orbital ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "py" ? null : "py")}
          onMouseEnter={() => setActive("py")}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse
            cx="320"
            cy="78"
            rx="30"
            ry="13"
            fill="url(#pGradPos)"
            stroke={active === "py" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "py" ? 2.5 : 1.5}
            opacity="0.85"
            transform="rotate(-45 320 78)"
          />
          <ellipse
            cx="320"
            cy="106"
            rx="30"
            ry="13"
            fill="url(#pGradNeg)"
            stroke={active === "py" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "py" ? 2.5 : 1.5}
            opacity="0.85"
            transform="rotate(-45 320 106)"
          />
          <circle cx="320" cy="92" r="3" fill="#115e59" />
          <line
            x1="298"
            y1="70"
            x2="342"
            y2="114"
            stroke="#6b7280"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          {/* Axis label moved outside */}
          <line x1="342" y1="114" x2="350" y2="122" stroke="#9ca3af" strokeWidth="0.8" />
          <text x="354" y="126" fontSize="13" {...halo}>
            y
          </text>
          {/* Leader line to label below */}
          <line x1="320" y1="125" x2="320" y2="162" stroke="#9ca3af" strokeWidth="1" />
          <text x="320" y="177" textAnchor="middle" fontSize="14" fontWeight="600" {...halo}>
            p_y
          </text>
          <text x="320" y="194" textAnchor="middle" fontSize="13" {...halo}>
            max. 2 e⁻
          </text>
        </g>

        {/* ── pz Orbital ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "pz" ? null : "pz")}
          onMouseEnter={() => setActive("pz")}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse
            cx="445"
            cy="92"
            rx="13"
            ry="30"
            fill="url(#pGradPos)"
            stroke={active === "pz" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "pz" ? 2.5 : 1.5}
            opacity="0.85"
          />
          <ellipse
            cx="445"
            cy="92"
            rx="30"
            ry="13"
            fill="url(#pGradNeg)"
            stroke={active === "pz" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "pz" ? 2.5 : 1.5}
            opacity="0.85"
            transform="rotate(90 445 92)"
          />
          <circle cx="445" cy="92" r="3" fill="#115e59" />
          <line
            x1="445"
            y1="55"
            x2="445"
            y2="129"
            stroke="#6b7280"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          {/* Axis label moved outside orbital top, with leader line */}
          <line x1="445" y1="55" x2="445" y2="44" stroke="#9ca3af" strokeWidth="0.8" />
          <text x="452" y="43" fontSize="13" {...halo}>
            z
          </text>
          {/* Leader line to label below */}
          <line x1="445" y1="123" x2="445" y2="162" stroke="#9ca3af" strokeWidth="1" />
          <text x="445" y="177" textAnchor="middle" fontSize="14" fontWeight="600" {...halo}>
            p_z
          </text>
          <text x="445" y="194" textAnchor="middle" fontSize="13" {...halo}>
            max. 2 e⁻
          </text>
        </g>

        {/* ── d-Orbital (cloverleaf d_xy) ── */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "d" ? null : "d")}
          onMouseEnter={() => setActive("d")}
          onMouseLeave={() => setActive(null)}
        >
          {/* Four lobes */}
          <ellipse
            cx="270"
            cy="278"
            rx="12"
            ry="28"
            fill="url(#dGrad1)"
            stroke={active === "d" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "d" ? 2.5 : 1.5}
            opacity="0.85"
            transform="rotate(45 270 278)"
          />
          <ellipse
            cx="270"
            cy="278"
            rx="12"
            ry="28"
            fill="url(#dGrad2)"
            stroke={active === "d" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "d" ? 2.5 : 1.5}
            opacity="0.85"
            transform="rotate(-45 270 278)"
          />
          <ellipse
            cx="270"
            cy="278"
            rx="28"
            ry="12"
            fill="url(#dGrad1)"
            stroke={active === "d" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "d" ? 2.5 : 1.5}
            opacity="0.85"
            transform="rotate(45 270 278)"
          />
          <ellipse
            cx="270"
            cy="278"
            rx="28"
            ry="12"
            fill="url(#dGrad2)"
            stroke={active === "d" ? "#115e59" : "#0d9488"}
            strokeWidth={active === "d" ? 2.5 : 1.5}
            opacity="0.85"
            transform="rotate(-45 270 278)"
          />
          <circle cx="270" cy="278" r="4" fill="#115e59" />
          {/* Axes */}
          <line
            x1="232"
            y1="278"
            x2="308"
            y2="278"
            stroke="#6b7280"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          <line
            x1="270"
            y1="240"
            x2="270"
            y2="316"
            stroke="#6b7280"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          {/* Axis labels moved outside with leader lines */}
          <line x1="308" y1="278" x2="318" y2="278" stroke="#9ca3af" strokeWidth="0.8" />
          <text x="322" y="282" fontSize="13" {...halo}>
            x
          </text>
          <line x1="270" y1="240" x2="270" y2="230" stroke="#9ca3af" strokeWidth="0.8" />
          <text x="276" y="228" fontSize="13" {...halo}>
            y
          </text>
          {/* Phase signs inside lobes – keep white */}
          <text x="248" y="262" fontSize="13" fill="#fff" fontWeight="bold" stroke="none">
            +
          </text>
          <text x="288" y="262" fontSize="13" fill="#fff" fontWeight="bold" stroke="none">
            –
          </text>
          <text x="248" y="298" fontSize="13" fill="#fff" fontWeight="bold" stroke="none">
            –
          </text>
          <text x="288" y="298" fontSize="13" fill="#fff" fontWeight="bold" stroke="none">
            +
          </text>
          {/* Leader line to labels below */}
          <line x1="270" y1="310" x2="270" y2="332" stroke="#9ca3af" strokeWidth="1" />
          <text x="270" y="348" textAnchor="middle" fontSize="14" fontWeight="600" {...halo}>
            d-Orbital (d_xy)
          </text>
          <text x="270" y="365" textAnchor="middle" fontSize="13" {...halo}>
            max. 2 e⁻ pro Orbital (5 Orientierungen, gesamt 10 e⁻)
          </text>
        </g>
      </svg>

      {activeOrbital && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
            {activeOrbital.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeOrbital.detail}</p>
        </div>
      )}
    </div>
  );
}
