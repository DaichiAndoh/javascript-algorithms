const Sort = require('./Sort.js');

class RadixSort extends Sort {
  static sort(arr) {
    const max = Math.max(...arr);
    let place = 1;
    
    while (place < max) {
      arr = this._countingSort(arr, place);
      place *= 10;
    }

    return arr;
  }

  static _countingSort(arr, place) {
    const counts = new Array(10).fill(0);
    const sortedArr = new Array(arr.length).fill(0);

    for (const item of arr) {
      const index = Math.floor(item / place) % 10;
      counts[index]++;
    }

    for (let i = 1; i < counts.length; i++) {
      counts[i] += counts[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      const index = Math.floor(arr[i] / place) % 10;
      sortedArr[counts[index] - 1] = arr[i];
      counts[index]--;
    }

    return sortedArr;
  }
}


RadixSort.runSort();
