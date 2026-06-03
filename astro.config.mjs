import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { typst } from "astro-typst";

export default defineConfig({
  site: "https://akkshay0107.github.io",
  base: "/akkshaysr/",
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
