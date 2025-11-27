import { keychron } from "@/constants/theme/keychron";
import BrandVariableModel from "@/models/BrandVariables.model";
import { ELGIGANTEN_menuRoutes } from "@/constants/menuRoutes/ELGIGANTEN_menuRoutes";

export const KEYCHRON_brandVariables: BrandVariableModel = {
  name: "Keychron",
  logos: {
    large: "/static/images/tenants/keychron/keychron_white.svg",
    white: "/static/images/tenants/keychron/keychron_white.svg",
    small: "/static/images/tenants/keychron/keychron_emblem_white.svg",
    favicon: "/static/images/tenants/keychron/keychron_favicon.svg",
    alt: "Keychron logo",
    tenant: "/static/images/brands/iplay.png",
  },
  images: {
    auth: "/static/images/auth/keychron_banner.webp",
    challenges: "/static/images/challenges/keychron_cover.webp",
  },
  brandValue: "KEYCHRON",
  tenantId: "keychron-vs12i",
  theme: keychron,
  defaultLanguage: "en",
  meta: {
    title: "Keychron",
    description: "",
  },
  menuRoutes: {
    ...ELGIGANTEN_menuRoutes,
  },
  hasCreate: {
    challenges: true,
    zones: true,
  },
};
