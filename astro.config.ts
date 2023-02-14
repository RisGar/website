import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), robotsTxt(), sitemap(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), prefetch({
    throttle: 5
  }), mdx()],
  site: "https://rishab-garg.me"
});