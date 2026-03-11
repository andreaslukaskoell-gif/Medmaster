import { useState } from "react";
import { Eye, BookOpen, Dumbbell, Timer } from "lucide-react";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useKFFStore } from "@/stores/kffStore";
import EmotionenErkennenLernen from "./EmotionenErkennenLernen";
import EmotionenErkennenUeben from "./EmotionenErkennenUeben";
import EmotionenErkennenSimulation from "./EmotionenErkennenSimulation";

type TabKey = "lernen" | "ueben" | "simulation";

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "lernen", label: "Lernen", icon: BookOpen },
  { key: "ueben", label: "Üben", icon: Dumbbell },
  { key: "simulation", label: "Simulation", icon: Timer },
];

export default function EmotionenErkennenPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("lernen");
  const progress = useKFFStore((s) => s.progress["emotionen-erkennen"]);
  const pct =
    progress && progress.total > 0 ? Math.round((progress.correct / progress.total) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav
        items={[
          { label: "Dashboard", href: "/" },
          { label: "KFF Academy", href: "/kff" },
          { label: "Emotionen erkennen" },
        ]}
      />

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center shrink-0">
          <Eye className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Emotionen erkennen</h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-sm text-[var(--muted)]">SEK</span>
            {progress && progress.total > 0 && (
              <>
                <span className="text-[var(--muted)]">&middot;</span>
                <span className="text-sm text-[var(--muted)]">
                  {pct}% richtig ({progress.correct}/{progress.total})
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-[var(--surface)] rounded-lg p-1">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-[var(--background)] text-[var(--text-primary)] shadow-sm"
                  : "text-muted-foreground hover:text-[var(--text-primary)]"
              }`}
            >
              <TabIcon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {activeTab === "lernen" && <EmotionenErkennenLernen />}
      {activeTab === "ueben" && <EmotionenErkennenUeben />}
      {activeTab === "simulation" && <EmotionenErkennenSimulation />}
    </div>
  );
}
