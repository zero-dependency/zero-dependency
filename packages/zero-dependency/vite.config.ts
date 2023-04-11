import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { dependencies, name } from './package.json'

const deps = Object.keys(dependencies)

export default defineConfig({
  plugins: [dts()],
  build: {
    sourcemap: true,
    minify: true,
    target: 'esnext',
    lib: {
      formats: [
        'cjs',
        'es',
        'umd'
      ],
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `index.${format}.js`,
      name
    },
    rollupOptions: {
      external: deps,
      output: {
        globals: deps.reduce<Record<string, string>>((acc, value) => {
          const [_, name] = value.split('/')
          acc[value] = name
          return acc
        }, {})
      }
    }
  }
})
