// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path')
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    // ... Your other plugins.
    [
      'docusaurus-plugin-typedoc-api',
      {
        projectRoot: path.join(__dirname, '..'),
        packages: [
          {
            path: 'packages/react',
            entry: 'src/'
          },
          {
            path: 'packages/fetcher',
            entry: 'src/'
          },
          {
            path: 'packages/utils',
            entry: 'src/'
          },
          {
            path: 'packages/cookie',
            entry: 'src/'
          },
          {
            path: 'packages/storage',
            entry: 'src/'
          },
          {
            path: 'packages/emitter',
            entry: 'src/'
          },
          {
            path: 'packages/dom',
            entry: 'src/'
          }
        ]
      }
    ],
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: ['/docs', '/api'],
        docsDir: ['api', 'docs'],
        highlightSearchTermsOnTargetPage: true
      }
    ]
  ],
  title: 'Zero Dependency',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://zero-dependency.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/zero-dependency/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zero-dependency', // Usually your GitHub org/user name.
  projectName: 'zero-dependency', // Usually your repo name.
  githubHost: 'github.com',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zero-dependency/zero-dependency/tree/master/docs/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {
        title: 'Zero Dependency',
        logo: {
          alt: 'Zero Dependency logo',
          src: 'img/logo.png'
        },
        items: [
          { to: '/api', label: 'API', position: 'left' },
          { to: '/docs/packages', label: 'Packages', position: 'left' },
          {
            href: 'https://github.com/zero-dependency',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
