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


/**
 * phoneNumberから生成できる全てのニーモニックの配列を返す
 * @param {string} phoneNumber 電話番号を示す文字列
 * @returns {string[]} 電話番号から生成できる全てのニーモニックの配列
 */
function getPhoneMnemoics(phoneNumber) {
  const NUM_ALPHABET_MAP = {
    0: '+',
    1: '@',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
  };

  const phoneNumberArr = phoneNumber.replace(/-/g, '').split('').map(n => parseInt(n));
  const candidate = [];
  const stack = [''];

  while (stack.length) {
    const alphabet = stack.pop();

    if (alphabet.length === phoneNumberArr.length) {
      candidate.push(alphabet);
    } else {
      for (const char of NUM_ALPHABET_MAP[phoneNumberArr[alphabet.length]]) {
        stack.push(alphabet + char);
      }
    }
  }

  return candidate;
}

console.log(getPhoneMnemoics('1-2-3'));
