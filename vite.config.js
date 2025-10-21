import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue' // or react, svelte, etc.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/stephen-clem.github.io/' // replace with your repo name

})
