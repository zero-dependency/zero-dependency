import { el, mount } from 'redom'
import { observeElement, waitObserveElement } from '@zero-dependency/dom'

function createButton() {
  const card = el('div', {
    className: 'card',
    onclick: () => {
      card.remove()
    }
  })

  const button = el(
    'button',
    {
      onclick: () => {
        card.textContent = Math.random().toString(16).slice(2)
        mount(document.body, card)
      }
    },
    'Click me'
  )

  mount(document.body, button)
}

async function bootstrap() {
  observeElement('.card', (node) => {
    console.log('observeElement:', node)
  })

  const card = await waitObserveElement('.card')
  console.log('waitObserveElement:', card)
}

createButton()
bootstrap()
