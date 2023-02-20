import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"
import serviceWorker from "astrojs-service-worker"
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
    prefetch({
      throttle: 5,
    }),
    mdx(),
    serviceWorker(),
  ],
  site: "https://rishab-garg.me",
})
