import DiagramSVG from "@/components/diagrams/DiagramSVG";

export default function DiagramDemo() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Diagramm-Vergleich: Wikimedia (anatomisch) vs. Handgemacht (interaktiv)
      </h1>

      {/* ===== HEART ===== */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-red-700 border-b border-red-200 pb-2">
          Herz-Anatomie
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Wikimedia */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                Wikimedia Commons
              </span>
              <span className="text-xs text-gray-500">CC BY-SA 3.0 · anatomisch korrekt</span>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white p-4">
              <img
                src="/images/wiki-heart-anatomy-de.svg"
                alt="Herz-Anatomie (Wikimedia)"
                className="w-full"
              />
            </div>
            <p className="text-xs text-gray-500">
              Professionelle medizinische Illustration. Anatomisch verifiziert, korrekte
              Proportionen, detaillierte Beschriftung. Keine Interaktivität.
            </p>
          </div>

          {/* Handgemacht */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                Handgemacht (React SVG)
              </span>
              <span className="text-xs text-gray-500">Interaktiv · MedAT-Fokus</span>
            </div>
            <DiagramSVG type="heart-anatomy-interactive" />
          </div>
        </div>
      </section>

      {/* ===== NEPHRON ===== */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-amber-700 border-b border-amber-200 pb-2">Nephron</h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                Wikimedia Commons
              </span>
              <span className="text-xs text-gray-500">CC BY 3.0 · Holly Fischer</span>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white p-4">
              <img
                src="/images/wiki-nephron-de.svg"
                alt="Nephron (Wikimedia)"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <p className="text-xs text-gray-500">
              Anatomisch korrekt: Glomerulus, Bowman-Kapsel, proximaler/distaler Tubulus,
              Henle-Schleife, Sammelrohr. Professionelle Qualität.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                Handgemacht (React SVG)
              </span>
              <span className="text-xs text-gray-500">Bestehendes Diagramm</span>
            </div>
            <DiagramSVG type="nephron" />
          </div>
        </div>
      </section>

      {/* ===== ANIMAL CELL ===== */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-teal-700 border-b border-teal-200 pb-2">
          Tierische Zelle
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                Wikimedia Commons
              </span>
              <span className="text-xs text-gray-500">
                Public Domain · Labels nicht editierbar (Pfade)
              </span>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white p-4">
              <img
                src="/images/wiki-animal-cell.svg"
                alt="Tierische Zelle (Wikimedia)"
                className="w-full"
              />
            </div>
            <p className="text-xs text-gray-500">
              Detaillierte Zellstruktur: Kern, Mitochondrien, ER, Golgi, Ribosomen, Lysosomen,
              Zytoskelett. Anatomisch korrekte Proportionen und Positionierung.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                Handgemacht (React SVG)
              </span>
              <span className="text-xs text-gray-500">Interaktiv · Klickbare Organellen</span>
            </div>
            <DiagramSVG type="animal-cell" />
          </div>
        </div>
      </section>

      {/* ===== MAFS DEMOS ===== */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-blue-700 border-b border-blue-200 pb-2">
          Mathe & Physik (mafs — nur interaktiv möglich)
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
              Interaktiver Funktionsplotter
            </span>
            <DiagramSVG type="interactive-function" />
          </div>
          <div className="space-y-2">
            <span className="px-2 py-0.5 bg-violet-100 text-violet-700 text-xs font-semibold rounded">
              Interaktive Wellenphysik
            </span>
            <DiagramSVG type="interactive-wave" />
          </div>
        </div>
      </section>

      {/* ===== VERDICT ===== */}
      <section className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Fazit</h2>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Wikimedia SVGs</strong> = anatomisch korrekt, professionelle Qualität, sofort
            verfügbar, keine Interaktivität. Ideal als Basisbild.
          </p>
          <p>
            <strong>Handgemachte React SVGs</strong> = interaktiv (Klick, Hover, Details),
            MedAT-Fokus integriert, aber anatomisch vereinfacht/schematisch.
          </p>
          <p>
            <strong>Beste Strategie:</strong> Wikimedia/FigureLabs für anatomische Korrektheit +
            React-Overlay für Interaktivität. Oder: Wikimedia als Hauptbild, handgemacht als
            ergänzendes interaktives Lernwerkzeug.
          </p>
        </div>
      </section>
    </div>
  );
}
