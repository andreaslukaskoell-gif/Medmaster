export default function Thermodynamics() {
  const W = 400,
    H = 300;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md mx-auto">
      <title>Hauptsätze der Thermodynamik</title>
      <defs>
        <linearGradient id="thermo-hot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="thermo-cold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Hot reservoir */}
      <rect x={130} y={20} width={140} height={50} rx={8} fill="url(#thermo-hot)" />
      <text x={200} y={50} textAnchor="middle" fontSize={13} fill="white" fontWeight={700}>
        T₁ (heiß)
      </text>

      {/* Cold reservoir */}
      <rect x={130} y={220} width={140} height={50} rx={8} fill="url(#thermo-cold)" />
      <text x={200} y={250} textAnchor="middle" fontSize={13} fill="white" fontWeight={700}>
        T₂ (kalt)
      </text>

      {/* Engine */}
      <rect
        x={160}
        y={110}
        width={80}
        height={60}
        rx={6}
        fill="#f8fafc"
        stroke="#334155"
        strokeWidth={2}
      />
      <text x={200} y={138} textAnchor="middle" fontSize={12} fill="#334155" fontWeight={600}>
        Motor
      </text>
      <text x={200} y={155} textAnchor="middle" fontSize={10} fill="#64748b">
        η = 1 − T₂/T₁
      </text>

      {/* Q_H arrow (heat in) */}
      <line
        x1={200}
        y1={70}
        x2={200}
        y2={110}
        stroke="#ef4444"
        strokeWidth={2.5}
        markerEnd="url(#arrowRed)"
      />
      <text x={230} y={95} fontSize={12} fill="#ef4444" fontWeight={600}>
        Q₁
      </text>

      {/* Q_C arrow (heat out) */}
      <line
        x1={200}
        y1={170}
        x2={200}
        y2={220}
        stroke="#3b82f6"
        strokeWidth={2.5}
        markerEnd="url(#arrowBlue)"
      />
      <text x={230} y={200} fontSize={12} fill="#3b82f6" fontWeight={600}>
        Q₂
      </text>

      {/* W arrow (work out) */}
      <line
        x1={240}
        y1={140}
        x2={320}
        y2={140}
        stroke="#16a34a"
        strokeWidth={2.5}
        markerEnd="url(#arrowGreen)"
      />
      <text x={330} y={145} fontSize={12} fill="#16a34a" fontWeight={600}>
        W
      </text>

      {/* 1st law label */}
      <text x={340} y={170} fontSize={10} fill="#64748b">
        Q₁ = W + Q₂
      </text>
      <text x={340} y={185} fontSize={10} fill="#64748b">
        (1. Hauptsatz)
      </text>

      {/* 2nd law label */}
      <text x={20} y={140} fontSize={10} fill="#64748b">
        Wärme fließt
      </text>
      <text x={20} y={155} fontSize={10} fill="#64748b">
        nie von kalt
      </text>
      <text x={20} y={170} fontSize={10} fill="#64748b">
        → heiß (2. HS)
      </text>

      {/* Arrow markers */}
      <defs>
        <marker id="arrowRed" markerWidth={8} markerHeight={6} refX={8} refY={3} orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#ef4444" />
        </marker>
        <marker id="arrowBlue" markerWidth={8} markerHeight={6} refX={8} refY={3} orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#3b82f6" />
        </marker>
        <marker id="arrowGreen" markerWidth={8} markerHeight={6} refX={8} refY={3} orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#16a34a" />
        </marker>
      </defs>
    </svg>
  );
}
