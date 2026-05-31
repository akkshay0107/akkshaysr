import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { typst } from "astro-typst";

export default defineConfig({
  image: {
    domains: ["lh3.googleusercontent.com"],
  },
  integrations: [
    typst({
      target: "html",
      options: {
        htmlMode: "text",
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
