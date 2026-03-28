import { useState } from "react";

type Part = "glycerol" | "saturated" | "unsaturated" | "ester" | null;

export default function LipidStructure() {
  const [selected, setSelected] = useState<Part>(null);

  const INFO: Record<NonNullable<Part>, string> = {
    glycerol:
      "Glycerol (Glycerin): 3-wertiger Alkohol (C₃H₈O₃). Die drei OH-Gruppen bilden je eine Esterbindung mit den Fettsäuren. Rückgrat des Triglycerids.",
    saturated:
      "Gesättigte Fettsäure: Nur Einfachbindungen (C–C). Geradkettig → enge Packung → höherer Schmelzpunkt → fest bei Raumtemp. (z. B. Palmitinsäure C16:0, Stearinsäure C18:0).",
    unsaturated:
      "Ungesättigte Fettsäure: Eine oder mehrere C=C-Doppelbindungen (cis-Konfiguration). Knick in der Kette → lockere Packung → niedrigerer Schmelzpunkt → flüssig (Öle). z. B. Ölsäure C18:1, Linolsäure C18:2.",
    ester:
      "Esterbindung: –COO– (Ester). Gebildet durch Kondensationsreaktion (Veresterung) zwischen Carboxylgruppe (–COOH) der Fettsäure und OH-Gruppe des Glycerols. Hydrolyse mit NaOH = Verseifung → Glycerol + Seife.",
  };

  const hlColor = (part: Part) => (selected === part ? "#f59e0b33" : "transparent");
  const hlStroke = (part: Part) => (selected === part ? "#d97706" : "transparent");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Lipidstruktur — Triglycerid
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Glycerol-Rückgrat, Fettsäureketten, Esterbindung. Klicke auf Komponenten.
      </p>

      <svg role="img" viewBox="0 0 480 320" className="w-full max-w-lg mx-auto cursor-pointer">
        <title>Triglycerid-Struktur</title>
        <defs>
          <linearGradient id="glyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>

        <text x="240" y="18" textAnchor="middle" fontSize="13" fill="#15803d" fontWeight="bold">
          Triglycerid (Neutralfett)
        </text>

        {/* Glycerol backbone */}
        <rect
          x="60"
          y="40"
          width="70"
          height="230"
          rx="8"
          fill={hlColor("glycerol")}
          stroke={hlStroke("glycerol")}
          strokeWidth="2"
          opacity="0.8"
          onClick={() => setSelected(selected === "glycerol" ? null : "glycerol")}
        />
        <rect
          x="68"
          y="48"
          width="54"
          height="214"
          rx="6"
          fill="url(#glyGrad)"
          stroke="#16a34a"
          strokeWidth="1.5"
          onClick={() => setSelected(selected === "glycerol" ? null : "glycerol")}
        />
        <text
          x="95"
          y="130"
          textAnchor="middle"
          fontSize="10"
          fill="#15803d"
          fontWeight="bold"
          transform="rotate(-90 95 130)"
        >
          Glycerol
        </text>
        {/* 3 OH groups */}
        {[75, 155, 235].map((y, i) => (
          <g key={i}>
            <text x="84" y={y + 4} textAnchor="middle" fontSize="9" fill="#15803d">
              OH
            </text>
          </g>
        ))}

        {/* Ester bonds */}
        {[75, 155, 235].map((y, i) => (
          <g key={i}>
            <rect
              x="122"
              y={y - 16}
              width="46"
              height="28"
              rx="4"
              fill={hlColor("ester")}
              stroke={hlStroke("ester")}
              strokeWidth="1.5"
              onClick={() => setSelected(selected === "ester" ? null : "ester")}
            />
            <text
              x="145"
              y={y + 4}
              textAnchor="middle"
              fontSize="9"
              fill="#7c3aed"
              fontWeight="bold"
              onClick={() => setSelected(selected === "ester" ? null : "ester")}
            >
              –O–C=O–
            </text>
          </g>
        ))}

        {/* Fatty acid chains */}
        {/* Chain 1: saturated (top) */}
        <g onClick={() => setSelected(selected === "saturated" ? null : "saturated")}>
          <rect
            x="168"
            y="50"
            width="270"
            height="45"
            rx="6"
            fill={hlColor("saturated")}
            stroke={hlStroke("saturated")}
            strokeWidth="2"
          />
          <rect
            x="174"
            y="56"
            width="258"
            height="33"
            rx="4"
            fill="#fef3c7"
            stroke="#d97706"
            strokeWidth="1.2"
          />
          <text x="195" y="68" fontSize="9" fill="#92400e" fontWeight="bold">
            Gesättigte Fettsäure
          </text>
          <text x="195" y="82" fontSize="9" fill="#92400e">
            –CH₂–CH₂–CH₂–CH₂–CH₂–CH₃
          </text>
          <text x="415" y="68" fontSize="8" fill="#d97706">
            C18:0
          </text>
        </g>

        {/* Chain 2: unsaturated (middle) */}
        <g onClick={() => setSelected(selected === "unsaturated" ? null : "unsaturated")}>
          <rect
            x="168"
            y="130"
            width="270"
            height="50"
            rx="6"
            fill={hlColor("unsaturated")}
            stroke={hlStroke("unsaturated")}
            strokeWidth="2"
          />
          <rect
            x="174"
            y="136"
            width="258"
            height="38"
            rx="4"
            fill="#ede9fe"
            stroke="#7c3aed"
            strokeWidth="1.2"
          />
          <text x="195" y="150" fontSize="9" fill="#5b21b6" fontWeight="bold">
            Ungesättigte Fettsäure
          </text>
          <text x="195" y="163" fontSize="9" fill="#5b21b6">
            –CH₂–CH=CH–CH₂–CH₂–CH₃
          </text>
          <text x="415" y="150" fontSize="8" fill="#7c3aed">
            C18:1
          </text>
          {/* Kink symbol */}
          <path d="M330,158 L340,150 L350,158" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="340" y="172" textAnchor="middle" fontSize="7" fill="#7c3aed">
            Knick (cis)
          </text>
        </g>

        {/* Chain 3: saturated (bottom) */}
        <g onClick={() => setSelected(selected === "saturated" ? null : "saturated")}>
          <rect
            x="168"
            y="215"
            width="270"
            height="45"
            rx="6"
            fill={hlColor("saturated")}
            stroke={hlStroke("saturated")}
            strokeWidth="2"
          />
          <rect
            x="174"
            y="221"
            width="258"
            height="33"
            rx="4"
            fill="#fef3c7"
            stroke="#d97706"
            strokeWidth="1.2"
          />
          <text x="195" y="233" fontSize="9" fill="#92400e" fontWeight="bold">
            Gesättigte Fettsäure
          </text>
          <text x="195" y="247" fontSize="9" fill="#92400e">
            –CH₂–CH₂–CH₂–CH₂–CH₂–CH₃
          </text>
          <text x="415" y="233" fontSize="8" fill="#d97706">
            C16:0
          </text>
        </g>

        {/* Connecting lines */}
        {[75, 155, 235].map((y, i) => (
          <line
            key={i}
            x1="122"
            y1={y}
            x2="168"
            y2={[73, 155, 238][i]}
            stroke="#6b7280"
            strokeWidth="1.5"
          />
        ))}

        {/* Legend */}
        <rect
          x="60"
          y="290"
          width="12"
          height="10"
          fill="#bbf7d0"
          stroke="#16a34a"
          strokeWidth="1"
        />
        <text x="78" y="299" fontSize="9" fill="#6b7280">
          Glycerol
        </text>
        <rect
          x="140"
          y="290"
          width="12"
          height="10"
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth="1"
        />
        <text x="158" y="299" fontSize="9" fill="#6b7280">
          gesättigt
        </text>
        <rect
          x="225"
          y="290"
          width="12"
          height="10"
          fill="#ede9fe"
          stroke="#7c3aed"
          strokeWidth="1"
        />
        <text x="243" y="299" fontSize="9" fill="#6b7280">
          ungesättigt
        </text>
      </svg>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {selected
            ? INFO[selected]
            : "Triglycerid = Glycerol + 3 Fettsäuren (verbunden durch Esterbindungen). Gesättigte Fettsäuren: gerade Ketten, fest. Ungesättigte: Knicke durch cis-Doppelbindungen, flüssig (Öle). Klicke auf eine Komponente."}
        </p>
      </div>
    </div>
  );
}
