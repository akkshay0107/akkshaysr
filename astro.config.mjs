// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { typst } from 'astro-typst';

// https://astro.build/config
export default defineConfig({
  integrations: [typst()],
  vite: {
    plugins: [tailwindcss()]
  }
});