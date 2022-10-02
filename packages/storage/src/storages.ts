import { BaseStorage } from './base-storage.js'
import type { ExcludeFunction } from './types.js'

export class LocalStorage<T> extends BaseStorage<T> {
  constructor(key: string, value: ExcludeFunction<T>) {
    super(key, value, localStorage)
  }
}

export class SessionStorage<T> extends BaseStorage<T> {
  constructor(key: string, value: ExcludeFunction<T>) {
    super(key, value, sessionStorage)
  }
}
