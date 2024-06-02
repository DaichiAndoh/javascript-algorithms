const Heap = require('./Heap.js');

class MinHeap extends Heap {
  static minHeapify(arr, heapEnd, i) {
    const l = this.left(i);
    const r = this.right(i);

    let smallest = i;
    if (l <= heapEnd && arr[l] < arr[smallest]) smallest = l;
    if (r <= heapEnd && arr[r] < arr[smallest]) smallest = r;

    if (smallest !== i) {
      const temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
      this.minHeapify(arr, heapEnd, smallest);
    }
  }

  static buildMinHeap(arr) {
    const middle = this.parent(arr.length);

    for (let i = middle; i >= 0; i--) {
      this.minHeapify(arr, arr.length - 1, i);
    }
  }

  static heapSort(arr) {
    this.buildMinHeap(arr);

    let heapEnd = arr.length - 1;

    while (heapEnd > 0) {
      const temp = arr[heapEnd];
      arr[heapEnd] = arr[0];
      arr[0] = temp;

      heapEnd--;

      this.minHeapify(arr, heapEnd, 0);
    }
  }
}


const heap1 = [2, 42, 11, 30, 10, 7, 6, 5, 9];
console.log(heap1);
MinHeap.buildMinHeap(heap1);
console.log(heap1); // [2, 5, 6, 9, 10, 7, 11, 30, 42]
MinHeap.heapSort(heap1);
console.log(heap1); // [42, 30, 11, 10, 9, 7, 6, 5, 2]

const heap2 = [56, 4, 51, 10, 12, 5, 12, 4, 6, 5];
console.log(heap2);
MinHeap.buildMinHeap(heap2);
console.log(heap2); // [4, 4, 5, 6, 5, 51, 12, 10, 56, 12]
MinHeap.heapSort(heap2);
console.log(heap2); // [56, 51, 12, 12, 10, 6, 5, 5, 4, 4]
