class Counter {
  #num;
  constructor(num) {
    this.num = num;
  }
  increment() {
    this.num++;
  }

  value() {
    return this.num;
  }
}
