import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs(), icon(), favicons()],
  experimental: {
    svg: true,
  },
});
