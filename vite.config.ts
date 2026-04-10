import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const isGithubPages = process.env.GITHUB === "true";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  base: isGithubPages ? "/niraj-maharjan-portfolio/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
