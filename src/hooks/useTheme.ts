import { useThemeStore } from "@/store/theme/theme.store";
import { ThemeProps } from "@radix-ui/themes";

export const useTheme = () => {
  const { theme, setTheme, resetTheme } = useThemeStore();

  const update = (newTheme: ThemeProps) => {
    setTheme(newTheme);
  };

  const reset = () => {
    resetTheme();
  };

  const updateProperty = (property: keyof ThemeProps, value: any) => {
    setTheme({
      ...theme,
      [property]: value,
    });
  };

  return {
    theme,
    update,
    reset,
    updateProperty,
  };
};
