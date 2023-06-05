import container from 'markdown-it-container'
import { defineConfig } from 'vitepress'
import { renderSandbox } from 'vitepress-plugin-sandpack'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Zero Dependency',
  description: 'Zero Dependency',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Packages', link: '/packages' }
    ],
    editLink: {
      pattern:
        'https://github.com/zero-dependency/zero-dependency/edit/master/docs/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present crashmax'
    },
    sidebar: [
      {
        text: 'cookie',
        link: '/packages/cookie',
        collapsed: true,
        items: []
      },
      {
        text: 'dom',
        link: '/packages/dom',
        collapsed: true,
        items: []
      },
      {
        text: 'emitter',
        link: '/packages/emitter',
        collapsed: true,
        items: []
      },
      {
        text: 'fetcher',
        link: '/packages/fetcher',
        collapsed: true,
        items: []
      },
      {
        text: 'react',
        link: '/packages/react',
        collapsed: true,
        items: []
      },
      {
        text: 'storage',
        link: '/packages/storage',
        collapsed: true,
        items: []
      },
      {
        text: 'utils',
        link: '/packages/utils',
        collapsed: true,
        items: [
          {
            text: 'debounce',
            link: '/packages/utils/debounce'
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zero-dependency' }
    ]
  },
  markdown: {
    config(md) {
      md.use(container, 'code-sandbox', {
        render(tokens, idx) {
          return renderSandbox(tokens, idx, 'code-sandbox')
        }
      })
    }
  }
})
