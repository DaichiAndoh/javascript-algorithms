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

  printList(){
    let iterator = this.head;
    let dataListStr = '';
    while(iterator != null){
      dataListStr += iterator.data + ' ';
      iterator = iterator.next;
    }
    console.log(dataListStr);
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

  preappend(newNode) {
    newNode.next = this.head;
    this.head = newNode;
  }

  append(newNode) {
    let currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  popFront() {
    this.head = this.head.next;
  }

  delete(index) {
    if (index === 0) return this.popFront();

    let iterator = this.head;
    for(let i = 0; i < index - 1; i++){
      if (iterator.next === null) return null;
      iterator = iterator.next;
    }
    iterator.next = iterator.next.next;
  }

  reverseIterative() {
    let previousNode = null;
    let currentNode = this.head;

    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.head = previousNode;
  }

  reverseRecursive() {
    function _reverseRecursiveHelper(currentNode, previousNode) {
      if (currentNode === null) {
        return previousNode;
      }

      const nextNode = currentNode.next;
      currentNode.next = previousNode;

      return _reverseRecursiveHelper(nextNode, currentNode);
    }

    this.head = _reverseRecursiveHelper(this.head, null);
  }

  reverseEven() {
    function _reverseEvenHelper(currentNode, previousNode) {
      if (currentNode === null) {
        return null;
      }

      let iterator = currentNode;
      while (iterator && iterator.data % 2 === 0) {
        const nextNode = iterator.next;
        iterator.next = previousNode;

        previousNode = iterator;
        iterator = nextNode;
      }

      if (iterator !== currentNode) {
        currentNode.next = iterator;
        _reverseEvenHelper(iterator, null);
        return previousNode;
      } else {
        currentNode.next = _reverseEvenHelper(currentNode.next, currentNode);
        return currentNode;
      }
    }

    this.head = _reverseEvenHelper(this.head, null);
  }
}


const singlyLinkedList = new SinglyLinkedList([35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555]);

// 探索
console.log(singlyLinkedList.at(3).data); // 67
console.log(singlyLinkedList.at(13)); // null
console.log(singlyLinkedList.findNode(67)); // Node { data: 67, next: Node { data: 86, next: Node } }
console.log(singlyLinkedList.findNode(14)); // null

// 挿入
singlyLinkedList.printList(); // 35 23 546 67 86 234 56 767 34 1 98 78 555
singlyLinkedList.preappend(new Node(10));
singlyLinkedList.printList(); // 10 35 23 546 67 86 234 56 767 34 1 98 78 555
singlyLinkedList.append(new Node(100));
singlyLinkedList.printList(); // 10 35 23 546 67 86 234 56 767 34 1 98 78 555 100

const newNode = new Node(45);
const secondNode = singlyLinkedList.at(2);
const temp = secondNode.next;
secondNode.next = newNode;
newNode.next = temp;
singlyLinkedList.printList(); // 10 35 23 45 546 67 86 234 56 767 34 1 98 78 555 100

// 削除
singlyLinkedList.popFront();
singlyLinkedList.popFront();
singlyLinkedList.printList(); // 23 45 546 67 86 234 56 767 34 1 98 78 555 100
singlyLinkedList.delete(3);
singlyLinkedList.printList(); // 23 45 546 86 234 56 767 34 1 98 78 555 100

// リバース
singlyLinkedList.reverseIterative();
singlyLinkedList.printList(); // 100 555 78 98 1 34 767 56 234 86 546 45 23
singlyLinkedList.reverseRecursive();
singlyLinkedList.printList(); // 23 45 546 86 234 56 767 34 1 98 78 555 100
singlyLinkedList.reverseEven();
singlyLinkedList.printList(); // 23 45 56 234 86 546 767 34 1 78 98 555 100
