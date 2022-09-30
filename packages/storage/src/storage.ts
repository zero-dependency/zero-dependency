import { BaseStorage } from './base-storage.js'
import type { ExcludeFunction } from './types.js'

export function LocalStorage<T>(
  key: string,
  value: ExcludeFunction<T>
): BaseStorage<T> {
  return new BaseStorage<T>(key, value, localStorage)
}

export function SessionStorage<T>(
  key: string,
  value: ExcludeFunction<T>
): BaseStorage<T> {
  return new BaseStorage<T>(key, value, sessionStorage)
}
