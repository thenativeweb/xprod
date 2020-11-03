# xprod

xprod calculates the [cross product](https://en.wikipedia.org/wiki/Cross_product) of arrays.

## Status

| Category         | Status                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/xprod)](https://www.npmjs.com/package/xprod)                  |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/xprod)                                          |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/xprod)                                      |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/xprod/workflows/Release/badge.svg?branch=master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/xprod)                                |

## Installation

```shell
$ npm install xprod
```

## Quick Start

First you need to add a reference to xprod to your application:

```javascript
const { xprod } = require('xprod');
```

If you use TypeScript, use the following code instead:

```typescript
import { xprod } from 'xprod';
```

To calculate the cross product of two or more arrays, call the xprod function and provide the arrays as parameter. The cross product is returned as a generator to allow multiplying arbitrarily large arrays:

```javascript
const result = xprod([
  [ 'linux', 'windows', 'macOS' ],
  [ 'node-10', 'node-12' ]
]);

// Convert the generator to an array for logging.
console.log([...result]);
// => [
//      [ 'linux', 'node-10' ],
//      [ 'linux', 'node-12' ],
//      [ 'windows', 'node-10' ],
//      [ 'windows', 'node-12' ],
//      [ 'macOS', 'node-10' ],
//      [ 'macOS', 'node-12' ],
//    ]
```

Since the cross product is calculated lazily, this works, too:

```javascript
const result = xprod([
  new Array(100000).fill('foo'),
  new Array(100000).fill('bar')
]);
```

Keep in mind that empty arrays in the input will result in an empty output:

```javascript
const result = xprod([
  new Array(100000).fill('foo'),
  []
]);

// Convert the generator to an array for logging.
console.log([...result]);
// => []
```

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
