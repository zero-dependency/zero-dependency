import { useLocalStorage } from '@zero-dependency/react'
import { randomToken } from '@zero-dependency/utils'
import { FlexWrap } from '../components/flex-wrap'
import { JsonPreview } from '../components/json-preview'

export function UseLocalStorage() {
  const [values, { setStorage, resetStorage }] = useLocalStorage<string[]>(
    'key-storage',
    []
  )

  return (
    <>
      <h1>useLocalStorage</h1>
      <FlexWrap>
        <button onClick={() => setStorage([...values, randomToken()])}>
          Add
        </button>
        <button onClick={() => resetStorage()}>Reset</button>
      </FlexWrap>
      <JsonPreview json={values} />
    </>
  )
}
