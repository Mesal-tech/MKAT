import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.replit.dev', '.repl.co'],
  },
  // 👇 This ensures React Router routes work properly after deployment
  build: {
    outDir: 'dist',
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  // 👇 This is key: Vite dev + Vercel fallback for client-side routing
  resolve: {
    alias: {},
  },
  // 👇 Custom fallback config for SPA
  optimizeDeps: {},
});
