import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"
import serviceWorker from "astrojs-service-worker"

export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    robotsTxt(),
    sitemap(),
    serviceWorker(),
  ],
  site: "https://rishab-garg.me",
})
