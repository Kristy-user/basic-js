const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  let result = {};
  let revers = domains.map((item) => item.split('.').reverse());
  revers.forEach((item) =>
    item.forEach(
      (dom, ind) => (result[`.${item.slice(0, ind + 1).join('.')}`] = 0)
    )
  );
  Object.keys(result).forEach((i) =>
    revers.forEach((item) =>
      item.join('.').includes(i.slice(1)) ? (result[i] += 1) : null
    )
  );
  return result;
}

module.exports = {
  getDNSStats,
};
