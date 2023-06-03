import { useState } from 'react'
import { useEvent, useInterval } from '@zero-dependency/react'

export function UseInterval() {
  const [interval, setInterval] = useState(500)
  const [value, setValue] = useState(0)

  useInterval(() => setValue(value + 1), interval)

  const handleChangeInterval = useEvent(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInterval(Number(event.currentTarget.value))
    }
  )

  return (
    <>
      <h1>Value: {value}</h1>
      <h1>Interval: {interval}</h1>
      <input
        title="Interval"
        type="range"
        min={10}
        max={1000}
        value={interval}
        onChange={handleChangeInterval}
      />
    </>
  )
}
