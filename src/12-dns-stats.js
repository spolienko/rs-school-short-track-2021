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

function getSubdomains(domains) {
  let r = [''];
  const res = [];
  for (let i = 0; i < domains.length; i++) {
    r = [r, domains[i]].join('.');
    res.push(r);
  }
  return res;
}

function creatStats(keys) {
  return Object.assign(...keys.map((value, _index, array) => (
    { [value]: array.filter((k) => k === value).length })));
}

function getDNSStats(domains) {
  if (domains.length === 0) return {};
  let keys = [];
  const d = domains.map((element) => element.split('.').reverse());
  for (let i = 0; i < d.length; i++) {
    const subdomains = getSubdomains(d[i]);
    keys = [...keys, ...subdomains];
  }
  return creatStats(keys);
}

module.exports = getDNSStats;
