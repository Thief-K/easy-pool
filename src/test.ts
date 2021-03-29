import Pool from '../lib/easy-pool'

const test = (no, timeout) => {
  const fn = (cb) => {
    const random = timeout || Math.ceil(Math.random() * 10)
    console.log(`[${no}] time: ${new Date().toLocaleTimeString('en')}, random: ${random}s start`)
    setTimeout(() => {
      console.log(`[${no}] time: ${new Date().toLocaleTimeString('en')} end`)
      cb()
    }, random * 1000)
  }
  return fn
}

const pool = new Pool()

const TEST_NUM = 10

for (let i = 1; i <= TEST_NUM; i++) {
  pool.push(test(i))
}

setTimeout(() => {
  pool.push(test(TEST_NUM + 1, 1))
}, 3 * 1000)
