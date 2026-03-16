-- Enhanced growth analytics RPCs for the conversion funnel.

-- Detailed registration funnel with conversion rates between steps
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

-- Landing page section engagement (which sections do users see?)
CREATE OR REPLACE FUNCTION public.analytics_section_engagement(days_back integer DEFAULT 30)
RETURNS TABLE (
  section text,
  view_count bigint,
  unique_viewers bigint
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT
    properties->>'section' as section,
    COUNT(*) as view_count,
    COUNT(DISTINCT visitor_id) as unique_viewers
  FROM public.analytics_events
  WHERE event_name = 'section_view'
    AND created_at > now() - (days_back || ' days')::interval
  GROUP BY properties->>'section'
  ORDER BY unique_viewers DESC;
$$;

-- Scroll depth distribution
CREATE OR REPLACE FUNCTION public.analytics_scroll_depth(days_back integer DEFAULT 30)
RETURNS TABLE (
  depth integer,
  unique_visitors bigint
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT
    (properties->>'depth')::integer as depth,
    COUNT(DISTINCT visitor_id) as unique_visitors
  FROM public.analytics_events
  WHERE event_name = 'scroll_depth'
    AND created_at > now() - (days_back || ' days')::interval
  GROUP BY (properties->>'depth')::integer
  ORDER BY depth;
$$;

-- Lead capture stats
CREATE OR REPLACE FUNCTION public.analytics_lead_stats(days_back integer DEFAULT 30)
RETURNS TABLE (
  total_leads bigint,
  converted_leads bigint,
  conversion_rate numeric,
  exit_intent_shown bigint,
  exit_intent_captured bigint,
  capture_rate numeric
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT
    (SELECT COUNT(*) FROM public.leads WHERE created_at > now() - (days_back || ' days')::interval) as total_leads,
    (SELECT COUNT(*) FROM public.leads WHERE converted_at IS NOT NULL AND created_at > now() - (days_back || ' days')::interval) as converted_leads,
    CASE
      WHEN (SELECT COUNT(*) FROM public.leads WHERE created_at > now() - (days_back || ' days')::interval) > 0
      THEN ROUND(
        (SELECT COUNT(*) FROM public.leads WHERE converted_at IS NOT NULL AND created_at > now() - (days_back || ' days')::interval)::numeric /
        (SELECT COUNT(*) FROM public.leads WHERE created_at > now() - (days_back || ' days')::interval) * 100, 1
      )
      ELSE 0
    END as conversion_rate,
    (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'exit_intent_shown' AND created_at > now() - (days_back || ' days')::interval) as exit_intent_shown,
    (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'conversion_lead_captured' AND created_at > now() - (days_back || ' days')::interval) as exit_intent_captured,
    CASE
      WHEN (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'exit_intent_shown' AND created_at > now() - (days_back || ' days')::interval) > 0
      THEN ROUND(
        (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'conversion_lead_captured' AND created_at > now() - (days_back || ' days')::interval)::numeric /
        (SELECT COUNT(*) FROM public.analytics_events WHERE event_name = 'exit_intent_shown' AND created_at > now() - (days_back || ' days')::interval) * 100, 1
      )
      ELSE 0
    END as capture_rate;
$$;

-- CTA performance (which CTAs drive the most signups?)
CREATE OR REPLACE FUNCTION public.analytics_cta_performance(days_back integer DEFAULT 30)
RETURNS TABLE (
  element_id text,
  click_count bigint,
  unique_clickers bigint
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT
    element_id,
    COUNT(*) as click_count,
    COUNT(DISTINCT visitor_id) as unique_clickers
  FROM public.analytics_events
  WHERE event_name = 'cta_click'
    AND element_id IS NOT NULL
    AND created_at > now() - (days_back || ' days')::interval
  GROUP BY element_id
  ORDER BY unique_clickers DESC
  LIMIT 20;
$$;
