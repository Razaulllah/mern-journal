import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "window.location.origin",
        secure: false,
      },
    },
  },
  plugins: [react()]
});
