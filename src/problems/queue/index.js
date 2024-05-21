/**
 * queueの要素を逆にする
 * @param {number[]} queue キュー
 * @returns {number[]} queueの要素を逆にしたキュー
 */
function reverseQueue(queue) {
  const newQueue = [];
  const stack = [];

  while (queue.length) {
    stack.push(queue.shift());
  }

  while (stack.length) {
    newQueue.push(stack.pop());
  }

  return newQueue;
}

console.log(reverseQueue([1, 2, 3, 4, 5]));
