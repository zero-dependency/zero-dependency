import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    watch: false,
    include: ['packages/*.test.ts']
  }
})
