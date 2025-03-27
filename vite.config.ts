import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react({
    tsDecorators: true,
    plugins: [
      // Для корректной работы с CSS-модулями
      ['@swc/plugin-transform-imports', {
        '^(.+)\\.css$': {
          transform: '$1.css',
          preventFullImport: true
        }
      }]
    ]
  })],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  optimizeDeps: {
    include: [
      '@swc/core' // Явное указание для SWC
    ]
  }
})