import { supabase } from "./supabase";

export type QuestionType =
  | "bms"
  | "kff-zahlenfolgen"
  | "kff-figuren"
  | "kff-implikationen"
  | "kff-wortfluessigkeit"
  | "kff-gedaechtnis"
  | "tv"
  | "sek-ee"
  | "sek-er"
  | "sek-se";

export async function submitQuestionFeedback(
  questionId: string,
  questionType: QuestionType,
  feedbackText: string
): Promise<{ success: boolean; error?: string }> {
  if (!supabase) return { success: false, error: "Supabase nicht konfiguriert" };
  if (!feedbackText.trim()) return { success: false, error: "Feedback darf nicht leer sein" };

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { success: false, error: "Nicht eingeloggt" };

  const { error } = await supabase.from("question_feedback").insert({
    user_id: user.id,
    question_id: questionId,
    question_type: questionType,
    feedback_text: feedbackText.trim(),
  });

  if (error) return { success: false, error: error.message };
  return { success: true };
}
