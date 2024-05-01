class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  peekFront() {
    if (this.head === null) return null;
    return this.head.data;
  }

  peekBack() {
    if (this.tail === null) return this.peekFront();
    return this.tail.data;
  }

  enqueue(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head === null) return null;

    const temp = this.head;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;

    return temp.data;
  }
}


const q = new Queue();
console.log(q.peekFront()); // null
console.log(q.peekBack()); // null

q.enqueue(10);
console.log(q.peekFront()); // 10
console.log(q.peekBack()); // 10

q.enqueue(5);
console.log(q.peekFront()); // 10
console.log(q.peekBack()); // 5

q.enqueue(68);
console.log(q.peekFront()); // 10
console.log(q.peekBack()); // 68

console.log('dequeued: ' + q.dequeue()); // 10
console.log(q.peekFront()); // 5
console.log(q.peekBack()); // 68
