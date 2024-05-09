const Sort = require('./Sort.js');

class QuickSort extends Sort {
  static sort(arr) {
    this._sortHelper(arr, 0, arr.length - 1);
    return arr;
  }

  static _sortHelper(arr, low, high) {
    if (low < high) {
      const i = this._partition(arr, low, high);
      this._sortHelper(arr, low, i - 1);
      this._sortHelper(arr, i + 1, high);
    }
  }

  static _partition(arr, low, high) {
    let i = low - 1;
    let pivot = arr[high];

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
}


QuickSort.runSort();
