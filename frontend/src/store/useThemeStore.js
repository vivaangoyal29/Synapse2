import { create } from "zustand";

export const useThemeStore = create((set) => ({
  // Default to a light/white theme for new users (fall back to saved value if present)
  theme: localStorage.getItem("chat-theme") || "light",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));
