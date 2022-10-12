import {
  el,
  observeElement,
  text,
  waitObserveElement
} from '@zero-dependency/dom'

function createButton() {
  const button = el(
    'button',
    {
      onclick: () => {
        card.classList.add(Math.random().toString(16).slice(12))
      }
    },
    'Click me'
  )
  const card = el('div', { className: 'card' })
  const container = el('div', [
    text('Hello World'),
    card,
    button
  ])

  document.body.appendChild(container)
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
