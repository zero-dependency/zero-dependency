import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { dependencies, name } from './package.json'

export default defineConfig({
  plugins: [dts()],
  build: {
    sourcemap: true,
    minify: true,
    target: 'esnext',
    lib: {
      formats: ['es', 'cjs'],
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      name
    },
    rollupOptions: {
      external: Object.keys(dependencies)
    }
  }
})
