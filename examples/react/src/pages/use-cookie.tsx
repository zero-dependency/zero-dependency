import { useCookie, useEvent } from '@zero-dependency/react'
import { FlexWrap } from '../components/flex-wrap'
import { JsonPreview } from '../components/json-preview'

interface CookieData {
  theme: 'dark' | 'light'
  count: {
    value: number
  }
}

export function UseCookie() {
  const [cookies, { setCookie, removeCookie }] = useCookie<CookieData>({
    encode(value, key) {
      if (key === 'theme') return value
      return JSON.stringify(value)
    },
    decode(value, key) {
      if (key === 'theme') return value
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

  const toggleCookie = useEvent(() =>
    setCookie('theme', cookies.theme === 'dark' ? 'light' : 'dark')
  )

  const countValue = useEvent(() =>
    setCookie('count', { value: cookies.count.value + 1 })
  )

  return (
    <>
      <h1>Theme: {cookies.theme}</h1>
      <FlexWrap>
        <button onClick={() => toggleCookie()}>Toggle</button>
        <button onClick={() => removeCookie('theme')}>Remove</button>
        <button onClick={() => countValue()}>Count</button>
      </FlexWrap>
      <JsonPreview json={cookies} />
    </>
  )
}
