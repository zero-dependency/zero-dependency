import { GM_cookie, cookie } from '@zero-dependency/cookie'

type Cookies = {
  john: string
  sam: string
}

interface User {
  id: number
  name: string
}

const expires = new Date()
// 7 days
expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000)

cookie.set('john', JSON.stringify({ id: 1, name: 'John' }), { expires })
cookie.set('sam', JSON.stringify({ id: 2, name: 'Sam' }), { expires })

const cookies = cookie.list<Cookies>()
console.log({ cookies, john: JSON.parse(cookies.john) })

cookie.delete('sam')
console.log(cookie.list())

const user = new GM_cookie({
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

console.log(user.get<User>('john'))
user.set('le_xot', { id: 3, name: 'Lesha' }, { expires })
console.log(user.get<User>('le_xot'))
