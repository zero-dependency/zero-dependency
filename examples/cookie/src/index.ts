import { Cookie } from '@zero-dependency/cookie'

interface User {
  [username: string]: {
    id: number
    name: string
  }
}

const cookies = new Cookie<User>({
  encode(value) {
    return JSON.stringify(value)
  },
  decode(value) {
    try {
      return JSON.parse(value)
    } catch {
      return null
    }
  }
})

cookies.set('le_xot', { id: 1, name: 'Lesha' }, { expires: 7 })
console.log(cookies.get('le_xot'))
