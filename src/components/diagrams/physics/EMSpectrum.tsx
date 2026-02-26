import { useState } from "react";

interface SpectrumBand {
  id: string;
  label: string;
  color: string;
  fill: string;
  width: number;
  freq: string;
  wavelength: string;
  detail: string;
}

const bands: SpectrumBand[] = [
  {
    id: "gamma",
    label: "Gamma",
    color: "#7c3aed",
    fill: "#8b5cf6",
    width: 40,
    freq: "> 10\u00B9\u2079 Hz",
    wavelength: "< 10 pm",
    detail:
      "Höchste Energie. Entsteht bei Kernzerfall. Anwendung: Strahlentherapie, Sterilisation.",
  },
  {
    id: "xray",
    label: "Röntgen",
    color: "#6366f1",
    fill: "#818cf8",
    width: 45,
    freq: "10\u00B9\u2076\u201310\u00B9\u2079 Hz",
    wavelength: "10 pm \u2013 10 nm",
    detail: "Durchdringt Weichteilgewebe. Anwendung: Röntgendiagnostik, CT.",
  },
  {
    id: "uv",
    label: "UV",
    color: "#3b82f6",
    fill: "#60a5fa",
    width: 40,
    freq: "10\u00B9\u2075\u201310\u00B9\u2076 Hz",
    wavelength: "10\u2013400 nm",
    detail: "UV-A, UV-B, UV-C. Kann DNA schädigen. Vitamin-D-Synthese in der Haut.",
  },
  {
    id: "visible",
    label: "Sichtbar",
    color: "#0f766e",
    fill: "url(#rainbowGrad)",
    width: 50,
    freq: "4\u201378 \u00D7 10\u00B9\u2074 Hz",
    wavelength: "380\u2013780 nm",
    detail: "Einziger für das Auge sichtbarer Bereich. Farben: Violett (380 nm) bis Rot (780 nm).",
  },
  {
    id: "ir",
    label: "Infrarot",
    color: "#ef4444",
    fill: "#fca5a5",
    width: 50,
    freq: "10\u00B9\u00B2\u201310\u00B9\u2074 Hz",
    wavelength: "780 nm \u2013 1 mm",
    detail: "Wärmestrahlung. Anwendung: Thermographie, Fernbedienungen, IR-Spektroskopie.",
  },
  {
    id: "micro",
    label: "Mikrowellen",
    color: "#f97316",
    fill: "#fdba74",
    width: 50,
    freq: "10\u2079\u201310\u00B9\u00B2 Hz",
    wavelength: "1 mm \u2013 1 m",
    detail: "Anwendung: Mikrowellenofen, Radar, Mobilfunk (GHz-Bereich).",
  },
  {
    id: "radio",
    label: "Radiowellen",
    color: "#eab308",
    fill: "#fde68a",
    width: 55,
    freq: "< 10\u2079 Hz",
    wavelength: "> 1 m",
    detail: "Längste Wellenlänge, niedrigste Energie. Anwendung: Radio, TV, MRT.",
  },
];

export default function EMSpectrum() {
  const [active, setActive] = useState<string | null>(null);
  const activeBand = bands.find((b) => b.id === active);

  const START_X = 30;
  const BAR_Y = 110;
  const BAR_H = 55;

  const bandPositions = bands.reduce<{ x: number; w: number }[]>((acc, b) => {
    const x = acc.length === 0 ? START_X : acc[acc.length - 1]!.x + acc[acc.length - 1]!.w;
    acc.push({ x, w: b.width });
    return acc;
  }, []);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Elektromagnetisches Spektrum
      </h4>
      <p className="text-xs text-muted">Klicke auf einen Bereich für Details.</p>
      <svg viewBox="0 0 460 300" className="w-full max-w-lg mx-auto">
        <title>Elektromagnetisches Spektrum</title>
        <defs>
          <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="20%" stopColor="#3b82f6" />
            <stop offset="40%" stopColor="#22c55e" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="80%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        <text x="230" y="22" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Elektromagnetisches Spektrum
        </text>

        {/* Energy / Frequency arrows */}
        <text x="30" y="50" fontSize="13" fill="#7c3aed" fontWeight="bold">
          Hohe Energie
        </text>
        <text x="370" y="50" fontSize="13" fill="#eab308" fontWeight="bold">
          Niedrige Energie
        </text>
        <line x1="100" y1="47" x2="365" y2="47" stroke="#6b7280" strokeWidth="1" />
        <polygon points="100,44 100,50 93,47" fill="#6b7280" />
        <polygon points="365,44 365,50 372,47" fill="#6b7280" />

        {/* Frequency label */}
        <text x="30" y="70" fontSize="7" fill="#6b7280">
          Frequenz (Hz):
        </text>
        <text x="30" y="82" fontSize="7" fill="#7c3aed">
          10\u00B2\u2070
        </text>
        <text x="390" y="82" fontSize="7" fill="#eab308">
          10\u00B3
        </text>
        <line x1="48" y1="79" x2="388" y2="79" stroke="#d1d5db" strokeWidth="0.5" />

        {/* Wavelength label */}
        <text x="30" y="96" fontSize="7" fill="#6b7280">
          Wellenlänge:
        </text>
        <text x="100" y="96" fontSize="7" fill="#7c3aed">
          kurz \u2190
        </text>
        <text x="360" y="96" fontSize="7" fill="#eab308">
          \u2192 lang
        </text>

        {/* Spectrum bands */}
        {bands.map((b, i) => {
          const pos = bandPositions[i];
          const isActive = active === b.id;

          return (
            <g
              key={b.id}
              className="cursor-pointer"
              onClick={() => setActive(isActive ? null : b.id)}
              onMouseEnter={() => setActive(b.id)}
              onMouseLeave={() => setActive(null)}
            >
              <rect
                x={pos.x}
                y={BAR_Y}
                width={pos.w}
                height={BAR_H}
                fill={b.fill}
                stroke={isActive ? "#115e59" : "none"}
                strokeWidth={isActive ? 2.5 : 0}
                rx="2"
                opacity={isActive ? 1 : 0.85}
              />
              <text
                x={pos.x + pos.w / 2}
                y={BAR_Y + BAR_H / 2 + 3}
                textAnchor="middle"
                fontSize="7"
                fill={b.id === "visible" ? "#fff" : "#374151"}
                fontWeight="bold"
                transform={
                  pos.w < 45 ? `rotate(-90, ${pos.x + pos.w / 2}, ${BAR_Y + BAR_H / 2 + 3})` : ""
                }
              >
                {b.label}
              </text>
            </g>
          );
        })}

        {/* Visible light expanded view */}
        <text x="230" y="190" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          Sichtbares Licht (380 - 780 nm)
        </text>

        {/* Rainbow bar */}
        <defs>
          <linearGradient id="visibleExpanded" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="15%" stopColor="#3b82f6" />
            <stop offset="30%" stopColor="#06b6d4" />
            <stop offset="45%" stopColor="#22c55e" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="80%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <rect
          x="80"
          y="198"
          width="300"
          height="25"
          rx="4"
          fill="url(#visibleExpanded)"
          stroke="#374151"
          strokeWidth="1"
        />

        {/* Visible labels */}
        {[
          { label: "Violett", x: 95, nm: "380" },
          { label: "Blau", x: 140, nm: "450" },
          { label: "Gruen", x: 200, nm: "530" },
          { label: "Gelb", x: 255, nm: "580" },
          { label: "Orange", x: 310, nm: "620" },
          { label: "Rot", x: 360, nm: "780" },
        ].map((c) => (
          <g key={c.label}>
            <text x={c.x} y="216" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="bold">
              {c.label}
            </text>
          </g>
        ))}
        <text x="80" y="238" fontSize="7" fill="#7c3aed">
          380 nm
        </text>
        <text x="380" y="238" textAnchor="end" fontSize="7" fill="#ef4444">
          780 nm
        </text>

        {/* Connecting lines from visible band to expanded */}
        {(() => {
          const visBand = bandPositions[3];
          return (
            <>
              <line
                x1={visBand.x}
                y1={BAR_Y + BAR_H}
                x2={80}
                y2={198}
                stroke="#d1d5db"
                strokeWidth="0.8"
                strokeDasharray="3 2"
              />
              <line
                x1={visBand.x + visBand.w}
                y1={BAR_Y + BAR_H}
                x2={380}
                y2={198}
                stroke="#d1d5db"
                strokeWidth="0.8"
                strokeDasharray="3 2"
              />
            </>
          );
        })()}

        {/* Wave equation */}
        <rect
          x="120"
          y="252"
          width="220"
          height="35"
          rx="6"
          fill="#f0fdfa"
          stroke="#99f6e4"
          strokeWidth="1"
        />
        <text x="230" y="268" textAnchor="middle" fontSize="13" fill="#0f766e" fontWeight="bold">
          c = \u03BB \u00D7 f
        </text>
        <text x="230" y="280" textAnchor="middle" fontSize="7" fill="#6b7280">
          Lichtgeschwindigkeit c = 3 \u00D7 10\u2078 m/s
        </text>
      </svg>

      {activeBand && (
        <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
          <p className="text-sm font-semibold" style={{ color: activeBand.color }}>
            {activeBand.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeBand.detail}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Frequenz: {activeBand.freq} | Wellenlänge: {activeBand.wavelength}
          </p>
        </div>
      )}
    </div>
  );
}
