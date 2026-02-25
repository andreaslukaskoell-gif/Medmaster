-- ============================================================
-- Tasks RLS: restrict DELETE to admins (SELECT/INSERT/UPDATE unchanged)
-- Prevents mass deletion of the task pool; pool-fill from client still works.
-- Run after 20260225000000_tasks_table.sql
-- ============================================================

DROP POLICY IF EXISTS "tasks_delete" ON tasks;

CREATE POLICY "Only admins can delete tasks" ON tasks
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.email LIKE '%@admin.medmaster%'
    )
  );

COMMENT ON TABLE tasks IS 'Persistent validated tasks. Delete: admin only.';
