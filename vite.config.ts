import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-vue-markdown";
import prism from "markdown-it-prism";
export default defineConfig({
  base: "/vite-ssg/",
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Pages({
      extensions: ["vue", "md"],
    }),
    Markdown({ headEnabled: true, markdownItUses: [prism] }),
    Components({
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  ssgOptions: {
    script: "async",
    formatting: "prettify",
  },
});
