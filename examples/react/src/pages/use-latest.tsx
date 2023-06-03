import { useState } from 'react'
import { useLatest } from '@zero-dependency/react'

export function UseLatest() {
  const [value, setValue] = useState('Hello')
  const latestValue = useLatest(value)

  return (
    <>
      <input
        autoFocus
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value)
        }}
      />
      <h1>Value: {value}</h1>
      <h1>Latest value: {latestValue.current}</h1>
    </>
  )
}
