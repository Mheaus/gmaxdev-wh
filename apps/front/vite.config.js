import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@gmaxdev/dropdown-plugin': '/node_modules/@gmaxdev/dropdown-plugin/dist/index.esm.js'
    }
  },
  plugins: [react()],
})
