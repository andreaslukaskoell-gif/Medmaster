// src/utils/splitChapterContent.ts
export function splitChapterContent(text: string): { main: string; questions: string | null } {
  const regex = /#\s*(Übungsfragen|Kontrollfragen)[\s\S]*/i;
  const match = text.match(regex);

  if (!match || match.index === undefined) {
    return { main: text, questions: null };
  }

  const main = text.slice(0, match.index).trim();
  const questions = match[0].trim();

  return { main, questions };
}
