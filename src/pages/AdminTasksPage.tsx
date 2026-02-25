/**
 * Admin: Task-DB – Liste, Filter, als kaputt markieren, Pool nachfüllen.
 * Nur in DEV erreichbar (AdminGuard).
 */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  getTasksByDomain,
  getTaskCountByDomain,
  markTaskInvalid,
  fillPool,
  TASK_SOURCE_LABELS,
  type Task,
  type TaskDomain,
} from "@/lib/taskDb";

const DOMAIN_LABELS: Record<TaskDomain, string> = {
  "bms-bio": "BMS Biologie",
  "bms-chem": "BMS Chemie",
  "bms-phys": "BMS Physik",
  "bms-math": "BMS Mathematik",
  "kff-zahlenfolgen": "KFF Zahlenfolgen",
  "kff-figuren": "KFF Figuren",
  "kff-implikationen": "KFF Implikationen",
  "kff-wortflüssigkeit": "KFF Wortflüssigkeit",
  "kff-merkfähigkeit": "KFF Merkfähigkeit",
  "sek-erkennen": "SEK Emotionen erkennen",
  "sek-regulieren": "SEK Emotionen regulieren",
  "sek-entscheiden": "SEK Soziales entscheiden",
};

const DOMAINS: TaskDomain[] = [
  "kff-zahlenfolgen",
  "kff-figuren",
  "kff-implikationen",
  "kff-wortflüssigkeit",
  "sek-erkennen",
  "sek-regulieren",
  "sek-entscheiden",
];

export default function AdminTasksPage() {
  const navigate = useNavigate();
  const [domain, setDomain] = useState<TaskDomain>("kff-figuren");
  const [source, setSource] = useState<"official" | "generated" | "curated" | "">("");
  const [validatedOnly, setValidatedOnly] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [counts, setCounts] = useState<Record<TaskDomain, number>>(
    {} as Record<TaskDomain, number>
  );
  const [loading, setLoading] = useState(true);
  const [filling, setFilling] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const list = await getTasksByDomain({
      domain,
      source: source || undefined,
      validated: validatedOnly ? true : undefined,
      limit: 100,
    });
    setTasks(list);
    const c: Record<string, number> = {};
    for (const d of DOMAINS) {
      c[d] = await getTaskCountByDomain(d, true);
    }
    setCounts(c as Record<TaskDomain, number>);
    setLoading(false);
  };

  useEffect(() => {
    const t = setTimeout(() => load(), 0);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- load depends on domain/source/validatedOnly
  }, [domain, source, validatedOnly]);

  const handleMarkInvalid = async (id: string, reason: string) => {
    await markTaskInvalid(id, reason || "Manuell als kaputt markiert");
    load();
  };

  const handleFillPool = async (d: TaskDomain) => {
    setFilling(d);
    await fillPool(d, 30);
    setFilling(null);
    load();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            ← Zurück
          </Button>
          <h1 className="text-xl font-bold">Task-DB Admin</h1>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2">
            <span className="text-sm font-medium">Domain</span>
            <select
              className="border rounded px-2 py-1 dark:bg-slate-800 dark:border-slate-600"
              value={domain}
              onChange={(e) => setDomain(e.target.value as TaskDomain)}
            >
              {DOMAINS.map((d) => (
                <option key={d} value={d}>
                  {DOMAIN_LABELS[d]} ({counts[d] ?? 0})
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span className="text-sm font-medium">Quelle</span>
            <select
              className="border rounded px-2 py-1 dark:bg-slate-800 dark:border-slate-600"
              value={source}
              onChange={(e) =>
                setSource(e.target.value as "" | "official" | "generated" | "curated")
              }
            >
              <option value="">Alle</option>
              <option value="official">Offiziell</option>
              <option value="generated">Generiert</option>
              <option value="curated">Kuratiert</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={validatedOnly}
              onChange={(e) => setValidatedOnly(e.target.checked)}
            />
            <span className="text-sm">Nur validiert</span>
          </label>
          <Button size="sm" onClick={load} disabled={loading}>
            {loading ? "Laden…" : "Aktualisieren"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleFillPool(domain)}
            disabled={!!filling}
          >
            {filling === domain ? "Fülle…" : "Pool +30"}
          </Button>
        </div>

        <div className="rounded border border-slate-200 dark:border-slate-700 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-muted">Laden…</div>
          ) : tasks.length === 0 ? (
            <div className="p-8 text-center text-muted">Keine Aufgaben in dieser Auswahl.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Typ</th>
                  <th className="text-left p-2">Schwierigkeit</th>
                  <th className="text-left p-2">Quelle</th>
                  <th className="text-left p-2">Validiert</th>
                  <th className="text-left p-2">Aktionen</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((t) => (
                  <tr key={t.id} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="p-2 font-mono text-xs truncate max-w-[120px]" title={t.id}>
                      {t.id}
                    </td>
                    <td className="p-2">{t.type}</td>
                    <td className="p-2">{t.difficulty}</td>
                    <td className="p-2">{TASK_SOURCE_LABELS[t.source]}</td>
                    <td className="p-2">{t.validated ? "✓" : "–"}</td>
                    <td className="p-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600"
                        onClick={() => handleMarkInvalid(t.id, "Als kaputt markiert (Admin)")}
                      >
                        Als kaputt markieren
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
