-- Add user_agent column for bot/admin filtering
ALTER TABLE analytics_events ADD COLUMN IF NOT EXISTS user_agent text;

-- Index for filtering automated browsers
CREATE INDEX IF NOT EXISTS idx_analytics_user_agent ON analytics_events (user_agent)
  WHERE user_agent LIKE '%HeadlessChrome%' OR user_agent LIKE '%Playwright%';

-- Helper: returns TRUE for rows that should be excluded from dashboards
-- (automated browsers, known bot patterns)
CREATE OR REPLACE FUNCTION is_internal_traffic(ua text, props jsonb DEFAULT '{}')
RETURNS boolean
LANGUAGE sql IMMUTABLE
AS $$
  SELECT
    ua LIKE '%HeadlessChrome%'
    OR ua LIKE '%Playwright%'
    OR ua LIKE '%Puppeteer%'
    OR ua LIKE '%Selenium%'
    OR ua LIKE '%webdriver%'
    OR (props->>'is_bot')::boolean IS TRUE;
$$;

-- ── Updated RPCs: exclude internal traffic ──

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
    AND NOT is_internal_traffic(user_agent, properties)
  GROUP BY day
  ORDER BY day;
$$;

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
    AND NOT is_internal_traffic(user_agent, properties)
  GROUP BY page_path
  ORDER BY views DESC
  LIMIT lim;
$$;

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
    AND NOT is_internal_traffic(user_agent, properties)
  GROUP BY event_name
  ORDER BY count DESC
  LIMIT lim;
$$;

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
    AND NOT is_internal_traffic(user_agent, properties)
  GROUP BY event_name;
$$;

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
      AND NOT is_internal_traffic(user_agent, properties)
    ORDER BY session_id, created_at DESC
  )
  SELECT page_path, COUNT(*) AS exits
  FROM last_pages
  GROUP BY page_path
  ORDER BY exits DESC
  LIMIT lim;
$$;

CREATE OR REPLACE FUNCTION analytics_active_sessions()
RETURNS bigint
LANGUAGE sql STABLE
AS $$
  SELECT COUNT(DISTINCT session_id)
  FROM analytics_events
  WHERE event_name = 'page_view'
    AND created_at >= (now() - interval '30 minutes')
    AND NOT is_internal_traffic(user_agent, properties);
$$;

-- Also update the growth RPCs
CREATE OR REPLACE FUNCTION public.analytics_registration_funnel(days_back integer DEFAULT 30)
RETURNS TABLE (
  step text,
  step_order integer,
  unique_visitors bigint,
  conversion_from_prev numeric,
  conversion_from_top numeric
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  WITH funnel_steps AS (
    SELECT
      CASE event_name
        WHEN 'page_view' THEN 'Besucher'
        WHEN 'scroll_depth' THEN 'Scroll 50%+'
        WHEN 'cta_click' THEN 'CTA-Klick'
        WHEN 'signup_click' THEN 'Signup-Klick'
        WHEN 'conversion_signup_started' THEN 'Signup gestartet'
        WHEN 'conversion_signup_completed' THEN 'Registrierung'
        WHEN 'onboarding_complete' THEN 'Onboarding'
        WHEN 'conversion_activation' THEN 'Erste Frage'
        WHEN 'conversion_lead_captured' THEN 'Lead (Exit-Intent)'
        ELSE event_name
      END as step,
      CASE event_name
        WHEN 'page_view' THEN 1
        WHEN 'scroll_depth' THEN 2
        WHEN 'cta_click' THEN 3
        WHEN 'signup_click' THEN 4
        WHEN 'conversion_signup_started' THEN 5
        WHEN 'conversion_signup_completed' THEN 6
        WHEN 'onboarding_complete' THEN 7
        WHEN 'conversion_activation' THEN 8
        WHEN 'conversion_lead_captured' THEN 9
        ELSE 99
      END as step_order,
      COUNT(DISTINCT visitor_id) as unique_visitors
    FROM public.analytics_events
    WHERE created_at > now() - (days_back || ' days')::interval
      AND event_name IN (
        'page_view', 'scroll_depth', 'cta_click', 'signup_click',
        'conversion_signup_started', 'conversion_signup_completed',
        'onboarding_complete', 'conversion_activation', 'conversion_lead_captured'
      )
      AND (event_name != 'scroll_depth' OR (properties->>'depth')::int >= 50)
      AND NOT is_internal_traffic(user_agent, properties)
    GROUP BY event_name
  ),
  with_prev AS (
    SELECT
      step,
      step_order,
      unique_visitors,
      LAG(unique_visitors) OVER (ORDER BY step_order) as prev_visitors,
      FIRST_VALUE(unique_visitors) OVER (ORDER BY step_order) as top_visitors
    FROM funnel_steps
    WHERE step_order < 99
  )
  SELECT
    step,
    step_order,
    unique_visitors,
    CASE WHEN prev_visitors > 0
      THEN ROUND((unique_visitors::numeric / prev_visitors) * 100, 1)
      ELSE 100
    END as conversion_from_prev,
    CASE WHEN top_visitors > 0
      THEN ROUND((unique_visitors::numeric / top_visitors) * 100, 1)
      ELSE 100
    END as conversion_from_top
  FROM with_prev
  ORDER BY step_order;
$$;

-- ── NEW: Live user detail — active sessions with current page ──

CREATE OR REPLACE FUNCTION analytics_active_users_detail()
RETURNS TABLE(
  session_id text,
  visitor_id text,
  current_page text,
  page_since timestamptz,
  pages_viewed bigint
)
LANGUAGE sql STABLE
AS $$
  WITH active AS (
    SELECT DISTINCT session_id
    FROM analytics_events
    WHERE event_name = 'page_view'
      AND created_at >= (now() - interval '30 minutes')
      AND NOT is_internal_traffic(user_agent, properties)
  ),
  current AS (
    SELECT DISTINCT ON (e.session_id)
      e.session_id,
      e.visitor_id,
      e.page_path AS current_page,
      e.created_at AS page_since
    FROM analytics_events e
    INNER JOIN active a ON a.session_id = e.session_id
    WHERE e.event_name = 'page_view'
    ORDER BY e.session_id, e.created_at DESC
  ),
  counts AS (
    SELECT session_id, COUNT(*) AS pages_viewed
    FROM analytics_events
    WHERE event_name = 'page_view'
      AND session_id IN (SELECT session_id FROM active)
    GROUP BY session_id
  )
  SELECT c.session_id, c.visitor_id, c.current_page, c.page_since,
         COALESCE(ct.pages_viewed, 0)
  FROM current c
  LEFT JOIN counts ct ON ct.session_id = c.session_id
  ORDER BY c.page_since DESC;
$$;

-- ── NEW: Page engagement — avg time on page (based on consecutive page views) ──

CREATE OR REPLACE FUNCTION analytics_page_engagement(days_back int DEFAULT 7, lim int DEFAULT 15)
RETURNS TABLE(
  page_path text,
  avg_time_seconds numeric,
  total_views bigint,
  unique_visitors bigint
)
LANGUAGE sql STABLE
AS $$
  WITH ordered AS (
    SELECT
      session_id,
      visitor_id,
      page_path,
      created_at,
      LEAD(created_at) OVER (PARTITION BY session_id ORDER BY created_at) AS next_at
    FROM analytics_events
    WHERE event_name = 'page_view'
      AND page_path IS NOT NULL
      AND created_at >= (now() - (days_back || ' days')::interval)
      AND NOT is_internal_traffic(user_agent, properties)
  ),
  timed AS (
    SELECT
      page_path,
      visitor_id,
      EXTRACT(EPOCH FROM (next_at - created_at)) AS secs
    FROM ordered
    WHERE next_at IS NOT NULL
      AND EXTRACT(EPOCH FROM (next_at - created_at)) BETWEEN 2 AND 1800
  )
  SELECT
    page_path,
    ROUND(AVG(secs), 0) AS avg_time_seconds,
    COUNT(*) AS total_views,
    COUNT(DISTINCT visitor_id) AS unique_visitors
  FROM timed
  GROUP BY page_path
  ORDER BY avg_time_seconds DESC
  LIMIT lim;
$$;

-- Retroactively mark existing bot events (where user_agent was not stored, but we can
-- identify admin sessions by their user_id matching admin emails)
UPDATE analytics_events
SET properties = properties || '{"is_bot": true}'::jsonb
WHERE user_id IN (
  SELECT id FROM auth.users WHERE email IN ('luki@medmaster.at', 'admin@medmaster.at')
)
AND NOT (properties ? 'is_bot');
