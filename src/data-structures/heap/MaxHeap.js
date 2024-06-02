const Heap = require('./Heap.js');

class MaxHeap extends Heap {
  static maxHeapify(arr, heapEnd, i) {
    const l = this.left(i);
    const r = this.right(i);

    let biggest = i;
    if (l <= heapEnd && arr[l] > arr[biggest]) biggest = l;
    if (r <= heapEnd && arr[r] > arr[biggest]) biggest = r;

    if (biggest !== i) {
      const temp = arr[i];
      arr[i] = arr[biggest];
      arr[biggest] = temp;
      this.maxHeapify(arr, heapEnd, biggest);
    }
  }

  static buildMaxHeap(arr) {
    const middle = this.parent(arr.length);

    for (let i = middle; i >= 0; i--) {
      this.maxHeapify(arr, arr.length - 1, i);
    }
  }

  static heapSort(arr) {
    this.buildMaxHeap(arr);

    let heapEnd = arr.length - 1;

    while (heapEnd > 0) {
      const temp = arr[heapEnd];
      arr[heapEnd] = arr[0];
      arr[0] = temp;

      heapEnd--;

      this.maxHeapify(arr, heapEnd, 0);
    }
  }
}


const heap1 = [2, 42, 11, 30, 10, 7, 6, 5, 9];
console.log(heap1);
MaxHeap.buildMaxHeap(heap1);
console.log(heap1); // [42, 30, 11, 9, 10, 7, 6, 5, 2]
MaxHeap.heapSort(heap1);
console.log(heap1); // [2, 5, 6, 7, 9, 10, 11, 30, 42]

const heap2 = [56, 4, 51, 10, 12, 5, 12, 4, 6, 5];
console.log(heap2);
MaxHeap.buildMaxHeap(heap2);
console.log(heap2); // [56, 12, 51, 10, 5, 5, 12, 4, 6, 4]
MaxHeap.heapSort(heap2);
console.log(heap2); // [4, 4, 5, 5, 6, 10, 12, 12, 51, 56]
