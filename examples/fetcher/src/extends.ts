import { Fetcher } from '@zero-dependency/fetcher'

interface Response {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

export async function extendsApp() {
  const headers = new Headers({ 'Content-Type': 'application/json' })
  const baseApi = new Fetcher('https://jsonplaceholder.typicode.com', {
    headers
  })

  await baseApi.get<Response>('/comments/1')

  headers.set('Authorization', 'xxx')
  const postsApi = baseApi.extends('/posts', { headers })
  postsApi.get<Response>('/1').then((res) => console.log('/posts/1', res))

  headers.delete('Authorization')
  const commentsApi = baseApi.extends('/comments', { headers })
  commentsApi.get<Response>('/1').then((res) => console.log('/comments/1', res))
}
