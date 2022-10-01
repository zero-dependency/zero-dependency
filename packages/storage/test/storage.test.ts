import { describe, expect } from 'vitest'
import { BaseStorage } from '../src/base-storage.js'

interface User {
  id: number
  name: string
}

function generateUser() {
  let id = 0

  return (): User => {
    id++
    return { id, name: Math.random().toString() }
  }
}

describe('BaseStorage (localStorage)', (test) => {
  const storage = new BaseStorage<User[]>('users', [], localStorage)

  const user = generateUser()
  const firstUser = user()
  const twoUser = user()

  test('initialValue', () => {
    expect(storage.initialValue).toEqual([])
  })

  test('write', () => {
    expect(storage.write((users) => [...users, firstUser])).toEqual([firstUser])
    expect(storage.write((users) => [...users, twoUser])).toEqual([
      firstUser,
      twoUser
    ])
  })

  test('values', () => {
    expect(storage.values()).toEqual([firstUser, twoUser])
  })

  test('reset', () => {
    storage.reset()
    expect(storage.values()).toEqual([])
  })

  test('values (SyntaxError)', () => {
    storage.write([firstUser, twoUser])
    localStorage.setItem('users', '{')
    expect(storage.values()).toEqual([])
  })

  test('write (DOMException)', () => {
    const data = new BaseStorage('data', '', localStorage)
    const xdd = 'xdd'.repeat(9999999)
    expect(data.write(xdd)).toBe('')
  })
})
