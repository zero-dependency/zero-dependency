import { useCallback, useEffect, useMemo, useState } from 'react'

export interface Route {
  title: string
  component:
    | JSX.Element
    | ((toPathname: (pathname: string) => ToPathname) => JSX.Element)
}

interface ToPathname {
  href: string
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export enum BaseRoutes {
  HOME = '/',
  NOT_FOUND = 'NOT_FOUND'
}

export function useRouter(routes: Record<string, Route>) {
  const [pathname, setPathname] = useState(() => location.pathname)

  const route = useMemo(() => {
    return routes[pathname] ?? routes[BaseRoutes.NOT_FOUND]
  }, [routes, pathname])

  const createUrl = useCallback((pathname: string) => {
    return new URL(pathname, location.origin)
  }, [])

  const toPathname = useCallback((pathname: string): ToPathname => {
    return {
      href: createUrl(pathname).pathname,
      onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setPathname(pathname)
      }
    }
  }, [])

  const Route = useCallback((): JSX.Element => {
    if (route.component instanceof Function) {
      return route.component(toPathname)
    }

    return route.component
  }, [route])

  useEffect(() => {
    window.document.title = route.title
    history.pushState(null, '', createUrl(pathname))
  }, [pathname])

  return { Route, toPathname }
}
