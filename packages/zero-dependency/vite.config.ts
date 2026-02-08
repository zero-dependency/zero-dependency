import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { dependencies, name } from './package.json'

const entry = fileURLToPath(new URL('src', import.meta.url))

export default defineConfig({
  plugins: [dts({ include: entry })],
  build: {
    minify: false,
    target: 'esnext',
    lib: {
      formats: ['es'],
      entry: resolve(entry, 'index.ts'),
      fileName: 'index',
      name
    },
    rollupOptions: {
      external: Object.keys(dependencies)
    }
  }
})
