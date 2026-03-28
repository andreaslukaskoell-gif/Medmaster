import { useState } from "react";

// Solve: 2x + 6 = 14
// Steps:
// 0: 2x + 6 = 14   (start)
// 1: 2x = 8        (subtract 6 from both sides)
// 2: x = 4         (divide both sides by 2)

type Step = 0 | 1 | 2;

type StepConfig = {
  left: string;
  right: string;
  action: string;
  leftVal: number; // "weight" of left side for visual balance
  rightVal: number; // "weight" of right side for visual balance
  highlight: string;
};

const STEPS: StepConfig[] = [
  {
    left: "2x + 6",
    right: "14",
    action: "Ausgangsgleichung",
    leftVal: 14,
    rightVal: 14,
    highlight: "",
  },
  {
    left: "2x",
    right: "8",
    action: "−6 auf beiden Seiten",
    leftVal: 8,
    rightVal: 8,
    highlight: "−6",
  },
  {
    left: "x",
    right: "4",
    action: "÷2 auf beiden Seiten",
    leftVal: 4,
    rightVal: 4,
    highlight: "÷2",
  },
];

export default function EquationBalance() {
  const [step, setStep] = useState<Step>(0);

  const W = 420;
  const H = 280;

  const cfg = STEPS[step];
  const isBalanced = cfg.leftVal === cfg.rightVal;

  // Balance beam
  const BEAM_CX = W / 2;
  const BEAM_Y = 140;
  const BEAM_W = 300;
  const FULCRUM_Y = BEAM_Y + 12;

  // Tilt based on balance (always balanced in correct math)
  const tilt = isBalanced ? 0 : 8;

  // Scale pan positions
  const leftPanX = BEAM_CX - BEAM_W / 2;
  const rightPanX = BEAM_CX + BEAM_W / 2;

  // Pan Y with tilt
  const leftPanY = BEAM_Y - tilt;
  const rightPanY = BEAM_Y + tilt;

  // Weight height proportional to value (max 50 = 14, min 20 = 4)
  const weightH = (val: number) => 18 + (val / 14) * 32;

  const stepColors = ["#64748b", "#2563eb", "#16a34a"];
  const color = stepColors[step];

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <h4 className="text-sm font-bold text-center text-gray-800 dark:text-gray-100 mb-1">
        Gleichgewicht der Gleichung — Waage-Modell
      </h4>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">
        Was auf einer Seite gemacht wird, muss auch auf der anderen gemacht werden
      </p>

      <svg role="img" viewBox={`0 0 ${W} ${H}`} className="w-full">
        <title>Gleichung lösen — Waage-Modell</title>

        {/* Equation display */}
        <rect
          x={10}
          y={8}
          width={W - 20}
          height={36}
          rx={6}
          fill={color}
          fillOpacity={0.1}
          stroke={color}
          strokeWidth={1.2}
        />
        <text x={W / 2} y={22} textAnchor="middle" fontSize={13} fill={color} fontWeight={800}>
          {cfg.left} = {cfg.right}
        </text>
        <text x={W / 2} y={36} textAnchor="middle" fontSize={9} fill="#64748b">
          Schritt {step + 1}/3: {cfg.action}
        </text>

        {/* Fulcrum triangle */}
        <polygon
          points={`${BEAM_CX},${FULCRUM_Y} ${BEAM_CX - 12},${FULCRUM_Y + 28} ${BEAM_CX + 12},${FULCRUM_Y + 28}`}
          fill="#94a3b8"
        />
        <rect x={BEAM_CX - 20} y={FULCRUM_Y + 28} width={40} height={6} rx={2} fill="#64748b" />

        {/* Balance beam */}
        <line
          x1={leftPanX - 10}
          y1={leftPanY}
          x2={rightPanX + 10}
          y2={rightPanY}
          stroke="#334155"
          strokeWidth={4}
          strokeLinecap="round"
        />

        {/* Left pan suspension */}
        <line
          x1={leftPanX}
          y1={leftPanY}
          x2={leftPanX - 20}
          y2={leftPanY + 25}
          stroke="#94a3b8"
          strokeWidth={1.2}
        />
        <line
          x1={leftPanX}
          y1={leftPanY}
          x2={leftPanX + 20}
          y2={leftPanY + 25}
          stroke="#94a3b8"
          strokeWidth={1.2}
        />
        {/* Left pan */}
        <rect x={leftPanX - 30} y={leftPanY + 25} width={60} height={5} rx={2} fill="#94a3b8" />

        {/* Right pan suspension */}
        <line
          x1={rightPanX}
          y1={rightPanY}
          x2={rightPanX - 20}
          y2={rightPanY + 25}
          stroke="#94a3b8"
          strokeWidth={1.2}
        />
        <line
          x1={rightPanX}
          y1={rightPanY}
          x2={rightPanX + 20}
          y2={rightPanY + 25}
          stroke="#94a3b8"
          strokeWidth={1.2}
        />
        {/* Right pan */}
        <rect x={rightPanX - 30} y={rightPanY + 25} width={60} height={5} rx={2} fill="#94a3b8" />

        {/* Left weight block */}
        {(() => {
          const wh = weightH(cfg.leftVal);
          const wy = leftPanY + 30 - wh;
          return (
            <g>
              <rect
                x={leftPanX - 28}
                y={wy}
                width={56}
                height={wh}
                rx={4}
                fill={color}
                fillOpacity={0.2}
                stroke={color}
                strokeWidth={1.5}
              />
              <text
                x={leftPanX}
                y={wy + wh / 2 + 5}
                textAnchor="middle"
                fontSize={13}
                fill={color}
                fontWeight={800}
              >
                {cfg.left}
              </text>
            </g>
          );
        })()}

        {/* Right weight block */}
        {(() => {
          const wh = weightH(cfg.rightVal);
          const wy = rightPanY + 30 - wh;
          return (
            <g>
              <rect
                x={rightPanX - 28}
                y={wy}
                width={56}
                height={wh}
                rx={4}
                fill="#16a34a"
                fillOpacity={0.2}
                stroke="#16a34a"
                strokeWidth={1.5}
              />
              <text
                x={rightPanX}
                y={wy + wh / 2 + 5}
                textAnchor="middle"
                fontSize={13}
                fill="#16a34a"
                fontWeight={800}
              >
                {cfg.right}
              </text>
            </g>
          );
        })()}

        {/* "Gleichgewicht" label */}
        <text
          x={W / 2}
          y={FULCRUM_Y + 50}
          textAnchor="middle"
          fontSize={10}
          fill="#16a34a"
          fontWeight={700}
        >
          ⚖ Gleichgewicht bleibt erhalten
        </text>

        {/* Action highlight */}
        {cfg.highlight && (
          <>
            <rect
              x={10}
              y={FULCRUM_Y + 58}
              width={W - 20}
              height={20}
              rx={4}
              fill="#fef3c7"
              stroke="#d97706"
              strokeWidth={1}
            />
            <text
              x={W / 2}
              y={FULCRUM_Y + 71}
              textAnchor="middle"
              fontSize={10}
              fill="#92400e"
              fontWeight={700}
            >
              Beide Seiten {cfg.highlight} → Gleichgewicht bleibt!
            </text>
          </>
        )}

        {/* Step navigator */}
        <g>
          {/* Prev */}
          {step > 0 && (
            <g onClick={() => setStep((step - 1) as Step)} style={{ cursor: "pointer" }}>
              <rect
                x={10}
                y={H - 36}
                width={80}
                height={28}
                rx={6}
                fill="#f1f5f9"
                stroke="#e2e8f0"
                strokeWidth={1}
              />
              <text
                x={50}
                y={H - 18}
                textAnchor="middle"
                fontSize={10}
                fill="#64748b"
                fontWeight={600}
              >
                ← Zurück
              </text>
            </g>
          )}

          {/* Step dots */}
          {([0, 1, 2] as Step[]).map((s) => (
            <circle
              key={s}
              cx={W / 2 - 16 + s * 16}
              cy={H - 22}
              r={5}
              fill={s === step ? color : "#e2e8f0"}
              onClick={() => setStep(s)}
              style={{ cursor: "pointer" }}
            />
          ))}

          {/* Next */}
          {step < 2 && (
            <g onClick={() => setStep((step + 1) as Step)} style={{ cursor: "pointer" }}>
              <rect
                x={W - 90}
                y={H - 36}
                width={80}
                height={28}
                rx={6}
                fill={color}
                stroke={color}
                strokeWidth={1}
              />
              <text
                x={W - 50}
                y={H - 18}
                textAnchor="middle"
                fontSize={10}
                fill="white"
                fontWeight={700}
              >
                Weiter →
              </text>
            </g>
          )}

          {step === 2 && (
            <>
              <rect
                x={W - 120}
                y={H - 36}
                width={110}
                height={28}
                rx={6}
                fill="#16a34a"
                stroke="#16a34a"
                strokeWidth={1}
              />
              <text
                x={W - 65}
                y={H - 18}
                textAnchor="middle"
                fontSize={10}
                fill="white"
                fontWeight={700}
              >
                ✓ x = 4 gelöst!
              </text>
            </>
          )}
        </g>

        {/* Steps overview */}
        <rect
          x={10}
          y={H - 64}
          width={W - 20}
          height={22}
          rx={4}
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth={0.8}
        />
        <text x={W / 2} y={H - 49} textAnchor="middle" fontSize={9} fill="#64748b">
          {step === 0
            ? "2x + 6 = 14"
            : step === 1
              ? "2x + 6 − 6 = 14 − 6  →  2x = 8"
              : "2x ÷ 2 = 8 ÷ 2  →  x = 4 ✓"}
        </text>
      </svg>
    </div>
  );
}
