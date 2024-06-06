function _removeZero(arr) {
  if (arr[0] === 0) {
    arr.shift();
    _removeZero(arr);
  }
}

function _arrToInt(arr) {
  let result = 0;
  for (const i in arr.reverse()) {
    result += arr[i] * (10 ** i);
  }
  return result;
}

/**
 * arrの要素を数値にして、さらにプラス1した数値を返す
 * @param {number[]} arr 整数値配列
 * @returns {number} 整数値配列を数値にして、さらにプラス1した数値
 */
function arrToIntPlusOne(arr) {
  arr[arr.length - 1]++;

  for (let i = arr.length - 1; i > 0; i--) {
    if (i === 0 && arr[i] === 10) {
      arr[0] = 1;
      arr.push(0);
    } else if (arr[i] === 10) {
      arr[i] = 0;
      arr[i - 1]++;
    } else {
      break;
    }
  }

  _removeZero(arr);
  return _arrToInt(arr);
}

console.log(arrToIntPlusOne([1, 2, 3])); // 124
console.log(arrToIntPlusOne([3, 8, 9, 9])); // 3900
console.log(arrToIntPlusOne([9, 9, 9, 9, 9, 9])); // 1000000
