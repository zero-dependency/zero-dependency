import { createProvider } from '@zero-dependency/react'
import type { Router } from './types'

export const [useRouter, RouterProvider] = createProvider<Router>('Router')
