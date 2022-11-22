import { el, observeElement, text, waitElement } from '@zero-dependency/dom'

function createButton() {
  const card = el('div', { className: 'card' })

  const container = el('div', text('Hello World'), card)

  const button = el(
    'button',
    {
      onclick: () => {
        const value = Math.random().toString(16).slice(2)
        // card.textContent = value
        card.classList.add(value)
      }
    },
    'Click me'
  )

  document.body.append(button)

  setTimeout(() => {
    const cards = Array.from({ length: 10 }, () => card.cloneNode(true))
    document.body.append(...cards)
  }, 1000)
}

async function bootstrap() {
  const card = await waitElement('.card')
  console.log('waitElement:', card)
  observeElement(card, (mutation) => console.log('observeElement:', mutation))
}

createButton()
bootstrap()
