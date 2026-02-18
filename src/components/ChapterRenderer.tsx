import React, { useMemo } from "react";
import { normalizeChapterContent } from "@/utils/normalizeChapterContent";
import { parseContentStructure } from "@/lib/contentStructure";
import { QuestionsWidget } from "@/components/QuestionsWidget";
import { InteractiveQuiz } from "@/components/chapter/InteractiveQuiz";

type Props = {
  rawText: string;
};

// Markdown-Formatierung (wie im Editor)
function formatText(text: string, escapeHtml = false): string {
  let t = text;
  if (escapeHtml) {
    t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  
  const lines = t.split('\n');
  const processed: string[] = [];
  let inBlockquote = false;
  let inOrderedList = false;
  let inUnorderedList = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Überschriften (# H1, ## H2, ### H3, etc.)
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const content = headingMatch[2];
      if (inBlockquote) { processed.push('</blockquote>'); inBlockquote = false; }
      if (inOrderedList) { processed.push('</ol>'); inOrderedList = false; }
      if (inUnorderedList) { processed.push('</ul>'); inUnorderedList = false; }
      processed.push(`<h${level}>${content}</h${level}>`);
      continue;
    }
    
    // Blockquotes
    const isBlockquote = /^>\s*(.+)$/.test(line);
    if (isBlockquote) {
      const content = line.replace(/^>\s*/, '');
      if (!inBlockquote) {
        if (inOrderedList) { processed.push('</ol>'); inOrderedList = false; }
        if (inUnorderedList) { processed.push('</ul>'); inUnorderedList = false; }
        processed.push('<blockquote>');
        inBlockquote = true;
      }
      processed.push(content);
      continue;
    }
    
    // Nummerierte Listen (1. ..., 2. ..., etc.)
    const orderedListMatch = /^\d+\.\s+(.+)$/.test(trimmed);
    if (orderedListMatch) {
      const content = trimmed.replace(/^\d+\.\s+/, '');
      if (!inOrderedList) {
        if (inBlockquote) { processed.push('</blockquote>'); inBlockquote = false; }
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
        if (inBlockquote) { processed.push('</blockquote>'); inBlockquote = false; }
        if (inOrderedList) { processed.push('</ol>'); inOrderedList = false; }
        processed.push('<ul>');
        inUnorderedList = true;
      }
      processed.push(`<li>${content}</li>`);
      continue;
    }
    
    // Normale Zeile
    if (inBlockquote) {
      processed.push('</blockquote>');
      inBlockquote = false;
    }
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
  
  if (inBlockquote) processed.push('</blockquote>');
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

export function ChapterRenderer({ rawText }: Props) {
  const normalized = normalizeChapterContent(rawText ?? "");
  const structured = useMemo(() => parseContentStructure(normalized), [normalized]);
  const { body, quizMarkdown, questions } = structured;

  return (
    <div className="space-y-8">
      {/* Haupttext (Body ohne Frontmatter und ohne Quiz-Block) */}
      <div className="content prose prose-lg max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: formatText(body, true),
          }}
        />
      </div>

      {/* Quiz: strukturierte Fragen in InteractiveQuiz, sonst Fallback Markdown in QuestionsWidget */}
      {questions.length > 0 ? (
        <InteractiveQuiz questions={questions} onAnswer={() => {}} onAllComplete={() => {}} />
      ) : quizMarkdown ? (
        <QuestionsWidget markdown={quizMarkdown} />
      ) : null}
    </div>
  );
}

