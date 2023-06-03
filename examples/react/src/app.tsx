import { useMemo } from 'react'
import { Container } from './components/container'
import { FlexWrap } from './components/flex-wrap'
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
      <FlexWrap>{navigation}</FlexWrap>
      <Container>
        <Route />
      </Container>
    </div>
  )
}
