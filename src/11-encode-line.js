/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function counterSym(str) {
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[0] === str[i]) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

function encodeLine(str) {
  let strCopy = str;
  let result = '';
  while (strCopy.length !== 0) {
    const symbol = strCopy[0];

    const count = counterSym(strCopy);
    if (count === 1) {
      result += symbol;
    } else {
      result += `${count + symbol}`;
    }
    strCopy = strCopy.substr(count);
  }
  return result;
}

module.exports = encodeLine;

module.exports = encodeLine;
