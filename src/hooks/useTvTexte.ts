/**
 * Lädt TV-Texte (Textverständnis) aus Supabase (kff_tasks, category: textverstaendnis).
 * Fallback: statische tvTexte + tvUebungstexte (~50 Texte), wenn DB leer oder nicht erreichbar.
 */
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { tvTexte } from "@/data/kffTextverstaendnis";
import { tvUebungstexte } from "@/data/tvUebungstexte";
import type { TVText } from "@/data/kffTextverstaendnis";

const fallbackTexte: TVText[] = [...tvTexte, ...tvUebungstexte];

function parseRow(row: { data_json: unknown }): TVText | null {
  const d = row.data_json as Record<string, unknown>;
  if (!d || typeof d !== "object" || !d.id || !d.title || !d.text || !Array.isArray(d.questions))
    return null;
  const questions = (d.questions as unknown[]).map((q) => {
    const qq = q as Record<string, unknown>;
    return {
      question: String(qq.question ?? ""),
      options: Array.isArray(qq.options) ? (qq.options as string[]) : [],
      correctAnswer: Number(qq.correctAnswer) || 0,
      explanation: String(qq.explanation ?? ""),
      relevantPassage:
        qq.relevantPassage !== undefined && qq.relevantPassage !== null
          ? String(qq.relevantPassage)
          : undefined,
    };
  });
  if (questions.some((q) => !q.question || q.options.length === 0)) return null;
  return {
    id: String(d.id),
    title: String(d.title),
    text: String(d.text),
    questions,
    difficulty: (d.difficulty === 1 || d.difficulty === 2 || d.difficulty === 3
      ? d.difficulty
      : 2) as 1 | 2 | 3,
    topic: String(d.topic ?? ""),
  };
}

export function useTvTexte(): {
  texts: TVText[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
} {
  const [texts, setTexts] = useState<TVText[]>(fallbackTexte);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFromDb = useCallback(async () => {
    if (!supabase) {
      setTexts(fallbackTexte);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    const { data, error: err } = await supabase
      .from("kff_tasks")
      .select("data_json")
      .eq("category", "textverstaendnis");

    if (err) {
      setError(err.message);
      setTexts(fallbackTexte);
      setLoading(false);
      return;
    }

    const parsed = (data ?? []).map(parseRow).filter((t): t is TVText => t !== null);

    const byId = new Map<string, TVText>();
    for (const t of parsed) byId.set(t.id, t);
    const merged = Array.from(byId.values());

    if (merged.length > 0) {
      setTexts(merged);
    } else {
      setTexts(fallbackTexte);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    queueMicrotask(() => fetchFromDb());
  }, [fetchFromDb]);

  return { texts, loading, error, refetch: fetchFromDb };
}
