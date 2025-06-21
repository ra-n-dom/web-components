import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
    },
  },
});
