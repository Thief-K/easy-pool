class Pool {
  pool = []
  size = 0
  static MAX_SIZE = 5

  push(item: (cb: any) => void): void {
    if (!item && typeof item !== 'function') {
      return
    }
    this.pool.push(item)
    if (this.size < Pool.MAX_SIZE) {
      this.size++
      this.exec()
    }
  }

  exec(): void {
    if (this.pool.length > 0) {
      const item = this.pool.shift()
      item(() => {
        this.exec()
      })
    }
  }
}

export default Pool
