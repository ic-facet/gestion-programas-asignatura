import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', // La raíz del proyecto
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [reactRefresh()],
  define: {
    'process.env.RUN_ENV': JSON.stringify('')
  },
  resolve: {
    alias: [{ find: /^~/, replacement: '' }]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { '@icon-font-path': './fonts' } // copied the files from node_modules/rsuite/es/styles/fonts to get around build issues
      }
    }
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    fs: {
      // Evitar escanear directorios fuera del proyecto
      strict: true
    },
    watch: {
      // Ignorar estos directorios en el watch
      ignored: ['**/backend/**', '**/venv/**', '**/__pycache__/**', '**/*.pyc']
    }
  }
});
