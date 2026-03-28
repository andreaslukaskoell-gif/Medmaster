-- Analytics RPCs for session duration, daily signups, and daily logins

-- 1. Session duration aggregated by day
CREATE OR REPLACE FUNCTION analytics_session_duration_by_day(days_back int DEFAULT 7)
RETURNS TABLE(day date, avg_duration_seconds numeric, median_duration_seconds numeric, total_sessions bigint)
LANGUAGE sql STABLE SECURITY DEFINER
AS $$
  SELECT
    (created_at AT TIME ZONE 'Europe/Vienna')::date AS day,
    ROUND(AVG((properties->>'session_duration_seconds')::numeric), 0),
    ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY (properties->>'session_duration_seconds')::numeric)::numeric, 0),
    COUNT(*)
  FROM analytics_events
  WHERE event_name = 'session_end'
    AND created_at >= now() - (days_back || ' days')::interval
    AND NOT is_internal_traffic(user_agent, properties)
    AND (properties->>'session_duration_seconds')::numeric BETWEEN 3 AND 7200
  GROUP BY 1
  ORDER BY 1;
$$;

-- 2. Daily unique signups (deduplicated by user_id per day)
CREATE OR REPLACE FUNCTION analytics_daily_signups(days_back int DEFAULT 30)
RETURNS TABLE(day date, unique_signups bigint)
LANGUAGE sql STABLE SECURITY DEFINER
AS $$
  SELECT
    (created_at AT TIME ZONE 'Europe/Vienna')::date AS day,
    COUNT(DISTINCT COALESCE(user_id::text, visitor_id))
  FROM analytics_events
  WHERE event_name = 'conversion_signup_completed'
    AND created_at >= now() - (days_back || ' days')::interval
    AND NOT is_internal_traffic(user_agent, properties)
  GROUP BY 1
  ORDER BY 1;
$$;

-- 3. Daily unique logins (deduplicated by user_id per day)
CREATE OR REPLACE FUNCTION analytics_daily_logins(days_back int DEFAULT 30)
RETURNS TABLE(day date, unique_logins bigint)
LANGUAGE sql STABLE SECURITY DEFINER
AS $$
  SELECT
    (created_at AT TIME ZONE 'Europe/Vienna')::date AS day,
    COUNT(DISTINCT COALESCE(user_id::text, visitor_id))
  FROM analytics_events
  WHERE event_name = 'login'
    AND created_at >= now() - (days_back || ' days')::interval
    AND NOT is_internal_traffic(user_agent, properties)
  GROUP BY 1
  ORDER BY 1;
$$;

-- 4. Combined daily user activity (signups + logins + avg session duration in one call)
CREATE OR REPLACE FUNCTION analytics_daily_user_activity(days_back int DEFAULT 30)
RETURNS TABLE(day date, signups bigint, logins bigint, avg_session_seconds numeric)
LANGUAGE sql STABLE SECURITY DEFINER
AS $$
  WITH days AS (
    SELECT generate_series(
      (now() - (days_back || ' days')::interval)::date,
      now()::date,
      '1 day'::interval
    )::date AS day
  ),
  s AS (
    SELECT (created_at AT TIME ZONE 'Europe/Vienna')::date AS day,
           COUNT(DISTINCT COALESCE(user_id::text, visitor_id)) AS cnt
    FROM analytics_events
    WHERE event_name = 'conversion_signup_completed'
      AND created_at >= now() - (days_back || ' days')::interval
      AND NOT is_internal_traffic(user_agent, properties)
    GROUP BY 1
  ),
  l AS (
    SELECT (created_at AT TIME ZONE 'Europe/Vienna')::date AS day,
           COUNT(DISTINCT COALESCE(user_id::text, visitor_id)) AS cnt
    FROM analytics_events
    WHERE event_name = 'login'
      AND created_at >= now() - (days_back || ' days')::interval
      AND NOT is_internal_traffic(user_agent, properties)
    GROUP BY 1
  ),
  d AS (
    SELECT (created_at AT TIME ZONE 'Europe/Vienna')::date AS day,
           ROUND(AVG((properties->>'session_duration_seconds')::numeric), 0) AS avg_sec
    FROM analytics_events
    WHERE event_name = 'session_end'
      AND created_at >= now() - (days_back || ' days')::interval
      AND NOT is_internal_traffic(user_agent, properties)
      AND (properties->>'session_duration_seconds')::numeric BETWEEN 3 AND 7200
    GROUP BY 1
  )
  SELECT days.day,
         COALESCE(s.cnt, 0),
         COALESCE(l.cnt, 0),
         COALESCE(d.avg_sec, 0)
  FROM days
  LEFT JOIN s ON s.day = days.day
  LEFT JOIN l ON l.day = days.day
  LEFT JOIN d ON d.day = days.day
  ORDER BY days.day;
$$;
