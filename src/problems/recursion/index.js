/**
 * arrの全ての順列の配列を返す
 * @param {number[]} arr 整数値配列
 * @returns {number[][]} 全ての順列の配列
 */
function getAllPermutations(arr) {
  const result = [];
  
  if (arr.length <= 1) {
    return [arr];
  }

  for (const perm of getAllPermutations(arr.slice(1))) {
    for (let i = 0; i < arr.length; i++) {
      result.push([...perm.slice(0, i), ...arr.slice(0, 1), ...perm.slice(i)]);
    }
  }

  return result;
}

console.log(getAllPermutations([1, 2, 3]));


/**
 * strが回文かどうかの判定結果を返す
 * @param {string} str 文字列
 * @returns {boolean} 判定結果（true or false）
 */
function isPalindrome(str) {
  const len = str.length;

  if (len === 0) return false;
  if (len === 1) return true;

  let start = 0;
  let end = len - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
}

console.log(isPalindrome('abc'));
console.log(isPalindrome('abcba'));
