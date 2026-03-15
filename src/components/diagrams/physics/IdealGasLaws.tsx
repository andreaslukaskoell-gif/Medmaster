export default function IdealGasLaws() {
  // Boyle-Mariotte: P = k/V (hyperbola) points
  const boylebPoints: string[] = [];
  for (let v = 15; v <= 110; v += 2) {
    const p = 1200 / v;
    boylebPoints.push(`${v + 30},${120 - p}`);
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Ideale Gasgesetze</h4>
      <p className="text-xs text-[var(--muted)]">
        Boyle-Mariotte, Gay-Lussac und Charles — die drei Spezialfälle der idealen Gasgleichung.
      </p>

      <svg viewBox="0 0 500 200" className="w-full max-w-lg mx-auto">
        <title>Ideale Gasgesetze — Boyle-Mariotte, Gay-Lussac, Charles</title>

        {/* ── Chart 1: Boyle-Mariotte (P vs V, T=const) ── */}
        <g transform="translate(10,10)">
          {/* Background */}
          <rect
            x="20"
            y="5"
            width="130"
            height="130"
            rx="4"
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="1"
          />

          {/* Title */}
          <text x="85" y="18" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">
            Boyle-Mariotte
          </text>

          {/* Axes */}
          <line x1="35" y1="120" x2="140" y2="120" stroke="#374151" strokeWidth="1.5" />
          <line x1="35" y1="120" x2="35" y2="25" stroke="#374151" strokeWidth="1.5" />

          {/* Axis labels */}
          <text x="90" y="135" textAnchor="middle" fontSize="9" fill="#374151">
            V
          </text>
          <text x="28" y="30" textAnchor="middle" fontSize="9" fill="#374151">
            P
          </text>

          {/* Hyperbola curve */}
          <polyline points={boylebPoints.join(" ")} fill="none" stroke="#0d9488" strokeWidth="2" />

          {/* T = const label */}
          <text x="110" y="65" fontSize="8" fill="#6b7280" fontStyle="italic">
            T = const
          </text>

          {/* Law */}
          <text x="85" y="148" textAnchor="middle" fontSize="9" fill="#0f766e" fontWeight="bold">
            P · V = const
          </text>
        </g>

        {/* ── Chart 2: Gay-Lussac (P vs T, V=const) ── */}
        <g transform="translate(175,10)">
          {/* Background */}
          <rect
            x="20"
            y="5"
            width="130"
            height="130"
            rx="4"
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="1"
          />

          {/* Title */}
          <text x="85" y="18" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">
            Gay-Lussac
          </text>

          {/* Axes */}
          <line x1="35" y1="120" x2="140" y2="120" stroke="#374151" strokeWidth="1.5" />
          <line x1="35" y1="120" x2="35" y2="25" stroke="#374151" strokeWidth="1.5" />

          {/* Axis labels */}
          <text x="90" y="135" textAnchor="middle" fontSize="9" fill="#374151">
            T
          </text>
          <text x="28" y="30" textAnchor="middle" fontSize="9" fill="#374151">
            P
          </text>

          {/* Linear line */}
          <line x1="35" y1="110" x2="135" y2="35" stroke="#0d9488" strokeWidth="2" />

          {/* V = const label */}
          <text x="110" y="65" fontSize="8" fill="#6b7280" fontStyle="italic">
            V = const
          </text>

          {/* Law */}
          <text x="85" y="148" textAnchor="middle" fontSize="9" fill="#0f766e" fontWeight="bold">
            P / T = const
          </text>
        </g>

        {/* ── Chart 3: Charles (V vs T, P=const) ── */}
        <g transform="translate(340,10)">
          {/* Background */}
          <rect
            x="20"
            y="5"
            width="130"
            height="130"
            rx="4"
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="1"
          />

          {/* Title */}
          <text x="85" y="18" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="bold">
            Charles
          </text>

          {/* Axes */}
          <line x1="35" y1="120" x2="140" y2="120" stroke="#374151" strokeWidth="1.5" />
          <line x1="35" y1="120" x2="35" y2="25" stroke="#374151" strokeWidth="1.5" />

          {/* Axis labels */}
          <text x="90" y="135" textAnchor="middle" fontSize="9" fill="#374151">
            T
          </text>
          <text x="28" y="30" textAnchor="middle" fontSize="9" fill="#374151">
            V
          </text>

          {/* Linear line */}
          <line x1="35" y1="110" x2="135" y2="35" stroke="#0d9488" strokeWidth="2" />

          {/* P = const label */}
          <text x="110" y="65" fontSize="8" fill="#6b7280" fontStyle="italic">
            P = const
          </text>

          {/* Law */}
          <text x="85" y="148" textAnchor="middle" fontSize="9" fill="#0f766e" fontWeight="bold">
            V / T = const
          </text>
        </g>

        {/* Combined law at bottom */}
        <rect
          x="120"
          y="168"
          width="260"
          height="26"
          rx="6"
          fill="#f0fdfa"
          stroke="#99f6e4"
          strokeWidth="1"
        />
        <text x="250" y="185" textAnchor="middle" fontSize="12" fill="#0f766e" fontWeight="bold">
          Ideale Gasgleichung: P · V = n · R · T
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Die drei Gasgesetze sind Spezialfälle der idealen Gasgleichung (P·V = n·R·T). Jedes
          beschreibt das Verhalten bei einer konstant gehaltenen Zustandsgröße: Boyle-Mariotte bei
          konstanter Temperatur, Gay-Lussac bei konstantem Volumen, Charles bei konstantem Druck.
        </p>
      </div>
    </div>
  );
}
