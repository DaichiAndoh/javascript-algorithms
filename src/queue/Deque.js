class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  peekFront() {
    if (this.head === null) return null;
    return this.head.data;
  }

  peekBack() {
    if (this.tail === null) return null;
    return this.tail.data;
  }

  enqueueFront(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.head.prev = new Node(data);
      this.head.prev.next = this.head;
      this.head = this.head.prev;
    }
  }

  enqueueBack(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    }
  }

  dequeueFront() {
    if (this.head === null) {
      return null;
    }

    const temp = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }

    return temp.data;
  }

  dequeueBack() {
    if (this.tail === null) {
      return null;
    }

    const temp = this.tail;
    this.tail = this.tail.prev;
    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }

    return temp.data;
  }
}


const deque = new Deque();

deque.enqueueBack(4);
deque.enqueueBack(50);
console.log(deque.peekFront()); // 4
console.log(deque.peekBack()); // 50
deque.enqueueFront(36);
deque.enqueueFront(96);
console.log(deque.peekFront()); // 96
console.log(deque.peekBack()); // 50
console.log(deque.dequeueBack()); // 50
console.log(deque.dequeueBack()); // 4
console.log(deque.peekFront()); // 96
console.log(deque.peekBack()); // 36
deque.enqueueFront(20);
console.log(deque.dequeueBack()); // 36
console.log(deque.dequeueFront()); // 20
console.log(deque.dequeueFront()); // 96
console.log(deque.dequeueFront()); // null
