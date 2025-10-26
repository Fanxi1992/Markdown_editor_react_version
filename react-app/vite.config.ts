import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
    // If you need HTTPS for clipboard permissions locally, uncomment:
    // https: true
  },
  build: {
    outDir: 'dist'
  }
});

