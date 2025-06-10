// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://otetoteto.io",
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
