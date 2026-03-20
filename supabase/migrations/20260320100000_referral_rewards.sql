-- Referral Rewards: 5€ cap per user, activated when referee pays
-- Extends existing referrals table with reward tracking

-- Add reward columns to existing referrals table
ALTER TABLE referrals
  ADD COLUMN IF NOT EXISTS referee_paid boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS referee_paid_at timestamptz,
  ADD COLUMN IF NOT EXISTS reward_granted boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS reward_granted_at timestamptz;

-- Track total reward per referrer (capped at 500 cents = 5€)
-- This is a materialized view approach: we compute from referrals table directly

-- Function: Get reward status for a user (referrer perspective)
CREATE OR REPLACE FUNCTION get_referral_reward_status(user_uuid uuid)
RETURNS TABLE(
  total_referrals integer,
  paid_referrals integer,
  reward_cents integer,
  reward_capped boolean,
  max_reward_cents integer
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    COUNT(*)::integer AS total_referrals,
    COUNT(*) FILTER (WHERE referee_paid = true)::integer AS paid_referrals,
    LEAST(COUNT(*) FILTER (WHERE referee_paid = true)::integer * 500, 500)::integer AS reward_cents,
    (COUNT(*) FILTER (WHERE referee_paid = true)::integer >= 1) AS reward_capped,
    500::integer AS max_reward_cents
  FROM referrals
  WHERE referrer_id = user_uuid;
$$;

-- Function: Mark referee as paid (called by Stripe webhook or admin)
-- Returns true if reward was newly granted to referrer
CREATE OR REPLACE FUNCTION mark_referee_paid(referee_uuid uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_referrer_id uuid;
  v_already_paid boolean;
  v_referrer_paid_count integer;
BEGIN
  -- Find the referral record
  SELECT referrer_id, referee_paid
  INTO v_referrer_id, v_already_paid
  FROM referrals
  WHERE referee_id = referee_uuid;

  -- No referral record exists
  IF v_referrer_id IS NULL THEN
    RETURN false;
  END IF;

  -- Already marked as paid
  IF v_already_paid THEN
    RETURN false;
  END IF;

  -- Mark referee as paid
  UPDATE referrals
  SET referee_paid = true,
      referee_paid_at = now()
  WHERE referee_id = referee_uuid;

  -- Check if referrer already has a paid referral (cap = 1 paid = 5€)
  SELECT COUNT(*) FILTER (WHERE referee_paid = true)
  INTO v_referrer_paid_count
  FROM referrals
  WHERE referrer_id = v_referrer_id;

  -- Grant reward if this is the first paid referral (cap: max 1 × 5€)
  IF v_referrer_paid_count <= 1 THEN
    UPDATE referrals
    SET reward_granted = true,
        reward_granted_at = now()
    WHERE referee_id = referee_uuid;
    RETURN true;
  END IF;

  RETURN false;
END;
$$;

-- Function: Get personal price for a user (29.90€ or 24.90€)
CREATE OR REPLACE FUNCTION get_personal_price(user_uuid uuid)
RETURNS integer
LANGUAGE sql
STABLE
AS $$
  SELECT CASE
    WHEN EXISTS (
      SELECT 1 FROM referrals
      WHERE referrer_id = user_uuid
        AND referee_paid = true
      LIMIT 1
    ) THEN 2490  -- 24.90€
    ELSE 2990    -- 29.90€
  END;
$$;

-- Allow users to read their own reward status
CREATE POLICY "Users can view own reward status" ON referrals
  FOR SELECT USING (auth.uid() = referrer_id OR auth.uid() = referee_id);

-- Drop the old restrictive policy if it exists (replace with the broader one above)
DROP POLICY IF EXISTS "Users can view own referrals" ON referrals;
