import { create } from "zustand";

interface SyncStatusState {
  isSyncing: boolean;
  lastSyncedAt: string | null;
  /** Kurze Toast-Meldung nach Hintergrund-Sync (z. B. "Daten nachsynchronisiert") */
  syncSuccessMessage: string | null;
  setSyncing: (value: boolean) => void;
  setLastSynced: (value: string | null) => void;
  setSyncSuccessMessage: (value: string | null) => void;
}

export const useSyncStatus = create<SyncStatusState>((set) => ({
  isSyncing: false,
  lastSyncedAt: null,
  syncSuccessMessage: null,
  setSyncing: (value) => set({ isSyncing: value }),
  setLastSynced: (value) => set({ lastSyncedAt: value }),
  setSyncSuccessMessage: (value) => set({ syncSuccessMessage: value }),
}));
