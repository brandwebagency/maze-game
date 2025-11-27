import { create } from "zustand";
import { ThemeProps } from "@radix-ui/themes";
import { brand } from "@/constants/brandVariables/brandVariables";
import { darkTheme } from "@/constants/theme";

type ThemeState = {
  theme: ThemeProps;
  setTheme: (theme: ThemeProps) => void;
  resetTheme: () => void;
};

export const useThemeStore = create<ThemeState>(
  (set: (partial: Partial<ThemeState>) => void) => ({
    theme: brand.theme || darkTheme, // Default to light theme if brand theme is not defined

    setTheme: (theme: ThemeProps) =>
      set({
        theme: theme,
      }),

    resetTheme: () =>
      set({
        theme: brand.theme,
      }),
  })
);
