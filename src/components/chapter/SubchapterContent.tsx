import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Unterkapitel, SelfTestQuestion } from "@/data/bmsKapitel/types";
import DiagramSVG from "@/components/diagrams/DiagramSVG";
import { extractKontrollfragen } from "@/utils/parseKontrollfragen";

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

/** Enhanced formatting for "Die Zelle" chapter - better typography and structure */
function formatTextEnhanced(text: string): string {
  let t = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  // Convert markdown-style headers
  t = t.replace(/^### (.*?)$/gm, '<h4 class="text-base font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">$1</h4>');
  t = t.replace(/^## (.*?)$/gm, '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">$1</h3>');
  t = t.replace(/^# (.*?)$/gm, '<h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">$1</h2>');
  
  // Convert bold markers
  t = t.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-gray-100">$1</strong>');
  
  // Convert blockquotes (Merksätze)
  t = t.replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/20 pl-4 py-2 my-3 rounded-r">$1</blockquote>');
  
  // Convert lists (lines starting with - or *)
  const lines = t.split('\n');
  let inList = false;
  let result: string[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isListItem = /^[\s]*[-*]\s/.test(line);
    
    if (isListItem && !inList) {
      result.push('<ul class="list-disc list-inside space-y-1.5 my-3 ml-4">');
      inList = true;
    } else if (!isListItem && inList) {
      result.push('</ul>');
      inList = false;
    }
    
    if (isListItem) {
      const content = line.replace(/^[\s]*[-*]\s/, '');
      result.push(`<li class="text-gray-700 dark:text-gray-300">${content}</li>`);
    } else {
      result.push(line);
    }
  }
  
  if (inList) {
    result.push('</ul>');
  }
  
  t = result.join('\n');
  
  // Convert paragraphs (double newlines)
  t = t.replace(/\n\n/g, '</p><p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">');
  t = t.replace(/\n/g, '<br/>');
  
  // Wrap in paragraph if not already wrapped
  if (!t.startsWith('<')) {
    t = `<p class="leading-relaxed text-gray-700 dark:text-gray-300">${t}</p>`;
  } else if (!t.includes('<p')) {
    t = `<p class="leading-relaxed text-gray-700 dark:text-gray-300">${t}</p>`;
  }
  
  return t;
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
  chapterId?: string; // Optional: to check if this is "Die Zelle" (bio-kap1)
}

export function SubchapterContent({ uk, subject, chapterId }: Props) {
  const colors = SUBJECT_COLORS[subject] || SUBJECT_COLORS.biologie;
  const [lernzieleOpen, setLernzieleOpen] = useState(false);
  
  // Check if this is "Die Zelle" chapter for enhanced formatting
  const isDieZelle = chapterId === 'bio-kap1';

  // Extract Kontrollfragen from content if they exist as free text
  // FIXED: Parse Kontrollfragen from content and remove them from rendered text
  const cleanedContent = useMemo(() => {
    if (!uk.content) {
      return '';
    }
    const { cleanedContent: cleaned } = extractKontrollfragen(uk.content);
    return cleaned;
  }, [uk.content]);

  // If sections exist, render structured content; otherwise fall back to plain content
  if (uk.sections && uk.sections.length > 0) {
    return (
      <div className="space-y-6">
        {/* Lernziele */}
        {uk.lernziele && uk.lernziele.length > 0 && (
          <div className={`${colors.bg} ${isDieZelle ? 'rounded-xl shadow-sm border-2' : 'rounded-xl border'} ${colors.border} ${isDieZelle ? 'border-opacity-50' : 'border-opacity-30'} overflow-hidden mb-6`}>
            <button
              onClick={() => setLernzieleOpen(!lernzieleOpen)}
              className={`w-full flex items-center justify-between ${isDieZelle ? 'p-5' : 'p-4'} cursor-pointer hover:bg-opacity-80 transition-colors`}
            >
              <span className={`${isDieZelle ? 'font-bold text-base' : 'font-semibold'} ${colors.text} flex items-center gap-2`}>
                📚 Lernziele
              </span>
              {lernzieleOpen
                ? <ChevronUp className={`w-5 h-5 ${colors.text}`} />
                : <ChevronDown className={`w-5 h-5 ${colors.text}`} />
              }
            </button>
            {lernzieleOpen && (
              <ul className={`${isDieZelle ? 'px-6 pb-5' : 'px-4 pb-4'} space-y-2.5`}>
                {uk.lernziele.map((ziel, i) => (
                  <li key={i} className={`flex items-start gap-3 ${isDieZelle ? 'text-base' : 'text-sm'} text-gray-700 dark:text-gray-300`}>
                    <span className={`${colors.text} ${isDieZelle ? 'text-lg mt-0.5 font-bold' : 'mt-0.5'}`}>&#8226;</span>
                    <span className="leading-relaxed">{ziel}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Structured sections */}
        {uk.sections.map((section, i) => (
          <div key={i} className={`space-y-4 ${isDieZelle ? 'mb-6' : 'space-y-3'}`}>
            <h3 className={`${isDieZelle ? 'text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2' : 'text-lg font-semibold text-gray-800 dark:text-gray-200'} border-l-4 ${colors.border} pl-4 ${isDieZelle ? 'pt-1' : 'pl-3'}`}>
              {isDieZelle && <span className="text-base font-normal text-gray-500 dark:text-gray-400 mr-2">{i + 1}.</span>}
              {section.heading}
            </h3>
            <div
              className={`${isDieZelle ? 'text-base leading-relaxed' : 'text-sm leading-relaxed'} text-gray-700 dark:text-gray-300 space-y-3`}
              dangerouslySetInnerHTML={{ __html: isDieZelle ? formatTextEnhanced(section.text) : formatText(section.text) }}
            />

            {/* Section merksatz */}
            {section.merksatz && (
              <div className={`${isDieZelle ? 'bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 shadow-sm' : 'bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400'} p-5 rounded-r-lg my-4`}>
                <p className={`font-bold ${isDieZelle ? 'text-base' : 'text-sm'} text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2`}>
                  <span className="text-lg">💡</span> Merke
                </p>
                <p className={`${isDieZelle ? 'text-base' : 'text-sm'} text-amber-900 dark:text-amber-200 leading-relaxed`} dangerouslySetInnerHTML={{ __html: isDieZelle ? formatTextEnhanced(section.merksatz) : formatText(section.merksatz) }} />
              </div>
            )}

            {/* Section table */}
            {section.table && (
              <div className={`overflow-x-auto rounded-lg border ${isDieZelle ? 'border-2 shadow-sm' : 'border'} border-gray-200 dark:border-gray-700 my-4`}>
                <table className={`w-full ${isDieZelle ? 'text-base' : 'text-sm'}`}>
                  <thead>
                    <tr className={`${colors.bg}`}>
                      {section.table.headers.map((h, hi) => (
                        <th key={hi} className={`text-left ${isDieZelle ? 'p-4' : 'p-3'} font-bold ${colors.text} border-b-2 border-gray-300 dark:border-gray-600`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr key={ri} className={`${isDieZelle ? 'hover:bg-gray-50 dark:hover:bg-gray-800/70' : ''} even:bg-gray-50 dark:even:bg-gray-800/50 transition-colors`}>
                        {row.map((cell, ci) => (
                          <td key={ci} className={`${isDieZelle ? 'p-4' : 'p-3'} text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800`} dangerouslySetInnerHTML={{ __html: cell }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {i < uk.sections!.length - 1 && (
              <hr className={`${isDieZelle ? 'my-8 border-t-2' : 'my-4'} border-gray-200 dark:border-gray-700`} />
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

  // Fallback: render plain content (with Kontrollfragen removed)
  return (
    <div className={`${isDieZelle ? 'space-y-8' : 'space-y-6'}`}>
      <div
        className={`${isDieZelle ? 'text-base' : 'text-sm'} text-gray-700 dark:text-gray-300 leading-relaxed space-y-3`}
        dangerouslySetInnerHTML={{ __html: isDieZelle ? formatTextEnhanced(cleanedContent) : formatText(cleanedContent, true) }}
      />
      {uk.diagram && (
        <div className={`${isDieZelle ? 'p-6' : 'p-4'} bg-gray-50 dark:bg-gray-800/50 rounded-xl`}>
          <DiagramSVG type={uk.diagram} />
        </div>
      )}
    </div>
  );
}

// Export extracted questions for use in parent component
export function getExtractedQuestions(uk: Unterkapitel): SelfTestQuestion[] {
  if (!uk.content) return uk.selfTest || [];
  const { questions } = extractKontrollfragen(uk.content);
  return questions.length > 0 ? questions : (uk.selfTest || []);
}
