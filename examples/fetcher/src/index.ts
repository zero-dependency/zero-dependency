import { el } from '@zero-dependency/dom'
import { Fetcher, FetcherError } from '@zero-dependency/fetcher'
import { extendsApp } from './extends.js'

async function mainApp() {
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')

  const fetcher = new Fetcher('https://jsonplaceholder.typicode.com/todos', {
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
        const response = await fetcher.get<Todo>('/1', {
          headers: { Authorization: 'xxxxxx' }
        })
        console.log(response)
      }
    },
    'Request'
  )

  document.body.appendChild(button)

  try {
    await fetcher.get('../1')
  } catch (err) {
    if (err instanceof FetcherError) {
      console.log(err.response)
    }
  }
}

mainApp()
extendsApp()
