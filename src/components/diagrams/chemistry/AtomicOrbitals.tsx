import { useState } from "react";

const orbitals = [
  { id: "s", label: "s-Orbital", maxE: 2, detail: "Kugelfoermig. Eine Orientierung. Maximale Besetzung: 2 Elektronen." },
  { id: "px", label: "p_x-Orbital", maxE: 2, detail: "Hantelfoermig entlang der x-Achse. Teil des p-Unterraums (max. 6 e\u207B)." },
  { id: "py", label: "p_y-Orbital", maxE: 2, detail: "Hantelfoermig entlang der y-Achse. Teil des p-Unterraums (max. 6 e\u207B)." },
  { id: "pz", label: "p_z-Orbital", maxE: 2, detail: "Hantelfoermig entlang der z-Achse. Teil des p-Unterraums (max. 6 e\u207B)." },
  { id: "d", label: "d-Orbital", maxE: 2, detail: "Kleeblattfoermig (d_xy gezeigt). 5 Orientierungen. d-Unterraum: max. 10 e\u207B." },
];

export default function AtomicOrbitals() {
  const [active, setActive] = useState<string | null>(null);
  const activeOrbital = orbitals.find((o) => o.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Atomorbitale</h4>
      <p className="text-xs text-muted">Klicke auf ein Orbital fuer Details.</p>
      <svg viewBox="0 0 480 320" className="w-full max-w-lg mx-auto">
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

        <text x="240" y="20" textAnchor="middle" fontSize="12" fill="#0f766e" fontWeight="bold">Atomorbitale</text>

        {/* s-Orbital */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "s" ? null : "s")}
          onMouseEnter={() => setActive("s")}
          onMouseLeave={() => setActive(null)}
        >
          <circle cx="70" cy="100" r="38" fill="url(#sGrad)" stroke={active === "s" ? "#115e59" : "#0d9488"} strokeWidth={active === "s" ? 2.5 : 1.5} opacity="0.85" />
          <circle cx="70" cy="100" r="25" fill="none" stroke="#ccfbf1" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.5" />
          <circle cx="70" cy="100" r="3" fill="#115e59" />
          <text x="70" y="150" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">s-Orbital</text>
          <text x="70" y="162" textAnchor="middle" fontSize="8" fill="#6b7280">max. 2 e\u207B</text>
        </g>

        {/* px Orbital */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "px" ? null : "px")}
          onMouseEnter={() => setActive("px")}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse cx="157" cy="82" rx="14" ry="32" fill="url(#pGradPos)" stroke={active === "px" ? "#115e59" : "#0d9488"} strokeWidth={active === "px" ? 2.5 : 1.5} opacity="0.85" />
          <ellipse cx="193" cy="82" rx="14" ry="32" fill="url(#pGradNeg)" stroke={active === "px" ? "#115e59" : "#0d9488"} strokeWidth={active === "px" ? 2.5 : 1.5} opacity="0.85" />
          <circle cx="175" cy="82" r="3" fill="#115e59" />
          <text x="155" y="73" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">+</text>
          <text x="195" y="73" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">\u2013</text>
          {/* x-axis */}
          <line x1="140" y1="82" x2="210" y2="82" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2 2" />
          <text x="213" y="85" fontSize="6" fill="#6b7280">x</text>
          <text x="175" y="150" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">p_x</text>
          <text x="175" y="162" textAnchor="middle" fontSize="8" fill="#6b7280">max. 2 e\u207B</text>
        </g>

        {/* py Orbital */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "py" ? null : "py")}
          onMouseEnter={() => setActive("py")}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse cx="280" cy="68" rx="30" ry="13" fill="url(#pGradPos)" stroke={active === "py" ? "#115e59" : "#0d9488"} strokeWidth={active === "py" ? 2.5 : 1.5} opacity="0.85" transform="rotate(-45 280 68)" />
          <ellipse cx="280" cy="96" rx="30" ry="13" fill="url(#pGradNeg)" stroke={active === "py" ? "#115e59" : "#0d9488"} strokeWidth={active === "py" ? 2.5 : 1.5} opacity="0.85" transform="rotate(-45 280 96)" />
          <circle cx="280" cy="82" r="3" fill="#115e59" />
          <line x1="258" y1="60" x2="302" y2="104" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2 2" />
          <text x="305" y="107" fontSize="6" fill="#6b7280">y</text>
          <text x="280" y="150" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">p_y</text>
          <text x="280" y="162" textAnchor="middle" fontSize="8" fill="#6b7280">max. 2 e\u207B</text>
        </g>

        {/* pz Orbital */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "pz" ? null : "pz")}
          onMouseEnter={() => setActive("pz")}
          onMouseLeave={() => setActive(null)}
        >
          <ellipse cx="385" cy="82" rx="13" ry="30" fill="url(#pGradPos)" stroke={active === "pz" ? "#115e59" : "#0d9488"} strokeWidth={active === "pz" ? 2.5 : 1.5} opacity="0.85" />
          <ellipse cx="385" cy="82" rx="30" ry="13" fill="url(#pGradNeg)" stroke={active === "pz" ? "#115e59" : "#0d9488"} strokeWidth={active === "pz" ? 2.5 : 1.5} opacity="0.85" transform="rotate(90 385 82)" />
          <circle cx="385" cy="82" r="3" fill="#115e59" />
          <line x1="385" y1="45" x2="385" y2="119" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2 2" />
          <text x="389" y="43" fontSize="6" fill="#6b7280">z</text>
          <text x="385" y="150" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">p_z</text>
          <text x="385" y="162" textAnchor="middle" fontSize="8" fill="#6b7280">max. 2 e\u207B</text>
        </g>

        {/* d-Orbital (cloverleaf d_xy) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "d" ? null : "d")}
          onMouseEnter={() => setActive("d")}
          onMouseLeave={() => setActive(null)}
        >
          {/* Four lobes */}
          <ellipse cx="230" cy="228" rx="12" ry="28" fill="url(#dGrad1)" stroke={active === "d" ? "#115e59" : "#0d9488"} strokeWidth={active === "d" ? 2.5 : 1.5} opacity="0.85" transform="rotate(45 230 228)" />
          <ellipse cx="230" cy="228" rx="12" ry="28" fill="url(#dGrad2)" stroke={active === "d" ? "#115e59" : "#0d9488"} strokeWidth={active === "d" ? 2.5 : 1.5} opacity="0.85" transform="rotate(-45 230 228)" />
          <ellipse cx="230" cy="228" rx="28" ry="12" fill="url(#dGrad1)" stroke={active === "d" ? "#115e59" : "#0d9488"} strokeWidth={active === "d" ? 2.5 : 1.5} opacity="0.85" transform="rotate(45 230 228)" />
          <ellipse cx="230" cy="228" rx="28" ry="12" fill="url(#dGrad2)" stroke={active === "d" ? "#115e59" : "#0d9488"} strokeWidth={active === "d" ? 2.5 : 1.5} opacity="0.85" transform="rotate(-45 230 228)" />
          <circle cx="230" cy="228" r="4" fill="#115e59" />
          {/* Axes */}
          <line x1="192" y1="228" x2="268" y2="228" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="230" y1="190" x2="230" y2="266" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2 2" />
          <text x="271" y="231" fontSize="6" fill="#6b7280">x</text>
          <text x="233" y="189" fontSize="6" fill="#6b7280">y</text>
          <text x="208" y="212" fontSize="7" fill="#fff" fontWeight="bold">+</text>
          <text x="248" y="212" fontSize="7" fill="#fff" fontWeight="bold">\u2013</text>
          <text x="208" y="248" fontSize="7" fill="#fff" fontWeight="bold">\u2013</text>
          <text x="248" y="248" fontSize="7" fill="#fff" fontWeight="bold">+</text>
          <text x="230" y="280" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">d-Orbital (d_xy)</text>
          <text x="230" y="292" textAnchor="middle" fontSize="8" fill="#6b7280">max. 2 e\u207B pro Orbital</text>
          <text x="230" y="304" textAnchor="middle" fontSize="7" fill="#6b7280">(5 Orientierungen, gesamt 10 e\u207B)</text>
        </g>
      </svg>

      {activeOrbital && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">{activeOrbital.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeOrbital.detail}</p>
        </div>
      )}
    </div>
  );
}
