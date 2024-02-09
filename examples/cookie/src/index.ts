import { Cookie } from '@zero-dependency/cookie'

interface UserCookie {
  [username: string]: {
    id: number
    name: string
  }
}

const cookies = new Cookie<UserCookie>({
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

// set
cookies.set('john', { id: 1, name: 'John Doe' })

// get
const john = cookies.get('john')
if (john) {
  console.log(john.id, john.name)
}

// remove
cookies.remove('john')
