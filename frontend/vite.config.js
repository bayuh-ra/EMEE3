// frontend/vite.config.js
import { defineConfig } from 'vite';  // Ensure defineConfig is imported
import react from '@vitejs/plugin-react';  // React plugin for Vite

export default defineConfig({
  root: './',  // Set the root to the current directory
  publicDir: 'frontend',  // Ensure publicDir is pointing to the frontend directory
  plugins: [react()],
  server: {
    port: 5173,  // Port for Vite server
  },
});
