class Stack {
  constructor() {
    this._stack = [];
  }
  push(data) {
    this._stack.push(data);
  }
  pop() {
    return this._stack.pop();
  }
  peek() {
    if (this._stack.length === 0) {
      return;
    }
    return this._stack[this._stack.length - 1];
  }
  empty() {
    return this._stack.length === 0;
  }
  swap() {
    if (this._stack.length >= 2) {
      const tempData = this._stack[this._stack.length - 1];
      this._stack[this._stack.length - 1] = this._stack[this._stack.length - 2];
      this._stack[this._stack.length - 2] = tempData;
      return true;
    }
    return false;
  }
  size() {
    return this._stack.length;
  }
}
module.exports = Stack;
