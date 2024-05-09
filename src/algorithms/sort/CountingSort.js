const Sort = require('./Sort.js');

class CountingSort extends Sort {
  static sort(arr) {
    const max = Math.max(...arr);
    const counts = new Array(max + 1).fill(0);
    const sortedArr = new Array(arr.length).fill(0);

    for (const item of arr) {
      counts[item]++;
    }

    for (let i = 1; i < counts.length; i++) {
      counts[i] += counts[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      const index = arr[i];
      sortedArr[counts[index] - 1] = arr[i];
      counts[index]--;
    }

    return sortedArr;
  }
}


CountingSort.runSort();
