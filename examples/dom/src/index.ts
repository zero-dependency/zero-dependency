import {
  el,
  observeElement,
  text,
  waitObserveElement
} from '@zero-dependency/dom'

function createButton() {
  const card = el('div', {
    className: 'card'
  })

  const button = el(
    'button',
    {
      onclick: () => {
        const clonedCard = card.cloneNode()
        const id = text(Math.random().toString(16).slice(2))
        clonedCard.appendChild(id)
        document.body.appendChild(clonedCard)
      }
    },
    'Click me'
  )

  document.body.appendChild(button)
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
