export class BaseStorage<T> {
  constructor(
    private readonly key: string,
    public readonly initialValue: T,
    private readonly storage: Storage
  ) {}

  get values(): T {
    try {
      const value = this.storage.getItem(this.key)
      return value ? JSON.parse(value) : this.initialValue
    } catch {
      return this.initialValue
    }
  }

  write(value: T): T
  write(value: (prevValue: T) => T): T
  write(value: T | ((prevValue: T) => T)): T {
    if (value instanceof Function) {
      value = value(this.values)
    }

    try {
      this.storage.setItem(this.key, JSON.stringify(value))
    } catch (err) {
      console.error(
        `Failed to save (${this.key}):`,
        (err as DOMException).message
      )
      return this.initialValue
    }

    return value
  }

  reset(): void {
    this.write(this.initialValue)
  }
}
