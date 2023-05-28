import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({ imports: ["vue"] })],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "./src/assets/style/global.less";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
