import { useState } from "react";

const parts = [
  { id: "sa", label: "Sinusknoten (SA-Knoten)", detail: "Primärer Schrittmacher des Herzens. Liegt im rechten Vorhof. Frequenz: ~60-80/min. Gibt den Herzrhythmus vor.", x: 165, y: 100 },
  { id: "av", label: "AV-Knoten (Atrioventrikularknoten)", detail: "Sekundärer Schrittmacher (~40-60/min). Verzoegert die Erregungsweiterleitung (AV-Delay), damit Vorhöfe vor Ventrikeln kontrahieren.", x: 230, y: 185 },
  { id: "his", label: "His-Bündel", detail: "Leitet Erregung vom AV-Knoten durch das Herzskelett zu den Ventrikeln. Einzige elektrische Verbindung zwischen Vorhöfe und Ventrikel.", x: 240, y: 220 },
  { id: "tawara", label: "Tawara-Schenkel", detail: "His-Bündel teilt sich in rechten und linken Schenkel. Leiten Erregung an die jeweilige Ventrikelseite.", x: 240, y: 280 },
  { id: "purkinje", label: "Purkinje-Fasern", detail: "Feinste Auslaufer des Erregungsleitungssystems. Sorgen für schnelle, synchrone Kontraktion der Ventrikelmuskulatur von der Herzspitze aus.", x: 240, y: 340 },
];

type Part = (typeof parts)[number];

export default function CardiacConduction() {
  const [active, setActive] = useState<Part | null>(null);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Erregungsleitungssystem des Herzens</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Komponenten für Details.</p>

      <svg viewBox="0 0 480 420" className="w-full max-w-xl mx-auto">
        {/* Heart outline */}
        <path
          d="M240,50 Q180,20 140,60 Q90,110 100,170 Q100,200 120,240 L240,400 L360,240 Q380,200 380,170 Q390,110 340,60 Q300,20 240,50"
          fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" opacity="0.7"
        />

        {/* Septum */}
        <line x1="240" y1="80" x2="240" y2="370" stroke="#0d9488" strokeWidth="1.5" opacity="0.4" />

        {/* AV border */}
        <path d="M110,190 Q175,210 240,195 Q305,210 370,190" fill="none" stroke="#0d9488" strokeWidth="1.5" opacity="0.4" />

        {/* Chamber labels (subtle) */}
        <text x="175" y="140" textAnchor="middle" fontSize="8" fill="#0d9488" opacity="0.5">RA</text>
        <text x="305" y="140" textAnchor="middle" fontSize="8" fill="#0d9488" opacity="0.5">LA</text>
        <text x="180" y="280" textAnchor="middle" fontSize="8" fill="#0d9488" opacity="0.5">RV</text>
        <text x="300" y="280" textAnchor="middle" fontSize="8" fill="#0d9488" opacity="0.5">LV</text>

        {/* ===== CONDUCTION PATHWAYS (yellow/gold) ===== */}

        {/* Excitation waves from SA node through atria */}
        <g opacity="0.4">
          {[0, 1, 2].map((i) => (
            <ellipse key={`wave-${i}`} cx="165" cy="100" rx={25 + i * 25} ry={15 + i * 12} fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="4 3" />
          ))}
        </g>

        {/* SA → AV pathway */}
        <path d="M175,110 Q200,145 230,185" fill="none" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />

        {/* AV → His */}
        <line x1="240" y1="195" x2="240" y2="225" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />

        {/* His → Tawara split */}
        <line x1="240" y1="225" x2="240" y2="245" stroke="#eab308" strokeWidth="3" />
        {/* Right bundle */}
        <path d="M240,245 Q210,260 180,300 Q160,330 155,360" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
        {/* Left bundle */}
        <path d="M240,245 Q270,260 300,300 Q320,330 325,360" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />

        {/* Purkinje fibers (branching at bottom) */}
        {/* Right side */}
        <path d="M155,360 Q140,370 130,355" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M155,360 Q150,375 140,380" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M155,360 Q165,375 170,380" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M170,340 Q160,350 148,348" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M180,310 Q165,318 155,312" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />

        {/* Left side */}
        <path d="M325,360 Q340,370 350,355" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M325,360 Q330,375 340,380" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M325,360 Q315,375 310,380" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M310,340 Q320,350 332,348" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M300,310 Q315,318 325,312" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />

        {/* ===== INTERACTIVE NODES ===== */}
        {/* SA Node */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[0])} onMouseLeave={() => setActive(null)} onClick={() => setActive(active?.id === "sa" ? null : parts[0])}>
          <circle cx="165" cy="100" r="14" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <text x="165" y="104" textAnchor="middle" fontSize="7" fill="#92400e" fontWeight="bold">SA</text>
        </g>

        {/* AV Node */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[1])} onMouseLeave={() => setActive(null)} onClick={() => setActive(active?.id === "av" ? null : parts[1])}>
          <circle cx="235" cy="190" r="12" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <text x="235" y="194" textAnchor="middle" fontSize="7" fill="#92400e" fontWeight="bold">AV</text>
        </g>

        {/* His Bundle */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[2])} onMouseLeave={() => setActive(null)} onClick={() => setActive(active?.id === "his" ? null : parts[2])}>
          <rect x="225" y="218" width="30" height="14" rx="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
          <text x="240" y="228" textAnchor="middle" fontSize="6" fill="#92400e" fontWeight="bold">His</text>
        </g>

        {/* Labels with lines */}
        {/* SA label */}
        <line x1="152" y1="92" x2="80" y2="75" stroke="#d97706" strokeWidth="0.8" />
        <text x="75" y="72" textAnchor="end" fontSize="8" fill="#d97706" fontWeight="bold">Sinusknoten</text>
        <text x="75" y="83" textAnchor="end" fontSize="7" fill="#92400e">~60-80/min</text>

        {/* AV label */}
        <line x1="248" y1="188" x2="395" y2="170" stroke="#d97706" strokeWidth="0.8" />
        <text x="400" y="167" fontSize="8" fill="#d97706" fontWeight="bold">AV-Knoten</text>
        <text x="400" y="178" fontSize="7" fill="#92400e">~40-60/min</text>

        {/* His label */}
        <line x1="256" y1="225" x2="395" y2="215" stroke="#d97706" strokeWidth="0.8" />
        <text x="400" y="212" fontSize="8" fill="#d97706" fontWeight="bold">His-Bündel</text>

        {/* Tawara label */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[3])} onMouseLeave={() => setActive(null)}>
          <line x1="180" y1="300" x2="75" y2="290" stroke="#d97706" strokeWidth="0.8" />
          <text x="70" y="287" textAnchor="end" fontSize="8" fill="#d97706" fontWeight="bold">Tawara-Schenkel</text>
          <text x="70" y="298" textAnchor="end" fontSize="7" fill="#92400e">(re. + li. Schenkel)</text>
        </g>

        {/* Purkinje label */}
        <g className="cursor-pointer" onMouseEnter={() => setActive(parts[4])} onMouseLeave={() => setActive(null)}>
          <line x1="325" y1="360" x2="400" y2="360" stroke="#d97706" strokeWidth="0.8" />
          <text x="405" y="357" fontSize="8" fill="#d97706" fontWeight="bold">Purkinje-Fasern</text>
          <text x="405" y="368" fontSize="7" fill="#92400e">~20-40/min</text>
        </g>

        {/* Sequence arrows */}
        <text x="240" y="415" textAnchor="middle" fontSize="8" fill="#0d9488" fontWeight="bold">SA → AV → His → Tawara → Purkinje</text>
      </svg>

      {active && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">{active.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{active.detail}</p>
        </div>
      )}
    </div>
  );
}
