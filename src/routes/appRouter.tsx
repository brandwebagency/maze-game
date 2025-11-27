import { createBrowserRouter } from "react-router-dom";
// -AUTHENTICATION------------------------------------------------------------------
import { ProtectedRoutes } from "@/features/ProtectedRoute";

// -ERROR PAGES--------------------------------------------------------------------
import PageNotFound from "@/features/error/pages/PageNotFound/PageNotFound";

// - HOME ------------------------------------------------------------------
import { siteRoutes } from "./siteRoutes";
import MazeGamePage from "@/features/mazeGame/pages/MazeGamePage";

export const appRouter = () => {
  return createBrowserRouter([
    {
      path: siteRoutes.home.path,
      element: <ProtectedRoutes />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: siteRoutes.home.path,
          element: <MazeGamePage />,
        },
        
      ],
    },
  ]);
};

export default appRouter;
