# @zero-dependency/cookie

[![](https://img.shields.io/npm/v/@zero-dependency/cookie)](https://npm.im/@zero-dependency/cookie)
![](https://img.shields.io/npm/l/@zero-dependency/cookie)

## Installation

```sh
npm install @zero-dependency/cookie
```

```sh
yarn add @zero-dependency/cookie
```

```sh
pnpm add @zero-dependency/cookie
```

## Usage

```js
import { cookies } from '@zero-dependency/cookie'

// Create a cookie.
cookies.set('name', 'value')

// Create a cookie that expires 7 days from now.
cookies.set('name', 'value', { expires: 7 })

// Create an expiring cookie, valid to the path of the current page.
cookies.set('name', 'value', { expires: 7, path: '' })

// Read cookie.
cookies.get('name')

// Read all visible cookies.
cookies.list()

// Delete cookie.
cookies.delete('name')

// Delete a cookie valid to the path of the current page.
cookies.set('name', 'value', { path: '' })
cookies.delete('name'); // fail!
cookies.delete('name', { path: '' }); // success!

// Cookie attribute defaults can be set globally.
cookies.withAttributes({ path: '/', domain: '.example.com' })
```
