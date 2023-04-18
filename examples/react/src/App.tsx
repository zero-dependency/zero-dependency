import { useState } from 'react'
import {
  useCallbackRef,
  useDidUpdate,
  useForceUpdate
} from '@zero-dependency/react'
import { Cookies } from './Cookies'

export function App() {
  const forceUpdate = useForceUpdate()
  const [value, setValue] = useState(0)
  const increment = useCallbackRef((num: number) => setValue(value + num))

  useDidUpdate(() => console.log('Value changed to', value), [value])

  return (
    <div>
      <button onClick={() => increment(2)}>Value: {value}</button>
      <button onClick={() => forceUpdate()}>Force update</button>
      <Cookies />
    </div>
  )
}
