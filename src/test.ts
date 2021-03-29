import Pool from './index'

const test = (no) => {
  const fn = (cb) => {
    const random = Math.ceil(Math.random() * 10)
    console.log(`[${no}] time: ${new Date().toLocaleTimeString('en')}, random: ${random}s start`)
    setTimeout(() => {
      console.log(`[${no}] time: ${new Date().toLocaleTimeString('en')} end`)
      cb()
    }, random * 1000)
  }
  return fn
}

const pool = new Pool()

for (let i = 1; i <= 10; i++) {
  pool.push(test(i))
}
