const Search = require('./Search.js');

class LinearSearch extends Search {
  static search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return i;
    }
    return -1;
  }
}


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
LinearSearch.runSearch(arr, 6);
LinearSearch.runSearch(arr, 10);
