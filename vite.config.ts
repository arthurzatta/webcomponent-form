import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), typescript()],
  define: { process: { env: {} } },
  build: {
    lib: {
      entry: "./src/lib/index.tsx", // Entrada do componente
      name: "pingback-form", // Nome do componente
      fileName: (format) => `index.${format}.js`,
      formats: ["es"], // Formatos de saída (ES Module e UMD)
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
