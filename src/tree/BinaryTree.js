class BinaryTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


const binaryTree = new BinaryTree(1);
const node2 = new BinaryTree(2);
const node3 = new BinaryTree(3);

binaryTree.left = node2;
binaryTree.right = node3;

console.log('Root: ' + binaryTree.data);
console.log('Left: ' + binaryTree.left.data);
console.log('Right: ' + binaryTree.right.data);
