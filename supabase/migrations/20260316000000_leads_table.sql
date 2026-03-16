-- Leads table: captures emails from exit-intent, newsletter, and other lead gen forms.
-- Used for lifecycle email campaigns and re-engagement.

CREATE TABLE IF NOT EXISTS public.leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  source text DEFAULT 'unknown', -- exit_intent, newsletter, blog, ad
  utm_source text,
  utm_campaign text,
  converted_at timestamptz, -- set when lead registers as user
  user_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now()
);

-- Unique constraint on email to prevent duplicates
ALTER TABLE public.leads ADD CONSTRAINT leads_email_unique UNIQUE (email);

-- Index for querying unconverted leads
CREATE INDEX IF NOT EXISTS idx_leads_unconverted ON public.leads (created_at DESC) WHERE converted_at IS NULL;

-- RLS: anon can insert (for exit-intent before auth), service_role can read/update
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (exit-intent popup captures before user is authenticated)
CREATE POLICY "anon_insert_leads" ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to insert (in case they're logged in on landing page somehow)
CREATE POLICY "auth_insert_leads" ON public.leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only service_role (backend/admin) can read leads
CREATE POLICY "service_read_leads" ON public.leads
  FOR SELECT
  TO service_role
  USING (true);

-- Admin RPC: get unconverted leads for email campaigns
CREATE OR REPLACE FUNCTION public.get_unconverted_leads(lim integer DEFAULT 100)
RETURNS TABLE (
  id uuid,
  email text,
  source text,
  utm_source text,
  created_at timestamptz
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT l.id, l.email, l.source, l.utm_source, l.created_at
  FROM public.leads l
  WHERE l.converted_at IS NULL
  ORDER BY l.created_at DESC
  LIMIT lim;
$$;

-- Admin RPC: mark lead as converted when they register
CREATE OR REPLACE FUNCTION public.convert_lead(lead_email text, auth_user_id uuid)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  UPDATE public.leads
  SET converted_at = now(), user_id = auth_user_id
  WHERE email = lead_email AND converted_at IS NULL;
$$;
