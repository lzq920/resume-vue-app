import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
const prefix = `monaco-editor/esm/vs`;
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          editorWorker: [`${prefix}/editor/editor.worker`]
        },
      },
    },
  },
  plugins: [vue(),vueJsx()]
})
