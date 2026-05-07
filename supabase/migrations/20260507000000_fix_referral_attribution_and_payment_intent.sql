-- Fix referral attribution + add payment_intent fallback for auto-refund.
--
-- Problem 1 (referral attribution):
-- The client-side useReferralAttribution() hook tried to find the referrer via
-- supabase.from("profiles").select("id").ilike("id", `${refCode}%`). The profiles
-- RLS policy only allows reading auth.uid() = id, so the lookup always returned
-- 0 rows for any other user → silent .catch(() => {}) → referrals row never written
-- → mark_referee_paid found no relation → no auto-refund triggered.
--
-- Problem 2 (auto-refund customer lookup):
-- Stripe Payment Links do not always create a Customer object for one-time
-- purchases, leaving profiles.stripe_customer_id NULL. The auto-refund code
-- relied on stripe.paymentIntents.list({ customer }) which fails when null.

-- ── 1. add fallback column for direct PI lookup ──
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS last_payment_intent_id text;

-- ── 2. SECURITY DEFINER RPC that bypasses profiles RLS ──
CREATE OR REPLACE FUNCTION register_referral(referrer_prefix text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
  caller_id uuid := auth.uid();
  resolved_referrer uuid;
  inserted_id uuid;
BEGIN
  IF caller_id IS NULL THEN
    RAISE EXCEPTION 'not authenticated';
  END IF;

  -- ref-code is first 8 chars of the referrer's user id
  IF referrer_prefix IS NULL OR length(referrer_prefix) < 6 OR length(referrer_prefix) > 36 THEN
    RETURN NULL;
  END IF;

  -- self-referral guard
  IF caller_id::text LIKE referrer_prefix || '%' THEN
    RETURN NULL;
  END IF;

  -- find referrer by id prefix (cast uuid to text for ILIKE)
  SELECT id INTO resolved_referrer
  FROM auth.users
  WHERE id::text LIKE referrer_prefix || '%'
  LIMIT 1;

  IF resolved_referrer IS NULL OR resolved_referrer = caller_id THEN
    RETURN NULL;
  END IF;

  -- idempotent insert (UNIQUE on referee_id)
  INSERT INTO referrals (referrer_id, referee_id, ref_code)
  VALUES (resolved_referrer, caller_id, referrer_prefix)
  ON CONFLICT (referee_id) DO NOTHING
  RETURNING id INTO inserted_id;

  RETURN COALESCE(inserted_id, (SELECT id FROM referrals WHERE referee_id = caller_id));
END;
$$;

GRANT EXECUTE ON FUNCTION register_referral(text) TO authenticated;

-- ── 3. backfill Felix → Giuseppe (only known broken case) ──
DO $$
DECLARE
  felix_id   uuid := '63329132-a3da-436b-a34e-eafc8f6ad935';
  giuseppe_id uuid := 'c9f42fdf-f244-435d-a52a-798dfe915fd3';
BEGIN
  IF EXISTS (SELECT 1 FROM auth.users WHERE id = felix_id)
     AND EXISTS (SELECT 1 FROM auth.users WHERE id = giuseppe_id)
     AND NOT EXISTS (SELECT 1 FROM referrals WHERE referee_id = felix_id) THEN
    INSERT INTO referrals (referrer_id, referee_id, ref_code, referee_paid, referee_paid_at, reward_granted, reward_granted_at)
    VALUES (giuseppe_id, felix_id, 'c9f42fdf', true, now(), true, now());
  END IF;
END $$;
