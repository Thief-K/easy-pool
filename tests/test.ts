import Pool from '../src/index'
// import Pool from '../lib/index'

function factory(no: number, timeout?: number) {
  return (cb: () => void) => {
    const random = timeout || Math.ceil(Math.random() * 10)
    console.log(`[${no}] time: ${new Date().toLocaleTimeString('en')}, random: ${random}s start`)
    setTimeout(() => {
      console.log(`[${no}] time: ${new Date().toLocaleTimeString('en')} end`)
      cb()
    }, random * 1000)
  }
}

function test() {
  const pool = new Pool()
  const TEST_NUM = 10
  for (let i = 1; i <= TEST_NUM; i++) {
    pool.push(factory(i))
  }

  setTimeout(() => {
    pool.push(factory(TEST_NUM + 1, 1))
  }, 10 * 1000)

  pool.on('done', () => {
    console.log('done...')
  })
}

test()
