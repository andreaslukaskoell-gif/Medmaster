import { useState } from "react";

type Part = "anode" | "cathode" | "bridge" | "circuit" | null;

export default function GalvanicCell() {
  const [selected, setPart] = useState<Part>(null);

  const INFO: Record<NonNullable<Part>, string> = {
    anode:
      "Anode (–): Zink-Elektrode. Oxidation: Zn → Zn²⁺ + 2 e⁻. Die Zinkelektrode löst sich auf. Elektronen fließen über den äußeren Stromkreis zur Kathode.",
    cathode:
      "Kathode (+): Kupfer-Elektrode. Reduktion: Cu²⁺ + 2 e⁻ → Cu. Kupfer-Ionen aus der Lösung werden als Kupfermetall abgeschieden. Elektrode wird schwerer.",
    bridge:
      "Salzbrücke: Verbindet beide Halbzellen ionisch. Verhindert Ladungsaufbau durch Ionenwanderung (z. B. K⁺ und NO₃⁻). Ohne Salzbrücke kein Stromfluss.",
    circuit:
      "Äußerer Stromkreis: Elektronen fließen von der Anode (Zn, −) zur Kathode (Cu, +). Die Zellspannung des Daniell-Elements beträgt E° = +1,10 V.",
  };

  const highlight = (part: Part) => (selected === part ? "#f59e0b" : "transparent");
  const stroke = (part: Part) => (selected === part ? "#d97706" : "transparent");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Galvanisches Element — Daniell-Element
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Zn/Cu-Zellen, Salzbrücke, Elektronenfluss. Klicke auf Komponenten.
      </p>

      <svg viewBox="0 0 480 300" className="w-full max-w-lg mx-auto cursor-pointer">
        <title>Daniell-Element — galvanisches Element</title>
        <defs>
          <linearGradient id="znSol" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <linearGradient id="cuSol" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
          <marker id="arrGalv" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#f59e0b" />
          </marker>
          <marker id="arrIon" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#7c3aed" />
          </marker>
        </defs>

        {/* Anode half-cell (left) */}
        <rect
          x="30"
          y="130"
          width="140"
          height="140"
          rx="4"
          fill="url(#znSol)"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          onClick={() => setPart(selected === "anode" ? null : "anode")}
        />
        <rect
          x="30"
          y="130"
          width="140"
          height="140"
          rx="4"
          fill={highlight("anode")}
          stroke={stroke("anode")}
          strokeWidth="2.5"
          opacity="0.25"
          onClick={() => setPart(selected === "anode" ? null : "anode")}
        />
        <text x="100" y="210" textAnchor="middle" fontSize="9" fill="#0369a1">
          ZnSO₄ (aq)
        </text>
        <text x="100" y="225" textAnchor="middle" fontSize="9" fill="#0369a1">
          Zn²⁺ Ionen
        </text>

        {/* Zn electrode */}
        <rect
          x="85"
          y="90"
          width="30"
          height="110"
          rx="3"
          fill="#9ca3af"
          stroke="#6b7280"
          strokeWidth="1.5"
          onClick={() => setPart(selected === "anode" ? null : "anode")}
        />
        <text x="100" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
          Zn
        </text>
        <text x="100" y="120" textAnchor="middle" fontSize="8" fill="#e5e7eb">
          Anode (–)
        </text>
        <text x="52" y="168" fontSize="8" fill="#6b7280">
          Zn→Zn²⁺+2e⁻
        </text>

        {/* Cathode half-cell (right) */}
        <rect
          x="310"
          y="130"
          width="140"
          height="140"
          rx="4"
          fill="url(#cuSol)"
          stroke="#d97706"
          strokeWidth="1.5"
          onClick={() => setPart(selected === "cathode" ? null : "cathode")}
        />
        <rect
          x="310"
          y="130"
          width="140"
          height="140"
          rx="4"
          fill={highlight("cathode")}
          stroke={stroke("cathode")}
          strokeWidth="2.5"
          opacity="0.25"
          onClick={() => setPart(selected === "cathode" ? null : "cathode")}
        />
        <text x="380" y="210" textAnchor="middle" fontSize="9" fill="#92400e">
          CuSO₄ (aq)
        </text>
        <text x="380" y="225" textAnchor="middle" fontSize="9" fill="#92400e">
          Cu²⁺ Ionen
        </text>

        {/* Cu electrode */}
        <rect
          x="365"
          y="90"
          width="30"
          height="110"
          rx="3"
          fill="#d97706"
          stroke="#b45309"
          strokeWidth="1.5"
          onClick={() => setPart(selected === "cathode" ? null : "cathode")}
        />
        <text x="380" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
          Cu
        </text>
        <text x="380" y="120" textAnchor="middle" fontSize="8" fill="#fef3c7">
          Kathode (+)
        </text>
        <text x="315" y="168" fontSize="8" fill="#92400e">
          Cu²⁺+2e⁻→Cu
        </text>

        {/* Salt bridge */}
        <rect
          x="175"
          y="120"
          width="130"
          height="35"
          rx="16"
          fill="#ede9fe"
          stroke="#7c3aed"
          strokeWidth="1.5"
          onClick={() => setPart(selected === "bridge" ? null : "bridge")}
        />
        <rect
          x="175"
          y="120"
          width="130"
          height="35"
          rx="16"
          fill={highlight("bridge")}
          stroke={stroke("bridge")}
          strokeWidth="2.5"
          opacity="0.25"
          onClick={() => setPart(selected === "bridge" ? null : "bridge")}
        />
        <text x="240" y="136" textAnchor="middle" fontSize="9" fill="#5b21b6" fontWeight="bold">
          Salzbrücke
        </text>
        <text x="240" y="148" textAnchor="middle" fontSize="8" fill="#5b21b6">
          KNO₃ (aq)
        </text>

        {/* Ion migration in salt bridge */}
        <text x="195" y="145" fontSize="8" fill="#7c3aed">
          K⁺→
        </text>
        <text x="258" y="145" fontSize="8" fill="#7c3aed">
          ←NO₃⁻
        </text>

        {/* External circuit wires */}
        <line
          x1="100"
          y1="90"
          x2="100"
          y2="40"
          stroke="#374151"
          strokeWidth="2.5"
          onClick={() => setPart(selected === "circuit" ? null : "circuit")}
        />
        <line
          x1="100"
          y1="40"
          x2="380"
          y2="40"
          stroke="#374151"
          strokeWidth="2.5"
          onClick={() => setPart(selected === "circuit" ? null : "circuit")}
        />
        <line
          x1="380"
          y1="40"
          x2="380"
          y2="90"
          stroke="#374151"
          strokeWidth="2.5"
          onClick={() => setPart(selected === "circuit" ? null : "circuit")}
        />

        {/* Electron flow arrow */}
        <path
          d="M120,40 L240,40"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          markerEnd="url(#arrGalv)"
          onClick={() => setPart(selected === "circuit" ? null : "circuit")}
        />
        <text x="240" y="32" textAnchor="middle" fontSize="9" fill="#d97706" fontWeight="bold">
          e⁻ →
        </text>

        {/* Voltmeter symbol */}
        <circle
          cx="240"
          cy="55"
          r="14"
          fill="#f0fdf4"
          stroke="#16a34a"
          strokeWidth="1.5"
          onClick={() => setPart(selected === "circuit" ? null : "circuit")}
        />
        <text x="240" y="59" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="bold">
          V
        </text>
        <text x="240" y="78" textAnchor="middle" fontSize="8" fill="#15803d">
          1,10 V
        </text>

        {/* Labels */}
        <text x="100" y="290" textAnchor="middle" fontSize="9" fill="#6b7280">
          Zn-Halbzelle
        </text>
        <text x="380" y="290" textAnchor="middle" fontSize="9" fill="#6b7280">
          Cu-Halbzelle
        </text>

        {/* Highlight box */}
        {selected && <rect x="10" y="155" width="460" height="2" fill="#f59e0b" opacity="0" />}
      </svg>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {selected
            ? INFO[selected]
            : "Klicke auf Anode, Kathode, Salzbrücke oder den Stromkreis für Details. Das Daniell-Element ist das Grundmodell galvanischer Zellen (Batterien)."}
        </p>
      </div>
    </div>
  );
}
