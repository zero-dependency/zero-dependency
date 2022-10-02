import { describe, expect } from 'vitest'
import { BaseStorage } from '../src/base-storage.js'

interface User {
  id: number
  name: string
}

describe('BaseStorage (localStorage)', (test) => {
  const storage = new BaseStorage<User[]>('users', [], localStorage)

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
    expect(storage.values()).toEqual([firstUser, secondUser])
  })

  test('reset', () => {
    storage.reset()
    expect(storage.values()).toEqual([])
  })

  test('values (SyntaxError)', () => {
    storage.write([firstUser, secondUser])
    localStorage.setItem('users', '{')
    expect(storage.values()).toEqual([])
  })

  test('write (DOMException)', () => {
    const data = new BaseStorage('data', '', localStorage)
    const xdd = 'xdd'.repeat(9999999)
    expect(data.write(xdd)).toBe('')
  })
})
