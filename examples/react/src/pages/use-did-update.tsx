import { useState } from 'react'
import { useDidUpdate, useEvent, useForceUpdate } from '@zero-dependency/react'
import { FlexWrap } from '../components/flex-wrap'

export function UseDidUpdate() {
  const [value, setValue] = useState(0)
  const forceUpdate = useForceUpdate()
  const increment = useEvent(() => setValue(value + 1))

  useDidUpdate(() => {
    console.log('Value changed to:', value)
  }, [value])

  return (
    <>
      <h1>Value: {value}</h1>
      <FlexWrap>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => forceUpdate()}>Force update</button>
      </FlexWrap>
    </>
  )
}
