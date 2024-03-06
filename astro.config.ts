import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"
import serviceWorker from "astrojs-service-worker"
import compress from "astro-compress"

import vercel from "@astrojs/vercel/static"

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
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
