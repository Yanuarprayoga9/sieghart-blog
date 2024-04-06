import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react()],
    define: {},
  };

  if (mode === "development") {
    config.define.global = {};
  }

  return config;
});