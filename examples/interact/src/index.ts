import { el } from '@zero-dependency/dom'
import { Interact } from '@zero-dependency/interact'
import { LocalStorage } from '@zero-dependency/storage'

const modalHeader = el('div', {
  className: 'modal-header'
})

const modalContainer = el('div', {
  className: 'modal-container'
})

const modal = el(
  'div',
  {
    className: 'modal'
  },
  modalHeader,
  modalContainer
)

const overlay = el(
  'div',
  {
    className: 'overlay'
  },
  modal
)

const store = new LocalStorage('position', { x: 0, y: 0 })

const interact = new Interact(modal, {
  constrain: true,
  relativeTo: overlay,
  handle: modalHeader,
  onMouseUp: (el) => {
    const { x, y } = el.getBoundingClientRect()
    store.write({ x, y })
  }
})

const { x, y } = store.value
interact.changePosition(x, y)

document.body.appendChild(overlay)
