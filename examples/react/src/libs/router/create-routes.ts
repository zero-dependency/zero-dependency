import { BaseRoutes } from './base-routes'
import type { Routes } from './types'

export function createRoutes(
  callback: (baseRoutes: typeof BaseRoutes) => Routes
) {
  return callback(BaseRoutes)
}
