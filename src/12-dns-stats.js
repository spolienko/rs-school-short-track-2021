/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

// function reverseStr(str) {
//   return str.split('.').reverse().join('.');
// }

// function substringSearch(array) {
//   const objDomains = {};
//   for (let i = 0; i < array.length; i++) {
//     let count = 0;
//     for (let y = 1; y < array[i].length; y++) {
//       if (array[i][y] !== '.') {
//         count++;
//       }
//       const key = array[i][y].splice(y - count, count + 1);
//       if (objDomains.hasOwnProperty(key) === false) {
//         objDomains[key] = 1;
//       }
//     }
//   }
//   return objDomains;
// }

// function getDNSStats(domains) {
//   let array = domains;
//   array = array.map((element) => reverseStr(element));
//   const obj = substringSearch(array);
// }

function getDNSStats(/* domains */) {
  throw new Error('Not implemented');
}

module.exports = getDNSStats;
