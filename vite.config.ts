// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const projectRoot = __dirname;


export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      'src': resolve(projectRoot, 'src'),
      '@components': resolve(projectRoot, 'src/components'),
      '@scss': resolve(projectRoot, 'src/scss'),
      '@images': resolve(projectRoot, 'src/original-images'),
      '@scripts': resolve(projectRoot, 'src/script'),
      '@vite_app_root': resolve(projectRoot, 'Vite_App_root'),
    },
  },
  
  css: {
    // ...
  },
  
  build: {
    rollupOptions: {
      input: {
        main_html: resolve(projectRoot, 'index.html'), 
        main_app_entry: resolve(projectRoot, 'Vite_App_root/index.tsx'),
        common_script_entry: resolve(projectRoot, 'src/scripts/script.ts'), 
      },
      output: {
        // ...出力設定は変更なし...
      },
    },
  },
  server: {
    open: '/',
  },
});