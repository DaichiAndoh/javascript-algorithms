class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(node) {
    this.head = node;
  }
}

const node1 = new Node(3);
const node2 = new Node(37);
const node3 = new Node(18);

const numList = new SinglyLinkedList(node1);
numList.head.next = node2;
numList.head.next.next = node3;

let currentNode = numList.head;
while(currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
