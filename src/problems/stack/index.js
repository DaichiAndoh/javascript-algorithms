/**
 * JSON文字列が正しいフォーマットかどうかを判定する
 * @param {string} json 
 * @returns {boolean} 結果
 */
function validateJson(json) {
  const hashmap = {'{': '}', '[': ']', '(': ')'};
  const stack = [];

  for (const char of json) {
    if (Object.keys(hashmap).includes(char)) {
      stack.push(hashmap[char]);
    } else if (Object.values(hashmap).includes(char)) {
      if (stack.length === 0 || char !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validateJson(JSON.stringify({
  a: 1,
  b: [1, 2, 3],
  c: {d: 1},
})));
console.log(validateJson(JSON.stringify({
  a: 1,
  b: [1, 2, 3],
  c: {d: 1},
}) + '{'));
