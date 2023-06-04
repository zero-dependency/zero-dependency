import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'
import { RouterContext } from './libs/router/context'
import { routes } from './routes'

const root = document.querySelector<HTMLElement>('#root')!
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterContext routes={routes}>
      <App />
    </RouterContext>
  </React.StrictMode>
)
