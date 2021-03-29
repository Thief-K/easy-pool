(() => {
  // src/index.ts
  var _Pool = class {
    constructor() {
      this.pool = [];
      this.size = 0;
    }
    push(item) {
      if (!item && typeof item !== "function") {
        return;
      }
      this.pool.push(item);
      if (this.size < _Pool.MAX_SIZE) {
        this.size++;
        this.exec();
      }
    }
    exec() {
      if (this.pool.length > 0) {
        const item = this.pool.shift();
        item(() => {
          this.exec();
        });
      }
    }
  };
  var Pool = _Pool;
  Pool.MAX_SIZE = 5;
  var src_default = Pool;
})();
