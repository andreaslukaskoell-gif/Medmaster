import { useState } from "react";

type Focus = "overview" | "anode" | "cathode" | "ions";

export default function Electrolysis() {
  const [focus, setFocus] = useState<Focus>("overview");

  const INFO: Record<Focus, string> = {
    overview:
      "Elektrolyse: Durch externe elektrische Energie wird eine nicht-spontane Redoxreaktion erzwungen. Anode (+): Oxidation. Kathode (−): Reduktion. Gegenüber dem galvanischen Element sind Anode und Kathode vertauscht in Bezug auf + und −.",
    anode:
      "Anode (+, extern): Oxidation findet statt. Bei Wasserelektrolyse: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻. Anionen wandern zur Anode. Die Anode ist mit dem Pluspol der Spannungsquelle verbunden.",
    cathode:
      "Kathode (−, extern): Reduktion findet statt. Bei Wasserelektrolyse: 4 H₂O + 4 e⁻ → 2 H₂ + 4 OH⁻. Kationen wandern zur Kathode. Verbunden mit dem Minuspol.",
    ions: "Ionenwanderung: Kationen (positiv) wandern zur Kathode (−). Anionen (negativ) wandern zur Anode (+). Im Elektrolyten ermöglichen Ionen den Stromfluss.",
  };

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Elektrolyse — Wasserelektrolyse
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Externe Spannung, Anode/Kathode, Ionenwanderung, Elektrodenreaktionen.
      </p>

      <div className="flex gap-2 mb-2 flex-wrap">
        {(["overview", "anode", "cathode", "ions"] as Focus[]).map((f) => (
          <button
            key={f}
            onClick={() => setFocus(f)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              focus === f
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-indigo-300 text-indigo-700 dark:text-indigo-300 dark:border-indigo-700"
            }`}
          >
            {f === "overview"
              ? "Übersicht"
              : f === "anode"
                ? "Anode"
                : f === "cathode"
                  ? "Kathode"
                  : "Ionen"}
          </button>
        ))}
      </div>

      <svg role="img" viewBox="0 0 480 300" className="w-full max-w-lg mx-auto">
        <title>Elektrolyse — Wasserelektrolyse</title>
        <defs>
          <linearGradient id="elecSol" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <marker id="arrElec" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#f59e0b" />
          </marker>
          <marker id="arrElecBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#4f46e5" />
          </marker>
          <marker id="arrElecRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#dc2626" />
          </marker>
        </defs>

        {/* Electrolyte container */}
        <rect
          x="80"
          y="120"
          width="320"
          height="160"
          rx="4"
          fill="url(#elecSol)"
          stroke="#0891b2"
          strokeWidth="2"
        />
        <text x="240" y="210" textAnchor="middle" fontSize="10" fill="#0e7490" fontWeight="bold">
          H₂O (Elektrolyt)
        </text>

        {/* Cathode (left, −) */}
        <rect
          x="110"
          y="80"
          width="28"
          height="140"
          rx="3"
          fill={focus === "cathode" ? "#6366f1" : "#374151"}
          stroke={focus === "cathode" ? "#4338ca" : "#1f2937"}
          strokeWidth="1.5"
        />
        <text
          x="124"
          y="72"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill={focus === "cathode" ? "#4338ca" : "#374151"}
        >
          Kathode
        </text>
        <text
          x="124"
          y="84"
          textAnchor="middle"
          fontSize="11"
          fill={focus === "cathode" ? "#4338ca" : "#6b7280"}
        >
          (−)
        </text>

        {/* Anode (right, +) */}
        <rect
          x="342"
          y="80"
          width="28"
          height="140"
          rx="3"
          fill={focus === "anode" ? "#dc2626" : "#374151"}
          stroke={focus === "anode" ? "#b91c1c" : "#1f2937"}
          strokeWidth="1.5"
        />
        <text
          x="356"
          y="72"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill={focus === "anode" ? "#b91c1c" : "#374151"}
        >
          Anode
        </text>
        <text
          x="356"
          y="84"
          textAnchor="middle"
          fontSize="11"
          fill={focus === "anode" ? "#b91c1c" : "#6b7280"}
        >
          (+)
        </text>

        {/* H₂ bubbles at cathode */}
        <circle
          cx="108"
          cy="116"
          r="5"
          fill="white"
          stroke="#6366f1"
          strokeWidth="1"
          opacity="0.8"
        />
        <circle
          cx="118"
          cy="108"
          r="4"
          fill="white"
          stroke="#6366f1"
          strokeWidth="1"
          opacity="0.8"
        />
        <circle
          cx="100"
          cy="104"
          r="6"
          fill="white"
          stroke="#6366f1"
          strokeWidth="1"
          opacity="0.8"
        />
        <text x="80" y="95" fontSize="9" fill="#4338ca" fontWeight="bold">
          H₂↑
        </text>
        <text x="50" y="150" fontSize="8" fill="#4338ca">
          2H₂O+2e⁻
        </text>
        <text x="50" y="162" fontSize="8" fill="#4338ca">
          →H₂+2OH⁻
        </text>

        {/* O₂ bubbles at anode */}
        <circle
          cx="362"
          cy="116"
          r="5"
          fill="white"
          stroke="#dc2626"
          strokeWidth="1"
          opacity="0.8"
        />
        <circle
          cx="372"
          cy="108"
          r="4"
          fill="white"
          stroke="#dc2626"
          strokeWidth="1"
          opacity="0.8"
        />
        <circle
          cx="354"
          cy="104"
          r="6"
          fill="white"
          stroke="#dc2626"
          strokeWidth="1"
          opacity="0.8"
        />
        <text x="380" y="95" fontSize="9" fill="#b91c1c" fontWeight="bold">
          O₂↑
        </text>
        <text x="382" y="150" fontSize="8" fill="#b91c1c">
          2H₂O
        </text>
        <text x="382" y="162" fontSize="8" fill="#b91c1c">
          →O₂+4H⁺+4e⁻
        </text>

        {/* Ion migration */}
        {(focus === "ions" || focus === "overview") && (
          <>
            {/* Cations (H⁺) to cathode */}
            <circle cx="240" cy="170" r="7" fill="#4f46e5" opacity="0.7" />
            <text x="240" y="174" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">
              H⁺
            </text>
            <line
              x1="228"
              y1="170"
              x2="160"
              y2="170"
              stroke="#4f46e5"
              strokeWidth="1.5"
              markerEnd="url(#arrElecBlue)"
            />
            <text x="195" y="162" fontSize="8" fill="#4f46e5">
              Kationen →
            </text>

            {/* Anions (OH⁻) to anode */}
            <circle cx="240" cy="195" r="7" fill="#dc2626" opacity="0.7" />
            <text x="240" y="199" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">
              OH⁻
            </text>
            <line
              x1="252"
              y1="195"
              x2="320"
              y2="195"
              stroke="#dc2626"
              strokeWidth="1.5"
              markerEnd="url(#arrElecRed)"
            />
            <text x="285" y="187" fontSize="8" fill="#dc2626">
              ← Anionen
            </text>
          </>
        )}

        {/* External circuit (top) */}
        <line x1="124" y1="80" x2="124" y2="40" stroke="#374151" strokeWidth="2.5" />
        <line x1="124" y1="40" x2="356" y2="40" stroke="#374151" strokeWidth="2.5" />
        <line x1="356" y1="40" x2="356" y2="80" stroke="#374151" strokeWidth="2.5" />

        {/* Electron flow (right to left in external = cathode gets e⁻) */}
        <path
          d="M310,40 L180,40"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          markerEnd="url(#arrElec)"
        />
        <text x="240" y="32" textAnchor="middle" fontSize="9" fill="#d97706" fontWeight="bold">
          ← e⁻
        </text>

        {/* Power source */}
        <rect
          x="200"
          y="20"
          width="80"
          height="28"
          rx="5"
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth="1.5"
        />
        <text x="240" y="34" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="bold">
          Spannungsquelle
        </text>
        <text x="218" y="46" fontSize="9" fill="#92400e">
          −
        </text>
        <text x="254" y="46" fontSize="9" fill="#92400e">
          +
        </text>

        {/* Ratio note */}
        <text x="240" y="290" textAnchor="middle" fontSize="9" fill="#6b7280">
          2 H₂O → 2 H₂ + O₂ (Volumen H₂ : O₂ = 2 : 1)
        </text>
      </svg>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">{INFO[focus]}</p>
      </div>
    </div>
  );
}
