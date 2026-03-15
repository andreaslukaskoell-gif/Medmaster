-- Analytics events table for in-app dashboard
-- Tracks page views, clicks, and funnel events for admin-only analysis.

CREATE TABLE IF NOT EXISTS analytics_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  event_name text NOT NULL,
  page_path text,
  element_id text,
  visitor_id text,
  session_id text,
  user_id uuid,
  referrer text,
  properties jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Indexes for efficient dashboard queries
CREATE INDEX idx_analytics_event_name ON analytics_events (event_name);
CREATE INDEX idx_analytics_created_at ON analytics_events (created_at DESC);
CREATE INDEX idx_analytics_visitor ON analytics_events (visitor_id);
CREATE INDEX idx_analytics_session ON analytics_events (session_id);
CREATE INDEX idx_analytics_event_date ON analytics_events (event_name, created_at DESC);

-- RLS: anyone can insert (including anonymous visitors), only admin can read
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert analytics events"
  ON analytics_events FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admin can read analytics events"
  ON analytics_events FOR SELECT
  TO authenticated
  USING (
    (SELECT email FROM auth.users WHERE id = auth.uid())
    IN ('luki@medmaster.at', 'admin@medmaster.at')
  );

-- No UPDATE or DELETE policies — analytics data is append-only

-- ── RPC functions for dashboard aggregation ──

-- Daily visitor and page view counts
CREATE OR REPLACE FUNCTION analytics_daily_stats(days_back int DEFAULT 30)
RETURNS TABLE(day date, visitors bigint, page_views bigint)
LANGUAGE sql STABLE
AS $$
  SELECT
    (created_at AT TIME ZONE 'Europe/Vienna')::date AS day,
    COUNT(DISTINCT visitor_id) AS visitors,
    COUNT(*) AS page_views
  FROM analytics_events
  WHERE event_name = 'page_view'
    AND created_at >= (now() - (days_back || ' days')::interval)
  GROUP BY day
  ORDER BY day;
$$;

-- Top visited pages
CREATE OR REPLACE FUNCTION analytics_top_pages(days_back int DEFAULT 7, lim int DEFAULT 10)
RETURNS TABLE(page_path text, views bigint, visitors bigint)
LANGUAGE sql STABLE
AS $$
  SELECT
    page_path,
    COUNT(*) AS views,
    COUNT(DISTINCT visitor_id) AS visitors
  FROM analytics_events
  WHERE event_name = 'page_view'
    AND page_path IS NOT NULL
    AND created_at >= (now() - (days_back || ' days')::interval)
  GROUP BY page_path
  ORDER BY views DESC
  LIMIT lim;
$$;

-- Top custom events (excludes page_view)
CREATE OR REPLACE FUNCTION analytics_top_events(days_back int DEFAULT 7, lim int DEFAULT 10)
RETURNS TABLE(event_name text, count bigint)
LANGUAGE sql STABLE
AS $$
  SELECT
    event_name,
    COUNT(*) AS count
  FROM analytics_events
  WHERE event_name NOT IN ('page_view', 'session_start')
    AND created_at >= (now() - (days_back || ' days')::interval)
  GROUP BY event_name
  ORDER BY count DESC
  LIMIT lim;
$$;

-- Funnel: distinct visitors per funnel step
CREATE OR REPLACE FUNCTION analytics_funnel(days_back int DEFAULT 30)
RETURNS TABLE(step text, visitors bigint)
LANGUAGE sql STABLE
AS $$
  SELECT
    event_name AS step,
    COUNT(DISTINCT visitor_id) AS visitors
  FROM analytics_events
  WHERE event_name IN (
    'page_view', 'cta_click', 'signup_click',
    'signup', 'login', 'onboarding_complete',
    'chapter_open', 'quiz_start', 'quiz_complete'
  )
    AND created_at >= (now() - (days_back || ' days')::interval)
  GROUP BY event_name;
$$;

-- Exit pages: last page viewed per session
CREATE OR REPLACE FUNCTION analytics_exit_pages(days_back int DEFAULT 7, lim int DEFAULT 10)
RETURNS TABLE(page_path text, exits bigint)
LANGUAGE sql STABLE
AS $$
  WITH last_pages AS (
    SELECT DISTINCT ON (session_id) page_path
    FROM analytics_events
    WHERE event_name = 'page_view'
      AND page_path IS NOT NULL
      AND session_id IS NOT NULL
      AND created_at >= (now() - (days_back || ' days')::interval)
    ORDER BY session_id, created_at DESC
  )
  SELECT page_path, COUNT(*) AS exits
  FROM last_pages
  GROUP BY page_path
  ORDER BY exits DESC
  LIMIT lim;
$$;

-- Active sessions (page_view in last 30 minutes)
CREATE OR REPLACE FUNCTION analytics_active_sessions()
RETURNS bigint
LANGUAGE sql STABLE
AS $$
  SELECT COUNT(DISTINCT session_id)
  FROM analytics_events
  WHERE event_name = 'page_view'
    AND created_at >= (now() - interval '30 minutes');
$$;
