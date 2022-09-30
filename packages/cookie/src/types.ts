export interface CookieOptions {
  path?: string
  domain?: string
  expires?: Date | number | string
  secure?: boolean
  maxAge?: number
  'max-age'?: number
  sameSite?: 'Lax' | 'Strict' | 'None'
}
