import { ThemeProps } from "@radix-ui/themes";
import { elgiganten } from "./elgiganten";
import { sonyTheme } from "./sonyTheme";

interface ThemeConfig {
  brandId?: string;
  retailId?: string;
  theme: ThemeProps;
}

export const themeConfigs: ThemeConfig[] = [
  // Sony
  {
    brandId: "FvSGKv6ZdbWCBRSsLoNl",
    theme: sonyTheme,
  },
  // Elgiganten
  {
    retailId: "wduMLpv5OXUSedu1rcUo",
    theme: elgiganten,
  },
];
