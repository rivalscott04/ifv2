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
    cssCodeSplit: false, // Disable CSS code splitting untuk mengurangi HTTP requests
    rollupOptions: {
      output: {
        // Simplified chunking strategy - hanya 2 chunks utama untuk mengurangi HTTP requests
        manualChunks: (id) => {
          // Semua vendor libraries jadi satu chunk besar
          // Ini mengurangi jumlah HTTP requests dan mempercepat loading
          if (id.includes("node_modules")) {
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
