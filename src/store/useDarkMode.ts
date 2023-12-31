import { create } from "zustand";

interface DarkModeState {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const useDarkMode = create<DarkModeState>()((set) => ({
  isDarkMode: true,
  setIsDarkMode: (isDarkMode: boolean) => set(() => ({ isDarkMode })),
}));
