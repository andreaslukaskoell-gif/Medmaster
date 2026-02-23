import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "./useAuth";
import { getStichwortById } from "../data/stichwortliste";

export interface DueTopic {
  stichwortId: string;
  name: string;
  nextReviewAt: string | null;
}

/**
 * Lädt die Top 3 fälligen Themen aus stichwort_stats (next_review_at in Vergangenheit/Gegenwart),
 * mit Stichwort-Namen aus den statischen Daten.
 */
export function useDueReview(): {
  dueTopics: DueTopic[];
  loading: boolean;
} {
  const { user } = useAuth();
  const [dueTopics, setDueTopics] = useState<DueTopic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id || !supabase) {
      setDueTopics([]);
      setLoading(false);
      return;
    }

    const now = new Date().toISOString();

    (async () => {
      try {
        const { data, error } = await supabase
          .from("stichwort_stats")
          .select("stichwort_id, next_review_at")
          .eq("user_id", user.id)
          .lte("next_review_at", now)
          .order("next_review_at", { ascending: true })
          .limit(10);

        if (error) {
          console.warn("[useDueReview] Fehler:", error.message);
          setDueTopics([]);
          setLoading(false);
          return;
        }
        const rows = Array.isArray(data) ? data : [];
        const withNames: DueTopic[] = rows
          .slice(0, 3)
          .map((row: { stichwort_id: string; next_review_at: string | null }) => {
            const stichwortId = row.stichwort_id;
            const sw = getStichwortById(stichwortId);
            const name =
              sw?.thema ?? (stichwortId.includes("-kontroll-") ? "Kontrollfragen" : stichwortId);
            return { stichwortId, name, nextReviewAt: row.next_review_at ?? null };
          });
        setDueTopics(withNames);
      } catch (err) {
        console.warn("[useDueReview]", err);
        setDueTopics([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [user?.id]);

  return { dueTopics, loading };
}
