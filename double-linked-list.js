class Node {
  constructor(val) {
    this.data = val;
    this.next = undefined;
    this.prev = undefined;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  addItem(val) {
    const newNode = new Node(val);
    if (this.head === undefined) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  display() {
    let current = this.head;
    while (current !== undefined) {
      console.log(current.data);
      current = current.next;
    }
  }
}
