/**
 * Supabase Service for BMS Chapters and User Progress
 *
 * Provides functions to:
 * - Load BMS chapters from Supabase
 * - Save/update user progress
 * - Sync with localStorage as fallback
 */

import { supabase } from "./supabase";
import type { Kapitel, Unterkapitel } from "@/data/bmsKapitel/types";

// Database types
export interface BMSChapterRow {
  id: string;
  title: string;
  subject: "biologie" | "chemie" | "physik" | "mathematik";
  icon: string;
  estimated_time: string;
  order_index: number;
  content: any; // JSONB - full chapter structure
  created_at: string;
  updated_at: string;
}

export interface BMSSubchapterRow {
  id: string;
  chapter_id: string;
  title: string;
  content: string;
  order_index: number;
  lernziele: any;
  sections: any;
  merksätze: any;
  self_test: any;
  created_at: string;
  updated_at: string;
}

export interface UserProgressRow {
  id: string;
  user_id: string;
  chapter_id: string | null;
  subchapter_id: string | null;
  is_completed: boolean;
  last_reviewed: string;
  progress_data: any;
  created_at: string;
  updated_at: string;
}

/**
 * Convert database chapter row to Kapitel type
 */
function dbRowToKapitel(row: BMSChapterRow): Kapitel | null {
  try {
    // If content is already structured, use it
    if (row.content && typeof row.content === "object" && row.content.unterkapitel) {
      return {
        id: row.id,
        title: row.title,
        subject: row.subject,
        icon: row.icon || "📚",
        estimatedTime: row.estimated_time || "",
        unterkapitel: row.content.unterkapitel || [],
      };
    }

    // Otherwise, return minimal structure (subchapters loaded separately)
    return {
      id: row.id,
      title: row.title,
      subject: row.subject,
      icon: row.icon || "📚",
      estimatedTime: row.estimated_time || "",
      unterkapitel: [],
    };
  } catch (error) {
    console.error("Error converting DB row to Kapitel:", error);
    return null;
  }
}

/**
 * Load all BMS chapters from Supabase
 */
export async function loadBMSChaptersFromSupabase(): Promise<Kapitel[]> {
  const client = supabase;
  if (!client) return [];
  try {
    const { data, error } = await client
      .from("bms_chapters")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) {
      console.error("Error loading chapters from Supabase:", error);
      return [];
    }

    if (!data || data.length === 0) {
      console.log("No chapters found in Supabase");
      return [];
    }

    // Load subchapters for each chapter
    const chaptersWithSubchapters = await Promise.all(
      data.map(async (chapterRow) => {
        const { data: subchapters, error: subError } = await client
          .from("bms_subchapters")
          .select("*")
          .eq("chapter_id", chapterRow.id)
          .order("order_index", { ascending: true });

        if (subError) {
          console.error(`Error loading subchapters for ${chapterRow.id}:`, subError);
        }

        const kapitel = dbRowToKapitel(chapterRow);
        if (!kapitel) return null;

        // Convert subchapters
        if (subchapters && subchapters.length > 0) {
          kapitel.unterkapitel = subchapters.map((sub) => ({
            id: sub.id,
            title: sub.title,
            content: sub.content || "",
            lernziele: sub.lernziele || [],
            sections: sub.sections || [],
            merksätze: sub.merksätze || [],
            selfTest: sub.self_test || [],
          })) as Unterkapitel[];
        }

        return kapitel;
      })
    );

    return chaptersWithSubchapters.filter((ch): ch is Kapitel => ch !== null);
  } catch (error) {
    console.error("Error in loadBMSChaptersFromSupabase:", error);
    return [];
  }
}

/**
 * Load chapters by subject from Supabase
 */
export async function loadBMSChaptersBySubject(
  subject: "biologie" | "chemie" | "physik" | "mathematik"
): Promise<Kapitel[]> {
  const client = supabase;
  if (!client) return [];
  try {
    const { data, error } = await client
      .from("bms_chapters")
      .select("*")
      .eq("subject", subject)
      .order("order_index", { ascending: true });

    if (error) {
      console.error(`Error loading ${subject} chapters:`, error);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    // Load subchapters for each chapter
    const chaptersWithSubchapters = await Promise.all(
      data.map(async (chapterRow) => {
        const { data: subchapters } = await client
          .from("bms_subchapters")
          .select("*")
          .eq("chapter_id", chapterRow.id)
          .order("order_index", { ascending: true });

        const kapitel = dbRowToKapitel(chapterRow);
        if (!kapitel) return null;

        if (subchapters && subchapters.length > 0) {
          kapitel.unterkapitel = subchapters.map((sub) => ({
            id: sub.id,
            title: sub.title,
            content: sub.content || "",
            lernziele: sub.lernziele || [],
            sections: sub.sections || [],
            merksätze: sub.merksätze || [],
            selfTest: sub.self_test || [],
          })) as Unterkapitel[];
        }

        return kapitel;
      })
    );

    return chaptersWithSubchapters.filter((ch): ch is Kapitel => ch !== null);
  } catch (error) {
    console.error(`Error loading ${subject} chapters:`, error);
    return [];
  }
}

/**
 * Get user progress for a specific chapter
 */
export async function getUserProgress(
  userId: string,
  chapterId?: string,
  subchapterId?: string
): Promise<UserProgressRow[]> {
  const client = supabase;
  if (!client) return [];
  try {
    let query = client.from("user_progress").select("*").eq("user_id", userId);

    if (chapterId) {
      query = query.eq("chapter_id", chapterId);
    }
    if (subchapterId) {
      query = query.eq("subchapter_id", subchapterId);
    }

    const { data, error } = await query.order("updated_at", { ascending: false });

    if (error) {
      console.error("Error loading user progress:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Error in getUserProgress:", error);
    return [];
  }
}

/**
 * Save or update user progress
 */
export async function saveUserProgress(
  userId: string,
  chapterId: string | null,
  subchapterId: string | null,
  isCompleted: boolean,
  progressData?: any
): Promise<boolean> {
  const client = supabase;
  if (!client) return false;
  try {
    const { error } = await client.from("user_progress").upsert(
      {
        user_id: userId,
        chapter_id: chapterId,
        subchapter_id: subchapterId,
        is_completed: isCompleted,
        last_reviewed: new Date().toISOString(),
        progress_data: progressData || null,
      },
      {
        onConflict: "user_id,chapter_id,subchapter_id",
      }
    );

    if (error) {
      console.error("Error saving user progress:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error in saveUserProgress:", error);
    return false;
  }
}

/**
 * Get current user ID from Supabase session
 */
export async function getCurrentUserId(): Promise<string | null> {
  if (!supabase) return null;
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user?.id || null;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

/**
 * Sync chapters from localStorage to Supabase (admin function)
 * This should be run once to migrate existing chapters
 */
export async function syncChaptersToSupabase(chapters: Kapitel[]): Promise<boolean> {
  const client = supabase;
  if (!client) return false;
  try {
    const currentUser = await getCurrentUserId();
    if (!currentUser) {
      console.error("No authenticated user for sync");
      return false;
    }

    const { data: profile } = await client
      .from("profiles")
      .select("email")
      .eq("id", currentUser)
      .single();

    if (!profile || !profile.email?.includes("@admin")) {
      console.error("User is not authorized to sync chapters");
      return false;
    }

    for (const chapter of chapters) {
      const { error: chapterError } = await client.from("bms_chapters").upsert(
        {
          id: chapter.id,
          title: chapter.title,
          subject: chapter.subject,
          icon: chapter.icon,
          estimated_time: chapter.estimatedTime,
          content: { unterkapitel: chapter.unterkapitel },
        },
        { onConflict: "id" }
      );

      if (chapterError) {
        console.error(`Error syncing chapter ${chapter.id}:`, chapterError);
        continue;
      }

      for (const subchapter of chapter.unterkapitel) {
        const { error: subError } = await client.from("bms_subchapters").upsert(
          {
            id: subchapter.id,
            chapter_id: chapter.id,
            title: subchapter.title,
            content: subchapter.content,
            lernziele: subchapter.lernziele || [],
            sections: subchapter.sections || [],
            merksätze: subchapter.merksätze || [],
            self_test: subchapter.selfTest || [],
          },
          { onConflict: "id" }
        );

        if (subError) {
          console.error(`Error syncing subchapter ${subchapter.id}:`, subError);
        }
      }
    }

    console.log(`✅ Synced ${chapters.length} chapters to Supabase`);
    return true;
  } catch (error) {
    console.error("Error syncing chapters to Supabase:", error);
    return false;
  }
}
