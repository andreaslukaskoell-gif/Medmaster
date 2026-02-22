import { useState } from "react";
import { Users, BookOpen, Dumbbell, Timer } from "lucide-react";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useKFFStore } from "@/stores/kffStore";
import SozialesEntscheidenLernen from "./SozialesEntscheidenLernen";
import SozialesEntscheidenUeben from "./SozialesEntscheidenUeben";
import SozialesEntscheidenSimulation from "./SozialesEntscheidenSimulation";

type TabKey = "lernen" | "ueben" | "simulation";

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "lernen", label: "Lernen", icon: BookOpen },
  { key: "ueben", label: "Üben", icon: Dumbbell },
  { key: "simulation", label: "Simulation", icon: Timer },
];

export default function SozialesEntscheidenPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("lernen");
  const progress = useKFFStore((s) => s.progress["soziales-entscheiden"]);
  const pct =
    progress && progress.total > 0 ? Math.round((progress.correct / progress.total) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav
        items={[
          { label: "Dashboard", href: "/" },
          { label: "KFF Academy", href: "/kff" },
          { label: "Soziales Entscheiden" },
        ]}
      />

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center shrink-0">
          <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Soziales Entscheiden
          </h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-sm text-muted">SEK</span>
            {progress && progress.total > 0 && (
              <>
                <span className="text-muted">&middot;</span>
                <span className="text-sm text-muted">
                  {pct}% richtig ({progress.correct}/{progress.total})
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm"
                  : "text-muted hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <TabIcon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {activeTab === "lernen" && <SozialesEntscheidenLernen />}
      {activeTab === "ueben" && <SozialesEntscheidenUeben />}
      {activeTab === "simulation" && <SozialesEntscheidenSimulation />}
    </div>
  );
}
