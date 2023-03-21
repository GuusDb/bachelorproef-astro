import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), react(), vue()],
  site: 'https://ec965.github.io/micro-frontends-astro',
  base: '/micro-frontends-astro'
});