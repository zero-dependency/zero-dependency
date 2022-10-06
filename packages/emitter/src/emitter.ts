import type { EventMap, TypedEventEmitter } from './types.js'

export class Emitter<T extends EventMap> implements TypedEventEmitter<T> {
  #events: Record<string | number | symbol, Function[]> = {}

  on<E extends keyof T>(event: E, listener: T[E]): this {
    const listeners = this.#events[event]
    if (listeners) {
      listeners.push(listener)
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
      this.off(event, onceListener as T[E])
      listener(...args)
    }

    this.on(event, onceListener as T[E])

    return this
  }

  emit<E extends keyof T>(event: E, ...args: Parameters<T[E]>): boolean {
    const listeners = this.#events[event] || []
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]!(...args)
    }

    return Boolean(listeners.length)
  }

  off<E extends keyof T>(event: E, listener: T[E]): this {
    if (this.#events[event]) {
      this.#events[event] = this.#events[event].filter((v) => v !== listener)
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
