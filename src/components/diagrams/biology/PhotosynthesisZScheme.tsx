import { useState } from "react";

const elements = [
  {
    id: "ps2",
    label: "PS II (P680)",
    detail:
      "Photosystem II absorbiert Licht (680 nm) und hebt Elektronen auf hohes Energieniveau. H₂O wird zu O₂ + H⁺ gespalten (Photolyse). Liefert die Elektronen für die gesamte Kette.",
  },
  {
    id: "etc",
    label: "Elektronentransportkette",
    detail:
      "Plastochinon (Pq), Cytochrom-b₆f-Komplex und Plastocyanin (Pc) transportieren die Elektronen von PS II zu PS I. Dabei wird ein H⁺-Gradient aufgebaut, der ATP-Synthase antreibt.",
  },
  {
    id: "ps1",
    label: "PS I (P700)",
    detail:
      "Photosystem I absorbiert Licht (700 nm) und hebt die Elektronen ein zweites Mal an. Über Ferredoxin (Fd) werden sie auf NADP⁺ übertragen: NADP⁺ + H⁺ + 2 e⁻ → NADPH.",
  },
  {
    id: "atp",
    label: "ATP-Synthase",
    detail:
      "Der H⁺-Gradient aus der Elektronentransportkette treibt die ATP-Synthase an (Chemiosmose). ADP + Pᵢ → ATP. Dieses ATP wird im Calvin-Zyklus für die CO₂-Fixierung verwendet.",
  },
];

export default function PhotosynthesisZScheme() {
  const [active, setActive] = useState<string | null>(null);
  const activeEl = elements.find((e) => e.id === active);

  const W = 440;
  const H = 280;
  const padL = 50;
  const padR = 30;
  const padT = 35;
  const padB = 30;

  // Key coordinates for the Z-scheme
  const ps2x = padL + 40;
  const ps2yLow = H - padB - 20;
  const ps2yHigh = padT + 30;

  const ps1x = W - padR - 40;
  const ps1yLow = H - padB - 60;
  const ps1yHigh = padT + 10;

  const etcMidX = (ps2x + ps1x) / 2;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Photosynthese — Z-Schema der Lichtreaktion
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf eine Komponente für Details.
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-lg mx-auto">
        <title>Z-Schema der Photosynthese — Lichtreaktion</title>

        {/* Energy axis */}
        <line
          x1={padL - 15}
          y1={padT}
          x2={padL - 15}
          y2={H - padB}
          stroke="#334155"
          strokeWidth={1.5}
        />
        <polygon
          points={`${padL - 19},${padT + 5} ${padL - 15},${padT - 3} ${padL - 11},${padT + 5}`}
          fill="#334155"
        />
        <text
          x={padL - 35}
          y={padT + (H - padB - padT) / 2}
          textAnchor="middle"
          fontSize={9}
          fill="#64748b"
          transform={`rotate(-90,${padL - 35},${padT + (H - padB - padT) / 2})`}
        >
          Redoxpotential (Energie)
        </text>

        {/* PS II: light absorption arrow (vertical, upward) */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "ps2" ? null : "ps2")}
          onMouseEnter={() => setActive("ps2")}
          onMouseLeave={() => setActive(null)}
        >
          <line x1={ps2x} y1={ps2yLow} x2={ps2x} y2={ps2yHigh} stroke="#eab308" strokeWidth={3} />
          <polygon
            points={`${ps2x - 5},${ps2yHigh + 8} ${ps2x},${ps2yHigh} ${ps2x + 5},${ps2yHigh + 8}`}
            fill="#eab308"
          />
          {/* Lightning bolt for light */}
          <text x={ps2x - 14} y={(ps2yLow + ps2yHigh) / 2} fontSize={14} fill="#eab308">
            hv
          </text>
          {/* PS II label */}
          <rect
            x={ps2x - 28}
            y={ps2yLow - 2}
            width={56}
            height={20}
            rx={4}
            fill={active === "ps2" ? "#dcfce7" : "#f0fdf4"}
            stroke="#16a34a"
            strokeWidth={active === "ps2" ? 2 : 1}
          />
          <text
            x={ps2x}
            y={ps2yLow + 13}
            textAnchor="middle"
            fontSize={9}
            fill="#166534"
            fontWeight={600}
          >
            PS II
          </text>
          <text x={ps2x} y={ps2yLow + 28} textAnchor="middle" fontSize={7} fill="#64748b">
            P680
          </text>
        </g>

        {/* H2O splitting */}
        <text
          x={ps2x}
          y={ps2yLow + 42}
          textAnchor="middle"
          fontSize={8}
          fill="#0ea5e9"
          fontWeight={600}
        >
          H₂O → ½O₂ + 2H⁺
        </text>

        {/* ETC: downhill electron transport from PS II* to PS I */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "etc" ? null : "etc")}
          onMouseEnter={() => setActive("etc")}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d={`M${ps2x},${ps2yHigh} Q${etcMidX},${ps2yHigh + 20} ${ps1x},${ps1yLow}`}
            fill="none"
            stroke={active === "etc" ? "#16a34a" : "#22c55e"}
            strokeWidth={2.5}
          />
          {/* Arrow at end */}
          <polygon
            points={`${ps1x - 4},${ps1yLow - 6} ${ps1x},${ps1yLow} ${ps1x + 4},${ps1yLow - 6}`}
            fill="#22c55e"
          />
          {/* Carrier labels along the curve */}
          <text x={ps2x + 35} y={ps2yHigh + 15} fontSize={7} fill="#16a34a" fontWeight={600}>
            Pq
          </text>
          <text x={etcMidX} y={ps2yHigh + 35} fontSize={7} fill="#16a34a" fontWeight={600}>
            Cyt b₆f
          </text>
          <text x={ps1x - 35} y={ps1yLow - 8} fontSize={7} fill="#16a34a" fontWeight={600}>
            Pc
          </text>
        </g>

        {/* ATP production annotation */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "atp" ? null : "atp")}
          onMouseEnter={() => setActive("atp")}
          onMouseLeave={() => setActive(null)}
        >
          <rect
            x={etcMidX - 28}
            y={ps2yHigh + 42}
            width={56}
            height={18}
            rx={4}
            fill={active === "atp" ? "#fef3c7" : "#fffbeb"}
            stroke="#f59e0b"
            strokeWidth={active === "atp" ? 2 : 1}
          />
          <text
            x={etcMidX}
            y={ps2yHigh + 55}
            textAnchor="middle"
            fontSize={8}
            fill="#92400e"
            fontWeight={600}
          >
            ATP-Synthase
          </text>
          <text x={etcMidX} y={ps2yHigh + 68} textAnchor="middle" fontSize={7} fill="#64748b">
            ADP + Pᵢ → ATP
          </text>
        </g>

        {/* PS I: second light absorption */}
        <g
          className="cursor-pointer"
          onClick={() => setActive(active === "ps1" ? null : "ps1")}
          onMouseEnter={() => setActive("ps1")}
          onMouseLeave={() => setActive(null)}
        >
          <line x1={ps1x} y1={ps1yLow} x2={ps1x} y2={ps1yHigh} stroke="#eab308" strokeWidth={3} />
          <polygon
            points={`${ps1x - 5},${ps1yHigh + 8} ${ps1x},${ps1yHigh} ${ps1x + 5},${ps1yHigh + 8}`}
            fill="#eab308"
          />
          <text x={ps1x - 14} y={(ps1yLow + ps1yHigh) / 2} fontSize={14} fill="#eab308">
            hv
          </text>
          {/* PS I label */}
          <rect
            x={ps1x - 28}
            y={ps1yLow - 2}
            width={56}
            height={20}
            rx={4}
            fill={active === "ps1" ? "#dcfce7" : "#f0fdf4"}
            stroke="#16a34a"
            strokeWidth={active === "ps1" ? 2 : 1}
          />
          <text
            x={ps1x}
            y={ps1yLow + 13}
            textAnchor="middle"
            fontSize={9}
            fill="#166534"
            fontWeight={600}
          >
            PS I
          </text>
          <text x={ps1x} y={ps1yLow + 28} textAnchor="middle" fontSize={7} fill="#64748b">
            P700
          </text>
        </g>

        {/* NADPH formation */}
        <text
          x={ps1x + 5}
          y={ps1yHigh + 20}
          textAnchor="middle"
          fontSize={7}
          fill="#16a34a"
          fontWeight={600}
        >
          Fd
        </text>
        <path
          d={`M${ps1x},${ps1yHigh} L${ps1x},${ps1yHigh + 12}`}
          stroke="#22c55e"
          strokeWidth={2}
        />
        <text
          x={ps1x}
          y={ps1yHigh + 38}
          textAnchor="middle"
          fontSize={8}
          fill="#7c3aed"
          fontWeight={600}
        >
          NADP⁺ + H⁺
        </text>
        <text
          x={ps1x}
          y={ps1yHigh + 50}
          textAnchor="middle"
          fontSize={8}
          fill="#7c3aed"
          fontWeight={600}
        >
          → NADPH
        </text>

        {/* Electron flow label */}
        <text x={W / 2} y={H - 5} textAnchor="middle" fontSize={8} fill="#94a3b8">
          Elektronenfluss: H₂O → PS II → ETC → PS I → NADPH
        </text>
      </svg>

      {activeEl && (
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            {activeEl.label}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeEl.detail}</p>
        </div>
      )}
    </div>
  );
}
