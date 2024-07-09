import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import vue from "@astrojs/vue";

import pinia from "./src/plugins/pinia";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), vue({ devtools: true }), pinia],
});
