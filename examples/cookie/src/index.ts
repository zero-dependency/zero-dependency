import { Cookie } from '@zero-dependency/cookie'

const cookie = new Cookie({
  serialize(value) {
    return JSON.stringify(value)
  },
  deserialize(value) {
    try {
      return JSON.parse(value)
    } catch (err) {
      return null
    }
  }
})

cookie.set('le_xot', { id: 1, name: 'Lesha' }, { expires: 7 })

interface User {
  id: number
  name: string
}

console.log(cookie.get<User>('le_xot'))
