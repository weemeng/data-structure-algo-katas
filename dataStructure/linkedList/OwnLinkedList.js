const Node = require("./OwnNode")

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isNullList() {
    return this.head === null;
  }

  guardIsNode(node) {
    if (!(node instanceof Node)) {
      throw new Error("not a node");
    }
    return true;
  }
  guardIsNumber(num) {
    if (!Number.isInteger(num)) {
      throw new Error("not a number");
    }
  }

  getFirst() {
    if (this.isNullList()) {
      return null;
    }
    return this.head;
  }
  unshift(node) {
    this.guardIsNode(node);
    const prevNode = this.head;
    this.head = node;
    node.next = prevNode;
    this.length += 1;
  }
  shift() {
    if (this.isNullList()) {
      return null;
    }
    const nextNode = this.head.next;
    const firstNode = this.head;
    firstNode.next = null;
    this.head = nextNode;
    this.length -= 1;
    return firstNode;
  }
  getLast() {
    if (this.isNullList()) {
      return null;
    }
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }

  getNodeAtIndex(desiredNodeIndex) {
    if (desiredNodeIndex === 0 && this.length === 0) {
      return null;
    }
    if (desiredNodeIndex >= this.length || desiredNodeIndex < 0) {
      throw new Error("index out of bound");
    }
    let node = this.head;
    let nodeNumber = 0;
    while (nodeNumber !== desiredNodeIndex) {
      node = node.next;
      nodeNumber += 1;
    }
    return node;
  }

  pop() {
    if (this.isNullList()) {
      return null;
    }
    if (this.length === 1) {
      const lastNode = this.head;
      this.head = null;
      this.length -= 1;
      return lastNode;
    }
    const lastSecondNode = this.getNodeAtIndex(this.length - 2);
    const lastNode = lastSecondNode.next;
    lastSecondNode.next = null;
    this.length -= 1;
    return lastNode;
  }

  push(node) {
    this.guardIsNode(node);
    if (this.isNullList()) {
      this.head = node;
      this.length += 1;
      return;
    }
    const lastNode = this.getLast();
    lastNode.next = node;
    this.length += 1;
  }

  getSize() {
    return this.length;
  }
  getAt(num) {
    this.guardIsNumber(num);
    return this.getNodeAtIndex(num);
  }
  insertAt(num, node) {
    this.guardIsNumber(num);
    this.guardIsNode(node);
    if (num < 0 || num > this.length) {
      throw new Error("index out of bound");
    }
    if (num === 0) {
      this.unshift(node);
    } else {
      const tempEndNode = this.getNodeAtIndex(num - 1);
      const splinteredNode = this.getNodeAtIndex(num);
      tempEndNode.next = node;
      node.next = splinteredNode;
      this.length += 1;
    }
  }
  removeAt(num) {
    this.guardIsNumber(num);
    if (num < 0 || num >= this.length) {
      throw new Error("index out of bound");
    }
    if (num === 0) {
      const splinteredNode = this.head.next;
      const removedNode = this.head;
      this.head = splinteredNode;
      this.length -= 1;
      return removedNode;
    } else {
      const tempEndNode = this.getNodeAtIndex(num - 1);
      const removedNode = this.getNodeAtIndex(num);
      tempEndNode.next = removedNode.next;
      removedNode.next = null;
      this.length -= 1;
      return removedNode;
    }
  }
}

class Node {
  constructor(data, nextNode) {
    this.data = data;
    this.next = null;

    if (!!nextNode) {
      if (nextNode instanceof Node) {
        this.next = nextNode;
      } else {
        throw new Error("not a node");
      }
    }
  }
}

module.exports = LinkedList;
