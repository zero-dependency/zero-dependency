import { observe } from './observe.js'

export function waitObserve(
  selector: string,
  disconnect = true,
  target = document.body
): Promise<Element> {
  return new Promise((resolve) => {
    const observer = observe(
      selector,
      (el) => {
        if (disconnect) {
          observer.disconnect()
        }

        resolve(el)
      },
      target
    )
  })
}
