import { Emitter } from '@zero-dependency/emitter'

const messageUpper = Symbol('message:upper')

type Events = {
  [messageUpper]: (data: string) => void
  'message:lower': (data: string) => void
  'once-event': () => void
}

const events = new Emitter<Events>()

function toUpper(message: string): void {
  console.log(messageUpper, message.toUpperCase())
}

function toUpperAndSplit(message: string): void {
  console.log(messageUpper, message.toUpperCase().split(''))
}

function toLower(message: string): void {
  console.log('message:lower', message.toLowerCase())
}

events
  .on(messageUpper, toUpper)
  .on(messageUpper, toUpperAndSplit)
  .on('message:lower', toLower)
  .once('once-event', () => console.log('once-event'))

events.emit(messageUpper, 'hello world')
events.emit('message:lower', 'Hello World')
events.emit('once-event')

events.off(messageUpper, toUpperAndSplit)

console.log({
  'once-event': events.listenerCount('once-event'),
  [messageUpper]: events.listenerCount(messageUpper)
})
