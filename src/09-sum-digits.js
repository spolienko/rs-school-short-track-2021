/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function numToArray(n) {
  const number = n.toString().split('');
  const numArray = number.map(Number);
  return numArray;
}
function getSumOfDigits(n) {
  let sum = n;
  while (sum.toString().length > 1) {
    const array = numToArray(sum);
    sum = array.reduce((a, b) => a + b);
  }
  return sum;
}

module.exports = getSumOfDigits;
