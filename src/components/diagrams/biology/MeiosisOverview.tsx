import { useState } from "react";

const stages = [
  { id: "prophase1", label: "Prophase I", detail: "Homologe Chromosomen paaren sich (Synapsis). Crossing-over tauscht Gensegmente aus. Erhöht genetische Vielfalt." },
  { id: "metaphase1", label: "Metaphase I", detail: "Homologe Paare (Bivalente) reihen sich an der Metaphaseplatte auf. Zufällige Verteilung der Homologen." },
  { id: "anaphase1", label: "Anaphase I", detail: "Homologe Chromosomen werden getrennt (Reduktion!). Schwesterchromatiden bleiben verbunden." },
  { id: "division1", label: "1. Teilung", detail: "Ergebnis: Zwei haploide Zellen, je mit einem Chromosom aus jedem homologen Paar (noch 2 Chromatiden)." },
  { id: "division2", label: "2. Teilung", detail: "Wie Mitose: Schwesterchromatiden werden getrennt. Ergebnis: 4 haploide Zellen." },
  { id: "result", label: "Ergebnis", detail: "4 genetisch verschiedene haploide Zellen (Gameten). Jede Zelle hat halben Chromosomensatz (1n)." },
];

export default function MeiosisOverview() {
  const [active, setActive] = useState<string | null>(null);
  const activeStage = stages.find((s) => s.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Meiose — Übersicht</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">Klicke auf Phasen für Details.</p>

      <svg viewBox="0 0 480 420" className="w-full max-w-xl mx-auto">
        {/* Title labels */}
        <text x="240" y="16" textAnchor="middle" fontSize="11" fill="#0d9488" fontWeight="bold">Meiose I (Reduktionstellung)</text>

        {/* ===== Starting cell (2n) ===== */}
        <ellipse cx="240" cy="55" rx="50" ry="30" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
        <text x="240" y="50" textAnchor="middle" fontSize="8" fill="#115e59" fontWeight="bold">2n = 4</text>
        <text x="240" y="62" textAnchor="middle" fontSize="7" fill="#0f766e">Diploid</text>

        {/* Homologous pairs in starting cell */}
        <line x1="218" y1="42" x2="218" y2="58" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" />
        <line x1="224" y1="42" x2="224" y2="58" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
        <line x1="255" y1="42" x2="255" y2="58" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" />
        <line x1="261" y1="42" x2="261" y2="58" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />

        {/* Arrow down */}
        <line x1="240" y1="86" x2="240" y2="106" stroke="#0d9488" strokeWidth="1.5" />
        <polygon points="236,106 240,114 244,106" fill="#0d9488" />

        {/* Prophase I box - crossing over */}
        <g className="cursor-pointer" onClick={() => setActive("prophase1")} onMouseEnter={() => setActive("prophase1")} onMouseLeave={() => setActive(null)}>
          <rect x="170" y="116" width="140" height="48" rx="8" fill={active === "prophase1" ? "#ccfbf1" : "#f0fdfa"} stroke="#0d9488" strokeWidth="1.5" />
          <text x="240" y="132" textAnchor="middle" fontSize="8" fill="#115e59" fontWeight="bold">Prophase I</text>
          {/* Crossing over illustration */}
          <path d="M200,140 Q215,138 225,148 Q235,158 250,155" stroke="#0f766e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M200,155 Q215,158 225,148 Q235,138 250,140" stroke="#14b8a6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="275" y="152" fontSize="6" fill="#0f766e">Crossing-over</text>
        </g>

        {/* Arrow down */}
        <line x1="240" y1="165" x2="240" y2="185" stroke="#0d9488" strokeWidth="1.5" />
        <polygon points="236,185 240,193 244,185" fill="#0d9488" />

        {/* Anaphase I - homologs separate */}
        <g className="cursor-pointer" onClick={() => setActive("anaphase1")} onMouseEnter={() => setActive("anaphase1")} onMouseLeave={() => setActive(null)}>
          <rect x="170" y="195" width="140" height="40" rx="8" fill={active === "anaphase1" ? "#ccfbf1" : "#f0fdfa"} stroke="#0d9488" strokeWidth="1.5" />
          <text x="240" y="210" textAnchor="middle" fontSize="8" fill="#115e59" fontWeight="bold">Anaphase I</text>
          <text x="240" y="224" textAnchor="middle" fontSize="7" fill="#0f766e">Homologe trennen sich</text>
        </g>

        {/* Split arrows to two cells */}
        <line x1="240" y1="236" x2="240" y2="248" stroke="#0d9488" strokeWidth="1.5" />
        <line x1="240" y1="248" x2="140" y2="270" stroke="#0d9488" strokeWidth="1.5" />
        <line x1="240" y1="248" x2="340" y2="270" stroke="#0d9488" strokeWidth="1.5" />
        <polygon points="137,266 140,274 144,266" fill="#0d9488" />
        <polygon points="336,266 340,274 344,266" fill="#0d9488" />

        {/* Meiosis II label */}
        <text x="240" y="268" textAnchor="middle" fontSize="10" fill="#0d9488" fontWeight="bold">Meiose II</text>

        {/* Two intermediate cells */}
        <g className="cursor-pointer" onClick={() => setActive("division1")} onMouseEnter={() => setActive("division1")} onMouseLeave={() => setActive(null)}>
          <ellipse cx="140" cy="300" rx="40" ry="22" fill={active === "division1" ? "#ccfbf1" : "#f0fdfa"} stroke="#14b8a6" strokeWidth="1.5" />
          <text x="140" y="296" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">n = 2</text>
          {/* Chromosomes with 2 chromatids */}
          <line x1="125" y1="302" x2="125" y2="314" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="129" y1="302" x2="129" y2="314" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="150" y1="302" x2="150" y2="314" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="154" y1="302" x2="154" y2="314" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        <g className="cursor-pointer" onClick={() => setActive("division1")} onMouseEnter={() => setActive("division1")} onMouseLeave={() => setActive(null)}>
          <ellipse cx="340" cy="300" rx="40" ry="22" fill={active === "division1" ? "#ccfbf1" : "#f0fdfa"} stroke="#14b8a6" strokeWidth="1.5" />
          <text x="340" y="296" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">n = 2</text>
          <line x1="325" y1="302" x2="325" y2="314" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="329" y1="302" x2="329" y2="314" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="350" y1="302" x2="350" y2="314" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="354" y1="302" x2="354" y2="314" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Arrows down to 4 cells */}
        {/* Left cell splits */}
        <line x1="140" y1="323" x2="140" y2="335" stroke="#0d9488" strokeWidth="1" />
        <line x1="140" y1="335" x2="85" y2="355" stroke="#0d9488" strokeWidth="1" />
        <line x1="140" y1="335" x2="195" y2="355" stroke="#0d9488" strokeWidth="1" />
        <polygon points="83,352 85,358 88,352" fill="#0d9488" />
        <polygon points="193,352 195,358 198,352" fill="#0d9488" />

        {/* Right cell splits */}
        <line x1="340" y1="323" x2="340" y2="335" stroke="#0d9488" strokeWidth="1" />
        <line x1="340" y1="335" x2="285" y2="355" stroke="#0d9488" strokeWidth="1" />
        <line x1="340" y1="335" x2="395" y2="355" stroke="#0d9488" strokeWidth="1" />
        <polygon points="283,352 285,358 288,352" fill="#0d9488" />
        <polygon points="393,352 395,358 398,352" fill="#0d9488" />

        {/* 4 haploid result cells */}
        {[85, 195, 285, 395].map((cx, i) => (
          <g key={`result-${i}`} className="cursor-pointer" onClick={() => setActive("result")} onMouseEnter={() => setActive("result")} onMouseLeave={() => setActive(null)}>
            <ellipse cx={cx} cy={385} rx="32" ry="18" fill={active === "result" ? "#ccfbf1" : "#f0fdfa"} stroke="#0d9488" strokeWidth="1.5" />
            <text x={cx} y="382" textAnchor="middle" fontSize="7" fill="#115e59" fontWeight="bold">n = 2</text>
            {/* Single chromatids */}
            <line x1={cx - 8} y1="388" x2={cx - 8} y2="396" stroke={i < 2 ? "#0f766e" : "#14b8a6"} strokeWidth="2" strokeLinecap="round" />
            <line x1={cx + 8} y1="388" x2={cx + 8} y2="396" stroke={i % 2 === 0 ? "#14b8a6" : "#0f766e"} strokeWidth="2" strokeLinecap="round" />
          </g>
        ))}

        {/* Result label */}
        <text x="240" y="416" textAnchor="middle" fontSize="9" fill="#115e59" fontWeight="bold">4 haploide Zellen (Gameten)</text>
      </svg>

      {activeStage && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">{activeStage.label}</p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeStage.detail}</p>
        </div>
      )}
    </div>
  );
}
