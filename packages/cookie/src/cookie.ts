import type { CookieOptions } from './types.js'

interface CookieParseOptions {
  serialize: (value: any) => string | number | boolean
  deserialize: (value: string) => any
}

class Cookie {
  private serialize: CookieParseOptions['serialize'] | undefined
  private deserialize: CookieParseOptions['deserialize'] | undefined

  constructor(options?: CookieParseOptions) {
    this.serialize = options?.serialize
    this.deserialize = options?.deserialize
  }

  get<T = string>(name: string): T | null {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)

    if (parts.length === 2) {
      let value = parts.pop()?.split(';').shift()
      if (value) {
        value = decodeURIComponent(value)
        return this.deserialize ? this.deserialize(value) : value
      }
    }

    return null
  }

  set<T = string>(name: string, value: T, options: CookieOptions = {}): void {
    const opts = {
      path: '/',
      ...options
    }

    if (typeof opts.expires === 'number') {
      opts.expires = new Date(Date.now() + opts.expires * 864e5)
    }

    if (opts.expires instanceof Date) {
      opts.expires = opts.expires.toUTCString()
    }

    if (opts.maxAge) {
      opts['max-age'] = opts.maxAge
      delete opts.maxAge
    }

    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      this.serialize ? this.serialize(value) : (value as string)
    )}`

    for (const [key, value] of Object.entries(opts)) {
      cookie += `; ${key}`
      if (value !== true) {
        cookie += `=${value}`
      }
    }

    document.cookie = cookie
  }

  list<T extends Record<string, string>>(): T | Record<string, string> {
    return document.cookie.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=').map((v) => v.trim())
      if (!name || !value) return acc
      return { ...acc, [name]: decodeURIComponent(value) }
    }, {})
  }

  delete(name: string): void {
    this.set(name, '', { expires: -1 })
  }
}

const cookie = new Cookie()
export { Cookie, cookie }
