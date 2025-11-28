import { ThemeProps } from "@radix-ui/themes";

/**
 * Represents the configuration for the application's dark theme.
 *
 * @remarks
 * This theme applies a dark appearance with customizable accent and gray colors,
 * panel background style, scaling, and border radius.
 *
 * @type {ThemeProps}
 *
 * @property {string} appearance - The overall appearance mode, set to "dark".
 * @property {string} accentColor - The primary accent color used throughout the theme.
 * @property {string} grayColor - The base gray color for neutral UI elements.
 * @property {string} panelBackground - The background style for panels (e.g., "solid").
 * @property {string} scaling - The scaling factor for UI elements (e.g., "100%").
 * @property {string} radius - The border radius style for UI components (e.g., "full").
 */

export const inzoneTheme: ThemeProps = {
  appearance: "dark",
  accentColor: "purple",
  grayColor: "gray",
  panelBackground: "translucent",
  scaling: "100%",
  radius: "full",
  className: "theme-inzone",
};
