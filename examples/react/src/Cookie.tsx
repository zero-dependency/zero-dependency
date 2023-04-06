import { useLayoutEffect } from 'react'
import { useCookie } from '@zero-dependency/react'

type Theme = 'dark' | 'light'

interface Cookie {
  theme: Theme
}

export function Cookie() {
  const [
    cookies,
    setCookie,
    removeCookie
  ] = useCookie<Cookie>({
    attributes: {
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }
  })

  useLayoutEffect(() => {
    if (!cookies.theme) {
      setCookie('theme', 'dark')
    }
  }, [])

  function toggleTheme() {
    setCookie('theme', cookies.theme === 'dark' ? 'light' : 'dark')
  }

  function removeTheme() {
    removeCookie('theme')
  }

  return (
    <div>
      <h1>Theme: {cookies.theme}</h1>
      <button onClick={() => toggleTheme()}>Toggle</button>
      <button onClick={() => removeTheme()}>Remove</button>
      <pre>{JSON.stringify(cookies, null, 2)}</pre>
    </div>
  )
}
