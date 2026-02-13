import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Unterkapitel } from "@/data/bmsKapitel/types";
import DiagramSVG from "@/components/diagrams/DiagramSVG";

/** Convert **bold** markers and newlines to HTML, escaping raw < > & first */
function formatText(text: string, escapeHtml = false): string {
  let t = text;
  if (escapeHtml) {
    t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  return t
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/\n\n/g, '</p><p class="mt-3">')
    .replace(/\n/g, '<br/>');
}

const SUBJECT_COLORS: Record<string, { border: string; text: string; bg: string }> = {
  biologie: { border: "border-emerald-500", text: "text-emerald-700 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
  chemie: { border: "border-red-500", text: "text-red-700 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/20" },
  physik: { border: "border-blue-500", text: "text-blue-700 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  mathematik: { border: "border-violet-500", text: "text-violet-700 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/20" },
};

interface Props {
  uk: Unterkapitel;
  subject: string;
}

export function SubchapterContent({ uk, subject }: Props) {
  const colors = SUBJECT_COLORS[subject] || SUBJECT_COLORS.biologie;
  const [lernzieleOpen, setLernzieleOpen] = useState(false);

  // If sections exist, render structured content; otherwise fall back to plain content
  if (uk.sections && uk.sections.length > 0) {
    return (
      <div className="space-y-6">
        {/* Lernziele */}
        {uk.lernziele && uk.lernziele.length > 0 && (
          <div className={`${colors.bg} rounded-xl border ${colors.border} border-opacity-30 overflow-hidden`}>
            <button
              onClick={() => setLernzieleOpen(!lernzieleOpen)}
              className="w-full flex items-center justify-between p-4 cursor-pointer"
            >
              <span className={`font-semibold ${colors.text} flex items-center gap-2`}>
                Lernziele
              </span>
              {lernzieleOpen
                ? <ChevronUp className={`w-4 h-4 ${colors.text}`} />
                : <ChevronDown className={`w-4 h-4 ${colors.text}`} />
              }
            </button>
            {lernzieleOpen && (
              <ul className="px-4 pb-4 space-y-1.5">
                {uk.lernziele.map((ziel, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className={`${colors.text} mt-0.5`}>&#8226;</span>
                    <span>{ziel}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Structured sections */}
        {uk.sections.map((section, i) => (
          <div key={i} className="space-y-3">
            <h3 className={`text-lg font-semibold text-gray-800 dark:text-gray-200 border-l-4 ${colors.border} pl-3`}>
              {section.heading}
            </h3>
            <div
              className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2"
              dangerouslySetInnerHTML={{ __html: formatText(section.text) }}
            />

            {/* Section merksatz */}
            {section.merksatz && (
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm flex items-center gap-2 mb-1">
                  Merke
                </p>
                <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatText(section.merksatz) }} />
              </div>
            )}

            {/* Section table */}
            {section.table && (
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`${colors.bg}`}>
                      {section.table.headers.map((h, hi) => (
                        <th key={hi} className={`text-left p-3 font-semibold ${colors.text} border-b border-gray-200 dark:border-gray-700`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr key={ri} className="even:bg-gray-50 dark:even:bg-gray-800/50">
                        {row.map((cell, ci) => (
                          <td key={ci} className="p-3 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800" dangerouslySetInnerHTML={{ __html: cell }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {i < uk.sections!.length - 1 && (
              <hr className="my-4 border-gray-200 dark:border-gray-700" />
            )}
          </div>
        ))}

        {/* Diagram */}
        {uk.diagram && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <DiagramSVG type={uk.diagram} />
          </div>
        )}
      </div>
    );
  }

  // Fallback: render plain content
  return (
    <div className="space-y-6">
      <div
        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2"
        dangerouslySetInnerHTML={{ __html: formatText(uk.content, true) }}
      />
      {uk.diagram && (
        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
          <DiagramSVG type={uk.diagram} />
        </div>
      )}
    </div>
  );
}
