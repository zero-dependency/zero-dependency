import { cookie } from '@zero-dependency/cookie'

interface User {
  id: number
  name: string
}

cookie.set('le_xot', { id: 1, name: 'Lesha' }, { expires: 7 })
console.log(cookie.get<User>('le_xot'))
