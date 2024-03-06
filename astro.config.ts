import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"
import serviceWorker from "astrojs-service-worker"
import compress from "astro-compress"

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    robotsTxt(),
    sitemap(),
    serviceWorker(),
    compress(),
  ],
  site: "https://rishab-garg.me",
})
