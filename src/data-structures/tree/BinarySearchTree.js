class BinaryTree{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  printInOrder() {
    this.inOrderWalk(this);
    console.log('');
  }

  inOrderWalk(tRoot) {
    if (tRoot !== null) {
      this.inOrderWalk(tRoot.left);
      process.stdout.write(tRoot.data + ' ');
      this.inOrderWalk(tRoot.right);
    }
  }

  preOrderWalk(tRoot) {
    if (tRoot !== null) {
      process.stdout.write(tRoot.data + ' ');
      this.preOrderWalk(tRoot.left);
      this.preOrderWalk(tRoot.right);
    }
  }

  postOrderWalk(tRoot) {
    if (tRoot !== null) {
      this.postOrderWalk(tRoot.left);
      this.postOrderWalk(tRoot.right);
      process.stdout.write(tRoot.data + ' ');
    }
  }

  reverseOrderWalk(tRoot){
    if(tRoot != null){
      this.reverseOrderWalk(tRoot.right);
      process.stdout.write(tRoot.data + ' ');
      this.reverseOrderWalk(tRoot.left);
    }
  }
}

class BinarySearchTree {
  constructor(arr) {
    const sortedArr = arr.sort(function(a, b) {return a - b;});
    this.root = BinarySearchTree.sortedArrayToBST(sortedArr);
  }

  static sortedArrayToBST(arr) {
    if (arr.length === 0) return null;
    return this.sortedArrayToBSTHelper(arr, 0, arr.length - 1);
  }

  static sortedArrayToBSTHelper(arr, start, end) {
    if (start === end) return new BinaryTree(arr[start]);

    const mid = Math.floor((start + end) / 2);

    let left = null;
    if (mid - 1 >= start) {
      left = this.sortedArrayToBSTHelper(arr, start, mid - 1);
    }

    let right = null;
    if (mid + 1 <= end) {
      right = this.sortedArrayToBSTHelper(arr, mid + 1, end);
    }

    const root = new BinaryTree(arr[mid], left, right);
    return root;
  }

  search(key) {
    let iterator = this.root;
    while (iterator !== null) {
      if (iterator.data === key) return iterator;
      if (iterator.data > key) iterator = iterator.left;
      else iterator = iterator.right;
    }
    return null;
  }

  keyExist(key) {
    let iterator = this.root;
    while (iterator !== null) {
      if (iterator.data === key) return true;
      if (iterator.data > key) iterator = iterator.left;
      else iterator = iterator.right;
    }
    return false;
  }

  printSorted(){
    this.root.printInOrder();
  }

  insertWhile(value){
    let iterator = this.root;

    if (iterator === null) {
      this.root = new BinaryTree(value);
      return;
    }

    while (iterator !== null) {
      if (iterator.data > value && iterator.left === null) {
        iterator.left = new BinaryTree(value);
      } else if (iterator.data < value && iterator.right === null) {
        iterator.right = new BinaryTree(value);
      }
      iterator = iterator.data > value ? iterator.left : iterator.right;
    }
  }

  insertRecursive(value) {
    function insertRecursiveHelper(node, value) {
      if (node === null) {
        return new BinaryTree(value);
      }

      if (node.data > value) {
        node.left = insertRecursiveHelper(node.left, value);
      } else {
        node.right = insertRecursiveHelper(node.right, value);
      }

      return node;
    }

    this.root = insertRecursiveHelper(this.root, value);
  }
}


const bst = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(bst.root); // BinaryTree { data: 6, ... }
console.log(bst.keyExist(6)); // true
console.log(bst.search(6)); // BinaryTree { data: 6, ... }
console.log(bst.keyExist(2)); // true
console.log(bst.search(2)); // BinaryTree { data: 2, left: null, right: null }
console.log(bst.keyExist(34)); // false
console.log(bst.search(34)); // null

console.log('==========');
const bst1 = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const bst2 = new BinarySearchTree([4, 43, 36, 46, 32, 7, 97, 95, 34, 8, 96, 35, 85, 1010, 232]);
bst1.printSorted(); // 1 2 3 4 5 6 7 8 9 10 11
bst2.printSorted(); // 4 7 8 32 34 35 36 43 46 85 95 96 97 232 1010

console.log('==========');
const bst3 = new BinarySearchTree([1, 3, 5, 7, 9]);
bst3.insertWhile(11);
bst3.printSorted(); // 1 3 5 7 9 11
console.log(bst3.search(9)); // value of right node is 11
bst3.insertWhile(6);
bst3.printSorted(); // 1 3 5 6 7 9 11
console.log(bst3.search(7)); // value of left node is 6

const bst4 = new BinarySearchTree([1, 3, 5, 7, 9]);
bst4.insertRecursive(11);
bst4.printSorted(); // 1 3 5 7 9 11
console.log(bst4.search(9)); // value of right node is 11
bst4.insertRecursive(6);
bst4.printSorted(); // 1 3 5 6 7 9 11
console.log(bst4.search(7)); // value of left node is 6
