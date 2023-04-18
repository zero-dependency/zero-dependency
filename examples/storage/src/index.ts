import { SessionStorage } from '@zero-dependency/storage'

interface User {
  id: number
  name: string
}

const storage = new SessionStorage<User[]>('users', [])
storage.write((users) => [
  ...users,
  { id: users.length + 1, name: Math.random().toString(16).slice(2) }
])

console.log(storage.value)
