// filepath: /workspaces/asylum-site/front end/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all interfaces
    port: 5173,      // Ensure the port matches your setup we must do this because we are running a docker container
  },
});
