import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Root veya alt dizin için doğru ayar
  build: {
    outDir: 'dist', // Çıktı klasörünün doğru olduğunu kontrol edin
  },
});
