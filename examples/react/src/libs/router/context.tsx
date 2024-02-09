import { useCallback, useEffect, useMemo, useState } from 'react'

import { BaseRoutes } from './base-routes'
import { createUrlWithOrigin } from './helpers'
import { RouterProvider } from './hook'
import type { Route, Routes, UrlProps } from './types'

type RouterContextProps = React.PropsWithChildren<{
  routes: Routes
}>

export function RouterContext(props: RouterContextProps) {
  const [pathname, setPathname] = useState(() => location.pathname)

  const route = useMemo((): Route => {
    return props.routes[pathname] ?? props.routes[BaseRoutes.NOT_FOUND]
  }, [pathname])

  const createUrl = useCallback((pathname: string): UrlProps => {
    return {
      href: createUrlWithOrigin(pathname).pathname,
      onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setPathname(pathname)
      }
    }
  }, [])

  const Page = useCallback((): JSX.Element => {
    if (route.component instanceof Function) {
      return route.component(createUrl)
    }

    return route.component
  }, [route])

  useEffect(() => {
    window.document.title = route.title
    history.pushState(null, '', createUrlWithOrigin(pathname))
  }, [pathname])

  return (
    <RouterProvider value={{ Page, createUrl, routes: props.routes }}>
      {props.children}
    </RouterProvider>
  )
}
