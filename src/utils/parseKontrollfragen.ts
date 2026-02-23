import type { SelfTestQuestion } from "@/data/bmsKapitel/types";

/**
 * Parse Kontrollfragen from free text format into structured SelfTestQuestion format
 *
 * Expected format:
 * ## Kontrollfragen
 *
 * 1. Question text?
 *    A) Option 1
 *    B) Option 2
 *    C) Option 3
 *    ...
 *
 * 2. Next question...
 *
 * Returns array of SelfTestQuestion objects with fallbacks for missing data
 */
export function parseKontrollfragen(text: string): SelfTestQuestion[] {
  if (!text || typeof text !== "string") {
    return [];
  }

  // Remove the header "## Kontrollfragen" or similar (inkl. Quiz für ContentStructure)
  const cleanedText = text
    .replace(/^#+\s*(Kontrollfragen|Übungsfragen|Selbsttest|Quiz)[\s\S]*?\n/i, "")
    .trim();

  if (!cleanedText) {
    return [];
  }

  const questions: SelfTestQuestion[] = [];
  const lines = cleanedText.split("\n");

  let currentQuestion: Partial<SelfTestQuestion> | null = null;
  let currentOptions: string[] = [];
  let questionNumber = 0;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const originalLine = line;
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) continue;

    // Detect question start: "1. Question text" or "1) Question text"
    const questionMatch = trimmed.match(/^\d+[.)]\s+(.+)$/);
    if (questionMatch) {
      // Save previous question if exists
      if (currentQuestion && currentQuestion.question && currentOptions.length > 0) {
        questions.push({
          question: currentQuestion.question.trim(),
          options: currentOptions,
          correctIndex: currentQuestion.correctIndex ?? 0,
          explanation: currentQuestion.explanation || "Erklärung folgt",
        });
      }

      // Start new question
      questionNumber++;
      currentQuestion = {
        question: questionMatch[1],
        correctIndex: 0, // Default, should be set manually or detected
        explanation: "Erklärung folgt",
      };
      currentOptions = [];
      continue;
    }

    // Detect option: "A) Option text" or "A. Option text" or "   A) Option text" (with indentation)
    const optionMatch = trimmed.match(/^[A-E][.)]\s+(.+)$/);
    if (optionMatch) {
      if (currentQuestion) {
        currentOptions.push(optionMatch[1]);
      }
      continue;
    }

    // If we're in a question context but line doesn't match question/option pattern,
    // it might be continuation of question text (multi-line question) or indented option
    if (currentQuestion) {
      if (currentOptions.length === 0) {
        // Continuation of question text (multi-line question)
        currentQuestion.question = (currentQuestion.question || "") + " " + trimmed;
      } else {
        // Might be continuation of last option (multi-line option)
        // Or might be a new question/option starting
        // For now, skip lines that don't match patterns
      }
    }
  }

  // Save last question
  if (currentQuestion && currentQuestion.question && currentOptions.length > 0) {
    questions.push({
      question: currentQuestion.question.trim(),
      options: currentOptions,
      correctIndex: currentQuestion.correctIndex ?? 0,
      explanation: currentQuestion.explanation || "Erklärung folgt",
    });
  }

  return questions;
}

/**
 * Extract and remove Kontrollfragen section from content text
 * Returns: { cleanedContent: string, questions: SelfTestQuestion[] }
 */
export function extractKontrollfragen(content: string): {
  cleanedContent: string;
  questions: SelfTestQuestion[];
} {
  if (!content || typeof content !== "string") {
    return { cleanedContent: content || "", questions: [] };
  }

  // Find Kontrollfragen section
  const regex = /##\s*(Kontrollfragen|Übungsfragen|Selbsttest|Quiz)[\s\S]*$/i;
  const match = content.match(regex);

  if (!match || match.index === undefined) {
    return { cleanedContent: content, questions: [] };
  }

  // Split content
  const mainContent = content.slice(0, match.index).trim();
  const questionsText = match[0];

  // Parse questions
  const questions = parseKontrollfragen(questionsText);

  return {
    cleanedContent: mainContent,
    questions,
  };
}
