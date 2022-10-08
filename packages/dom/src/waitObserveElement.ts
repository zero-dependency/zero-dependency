import { observeElement } from './observeElement.js'

export function waitObserveElement<T extends Element = Element>(
  selector: string,
  disconnect = true,
  target = document.body
): Promise<T> {
  return new Promise((resolve) => {
    const observer = observeElement<T>(
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
