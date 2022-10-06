export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay = 500
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
