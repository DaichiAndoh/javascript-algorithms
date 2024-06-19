/**
 * numが素数かどうかの判定を行う
 * @param {number} num 数値
 * @returns numが素数であればtrue, 素数でなければfalse
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
