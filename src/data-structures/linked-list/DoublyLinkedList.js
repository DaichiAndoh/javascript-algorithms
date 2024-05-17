class Node{
  constructor(data){
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList{
  constructor(arr){
    if(arr.length === 0){
      this.head = new Node(null);
      this.tail = this.head;
      return;
    }

    this.head = new Node(arr[0]);
    let currentNode = this.head;

    for(let i = 1; i < arr.length; i++){
      currentNode.next = new Node(arr[i]);
      currentNode.next.prev = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = currentNode;
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

  printInReverse(){
    let iterator = this.tail;
    let dataListStr = '';
    while(iterator != null){
      dataListStr += iterator.data + ' ';
      iterator = iterator.prev;
    }
    console.log(dataListStr)
  }

  reverseIterative() {
    let currentNode = this.head;
    [this.head, this.tail] = [this.tail, this.head];

    while (currentNode !== null) {
      const prev = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = prev;
      currentNode = currentNode.prev;
    }
  }

  reverseRecursive() {
    function _reverseRecursiveHelper(currentNode) {
      if (currentNode === null) {
        return null;
      }

      const prev = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = prev;

      if (currentNode.prev !== null) {
        _reverseRecursiveHelper(currentNode.prev);
      }
    }

    _reverseRecursiveHelper(this.head);
    [this.head, this.tail] = [this.tail, this.head];
  }

  sort() {
    if (this.head === null) {
      return null;
    }

    let currentNode= this.head;
    while (currentNode.next) {
      let nextNode = currentNode.next;

      while (nextNode) {
        if (currentNode.data > nextNode.data) {
          [currentNode.data, nextNode.data] = [nextNode.data, currentNode.data];
        }
        nextNode = nextNode.next;
      }

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

  preappend(newNode){
    this.head.prev = newNode;
    newNode.next = this.head;
    newNode.prev = null;
    this.head = newNode;
  }

  append(newNode){
    this.tail.next = newNode;
    newNode.next = null;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  addNextNode(node, newNode){
    const tempNode = node.next;
    node.next = newNode;
    newNode.next = tempNode;
    newNode.prev = node;

    if (node === this.tail) this.tail = newNode;
    else tempNode.prev = newNode;
  }

  popFront() {
    this.head = this.head.next;
    this.head.prev = null;
  }

  pop() {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  deleteNode(node) {
    if (node === this.tail) return this.pop();
    if (node === this.head) return this.popFront();

    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}


const doublyLinkedList = new DoublyLinkedList([35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555]);
 
console.log(doublyLinkedList.head.data); // 35
console.log(doublyLinkedList.head.next.data); // 23
console.log(doublyLinkedList.tail.data); // 555
console.log(doublyLinkedList.tail.prev.data); // 78

// 反転
doublyLinkedList.printList(); // 35 23 546 67 86 234 56 767 34 1 98 78 555
doublyLinkedList.printInReverse(); // 555 78 98 1 34 767 56 234 86 67 546 23 35
doublyLinkedList.reverseIterative();
doublyLinkedList.printList(); // 555 78 98 1 34 767 56 234 86 67 546 23 35
doublyLinkedList.printInReverse(); // 35 23 546 67 86 234 56 767 34 1 98 78 555
doublyLinkedList.reverseRecursive();
doublyLinkedList.printList(); // 35 23 546 67 86 234 56 767 34 1 98 78 555
doublyLinkedList.printInReverse(); // 555 78 98 1 34 767 56 234 86 67 546 23 35

// 探索
console.log(doublyLinkedList.at(3).data); // 67
console.log(doublyLinkedList.at(13)); // null
console.log(doublyLinkedList.findNode(67)); // Node { data: 67, prev: Node { data: 546, ... }, next: Node { data: 86, ... } }
console.log(doublyLinkedList.findNode(14)); // null

// 挿入
doublyLinkedList.preappend(new Node(12));
doublyLinkedList.printList(); // 12 35 23 546 67 86 234 56 767 34 1 98 78 555
doublyLinkedList.append(new Node(99));
doublyLinkedList.printList(); // 12 35 23 546 67 86 234 56 767 34 1 98 78 555 99
doublyLinkedList.addNextNode(doublyLinkedList.at(3), new Node(66));
doublyLinkedList.printList(); // 12 35 23 546 66 67 86 234 56 767 34 1 98 78 555 99

// 削除
doublyLinkedList.popFront();
doublyLinkedList.pop();
doublyLinkedList.deleteNode(doublyLinkedList.at(3));
doublyLinkedList.printList(); // 35 23 546 67 86 234 56 767 34 1 98 78 555

// ソート
doublyLinkedList.sort();
doublyLinkedList.printList(); // 1 23 34 35 56 67 78 86 98 234 546 555 767
