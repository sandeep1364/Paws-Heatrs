import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(command === 'serve' ? 'development' : 'production')
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material']
        }
      }
    }
  },
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