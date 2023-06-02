import { useState } from 'react'
import { useDidUpdate, useEvent, useForceUpdate } from '@zero-dependency/react'
import { Gap } from '../components/Flex'

export function UseDidUpdate() {
  const [value, setValue] = useState(0)
  const forceUpdate = useForceUpdate()
  const increment = useEvent(() => setValue(value + 1))

  useDidUpdate(() => {
    console.log('Value changed to:', value)
  }, [value])

  return (
    <div>
      <h1>Value: {value}</h1>
      <Gap>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => forceUpdate()}>Force update</button>
      </Gap>
    </div>
  )
}
