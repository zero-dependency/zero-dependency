import { el } from '@zero-dependency/dom'
import { createUser, removeUserById, users, writeUser } from './users.js'
import type { User } from './users.js'

const title = el('h1', 'Users')
const table = el('table')
const thead = el('thead', [
  el('tr', [
    el('th', 'Id'),
    el('th', 'Name'),
    el('th', 'Age'),
    el('th', 'Action')])
])
const tbody = el('tbody')

const addButton = el(
  'button',
  {
    style: {
      marginRight: '1rem'
    },
    onclick: () => {
      const user = createUser()
      createTableItem(user)
      writeUser(user)
    }
  },
  'Add'
)

const resetButton = el(
  'button',
  {
    onclick: () => {
      users.reset()
      tbody.innerHTML = ''
    }
  },
  'Reset'
)

function createTableItem(user: User) {
  const tr = el('tr')
  tr.append(
    el('td', `${user.id}`),
    el('td', user.name),
    el('td', `${user.age}`),
    el('th', [
      el(
        'button',
        {
          onclick: () => {
            removeUserById(user.id)
            tr.remove()
          }
        },
        'Remove'
      )
    ])
  )
  tbody.appendChild(tr)
}

for (const user of users.value) {
  createTableItem(user)
}

const root = document.querySelector('#root')!
table.append(thead, tbody)
root.append(title, addButton, resetButton, table)
