class LinearSearch {
  static search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return i;
    }
    return -1;
  }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(LinearSearch.search(arr, 6)); // 6
console.log(LinearSearch.search(arr, 10)); // -1
