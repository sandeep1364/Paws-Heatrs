import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: {
    proxy: command === 'serve' ? {
      '/api': {
        target: 'https://paws-hearts.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/uploads': {
        target: 'https://paws-hearts.onrender.com',
        changeOrigin: true,
        secure: true
      }
    } : {}
  }
})) 