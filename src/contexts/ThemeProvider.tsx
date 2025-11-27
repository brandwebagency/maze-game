import React, { JSX } from "react";
import { Theme } from "@radix-ui/themes";
import { useThemeStore } from "@/store/theme/theme.store";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const { theme } = useThemeStore();

  return <Theme {...theme}>{children}</Theme>;
}
