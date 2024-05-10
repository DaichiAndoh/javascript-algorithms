class BinarySearch {
  static search(arr, value) {
    return this._searchHelper(arr, value, 0, arr.length - 1);
  }

  static _searchHelper(arr, value, left, right) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === value) return mid;
    else if (arr[mid] > value) return this._searchHelper(arr, value, left, mid - 1);
    else return this._searchHelper(arr, value, mid + 1, right);
  }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(BinarySearch.search(arr, 6)); // 6
console.log(BinarySearch.search(arr, 10)); // -1
