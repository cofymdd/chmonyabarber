// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

const isGitHubPages = process.env.DEPLOY_GITHUB_PAGES === "true"

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? "https://cofymdd.github.io" : undefined,
  base: isGitHubPages ? "/chmonyabarber" : "/",
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
