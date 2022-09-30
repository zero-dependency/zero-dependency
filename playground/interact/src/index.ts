import { el, mount } from 'redom'
import { GM_interact } from '@zero-dependency/interact'
import { GM_store } from '@zero-dependency/store'
import './style.css'

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

const store = new GM_store('position', { x: 0, y: 0 })

const interact = new GM_interact(modal, {
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
