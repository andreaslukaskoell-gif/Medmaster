-- Migration 005: Add status to stichwort_stats for Kontrollfragen (offen / meister)
-- Run in Supabase SQL Editor after migration_002_adaptive_stats.sql

ALTER TABLE stichwort_stats
  ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'offen'
  CHECK (status IN ('offen', 'meister'));

COMMENT ON COLUMN stichwort_stats.status IS 'offen = noch nicht 3x richtig; meister = 3x hintereinander richtig';
