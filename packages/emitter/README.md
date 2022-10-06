# @zero-dependency/emitter

[![](https://img.shields.io/npm/v/@zero-dependency/emitter)](https://npm.im/@zero-dependency/emitter)
![](https://img.shields.io/npm/l/@zero-dependency/emitter)

## Installation

```sh
npm install @zero-dependency/emitter
```

```sh
yarn add @zero-dependency/emitter
```

```sh
pnpm add @zero-dependency/emitter
```

## Usage

```ts
import { Emitter } from '@zero-dependency/emitter'

type Events = {
  message: (msg: string) => void
}

const events = new Emitter<Events>()

function onMessage(msg: string): void {}

// Adds the listener function for the event named message.
events.on('message', onMessage)

// Alias for `.on(event, listener)`.
events.addListener('message', onMessage)

// Adds a one-time listener function for the event named message.
// The next time message is triggered, this listener is removed and then invoked.
events.once('message', onMessage)

// Synchronously calls each of the listeners registered for the event named message,
// in the order they were registered, passing the supplied arguments to each.
// Returns true if the event had listeners, false otherwise.
events.emit('message', 'hello world')

// Removes the specified listener from the listener array for the event named message.
events.off('message', onMessage)

// Alias for `.off(event, listener)`.
events.removeListener('message', onMessage)

// Removes all listeners, or those of the specified message.
events.removeAllListeners('message')

// Removes all listeners for events.
events.removeAllListeners()

// Returns an array listing the events for which the emitter has registered listeners.
// The values in the array are strings or Symbols.
events.eventNames()

// Returns an array of listeners for an event named message.
events.listeners('message')

// Returns the number of listeners listening to the event named message.
events.listenerCount('message')
```
