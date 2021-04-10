/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let numbers = n.toString();
  numbers = numbers.split('');
  const minNum = Math.min.apply(null, numbers);
  const index = numbers.indexOf(minNum.toString());
  numbers.splice(index, 1);
  const result = Number(numbers.join(''));
  return result;
}

module.exports = deleteDigit;
