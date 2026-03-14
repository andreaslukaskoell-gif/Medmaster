-- ============================================================
-- Tasks RLS: restrict INSERT/UPDATE to service role only
-- Prevents anonymous/unauthenticated writes to the task pool.
-- SELECT remains public (app needs to read tasks).
-- Run after 20260225100000_tasks_rls_admin_only.sql
-- ============================================================

-- Restrict INSERT to service role (seed scripts, Edge Functions)
DROP POLICY IF EXISTS "tasks_insert" ON tasks;
CREATE POLICY "tasks_insert" ON tasks
  FOR INSERT WITH CHECK (
    auth.role() = 'service_role'
    OR EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email IN ('luki@medmaster.at', 'admin@medmaster.at')
    )
  );

-- Restrict UPDATE to service role or admin
DROP POLICY IF EXISTS "tasks_update" ON tasks;
CREATE POLICY "tasks_update" ON tasks
  FOR UPDATE USING (
    auth.role() = 'service_role'
    OR EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email IN ('luki@medmaster.at', 'admin@medmaster.at')
    )
  );

COMMENT ON TABLE tasks IS 'Persistent validated tasks. Read: public. Insert/Update/Delete: admin/service_role only.';
