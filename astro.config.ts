import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import { VitePWA } from "vite-plugin-pwa"

import { metadata } from "./src/components/defaults"

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind({
      config: { applyBaseStyles: true },
    }),
  ],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "script",
        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "safari-pinned-tab.svg",
          "screenshot.png",
        ],
        manifest: {
          name: metadata.title,
          short_name: metadata.short_title,
          description: metadata.description,
          theme_color: "#da532c",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
          background_color: "#da532c",
          display: "standalone",
        },
      }),
    ],
  },
  site: "https://risgar.github.io/",
})
