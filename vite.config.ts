/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      models: path.resolve(__dirname, "./src/models"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      utils: path.resolve(__dirname, "./src/utils"),
      public: path.resolve(__dirname, "./public"),
    },
  },
  css: {
    devSourcemap: true,
  },
});
