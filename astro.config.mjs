import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk()],
  output: "server",
  adapter: netlify()
});