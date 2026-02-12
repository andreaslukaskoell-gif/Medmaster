import { useState } from "react";

type Step = 1 | 2 | 3;

export default function EnzymeSubstrate() {
  const [step, setStep] = useState<Step>(1);

  const stepLabels: Record<Step, string> = {
    1: "Annäherung",
    2: "Enzym-Substrat-Komplex",
    3: "Produktfreisetzung",
  };

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Enzym-Substrat-Reaktion</h4>
      <p className="text-xs text-muted">Schluessel-Schloss-Modell in drei Schritten.</p>

      <div className="flex gap-2 mb-2">
        {([1, 2, 3] as Step[]).map((s) => (
          <button
            key={s}
            onClick={() => setStep(s)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              step === s ? "bg-teal-600 text-white border-teal-600" : "border-teal-300 text-teal-700 dark:text-teal-300 dark:border-teal-700"
            }`}
          >
            {s}. {stepLabels[s]}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 460 280" className="w-full max-w-lg mx-auto">
        <defs>
          <linearGradient id="enzymeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="substrateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="product1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="product2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        {/* Step indicator */}
        <text x="230" y="22" textAnchor="middle" fontSize="11" fill="#0f766e" fontWeight="bold">
          Schritt {step}: {stepLabels[step]}
        </text>

        {step === 1 && (
          <g>
            {/* Enzyme body */}
            <path
              d="M60,100 Q60,60 120,60 L200,60 Q240,60 240,100 L240,140 L210,140 L210,160 Q210,175 195,175 L165,175 Q150,175 150,160 L150,140 L60,140 Q60,140 60,100 Z"
              fill="url(#enzymeGrad)"
              stroke="#115e59"
              strokeWidth="2"
            />
            <text x="150" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Enzym</text>

            {/* Active site label */}
            <path d="M180,178 L180,210" stroke="#115e59" strokeWidth="1" strokeDasharray="3 2" />
            <text x="180" y="224" textAnchor="middle" fontSize="8" fill="#115e59" fontWeight="bold">Aktives Zentrum</text>

            {/* Substrate approaching */}
            <path
              d="M320,120 L350,120 Q365,120 365,135 L365,155 Q365,170 350,170 L310,170 Q295,170 295,155 L295,135 Q295,120 310,120 Z"
              fill="url(#substrateGrad)"
              stroke="#c2410c"
              strokeWidth="2"
            />
            {/* Substrate key shape */}
            <rect x="290" y="138" width="15" height="22" rx="2" fill="url(#substrateGrad)" stroke="#c2410c" strokeWidth="2" />
            <text x="335" y="150" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Substrat</text>

            {/* Approach arrow */}
            <path d="M285,145 L250,155" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrowE)" />
            <defs>
              <marker id="arrowE" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#0d9488" />
              </marker>
            </defs>
            <text x="265" y="140" textAnchor="middle" fontSize="8" fill="#0d9488">Annäherung</text>

            {/* Specificity note */}
            <rect x="300" y="200" width="145" height="50" rx="6" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1" />
            <text x="372" y="218" textAnchor="middle" fontSize="8" fill="#0f766e" fontWeight="bold">Substratspezifität</text>
            <text x="372" y="232" textAnchor="middle" fontSize="7" fill="#6b7280">Nur passendes Substrat</text>
            <text x="372" y="243" textAnchor="middle" fontSize="7" fill="#6b7280">bindet an das Enzym</text>
          </g>
        )}

        {step === 2 && (
          <g>
            {/* Enzyme with substrate bound */}
            <path
              d="M100,80 Q100,40 160,40 L260,40 Q300,40 300,80 L300,120 L270,120 L270,140 Q270,155 255,155 L225,155 Q210,155 210,140 L210,120 L100,120 Q100,120 100,80 Z"
              fill="url(#enzymeGrad)"
              stroke="#115e59"
              strokeWidth="2"
            />
            <text x="200" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Enzym</text>

            {/* Substrate fitted in */}
            <path
              d="M213,122 L213,138 Q213,153 228,153 L252,153 Q267,153 267,138 L267,122"
              fill="url(#substrateGrad)"
              stroke="#c2410c"
              strokeWidth="2"
            />
            <rect x="208" y="134" width="13" height="18" rx="2" fill="url(#substrateGrad)" stroke="#c2410c" strokeWidth="2" />
            <text x="245" y="145" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">S</text>

            {/* Label */}
            <text x="240" y="178" textAnchor="middle" fontSize="10" fill="#115e59" fontWeight="bold">Enzym-Substrat-Komplex (ES)</text>

            {/* Catalysis indicators */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle
                key={i}
                cx={220 + Math.cos((i * Math.PI) / 3) * 30}
                cy={138 + Math.sin((i * Math.PI) / 3) * 15}
                r="2"
                fill="#f59e0b"
                opacity="0.8"
              />
            ))}
            <text x="200" y="200" textAnchor="middle" fontSize="8" fill="#6b7280">Bindungen werden gespalten</text>

            {/* Info box */}
            <rect x="80" y="215" width="240" height="45" rx="6" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1" />
            <text x="200" y="232" textAnchor="middle" fontSize="8" fill="#0f766e" fontWeight="bold">Übergangszustand</text>
            <text x="200" y="246" textAnchor="middle" fontSize="7" fill="#6b7280">Aktivierungsenergie wird herabgesetzt (Katalyse)</text>
          </g>
        )}

        {step === 3 && (
          <g>
            {/* Enzyme released */}
            <path
              d="M50,100 Q50,60 110,60 L190,60 Q230,60 230,100 L230,140 L200,140 L200,160 Q200,175 185,175 L155,175 Q140,175 140,160 L140,140 L50,140 Q50,140 50,100 Z"
              fill="url(#enzymeGrad)"
              stroke="#115e59"
              strokeWidth="2"
            />
            <text x="140" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Enzym</text>
            <text x="140" y="125" textAnchor="middle" fontSize="7" fill="#ccfbf1">(unverändert)</text>

            {/* Active site label */}
            <path d="M170,178 L170,198" stroke="#115e59" strokeWidth="1" strokeDasharray="3 2" />
            <text x="170" y="210" textAnchor="middle" fontSize="8" fill="#115e59">Aktives Zentrum frei</text>

            {/* Product 1 */}
            <path
              d="M290,80 L330,80 Q345,80 345,95 L345,115 Q345,130 330,130 L290,130 Q275,130 275,115 L275,95 Q275,80 290,80 Z"
              fill="url(#product1Grad)"
              stroke="#b45309"
              strokeWidth="2"
            />
            <text x="310" y="110" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">P1</text>

            {/* Product 2 */}
            <path
              d="M370,120 L400,120 Q412,120 412,135 L412,155 Q412,168 400,168 L370,168 Q358,168 358,155 L358,135 Q358,120 370,120 Z"
              fill="url(#product2Grad)"
              stroke="#c2410c"
              strokeWidth="2"
            />
            <text x="385" y="148" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">P2</text>

            {/* Release arrows */}
            <path d="M260,100 L270,95" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrowE)" />
            <path d="M260,140 L350,145" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrowE)" />
            <defs>
              <marker id="arrowE" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6" fill="#0d9488" />
              </marker>
            </defs>

            {/* Labels */}
            <text x="345" y="70" textAnchor="middle" fontSize="10" fill="#b45309" fontWeight="bold">Produkte</text>

            {/* Cycle arrow */}
            <path d="M100,195 Q60,230 100,250 Q160,270 200,240" fill="none" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowE)" />
            <text x="90" y="245" fontSize="7" fill="#0d9488">Enzym bereit</text>
            <text x="90" y="256" fontSize="7" fill="#0d9488">fuer neues Substrat</text>
          </g>
        )}
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {step === 1 && "Das Substrat nähert sich dem aktiven Zentrum des Enzyms. Die Form muss genau passen (Schluessel-Schloss-Prinzip)."}
          {step === 2 && "Der Enzym-Substrat-Komplex (ES) entsteht. Das Enzym senkt die Aktivierungsenergie und beschleunigt die Reaktion."}
          {step === 3 && "Die Produkte werden freigesetzt. Das Enzym bleibt unverändert und kann erneut katalysieren (Biokatalysator)."}
        </p>
      </div>
    </div>
  );
}
