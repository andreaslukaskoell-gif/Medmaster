export default function GeometricShapes() {
  return (
    <svg viewBox="0 0 400 260" className="w-full max-w-md mx-auto">
      <title>Geometrische Grundformen und Formeln</title>
      {/* Row 1: 2D shapes */}
      <text x={200} y={18} textAnchor="middle" fontSize={13} fill="#1e40af" fontWeight={700}>
        Flächen und Körper
      </text>

      {/* Square */}
      <rect
        x={20}
        y={35}
        width={60}
        height={60}
        fill="#dbeafe"
        stroke="#2563eb"
        strokeWidth={1.5}
      />
      <text x={50} y={72} textAnchor="middle" fontSize={9} fill="#2563eb" fontWeight={600}>
        a
      </text>
      <text x={50} y={110} textAnchor="middle" fontSize={9} fill="#334155">
        A = a²
      </text>

      {/* Circle */}
      <circle cx={145} cy={65} r={30} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
      <line
        x1={145}
        y1={65}
        x2={175}
        y2={65}
        stroke="#16a34a"
        strokeWidth={1}
        strokeDasharray="3,2"
      />
      <text x={160} y={60} fontSize={8} fill="#16a34a" fontWeight={600}>
        r
      </text>
      <text x={145} y={110} textAnchor="middle" fontSize={9} fill="#334155">
        A = πr²
      </text>

      {/* Triangle */}
      <polygon points="240,95 300,95 270,35" fill="#fef3c7" stroke="#d97706" strokeWidth={1.5} />
      <line
        x1={270}
        y1={35}
        x2={270}
        y2={95}
        stroke="#d97706"
        strokeWidth={1}
        strokeDasharray="3,2"
      />
      <text x={275} y={70} fontSize={8} fill="#d97706" fontWeight={600}>
        h
      </text>
      <text x={270} y={110} textAnchor="middle" fontSize={9} fill="#334155">
        A = ½·g·h
      </text>

      {/* Trapezoid */}
      <polygon
        points="330,95 390,95 380,45 340,45"
        fill="#f3e8ff"
        stroke="#7c3aed"
        strokeWidth={1.5}
      />
      <text x={360} y={75} textAnchor="middle" fontSize={8} fill="#7c3aed" fontWeight={600}>
        h
      </text>
      <text x={360} y={110} textAnchor="middle" fontSize={8} fill="#334155">
        A = ½(a+b)·h
      </text>

      {/* Divider */}
      <line x1={20} y1={125} x2={380} y2={125} stroke="#e2e8f0" strokeWidth={1} />

      {/* Row 2: 3D shapes */}
      {/* Cube */}
      <g transform="translate(30,140)">
        <polygon points="0,60 50,60 50,10 0,10" fill="#dbeafe" stroke="#2563eb" strokeWidth={1.2} />
        <polygon
          points="50,10 70,0 70,50 50,60"
          fill="#bfdbfe"
          stroke="#2563eb"
          strokeWidth={1.2}
        />
        <polygon points="0,10 20,0 70,0 50,10" fill="#93c5fd" stroke="#2563eb" strokeWidth={1.2} />
        <text x={35} y={95} textAnchor="middle" fontSize={9} fill="#334155">
          V = a³
        </text>
      </g>

      {/* Cylinder */}
      <g transform="translate(130,140)">
        <ellipse cx={30} cy={60} rx={30} ry={8} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.2} />
        <line x1={0} y1={60} x2={0} y2={10} stroke="#16a34a" strokeWidth={1.2} />
        <line x1={60} y1={60} x2={60} y2={10} stroke="#16a34a" strokeWidth={1.2} />
        <ellipse cx={30} cy={10} rx={30} ry={8} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.2} />
        <text x={30} y={95} textAnchor="middle" fontSize={9} fill="#334155">
          V = πr²h
        </text>
      </g>

      {/* Sphere */}
      <g transform="translate(240,140)">
        <circle cx={30} cy={35} r={30} fill="#fef3c7" stroke="#d97706" strokeWidth={1.2} />
        <ellipse
          cx={30}
          cy={35}
          rx={30}
          ry={10}
          fill="none"
          stroke="#d97706"
          strokeWidth={0.8}
          strokeDasharray="3,2"
        />
        <line
          x1={30}
          y1={35}
          x2={60}
          y2={35}
          stroke="#d97706"
          strokeWidth={1}
          strokeDasharray="3,2"
        />
        <text x={45} y={30} fontSize={8} fill="#d97706">
          r
        </text>
        <text x={30} y={95} textAnchor="middle" fontSize={9} fill="#334155">
          V = ⁴⁄₃πr³
        </text>
      </g>

      {/* Cone */}
      <g transform="translate(330,140)">
        <ellipse cx={30} cy={65} rx={25} ry={7} fill="#f3e8ff" stroke="#7c3aed" strokeWidth={1.2} />
        <line x1={5} y1={65} x2={30} y2={5} stroke="#7c3aed" strokeWidth={1.2} />
        <line x1={55} y1={65} x2={30} y2={5} stroke="#7c3aed" strokeWidth={1.2} />
        <text x={30} y={95} textAnchor="middle" fontSize={9} fill="#334155">
          V = ⅓πr²h
        </text>
      </g>
    </svg>
  );
}
