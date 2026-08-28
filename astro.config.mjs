// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://santiagobrunosrb.github.io',
  integrations: [
    react(),
    markdoc(),
    ...(isProd ? [] : [keystatic()]),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});