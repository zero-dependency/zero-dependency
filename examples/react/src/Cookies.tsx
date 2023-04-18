import { useCallbackRef, useCookie, useLogger } from '@zero-dependency/react'

export function Cookies() {
  const [
    cookies,
    setCookie,
    removeCookie
  ] = useCookie<{ theme: 'dark' | 'light' }>({
    initialValue: {
      theme: 'dark'
    },
    attributes: {
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }
  })

  const toggleCookie = useCallbackRef(() =>
    setCookie('theme', cookies.theme === 'dark' ? 'light' : 'dark')
  )

  useLogger(Cookies.name, [cookies])

  return (
    <div>
      <h1>Theme: {cookies.theme}</h1>
      <button onClick={() => toggleCookie()}>Toggle</button>
      <button onClick={() => removeCookie('theme')}>Remove</button>
      <pre>{JSON.stringify(cookies, null, 2)}</pre>
    </div>
  )
}
