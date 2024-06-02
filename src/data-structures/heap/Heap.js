class Heap {
  static left(i) {
    return 2 * i + 1;
  }

  static right(i) {
    return 2 * i + 2;
  }

  static parent(i) {
    return Math.floor((i - 1) / 2);
  }
}

module.exports = Heap;
