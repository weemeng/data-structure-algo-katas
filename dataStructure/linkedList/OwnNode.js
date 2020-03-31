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
module.exports = Node;
