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


/**
 * str内の全ての回文をまとめた配列を返す
 * @param {string} str 文字列
 * @returns {string[]} str内の全ての回文をまとめた配列
 */
function findPalindrome(str) {
  const result = [];
  const len = str.length;

  if (len === 0) return false;
  if (len === 1) return true;

  for (let i = 1; i < str.length; i++) {
    result.push(...findPalindromeHelper(str, i - 1, i + 1));
    result.push(...findPalindromeHelper(str, i - 1, i));
  }

  return result;
}

function findPalindromeHelper(str, left, right) {
  const result = [];

  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) break;
    
    result.push(str.slice(left, right + 1));
    left--;
    right++;
  }

  return result;
}

console.log(findPalindrome('abcba'));
console.log(findPalindrome('abcbabcbc'));
