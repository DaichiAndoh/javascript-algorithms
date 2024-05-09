const Sort = require('./Sort.js');

class BucketSort extends Sort {
  static sort(arr) {
    const max = Math.max(...arr);
    const bucketSize = Math.floor(max / arr.length);
    const bucket = [];
    for (let i = 0; i < bucketSize; i++) {
      bucket.push([]);
    }

    for (const item of arr) {
      const i = Math.floor(item / bucketSize);
      if (i === bucketSize) {
        bucket[i - 1].push(item);
      } else {
        bucket[i].push(item);
      }
    }

    const sortedArr = [];
    for (const arr of bucket) {
      this._insertionSort(arr);
      sortedArr.push(...arr);
    }

    return sortedArr;
  }

  static _insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const temp = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = temp;
    }

    return arr;
  }
}


BucketSort.runSort();
