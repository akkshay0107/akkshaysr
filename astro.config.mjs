// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { typst } from 'astro-typst';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['lh3.googleusercontent.com']
  },
  integrations: [typst()],
  vite: {
    plugins: [tailwindcss()]
  }
});