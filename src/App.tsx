import { JSX } from "react";
import "@radix-ui/themes/styles.css";

import { RouterProvider } from "react-router-dom";
import "@github/markdown-toolbar-element";
import { ThemeProvider } from "./contexts/ThemeProvider";
import appRouter from "./routes/appRouter";

function App(): JSX.Element {
  const router = appRouter();

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
