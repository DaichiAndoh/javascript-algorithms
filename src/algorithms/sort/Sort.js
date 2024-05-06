class Sort {
  static sort(arr) {
    return arr;
  };

  static runSort(len = 10) {
    const arr = this._generateRandomArr(len);
    console.log('befor:', arr);
    this.sort(arr);
    console.log('after:', arr);
    if (this._isSorted(arr)) {
      console.log('array is sorted!');
    } else {
      console.log('array is not sorted. sort function is incorrect.');
    }
  }

  static _generateRandomArr(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(Math.floor(Math.random() * 1001));
    }
    return arr;
  }

  static _isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Sort;
