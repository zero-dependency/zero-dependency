import { Cookie } from '@zero-dependency/cookie'

interface User {
  id: number
  name: string
}

const cookies = new Cookie({
  serialize(value) {
    return JSON.stringify(value)
  },
  deserialize(value) {
    try {
      return JSON.parse(value)
    } catch {
      return null
    }
  }
})

cookies.set('le_xot', { id: 1, name: 'Lesha' }, { expires: 7 })
console.log(cookies.get<User>('le_xot'))
