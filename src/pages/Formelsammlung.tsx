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
  // Tokenize the text into segments with formatting info
  type Segment = { type: "text" | "sup" | "sub" | "italic"; content: string };
  const segments: Segment[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    // Match patterns in order of specificity
    const match =
      /(\w)\^(\d+)|(\w)²|(\w)³|(\w)_(\w)|(\w)₁|(\w)₂|(\w)₃|Δ|π/.exec(remaining);

    if (!match) {
      segments.push({ type: "text", content: remaining });
      break;
    }

    // Add text before match
    if (match.index > 0) {
      segments.push({ type: "text", content: remaining.slice(0, match.index) });
    }

    if (match[1] && match[2]) {
      // \w^digits
      segments.push({ type: "text", content: match[1] });
      segments.push({ type: "sup", content: match[2] });
    } else if (match[3]) {
      // \w²
      segments.push({ type: "text", content: match[3] });
      segments.push({ type: "sup", content: "2" });
    } else if (match[4]) {
      // \w³
      segments.push({ type: "text", content: match[4] });
      segments.push({ type: "sup", content: "3" });
    } else if (match[5] && match[6]) {
      // \w_\w
      segments.push({ type: "text", content: match[5] });
      segments.push({ type: "sub", content: match[6] });
    } else if (match[7]) {
      // \w₁
      segments.push({ type: "text", content: match[7] });
      segments.push({ type: "sub", content: "1" });
    } else if (match[8]) {
      // \w₂
      segments.push({ type: "text", content: match[8] });
      segments.push({ type: "sub", content: "2" });
    } else if (match[9]) {
      // \w₃
      segments.push({ type: "text", content: match[9] });
      segments.push({ type: "sub", content: "3" });
    } else if (match[0] === "Δ" || match[0] === "π") {
      segments.push({ type: "italic", content: match[0] });
    }

    remaining = remaining.slice(match.index + match[0].length);
  }

  return (
    <span>
      {segments.map((seg, i) => {
        switch (seg.type) {
          case "sup":
            return <sup key={i}>{seg.content}</sup>;
          case "sub":
            return <sub key={i}>{seg.content}</sub>;
          case "italic":
            return <i key={i}>{seg.content}</i>;
          default:
            return <span key={i}>{seg.content}</span>;
        }
      })}
    </span>
  );
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
