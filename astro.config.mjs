// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://miro-mie.pages.dev',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  build: {
    format: 'file'
  },

  adapter: cloudflare()
});