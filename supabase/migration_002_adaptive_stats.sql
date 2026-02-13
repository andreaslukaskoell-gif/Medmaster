-- Migration 002: Adaptive Learning Stats
-- Run this in the Supabase SQL Editor AFTER schema.sql

-- ============================================================
-- 1) user_profiles — extends profiles with adaptive learning fields
-- ============================================================
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS exam_date DATE,
  ADD COLUMN IF NOT EXISTS learning_phase TEXT DEFAULT 'einstieg'
    CHECK (learning_phase IN ('einstieg', 'vertiefung', 'pruefung')),
  ADD COLUMN IF NOT EXISTS daily_challenge_streak INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS last_daily_challenge DATE,
  ADD COLUMN IF NOT EXISTS total_questions_answered INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS total_correct INTEGER DEFAULT 0;

-- ============================================================
-- 2) stichwort_stats — per-keyword performance tracking
-- ============================================================
CREATE TABLE IF NOT EXISTS stichwort_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  stichwort_id TEXT NOT NULL,
  total_attempts INTEGER DEFAULT 0,
  correct_attempts INTEGER DEFAULT 0,
  success_rate INTEGER DEFAULT 0,
  last_practiced DATE,
  confidence TEXT DEFAULT 'unbekannt' CHECK (confidence IN ('sicher', 'unsicher', 'unbekannt')),
  streak INTEGER DEFAULT 0,
  avg_time_per_question INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, stichwort_id)
);

CREATE INDEX IF NOT EXISTS idx_stichwort_stats_user ON stichwort_stats(user_id);
CREATE INDEX IF NOT EXISTS idx_stichwort_stats_user_sw ON stichwort_stats(user_id, stichwort_id);

-- ============================================================
-- 3) fach_stats — per-subject aggregate stats
-- ============================================================
CREATE TABLE IF NOT EXISTS fach_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  fach TEXT NOT NULL CHECK (fach IN ('biologie', 'chemie', 'physik', 'mathematik')),
  overall_success_rate INTEGER DEFAULT 0,
  weak_topics JSONB DEFAULT '[]'::jsonb,
  strong_topics JSONB DEFAULT '[]'::jsonb,
  recommended_daily_questions INTEGER DEFAULT 10,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, fach)
);

CREATE INDEX IF NOT EXISTS idx_fach_stats_user ON fach_stats(user_id);

-- ============================================================
-- RLS Policies
-- ============================================================
ALTER TABLE stichwort_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE fach_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own stichwort_stats"
  ON stichwort_stats FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users manage own fach_stats"
  ON fach_stats FOR ALL USING (auth.uid() = user_id);

-- Allow INSERT for authenticated users
CREATE POLICY "Users insert own stichwort_stats"
  ON stichwort_stats FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users insert own fach_stats"
  ON fach_stats FOR INSERT WITH CHECK (auth.uid() = user_id);
