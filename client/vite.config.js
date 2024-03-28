import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mern-journal-h5ik.vercel.app",
        secure: false,
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
