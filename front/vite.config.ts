import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_APP_PORT': JSON.stringify(process.env.BASE_URL)
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://api.janetonic.fr', // ou votre URL backend en local comme 'http://localhost:5001'
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})