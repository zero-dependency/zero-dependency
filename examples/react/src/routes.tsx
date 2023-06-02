import { BaseRoutes, Route } from './hooks/useRouter'
import { UseCookie } from './pages/use-cookie'
import { UseDidUpdate } from './pages/use-did-update'
import { UseInterval } from './pages/use-interval.js'

export const routes: Record<string, Route> = {
  [BaseRoutes.NOT_FOUND]: {
    title: 'Page not found',
    component: (toPathname) => {
      return (
        <div>
          <h1>Page not found</h1>
          <a {...toPathname(BaseRoutes.HOME)}>go to navigation</a>
        </div>
      )
    }
  },
  [BaseRoutes.HOME]: {
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
  }
}
