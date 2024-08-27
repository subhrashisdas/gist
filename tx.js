class Storage {
  constructor() {
    this.data = {};
  }

  get(key) {
    return this.data[key];
  }

  put(key, value) {
    this.data[key] = value;
  }

  del(key) {
    delete this.data[key];
  }
}

class Transaction {
  constructor(storage) {
    this.storage = storage;
  }

  startTransaction() {
    this.temporaryData = {};
  }

  commit() {
    for (const [key, value] of Object.entries(this.temporaryData)) {
      if (value === undefined) {
        this.storage.del(key);
      } else {
        this.storage.put(key, value);
      }
    }
  }

  rollback() {
    delete this.temporaryData;
  }

  cacheKey(key) {
    if (this.storage?.[key]?.hasOwnProperty(key)) {
      const value = this.storage.get(key);
      if (value !== undefined) {
        this.temporaryData[key] = this.storage.get(key);
      }
    }
  }

  get(key) {
    this._cacheKey(key);
    return this.temporaryData[key];
  }

  put(key, value) {
    this._cacheKey(key);
    this.temporaryData[key] = value;
  }

  del(key) {
    this.temporaryData[key] = undefined;
  }
}

function test1() {
  const s = new Storage();
  console.log(s.get("foo"));

  const t1 = new Transaction(s);
  t1.startTransaction();
  t1.put("hello", "world");
  t1.put("foo", "bar");
  console.log(t1.get("hello"));
  console.log(t1.get("foo"));
  t1.del("foo");
  console.log(t1.get("foo"));
  console.log(s.get("foo"));
  t1.commit();

  console.log(s.get("hello"));
  console.log(s.get("foo"));
}

function test2() {
  const s = new Storage();
  console.log(s.get("foo"));

  const t1 = new Transaction(s);
  t1.startTransaction();
  t1.put("hello", "world");
  t1.put("foo", "bar");
  console.log(t1.get("hello"));
  console.log(t1.get("foo"));
  t1.del("foo");
  console.log(t1.get("foo"));
  console.log(s.get("foo"));
  t1.rollback();

  console.log(s.get("hello"));
  console.log(s.get("foo"));
}

function test3() {
  // After d
  const s = new Storage();
  s.put("foo", "bar");
  console.log(s.get("foo"));

  const t1 = new Transaction(s);
  t1.startTransaction();
  t1.del("foo");
  console.log(t1.get("foo"));
  t1.del("foo");
  console.log(t1.get("foo"));
  t1.put("foo", "bar2");
  t1.del("foo");
  t1.put("foo", "bar3");
  console.log(t1.get("foo"));
  t1.commit();

  console.log(s.get("foo"));
}

test1();
console.log("-----");
test2();
console.log("-----");
test3();
