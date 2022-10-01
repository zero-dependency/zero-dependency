import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    watch: false,
    threads: true,
    logHeapUsage: true,
    environment: 'jsdom',
    include: ['packages/**/*.test.ts']
  }
})
