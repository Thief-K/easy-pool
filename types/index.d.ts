export declare class Pool {
  constructor(maxSize: number)
  push(item: (cb: () => void) => void): void
}
