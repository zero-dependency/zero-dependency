# debounce

> Returns a new function that will only be executed after being idle for
a certain amount of time. Useful for reducing the number of expensive
function calls.

<!-- TODO: add link to source code -->
<!-- https://github.com/zero-dependency/utils/tree/master/src/debounce.ts -->

## Import

```js
import { debounce } from '@zero-dependency/utils'
```

## Usage

::: code-sandbox {template=vanilla-ts}
<<< @/snippets/debounce.ts{index.ts}
:::

## Reference
```ts
function debounce<T extends (...args: any[]) => void>(
  fn: T, ms: number
): (...args: Parameters<T>) => void
```
