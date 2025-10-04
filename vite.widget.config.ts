import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widget-entry.tsx'),
      name: 'ticketdesk-chat',
      // Use a function to customize file names per format
      fileName: (format) => {
        if (format === 'umd') return 'ticketdesk-chat.min.js';
        return 'ticketdesk-chat.js';
      },
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
    cssCodeSplit: false,
    sourcemap: false,
    minify: 'esbuild',
  },
  esbuild: {
    legalComments: 'none',
  },
});
