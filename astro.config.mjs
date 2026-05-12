import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://alisalem.ca",
  vite: {
    plugins: [tailwindcss()]
  }
});
