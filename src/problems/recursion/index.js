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
