import type { CookieOptions, Deserialize, Options, Serialize } from './types.js'

export class Cookie {
  private serialize: Serialize
  private deserialize: Deserialize

  constructor(options?: Options) {
    this.serialize = (value: any) => {
      return options?.serialize ? options.serialize(value) : value
    }

    this.deserialize = (value: string) => {
      return options?.deserialize ? options.deserialize(value) : value
    }
  }

  get<T = string>(name: string): T | null {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)

    if (parts.length === 2) {
      let value = parts.pop()?.split(';').shift()
      if (value) {
        value = decodeURIComponent(value)
        return this.deserialize(value)
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
      this.serialize(value)
    )}`

    for (const [key, value] of Object.entries(opts)) {
      cookie += `; ${key}`
      if (value !== true) {
        cookie += `=${value}`
      }
    }

    document.cookie = cookie
  }

  list<T extends Record<string, any>>(): T | Record<string, any> {
    return document.cookie.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=').map((v) => v.trim())
      if (!name || !value) return acc

      return {
        ...acc,
        [decodeURIComponent(name)]: this.deserialize(decodeURIComponent(value))
      }
    }, {})
  }

  delete(name: string): void {
    this.set(name, '', { expires: -1 })
  }
}

export const cookie = new Cookie({
  serialize(value) {
    return JSON.stringify(value)
  },
  deserialize(value) {
    try {
      return JSON.parse(value)
    } catch (err) {
      console.error(err)
      return null
    }
  }
})
