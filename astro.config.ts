import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    robotsTxt(),
    sitemap(),
    mdx(),
  ],
  site: "https://rishab-garg.me/",
  markdown: {
    drafts: true,
  },
})
