import React from "react";

type Props = {
  markdown: string;
};

// Markdown-Formatierung für Fragen
function formatText(text: string, escapeHtml = false): string {
  let t = text;
  if (escapeHtml) {
    t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  
  const lines = t.split('\n');
  const processed: string[] = [];
  let inOrderedList = false;
  let inUnorderedList = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Überschriften (# H1, ## H2, etc.)
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const content = headingMatch[2];
      if (inOrderedList) { processed.push('</ol>'); inOrderedList = false; }
      if (inUnorderedList) { processed.push('</ul>'); inUnorderedList = false; }
      processed.push(`<h${level}>${content}</h${level}>`);
      continue;
    }
    
    // Nummerierte Listen (1. ..., 2. ..., etc.)
    const orderedListMatch = /^\d+\.\s+(.+)$/.test(trimmed);
    if (orderedListMatch) {
      const content = trimmed.replace(/^\d+\.\s+/, '');
      if (!inOrderedList) {
        if (inUnorderedList) { processed.push('</ul>'); inUnorderedList = false; }
        processed.push('<ol>');
        inOrderedList = true;
      }
      processed.push(`<li>${content}</li>`);
      continue;
    }
    
    // Unnummerierte Listen (- ..., * ..., etc.)
    const unorderedListMatch = /^[-*]\s+(.+)$/.test(trimmed);
    if (unorderedListMatch) {
      const content = trimmed.replace(/^[-*]\s+/, '');
      if (!inUnorderedList) {
        if (inOrderedList) { processed.push('</ol>'); inOrderedList = false; }
        processed.push('<ul>');
        inUnorderedList = true;
      }
      processed.push(`<li>${content}</li>`);
      continue;
    }
    
    // Normale Zeile
    if (inOrderedList) {
      processed.push('</ol>');
      inOrderedList = false;
    }
    if (inUnorderedList) {
      processed.push('</ul>');
      inUnorderedList = false;
    }
    
    processed.push(line);
  }
  
  if (inOrderedList) processed.push('</ol>');
  if (inUnorderedList) processed.push('</ul>');
  
  t = processed.join('\n');
  
  // Inline-Formatierung
  return t
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p class="mt-3">')
    .replace(/\n/g, '<br/>');
}

export function QuestionsWidget({ markdown }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Übungsfragen</h2>
      <div className="prose max-w-none text-gray-700 dark:text-gray-300">
        <div
          dangerouslySetInnerHTML={{
            __html: formatText(markdown, true),
          }}
        />
      </div>
    </div>
  );
}
