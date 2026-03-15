export default function SnelliusRefraction() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Snellius&apos;sches Brechungsgesetz
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Brechung und Totalreflexion beim Übergang zwischen zwei Medien.
      </p>

      <svg viewBox="0 0 520 400" className="w-full max-w-lg mx-auto">
        <title>Snelliussches Brechungsgesetz und Totalreflexion</title>

        <defs>
          <marker
            id="snellArrow"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5" fill="#eab308" />
          </marker>
          <marker
            id="snellArrowRef"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5" fill="#ef4444" />
          </marker>
          <marker
            id="snellArrowTot"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5" fill="#f97316" />
          </marker>
        </defs>

        {/* === LEFT SIDE: Normal refraction (air → glass) === */}
        <text x="150" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f766e">
          Brechung (Luft → Glas)
        </text>

        {/* Media */}
        <rect x="20" y="35" width="260" height="140" fill="#e0f2fe" opacity="0.4" />
        <rect x="20" y="175" width="260" height="140" fill="#bfdbfe" opacity="0.5" />
        {/* Boundary line */}
        <line x1="20" y1="175" x2="280" y2="175" stroke="#1e40af" strokeWidth="2" />

        {/* Medium labels */}
        <text x="35" y="55" fontSize="10" fill="#3b82f6">
          Luft (n&#x2081; = 1,0)
        </text>
        <text x="35" y="195" fontSize="10" fill="#1e40af">
          Glas (n&#x2082; = 1,5)
        </text>

        {/* Normal line (dashed) */}
        <line
          x1="150"
          y1="45"
          x2="150"
          y2="305"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="5 3"
        />
        <text x="155" y="55" fontSize="8" fill="#6b7280">
          Lot (Normale)
        </text>

        {/* Incident ray */}
        <line
          x1="70"
          y1="65"
          x2="150"
          y2="175"
          stroke="#eab308"
          strokeWidth="2.5"
          markerEnd="url(#snellArrow)"
        />

        {/* Refracted ray (bends toward normal in denser medium) */}
        <line
          x1="150"
          y1="175"
          x2="200"
          y2="295"
          stroke="#eab308"
          strokeWidth="2.5"
          markerEnd="url(#snellArrow)"
        />

        {/* Angle arcs */}
        {/* theta1 — incident angle */}
        <path d="M150,135 A40,40 0 0,0 124,160" fill="none" stroke="#dc2626" strokeWidth="1.5" />
        <text x="120" y="140" fontSize="12" fontWeight="bold" fill="#dc2626">
          &#x3b8;&#x2081;
        </text>
        <text x="90" y="155" fontSize="8" fill="#dc2626">
          Einfallswinkel
        </text>

        {/* theta2 — refraction angle (smaller) */}
        <path d="M150,215 A40,40 0 0,1 163,210" fill="none" stroke="#2563eb" strokeWidth="1.5" />
        <text x="168" y="215" fontSize="12" fontWeight="bold" fill="#2563eb">
          &#x3b8;&#x2082;
        </text>
        <text x="175" y="230" fontSize="8" fill="#2563eb">
          Brechungswinkel
        </text>

        {/* Formula */}
        <text x="150" y="330" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">
          n&#x2081; &#xb7; sin(&#x3b8;&#x2081;) = n&#x2082; &#xb7; sin(&#x3b8;&#x2082;)
        </text>

        {/* === RIGHT SIDE: Total internal reflection (glass → air) === */}
        <text x="400" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f766e">
          Totalreflexion
        </text>

        {/* Media — reversed (dense on top) */}
        <rect x="300" y="35" width="210" height="140" fill="#bfdbfe" opacity="0.5" />
        <rect x="300" y="175" width="210" height="140" fill="#e0f2fe" opacity="0.4" />
        {/* Boundary line */}
        <line x1="300" y1="175" x2="510" y2="175" stroke="#1e40af" strokeWidth="2" />

        {/* Medium labels */}
        <text x="315" y="55" fontSize="10" fill="#1e40af">
          Glas (n&#x2081; = 1,5)
        </text>
        <text x="315" y="195" fontSize="10" fill="#3b82f6">
          Luft (n&#x2082; = 1,0)
        </text>

        {/* Normal line */}
        <line
          x1="405"
          y1="45"
          x2="405"
          y2="305"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="5 3"
        />

        {/* Incident ray (from glass) at critical angle */}
        <line
          x1="340"
          y1="85"
          x2="405"
          y2="175"
          stroke="#f97316"
          strokeWidth="2.5"
          markerEnd="url(#snellArrowTot)"
        />

        {/* Reflected ray (total reflection — stays in glass) */}
        <line
          x1="405"
          y1="175"
          x2="470"
          y2="85"
          stroke="#ef4444"
          strokeWidth="2.5"
          markerEnd="url(#snellArrowRef)"
        />

        {/* Grazing refracted ray along boundary (at critical angle) */}
        <line
          x1="405"
          y1="175"
          x2="500"
          y2="175"
          stroke="#eab308"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.6"
        />

        {/* Critical angle arc */}
        <path d="M405,135 A40,40 0 0,0 379,158" fill="none" stroke="#f97316" strokeWidth="1.5" />
        <text x="365" y="133" fontSize="11" fontWeight="bold" fill="#f97316">
          &#x3b8;c
        </text>

        {/* Reflected angle arc */}
        <path d="M405,135 A40,40 0 0,1 431,158" fill="none" stroke="#ef4444" strokeWidth="1.5" />

        {/* Labels */}
        <text x="345" y="105" fontSize="9" fill="#f97316">
          Einfallender
        </text>
        <text x="345" y="115" fontSize="9" fill="#f97316">
          Strahl
        </text>
        <text x="445" y="105" fontSize="9" fill="#ef4444">
          Totalreflektierter
        </text>
        <text x="445" y="115" fontSize="9" fill="#ef4444">
          Strahl
        </text>

        {/* Critical angle formula */}
        <text x="405" y="255" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#f97316">
          Grenzwinkel &#x3b8;c:
        </text>
        <text x="405" y="272" textAnchor="middle" fontSize="11" fill="#c2410c">
          sin(&#x3b8;c) = n&#x2082; / n&#x2081;
        </text>

        {/* Condition */}
        <text x="405" y="295" textAnchor="middle" fontSize="9" fill="#6b7280" fontStyle="italic">
          Nur wenn n&#x2081; &gt; n&#x2082; (dichtes → dünnes Medium)
        </text>

        {/* Bottom explanation */}
        <text x="260" y="365" textAnchor="middle" fontSize="10" fill="#374151" fontStyle="italic">
          &#x3b8; &gt; &#x3b8;c → kein gebrochener Strahl, 100 % Reflexion
        </text>

        {/* Legend */}
        <line x1="100" y1="350" x2="120" y2="350" stroke="#eab308" strokeWidth="2" />
        <text x="125" y="354" fontSize="8" fill="#eab308">
          Lichtstrahl
        </text>
        <line x1="200" y1="350" x2="220" y2="350" stroke="#ef4444" strokeWidth="2" />
        <text x="225" y="354" fontSize="8" fill="#ef4444">
          Reflexion
        </text>
        <line
          x1="310"
          y1="350"
          x2="330"
          y2="350"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="5 3"
        />
        <text x="335" y="354" fontSize="8" fill="#6b7280">
          Lot
        </text>
      </svg>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-3">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Beim Übergang in ein dichteres Medium wird der Lichtstrahl zum Lot hin gebrochen. Bei
          umgekehrtem Übergang (dicht → dünn) tritt ab dem Grenzwinkel Totalreflexion auf —
          Anwendung u.a. in Glasfaserkabeln und Endoskopen.
        </p>
      </div>
    </div>
  );
}
