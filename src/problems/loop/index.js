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


/**
 * フェルマーの最終定理を証明する関数
 * maxNum以下のx, yで【x**exponent + y**exponent = z**exponent】が成立するx, y, zの組の配列を返す
 * @param {number} maxNum xとyの最大値
 * @param {number} exponent 指数
 * @returns {number[][]} 【x**exponent + y**exponent = z**exponent】が成立するx, y, zの組の配列
 */
function fermatLastTheorem(maxNum, exponent) {
  const result = [];
  if (exponent < 2) return result;

  for (let x = 1; x <= maxNum; x++) {
    for (let y = x + 1; y <= maxNum; y++) {
      powSum = Math.pow(x, exponent) + Math.pow(y, exponent);

      if (powSum > Number.MAX_SAFE_INTEGER) throw new Error();

      const z = Math.pow(powSum, 1 / exponent);
      if (!Number.isInteger(z)) continue;

      const zPow = Math.pow(z, exponent);
      if (zPow === powSum) result.push([x, y, z]);
    }
  }

  return result;
}

console.log(fermatLastTheorem(10, 2));
console.log(fermatLastTheorem(10, 3));


/**
 * シーザー暗号
 * strの各文字をn分ずらした文字列を返す
 * @param {string} str 文字列
 * @param {number} n 自然数
 * @returns {string} strの各文字をn分ずらした文字列
 */
function caesarCipher(str, n) {
  let result = '';
  const alphabetLen = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  n = n % alphabetLen;

  for (const char of str) {
    if (char.charCodeAt(0) >= 'A'.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
      const charCode = char.charCodeAt(0);
      const shifted =
        charCode + n > 'Z'.charCodeAt(0) ?
        charCode + n - alphabetLen :
        charCode + n;
      result += String.fromCharCode(shifted);
    } else if (char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) {
      const charCode = char.charCodeAt(0);
      const shifted =
        charCode + n > 'z'.charCodeAt(0) ?
        charCode + n - alphabetLen :
        charCode + n;
      result += String.fromCharCode(shifted);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(caesarCipher('abcde', 3)); // defgh
console.log(caesarCipher('vwxyz', 5)); // abcde
console.log(caesarCipher('Hello World!', 5)); // Mjqqt Btwqi!


/**
 * ヴィジュネル暗号
 * strをkeywordから生成したkeyで暗号化した文字列を返す
 * @param {string} str 
 * @param {string} keyword 
 * @returns {string} strをkeywordから生成したkeyで暗号化した文字列
 */
function vigenereCipher(str, keyword) {
  function genKey(keyword) {
    let key = keyword;
    const diff = str.length - keyword.length;

    for (let i = 0; i < diff; i++) {
      key += keyword[i % keyword.length];
    }

    return key;
  }

  let result = '';
  str = str.toUpperCase();
  const key = genKey(keyword);
  const alphabetLen = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 'A'.charCodeAt(0) && str.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
      const code = (str.charCodeAt(i) + key.charCodeAt(i)) % alphabetLen + 'A'.charCodeAt(0);
      result += String.fromCharCode(code);
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(vigenereCipher('HELLO WORLD', 'abc')); // NLTRV CVZRK


/**
 * 深さがdepthのパスカルの三角形を成立させるラインの配列を返す
 * @param {number} depth トライングルの深さ
 * @returns {number[]} パスカルの三角形を成立させるラインの配列
 */
function generatePascalTriangle(depth) {
  const lines = [];
  for (let i = 0; i < depth; i++) {
    lines.push(new Array(i + 1).fill(1));
  }

  for (let i = 2; i < lines.length; i++) {
    for (let j = 1; j < i; j++) {
      lines[i][j] = lines[i - 1][j - 1] + lines[i - 1][j];
    }
  }

  return lines;
}

console.log(generatePascalTriangle(5));


/**
 * triangleをトップからボトムまで辿った時に通過する数値の最小合計値（最小パス）を返す
 * @param {number[][]} triangle 三角形を示す数値配列の配列
 * @returns {number} triangleをトップからボトムまで辿った時に通過する数値の最小合計値（最小パス）
 */
function getMinPathOfTriangle(triangle) {
  const treeSum = [...triangle];

  for (let i = 1; i < triangle.length; i++) {
    const line = triangle[i];
    const linePathSum = [];

    for (let j = 0; j < line.length; j++) {
      let sumValue = line[j];

      if (j === 0) {
        sumValue += treeSum[i - 1][0];
      } else if (j === line.length - 1) {
        sumValue += treeSum[i - 1][j - 1];
      } else {
        const minValue = Math.min(treeSum[i - 1][j - 1], treeSum[i - 1][j]);
        sumValue += minValue;
      }

      linePathSum.push(sumValue);
    }

    treeSum[i] = linePathSum;
  }

  return Math.min(...treeSum[treeSum.length - 1]);
}

console.log(getMinPathOfTriangle([[1], [1, 2], [1, 2, 3]])); // 3
