const Sort = require('./Sort.js');

class BogoSort extends Sort {
  static sort(arr) {
    function isSorted(arr) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          return false;
        }
      }
      return true;
    }

    function shuffle(arr) {
      for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (arr.length));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    while (!isSorted(arr)) {
      shuffle(arr);
    }
    return arr;
  }
}


BogoSort.runSort();
