class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    const temp = this.head;
    this.head = new Node(data);
    this.head.next = temp;
  }

  pop() {
    if (this.head === null) return null;
    const temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  peek() {
    if (this.head === null) return null;
    return this.head.data;
  }
}


const s = new Stack();
s.push(2);
console.log(s.peek()); // 2
s.push(4);
s.push(3)
s.push(1);
console.log(s.pop()); // 1
console.log(s.peek()); // 3
