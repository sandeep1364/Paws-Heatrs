import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isDevelopment = command === 'serve';
  const apiUrl = isDevelopment 
    ? 'http://localhost:5000/api'
    : 'https://paws-hearts.onrender.com/api';
  const baseUrl = isDevelopment
    ? 'http://localhost:5000'
    : 'https://paws-hearts.onrender.com';

  return {
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(command === 'serve' ? 'development' : 'production'),
      'import.meta.env.VITE_API_URL': JSON.stringify(apiUrl),
      'import.meta.env.VITE_BASE_URL': JSON.stringify(baseUrl)
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
  }
}) 