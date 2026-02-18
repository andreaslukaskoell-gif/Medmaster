import { create } from "zustand";

interface SyncStatusState {
  isSyncing: boolean;
  lastSyncedAt: string | null;
  setSyncing: (value: boolean) => void;
  setLastSynced: (value: string | null) => void;
}

export const useSyncStatus = create<SyncStatusState>((set) => ({
  isSyncing: false,
  lastSyncedAt: null,
  setSyncing: (value) => set({ isSyncing: value }),
  setLastSynced: (value) => set({ lastSyncedAt: value }),
}));
