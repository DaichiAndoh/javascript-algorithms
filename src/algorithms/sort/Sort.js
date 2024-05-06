class Sort {
  static sort(arr) {
    return arr;
  };

  static runSort(len = 10) {
    const arr = this._generateRandomArr(len);
    console.log('befor:', arr);
    this.sort(arr);
    console.log('after:', arr);
  }

  static _generateRandomArr(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(Math.floor(Math.random() * 1001));
    }
    return arr;
  }
}

module.exports = Sort;
