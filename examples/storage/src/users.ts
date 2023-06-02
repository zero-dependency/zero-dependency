import { LocalStorage } from '@zero-dependency/storage'
import { randomNum } from '@zero-dependency/utils'

export interface User {
  id: number
  name: string
  age: number
}

export const users = new LocalStorage<User[]>('users', [])

export function createUser(): User {
  const nextUser = users.value.at(-1)
  const user: User = {
    id: nextUser ? nextUser.id + 1 : 0,
    name: `User ${users.value.length + 1}`,
    age: randomNum(18, 54)
  }

  return user
}

export function writeUser(user: User): void {
  users.write((users) => {
    return [...users, user]
  })
}

export function removeUserById(id: number): void {
  users.write((users) => {
    return users.filter((user) => user.id !== id)
  })
}
