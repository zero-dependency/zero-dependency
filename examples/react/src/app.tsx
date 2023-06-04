import { Container } from './components/container'
import { Navigation } from './components/navigation'
import { useRouter } from './libs/router/hook'

export function App() {
  const { Page } = useRouter()

  return (
    <div>
      <Navigation />
      <Container>
        <Page />
      </Container>
    </div>
  )
}
