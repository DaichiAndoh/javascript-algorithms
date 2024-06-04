/**
 * arrから合計値がvalueになるペアを返す
 * @param {number[]} arr 整数値配列
 * @param {number} value 合計値
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
 * arrから合計値がarrの合計値の半分になるペアを返す
 * @param {number[]} arr 整数値配列
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


/**
 * arrから左右対称となる要素の配列を返す
 * @param {number[][]} 2つの数値を持つ配列の配列
 * @returns {number[][]} 左右対称となる要素の配列
 */
function getSymmetricPair(arr) {
  const cache = {};
  const result = [];

  for (const item of arr) {
    const [first, second] = item;
    if (second in cache && cache[second] === first) {
      result.push(item);
    } else {
      cache[first] = second;
    }
  }

  return result;
}

console.log(getSymmetricPair([[1, 2], [3, 5], [4, 7], [5, 3], [7, 4]])); // [[5, 3], [7, 4]]


/**
 * strで最も多く出現する文字を返す
 * @param {string} str 文字列
 * @returns {{ char: string, count: number }} 最も多く出現する文字とその数を持つオブジェクト
 */
function mostFrequentChar(str) {
  const countMap = {};

  for (const char of str) {
    if (countMap[char]) countMap[char]++;
    else countMap[char] = 1;
  }

  let maxChar = '';
  let maxCount = 0;

  for (const char in countMap) {
    if (countMap[char] > maxCount) {
      maxCount = countMap[char];
      maxChar = char;
    }
  }

  return { char: maxChar, count: maxCount };
}

console.log(mostFrequentChar('javascript')); // { char: 'a', count: 2 }
