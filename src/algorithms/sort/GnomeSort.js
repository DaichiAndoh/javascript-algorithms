const Sort = require('./Sort.js');

class GnomeSort extends Sort {
  static sort(arr) {
    let i = 0;
    
    while (i < arr.length - 1) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        i--;
      } else {
        i++;
      }
    }

    return arr;
  }
}


GnomeSort.runSort();
