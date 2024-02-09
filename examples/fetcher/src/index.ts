import { Fetcher } from '@zero-dependency/fetcher'

// base url
const fetcher = new Fetcher('https://jsonplaceholder.typicode.com')

// https://jsonplaceholder.typicode.com/posts
const posts = fetcher.extends('posts', {
  headers: {
    Authorization: 'token'
  }
})

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

// GET ALL https://jsonplaceholder.typicode.com/posts
await posts.get<Post[]>('', {
  headers: {
    Authorization: 'new_token'
  }
})

// GET ONE
// https://jsonplaceholder.typicode.com/posts/1
await posts.get<Post>('1')

interface User {
  id: number
  username: string
}

// You can even do something like this 😳
// https://jsonplaceholder.typicode.com/users/2
await posts.get<User>('../users/2')
