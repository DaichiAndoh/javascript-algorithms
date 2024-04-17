const Heap = require('./Heap.js');

class MaxHeap extends Heap {
  static maxHeapify(arr, i){
    const l = this.left(i);
    const r = this.right(i);

    let biggest = i;
    if(l < arr.length && arr[l] > arr[biggest]) biggest = l;
    if(r < arr.length && arr[r] > arr[biggest]) biggest = r;

    if(biggest != i){
      const temp = arr[i];
      arr[i] = arr[biggest];
      arr[biggest] = temp;
      this.maxHeapify(arr, biggest);
    }
  }

  static buildMaxHeap(arr) {
    const middle = this.parent(arr.length);

    for (let i = middle; i >= 0; i--) {
      this.maxHeapify(arr, i);
    }
  }
}

const heap1 = [2, 42, 11, 30, 10, 7, 6, 5, 9];
console.log(heap1);
MaxHeap.buildMaxHeap(heap1);
console.log(heap1); // [42, 30, 11, 9, 10, 7, 6, 5, 2]

const heap2 = [56, 4, 51, 10, 12, 5, 12, 4, 6, 5];
console.log(heap2);
MaxHeap.buildMaxHeap(heap2);
console.log(heap2); // [56, 12, 51, 10, 5, 5, 12, 4, 6, 4]
