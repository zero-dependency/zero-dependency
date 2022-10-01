import { describe, expect } from 'vitest'
import { Emitter } from '../src/emitter.js'

const once = Symbol('once')

type Events = {
  message: (msg: string) => void
  error: (msg: string) => void
  [once]: () => void
}

describe('Emitter', (test) => {
  const events = new Emitter<Events>()

  function messageListener(msg: string): void {
    expect(msg).toBe('hello world')
  }

  function errorListener(msg: string): void {
    expect(msg).toBe('some error')
  }

  test('addListener', () => {
    events
      .addListener('message', messageListener)
      .addListener('error', errorListener)
  })

  test('eventNames', () => {
    expect(events.eventNames()).toEqual(['message', 'error'])
  })

  test('listenerCount', () => {
    expect(events.listenerCount('message')).toBe(1)
    expect(events.listenerCount('error')).toBe(1)
    expect(events.listenerCount(once)).toBe(0)
  })

  test('listeners', () => {
    expect(events.listeners('message')).toEqual([messageListener])
    expect(events.listeners('error')).toEqual([errorListener])
    expect(events.listeners(once)).toBeUndefined()
  })

  test('once', () => {
    expect(events.emit(once)).toBeFalsy()
    events.once(once, () => {})
    expect(events.eventNames()).toContainEqual(once)
    expect(events.emit(once)).toBeTruthy()
    expect(events.listenerCount(once)).toBe(0)
  })

  test('emit', () => {
    expect(events.emit('message', 'hello world')).toBeTruthy()
    expect(events.emit('error', 'some error')).toBeTruthy()
  })

  test('removeListener', () => {
    events
      .addListener('error', messageListener)
      .removeListener('error', errorListener)
      .addListener('error', errorListener)

    expect(events.listenerCount('error')).toBe(2)
  })

  test('removeAllListeners', () => {
    events.removeAllListeners('error')
    expect(events.listenerCount('error')).toBe(0)

    events.removeAllListeners()
    expect(events.listenerCount('message')).toBe(0)
    expect(events.listenerCount(once)).toBe(0)
  })
})
