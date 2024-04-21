import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'Astro-Frontend', 
  plugins: [react()]
})
