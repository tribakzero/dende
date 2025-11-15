import { defineConfig } from 'astro/config'

import sanity from '@sanity/astro'
import react from '@astrojs/react'

import node from '@astrojs/node';

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'fvoh5via',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react(),
  ],
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
})