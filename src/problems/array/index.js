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


/**
 * 文字列配列の配列を返す
 * この配列をそれぞれjoinして文字列として出力すると、元の文字列がスネーク状で出力される
 * @param {string[]} arr 文字列配列
 * @returns {string[][]} 文字列配列の配列
 */
function snakeStringV1(arr) {
  const result = [[], [], []];
  const resultIndexes = new Set([0, 1, 2]);
  let insertIndex = 1;

  for (const i in arr) {
    if (i % 4 === 1) {
      insertIndex = 0;
    } else if (i % 2 === 0) {
      insertIndex = 1;
    } else if (i % 4 === 3) {
      insertIndex = 2;
    }

    result[insertIndex].push(arr[i]);
    resultIndexes.forEach(_i => {
      if (_i !== insertIndex) {
        result[_i].push(' ');
      }
    });
  }

  return result;
}

for (const arr of snakeStringV1('0123456789')) {
  console.log(arr.join(''));
}


/**
 * 文字列配列の配列を返す
 * この配列をそれぞれjoinして文字列として出力すると、元の文字列がdepth分の幅を持つスネーク状で出力される
 * @param {string[]} arr 文字列配列
 * @param {number} depth 幅
 * @returns {string[][]} 文字列配列の配列
 */
function snakeStringV2(arr, depth) {
  const result = new Array(depth).fill().map(() => []);
  const resultIndexes = new Set([...Array(depth).keys()]);
  let insertIndex = Math.floor(depth / 2);

  const pos = (i) => i + 1;
  const neg = (i) => i - 1;

  let op = neg;

  for (const s of arr) {
    result[insertIndex].push(s);
    resultIndexes.forEach(_i => {
      if (_i !== insertIndex) {
        result[_i].push(' ');
      }
    });

    if (insertIndex <= 0) op = pos;
    if (insertIndex >= depth - 1) op = neg;
    insertIndex = op(insertIndex);
  }

  return result;
}

for (const arr of snakeStringV2('abcdefghijklmnopqrstuvwxyz', 5)) {
  console.log(arr.join(''));
}
