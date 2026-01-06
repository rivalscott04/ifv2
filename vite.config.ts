import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Chunk size warning limit (in kbs)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunking strategy untuk optimasi loading
        manualChunks: (id) => {
          // Vendor chunks - library besar dipisah
          if (id.includes("node_modules")) {
            // React core libraries
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            ) {
              return "vendor-react";
            }
            // Radix UI components (banyak sekali)
            if (id.includes("@radix-ui")) {
              return "vendor-radix";
            }
            // UI libraries lainnya
            if (
              id.includes("framer-motion") ||
              id.includes("lucide-react") ||
              id.includes("recharts")
            ) {
              return "vendor-ui";
            }
            // i18n libraries
            if (id.includes("i18next") || id.includes("react-i18next")) {
              return "vendor-i18n";
            }
            // Form libraries
            if (
              id.includes("react-hook-form") ||
              id.includes("@hookform") ||
              id.includes("zod")
            ) {
              return "vendor-forms";
            }
            // Query library
            if (id.includes("@tanstack/react-query")) {
              return "vendor-query";
            }
            // Other vendor libraries
            return "vendor";
          }
        },
        // Naming pattern untuk chunks
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".") || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        },
      },
    },
    // Minification
    minify: "esbuild", // Lebih cepat dari terser
    // Target modern browsers untuk bundle lebih kecil
    target: "esnext",
  },
});
