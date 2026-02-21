/**
 * Hook to fetch BMS questions from Supabase (bms_subchapters.questions JSONB)
 */
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface BMSQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correct: string;        // "A" | "B" | "C" | "D" | "E"
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  ukId: string;           // parent subchapter id
  ukTitle: string;        // parent subchapter title
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
    if (!chapterId || !supabase) return;
    setLoading(true);
    supabase
      .from('bms_subchapters')
      .select('id, title, chapter_id, questions')
      .eq('chapter_id', chapterId)
      .order('order_index', { ascending: true })
      .then(({ data, error }) => {
        if (error) { console.error(error); setLoading(false); return; }
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
    setLoading(true);
    setError(null);

    supabase
      .from('bms_subchapters')
      .select('id, title, questions')
      .in('id', subchapterIds)
      .then(({ data, error: err }) => {
        if (err) { setError(err.message); setLoading(false); return; }
        const allQ: BMSQuestion[] = [];
        (data || []).forEach((row) => {
          if (!Array.isArray(row.questions)) return;
          row.questions.forEach((q: any) => {
            allQ.push({
              id: q.id,
              question: q.question,
              options: q.options,
              correct: q.correct,
              explanation: q.explanation || '',
              difficulty: q.difficulty || 'medium',
              tags: q.tags || [],
              ukId: row.id,
              ukTitle: row.title,
            });
          });
        });
        setQuestions(allQ);
        setLoading(false);
      });
  }, [subchapterIds.join(',')]);

  return { questions, loading, error };
}
