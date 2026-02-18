import { useNavigate } from "react-router-dom";
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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useKFFStore } from "@/stores/kffStore";
import type { KFFSubtestType } from "@/data/kffTypes";

interface SubtestCard {
  id: KFFSubtestType;
  name: string;
  path: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  exerciseCount: number;
  category: "kff" | "sek" | "tv";
  categoryLabel: string;
}

const subtests: SubtestCard[] = [
  {
    id: "implikationen",
    name: "Implikationen erkennen",
    path: "/app/kff/implikationen",
    icon: Brain,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    exerciseCount: 0,
    category: "kff",
    categoryLabel: "KFF",
  },
  {
    id: "zahlenfolgen",
    name: "Zahlenfolgen",
    path: "/app/kff/zahlenfolgen",
    icon: Hash,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    exerciseCount: 60,
    category: "kff",
    categoryLabel: "KFF",
  },
  {
    id: "wortfluessigkeit",
    name: "Wortflüssigkeit",
    path: "/app/kff/wortfluessigkeit",
    icon: Type,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    exerciseCount: 210,
    category: "kff",
    categoryLabel: "KFF",
  },
  {
    id: "merkfaehigkeit",
    name: "Merkfähigkeit",
    path: "/app/kff/merkfaehigkeit",
    icon: Database,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    exerciseCount: 0,
    category: "kff",
    categoryLabel: "KFF",
  },
  {
    id: "figuren",
    name: "Figuren zusammensetzen",
    path: "/app/kff/figuren",
    icon: Puzzle,
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
    exerciseCount: 0,
    category: "kff",
    categoryLabel: "KFF",
  },
  {
    id: "emotionen-regulieren",
    name: "Emotionen regulieren",
    path: "/app/kff/emotionen-regulieren",
    icon: Heart,
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    exerciseCount: 20,
    category: "sek",
    categoryLabel: "SEK",
  },
  {
    id: "soziales-entscheiden",
    name: "Soziales Entscheiden",
    path: "/app/kff/soziales-entscheiden",
    icon: Users,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-100 dark:bg-teal-900/30",
    exerciseCount: 15,
    category: "sek",
    categoryLabel: "SEK",
  },
  {
    id: "emotionen-erkennen",
    name: "Emotionen erkennen",
    path: "/app/kff/emotionen-erkennen",
    icon: Eye,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    exerciseCount: 20,
    category: "sek",
    categoryLabel: "SEK",
  },
  {
    id: "textverstaendnis",
    name: "Textverständnis",
    path: "/app/kff/textverstaendnis",
    icon: FileText,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    exerciseCount: 50,
    category: "tv",
    categoryLabel: "TV",
  },
];

const categoryColors: Record<string, string> = {
  KFF: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  SEK: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  TV: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
};

export default function KFFAcademy() {
  const navigate = useNavigate();
  const progress = useKFFStore((s) => s.progress);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav
        items={[
          { label: "Dashboard", href: "/app" },
          { label: "KFF Academy" },
        ]}
      />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          KFF Academy
        </h1>
        <p className="text-muted mt-1">
          Kognitive Fähigkeiten und Fertigkeiten — 40% des MedAT
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subtests.map((subtest) => {
          const p = progress[subtest.id];
          const pct = p && p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
          const Icon = subtest.icon;

          return (
            <Card
              key={subtest.id}
              className="hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => navigate(subtest.path)}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-10 h-10 ${subtest.bgColor} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-5 h-5 ${subtest.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm truncate">
                        {subtest.name}
                      </h3>
                    </div>
                    <span
                      className={`inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded ${categoryColors[subtest.categoryLabel]}`}
                    >
                      {subtest.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted">Fortschritt</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {pct}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full transition-all ${
                        pct === 0
                          ? "bg-gray-300 dark:bg-gray-600"
                          : pct < 50
                            ? "bg-amber-500"
                            : pct < 80
                              ? "bg-blue-500"
                              : "bg-green-500"
                      }`}
                      style={{ width: `${Math.max(pct, 2)}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-muted">
                    <span>
                      {p?.total ?? 0} Übungen absolviert
                    </span>
                    {p?.lastPracticed && (
                      <span>
                        Zuletzt:{" "}
                        {new Date(p.lastPracticed).toLocaleDateString("de-AT")}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
