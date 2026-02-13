import { useState } from "react";

type Mode = "dominant" | "recessive";

interface Person {
  id: string;
  x: number;
  y: number;
  sex: "m" | "f";
  affected: boolean;
  genotype: { dominant: string; recessive: string };
  label?: string;
}

const people: Person[] = [
  /* Generation I */
  { id: "I-1", x: 100, y: 60, sex: "m", affected: true, genotype: { dominant: "Aa", recessive: "Aa" }, label: "I-1" },
  { id: "I-2", x: 200, y: 60, sex: "f", affected: false, genotype: { dominant: "aa", recessive: "Aa" }, label: "I-2" },
  { id: "I-3", x: 320, y: 60, sex: "m", affected: false, genotype: { dominant: "aa", recessive: "Aa" }, label: "I-3" },
  { id: "I-4", x: 420, y: 60, sex: "f", affected: false, genotype: { dominant: "aa", recessive: "Aa" }, label: "I-4" },

  /* Generation II */
  { id: "II-1", x: 70, y: 160, sex: "m", affected: true, genotype: { dominant: "Aa", recessive: "Aa" }, label: "II-1" },
  { id: "II-2", x: 150, y: 160, sex: "f", affected: false, genotype: { dominant: "aa", recessive: "Aa" }, label: "II-2" },
  { id: "II-3", x: 230, y: 160, sex: "m", affected: false, genotype: { dominant: "aa", recessive: "aa" }, label: "II-3" },
  { id: "II-4", x: 340, y: 160, sex: "f", affected: true, genotype: { dominant: "Aa", recessive: "aa" }, label: "II-4" },
  { id: "II-5", x: 420, y: 160, sex: "m", affected: false, genotype: { dominant: "aa", recessive: "Aa" }, label: "II-5" },

  /* Generation III */
  { id: "III-1", x: 80, y: 260, sex: "f", affected: true, genotype: { dominant: "Aa", recessive: "Aa" }, label: "III-1" },
  { id: "III-2", x: 140, y: 260, sex: "m", affected: false, genotype: { dominant: "aa", recessive: "aa" }, label: "III-2" },
  { id: "III-3", x: 340, y: 260, sex: "f", affected: false, genotype: { dominant: "aa", recessive: "Aa" }, label: "III-3" },
  { id: "III-4", x: 410, y: 260, sex: "m", affected: true, genotype: { dominant: "Aa", recessive: "aa" }, label: "III-4" },
  { id: "III-5", x: 465, y: 260, sex: "f", affected: false, genotype: { dominant: "aa", recessive: "Aa" }, label: "III-5" },
];

const matingLines = [
  { from: "I-1", to: "I-2", childrenMidX: 150 },
  { from: "I-3", to: "I-4", childrenMidX: 370 },
];

export default function PedigreeAnalysis() {
  const [mode, setMode] = useState<Mode>("dominant");
  const [activePerson, setActivePerson] = useState<Person | null>(null);

  const fillColor = "#0d9488";
  const emptyFill = "#f0fdfa";
  const strokeColor = "#0f766e";
  const r = 18;

  const isAffected = (p: Person): boolean => {
    if (mode === "dominant") return p.affected;
    /* For recessive: affected means homozygous recessive (aa) */
    return p.genotype.recessive === "aa";
  };

  const getGenotype = (p: Person): string => {
    return mode === "dominant" ? p.genotype.dominant : p.genotype.recessive;
  };

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Stammbaumanalyse</h4>

      {/* Mode toggle */}
      <div className="flex gap-2">
        <button
          className={`px-3 py-1 text-xs rounded-md border transition-colors ${mode === "dominant" ? "bg-teal-600 text-white border-teal-600" : "bg-white dark:bg-gray-800 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700"}`}
          onClick={() => setMode("dominant")}
        >
          Autosomal-dominant
        </button>
        <button
          className={`px-3 py-1 text-xs rounded-md border transition-colors ${mode === "recessive" ? "bg-teal-600 text-white border-teal-600" : "bg-white dark:bg-gray-800 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-700"}`}
          onClick={() => setMode("recessive")}
        >
          Autosomal-rezessiv
        </button>
      </div>

      <svg viewBox="0 0 500 340" className="w-full max-w-xl mx-auto">
        {/* Generation labels */}
        <text x="15" y="64" fontSize="13" fill="#0d9488" fontWeight="bold">I</text>
        <text x="15" y="164" fontSize="13" fill="#0d9488" fontWeight="bold">II</text>
        <text x="15" y="264" fontSize="13" fill="#0d9488" fontWeight="bold">III</text>

        {/* Mating lines Gen I */}
        <line x1={100 + r} y1="60" x2={200 - r} y2="60" stroke={strokeColor} strokeWidth="1.5" />
        <line x1={320 + r} y1="60" x2={420 - r} y2="60" stroke={strokeColor} strokeWidth="1.5" />

        {/* Descent lines from Gen I couples */}
        {/* Couple 1 → children II-1, II-2, II-3 */}
        <line x1="150" y1="60" x2="150" y2="100" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="70" y1="100" x2="230" y2="100" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="70" y1="100" x2="70" y2="142" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="150" y1="100" x2="150" y2="142" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="230" y1="100" x2="230" y2="142" stroke={strokeColor} strokeWidth="1.5" />

        {/* Couple 2 → children II-4, II-5 */}
        <line x1="370" y1="60" x2="370" y2="100" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="340" y1="100" x2="420" y2="100" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="340" y1="100" x2="340" y2="142" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="420" y1="100" x2="420" y2="142" stroke={strokeColor} strokeWidth="1.5" />

        {/* Mating line Gen II */}
        <line x1={70 + r} y1="160" x2={150 - r} y2="160" stroke={strokeColor} strokeWidth="1.5" />
        <line x1={340 + r} y1="160" x2={420 - r} y2="160" stroke={strokeColor} strokeWidth="1.5" />

        {/* Descent from Gen II couples */}
        {/* Couple II-1 + II-2 → III-1, III-2 */}
        <line x1="110" y1="160" x2="110" y2="200" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="80" y1="200" x2="140" y2="200" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="80" y1="200" x2="80" y2="242" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="140" y1="200" x2="140" y2="242" stroke={strokeColor} strokeWidth="1.5" />

        {/* Couple II-4 + II-5 → III-3, III-4, III-5 */}
        <line x1="380" y1="160" x2="380" y2="200" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="340" y1="200" x2="465" y2="200" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="340" y1="200" x2="340" y2="242" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="410" y1="200" x2="410" y2="242" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="465" y1="200" x2="465" y2="242" stroke={strokeColor} strokeWidth="1.5" />

        {/* People */}
        {people.map((p) => {
          const affected = isAffected(p);
          const fill = affected ? fillColor : emptyFill;
          const textColor = affected ? "white" : "#115e59";

          return (
            <g
              key={p.id}
              className="cursor-pointer"
              onMouseEnter={() => setActivePerson(p)}
              onMouseLeave={() => setActivePerson(null)}
            >
              {p.sex === "m" ? (
                <rect
                  x={p.x - r} y={p.y - r} width={r * 2} height={r * 2}
                  fill={fill} stroke={strokeColor} strokeWidth="2"
                  rx="2"
                />
              ) : (
                <circle cx={p.x} cy={p.y} r={r} fill={fill} stroke={strokeColor} strokeWidth="2" />
              )}
              {/* Genotype */}
              <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="13" fill={textColor} fontWeight="bold">
                {getGenotype(p)}
              </text>
              {/* Label */}
              <text x={p.x} y={p.y + r + 12} textAnchor="middle" fontSize="6" fill="#0d9488">{p.label}</text>
            </g>
          );
        })}

        {/* Hover highlight */}
        {activePerson && (
          activePerson.sex === "m" ? (
            <rect
              x={activePerson.x - r - 3} y={activePerson.y - r - 3}
              width={(r + 3) * 2} height={(r + 3) * 2}
              fill="none" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" rx="2"
            />
          ) : (
            <circle
              cx={activePerson.x} cy={activePerson.y} r={r + 3}
              fill="none" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse"
            />
          )
        )}

        {/* Legend */}
        <rect x="30" y="305" width="440" height="28" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1" />
        <rect x="45" y="313" width="14" height="14" rx="2" fill={emptyFill} stroke={strokeColor} strokeWidth="1.5" />
        <text x="64" y="324" fontSize="7" fill="#115e59">Männlich</text>
        <circle cx="120" cy="320" r="7" fill={emptyFill} stroke={strokeColor} strokeWidth="1.5" />
        <text x="132" y="324" fontSize="7" fill="#115e59">Weiblich</text>
        <rect x="185" y="313" width="14" height="14" rx="2" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
        <text x="204" y="324" fontSize="7" fill="#115e59">Betroffen</text>
        <text x="290" y="324" fontSize="7" fill="#115e59" fontWeight="bold">A = dominantes Allel, a = rezessives Allel</text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        {mode === "dominant" ? (
          <>
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">Autosomal-dominanter Erbgang</p>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
              Ein dominantes Allel (A) reicht für die Merkmalsausprägung. Betroffene haben mindestens einen betroffenen Elternteil.
              Merkmal ueberspringt keine Generation. Genotyp der Betroffenen: Aa oder AA.
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">Autosomal-rezessiver Erbgang</p>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
              Zwei rezessive Allele (aa) nötig für Merkmalsausprägung. Eltern können Träger sein (Aa) ohne selbst betroffen zu sein.
              Merkmal kann Generationen ueberspringen. 25% Wahrscheinlichkeit bei Aa x Aa.
            </p>
          </>
        )}
        {activePerson && (
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
            <span className="font-semibold">{activePerson.label}</span>: Genotyp = {getGenotype(activePerson)}, {isAffected(activePerson) ? "betroffen" : "nicht betroffen"}
          </p>
        )}
      </div>
    </div>
  );
}
