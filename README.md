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

## Create Pool

```js
const foo = (cb) => {
  // touch resource here
  // ...
  // done
  cb()
}

const pool = new Pool()
pool.push(foo)
```
