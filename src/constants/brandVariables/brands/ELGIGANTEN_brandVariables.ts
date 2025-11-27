import { elgiganten } from "@/constants/theme/elgiganten";
import { ELGIGANTEN_menuRoutes } from "@/constants/menuRoutes/ELGIGANTEN_menuRoutes";
import BrandVariableModel from "@/models/BrandVariables.model";

export const ELGIGANTEN_brandVariables: BrandVariableModel = {
  name: "Elgiganten",
  logos: {
    large: "/static/images/tenants/elgiganten/elgiganten.svg",
    white: "/static/images/tenants/elgiganten/elgiganten.svg",
    small: "/static/images/tenants/elgiganten/elgiganten_sm.svg",
    favicon: "/static/images/tenants/elgiganten/favicon/favicon.ico",
    alt: "Elgiganten logo",
    tenant: "/static/images/brands/iplay.png",
  },
  images: {
    auth: "/static/images/auth/Dreamhack-61.jpg",
    challenges: "/static/images/auth/Dreamhack-61.jpg",
  },
  brandValue: "ELGIGANTEN",
  tenantId: "elgiganten-9u2oj",
  theme: elgiganten,
  defaultLanguage: "en",
  meta: {
    title: "Elgiganten",
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
