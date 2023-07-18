import { useEffect, useState } from 'react'
import { useLogger, useLoggerWithDeps } from '@zero-dependency/react'

export function UseLogger() {
  const [counter, setCounter] = useState(0)
  const logger = useLogger()

  useLoggerWithDeps('Counter', [counter])

  useEffect(() => {
    logger.warn('Warn!')
    logger.error('Error!')
  }, [])

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  )
}
