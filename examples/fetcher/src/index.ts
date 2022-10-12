import { Fetcher, FetcherError, el } from '@zero-dependency/dom'

async function bootstrap() {
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')

  const fetcher = new Fetcher('https://jsonplaceholder.typicode.com/todos/', {
    headers
  })

  interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
  }

  const button = el(
    'button',
    {
      onclick: async () => {
        const response = await fetcher.get<Todo>('1')
        console.log(response)
      }
    },
    'Request'
  )

  document.body.appendChild(button)

  try {
    await fetcher.get('/1')
  } catch (err) {
    if (err instanceof FetcherError) {
      console.log(err.response)
    }
  }
}

bootstrap()
