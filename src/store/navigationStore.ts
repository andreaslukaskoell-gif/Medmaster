import { create } from "zustand";

/**
 * Session-only store for back navigation.
 * previousPath = the app path the user came from; back goes there or to "/" if none.
 */
interface NavigationState {
  previousPath: string | null;
  setPreviousPath: (path: string | null) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  previousPath: null,
  setPreviousPath: (path) => set({ previousPath: path }),
}));
