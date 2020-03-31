class Queue {
  constructor(maxLength) {
    this._queue = [];
    this._maxQueue = maxLength;
  }
  
  isMaxQueue() {
    return this._queue.length === this._maxQueue;
  }

  enqueue(data) {
    if (this.isMaxQueue()) {
      throw new Error("cannot queue anymore")
    }
    this._queue.push(data);
  }

  dequeue() {
    if (this._queue.length === 0) {
      return;
    }
    return this._queue.shift();
  }

  peek() {
    if (this._queue.length === 0) {
      return;
    }
    return this._queue[0];
  }
}

module.exports = Queue;
