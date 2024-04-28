class BinaryTree{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(arr) {
    this.root = BinarySearchTree.sortedArrayToBST(arr);
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
}


const bst = new BinarySearchTree([1,2,3,4,5,6,7,8,9,10,11]);
console.log(bst.root); // BinaryTree { data: 6, ... }
console.log(bst.keyExist(6)); // true
console.log(bst.search(6)); // BinaryTree { data: 6, ... }
console.log(bst.keyExist(2)); // true
console.log(bst.search(2)); // BinaryTree { data: 2, left: null, right: null }
console.log(bst.keyExist(34)); // false
console.log(bst.search(34)); // null
