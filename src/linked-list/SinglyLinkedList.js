class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(arr) {
    this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);

    let currentNode = this.head;
    for (let i = 1; i < arr.length; i++) {
      currentNode.next = new Node(arr[i]);
      currentNode = currentNode.next;
    }
  }

  at(index) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
      if (currentNode === null) return null;
    }

    return currentNode;
  }

  findNode(key) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}


const singlyLinkedList = new SinglyLinkedList([35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555]);
console.log(singlyLinkedList.at(3).data); // 67
console.log(singlyLinkedList.at(13)); // null
console.log(singlyLinkedList.findNode(67)); // Node { data: 67, next: Node { data: 86, next: Node } }
console.log(singlyLinkedList.findNode(14)); // null
