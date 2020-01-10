export default class Queue {
  constructor(...args) {
    this.length = args.length;
    for(let i = 1; i <= args.length; i++) {
      this[i] = args[i - 1];
    }
  }
  push(item) {
    this.length += 1;
    this[this.length] = item;
  }
  pop() {
    if (!this.length) {
      throw new Error('queue is empty');
    }
    const firstItem = this[1];
    for(let i = 1; i < this.length; i++) {
      Object.defineProperty(this, i, {value: this[i +1]});
    }
    delete this[this.length];
    this.length -= 1;
    return firstItem;
  }
}