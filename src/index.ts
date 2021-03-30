class Pool {
  private pool: ((cb: () => void) => void)[] = []
  private size = 0
  private maxSize: number

  constructor(maxSize = 5) {
    this.maxSize = maxSize
  }

  push(item: (cb: () => void) => void): void {
    if (!item && typeof item !== 'function') {
      return
    }
    this.pool.push(item)
    if (this.size < this.maxSize) {
      this.size++
      this.exec()
    }
  }

  exec(): void {
    if (this.pool.length > 0) {
      const item = this.pool.shift()
      item(() => {
        this.size--
        this.exec()
      })
    }
  }
}

export default Pool
