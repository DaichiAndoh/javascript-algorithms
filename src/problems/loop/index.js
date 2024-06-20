/**
 * numが素数かどうかの判定を行う
 * @param {number} num 数値
 * @returns {boolean} numが素数であればtrue, 素数でなければfalse
 */
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(3));
console.log(isPrime(19));
console.log(isPrime(137));
console.log(isPrime(120));
console.log(isPrime(125));


/**
 * matchAnswerNum分のパターン数をもつタクシー数をmaxAnswerNum分返す
 * @param {number} maxAnswerNum 取得するタクシー数の数
 * @param {number} matchAnswerNum 取得するタクシー数のパターン数
 * @returns {string} 結果文字列
 */
function getTaxicabNumbers(maxAnswerNum, matchAnswerNum) {
  const result = {};
  let gotAnswerCount = 0;
  let answer = 1;

  while (gotAnswerCount < maxAnswerNum) {
    let matchAnswerCount = 0;
    const memo = {};

    const maxParam = Math.pow(answer, 1 / 3);
    for (let i = 1; i <= maxParam; i++) {
      for (let j = i; j < maxParam; j++) {
        if (i ** 3 + j ** 3 === answer) {
          matchAnswerCount++;
          if (answer in memo) memo[answer].push([i, j]);
          else memo[answer] = [[i, j]];
        }
      }
    }

    if (matchAnswerCount === matchAnswerNum) {
      result[answer] = memo[answer];
      gotAnswerCount++;
    }

    answer++;
  }

  return JSON.stringify(result);
}

console.log(getTaxicabNumbers(2, 2));
