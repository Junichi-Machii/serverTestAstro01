import { defineConfig } from 'astro/config';
import image from "@astrojs/image";


// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
   },
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), tailwind()]
});