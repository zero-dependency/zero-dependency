import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    silent: true,
    logHeapUsage: true,
    coverage: {
      provider: 'v8'
    }
  }
})
