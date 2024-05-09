const Sort = require('./Sort.js');

class ShellSort extends Sort {
  static sort(arr) {
    let gap = Math.floor(arr.length / 2);

    while (gap > 0) {
      for (let i = gap; i < arr.length; i++) {
        const temp = arr[i];
        let j = i;
  
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
  
        arr[j] = temp;
      }

      gap = Math.floor(gap / 2);
    }

    return arr;
  }
}


ShellSort.runSort();
