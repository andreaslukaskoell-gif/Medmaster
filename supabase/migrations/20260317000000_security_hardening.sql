-- ============================================================
-- Security Hardening Migration
-- 1. Fix loose admin email patterns (LIKE → exact match)
-- 2. Restrict analytics_events SELECT to admin only (revert overly-permissive fix)
-- 3. Add admin checks to analytics RPCs
-- ============================================================

-- ── 1. Fix bms_chapters admin policies: LIKE → exact IN ──

DROP POLICY IF EXISTS "Only admins can insert chapters" ON bms_chapters;
CREATE POLICY "Only admins can insert chapters" ON bms_chapters
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email IN ('luki@medmaster.at', 'admin@medmaster.at')
    )
  );

DROP POLICY IF EXISTS "Only admins can update chapters" ON bms_chapters;
CREATE POLICY "Only admins can update chapters" ON bms_chapters
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email IN ('luki@medmaster.at', 'admin@medmaster.at')
    )
  );

-- ── 2. Fix bms_subchapters admin policies: LIKE → exact IN ──

DROP POLICY IF EXISTS "Only admins can insert subchapters" ON bms_subchapters;
CREATE POLICY "Only admins can insert subchapters" ON bms_subchapters
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email IN ('luki@medmaster.at', 'admin@medmaster.at')
    )
  );

DROP POLICY IF EXISTS "Only admins can update subchapters" ON bms_subchapters;
CREATE POLICY "Only admins can update subchapters" ON bms_subchapters
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email IN ('luki@medmaster.at', 'admin@medmaster.at')
    )
  );

-- ── 3. Fix tasks DELETE policy: LIKE → exact IN ──

DROP POLICY IF EXISTS "Only admins can delete tasks" ON tasks;
CREATE POLICY "Only admins can delete tasks" ON tasks
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email IN ('luki@medmaster.at', 'admin@medmaster.at')
    )
  );

-- ── 4. Restrict analytics_events SELECT back to admin-only ──
-- The previous migration (analytics_rls_fix) opened SELECT to all authenticated users.
-- Now that the dashboard uses Supabase auth + email check, we can enforce server-side.

DROP POLICY IF EXISTS "Authenticated users can read analytics events" ON analytics_events;
DROP POLICY IF EXISTS "Admin can read analytics events" ON analytics_events;

CREATE POLICY "Admin can read analytics events" ON analytics_events
  FOR SELECT TO authenticated
  USING (
    (SELECT email FROM auth.users WHERE id = auth.uid())
    IN ('luki@medmaster.at', 'admin@medmaster.at')
  );

-- ── 5. Recreate analytics RPCs with admin email check ──
-- Original RPCs were STABLE (respected RLS) but the RLS was too permissive.
-- Now that RLS is admin-only again, STABLE RPCs will correctly enforce it.
-- The SECURITY DEFINER RPCs from growth_analytics_rpcs need to be recreated
-- with an explicit admin check since SECURITY DEFINER bypasses RLS.

CREATE OR REPLACE FUNCTION public.analytics_registration_funnel(days_back integer DEFAULT 30)
RETURNS TABLE (
  step text,
  step_order integer,
  unique_visitors bigint,
  conversion_from_prev numeric,
  conversion_from_top numeric
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Admin-only check
  IF NOT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
    AND email IN ('luki@medmaster.at', 'admin@medmaster.at')
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  WITH funnel_steps AS (
    SELECT
      CASE ae.event_name
        WHEN 'page_view' THEN 'Besucher'
        WHEN 'scroll_depth' THEN 'Scroll 50%+'
        WHEN 'cta_click' THEN 'CTA-Klick'
        WHEN 'signup_click' THEN 'Signup-Klick'
        WHEN 'conversion_signup_started' THEN 'Signup gestartet'
        WHEN 'conversion_signup_completed' THEN 'Registrierung'
        WHEN 'onboarding_complete' THEN 'Onboarding'
        WHEN 'conversion_activation' THEN 'Erste Frage'
        WHEN 'conversion_lead_captured' THEN 'Lead (Exit-Intent)'
        ELSE ae.event_name
      END as step_name,
      CASE ae.event_name
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
      END as step_ord,
      COUNT(DISTINCT ae.visitor_id) as uv
    FROM public.analytics_events ae
    WHERE ae.created_at > now() - (days_back || ' days')::interval
      AND ae.event_name IN (
        'page_view', 'scroll_depth', 'cta_click', 'signup_click',
        'conversion_signup_started', 'conversion_signup_completed',
        'onboarding_complete', 'conversion_activation', 'conversion_lead_captured'
      )
      AND (ae.event_name != 'scroll_depth' OR (ae.properties->>'depth')::int >= 50)
    GROUP BY ae.event_name
  ),
  with_prev AS (
    SELECT
      fs.step_name,
      fs.step_ord,
      fs.uv,
      LAG(fs.uv) OVER (ORDER BY fs.step_ord) as prev_visitors,
      FIRST_VALUE(fs.uv) OVER (ORDER BY fs.step_ord) as top_visitors
    FROM funnel_steps fs
    WHERE fs.step_ord < 99
  )
  SELECT
    wp.step_name,
    wp.step_ord,
    wp.uv,
    CASE WHEN wp.prev_visitors > 0
      THEN ROUND((wp.uv::numeric / wp.prev_visitors) * 100, 1)
      ELSE 100
    END,
    CASE WHEN wp.top_visitors > 0
      THEN ROUND((wp.uv::numeric / wp.top_visitors) * 100, 1)
      ELSE 100
    END
  FROM with_prev wp
  ORDER BY wp.step_ord;
END;
$$;

CREATE OR REPLACE FUNCTION public.analytics_section_engagement(days_back integer DEFAULT 30)
RETURNS TABLE (
  section text,
  view_count bigint,
  unique_viewers bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
    AND email IN ('luki@medmaster.at', 'admin@medmaster.at')
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  SELECT
    ae.properties->>'section' as section,
    COUNT(*) as view_count,
    COUNT(DISTINCT ae.visitor_id) as unique_viewers
  FROM public.analytics_events ae
  WHERE ae.event_name = 'section_view'
    AND ae.created_at > now() - (days_back || ' days')::interval
  GROUP BY ae.properties->>'section'
  ORDER BY COUNT(DISTINCT ae.visitor_id) DESC;
END;
$$;

CREATE OR REPLACE FUNCTION public.analytics_scroll_depth(days_back integer DEFAULT 30)
RETURNS TABLE (
  depth integer,
  unique_visitors bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
    AND email IN ('luki@medmaster.at', 'admin@medmaster.at')
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  SELECT
    (ae.properties->>'depth')::integer as depth,
    COUNT(DISTINCT ae.visitor_id) as unique_visitors
  FROM public.analytics_events ae
  WHERE ae.event_name = 'scroll_depth'
    AND ae.created_at > now() - (days_back || ' days')::interval
  GROUP BY (ae.properties->>'depth')::integer
  ORDER BY (ae.properties->>'depth')::integer;
END;
$$;

CREATE OR REPLACE FUNCTION public.analytics_lead_stats(days_back integer DEFAULT 30)
RETURNS TABLE (
  total_leads bigint,
  converted_leads bigint,
  conversion_rate numeric,
  exit_intent_shown bigint,
  exit_intent_captured bigint,
  capture_rate numeric
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
    AND email IN ('luki@medmaster.at', 'admin@medmaster.at')
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  SELECT
    (SELECT COUNT(*) FROM public.leads WHERE created_at > now() - (days_back || ' days')::interval),
    (SELECT COUNT(*) FROM public.leads WHERE converted_at IS NOT NULL AND created_at > now() - (days_back || ' days')::interval),
    CASE
      WHEN (SELECT COUNT(*) FROM public.leads WHERE created_at > now() - (days_back || ' days')::interval) > 0
      THEN ROUND(
        (SELECT COUNT(*) FROM public.leads WHERE converted_at IS NOT NULL AND created_at > now() - (days_back || ' days')::interval)::numeric /
        (SELECT COUNT(*) FROM public.leads WHERE created_at > now() - (days_back || ' days')::interval) * 100, 1
      )
      ELSE 0
    END,
    (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'exit_intent_shown' AND created_at > now() - (days_back || ' days')::interval),
    (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'conversion_lead_captured' AND created_at > now() - (days_back || ' days')::interval),
    CASE
      WHEN (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'exit_intent_shown' AND created_at > now() - (days_back || ' days')::interval) > 0
      THEN ROUND(
        (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'conversion_lead_captured' AND created_at > now() - (days_back || ' days')::interval)::numeric /
        (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'exit_intent_shown' AND created_at > now() - (days_back || ' days')::interval) * 100, 1
      )
      ELSE 0
    END;
END;
$$;

CREATE OR REPLACE FUNCTION public.analytics_cta_performance(days_back integer DEFAULT 30)
RETURNS TABLE (
  element_id text,
  click_count bigint,
  unique_clickers bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
    AND email IN ('luki@medmaster.at', 'admin@medmaster.at')
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  SELECT
    ae.element_id,
    COUNT(*) as click_count,
    COUNT(DISTINCT ae.visitor_id) as unique_clickers
  FROM public.analytics_events ae
  WHERE ae.event_name = 'cta_click'
    AND ae.element_id IS NOT NULL
    AND ae.created_at > now() - (days_back || ' days')::interval
  GROUP BY ae.element_id
  ORDER BY COUNT(DISTINCT ae.visitor_id) DESC
  LIMIT 20;
END;
$$;
