import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { usePageTitle } from "@/hooks/usePageTitle";
import { formeln, type Formel } from "@/data/formeln";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Zap,
  FlaskConical,
  Calculator,
  BookOpen,
} from "lucide-react";

type FachFilter = "alle" | "physik" | "chemie" | "mathematik";

/** Render formula string with proper subscripts/superscripts for common patterns. */
function renderFormel(text: string): React.ReactNode {
  // Split text into segments with sup/sub/italic markers, then render as React elements
  type Segment = { type: "text" | "sup" | "sub" | "italic"; content: string };
  const segments: Segment[] = [];
  // Build a working copy and extract patterns into segments
  let remaining = text;
  const result: React.ReactNode[] = [];

  // Process character by character, building React elements
  let i = 0;
  while (i < remaining.length) {
    const ch = remaining[i];
    const next = remaining[i + 1];

    // Unicode superscripts: x², x³
    if (next === "²") {
      result.push(remaining[i]);
      result.push(<sup key={`sup-${i}`}>2</sup>);
      i += 2;
      continue;
    }
    if (next === "³") {
      result.push(remaining[i]);
      result.push(<sup key={`sup-${i}`}>3</sup>);
      i += 2;
      continue;
    }
    // Caret notation: x^2
    if (next === "^" && /\w/.test(ch) && /\d/.test(remaining[i + 2] ?? "")) {
      result.push(ch);
      let exp = "";
      let j = i + 2;
      while (j < remaining.length && /\d/.test(remaining[j])) {
        exp += remaining[j];
        j++;
      }
      result.push(<sup key={`sup-${i}`}>{exp}</sup>);
      i = j;
      continue;
    }
    // Unicode subscripts: x₁, x₂, x₃
    if (next === "₁") {
      result.push(ch);
      result.push(<sub key={`sub-${i}`}>1</sub>);
      i += 2;
      continue;
    }
    if (next === "₂") {
      result.push(ch);
      result.push(<sub key={`sub-${i}`}>2</sub>);
      i += 2;
      continue;
    }
    if (next === "₃") {
      result.push(ch);
      result.push(<sub key={`sub-${i}`}>3</sub>);
      i += 2;
      continue;
    }
    // Underscore subscript: x_y
    if (next === "_" && /\w/.test(ch) && /\w/.test(remaining[i + 2] ?? "")) {
      result.push(ch);
      result.push(<sub key={`sub-${i}`}>{remaining[i + 2]}</sub>);
      i += 3;
      continue;
    }
    // Greek/special chars as italic
    if (ch === "Δ" || ch === "π") {
      result.push(<i key={`i-${i}`}>{ch}</i>);
      i += 1;
      continue;
    }
    result.push(ch);
    i += 1;
  }

  return <span>{result}</span>;
}

const fachConfig: Record<
  Exclude<FachFilter, "alle">,
  { label: string; icon: typeof Zap; color: string; bg: string }
> = {
  physik: {
    label: "Physik",
    icon: Zap,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  chemie: {
    label: "Chemie",
    icon: FlaskConical,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  mathematik: {
    label: "Mathematik",
    icon: Calculator,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
};

const tabs: { key: FachFilter; label: string }[] = [
  { key: "alle", label: "Alle" },
  { key: "physik", label: "Physik" },
  { key: "chemie", label: "Chemie" },
  { key: "mathematik", label: "Mathe" },
];

function FormelCard({ f }: { f: Formel }) {
  const [open, setOpen] = useState(false);
  const cfg = fachConfig[f.fach];
  const Icon = cfg.icon;

  return (
    <Card className="card-glass group hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-9 h-9 ${cfg.bg} rounded-lg flex items-center justify-center shrink-0`}>
            <Icon className={`w-4 h-4 ${cfg.color}`} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-[var(--text-primary)] text-sm leading-tight">
                {f.name}
              </h3>
              <Badge variant="default" className="text-[10px] shrink-0">
                {f.kapitel}
              </Badge>
            </div>
          </div>
        </div>

        {/* Formel */}
        <div className="bg-[var(--surface)]/60 backdrop-blur-sm rounded-lg px-4 py-3 mb-3 border border-[var(--border)]/30">
          <p className="text-xl font-mono font-bold text-[var(--text-primary)] whitespace-pre-line leading-relaxed tracking-wide">
            {renderFormel(f.formel)}
          </p>
        </div>

        {/* Variablen & Einheiten */}
        <p className="text-xs text-[var(--muted)] mb-1">
          <span className="font-medium text-[var(--text-primary)]/80">Variablen:</span>{" "}
          {f.variablen}
        </p>
        <p className="text-xs text-[var(--muted)] mb-2">
          <span className="font-medium text-[var(--text-primary)]/80">Einheiten:</span>{" "}
          {f.einheiten}
        </p>

        {/* Beispiel Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:underline mt-1"
        >
          <BookOpen className="w-3.5 h-3.5" />
          Beispiel
          {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
        {open && (
          <div className="mt-2 text-sm text-muted-foreground bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 rounded-md px-3 py-2">
            {f.beispiel}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Formelsammlung() {
  usePageTitle("Formelsammlung");
  const { fach } = useParams<{ fach?: string }>();
  const initialFilter: FachFilter = fach && fach in fachConfig ? (fach as FachFilter) : "alle";

  const [filter, setFilter] = useState<FachFilter>(initialFilter);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result: Formel[] = formeln;
    if (filter !== "alle") {
      result = result.filter((f) => f.fach === filter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.formel.toLowerCase().includes(q) ||
          f.kapitel.toLowerCase().includes(q) ||
          f.variablen.toLowerCase().includes(q)
      );
    }
    return result;
  }, [filter, search]);

  // Group by kapitel
  const grouped = useMemo(() => {
    const map = new Map<string, Formel[]>();
    for (const f of filtered) {
      const key = filter === "alle" ? `${fachConfig[f.fach].label} – ${f.kapitel}` : f.kapitel;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(f);
    }
    return map;
  }, [filtered, filter]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="hero-orbs text-center">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Formelsammlung</h1>
        <p className="text-[var(--muted)] mt-1">
          {formeln.length} Formeln für Physik, Chemie und Mathematik
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
          <input
            type="text"
            placeholder="Formel suchen…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-primary)] placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
        <div className="flex rounded-lg border border-[var(--border)] overflow-hidden shrink-0">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                filter === t.key
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--background)] text-muted-foreground hover:bg-accent"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Formeln grouped by chapter */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-[var(--muted)]">Keine Formeln gefunden.</div>
      ) : (
        Array.from(grouped.entries()).map(([chapter, items]) => (
          <div key={chapter}>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {chapter} ({items.length})
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6 stagger-children">
              {items.map((f) => (
                <FormelCard key={f.id} f={f} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
