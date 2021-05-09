# Easy Pool

Create pool to limit the preemption of resource.

## Install

npm

```sh
npm install @konper/easy-pool
```

yarn

```sh
yarn add @konper/easy-pool
```

## Usage

```js
const foo = (cb) => {
  // touch resource here
  // ...
  // done
  cb()
}

const pool = new Pool([size = 5])
pool.push(foo)
```

### Event

```js
pool.on(event, callback)
```

- `done`: triggered when size became 0.
