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


/**
 * arr1とarr2の両方に存在する数値がある場合に、
 * その数値の数が小さい方の配列からその数値を削除した新しい配列を返す
 * @param {number[]} arr1 整数値配列
 * @param {number[]} arr2 整数値配列
 * @returns {{ arr1: number[], arr2: number[] }} 処理後の2つの整数値配列を持つオブジェクト
 */
function minCountRemove(arr1, arr2) {
  const arr1CountMap = {};
  const arr2CountMap = {};

  for (const num of arr1) {
    if (arr1CountMap[num]) arr1CountMap[num]++;
    else arr1CountMap[num] = 1;
  }
  for (const num of arr2) {
    if (arr2CountMap[num]) arr2CountMap[num]++;
    else arr2CountMap[num] = 1;
  }

  for (const num in arr1CountMap) {
    const arr1Count = arr1CountMap[num];
    const arr2Count = arr2CountMap[num];

    if (arr2Count) {
      if (arr1Count < arr2Count) {
        arr1 = arr1.filter(_num => _num != num);
      } else if (arr1Count > arr2Count) {
        arr2 = arr2.filter(_num => _num != num);
      }
    }
  }

  return { arr1, arr2 };
}

const arr1 = [1, 2, 3, 4, 4, 5, 5, 8, 10];
const arr2 = [4, 5, 5, 5, 6, 7, 8, 8, 10];
const { arr1: _arr1, arr2: _arr2 } = minCountRemove(arr1, arr2);
console.log(_arr1); // [1, 2, 3, 4, 4, 10]
console.log(_arr2); // [5, 5, 5, 6, 7, 8, 8, 10]
