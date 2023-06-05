import { defineConfig } from 'vite'
import { SearchPlugin } from 'vitepress-plugin-search'

export default defineConfig({
  plugins: [
    SearchPlugin({
      placeholder: 'Search',
      buttonLabel: 'Search',
      previewLength: 10,
      tokenize: 'forward'
    })
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['../..']
    }
  }
})
