import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  const isAnalyze = mode === "analyze";

  return {
    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@tools": path.resolve(__dirname, "./src/tools"),
        "@data": path.resolve(__dirname, "./src/data"),
        "@lib": path.resolve(__dirname, "./src/lib"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@i18n": path.resolve(__dirname, "./src/i18n"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@contexts": path.resolve(__dirname, "./src/contexts"),
        "@types": path.resolve(__dirname, "./src/types"),
        "@constants": path.resolve(__dirname, "./src/constants"),
      },
    },

    server: {
      port: 5173,
      host: true,
      open: false,
      strictPort: false,
      cors: true,
    },

    preview: {
      port: 4173,
      host: true,
      strictPort: false,
    },

    build: {
      target: "es2020",
      outDir: "dist",
      sourcemap: isAnalyze ? true : false,
      minify: "esbuild",
      cssMinify: "esbuild",
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 1000,
      reportCompressedSize: false,
      emptyOutDir: true,

      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom", "react-router-dom"],
            "animation-vendor": ["framer-motion", "lottie-react"],
            "pdf-vendor": ["jspdf", "pdf-lib"],
            "image-vendor": ["browser-image-compression", "html2canvas"],
            "qr-vendor": ["qrcode", "jsbarcode"],
            "i18n-vendor": ["i18next", "react-i18next"],
            "icons-vendor": ["lucide-react"],
          },
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: (assetInfo) => {
            const name = assetInfo.names?.[0] ?? assetInfo.name ?? "";
            const ext = name.split(".").pop()?.toLowerCase() ?? "";

            if (/png|jpe?g|gif|svg|webp|avif|ico/i.test(ext)) {
              return "assets/images/[name]-[hash][extname]";
            }
            if (/woff2?|ttf|otf|eot/i.test(ext)) {
              return "assets/fonts/[name]-[hash][extname]";
            }
            if (/css/i.test(ext)) {
              return "assets/css/[name]-[hash][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
    },

    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-router-dom",
        "framer-motion",
        "i18next",
        "react-i18next",
        "lucide-react",
        "clsx",
        "tailwind-merge",
      ],
      exclude: ["@imgly/background-removal"],
    },

    esbuild: {
      drop: isProduction ? ["console", "debugger"] : [],
      legalComments: "none",
      pure: isProduction ? ["console.log", "console.info", "console.debug"] : [],
    },

    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version ?? "1.0.0"),
      __APP_NAME__: JSON.stringify("AHADEX Tools"),
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },

    logLevel: "info",
    clearScreen: true,
  };
});