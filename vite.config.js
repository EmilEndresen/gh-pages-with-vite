import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
   base: "/gh-pages-with-vite/",
   plugins: [react()]
})
