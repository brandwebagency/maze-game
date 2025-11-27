import { siteRoutes } from "@/routes/siteRoutes";
import { DashboardIcon } from "@radix-ui/react-icons";

export const ELGIGANTEN_menuRoutes = {
  "routes.headlines.main": [
    {
      title: siteRoutes["home"].label,
      link: siteRoutes["home"].path,
      icon: DashboardIcon,
    },
  ],
};
