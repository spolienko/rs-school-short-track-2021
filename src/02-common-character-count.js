/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function searchSymbol(sym, array) {
  let flag = false;
  const index = array.indexOf(sym);
  if (index !== -1) {
    flag = true;
    array.splice(index, 1);
  }
  return flag;
}

function getCommonCharacterCount(s1, s2) {
  const array = s1.split('');
  let count = 0;
  for (let i = 0; i < s2.length; i++) {
    if (searchSymbol(s2[i], array, i)) {
      count++;
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
