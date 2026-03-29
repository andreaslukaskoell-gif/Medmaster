import { useState } from "react";
import { Mafs, Coordinates, Plot, Text, useMovablePoint, Line } from "mafs";
import "mafs/core.css";

export default function InteractiveWave() {
  const [mode, setMode] = useState<"single" | "superposition">("single");

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Interaktive Wellenphysik
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Verschiebe die Punkte, um Amplitude und Frequenz live zu ändern.
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => setMode("single")}
          className="px-2.5 py-1 text-xs rounded-full border transition-all"
          style={{
            borderColor: mode === "single" ? "#7c3aed" : "#d1d5db",
            backgroundColor: mode === "single" ? "#ede9fe" : "transparent",
            color: mode === "single" ? "#7c3aed" : "#6b7280",
            fontWeight: mode === "single" ? 600 : 400,
          }}
        >
          Einzelne Welle
        </button>
        <button
          onClick={() => setMode("superposition")}
          className="px-2.5 py-1 text-xs rounded-full border transition-all"
          style={{
            borderColor: mode === "superposition" ? "#7c3aed" : "#d1d5db",
            backgroundColor: mode === "superposition" ? "#ede9fe" : "transparent",
            color: mode === "superposition" ? "#7c3aed" : "#6b7280",
            fontWeight: mode === "superposition" ? 600 : 400,
          }}
        >
          Superposition
        </button>
      </div>

      <div className="rounded-lg border border-gray-200 overflow-hidden bg-white">
        {mode === "single" ? <SingleWave /> : <SuperpositionWave />}
      </div>

      <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-lg p-3">
        {mode === "single" ? (
          <>
            <p className="text-sm font-semibold text-violet-700 dark:text-violet-300">
              Transversalwelle: y(x,t) = A · sin(kx − ωt)
            </p>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
              <strong>A</strong> = Amplitude (max. Auslenkung) · <strong>λ</strong> = Wellenlänge
              (Abstand zweier Maxima) · <strong>f</strong> = Frequenz (Schwingungen/s) ·{" "}
              <strong>v = λ · f</strong> (Ausbreitungsgeschwindigkeit)
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold text-violet-700 dark:text-violet-300">
              Superpositionsprinzip
            </p>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
              Überlagern sich zwei Wellen, addieren sich ihre Auslenkungen: y = y₁ + y₂.{" "}
              <strong>Konstruktive Interferenz</strong> (gleiche Phase → größere Amplitude) und{" "}
              <strong>destruktive Interferenz</strong> (Gegenphase → Auslöschung).
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function SingleWave() {
  // Amplitude control (y-axis)
  const ampPoint = useMovablePoint([-4, 1.5], { constrain: "vertical" });
  // Frequency control (x-axis position determines freq)
  const freqPoint = useMovablePoint([2, 0], { constrain: "horizontal" });

  const A = Math.max(0.2, Math.abs(ampPoint.y));
  const freq = Math.max(0.3, Math.min(3, freqPoint.x * 0.5));
  const wavelength = (2 * Math.PI) / freq;

  return (
    <Mafs viewBox={{ x: [-5, 10], y: [-3, 3] }} preserveAspectRatio={false} height={260}>
      <Coordinates.Cartesian
        xAxis={{ lines: Math.PI, labels: () => "" }}
        yAxis={{ lines: 1, labels: (n) => String(n) }}
      />

      {/* Wave */}
      <Plot.OfX y={(x) => A * Math.sin(freq * x)} color="#7c3aed" weight={2.5} />

      {/* Wavelength indicator */}
      <Line.Segment
        point1={[0, -A - 0.4]}
        point2={[wavelength, -A - 0.4]}
        color="#f97316"
        weight={2}
      />
      <Text x={wavelength / 2} y={-A - 0.7} size={13} color="#f97316">
        λ = {wavelength.toFixed(1)}
      </Text>

      {/* Amplitude indicator */}
      <Line.Segment point1={[-4.5, 0]} point2={[-4.5, A]} color="#dc2626" weight={2} />
      <Text x={-4.5} y={A + 0.4} size={13} color="#dc2626">
        A = {A.toFixed(2)}
      </Text>

      {/* Control points */}
      {ampPoint.element}
      {freqPoint.element}

      {/* Labels */}
      <Text x={7} y={2.3} size={14} color="#7c3aed">
        f = {((freq / (2 * Math.PI)) * 10).toFixed(1)} Hz
      </Text>
      <Text x={8} y={-2.5} size={11} color="#6b7280">
        x (m)
      </Text>
    </Mafs>
  );
}

function SuperpositionWave() {
  const amp1 = useMovablePoint([-4, 1], { constrain: "vertical" });
  const amp2 = useMovablePoint([-3, 0.7], { constrain: "vertical" });

  const A1 = amp1.y;
  const A2 = amp2.y;
  const f1 = 1;
  const f2 = 1.5;

  return (
    <Mafs viewBox={{ x: [-5, 10], y: [-3, 3] }} preserveAspectRatio={false} height={260}>
      <Coordinates.Cartesian
        xAxis={{ lines: Math.PI, labels: () => "" }}
        yAxis={{ lines: 1, labels: (n) => String(n) }}
      />

      {/* Wave 1 */}
      <Plot.OfX y={(x) => A1 * Math.sin(f1 * x)} color="#3b82f6" weight={1.5} opacity={0.5} />
      {/* Wave 2 */}
      <Plot.OfX y={(x) => A2 * Math.sin(f2 * x)} color="#ef4444" weight={1.5} opacity={0.5} />
      {/* Superposition */}
      <Plot.OfX
        y={(x) => A1 * Math.sin(f1 * x) + A2 * Math.sin(f2 * x)}
        color="#7c3aed"
        weight={2.5}
      />

      {/* Control points */}
      {amp1.element}
      {amp2.element}

      {/* Labels */}
      <Text x={7} y={2.5} size={12} color="#3b82f6">
        Welle 1: A₁={A1.toFixed(1)}
      </Text>
      <Text x={7} y={1.9} size={12} color="#ef4444">
        Welle 2: A₂={A2.toFixed(1)}
      </Text>
      <Text x={7} y={1.3} size={12} color="#7c3aed">
        Summe (lila)
      </Text>
    </Mafs>
  );
}
