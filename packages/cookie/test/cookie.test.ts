import { describe, expect } from 'vitest'
import { Cookie, cookies } from '../src/index.js'

describe('@zero-dependency/cookie', (test) => {
  const user = {
    id: 1,
    name: 'John'
  }

  test('cookie instance', () => {
    const cookie = new Cookie()
    cookie.set('foo', 1)
    expect(cookie.get('foo')).toBe('1')
    cookie.delete('foo')
  })

  test('set', () => {
    expect(document.cookie).toBe('')
    cookies.set('user', user, { maxAge: 7 })
    expect(document.cookie).toBe(
      'user=%7B%22id%22%3A1%2C%22name%22%3A%22John%22%7D'
    )
  })

  test('get', () => {
    expect(cookies.get('user')).toMatchObject(user)
    expect(cookies.get('unknown')).toBeNull()

    document.cookie = 'empty='
    document.cookie = 'bad=%7B'
    expect(cookies.get('empty')).toBeNull()
    expect(cookies.get('bad')).toBeNull()
  })

  test('list', () => {
    expect(cookies.list()).toEqual({
      user,
      empty: null,
      bad: null
    })
  })

  test('delete', () => {
    cookies.delete('bad')
    cookies.delete('empty')
    cookies.delete('user')
    expect(document.cookie).toBe('')
  })

  test('withAttributes', () => {
    cookies.withAttributes({
      path: '/',
      domain: '.example.com'
    })
  })
})
