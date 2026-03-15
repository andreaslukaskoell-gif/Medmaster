import { useState } from "react";

type JointType = {
  id: string;
  label: string;
  example: string;
  axes: string;
  movements: string[];
  x: number;
  y: number;
  color: string;
  detail: string;
};

const joints: JointType[] = [
  {
    id: "kugel",
    label: "Kugelgelenk",
    example: "Schulter, Hüfte",
    axes: "3-achsig (multiaxial)",
    movements: ["Flexion/Extension", "Abduktion/Adduktion", "Rotation", "Zirkumduktion"],
    x: 50,
    y: 40,
    color: "#dc2626",
    detail:
      "Das Kugelgelenk (Articulatio spheroidea) ist das beweglichste Gelenk. Der kugelförmige Gelenkkopf sitzt in einer Pfanne. Beispiele: Schultergelenk (sehr beweglich, wenig stabil → häufige Luxation), Hüftgelenk (tiefer Kopf → stabiler). Bewegungen in allen 3 Raumachsen möglich.",
  },
  {
    id: "scharnier",
    label: "Scharniergelenk",
    example: "Ellenbogen, Knie (vereinf.)",
    axes: "1-achsig (uniaxial)",
    movements: ["Flexion", "Extension"],
    x: 230,
    y: 40,
    color: "#2563eb",
    detail:
      "Das Scharniergelenk (Articulatio ginglymus) erlaubt Bewegung nur in einer Ebene (Flexion/Extension). Gelenkkopf und -pfanne sind zylindrisch geformt. Beispiele: Humeroulnargelenk (Ellenbogenbeugung), proximales/distales Interphalangealgelenk (Fingergelenke), oberes Sprunggelenk.",
  },
  {
    id: "sattel",
    label: "Sattelgelenk",
    example: "Daumensattelgelenk",
    axes: "2-achsig (biaxial)",
    movements: ["Flexion/Extension", "Abduktion/Adduktion", "begrenzte Rotation"],
    x: 50,
    y: 190,
    color: "#059669",
    detail:
      "Beim Sattelgelenk (Articulatio sellaris) haben beide Gelenkflächen eine sattelförmige, konkav-konvexe Form. Bewegungen in zwei Achsen möglich. Klassisches Beispiel: Carpometacarpalgelenk des Daumens (ermöglicht Opposition des Daumens). Klinisch wichtig: Rhizarthrose (Arthrose des Daumensattelgelenks).",
  },
  {
    id: "dreh",
    label: "Drehgelenk",
    example: "Atlas-Axis (C1-C2)",
    axes: "1-achsig (uniaxial)",
    movements: ["Rotation (Pronation/Supination)"],
    x: 230,
    y: 190,
    color: "#7c3aed",
    detail:
      "Das Drehgelenk (Articulatio trochoidea) erlaubt Rotation um die Längsachse. Der zylindrische Gelenkzapfen dreht sich in einem Ring. Beispiele: Atlantoaxialgelenk (Kopfrotation 'Nein'-Bewegung), proximales und distales Radioulnargelenk (Pronation/Supination des Unterarms).",
  },
  {
    id: "ei",
    label: "Eigelenk",
    example: "Handgelenk, Atlantookzipital",
    axes: "2-achsig (biaxial)",
    movements: ["Flexion/Extension", "Abduktion/Adduktion"],
    x: 50,
    y: 340,
    color: "#d97706",
    detail:
      "Das Eigelenk (Articulatio ellipsoidea) hat einen ellipsoiden Gelenkkopf und eine entsprechende Pfanne. Bewegungen in zwei Achsen, keine Rotation. Beispiele: Radiokarpalgelenk (Handgelenk), Atlantookzipitalgelenk (Kopfnicken 'Ja'-Bewegung), Metakarpophalangealgelenke.",
  },
  {
    id: "plan",
    label: "Planes Gelenk",
    example: "Zwischenwirbelgelenke",
    axes: "geringe Gleitbewegung",
    movements: ["Gleiten (Arthrodie)"],
    x: 230,
    y: 340,
    color: "#0891b2",
    detail:
      "Das plane Gelenk (Articulatio plana / Amphiarthrose) hat nahezu ebene Gelenkflächen. Nur minimale Gleitbewegungen möglich. Beispiele: Facettengelenke der Wirbelsäule (Processus articulares), Acromioclaviculargelenk, Articulationes intercarpales. Klinisch: Facettensyndrom bei Arthrose.",
  },
];

// Simple geometric representations
function JointShape({ joint, isActive }: { joint: JointType; isActive: boolean }) {
  const cx = 80;
  const cy = 70;
  const c = joint.color;
  const fill = isActive ? c : "white";

  switch (joint.id) {
    case "kugel":
      return (
        <g>
          {/* Socket */}
          <path
            d={`M ${cx - 30} ${cy + 20} A 30 30 0 0 1 ${cx + 30} ${cy + 20}`}
            fill={isActive ? "#fca5a5" : "#fee2e2"}
            stroke={c}
            strokeWidth={2}
          />
          {/* Ball */}
          <circle cx={cx} cy={cy - 5} r={22} fill={fill} stroke={c} strokeWidth={2} />
          <circle cx={cx - 7} cy={cy - 12} r={5} fill={c} opacity={0.3} />
        </g>
      );
    case "scharnier":
      return (
        <g>
          {/* Upper bone */}
          <rect
            x={cx - 15}
            y={cy - 40}
            width={30}
            height={28}
            rx={4}
            fill={isActive ? "#93c5fd" : "#eff6ff"}
            stroke={c}
            strokeWidth={1.5}
          />
          {/* Cylinder joint */}
          <ellipse cx={cx} cy={cy - 12} rx={15} ry={8} fill={fill} stroke={c} strokeWidth={2} />
          {/* Lower bone */}
          <rect
            x={cx - 15}
            y={cy - 4}
            width={30}
            height={28}
            rx={4}
            fill={isActive ? "#93c5fd" : "#eff6ff"}
            stroke={c}
            strokeWidth={1.5}
          />
          {/* Axis indicator */}
          <line
            x1={cx - 20}
            y1={cy - 12}
            x2={cx + 20}
            y2={cy - 12}
            stroke={c}
            strokeWidth={1}
            strokeDasharray="3,2"
          />
        </g>
      );
    case "sattel":
      return (
        <g>
          {/* Saddle surface 1 */}
          <path
            d={`M ${cx - 28} ${cy - 10} Q ${cx} ${cy - 30} ${cx + 28} ${cy - 10} Q ${cx} ${cy + 10} ${cx - 28} ${cy - 10}`}
            fill={isActive ? "#6ee7b7" : "#d1fae5"}
            stroke={c}
            strokeWidth={1.5}
          />
          {/* Saddle surface 2 (rotated) */}
          <path
            d={`M ${cx - 20} ${cy + 15} Q ${cx} ${cy - 5} ${cx + 20} ${cy + 15} Q ${cx} ${cy + 35} ${cx - 20} ${cy + 15}`}
            fill={fill}
            stroke={c}
            strokeWidth={2}
          />
        </g>
      );
    case "dreh":
      return (
        <g>
          {/* Ring */}
          <circle cx={cx} cy={cy} r={26} fill="none" stroke={c} strokeWidth={6} opacity={0.3} />
          <circle cx={cx} cy={cy} r={26} fill="none" stroke={c} strokeWidth={2} />
          {/* Peg */}
          <circle cx={cx} cy={cy} r={12} fill={fill} stroke={c} strokeWidth={2} />
          {/* Rotation arrow */}
          <path
            d={`M ${cx + 14} ${cy - 10} A 16 16 0 0 1 ${cx + 14} ${cy + 10}`}
            fill="none"
            stroke={c}
            strokeWidth={1.5}
            markerEnd={`url(#dreh-arr-${joint.id})`}
          />
          <defs>
            <marker
              id={`dreh-arr-${joint.id}`}
              markerWidth={6}
              markerHeight={6}
              refX={5}
              refY={3}
              orient="auto"
            >
              <path d="M0,0 L0,6 L6,3 z" fill={c} />
            </marker>
          </defs>
        </g>
      );
    case "ei":
      return (
        <g>
          {/* Socket (elliptical) */}
          <path
            d={`M ${cx - 28} ${cy + 15} A 28 15 0 0 1 ${cx + 28} ${cy + 15}`}
            fill={isActive ? "#fde68a" : "#fef9c3"}
            stroke={c}
            strokeWidth={2}
          />
          {/* Ellipsoid head */}
          <ellipse cx={cx} cy={cy - 5} rx={22} ry={16} fill={fill} stroke={c} strokeWidth={2} />
        </g>
      );
    case "plan":
      return (
        <g>
          {/* Upper flat surface */}
          <rect
            x={cx - 30}
            y={cy - 28}
            width={60}
            height={16}
            rx={2}
            fill={isActive ? "#7dd3fc" : "#e0f2fe"}
            stroke={c}
            strokeWidth={1.5}
          />
          {/* Lower flat surface */}
          <rect
            x={cx - 30}
            y={cy - 4}
            width={60}
            height={16}
            rx={2}
            fill={fill}
            stroke={c}
            strokeWidth={2}
          />
          {/* Glide arrows */}
          <line
            x1={cx - 10}
            y1={cy - 6}
            x2={cx + 10}
            y2={cy - 6}
            stroke={c}
            strokeWidth={1}
            markerEnd={`url(#plan-arr-${joint.id})`}
          />
          <defs>
            <marker
              id={`plan-arr-${joint.id}`}
              markerWidth={6}
              markerHeight={6}
              refX={5}
              refY={3}
              orient="auto"
            >
              <path d="M0,0 L0,6 L6,3 z" fill={c} />
            </marker>
          </defs>
        </g>
      );
    default:
      return null;
  }
}

export default function JointTypes() {
  const [active, setActive] = useState<string | null>(null);
  const activeJoint = joints.find((j) => j.id === active);

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Gelenktypen — Synovialgelenke
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Klicke auf ein Gelenk für Details zu Bewegungsachsen und Beispielen.
      </p>

      <div className="grid grid-cols-2 gap-2">
        {joints.map((joint) => {
          const isAct = active === joint.id;
          return (
            <div
              key={joint.id}
              className="cursor-pointer rounded-lg border-2 p-1 transition-all"
              style={{
                borderColor: isAct ? joint.color : "#e5e7eb",
                backgroundColor: isAct ? `${joint.color}10` : "white",
              }}
              onClick={() => setActive(active === joint.id ? null : joint.id)}
              onMouseEnter={() => setActive(joint.id)}
              onMouseLeave={() => setActive(null)}
            >
              <svg viewBox="0 0 160 130" className="w-full">
                <title>{joint.label}</title>
                <JointShape joint={joint} isActive={isAct} />
                <text
                  x={80}
                  y={108}
                  textAnchor="middle"
                  fontSize={9}
                  fill={isAct ? joint.color : "#374151"}
                  fontWeight={700}
                >
                  {joint.label}
                </text>
                <text x={80} y={120} textAnchor="middle" fontSize={7} fill="#6b7280">
                  {joint.axes}
                </text>
              </svg>
            </div>
          );
        })}
      </div>

      {activeJoint && (
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
          <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">
            {activeJoint.label}
          </p>
          <p className="text-xs text-orange-600 dark:text-orange-400 mb-1">
            Beispiel: {activeJoint.example} · {activeJoint.axes}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
            Bewegungen: {activeJoint.movements.join(", ")}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300">{activeJoint.detail}</p>
        </div>
      )}
    </div>
  );
}
