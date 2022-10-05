import type {
  CookieAttributes,
  CookieOptions,
  Deserialize,
  Serialize
} from './types.js'

export class Cookie {
  private serialize: Serialize
  private deserialize: Deserialize
  private attributes: CookieAttributes

  constructor(options?: CookieOptions) {
    this.serialize = (value: any) => {
      return options?.serialize ? options.serialize(value) : value
    }

    this.deserialize = (value: string) => {
      return options?.deserialize ? options.deserialize(value) : value
    }
  }

  withAttributes(attributes: Omit<CookieAttributes, 'max-age'>): void {
    this.attributes = { ...this.attributes, ...attributes }
  }

  get<T = string>(name: string): T | null {
    const cookie = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
    return cookie ? this.deserialize(decodeURIComponent(cookie[1]!)) : null
  }

  set<T = string>(name: string, value: T, attributes?: CookieAttributes): void {
    const attr = {
      path: '/',
      ...this.attributes,
      ...attributes
    }

    if (typeof attr.expires === 'number') {
      attr.expires = new Date(Date.now() + attr.expires * 864e5)
    }

    if (attr.expires instanceof Date) {
      attr.expires = attr.expires.toUTCString()
    }

    if (attr.maxAge) {
      attr['max-age'] = attr.maxAge
      delete attr.maxAge
    }

    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      this.serialize(value)
    )}`

    for (const [key, value] of Object.entries(attr)) {
      cookie += `; ${key}`
      if (value !== true) {
        cookie += `=${value}`
      }
    }

    document.cookie = cookie
  }

  list<T extends Record<string, any>>(): T | Record<string, any> {
    const cookies = document.cookie.split('; ').map((cookie) =>
      cookie.split(/=(.*)/s).map((value, key) => {
        value = decodeURIComponent(value)
        return key === 0 ? value : this.deserialize(value)
      })
    )

    return Object.fromEntries(cookies)
  }

  delete(name: string, attributes?: CookieAttributes): void {
    this.set(name, '', { ...attributes, expires: -1 })
  }
}

/** JSON serialize/deserialize */
export const cookies = new Cookie({
  serialize(value) {
    return JSON.stringify(value)
  },
  deserialize(value) {
    try {
      return JSON.parse(value)
    } catch (err) {
      if (import.meta.env.PROD) console.error(err)
      return null
    }
  }
})
