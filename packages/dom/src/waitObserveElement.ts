import { observeElement } from './observeElement.js'

export function waitObserveElement(
  selector: string,
  disconnect = true,
  target = document.body
): Promise<Element> {
  return new Promise((resolve) => {
    const observer = observeElement(
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
