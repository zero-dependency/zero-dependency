import type { EventMap, TypedEventEmitter } from './types.js'

export class GM_emitter<T extends EventMap> implements TypedEventEmitter<T> {
  #events: Record<string | number | symbol, Function[]> = {}

  on<E extends keyof T>(event: E, listener: T[E]): this {
    const events = this.#events[event]
    if (events) {
      events.push(listener)
    } else {
      this.#events[event] = [listener]
    }

    return this
  }

  addListener<E extends keyof T>(event: E, listener: T[E]): this {
    return this.on(event, listener)
  }

  once<E extends keyof T>(event: E, listener: T[E]): this {
    const onceListener = (...args: any[]) => {
      listener(...args)
      this.off(event, onceListener as T[E])
    }

    this.on(event, onceListener as T[E])

    return this
  }

  emit<E extends keyof T>(event: E, ...args: Parameters<T[E]>): boolean {
    const events = this.#events[event] || []
    for (let i = 0; i < events.length; i++) {
      events[i]!(...args)
    }

    return Boolean(events.length)
  }

  off<E extends keyof T>(event: E, listener: T[E]): this {
    if (this.#events[event]) {
      this.#events[event] = this.#events[event].filter(
        (event) => event !== listener
      )
    }

    return this
  }

  removeListener<E extends keyof T>(event: E, listener: T[E]): this {
    return this.off(event, listener)
  }

  removeAllListeners<E extends keyof T>(event?: E): this {
    if (event) {
      delete this.#events[event]
    } else {
      this.#events = {}
    }

    return this
  }

  eventNames(): (string | symbol | keyof T)[] {
    return Reflect.ownKeys(this.#events)
  }

  listeners<E extends keyof T>(event: E): T[E][] {
    return this.#events[event] as T[E][]
  }

  listenerCount<E extends keyof T>(event: E): number {
    return this.#events[event]?.length ?? 0
  }
}
