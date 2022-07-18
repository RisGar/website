import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import { VitePWA } from "vite-plugin-pwa"

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind({
      config: { applyAstroPreset: false, applyBaseStyles: true },
    }),
  ],
  vite: {
    plugins: [VitePWA()],
  },
  site: "https://risgar.github.io/",
})
