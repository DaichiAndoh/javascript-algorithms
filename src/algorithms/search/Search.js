class Search {
  static search(arr, value) {
    console.log(arr, value);
  };

  static runSearch(arr, value) {
    console.log('arr:', arr);
    console.log('value:', value);
    console.log('==========');

    const result = this.search(arr, value);
    console.log('result:', result);
    if (result > -1) {
      console.log('value is found!\n');
    } else {
      console.log('value is not found.\n');
    }
  }
}

module.exports = Search;
