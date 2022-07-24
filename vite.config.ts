import { defineConfig } from "vite";
import * as path from 'path'
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-vue-markdown";
import prism from "markdown-it-prism";
export default defineConfig({
  base: "/",
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Pages({
      extensions: ["vue", "md"],
    }),
    Markdown({ headEnabled: true, markdownItUses: [prism] }),
    AutoImport({
      imports: ["vue", "vue-router", "vue/macros", "pinia", "@vueuse/core"],
      
      dts: path.resolve(  "src/types", "auto-imports.d.ts"),
    }),
    Components({
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: path.resolve("src/types", "components.d.ts"),
    }),
  ],
  ssgOptions: {
    script: "async",
    formatting: "prettify",
  },
});
