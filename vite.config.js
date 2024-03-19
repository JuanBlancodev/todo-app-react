import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import terser from '@rollup/plugin-terser'
import postcss from '@vituum/vite-plugin-postcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    terser(),
    postcss()
  ],
  base: 'https://juanblancodev.github.io/todo-app-react/'
})
