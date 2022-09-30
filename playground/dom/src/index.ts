import { observeElement, waitObserveElement } from '@zero-dependency/dom'

function createButton() {
  const button = document.createElement('button')
  button.textContent = 'Click me'
  button.addEventListener('click', () => {
    const card = document.createElement('div')
    card.addEventListener('click', () => card.remove())
    card.classList.add('card')
    card.textContent = Math.random().toString(16).slice(2)
    document.body.appendChild(card)
  })

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
