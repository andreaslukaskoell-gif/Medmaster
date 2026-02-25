/**
 * Hook to fetch BMS questions from Supabase (bms_subchapters.questions JSONB)
 */
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export interface BMSQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correct: string; // "A" | "B" | "C" | "D" | "E"
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  ukId: string; // parent subchapter id
  ukTitle: string; // parent subchapter title
}

export interface BMSSubchapterMeta {
  id: string;
  title: string;
  chapterId: string;
  questionCount: number;
}

/** Load all subchapter metadata for a chapter (no question content) */
export function useBMSSubchapterList(chapterId: string | null) {
  const [subchapters, setSubchapters] = useState<BMSSubchapterMeta[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!chapterId || !supabase) {
      const t = setTimeout(() => {
        setSubchapters([]);
        setLoading(false);
      }, 0);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLoading(true), 0);
    supabase
      .from("bms_subchapters")
      .select("id, title, chapter_id, questions")
      .eq("chapter_id", chapterId)
      .order("order_index", { ascending: true })
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
          setLoading(false);
          return;
        }
        setSubchapters(
          (data || []).map((row) => ({
            id: row.id,
            title: row.title,
            chapterId: row.chapter_id,
            questionCount: Array.isArray(row.questions) ? row.questions.length : 0,
          }))
        );
        setLoading(false);
      });
    return () => clearTimeout(t);
  }, [chapterId]);

  return { subchapters, loading };
}

/** Load questions for one or more subchapter IDs */
export function useBMSQuestions(subchapterIds: string[]) {
  const [questions, setQuestions] = useState<BMSQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!subchapterIds.length || !supabase) return;
    const t = setTimeout(() => {
      setLoading(true);
      setError(null);
    }, 0);
    supabase
      .from("bms_subchapters")
      .select("id, title, questions")
      .in("id", subchapterIds)
      .then(({ data, error: err }) => {
        if (err) {
          setError(err.message);
          setLoading(false);
          return;
        }
        const allQ: BMSQuestion[] = [];
        (data || []).forEach((row) => {
          if (!Array.isArray(row.questions)) return;
          const rowId = row.id ?? "";
          const rowTitle = row.title ?? "";
          row.questions.forEach(
            (q: {
              id?: string;
              question?: string;
              options?: unknown;
              correct?: string;
              explanation?: string;
              difficulty?: string;
              tags?: string[];
            }) => {
              const opts = Array.isArray(q.options)
                ? (q.options as { id?: string; text?: string }[]).map((o) => ({
                    id: o.id ?? "",
                    text: o.text ?? "",
                  }))
                : [];
              const diff =
                q.difficulty === "easy" || q.difficulty === "hard" ? q.difficulty : "medium";
              allQ.push({
                id: q.id ?? "",
                question: q.question ?? "",
                options: opts,
                correct: q.correct ?? "",
                explanation: q.explanation ?? "",
                difficulty: diff,
                tags: q.tags ?? [],
                ukId: rowId,
                ukTitle: rowTitle,
              });
            }
          );
        });
        setQuestions(allQ);
        setLoading(false);
      });
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- stable key subchapterIds.join(",")
  }, [subchapterIds.join(",")]);

  return { questions, loading, error };
}
