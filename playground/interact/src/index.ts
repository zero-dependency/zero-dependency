import { el, mount } from 'redom'
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
  [modalHeader, modalContainer]
)

const overlay = el(
  'div',
  {
    className: 'overlay'
  },
  modal
)

const store = LocalStorage('position', { x: 0, y: 0 })

const interact = new Interact(modal, {
  constrain: true,
  relativeTo: overlay,
  handle: modalHeader,
  onMouseUp: (el) => {
    const { x, y } = el.getBoundingClientRect()
    store.write({ x, y })
  }
})

const { x, y } = store.values()
interact.changePosition(x, y)

mount(document.body, overlay)
