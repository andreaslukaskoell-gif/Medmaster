import { useState } from "react";
import { Mafs, Coordinates, Plot, Theme, Text, useMovablePoint } from "mafs";
import "mafs/core.css";

type FunctionExample = {
  id: string;
  label: string;
  color: string;
  detail: string;
};

const examples: FunctionExample[] = [
  {
    id: "quadratic",
    label: "Quadratische Funktion",
    color: "#2563eb",
    detail:
      "f(x) = a·x² — Verschiebe den Punkt, um den Parameter a zu ändern. Scheitelpunktform: f(x) = a(x−h)² + k.",
  },
  {
    id: "sine",
    label: "Sinusfunktion",
    color: "#dc2626",
    detail: "f(x) = A·sin(ωx) — Verschiebe den Punkt, um Amplitude A zu ändern. Periode T = 2π/ω.",
  },
  {
    id: "exponential",
    label: "Exponentialfunktion",
    color: "#059669",
    detail:
      "f(x) = eᵃˣ — Verschiebe den Punkt, um den Wachstumsfaktor a zu ändern. Basis e ≈ 2,718.",
  },
];

function QuadraticPlot() {
  const point = useMovablePoint([1, 1], { constrain: "vertical" });
  const a = point.y;

  return (
    <>
      <Plot.OfX y={(x) => a * x * x} color={Theme.blue} />
      {point.element}
      <Text x={2.5} y={3} size={14} color={Theme.blue}>
        a = {a.toFixed(2)}
      </Text>
      <Text x={2.5} y={2.3} size={12} color={Theme.blue}>
        f(x) = {a.toFixed(2)}·x²
      </Text>
    </>
  );
}

function SinePlot() {
  const point = useMovablePoint([0, 1.5], { constrain: "vertical" });
  const A = point.y;

  return (
    <>
      <Plot.OfX y={(x) => A * Math.sin(x)} color="#dc2626" />
      {point.element}
      <Text x={4} y={3} size={14} color="#dc2626">
        A = {A.toFixed(2)}
      </Text>
      <Text x={4} y={2.3} size={12} color="#dc2626">
        f(x) = {A.toFixed(2)}·sin(x)
      </Text>
    </>
  );
}

function ExponentialPlot() {
  const point = useMovablePoint([1, 0.5], { constrain: "vertical" });
  const a = point.y;

  return (
    <>
      <Plot.OfX y={(x) => Math.exp(a * x)} color="#059669" />
      {point.element}
      <Text x={-3} y={3} size={14} color="#059669">
        a = {a.toFixed(2)}
      </Text>
      <Text x={-3} y={2.3} size={12} color="#059669">
        f(x) = e^({a.toFixed(2)}·x)
      </Text>
    </>
  );
}

export default function InteractiveFunction() {
  const [activeId, setActiveId] = useState("quadratic");
  const activeExample = examples.find((e) => e.id === activeId)!;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        Interaktiver Funktionsplotter
      </h4>
      <p className="text-xs text-[var(--muted)]">
        Verschiebe den Punkt im Graphen, um Parameter live zu ändern.
      </p>

      {/* Function selector */}
      <div className="flex flex-wrap gap-2">
        {examples.map((e) => (
          <button
            key={e.id}
            onClick={() => setActiveId(e.id)}
            className="px-2.5 py-1 text-xs rounded-full border transition-all"
            style={{
              borderColor: activeId === e.id ? e.color : "#d1d5db",
              backgroundColor: activeId === e.id ? `${e.color}15` : "transparent",
              color: activeId === e.id ? e.color : "#6b7280",
              fontWeight: activeId === e.id ? 600 : 400,
            }}
          >
            {e.label}
          </button>
        ))}
      </div>

      {/* Interactive graph */}
      <div className="rounded-lg border border-gray-200 overflow-hidden bg-white">
        <Mafs viewBox={{ x: [-5, 5], y: [-2, 5] }} preserveAspectRatio={false} height={300}>
          <Coordinates.Cartesian
            xAxis={{ lines: 1, labels: (n) => (n % 2 === 0 ? String(n) : "") }}
            yAxis={{ lines: 1, labels: (n) => (n % 2 === 0 ? String(n) : "") }}
          />
          {activeId === "quadratic" && <QuadraticPlot />}
          {activeId === "sine" && <SinePlot />}
          {activeId === "exponential" && <ExponentialPlot />}
        </Mafs>
      </div>

      {/* Detail box */}
      <div
        className="rounded-lg p-3 border"
        style={{
          backgroundColor: `${activeExample.color}08`,
          borderColor: `${activeExample.color}30`,
        }}
      >
        <p className="text-sm font-semibold" style={{ color: activeExample.color }}>
          {activeExample.label}
        </p>
        <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{activeExample.detail}</p>
      </div>
    </div>
  );
}
