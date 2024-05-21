/**
 * dequeの要素を逆にする
 * @param {number[]} deque デック
 * @returns {number[]} dequeの要素を逆にしたキュー
 */
function reverseDeque(deque) {
  const newDeque = [];

  while (deque.length) {
    newDeque.push(deque.pop());
  }

  return newDeque;
}

console.log(reverseDeque([1, 2, 3, 4, 5]));
