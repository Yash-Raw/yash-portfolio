import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Not 3000 — AskRepo's service worker claims that origin locally.
    port: 5173,
  },
});
