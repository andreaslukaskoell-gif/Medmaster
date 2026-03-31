-- Secure leads RPCs with admin email check (previously any authenticated user could read all leads)

CREATE OR REPLACE FUNCTION public.get_unconverted_leads(lim integer DEFAULT 100)
RETURNS TABLE (
  id uuid,
  email text,
  source text,
  utm_source text,
  created_at timestamptz
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
  SELECT l.id, l.email, l.source, l.utm_source, l.created_at
  FROM public.leads l
  WHERE l.converted_at IS NULL
  ORDER BY l.created_at DESC
  LIMIT lim;
END;
$$;

CREATE OR REPLACE FUNCTION public.convert_lead(lead_email text, auth_user_id uuid)
RETURNS void
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

  UPDATE public.leads
  SET converted_at = now(), user_id = auth_user_id
  WHERE email = lead_email AND converted_at IS NULL;
END;
$$;
