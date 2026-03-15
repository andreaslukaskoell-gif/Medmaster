-- Fix analytics RLS: allow any authenticated user to SELECT.
-- Access control is handled by the dashboard's password gate.

DROP POLICY IF EXISTS "Admin can read analytics events" ON analytics_events;

CREATE POLICY "Authenticated users can read analytics events"
  ON analytics_events FOR SELECT
  TO authenticated
  USING (true);
