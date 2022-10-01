import { describe, expect } from 'vitest'
import { Cookie } from '../src/cookie.js'

interface User {
  id: number
  name: string
}

describe('Cookie', (test) => {
  const cookie = new Cookie({
    serialize(value) {
      return JSON.stringify(value)
    },
    deserialize(value) {
      try {
        return JSON.parse(value)
      } catch (err) {
        return err
      }
    }
  })

  const user = {
    id: 1,
    name: 'John'
  }

  test('set', () => {
    expect(document.cookie).toBe('')
    cookie.set<User>('user', user)
    expect(document.cookie).toBe(
      'user=%7B%22id%22%3A1%2C%22name%22%3A%22John%22%7D'
    )
  })

  test('get', () => {
    expect(cookie.get<User>('user')).toMatchObject(user)
  })

  test('list', () => {
    expect(cookie.list<{ user: User }>()).toMatchObject({ user })
  })

  test('delete', () => {
    cookie.delete('user')
    expect(document.cookie).toBe('')
  })
})
