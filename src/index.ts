enum EventHandler {
  Done = 'done'
}

class Pool {
  #pool: ((cb: () => void) => void)[] = []
  #size = 0
  #maxSize: number

  constructor(maxSize = 5) {
    this.#maxSize = maxSize
  }

  push(item: (cb: () => void) => void): void {
    if (!item && typeof item !== 'function') {
      return
    }
    this.#pool.push(item)
    if (this.#size < this.#maxSize) {
      this.#size++
      this.exec()
    }
  }

  exec(): void {
    if (this.#pool.length > 0) {
      const item = this.#pool.shift()
      item(() => {
        this.exec()
      })
    } else {
      this.#size--
      if (this.#size === 0) {
        this.emit(EventHandler.Done)
      }
    }
  }

  on(type: string, cb: () => void): void {
    this[type + 'EventHandler'] = cb
  }

  emit(type: string): void {
    this[type + 'EventHandler']?.()
  }
}

export default Pool
