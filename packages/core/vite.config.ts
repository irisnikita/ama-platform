import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import terser from "@rollup/plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";
// import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // tailwindcss(),
    react({}),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      entryRoot: "src",
      tsconfigPath: "tsconfig.app.json",
      exclude: [
        "**/*.stories.tsx",
        "**/*.test.tsx",
        "**/__tests__/**",
        "**/__mocks__/**",
      ],
      include: ["src/**/*"],
    }),
    // visualizer({
    //   gzipSize: true,
    //   brotliSize: true,
    //   open: false,
    //   filename: "stats.html",
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
