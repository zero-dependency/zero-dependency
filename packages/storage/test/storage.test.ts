import { describe, expect } from 'vitest'
import { LocalStorage, SessionStorage } from '../src/index.js'

interface User {
  id: number
  name: string
}

describe('@zero-dependency/storage', (test) => {
  const session = new SessionStorage('session', '')
  expect(session.values).toBe('')

  const storage = new LocalStorage<User[]>('users', [])

  const firstUser = {
    id: 1,
    name: 'John'
  }

  const secondUser = {
    id: 2,
    name: 'Martin'
  }

  test('initialValue', () => {
    expect(storage.initialValue).toEqual([])
  })

  test('write', () => {
    expect(storage.write((users) => [...users, firstUser])).toEqual([firstUser])
    expect(storage.write((users) => [...users, secondUser])).toEqual([
      firstUser,
      secondUser
    ])
  })

  test('values', () => {
    expect(storage.values).toEqual([firstUser, secondUser])
  })

  test('reset', () => {
    storage.reset()
    expect(storage.values).toEqual([])
  })

  test('values (SyntaxError)', () => {
    storage.write([firstUser, secondUser])
    localStorage.setItem('users', '{')
    expect(storage.values).toEqual([])
  })

  test('write (DOMException)', () => {
    const data = new LocalStorage('data', '')
    const xdd = 'xdd'.repeat(9999999)
    expect(data.write(xdd)).toBe('')
  })
})
