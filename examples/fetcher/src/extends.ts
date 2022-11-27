import { Fetcher } from '@zero-dependency/fetcher'
import type { FetcherInterceptor } from '@zero-dependency/fetcher'

interface JSONPlaceholderResponse {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

export async function extendsApp() {
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')

  const baseApi = new Fetcher('https://jsonplaceholder.typicode.com', {
    headers
  })

  const i: FetcherInterceptor.Response = {
    async response(response) {
      console.log(await response.json())
      console.log({ response })
    },
    responseError(responseError) {
      console.log({ responseError })
    }
  }

  baseApi.interceptor.register(i)

  await baseApi.get<JSONPlaceholderResponse>('/comments/1')

  // headers.set('Authorization', 'xxx')
  // const postsApi = baseApi.extends('/posts', { headers })
  // postsApi.get<PlaceholderResponse>('/1').then((res) => console.log('/posts/1', res))

  // headers.delete('Authorization')
  // const commentsApi = baseApi.extends('/comments', { headers })
  // commentsApi.get<PlaceholderResponse>('/1').then((res) => console.log('/comments/1', res))
}
