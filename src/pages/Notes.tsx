import { useState } from "react";
import { Search, StickyNote, Trash2, Edit3, Eye, Pencil, Bold, Italic, Code, List, Heading, Quote, Minus, Link } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useStore } from "@/store/useStore";
import { alleKapitel } from "@/data/bmsKapitel";

// ---------------------------------------------------------------------------
// Lightweight Markdown parser -- no external dependencies
// ---------------------------------------------------------------------------
function parseMarkdown(text: string): string {
  // Escape HTML entities to prevent injection
  const escapeHtml = (s: string): string =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const lines = text.split("\n");
  const htmlParts: string[] = [];
  let i = 0;

  // Process inline markdown (bold, italic, code, links)
  const processInline = (line: string): string => {
    let result = escapeHtml(line);

    // Inline code (must come before bold/italic to avoid conflicts)
    result = result.replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 font-mono text-sm rounded px-1">$1</code>');

    // Bold
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');

    // Italic (single asterisk, but not inside a word boundary with *)
    result = result.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em class="italic">$1</em>');

    // Links [text](url)
    result = result.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    return result;
  };

  while (i < lines.length) {
    const line = lines[i];

    // --- Fenced code blocks ---
    if (line.trimStart().startsWith("```")) {
      const codeLines: string[] = [];
      i++; // skip opening fence
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(escapeHtml(lines[i]));
        i++;
      }
      i++; // skip closing fence
      htmlParts.push(
        `<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm overflow-x-auto my-2"><code>${codeLines.join("\n")}</code></pre>`
      );
      continue;
    }

    // --- Horizontal rule ---
    if (/^---+\s*$/.test(line.trim())) {
      htmlParts.push('<hr class="my-4 border-gray-300 dark:border-gray-700" />');
      i++;
      continue;
    }

    // --- Headings ---
    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const content = processInline(headingMatch[2]);
      const classes: Record<number, string> = {
        1: "text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-gray-100",
        2: "text-base font-bold mt-3 mb-1.5 text-gray-900 dark:text-gray-100",
        3: "text-sm font-bold mt-2 mb-1 text-gray-900 dark:text-gray-100",
      };
      htmlParts.push(`<h${level} class="${classes[level]}">${content}</h${level}>`);
      i++;
      continue;
    }

    // --- Blockquote ---
    if (line.startsWith("&gt; ") || line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && (lines[i].startsWith("> ") || lines[i] === ">")) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      const quoteContent = quoteLines.map(processInline).join("<br />");
      htmlParts.push(
        `<blockquote class="border-l-4 border-primary-300 pl-3 italic text-gray-600 dark:text-gray-400 my-2">${quoteContent}</blockquote>`
      );
      continue;
    }

    // --- Unordered list ---
    if (/^[\-\*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[\-\*]\s+/.test(lines[i])) {
        items.push(processInline(lines[i].replace(/^[\-\*]\s+/, "")));
        i++;
      }
      const listHtml = items.map((item) => `<li>${item}</li>`).join("");
      htmlParts.push(`<ul class="list-disc ml-4 my-2 space-y-0.5 text-sm text-gray-700 dark:text-gray-300">${listHtml}</ul>`);
      continue;
    }

    // --- Ordered list ---
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(processInline(lines[i].replace(/^\d+\.\s+/, "")));
        i++;
      }
      const listHtml = items.map((item) => `<li>${item}</li>`).join("");
      htmlParts.push(`<ol class="list-decimal ml-4 my-2 space-y-0.5 text-sm text-gray-700 dark:text-gray-300">${listHtml}</ol>`);
      continue;
    }

    // --- Empty line (paragraph break) ---
    if (line.trim() === "") {
      htmlParts.push("");
      i++;
      continue;
    }

    // --- Normal paragraph ---
    // Collect consecutive non-empty, non-special lines into one paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trimStart().startsWith("```") &&
      !/^---+\s*$/.test(lines[i].trim()) &&
      !/^#{1,3}\s+/.test(lines[i]) &&
      !/^>\s/.test(lines[i]) &&
      !/^[\-\*]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i])
    ) {
      paraLines.push(processInline(lines[i]));
      i++;
    }
    if (paraLines.length > 0) {
      htmlParts.push(
        `<p class="text-sm text-gray-700 dark:text-gray-300 my-1.5">${paraLines.join("<br />")}</p>`
      );
    }
  }

  return htmlParts.join("\n");
}

// ---------------------------------------------------------------------------
// Formatting toolbar hint items
// ---------------------------------------------------------------------------
const toolbarHints: { icon: React.ElementType; label: string; syntax: string; insert: string }[] = [
  { icon: Heading, label: "Überschrift", syntax: "# ", insert: "# " },
  { icon: Bold, label: "Fett", syntax: "**text**", insert: "**" },
  { icon: Italic, label: "Kursiv", syntax: "*text*", insert: "*" },
  { icon: Code, label: "Code", syntax: "`code`", insert: "`" },
  { icon: List, label: "Liste", syntax: "- ", insert: "- " },
  { icon: Quote, label: "Zitat", syntax: "> ", insert: "> " },
  { icon: Minus, label: "Linie", syntax: "---", insert: "\n---\n" },
  { icon: Link, label: "Link", syntax: "[text](url)", insert: "[](url)" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Notes() {
  const { notes, setNote } = useStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  const allNotes = Object.entries(notes)
    .filter(([, content]) => content.trim().length > 0)
    .map(([chapterId, content]) => {
      const chapter = alleKapitel.find((c) => c.id === chapterId) ||
        alleKapitel.flatMap((k) => k.unterkapitel).find((u) => u.id === chapterId);
      return {
        chapterId,
        content,
        chapterTitle: chapter?.title || chapterId,
        subject: chapter?.subject || "Sonstige",
      };
    })
    .filter(
      (n) =>
        searchQuery.length < 2 ||
        n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.chapterTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleEdit = (chapterId: string, content: string) => {
    setEditingId(chapterId);
    setEditContent(content);
    setPreviewMode(false);
  };

  const handleSave = () => {
    if (editingId) {
      setNote(editingId, editContent);
      setEditingId(null);
      setEditContent("");
      setPreviewMode(false);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditContent("");
    setPreviewMode(false);
  };

  const handleDelete = (chapterId: string) => {
    setNote(chapterId, "");
  };

  const insertSyntax = (syntax: string) => {
    const textarea = document.querySelector<HTMLTextAreaElement>(
      "[data-markdown-editor]"
    );
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = editContent.slice(start, end);

    let newText: string;
    let cursorPos: number;

    // Wrapping tokens like ** * `
    if (["**", "*", "`"].includes(syntax)) {
      if (selectedText) {
        newText =
          editContent.slice(0, start) +
          syntax +
          selectedText +
          syntax +
          editContent.slice(end);
        cursorPos = end + syntax.length * 2;
      } else {
        newText =
          editContent.slice(0, start) + syntax + syntax + editContent.slice(end);
        cursorPos = start + syntax.length;
      }
    } else if (syntax === "[](url)") {
      // Link
      if (selectedText) {
        newText =
          editContent.slice(0, start) +
          `[${selectedText}](url)` +
          editContent.slice(end);
        cursorPos = start + selectedText.length + 3; // position on "url"
      } else {
        newText =
          editContent.slice(0, start) + "[text](url)" + editContent.slice(end);
        cursorPos = start + 1; // position on "text"
      }
    } else {
      // Line-start tokens: # , - , > , ---
      newText =
        editContent.slice(0, start) + syntax + editContent.slice(end);
      cursorPos = start + syntax.length;
    }

    setEditContent(newText);

    // Restore focus and cursor after React re-render
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(cursorPos, cursorPos);
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb
        items={[{ label: "Dashboard", href: "/" }, { label: "Notizen" }]}
      />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Meine Notizen
          </h1>
          <p className="text-muted mt-1">
            {allNotes.length} Notiz{allNotes.length !== 1 ? "en" : ""}{" "}
            gespeichert
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Notizen durchsuchen..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 placeholder:text-muted outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Empty state */}
      {allNotes.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <StickyNote className="w-12 h-12 text-muted mx-auto mb-3" />
            <p className="text-muted">
              {searchQuery.length >= 2
                ? "Keine Notizen gefunden."
                : "Noch keine Notizen. Erstelle Notizen beim Lesen von BMS-Kapiteln!"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {allNotes.map((n) => {
            const isEditing = editingId === n.chapterId;

            return (
              <Card key={n.chapterId}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">
                        {n.chapterTitle}
                      </CardTitle>
                      <p className="text-xs text-muted capitalize mt-0.5">
                        {n.subject}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {!isEditing && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(n.chapterId, n.content)}
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(n.chapterId)}
                          >
                            <Trash2 className="w-3.5 h-3.5 text-red-500" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {isEditing ? (
                    <div className="space-y-2">
                      {/* ---- Edit / Preview toggle ---- */}
                      <div className="flex items-center gap-1 border-b border-border dark:border-gray-700 pb-2">
                        <button
                          type="button"
                          onClick={() => setPreviewMode(false)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                            !previewMode
                              ? "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300"
                              : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          <Pencil className="w-3.5 h-3.5" />
                          Bearbeiten
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewMode(true)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                            previewMode
                              ? "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300"
                              : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Vorschau
                        </button>
                      </div>

                      {previewMode ? (
                        /* ---- Live preview ---- */
                        <div
                          className="min-h-[8rem] p-3 rounded-lg border border-border dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto prose-sm"
                          dangerouslySetInnerHTML={{
                            __html: parseMarkdown(editContent),
                          }}
                        />
                      ) : (
                        <>
                          {/* ---- Formatting toolbar ---- */}
                          <div className="flex flex-wrap items-center gap-1 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-border dark:border-gray-700 px-2 py-1.5">
                            {toolbarHints.map((hint) => {
                              const Icon = hint.icon;
                              return (
                                <button
                                  key={hint.label}
                                  type="button"
                                  title={`${hint.label}  (${hint.syntax})`}
                                  onClick={() => insertSyntax(hint.insert)}
                                  className="inline-flex items-center gap-1 px-1.5 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                                >
                                  <Icon className="w-3.5 h-3.5" />
                                  <span className="hidden sm:inline">
                                    {hint.label}
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          {/* ---- Textarea ---- */}
                          <textarea
                            data-markdown-editor=""
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            className="w-full h-48 p-3 rounded-lg border border-border dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-mono text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary-500 resize-y"
                          />
                        </>
                      )}

                      {/* ---- Action buttons ---- */}
                      <div className="flex gap-2 justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleCancel}
                        >
                          Abbrechen
                        </Button>
                        <Button size="sm" onClick={handleSave}>
                          Speichern
                        </Button>
                      </div>
                    </div>
                  ) : (
                    /* ---- Read-only rendered Markdown ---- */
                    <div
                      className="text-sm text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: parseMarkdown(n.content),
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
