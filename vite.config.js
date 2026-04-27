import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'rewrite-juris-ai',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/juris-ai') {
            res.writeHead(301, { Location: '/juris-ai/' });
            res.end();
            return;
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        juris: path.resolve(__dirname, 'juris-ai/index.html'),
      },
    },
  },
})
