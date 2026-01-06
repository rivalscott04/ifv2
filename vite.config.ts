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
    // Ensure assets are copied correctly
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    assetsDir: "assets",
    // Optimize images
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Manual chunking strategy untuk optimasi loading
        // Strategi lebih aman: hanya pisahkan library besar yang tidak terlalu bergantung pada React internals
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            // Radix UI - library besar, bisa dipisah karena Vite handle dependency dengan benar
            if (id.includes("@radix-ui")) {
              return "vendor-radix";
            }
            // UI libraries yang besar
            if (
              id.includes("framer-motion") ||
              id.includes("recharts") ||
              id.includes("embla-carousel")
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
            // Biarkan React dan library lainnya di chunk default
            // Vite akan otomatis handle chunking dengan baik
            return "vendor";
          }
        },
        // Naming pattern untuk chunks
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return `assets/[name]-[hash][extname]`;
          }
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1]?.toLowerCase();
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
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
    // CommonJS options untuk compatibility
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
});
