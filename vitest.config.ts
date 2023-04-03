import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    watch: false,
    silent: true,
    threads: true,
    logHeapUsage: true,
    environment: 'jsdom'
  }
})
