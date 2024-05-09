const Sort = require('./Sort.js');

class MergeSort extends Sort {
  static sort(arr) {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    this.sort(left);
    this.sort(right);

    left.push(Infinity);
    right.push(Infinity);
    let [i, j, k] = [0, 0, 0];
    while (left[i] !== Infinity || right[j] !== Infinity) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    return arr;
  }
}


MergeSort.runSort();
