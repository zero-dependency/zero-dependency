import { cookies } from '@zero-dependency/cookie'

interface User {
  id: number
  name: string
}

cookies.set('le_xot', { id: 1, name: 'Lesha' }, { expires: 7 })
console.log(cookies.get<User>('le_xot'))
