export type Serialize = (value: any) => string | number | boolean
export type Deserialize = (value: string) => any

export interface CookieOptions {
  serialize: Serialize
  deserialize: Deserialize
}

export interface CookieAttributes {
  path?: string
  domain?: string
  expires?: Date | number | string
  secure?: boolean
  maxAge?: number
  'max-age'?: number
  sameSite?: 'Lax' | 'Strict' | 'None'
}
