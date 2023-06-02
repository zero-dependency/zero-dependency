import { useMemo } from 'react'
import { Gap } from './components/Flex'
import { useRouter } from './hooks/useRouter'
import { routes } from './routes'

export function App() {
  const { Route, toPathname } = useRouter(routes)
  const navigation = useMemo(() => {
    return Object.entries(routes)
      .slice(2) // slice home and notFound
      .map(([pathname, route]) => (
        <a
          key={pathname}
          {...toPathname(pathname)}
        >
          <button key={pathname}>{route.title}</button>
        </a>
      ))
  }, [])

  return (
    <div>
      <Gap>{navigation}</Gap>
      <Route />
    </div>
  )
}
