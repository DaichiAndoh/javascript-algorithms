class CombSort {
  static sort(arr) {
    let gap = arr.length;
    let swapped = true;

    while (gap !== 1 || swapped) {
      gap = Math.floor(gap / 1.3);
      if (gap < 1) gap = 1;
      swapped = false;

      for (let i = 0; i < arr.length - gap; i++) {
        if (arr[i] > arr[i + gap]) {
          [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
          swapped = true;
        }
      }
    }

    return arr;
  }
}


const arr = [2, 4, 3, 1, 5];
console.log(CombSort.sort(arr));
