export class BaseStorage<T> {
  constructor(
    private readonly key: string,
    public readonly initialValue: T,
    private readonly storage: Storage
  ) {}

  values(): T {
    try {
      const value = this.storage.getItem(this.key)
      return value ? JSON.parse(value) : this.initialValue
    } catch {
      return this.initialValue
    }
  }

  write(value: T): T
  write(value: (prevValue: T) => T): T
  write(values: T | ((prevValue: T) => T)): T {
    if (values instanceof Function) {
      values = values(this.values())
    }

    try {
      this.storage.setItem(this.key, JSON.stringify(values))
    } catch (err) {
      console.error(
        `Failed to save (${this.key}):`,
        (err as DOMException).message
      )
      return this.initialValue
    }

    return values
  }

  reset(): void {
    this.write(this.initialValue)
  }
}
