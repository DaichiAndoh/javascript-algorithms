/**
 * arrから合計値がvalueになるペアを返す
 * @param {number[]} arr 
 * @param {number} value 
 * @returns {number[] | null} ペア配列 or null
 */
function getPair(arr, value) {
  const cache = {};

  for (const item of arr) {
    const diff = value - item;
    if (diff in cache) {
      return [diff, item];
    }
    cache[item] = 1;
  }

  return null;
}

console.log(getPair([11, 2, 5, 9, 10, 3], 12)); // [ 2, 10 ]
console.log(getPair([11, 2, 5, 9, 10, 3], 20)); // [ 11, 9 ]
console.log(getPair([11, 2, 5, 9, 10, 3], 25)); // null


/**
 * 配列から合計値が配列の合計値の半分になるペアを返す
 * @param {number[]} arr 
 * @returns {number[] | null} ペア配列 or null
 */
function getHalfPair(arr) {
  const sumArrVals = arr.reduce((acc, curr) => acc + curr, 0);
  if (sumArrVals % 2 === 1) return null;

  const half = sumArrVals / 2;
  const cache = {};

  for (const item of arr) {
    const diff = half - item;
    if (diff in cache) {
      return [diff, item];
    }
    cache[item] = 1;
  }

  return null;
}

console.log(getHalfPair([11, 2, 5, 9, 10, 3])); // [ 11, 9 ]
console.log(getHalfPair([11, 2, 6, 9, 10, 3])); // null
