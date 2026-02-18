import type { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "./supabase";
import { useStore } from "@/store/useStore";
import type { QuizResult, SpacedItem } from "@/store/useStore";

// ============================================================
// Pull: Supabase → useStore (beim Login)
// ============================================================

export async function pullFromSupabase(userId: string): Promise<void> {
  const client = supabase;
  if (!client) return;
  try {
    const [profileRes, quizRes, srRes, notesRes, bookmarksRes, activityRes] = await Promise.all([
      client.from("profiles").select("xp, level, streak_days, last_active_date, onboarding_completed").eq("id", userId).single(),
      client.from("quiz_results").select("*").eq("user_id", userId),
      client.from("spaced_repetition").select("*").eq("user_id", userId),
      client.from("user_notes").select("chapter_id, content").eq("user_id", userId),
      client.from("user_bookmarks").select("item_type, item_id").eq("user_id", userId),
      client.from("activity_log").select("*").eq("user_id", userId),
    ]);

    const state = useStore.getState();
    const patch: Record<string, unknown> = {};

    // --- Profile: höherer Wert gewinnt ---
    if (profileRes.data) {
      const p = profileRes.data;
      patch.xp = Math.max(state.xp, p.xp ?? 0);
      patch.streak = Math.max(state.streak, p.streak_days ?? 0);
      if (p.last_active_date) patch.lastActiveDate = p.last_active_date;
      if (p.onboarding_completed) patch.onboardingCompleted = true;
    }

    // --- Quiz Results: Union by ID ---
    if (quizRes.data && quizRes.data.length > 0) {
      const byId = new Map(state.quizResults.map((r) => [r.id, r]));
      for (const row of quizRes.data) {
        if (!byId.has(row.id)) {
          byId.set(row.id, {
            id: row.id,
            type: row.type,
            subject: row.subject ?? undefined,
            score: row.score,
            total: row.total,
            date: row.created_at?.split("T")[0] ?? new Date().toISOString().split("T")[0],
            timestamp: row.created_at,
            answers: Array.isArray(row.answers) ? row.answers : [],
          } as QuizResult);
        }
      }
      patch.quizResults = Array.from(byId.values());
    }

    // --- Spaced Repetition: späteres lastAnswered gewinnt ---
    if (srRes.data && srRes.data.length > 0) {
      const merged = { ...state.spacedRepetition };
      for (const row of srRes.data) {
        const remote: SpacedItem = {
          questionId: row.question_id,
          lastAnswered: row.last_answered,
          nextDue: row.next_due,
          interval: row.interval_days,
          easeFactor: Number(row.ease_factor),
          repetitions: row.repetitions,
        };
        const local = merged[remote.questionId];
        if (!local || remote.lastAnswered > local.lastAnswered) {
          merged[remote.questionId] = remote;
        }
      }
      patch.spacedRepetition = merged;
    }

    // --- Notes: Supabase gewinnt ---
    if (notesRes.data && notesRes.data.length > 0) {
      const merged = { ...state.notes };
      for (const row of notesRes.data) {
        merged[row.chapter_id] = row.content;
      }
      patch.notes = merged;
    }

    // --- Bookmarks: Union ---
    if (bookmarksRes.data) {
      const chapters = new Set(state.bookmarks.chapters);
      const questions = new Set(state.bookmarks.questions);
      for (const row of bookmarksRes.data) {
        if (row.item_type === "chapter") chapters.add(row.item_id);
        else questions.add(row.item_id);
      }
      patch.bookmarks = { chapters: [...chapters], questions: [...questions] };
    }

    // --- Activity Log: Max pro Datum ---
    if (activityRes.data && activityRes.data.length > 0) {
      const merged = { ...state.activityLog };
      for (const row of activityRes.data) {
        const existing = merged[row.date];
        merged[row.date] = {
          minutes: Math.max(existing?.minutes ?? 0, row.minutes),
          questions: Math.max(existing?.questions ?? 0, row.questions),
        };
      }
      patch.activityLog = merged;
    }

    if (Object.keys(patch).length > 0) {
      useStore.setState(patch);
      console.log("[main-sync] Pulled:", Object.keys(patch));
    }
  } catch (err) {
    console.error("[main-sync] Pull failed:", err);
  }
}

// ============================================================
// Push: useStore → Supabase
// ============================================================

export async function pushToSupabase(userId: string): Promise<void> {
  const client = supabase;
  if (!client) return;
  try {
    const s = useStore.getState();
    const level = Math.floor(s.xp / 100) + 1;

    await Promise.all([
      client.from("profiles").update({
        xp: s.xp,
        level,
        streak_days: s.streak,
        last_active_date: s.lastActiveDate || null,
        onboarding_completed: s.onboardingCompleted,
      }).eq("id", userId),

      pushQuizResults(client, userId, s.quizResults),
      pushSpacedRepetition(client, userId, Object.values(s.spacedRepetition)),
      pushNotes(client, userId, s.notes),
      pushBookmarks(client, userId, s.bookmarks),
      pushActivityLog(client, userId, s.activityLog),
    ]);

    console.log("[main-sync] Pushed");
  } catch (err) {
    console.error("[main-sync] Push failed:", err);
  }
}

async function pushQuizResults(client: SupabaseClient, userId: string, results: QuizResult[]) {
  if (results.length === 0) return;
  const rows = results.map((r) => ({
    id: r.id,
    user_id: userId,
    type: r.type,
    subject: r.subject ?? null,
    score: r.score,
    total: r.total,
    answers: r.answers,
    created_at: r.timestamp || r.date,
  }));
  for (let i = 0; i < rows.length; i += 200) {
    const { error } = await client.from("quiz_results").upsert(rows.slice(i, i + 200), { onConflict: "id" });
    if (error) throw error;
  }
}

async function pushSpacedRepetition(client: SupabaseClient, userId: string, items: SpacedItem[]) {
  if (items.length === 0) return;
  const rows = items.map((item) => ({
    user_id: userId,
    question_id: item.questionId,
    last_answered: item.lastAnswered,
    next_due: item.nextDue,
    interval_days: item.interval,
    ease_factor: item.easeFactor,
    repetitions: item.repetitions,
  }));
  for (let i = 0; i < rows.length; i += 200) {
    const { error } = await client.from("spaced_repetition").upsert(rows.slice(i, i + 200), { onConflict: "user_id,question_id" });
    if (error) throw error;
  }
}

async function pushNotes(client: SupabaseClient, userId: string, notes: Record<string, string>) {
  const entries = Object.entries(notes);
  if (entries.length === 0) return;
  const rows = entries.map(([chapterId, content]) => ({
    user_id: userId,
    chapter_id: chapterId,
    content,
    updated_at: new Date().toISOString(),
  }));
  for (let i = 0; i < rows.length; i += 200) {
    const { error } = await client.from("user_notes").upsert(rows.slice(i, i + 200), { onConflict: "user_id,chapter_id" });
    if (error) throw error;
  }
}

async function pushBookmarks(client: SupabaseClient, userId: string, bookmarks: { chapters: string[]; questions: string[] }) {
  await client.from("user_bookmarks").delete().eq("user_id", userId);
  const rows: { user_id: string; item_type: string; item_id: string }[] = [];
  for (const id of bookmarks.chapters) rows.push({ user_id: userId, item_type: "chapter", item_id: id });
  for (const id of bookmarks.questions) rows.push({ user_id: userId, item_type: "question", item_id: id });
  if (rows.length > 0) {
    for (let i = 0; i < rows.length; i += 200) {
      const { error } = await client.from("user_bookmarks").insert(rows.slice(i, i + 200));
      if (error) throw error;
    }
  }
}

async function pushActivityLog(client: SupabaseClient, userId: string, log: Record<string, { minutes: number; questions: number }>) {
  const entries = Object.entries(log);
  if (entries.length === 0) return;
  const rows = entries.map(([date, data]) => ({
    user_id: userId,
    date,
    minutes: data.minutes,
    questions: data.questions,
  }));
  for (let i = 0; i < rows.length; i += 200) {
    const { error } = await client.from("activity_log").upsert(rows.slice(i, i + 200), { onConflict: "user_id,date" });
    if (error) throw error;
  }
}

// ============================================================
// Auto-Sync Lifecycle
// ============================================================

let currentUserId: string | null = null;
let syncInterval: ReturnType<typeof setInterval> | null = null;
let unsubscribeStore: (() => void) | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

export function startMainSync(userId: string) {
  // Cleanup falls noch aktiv
  stopMainSync();
  currentUserId = userId;

  // Initial Pull
  pullFromSupabase(userId);

  // Periodic Push alle 2 Minuten
  syncInterval = setInterval(() => {
    if (currentUserId) pushToSupabase(currentUserId);
  }, 2 * 60 * 1000);

  // Subscribe: debounced Push bei Store-Änderungen (500ms)
  unsubscribeStore = useStore.subscribe(() => {
    if (!currentUserId) return;
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (currentUserId) pushToSupabase(currentUserId);
    }, 500);
  });

  // Push bei Page-Unload
  window.addEventListener("beforeunload", handleUnload);
}

export function stopMainSync() {
  if (syncInterval) { clearInterval(syncInterval); syncInterval = null; }
  if (unsubscribeStore) { unsubscribeStore(); unsubscribeStore = null; }
  if (debounceTimer) { clearTimeout(debounceTimer); debounceTimer = null; }
  window.removeEventListener("beforeunload", handleUnload);
  currentUserId = null;
}

function handleUnload() {
  if (currentUserId) pushToSupabase(currentUserId);
}
