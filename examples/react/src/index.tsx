import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'

const root = document.querySelector<HTMLElement>('#root')!
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
