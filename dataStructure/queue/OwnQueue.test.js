const Queue = require("./OwnQueue");

describe("OwnQueue.js", () => {
  it("should check if enqueue and dequeue works and dequeue empty queue is undefined", () => {
    const newQueue = new Queue(4);

    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(0.5);

    expect(newQueue.dequeue()).toBe(1);
    expect(newQueue.dequeue()).toBe(2);
    expect(newQueue.dequeue()).toBe(3);
    expect(newQueue.dequeue()).toBe(0.5);
    expect(newQueue.dequeue()).toBeUndefined();
  });

  it("should check if enqueue more than max queue, should return `cannot queue anymore`", () => {
    const newQueue = new Queue(1);

    newQueue.enqueue(1);

    expect(() => newQueue.enqueue(1)).toThrow("cannot queue anymore");
  });
  
  it("should peek first item when there is at least an item in the queue  and should return undefined when there is nothing", () => {
    const newQueue = new Queue(1);

    newQueue.enqueue(1);

    expect(newQueue.peek()).toBe(1);
    expect(newQueue.dequeue()).toBe(1);
    expect(newQueue.dequeue()).toBeUndefined();
  });

  it("should return undefined when peeking an empty queue", () => {
    const newQueue = new Queue();

    expect(newQueue.peek()).toBeUndefined();
  });
});
