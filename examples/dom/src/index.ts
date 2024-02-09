import { el, observeElement, waitElement } from '@zero-dependency/dom'
import { randomToken } from '@zero-dependency/utils'

function createButton() {
  const button = el(
    'button',
    {
      onclick: () => {
        button.textContent = `Click ${randomToken()}`
      }
    },
    'Click'
  )

  document.body.append(button)
}

async function waitButton() {
  const button = await waitElement({ selector: 'button' })
  console.log('waitElement:', button)
  observeElement(button, (mutation) => {
    console.log('observeElement:', mutation)
  })
}

waitButton()
setTimeout(() => createButton(), 1000)
