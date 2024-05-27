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

  searchWhile(key) {
    let iterator = this.root;
    while (iterator !== null) {
      if (iterator.data === key) return iterator;
      if (iterator.data > key) iterator = iterator.left;
      else iterator = iterator.right;
    }
    return null;
  }

  searchRecursive(key) {
    function searchRecursiveHelper(node, key) {
      if (node === null) {
        return null;
      }

      if (node.data === key) return node;
      if (node.data > key) return searchRecursiveHelper(node.left, key);
      else return searchRecursiveHelper(node.right, key);
    }

    return searchRecursiveHelper(this.root, key);
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

/** BinarySearchTree作成 */
const bst = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(bst.root); // BinaryTree { data: 6, ... }
console.log(bst.keyExist(6)); // true
console.log(bst.searchWhile(6)); // BinaryTree { data: 6, ... }
console.log(bst.keyExist(2)); // true
console.log(bst.searchRecursive(2)); // BinaryTree { data: 2, left: null, right: null }
console.log(bst.keyExist(34)); // false
console.log(bst.searchWhile(34)); // null

/** BinarySearchTreeソート */
console.log('==========');
const bst1 = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const bst2 = new BinarySearchTree([4, 43, 36, 46, 32, 7, 97, 95, 34, 8, 96, 35, 85, 1010, 232]);
bst1.printSorted(); // 1 2 3 4 5 6 7 8 9 10 11
bst2.printSorted(); // 4 7 8 32 34 35 36 43 46 85 95 96 97 232 1010

/** BinarySearchTree挿入 */
console.log('==========');
const bst3 = new BinarySearchTree([1, 3, 5, 7, 9]);
bst3.insertWhile(11);
bst3.printSorted(); // 1 3 5 7 9 11
console.log(bst3.searchWhile(9)); // value of right node is 11
bst3.insertWhile(6);
bst3.printSorted(); // 1 3 5 6 7 9 11
console.log(bst3.searchWhile(7)); // value of left node is 6

const bst4 = new BinarySearchTree([1, 3, 5, 7, 9]);
bst4.insertRecursive(11);
bst4.printSorted(); // 1 3 5 7 9 11
console.log(bst4.searchWhile(9)); // value of right node is 11
bst4.insertRecursive(6);
bst4.printSorted(); // 1 3 5 6 7 9 11
console.log(bst4.searchWhile(7)); // value of left node is 6

const bst5 = new BinarySearchTree([]);
console.log(bst5); // BinarySearchTree { root: null }
bst5.insertWhile(3);
bst5.insertRecursive(1);
bst5.insertWhile(5);
bst5.insertRecursive(2);
bst5.insertWhile(8);
bst5.printSorted(); // 1 2 3 5 8
console.log(bst5.root.data); // 3
console.log(bst5.root.left.data); // 1
console.log(bst5.root.left.right.data); // 2
console.log(bst5.root.right.data); // 5
console.log(bst5.root.right.right.data); // 8
