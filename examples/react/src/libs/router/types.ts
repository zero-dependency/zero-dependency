import type { ComponentType } from "react"

export interface Router {
  Page: () => JSX.Element
  createUrl: (path: string) => UrlProps
  routes: Routes
}

export interface UrlProps {
  href: string
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export interface Route {
  title: string
  component:
    | JSX.Element
    | ((createUrl: (url: string) => UrlProps) => JSX.Element)
}

export type Routes = Record<string, Route>
