declare class Pool {
  constructor(maxSize: number)
  push(item: (cb: () => void) => void): void
  on(type: string, cb: () => void): void
}

export default Pool
