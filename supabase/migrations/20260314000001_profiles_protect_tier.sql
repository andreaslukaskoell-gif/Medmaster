-- ============================================================
-- Prevent users from self-upgrading subscription_tier
-- Only service_role (Stripe webhooks) can change the tier.
-- ============================================================

-- Drop existing update policy if any, then create restrictive one
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    AND (
      -- Either tier is unchanged
      subscription_tier IS NOT DISTINCT FROM (
        SELECT subscription_tier FROM profiles WHERE id = auth.uid()
      )
      -- Or the caller is service_role (Stripe webhook)
      OR auth.role() = 'service_role'
    )
  );
