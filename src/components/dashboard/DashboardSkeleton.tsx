import { Card, CardContent } from "@/components/ui/card";

/**
 * Pulsing placeholders for the dashboard stats grid (Tage, XP/Level, Streak, Durchschnitt).
 * Shown while useDashboardProfile loading is true.
 */
export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} className="overflow-hidden">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gray-200 dark:bg-gray-700 animate-pulse shrink-0" />
            <div className="flex-1 space-y-2 min-w-0">
              <div className="h-7 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-3 w-20 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
