import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContentVisualizer } from "@/components/chapter/ContentVisualizer";
import { MerksatzBox } from "@/components/chapter/MerksatzBox";
import type { Unterkapitel } from "@/data/bmsKapitel/types";

const DEFAULT_JSON = `{
  "id": "preview",
  "title": "Vorschau-Unterkapitel",
  "content": "Hier **fetter** Text und eine Liste:\\n\\n- Punkt 1\\n- Punkt 2\\n\\n## Überschrift\\n\\n| A | B |\\n|---|---|\\n| 1 | 2 |",
  "merksätze": ["Erster **Merksatz**"],
  "selfTest": []
}`;

function parseUnterkapitel(jsonStr: string): { data: Unterkapitel | null; error: string | null } {
  const trimmed = jsonStr.trim();
  if (!trimmed) {
    return { data: null, error: "Leeres Eingabefeld" };
  }
  try {
    const raw = JSON.parse(trimmed) as Record<string, unknown>;
    const id = typeof raw.id === "string" ? raw.id : "preview";
    const title = typeof raw.title === "string" ? raw.title : "Vorschau";
    const content = typeof raw.content === "string" ? raw.content : "";
    const merksätze = Array.isArray(raw.merksätze)
      ? (raw.merksätze as string[]).filter((m): m is string => typeof m === "string")
      : [];
    const selfTest = Array.isArray(raw.selfTest)
      ? (raw.selfTest as Unterkapitel["selfTest"])
      : [];
    const sections = Array.isArray(raw.sections) ? raw.sections as Unterkapitel["sections"] : undefined;
    const imageUrl = typeof raw.imageUrl === "string" ? raw.imageUrl : undefined;
    const quiz = Array.isArray(raw.quiz) ? (raw.quiz as Unterkapitel["quiz"]) : undefined;
    const additionalNotes = typeof raw.additionalNotes === "string" ? raw.additionalNotes : undefined;
    const altfrage =
      raw.altfrage && typeof raw.altfrage === "object" && "question" in raw.altfrage && "answer" in raw.altfrage
        ? (raw.altfrage as Unterkapitel["altfrage"])
        : undefined;
    const klinischerBezug = typeof raw.klinischerBezug === "string" ? raw.klinischerBezug : undefined;
    const lernziele = Array.isArray(raw.lernziele) ? (raw.lernziele as string[]) : undefined;
    const diagram = typeof raw.diagram === "string" ? raw.diagram : undefined;

    const data: Unterkapitel = {
      id,
      title,
      content,
      merksätze,
      selfTest,
      sections: sections ?? undefined,
      imageUrl: imageUrl || undefined,
      quiz,
      additionalNotes,
      altfrage,
      klinischerBezug,
      lernziele,
      diagram,
    };
    return { data, error: null };
  } catch (e) {
    return {
      data: null,
      error: e instanceof Error ? e.message : "Ungültiges JSON",
    };
  }
}

export default function AdminPreview() {
  const [inputText, setInputText] = useState(DEFAULT_JSON);

  const { data: uk, error } = useMemo(
    () => parseUnterkapitel(inputText),
    [inputText]
  );

  const subject = "biologie";
  const chapterId = "bio-kap1";

  return (
    <div className="min-h-screen bg-(--color-soft-white) dark:bg-slate-900 text-midnight dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur supports-backdrop-filter:bg-white/80">
        <div className="max-w-[1800px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/audit" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Link>
            </Button>
            <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              Content-Vorschau
            </h1>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            JSON links → Vorschau rechts (Live-Update)
          </span>
        </div>
      </header>

      {/* Split layout */}
      <div className="max-w-[1800px] mx-auto px-4 py-4 flex gap-4 h-[calc(100vh-56px)]">
        {/* Left: JSON input */}
        <div className="w-1/2 min-w-0 flex flex-col">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
            JSON (Unterkapitel)
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            spellCheck={false}
            className="flex-1 w-full p-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            placeholder="Unterkapitel-JSON einfügen …"
          />
          {error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-medium">
              Fehler: {error}
            </p>
          )}
        </div>

        {/* Right: Rendered preview (1:1 like BMSUnterkapitel content area) */}
        <div className="w-1/2 min-w-0 flex flex-col overflow-hidden border-l border-slate-200 dark:border-slate-700 pl-4">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
            Vorschau
          </label>
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {error && !uk ? (
              <Card className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10">
                <CardContent className="p-4 text-sm text-red-800 dark:text-red-200">
                  JSON korrigieren, dann erscheint die Vorschau.
                </CardContent>
              </Card>
            ) : uk ? (
              <div className="max-w-3xl">
                {/* Title (like BMSUnterkapitel) */}
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  Kapitel — Vorschau
                </p>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {uk.title}
                </h2>

                {/* Main content card (same as BMSUnterkapitel) */}
                <Card className="mt-4">
                  <CardContent className="p-8">
                    <ContentVisualizer
                      uk={uk}
                      subject={subject}
                      chapterId={chapterId}
                      enhancedFormatting={chapterId === 'bio-kap1'}
                    />
                  </CardContent>
                </Card>

                {/* Merksätze */}
                {uk.merksätze && uk.merksätze.length > 0 && (
                  <div className="space-y-4 mt-6">
                    <div className="mb-2 pb-2 border-b-2 border-slate-300 dark:border-slate-600">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        💡 Prüfungsrelevante Merksätze
                      </h3>
                    </div>
                    {uk.merksätze.map((merksatz, i) => (
                      <div key={i} className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 shadow-sm p-5 rounded-r-lg">
                        <p className="font-bold text-base text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2">
                          <span className="text-lg">💡</span> Merke
                        </p>
                        <p
                          className="text-base text-amber-900 dark:text-amber-200 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: merksatz.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>'),
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Altfrage */}
                {uk.altfrage && (
                  <Card className="mt-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10">
                    <CardContent className="p-5">
                      <h3 className="text-sm font-semibold text-red-800 dark:text-red-300 flex items-center gap-2 mb-2">
                        🎯 Altfragen-Klassiker
                      </h3>
                      <p className="text-sm font-medium text-red-900 dark:text-red-200 mb-2">
                        {uk.altfrage.question}
                      </p>
                      <details className="group">
                        <summary className="text-sm text-red-700 dark:text-red-400 cursor-pointer hover:underline">
                          Antwort anzeigen
                        </summary>
                        <p className="text-sm text-red-800 dark:text-red-300 mt-2 pl-4 border-l-2 border-red-300 dark:border-red-700">
                          {uk.altfrage.answer}
                        </p>
                      </details>
                    </CardContent>
                  </Card>
                )}

                {/* Klinischer Bezug */}
                {uk.klinischerBezug && (
                  <div className="mt-6">
                    <MerksatzBox text={uk.klinischerBezug} type="klinisch" />
                  </div>
                )}

                {/* Additional notes */}
                {uk.additionalNotes && uk.additionalNotes.trim() && (
                  <Card className="mt-6 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-5">
                      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Zusatznotizen
                      </h3>
                      <div className="prose prose-sm prose-slate dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {uk.additionalNotes}
                        </ReactMarkdown>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
