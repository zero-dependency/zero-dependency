import { Fetcher } from '@zero-dependency/dom'

const headers = new Headers()
headers.set('Content-Type', 'application/json')

const baseApi = new Fetcher('https://jsonplaceholder.typicode.com', { headers })

headers.set('Authorization', 'xxx')
const postsApi = baseApi.extends('/posts', { headers })
postsApi.get('/1').then((res) => console.log('/posts/1', res))

const commentsApi = baseApi.extends('/comments')
commentsApi.get('/1').then((res) => console.log('/comments/1', res))
