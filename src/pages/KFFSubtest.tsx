import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Brain,
  Hash,
  Type,
  Database,
  Puzzle,
  Heart,
  Users,
  Eye,
  FileText,
  BookOpen,
  Dumbbell,
  Timer,
  Construction,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useKFFStore } from "@/stores/kffStore";
import type { KFFSubtestType } from "@/data/kffTypes";

type TabKey = "lernen" | "ueben" | "simulation";

interface SubtestConfig {
  id: KFFSubtestType;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  category: string;
}

const subtestConfigs: Record<string, SubtestConfig> = {
  implikationen: {
    id: "implikationen",
    name: "Implikationen erkennen",
    icon: Brain,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    category: "KFF",
  },
  zahlenfolgen: {
    id: "zahlenfolgen",
    name: "Zahlenfolgen",
    icon: Hash,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    category: "KFF",
  },
  wortfluessigkeit: {
    id: "wortflüssigkeit",
    name: "Wortflüssigkeit",
    icon: Type,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    category: "KFF",
  },
  merkfaehigkeit: {
    id: "merkfähigkeit",
    name: "Merkfähigkeit",
    icon: Database,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    category: "KFF",
  },
  figuren: {
    id: "figuren",
    name: "Figuren zusammensetzen",
    icon: Puzzle,
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
    category: "KFF",
  },
  "emotionen-regulieren": {
    id: "emotionen-regulieren",
    name: "Emotionen regulieren",
    icon: Heart,
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    category: "SEK",
  },
  "soziales-entscheiden": {
    id: "soziales-entscheiden",
    name: "Soziales Entscheiden",
    icon: Users,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-100 dark:bg-teal-900/30",
    category: "SEK",
  },
  "emotionen-erkennen": {
    id: "emotionen-erkennen",
    name: "Emotionen erkennen",
    icon: Eye,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    category: "SEK",
  },
  textverstaendnis: {
    id: "textverständnis",
    name: "Textverständnis",
    icon: FileText,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    category: "TV",
  },
};

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "lernen", label: "Lernen", icon: BookOpen },
  { key: "ueben", label: "Üben", icon: Dumbbell },
  { key: "simulation", label: "Simulation", icon: Timer },
];

export default function KFFSubtest() {
  const { subtestId } = useParams<{ subtestId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>("lernen");
  const progress = useKFFStore((s) => (subtestId ? s.progress[subtestId as KFFSubtestType] : null));

  const config = subtestId ? subtestConfigs[subtestId] : null;

  if (!config) {
    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <BreadcrumbNav
          items={[
            { label: "Dashboard", href: "/" },
            { label: "KFF Academy", href: "/kff" },
            { label: "Nicht gefunden" },
          ]}
        />
        <p className="text-muted">Untertest nicht gefunden.</p>
      </div>
    );
  }

  const Icon = config.icon;
  const pct =
    progress && progress.total > 0 ? Math.round((progress.correct / progress.total) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav
        items={[
          { label: "Dashboard", href: "/app" },
          { label: "KFF Academy", href: "/app/kff" },
          { label: config.name },
        ]}
      />

      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 ${config.bgColor} rounded-xl flex items-center justify-center shrink-0`}
        >
          <Icon className={`w-6 h-6 ${config.color}`} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{config.name}</h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-sm text-muted">{config.category}</span>
            {progress && progress.total > 0 && (
              <>
                <span className="text-muted">·</span>
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
      {activeTab === "lernen" && (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Construction className="w-8 h-8 text-muted" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Strategie-Inhalte folgen
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              Die Lern- und Strategie-Inhalte für &quot;{config.name}&quot; werden in einem nächsten
              Update hinzugefügt.
            </p>
          </CardContent>
        </Card>
      )}

      {activeTab === "ueben" && (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Dumbbell className="w-8 h-8 text-muted" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Übungsmodus
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              Der Übungsmodus ohne Zeitdruck für &quot;{config.name}&quot; wird in einem nächsten
              Update freigeschaltet.
            </p>
          </CardContent>
        </Card>
      )}

      {activeTab === "simulation" && (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Timer className="w-8 h-8 text-muted" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Simulationsmodus
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              Der Simulationsmodus mit Timer und Auswertung für &quot;{config.name}&quot; wird in
              einem nächsten Update freigeschaltet.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
