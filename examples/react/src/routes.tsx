import { LoggerProvider } from '@zero-dependency/react'
import { createRoutes } from './libs/router/create-routes'
import { UseCookie } from './pages/use-cookie.js'
import { UseDidUpdate } from './pages/use-did-update'
import { UseInterval } from './pages/use-interval'
import { UseLatest } from './pages/use-latest'
import { UseLocalStorage } from './pages/use-local-storage'
import { UseLogger } from './pages/use-logger.js'

export const routes = createRoutes((baseRoutes) => ({
  [baseRoutes.NOT_FOUND]: {
    title: 'Page not found',
    component: (toPathname) => {
      return (
        <div>
          <h1>Page not found</h1>
          <a {...toPathname(baseRoutes.HOME)}>go to navigation</a>
        </div>
      )
    }
  },
  [baseRoutes.HOME]: {
    title: 'Home',
    component: <></>
  },
  '/use-cookie': {
    title: 'useCookie',
    component: <UseCookie />
  },
  '/use-did-update': {
    title: 'useDidUpdate',
    component: <UseDidUpdate />
  },
  '/use-interval': {
    title: 'useInterval',
    component: <UseInterval />
  },
  '/use-local-storage': {
    title: 'useLocalStorage',
    component: <UseLocalStorage />
  },
  '/use-latest': {
    title: 'useLatest',
    component: <UseLatest />
  },
  '/use-logger': {
    title: 'useLogger',
    component: () => (
      <LoggerProvider prefix="Logger Prefix">
        <UseLogger />
      </LoggerProvider>
    )
  }
}))
