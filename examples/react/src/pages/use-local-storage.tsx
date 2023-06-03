import { useLocalStorage } from '@zero-dependency/react'
import { randomToken } from '@zero-dependency/utils'
import { FlexWrap } from '../components/flex-wrap'
import { JsonPreview } from '../components/json-preview'

export function UseLocalStorage() {
  const [
    values,
    setValue,
    resetValue
  ] = useLocalStorage<string[]>('key-storage', [])

  return (
    <>
      <h1>useLocalStorage</h1>
      <FlexWrap>
        <button onClick={() => setValue([...values, randomToken()])}>
          Add
        </button>
        <button onClick={() => resetValue()}>Reset</button>
      </FlexWrap>
      <JsonPreview json={values} />
    </>
  )
}
