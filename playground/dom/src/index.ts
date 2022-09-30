import { observe, waitObserve } from '@zero-dependency/dom'

async function bootstrap() {
  const observer = observe('.card', (node) => {
    console.log('observe:', node)
    observer.disconnect()
  })

  console.log('waitObserver...')
  const card = await waitObserve('.card')
  console.log('waitObserver:', card)
}

bootstrap()
