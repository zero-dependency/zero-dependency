// https://vitepress.dev/guide/custom-theme

import Theme from 'vitepress/theme'
import { h } from 'vue'
import CodeSandbox from './sandbox.vue'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    ctx.app.component('CodeSandbox', CodeSandbox)
  }
}
