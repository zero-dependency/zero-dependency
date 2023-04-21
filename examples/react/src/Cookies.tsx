import { useCallbackRef, useCookie, useLogger } from '@zero-dependency/react'

interface CookieData {
  theme: 'dark' | 'light'
  count: {
    value: number
  }
}

export function Cookies() {
  const [
    cookies,
    setCookie,
    removeCookie
  ] = useCookie<CookieData>({
    encode(value) {
      return JSON.stringify(value)
    },
    decode(value) {
      try {
        return JSON.parse(value)
      } catch {
        return null
      }
    },
    initialValue: {
      theme: 'dark',
      count: {
        value: 0
      }
    },
    attributes: {
      expires: 7 // days
    }
  })

  const toggleCookie = useCallbackRef(() =>
    setCookie('theme', cookies.theme === 'dark' ? 'light' : 'dark')
  )

  const countValue = useCallbackRef(() =>
    setCookie('count', { value: cookies.count.value + 1 })
  )

  useLogger('Count', [cookies.count.value])

  return (
    <div>
      <h1>Theme: {cookies.theme}</h1>
      <button onClick={() => toggleCookie()}>Toggle</button>
      <button onClick={() => removeCookie('theme')}>Remove</button>
      <button onClick={() => countValue()}>Count</button>
      <pre>{JSON.stringify(cookies, null, 2)}</pre>
    </div>
  )
}
