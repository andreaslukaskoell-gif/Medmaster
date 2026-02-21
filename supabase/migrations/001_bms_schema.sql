-- MedMaster BMS Kapitel & User Progress Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  username TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- BMS Chapters table
CREATE TABLE IF NOT EXISTS bms_chapters (
  id TEXT PRIMARY KEY, -- e.g., 'bio-kap1', 'chem-kap2'
  title TEXT NOT NULL,
  subject TEXT NOT NULL CHECK (subject IN ('biologie', 'chemie', 'physik', 'mathematik')),
  icon TEXT DEFAULT '📚',
  estimated_time TEXT DEFAULT '',
  order_index INTEGER DEFAULT 0,
  content JSONB, -- Stores full chapter structure (unterkapitel, etc.)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- BMS Subchapters table (for better querying)
CREATE TABLE IF NOT EXISTS bms_subchapters (
  id TEXT PRIMARY KEY,
  chapter_id TEXT NOT NULL REFERENCES bms_chapters(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT, -- Markdown content
  order_index INTEGER DEFAULT 0,
  lernziele JSONB,
  sections JSONB,
  merksätze JSONB,
  self_test JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- User Progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  chapter_id TEXT REFERENCES bms_chapters(id) ON DELETE CASCADE,
  subchapter_id TEXT REFERENCES bms_subchapters(id) ON DELETE CASCADE,
  is_completed BOOLEAN DEFAULT FALSE,
  last_reviewed TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  progress_data JSONB, -- Additional progress data (e.g., quiz scores, time spent)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(user_id, chapter_id, subchapter_id)
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_bms_chapters_subject ON bms_chapters(subject);
CREATE INDEX IF NOT EXISTS idx_bms_chapters_order ON bms_chapters(order_index);
CREATE INDEX IF NOT EXISTS idx_bms_subchapters_chapter ON bms_subchapters(chapter_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_chapter ON user_progress(chapter_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_subchapter ON user_progress(subchapter_id);

-- Row Level Security (RLS) Policies

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bms_chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE bms_subchapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read all, update only their own
CREATE POLICY "Profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- BMS Chapters: Public read, admin write
CREATE POLICY "BMS chapters are viewable by everyone" ON bms_chapters
  FOR SELECT USING (true);

CREATE POLICY "Only admins can insert chapters" ON bms_chapters
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.email LIKE '%@admin.medmaster%'
    )
  );

CREATE POLICY "Only admins can update chapters" ON bms_chapters
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.email LIKE '%@admin.medmaster%'
    )
  );

-- BMS Subchapters: Public read, admin write
CREATE POLICY "BMS subchapters are viewable by everyone" ON bms_subchapters
  FOR SELECT USING (true);

CREATE POLICY "Only admins can insert subchapters" ON bms_subchapters
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.email LIKE '%@admin.medmaster%'
    )
  );

CREATE POLICY "Only admins can update subchapters" ON bms_subchapters
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.email LIKE '%@admin.medmaster%'
    )
  );

-- User Progress: Users can only access their own progress
CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress" ON user_progress
  FOR DELETE USING (auth.uid() = user_id);

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, username)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_bms_chapters_updated_at
  BEFORE UPDATE ON bms_chapters
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_bms_subchapters_updated_at
  BEFORE UPDATE ON bms_subchapters
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_user_progress_updated_at
  BEFORE UPDATE ON user_progress
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
