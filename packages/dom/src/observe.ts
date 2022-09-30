export function observe(
  selector: string,
  callback: (el: Element) => void,
  target = document.body
) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        const el = node as Element
        if (el.matches(selector)) {
          callback(el)
        }
      }
    }
  })

  observer.observe(target, {
    attributes: true,
    childList: true,
    subtree: true
  })

  return observer
}
